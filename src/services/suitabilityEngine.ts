/**
 * SchemeSetu Suitability Ranking Engine
 * 
 * CORE PRINCIPLE:
 * For schemes that pass the deterministic eligibility evaluation, this engine
 * calculates an explainable, weighted "SchemeSetu Suitability Score" (0–100).
 * 
 * DISCLAIMER / TRANSPARENCY:
 * This is a prototype matching score, not an official eligibility or loan approval score.
 * Official bank credit sanctioning depends on independent branch appraisal and documentation.
 */

import { 
  BeneficiaryProfile, 
  ProjectDetails, 
  Scheme, 
  SchemeSuitability, 
  SuitabilityScoreBreakdown 
} from '../types';

export function calculateSchemeSuitability(
  scheme: Scheme,
  beneficiary: BeneficiaryProfile,
  project: ProjectDetails
): SchemeSuitability {
  const breakdown: SuitabilityScoreBreakdown = {
    purposeMatch: 0,
    projectTypeMatch: 0,
    financingFit: 0,
    projectCostFit: 0,
    beneficiaryFit: 0,
    businessStageFit: 0,
    locationFit: 0
  };

  const strengths: string[] = [];
  const considerations: string[] = [];

  const totalCostNum = parseFloat((project.totalProjectCost || '').replace(/[^0-9.-]+/g, '')) || 0;
  const ownContribNum = parseFloat((project.ownContribution || '').replace(/[^0-9.-]+/g, '')) || 0;
  const requiredFinancingNum = Math.max(0, totalCostNum - ownContribNum);
  const isRural = project.preferredLocation === 'Rural';
  const isSpecialCategory = [
    'Scheduled Caste (SC)',
    'Scheduled Tribe (ST)',
    'Other Backward Class (OBC)',
    'Economically Weaker Section (EWS)',
    'Minority Community'
  ].includes(beneficiary.socialCategory) || beneficiary.gender === 'Female';

  // 1. Purpose Match (max 20)
  if (project.purposeOfFinancing && scheme.purposes.includes(project.purposeOfFinancing)) {
    breakdown.purposeMatch = 20;
    strengths.push(`Direct alignment with your financing purpose (${project.purposeOfFinancing}).`);
  } else {
    breakdown.purposeMatch = 12;
  }

  // 2. Project Type Match (max 20)
  if (project.projectType && scheme.projectTypes.includes(project.projectType)) {
    // Check if it's the primary focus of the scheme
    if (
      (project.projectType === 'Logistics & Transport' && scheme.id === 'nbcfdc-transport') ||
      (project.projectType === 'Handicrafts & Handloom' && (scheme.id === 'pmegp' || scheme.id === 'nsfdc-term-loan')) ||
      (project.projectType === 'Agro-processing & Food Products' && scheme.id === 'pmegp')
    ) {
      breakdown.projectTypeMatch = 20;
      strengths.push(`Specialized focus area for ${project.projectType}.`);
    } else {
      breakdown.projectTypeMatch = 17;
      strengths.push(`Covers the ${project.projectType} sector.`);
    }
  } else {
    breakdown.projectTypeMatch = 10;
  }

  // 3. Financing Amount Fit (max 20)
  if (scheme.maxLoanAmount > 0 && requiredFinancingNum > 0) {
    const loanRatio = requiredFinancingNum / scheme.maxLoanAmount;
    if (loanRatio >= 0.1 && loanRatio <= 0.85) {
      breakdown.financingFit = 20;
      strengths.push(`Required loan fits comfortably within the scheme's maximum loan cap.`);
    } else if (loanRatio <= 1.0) {
      breakdown.financingFit = 16;
      considerations.push('Requested financing is close to the scheme maximum loan ceiling.');
    } else {
      breakdown.financingFit = 8;
    }
  }

  // 4. Project Cost Fit (max 15)
  if (totalCostNum >= scheme.minProjectCost && totalCostNum <= scheme.maxProjectCost) {
    breakdown.projectCostFit = 15;
    strengths.push('Project capital expenditure fits the approved investment limits.');
  } else {
    breakdown.projectCostFit = 10;
  }

  // 5. Beneficiary Demographics Fit (max 15)
  if (scheme.id === 'nsfdc-term-loan' && beneficiary.socialCategory === 'Scheduled Caste (SC)') {
    breakdown.beneficiaryFit = 15;
    strengths.push('Dedicated apex corporation finance with concessional 6%–8% p.a. interest rates for SC entrepreneurs.');
  } else if (scheme.id === 'stand-up-india' && (beneficiary.socialCategory === 'Scheduled Caste (SC)' || beneficiary.socialCategory === 'Scheduled Tribe (ST)' || beneficiary.gender === 'Female')) {
    breakdown.beneficiaryFit = 15;
    strengths.push('Priority statutory bank branch target under Stand-Up India mandate.');
  } else if (scheme.id === 'pmegp' && isSpecialCategory && isRural) {
    breakdown.beneficiaryFit = 15;
    strengths.push('Eligible for maximum 35% back-ended capital subsidy under special rural category norms.');
  } else if (scheme.id === 'pmegp' && isSpecialCategory) {
    breakdown.beneficiaryFit = 14;
    strengths.push('Eligible for 25% capital subsidy under special urban category norms.');
  } else if (scheme.id === 'mahila-samriddhi' && beneficiary.gender === 'Female') {
    breakdown.beneficiaryFit = 15;
    strengths.push('Tailored micro-credit with deeply subsidized 4% p.a. interest rate for women.');
  } else {
    breakdown.beneficiaryFit = 12;
  }

  // 6. Business Stage Fit (max 5)
  if (project.businessNature && scheme.businessStages.includes(project.businessNature)) {
    breakdown.businessStageFit = 5;
    strengths.push(`Well-structured for ${project.businessNature}.`);
  } else {
    breakdown.businessStageFit = 3;
  }

  // 7. Location & Operational Fit (max 5)
  if (isRural && scheme.id === 'pmegp') {
    breakdown.locationFit = 5;
    strengths.push('Higher subsidy slab applies to rural enterprise locations.');
  } else {
    breakdown.locationFit = 5;
  }

  // Additional considerations based on scheme nature
  if (scheme.moratoriumMonths > 0) {
    considerations.push(`Includes a ${scheme.moratoriumMonths}-month repayment moratorium period.`);
  }
  if (scheme.ownContributionRequirement) {
    considerations.push(`Promoter equity guideline: ${scheme.ownContributionRequirement}.`);
  }
  if (scheme.verificationStatus === 'Prototype scheme data') {
    considerations.push('Prototype data model: verify exact current terms at official portal before applying.');
  }

  const overallScore = Math.min(
    100,
    breakdown.purposeMatch +
    breakdown.projectTypeMatch +
    breakdown.financingFit +
    breakdown.projectCostFit +
    breakdown.beneficiaryFit +
    breakdown.businessStageFit +
    breakdown.locationFit
  );

  return {
    overallScore,
    scoreBreakdown: breakdown,
    strengths: strengths.slice(0, 4), // top 3-4 strengths
    considerations: considerations.slice(0, 3) // top 2-3 considerations
  };
}
