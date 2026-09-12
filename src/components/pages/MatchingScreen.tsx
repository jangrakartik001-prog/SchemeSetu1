import React, { useEffect, useState } from 'react';
import { 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  Search,
  Filter,
  BarChart3
} from 'lucide-react';
import { BeneficiaryProfile, ProjectDetails, MatchingSummary } from '../../types';
import { matchSchemes } from '../../services/matchingService';
import { formatINR } from '../../utils/formatters';
import { useLanguage } from '../../i18n/LanguageContext';

interface MatchingScreenProps {
  beneficiary: BeneficiaryProfile;
  project: ProjectDetails;
  onMatchingComplete: (results: MatchingSummary) => void;
  onBackToSummary: () => void;
}

export const MatchingScreen: React.FC<MatchingScreenProps> = ({
  beneficiary,
  project,
  onMatchingComplete,
  onBackToSummary
}) => {
  const { t } = useLanguage();
  const [currentRuleIndex, setCurrentRuleIndex] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [results, setResults] = useState<MatchingSummary | null>(null);

  const ruleSteps = [
    { title: t('matching.rule1Title'), desc: t('matching.rule1Desc') },
    { title: t('matching.rule2Title'), desc: t('matching.rule2Desc') },
    { title: t('matching.rule3Title'), desc: t('matching.rule3Desc') },
    { title: t('matching.rule4Title'), desc: t('matching.rule4Desc') },
    { title: t('matching.rule5Title'), desc: t('matching.rule5Desc') },
  ];

  useEffect(() => {
    // Run deterministic matching engine synchronously
    const matchResults = matchSchemes(beneficiary, project);
    setResults(matchResults);

    // Step through the visual diagnostic for explainability
    const interval = setInterval(() => {
      setCurrentRuleIndex(prev => {
        if (prev < ruleSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsCompleted(true);
          return prev;
        }
      });
    }, 400);

    return () => clearInterval(interval);
  }, [beneficiary, project]);

  const handleProceed = () => {
    if (results) {
      onMatchingComplete(results);
    }
  };

  const totalCostNum = parseFloat((project.totalProjectCost || '').replace(/[^0-9.-]+/g, '')) || 0;
  const ownContribNum = parseFloat((project.ownContribution || '').replace(/[^0-9.-]+/g, '')) || 0;
  const requiredFinancingNum = Math.max(0, totalCostNum - ownContribNum);

  return (
    <div className="w-full py-10 sm:py-16 bg-slate-50 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 text-center border-b border-slate-800 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              <span>{t('matching.badge')}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t('matching.title')}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto leading-relaxed">
              {t('matching.subtitle')}
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Beneficiary Quick Summary Badge */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-slate-500 font-medium">{t('matching.applicant')}</span>{' '}
                <strong className="text-slate-900">{beneficiary.fullName || 'Beneficiary'}</strong> ({beneficiary.socialCategory || 'Applicant'})
              </div>
              <div>
                <span className="text-slate-500 font-medium">{t('matching.targetDebt')}</span>{' '}
                <strong className="text-emerald-700 font-bold">{formatINR(requiredFinancingNum)}</strong>
              </div>
            </div>

            {/* Rule Checks Progress Animation */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-1">
                <span>{t('matching.pipelineTitle')}</span>
                <span>{t('matching.rulesChecked', { current: Math.min(currentRuleIndex + 1, ruleSteps.length), total: ruleSteps.length })}</span>
              </div>

              {ruleSteps.map((step, idx) => {
                const isDone = idx < currentRuleIndex || isCompleted;
                const isCurrent = idx === currentRuleIndex && !isCompleted;
                
                return (
                  <div 
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 ${
                      isDone 
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                        : isCurrent
                        ? 'bg-blue-50 border-blue-300 shadow-xs ring-1 ring-blue-100'
                        : 'bg-slate-50 border-slate-200 opacity-60 text-slate-500'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : isCurrent ? (
                        <div className="w-4 h-4 rounded-full border-2 border-orange-500 border-t-transparent animate-spin" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-300 bg-white" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`text-xs font-bold ${isDone ? 'text-emerald-900' : isCurrent ? 'text-blue-950' : 'text-slate-600'}`}>
                        {step.title}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Completion or Instant Proceed */}
            <div className="pt-2">
              <button
                id="matching-proceed-btn"
                onClick={handleProceed}
                className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-98 text-sm cursor-pointer"
              >
                <span>{isCompleted ? t('matching.proceedBtn') : t('matching.skipToResults')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 text-center">
                <button
                  id="matching-back-btn"
                  onClick={onBackToSummary}
                  className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  {t('matching.returnToSummary')}
                </button>
              </div>
            </div>

          </div>

          {/* Footer Notice */}
          <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-center text-[11px] text-slate-500">
            {t('matching.footerNotice')}
          </div>

        </div>

      </div>
    </div>
  );
};
