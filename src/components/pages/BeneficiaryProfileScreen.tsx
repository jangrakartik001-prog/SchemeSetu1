import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  UserCheck, 
  AlertCircle, 
  RotateCcw
} from 'lucide-react';
import { 
  BeneficiaryProfile, 
  BeneficiaryValidationErrors, 
  GenderType,
  SocialCategoryType,
  EducationStatusType,
  EmploymentStatusType
} from '../../types';
import { 
  INDIAN_STATES_DISTRICTS, 
  INDIAN_LANGUAGES, 
  SOCIAL_CATEGORIES, 
  EDUCATION_LEVELS, 
  EMPLOYMENT_STATUSES 
} from '../../data/indiaData';
import { InputField } from '../common/InputField';
import { SelectField } from '../common/SelectField';
import { validateBeneficiaryProfile, formatINRCondensed } from '../../utils/formatters';
import { useLanguage } from '../../i18n/LanguageContext';

interface BeneficiaryProfileScreenProps {
  initialProfile: BeneficiaryProfile;
  onSaveAndNext: (profile: BeneficiaryProfile) => void;
  onBack: () => void;
  onLoadPreset?: (presetId: string) => void;
}

export const BeneficiaryProfileScreen: React.FC<BeneficiaryProfileScreenProps> = ({
  initialProfile,
  onSaveAndNext,
  onBack,
  onLoadPreset
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<BeneficiaryProfile>(initialProfile);
  const [errors, setErrors] = useState<BeneficiaryValidationErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  // Keep in sync if initialProfile changes from preset
  useEffect(() => {
    setFormData(initialProfile);
  }, [initialProfile]);

  const statesList = Object.keys(INDIAN_STATES_DISTRICTS);
  const availableDistricts = formData.state && INDIAN_STATES_DISTRICTS[formData.state] 
    ? INDIAN_STATES_DISTRICTS[formData.state] 
    : [];

  const handleInputChange = (field: keyof BeneficiaryProfile, value: string) => {
    const updated = { ...formData, [field]: value };
    
    // If state changes, reset district if it's no longer in the list
    if (field === 'state') {
      updated.district = '';
    }

    setFormData(updated);

    // If user has attempted submission, validate in real time
    if (hasSubmitted) {
      const liveErrors = validateBeneficiaryProfile(updated);
      setErrors(liveErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);

    const validationErrors = validateBeneficiaryProfile(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorKey = Object.keys(validationErrors)[0];
      const errorElem = document.getElementById(`beneficiary-${firstErrorKey}`);
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
      fullName: '',
      age: '',
      gender: '',
      state: '',
      district: '',
      socialCategory: '',
      annualFamilyIncome: '',
      educationStatus: '',
      employmentStatus: '',
      preferredLanguage: 'Hindi'
    });
    setErrors({});
    setHasSubmitted(false);
  };

  return (
    <div className="w-full py-8 sm:py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <button
            id="beneficiary-back-btn"
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors self-start cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('common.back')}</span>
          </button>

          {/* Quick presets for evaluation */}
          {onLoadPreset && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">{t('profile.samplePrompt')}</span>
              <button
                id="beneficiary-preset-artisan"
                type="button"
                onClick={() => onLoadPreset('artisan')}
                className="text-xs px-2.5 py-1 bg-white border border-slate-300 hover:border-blue-500 text-blue-900 font-medium rounded transition-colors cursor-pointer"
              >
                {t('profile.sampleArtisan')}
              </button>
              <button
                id="beneficiary-preset-food"
                type="button"
                onClick={() => onLoadPreset('food-processing')}
                className="text-xs px-2.5 py-1 bg-white border border-slate-300 hover:border-blue-500 text-blue-900 font-medium rounded transition-colors cursor-pointer"
              >
                {t('profile.sampleFood')}
              </button>
            </div>
          )}
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          
          {/* Card Header */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 border-b border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-800/80 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>{t('profile.stepBadge')}</span>
              </div>
              <span className="text-xs text-slate-300 font-medium">
                {t('common.mandatoryNotice')}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t('profile.title')}
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {t('profile.subtitle')}
            </p>
          </div>

          {/* Validation Alert summary if submit fails */}
          {hasSubmitted && Object.keys(errors).length > 0 && (
            <div className="m-6 sm:m-8 mb-0 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-red-900">
                  {t('profile.errorAlertTitle')}
                </h4>
                <p className="text-xs text-red-700 mt-0.5">
                  {t('profile.errorAlertDesc', { count: Object.keys(errors).length })}
                </p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Section 1: Basic Identity */}
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span>
                <span>{t('profile.secPersonal')}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name * */}
                <div className="sm:col-span-2">
                  <InputField
                    id="beneficiary-fullName"
                    name="fullName"
                    label={t('profile.fullNameLabel')}
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder={t('profile.fullNamePlaceholder')}
                    required
                    error={errors.fullName}
                    helperText={t('profile.fullNameHelper')}
                  />
                </div>

                {/* Age * */}
                <div>
                  <InputField
                    id="beneficiary-age"
                    name="age"
                    type="number"
                    min={18}
                    max={100}
                    label={t('profile.ageLabel')}
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    placeholder={t('profile.agePlaceholder')}
                    required
                    error={errors.age}
                    helperText={t('profile.ageHelper')}
                  />
                </div>

                {/* Gender (Optional) */}
                <div>
                  <SelectField
                    id="beneficiary-gender"
                    name="gender"
                    label={t('profile.genderLabel')}
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value as GenderType)}
                    options={['Male', 'Female', 'Transgender', 'Prefer not to say']}
                    placeholder={t('profile.genderPlaceholder')}
                    required={false}
                    error={errors.gender}
                    helperText={t('profile.genderHelper')}
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Location & Domicile */}
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span>
                <span>{t('profile.secLocation')}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* State * */}
                <div>
                  <SelectField
                    id="beneficiary-state"
                    name="state"
                    label={t('profile.stateLabel')}
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    options={statesList}
                    placeholder={t('profile.statePlaceholder')}
                    required
                    error={errors.state}
                    helperText={t('profile.stateHelper')}
                  />
                </div>

                {/* District * */}
                <div>
                  {availableDistricts.length > 0 ? (
                    <SelectField
                      id="beneficiary-district"
                      name="district"
                      label={t('profile.districtLabel')}
                      value={formData.district}
                      onChange={(e) => handleInputChange('district', e.target.value)}
                      options={availableDistricts}
                      placeholder={formData.state ? t('profile.districtPlaceholder') : 'First select State'}
                      required
                      error={errors.district}
                      disabled={!formData.state}
                      helperText={t('profile.districtHelper')}
                    />
                  ) : (
                    <InputField
                      id="beneficiary-district"
                      name="district"
                      label={t('profile.districtLabel')}
                      value={formData.district}
                      onChange={(e) => handleInputChange('district', e.target.value)}
                      placeholder={t('profile.districtPlaceholder')}
                      required
                      error={errors.district}
                      helperText={t('profile.districtHelper')}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Section 3: Social Category & Economic Status */}
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span>
                <span>{t('profile.secCategory')}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Social Category * */}
                <div>
                  <SelectField
                    id="beneficiary-socialCategory"
                    name="socialCategory"
                    label={t('profile.categoryLabel')}
                    value={formData.socialCategory}
                    onChange={(e) => handleInputChange('socialCategory', e.target.value as SocialCategoryType)}
                    options={SOCIAL_CATEGORIES}
                    placeholder={t('profile.categoryPlaceholder')}
                    required
                    error={errors.socialCategory}
                    helperText={t('profile.categoryHelper')}
                  />
                </div>

                {/* Annual Family Income * */}
                <div>
                  <InputField
                    id="beneficiary-annualFamilyIncome"
                    name="annualFamilyIncome"
                    type="number"
                    prefix="₹"
                    label={t('profile.incomeLabel')}
                    value={formData.annualFamilyIncome}
                    onChange={(e) => handleInputChange('annualFamilyIncome', e.target.value)}
                    placeholder={t('profile.incomePlaceholder')}
                    required
                    error={errors.annualFamilyIncome}
                    helperText={
                      formData.annualFamilyIncome && !isNaN(Number(formData.annualFamilyIncome))
                        ? `Equivalent to: ${formatINRCondensed(formData.annualFamilyIncome)}/year`
                        : t('profile.incomeHelper')
                    }
                  />
                </div>

                {/* Education Status (Optional) */}
                <div>
                  <SelectField
                    id="beneficiary-educationStatus"
                    name="educationStatus"
                    label={t('profile.educationLabel')}
                    value={formData.educationStatus}
                    onChange={(e) => handleInputChange('educationStatus', e.target.value as EducationStatusType)}
                    options={EDUCATION_LEVELS}
                    placeholder={t('profile.educationPlaceholder')}
                    required={false}
                    error={errors.educationStatus}
                    helperText={t('profile.educationHelper')}
                  />
                </div>

                {/* Employment / Business Status * */}
                <div>
                  <SelectField
                    id="beneficiary-employmentStatus"
                    name="employmentStatus"
                    label={t('profile.employmentLabel')}
                    value={formData.employmentStatus}
                    onChange={(e) => handleInputChange('employmentStatus', e.target.value as EmploymentStatusType)}
                    options={EMPLOYMENT_STATUSES}
                    placeholder={t('profile.employmentPlaceholder')}
                    required
                    error={errors.employmentStatus}
                    helperText={t('profile.employmentHelper')}
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                id="beneficiary-reset-btn"
                type="button"
                onClick={handleResetForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-medium transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-slate-500" />
                <span>{t('profile.resetForm')}</span>
              </button>

              <div className="w-full sm:w-auto flex items-center gap-3">
                <button
                  id="beneficiary-submit-next-btn"
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-semibold px-7 py-3 rounded-lg shadow-sm transition-all active:scale-98 text-sm cursor-pointer"
                >
                  <span>{t('profile.saveAndProceed')}</span>
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
