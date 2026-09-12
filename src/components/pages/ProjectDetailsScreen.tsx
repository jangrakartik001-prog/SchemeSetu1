import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Briefcase, 
  AlertCircle, 
  Calculator, 
  IndianRupee, 
  RotateCcw, 
  AlertTriangle
} from 'lucide-react';
import { 
  ProjectDetails, 
  ProjectValidationErrors,
  ProjectType,
  BusinessNatureType,
  PreferredLocationType,
  PurposeOfFinancingType,
  ExperienceLevelType
} from '../../types';
import { 
  PROJECT_TYPES, 
  BUSINESS_NATURES, 
  PREFERRED_LOCATIONS, 
  FINANCING_PURPOSES, 
  EXPERIENCE_LEVELS 
} from '../../data/indiaData';
import { InputField } from '../common/InputField';
import { SelectField } from '../common/SelectField';
import { validateProjectDetails, formatINR, formatINRCondensed } from '../../utils/formatters';
import { useLanguage } from '../../i18n/LanguageContext';

interface ProjectDetailsScreenProps {
  initialProject: ProjectDetails;
  onSaveAndNext: (project: ProjectDetails) => void;
  onBack: () => void;
}

export const ProjectDetailsScreen: React.FC<ProjectDetailsScreenProps> = ({
  initialProject,
  onSaveAndNext,
  onBack
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ProjectDetails>(initialProject);
  const [errors, setErrors] = useState<ProjectValidationErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setFormData(initialProject);
  }, [initialProject]);

  // Real-time financial calculations
  const totalCostNum = parseFloat(formData.totalProjectCost.replace(/[^0-9.-]+/g, '')) || 0;
  const ownContributionNum = parseFloat(formData.ownContribution.replace(/[^0-9.-]+/g, '')) || 0;
  const isOwnExceeded = totalCostNum > 0 && ownContributionNum > totalCostNum;
  const calculatedRequiredFinancing = Math.max(0, totalCostNum - ownContributionNum);

  const ownPercent = totalCostNum > 0 
    ? Math.min(100, Math.max(0, (ownContributionNum / totalCostNum) * 100)) 
    : 0;
  const debtPercent = totalCostNum > 0 
    ? Math.min(100, Math.max(0, (calculatedRequiredFinancing / totalCostNum) * 100)) 
    : 0;

  const handleInputChange = (field: keyof ProjectDetails, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    if (hasSubmitted) {
      const liveErrors = validateProjectDetails(updated);
      setErrors(liveErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    const validationErrors = validateProjectDetails(formData);
    
    // Explicit safety check: own contribution cannot exceed total cost
    if (isOwnExceeded) {
      validationErrors.ownContribution = t('project.ownContributionExceeded');
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorKey = Object.keys(validationErrors)[0];
      const errorElem = document.getElementById(`project-${firstErrorKey}`);
      if (errorElem) {
        errorElem.focus();
        errorElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    onSaveAndNext(formData);
  };

  const handleResetForm = () => {
    setFormData({
      projectName: '',
      projectType: '',
      businessNature: '',
      description: '',
      totalProjectCost: '',
      ownContribution: '',
      preferredLocation: '',
      purposeOfFinancing: '',
      relevantExperience: '',
      existingIncome: ''
    });
    setErrors({});
    setHasSubmitted(false);
  };

  return (
    <div className="w-full py-8 sm:py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            id="project-back-btn"
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('project.backToProfile')}</span>
          </button>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          
          {/* Card Header */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 border-b border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-orange-600/90 text-white text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>{t('project.stepBadge')}</span>
              </div>
              <span className="text-xs text-slate-300 font-medium">
                {t('common.mandatoryNotice')}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t('project.title')}
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {t('project.subtitle')}
            </p>
          </div>

          {/* Validation Alert summary if submit fails */}
          {hasSubmitted && Object.keys(errors).length > 0 && (
            <div className="m-6 sm:m-8 mb-0 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-red-900">
                  {t('project.errorAlertTitle')}
                </h4>
                <p className="text-xs text-red-700 mt-0.5">
                  {t('project.errorAlertDesc', { count: Object.keys(errors).length })}
                </p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-7">
            
            {/* Section 1: Business Overview */}
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span>
                <span>{t('project.secFinancials')}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Project / Business Name * */}
                <div className="sm:col-span-2">
                  <InputField
                    id="project-projectName"
                    name="projectName"
                    label={t('project.nameLabel')}
                    value={formData.projectName}
                    onChange={(e) => handleInputChange('projectName', e.target.value)}
                    placeholder={t('project.namePlaceholder')}
                    required
                    error={errors.projectName}
                    helperText={t('project.nameHelper')}
                  />
                </div>

                {/* Project Type * */}
                <div>
                  <SelectField
                    id="project-projectType"
                    name="projectType"
                    label={t('project.typeLabel')}
                    value={formData.projectType}
                    onChange={(e) => handleInputChange('projectType', e.target.value as ProjectType)}
                    options={PROJECT_TYPES}
                    placeholder={t('project.typePlaceholder')}
                    required
                    error={errors.projectType}
                    helperText={t('project.typeHelper')}
                  />
                </div>

                {/* New or Existing Business * */}
                <div>
                  <SelectField
                    id="project-businessNature"
                    name="businessNature"
                    label={t('project.natureLabel')}
                    value={formData.businessNature}
                    onChange={(e) => handleInputChange('businessNature', e.target.value as BusinessNatureType)}
                    options={BUSINESS_NATURES}
                    placeholder={t('project.naturePlaceholder')}
                    required
                    error={errors.businessNature}
                    helperText={t('project.natureHelper')}
                  />
                </div>

                {/* Description * */}
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label htmlFor="project-description" className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                    <span>{t('project.descLabel')}</span>
                    <span className="text-red-600 font-bold text-base leading-none" title="Required field">*</span>
                  </label>
                  <textarea
                    id="project-description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder={t('project.descPlaceholder')}
                    aria-invalid={!!errors.description}
                    className={`block w-full rounded-md border text-slate-900 text-sm transition-colors p-3 bg-white ${
                      errors.description
                        ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                        : 'border-slate-300 hover:border-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700'
                    }`}
                  />
                  {errors.description ? (
                    <p className="text-xs font-medium text-red-600 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.description}</span>
                    </p>
                  ) : (
                    <p className="text-xs text-slate-500">
                      {t('project.descHelper')}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2: Financial Requirements & Auto-calculation */}
            <div className="border-b border-slate-200 pb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span>
                  <span>{t('project.secFinances')}</span>
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-blue-900 font-medium bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  <Calculator className="w-3.5 h-3.5 text-blue-700" />
                  <span>{t('project.autoCalcBadge')}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Total Project Cost * */}
                <div>
                  <InputField
                    id="project-totalProjectCost"
                    name="totalProjectCost"
                    type="number"
                    prefix="₹"
                    label={t('project.costLabel')}
                    value={formData.totalProjectCost}
                    onChange={(e) => handleInputChange('totalProjectCost', e.target.value)}
                    placeholder={t('project.costPlaceholder')}
                    required
                    error={errors.totalProjectCost}
                    helperText={
                      totalCostNum > 0
                        ? `Formatted: ${formatINR(totalCostNum)} (${formatINRCondensed(totalCostNum)})`
                        : t('project.costHelper')
                    }
                  />
                </div>

                {/* Own Contribution * */}
                <div>
                  <InputField
                    id="project-ownContribution"
                    name="ownContribution"
                    type="number"
                    prefix="₹"
                    label={t('project.ownContributionLabel')}
                    value={formData.ownContribution}
                    onChange={(e) => handleInputChange('ownContribution', e.target.value)}
                    placeholder={t('project.ownContributionPlaceholder')}
                    required
                    error={errors.ownContribution}
                    helperText={
                      ownContributionNum > 0
                        ? `Promoter Equity: ${formatINR(ownContributionNum)} (${ownPercent.toFixed(1)}% of total cost)`
                        : t('project.ownContributionHelper')
                    }
                  />
                </div>
              </div>

              {/* Active Warning if Own Contribution exceeds Total Cost */}
              {isOwnExceeded && (
                <div className="p-4 bg-red-50 border border-red-300 rounded-lg flex items-start gap-3 mb-5">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-red-900">
                      {t('project.ownContributionExceeded')}
                    </h4>
                    <p className="text-xs text-red-700 mt-0.5">
                      Your own contribution ({formatINR(ownContributionNum)}) cannot be greater than the total project cost ({formatINR(totalCostNum)}). Please adjust the amounts.
                    </p>
                  </div>
                </div>
              )}

              {/* Automatic Financial Breakdown Dashboard Box */}
              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-orange-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      {t('project.capitalStructure')}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {t('project.formula')}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                  {/* Metric 1 */}
                  <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700">
                    <p className="text-xs text-slate-400 font-medium">{t('project.totalCost')}</p>
                    <p className="text-lg font-bold text-white mt-0.5">
                      {formatINR(totalCostNum)}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">100% Capital Base</p>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700">
                    <p className="text-xs text-slate-400 font-medium">{t('project.promoterContribLabel')}</p>
                    <p className="text-lg font-bold text-orange-400 mt-0.5">
                      {formatINR(ownContributionNum)}
                    </p>
                    <p className="text-[11px] text-orange-300 mt-0.5">
                      {totalCostNum > 0 ? `${ownPercent.toFixed(1)}% Promoter Share` : '0%'}
                    </p>
                  </div>

                  {/* Metric 3: Automatically Calculated */}
                  <div className="p-3 bg-blue-950 rounded-lg border border-blue-700/80">
                    <p className="text-xs text-blue-200 font-medium">{t('project.targetFinancing')}</p>
                    <p className="text-xl font-extrabold text-emerald-400 mt-0.5">
                      {formatINR(calculatedRequiredFinancing)}
                    </p>
                    <p className="text-[11px] text-emerald-300 mt-0.5">
                      {totalCostNum > 0 ? `${debtPercent.toFixed(1)}% Debt Requirement` : 'Calculated'}
                    </p>
                  </div>
                </div>

                {/* Visual Ratio Bar */}
                {totalCostNum > 0 && !isOwnExceeded && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                      <span>Promoter Equity: {ownPercent.toFixed(0)}%</span>
                      <span>Bank/Scheme Financing: {debtPercent.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden flex">
                      <div 
                        className="bg-orange-500 h-full transition-all duration-300"
                        style={{ width: `${ownPercent}%` }}
                        title={`Own Contribution: ${ownPercent.toFixed(1)}%`}
                      />
                      <div 
                        className="bg-emerald-500 h-full transition-all duration-300"
                        style={{ width: `${debtPercent}%` }}
                        title={`Required Financing: ${debtPercent.toFixed(1)}%`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Section 3: Location, Purpose & Experience */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span>
                <span>{t('project.secParameters')}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Preferred Location * */}
                <div>
                  <SelectField
                    id="project-preferredLocation"
                    name="preferredLocation"
                    label={t('project.locationLabel')}
                    value={formData.preferredLocation}
                    onChange={(e) => handleInputChange('preferredLocation', e.target.value as PreferredLocationType)}
                    options={PREFERRED_LOCATIONS}
                    placeholder={t('project.locationPlaceholder')}
                    required
                    error={errors.preferredLocation}
                    helperText={t('project.locationHelper')}
                  />
                </div>

                {/* Purpose of Financing * */}
                <div>
                  <SelectField
                    id="project-purposeOfFinancing"
                    name="purposeOfFinancing"
                    label={t('project.purposeLabel')}
                    value={formData.purposeOfFinancing}
                    onChange={(e) => handleInputChange('purposeOfFinancing', e.target.value as PurposeOfFinancingType)}
                    options={FINANCING_PURPOSES}
                    placeholder={t('project.purposePlaceholder')}
                    required
                    error={errors.purposeOfFinancing}
                    helperText={t('project.purposeHelper')}
                  />
                </div>

                {/* Relevant Experience (Optional) */}
                <div>
                  <SelectField
                    id="project-relevantExperience"
                    name="relevantExperience"
                    label={t('project.experienceLabel')}
                    value={formData.relevantExperience}
                    onChange={(e) => handleInputChange('relevantExperience', e.target.value as ExperienceLevelType)}
                    options={EXPERIENCE_LEVELS}
                    placeholder={t('project.experiencePlaceholder')}
                    required={false}
                    error={errors.relevantExperience}
                    helperText={t('project.experienceHelper')}
                  />
                </div>

                {/* Existing Income (Optional) */}
                <div>
                  <InputField
                    id="project-existingIncome"
                    name="existingIncome"
                    type="number"
                    prefix="₹"
                    label={t('project.existingIncomeLabel')}
                    value={formData.existingIncome}
                    onChange={(e) => handleInputChange('existingIncome', e.target.value)}
                    placeholder={t('project.existingIncomePlaceholder')}
                    required={false}
                    error={errors.existingIncome}
                    helperText={
                      formData.existingIncome && !isNaN(Number(formData.existingIncome))
                        ? `Equivalent: ${formatINRCondensed(formData.existingIncome)}/year`
                        : t('project.existingIncomeHelper')
                    }
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                id="project-reset-btn"
                type="button"
                onClick={handleResetForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-medium transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-slate-500" />
                <span>{t('project.resetForm')}</span>
              </button>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
                <button
                  id="project-back-step-btn"
                  type="button"
                  onClick={onBack}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-medium transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t('project.backToProfile')}</span>
                </button>

                <button
                  id="project-submit-next-btn"
                  type="submit"
                  disabled={isOwnExceeded}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold px-7 py-3 rounded-lg shadow-sm transition-all text-sm cursor-pointer ${
                    isOwnExceeded 
                      ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                      : 'bg-blue-900 hover:bg-blue-950 text-white active:scale-98'
                  }`}
                >
                  <span>{t('project.saveAndProceed')}</span>
                  <ArrowRight className="w-4 h-4 text-orange-400" />
                </button>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};
