import React from 'react';
import { UserCheck, Briefcase, Award, Check, Calculator, Building2, FileText, CheckCircle2 } from 'lucide-react';
import { ScreenType } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

interface StepIndicatorProps {
  currentScreen: ScreenType;
  onStepClick?: (screen: ScreenType) => void;
  canNavigateToProject?: boolean;
  canNavigateToSummary?: boolean;
  canNavigateToRecommendations?: boolean;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentScreen,
  onStepClick,
  canNavigateToProject = false,
  canNavigateToSummary = false,
  canNavigateToRecommendations = false,
}) => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 'beneficiary-profile' as ScreenType,
      number: 1,
      title: t('step.step1Title'),
      subtitle: t('step.step1Sub'),
      icon: UserCheck,
      isAccessible: true,
    },
    {
      id: 'project-details' as ScreenType,
      number: 2,
      title: t('step.step2Title'),
      subtitle: t('step.step2Sub'),
      icon: Briefcase,
      isAccessible: canNavigateToProject,
    },
    {
      id: 'recommendation-results' as ScreenType,
      number: 3,
      title: t('step.step3Title'),
      subtitle: t('step.step3Sub'),
      icon: Award,
      isAccessible: canNavigateToRecommendations,
    },
    {
      id: 'scheme-details' as ScreenType,
      number: 4,
      title: t('step.step4Title'),
      subtitle: t('step.step4Sub'),
      icon: FileText,
      isAccessible: canNavigateToRecommendations,
    },
    {
      id: 'financial-simulator' as ScreenType,
      number: 5,
      title: t('step.step5Title'),
      subtitle: t('step.step5Sub'),
      icon: Calculator,
      isAccessible: canNavigateToRecommendations,
    },
    {
      id: 'channel-partner' as ScreenType,
      number: 6,
      title: t('step.step6Title'),
      subtitle: t('step.step6Sub'),
      icon: Building2,
      isAccessible: canNavigateToRecommendations,
    },
    {
      id: 'application-readiness' as ScreenType,
      number: 7,
      title: t('step.step7Title'),
      subtitle: t('step.step7Sub'),
      icon: CheckCircle2,
      isAccessible: canNavigateToRecommendations,
    },
  ];

  const getStepStatus = (stepId: ScreenType, stepNumber: number) => {
    if (currentScreen === stepId) return 'current';
    if (
      (currentScreen === 'project-details' && stepNumber < 2) ||
      (currentScreen === 'summary' && stepNumber < 2) ||
      ((currentScreen === 'matching' || currentScreen === 'stage2-matching') && stepNumber < 3) ||
      (currentScreen === 'recommendation-results' && stepNumber < 3) ||
      (currentScreen === 'scheme-details' && stepNumber < 4) ||
      (currentScreen === 'financial-simulator' && stepNumber < 5) ||
      (currentScreen === 'channel-partner' && stepNumber < 6) ||
      ((currentScreen === 'application-readiness' || currentScreen === 'application-ready') && stepNumber < 7)
    ) {
      return 'completed';
    }
    if (currentScreen === 'summary' && stepNumber === 2) return 'current';
    if ((currentScreen === 'matching' || currentScreen === 'stage2-matching') && stepNumber === 3) return 'current';
    if (currentScreen === 'recommendation-results' && stepNumber === 3) return 'current';
    if (currentScreen === 'scheme-details' && stepNumber === 4) return 'current';
    if (currentScreen === 'financial-simulator' && stepNumber === 5) return 'current';
    if (currentScreen === 'channel-partner' && stepNumber === 6) return 'current';
    if ((currentScreen === 'application-readiness' || currentScreen === 'application-ready') && stepNumber === 7) return 'current';
    return 'upcoming';
  };

  const currentStep = steps.find(s => getStepStatus(s.id, s.number) === 'current') || steps[0];

  return (
    <div className="w-full bg-white border-b border-slate-200 shadow-xs py-3.5 mb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Mobile View: Compact Progress Bar with Step Indicator */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded">
                {t('common.stepOfTotal', { number: currentStep.number, total: 7 })}
              </span>
              <span className="text-sm font-bold text-slate-900">
                {currentStep.title}
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              {t('common.percentComplete', { pct: Math.round((currentStep.number / 7) * 100) })}
            </span>
          </div>

          <div className="grid grid-cols-7 gap-1 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            {steps.map((step) => {
              const status = getStepStatus(step.id, step.number);
              return (
                <button
                  key={step.id}
                  type="button"
                  disabled={!step.isAccessible}
                  onClick={() => step.isAccessible && onStepClick && onStepClick(step.id)}
                  title={`${step.number}. ${step.title}`}
                  className={`h-full transition-colors ${
                    status === 'completed'
                      ? 'bg-emerald-600'
                      : status === 'current'
                      ? 'bg-orange-500'
                      : 'bg-slate-200'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop View: Full 7-Step Horizontal Timeline */}
        <div className="hidden lg:flex items-center justify-between relative">
          {/* Connector Line behind steps */}
          <div className="absolute left-6 right-6 top-4 h-0.5 bg-slate-200 -z-0" />

          {steps.map((step) => {
            const status = getStepStatus(step.id, step.number);
            const isClickable = step.isAccessible && Boolean(onStepClick);

            return (
              <div
                key={step.id}
                onClick={() => {
                  if (isClickable && onStepClick) {
                    onStepClick(step.id);
                  }
                }}
                className={`relative z-10 flex flex-col items-center group transition-all ${
                  isClickable ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 ${
                    status === 'completed'
                      ? 'bg-emerald-600 text-white shadow-xs ring-4 ring-emerald-50'
                      : status === 'current'
                      ? 'bg-blue-900 text-white shadow-md ring-4 ring-blue-100 border-2 border-orange-500'
                      : 'bg-slate-100 text-slate-500 border border-slate-300'
                  }`}
                >
                  {status === 'completed' ? (
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>

                <div className="text-center mt-1.5 max-w-[100px]">
                  <p
                    className={`text-xs font-semibold leading-tight truncate ${
                      status === 'current'
                        ? 'text-blue-950 font-bold'
                        : status === 'completed'
                        ? 'text-slate-800'
                        : 'text-slate-500'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
