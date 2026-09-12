import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  Percent, 
  IndianRupee, 
  Clock, 
  Calendar, 
  CheckCircle, 
  ShieldCheck, 
  Info, 
  ArrowLeft,
  BookOpen,
  Layers,
  Sparkles
} from 'lucide-react';
import { SCHEMES_DATABASE } from '../../data/schemesData';
import { Scheme } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

interface SchemeExplorerScreenProps {
  onSelectScheme: (schemeId: string) => void;
  onStartAssessment: () => void;
  onBackToHome: () => void;
}

export const SchemeExplorerScreen: React.FC<SchemeExplorerScreenProps> = ({
  onSelectScheme,
  onStartAssessment,
  onBackToHome
}) => {
  const { t, tScheme, tStatus } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Extract unique sectors & categories from database
  const allSectors = useMemo(() => {
    const set = new Set<string>();
    SCHEMES_DATABASE.forEach(s => {
      s.projectTypes.forEach(pt => set.add(pt));
    });
    return Array.from(set).sort();
  }, []);

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    SCHEMES_DATABASE.forEach(s => {
      s.beneficiaryCategories.forEach(bc => set.add(bc));
    });
    return Array.from(set).sort();
  }, []);

  // Filter schemes
  const filteredSchemes = useMemo(() => {
    return SCHEMES_DATABASE.filter(scheme => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        scheme.name.toLowerCase().includes(q) ||
        scheme.shortDescription.toLowerCase().includes(q) ||
        (scheme.sourceName && scheme.sourceName.toLowerCase().includes(q)) ||
        (scheme.subsidyDetails && scheme.subsidyDetails.toLowerCase().includes(q));

      const matchesSector = selectedSector === 'all' || scheme.projectTypes.includes(selectedSector);
      const matchesCategory = selectedCategory === 'all' || scheme.beneficiaryCategories.includes(selectedCategory);

      return matchesQuery && matchesSector && matchesCategory;
    });
  }, [searchQuery, selectedSector, selectedCategory]);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)} Lakh`;
    return `₹${val.toLocaleString('en-IN')}`;
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
          onClick={onStartAssessment}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors shadow-xs"
        >
          <Sparkles className="w-4 h-4 text-orange-200" />
          <span>{t('explorer.checkMyMatch')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-6 sm:p-8 mb-8 border border-blue-800/40 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700 text-blue-200 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-orange-400" />
            <span>{t('explorer.totalSchemes', { count: SCHEMES_DATABASE.length })}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {t('explorer.title')}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('explorer.subtitle')}
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
              placeholder={t('explorer.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900 transition-colors"
            />
          </div>

          {/* Sector Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800"
            >
              <option value="all">{t('explorer.allSectors')}</option>
              {allSectors.map((sector) => (
                <option key={sector} value={sector}>{sector}</option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800"
            >
              <option value="all">{t('explorer.allCategories')}</option>
              {allCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Badges / Reset */}
        {(searchQuery || selectedSector !== 'all' || selectedCategory !== 'all') && (
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing {filteredSchemes.length} of {SCHEMES_DATABASE.length} schemes
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSector('all');
                setSelectedCategory('all');
              }}
              className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
            >
              {t('explorer.clearFilters')}
            </button>
          </div>
        )}
      </div>

      {/* Scheme Cards Grid */}
      {filteredSchemes.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300 p-8">
          <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800 mb-1">{t('explorer.noResultsTitle')}</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">{t('explorer.noResultsDesc')}</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSector('all');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800"
          >
            {t('explorer.clearFilters')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                {/* Ministry & Category Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold tracking-wide text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 truncate">
                    {scheme.sourceName}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 whitespace-nowrap">
                    {tStatus(scheme.verificationStatus) || scheme.verificationStatus || 'Official Scheme'}
                  </span>
                </div>

                {/* Scheme Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors leading-snug">
                  {tScheme(scheme.id, 'name') || scheme.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-5">
                  {tScheme(scheme.id, 'shortDescription') || scheme.shortDescription}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 py-3 px-3.5 bg-slate-50 rounded-lg border border-slate-100 text-xs mb-4">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                      {t('explorer.maxFinancing')}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      {formatCurrency(scheme.maxLoanAmount)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                      {t('explorer.coverage')}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      Up to {scheme.financingPercentage}%
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                      {t('explorer.interestRate')}
                    </span>
                    <span className="font-semibold text-slate-800 text-xs truncate block">
                      {scheme.defaultInterestRate}% p.a.
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                      {t('explorer.ageLimit')}
                    </span>
                    <span className="font-semibold text-slate-800 text-xs">
                      {scheme.minAge}–{scheme.maxAge} Yrs
                    </span>
                  </div>
                </div>

                {/* Subsidies Snippet */}
                <div className="text-xs text-slate-600 bg-amber-50/70 border border-amber-200/60 rounded-md p-2.5">
                  <span className="font-bold text-amber-900 block mb-0.5">Subsidy & Concessions:</span>
                  <p className="line-clamp-2 text-amber-800">
                    {tScheme(scheme.id, 'subsidyDetails') || scheme.subsidyDetails || 'Capital / interest subsidy applicable under government norms.'}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectScheme(scheme.id)}
                  className="text-xs font-semibold text-blue-900 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                >
                  <span>{t('explorer.viewDetails')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onStartAssessment}
                  className="text-xs font-semibold bg-white border border-slate-300 hover:border-orange-500 hover:text-orange-600 text-slate-700 px-3 py-1.5 rounded-md transition-all shadow-2xs"
                >
                  {t('explorer.checkMyMatch')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
