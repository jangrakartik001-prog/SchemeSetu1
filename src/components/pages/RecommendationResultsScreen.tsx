import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  ArrowLeft, 
  IndianRupee, 
  Calendar, 
  Percent, 
  Clock, 
  Building2, 
  FileText, 
  ExternalLink, 
  Info, 
  ShieldCheck, 
  Filter, 
  RotateCcw,
  Sparkles,
  HelpCircle,
  AlertCircle,
  Calculator
} from 'lucide-react';
import { 
  BeneficiaryProfile, 
  ProjectDetails, 
  MatchingSummary, 
  SchemeEvaluation,
  Scheme
} from '../../types';
import { formatINR, formatINRCondensed } from '../../utils/formatters';
import { useLanguage } from '../../i18n/LanguageContext';

interface RecommendationResultsScreenProps {
  beneficiary: BeneficiaryProfile;
  project: ProjectDetails;
  matchingSummary: MatchingSummary;
  onSelectScheme: (schemeId: string) => void;
  onCalculateFinancing: (scheme: Scheme) => void;
  onBackToSummary: () => void;
  onEditProfile: () => void;
  onStartNewAssessment: () => void;
  onProceedToApplicationReady?: (schemeId: string) => void;
}

export const RecommendationResultsScreen: React.FC<RecommendationResultsScreenProps> = ({
  beneficiary,
  project,
  matchingSummary,
  onSelectScheme,
  onCalculateFinancing,
  onBackToSummary,
  onEditProfile,
  onStartNewAssessment,
  onProceedToApplicationReady
}) => {
  const { t, tScheme, tReason, tRuleName, tStatus } = useLanguage();
  const [showIneligible, setShowIneligible] = useState<boolean>(true);
  const [expandedIneligibleSchemeId, setExpandedIneligibleSchemeId] = useState<string | null>(null);

  const { bestMatch, eligibleSchemes, ineligibleSchemes, missingInformation } = matchingSummary;
  const alternativeSchemes = eligibleSchemes.filter(s => s.scheme.id !== bestMatch?.scheme.id);

  const totalCostNum = parseFloat((project.totalProjectCost || '').replace(/[^0-9.-]+/g, '')) || 0;
  const ownContribNum = parseFloat((project.ownContribution || '').replace(/[^0-9.-]+/g, '')) || 0;
  const requiredFinancingNum = Math.max(0, totalCostNum - ownContribNum);

  const toggleIneligibleScheme = (id: string) => {
    setExpandedIneligibleSchemeId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full py-8 sm:py-12 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Bar & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            id="rec-back-to-summary-btn"
            onClick={onBackToSummary}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('recommendations.backToSummary')}</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 text-blue-900 border border-blue-200 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>{t('recommendations.suitableCount', { count: eligibleSchemes.length.toString() })}</span>
            </span>

            <button
              id="rec-new-assessment-btn"
              onClick={onStartNewAssessment}
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('common.reset')}</span>
            </button>
          </div>
        </div>

        {/* Missing Information Safety Banner (Section 9) */}
        {missingInformation.length > 0 && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 shadow-xs">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-base font-bold text-amber-900">
                  {t('recommendations.missingInfoTitle')}
                </h3>
                <p className="text-sm text-amber-800 mt-1 leading-relaxed">
                  {t('recommendations.missingInfoDesc')}
                </p>
                <ul className="mt-2 list-disc list-inside text-xs font-semibold text-amber-950 space-y-1">
                  {missingInformation.map((field, idx) => (
                    <li key={idx}>{tReason(field)}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <button
                    id="rec-edit-profile-btn"
                    onClick={onEditProfile}
                    className="inline-flex items-center gap-1.5 bg-amber-700 hover:bg-amber-800 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>{t('recommendations.updateMissingBtn')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Screen Header Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-4 h-4 text-orange-400" />
              <span>{t('recommendations.stageBadge')}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t('recommendations.heroTitle')}
            </h1>

            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {t('recommendations.heroDesc', { 
                name: beneficiary.fullName || 'Applicant', 
                category: beneficiary.socialCategory || 'Beneficiary', 
                amount: formatINR(requiredFinancingNum), 
                project: project.projectName || 'your enterprise' 
              })}
            </p>
          </div>
        </div>

        {/* SECTION 5: BEST MATCH HERO CARD */}
        {bestMatch ? (
          <div className="bg-white rounded-2xl border-2 border-emerald-500/80 shadow-md overflow-hidden relative">
            
            {/* Top Badge Ribbon */}
            <div className="bg-emerald-600 text-white px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>{t('recommendations.bestMatchBadge')}</span>
              </div>

              {/* Suitability Score Badge with Disclaimer */}
              <div className="flex items-center gap-2">
                <span className="bg-emerald-800/80 text-white text-xs font-extrabold px-3 py-1 rounded-full border border-emerald-400/50">
                  {t('recommendations.suitabilityScore', { score: (bestMatch.suitability?.overallScore || 90).toString() })}
                </span>
                <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded font-medium">
                  {t('recommendations.highestRanked')}
                </span>
              </div>
            </div>

            {/* Score Explanation Subtext */}
            <div className="bg-emerald-50/70 px-6 py-2 border-b border-emerald-100 flex items-center justify-between text-[11px] text-emerald-900">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{t('recommendations.scoreDisclaimer')}</span>
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                bestMatch.scheme.verificationStatus === 'Verified official source' 
                  ? 'bg-blue-100 text-blue-900' 
                  : 'bg-amber-100 text-amber-900'
              }`}>
                {tStatus(bestMatch.scheme.verificationStatus)}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {bestMatch.scheme.primaryFocusArea}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{t('recommendations.verifiedEligible')}</span>
                    </span>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {tScheme(bestMatch.scheme.id, 'name') || bestMatch.scheme.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {tScheme(bestMatch.scheme.id, 'shortDescription') || bestMatch.scheme.shortDescription}
                  </p>
                </div>

                <button
                  id="best-match-view-details-btn"
                  onClick={() => onSelectScheme(bestMatch.scheme.id)}
                  className="inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-98 shrink-0 cursor-pointer"
                >
                  <span>{t('recommendations.viewDetailsBtn')}</span>
                  <ArrowRight className="w-4 h-4 text-orange-400" />
                </button>
              </div>

              {/* Key Financial Snapshot Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                    {t('recommendations.targetFinancing')}
                  </span>
                  <p className="text-lg font-black text-emerald-700 mt-1">
                    {formatINR(requiredFinancingNum)}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {t('recommendations.targetFinancingSub')}
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                    {t('recommendations.interestStructure')}
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1 leading-tight">
                    {bestMatch.scheme.interestRate}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {t('recommendations.interestStructureSub')}
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                    {t('recommendations.maxLoanCap')}
                  </span>
                  <p className="text-lg font-black text-slate-900 mt-1">
                    {formatINR(bestMatch.scheme.maxLoanAmount)}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {t('recommendations.maxLoanCapSub', { ceiling: formatINRCondensed(bestMatch.scheme.maxLoanAmount) })}
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                    {t('recommendations.tenureMoratorium')}
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {t('recommendations.upToYears', { years: Math.round(bestMatch.scheme.tenureMonths / 12).toString() })}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {t('recommendations.moratoriumSub', { months: bestMatch.scheme.moratoriumMonths.toString() })}
                  </p>
                </div>
              </div>

              {/* Why This Matches You (Section 5 requirement) */}
              <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t('recommendations.whyMatchesTitle')}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {bestMatch.suitability?.strengths && bestMatch.suitability.strengths.length > 0 ? (
                    bestMatch.suitability.strengths.map((str, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-emerald-950 font-medium">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{tReason(str)}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-start gap-2 text-xs text-emerald-950 font-medium">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{tReason('Fits your reported project type and activity sector.')}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-emerald-950 font-medium">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{tReason('Fits your reported family income range.')}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-emerald-950 font-medium">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{tReason('Financing requirement is within the scheme loan ceiling.')}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-emerald-950 font-medium">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{tReason('Operates across your selected state and district location.')}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Subsidies & Benefits Highlight */}
                {bestMatch.scheme.subsidyDetails && (
                  <div className="mt-4 pt-3 border-t border-emerald-200/80 text-xs text-emerald-900">
                    <strong className="font-semibold text-emerald-950">{t('recommendations.subsidyHighlight')}</strong>{' '}
                    {tScheme(bestMatch.scheme.id, 'subsidyDetails') || bestMatch.scheme.subsidyDetails}
                  </div>
                )}
              </div>

              {/* Action Bar for Best Match */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span>Financing target: <strong className="text-slate-900">{formatINR(requiredFinancingNum)}</strong> • Standard tenure: <strong className="text-slate-900">{t('simulator.years', { years: Math.round(bestMatch.scheme.tenureMonths / 12).toString() })}</strong></span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    id="best-match-view-dossier-btn"
                    onClick={() => onSelectScheme(bestMatch.scheme.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{t('recommendations.viewDossier')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    id="best-match-calc-financing-btn"
                    onClick={() => onCalculateFinancing(bestMatch.scheme)}
                    className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-950 text-white shadow-sm transition-all cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-orange-400" />
                    <span>{t('recommendations.simulateEmiBtn')}</span>
                  </button>

                  {onProceedToApplicationReady && (
                    <button
                      id="best-match-app-ready-btn"
                      onClick={() => onProceedToApplicationReady(bestMatch.scheme.id)}
                      className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all cursor-pointer"
                    >
                      <span>{t('appReady.prepareCTA')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
            <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">
              {t('recommendations.noMatchTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
              {t('recommendations.noMatchDesc')}
            </p>
          </div>
        )}

        {/* SECTION 6: ALTERNATIVE RECOMMENDATIONS */}
        {alternativeSchemes.length > 0 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-900" />
                <span>{t('recommendations.otherSuitableTitle', { count: alternativeSchemes.length.toString() })}</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {t('recommendations.otherSuitableSub')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {alternativeSchemes.map((alt) => {
                const score = alt.suitability?.overallScore || 75;
                return (
                  <div 
                    key={alt.scheme.id}
                    className="bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all p-5 sm:p-6 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Header of Card */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {alt.scheme.primaryFocusArea}
                        </span>

                        <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                          {t('recommendations.scoreLabel')} {score}%
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {tScheme(alt.scheme.id, 'name') || alt.scheme.name}
                      </h3>

                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {tScheme(alt.scheme.id, 'shortDescription') || alt.scheme.shortDescription}
                      </p>

                      {/* Financial Badges */}
                      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-slate-50 p-2 rounded">
                          <span className="text-slate-500 text-[10px] uppercase block">{t('recommendations.maxLoan')}</span>
                          <span className="font-bold text-slate-900">{formatINR(alt.scheme.maxLoanAmount)}</span>
                        </div>
                        <div className="bg-slate-50 p-2 rounded">
                          <span className="text-slate-500 text-[10px] uppercase block">{t('recommendations.tenure')}</span>
                          <span className="font-bold text-slate-900">{t('simulator.years', { years: Math.round(alt.scheme.tenureMonths / 12).toString() })}</span>
                        </div>
                      </div>

                      {/* Short Reason */}
                      <div className="mt-3 text-xs text-emerald-800 bg-emerald-50/60 p-2.5 rounded border border-emerald-100 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>
                          {tReason(alt.suitability?.strengths?.[0] || 'Eligible under category and sector guidelines.')}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                        alt.scheme.verificationStatus === 'Verified official source' 
                          ? 'bg-slate-100 text-slate-700' 
                          : 'bg-amber-50 text-amber-800'
                      }`}>
                        {tStatus(alt.scheme.verificationStatus)}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          id={`calc-financing-${alt.scheme.id}`}
                          onClick={() => onCalculateFinancing(alt.scheme)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-orange-800 hover:text-orange-950 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <Calculator className="w-3.5 h-3.5" />
                          <span>{t('recommendations.simulateBtn')}</span>
                        </button>

                        <button
                          id={`view-details-${alt.scheme.id}`}
                          onClick={() => onSelectScheme(alt.scheme.id)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-950 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <span>{t('recommendations.details')}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 7: WHY SOME SCHEMES WERE NOT RECOMMENDED (COLLAPSIBLE) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <button
            id="rec-toggle-ineligible-btn"
            onClick={() => setShowIneligible(!showIneligible)}
            className="w-full px-6 py-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition-colors text-left cursor-pointer border-b border-slate-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm sm:base font-bold text-slate-900">
                  {t('recommendations.ineligibleAccordionTitle', { count: ineligibleSchemes.length.toString() })}
                </h2>
                <p className="text-xs text-slate-500">
                  {t('recommendations.ineligibleAccordionSub')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span>{showIneligible ? t('recommendations.hideAnalysis') : t('recommendations.showAnalysis')}</span>
              {showIneligible ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {showIneligible && (
            <div className="p-6 divide-y divide-slate-100 space-y-4">
              {ineligibleSchemes.map((inelig) => {
                const isExpanded = expandedIneligibleSchemeId === inelig.scheme.id;
                
                return (
                  <div key={inelig.scheme.id} className="pt-4 first:pt-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-800 border border-red-200 uppercase tracking-wider inline-flex items-center gap-1">
                            <XCircle className="w-3 h-3 text-red-600" />
                            <span>{t('recommendations.notEligible')}</span>
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {inelig.scheme.primaryFocusArea}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {tScheme(inelig.scheme.id, 'name') || inelig.scheme.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleIneligibleScheme(inelig.scheme.id)}
                          className="text-xs font-semibold text-blue-800 hover:text-blue-950 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isExpanded ? t('recommendations.hideRules') : t('recommendations.inspectRules')}</span>
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>

                        <button
                          onClick={() => onSelectScheme(inelig.scheme.id)}
                          className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline transition-colors"
                        >
                          {t('recommendations.viewScheme')}
                        </button>
                      </div>
                    </div>

                    {/* Specific Failed Reasons List (Section 7 requirement) */}
                    <div className="mt-3 bg-red-50/70 border border-red-200 rounded-lg p-3 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-900 block">
                        {t('recommendations.disqualifyingFactors')}
                      </span>
                      {inelig.eligibility.disqualifyingReasons.map((disq, idx) => (
                        <div key={idx} className="text-xs text-red-950 font-medium flex items-start gap-2">
                          <span className="text-red-600 font-bold shrink-0">•</span>
                          <span>{tReason(disq)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expanded Detailed 10 Rule Checks Table */}
                    {isExpanded && (
                      <div className="mt-4 bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
                        <span className="text-xs font-bold text-slate-900 block mb-2">
                          {t('recommendations.evalLog')}
                        </span>
                        <div className="space-y-1.5">
                          {inelig.eligibility.ruleChecks.map((rc, idx) => (
                            <div 
                              key={idx}
                              className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1.5 px-2.5 rounded bg-white border border-slate-100 gap-2"
                            >
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                                  rc.result === 'PASS'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : rc.result === 'FAIL'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}>
                                  {tStatus(rc.result)}
                                </span>
                                <span className="font-semibold text-slate-800">
                                  {tRuleName({ ruleName: rc.rule, ruleCode: rc.ruleCode })}
                                </span>
                              </div>
                              <span className="text-slate-600 text-[11px] sm:text-right max-w-md">
                                {tReason({ explanation: rc.explanation, ruleCode: rc.ruleCode, params: rc.params })}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Prototype Transparency & Disclaimer Note (Section 12) */}
        <div className="bg-slate-100 border border-slate-300 rounded-xl p-5 text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <ShieldCheck className="w-4 h-4 text-blue-900" />
            <span>{t('recommendations.transparencyTitle')}</span>
          </div>
          <p className="leading-relaxed">
            {t('recommendations.transparencyDesc')}
          </p>
        </div>

        {/* Bottom Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <button
            id="rec-bottom-back-btn"
            onClick={onBackToSummary}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('recommendations.returnToSummary')}</span>
          </button>

          <button
            id="rec-bottom-new-assessment-btn"
            onClick={onStartNewAssessment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t('recommendations.startNew')}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
