import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Language, LanguageContextType } from './types';
import { en } from './en';
import { hi } from './hi';
import { pa } from './pa';
import { bn } from './bn';
import { mr } from './mr';
import { gu } from './gu';
import { ta } from './ta';
import { te } from './te';
import { kn } from './kn';
import { ml } from './ml';
import { SCHEME_TRANSLATIONS } from './schemeTranslations';
import { PARTNER_TRANSLATIONS } from './partnerTranslations';
import { translateRuleName, translateExplanation, translateStatus } from './explanationTranslations';

const STORAGE_KEY = 'schemesetu_language';

const translations: Record<Language, Record<string, string>> = {
  en,
  hi,
  pa,
  bn,
  mr,
  gu,
  ta,
  te,
  kn,
  ml
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && ['en', 'hi', 'pa', 'bn', 'mr', 'gu', 'ta', 'te', 'kn', 'ml'].includes(saved)) {
        return saved as Language;
      }
    } catch {
      // ignore storage errors
    }
    return 'en';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, params?: Record<string, string | number>, fallback?: string): string => {
    const dict = translations[language] || translations.en;
    let text = dict[key] || translations.en[key] || fallback || key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      });
    }
    return text;
  };

  const tScheme = (
    schemeId: string,
    field: 'name' | 'shortDescription' | 'fullDescription' | 'subsidyDetails' | 'focusArea' | 'ownContribution'
  ): string => {
    const localized = SCHEME_TRANSLATIONS[language]?.[schemeId];
    if (localized && localized[field]) {
      return localized[field];
    }
    const fallback = SCHEME_TRANSLATIONS.en?.[schemeId];
    return (fallback && fallback[field]) || '';
  };

  const tPartner = (
    partnerId: string,
    field?: 'name' | 'type' | 'address'
  ): string => {
    if (!field) {
      const localized = PARTNER_TRANSLATIONS[language]?.[partnerId];
      if (localized?.name) return localized.name;
      return translateExplanation(partnerId, language);
    }
    const localized = PARTNER_TRANSLATIONS[language]?.[partnerId];
    if (localized && localized[field]) {
      return localized[field];
    }
    const fallback = PARTNER_TRANSLATIONS.en?.[partnerId];
    return (fallback && fallback[field]) || '';
  };

  const tReason = (
    reasonOrRule: string | { explanation: string; ruleCode?: string; params?: Record<string, string | number> },
    params?: Record<string, string | number>
  ): string => {
    return translateExplanation(reasonOrRule, language, params);
  };

  const tRuleName = (
    ruleOrRuleObj: string | { ruleName: string; ruleCode?: string }
  ): string => {
    if (typeof ruleOrRuleObj === 'object' && ruleOrRuleObj !== null) {
      if (ruleOrRuleObj.ruleCode) {
        const trans = translateRuleName(ruleOrRuleObj.ruleCode, language);
        if (trans && trans !== ruleOrRuleObj.ruleCode) return trans;
      }
      return translateRuleName(ruleOrRuleObj.ruleName, language);
    }
    return translateRuleName(ruleOrRuleObj, language);
  };

  const tStatus = (status: string): string => {
    return translateStatus(status, language);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      tScheme,
      tPartner,
      tReason,
      tRuleName,
      tStatus
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
