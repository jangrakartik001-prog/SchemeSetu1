import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2, 
  FileText, 
  Printer, 
  Sparkles, 
  Building2, 
  IndianRupee, 
  UserCheck, 
  AlertCircle, 
  ExternalLink,
  ShieldCheck,
  Check,
  RotateCcw,
  Info,
  Calendar,
  Layers,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import { BeneficiaryProfile, ProjectDetails, Scheme } from '../../types';
import { SCHEMES_DATABASE } from '../../data/schemesData';
import { rankChannelPartners } from '../../services/partnerRoutingEngine';
import { calculateEMI } from '../../services/financialEngine';
import { formatINR } from '../../utils/formatters';
import { useLanguage } from '../../i18n/LanguageContext';
import { getLocalizedDocument, getDocumentCategoryLabel } from '../../i18n/documentTranslations';

interface ApplicationReadinessScreenProps {
  beneficiary: BeneficiaryProfile;
  project: ProjectDetails;
  schemeId: string;
  onBackToPartner: () => void;
  onBackToSimulator: () => void;
  onBackToRecommendations: () => void;
  onEditProfile: () => void;
  onEditProject: () => void;
  onOpenAssistant: () => void;
  onStartNewAssessment: () => void;
  onProceedToApplicationReady?: () => void;
}

