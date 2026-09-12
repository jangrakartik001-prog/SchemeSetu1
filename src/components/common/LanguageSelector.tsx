import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Language } from '../../i18n/types';

interface LanguageOption {
  code: Language;
  nativeLabel: string;
  englishLabel: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'en', nativeLabel: 'English', englishLabel: 'English' },
  { code: 'hi', nativeLabel: 'हिन्दी', englishLabel: 'Hindi' },
  { code: 'pa', nativeLabel: 'ਪੰਜਾਬੀ', englishLabel: 'Punjabi' },
  { code: 'bn', nativeLabel: 'বাংলা', englishLabel: 'Bengali' },
  { code: 'mr', nativeLabel: 'मराठी', englishLabel: 'Marathi' },
  { code: 'gu', nativeLabel: 'ગુજરાતી', englishLabel: 'Gujarati' },
  { code: 'ta', nativeLabel: 'தமிழ்', englishLabel: 'Tamil' },
  { code: 'te', nativeLabel: 'తెలుగు', englishLabel: 'Telugu' },
  { code: 'kn', nativeLabel: 'ಕನ್ನಡ', englishLabel: 'Kannada' },
  { code: 'ml', nativeLabel: 'മലയാളം', englishLabel: 'Malayalam' }
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelectLanguage = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-flex items-center" id="header-language-selector" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        id="language-dropdown-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-full text-xs font-medium transition-all shadow-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-orange-500"
        title="Change Language / भाषा बदलें / ਭਾਸ਼ਾ ਬਦਲੋ / ভাষা পরিবর্তন / भाषा बदला / ભાષા બદલો"
      >
        <Globe className="w-3.5 h-3.5 text-orange-400 shrink-0" />
        <span className="font-semibold text-white tracking-wide">{currentLang.nativeLabel}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          id="language-options-menu"
          aria-label="Select Language"
          className="absolute right-0 top-full mt-1.5 w-44 bg-slate-900 border border-slate-700 rounded-xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          <div className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-slate-400 border-b border-slate-800">
            Select Language
          </div>

          <div className="py-1">
            {LANGUAGES.map((item) => {
              const isSelected = language === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  id={`lang-btn-${item.code}`}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelectLanguage(item.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-orange-600/20 text-orange-300 font-semibold'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium leading-tight">{item.nativeLabel}</span>
                    <span className="text-[10px] text-slate-400 leading-tight">{item.englishLabel}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
