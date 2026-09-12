import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  Building2, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  FileText, 
  ExternalLink,
  MapPin,
  TrendingUp,
  Activity,
  Award,
  Clock,
  Briefcase,
  Sparkles,
  Phone,
  Mail,
  AlertCircle
} from 'lucide-react';
import { 
  BeneficiaryProfile, 
  ProjectDetails, 
  Scheme, 
  ProjectType,
  PartnerEvaluation,
  ExcludedPartner 
} from '../../types';
import { SCHEMES_DATABASE } from '../../data/schemesData';
import { INDIAN_STATES_DISTRICTS } from '../../data/indiaData';
import { rankChannelPartners, getCapacityIndicatorKey } from '../../services/partnerRoutingEngine';
import { PARTNERS_DEMO_DISCLAIMER } from '../../data/partnersData';
import { formatINR } from '../../utils/formatters';
import { useLanguage } from '../../i18n/LanguageContext';

interface ChannelPartnerScreenProps {
  initialSchemeId?: string;
  beneficiary: BeneficiaryProfile;
  project: ProjectDetails;
  onBackToSimulator: () => void;
  onBackToRecommendations?: () => void;
  onSelectScheme?: (schemeId: string) => void;
  onProceedToReadiness?: () => void;
}

export const ChannelPartnerScreen: React.FC<ChannelPartnerScreenProps> = ({
  initialSchemeId,
  beneficiary,
  project,
  onBackToSimulator,
  onBackToRecommendations,
  onSelectScheme,
  onProceedToReadiness
}) => {
  const { t, tScheme, tPartner, tReason, tStatus } = useLanguage();

  // Active scheme
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>(
    initialSchemeId || 'pmegp'
  );

  const currentScheme = useMemo(() => {
    return SCHEMES_DATABASE.find(s => s.id === selectedSchemeId) || SCHEMES_DATABASE[0];
  }, [selectedSchemeId]);

  // Derived required financing
  const totalCostNum = useMemo(() => {
    const val = parseFloat((project.totalProjectCost || '').replace(/[^0-9.-]+/g, ''));
    return !isNaN(val) && val > 0 ? val : 500000;
  }, [project.totalProjectCost]);

  const ownContribNum = useMemo(() => {
    const val = parseFloat((project.ownContribution || '').replace(/[^0-9.-]+/g, ''));
    return !isNaN(val) && val >= 0 ? val : 50000;
  }, [project.ownContribution]);

  const requiredFinancing = Math.max(0, totalCostNum - ownContribNum);

  // Manual State & District controls (Requirement 11)
  // Initializes from existing beneficiary profile if available
  const [manualState, setManualState] = useState<string>(beneficiary.state || 'Rajasthan');
  const [manualDistrict, setManualDistrict] = useState<string>(beneficiary.district || 'Alwar');
  const [showLocationPicker, setShowLocationPicker] = useState<boolean>(
    !beneficiary.state || !beneficiary.district
  );

  // Collapsible accordion for excluded partners (Requirement 7)
  const [isExcludedOpen, setIsExcludedOpen] = useState<boolean>(true);

  // Available districts for chosen state
  const availableDistricts = useMemo(() => {
    return INDIAN_STATES_DISTRICTS[manualState] || [];
  }, [manualState]);

  // Handle state change
  const handleStateChange = (newState: string) => {
    setManualState(newState);
    const firstDistrict = INDIAN_STATES_DISTRICTS[newState]?.[0] || '';
    setManualDistrict(firstDistrict);
  };

  // Run the deterministic partner router
  const routingResults = useMemo(() => {
    return rankChannelPartners({
      selectedSchemeId,
      projectType: project.projectType as ProjectType,
      requiredFinancing,
      beneficiaryState: manualState,
      beneficiaryDistrict: manualDistrict
    });
  }, [selectedSchemeId, project.projectType, requiredFinancing, manualState, manualDistrict]);

  const { recommendedPartner, alternativePartners, excludedPartners, allCompatible } = routingResults;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      
      {/* 1. TOP BREADCRUMB & NAVIGATION BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200">
              <Building2 className="w-3.5 h-3.5 text-blue-800" />
              {t('partner.stageBadge')}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-300">
              {t('partner.deterministicBadge')}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-blue-950 tracking-tight">
            {t('partner.title')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            {t('partner.subtitle')}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="back-to-simulator-btn"
            type="button"
            onClick={onBackToSimulator}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('partner.backToSimulator')}</span>
          </button>
        </div>
      </div>

      {/* 2. DEMO DATA DISCLOSURE (Requirement 8) */}
      <div className="bg-slate-100/80 rounded-xl p-3.5 border border-slate-300 flex items-start gap-3">
        <Info className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-700 leading-relaxed">
          <span className="font-semibold text-slate-900">{t('partner.prototypeNotice')} </span>
          {t('partner.disclaimerText')}
        </div>
      </div>

      {/* 3. APPLICATION CONTEXT & LOCATION BAR (Requirement 2 & 11) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {t('partner.routingParamsTitle')}
            </span>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-950 border border-blue-200">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                {tScheme(currentScheme.id, 'name') || currentScheme.name}
              </span>
              {project.projectType && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                  <Briefcase className="w-3 h-3 text-slate-500" />
                  {project.projectType}
                </span>
              )}
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                {t('partner.financingLabel', { amount: formatINR(requiredFinancing) })}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setShowLocationPicker(!showLocationPicker)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-orange-600" />
              <span>{t('partner.locationBtn', { district: manualDistrict, state: manualState })}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showLocationPicker ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Expandable Manual Location Adjuster (Requirement 11) */}
        {showLocationPicker && (
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">
                {t('partner.selectGeography')} <span className="text-red-600 font-bold">*</span>
              </span>
              <span className="text-[11px] text-slate-500">
                {t('partner.simulateDistrictsHint')}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  {t('partner.stateLabel')} <span className="text-red-600 font-bold">*</span>
                </label>
                <select
                  id="partner-state-select"
                  value={manualState}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  {Object.keys(INDIAN_STATES_DISTRICTS).map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  {t('partner.districtLabel')} <span className="text-red-600 font-bold">*</span>
                </label>
                <select
                  id="partner-district-select"
                  value={manualDistrict}
                  onChange={(e) => setManualDistrict(e.target.value)}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  {availableDistricts.map((dst) => (
                    <option key={dst} value={dst}>{dst}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. RECOMMENDED CHANNEL PARTNER (Requirement 6 - Visually Dominant) */}
      {recommendedPartner ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-blue-950 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span>{t('partner.recommendedTitle')}</span>
            </h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {t('partner.highestFitBadge')}
            </span>
          </div>

          <div 
            id="recommended-partner-card"
            className="bg-white rounded-2xl border-2 border-blue-900 shadow-md overflow-hidden"
          >
            {/* Top Bar */}
            <div className="bg-blue-950 px-6 py-4 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-sm font-bold text-lg">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-orange-300">
                    {tPartner(recommendedPartner.partner.id, 'type') || recommendedPartner.partner.type}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    {tPartner(recommendedPartner.partner.id, 'name') || recommendedPartner.partner.name}
                  </h3>
                </div>
              </div>

              {/* Routing Score Badge */}
              <div className="flex items-center gap-3 self-start sm:self-auto bg-blue-900/80 px-4 py-2 rounded-xl border border-blue-800">
                <div className="text-right">
                  <span className="text-[10px] text-blue-200 block uppercase font-bold tracking-wider">
                    {t('partner.routingScore')}
                  </span>
                  <span className="text-2xl font-black text-white leading-none">
                    {recommendedPartner.score}
                    <span className="text-xs font-normal text-blue-300"> / 100</span>
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                  {t('partner.fitBadge')}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              
              {/* Recommendation Explanation Box (Requirement 5 & 6) */}
              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-950 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span>{t('partner.routerExplanationTitle')}</span>
                </div>
                <p className="text-sm font-medium leading-relaxed text-blue-950">
                  {tReason(recommendedPartner.recommendationExplanation)}
                </p>
                <p className="text-[11px] text-slate-500 italic mt-1">
                  {t('partner.capacityNotice')}
                </p>
              </div>

              {/* Core Indicators Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Location */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-600" />
                    {t('partner.locationFit')}
                  </span>
                  <div className="text-xs font-semibold text-slate-900">
                    {recommendedPartner.partner.district}, {recommendedPartner.partner.state}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {t('partner.tierLabel', { tier: tStatus(recommendedPartner.distanceTier) })}
                  </div>
                </div>

                {/* Capacity Status */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-slate-600" />
                    {t('partner.capacityStatus')}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${
                      recommendedPartner.partner.capacityUtilizationPercent <= 60 ? 'bg-emerald-500' : 'bg-amber-500'
                    }`} />
                    <span className="text-xs font-semibold text-slate-900">
                      {tStatus(recommendedPartner.partner.capacityStatus)}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    {t('partner.simulatedLoad', { status: t(getCapacityIndicatorKey(recommendedPartner.partner.capacityUtilizationPercent, recommendedPartner.partner.capacityStatus)) })}
                  </div>
                </div>

                {/* Operational Status */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-600" />
                    {t('partner.operationalStatus')}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-semibold text-slate-900">
                      {tStatus(recommendedPartner.partner.operationalStatus)}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {t('partner.standardWindow')}
                  </div>
                </div>

                {/* Financing Range */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-slate-600" />
                    {t('partner.loanTicketRange')}
                  </span>
                  <div className="text-xs font-semibold text-slate-900">
                    {formatINR(recommendedPartner.partner.minimumLoanAmount)} - {formatINR(recommendedPartner.partner.maximumLoanAmount)}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-medium">
                    {t('partner.requestedFits')}
                  </div>
                </div>

              </div>

              {/* Mandatory Prototype Capacity Disclosure */}
              <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-950">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed font-medium">
                  {t('partner.prototypeDisclosure')}
                </p>
              </div>

              {/* Scoring Breakdown Bar */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block">
                  {t('partner.scoreBreakdownTitle')}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  <div className="bg-slate-100/70 p-2 rounded-lg text-center">
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">{t('partner.scoreScheme')}</span>
                    <span className="text-xs font-bold text-blue-900">{recommendedPartner.scoreBreakdown.schemeCompatibility}/30</span>
                  </div>
                  <div className="bg-slate-100/70 p-2 rounded-lg text-center">
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">{t('partner.scoreProject')}</span>
                    <span className="text-xs font-bold text-blue-900">{recommendedPartner.scoreBreakdown.projectCompatibility}/20</span>
                  </div>
                  <div className="bg-slate-100/70 p-2 rounded-lg text-center">
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">{t('partner.scoreLocation')}</span>
                    <span className="text-xs font-bold text-blue-900">{recommendedPartner.scoreBreakdown.geographicFit}/20</span>
                  </div>
                  <div className="bg-slate-100/70 p-2 rounded-lg text-center">
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">{t('partner.scoreCapacity')}</span>
                    <span className="text-xs font-bold text-emerald-700">{recommendedPartner.scoreBreakdown.capacityStatus}/15</span>
                  </div>
                  <div className="bg-slate-100/70 p-2 rounded-lg text-center">
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">{t('partner.scoreFinancing')}</span>
                    <span className="text-xs font-bold text-blue-900">{recommendedPartner.scoreBreakdown.financingCompatibility}/10</span>
                  </div>
                  <div className="bg-slate-100/70 p-2 rounded-lg text-center">
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">{t('partner.scoreOperation')}</span>
                    <span className="text-xs font-bold text-blue-900">{recommendedPartner.scoreBreakdown.operationalStatus}/5</span>
                  </div>
                </div>
              </div>

              {/* Address and Contact Details */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-slate-900 block">{t('partner.institutionalAddress')}</span>
                  <span className="text-slate-600">{tPartner(recommendedPartner.partner.id, 'address') || recommendedPartner.partner.address}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600 shrink-0">
                  {recommendedPartner.partner.contactNumber && (
                    <span className="flex items-center gap-1 font-medium">
                      <Phone className="w-3.5 h-3.5 text-blue-800" />
                      {recommendedPartner.partner.contactNumber}
                    </span>
                  )}
                  {recommendedPartner.partner.email && (
                    <span className="flex items-center gap-1 font-medium">
                      <Mail className="w-3.5 h-3.5 text-blue-800" />
                      {recommendedPartner.partner.email}
                    </span>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : (
        /* No Compatible Partner State (Requirement 13.F) */
        <div className="bg-white rounded-2xl border border-amber-200 shadow-xs p-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h3 className="text-base font-bold text-slate-900">
              {t('partner.noCompatibleTitle')}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('partner.noCompatibleDesc', {
                scheme: tScheme(currentScheme.id, 'name') || currentScheme.name,
                district: manualDistrict,
                state: manualState,
                amount: formatINR(requiredFinancing)
              })}
            </p>
          </div>
          <div className="text-xs text-slate-500">
            {t('partner.noCompatibleTip')}
          </div>
        </div>
      )}

      {/* 5. ALTERNATIVE PARTNERS (Requirement 6) */}
      {alternativePartners.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-900" />
              <span>{t('partner.alternativePartnersTitle', { count: alternativePartners.length })}</span>
            </h2>
            <span className="text-xs text-slate-500">
              {t('partner.alternativePartnersSub')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {alternativePartners.map((alt, index) => {
              const p = alt.partner;
              const hasCapacityWarning = p.capacityUtilizationPercent >= 75;

              return (
                <div 
                  key={p.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-2xs p-4 flex flex-col justify-between space-y-3 hover:border-slate-300 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          {t('partner.alternativePrefix', { index: index + 1, type: tPartner(p.id, 'type') || p.type })}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {tPartner(p.id, 'name') || p.name}
                        </h4>
                      </div>
                      <div className="bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 text-right shrink-0">
                        <span className="text-xs font-black text-slate-800 block">
                          {alt.score}
                        </span>
                        <span className="text-[9px] text-slate-500 block uppercase font-semibold">
                          {t('partner.scoreLabel')}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{p.district}, {p.state} ({tStatus(alt.distanceTier)})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                          hasCapacityWarning 
                            ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {t('partner.simulatedLoad', { status: t(getCapacityIndicatorKey(p.capacityUtilizationPercent, p.capacityStatus)) })}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {tStatus(p.capacityStatus)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Short reason comparison */}
                  <div className="pt-2 border-t border-slate-100 text-xs">
                    <span className="font-semibold text-slate-700">{t('partner.routerComparison')} </span>
                    <span className="text-slate-600">
                      {hasCapacityWarning 
                        ? t('partner.routerComparisonHighCap')
                        : t('partner.routerComparisonNormal', { tier: tStatus(alt.distanceTier) })
                      }
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 6. EXCLUDED PARTNERS SECTION (Requirement 7) */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <button
          type="button"
          onClick={() => setIsExcludedOpen(!isExcludedOpen)}
          className="w-full px-6 py-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between text-left transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-slate-500" />
            <div>
              <h3 className="text-sm font-bold text-slate-800">
                {t('partner.whyNotRecommended', { count: excludedPartners.length })}
              </h3>
              <p className="text-xs text-slate-500">
                {t('partner.transparentRuleExplanations')}
              </p>
            </div>
          </div>
          {isExcludedOpen ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          )}
        </button>

        {isExcludedOpen && (
          <div className="p-6 space-y-4 border-t border-slate-200 divide-y divide-slate-100">
            {excludedPartners.length === 0 ? (
              <p className="text-xs text-slate-500 italic">
                {t('partner.allMetCriteria')}
              </p>
            ) : (
              excludedPartners.map(({ partner, reasons }) => (
                <div key={partner.id} className="pt-4 first:pt-0 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-xs font-bold text-slate-900">
                      {tPartner(partner.id, 'name') || partner.name}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {tPartner(partner.id, 'type') || partner.type} • {partner.district}, {partner.state}
                    </span>
                  </div>

                  <ul className="space-y-1 pl-4 list-disc text-xs text-red-700">
                    {reasons.map((reason, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">
                        {tReason(reason)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* 7. PREPARE FOR THE NEXT STEP (Requirement 9) */}
      <div className="bg-white rounded-2xl border border-blue-200 shadow-xs p-6 space-y-5">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <FileText className="w-5 h-5 text-blue-900" />
          <div>
            <h3 className="text-sm font-bold text-blue-950 uppercase tracking-wide">
              {t('partner.dossierTitle')}
            </h3>
            <p className="text-xs text-slate-500">
              {t('partner.dossierSub')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">{t('partner.selectedSchemeLabel')}</span>
            <div className="text-xs font-bold text-slate-900">{tScheme(currentScheme.id, 'name') || currentScheme.name}</div>
            <div className="text-[11px] text-slate-500">{tScheme(currentScheme.id, 'shortDescription') || currentScheme.shortDescription}</div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">{t('partner.requiredFinancingLabel')}</span>
            <div className="text-base font-black text-blue-950">{formatINR(requiredFinancing)}</div>
            <div className="text-[11px] text-slate-500">
              {t('partner.equityAndTotal', { equity: formatINR(ownContribNum), total: formatINR(totalCostNum) })}
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">{t('partner.recommendedPartnerLabel')}</span>
            <div className="text-xs font-bold text-blue-900">
              {recommendedPartner ? (tPartner(recommendedPartner.partner.id, 'name') || recommendedPartner.partner.name) : t('partner.noPartnerMatched')}
            </div>
            <div className="text-[11px] text-slate-500">
              {recommendedPartner ? `${recommendedPartner.partner.district}, ${recommendedPartner.partner.state}` : t('partner.adjustLocation')}
            </div>
          </div>
        </div>

        {/* General Document Categories from the Scheme */}
        {currentScheme.requiredDocuments && currentScheme.requiredDocuments.length > 0 && (
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-slate-800 block">
              {t('partner.requiredDocsTitle')}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentScheme.requiredDocuments.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{tReason(doc)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regulatory & Institutional Notice */}
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>{t('partner.importantNotice')}</strong> {t('partner.regulatoryNotice')}
          </p>
        </div>
      </div>

      {/* 8. BOTTOM NAVIGATION ACTIONS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          type="button"
          onClick={onBackToSimulator}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('partner.backToSimulator')}</span>
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {onBackToRecommendations && (
            <button
              type="button"
              onClick={onBackToRecommendations}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>{t('partner.reviewMatchedSchemes')}</span>
            </button>
          )}

          {onProceedToReadiness && (
            <button
              type="button"
              id="partner-proceed-to-readiness-btn"
              onClick={onProceedToReadiness}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold shadow-md transition-all cursor-pointer active:scale-98"
            >
              <span>{t('step.readiness') || 'Proceed to Application Readiness'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
