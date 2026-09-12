export type ScreenType = 
  | 'home' 
  | 'how-it-works' 
  | 'scheme-explorer'
  | 'financial-tools'
  | 'partner-network'
  | 'beneficiary-profile' 
  | 'project-details' 
  | 'summary' 
  | 'matching'
  | 'recommendation-results'
  | 'scheme-details'
  | 'financial-simulator'
  | 'channel-partner'
  | 'application-readiness'
  | 'application-ready'
  | 'stage2-matching';

export type DocumentStatusType = 'Ready' | 'Missing' | 'Needs Review' | 'Optional';

export interface UploadedDemoFile {
  name: string;
  size: number;
  type: string;
  lastModified?: number;
}

export type GenderType = 'Male' | 'Female' | 'Transgender' | 'Prefer not to say' | '';

export type SocialCategoryType = 
  | 'Scheduled Caste (SC)'
  | 'Scheduled Tribe (ST)'
  | 'Other Backward Class (OBC)'
  | 'Economically Weaker Section (EWS)'
  | 'Minority Community'
  | 'General'
  | '';

export type EducationStatusType = 
  | 'No formal schooling'
  | 'Primary (Up to 5th)'
  | 'Middle School (8th Pass)'
  | 'Secondary (10th Pass)'
  | 'Higher Secondary (12th Pass)'
  | 'Vocational / ITI Diploma'
  | 'Graduate'
  | 'Post-Graduate & Above'
  | '';

export type EmploymentStatusType = 
  | 'Unemployed / Seeking Self-employment'
  | 'Daily Wage Worker / Casual Laborer'
  | 'Micro-Artisan / Traditional Craftsman'
  | 'Self-Employed Solo Operator'
  | 'Small Enterprise / Shop Owner'
  | 'Farmer / Agri-Allied Activity'
  | '';

export type BusinessNatureType = 'New Enterprise (Greenfield)' | 'Existing Enterprise (Brownfield)' | '';

export type ProjectType = 
  | 'Manufacturing & Production'
  | 'Services / Micro-Enterprise'
  | 'Retail Trading & Shop'
  | 'Handicrafts & Handloom'
  | 'Agro-processing & Food Products'
  | 'Dairy, Poultry & Animal Husbandry'
  | 'Logistics & Transport'
  | 'Textile & Apparel'
  | '';

export type PreferredLocationType = 'Rural' | 'Semi-Urban' | 'Urban' | 'Designated Industrial / Artisan Cluster' | '';

export type PurposeOfFinancingType = 
  | 'Working Capital (Raw materials, stock)'
  | 'Plant & Machinery / Tooling Equipment'
  | 'Business Expansion & Infrastructure'
  | 'Technology Upgrade & Digitization'
  | 'Composite (Both Equipment & Working Capital)'
  | '';

export type ExperienceLevelType = 
  | 'Beginner / First-time Entrepreneur'
  | '1 to 2 Years'
  | '3 to 5 Years'
  | 'More than 5 Years'
  | '';

export interface BeneficiaryProfile {
  fullName: string;
  age: string; // validated as number
  gender: GenderType;
  state: string;
  district: string;
  socialCategory: SocialCategoryType;
  annualFamilyIncome: string; // number in INR
  educationStatus: EducationStatusType;
  employmentStatus: EmploymentStatusType;
  preferredLanguage: string;
}

export interface ProjectDetails {
  projectName: string;
  projectType: ProjectType;
  businessNature: BusinessNatureType;
  description: string;
  totalProjectCost: string; // number in INR
  ownContribution: string; // number in INR
  preferredLocation: PreferredLocationType;
  purposeOfFinancing: PurposeOfFinancingType;
  relevantExperience: ExperienceLevelType;
  existingIncome: string; // optional existing income in INR
}

export interface BeneficiaryValidationErrors {
  fullName?: string;
  age?: string;
  gender?: string;
  state?: string;
  district?: string;
  socialCategory?: string;
  annualFamilyIncome?: string;
  educationStatus?: string;
  employmentStatus?: string;
  preferredLanguage?: string;
}

