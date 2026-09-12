/**
 * SchemeSetu Deterministic Financial Calculation Engine
 * 
 * CORE PRINCIPLES:
 * 1. Pure deterministic mathematical code — ZERO probabilistic or LLM-based arithmetic.
 * 2. Standard reducing-balance monthly EMI formula:
 *    EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
 *    where r = annual rate / 12 / 100, n = tenure in months.
 *    If annual rate == 0: EMI = P / n.
 * 3. Safe handling for zero interest, zero loan amount, invalid tenure, invalid rates, negative numbers.
 * 4. Never produce NaN, Infinity, undefined, or null in the UI.
 * 5. Clear disclaimer: "This is an illustrative estimate, not a loan approval or official quotation."
 */

import { 
  EMICalculationResult, 
  AffordabilityResult, 
  AffordabilityLevel, 
  FinancingGapResult, 
  TenureScenario, 
  SimulationValidationErrors 
} from '../types';

/**
 * Calculates reducing balance monthly EMI and loan repayment totals.
 */
export function calculateEMI(
  principal: number,
  annualInterestRate: number,
  tenureMonths: number,
  moratoriumMonths = 0,
  totalProjectCost = 0,
  ownContribution = 0
): EMICalculationResult {
  // Safe normalization of input numbers
  const safePrincipal = Math.max(0, isNaN(principal) ? 0 : Number(principal));
  const safeRate = Math.max(0, isNaN(annualInterestRate) ? 0 : Number(annualInterestRate));
  const safeTenure = Math.max(1, isNaN(tenureMonths) ? 1 : Math.round(Number(tenureMonths)));
  const safeMoratorium = Math.max(0, isNaN(moratoriumMonths) ? 0 : Math.round(Number(moratoriumMonths)));
  const safeProjectCost = Math.max(0, isNaN(totalProjectCost) ? 0 : Number(totalProjectCost));
  const safeOwnContrib = Math.max(0, isNaN(ownContribution) ? 0 : Number(ownContribution));

  // Default fallback if principal is zero
  if (safePrincipal <= 0) {
    const finPct = safeProjectCost > 0 ? 0 : 0;
    const ownPct = safeProjectCost > 0 ? Math.min(100, Math.round((safeOwnContrib / safeProjectCost) * 1000) / 10) : 0;
    return {
      principal: 0,
      annualInterestRate: safeRate,
      tenureMonths: safeTenure,
      monthlyEMI: 0,
      totalInterest: 0,
      totalRepayment: 0,
      financingPercentage: finPct,
      ownContributionPercentage: ownPct,
      moratoriumMonths: safeMoratorium,
      isValid: true
    };
  }

  let monthlyEMI = 0;
  let totalRepayment = 0;
  let totalInterest = 0;

  if (safeRate === 0) {
    // Zero interest loan / 100% subsidized interest
    monthlyEMI = safePrincipal / safeTenure;
    totalRepayment = safePrincipal;
    totalInterest = 0;
  } else {
    // Monthly interest rate
    const r = safeRate / (12 * 100);
    const n = safeTenure;
    
    // (1 + r)^n
    const compoundFactor = Math.pow(1 + r, n);
    
    if (compoundFactor === 1 || isNaN(compoundFactor) || !isFinite(compoundFactor)) {
      // Fallback in edge case
      monthlyEMI = safePrincipal / safeTenure;
      totalRepayment = safePrincipal;
      totalInterest = 0;
    } else {
      monthlyEMI = (safePrincipal * r * compoundFactor) / (compoundFactor - 1);
      totalRepayment = monthlyEMI * n;
      totalInterest = Math.max(0, totalRepayment - safePrincipal);
    }
  }

  // Guard against non-finite or negative values
  monthlyEMI = isFinite(monthlyEMI) && !isNaN(monthlyEMI) ? Math.round(monthlyEMI) : 0;
  totalRepayment = isFinite(totalRepayment) && !isNaN(totalRepayment) ? Math.round(totalRepayment) : 0;
  totalInterest = isFinite(totalInterest) && !isNaN(totalInterest) ? Math.round(totalInterest) : 0;

  // Percentage calculations
  let financingPercentage = 0;
  let ownContributionPercentage = 0;
  if (safeProjectCost > 0) {
    financingPercentage = Math.min(100, Math.max(0, Math.round((safePrincipal / safeProjectCost) * 1000) / 10));
    ownContributionPercentage = Math.min(100, Math.max(0, Math.round((safeOwnContrib / safeProjectCost) * 1000) / 10));
  }

  return {
    principal: safePrincipal,
    annualInterestRate: safeRate,
    tenureMonths: safeTenure,
    monthlyEMI,
    totalInterest,
    totalRepayment,
    financingPercentage,
    ownContributionPercentage,
    moratoriumMonths: safeMoratorium,
    isValid: true
  };
}

