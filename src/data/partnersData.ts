/**
 * SchemeSetu Channel Partner Dataset
 * 
 * TRANSPARENCY & PROTOTYPE NOTICE:
 * This dataset contains curated representative lending institutions and state nodal agencies
 * configured for deterministic algorithmic routing.
 * 
 * DISCLAIMER:
 * Partner capacity, simulated utilization percentages, operational queue times, and risk metrics
 * shown here are deterministic SIMULATED DEMONSTRATION DATA. Production deployment will integrate
 * with authorized and verified institutional APIs (e.g., Lead District Bank portals, DIC MIS, and SLBC dashboards).
 * No real-time government or bank verification is claimed.
 */

import { ChannelPartner } from '../types';

export const PARTNERS_DEMO_DISCLAIMER = 
  "Partner capacity and operational indicators shown here are simulated demonstration data. Production deployment would use authorized and verified institutional data.";

export const PROTOTYPE_PARTNERS: ChannelPartner[] = [
  {
    id: 'partner-mgb-alwar',
    name: 'Marudhara Gramin Bank (RRB) - Alwar Central Branch',
    type: 'Regional Rural Bank (RRB)',
    address: 'Station Road, Near Old Bus Stand, Alwar, Rajasthan 301001',
    district: 'Alwar',
    state: 'Rajasthan',
    serviceAreas: ['Alwar', 'Bharatpur', 'Dausa'],
    supportedSchemeIds: ['pmegp', 'mahila-samriddhi', 'nbcfdc-transport'],
    supportedProjectTypes: [
      'Dairy, Poultry & Animal Husbandry',
      'Agro-processing & Food Products',
      'Retail Trading & Shop',
      'Services / Micro-Enterprise',
      'Handicrafts & Handloom'
    ],
    minimumLoanAmount: 25000,
    maximumLoanAmount: 1500000,
    capacityStatus: 'High Utilization',
    capacityUtilizationPercent: 88,
    operationalStatus: 'Active & Processing',
    simulatedRiskStatus: 'Low Risk',
    demoData: true,
    contactNumber: '+91 144 233 4102',
    email: 'alwar.central@mgb-demo.bank.in'
  },
  {
    id: 'partner-sbi-jaipur-regional',
    name: 'State Bank of India (MSME Specialized Branch) - Rajasthan Regional Hub',
    type: 'Public Sector Bank',
    address: 'Tilak Marg, C-Scheme, Jaipur, Rajasthan 302005',
    district: 'Jaipur',
    state: 'Rajasthan',
    serviceAreas: ['Alwar', 'Jaipur', 'Sikar', 'Ajmer', 'Bikaner', 'Rajasthan Statewide'],
    supportedSchemeIds: ['pmegp', 'stand-up-india', 'nsfdc-term-loan', 'nbcfdc-transport'],
    supportedProjectTypes: [
      'Manufacturing & Production',
      'Services / Micro-Enterprise',
      'Agro-processing & Food Products',
      'Dairy, Poultry & Animal Husbandry',
      'Textile & Apparel',
      'Logistics & Transport'
    ],
    minimumLoanAmount: 100000,
    maximumLoanAmount: 5000000,
    capacityStatus: 'Optimal Capacity',
    capacityUtilizationPercent: 34,
    operationalStatus: 'Active & Processing',
    simulatedRiskStatus: 'Low Risk',
    demoData: true,
    contactNumber: '+91 141 222 8900',
    email: 'msme.jaipurhub@sbi-demo.co.in'
  },
  {
    id: 'partner-brkgb-alwar',
    name: 'Baroda Rajasthan Kshetriya Gramin Bank - Alwar Lead Nodal Office',
    type: 'Regional Rural Bank (RRB)',
    address: 'Opposite Collectorate Complex, Tijara Road, Alwar, Rajasthan 301001',
    district: 'Alwar',
    state: 'Rajasthan',
    serviceAreas: ['Alwar', 'Bharatpur'],
    supportedSchemeIds: ['pmegp', 'mahila-samriddhi'],
    supportedProjectTypes: [
      'Dairy, Poultry & Animal Husbandry',
      'Handicrafts & Handloom',
      'Retail Trading & Shop',
      'Textile & Apparel',
      'Services / Micro-Enterprise'
    ],
    minimumLoanAmount: 50000,
    maximumLoanAmount: 2500000,
    capacityStatus: 'Moderate Utilization',
    capacityUtilizationPercent: 65,
    operationalStatus: 'Active & Processing',
    simulatedRiskStatus: 'Low Risk',
    demoData: true,
    contactNumber: '+91 144 270 1520',
    email: 'nodal.alwar@brkgb-demo.co.in'
  },
  {
    id: 'partner-pnb-varanasi',
    name: 'Punjab National Bank (SME Credit Desk) - Varanasi Cantt',
    type: 'Public Sector Bank',
    address: 'Mall Road, Cantonment Commercial Complex, Varanasi, Uttar Pradesh 221002',
    district: 'Varanasi',
    state: 'Uttar Pradesh',
    serviceAreas: ['Varanasi', 'Chandauli', 'Mirzapur', 'Prayagraj', 'Uttar Pradesh Statewide'],
    supportedSchemeIds: ['pmegp', 'nbcfdc-transport', 'stand-up-india'],
    supportedProjectTypes: [
      'Logistics & Transport',
      'Manufacturing & Production',
      'Services / Micro-Enterprise',
      'Textile & Apparel'
    ],
    minimumLoanAmount: 100000,
    maximumLoanAmount: 4500000,
    capacityStatus: 'Optimal Capacity',
    capacityUtilizationPercent: 42,
    operationalStatus: 'Active & Processing',
    simulatedRiskStatus: 'Low Risk',
    demoData: true,
    contactNumber: '+91 542 250 8731',
    email: 'sme.varanasi@pnb-demo.co.in'
  },
  {
    id: 'partner-mpsca-bhopal',
    name: 'MP State Scheduled Castes Finance & Development Corporation (SCA) - Bhopal',
    type: 'State Channelizing Agency (SCA)',
    address: 'Rajiv Gandhi Bhawan, 35 Shyamla Hills, Bhopal, Madhya Pradesh 462002',
    district: 'Bhopal',
    state: 'Madhya Pradesh',
    serviceAreas: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Madhya Pradesh Statewide'],
    supportedSchemeIds: ['nsfdc-term-loan', 'pmegp'],
    supportedProjectTypes: [
      'Manufacturing & Production',
      'Services / Micro-Enterprise',
      'Handicrafts & Handloom',
      'Textile & Apparel'
    ],
    minimumLoanAmount: 50000,
    maximumLoanAmount: 5000000,
    capacityStatus: 'Moderate Utilization',
    capacityUtilizationPercent: 58,
    operationalStatus: 'Active & Processing',
    simulatedRiskStatus: 'Low Risk',
    demoData: true,
    contactNumber: '+91 755 266 1489',
    email: 'scabhopal@mp-demo.gov.in'
  },
  {
    id: 'partner-sidbi-regional',
    name: 'SIDBI Stand-Up India Handholding Center - Regional Enterprise Desk',
    type: 'State Financial Corporation (SFC)',
    address: 'SIDBI Tower, 15 Ashok Marg, Hazratganj, Lucknow, Uttar Pradesh 226001',
    district: 'Lucknow',
    state: 'Uttar Pradesh',
    serviceAreas: ['Uttar Pradesh Statewide', 'Madhya Pradesh Statewide', 'Rajasthan Statewide', 'Delhi (NCT)'],
    supportedSchemeIds: ['stand-up-india'],
    supportedProjectTypes: [
      'Manufacturing & Production',
      'Services / Micro-Enterprise',
      'Logistics & Transport',
      'Agro-processing & Food Products'
    ],
    minimumLoanAmount: 1000000, // Strictly ₹10 Lakhs minimum
    maximumLoanAmount: 10000000, // ₹1 Crore
    capacityStatus: 'Optimal Capacity',
    capacityUtilizationPercent: 30,
    operationalStatus: 'Active & Processing',
    simulatedRiskStatus: 'Low Risk',
    demoData: true,
    contactNumber: '+91 522 228 8546',
    email: 'standupmitra.regional@sidbi-demo.in'
  },
  {
    id: 'partner-kvic-nodal-delhi',
    name: 'District Khadi & Village Industries (KVIC) Urban Micro-Cell',
    type: 'District Industries Centre (DIC) Partner',
    address: 'Institutional Area, Rouse Avenue, New Delhi 110002',
    district: 'Central Delhi',
    state: 'Delhi (NCT)',
    serviceAreas: ['Delhi (NCT)', 'Central Delhi'],
    supportedSchemeIds: ['pmegp'],
    supportedProjectTypes: [
      'Handicrafts & Handloom',
      'Retail Trading & Shop'
    ],
    minimumLoanAmount: 25000,
    maximumLoanAmount: 500000, // Strict maximum ₹5 Lakhs
    capacityStatus: 'Near Capacity',
    capacityUtilizationPercent: 94,
    operationalStatus: 'Processing Suspended',
    simulatedRiskStatus: 'Review Required',
    demoData: true,
    contactNumber: '+91 11 2323 1092',
    email: 'delhi.kvic-cell@kvic-demo.gov.in'
  }
];
