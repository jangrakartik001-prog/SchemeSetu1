/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  ScreenType, 
  BeneficiaryProfile, 
  ProjectDetails, 
  MatchingSummary, 
  Scheme,
  ChannelPartner,
  DocumentStatusType,
  UploadedDemoFile,
  FinancialCalculationResult
} from './types';
import { DEMO_PRESETS } from './data/indiaData';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { StepIndicator } from './components/common/StepIndicator';
import { HomeScreen } from './components/pages/HomeScreen';
import { HowItWorksScreen } from './components/pages/HowItWorksScreen';
import { SchemeExplorerScreen } from './components/pages/SchemeExplorerScreen';
import { FinancialToolsScreen } from './components/pages/FinancialToolsScreen';
import { PartnerNetworkScreen } from './components/pages/PartnerNetworkScreen';
import { BeneficiaryProfileScreen } from './components/pages/BeneficiaryProfileScreen';
import { ProjectDetailsScreen } from './components/pages/ProjectDetailsScreen';
import { SummaryScreen } from './components/pages/SummaryScreen';
import { MatchingScreen } from './components/pages/MatchingScreen';
import { RecommendationResultsScreen } from './components/pages/RecommendationResultsScreen';
import { SchemeDetailScreen } from './components/pages/SchemeDetailScreen';
import { FinancialSimulatorScreen } from './components/pages/FinancialSimulatorScreen';
import { ChannelPartnerScreen } from './components/pages/ChannelPartnerScreen';
import { ApplicationReadinessScreen } from './components/pages/ApplicationReadinessScreen';
import { ApplicationReadyScreen } from './components/pages/ApplicationReadyScreen';
import { matchSchemes } from './services/matchingService';
import { useLanguage } from './i18n/LanguageContext';
import { SCHEMES_DATABASE } from './data/schemesData';
import { PROTOTYPE_PARTNERS } from './data/partnersData';
import { calculateEMI, calculateFinancingGap } from './services/financialEngine';
import { rankChannelPartners } from './services/partnerRoutingEngine';
import { AIAssistantDrawer } from './components/assistant/AIAssistantDrawer';
import { AIAssistantFloatingButton } from './components/assistant/AIAssistantFloatingButton';
import { AssistantContext } from './types/assistant';

const initialBeneficiaryState: BeneficiaryProfile = {
  fullName: '',
  age: '',
  gender: '',
  state: '',
  district: '',
  socialCategory: '',
  annualFamilyIncome: '',
  educationStatus: '',
  employmentStatus: '',
  preferredLanguage: 'Hindi'
};

const initialProjectState: ProjectDetails = {
  projectName: '',
  projectType: '',
  businessNature: '',
  description: '',
  totalProjectCost: '',
  ownContribution: '',
  preferredLocation: '',
  purposeOfFinancing: '',
  relevantExperience: '',
  existingIncome: ''
};

