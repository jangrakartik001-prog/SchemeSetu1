import React from 'react';
import {
  ArrowRight,
  Calculator,
  FileText,
  Users,
  Bot,
  Milk,
  Truck,
  Factory,
  Info
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { DEMO_PRESETS } from '../../data/indiaData';

export interface HomeScreenProps {
  onStartJourney: () => void;
  onSeeHowItWorks?: () => void;
  onLoadDemoPreset?: (presetId: string) => void;
  onNavigateToSchemes?: () => void;
  onNavigateToFinancialTools?: () => void;
  onNavigateToPartnerNetwork?: () => void;
  onOpenAIAssistant?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStartJourney,
  onLoadDemoPreset,
  onNavigateToSchemes,
  onNavigateToFinancialTools,
  onNavigateToPartnerNetwork,
  onOpenAIAssistant
}) => {
  const { t } = useLanguage();

  const formatCostDisplay = (costStr: string) => {
    const cost = Number(costStr);
    if (!cost) return '₹0';
    if (cost >= 100000) {
      const lakhs = cost / 100000;
      return `₹${Number.isInteger(lakhs) ? lakhs : lakhs.toFixed(1)} ${t('common.lakh', {}, 'Lakh')}`;
    }
    return `₹${cost.toLocaleString('en-IN')}`;
  };

  const getCategoryShort = (cat: string) => {
    if (cat.includes('(SC)')) return 'SC';
    if (cat.includes('(ST)')) return 'ST';
    if (cat.includes('(OBC)')) return 'OBC';
    return cat;
  };

  const getPresetMeta = (id: string, index: number) => {
    if (id === 'scenario-a') {
      return {
        icon: Milk,
        iconBg: 'bg-sky-50 text-sky-600 border-sky-100/80',
        title: t('home.demoScenario1Title', {}, 'Rural Dairy Entrepreneur'),
        desc: t('home.demoScenario1Desc', {}, 'Dairy chilling & processing unit with 35% rural subsidy match')
      };
    }
    if (id === 'scenario-b') {
      return {
        icon: Truck,
        iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100/80',
        title: t('home.demoScenario2Title', {}, 'Transport Logistics Entrepreneur'),
        desc: t('home.demoScenario2Desc', {}, 'Commercial cargo logistics with dedicated refinance routing')
      };
    }
    return {
      icon: Factory,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100/80',
      title: t('home.demoScenario3Title', {}, 'Brownfield Expansion'),
      desc: t('home.demoScenario3Desc', {}, 'Industrial workshop expansion with term loan capital routing')
    };
  };

  return (
    <div className="w-full bg-[#0A1628] text-slate-900 overflow-x-hidden">
      {/* ============================================================ */}
      {/* 1. HERO SECTION (Dark Navy, Centered, Clean & Professional)  */}
      {/* ============================================================ */}
      <section
        id="hero-section"
        className="relative bg-[#0B1528] min-h-[calc(100vh-4.5rem)] flex items-center justify-center py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-800/80"
      >
        {/* Subtle low-contrast dotted grid pattern matching old homepage */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.25) 1.25px, transparent 1.25px)',
            backgroundSize: '32px 32px'
          }}
          aria-hidden="true"
        />

        {/* Soft radial vignette to preserve high-contrast text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(11, 21, 40, 0.4) 0%, rgba(8, 16, 32, 0.85) 100%)'
          }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10 my-auto">
          
          {/* Small Rounded Pill with Orange Indicator Dot */}
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#132247]/90 border border-blue-600/40 text-xs sm:text-sm text-slate-200 font-medium mb-6 sm:mb-8 shadow-xs backdrop-blur-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#f97316] shrink-0" />
            <span>{t('home.badge', {}, 'From eligibility to the right financial path.')}</span>
          </div>

          {/* Main Headline: Pure white text with Orange emphasis on "fits your business" */}
          <h1
            id="hero-main-heading"
            className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.18] mb-6 max-w-3xl mx-auto"
          >
            <span>{t('home.heroTitle', {}, 'Find the financial path that')}</span>{' '}
            <span className="text-[#f97316] inline-block">
              {t('home.heroTitleHighlight', {}, 'fits your business')}
            </span>
          </h1>

          {/* Concise Supporting Text (approximately 2-3 lines) */}
          <p
            id="hero-description"
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 sm:mb-10 max-w-2xl mx-auto"
          >
            {t(
              'home.heroDesc',
              {},
              'SchemeSetu helps you understand suitable government schemes, estimate financing and repayment, and reach the right channel partner — all in one place.'
            )}
          </p>

          {/* Single Primary CTA: "Start My Journey →" in rich orange with rounded-xl corners */}
          <div className="flex items-center justify-center w-full">
            <button
              id="hero-start-journey-btn"
              onClick={onStartJourney}
              className="inline-flex items-center justify-center gap-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all text-base active:scale-98 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#0B1528]"
            >
              <span>{t('home.startMyJourney', {}, t('home.startBtn', {}, 'Start My Journey'))}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. COMPACT BELOW-THE-FOLD BENEFIT SHORTCUTS                  */}
      {/* ============================================================ */}
      <section
        id="benefit-section"
        className="py-12 sm:py-16 bg-[#FAFBF8] border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            
            {/* 1. Scheme Matching */}
            <div
              id="benefit-card-schemes"
              onClick={onNavigateToSchemes || onStartJourney}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (onNavigateToSchemes?.() || onStartJourney())}
              className="bg-white rounded-xl p-5 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer flex flex-col justify-between h-full group focus:outline-hidden focus:ring-2 focus:ring-orange-400"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100/80 text-sky-600 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                  {t('home.benefit1Title', {}, 'Scheme Matching')}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {t('home.benefit1Desc', {}, 'Find schemes relevant to your needs')}
                </p>
              </div>
            </div>

            {/* 2. Financial Planning */}
            <div
              id="benefit-card-finance"
              onClick={onNavigateToFinancialTools || onStartJourney}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (onNavigateToFinancialTools?.() || onStartJourney())}
              className="bg-white rounded-xl p-5 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer flex flex-col justify-between h-full group focus:outline-hidden focus:ring-2 focus:ring-orange-400"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100/80 text-amber-600 flex items-center justify-center shrink-0">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                  {t('home.benefit2Title', {}, 'Financial Planning')}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {t('home.benefit2Desc', {}, 'Estimate EMI and repayment')}
                </p>
              </div>
            </div>

            {/* 3. Partner Guidance */}
            <div
              id="benefit-card-partners"
              onClick={onNavigateToPartnerNetwork || onStartJourney}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (onNavigateToPartnerNetwork?.() || onStartJourney())}
              className="bg-white rounded-xl p-5 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer flex flex-col justify-between h-full group focus:outline-hidden focus:ring-2 focus:ring-orange-400"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100/80 text-purple-600 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                  {t('home.benefit3Title', {}, 'Partner Guidance')}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {t('home.benefit3Desc', {}, 'Reach a suitable channel partner')}
                </p>
              </div>
            </div>

            {/* 4. AI Assistance */}
            <div
              id="benefit-card-assistant"
              onClick={onOpenAIAssistant}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenAIAssistant?.()}
              className="bg-white rounded-xl p-5 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer flex flex-col justify-between h-full group focus:outline-hidden focus:ring-2 focus:ring-orange-400"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                  {t('home.benefit4Title', {}, 'AI Assistance')}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {t('home.benefit4Desc', {}, 'Get help in your preferred language')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. DEMO PROFILES SECTION (Compact, Minimal & Balanced)       */}
      {/* ============================================================ */}
      <section
        id="demo-scenarios-section"
        className="py-12 sm:py-16 bg-[#F4F6F9] border-t border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2
              id="demo-section-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              {t('home.demoHeading', {}, 'Try SchemeSetu with a Demo Profile')}
            </h2>
            <p
              id="demo-section-subheading"
              className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed"
            >
              {t(
                'home.demoSubheading',
                {},
                'Explore the complete journey using a predefined entrepreneur scenario.'
              )}
            </p>
          </div>

          {/* 3 Compact Demo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {DEMO_PRESETS.map((preset, index) => {
              const meta = getPresetMeta(preset.id, index);
              const IconComp = meta.icon;
              const categoryStr = getCategoryShort(preset.profile.socialCategory);
              const costStr = formatCostDisplay(preset.project.totalProjectCost);

              return (
                <div
                  key={preset.id}
                  id={`demo-card-${preset.id}`}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 hover:border-orange-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group text-left"
                >
                  <div>
                    {/* Card Header: Pastel Icon + Demo Scenario Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${meta.iconBg}`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 border border-slate-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {t('home.demoBadge', {}, 'Demo Scenario')}
                      </span>
                    </div>

                    {/* Scenario Name */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                      {meta.title}
                    </h3>

                    {/* Short Descriptor */}
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {meta.desc}
                    </p>

                    {/* Concise Metadata Row: Category and Project Cost */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-slate-100">
                      <div>
                        <span className="block text-[11px] text-slate-400 font-medium">
                          {t('home.demoCategoryLabel', {}, 'Category')}
                        </span>
                        <span className="block text-xs font-semibold text-slate-800 mt-0.5">
                          {categoryStr}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-slate-400 font-medium">
                          {t('home.demoCostLabel', {}, 'Project Cost')}
                        </span>
                        <span className="block text-xs font-semibold text-slate-800 mt-0.5">
                          {costStr}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Clear Action: Try Demo → */}
                  <button
                    id={`try-demo-btn-${preset.id}`}
                    onClick={() => onLoadDemoPreset?.(preset.id)}
                    className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-[#f97316] text-slate-800 hover:text-white border border-slate-200 hover:border-[#f97316] font-semibold py-2.5 px-4 rounded-lg text-xs sm:text-sm transition-all duration-150 cursor-pointer shadow-2xs group/btn active:scale-98 focus:outline-hidden focus:ring-2 focus:ring-orange-400"
                  >
                    <span>{t('home.tryDemoBtn', {}, 'Try Demo')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Demo Data Disclosure */}
          <div className="mt-8 sm:mt-10 text-center">
            <p
              id="demo-disclosure-text"
              className="text-xs text-slate-500 inline-flex items-center justify-center gap-1.5 max-w-xl mx-auto"
            >
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>
                {t(
                  'home.demoDisclosure',
                  {},
                  'These are predefined demonstration profiles for exploring the prototype.'
                )}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