export interface ProjectValidationErrors {
  projectName?: string;
  projectType?: string;
  businessNature?: string;
  description?: string;
  totalProjectCost?: string;
  ownContribution?: string;
  preferredLocation?: string;
  purposeOfFinancing?: string;
  relevantExperience?: string;
  existingIncome?: string;
}

// ==========================================
// STAGE 2: SCHEME DATA MODEL & MATCHING TYPES
// ==========================================

export type VerificationStatusType = 'Verified official source' | 'Prototype scheme data';

export interface Scheme {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  beneficiaryCategories: SocialCategoryType[];
  targetGenders?: GenderType[]; // Optional specific gender focus (e.g. women)
  minAge: number;
  maxAge: number;
  incomeLimit: number | null; // null represents no income ceiling
  applicableStates: string[]; // ["All"] or specific states
  applicableDistricts: string[] | null; // null for statewide/national
  projectTypes: ProjectType[];
  businessStages: BusinessNatureType[];
  purposes: PurposeOfFinancingType[];
  minProjectCost: number; // in INR
  maxProjectCost: number; // in INR
  maxLoanAmount: number; // in INR
  interestRate: string; // descriptive text with rate
  defaultInterestRate?: number; // numeric annual percentage for simulations (e.g., 9.5 for 9.5%)
  tenureMonths: number;
  moratoriumMonths: number;
  financingPercentage: number; // max % funded by loan/subsidy
  ownContributionRequirement: string; // promoter equity guideline
  subsidyDetails?: string; // capital/interest subsidy description
  partnerTypes: string[]; // lending institutions / nodal agencies
  requiredDocuments: string[];
  applicationGuidance: string[];
  sourceName: string;
  sourceUrl: string;
  lastVerified: string;
  verificationStatus: VerificationStatusType;
  prototypeNotes: string;
  primaryFocusArea: string; // e.g., 'Micro Enterprise', 'Women & SC/ST', 'Transport & Equipment'
}

export interface RuleCheck {
  rule: string;
  ruleCode?: string;
  result: 'PASS' | 'FAIL' | 'WARNING';
  explanation: string;
  details?: string;
  params?: Record<string, string | number>;
}

export interface EligibilityResult {
  eligible: boolean;
  reasons: string[];
  disqualifyingReasons: string[];
  missingInformation: string[];
  ruleChecks: RuleCheck[];
}

export interface SuitabilityScoreBreakdown {
  purposeMatch: number;      // max 20
  projectTypeMatch: number;  // max 20
  financingFit: number;      // max 20
  projectCostFit: number;    // max 15
  beneficiaryFit: number;    // max 15
  businessStageFit: number;  // max 5
  locationFit: number;       // max 5
}

export interface SchemeSuitability {
  overallScore: number; // 0 - 100
  scoreBreakdown: SuitabilityScoreBreakdown;
  strengths: string[];
  considerations: string[];
}

export interface SchemeEvaluation {
  scheme: Scheme;
  eligibility: EligibilityResult;
  suitability?: SchemeSuitability;
  isBestMatch?: boolean;
}

export interface MatchingSummary {
  evaluations: SchemeEvaluation[];
  eligibleSchemes: SchemeEvaluation[];
  ineligibleSchemes: SchemeEvaluation[];
  bestMatch: SchemeEvaluation | null;
  missingInformation: string[];
  totalEvaluated: number;
  evaluatedAt: string;
}

// ==========================================
// STAGE 3: FINANCIAL SIMULATOR TYPES
// ==========================================

export interface SimulationInputs {
  totalProjectCost: number;
  ownContribution: number;
  requiredFinancing: number;
  interestRate: number; // annual percentage, e.g., 9.5
  tenureMonths: number;
  moratoriumMonths: number;
  schemeId: string;
  schemeName: string;
  maxLoanAmount: number;
}

export interface EMICalculationResult {
  principal: number;
  annualInterestRate: number;
  tenureMonths: number;
  monthlyEMI: number;
  totalInterest: number;
  totalRepayment: number;
  financingPercentage: number;
  ownContributionPercentage: number;
  moratoriumMonths: number;
  isValid: boolean;
  errorMessage?: string;
}

