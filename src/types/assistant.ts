export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  error?: boolean;
}

export interface AssistantContext {
  language: string;
  languageName?: string;
  profile?: {
    socialCategory?: string;
    gender?: string;
    age?: string;
    state?: string;
    district?: string;
    annualFamilyIncome?: string;
    educationStatus?: string;
    employmentStatus?: string;
  };
  project?: {
    projectName?: string;
    projectType?: string;
    businessNature?: string;
    totalProjectCost?: string;
    ownContribution?: string;
    requiredFinancing?: number;
    preferredLocation?: string;
    purposeOfFinancing?: string;
  };
  scheme?: {
    id?: string;
    name?: string;
    shortDescription?: string;
    interestRate?: string;
    defaultInterestRate?: number;
    tenureMonths?: number;
    moratoriumMonths?: number;
    maxLoanAmount?: number;
    subsidyDetails?: string;
    ownContributionRequirement?: string;
    eligible?: boolean;
    suitabilityScore?: number;
    suitabilityReasons?: string[];
    disqualifyingReasons?: string[];
    requiredDocuments?: string[];
    applicationGuidance?: string[];
  };
  financial?: {
    totalProjectCost?: number;
    ownContribution?: number;
    requiredFinancing?: number;
    interestRate?: number;
    tenureMonths?: number;
    moratoriumMonths?: number;
    monthlyEMI?: number;
    totalInterest?: number;
    totalRepayment?: number;
    affordabilityLevel?: string;
    affordabilityMessage?: string;
    hasFinancingGap?: boolean;
    financingGapAmount?: number;
  };
  partner?: {
    recommendedPartnerName?: string;
    partnerType?: string;
    address?: string;
    district?: string;
    state?: string;
    routingScore?: number;
    distanceTier?: string;
    simulatedCapacity?: string;
    simulatedUtilization?: number;
    reasons?: string[];
    alternativeCount?: number;
  };
  readiness?: {
    totalRequired?: number;
    readyCount?: number;
    readinessPercent?: number;
    missingDocuments?: string[];
    readyDocuments?: string[];
  };
  currentScreen?: string;
}

export interface ChatRequest {
  message: string;
  language: string;
  context?: AssistantContext;
  history?: Array<{ role: 'user' | 'assistant'; content: string }>;
}

export interface ChatResponse {
  success: boolean;
  reply?: string;
  error?: string;
}
