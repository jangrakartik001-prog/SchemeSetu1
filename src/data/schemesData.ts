/**
 * SchemeSetu Representative Scheme Dataset
 * 
 * TRANSPARENCY & PROTOTYPE NOTICE:
 * This dataset contains curated representative schemes based on official government guidelines
 * from the Ministry of MSME, Ministry of Social Justice & Empowerment, SIDBI, and National Apex Corporations.
 * 
 * - Schemes marked "Verified official source" reflect published public criteria from official portals.
 * - Schemes marked "Prototype scheme data" represent conservative illustrative models calibrated for demo testing.
 * 
 * DISCLAIMER:
 * Exact interest rates, subsidy quotas, and margin money percentages vary dynamically based on annual state budget allocations,
 * bank credit policies, and evolving operational guidelines. Beneficiaries must verify exact terms with official portal
 * or designated channel partners prior to application. This prototype does NOT claim live government availability.
 */

import { Scheme } from '../types';

export const PROTOTYPE_DATASET_META = {
  version: '2.0.0',
  datasetLabel: 'DEMO / PROTOTYPE DATASET',
  notice: 'This dataset is designed for demonstration and algorithmic evaluation. Exact scheme availability, sub-quotas, and interest concessions must be officially re-verified at government portal before applying.',
  lastUpdated: 'September 2025'
};

