import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Building2, 
  Calendar, 
  IndianRupee, 
  Percent, 
  Clock, 
  FileText, 
  Layers, 
  Award, 
  Printer, 
  HelpCircle,
  AlertCircle,
  Share2,
  Check,
  Calculator
} from 'lucide-react';
import { BeneficiaryProfile, ProjectDetails, Scheme } from '../../types';
import { SCHEMES_DATABASE } from '../../data/schemesData';
import { evaluateSchemeEligibility } from '../../services/eligibilityEngine';
import { calculateSchemeSuitability } from '../../services/suitabilityEngine';
import { formatINR, formatINRCondensed } from '../../utils/formatters';
import { useLanguage } from '../../i18n/LanguageContext';

interface SchemeDetailScreenProps {
  schemeId: string;
  beneficiary: BeneficiaryProfile;
  project: ProjectDetails;
  onBackToRecommendations: () => void;
  onEditProfileOrProject: () => void;
  onCalculateFinancing: (scheme: Scheme) => void;
}

export const SchemeDetailScreen: React.FC<SchemeDetailScreenProps> = ({
  schemeId,
  beneficiary,
  project,
  onBackToRecommendations,
  onEditProfileOrProject,
  onCalculateFinancing
}) => {
  const { t, tScheme, tPartner, tReason, tRuleName, tStatus } = useLanguage();
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const scheme: Scheme | undefined = SCHEMES_DATABASE.find(s => s.id === schemeId) || SCHEMES_DATABASE[0];

  const eligibility = evaluateSchemeEligibility(scheme, beneficiary, project);
  const suitability = eligibility.eligible 
    ? calculateSchemeSuitability(scheme, beneficiary, project) 
    : undefined;

  const totalCostNum = parseFloat((project.totalProjectCost || '').replace(/[^0-9.-]+/g, '')) || 0;
  const ownContribNum = parseFloat((project.ownContribution || '').replace(/[^0-9.-]+/g, '')) || 0;
  const requiredFinancingNum = Math.max(0, totalCostNum - ownContribNum);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const schemeName = tScheme(scheme.id, 'name') || scheme.name;
  const shortDesc = tScheme(scheme.id, 'shortDescription') || scheme.shortDescription;
  const fullDesc = tScheme(scheme.id, 'fullDescription') || scheme.fullDescription;
  const subsidyInfo = tScheme(scheme.id, 'subsidyDetails') || scheme.subsidyDetails;
  const focusArea = tScheme(scheme.id, 'focusArea') || scheme.primaryFocusArea;
  const ownContributionText = tScheme(scheme.id, 'ownContribution') || scheme.ownContributionRequirement;

  return (
    <div className="w-full py-8 sm:py-12 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation & Header Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            id="scheme-detail-back-btn"
            onClick={onBackToRecommendations}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('schemeDetail.backToRecommendations')}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t('schemeDetail.printDossier')}</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? t('schemeDetail.linkCopied') : t('schemeDetail.share')}</span>
            </button>
          </div>
        </div>

        {/* Top Hero Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-800/80 text-orange-400 uppercase tracking-wider">
                  {focusArea}
                </span>

                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
                  scheme.verificationStatus === 'Verified official source' 
                    ? 'bg-emerald-900/80 text-emerald-200 border border-emerald-700' 
                    : 'bg-amber-900/80 text-amber-200 border border-amber-700'
                }`}>
                  {scheme.verificationStatus}
                </span>

                {eligibility.eligible ? (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-slate-950" />
                    <span>{t('schemeDetail.eligible')}</span>
                  </span>
                ) : (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-red-600 text-white font-bold inline-flex items-center gap-1">
                    <XCircle className="w-3 h-3 text-white" />
                    <span>{t('schemeDetail.notEligible')}</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight pt-1">
                {schemeName}
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {shortDesc}
              </p>

              {/* Action Buttons in Hero */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  id="scheme-hero-calc-financing-btn"
                  onClick={() => onCalculateFinancing(scheme)}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-white" />
                  <span>{t('schemeDetail.estimateRepaymentBtn')}</span>
                </button>
              </div>
            </div>

            {/* Score & Nodal Agency Badge */}
            <div className="bg-slate-800/90 rounded-xl p-4 border border-slate-700 sm:text-right shrink-0">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                {t('schemeDetail.suitabilityRating')}
              </span>
              <p className="text-2xl font-black text-orange-400 mt-0.5">
                {suitability ? `${suitability.overallScore}%` : t('schemeDetail.ineligible')}
              </p>
              <p className="text-[11px] text-slate-400 mt-1 max-w-[160px]">
                {scheme.sourceName.split('/')[0]}
              </p>
            </div>
          </div>
        </div>

        {/* PROMINENT "VERIFY BEFORE APPLYING" TRANSPARENCY NOTICE */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950 space-y-1">
              <h2 className="font-bold text-sm text-amber-900">
                {t('schemeDetail.transparencyTitle')}
              </h2>
              <p className="leading-relaxed text-amber-900">
                {t('schemeDetail.transparencyNotice')} 
                <strong className="block mt-1">{t('schemeDetail.transparencyBold')}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* SECTION: PERSONALIZED ELIGIBILITY DIAGNOSTIC */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-900" />
                <span>{t('schemeDetail.diagnosticTitle')}</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {t('schemeDetail.diagnosticSub', {
                  name: beneficiary.fullName || t('schemeDetail.applicant'),
                  category: beneficiary.socialCategory || t('schemeDetail.applicant'),
                  project: project.projectName || t('schemeDetail.proposedUnit')
                })}
              </p>
            </div>

            <button
              id="scheme-edit-profile-btn"
              onClick={onEditProfileOrProject}
              className="text-xs font-semibold text-blue-800 hover:text-blue-950 bg-blue-50 px-3 py-1.5 rounded border border-blue-200 transition-colors"
            >
              {t('schemeDetail.editInfo')}
            </button>
          </div>

          {/* Rule Checks Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50 text-slate-700 uppercase tracking-wider text-[11px] font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 w-1/4">{t('schemeDetail.colRule')}</th>
                  <th className="py-3 px-4 w-24 text-center">{t('schemeDetail.colResult')}</th>
                  <th className="py-3 px-4">{t('schemeDetail.colRationale')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {eligibility.ruleChecks.map((rc, idx) => (
                  <tr key={idx} className={rc.result === 'FAIL' ? 'bg-red-50/40' : 'hover:bg-slate-50/50'}>
                    <td className="py-2.5 px-4 font-semibold text-slate-900">
                      {tRuleName({ ruleName: rc.rule, ruleCode: rc.ruleCode })}
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                        rc.result === 'PASS'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : rc.result === 'FAIL'
                          ? 'bg-red-100 text-red-800 border border-red-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}>
                        {tStatus(rc.result)}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-slate-700 leading-relaxed">
                      {tReason({ explanation: rc.explanation, ruleCode: rc.ruleCode, params: rc.params })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Strengths or Disqualification Factors */}
          {eligibility.eligible && suitability ? (
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 text-xs">
              <h3 className="font-bold text-emerald-950 mb-2">{t('schemeDetail.keySuitabilityFactors')}</h3>
              <ul className="list-disc list-inside space-y-1 text-emerald-900">
                {suitability.strengths.map((str, idx) => (
                  <li key={idx}>{tReason(str)}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-red-50 rounded-xl p-4 border border-red-200 text-xs">
              <h3 className="font-bold text-red-950 mb-2">{t('schemeDetail.disqualifyingFactors')}</h3>
              <ul className="list-disc list-inside space-y-1 text-red-900">
                {eligibility.disqualifyingReasons.map((disq, idx) => (
                  <li key={idx}>{tReason(disq)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* SECTION: OVERVIEW & FULL DESCRIPTION */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-900" />
            <span>{t('schemeDetail.overviewTitle')}</span>
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            {fullDesc}
          </p>
        </div>

        {/* SECTION: WHO IT IS FOR & TARGET CRITERIA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Building2 className="w-4 h-4 text-blue-900" />
              <span>{t('schemeDetail.whoItIsFor')}</span>
            </h2>

            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-slate-500 block font-medium">{t('schemeDetail.eligibleSocialCategories')}</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {scheme.beneficiaryCategories.map((cat, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-semibold">
                      {t(`category.${cat}`, {}, cat)}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-500 block font-medium">{t('schemeDetail.ageBracket')}</span>
                <p className="font-bold text-slate-900 mt-0.5">{t('schemeDetail.yearsOld', { min: scheme.minAge, max: scheme.maxAge })}</p>
              </div>

              <div>
                <span className="text-slate-500 block font-medium">{t('schemeDetail.incomeCeiling')}</span>
                <p className="font-bold text-slate-900 mt-0.5">
                  {scheme.incomeLimit ? t('schemeDetail.upToPerAnnum', { limit: formatINR(scheme.incomeLimit) }) : t('schemeDetail.noIncomeLimit')}
                </p>
              </div>

              <div>
                <span className="text-slate-500 block font-medium">{t('schemeDetail.approvedStages')}</span>
                <p className="font-bold text-slate-900 mt-0.5">
                  {scheme.businessStages.length > 0 ? scheme.businessStages.map(st => t(`businessStage.${st}`, {}, st)).join(' & ') : t('schemeDetail.allStages')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <IndianRupee className="w-4 h-4 text-emerald-600" />
              <span>{t('schemeDetail.financingLimits')}</span>
            </h2>

            <div className="space-y-2.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-500 block font-medium">{t('schemeDetail.maxLoanAmount')}</span>
                  <p className="font-bold text-slate-900 text-sm mt-0.5">{formatINR(scheme.maxLoanAmount)}</p>
                </div>

                <div>
                  <span className="text-slate-500 block font-medium">{t('schemeDetail.financingCoverage')}</span>
                  <p className="font-bold text-slate-900 text-sm mt-0.5">{t('schemeDetail.upToCost', { pct: scheme.financingPercentage })}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-500 block font-medium">{t('schemeDetail.projectCostLimits')}</span>
                  <p className="font-bold text-slate-900 mt-0.5">
                    {t('schemeDetail.costRange', { min: formatINR(scheme.minProjectCost), max: formatINR(scheme.maxProjectCost) })}
                  </p>
                </div>

                <div>
                  <span className="text-slate-500 block font-medium">{t('schemeDetail.promoterContribution')}</span>
                  <p className="font-bold text-slate-900 mt-0.5">{ownContributionText}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-500 block font-medium">{t('schemeDetail.repaymentTenure')}</span>
                  <p className="font-bold text-slate-900 mt-0.5">{t('schemeDetail.tenureYearsMonths', { years: Math.round(scheme.tenureMonths / 12), months: scheme.tenureMonths })}</p>
                </div>

                <div>
                  <span className="text-slate-500 block font-medium">{t('schemeDetail.moratoriumPeriod')}</span>
                  <p className="font-bold text-slate-900 mt-0.5">{t('schemeDetail.moratoriumMonths', { months: scheme.moratoriumMonths })}</p>
                </div>
              </div>

              <div>
                <span className="text-slate-500 block font-medium">{t('schemeDetail.applicableInterestRate')}</span>
                <p className="font-bold text-emerald-700 mt-0.5">{scheme.interestRate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: SUBSIDY & FINANCIAL INCENTIVE */}
        {subsidyInfo && (
          <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6 space-y-2">
            <h2 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>{t('schemeDetail.capitalSubsidyTitle')}</span>
            </h2>
            <p className="text-xs text-emerald-900 leading-relaxed">
              {subsidyInfo}
            </p>
          </div>
        )}

        {/* SECTION: REQUIRED DOCUMENTS CHECKLIST */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <FileText className="w-4 h-4 text-blue-900" />
            <span>{t('schemeDetail.documentsChecklist')}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {scheme.requiredDocuments.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span className="text-slate-800 font-medium">{tReason(doc)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: APPLICATION GUIDANCE */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Layers className="w-4 h-4 text-orange-600" />
            <span>{t('schemeDetail.applicationGuidance')}</span>
          </h2>

          <div className="space-y-3">
            {scheme.applicationGuidance.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs">
                <span className="w-6 h-6 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-slate-800 leading-relaxed pt-0.5">
                  {tReason(step)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: CHANNEL PARTNER TYPES */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Building2 className="w-4 h-4 text-blue-900" />
            <span>{t('schemeDetail.designatedPartners')}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {scheme.partnerTypes.map((partner, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center text-xs font-semibold text-slate-800">
                {tReason(partner) || partner}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: OFFICIAL SOURCE & VERIFICATION */}
        <div className="bg-slate-100 rounded-2xl border border-slate-300 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                {t('schemeDetail.officialSourceTitle')}
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                {scheme.sourceName}
              </h3>
              <p className="text-xs text-slate-600">
                {t('schemeDetail.lastVerified', { date: scheme.lastVerified, status: scheme.verificationStatus })}
              </p>
            </div>

            <a
              id="scheme-official-portal-link"
              href={scheme.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-900 hover:bg-blue-950 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-xs transition-colors shrink-0"
            >
              <span>{t('schemeDetail.visitPortal')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-[11px] text-slate-500 border-t border-slate-200 pt-3 leading-relaxed">
            <strong>{t('schemeDetail.prototypeNotes')}</strong> {tReason(scheme.prototypeNotes)}
          </p>
        </div>

        {/* Bottom Back & Navigation Action */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <button
            id="scheme-bottom-back-btn"
            onClick={onBackToRecommendations}
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('schemeDetail.returnToRecommendations')}</span>
          </button>

          <button
            id="scheme-bottom-calc-financing-btn"
            onClick={() => onCalculateFinancing(scheme)}
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-orange-400" />
            <span>{t('schemeDetail.estimateEmiBottom')}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
