import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  RotateCcw, 
  AlertCircle, 
  HelpCircle, 
  Info, 
  Building2, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { ScreenType } from '../../types';
import { AssistantContext, ChatMessage } from '../../types/assistant';
import { useLanguage } from '../../i18n/LanguageContext';
import { getSuggestedQuestions } from '../../utils/assistantQuestions';
import { sendAssistantMessage } from '../../services/assistantService';

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentScreen: ScreenType;
  context: AssistantContext;
}

export const AIAssistantDrawer: React.FC<AIAssistantDrawerProps> = ({
  isOpen,
  onClose,
  currentScreen,
  context,
}) => {
  const { t, language } = useLanguage();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showContextBanner, setShowContextBanner] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize welcome message once or update when language changes if no conversation has started
  useEffect(() => {
    if (messages.length === 0 || (messages.length === 1 && messages[0].id.startsWith('welcome'))) {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content: t('assistant.welcomeMessage'),
          timestamp: Date.now(),
        },
      ]);
    }
  }, [language, t]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) {
      setInputText('');
    }
    setIsLoading(true);

    try {
      const response = await sendAssistantMessage(
        query,
        language,
        context,
        [...messages, userMessage]
      );

      if (response.success && response.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            content: response.reply,
            timestamp: Date.now(),
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `error-${Date.now()}`,
            role: 'assistant',
            content: response.error || t('assistant.errorFallback'),
            timestamp: Date.now(),
            error: true,
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: t('assistant.errorFallback'),
          timestamp: Date.now(),
          error: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearConversation = () => {
    if (window.confirm(t('assistant.clearChatConfirm'))) {
      setMessages([
        {
          id: `welcome-${Date.now()}`,
          role: 'assistant',
          content: t('assistant.welcomeMessage'),
          timestamp: Date.now(),
        },
      ]);
    }
  };

  const handleRetry = (failedMsg: ChatMessage) => {
    // Find the last user query
    const userMsgIndex = messages.findIndex((m) => m.id === failedMsg.id) - 1;
    const previousUserMsg = userMsgIndex >= 0 ? messages[userMsgIndex] : null;
    if (previousUserMsg && previousUserMsg.role === 'user') {
      // Remove the error message
      setMessages((prev) => prev.filter((m) => m.id !== failedMsg.id));
      handleSendMessage(previousUserMsg.content);
    }
  };

  const suggestedQuestions = getSuggestedQuestions(currentScreen, context, language);

  if (!isOpen) return null;

  // Format assistant messages cleanly
  const renderMessageContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    return (
      <div className="space-y-2 text-xs sm:text-sm leading-relaxed">
        {paragraphs.map((para, pIdx) => {
          const lines = para.split('\n');
          return (
            <div key={pIdx} className="space-y-1">
              {lines.map((line, lIdx) => {
                const trimmed = line.trim();
                const isBullet = trimmed.startsWith('* ') || trimmed.startsWith('- ') || trimmed.startsWith('• ');
                const isNumbered = /^\d+\.\s/.test(trimmed);

                const cleanLine = isBullet
                  ? trimmed.replace(/^[\*\-•]\s*/, '')
                  : isNumbered
                  ? trimmed.replace(/^\d+\.\s*/, '')
                  : line;

                // Simple parser for **bold** text
                const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
                const parsedContent = parts.map((part, partIdx) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={partIdx} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                });

                if (isBullet) {
                  return (
                    <div key={lIdx} className="flex items-start gap-2 pl-2">
                      <span className="text-orange-500 font-bold shrink-0 mt-0.5">•</span>
                      <span className="text-slate-800">{parsedContent}</span>
                    </div>
                  );
                }

                if (isNumbered) {
                  const match = trimmed.match(/^(\d+)\./);
                  const num = match ? match[1] : `${lIdx + 1}`;
                  return (
                    <div key={lIdx} className="flex items-start gap-2 pl-2">
                      <span className="text-blue-900 font-bold shrink-0">{num}.</span>
                      <span className="text-slate-800">{parsedContent}</span>
                    </div>
                  );
                }

                return (
                  <p key={lIdx} className="text-slate-800">
                    {parsedContent}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end">
      {/* Background click to close */}
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Assistant Slide-Over Drawer */}
      <div 
        id="scheme-setu-ai-assistant-drawer"
        role="dialog"
        aria-label="SchemeSetu AI Assistant"
        className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-slate-200"
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-5 py-3.5 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-white tracking-tight">
                  {t('assistant.title')}
                </h2>
                <span className="text-[10px] bg-orange-500/20 text-orange-300 border border-orange-500/30 px-1.5 py-0.5 rounded font-medium">
                  {context.language.toUpperCase()}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {t('assistant.subtitle')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              id="assistant-clear-chat-btn"
              onClick={handleClearConversation}
              title={t('assistant.clearChat')}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              id="assistant-close-btn"
              onClick={onClose}
              title={t('assistant.close')}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Context Bar (Collapsible) */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 text-xs shrink-0">
          <button
            onClick={() => setShowContextBanner(!showContextBanner)}
            className="w-full flex items-center justify-between text-slate-700 hover:text-slate-900 font-medium"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-900" />
              <span>{t('assistant.activeContext')}:</span>
              <span className="font-semibold text-blue-900">
                {context.scheme?.name ? context.scheme.name : (context.profile?.socialCategory ? `${context.profile.socialCategory} • ${context.project?.projectType || 'General'}` : 'Initial Profile')}
              </span>
            </span>
            {showContextBanner ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showContextBanner && (
            <div className="mt-2 pt-2 border-t border-slate-200 grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-white p-2.5 rounded border">
              <div>
                <span className="font-bold text-slate-700 block">Applicant:</span>
                <span>{context.profile?.socialCategory || 'Not specified'}, {context.profile?.gender || 'N/A'}, {context.profile?.district || 'General'}</span>
              </div>
              <div>
                <span className="font-bold text-slate-700 block">Project Cost:</span>
                <span>{context.project?.totalProjectCost || 'N/A'} (Own: {context.project?.ownContribution || 'N/A'})</span>
              </div>
              {context.financial?.monthlyEMI && (
                <div>
                  <span className="font-bold text-slate-700 block">Simulated EMI:</span>
                  <span>₹{context.financial.monthlyEMI.toLocaleString('en-IN')}/mo ({context.financial.tenureMonths} mos)</span>
                </div>
              )}
              {context.partner?.recommendedPartnerName && (
                <div>
                  <span className="font-bold text-slate-700 block">Partner:</span>
                  <span>{context.partner.recommendedPartnerName} (Simulated Load: {context.partner.simulatedUtilization}%)</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-xl p-3.5 text-xs sm:text-sm shadow-2xs ${
                  msg.role === 'user'
                    ? 'bg-blue-900 text-white rounded-br-xs'
                    : msg.error
                    ? 'bg-rose-50 text-rose-900 border border-rose-200 rounded-bl-xs'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-xs'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-slate-100 text-[11px] font-bold text-slate-500">
                    <Sparkles className="w-3 h-3 text-orange-500" />
                    <span>{t('assistant.title')}</span>
                  </div>
                )}

                {msg.error ? (
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-rose-800">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                      <span>{msg.content}</span>
                    </div>
                    <button
                      onClick={() => handleRetry(msg)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-rose-900 underline mt-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>{t('assistant.retry')}</span>
                    </button>
                  </div>
                ) : (
                  renderMessageContent(msg.content)
                )}
              </div>
            </div>
          ))}

          {/* Loading bubble */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-xl rounded-bl-xs p-3.5 text-xs shadow-2xs space-y-2 max-w-[85%]">
                <div className="flex items-center gap-2 text-slate-600 font-medium">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse delay-150"></div>
                  <span className="text-[11px] text-slate-500 ml-1">
                    {t('assistant.loading')}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions Section */}
        {suggestedQuestions.length > 0 && (
          <div className="bg-slate-100/90 border-t border-slate-200 px-4 py-2.5 shrink-0 space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
              {t('assistant.suggestedTitle')}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  disabled={isLoading}
                  onClick={() => handleSendMessage(q)}
                  className="text-left text-[11px] bg-white hover:bg-orange-50 hover:text-orange-950 hover:border-orange-300 text-slate-700 px-2.5 py-1 rounded-full border border-slate-300 transition-colors active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Bar */}
        <div className="bg-white p-3 border-t border-slate-200 shrink-0 space-y-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              id="assistant-query-input"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t('assistant.inputPlaceholder')}
              disabled={isLoading}
              className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all disabled:opacity-60"
            />
            <button
              id="assistant-send-query-btn"
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-slate-300 text-white p-2 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-xs active:scale-95 shrink-0"
            >
              <span className="hidden sm:inline">{t('assistant.send')}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Mandatory Informational Disclaimer */}
          <p className="text-[10px] text-slate-400 leading-tight px-1 text-center">
            {t('assistant.disclaimer')}
          </p>
        </div>
      </div>
    </div>
  );
};
