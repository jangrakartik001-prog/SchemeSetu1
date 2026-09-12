import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  FileText, 
  UploadCloud, 
  Trash2, 
  RefreshCw, 
  Calendar, 
  Building2, 
  Printer, 
  Download, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Info, 
  IndianRupee, 
  Sparkles, 
  Check, 
  FileCheck,
  User,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { 
  BeneficiaryProfile, 
  ProjectDetails, 
  ChannelPartner, 
  DocumentStatusType, 
  UploadedDemoFile,
  Scheme,
  FinancialCalculationResult
} from '../../types';
import { 
  getLocalizedDocument, 
  getDocumentCategoryLabel, 
  DocumentItem 
} from '../../i18n/documentTranslations';

interface ApplicationReadyScreenProps {
  beneficiary: BeneficiaryProfile;
  project: ProjectDetails;
  scheme: Scheme;
  financialResult: FinancialCalculationResult;
  recommendedPartner: ChannelPartner;
  alternativePartners?: ChannelPartner[];
  // Persistent state passed down from App
  currentStep: 1 | 2 | 3 | 4;
  onStepChange: (step: 1 | 2 | 3 | 4) => void;
  documentStatuses: Record<string, DocumentStatusType>;
  onUpdateDocumentStatus: (docId: string, status: DocumentStatusType) => void;
  uploadedFiles: Record<string, UploadedDemoFile>;
  onFileUpload: (docId: string, file: UploadedDemoFile) => void;
  onFileRemove: (docId: string) => void;
  selectedPartner: ChannelPartner;
  onSelectPartner: (partner: ChannelPartner) => void;
  appointmentDate: string;
  onAppointmentDateChange: (date: string) => void;
  appointmentSlot: string;
  onAppointmentSlotChange: (slot: string) => void;
  appointmentPurpose: string;
  onAppointmentPurposeChange: (purpose: string) => void;
  referenceId: string | null;
  onConfirmAppointment: (refId: string) => void;
  onBackToNextSteps: () => void;
  onOpenAssistant: () => void;
  onStartNewAssessment: () => void;
}

