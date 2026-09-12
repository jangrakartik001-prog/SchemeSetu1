import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  IndianRupee, 
  Calendar, 
  Percent, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  PieChart, 
  CheckCircle2, 
  Info,
  Layers,
  Building2
} from 'lucide-react';
import { BeneficiaryProfile, ProjectDetails } from '../../types';
import { calculateEMI } from '../../services/financialEngine';
import { useLanguage } from '../../i18n/LanguageContext';

interface FinancialToolsScreenProps {
  beneficiary: BeneficiaryProfile;
  project: ProjectDetails;
  onStartAssessment: () => void;
  onBackToHome: () => void;
}

export const FinancialToolsScreen: React.FC<FinancialToolsScreenProps> = ({
  beneficiary,
  project,
  onStartAssessment,
  onBackToHome
}) => {
  const { t } = useLanguage();

  const hasProjectData = Boolean(Number(project.totalProjectCost) > 0);
  const defaultCost = Number(project.totalProjectCost) || 500000;
  const defaultOwn = Number(project.ownContribution) || (defaultCost * 0.1);

  const [totalCost, setTotalCost] = useState<number>(defaultCost);
  const [ownContribution, setOwnContribution] = useState<number>(defaultOwn);
  const [interestRate, setInterestRate] = useState<number>(9.5);
  const [tenureYears, setTenureYears] = useState<number>(5);
  const [moratoriumMonths, setMoratoriumMonths] = useState<number>(0);

  // Derive loan amount
  const loanAmount = Math.max(0, totalCost - ownContribution);
  const tenureMonths = tenureYears * 12;

  // Run deterministic calculation engine
  const calculationResult = useMemo(() => {
    return calculateEMI(
      loanAmount,
      interestRate,
      tenureMonths,
      moratoriumMonths,
      totalCost,
      ownContribution
    );
  }, [loanAmount, interestRate, tenureMonths, moratoriumMonths, totalCost, ownContribution]);

  const formatCurrency = (val: number) => {
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  // Year by year projection
  const yearlySchedule = useMemo(() => {
    const years = tenureYears;
    const items = [];
    let remainingPrincipal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const monthlyPayment = calculationResult.monthlyEMI;

    for (let yr = 1; yr <= years; yr++) {
      let principalPaidYear = 0;
      let interestPaidYear = 0;

      for (let m = 1; m <= 12; m++) {
        if (remainingPrincipal <= 0) break;
        const interestMonth = remainingPrincipal * monthlyRate;
        const principalMonth = Math.min(remainingPrincipal, monthlyPayment - interestMonth);
        interestPaidYear += interestMonth;
        principalPaidYear += principalMonth;
        remainingPrincipal -= principalMonth;
      }

      items.push({
        year: yr,
        principalPaid: principalPaidYear,
        interestPaid: interestPaidYear,
        totalPaid: principalPaidYear + interestPaidYear,
        closingBalance: Math.max(0, remainingPrincipal)
      });
    }
    return items;
  }, [loanAmount, interestRate, tenureYears, calculationResult.monthlyEMI]);

  const principalPct = calculationResult.totalRepayment > 0 
    ? Math.round((loanAmount / calculationResult.totalRepayment) * 100) 
    : 100;
  const interestPct = 100 - principalPct;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Top Breadcrumb & Return */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('header.home')}</span>
        </button>

        <button
          onClick={onStartAssessment}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors shadow-xs"
        >
          <Sparkles className="w-4 h-4 text-orange-200" />
          <span>{t('tools.startJourneyBtn')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-6 sm:p-8 mb-6 border border-blue-800/40 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700 text-blue-200 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-orange-400" />
            <span>Reducing-Balance Financial Engine</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {t('tools.title')}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('tools.subtitle')}
          </p>
        </div>
      </div>

      {/* Personalized Context Banner */}
      {hasProjectData ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5 mb-8 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-emerald-950 mb-1">
              Personalized Project Detected: {project.projectName || 'Your Proposed Venture'}
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              {t('tools.bannerWithData', { cost: Number(project.totalProjectCost).toLocaleString('en-IN') })}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-blue-950 mb-0.5">
                {t('tools.bannerNoDataTitle')}
              </h4>
              <p className="text-xs text-blue-800 leading-relaxed max-w-2xl">
                {t('tools.bannerNoDataDesc')}
              </p>
            </div>
          </div>
          <button
            onClick={onStartAssessment}
            className="shrink-0 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
          >
            {t('tools.startJourneyBtn')}
          </button>
        </div>
      )}

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs Column */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col gap-6">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-900" />
            <span>Simulation Parameters</span>
          </h2>

          {/* Quick Presets */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
              Quick Loan Ticket Presets
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {[100000, 200000, 500000, 1000000, 2500000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setTotalCost(amt);
                    setOwnContribution(amt * 0.1);
                  }}
                  className={`py-1.5 px-2 text-xs font-semibold rounded-lg border transition-all ${
                    totalCost === amt
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-400'
                  }`}
                >
                  {amt >= 100000 ? `₹${amt / 100000}L` : `₹${amt / 1000}k`}
                </button>
              ))}
            </div>
          </div>

          {/* Total Cost Input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700">Total Project Cost</label>
              <span className="text-sm font-extrabold text-slate-900">{formatCurrency(totalCost)}</span>
            </div>
            <input
              type="range"
              min={25000}
              max={5000000}
              step={25000}
              value={totalCost}
              onChange={(e) => {
                const val = Number(e.target.value);
                setTotalCost(val);
                if (ownContribution > val) setOwnContribution(val * 0.1);
              }}
              className="w-full accent-blue-900 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>₹25,000</span>
              <span>₹25 Lakh</span>
              <span>₹50 Lakh</span>
            </div>
          </div>

          {/* Own Contribution Input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700">
                Own Margin Money ({Math.round((ownContribution / totalCost) * 100 || 0)}%)
              </label>
              <span className="text-sm font-extrabold text-slate-900">{formatCurrency(ownContribution)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={totalCost * 0.5}
              step={5000}
              value={ownContribution}
              onChange={(e) => setOwnContribution(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>₹0 (0%)</span>
              <span>10% (Govt Std)</span>
              <span>50% Max</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700">Annual Interest Rate</label>
              <span className="text-sm font-extrabold text-slate-900">{interestRate}% p.a.</span>
            </div>
            <input
              type="range"
              min={4}
              max={16}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-orange-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>4% (Affirmative)</span>
              <span>9.5% (MSME MCLR)</span>
              <span>16% (MFI Upper)</span>
            </div>
          </div>

          {/* Tenure Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
              Repayment Tenure: {tenureYears} Years ({tenureMonths} Months)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[2, 3, 5, 7].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setTenureYears(yr)}
                  className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                    tenureYears === yr
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-400'
                  }`}
                >
                  {yr} Years
                </button>
              ))}
            </div>
          </div>

          {/* Moratorium Grace Period */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
              Moratorium Period (Principal Holiday)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[0, 3, 6, 12].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMoratoriumMonths(m)}
                  className={`py-1.5 px-2 text-xs font-semibold rounded-lg border transition-all ${
                    moratoriumMonths === m
                      ? 'bg-orange-600 text-white border-orange-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-orange-300'
                  }`}
                >
                  {m === 0 ? 'None' : `${m} Months`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Dashboard */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Primary EMI Hero Card */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-blue-800/60">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-1">
              Estimated Monthly Outflow
            </span>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl sm:text-5xl font-black tracking-tight">
                {formatCurrency(calculationResult.monthlyEMI)}
              </span>
              <span className="text-xs text-slate-300">/ month</span>
            </div>

            {/* Sub Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-blue-800/80 text-xs">
              <div>
                <span className="text-slate-400 block">Principal Borrowed:</span>
                <span className="font-bold text-white text-sm">{formatCurrency(loanAmount)}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Total Interest Payable:</span>
                <span className="font-bold text-orange-300 text-sm">
                  {formatCurrency(calculationResult.totalInterest)}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Total Repayment Amount:</span>
                <span className="font-bold text-white text-sm">
                  {formatCurrency(calculationResult.totalRepayment)}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Effective Interest Share:</span>
                <span className="font-bold text-white text-sm">{interestPct}% of repayment</span>
              </div>
            </div>

            {/* Visual Ratio Bar */}
            <div className="mt-5">
              <div className="flex justify-between text-[11px] text-slate-300 mb-1.5 font-medium">
                <span>Principal: {principalPct}%</span>
                <span>Interest: {interestPct}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden flex">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${principalPct}%` }}
                />
                <div 
                  className="bg-orange-500 h-full transition-all duration-300"
                  style={{ width: `${interestPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Year-by-Year Summary Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-900" />
              <span>Year-by-Year Repayment Overview</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Year</th>
                    <th className="py-2.5 px-3 text-right">Principal</th>
                    <th className="py-2.5 px-3 text-right">Interest</th>
                    <th className="py-2.5 px-3 text-right">Total Outflow</th>
                    <th className="py-2.5 px-3 text-right">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {yearlySchedule.map((row) => (
                    <tr key={row.year} className="hover:bg-slate-50/80">
                      <td className="py-2.5 px-3 font-bold text-slate-900">Year {row.year}</td>
                      <td className="py-2.5 px-3 text-right text-emerald-700 font-semibold">
                        {formatCurrency(row.principalPaid)}
                      </td>
                      <td className="py-2.5 px-3 text-right text-orange-700">
                        {formatCurrency(row.interestPaid)}
                      </td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">
                        {formatCurrency(row.totalPaid)}
                      </td>
                      <td className="py-2.5 px-3 text-right text-slate-500">
                        {formatCurrency(row.closingBalance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Computed via Standard Equated Reducing Balance Method</span>
              </span>
              <button
                onClick={onStartAssessment}
                className="text-blue-900 hover:text-blue-700 font-bold inline-flex items-center gap-1"
              >
                <span>Find Matched Schemes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
