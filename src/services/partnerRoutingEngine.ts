/**
 * SchemeSetu Smart Channel Partner Routing Engine
 * 
 * Deterministic, rule-based partner matching and multi-factor ranking.
 * Implements capacity-aware routing where local branches with severe simulated
 * congestion yield precedence to regional partners with healthier processing capacity.
 */

import { 
  ChannelPartner, 
  PartnerEvaluation, 
  ExcludedPartner, 
  PartnerRoutingParams, 
  PartnerRoutingResult,
  PartnerScoreBreakdown,
  ProjectType
} from '../types';
import { PROTOTYPE_PARTNERS } from '../data/partnersData';
import { SCHEMES_DATABASE } from '../data/schemesData';

/**
 * Helper to get human-readable prototype capacity indicator key for i18n
 */
export function getCapacityIndicatorKey(
  utilizationPercent: number,
  status?: string
): 'partner.capacityFavorable' | 'partner.capacityModerate' | 'partner.capacityConstrained' {
  if (utilizationPercent <= 60 || status === 'Optimal Capacity') {
    return 'partner.capacityFavorable';
  }
  if (utilizationPercent <= 85 || status === 'Moderate Utilization') {
    return 'partner.capacityModerate';
  }
  return 'partner.capacityConstrained';
}

/**
 * Filter and rank channel partners deterministically based on application state.
 */