export const ApplicationReadyScreen: React.FC<ApplicationReadyScreenProps> = ({
  beneficiary,
  project,
  scheme,
  financialResult,
  recommendedPartner,
  alternativePartners = [],
  currentStep,
  onStepChange,
  documentStatuses,
  onUpdateDocumentStatus,
  uploadedFiles,
  onFileUpload,
  onFileRemove,
  selectedPartner,
  onSelectPartner,
  appointmentDate,
  onAppointmentDateChange,
  appointmentSlot,
  onAppointmentSlotChange,
  appointmentPurpose,
  onAppointmentPurposeChange,
  referenceId,
  onConfirmAppointment,
  onBackToNextSteps,
  onOpenAssistant,
  onStartNewAssessment
}) => {
  const { t, language } = useLanguage();
  const [fileError, setFileError] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState(false);

  // Generate deterministic document items from base profile and selected scheme
  const baseDocumentItems: DocumentItem[] = [
    { id: 'aadhaar_pan', category: 'identity', titleKey: 'aadhaar_pan', descKey: 'aadhaar_pan', required: true },
    { id: 'residence', category: 'identity', titleKey: 'residence', descKey: 'residence', required: true },
    { id: 'caste', category: 'category', titleKey: 'caste', descKey: 'caste', required: beneficiary.socialCategory !== 'General' },
    { id: 'income', category: 'category', titleKey: 'income', descKey: 'income', required: true },
    { id: 'dpr', category: 'project', titleKey: 'dpr', descKey: 'dpr', required: true },
    { id: 'quotations', category: 'project', titleKey: 'quotations', descKey: 'quotations', required: true },
    { id: 'bank', category: 'financial', titleKey: 'bank', descKey: 'bank', required: true },
    { id: 'land', category: 'project', titleKey: 'land', descKey: 'land', required: false }
  ];

  // Additional scheme specific documents
  const schemeDocItems: DocumentItem[] = (scheme.requiredDocuments || []).map((docStr, idx) => {
    return {
      id: `scheme_doc_${idx}`,
      category: 'scheme',
      titleKey: docStr,
      descKey: docStr,
      required: true
    };
  });

  // Combine and deduplicate
  const allDocuments = [...baseDocumentItems, ...schemeDocItems];

  // Calculate readiness score
  const requiredDocs = allDocuments.filter(d => d.required !== false);
  const readyDocs = requiredDocs.filter(d => documentStatuses[d.id] === 'Ready');
  const readinessPercentage = requiredDocs.length > 0 
    ? Math.round((readyDocs.length / requiredDocs.length) * 100) 
    : 100;

  // File upload validation handler
  const handleFileInputChange = (docId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    const maxSizeBytes = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|jpg|jpeg|png)$/i)) {
      setFileError(t('appReady.invalidFileType'));
      return;
    }

    if (file.size > maxSizeBytes) {
      setFileError(t('appReady.fileTooLarge'));
      return;
    }

    onFileUpload(docId, {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
    });
    onUpdateDocumentStatus(docId, 'Ready');
    // Reset file input
    e.target.value = '';
  };

  // Generate prototype reference ID if not generated
  const handleProceedToConfirmation = () => {
    if (!referenceId) {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `SS-DEMO-26${randomSuffix}`;
      onConfirmAppointment(generatedRef);
    }
    onStepChange(4);
  };

  // Simulated appointment days (next 5 business days)
  const demoDates = [
    { date: '2026-09-15', label: '15 Sep (Mon)' },
    { date: '2026-09-16', label: '16 Sep (Tue)' },
    { date: '2026-09-17', label: '17 Sep (Wed)' },
    { date: '2026-09-18', label: '18 Sep (Thu)' },
    { date: '2026-09-19', label: '19 Sep (Fri)' }
  ];

  const demoSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM'];

  // Handle Dossier Download (Plain Text formatted dossier)
  const handleDownloadDossier = () => {
    const lines = [
      '========================================================================',
      '               SCHEMESETU DIGITAL APPLICATION DOSSIER                   ',
      '         Prototype Credit Readiness & Channel Partner Submission        ',
      '========================================================================',
      `Reference ID: ${referenceId || 'SS-DEMO-PENDING'}`,
      `Generated At: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      `Selected Scheme: ${scheme.name}`,
      `Recommended Partner: ${selectedPartner.name}`,
      '------------------------------------------------------------------------',
      '',
      'SECTION 1: APPLICANT PROFILE',
      `Full Name: ${beneficiary.fullName || (beneficiary as any).name || 'Applicant'}`,
      `Age: ${beneficiary.age || 'N/A'}`,
      `Gender: ${beneficiary.gender || 'N/A'}`,
      `Social Category: ${beneficiary.socialCategory || 'General'}`,
      `Location: ${beneficiary.district || 'District'}, ${beneficiary.state || 'State'}`,
      `Educational Qualification: ${beneficiary.educationStatus || (beneficiary as any).educationLevel || 'Graduate'}`,
      `Current Employment: ${beneficiary.employmentStatus || (beneficiary as any).currentEmploymentStatus || 'Self-Employed'}`,
      `Annual Family Income: ₹${Number(beneficiary.annualFamilyIncome)?.toLocaleString('en-IN') || beneficiary.annualFamilyIncome || 'N/A'}`,
      '',
      'SECTION 2: PROJECT DETAILS',
      `Project Title: ${project.projectName || (project as any).name || 'Micro Enterprise Project'}`,
      `Business Nature: ${project.businessNature || (project as any).nature || 'New Enterprise (Greenfield)'}`,
      `Sector / Project Type: ${project.projectType || (project as any).sector || 'Manufacturing & Production'}`,
      `Unit Location Preference: ${project.preferredLocation || (project as any).location || 'Semi-Urban'}`,
      `Prior Experience: ${project.relevantExperience || (project as any).experienceYears || '1 to 2 Years'}`,
      '',
      'SECTION 3: RECOMMENDED SCHEME DETAILS',
      `Scheme Name: ${scheme.name}`,
      `Sponsoring Ministry: ${scheme.sponsoringMinistry || (scheme as any).ministry || 'Ministry of MSME'}`,
      `Maximum Permissible Loan: ₹${scheme.maxLoanAmount?.toLocaleString('en-IN')}`,
      `Interest Rate Slab: ${scheme.financialParameters?.interestRateMin ? `${scheme.financialParameters.interestRateMin}% p.a.` : '9.0% p.a.'}`,
      `Moratorium Period: ${scheme.financialParameters?.moratoriumMonths ? `${scheme.financialParameters.moratoriumMonths} Months` : 'Up to 6 Months'}`,
      `Repayment Tenure: ${scheme.financialParameters?.maxTenureYears ? `${scheme.financialParameters.maxTenureYears} Years` : '5 Years'}`,
      `Subsidy Details: ${scheme.subsidyDetails || 'Applicable as per official norms'}`,
      '',
      'SECTION 4: FINANCIAL SIMULATION PLAN',
      `Total Project Outlay: ₹${financialResult.totalProjectCost?.toLocaleString('en-IN')}`,
      `Promoter Contribution (Margin): ₹${financialResult.promoterContribution?.toLocaleString('en-IN')}`,
      `Required Debt Financing: ₹${financialResult.requiredFinancing?.toLocaleString('en-IN')}`,
      `Estimated Monthly EMI: ₹${financialResult.estimatedMonthlyEMI?.toLocaleString('en-IN')}`,
      `Loan Tenure: ${financialResult.loanTenureYears} Years (${financialResult.loanTenureMonths} Months)`,
      `Total Estimated Repayment: ₹${financialResult.totalRepaymentAmount?.toLocaleString('en-IN')}`,
      `Total Estimated Interest: ₹${financialResult.totalInterestPayable?.toLocaleString('en-IN')}`,
      '',
      'SECTION 5: ACCREDITED CHANNEL PARTNER',
      `Institution Name: ${selectedPartner.name}`,
      `Institution Type: ${selectedPartner.type}`,
      `Branch Address: ${selectedPartner.address || 'Branch Office'}`,
      `District & State: ${selectedPartner.district}, ${selectedPartner.state}`,
      `Contact Phone: ${selectedPartner.contactNumber || (selectedPartner as any).contactPhone || '+91 1800-180-1111'}`,
      `Contact Email: ${selectedPartner.email || (selectedPartner as any).contactEmail || 'contact@leadbank.in'}`,
      `Routing Compatibility Score: ${(selectedPartner as any).routingScore || (selectedPartner as any).score || 92}/100`,
      '',
      'SECTION 6: REQUIRED DOCUMENTS STATUS',
      ...requiredDocs.map((doc, i) => {
        const loc = getLocalizedDocument(doc.titleKey, 'en');
        const st = documentStatuses[doc.id] || 'Needs Review';
        const fileInfo = uploadedFiles[doc.id] ? ` [File: ${uploadedFiles[doc.id].name}]` : ' [No file attached]';
        return `${i + 1}. ${loc.name} -> Status: ${st}${fileInfo}`;
      }),
      '',
      'SECTION 7: SIMULATED APPOINTMENT REQUEST',
      `Scheduled Date: ${appointmentDate || '2026-09-15'}`,
      `Scheduled Slot: ${appointmentSlot || '10:00 AM'}`,
      `Purpose of Visit: ${appointmentPurpose || 'MSME Scheme Consultation & Physical Verification'}`,
      '',
      'SECTION 8: IMPORTANT PROTOTYPE DISCLOSURES',
      'This dossier is a prototype application-preparation summary designed to reduce',
      'entrepreneur friction. Final document verification, eligibility confirmation,',
      'and loan sanction are executed solely by the authorized channel partner.',
      '========================================================================'
    ].join('\n');

    const blob = new Blob([lines], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SchemeSetu_Application_Dossier_${referenceId || 'DEMO'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccessMessage(true);
    setTimeout(() => setDownloadSuccessMessage(false), 4000);
  };

  const handlePrintDossier = () => {
    window.print();
  };

  // Filtered documents for Step 1
  const categoriesPresent = Array.from(new Set(allDocuments.map(d => d.category)));
  const displayedDocs = selectedCategoryFilter === 'all' 
    ? allDocuments 
    : allDocuments.filter(d => d.category === selectedCategoryFilter);

  return (
    <div className="min-h-screen bg-[#F7F9FC] py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Main Application Ready Hero Card (High Contrast Deep Navy) */}
        <div className="bg-[#0E1B35] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#1E293B]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider">
                  {t('appReady.stepBadge')}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white bg-[#1E293B] border border-[#334155] px-3 py-1 rounded-md">
                  {scheme.name}
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {t('appReady.featureName')}
              </h1>
              
              <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl font-normal leading-relaxed">
                {t('appReady.featureConcept')}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenAssistant}
                className="px-4 py-2.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-bold flex items-center gap-2 transition shadow-sm cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>{t('appReady.askAiDocs')}</span>
              </button>
              
              <button
                onClick={onBackToNextSteps}
                className="px-4 py-2.5 rounded-lg bg-[#1E293B] hover:bg-[#334155] text-white border border-[#475569] hover:border-[#64748B] text-sm font-semibold flex items-center gap-1.5 transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-white" />
                <span>{t('appReady.backToNextSteps')}</span>
              </button>
            </div>
          </div>

          {/* 4-Step Navigation Tabs with High Contrast & Clear State Communication */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-6 pt-6 border-t border-[#1E293B]">
            {[
              { num: 1 as const, label: t('appReady.step1Nav') },
              { num: 2 as const, label: t('appReady.step2Nav') },
              { num: 3 as const, label: t('appReady.step3Nav') },
              { num: 4 as const, label: t('appReady.step4Nav') }
            ].map(({ num, label }) => {
              const isActive = currentStep === num;
              const isCompleted = currentStep > num;
              
              return (
                <button
                  key={num}
                  onClick={() => onStepChange(num)}
                  className={`flex items-center justify-between p-3 rounded-xl text-left transition cursor-pointer ${
                    isActive
                      ? 'bg-[#EA580C] text-white border-2 border-[#EA580C] shadow-md'
                      : isCompleted
                      ? 'bg-[#1E293B] text-white border border-[#334155] hover:bg-[#273549]'
                      : 'bg-[#131F33] text-[#CBD5E1] border border-[#223147] hover:bg-[#1A2942] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                      isActive
                        ? 'bg-white text-[#EA580C] font-black shadow-sm'
                        : isCompleted
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'bg-[#27364D] text-[#CBD5E1] font-bold'
                    }`}>
                      {isCompleted ? <Check className="w-3.5 h-3.5" /> : num}
                    </span>
                    <span className={`text-xs sm:text-sm truncate ${
                      isActive ? 'font-bold text-white' : isCompleted ? 'font-semibold text-[#E2E8F0]' : 'font-medium text-[#CBD5E1]'
                    }`}>
                      {label}
                    </span>
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : isCompleted
                      ? 'text-emerald-400'
                      : 'text-slate-400'
                  }`}>
                    {isActive ? 'Active' : isCompleted ? 'Done' : `Step ${num}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 1: DOCUMENTS */}
        {currentStep === 1 && (
          <div className="space-y-6">
            {/* Document Readiness Score Card (High Readability) */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0E1B35]">
                    {t('appReady.step1Nav')}: {t('appReady.readinessScoreLabel')}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#52627A] mt-0.5">
                    {t('appReady.readyOfTotal')
                      .replace('{ready}', readyDocs.length.toString())
                      .replace('{total}', requiredDocs.length.toString())}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600">
                    {readinessPercentage}%
                  </span>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300">
                    {readyDocs.length}/{requiredDocs.length} {t('appReady.statusReady')}
                  </span>
                </div>
              </div>

              {/* Progress Track */}
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-emerald-600 h-3 rounded-full transition-all duration-500" 
                  style={{ width: `${readinessPercentage}%` }}
                />
              </div>

              <div className="flex items-center gap-2 mt-3.5 text-xs font-medium text-[#52627A]">
                <Info className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t('appReady.indicatorNote')}</span>
              </div>
            </div>

            {/* Prototype Notices Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 flex gap-3 text-amber-950 text-xs">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-950 text-sm mb-1">
                    {t('appReady.stepBadge')}
                  </p>
                  <p className="text-amber-900 leading-relaxed font-medium">
                    {t('appReady.demoSafetyNotice')}
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4 flex gap-3 text-blue-950 text-xs">
                <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-blue-950 text-sm mb-1">
                    DigiLocker Architecture Readiness
                  </p>
                  <p className="text-blue-900 leading-relaxed font-medium">
                    {t('appReady.futureDigiLocker')}
                  </p>
                </div>
              </div>
            </div>

            {/* Error Banner if any file issue */}
            {fileError && (
              <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-4 flex items-center gap-3 text-rose-900 text-xs font-semibold">
                <AlertCircle className="w-5 h-5 text-rose-700 shrink-0" />
                <span>{fileError}</span>
              </div>
            )}

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <button
                onClick={() => setSelectedCategoryFilter('all')}
                className={`px-3.5 py-1.5 rounded-full font-bold transition cursor-pointer ${
                  selectedCategoryFilter === 'all' 
                    ? 'bg-[#0E1B35] text-white border-2 border-[#0E1B35] shadow-sm' 
                    : 'bg-white text-[#0E1B35] border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                All Documents ({allDocuments.length})
              </button>
              {categoriesPresent.map(cat => {
                const label = getDocumentCategoryLabel(cat, language);
                const count = allDocuments.filter(d => d.category === cat).length;
                const isSelected = selectedCategoryFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategoryFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition cursor-pointer ${
                      isSelected 
                        ? 'bg-[#0E1B35] text-white border-2 border-[#0E1B35] shadow-sm' 
                        : 'bg-white text-[#0E1B35] border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {label} ({count})
                  </button>
                );
              })}
            </div>

            {/* Document Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayedDocs.map((doc) => {
                const loc = getLocalizedDocument(doc.titleKey, language);
                const currentStatus = documentStatuses[doc.id] || (doc.required ? 'Needs Review' : 'Optional');
                const file = uploadedFiles[doc.id];
                const fileInputId = `file_input_${doc.id}`;

                return (
                  <div 
                    key={doc.id}
                    className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between hover:border-slate-300 transition"
                  >
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-start justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-slate-100 text-[#0E1B35] uppercase tracking-wider border border-slate-200">
                            {getDocumentCategoryLabel(doc.category, language)}
                          </span>
                          {doc.required && (
                            <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                              * Mandatory
                            </span>
                          )}
                        </div>

                        {/* Status Dropdown */}
                        <select
                          value={currentStatus}
                          onChange={(e) => onUpdateDocumentStatus(doc.id, e.target.value as DocumentStatusType)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-lg border-2 outline-none cursor-pointer ${
                            currentStatus === 'Ready'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-400'
                              : currentStatus === 'Missing'
                              ? 'bg-rose-50 text-rose-900 border-rose-400'
                              : currentStatus === 'Needs Review'
                              ? 'bg-amber-50 text-amber-900 border-amber-400'
                              : 'bg-slate-50 text-slate-800 border-slate-300'
                          }`}
                        >
                          <option value="Ready">{t('appReady.statusReady')}</option>
                          <option value="Needs Review">{t('appReady.statusNeedsReview')}</option>
                          <option value="Missing">{t('appReady.statusMissing')}</option>
                          <option value="Optional">{t('appReady.statusOptional')}</option>
                        </select>
                      </div>

                      {/* Document Title & Description */}
                      <h3 className="text-base font-bold text-[#0E1B35] mb-1.5">
                        {loc.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#52627A] leading-relaxed mb-4 font-normal">
                        {loc.description || loc.fullName}
                      </p>
                    </div>

                    {/* Upload Area & File Attachment State */}
                    <div className="pt-3 border-t border-slate-200">
                      {file ? (
                        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-lg p-3 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <FileCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                            <div className="truncate">
                              <p className="text-xs font-bold text-slate-900 truncate">
                                {file.name}
                              </p>
                              <p className="text-[11px] font-semibold text-[#52627A]">
                                {(file.size / 1024).toFixed(1)} KB • {t('appReady.fileAttached')}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <label 
                              htmlFor={fileInputId}
                              className="p-1.5 rounded-md text-[#0E1B35] hover:bg-emerald-100 cursor-pointer transition"
                              title={t('appReady.replaceFile')}
                            >
                              <RefreshCw className="w-4 h-4 text-emerald-800" />
                            </label>
                            <button
                              onClick={() => onFileRemove(doc.id)}
                              className="p-1.5 rounded-md text-rose-700 hover:bg-rose-100 cursor-pointer transition"
                              title={t('appReady.removeFile')}
                            >
                              <Trash2 className="w-4 h-4 text-rose-700" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between gap-2">
                          <label
                            htmlFor={fileInputId}
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border-2 border-dashed border-slate-300 text-xs font-bold text-[#0E1B35] hover:bg-slate-50 hover:border-slate-400 cursor-pointer transition"
                          >
                            <UploadCloud className="w-4 h-4 text-[#0E1B35]" />
                            <span>{t('appReady.uploadFile')}</span>
                          </label>
                          <span className="text-[11px] font-semibold text-[#52627A]">
                            {t('appReady.fileSizeLimit')}
                          </span>
                        </div>
                      )}

                      {/* Hidden Input for this document */}
                      <input
                        id={fileInputId}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={(e) => handleFileInputChange(doc.id, e)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <button
                onClick={onBackToNextSteps}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border-2 border-slate-300 bg-white hover:bg-slate-50 text-[#0E1B35] text-sm font-bold transition cursor-pointer"
              >
                {t('appReady.backToNextSteps')}
              </button>

              <button
                onClick={() => onStepChange(2)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-bold flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
              >
                <span>{t('appReady.proceedToReadiness')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: READINESS CHECK */}
        {currentStep === 2 && (
          <div className="space-y-6">
            {/* Main Score & Audit Summary */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Score Dial */}
                <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <span className="text-4xl md:text-5xl font-black text-[#0E1B35]">
                    {readinessPercentage}%
                  </span>
                  <span className="text-sm font-bold text-[#0E1B35] mt-1">
                    {t('appReady.readinessScoreLabel')}
                  </span>
                  <p className="text-xs font-semibold text-[#52627A] mt-1">
                    {t('appReady.readyOfTotal')
                      .replace('{ready}', readyDocs.length.toString())
                      .replace('{total}', requiredDocs.length.toString())}
                  </p>
                  <div className="w-full bg-slate-200 rounded-full h-3 mt-4 overflow-hidden">
                    <div 
                      className="bg-emerald-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${readinessPercentage}%` }}
                    />
                  </div>
                </div>

                {/* 5-Point System Audit Checklist */}
                <div className="md:col-span-2 space-y-2.5">
                  <h3 className="text-base font-bold text-[#0E1B35] mb-3">
                    Application Preparation Audit
                  </h3>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold text-[#0E1B35] text-sm">{t('appReady.auditProfileComplete')}</p>
                      <p className="text-[#52627A] font-medium mt-0.5">{beneficiary.name} • {beneficiary.socialCategory} • {beneficiary.district}, {beneficiary.state}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold text-[#0E1B35] text-sm">{t('appReady.auditSchemeSelected')}</p>
                      <p className="text-[#52627A] font-medium mt-0.5">{scheme.name} (Max Loan: ₹{scheme.maxLoanAmount?.toLocaleString('en-IN')})</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold text-[#0E1B35] text-sm">{t('appReady.auditFinancialPrepared')}</p>
                      <p className="text-[#52627A] font-medium mt-0.5">Project Cost: ₹{financialResult.totalProjectCost?.toLocaleString('en-IN')} • Required Financing: ₹{financialResult.requiredFinancing?.toLocaleString('en-IN')} • EMI: ₹{financialResult.estimatedMonthlyEMI?.toLocaleString('en-IN')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold text-[#0E1B35] text-sm">{t('appReady.auditPartnerSelected')}</p>
                      <p className="text-[#52627A] font-medium mt-0.5">{selectedPartner.name} - {selectedPartner.branchName}</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-3 p-3 rounded-lg border-2 ${
                    readinessPercentage === 100 
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950' 
                      : 'bg-amber-50 border-amber-300 text-amber-950'
                  }`}>
                    {readinessPercentage === 100 ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
                    )}
                    <div className="text-xs">
                      <p className="font-bold text-sm">
                        {t('appReady.auditDocsProgress')
                          .replace('{ready}', readyDocs.length.toString())
                          .replace('{total}', requiredDocs.length.toString())}
                      </p>
                      <p className={`font-semibold mt-0.5 ${readinessPercentage === 100 ? 'text-emerald-800' : 'text-amber-900'}`}>
                        {readinessPercentage === 100 
                          ? t('appReady.allDocsReady') 
                          : t('appReady.attentionNeeded').replace('{count}', (requiredDocs.length - readyDocs.length).toString())}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Attention Items If Not 100% Ready */}
            {readinessPercentage < 100 && (
              <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-700" />
                      <span>Documents Requiring Review:</span>
                    </h4>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-amber-950 list-disc list-inside font-medium">
                      {requiredDocs.filter(d => documentStatuses[d.id] !== 'Ready').map(d => {
                        const loc = getLocalizedDocument(d.titleKey, language);
                        return (
                          <li key={d.id}>
                            <span className="font-bold">{loc.name}</span>: status is currently marked as <span className="underline font-bold text-amber-900">{documentStatuses[d.id] || 'Needs Review'}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <button
                    onClick={() => onStepChange(1)}
                    className="px-4 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shrink-0 shadow-sm cursor-pointer"
                  >
                    {t('appReady.reviewDocsBtn')}
                  </button>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <button
                onClick={() => onStepChange(1)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border-2 border-slate-300 bg-white hover:bg-slate-50 text-[#0E1B35] text-sm font-bold transition cursor-pointer"
              >
                {t('appReady.backToDocs')}
              </button>

              <button
                onClick={() => onStepChange(3)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-bold flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
              >
                <span>{t('appReady.proceedToAppointment')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: PARTNER & APPOINTMENT */}
        {currentStep === 3 && (
          <div className="space-y-6">
            {/* Partner Selection Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {t('appReady.defaultPartner')}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0E1B35] mt-2">
                    {selectedPartner.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#52627A] mt-0.5">
                    {selectedPartner.type} • {selectedPartner.district}, {selectedPartner.state}
                  </p>
                </div>

                {/* Alternative Partner Dropdown if available */}
                {alternativePartners.length > 0 && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <label htmlFor="partner-select" className="text-xs font-bold text-[#0E1B35] whitespace-nowrap">
                      {t('appReady.chooseAnotherPartner')}:
                    </label>
                    <select
                      id="partner-select"
                      value={selectedPartner.id}
                      onChange={(e) => {
                        const found = [recommendedPartner, ...alternativePartners].find(p => p.id === e.target.value);
                        if (found) onSelectPartner(found);
                      }}
                      className="text-xs font-bold px-3.5 py-2 rounded-lg border-2 border-slate-300 bg-white text-[#0E1B35] cursor-pointer"
                    >
                      <option value={recommendedPartner.id}>
                        {recommendedPartner.name} ({recommendedPartner.district})
                      </option>
                      {alternativePartners.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.district})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Partner Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[#52627A] font-bold text-[11px] uppercase tracking-wider block mb-1">{t('appReady.branchLocation')}</span>
                  <p className="font-bold text-[#0E1B35] text-sm">{selectedPartner.address || 'Branch Office'}</p>
                  <p className="text-[#52627A] font-medium mt-0.5">{selectedPartner.district}, {selectedPartner.state}</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[#52627A] font-bold text-[11px] uppercase tracking-wider block mb-1">Contact Details</span>
                  <p className="font-bold text-[#0E1B35] text-sm">{selectedPartner.contactNumber || (selectedPartner as any).contactPhone || '+91 1800-180-1111'}</p>
                  <p className="text-[#52627A] font-medium mt-0.5">{selectedPartner.email || (selectedPartner as any).contactEmail || 'contact@partner.org'}</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[#52627A] font-bold text-[11px] uppercase tracking-wider block mb-1">Routing & Load Metrics</span>
                  <p className="font-bold text-emerald-700 text-sm">Status: {selectedPartner.capacityStatus || 'Optimal Capacity'}</p>
                  <p className="text-[#52627A] font-medium mt-0.5">Utilization: {selectedPartner.capacityUtilizationPercent || 65}% (Demonstration data)</p>
                </div>
              </div>
            </div>

            {/* Appointment Scheduler Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
              <div>
                <h3 className="text-lg font-bold text-[#0E1B35] flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#EA580C]" />
                  <span>{t('appReady.demoSlotsTitle')}</span>
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#52627A] mt-1">
                  {t('appReady.demoSlotsNotice')}
                </p>
              </div>

              {/* Date Selection Buttons */}
              <div>
                <label className="block text-xs font-bold text-[#0E1B35] mb-2 uppercase tracking-wider">
                  {t('appReady.selectDate')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {demoDates.map((item) => {
                    const isSelected = appointmentDate === item.date;
                    return (
                      <button
                        key={item.date}
                        onClick={() => onAppointmentDateChange(item.date)}
                        className={`py-2.5 px-3 rounded-lg text-xs font-bold border-2 text-center transition cursor-pointer ${
                          isSelected
                            ? 'bg-[#0E1B35] text-white border-[#0E1B35] shadow-sm'
                            : 'bg-white text-[#0E1B35] border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block text-xs font-bold text-[#0E1B35] mb-2 uppercase tracking-wider">
                  {t('appReady.selectTime')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {demoSlots.map((slot) => {
                    const isSelected = appointmentSlot === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => onAppointmentSlotChange(slot)}
                        className={`py-2.5 px-3 rounded-lg text-xs font-bold border-2 text-center transition cursor-pointer flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#EA580C] text-white border-[#EA580C] shadow-sm'
                            : 'bg-white text-[#0E1B35] border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{slot}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Purpose Input */}
              <div>
                <label htmlFor="visit-purpose" className="block text-xs font-bold text-[#0E1B35] mb-1.5 uppercase tracking-wider">
                  {t('appReady.visitPurpose')}
                </label>
                <input
                  id="visit-purpose"
                  type="text"
                  value={appointmentPurpose}
                  onChange={(e) => onAppointmentPurposeChange(e.target.value)}
                  placeholder={t('appReady.visitPurposePlaceholder')}
                  className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-lg border-2 border-slate-300 text-[#0E1B35] font-semibold focus:outline-none focus:border-[#0E1B35]"
                />
              </div>

              {/* Selection Summary Callout */}
              <div className="bg-slate-100 rounded-xl p-4 border border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-bold text-[#0E1B35] text-sm">
                    {t('appReady.appointmentSummary')}
                  </p>
                  <p className="text-[#52627A] font-semibold mt-0.5">
                    {selectedPartner.name} • {appointmentDate} at {appointmentSlot}
                  </p>
                </div>
                <span className="text-xs text-[#52627A] font-medium italic">
                  Demonstration slot reservation
                </span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <button
                onClick={() => onStepChange(2)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border-2 border-slate-300 bg-white hover:bg-slate-50 text-[#0E1B35] text-sm font-bold transition cursor-pointer"
              >
                {t('appReady.backToReadiness')}
              </button>

              <button
                onClick={handleProceedToConfirmation}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
              >
                <span>{t('appReady.confirmAppointmentBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: CONFIRMATION & DOSSIER */}
        {currentStep === 4 && (
          <div className="space-y-6">
            {/* Confirmation Hero Card */}
            <div className="bg-white border-2 border-emerald-300 rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {t('appReady.stepBadge')}
                    </span>
                    <h2 className="text-xl md:text-2xl font-black text-[#0E1B35] mt-1.5">
                      {t('appReady.confirmationTitle')}
                    </h2>
                    <p className="text-xs md:text-sm text-[#52627A] mt-1 font-medium max-w-xl leading-relaxed">
                      {t('appReady.confirmationNotice')}
                    </p>
                  </div>
                </div>

                {/* Reference ID Pill */}
                <div className="bg-[#0E1B35] text-white rounded-xl p-4 text-center md:text-right shrink-0 border border-[#1E293B] shadow-sm">
                  <span className="text-[11px] text-[#CBD5E1] uppercase tracking-widest font-bold block mb-1">
                    {t('appReady.refIdLabel')}
                  </span>
                  <span className="text-xl font-mono font-black text-emerald-400 tracking-wider">
                    {referenceId || 'SS-DEMO-260915'}
                  </span>
                </div>
              </div>

              {/* Quick Confirmation Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200 text-xs">
                <div>
                  <span className="text-[#52627A] font-bold text-[11px] uppercase tracking-wider block mb-1">{t('appReady.branchLocation')}</span>
                  <p className="font-bold text-[#0E1B35] text-sm truncate">{selectedPartner.name}</p>
                  <p className="text-[#52627A] font-medium truncate mt-0.5">{selectedPartner.branchName}</p>
                </div>
                <div>
                  <span className="text-[#52627A] font-bold text-[11px] uppercase tracking-wider block mb-1">{t('appReady.dateAndTime')}</span>
                  <p className="font-bold text-[#0E1B35] text-sm">{appointmentDate}</p>
                  <p className="text-[#52627A] font-medium mt-0.5">{appointmentSlot}</p>
                </div>
                <div>
                  <span className="text-[#52627A] font-bold text-[11px] uppercase tracking-wider block mb-1">{t('appReady.financingRequested')}</span>
                  <p className="font-bold text-[#0E1B35] text-sm">₹{financialResult.requiredFinancing?.toLocaleString('en-IN')}</p>
                  <p className="text-[#52627A] font-medium mt-0.5">EMI: ₹{financialResult.estimatedMonthlyEMI?.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <span className="text-[#52627A] font-bold text-[11px] uppercase tracking-wider block mb-1">{t('appReady.readinessScoreLabel')}</span>
                  <p className="font-bold text-emerald-700 text-sm">{readinessPercentage}% Ready</p>
                  <p className="text-[#52627A] font-medium mt-0.5">{readyDocs.length} Docs Prepared</p>
                </div>
              </div>
            </div>

            {/* Download Success Notice */}
            {downloadSuccessMessage && (
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4 flex items-center gap-3 text-emerald-900 text-xs font-bold shadow-sm">
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{t('appReady.downloadSuccess')}</span>
              </div>
            )}

            {/* Dossier Action Buttons Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-100 border border-slate-300 rounded-xl p-4">
              <div className="text-xs">
                <p className="font-bold text-[#0E1B35] text-sm">{t('appReady.dossierTitle')}</p>
                <p className="text-[#52627A] font-semibold mt-0.5">{t('appReady.dossierSub')}</p>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrintDossier}
                  className="px-4 py-2.5 rounded-lg bg-white border-2 border-slate-300 hover:bg-slate-50 text-[#0E1B35] text-xs font-bold flex items-center gap-2 transition shadow-sm cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-[#0E1B35]" />
                  <span>{t('appReady.dossierPrint')}</span>
                </button>

                <button
                  onClick={handleDownloadDossier}
                  className="px-4 py-2.5 rounded-lg bg-[#0E1B35] hover:bg-[#1E293B] text-white text-xs font-bold flex items-center gap-2 transition shadow-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('appReady.dossierDownload')}</span>
                </button>
              </div>
            </div>

            {/* Structured Digital Application Dossier Preview (Paper Layout with Clear Contrast) */}
            <div className="bg-white border-2 border-slate-300 rounded-xl p-6 md:p-10 shadow-sm space-y-6 print:border-none print:shadow-none print:p-0">
              {/* Official Dossier Header */}
              <div className="text-center pb-6 border-b-2 border-slate-200">
                <span className="text-[11px] font-bold tracking-widest text-[#52627A] uppercase">
                  Government of India • Ministry of MSME / Partner Network Support
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-[#0E1B35] tracking-tight mt-1.5">
                  SchemeSetu Digital Application Dossier
                </h2>
                <p className="text-xs sm:text-sm text-[#52627A] mt-1 font-semibold">
                  Entrepreneur Credit Readiness Dossier & Channel Partner Submission Package
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-3.5 text-xs text-[#52627A] font-medium">
                  <span>Reference ID: <strong className="text-[#0E1B35] font-bold">{referenceId || 'SS-DEMO-260915'}</strong></span>
                  <span>•</span>
                  <span>Date: <strong className="text-[#0E1B35] font-bold">{new Date().toLocaleDateString()}</strong></span>
                  <span>•</span>
                  <span>Readiness Score: <strong className="text-emerald-700 font-black">{readinessPercentage}%</strong></span>
                </div>
              </div>

              {/* SECTION 1: APPLICANT PROFILE */}
              <div>
                <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-slate-200">
                  <User className="w-4 h-4 text-[#0E1B35]" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0E1B35]">
                    {t('appReady.section1')}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Full Name</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{beneficiary.fullName || (beneficiary as any).name || 'Applicant'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Age & Gender</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{beneficiary.age} yrs • {beneficiary.gender}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Social Category</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{beneficiary.socialCategory}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Location</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{beneficiary.district}, {beneficiary.state}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Education</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{beneficiary.educationStatus || (beneficiary as any).educationLevel || 'Graduate'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Current Employment</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{beneficiary.employmentStatus || (beneficiary as any).currentEmploymentStatus || 'Self-Employed'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Annual Family Income</span>
                    <p className="font-bold text-[#0E1B35] text-sm">₹{Number(beneficiary.annualFamilyIncome)?.toLocaleString('en-IN') || beneficiary.annualFamilyIncome || 'N/A'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Special Categories</span>
                    <p className="font-bold text-[#0E1B35] text-sm">
                      {[
                        beneficiary.isDifferentlyAbled ? 'PwD' : null,
                        beneficiary.isExServiceman ? 'Ex-Serviceman' : null,
                        beneficiary.isMinority ? 'Minority' : null
                      ].filter(Boolean).join(', ') || 'None'}
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 2: PROJECT DETAILS */}
              <div>
                <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-slate-200">
                  <Briefcase className="w-4 h-4 text-[#0E1B35]" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0E1B35]">
                    {t('appReady.section2')}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Project Title</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{project.projectName || (project as any).name || 'Micro Enterprise Project'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Nature of Business</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{project.businessNature || (project as any).nature || 'New Enterprise'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Sector / Type</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{project.projectType || 'Micro Enterprise'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Financing Purpose</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{project.purposeOfFinancing || 'Term Loan & Machinery'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Experience</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{project.relevantExperience || '1 to 2 Years'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Unit Location</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{project.preferredLocation || 'Semi-Urban'}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Description</span>
                    <p className="text-[#0E1B35] text-xs leading-relaxed font-semibold">{project.description || 'N/A'}</p>
                  </div>
                </div>
              </div>

              {/* SECTION 3: RECOMMENDED SCHEME */}
              <div>
                <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-slate-200">
                  <FileText className="w-4 h-4 text-[#0E1B35]" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0E1B35]">
                    {t('appReady.section3')}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="col-span-2">
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Scheme Name</span>
                    <p className="font-black text-[#0E1B35] text-base">{scheme.name}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Sponsoring Ministry</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{scheme.sponsoringMinistry || (scheme as any).ministry || 'Ministry of MSME'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Max Permissible Loan</span>
                    <p className="font-black text-emerald-700 text-sm">₹{scheme.maxLoanAmount?.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Interest Rate Slab</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{scheme.financialParameters?.interestRateMin ? `${scheme.financialParameters.interestRateMin}% p.a.` : '9.0% p.a.'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Tenure</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{scheme.financialParameters?.maxTenureYears ? `${scheme.financialParameters.maxTenureYears} Years` : '5 Years'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Moratorium</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{scheme.financialParameters?.moratoriumMonths ? `${scheme.financialParameters.moratoriumMonths} Months` : 'Up to 6 Months'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Subsidy Support</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{scheme.subsidyDetails || 'Standard Scheme Terms'}</p>
                  </div>
                </div>
              </div>

              {/* SECTION 4: FINANCIAL PLAN */}
              <div>
                <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-slate-200">
                  <IndianRupee className="w-4 h-4 text-[#0E1B35]" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0E1B35]">
                    {t('appReady.section4')}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs bg-slate-50 p-5 rounded-xl border-2 border-slate-200">
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">Total Project Cost</span>
                    <p className="font-black text-[#0E1B35] text-base">₹{financialResult.totalProjectCost?.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">{t('appReady.ownContributionMargin')}</span>
                    <p className="font-black text-[#0E1B35] text-base">₹{financialResult.promoterContribution?.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">{t('appReady.financingRequested')}</span>
                    <p className="font-black text-[#EA580C] text-base">₹{financialResult.requiredFinancing?.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">{t('appReady.estimatedEMI')}</span>
                    <p className="font-black text-emerald-700 text-base">₹{financialResult.estimatedMonthlyEMI?.toLocaleString('en-IN')} / mo</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">Interest Rate</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{financialResult.interestRateAnnual}% p.a.</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">Loan Tenure</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{financialResult.loanTenureYears} Years ({financialResult.loanTenureMonths} Mos)</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">Total Estimated Interest</span>
                    <p className="font-bold text-[#0E1B35] text-sm">₹{financialResult.totalInterestPayable?.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">Total Repayment</span>
                    <p className="font-bold text-[#0E1B35] text-sm">₹{financialResult.totalRepaymentAmount?.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </div>

              {/* SECTION 5: RECOMMENDED CHANNEL PARTNER */}
              <div>
                <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-slate-200">
                  <Building2 className="w-4 h-4 text-[#0E1B35]" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0E1B35]">
                    {t('appReady.section5')}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Institution</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{selectedPartner.name}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Type & Status</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{selectedPartner.type} • {selectedPartner.capacityStatus || 'Active'}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Address</span>
                    <p className="font-bold text-[#0E1B35] text-sm truncate">{selectedPartner.address || 'Branch Office'}, {selectedPartner.district}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] block text-[11px] font-bold uppercase tracking-wider mb-0.5">Contact</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{selectedPartner.contactNumber || (selectedPartner as any).contactPhone || '+91 1800-180-1111'}</p>
                  </div>
                </div>
              </div>

              {/* SECTION 6: DOCUMENT CHECKLIST TABLE */}
              <div>
                <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-slate-200">
                  <FileCheck className="w-4 h-4 text-[#0E1B35]" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0E1B35]">
                    {t('appReady.section6')}
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-2 border-slate-300">
                    <thead className="bg-slate-100 text-[#0E1B35] border-b-2 border-slate-300">
                      <tr>
                        <th className="p-3 font-bold">#</th>
                        <th className="p-3 font-bold">Document Name</th>
                        <th className="p-3 font-bold">Category</th>
                        <th className="p-3 font-bold">Preparation Status</th>
                        <th className="p-3 font-bold">Demo File Attached</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-[#0E1B35]">
                      {allDocuments.map((doc, idx) => {
                        const loc = getLocalizedDocument(doc.titleKey, language);
                        const st = documentStatuses[doc.id] || (doc.required ? 'Needs Review' : 'Optional');
                        const file = uploadedFiles[doc.id];

                        return (
                          <tr key={doc.id} className="hover:bg-slate-50/80">
                            <td className="p-3 text-[#52627A] font-bold font-mono">{idx + 1}</td>
                            <td className="p-3 font-bold text-[#0E1B35]">{loc.name}</td>
                            <td className="p-3 text-[#52627A] font-semibold">{getDocumentCategoryLabel(doc.category, language)}</td>
                            <td className="p-3">
                              <span className={`px-2.5 py-1 rounded font-bold text-[11px] border ${
                                st === 'Ready'
                                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                                  : st === 'Missing'
                                  ? 'bg-rose-100 text-rose-900 border-rose-300'
                                  : st === 'Needs Review'
                                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                                  : 'bg-slate-100 text-slate-800 border-slate-300'
                              }`}>
                                {st}
                              </span>
                            </td>
                            <td className="p-3">
                              {file ? (
                                <span className="font-mono text-emerald-800 font-bold">
                                  {file.name} ({(file.size / 1024).toFixed(1)} KB)
                                </span>
                              ) : (
                                <span className="text-[#52627A] italic font-medium">None attached</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SECTION 7: APPOINTMENT REQUEST */}
              <div>
                <div className="flex items-center gap-2 pb-2 mb-3 border-b-2 border-slate-200">
                  <Calendar className="w-4 h-4 text-[#0E1B35]" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0E1B35]">
                    {t('appReady.section7')}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs bg-slate-50 p-5 rounded-xl border-2 border-slate-200">
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">Appointment Date</span>
                    <p className="font-black text-[#0E1B35] text-sm">{appointmentDate}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">Time Slot</span>
                    <p className="font-black text-[#0E1B35] text-sm">{appointmentSlot}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">Branch</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{selectedPartner.branchName}</p>
                  </div>
                  <div>
                    <span className="text-[#52627A] font-bold block text-[11px] uppercase tracking-wider mb-0.5">Purpose</span>
                    <p className="font-bold text-[#0E1B35] text-sm">{appointmentPurpose || 'MSME Loan Application Review'}</p>
                  </div>
                </div>
              </div>

              {/* SECTION 8: IMPORTANT PROTOTYPE DISCLOSURES */}
              <div className="p-5 bg-slate-50 rounded-xl border-2 border-slate-200 text-xs text-[#52627A] space-y-2">
                <h4 className="font-black text-[#0E1B35] uppercase tracking-wider text-xs">
                  {t('appReady.section8')}
                </h4>
                <p className="leading-relaxed font-medium text-[#52627A]">
                  {t('appReady.dossierDisclosure')}
                </p>
                <p className="leading-relaxed font-bold text-[#0E1B35]">
                  {t('appReady.preparedNextStep')}
                </p>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <button
                onClick={() => onStepChange(3)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border-2 border-slate-300 bg-white hover:bg-slate-50 text-[#0E1B35] text-sm font-bold transition cursor-pointer"
              >
                {t('appReady.backToReadiness')}
              </button>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={onBackToNextSteps}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border-2 border-slate-300 bg-white hover:bg-slate-50 text-[#0E1B35] text-sm font-bold transition cursor-pointer"
                >
                  {t('appReady.backToNextSteps')}
                </button>
                <button
                  onClick={onStartNewAssessment}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0E1B35] hover:bg-[#1E293B] text-white text-sm font-bold transition shadow-sm cursor-pointer"
                >
                  {t('appReady.startNewAssessment')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
