/**
 * SchemeSetu Deterministic Eligibility Engine
 * 
 * CORE PRINCIPLE:
 * The eligibility evaluation is 100% deterministic, rule-based, and explainable.
 * No generative LLM or fuzzy guesses are used to decide financial eligibility or rules.
 * Every rule check produces an explicit PASS/FAIL/WARNING result with human-readable rationale.
 */

import { 
  BeneficiaryProfile, 
  ProjectDetails, 
  Scheme, 
  EligibilityResult, 
  RuleCheck 
} from '../types';
import { formatINR } from '../utils/formatters';

export function evaluateSchemeEligibility(
  scheme: Scheme,
  beneficiary: BeneficiaryProfile,
  project: ProjectDetails
): EligibilityResult {
  const ruleChecks: RuleCheck[] = [];
  const disqualifyingReasons: string[] = [];
  const reasons: string[] = [];
  const missingInformation: string[] = [];

  // Parse numeric values safely
  const ageNum = parseInt(beneficiary.age, 10);
  const incomeNum = parseFloat((beneficiary.annualFamilyIncome || '').replace(/[^0-9.-]+/g, ''));
  const totalCostNum = parseFloat((project.totalProjectCost || '').replace(/[^0-9.-]+/g, '')) || 0;
  const ownContribNum = parseFloat((project.ownContribution || '').replace(/[^0-9.-]+/g, '')) || 0;
  const requiredFinancingNum = Math.max(0, totalCostNum - ownContribNum);

  // --------------------------------------------------------------------------
  // RULE 10: Check for Missing Critical Profile Information
  // --------------------------------------------------------------------------
  const missingFields: string[] = [];
  if (!beneficiary.fullName?.trim()) missingFields.push('Full Name');
  if (isNaN(ageNum)) missingFields.push('Age');
  if (!beneficiary.state) missingFields.push('State');
  if (!beneficiary.socialCategory) missingFields.push('Social Category');
  if (isNaN(incomeNum)) missingFields.push('Annual Family Income');
  if (!project.projectName?.trim()) missingFields.push('Project Name');
  if (!project.projectType) missingFields.push('Project Type');
  if (totalCostNum <= 0) missingFields.push('Total Project Cost');

  if (missingFields.length > 0) {
    missingFields.forEach(f => missingInformation.push(f));
    ruleChecks.push({
      rule: 'Profile Information Completeness',
      ruleCode: 'PROFILE_COMPLETENESS',
      result: 'FAIL',
      explanation: `Missing mandatory assessment details: ${missingFields.join(', ')}. Please update your profile.`,
      details: 'Required information is incomplete.',
      params: { fields: missingFields.join(', ') }
    });
    disqualifyingReasons.push(`Incomplete profile: Missing ${missingFields.join(', ')}.`);
  } else {
    ruleChecks.push({
      rule: 'Profile Information Completeness',
      ruleCode: 'PROFILE_COMPLETENESS',
      result: 'PASS',
      explanation: 'All mandatory profile and project parameters are provided.',
      details: 'Complete profile.'
    });
  }

  // --------------------------------------------------------------------------
  // RULE 1: Social Category & Gender Compatibility
  // --------------------------------------------------------------------------
  let categoryEligible = false;
  let categoryExplanation = '';
  let categoryParams: Record<string, string | number> | undefined = undefined;

  const isWomen = beneficiary.gender === 'Female';
  const isSC = beneficiary.socialCategory === 'Scheduled Caste (SC)';
  const isST = beneficiary.socialCategory === 'Scheduled Tribe (ST)';

  // Special case: Stand-Up India (SC, ST OR Female of any category)
  if (scheme.id === 'stand-up-india') {
    if (isSC || isST || isWomen) {
      categoryEligible = true;
      const basis = isSC ? 'Scheduled Caste (SC)' : isST ? 'Scheduled Tribe (ST)' : 'Women Entrepreneur';
      categoryExplanation = `Eligible under Stand-Up India mandate as a ${basis}.`;
      categoryParams = { basis };
    } else {
      categoryEligible = false;
      categoryExplanation = 'Stand-Up India requires the entrepreneur to be either SC, ST, or a Woman of any category.';
    }
  } 
  // Special case: Mahila Samriddhi (Strictly Female AND OBC/EWS)
  else if (scheme.id === 'mahila-samriddhi') {
    const isCategoryMatch = scheme.beneficiaryCategories.includes(beneficiary.socialCategory);
    if (!isWomen) {
      categoryEligible = false;
      categoryExplanation = 'Mahila Samriddhi Yojana is exclusively reserved for women entrepreneurs.';
    } else if (!isCategoryMatch) {
      categoryEligible = false;
      categoryExplanation = `Applicant social category (${beneficiary.socialCategory || 'None'}) is not covered. Scheme is focused on Backward Classes (OBC/EWS).`;
      categoryParams = { category: beneficiary.socialCategory || 'None' };
    } else {
      categoryEligible = true;
      categoryExplanation = `Eligible woman entrepreneur under ${beneficiary.socialCategory} category.`;
      categoryParams = { category: beneficiary.socialCategory };
    }
  }
  // General Category Check
  else {
    if (scheme.beneficiaryCategories.includes(beneficiary.socialCategory)) {
      categoryEligible = true;
      categoryExplanation = `Applicant category (${beneficiary.socialCategory}) is eligible for this scheme.`;
      categoryParams = { category: beneficiary.socialCategory };
    } else {
      categoryEligible = false;
      categoryExplanation = `Scheme is exclusively for ${scheme.beneficiaryCategories.join(', ')}. Applicant category (${beneficiary.socialCategory || 'Not specified'}) is not eligible.`;
      categoryParams = { categories: scheme.beneficiaryCategories.join(', '), category: beneficiary.socialCategory || 'Not specified' };
    }
  }

  if (categoryEligible) {
    ruleChecks.push({
      rule: 'Category & Beneficiary Eligibility',
      ruleCode: 'CATEGORY_ELIGIBILITY',
      result: 'PASS',
      explanation: categoryExplanation,
      params: categoryParams
    });
    reasons.push(categoryExplanation);
  } else {
    ruleChecks.push({
      rule: 'Category & Beneficiary Eligibility',
      ruleCode: 'CATEGORY_ELIGIBILITY',
      result: 'FAIL',
      explanation: categoryExplanation,
      params: categoryParams
    });
    disqualifyingReasons.push(categoryExplanation);
  }

  // --------------------------------------------------------------------------
  // RULE 2: Income Eligibility
  // --------------------------------------------------------------------------
  if (scheme.incomeLimit !== null && !isNaN(incomeNum)) {
    if (incomeNum <= scheme.incomeLimit) {
      ruleChecks.push({
        rule: 'Annual Family Income Eligibility',
        ruleCode: 'INCOME_ELIGIBILITY',
        result: 'PASS',
        explanation: `Reported annual family income (${formatINR(incomeNum)}) is within the scheme ceiling of ${formatINR(scheme.incomeLimit)}.`,
        params: { income: formatINR(incomeNum), limit: formatINR(scheme.incomeLimit) }
      });
      reasons.push(`Income (${formatINR(incomeNum)}) is within threshold limit.`);
    } else {
      const reason = `Reported annual family income (${formatINR(incomeNum)}) exceeds the scheme limit of ${formatINR(scheme.incomeLimit)}/year.`;
      ruleChecks.push({
        rule: 'Annual Family Income Eligibility',
        ruleCode: 'INCOME_ELIGIBILITY',
        result: 'FAIL',
        explanation: reason,
        params: { income: formatINR(incomeNum), limit: formatINR(scheme.incomeLimit) }
      });
      disqualifyingReasons.push(reason);
    }
  } else {
    ruleChecks.push({
      rule: 'Annual Family Income Eligibility',
      ruleCode: 'INCOME_ELIGIBILITY',
      result: 'PASS',
      explanation: 'This scheme has no upper family income limit restriction.'
    });
    reasons.push('Open to all income brackets without income ceiling.');
  }

  // --------------------------------------------------------------------------
  // RULE 3: Age Eligibility
  // --------------------------------------------------------------------------
  if (!isNaN(ageNum)) {
    if (ageNum < scheme.minAge) {
      const reason = `Applicant age (${ageNum} years) is below the minimum required age of ${scheme.minAge} years.`;
      ruleChecks.push({
        rule: 'Applicant Age Bracket',
        ruleCode: 'AGE_LIMIT',
        result: 'FAIL',
        explanation: reason,
        params: { age: ageNum, minAge: scheme.minAge }
      });
      disqualifyingReasons.push(reason);
    } else if (ageNum > scheme.maxAge) {
      const reason = `Applicant age (${ageNum} years) exceeds the maximum permitted age of ${scheme.maxAge} years for this scheme.`;
      ruleChecks.push({
        rule: 'Applicant Age Bracket',
        ruleCode: 'AGE_LIMIT',
        result: 'FAIL',
        explanation: reason,
        params: { age: ageNum, maxAge: scheme.maxAge }
      });
      disqualifyingReasons.push(reason);
    } else {
      ruleChecks.push({
        rule: 'Applicant Age Bracket',
        ruleCode: 'AGE_LIMIT',
        result: 'PASS',
        explanation: `Applicant age (${ageNum} years) is within the eligible range of ${scheme.minAge} to ${scheme.maxAge} years.`,
        params: { age: ageNum, minAge: scheme.minAge, maxAge: scheme.maxAge }
      });
    }
  }

  // --------------------------------------------------------------------------
  // RULE 4: Purpose Compatibility
  // --------------------------------------------------------------------------
  if (scheme.purposes.length === 0) {
    // E.g., Dr. Ambedkar Higher Education loan scheme
    const reason = 'Scheme is dedicated exclusively to academic education loans and does not fund commercial enterprise ventures.';
    ruleChecks.push({
      rule: 'Financing Purpose Alignment',
      ruleCode: 'PURPOSE_ALIGNMENT',
      result: 'FAIL',
      explanation: reason
    });
    disqualifyingReasons.push(reason);
  } else if (project.purposeOfFinancing && scheme.purposes.includes(project.purposeOfFinancing)) {
    ruleChecks.push({
      rule: 'Financing Purpose Alignment',
      ruleCode: 'PURPOSE_ALIGNMENT',
      result: 'PASS',
      explanation: `Financing purpose "${project.purposeOfFinancing}" is fully supported under scheme guidelines.`,
      params: { purpose: project.purposeOfFinancing }
    });
    reasons.push(`Supports financing purpose: ${project.purposeOfFinancing}`);
  } else if (project.purposeOfFinancing) {
    // Not explicitly in scheme purposes
    const reason = `Scheme does not support purpose "${project.purposeOfFinancing}". Supported purposes: ${scheme.purposes.join(', ')}.`;
    ruleChecks.push({
      rule: 'Financing Purpose Alignment',
      ruleCode: 'PURPOSE_ALIGNMENT',
      result: 'FAIL',
      explanation: reason,
      params: { purpose: project.purposeOfFinancing, supported: scheme.purposes.join(', ') }
    });
    disqualifyingReasons.push(reason);
  } else {
    ruleChecks.push({
      rule: 'Financing Purpose Alignment',
      ruleCode: 'PURPOSE_ALIGNMENT',
      result: 'WARNING',
      explanation: 'No financing purpose specified in project details.'
    });
  }

  // --------------------------------------------------------------------------
  // RULE 5: Project Type Compatibility
  // --------------------------------------------------------------------------
  if (scheme.projectTypes.length === 0) {
    // Non-enterprise scheme
    const reason = `Scheme does not support commercial enterprise project type "${project.projectType || 'General'}".`;
    ruleChecks.push({
      rule: 'Project Sector & Activity Type',
      ruleCode: 'PROJECT_SECTOR',
      result: 'FAIL',
      explanation: reason,
      params: { sector: project.projectType || 'General' }
    });
    disqualifyingReasons.push(reason);
  } else if (project.projectType && scheme.projectTypes.includes(project.projectType)) {
    ruleChecks.push({
      rule: 'Project Sector & Activity Type',
      ruleCode: 'PROJECT_SECTOR',
      result: 'PASS',
      explanation: `Project activity "${project.projectType}" is an approved sector for this scheme.`,
      params: { sector: project.projectType }
    });
    reasons.push(`Supports sector: ${project.projectType}`);
  } else if (project.projectType) {
    const reason = `Sector "${project.projectType}" is not supported by this scheme (focuses on ${scheme.projectTypes.slice(0, 3).join(', ')}).`;
    ruleChecks.push({
      rule: 'Project Sector & Activity Type',
      ruleCode: 'PROJECT_SECTOR',
      result: 'FAIL',
      explanation: reason,
      params: { sector: project.projectType, focus: scheme.projectTypes.slice(0, 3).join(', ') }
    });
    disqualifyingReasons.push(reason);
  }

  // --------------------------------------------------------------------------
  // RULE 6: Business Stage Compatibility (Greenfield vs Brownfield)
  // --------------------------------------------------------------------------
  if (scheme.businessStages.length > 0 && project.businessNature) {
    if (scheme.businessStages.includes(project.businessNature)) {
      ruleChecks.push({
        rule: 'Business Stage Compatibility',
        ruleCode: 'BUSINESS_STAGE',
        result: 'PASS',
        explanation: `Business stage "${project.businessNature}" meets scheme criteria.`,
        params: { stage: project.businessNature }
      });
      reasons.push(`Compatible with ${project.businessNature}`);
    } else {
      const reason = `Scheme is restricted to ${scheme.businessStages.join(' / ')} only. Does not support "${project.businessNature}".`;
      ruleChecks.push({
        rule: 'Business Stage Compatibility',
        ruleCode: 'BUSINESS_STAGE',
        result: 'FAIL',
        explanation: reason,
        params: { stages: scheme.businessStages.join(' / '), stage: project.businessNature }
      });
      disqualifyingReasons.push(reason);
    }
  }

  // --------------------------------------------------------------------------
  // RULE 7: Project Cost Range
  // --------------------------------------------------------------------------
  if (totalCostNum > 0) {
    if (totalCostNum < scheme.minProjectCost) {
      const reason = `Total project cost (${formatINR(totalCostNum)}) is below the scheme minimum threshold of ${formatINR(scheme.minProjectCost)}.`;
      ruleChecks.push({
        rule: 'Project Cost Bounds',
        ruleCode: 'PROJECT_COST',
        result: 'FAIL',
        explanation: reason,
        params: { cost: formatINR(totalCostNum), minCost: formatINR(scheme.minProjectCost) }
      });
      disqualifyingReasons.push(reason);
    } else if (totalCostNum > scheme.maxProjectCost) {
      const reason = `Total project cost (${formatINR(totalCostNum)}) exceeds the maximum permissible limit of ${formatINR(scheme.maxProjectCost)} for this scheme.`;
      ruleChecks.push({
        rule: 'Project Cost Bounds',
        ruleCode: 'PROJECT_COST',
        result: 'FAIL',
        explanation: reason,
        params: { cost: formatINR(totalCostNum), maxCost: formatINR(scheme.maxProjectCost) }
      });
      disqualifyingReasons.push(reason);
    } else {
      ruleChecks.push({
        rule: 'Project Cost Bounds',
        ruleCode: 'PROJECT_COST',
        result: 'PASS',
        explanation: `Total project cost (${formatINR(totalCostNum)}) is within the eligible range (${formatINR(scheme.minProjectCost)} – ${formatINR(scheme.maxProjectCost)}).`,
        params: { cost: formatINR(totalCostNum), minCost: formatINR(scheme.minProjectCost), maxCost: formatINR(scheme.maxProjectCost) }
      });
      reasons.push(`Project cost (${formatINR(totalCostNum)}) is within permissible ceiling.`);
    }
  }

  // --------------------------------------------------------------------------
  // RULE 8: Financing Requirement vs Maximum Loan Amount
  // --------------------------------------------------------------------------
  if (requiredFinancingNum > 0) {
    if (requiredFinancingNum > scheme.maxLoanAmount) {
      const reason = `Required financing (${formatINR(requiredFinancingNum)}) exceeds the scheme's maximum loan ceiling of ${formatINR(scheme.maxLoanAmount)}.`;
      ruleChecks.push({
        rule: 'Financing Amount Ceiling',
        ruleCode: 'FINANCING_CEILING',
        result: 'FAIL',
        explanation: reason,
        params: { requested: formatINR(requiredFinancingNum), maxLoan: formatINR(scheme.maxLoanAmount) }
      });
      disqualifyingReasons.push(reason);
    } else {
      ruleChecks.push({
        rule: 'Financing Amount Ceiling',
        ruleCode: 'FINANCING_CEILING',
        result: 'PASS',
        explanation: `Requested financing (${formatINR(requiredFinancingNum)}) is within the maximum loan limit of ${formatINR(scheme.maxLoanAmount)}.`,
        params: { requested: formatINR(requiredFinancingNum), maxLoan: formatINR(scheme.maxLoanAmount) }
      });
      reasons.push(`Required loan amount (${formatINR(requiredFinancingNum)}) fits comfortably within loan ceiling.`);
    }
  }

  // --------------------------------------------------------------------------
  // RULE 9: Geographic Availability
  // --------------------------------------------------------------------------
  if (scheme.applicableStates.includes('All') || scheme.applicableStates.includes(beneficiary.state)) {
    ruleChecks.push({
      rule: 'Geographic Availability',
      ruleCode: 'GEOGRAPHIC_AVAILABILITY',
      result: 'PASS',
      explanation: `Scheme operates pan-India and is active in ${beneficiary.state || 'your state'}.`,
      params: { state: beneficiary.state || 'your state' }
    });
    reasons.push(`Nationwide operational availability covering ${beneficiary.state || 'your area'}.`);
  } else {
    const reason = `Scheme is not operative in ${beneficiary.state}. Applicable states: ${scheme.applicableStates.join(', ')}.`;
    ruleChecks.push({
      rule: 'Geographic Availability',
      ruleCode: 'GEOGRAPHIC_AVAILABILITY',
      result: 'FAIL',
      explanation: reason,
      params: { state: beneficiary.state, states: scheme.applicableStates.join(', ') }
    });
    disqualifyingReasons.push(reason);
  }

  // --------------------------------------------------------------------------
  // Final Eligibility Determination
  // --------------------------------------------------------------------------
  const isEligible = disqualifyingReasons.length === 0 && missingInformation.length === 0;

  return {
    eligible: isEligible,
    reasons,
    disqualifyingReasons,
    missingInformation,
    ruleChecks
  };
}
