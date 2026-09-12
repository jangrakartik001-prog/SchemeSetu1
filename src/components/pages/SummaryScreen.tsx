import React from 'react';
import { 
  User, 
  Briefcase, 
  IndianRupee, 
  ArrowRight, 
  ArrowLeft, 
  Edit3, 
  CheckCircle, 
  Layers
} from 'lucide-react';
import { BeneficiaryProfile, ProjectDetails } from '../../types';
import { formatINR, formatINRCondensed } from '../../utils/formatters';
import { useLanguage } from '../../i18n/LanguageContext';

interface SummaryScreenProps {
  beneficiary: BeneficiaryProfile;
  project: ProjectDetails;
  onEditBeneficiary: () => void;
  onEditProject: () => void;
  onContinueToMatching: () => void;
  onBack: () => void;
}

export const SummaryScreen: React.FC<SummaryScreenProps> = ({
  beneficiary,
  project,
  onEditBeneficiary,
  onEditProject,
  onContinueToMatching,
  onBack
}) => {
  const { t } = useLanguage();
  const totalCostNum = parseFloat(project.totalProjectCost.replace(/[^0-9.-]+/g, '')) || 0;
  const ownContributionNum = parseFloat(project.ownContribution.replace(/[^0-9.-]+/g, '')) || 0;
  const requiredFinancingNum = Math.max(0, totalCostNum - ownContributionNum);

  const ownPercent = totalCostNum > 0 ? (ownContributionNum / totalCostNum) * 100 : 0;
  const debtPercent = totalCostNum > 0 ? (requiredFinancingNum / totalCostNum) * 100 : 0;

  return (
    <div className="w-full py-8 sm:py-12 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            id="summary-back-btn"
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('summary.backToProject')}</span>
          </button>
          
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('summary.formCompleted')}</span>
          </span>
        </div>

        {/* Top Summary Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-800/80 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Layers className="w-4 h-4" />
                <span>{t('summary.stageBadge')}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t('summary.title')}
              </h1>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {t('summary.subtitle')}
              </p>
            </div>

            <button
              id="summary-top-continue-btn"
              onClick={onContinueToMatching}
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3.5 rounded-lg shadow-md transition-all active:scale-98 text-sm shrink-0 cursor-pointer"
            >
              <span>{t('summary.continueBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Financial Highlights Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-emerald-600" />
                <span>{t('summary.finOverviewTitle')}</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {t('summary.finOverviewSub')}
              </p>
            </div>
            <button
              id="summary-edit-financials-btn"
              onClick={onEditProject}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-800 hover:text-blue-950 bg-blue-50 px-3 py-1.5 rounded border border-blue-200 transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{t('common.edit')}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {/* Total Project Cost */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t('summary.totalCost')}
              </span>
              <p className="text-2xl font-extrabold text-slate-900 mt-1">
                {formatINR(totalCostNum)}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {formatINRCondensed(totalCostNum)} total required capital
              </p>
            </div>

            {/* Own Contribution */}
            <div className="bg-orange-50/60 rounded-xl p-5 border border-orange-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-900">
                  {t('summary.promoterContrib')}
                </span>
                <span className="text-xs font-bold text-orange-800 bg-orange-100 px-2 py-0.5 rounded">
                  {ownPercent.toFixed(1)}%
                </span>
              </div>
              <p className="text-2xl font-extrabold text-orange-600 mt-1">
                {formatINR(ownContributionNum)}
              </p>
              <p className="text-xs text-orange-800 mt-1">
                Promoter Margin Money / Equity
              </p>
            </div>

            {/* Required Financing */}
            <div className="bg-emerald-50/60 rounded-xl p-5 border border-emerald-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
                  {t('summary.requiredDebt')}
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  {debtPercent.toFixed(1)}%
                </span>
              </div>
              <p className="text-2xl font-extrabold text-emerald-700 mt-1">
                {formatINR(requiredFinancingNum)}
              </p>
              <p className="text-xs text-emerald-800 mt-1">
                Net Debt / Scheme Assistance Needed
              </p>
            </div>
          </div>

          {/* Capital Structure Ratio Bar */}
          <div>
            <div className="flex justify-between text-xs text-slate-600 mb-2 font-medium">
              <span>Promoter Share: {formatINR(ownContributionNum)} ({ownPercent.toFixed(1)}%)</span>
              <span>Debt / Assistance Needed: {formatINR(requiredFinancingNum)} ({debtPercent.toFixed(1)}%)</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex border border-slate-200">
              <div 
                className="bg-orange-500 h-full"
                style={{ width: `${ownPercent}%` }}
              />
              <div 
                className="bg-emerald-600 h-full"
                style={{ width: `${debtPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Two-Column Review: Beneficiary vs Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Card 1: Beneficiary Profile Summary */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 sm:p-7 flex flex-col">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {t('summary.beneficiarySummaryTitle')}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {t('summary.beneficiarySummarySubtitle')}
                  </p>
                </div>
              </div>
              <button
                id="summary-edit-profile-btn"
                onClick={onEditBeneficiary}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-800 hover:text-blue-950 bg-blue-50 px-2.5 py-1.5 rounded border border-blue-200 transition-colors cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{t('summary.editBtn')}</span>
              </button>
            </div>

            <div className="space-y-3.5 text-sm flex-1">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('profile.fullNameLabel')}</span>
                <span className="font-bold text-slate-900 text-right">{beneficiary.fullName || '—'}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('profile.ageLabel')} & {t('profile.genderLabel')}</span>
                <span className="font-medium text-slate-900 text-right">
                  {beneficiary.age ? `${beneficiary.age} Years` : '—'} {beneficiary.gender ? `• ${beneficiary.gender}` : ''}
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('profile.secLocation')}</span>
                <span className="font-medium text-slate-900 text-right">
                  {beneficiary.district ? `${beneficiary.district}, ` : ''}{beneficiary.state || '—'}
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('profile.categoryLabel')}</span>
                <span className="font-semibold text-blue-900 text-right bg-blue-50 px-2 py-0.5 rounded text-xs">
                  {beneficiary.socialCategory || '—'}
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('profile.incomeLabel')}</span>
                <span className="font-bold text-slate-900 text-right">
                  {beneficiary.annualFamilyIncome ? formatINR(beneficiary.annualFamilyIncome) : '—'}
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('profile.educationLabel')}</span>
                <span className="font-medium text-slate-800 text-right">{beneficiary.educationStatus || 'Not specified'}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('profile.employmentLabel')}</span>
                <span className="font-medium text-slate-800 text-right">{beneficiary.employmentStatus || '—'}</span>
              </div>

              <div className="flex justify-between py-1.5">
                <span className="text-slate-500 text-xs font-medium">{t('common.language')}</span>
                <span className="font-medium text-slate-900 text-right">{beneficiary.preferredLanguage || '—'}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Project / Business Details Summary */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 sm:p-7 flex flex-col">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-900 flex items-center justify-center font-bold">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {t('summary.projectSummaryTitle')}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {t('summary.projectSummarySubtitle')}
                  </p>
                </div>
              </div>
              <button
                id="summary-edit-project-btn"
                onClick={onEditProject}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-800 hover:text-blue-950 bg-blue-50 px-2.5 py-1.5 rounded border border-blue-200 transition-colors cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{t('summary.editBtn')}</span>
              </button>
            </div>

            <div className="space-y-3.5 text-sm flex-1">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('project.nameLabel')}</span>
                <span className="font-bold text-slate-900 text-right">{project.projectName || '—'}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('project.typeLabel')}</span>
                <span className="font-medium text-slate-900 text-right">{project.projectType || '—'}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('project.natureLabel')}</span>
                <span className="font-medium text-slate-900 text-right">{project.businessNature || '—'}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('project.locationLabel')}</span>
                <span className="font-medium text-slate-900 text-right">{project.preferredLocation || '—'}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('project.purposeLabel')}</span>
                <span className="font-medium text-slate-800 text-right">{project.purposeOfFinancing || '—'}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-medium">{t('project.experienceLabel')}</span>
                <span className="font-medium text-slate-800 text-right">{project.relevantExperience || 'Beginner'}</span>
              </div>

              {project.existingIncome && (
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 text-xs font-medium">{t('project.existingIncomeLabel')}</span>
                  <span className="font-medium text-slate-800 text-right">{formatINR(project.existingIncome)}/year</span>
                </div>
              )}

              <div className="py-2">
                <span className="text-slate-500 text-xs font-medium block mb-1">{t('project.descLabel')}</span>
                <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-100 leading-relaxed">
                  {project.description || 'No description provided'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Action Bottom Bar */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            id="summary-bottom-back-btn"
            type="button"
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('summary.backBtn')}</span>
          </button>

          <button
            id="summary-continue-to-matching-btn"
            onClick={onContinueToMatching}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md transition-all active:scale-98 text-sm cursor-pointer"
          >
            <span>{t('summary.continueBtn')}</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>

      </div>
    </div>
  );
};