export function rankChannelPartners(
  params: PartnerRoutingParams,
  partnersDatabase: ChannelPartner[] = PROTOTYPE_PARTNERS
): PartnerRoutingResult {
  const {
    selectedSchemeId,
    projectType,
    requiredFinancing,
    beneficiaryState,
    beneficiaryDistrict
  } = params;

  // Retrieve scheme info for title/display
  const scheme = SCHEMES_DATABASE.find(s => s.id === selectedSchemeId) || SCHEMES_DATABASE[0];

  const compatibleEvaluations: PartnerEvaluation[] = [];
  const excludedPartners: ExcludedPartner[] = [];

  for (const partner of partnersDatabase) {
    const exclusionReasons: string[] = [];

    // 1. Scheme Compatibility Check
    const supportsScheme = partner.supportedSchemeIds.includes(selectedSchemeId);
    if (!supportsScheme) {
      exclusionReasons.push(
        `Scheme not supported: Partner does not process intake for ${scheme.name}.`
      );
    }

    // 2. Project Type Compatibility Check
    if (projectType) {
      const supportsProject = partner.supportedProjectTypes.includes(projectType);
      if (!supportsProject) {
        exclusionReasons.push(
          `Project type not supported: Partner portfolio focuses on other sectors and does not finance ${projectType}.`
        );
      }
    }

    // 3. Geographic / Service Area Compatibility Check
    const normUserDistrict = (beneficiaryDistrict || '').trim().toLowerCase();
    const normUserState = (beneficiaryState || '').trim().toLowerCase();
    const normPartnerDistrict = partner.district.trim().toLowerCase();
    const normPartnerState = partner.state.trim().toLowerCase();
    const partnerServiceAreas = partner.serviceAreas.map(a => a.trim().toLowerCase());

    const isSameDistrict = normUserDistrict && (normPartnerDistrict === normUserDistrict || partnerServiceAreas.includes(normUserDistrict));
    const isServiceAreaMatch = normUserDistrict && partnerServiceAreas.some(area => area.includes(normUserDistrict));
    const isStateMatch = normUserState && (
      normPartnerState === normUserState || 
      partnerServiceAreas.includes(normUserState) ||
      partnerServiceAreas.includes(`${normUserState} statewide`) ||
      partnerServiceAreas.includes('all')
    );

    // If state is specified and partner does NOT cover that state or service area
    if (normUserState && !isSameDistrict && !isServiceAreaMatch && !isStateMatch) {
      exclusionReasons.push(
        `Outside service area: Partner operates in ${partner.state} (${partner.serviceAreas.join(', ')}), outside ${beneficiaryState}.`
      );
    }

    // 4. Financing Amount Compatibility Check
    if (requiredFinancing > 0) {
      if (requiredFinancing < partner.minimumLoanAmount) {
        exclusionReasons.push(
          `Financing amount below partner minimum: Partner requires minimum loan ticket of ₹${partner.minimumLoanAmount.toLocaleString('en-IN')}.`
        );
      }
      if (requiredFinancing > partner.maximumLoanAmount) {
        exclusionReasons.push(
          `Financing amount exceeds partner limit: Requested loan of ₹${requiredFinancing.toLocaleString('en-IN')} exceeds partner ceiling of ₹${partner.maximumLoanAmount.toLocaleString('en-IN')}.`
        );
      }
    }

    // 5. Operational Status Check
    if (partner.operationalStatus === 'Processing Suspended') {
      exclusionReasons.push(
        `Operational issue: Branch intake is temporarily suspended for administrative reconciliation or annual portfolio review.`
      );
    }

    // 6. Capacity Status Check
    if (partner.capacityUtilizationPercent >= 95) {
      exclusionReasons.push(
        `Capacity constraint: Branch has reached maximum simulated queue capacity and paused new intake.`
      );
    }

    // Decision: Exclude or Evaluate
    if (exclusionReasons.length > 0) {
      excludedPartners.push({
        partner,
        reasons: exclusionReasons
      });
    } else {
      // Calculate deterministic score (0 - 100)
      const evaluation = evaluateCompatiblePartner(
        partner,
        selectedSchemeId,
        projectType,
        requiredFinancing,
        beneficiaryState,
        beneficiaryDistrict
      );
      compatibleEvaluations.push(evaluation);
    }
  }

  // Sort compatible partners descending by score
  compatibleEvaluations.sort((a, b) => b.score - a.score);

  // Determine distance tier and construct recommendation explanation for the winner
  if (compatibleEvaluations.length > 0) {
    const top = compatibleEvaluations[0];
    const topPartner = top.partner;

    let explanation = '';
    const hasHealthyCapacity = topPartner.capacityUtilizationPercent <= 60;
    const isLocal = top.distanceTier === 'Same District';

    if (hasHealthyCapacity && !isLocal) {
      explanation = `Recommended because this partner has strong scheme and project compatibility, suitable geographic coverage, and a favorable prototype capacity indicator.`;
    } else if (hasHealthyCapacity && isLocal) {
      explanation = `Recommended because this partner combines direct local presence in ${topPartner.district} with strong scheme compatibility, suitable geographic coverage, and a favorable prototype capacity indicator.`;
    } else {
      explanation = `Recommended because this partner achieves the highest combined score across scheme alignment, project compatibility, and operational capability.`;
    }

    top.recommendationExplanation = explanation;
  }

  // Split into recommended (top 1) and alternatives (next 2)
  const recommendedPartner = compatibleEvaluations.length > 0 ? compatibleEvaluations[0] : null;
  const alternativePartners = compatibleEvaluations.slice(1, 3);

  return {
    recommendedPartner,
    alternativePartners,
    allCompatible: compatibleEvaluations,
    excludedPartners,
    totalEvaluated: partnersDatabase.length,
    querySummary: {
      schemeId: selectedSchemeId,
      schemeName: scheme.name,
      projectType,
      requiredFinancing,
      beneficiaryState: beneficiaryState || 'All / Unspecified',
      beneficiaryDistrict: beneficiaryDistrict || 'All / Unspecified'
    }
  };
}

/**
 * Deterministic scoring engine with weights:
 * Scheme compatibility: 30
 * Project compatibility: 20
 * Geographic fit: 20
 * Capacity status: 15
 * Financing compatibility: 10
 * Operational status: 5
 * Total = 100
 */