/**
 * Calculates an illustrative educational repayment burden indicator.
 * Strictly educational heuristic based on reported annual/monthly family income.
 */
export function calculateAffordability(
  monthlyEMI: number,
  annualFamilyIncomeStr: string
): AffordabilityResult {
  const cleanStr = (annualFamilyIncomeStr || '').replace(/[^0-9.-]+/g, '');
  const annualIncome = parseFloat(cleanStr);

  if (isNaN(annualIncome) || annualIncome <= 0) {
    return {
      level: 'UNKNOWN',
      repaymentBurdenPercent: null,
      monthlyIncome: null,
      monthlyEMI,
      statusLabel: 'Income Not Specified',
      message: 'Affordability cannot be estimated until income information is provided.'
    };
  }

  const monthlyIncome = annualIncome / 12;
  if (monthlyIncome <= 0 || isNaN(monthlyIncome)) {
    return {
      level: 'UNKNOWN',
      repaymentBurdenPercent: null,
      monthlyIncome: null,
      monthlyEMI,
      statusLabel: 'Invalid Income',
      message: 'Affordability cannot be estimated until valid income information is provided.'
    };
  }

  const repaymentBurdenPercent = Math.round((monthlyEMI / monthlyIncome) * 1000) / 10;

  let level: AffordabilityLevel = 'LOW';
  let statusLabel = 'Low Repayment Burden';
  let message = '';

  if (repaymentBurdenPercent <= 30) {
    level = 'LOW';
    statusLabel = 'Low Burden (< 30% of Income)';
    message = `Estimated installment represents approximately ${repaymentBurdenPercent}% of your reported monthly income. Generally considered a sustainable debt-service ratio for enterprise financing.`;
  } else if (repaymentBurdenPercent <= 50) {
    level = 'MODERATE';
    statusLabel = 'Moderate Burden (30% – 50% of Income)';
    message = `Estimated installment represents ${repaymentBurdenPercent}% of your reported monthly income. Consider discussing a longer tenure with the lender to soften initial monthly cashflow pressure.`;
  } else {
    level = 'HIGHER';
    statusLabel = 'Higher Burden (> 50% of Income)';
    message = `Estimated installment represents ${repaymentBurdenPercent}% of your reported monthly income. It is strongly advised to review a longer repayment tenure or increase promoter margin equity to reduce debt burden.`;
  }

  return {
    level,
    repaymentBurdenPercent,
    monthlyIncome: Math.round(monthlyIncome),
    monthlyEMI,
    statusLabel,
    message
  };
}

/**
 * Checks if requested financing exceeds scheme prototype ceiling and calculates gap.
 */
export function calculateFinancingGap(
  requiredFinancing: number,
  maxLoanAmount: number
): FinancingGapResult {
  const safeReq = Math.max(0, isNaN(requiredFinancing) ? 0 : Number(requiredFinancing));
  const safeMax = Math.max(0, isNaN(maxLoanAmount) ? 0 : Number(maxLoanAmount));

  if (safeMax > 0 && safeReq > safeMax) {
    const gapAmount = safeReq - safeMax;
    return {
      hasGap: true,
      requiredFinancing: safeReq,
      maxLoanAmount: safeMax,
      gapAmount,
      warningMessage: 'Your requested financing is above this scheme\'s prototype maximum.'
    };
  }

  return {
    hasGap: false,
    requiredFinancing: safeReq,
    maxLoanAmount: safeMax,
    gapAmount: 0
  };
}

/**
 * Generates 3 tenure scenarios (Shorter, Recommended, Longer) to illustrate the
 * trade-off between higher monthly EMI with lower interest vs. lower EMI with higher interest.
 */
