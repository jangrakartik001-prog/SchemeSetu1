import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface AIAssistantFloatingButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const AIAssistantFloatingButton: React.FC<AIAssistantFloatingButtonProps> = ({
  onClick,
  isOpen,
}) => {
  const { t } = useLanguage();

  if (isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        id="floating-ai-assistant-btn"
        onClick={onClick}
        aria-label={t('assistant.floatingTooltip')}
        title={t('assistant.floatingTooltip')}
        className="group flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2.5 rounded-full shadow-lg border border-slate-700 hover:border-orange-500 transition-all transform hover:-translate-y-0.5 active:scale-95"
      >
        <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-slate-200 group-hover:text-white pr-1">
          {t('assistant.headerBtn')}
        </span>
      </button>
    </div>
  );
};
