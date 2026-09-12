import React from 'react';
import { Shield, FileCheck, Layers } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800">
          
          {/* Col 1: About SchemeSetu */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded bg-blue-700 flex items-center justify-center text-white font-bold text-sm">
                सं
              </div>
              <span className="font-bold text-white text-base">
                {language === 'hi' ? 'स्कीमसेतु' : language === 'pa' ? 'ਸਕੀਮਸੇਤੂ' : language === 'bn' ? 'স্কিমসেতু' : language === 'mr' ? 'स्कीमसेतू' : language === 'gu' ? 'સ્કીમસેતુ' : language === 'ta' ? 'ஸ்கீம்சேது' : language === 'te' ? 'స్కీమ్సేతు' : language === 'kn' ? 'ಸ್ಕೀಮ್ಸೇತು' : language === 'ml' ? 'സ്കീംസേതു' : 'SchemeSetu'}
              </span>
            </div>
            <p className="text-xs text-slate-300 mb-2 font-medium">
              "{t('common.tagline')}"
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('footer.aboutDesc')}
            </p>
          </div>

          {/* Col 2: Four-Step Framework & Purpose */}
          <div>
            <div className="flex items-center gap-1.5 text-white font-semibold mb-3 text-sm">
              <Layers className="w-4 h-4 text-orange-400" />
              <span>{t('footer.sihTitle')}</span>
            </div>
            <p className="text-xs text-orange-400 font-semibold mb-1">
              {t('common.tagline')}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              "{t('footer.psTitle')}"
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t('footer.stageInfo')}</span>
            </div>
          </div>

          {/* Col 3: Principles & Integrity */}
          <div>
            <div className="flex items-center gap-1.5 text-white font-semibold mb-3 text-sm">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>{t('footer.principlesTitle')}</span>
            </div>
            <ul className="text-xs text-slate-400 space-y-1.5">
              <li className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t('footer.principle1')}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t('footer.principle2')}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t('footer.principle3')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Prototype Disclaimer bar */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3.5 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="font-semibold text-orange-400 uppercase tracking-wide text-[11px] mr-2 px-1.5 py-0.5 bg-orange-950/80 border border-orange-800/60 rounded">
              {t('footer.disclaimerBadge')}
            </span>
            <span>
              {t('footer.disclaimerText')}
            </span>
          </div>
          <span className="text-slate-500 whitespace-nowrap text-[11px]">
            {t('footer.release')}
          </span>
        </div>
      </div>
    </footer>
  );
};