export function generateTenureScenarios(
  principal: number,
  annualInterestRate: number,
  currentTenureMonths: number
): TenureScenario[] {
  const safeTenure = Math.max(12, isNaN(currentTenureMonths) ? 60 : Math.round(currentTenureMonths));

  // Determine shorter, recommended, and longer options
  let shorterMonths = 36;
  let recMonths = safeTenure;
  let longerMonths = 84;

  if (safeTenure <= 36) {
    shorterMonths = 24;
    recMonths = safeTenure;
    longerMonths = 48;
  } else if (safeTenure >= 84) {
    shorterMonths = 60;
    recMonths = safeTenure;
    longerMonths = Math.min(180, safeTenure + 36);
  } else {
    shorterMonths = Math.max(24, Math.round(safeTenure * 0.6 / 12) * 12);
    recMonths = safeTenure;
    longerMonths = Math.min(180, Math.round(safeTenure * 1.4 / 12) * 12);
  }

  // Ensure strict inequality
  if (shorterMonths >= recMonths) shorterMonths = Math.max(12, recMonths - 12);
  if (longerMonths <= recMonths) longerMonths = recMonths + 24;

  const baselineCalc = calculateEMI(principal, annualInterestRate, recMonths);

  const configs = [
    {
      id: 'shorter',
      label: `Shorter Tenure (${Math.round(shorterMonths / 12)} Years / ${shorterMonths} Mos)`,
      months: shorterMonths
    },
    {
      id: 'recommended',
      label: `Recommended Tenure (${Math.round(recMonths / 12)} Years / ${recMonths} Mos)`,
      months: recMonths,
      isCurrentOrRecommended: true
    },
    {
      id: 'longer',
      label: `Longer Tenure (${Math.round(longerMonths / 12)} Years / ${longerMonths} Mos)`,
      months: longerMonths
    }
  ];

  return configs.map(c => {
    const calc = calculateEMI(principal, annualInterestRate, c.months);
    const interestDiff = calc.totalInterest - baselineCalc.totalInterest;
    return {
      id: c.id,
      label: c.label,
      tenureMonths: c.months,
      tenureYears: Math.round((c.months / 12) * 10) / 10,
      monthlyEMI: calc.monthlyEMI,
      totalInterest: calc.totalInterest,
      totalRepayment: calc.totalRepayment,
      interestDifferenceVsRecommended: interestDiff,
      isCurrentOrRecommended: c.isCurrentOrRecommended
    };
  });
}

/**
 * Validates simulation inputs and returns specific user-friendly error messages.
 */
export function validateSimulationInputs(
  projectCost: number,
  ownContribution: number,
  interestRate: number,
  tenureMonths: number,
  moratoriumMonths = 0
): SimulationValidationErrors {
  const errors: SimulationValidationErrors = {};

  if (isNaN(projectCost) || projectCost <= 0) {
    errors.totalProjectCost = 'Total project cost must be greater than ₹0.';
  }

  if (isNaN(ownContribution) || ownContribution < 0) {
    errors.ownContribution = 'Own contribution cannot be negative.';
  } else if (!isNaN(projectCost) && projectCost > 0 && ownContribution > projectCost) {
    errors.ownContribution = 'Own contribution cannot exceed the total project cost.';
  }

  if (isNaN(interestRate) || interestRate < 0) {
    errors.interestRate = 'Interest rate cannot be negative.';
  } else if (interestRate > 50) {
    errors.interestRate = 'Interest rate exceeds standard commercial boundaries (max 50%).';
  }

  if (isNaN(tenureMonths) || tenureMonths < 1) {
    errors.tenureMonths = 'Loan tenure must be at least 1 month.';
  } else if (tenureMonths > 360) {
    errors.tenureMonths = 'Loan tenure cannot exceed 30 years (360 months).';
  }

  if (isNaN(moratoriumMonths) || moratoriumMonths < 0) {
    errors.moratoriumMonths = 'Moratorium period cannot be negative.';
  } else if (moratoriumMonths > 60) {
    errors.moratoriumMonths = 'Moratorium cannot exceed 5 years (60 months).';
  }

  return errors;
}
