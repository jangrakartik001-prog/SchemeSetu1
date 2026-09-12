import React, { useState } from 'react';
import { ShieldCheck, HelpCircle, ArrowRight, Sparkles, BookOpen, Calculator, Building2, Menu, X } from 'lucide-react';
import { ScreenType } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenAssistant?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, onOpenAssistant }) => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getBrandDisplay = () => {
    switch (language) {
      case 'hi': return { prefix: 'स्कीम', suffix: 'सेतु', char: 'सं' };
      case 'pa': return { prefix: 'ਸਕੀਮ', suffix: 'ਸੇਤੂ', char: 'ਸੰ' };
      case 'bn': return { prefix: 'স্কিম', suffix: 'সেতু', char: 'সং' };
      case 'mr': return { prefix: 'स्कीम', suffix: 'सेतू', char: 'सं' };
      case 'gu': return { prefix: 'સ્કીમ', suffix: 'સેતુ', char: 'સં' };
      case 'ta': return { prefix: 'ஸ்கீம்', suffix: 'சேது', char: 'சே' };
      case 'te': return { prefix: 'స్కీమ్', suffix: 'సేతు', char: 'సే' };
      case 'kn': return { prefix: 'ಸ್ಕೀಮ್', suffix: 'ಸೇತು', char: 'ಸೇ' };
      case 'ml': return { prefix: 'സ്കീം', suffix: 'സേതു', char: 'സേ' };
      default: return { prefix: 'Scheme', suffix: 'Setu', char: 'सं' };
    }
  };

  const brand = getBrandDisplay();

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  const isStandalonePage = ['home', 'how-it-works', 'scheme-explorer', 'financial-tools', 'partner-network'].includes(currentScreen);

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-sm">
      {/* Tricolor top border accent */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-600 opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Logo & Brand */}
          <div 
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-blue-700 to-slate-900 border border-blue-500/30 flex items-center justify-center text-white shadow-md group-hover:border-orange-500 transition-colors shrink-0">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-orange-400">{brand.char}</span>
              <span className="font-semibold text-[10px] sm:text-xs text-blue-200 ml-0.5">Setu</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  {brand.prefix}<span className="text-orange-400">{brand.suffix}</span>
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-950 text-blue-300 border border-blue-800">
                  {t('header.stageBadge')}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 hidden sm:block tracking-wide">
                {t('common.tagline')}
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              id="nav-home-btn"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-xs lg:text-sm font-medium transition-all relative ${
                currentScreen === 'home'
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-orange-500'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {t('header.home')}
            </button>

            <button
              id="nav-how-it-works-btn"
              onClick={() => handleNavClick('how-it-works')}
              className={`px-3 py-2 text-xs lg:text-sm font-medium transition-all relative flex items-center gap-1.5 ${
                currentScreen === 'how-it-works'
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-orange-500'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{t('header.howItWorks')}</span>
            </button>

            <button
              id="nav-schemes-btn"
              onClick={() => handleNavClick('scheme-explorer')}
              className={`px-3 py-2 text-xs lg:text-sm font-medium transition-all relative flex items-center gap-1.5 ${
                currentScreen === 'scheme-explorer'
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-orange-500'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t('header.schemes', {}, 'Schemes')}</span>
            </button>

            <button
              id="nav-financial-tools-btn"
              onClick={() => handleNavClick('financial-tools')}
              className={`px-3 py-2 text-xs lg:text-sm font-medium transition-all relative flex items-center gap-1.5 ${
                currentScreen === 'financial-tools'
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-orange-500'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{t('header.financialTools', {}, 'Financial Tools')}</span>
            </button>

            <button
              id="nav-partner-network-btn"
              onClick={() => handleNavClick('partner-network')}
              className={`px-3 py-2 text-xs lg:text-sm font-medium transition-all relative flex items-center gap-1.5 ${
                currentScreen === 'partner-network'
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-orange-500'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{t('header.partnerNetwork', {}, 'Partner Network')}</span>
            </button>
          </div>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* AI Assistant Quick Trigger */}
            <button
              id="header-ai-assistant-btn"
              onClick={onOpenAssistant}
              className="px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 text-blue-200 hover:text-white bg-[#0f1d38] hover:bg-[#16274b] border border-blue-800/60 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden xs:inline">{t('assistant.headerBtn')}</span>
            </button>

            {/* CTA Button or Status */}
            {isStandalonePage ? (
              <button
                id="header-start-journey-btn"
                onClick={() => handleNavClick('beneficiary-profile')}
                className="inline-flex items-center gap-1.5 bg-[#f95716] hover:bg-[#ea4808] text-white px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95 whitespace-nowrap"
              >
                <span>{t('header.startJourney')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="hidden lg:flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1.5 rounded-md border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t('common.confidentialAssessment')}</span>
              </span>
            )}

            {/* Language Selector */}
            <LanguageSelector />

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-hidden"
              aria-label={mobileMenuOpen ? t('header.close', {}, 'Close') : t('header.menu', {}, 'Menu')}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-800 grid grid-cols-1 gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                currentScreen === 'home' ? 'bg-slate-800 text-orange-400 font-bold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {t('header.home')}
            </button>
            <button
              onClick={() => handleNavClick('scheme-explorer')}
              className={`text-left px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentScreen === 'scheme-explorer' ? 'bg-slate-800 text-orange-400 font-bold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span>{t('header.schemes', {}, 'Schemes')}</span>
            </button>
            <button
              onClick={() => handleNavClick('financial-tools')}
              className={`text-left px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentScreen === 'financial-tools' ? 'bg-slate-800 text-orange-400 font-bold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Calculator className="w-4 h-4 text-orange-400" />
              <span>{t('header.financialTools', {}, 'Financial Tools')}</span>
            </button>
            <button
              onClick={() => handleNavClick('partner-network')}
              className={`text-left px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentScreen === 'partner-network' ? 'bg-slate-800 text-orange-400 font-bold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Building2 className="w-4 h-4 text-orange-400" />
              <span>{t('header.partnerNetwork', {}, 'Partner Network')}</span>
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className={`text-left px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentScreen === 'how-it-works' ? 'bg-slate-800 text-orange-400 font-bold' : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-orange-400" />
              <span>{t('header.howItWorks')}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