export const ApplicationReadinessScreen: React.FC<ApplicationReadinessScreenProps> = ({
  beneficiary,
  project,
  schemeId,
  onBackToPartner,
  onBackToSimulator,
  onBackToRecommendations,
  onEditProfile,
  onEditProject,
  onOpenAssistant,
  onStartNewAssessment,
  onProceedToApplicationReady
}) => {
  const { t, tScheme, tPartner, tReason, language } = useLanguage();

  const scheme = SCHEMES_DATABASE.find(s => s.id === schemeId) || SCHEMES_DATABASE[0];

  const totalCostNum = parseFloat((project.totalProjectCost || '').replace(/[^0-9.-]+/g, '')) || 0;
  const ownContribNum = parseFloat((project.ownContribution || '').replace(/[^0-9.-]+/g, '')) || 0;
  const requiredFinancingNum = Math.max(0, totalCostNum - ownContribNum);

  // Derive loan calculations
  const rate = scheme.defaultInterestRate || 9.0;
  const tenureMonths = scheme.tenureMonths || 60;
  const tenureYears = Math.round(tenureMonths / 12);
  const moratoriumMonths = scheme.moratoriumMonths || 0;
  const emiCalc = calculateEMI(requiredFinancingNum, rate, tenureMonths, moratoriumMonths, totalCostNum, ownContribNum);

  // Derive top channel partner
  const partnerRouting = rankChannelPartners({
    selectedSchemeId: scheme.id,
    projectType: (project.projectType as any) || 'Manufacturing',
    requiredFinancing: requiredFinancingNum > 0 ? requiredFinancingNum : 500000,
    beneficiaryState: beneficiary.state || 'Punjab',
    beneficiaryDistrict: beneficiary.district || 'Ludhiana',
  });
  const recommendedPartner = partnerRouting.recommendedPartner;

  // Base checklist items
  const baseChecklist = [
    { id: 'aadhaar', category: 'identity', key: 'aadhaar', label: 'Aadhaar Card (Identity & Age Proof with mobile link)', required: true },
    { id: 'pan', category: 'identity', key: 'pan', label: 'PAN Card (Income Tax & Banking KYC)', required: true },
    { id: 'residence', category: 'identity', key: 'residence', label: 'Proof of Residence (Voter ID / Domicile Certificate / Electricity Bill)', required: true },
    { id: 'photos', category: 'identity', key: 'photos', label: 'Passport Size Photographs (3 copies of promoter)', required: true },
    ...(beneficiary.socialCategory && !beneficiary.socialCategory.includes('General') ? [
      { id: 'caste', category: 'category', key: 'caste', params: { category: beneficiary.socialCategory }, label: `Category Certificate (${beneficiary.socialCategory}) issued by competent authority`, required: true }
    ] : []),
    ...(beneficiary.annualFamilyIncome ? [
      { id: 'income', category: 'category', key: 'income', label: 'Income Certificate / Self-Declaration of Annual Family Income', required: true }
    ] : []),
    { id: 'dpr', category: 'project', key: 'dpr', label: 'Detailed Project Report (DPR) covering machinery, raw materials & cashflow', required: true },
    { id: 'quotations', category: 'project', key: 'quotations', label: 'Machinery / Equipment Quotations & Invoices from verified suppliers', required: true },
    { id: 'land', category: 'project', key: 'land', label: 'Premises Proof (Rent/Lease Agreement or Land Ownership Record)', required: true },
    { id: 'bank', category: 'financial', key: 'bank', label: 'Bank Statement of applicant (Last 6 months showing promoter equity)', required: true },
    ...(scheme.requiredDocuments || []).map((doc, idx) => ({
      id: `scheme-doc-${idx}`,
      category: 'scheme',
      key: doc,
      label: doc,
      required: true
    }))
  ];

  // Interactive checkbox state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    aadhaar: true,
    pan: true,
    residence: true
  });

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalItems = baseChecklist.length;
  const completedCount = baseChecklist.filter(item => checkedItems[item.id]).length;
  const readinessPercent = Math.round((completedCount / (totalItems || 1)) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full py-8 sm:py-12 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation / Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            id="readiness-back-to-partner-btn"
            type="button"
            onClick={onBackToPartner}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('readiness.backToPartner')}</span>
          </button>

          <div className="flex items-center gap-2.5">
            {onProceedToApplicationReady && (
              <button
                id="readiness-proceed-app-ready-top-btn"
                type="button"
                onClick={onProceedToApplicationReady}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
              >
                <span>{t('appReady.prepareCTA')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              id="readiness-ask-ai-btn"
              type="button"
              onClick={onOpenAssistant}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-orange-50 border border-orange-300 text-orange-800 text-xs font-semibold hover:bg-orange-100 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>{t('readiness.askAi')}</span>
            </button>

            <button
              id="readiness-print-btn"
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors shadow-2xs cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>{t('readiness.printDossier')}</span>
            </button>
          </div>
        </div>

        {/* Hero Section Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700/60 text-blue-200 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('readiness.stepBadge')}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {t('readiness.title')}
            </h1>

            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              {t('readiness.desc')}
            </p>
          </div>
        </div>

        {/* FEATURED BANNER: Application Ready Experience */}
        {onProceedToApplicationReady && (
          <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-slate-900 rounded-2xl p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-5 border border-navy-700 shadow-md">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {t('appReady.stepBadge')}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  Next Step Workflow
                </span>
              </div>
              <h2 className="text-xl font-black text-white">
                {t('appReady.prepareCTA')}
              </h2>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                {t('appReady.prepareCTASub')}. {t('appReady.featureConcept')}
              </p>
            </div>
            <button
              type="button"
              id="readiness-banner-cta-btn"
              onClick={onProceedToApplicationReady}
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold flex items-center justify-center gap-2 transition shadow-md shrink-0 cursor-pointer"
            >
              <span>{t('appReady.prepareCTA')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* 4 Summary Cards: Scheme, Financing, Partner, Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Scheme */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {t('readiness.cardSelectedScheme')}
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {tScheme(scheme.id, 'name') || scheme.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                {tScheme(scheme.id, 'shortDescription') || scheme.shortDescription}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-700">{t('readiness.maxAmount', { amount: formatINR(scheme.maxLoanAmount) })}</span>
              <button 
                onClick={onBackToRecommendations} 
                className="text-xs text-blue-700 hover:text-blue-900 font-semibold cursor-pointer"
              >
                {t('readiness.change')}
              </button>
            </div>
          </div>

          {/* Card 2: Financing */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {t('readiness.cardRequiredFinancing')}
              </span>
              <div className="text-xl font-black text-blue-950">
                {formatINR(requiredFinancingNum)}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {t('readiness.estEmi', { emi: formatINR(emiCalc.monthlyEMI), rate, years: tenureYears })}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">{t('readiness.margin', { amount: formatINR(ownContribNum) })}</span>
              <button 
                onClick={onBackToSimulator} 
                className="text-xs text-blue-700 hover:text-blue-900 font-semibold cursor-pointer"
              >
                {t('readiness.simulate')}
              </button>
            </div>
          </div>

          {/* Card 3: Channel Partner */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {t('readiness.cardRecommendedPartner')}
              </span>
              <h3 className="text-sm font-bold text-blue-900 leading-snug">
                {recommendedPartner ? (tPartner(recommendedPartner.partner.id, 'name') || recommendedPartner.partner.name) : t('readiness.leadBank')}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {recommendedPartner ? `${recommendedPartner.partner.district}, ${recommendedPartner.partner.state}` : t('readiness.designatedBranch')}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-500">
                {recommendedPartner ? (tPartner(recommendedPartner.partner.id, 'type') || recommendedPartner.partner.type) : t('readiness.publicSectorBank', {}, 'Public Sector Bank')}
              </span>
              <button 
                onClick={onBackToPartner} 
                className="text-xs text-blue-700 hover:text-blue-900 font-semibold cursor-pointer"
              >
                {t('readiness.view')}
              </button>
            </div>
          </div>

          {/* Card 4: Applicant */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {t('readiness.cardApplicantEnterprise')}
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {beneficiary.fullName || t('readiness.registeredApplicant')}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {beneficiary.socialCategory ? t(`category.${beneficiary.socialCategory}`, {}, beneficiary.socialCategory) : 'General'} • {beneficiary.district}, {beneficiary.state}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 truncate max-w-[120px]">{project.projectName || t('readiness.newVenture')}</span>
              <button 
                onClick={onEditProfile} 
                className="text-xs text-blue-700 hover:text-blue-900 font-semibold cursor-pointer"
              >
                {t('readiness.edit')}
              </button>
            </div>
          </div>

        </div>

        {/* Readiness Checklist: Prepare these documents */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-900" />
                <span>{t('readiness.prepareDocsTitle')}</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {t('readiness.prepareDocsSub')}
              </p>
            </div>

            {/* Progress indicator */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-xs font-bold text-slate-800">{t('readiness.readyCounter', { completed: completedCount, total: totalItems })}</span>
                <span className="block text-[11px] text-slate-500">{t('readiness.completePercent', { pct: readinessPercent })}</span>
              </div>
              <div className="w-24 bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
                <div 
                  className={`h-full transition-all duration-300 ${
                    readinessPercent === 100 ? 'bg-emerald-600' : readinessPercent >= 60 ? 'bg-blue-600' : 'bg-orange-500'
                  }`} 
                  style={{ width: `${readinessPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {baseChecklist.map((item) => {
              const isChecked = !!checkedItems[item.id];
              const docInfo = getLocalizedDocument(item.key || item.label, language, item.params);
              const categoryLabel = getDocumentCategoryLabel(item.category, language);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                    isChecked
                      ? 'bg-emerald-50/50 border-emerald-300 text-slate-900'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                      isChecked
                        ? 'bg-emerald-600 text-white'
                        : 'border border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div className="text-xs flex-1">
                    <span className={`font-semibold ${isChecked ? 'text-emerald-950' : 'text-slate-800'}`}>
                      {docInfo.name}
                    </span>
                    {docInfo.description && (
                      <span className="block text-[11px] text-slate-500 mt-0.5 leading-snug">
                        {docInfo.description}
                      </span>
                    )}
                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider mt-1">
                      {categoryLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Steps: What to do next */}
        <div className="bg-white rounded-2xl border border-blue-200 p-6 sm:p-8 shadow-xs space-y-5">
          <h2 className="text-lg font-bold text-blue-950 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-900" />
            <span>{t('readiness.nextStepsTitle')}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900">{t('readiness.step1Title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('readiness.step1Desc', { cost: formatINR(totalCostNum) })}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900">{t('readiness.step2Title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('readiness.step2Desc')}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900">{t('readiness.step3Title')}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('readiness.step3Desc', { partner: recommendedPartner ? (tPartner(recommendedPartner.partner.id, 'name') || recommendedPartner.partner.name) : t('readiness.designatedBranch') })}
              </p>
            </div>
          </div>
        </div>

        {/* Prototype & Transparency Notice */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-semibold block text-amber-950">{t('readiness.noticeTitle')}</strong>
            <p className="leading-relaxed">
              {t('readiness.noticeText')}
            </p>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          <button
            type="button"
            onClick={onBackToPartner}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('readiness.backToPartner')}</span>
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {onProceedToApplicationReady && (
              <button
                type="button"
                id="readiness-proceed-app-ready-bottom-btn"
                onClick={onProceedToApplicationReady}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold shadow-sm transition-colors cursor-pointer"
              >
                <span>{t('appReady.prepareCTA')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={onOpenAssistant}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>{t('readiness.askAssistant')}</span>
            </button>

            <button
              type="button"
              onClick={onStartNewAssessment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-medium transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('readiness.startNew')}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