export default function App() {
  const { language } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [beneficiary, setBeneficiary] = useState<BeneficiaryProfile>(initialBeneficiaryState);
  const [project, setProject] = useState<ProjectDetails>(initialProjectState);
  const [matchingSummary, setMatchingSummary] = useState<MatchingSummary | null>(null);
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>('pmegp');

  const [hasCompletedProfile, setHasCompletedProfile] = useState<boolean>(false);
  const [hasCompletedProject, setHasCompletedProject] = useState<boolean>(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);

  // Stage 6: Application Ready state
  const [appReadyStep, setAppReadyStep] = useState<1 | 2 | 3 | 4>(1);
  const [appReadyDocStatuses, setAppReadyDocStatuses] = useState<Record<string, DocumentStatusType>>({
    aadhaar_pan: 'Ready',
    residence: 'Ready',
    income: 'Needs Review',
    caste: 'Needs Review',
    dpr: 'Needs Review',
    quotations: 'Needs Review',
    bank: 'Needs Review',
    land: 'Optional'
  });
  const [appReadyUploadedFiles, setAppReadyUploadedFiles] = useState<Record<string, UploadedDemoFile>>({});
  const [selectedChannelPartner, setSelectedChannelPartner] = useState<ChannelPartner | null>(null);
  const [appReadyAppointmentDate, setAppReadyAppointmentDate] = useState<string>('2026-09-15');
  const [appReadyAppointmentSlot, setAppReadyAppointmentSlot] = useState<string>('10:00 AM');
  const [appReadyAppointmentPurpose, setAppReadyAppointmentPurpose] = useState<string>('MSME Scheme Consultation & Physical Verification');
  const [appReadyReferenceId, setAppReadyReferenceId] = useState<string | null>(null);

  const handleUpdateAppReadyDocStatus = (docId: string, status: DocumentStatusType) => {
    setAppReadyDocStatuses(prev => ({
      ...prev,
      [docId]: status
    }));
  };

  const handleAppReadyFileUpload = (docId: string, file: UploadedDemoFile) => {
    setAppReadyUploadedFiles(prev => ({
      ...prev,
      [docId]: file
    }));
  };

  const handleAppReadyFileRemove = (docId: string) => {
    setAppReadyUploadedFiles(prev => {
      const next = { ...prev };
      delete next[docId];
      return next;
    });
  };

  const handleProceedToApplicationReady = (schemeId?: string) => {
    if (schemeId) {
      setSelectedSchemeId(schemeId);
    }
    setCurrentScreen('application-ready');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Active scheme object
  const activeScheme = useMemo(() => {
    return SCHEMES_DATABASE.find(s => s.id === selectedSchemeId) || SCHEMES_DATABASE[0];
  }, [selectedSchemeId]);

  // Active scheme evaluation from matching results (if evaluated)
  const activeSchemeEval = useMemo(() => {
    return matchingSummary?.eligibleSchemes.find(e => e.scheme.id === selectedSchemeId);
  }, [matchingSummary, selectedSchemeId]);

  // Financial calculation result for application readiness
  const currentFinancialResult: FinancialCalculationResult = useMemo(() => {
    const totalCost = Number(project.totalProjectCost) || 1200000;
    const ownContrib = Number(project.ownContribution) || 300000;
    const requiredFin = Math.max(0, totalCost - ownContrib);
    const rate = activeScheme.financialParameters?.interestRateMin || 9.0;
    const tenureYears = activeScheme.financialParameters?.maxTenureYears || 5;
    const tenureMonths = tenureYears * 12;
    const emiRes = calculateEMI(requiredFin, rate, tenureMonths, 0, totalCost, ownContrib);
    return {
      totalProjectCost: totalCost,
      promoterContribution: ownContrib,
      requiredFinancing: requiredFin,
      estimatedMonthlyEMI: emiRes.monthlyEMI,
      interestRateAnnual: rate,
      loanTenureYears: tenureYears,
      loanTenureMonths: tenureMonths,
      totalRepaymentAmount: emiRes.totalRepayment,
      totalInterestPayable: emiRes.totalInterest,
      effectiveInterestRate: rate
    };
  }, [project, activeScheme]);

  // Partner routing ranking for application readiness
  const currentPartnerRouting = useMemo(() => {
    const totalCost = Number(project.totalProjectCost) || 1200000;
    const ownContrib = Number(project.ownContribution) || 300000;
    const requiredFin = Math.max(0, totalCost - ownContrib);

    return rankChannelPartners({
      selectedSchemeId: activeScheme.id,
      projectType: (project.projectType as any) || 'Manufacturing',
      requiredFinancing: requiredFin > 0 ? requiredFin : 900000,
      beneficiaryState: beneficiary.state || 'Punjab',
      beneficiaryDistrict: beneficiary.district || 'Ludhiana',
    });
  }, [activeScheme, project, beneficiary]);

  // Derive current financial context for the assistant
  const assistantFinancialContext = useMemo(() => {
    const totalCost = Number(project.totalProjectCost) || 0;
    const ownContrib = Number(project.ownContribution) || 0;
    const requiredFin = Math.max(0, totalCost - ownContrib);
    
    if (totalCost > 0 && activeScheme) {
      const rate = activeScheme.financialParameters?.interestRateMin || 9.0;
      const tenure = (activeScheme.financialParameters?.maxTenureYears || 5) * 12;
      const emiRes = calculateEMI(requiredFin, rate, tenure, 0, totalCost, ownContrib);
      const gapRes = calculateFinancingGap(requiredFin, activeScheme.maxLoanAmount);
      return {
        totalProjectCost: totalCost,
        ownContribution: ownContrib,
        requiredFinancing: requiredFin,
        monthlyEMI: emiRes.monthlyEMI,
        interestRate: rate,
        tenureMonths: tenure,
        totalRepayment: emiRes.totalRepayment,
        totalInterest: emiRes.totalInterest,
        hasFinancingGap: gapRes.hasGap,
        financingGapAmount: gapRes.gapAmount,
      };
    }
    return undefined;
  }, [project, activeScheme]);

  // Derive current channel partner context for the assistant
  const assistantPartnerContext = useMemo(() => {
    const totalCost = Number(project.totalProjectCost) || 0;
    const ownContrib = Number(project.ownContribution) || 0;
    const requiredFin = Math.max(0, totalCost - ownContrib);

    if (activeScheme) {
      const routingRes = rankChannelPartners({
        selectedSchemeId: activeScheme.id,
        projectType: (project.projectType as any) || 'Manufacturing',
        requiredFinancing: requiredFin > 0 ? requiredFin : 1000000,
        beneficiaryState: beneficiary.state || 'Punjab',
        beneficiaryDistrict: beneficiary.district || 'Ludhiana',
      });

      const top = routingRes.recommendedPartner;
      if (top) {
        return {
          recommendedPartnerName: top.partner.name,
          partnerType: top.partner.type,
          address: top.partner.address,
          district: top.partner.district,
          state: top.partner.state,
          routingScore: top.score,
          distanceTier: top.distanceTier,
          simulatedCapacity: top.partner.capacityStatus,
          simulatedUtilization: top.partner.capacityUtilizationPercent,
          reasons: top.reasons,
          alternativeCount: routingRes.alternativePartners.length,
        };
      }
    }
    return undefined;
  }, [activeScheme, project, beneficiary]);

  // Comprehensive, live context injected into the assistant
  const assistantContext: AssistantContext = useMemo(() => ({
    currentScreen,
    language,
    profile: {
      fullName: beneficiary.fullName,
      age: beneficiary.age,
      gender: beneficiary.gender,
      socialCategory: beneficiary.socialCategory,
      state: beneficiary.state,
      district: beneficiary.district,
      annualFamilyIncome: beneficiary.annualFamilyIncome,
      educationStatus: beneficiary.educationStatus,
      employmentStatus: beneficiary.employmentStatus,
    },
    project: {
      projectName: project.projectName,
      projectType: project.projectType,
      businessNature: project.businessNature,
      totalProjectCost: project.totalProjectCost,
      ownContribution: project.ownContribution,
      preferredLocation: project.preferredLocation,
      purposeOfFinancing: project.purposeOfFinancing,
    },
    scheme: activeScheme ? {
      id: activeScheme.id,
      name: activeScheme.name,
      shortDescription: activeScheme.shortDescription,
      maxLoanAmount: activeScheme.maxLoanAmount,
      eligible: activeSchemeEval ? activeSchemeEval.isEligible : undefined,
      suitabilityScore: activeSchemeEval ? activeSchemeEval.overallSuitabilityScore : undefined,
      suitabilityReasons: activeSchemeEval ? activeSchemeEval.positiveFactors : undefined,
      requiredDocuments: activeScheme.requiredDocuments,
    } : undefined,
    financial: assistantFinancialContext,
    partner: assistantPartnerContext,
    readiness: {
      totalRequired: Object.keys(appReadyDocStatuses).length,
      readyCount: Object.values(appReadyDocStatuses).filter(s => s === 'Ready').length,
      readinessPercent: Math.round(
        (Object.values(appReadyDocStatuses).filter(s => s === 'Ready').length / 
        Math.max(1, Object.keys(appReadyDocStatuses).length)) * 100
      ),
      missingDocuments: Object.entries(appReadyDocStatuses).filter(([_, s]) => s !== 'Ready').map(([k]) => k),
      readyDocuments: Object.entries(appReadyDocStatuses).filter(([_, s]) => s === 'Ready').map(([k]) => k),
    },
  }), [currentScreen, language, beneficiary, project, activeScheme, activeSchemeEval, assistantFinancialContext, assistantPartnerContext, appReadyDocStatuses]);

  // Quick preset loader for hackathon judges/evaluators
  const handleLoadDemoPreset = (presetId: string) => {
    const found = DEMO_PRESETS.find(p => p.id === presetId);
    if (found) {
      setBeneficiary(found.profile);
      setProject(found.project);
      setHasCompletedProfile(true);
      setHasCompletedProject(true);
      // Pre-calculate matching summary for seamless navigation
      const precalc = matchSchemes(found.profile, found.project);
      setMatchingSummary(precalc);
      setCurrentScreen('beneficiary-profile');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStartJourney = () => {
    setCurrentScreen('beneficiary-profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSeeHowItWorks = () => {
    setCurrentScreen('how-it-works');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveBeneficiary = (updatedProfile: BeneficiaryProfile) => {
    setBeneficiary(updatedProfile);
    setHasCompletedProfile(true);
    // Invalidate cached matching summary when profile changes
    setMatchingSummary(null);
    setCurrentScreen('project-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveProject = (updatedProject: ProjectDetails) => {
    setProject(updatedProject);
    setHasCompletedProject(true);
    // Invalidate cached matching summary when project changes
    setMatchingSummary(null);
    setCurrentScreen('summary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueToMatching = () => {
    setCurrentScreen('matching');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMatchingComplete = (results: MatchingSummary) => {
    setMatchingSummary(results);
    setCurrentScreen('recommendation-results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectScheme = (schemeId: string) => {
    setSelectedSchemeId(schemeId);
    setCurrentScreen('scheme-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCalculateFinancing = (scheme: Scheme) => {
    setSelectedSchemeId(scheme.id);
    setCurrentScreen('financial-simulator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetAll = () => {
    setBeneficiary(initialBeneficiaryState);
    setProject(initialProjectState);
    setMatchingSummary(null);
    setSelectedSchemeId('pmegp');
    setHasCompletedProfile(false);
    setHasCompletedProject(false);
    setAppReadyStep(1);
    setAppReadyDocStatuses({
      aadhaar_pan: 'Ready',
      residence: 'Ready',
      income: 'Needs Review',
      caste: 'Needs Review',
      dpr: 'Needs Review',
      quotations: 'Needs Review',
      bank: 'Needs Review',
      land: 'Optional'
    });
    setAppReadyUploadedFiles({});
    setSelectedChannelPartner(null);
    setAppReadyAppointmentDate('2026-09-15');
    setAppReadyAppointmentSlot('10:00 AM');
    setAppReadyReferenceId(null);
    setCurrentScreen('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateStep = (screen: ScreenType) => {
    if (screen === 'beneficiary-profile') {
      setCurrentScreen('beneficiary-profile');
    } else if (screen === 'project-details' && hasCompletedProfile) {
      setCurrentScreen('project-details');
    } else if (screen === 'summary' && hasCompletedProfile && hasCompletedProject) {
      setCurrentScreen('summary');
    } else if (screen === 'recommendation-results' && hasCompletedProfile && hasCompletedProject) {
      if (!matchingSummary) {
        setMatchingSummary(matchSchemes(beneficiary, project));
      }
      setCurrentScreen('recommendation-results');
    } else if (screen === 'scheme-details' && hasCompletedProfile && hasCompletedProject) {
      if (!matchingSummary) {
        setMatchingSummary(matchSchemes(beneficiary, project));
      }
      setCurrentScreen('scheme-details');
    } else if (screen === 'financial-simulator' && hasCompletedProfile && hasCompletedProject) {
      setCurrentScreen('financial-simulator');
    } else if (screen === 'channel-partner' && hasCompletedProfile && hasCompletedProject) {
      setCurrentScreen('channel-partner');
    } else if (screen === 'application-readiness' && hasCompletedProfile && hasCompletedProject) {
      setCurrentScreen('application-readiness');
    } else if (screen === 'application-ready' && hasCompletedProfile && hasCompletedProject) {
      setCurrentScreen('application-ready');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isWorkflowScreen = [
    'beneficiary-profile',
    'project-details',
    'summary',
    'matching',
    'stage2-matching',
    'recommendation-results',
    'scheme-details',
    'financial-simulator',
    'channel-partner',
    'application-readiness',
    'application-ready'
  ].includes(currentScreen);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Universal Header */}
      <Header 
        currentScreen={currentScreen} 
        onNavigate={(scr) => {
          setCurrentScreen(scr);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Workflow Step Progress Indicator (when inside assessment flow) */}
      {isWorkflowScreen && (
        <StepIndicator
          currentScreen={currentScreen}
          onStepClick={handleNavigateStep}
          canNavigateToProject={hasCompletedProfile}
          canNavigateToSummary={hasCompletedProfile && hasCompletedProject}
          canNavigateToRecommendations={hasCompletedProfile && hasCompletedProject}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {currentScreen === 'home' && (
          <HomeScreen
            onStartJourney={handleStartJourney}
            onSeeHowItWorks={handleSeeHowItWorks}
            onLoadDemoPreset={handleLoadDemoPreset}
            onNavigateToSchemes={() => {
              setCurrentScreen('scheme-explorer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToFinancialTools={() => {
              setCurrentScreen('financial-tools');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToPartnerNetwork={() => {
              setCurrentScreen('partner-network');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAIAssistant={() => setIsAssistantOpen(true)}
          />
        )}

        {currentScreen === 'how-it-works' && (
          <HowItWorksScreen
            onStartJourney={handleStartJourney}
            onBackToHome={() => {
              setCurrentScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'scheme-explorer' && (
          <SchemeExplorerScreen
            onSelectScheme={(scId) => {
              setSelectedSchemeId(scId);
              setCurrentScreen('scheme-details');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartAssessment={handleStartJourney}
            onBackToHome={() => {
              setCurrentScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'financial-tools' && (
          <FinancialToolsScreen
            beneficiary={beneficiary}
            project={project}
            onStartAssessment={handleStartJourney}
            onBackToHome={() => {
              setCurrentScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'partner-network' && (
          <PartnerNetworkScreen
            onStartAssessment={handleStartJourney}
            onBackToHome={() => {
              setCurrentScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            hasAssessment={hasCompletedProfile && hasCompletedProject}
            onGoToPartnerFinder={() => {
              setCurrentScreen('channel-partner');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'beneficiary-profile' && (
          <BeneficiaryProfileScreen
            initialProfile={beneficiary}
            onSaveAndNext={handleSaveBeneficiary}
            onBack={() => {
              setCurrentScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onLoadPreset={handleLoadDemoPreset}
          />
        )}

        {currentScreen === 'project-details' && (
          <ProjectDetailsScreen
            initialProject={project}
            onSaveAndNext={handleSaveProject}
            onBack={() => {
              setCurrentScreen('beneficiary-profile');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'summary' && (
          <SummaryScreen
            beneficiary={beneficiary}
            project={project}
            onEditBeneficiary={() => {
              setCurrentScreen('beneficiary-profile');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onEditProject={() => {
              setCurrentScreen('project-details');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onContinueToMatching={handleContinueToMatching}
            onBack={() => {
              setCurrentScreen('project-details');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {(currentScreen === 'matching' || currentScreen === 'stage2-matching') && (
          <MatchingScreen
            beneficiary={beneficiary}
            project={project}
            onMatchingComplete={handleMatchingComplete}
            onBackToSummary={() => {
              setCurrentScreen('summary');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'recommendation-results' && (
          <RecommendationResultsScreen
            beneficiary={beneficiary}
            project={project}
            matchingSummary={matchingSummary || matchSchemes(beneficiary, project)}
            onSelectScheme={handleSelectScheme}
            onCalculateFinancing={handleCalculateFinancing}
            onBackToSummary={() => {
              setCurrentScreen('summary');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onEditProfile={() => {
              setCurrentScreen('beneficiary-profile');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartNewAssessment={handleResetAll}
            onProceedToApplicationReady={handleProceedToApplicationReady}
          />
        )}

        {currentScreen === 'scheme-details' && (
          <SchemeDetailScreen
            schemeId={selectedSchemeId}
            beneficiary={beneficiary}
            project={project}
            onBackToRecommendations={() => {
              setCurrentScreen('recommendation-results');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onEditProfileOrProject={() => {
              setCurrentScreen('beneficiary-profile');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onCalculateFinancing={handleCalculateFinancing}
          />
        )}

        {currentScreen === 'financial-simulator' && (
          <FinancialSimulatorScreen
            initialSchemeId={selectedSchemeId}
            beneficiary={beneficiary}
            project={project}
            onBackToRecommendations={() => {
              setCurrentScreen('recommendation-results');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToSchemeDetails={(scId) => {
              setSelectedSchemeId(scId);
              setCurrentScreen('scheme-details');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onFindChannelPartner={(scId) => {
              setSelectedSchemeId(scId);
              setCurrentScreen('channel-partner');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'channel-partner' && (
          <ChannelPartnerScreen
            initialSchemeId={selectedSchemeId}
            beneficiary={beneficiary}
            project={project}
            onBackToSimulator={() => {
              setCurrentScreen('financial-simulator');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToRecommendations={() => {
              setCurrentScreen('recommendation-results');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectScheme={(scId) => {
              setSelectedSchemeId(scId);
            }}
            onProceedToReadiness={() => {
              setCurrentScreen('application-readiness');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'application-readiness' && (
          <ApplicationReadinessScreen
            schemeId={selectedSchemeId}
            beneficiary={beneficiary}
            project={project}
            onBackToPartner={() => {
              setCurrentScreen('channel-partner');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToSimulator={() => {
              setCurrentScreen('financial-simulator');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToRecommendations={() => {
              setCurrentScreen('recommendation-results');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onEditProfile={() => {
              setCurrentScreen('beneficiary-profile');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onEditProject={() => {
              setCurrentScreen('project-details');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAssistant={() => setIsAssistantOpen(true)}
            onStartNewAssessment={handleResetAll}
            onProceedToApplicationReady={() => handleProceedToApplicationReady(selectedSchemeId)}
          />
        )}

        {currentScreen === 'application-ready' && (
          <ApplicationReadyScreen
            beneficiary={beneficiary}
            project={project}
            scheme={activeScheme}
            financialResult={currentFinancialResult}
            recommendedPartner={currentPartnerRouting.recommendedPartner?.partner || PROTOTYPE_PARTNERS[0]}
            alternativePartners={currentPartnerRouting.alternativePartners.map(a => a.partner)}
            currentStep={appReadyStep}
            onStepChange={setAppReadyStep}
            documentStatuses={appReadyDocStatuses}
            onUpdateDocumentStatus={handleUpdateAppReadyDocStatus}
            uploadedFiles={appReadyUploadedFiles}
            onFileUpload={handleAppReadyFileUpload}
            onFileRemove={handleAppReadyFileRemove}
            selectedPartner={selectedChannelPartner || currentPartnerRouting.recommendedPartner?.partner || PROTOTYPE_PARTNERS[0]}
            onSelectPartner={setSelectedChannelPartner}
            appointmentDate={appReadyAppointmentDate}
            onAppointmentDateChange={setAppReadyAppointmentDate}
            appointmentSlot={appReadyAppointmentSlot}
            onAppointmentSlotChange={setAppReadyAppointmentSlot}
            appointmentPurpose={appReadyAppointmentPurpose}
            onAppointmentPurposeChange={setAppReadyAppointmentPurpose}
            referenceId={appReadyReferenceId}
            onConfirmAppointment={setAppReadyReferenceId}
            onBackToNextSteps={() => {
              setCurrentScreen('application-readiness');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAssistant={() => setIsAssistantOpen(true)}
            onStartNewAssessment={handleResetAll}
          />
        )}
      </main>

      {/* Universal Footer with Official Prototype Disclaimer */}
      <Footer />

      {/* SchemeSetu Context-Aware AI Assistant Drawer & Floating Trigger */}
      <AIAssistantFloatingButton
        onClick={() => setIsAssistantOpen(true)}
        isOpen={isAssistantOpen}
      />
      <AIAssistantDrawer
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        currentScreen={currentScreen}
        context={assistantContext}
      />
    </div>
  );
}