export interface FinancialCalculationResult {
  totalProjectCost: number;
  promoterContribution: number;
  requiredFinancing: number;
  estimatedMonthlyEMI: number;
  interestRateAnnual: number;
  loanTenureYears: number;
  loanTenureMonths: number;
  totalRepaymentAmount: number;
  totalInterestPayable: number;
  effectiveInterestRate?: number;
}

export type AffordabilityLevel = 'LOW' | 'MODERATE' | 'HIGHER' | 'UNKNOWN';

export interface AffordabilityResult {
  level: AffordabilityLevel;
  repaymentBurdenPercent: number | null;
  monthlyIncome: number | null;
  monthlyEMI: number;
  statusLabel: string;
  message: string;
}

export interface FinancingGapResult {
  hasGap: boolean;
  requiredFinancing: number;
  maxLoanAmount: number;
  gapAmount: number;
  warningMessage?: string;
}

export interface TenureScenario {
  id: string;
  label: string;
  tenureMonths: number;
  tenureYears: number;
  monthlyEMI: number;
  totalInterest: number;
  totalRepayment: number;
  interestDifferenceVsRecommended: number; // positive = extra interest, negative = interest saved
  isCurrentOrRecommended?: boolean;
}

export interface SimulationValidationErrors {
  totalProjectCost?: string;
  ownContribution?: string;
  interestRate?: string;
  tenureMonths?: string;
  moratoriumMonths?: string;
}

// ==========================================
// STAGE 4: SMART CHANNEL PARTNER ROUTER TYPES
// ==========================================

export type PartnerType = 
  | 'Public Sector Bank'
  | 'Regional Rural Bank (RRB)'
  | 'State Financial Corporation (SFC)'
  | 'State Channelizing Agency (SCA)'
  | 'Small Finance Bank (SFB)'
  | 'Microfinance Institution (MFI)'
  | 'District Industries Centre (DIC) Partner';

export type CapacityStatus = 
  | 'Optimal Capacity'
  | 'Moderate Utilization'
  | 'High Utilization'
  | 'Near Capacity';

export type OperationalStatus = 
  | 'Active & Processing'
  | 'Operational - Minor Delays'
  | 'Processing Suspended';

export type SimulatedRiskStatus = 
  | 'Low Risk'
  | 'Moderate Risk'
  | 'Review Required';

export interface ChannelPartner {
  id: string;
  name: string;
  type: PartnerType;
  address: string;
  district: string;
  state: string;
  serviceAreas: string[];
  supportedSchemeIds: string[];
  supportedProjectTypes: ProjectType[];
  minimumLoanAmount: number;
  maximumLoanAmount: number;
  capacityStatus: CapacityStatus;
  capacityUtilizationPercent: number;
  operationalStatus: OperationalStatus;
  simulatedRiskStatus: SimulatedRiskStatus;
  demoData: true;
  contactNumber?: string;
  email?: string;
}

export interface PartnerScoreBreakdown {
  schemeCompatibility: number;     // max 30
  projectCompatibility: number;    // max 20
  geographicFit: number;           // max 20
  capacityStatus: number;          // max 15
  financingCompatibility: number;  // max 10
  operationalStatus: number;       // max 5
}

export interface PartnerEvaluation {
  partner: ChannelPartner;
  score: number; // 0 - 100
  eligible: boolean;
  reasons: string[];
  warnings: string[];
  scoreBreakdown: PartnerScoreBreakdown;
  recommendationExplanation?: string;
  distanceTier: 'Same District' | 'Regional / Service Area' | 'Statewide Unit' | 'Out of Area';
}

export interface ExcludedPartner {
  partner: ChannelPartner;
  reasons: string[];
}

export interface PartnerRoutingParams {
  selectedSchemeId: string;
  projectType: ProjectType;
  requiredFinancing: number;
  beneficiaryState: string;
  beneficiaryDistrict: string;
}

export interface PartnerRoutingResult {
  recommendedPartner: PartnerEvaluation | null;
  alternativePartners: PartnerEvaluation[];
  allCompatible: PartnerEvaluation[];
  excludedPartners: ExcludedPartner[];
  totalEvaluated: number;
  querySummary: {
    schemeId: string;
    schemeName: string;
    projectType: ProjectType;
    requiredFinancing: number;
    beneficiaryState: string;
    beneficiaryDistrict: string;
  };
}



