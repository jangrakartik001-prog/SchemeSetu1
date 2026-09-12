export type Language = 'en' | 'hi' | 'pa' | 'bn' | 'mr' | 'gu' | 'ta' | 'te' | 'kn' | 'ml';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag?: string;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>, fallback?: string) => string;
  tScheme: (schemeId: string, field: 'name' | 'shortDescription' | 'fullDescription' | 'subsidyDetails' | 'focusArea' | 'ownContribution') => string;
  tPartner: (partnerId: string, field?: 'name' | 'type' | 'address') => string;
  tReason: (reasonOrCheck: string | { explanation: string; ruleCode?: string; params?: Record<string, string | number> }, params?: Record<string, string | number>) => string;
  tRuleName: (ruleNameOrCode: string | { ruleName: string; ruleCode?: string }) => string;
  tStatus: (status: string) => string;
}
