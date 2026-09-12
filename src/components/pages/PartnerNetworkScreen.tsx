import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ArrowLeft, 
  AlertTriangle, 
  CheckCircle, 
  Activity, 
  ShieldCheck, 
  Layers,
  Sparkles,
  Percent,
  Landmark
} from 'lucide-react';
import { PROTOTYPE_PARTNERS } from '../../data/partnersData';
import { SCHEMES_DATABASE } from '../../data/schemesData';
import { useLanguage } from '../../i18n/LanguageContext';

interface PartnerNetworkScreenProps {
  onStartAssessment: () => void;
  onBackToHome: () => void;
  hasAssessment: boolean;
  onGoToPartnerFinder: () => void;
}

export const PartnerNetworkScreen: React.FC<PartnerNetworkScreenProps> = ({
  onStartAssessment,
  onBackToHome,
  hasAssessment,
  onGoToPartnerFinder
}) => {
  const { t, tPartner, tReason, tStatus } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');

  // Extract unique types and states
  const allTypes = useMemo(() => {
    const set = new Set<string>();
    PROTOTYPE_PARTNERS.forEach(p => set.add(p.type));
    return Array.from(set).sort();
  }, []);

  const allStates = useMemo(() => {
    const set = new Set<string>();
    PROTOTYPE_PARTNERS.forEach(p => {
      set.add(p.state);
      p.serviceAreas.forEach(sa => {
        if (sa.includes('Statewide')) {
          set.add(sa.replace(' Statewide', ''));
        }
      });
    });
    return Array.from(set).sort();
  }, []);

  // Filter partners
  const filteredPartners = useMemo(() => {
    return PROTOTYPE_PARTNERS.filter(partner => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        partner.name.toLowerCase().includes(q) ||
        partner.district.toLowerCase().includes(q) ||
        partner.state.toLowerCase().includes(q) ||
        partner.address.toLowerCase().includes(q);

      const matchesType = selectedType === 'all' || partner.type === selectedType;
      const matchesState = selectedState === 'all' || partner.state === selectedState || partner.serviceAreas.some(sa => sa.includes(selectedState));

      return matchesQuery && matchesType && matchesState;
    });
  }, [searchQuery, selectedType, selectedState]);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)} Lakh`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const getCapacityColor = (status: string) => {
    if (status === 'Optimal Capacity') return 'bg-emerald-50 text-emerald-800 border-emerald-200';
    if (status === 'Moderate Utilization') return 'bg-amber-50 text-amber-800 border-amber-200';
    return 'bg-red-50 text-red-800 border-red-200';
  };

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
          onClick={hasAssessment ? onGoToPartnerFinder : onStartAssessment}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors shadow-xs"
        >
          <Sparkles className="w-4 h-4 text-orange-200" />
          <span>{t('network.findMyPartnerBtn')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-6 sm:p-8 mb-6 border border-blue-800/40 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700 text-blue-200 text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5 text-orange-400" />
            <span>{t('network.totalPartners', { count: PROTOTYPE_PARTNERS.length })}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {t('network.title')}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('network.subtitle')}
          </p>
        </div>
      </div>

      {/* Mandatory Disclaimer Box */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 mb-8 flex items-start gap-3.5 shadow-2xs">
        <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
            Simulated Demonstration Notice
          </h4>
          <p className="text-xs text-amber-900 leading-relaxed font-medium">
            {t('network.simulatedNotice')}
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('network.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900 transition-colors"
            />
          </div>

          {/* Type Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800"
            >
              <option value="all">{t('network.allTypes')}</option>
              {allTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* State Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800"
            >
              <option value="all">{t('network.allStates')}</option>
              {allStates.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters / Reset */}
        {(searchQuery || selectedType !== 'all' || selectedState !== 'all') && (
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing {filteredPartners.length} of {PROTOTYPE_PARTNERS.length} institutions
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
                setSelectedState('all');
              }}
              className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
            >
              {t('network.clearFilters')}
            </button>
          </div>
        )}
      </div>

      {/* Partner Cards Grid */}
      {filteredPartners.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300 p-8">
          <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800 mb-1">{t('network.noResultsTitle')}</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">{t('network.noResultsDesc')}</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedType('all');
              setSelectedState('all');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800"
          >
            {t('network.clearFilters')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                {/* Institution Type & Capacity Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold tracking-wide text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 truncate">
                    {tPartner(partner.id, 'type') || tReason(partner.type) || partner.type}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border whitespace-nowrap ${getCapacityColor(partner.capacityStatus)}`}>
                    {tStatus(partner.capacityStatus) || tReason(partner.capacityStatus) || partner.capacityStatus}
                  </span>
                </div>

                {/* Partner Branch Name */}
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors leading-snug">
                  {tPartner(partner.id, 'name') || partner.name}
                </h3>

                {/* Location */}
                <div className="flex items-start gap-1.5 text-xs text-slate-600 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{tPartner(partner.id, 'address') || partner.address}</span>
                </div>

                {/* Metrics Box */}
                <div className="grid grid-cols-2 gap-3 py-3 px-3.5 bg-slate-50 rounded-lg border border-slate-100 text-xs mb-4">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                      {t('network.ticketRange')}
                    </span>
                    <span className="font-bold text-slate-900 text-xs">
                      {formatCurrency(partner.minimumLoanAmount)} – {formatCurrency(partner.maximumLoanAmount)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                      {t('network.simulatedCapacity')}
                    </span>
                    <span className="font-bold text-slate-900 text-xs">
                      {partner.capacityUtilizationPercent}% Load
                    </span>
                  </div>
                </div>

                {/* Supported Schemes Badges */}
                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    {t('network.supportedSchemes')}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.supportedSchemeIds.map((scId) => {
                      const schemeObj = SCHEMES_DATABASE.find(s => s.id === scId);
                      return (
                        <span
                          key={scId}
                          className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                        >
                          {schemeObj ? schemeObj.name.split('(')[1]?.replace(')', '') || schemeObj.name.split(' ')[0] : scId}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Contact Information & Action */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                {partner.contactNumber && (
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-slate-400" />
                    <span className="font-mono text-[11px]">{partner.contactNumber}</span>
                  </div>
                )}
                {partner.email && (
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="w-3 h-3 text-slate-400" />
                    <span className="font-mono text-[11px] truncate">{partner.email}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