export const SCHEMES_DATABASE: Scheme[] = [
  {
    id: 'pmegp',
    name: "Prime Minister's Employment Generation Programme (PMEGP)",
    shortDescription: 'Flagship credit-linked capital subsidy scheme for setting up micro-enterprises in manufacturing and service sectors.',
    fullDescription: "PMEGP is a major credit-linked subsidy programme administered by the Ministry of MSME, aimed at generating self-employment opportunities through micro-enterprise ventures in both rural and urban areas. The scheme provides a capital subsidy of 15% to 35% of the project cost, with rural special category beneficiaries (SC, ST, OBC, Women, Minorities, Ex-servicemen) receiving the highest 35% subsidy rate.",
    beneficiaryCategories: [
      'Scheduled Caste (SC)',
      'Scheduled Tribe (ST)',
      'Other Backward Class (OBC)',
      'Economically Weaker Section (EWS)',
      'Minority Community',
      'General'
    ],
    minAge: 18,
    maxAge: 65,
    incomeLimit: null, // No upper income ceiling for PMEGP
    applicableStates: ['All'],
    applicableDistricts: null,
    projectTypes: [
      'Manufacturing & Production',
      'Services / Micro-Enterprise',
      'Agro-processing & Food Products',
      'Handicrafts & Handloom',
      'Textile & Apparel',
      'Dairy, Poultry & Animal Husbandry'
    ],
    businessStages: [
      'New Enterprise (Greenfield)'
    ],
    purposes: [
      'Composite (Both Equipment & Working Capital)',
      'Plant & Machinery / Tooling Equipment',
      'Working Capital (Raw materials, stock)',
      'Business Expansion & Infrastructure'
    ],
    minProjectCost: 50000, // ₹50,000
    maxProjectCost: 5000000, // ₹50 Lakhs (Manufacturing) / ₹20 Lakhs (Services)
    maxLoanAmount: 4750000, // 95% of ₹50L
    interestRate: 'Bank Base Rate / MCLR linked (~8.75% - 10.25% p.a.)',
    defaultInterestRate: 9.5,
    tenureMonths: 84, // 3 to 7 years
    moratoriumMonths: 6,
    financingPercentage: 95, // 95% for special categories, 90% for general
    ownContributionRequirement: '5% for SC, ST, OBC, Women & Minorities; 10% for General Category',
    subsidyDetails: 'Back-ended capital subsidy: 25% (Urban) to 35% (Rural) for SC/ST/OBC/Women/Minority; 15% (Urban) to 25% (Rural) for General Category.',
    partnerTypes: [
      'Public Sector Commercial Banks',
      'Regional Rural Banks (RRBs)',
      'District Industries Centres (DIC)',
      'Khadi & Village Industries Commission (KVIC)'
    ],
    requiredDocuments: [
      'Aadhaar Card & PAN Card',
      'Social Category / Caste Certificate (for SC, ST, OBC subsidy)',
      'Detailed Project Report (DPR) with equipment cost estimates',
      'Rural Area Certificate from Gram Panchayat (for rural subsidy slab)',
      'Educational Qualification Certificate (min 8th pass for projects > ₹10L)'
    ],
    applicationGuidance: [
      'Prepare a simple Project Cost & Quotation breakdown for equipment and initial stock',
      'Submit the application online directly at the KVIC PMEGP e-portal',
      'District Task Force Committee reviews proposal and forwards to chosen bank branch within 30 days',
      'Bank sanctions loan and nodal bank releases margin money subsidy into an escrow account for 3 years'
    ],
    sourceName: 'Ministry of Micro, Small and Medium Enterprises (MoMSME) / KVIC',
    sourceUrl: 'https://www.kviconline.gov.in/pmegpeportal',
    lastVerified: 'August 2025',
    verificationStatus: 'Verified official source',
    prototypeNotes: 'Verified official guidelines. Minimum 8th class pass required if manufacturing cost exceeds ₹10 Lakh or service exceeds ₹5 Lakh.',
    primaryFocusArea: 'Micro-Enterprise & Production'
  },
  {
    id: 'stand-up-india',
    name: 'Stand-Up India Scheme for SC, ST and Women Entrepreneurs',
    shortDescription: 'Substantial greenfield term loan and working capital (₹10 Lakh to ₹1 Crore) for SC, ST, and Women entrepreneurs.',
    fullDescription: 'Stand-Up India facilitates bank loans between ₹10 Lakh and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise in manufacturing, services, agri-allied, or trading sectors. Loans are backed by the National Credit Guarantee Trustee Company (NCGTC).',
    beneficiaryCategories: [
      'Scheduled Caste (SC)',
      'Scheduled Tribe (ST)',
      'Other Backward Class (OBC)', // Eligible if applicant is female
      'Economically Weaker Section (EWS)', // Eligible if applicant is female
      'Minority Community', // Eligible if applicant is female
      'General' // Eligible if applicant is female
    ],
    targetGenders: ['Female'], // Any category female OR SC/ST male/female
    minAge: 18,
    maxAge: 70,
    incomeLimit: null, // No upper family income limit
    applicableStates: ['All'],
    applicableDistricts: null,
    projectTypes: [
      'Manufacturing & Production',
      'Services / Micro-Enterprise',
      'Logistics & Transport',
      'Agro-processing & Food Products',
      'Retail Trading & Shop',
      'Textile & Apparel'
    ],
    businessStages: [
      'New Enterprise (Greenfield)'
    ],
    purposes: [
      'Plant & Machinery / Tooling Equipment',
      'Business Expansion & Infrastructure',
      'Composite (Both Equipment & Working Capital)',
      'Technology Upgrade & Digitization'
    ],
    minProjectCost: 1000000, // ₹10 Lakhs (strictly minimum ₹10L)
    maxProjectCost: 10000000, // ₹1 Crore
    maxLoanAmount: 10000000, // ₹1 Crore composite loan
    interestRate: 'Lowest applicable rate of bank (MCLR + up to 3% + tenor premium)',
    defaultInterestRate: 10.5,
    tenureMonths: 84, // Up to 7 years
    moratoriumMonths: 18, // Up to 18 months moratorium
    financingPercentage: 85, // Borrower brings 15% margin money
    ownContributionRequirement: '15% margin money (can be reduced to 10% with eligible Central/State subsidy convergence)',
    subsidyDetails: 'Credit Guarantee Scheme coverage via NCGTC; collateral-free credit support with subsidy convergence support.',
    partnerTypes: [
      'All Scheduled Commercial Banks (Public & Private)',
      'Small Industries Development Bank of India (SIDBI)',
      'National Bank for Agriculture and Rural Development (NABARD)',
      'Lead District Managers (LDM)'
    ],
    requiredDocuments: [
      'Proof of Identity & Address (Aadhaar, Passport, Voter ID)',
      'SC/ST Certificate (if applying under SC/ST quota)',
      'Comprehensive Detailed Project Report (DPR) with cashflow projections',
      'Proforma invoices and quotations for equipment, plant or commercial vehicles',
      'Pollution Control Board NOC / statutory municipal licenses'
    ],
    applicationGuidance: [
      'Verify that the proposed enterprise is a first-time venture (Greenfield)',
      'Register on Stand-Up Mitra portal (standupmitra.in) or visit any commercial bank branch directly',
      'Work with SIDBI handholding agencies to refine margin money convergence and technical DPR',
      'Bank branch manager inspects site and sanctions composite loan'
    ],
    sourceName: 'Department of Financial Services, Ministry of Finance / SIDBI',
    sourceUrl: 'https://www.standupmitra.in',
    lastVerified: 'August 2025',
    verificationStatus: 'Verified official source',
    prototypeNotes: 'Verified official guidelines. Exclusively for Greenfield enterprises requiring between ₹10 Lakh and ₹1 Crore financing. Applicant must be either SC, ST, or Female of any category.',
    primaryFocusArea: 'Large Greenfield Enterprise'
  },
  {
    id: 'nsfdc-term-loan',
    name: 'NSFDC Concessional Term Loan Scheme for SC Entrepreneurs',
    shortDescription: 'Dedicated concessional term finance (up to 90% project cost) exclusively for Scheduled Caste entrepreneurs.',
    fullDescription: 'The National Scheduled Castes Finance and Development Corporation (NSFDC) provides concessional term loans to assist Scheduled Caste persons with family income up to ₹3.00 Lakh per annum in undertaking viable self-employment projects. Term loans cover up to 90% of the project cost for plant, machinery, tools, and infrastructure with low single-digit interest rates.',
    beneficiaryCategories: [
      'Scheduled Caste (SC)'
    ],
    minAge: 18,
    maxAge: 60,
    incomeLimit: 300000, // Annual family income <= ₹3,00,000
    applicableStates: ['All'],
    applicableDistricts: null,
    projectTypes: [
      'Manufacturing & Production',
      'Services / Micro-Enterprise',
      'Handicrafts & Handloom',
      'Agro-processing & Food Products',
      'Dairy, Poultry & Animal Husbandry',
      'Logistics & Transport',
      'Textile & Apparel'
    ],
    businessStages: [
      'New Enterprise (Greenfield)',
      'Existing Enterprise (Brownfield)'
    ],
    purposes: [
      'Plant & Machinery / Tooling Equipment',
      'Business Expansion & Infrastructure',
      'Composite (Both Equipment & Working Capital)',
      'Working Capital (Raw materials, stock)'
    ],
    minProjectCost: 100000, // ₹1 Lakh
    maxProjectCost: 5000000, // ₹50 Lakhs
    maxLoanAmount: 4500000, // 90% of ₹50L
    interestRate: 'Concessional 6.0% - 8.0% p.a. (nominal interest for SC beneficiaries)',
    defaultInterestRate: 6.0,
    tenureMonths: 120, // 5 to 10 years
    moratoriumMonths: 12,
    financingPercentage: 90, // NSFDC finances up to 90%
    ownContributionRequirement: '2% to 5% promoter equity contribution',
    subsidyDetails: 'Concessional interest rate structure; State Channelizing Agency can provide capital subsidy up to ₹10,000 or 50% of cost for BPL beneficiaries.',
    partnerTypes: [
      'State Scheduled Castes Development Corporations (SCAs)',
      'Regional Rural Banks (RRBs)',
      'Public Sector Nationalized Banks'
    ],
    requiredDocuments: [
      'Valid SC Caste Certificate issued by competent Revenue Authority (Tehsildar/SDM)',
      'Income Certificate issued by Revenue Authority verifying annual family income <= ₹3,00,000',
      'Project Profile & Machinery Quotations',
      'Proof of Business Premises / Workplace tenancy or ownership'
    ],
    applicationGuidance: [
      'Contact the District Manager of State SC Development Corporation (SCA)',
      'Submit prescribed application form along with SC certificate and income certificate',
      'District Screening Committee verifies credentials and forwards application for refinance sanction',
      'Disbursement done in installments based on machinery inspection'
    ],
    sourceName: 'National Scheduled Castes Finance and Development Corporation (NSFDC), MoSJE',
    sourceUrl: 'https://nsfdc.nic.in',
    lastVerified: 'July 2025',
    verificationStatus: 'Verified official source',
    prototypeNotes: 'Verified official source. Strictly restricted to Scheduled Caste (SC) category applicants with family income under ₹3 Lakh/year.',
    primaryFocusArea: 'Targeted SC Concessional Finance'
  },
  {
    id: 'nbcfdc-transport',
    name: 'NBCFDC Transport & Commercial Logistics Financing',
    shortDescription: 'Concessional credit for acquiring commercial vehicles, goods carriage, and logistics equipment for OBC/EWS operators.',
    fullDescription: 'Under the National Backward Classes Finance & Development Corporation (NBCFDC), this financing channel provides credit to eligible members of Backward Classes (OBC/EWS) for the purchase of commercial vehicles (light commercial vehicles, goods carriers, passenger auto/taxis, and agro-transport vans). It empowers solo drivers and operators to achieve asset ownership.',
    beneficiaryCategories: [
      'Other Backward Class (OBC)',
      'Economically Weaker Section (EWS)'
    ],
    minAge: 18,
    maxAge: 55,
    incomeLimit: 300000, // Annual family income <= ₹3,00,000
    applicableStates: ['All'],
    applicableDistricts: null,
    projectTypes: [
      'Logistics & Transport',
      'Services / Micro-Enterprise'
    ],
    businessStages: [
      'New Enterprise (Greenfield)',
      'Existing Enterprise (Brownfield)'
    ],
    purposes: [
      'Plant & Machinery / Tooling Equipment',
      'Composite (Both Equipment & Working Capital)',
      'Business Expansion & Infrastructure'
    ],
    minProjectCost: 100000, // ₹1 Lakh
    maxProjectCost: 1500000, // ₹15 Lakhs
    maxLoanAmount: 1250000, // ₹12.5 Lakhs
    interestRate: 'Concessional 6.0% p.a. (to SCA) / 8.0% p.a. to beneficiary',
    defaultInterestRate: 8.0,
    tenureMonths: 60, // 5 years
    moratoriumMonths: 6,
    financingPercentage: 85,
    ownContributionRequirement: '10% - 15% promoter margin money',
    subsidyDetails: 'Subsidized refinance rate from NBCFDC apex corporation passed to beneficiary.',
    partnerTypes: [
      'State Backward Classes Development Corporations (SCAs)',
      'Regional Rural Banks (RRBs)',
      'Apex State Cooperative Banks'
    ],
    requiredDocuments: [
      'OBC / EWS Non-Creamy Layer Certificate issued by Revenue Authority',
      'Family Income Certificate verifying annual income <= ₹3,00,000',
      'Valid Commercial Driving License (LMV / Transport category)',
      'Authorized Dealership Vehicle Proforma Invoice / Price Quotation',
      'Route Permit / Regional Transport Office (RTO) preliminary clearance'
    ],
    applicationGuidance: [
      'Obtain proforma invoice for chosen commercial vehicle from authorized dealer',
      'Submit application to the District Backward Classes Welfare Office / SCA',
      'Vehicle is purchased directly from dealer and registered with hypothecation to SCA / bank'
    ],
    sourceName: 'National Backward Classes Finance & Development Corporation (NBCFDC)',
    sourceUrl: 'https://nbcfdc.gov.in',
    lastVerified: 'June 2025',
    verificationStatus: 'Prototype scheme data',
    prototypeNotes: 'Prototype scheme data illustrative of NBCFDC transport refinance. Specific to logistics/transport vehicles with ₹3 Lakh income ceiling.',
    primaryFocusArea: 'Transport & Commercial Logistics'
  },
  {
    id: 'mahila-samriddhi',
    name: 'Mahila Samriddhi Yojana (Micro-Credit for Women)',
    shortDescription: 'Deeply concessional micro-credit (4% p.a.) up to ₹1.40 Lakh for low-income women entrepreneurs and SHGs.',
    fullDescription: 'Mahila Samriddhi Yojana is a targeted micro-finance scheme implemented through NBCFDC that provides direct micro-loans to women belonging to Backward Classes living below or near the poverty line (family income up to ₹1.50 Lakh per annum). It covers small trade, handlooms, food stalls, tailoring, and micro-livestock with an exceptionally low 4% p.a. interest rate.',
    beneficiaryCategories: [
      'Other Backward Class (OBC)',
      'Economically Weaker Section (EWS)'
    ],
    targetGenders: ['Female'], // Female only
    minAge: 18,
    maxAge: 55,
    incomeLimit: 150000, // Strict low income ceiling: ₹1,50,000/year
    applicableStates: ['All'],
    applicableDistricts: null,
    projectTypes: [
      'Handicrafts & Handloom',
      'Retail Trading & Shop',
      'Agro-processing & Food Products',
      'Dairy, Poultry & Animal Husbandry',
      'Textile & Apparel',
      'Services / Micro-Enterprise'
    ],
    businessStages: [
      'New Enterprise (Greenfield)',
      'Existing Enterprise (Brownfield)'
    ],
    purposes: [
      'Working Capital (Raw materials, stock)',
      'Plant & Machinery / Tooling Equipment',
      'Composite (Both Equipment & Working Capital)'
    ],
    minProjectCost: 20000, // ₹20,000
    maxProjectCost: 140000, // ₹1,40,000 (strict micro-scale ceiling)
    maxLoanAmount: 140000, // ₹1,40,000
    interestRate: '4.0% p.a. (highly subsidized micro-finance interest)',
    defaultInterestRate: 4.0,
    tenureMonths: 48, // Up to 4 years
    moratoriumMonths: 3,
    financingPercentage: 95,
    ownContributionRequirement: '5% promoter contribution (often waived for BPL applicants)',
    subsidyDetails: 'Deep interest rate concession (4% p.a.) backed by central apex corporation.',
    partnerTypes: [
      'State Channelizing Agencies (SCAs)',
      'Self-Help Group (SHG) Federations',
      'Public Sector Banks & RRBs'
    ],
    requiredDocuments: [
      'Aadhaar Card & Photo ID of Woman Applicant',
      'OBC / EWS Certificate issued by Revenue Authority',
      'Income Certificate proving annual family income does NOT exceed ₹1,50,000',
      'Bank Passbook copy (Jan Dhan or regular savings account)',
      'SHG Membership Certificate or self-employment declaration'
    ],
    applicationGuidance: [
      'Apply either individually or through an accredited women SHG to the local SCA office',
      'Simple micro-appraisal carried out at block/district level within 14 days',
      'Sanctioned amount credited directly to the woman entrepreneur\'s bank account'
    ],
    sourceName: 'NBCFDC Women Micro-Credit Division, MoSJE',
    sourceUrl: 'https://nbcfdc.gov.in/en/mahila-samriddhi-yojana',
    lastVerified: 'May 2025',
    verificationStatus: 'Prototype scheme data',
    prototypeNotes: 'Prototype scheme data. Has a strict ₹1.50 Lakh income ceiling and ₹1.40 Lakh maximum project limit. Used to illustrate explicit rule-based rejection for projects exceeding these thresholds.',
    primaryFocusArea: 'Women Micro-Credit'
  },
  {
    id: 'dr-ambedkar-education',
    name: 'Dr. Ambedkar Central Sector Scheme of Interest Subsidy for Higher Education',
    shortDescription: '100% interest subsidy on education loans for OBC/EWS students pursuing professional master/doctoral degrees.',
    fullDescription: 'This Central Sector Scheme provides full interest subsidy during the period of moratorium (course duration + 1 year) to meritorious students belonging to Other Backward Classes (OBC) and Economically Weaker Sections (EWS) whose total family income is up to ₹8.00 Lakh per annum, for pursuing approved higher education courses.',
    beneficiaryCategories: [
      'Other Backward Class (OBC)',
      'Economically Weaker Section (EWS)'
    ],
    minAge: 17,
    maxAge: 35,
    incomeLimit: 800000, // Annual family income <= ₹8,00,000
    applicableStates: ['All'],
    applicableDistricts: null,
    projectTypes: [], // Non-enterprise educational scheme
    businessStages: [],
    purposes: [],
    minProjectCost: 100000,
    maxProjectCost: 2000000,
    maxLoanAmount: 2000000,
    interestRate: 'Full (100%) Interest Subsidy during moratorium period',
    defaultInterestRate: 8.5,
    tenureMonths: 180, // 15 years
    moratoriumMonths: 60,
    financingPercentage: 100,
    ownContributionRequirement: '0% during course duration',
    subsidyDetails: 'Full 100% interest subsidy paid by Central Government throughout the moratorium period.',
    partnerTypes: [
      'All Scheduled Commercial Banks under IBA Education Loan Scheme',
      'Ministry of Social Justice and Empowerment (MoSJE)'
    ],
    requiredDocuments: [
      'Admission proof / enrollment letter in recognized higher education program',
      'OBC / EWS Certificate',
      'Income Certificate showing family income <= ₹8.00 Lakh/year',
      'Loan sanction letter under IBA Educational Loan Scheme'
    ],
    applicationGuidance: [
      'Obtain educational loan sanction from any scheduled commercial bank',
      'Lending bank uploads student profile to the MoSJE interest subsidy portal',
      'Interest subsidy is credited directly by Government into student loan account annually'
    ],
    sourceName: 'Ministry of Social Justice and Empowerment, Government of India',
    sourceUrl: 'https://socialjustice.gov.in',
    lastVerified: 'August 2025',
    verificationStatus: 'Verified official source',
    prototypeNotes: 'Verified official source. Dedicated strictly to academic education loans. Intentionally disqualifies commercial enterprise and business projects.',
    primaryFocusArea: 'Higher Education Interest Subsidy'
  }
];
