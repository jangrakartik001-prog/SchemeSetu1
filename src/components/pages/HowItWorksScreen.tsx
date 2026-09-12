import React from 'react';
import { 
  UserCheck, 
  Briefcase, 
  SlidersHorizontal, 
  Percent, 
  Building2, 
  FileText, 
  ArrowRight, 
  ArrowLeft,
  HelpCircle
} from 'lucide-react';
import { ScreenType } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

interface HowItWorksScreenProps {
  onStartJourney: () => void;
  onBackToHome: () => void;
}

export const HowItWorksScreen: React.FC<HowItWorksScreenProps> = ({
  onStartJourney,
  onBackToHome,
}) => {
  const { t } = useLanguage();

  const workflowSteps = [
    {
      number: '01',
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Desc'),
      icon: UserCheck,
      color: 'blue',
      badge: t('step.profile')
    },
    {
      number: '02',
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Desc'),
      icon: Briefcase,
      color: 'orange',
      badge: t('step.project')
    },
    {
      number: '03',
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Desc'),
      icon: SlidersHorizontal,
      color: 'emerald',
      badge: t('step.recommendations')
    },
    {
      number: '04',
      title: t('howItWorks.step4Title'),
      description: t('howItWorks.step4Desc'),
      icon: Percent,
      color: 'purple',
      badge: t('step.simulator')
    },
    {
      number: '05',
      title: t('howItWorks.step5Title'),
      description: t('howItWorks.step5Desc'),
      icon: Building2,
      color: 'indigo',
      badge: t('step.partner')
    },
    {
      number: '06',
      title: t('howItWorks.step6Title'),
      description: t('howItWorks.step6Desc'),
      icon: FileText,
      color: 'teal',
      badge: t('common.mandatoryNotice')
    }
  ];

  return (
    <div className="w-full py-10 sm:py-14 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back */}
        <div className="mb-6 flex items-center justify-between">
          <button
            id="how-it-works-back-home-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('howItWorks.breadcrumb')}</span>
          </button>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 text-blue-900 border border-blue-200">
            {t('header.stageBadge')}
          </span>
        </div>

        {/* Heading Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('howItWorks.badge')}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('howItWorks.title')}
          </h1>
          <p className="text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            {t('howItWorks.desc')}
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="space-y-6">
          {workflowSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="flex items-center gap-3 sm:flex-col sm:items-center shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-950 text-orange-400 flex items-center justify-center font-bold text-lg shadow-xs">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-blue-700 shrink-0" />
                      <span>{step.title}</span>
                    </h2>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-blue-900 shadow-md text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            {t('howItWorks.readyTitle')}
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-8">
            {t('howItWorks.readyDesc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="how-it-works-start-btn"
              onClick={onStartJourney}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md transition-all active:scale-98 cursor-pointer"
            >
              <span>{t('howItWorks.startBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="how-it-works-return-btn"
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3.5 rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              <span>{t('howItWorks.returnBtn')}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