function evaluateCompatiblePartner(
  partner: ChannelPartner,
  selectedSchemeId: string,
  projectType: ProjectType,
  requiredFinancing: number,
  beneficiaryState: string,
  beneficiaryDistrict: string
): PartnerEvaluation {
  const reasons: string[] = [];
  const warnings: string[] = [];

  // 1. Scheme Compatibility (30 pts)
  let schemeScore = 0;
  if (partner.supportedSchemeIds.includes(selectedSchemeId)) {
    schemeScore = 30;
    reasons.push('Full scheme accreditation and active nodal processing window.');
  }

  // 2. Project Compatibility (20 pts)
  let projectScore = 0;
  if (projectType && partner.supportedProjectTypes.includes(projectType)) {
    projectScore = 20;
    reasons.push(`Direct portfolio specialization in ${projectType}.`);
  } else if (!projectType) {
    projectScore = 15;
  }

  // 3. Geographic Fit (20 pts)
  let geoScore = 12; // Baseline statewide/regional
  let distanceTier: 'Same District' | 'Regional / Service Area' | 'Statewide Unit' | 'Out of Area' = 'Statewide Unit';

  const normUserDistrict = (beneficiaryDistrict || '').trim().toLowerCase();
  const normUserState = (beneficiaryState || '').trim().toLowerCase();
  const normPartnerDistrict = partner.district.trim().toLowerCase();
  const normPartnerState = partner.state.trim().toLowerCase();
  const serviceAreasLower = partner.serviceAreas.map(a => a.trim().toLowerCase());

  if (normUserDistrict && (normPartnerDistrict === normUserDistrict)) {
    geoScore = 20;
    distanceTier = 'Same District';
    reasons.push(`Direct local presence in ${partner.district} district.`);
  } else if (normUserDistrict && serviceAreasLower.some(a => a.includes(normUserDistrict))) {
    geoScore = 17;
    distanceTier = 'Regional / Service Area';
    reasons.push(`Designated service area coverage for ${beneficiaryDistrict} district.`);
  } else if (normUserState && (normPartnerState === normUserState || serviceAreasLower.includes(`${normUserState} statewide`))) {
    geoScore = 14;
    distanceTier = 'Statewide Unit';
    reasons.push(`State-level specialized MSME hub servicing ${partner.state}.`);
  } else {
    geoScore = 11;
    distanceTier = 'Regional / Service Area';
  }

  // 4. Capacity Status (15 pts) — Capacity-aware routing factor
  let capacityScore = 0;
  const util = partner.capacityUtilizationPercent;

  if (util <= 40) {
    capacityScore = 15;
    reasons.push(`Optimal prototype capacity enables favorable file processing.`);
  } else if (util <= 60) {
    capacityScore = 12;
    reasons.push(`Favorable operational load with balanced prototype processing capacity.`);
  } else if (util <= 75) {
    capacityScore = 9;
    reasons.push(`Moderate prototype capacity indicator.`);
  } else if (util <= 85) {
    capacityScore = 5;
    warnings.push(`Elevated branch workload may cause processing delays.`);
  } else {
    capacityScore = 2;
    warnings.push(`Constrained prototype capacity with slower intake turnaround.`);
  }

  // 5. Financing Compatibility (10 pts)
  let financingScore = 8;
  if (requiredFinancing > 0) {
    const range = partner.maximumLoanAmount - partner.minimumLoanAmount;
    const relPos = (requiredFinancing - partner.minimumLoanAmount) / (range || 1);
    // Sweet spot between 15% and 80% of partner limit
    if (relPos >= 0.15 && relPos <= 0.85) {
      financingScore = 10;
      reasons.push('Requested financing aligns well with partner’s standard sanction range.');
    } else {
      financingScore = 7;
      warnings.push('Financing amount near the outer boundary of partner ticket limits.');
    }
  } else {
    financingScore = 9;
  }

  // 6. Operational Status (5 pts)
  let opScore = 5;
  if (partner.operationalStatus === 'Active & Processing') {
    opScore = 5;
    reasons.push('Active daily intake without administrative holds.');
  } else if (partner.operationalStatus === 'Operational - Minor Delays') {
    opScore = 3;
    warnings.push('Branch reports slight administrative backlog.');
  } else {
    opScore = 0;
  }

  const totalScore = Math.min(100, Math.round(
    schemeScore + projectScore + geoScore + capacityScore + financingScore + opScore
  ));

  const breakdown: PartnerScoreBreakdown = {
    schemeCompatibility: schemeScore,
    projectCompatibility: projectScore,
    geographicFit: geoScore,
    capacityStatus: capacityScore,
    financingCompatibility: financingScore,
    operationalStatus: opScore
  };

  return {
    partner,
    score: totalScore,
    eligible: true,
    reasons,
    warnings,
    scoreBreakdown: breakdown,
    distanceTier
  };
}
