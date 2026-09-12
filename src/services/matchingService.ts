/**
 * SchemeSetu Central Matching Service
 * 
 * Orchestrates deterministic eligibility evaluation, missing information detection,
 * and explainable suitability ranking.
 */

import { 
  BeneficiaryProfile, 
  ProjectDetails, 
  Scheme, 
  SchemeEvaluation, 
  MatchingSummary 
} from '../types';
import { SCHEMES_DATABASE } from '../data/schemesData';
import { evaluateSchemeEligibility } from './eligibilityEngine';
import { calculateSchemeSuitability } from './suitabilityEngine';

export function matchSchemes(
  beneficiary: BeneficiaryProfile,
  project: ProjectDetails,
  schemes: Scheme[] = SCHEMES_DATABASE
): MatchingSummary {
  const evaluations: SchemeEvaluation[] = [];
  const eligibleSchemes: SchemeEvaluation[] = [];
  const ineligibleSchemes: SchemeEvaluation[] = [];
  const missingInfoSet = new Set<string>();

  for (const scheme of schemes) {
    const eligibility = evaluateSchemeEligibility(scheme, beneficiary, project);

    // Track any missing information detected
    eligibility.missingInformation.forEach(info => missingInfoSet.add(info));

    if (eligibility.eligible) {
      const suitability = calculateSchemeSuitability(scheme, beneficiary, project);
      const evaluation: SchemeEvaluation = {
        scheme,
        eligibility,
        suitability,
        isBestMatch: false
      };
      evaluations.push(evaluation);
      eligibleSchemes.push(evaluation);
    } else {
      const evaluation: SchemeEvaluation = {
        scheme,
        eligibility,
        isBestMatch: false
      };
      evaluations.push(evaluation);
      ineligibleSchemes.push(evaluation);
    }
  }

  // Sort eligible schemes from strongest to weakest suitability score
  eligibleSchemes.sort((a, b) => {
    const scoreA = a.suitability?.overallScore || 0;
    const scoreB = b.suitability?.overallScore || 0;
    return scoreB - scoreA;
  });

  // Mark best match
  let bestMatch: SchemeEvaluation | null = null;
  if (eligibleSchemes.length > 0) {
    eligibleSchemes[0].isBestMatch = true;
    bestMatch = eligibleSchemes[0];
  }

  return {
    evaluations,
    eligibleSchemes,
    ineligibleSchemes,
    bestMatch,
    missingInformation: Array.from(missingInfoSet),
    totalEvaluated: schemes.length,
    evaluatedAt: new Date().toISOString()
  };
}
