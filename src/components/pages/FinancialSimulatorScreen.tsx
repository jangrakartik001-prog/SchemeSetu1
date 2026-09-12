import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  Calculator, 
  IndianRupee, 
  Percent, 
  Clock, 
  Calendar, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  RotateCcw, 
  TrendingUp, 
  TrendingDown, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Scale, 
  FileText,
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { BeneficiaryProfile, ProjectDetails, Scheme } from '../../types';
import { SCHEMES_DATABASE } from '../../data/schemesData';
import { 
  calculateEMI, 
  calculateAffordability, 
  calculateFinancingGap, 
  generateTenureScenarios, 
  validateSimulationInputs 
} from '../../services/financialEngine';
import { formatINR } from '../../utils/formatters';
import { useLanguage } from '../../i18n/LanguageContext';

interface FinancialSimulatorScreenProps {
  initialSchemeId?: string;
  beneficiary: BeneficiaryProfile;
  project: ProjectDetails;
  onBackToRecommendations: () => void;
  onBackToSchemeDetails?: (schemeId: string) => void;
  onFindChannelPartner?: (schemeId: string) => void;
}

export const FinancialSimulatorScreen: React.FC<FinancialSimulatorScreenProps> = ({
  initialSchemeId,
  beneficiary,
  project,
  onBackToRecommendations,
  onBackToSchemeDetails,
  onFindChannelPartner
}) => {
  const { t, tScheme, tReason } = useLanguage();

  // Find selected scheme or default to PMEGP
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>(
    initialSchemeId || 'pmegp'
  );

  const currentScheme = useMemo(() => {
    return SCHEMES_DATABASE.find(s => s.id === selectedSchemeId) || SCHEMES_DATABASE[0];
  }, [selectedSchemeId]);

  // Extract base project numbers
  const initialCost = useMemo(() => {
    const val = parseFloat((project.totalProjectCost || '').replace(/[^0-9.-]+/g, ''));
    return !isNaN(val) && val > 0 ? val : 500000;
  }, [project.totalProjectCost]);

  const initialOwnContrib = useMemo(() => {
    const val = parseFloat((project.ownContribution || '').replace(/[^0-9.-]+/g, ''));
    return !isNaN(val) && val >= 0 ? val : 100000;
  }, [project.ownContribution]);

  // Form State
  const [totalProjectCost, setTotalProjectCost] = useState<number>(initialCost);
  const [ownContribution, setOwnContribution] = useState<number>(initialOwnContrib);
  const [interestRate, setInterestRate] = useState<number>(
    currentScheme.defaultInterestRate ?? 9.5
  );
  const [tenureMonths, setTenureMonths] = useState<number>(
    currentScheme.tenureMonths || 60
  );
  const [moratoriumMonths, setMoratoriumMonths] = useState<number>(
    currentScheme.moratoriumMonths || 6
  );

  // Accordion state for educational definitions
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);

  // Whenever scheme changes, optionally load default scheme rates if user switches
  const handleSchemeChange = (newSchemeId: string) => {
    setSelectedSchemeId(newSchemeId);
    const s = SCHEMES_DATABASE.find(sc => sc.id === newSchemeId);
    if (s) {
      if (s.defaultInterestRate !== undefined) {
        setInterestRate(s.defaultInterestRate);
      }
      if (s.tenureMonths) {
        setTenureMonths(s.tenureMonths);
      }
      if (s.moratoriumMonths !== undefined) {
        setMoratoriumMonths(s.moratoriumMonths);
      }
    }
  };

  // Reset to current scheme defaults
  const handleResetToDefaults = () => {
    setTotalProjectCost(initialCost);
    setOwnContribution(initialOwnContrib);
    setInterestRate(currentScheme.defaultInterestRate ?? 9.5);
    setTenureMonths(currentScheme.tenureMonths || 60);
    setMoratoriumMonths(currentScheme.moratoriumMonths || 6);
  };

  // Auto-calculated required financing
  const requiredFinancing = Math.max(0, totalProjectCost - ownContribution);

  // Validate inputs
  const validationErrors = useMemo(() => {
    return validateSimulationInputs(
      totalProjectCost, 
      ownContribution, 
      interestRate, 
      tenureMonths, 
      moratoriumMonths
    );
  }, [totalProjectCost, ownContribution, interestRate, tenureMonths, moratoriumMonths]);

  const hasErrors = Object.keys(validationErrors).length > 0;

  // EMI & Repayment Calculation
  const emiResult = useMemo(() => {
    if (hasErrors) {
      return {
        principal: requiredFinancing,
        annualInterestRate: interestRate,
        tenureMonths,
        monthlyEMI: 0,
        totalInterest: 0,
        totalRepayment: 0,
        financingPercentage: totalProjectCost > 0 ? (requiredFinancing / totalProjectCost) * 100 : 0,
        ownContributionPercentage: totalProjectCost > 0 ? (ownContribution / totalProjectCost) * 100 : 0,
        moratoriumMonths,
        isValid: false
      };
    }
    return calculateEMI(
      requiredFinancing,
      interestRate,
      tenureMonths,
      moratoriumMonths,
      totalProjectCost,
      ownContribution
    );
  }, [
    requiredFinancing, 
    interestRate, 
    tenureMonths, 
    moratoriumMonths, 
    totalProjectCost, 
    ownContribution, 
    hasErrors
  ]);

  // Financing Gap
  const financingGap = useMemo(() => {
    return calculateFinancingGap(requiredFinancing, currentScheme.maxLoanAmount);
  }, [requiredFinancing, currentScheme.maxLoanAmount]);

  // Affordability Check
  const affordability = useMemo(() => {
    return calculateAffordability(emiResult.monthlyEMI, beneficiary.annualFamilyIncome);
  }, [emiResult.monthlyEMI, beneficiary.annualFamilyIncome]);

  // Comparison Scenarios
  const scenarios = useMemo(() => {
    if (hasErrors || requiredFinancing <= 0) return [];
    return generateTenureScenarios(requiredFinancing, interestRate, tenureMonths);
  }, [requiredFinancing, interestRate, tenureMonths, hasErrors]);

  // Pre-formatted percentages
  const ownContributionPct = totalProjectCost > 0 
    ? Math.min(100, Math.round((ownContribution / totalProjectCost) * 1000) / 10) 
    : 0;
  const financingPct = totalProjectCost > 0 
    ? Math.min(100, Math.round((requiredFinancing / totalProjectCost) * 1000) / 10) 
    : 0;

  // Principal vs Interest ratio calculation for visualization
  const totalRepay = emiResult.totalRepayment;
  const principalSharePct = totalRepay > 0 
    ? Math.min(100, Math.max(0, Math.round((emiResult.principal / totalRepay) * 100))) 
    : 100;
  const interestSharePct = totalRepay > 0 
    ? Math.min(100, Math.max(0, 100 - principalSharePct)) 
    : 0;

  // Educational definitions list
  const educationalConcepts = [
    {
      id: 'principal',
      title: t('concept.principal.title'),
      explanation: t('concept.principal.desc')
    },
    {
      id: 'interestRate',
      title: t('concept.interestRate.title'),
      explanation: t('concept.interestRate.desc')
    },
    {
      id: 'emi',
      title: t('concept.emi.title'),
      explanation: t('concept.emi.desc')
    },
    {
      id: 'tenure',
      title: t('concept.tenure.title'),
      explanation: t('concept.tenure.desc')
    },
    {
      id: 'moratorium',
      title: t('concept.moratorium.title'),
      explanation: t('concept.moratorium.desc')
    },
    {
      id: 'totalInterest',
      title: t('concept.totalInterest.title'),
      explanation: t('concept.totalInterest.desc')
    },
    {
      id: 'totalRepayment',
      title: t('concept.totalRepayment.title'),
      explanation: t('concept.totalRepayment.desc')
    }
  ];

  return (
    <div className="w-full py-8 sm:py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              id="simulator-back-to-recs-btn"
              onClick={onBackToRecommendations}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('simulator.backToRec')}</span>
            </button>

            {onBackToSchemeDetails && (
              <>
                <span className="text-slate-300">/</span>
                <button
                  id="simulator-back-to-scheme-btn"
                  onClick={() => onBackToSchemeDetails(currentScheme.id)}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-900 transition-colors cursor-pointer"
                >
                  <span>{t('simulator.schemeDetailsBtn', { name: (tScheme(currentScheme.id, 'name') || currentScheme.name).split(' ')[0] })}</span>
                </button>
              </>
            )}
          </div>

          <button
            id="simulator-reset-btn"
            onClick={handleResetToDefaults}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t('simulator.resetDefaults')}</span>
          </button>
        </div>

        {/* Hero Header Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4 text-orange-400" />
                <span>{t('simulator.stageBadge')}</span>
              </div>

              <span className="bg-amber-500/20 text-amber-300 border border-amber-400/30 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                {t('simulator.illustrativeNotice')}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {t('simulator.title')}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {t('simulator.simHeroDesc', {
                    name: beneficiary.fullName || 'Beneficiary',
                    project: project.projectName || 'Enterprise Unit'
                  })}
                </p>
              </div>

              {/* Active Scheme Selector */}
              <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 shrink-0">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  {t('simulator.activeScheme')}
                </span>
                <select
                  id="simulator-scheme-select"
                  value={selectedSchemeId}
                  onChange={(e) => handleSchemeChange(e.target.value)}
                  className="w-full bg-slate-900 text-white font-bold text-xs rounded-lg border border-slate-600 px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                >
                  {SCHEMES_DATABASE.map((s) => (
                    <option key={s.id} value={s.id}>
                      {tScheme(s.id, 'name') || s.name}
                    </option>
                  ))}
                </select>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  {t('simulator.maxLoanBadge', {
                    maxLoan: formatINR(currentScheme.maxLoanAmount),
                    years: currentScheme.tenureMonths / 12
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Transparency Notice Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-950 space-y-1">
              <h2 className="font-bold text-sm text-blue-900">
                {t('simulator.advisoryTitle')}
              </h2>
              <p className="leading-relaxed">
                {t('simulator.advisoryP1')}
              </p>
              <p className="text-blue-900 leading-relaxed font-medium">
                {t('simulator.advisoryP2')}
              </p>
            </div>
          </div>
        </div>

        {/* FINANCING GAP ALERT (Section 11) */}
        {financingGap.hasGap && (
          <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-5 shadow-xs">
            <div className="flex items-start gap-3.5">
              <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-amber-950">
                <h2 className="font-extrabold text-sm text-amber-900">
                  {t('simulator.gapAlertTitle')}
                </h2>
                <p className="leading-relaxed">
                  {t('simulator.gapAlertP1', {
                    req: formatINR(financingGap.requiredFinancing),
                    max: formatINR(financingGap.maxLoanAmount)
                  })}
                </p>
                <div className="mt-2 p-2.5 bg-amber-100/70 rounded-lg font-bold text-amber-950 text-xs inline-block">
                  {t('simulator.gapAlertAmount', { gap: formatINR(financingGap.gapAmount) })}
                </div>
                <p className="text-[11px] text-amber-900 mt-1.5">
                  {t('simulator.gapAlertP2')}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* GRID LAYOUT: LEFT CONTROLS, RIGHT RESULTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ============================================================
              LEFT COLUMN: DYNAMIC INPUT CONTROLS (5 cols)
             ============================================================ */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-blue-900" />
                    <span>{t('simulator.assumptionsTitle')}</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    {t('simulator.assumptionsSub')}
                  </p>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  {t('simulator.requiredFieldsNotice')}
                </span>
              </div>

              {/* Input A: Total Project Cost */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {t('simulator.totalProjectCostLabel')} <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="relative rounded-lg shadow-2xs">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <IndianRupee className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    id="sim-project-cost"
                    type="number"
                    min="10000"
                    step="10000"
                    value={totalProjectCost || ''}
                    onChange={(e) => setTotalProjectCost(parseFloat(e.target.value) || 0)}
                    className={`block w-full rounded-lg border py-2.5 pl-9 pr-3 text-sm text-slate-900 font-bold focus:outline-none focus:ring-2 ${
                      validationErrors.totalProjectCost 
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/40' 
                        : 'border-slate-300 focus:ring-blue-600'
                    }`}
                    placeholder="e.g. 500000"
                  />
                </div>
                {validationErrors.totalProjectCost ? (
                  <p className="text-[11px] text-red-600 font-medium mt-1">
                    {tReason(validationErrors.totalProjectCost)}
                  </p>
                ) : (
                  <p className="text-[11px] text-slate-500 mt-1">
                    {t('simulator.capitalOutlay', { amount: formatINR(totalProjectCost) })}
                  </p>
                )}
              </div>

              {/* Input B: Own Contribution */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {t('simulator.ownContributionLabel')} <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="relative rounded-lg shadow-2xs">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <IndianRupee className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    id="sim-own-contribution"
                    type="number"
                    min="0"
                    step="5000"
                    value={ownContribution || ''}
                    onChange={(e) => setOwnContribution(parseFloat(e.target.value) || 0)}
                    className={`block w-full rounded-lg border py-2.5 pl-9 pr-3 text-sm text-slate-900 font-bold focus:outline-none focus:ring-2 ${
                      validationErrors.ownContribution 
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/40' 
                        : 'border-slate-300 focus:ring-blue-600'
                    }`}
                    placeholder="e.g. 100000"
                  />
                </div>
                {validationErrors.ownContribution ? (
                  <p className="text-[11px] text-red-600 font-medium mt-1">
                    {tReason(validationErrors.ownContribution)}
                  </p>
                ) : (
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                    <span>{t('simulator.promoterEquity', { amount: formatINR(ownContribution) })}</span>
                    <span className="font-semibold text-blue-900">{t('simulator.pctOfCost', { pct: ownContributionPct })}</span>
                  </div>
                )}
              </div>

              {/* Input C: Required Financing (Auto-calculated) */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                  {t('simulator.requiredFinancingLabel')}
                </span>
                <div className="flex items-baseline justify-between mt-1">
                  <p className="text-xl font-black text-blue-950">
                    {formatINR(requiredFinancing)}
                  </p>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    {t('simulator.pctOfCost', { pct: financingPct })}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  {t('simulator.requiredDebtCalcNote', {
                    cost: formatINR(totalProjectCost),
                    own: formatINR(ownContribution)
                  })}
                </p>
              </div>

              {/* Input D: Annual Interest Rate */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {t('simulator.annualInterestRateLabel')} <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="relative rounded-lg shadow-2xs">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Percent className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    id="sim-interest-rate"
                    type="number"
                    step="0.25"
                    min="0"
                    max="50"
                    value={interestRate ?? ''}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                    className={`block w-full rounded-lg border py-2.5 pl-9 pr-3 text-sm text-slate-900 font-bold focus:outline-none focus:ring-2 ${
                      validationErrors.interestRate 
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/40' 
                        : 'border-slate-300 focus:ring-blue-600'
                    }`}
                    placeholder="e.g. 9.5"
                  />
                </div>
                {validationErrors.interestRate ? (
                  <p className="text-[11px] text-red-600 font-medium mt-1">
                    {tReason(validationErrors.interestRate)}
                  </p>
                ) : (
                  <p className="text-[11px] text-slate-500 mt-1">
                    {t('simulator.referenceRate', { rate: currentScheme.interestRate })}
                  </p>
                )}
              </div>

              {/* Input E: Loan Tenure */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-800">
                    {t('simulator.loanTenureLabel')} <span className="text-red-500 font-bold">*</span>
                  </label>
                  <span className="text-xs font-bold text-blue-900">
                    {t('simulator.years', { years: Math.round((tenureMonths / 12) * 10) / 10 })}
                  </span>
                </div>
                <div className="relative rounded-lg shadow-2xs">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Clock className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    id="sim-tenure-months"
                    type="number"
                    step="6"
                    min="6"
                    max="360"
                    value={tenureMonths || ''}
                    onChange={(e) => setTenureMonths(parseInt(e.target.value, 10) || 0)}
                    className={`block w-full rounded-lg border py-2.5 pl-9 pr-3 text-sm text-slate-900 font-bold focus:outline-none focus:ring-2 ${
                      validationErrors.tenureMonths 
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/40' 
                        : 'border-slate-300 focus:ring-blue-600'
                    }`}
                    placeholder="e.g. 60"
                  />
                </div>
                {validationErrors.tenureMonths ? (
                  <p className="text-[11px] text-red-600 font-medium mt-1">
                    {tReason(validationErrors.tenureMonths)}
                  </p>
                ) : (
                  <div className="flex gap-1.5 mt-2">
                    {[36, 60, 84, 120].map((tVal) => (
                      <button
                        key={tVal}
                        type="button"
                        onClick={() => setTenureMonths(tVal)}
                        className={`text-[10px] font-semibold px-2 py-1 rounded transition-colors cursor-pointer ${
                          tenureMonths === tVal
                            ? 'bg-blue-900 text-white'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {t('simulator.yrsMonths', { years: tVal / 12, months: tVal })}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input F: Moratorium Months */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-800">
                    {t('simulator.moratoriumPeriodLabel')}
                  </label>
                  <span className="text-xs font-semibold text-slate-500">
                    {t('simulator.moratoriumGrace', { months: moratoriumMonths })}
                  </span>
                </div>
                <div className="relative rounded-lg shadow-2xs">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Calendar className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    id="sim-moratorium-months"
                    type="number"
                    step="1"
                    min="0"
                    max="60"
                    value={moratoriumMonths ?? ''}
                    onChange={(e) => setMoratoriumMonths(parseInt(e.target.value, 10) || 0)}
                    className="block w-full rounded-lg border border-slate-300 py-2.5 pl-9 pr-3 text-sm text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="e.g. 6"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {t('simulator.schemeGuidelineMoratorium', { months: currentScheme.moratoriumMonths })}
                </p>
              </div>

            </div>

            {/* FINANCING STRUCTURE BREAKDOWN (Section 12) */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Scale className="w-4 h-4 text-blue-900" />
                <span>{t('simulator.capitalStructureTitle')}</span>
              </h2>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">{t('simulator.totalProjectCostLabel')}:</span>
                  <span className="font-extrabold text-slate-900">{formatINR(totalProjectCost)}</span>
                </div>

                {/* Visual Ratio Stacked Bar */}
                <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex">
                  <div 
                    style={{ width: `${ownContributionPct}%` }}
                    className="bg-amber-500 h-full transition-all duration-300"
                    title={`Own Contribution: ${ownContributionPct}%`}
                  />
                  <div 
                    style={{ width: `${financingPct}%` }}
                    className="bg-blue-900 h-full transition-all duration-300"
                    title={`Required Financing: ${financingPct}%`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                    <span className="text-[10px] font-bold text-amber-900 uppercase block">{t('simulator.ownContributionLabel')}</span>
                    <p className="font-extrabold text-slate-900 mt-0.5">{formatINR(ownContribution)}</p>
                    <p className="text-[10px] text-amber-800 font-semibold">{ownContributionPct}%</p>
                  </div>

                  <div className="bg-blue-50 p-2.5 rounded-lg border border-blue-200">
                    <span className="text-[10px] font-bold text-blue-900 uppercase block">{t('simulator.requiredFinancingLabel')}</span>
                    <p className="font-extrabold text-slate-900 mt-0.5">{formatINR(requiredFinancing)}</p>
                    <p className="text-[10px] text-blue-800 font-semibold">{financingPct}%</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================
              RIGHT COLUMN: RESULTS, SUMMARY, AFFORDABILITY, SCENARIOS (7 cols)
             ============================================================ */}
          <div className="lg:col-span-7 space-y-6">

            {/* SECTION 5: PROMINENT FINANCIAL SUMMARY HERO CARD */}
            <div className="bg-white rounded-2xl border-2 border-blue-900/40 shadow-md p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-900 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-xl">
                {t('simulator.reducingBalanceCalc')}
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    {t('simulator.estimatedMonthlyRepayment')}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
                      {hasErrors ? '—' : formatINR(emiResult.monthlyEMI)}
                    </p>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500">
                      {t('simulator.perMonth')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {t('simulator.activeRepaymentAfterMoratorium', { months: moratoriumMonths })}
                  </p>
                </div>

                {/* Primary Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-4 border-t border-slate-200">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">{t('simulator.totalPrincipal')}</span>
                    <p className="text-base font-black text-slate-900 mt-0.5">
                      {hasErrors ? '—' : formatINR(emiResult.principal)}
                    </p>
                    <span className="text-[10px] text-slate-500">{t('simulator.pctOfProject', { pct: financingPct })}</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">{t('simulator.totalInterest')}</span>
                    <p className="text-base font-black text-orange-600 mt-0.5">
                      {hasErrors ? '—' : formatINR(emiResult.totalInterest)}
                    </p>
                    <span className="text-[10px] text-slate-500">
                      {totalRepay > 0 ? t('simulator.pctOfRepayment', { pct: interestSharePct }) : '—'}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">{t('simulator.totalRepayment')}</span>
                    <p className="text-base font-black text-slate-900 mt-0.5">
                      {hasErrors ? '—' : formatINR(emiResult.totalRepayment)}
                    </p>
                    <span className="text-[10px] text-slate-500">{t('simulator.principalPlusInterest')}</span>
                  </div>
                </div>

                {/* Secondary Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs bg-blue-50/70 p-3 rounded-xl border border-blue-100 text-blue-950 font-medium">
                  <div>
                    <span className="text-[10px] text-blue-700 block">{t('simulator.tenure')}</span>
                    <strong className="text-xs">{tenureMonths}m ({t('simulator.years', { years: Math.round((tenureMonths / 12) * 10) / 10 })})</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-700 block">{t('simulator.interestRate')}</span>
                    <strong className="text-xs">{interestRate}% p.a.</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-700 block">{t('simulator.financingRatio')}</span>
                    <strong className="text-xs">{t('simulator.debtLabel', { pct: financingPct })}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-700 block">{t('simulator.promoterMargin')}</span>
                    <strong className="text-xs">{t('simulator.equityLabel', { pct: ownContributionPct })}</strong>
                  </div>
                </div>

                {/* SECTION 4: MORATORIUM HANDLING */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Calendar className="w-4 h-4 text-blue-900" />
                    <span>{t('simulator.moratoriumTreatmentTitle', { months: moratoriumMonths })}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t('simulator.moratoriumTreatmentP1')}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {t('simulator.moratoriumTreatmentP2')}
                  </p>
                </div>

              </div>
            </div>

            {/* SECTION 6: REPAYMENT VISUALIZATION (Principal vs Interest) */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-900" />
                    <span>{t('simulator.repaymentCompositionTitle')}</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    {t('simulator.repaymentCompositionSub')}
                  </p>
                </div>
              </div>

              {/* Dynamic Stacked Bar Visualization */}
              <div className="space-y-3 pt-2">
                <div className="w-full h-8 bg-slate-100 rounded-lg overflow-hidden flex text-xs font-extrabold text-white">
                  <div 
                    style={{ width: `${principalSharePct}%` }}
                    className="bg-blue-900 h-full flex items-center justify-center px-2 transition-all duration-300"
                    title={`${t('simulator.borrowedPrincipal')}: ${formatINR(emiResult.principal)} (${principalSharePct}%)`}
                  >
                    {principalSharePct > 15 && <span>{t('simulator.borrowedPrincipal')} {principalSharePct}%</span>}
                  </div>
                  <div 
                    style={{ width: `${interestSharePct}%` }}
                    className="bg-orange-500 h-full flex items-center justify-center px-2 transition-all duration-300"
                    title={`${t('simulator.totalInterest')}: ${formatINR(emiResult.totalInterest)} (${interestSharePct}%)`}
                  >
                    {interestSharePct > 15 && <span>{t('simulator.totalInterest')} {interestSharePct}%</span>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3.5 h-3.5 rounded bg-blue-900 shrink-0" />
                    <div>
                      <span className="text-slate-600 block text-[11px]">{t('simulator.borrowedPrincipal')}</span>
                      <strong className="text-slate-900 font-bold">{formatINR(emiResult.principal)}</strong>
                      <span className="text-slate-400 text-[10px] ml-1">({principalSharePct}%)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-3.5 h-3.5 rounded bg-orange-500 shrink-0" />
                    <div>
                      <span className="text-slate-600 block text-[11px]">{t('simulator.cumulativeInterest')}</span>
                      <strong className="text-slate-900 font-bold">{formatINR(emiResult.totalInterest)}</strong>
                      <span className="text-slate-400 text-[10px] ml-1">({interestSharePct}%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 7: AFFORDABILITY INDICATOR */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-900" />
                  <span>{t('simulator.estimatedRepaymentBurden')}</span>
                </h2>

                <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${
                  affordability.level === 'LOW'
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                    : affordability.level === 'MODERATE'
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : affordability.level === 'HIGHER'
                    ? 'bg-red-100 text-red-900 border-red-300'
                    : 'bg-slate-100 text-slate-700 border-slate-300'
                }`}>
                  {t(`simulator.affordability.${affordability.level}`)}
                </span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                {affordability.monthlyIncome !== null ? (
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200">
                    <span className="text-slate-600">
                      {t('simulator.reportedMonthlyIncome', { income: formatINR(affordability.monthlyIncome) })}
                    </span>
                    <span className="text-slate-900 font-bold">
                      {t('simulator.debtBurden', { pct: affordability.repaymentBurdenPercent || 0 })}
                    </span>
                  </div>
                ) : null}

                <p className="text-slate-700 leading-relaxed font-medium">
                  {t(`simulator.affordabilityMsg.${affordability.level}`, { pct: affordability.repaymentBurdenPercent || 0 })}
                </p>

                <p className="text-[11px] text-slate-500 italic pt-1">
                  {t('simulator.affordabilityDisclaimer')}
                </p>
              </div>
            </div>

            {/* SECTION 8: SCENARIO COMPARISON (Shorter, Recommended, Longer) */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-blue-900" />
                  <span>{t('simulator.tenureTradeoffTitle')}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t('simulator.tenureTradeoffSub')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scenarios.map((sc) => {
                  const isCurrent = sc.tenureMonths === tenureMonths;
                  return (
                    <div 
                      key={sc.id} 
                      className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                        isCurrent 
                          ? 'bg-blue-50/70 border-blue-400 ring-2 ring-blue-100' 
                          : 'bg-slate-50 hover:bg-white border-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold text-slate-800">
                            {t('simulator.years', { years: sc.tenureYears })} ({sc.tenureMonths}m)
                          </span>
                          {isCurrent && (
                            <span className="text-[9px] font-extrabold bg-blue-900 text-white px-1.5 py-0.5 rounded">
                              {t('simulator.currentBadge')}
                            </span>
                          )}
                        </div>

                        <div className="space-y-1 text-xs">
                          <div>
                            <span className="text-[10px] text-slate-500 block">{t('simulator.estimatedMonthlyRepayment')}</span>
                            <p className="text-base font-black text-slate-900">
                              {formatINR(sc.monthlyEMI)}
                            </p>
                          </div>

                          <div className="pt-1.5 border-t border-slate-200/80">
                            <span className="text-[10px] text-slate-500 block">{t('simulator.totalInterest')}</span>
                            <p className="text-xs font-bold text-orange-600">
                              {formatINR(sc.totalInterest)}
                            </p>
                          </div>

                          <div>
                            <span className="text-[10px] text-slate-500 block">{t('simulator.totalRepayment')}</span>
                            <p className="text-xs font-medium text-slate-700">
                              {formatINR(sc.totalRepayment)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {!isCurrent && (
                        <button
                          type="button"
                          onClick={() => setTenureMonths(sc.tenureMonths)}
                          className="mt-3 w-full text-[10px] font-bold text-blue-900 bg-white hover:bg-blue-100/70 border border-blue-300 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          {t('simulator.applyYears', { years: sc.tenureYears })}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200 text-xs text-amber-950">
                <span className="font-bold block mb-0.5">{t('simulator.understandingTradeoff')}</span>
                <span className="text-[11px] text-amber-900 leading-relaxed block">
                  • {t('simulator.tradeoffShorter')}
                  <br />
                  • {t('simulator.tradeoffLonger')}
                </span>
              </div>
            </div>

            {/* SECTION 13: EDUCATIONAL EXPLANATIONS ("What does this mean?") */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div>
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-900" />
                  <span>{t('simulator.glossarySectionTitle')}</span>
                </h2>
                <p className="text-xs text-slate-500">
                  {t('simulator.glossarySectionSub')}
                </p>
              </div>

              <div className="space-y-2">
                {educationalConcepts.map((item) => {
                  const isExpanded = expandedConcept === item.id;
                  return (
                    <div 
                      key={item.id} 
                      className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedConcept(isExpanded ? null : item.id)}
                        className="w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-left text-xs font-bold text-slate-800 transition-colors cursor-pointer"
                      >
                        <span>{item.title}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="px-4 py-3 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-200">
                          {item.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <button
            id="simulator-bottom-back-btn"
            onClick={onBackToRecommendations}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('simulator.returnToRecommendations')}</span>
          </button>

          {onFindChannelPartner && (
            <button
              id="find-channel-partner-btn"
              type="button"
              onClick={() => onFindChannelPartner(selectedSchemeId)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-blue-900 hover:bg-blue-950 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer border border-blue-800 group"
            >
              <Building2 className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
              <span>{t('simulator.findMyChannelPartner')}</span>
              <ArrowRight className="w-4 h-4 text-orange-300 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
