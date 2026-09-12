import { Language } from './types';

export interface DocumentItem {
  id: string;
  category: 'identity' | 'category' | 'project' | 'financial' | 'scheme' | 'education';
  titleKey: string;
  descKey?: string;
  required?: boolean;
}

export interface LocalizedDoc {
  name: string;
  description: string;
  fullName: string;
}

export const DOCUMENT_CATEGORIES: Record<Language, Record<string, string>> = {
  en: {
    identity: 'Identity & Address',
    category: 'Affirmative Action / Category',
    project: 'Project Dossier',
    financial: 'Banking & Financials',
    scheme: 'Scheme Specific',
    education: 'Educational Certificates'
  },
  hi: {
    identity: 'पहचान व पता',
    category: 'संवैधानिक / वर्ग प्रमाण',
    project: 'परियोजना दस्तावेज',
    financial: 'बैंकिंग एवं वित्तीय',
    scheme: 'योजना विशेष',
    education: 'शैक्षिक प्रमाणपत्र'
  },
  pa: {
    identity: 'ਪਛਾਣ ਅਤੇ ਪਤਾ',
    category: 'ਸ਼੍ਰੇਣੀ / ਰਾਖਵਾਂਕਰਨ ਪ੍ਰਮਾਣ',
    project: 'ਪ੍ਰੋਜੈਕਟ ਡੋਜ਼ੀਅਰ',
    financial: 'ਬੈਂਕਿੰਗ ਅਤੇ ਵਿੱਤੀ ਦਸਤਾਵੇਜ਼',
    scheme: 'ਸਕੀਮ ਵਿਸ਼ੇਸ਼',
    education: 'ਵਿੱਦਿਅਕ ਸਰਟੀਫਿਕੇਟ'
  },
  bn: {
    identity: 'পরিচয় এবং ঠিকানা',
    category: 'শ্রেণী / সংরক্ষণ সনদ',
    project: 'প্রকল্প ডসিয়ার',
    financial: 'ব্যাংকিং ও আর্থিক নথি',
    scheme: 'স্কিম নির্দিষ্ট',
    education: 'শিক্ষাগত শংসাপত্র'
  },
  mr: {
    identity: 'ओळख आणि पत्ता पुरावा',
    category: 'प्रवर्ग / आरक्षण प्रमाणपत्र',
    project: 'प्रकल्प अहवाल (DPR)',
    financial: 'बँकिंग आणि वित्तीय कागदपत्रे',
    scheme: 'योजना विशिष्ट',
    education: 'शैक्षणिक प्रमाणपत्रे'
  },
  gu: {
    identity: 'ઓળખ અને સરનામું',
    category: 'વર્ગ / અનામત પ્રમાણપત્ર',
    project: 'પ્રોજેક્ટ ડોઝિયર (DPR)',
    financial: 'બેંકિંગ અને નાણાકીય દસ્તાવેજો',
    scheme: 'યોજના વિશિષ્ટ',
    education: 'શૈક્ષણિક પ્રમાણપત્રો'
  },
  ta: {
    identity: 'அடையாளம் மற்றும் முகவரி சான்று',
    category: 'சாதி / சமூகப் பிரிவு சான்றிதழ்',
    project: 'திட்ட அறிக்கை (DPR)',
    financial: 'வங்கி மற்றும் நிதி ஆவணங்கள்',
    scheme: 'திட்டம் சார்ந்தது',
    education: 'கல்விச் சான்றிதழ்கள்'
  },
  te: {
    identity: 'గుర్తింపు మరియు చిరునామా',
    category: 'వర్గ / రిజర్వేషన్ ధృవీకరణ పత్రం',
    project: 'ప్రాజెక్ట్ నివేదిక (DPR)',
    financial: 'బ్యాంకింగ్ మరియు ఆర్థిక పత్రాలు',
    scheme: 'పథకం నిర్దిష్ట పత్రాలు',
    education: 'విద్యార్హత ధృవీకరణ పత్రాలు'
  },
  kn: {
    identity: 'ಗುರುತು ಮತ್ತು ವಿಳಾಸದ ಪುರಾವೆ',
    category: 'ಜಾತಿ / ಮೀಸಲಾತಿ ಪ್ರಮಾಣಪತ್ರ',
    project: 'ಯೋಜನಾ ವರದಿ (DPR)',
    financial: 'ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಆರ್ಥಿಕ ದಾಖಲೆಗಳು',
    scheme: 'ಯೋಜನೆಗೆ ನಿರ್ದಿಷ್ಟ ದಾಖಲೆಗಳು',
    education: 'ಶೈಕ್ಷಣಿಕ ಪ್ರಮಾಣಪತ್ರಗಳು'
  },
  ml: {
    identity: 'തിരിച്ചറിയൽ രേഖയും വിലാസവും',
    category: 'ജാതി / സംവരണ സർട്ടിഫിക്കറ്റ്',
    project: 'പ്രോജക്ട് റിപ്പോർട്ട് (DPR)',
    financial: 'ബാങ്കിംഗ് സാമ്പത്തിക രേഖകൾ',
    scheme: 'പദ്ധതി പ്രത്യേക രേഖകൾ',
    education: 'വിദ്യാഭ്യാസ സർട്ടിഫിക്കറ്റുകൾ'
  }
};

export const BASE_DOCUMENTS: DocumentItem[] = [
  { id: 'aadhaar', category: 'identity', titleKey: 'documents.aadhaar', descKey: 'documents.aadhaarDesc', required: true },
  { id: 'pan', category: 'identity', titleKey: 'documents.pan', descKey: 'documents.panDesc', required: true },
  { id: 'residence', category: 'identity', titleKey: 'documents.residence', descKey: 'documents.residenceDesc', required: true },
  { id: 'photos', category: 'identity', titleKey: 'documents.photos', descKey: 'documents.photosDesc', required: true },
  { id: 'caste', category: 'category', titleKey: 'documents.caste', descKey: 'documents.casteDesc', required: true },
  { id: 'income', category: 'category', titleKey: 'documents.income', descKey: 'documents.incomeDesc', required: true },
  { id: 'dpr', category: 'project', titleKey: 'documents.dpr', descKey: 'documents.dprDesc', required: true },
  { id: 'quotations', category: 'project', titleKey: 'documents.quotations', descKey: 'documents.quotationsDesc', required: true },
  { id: 'land', category: 'project', titleKey: 'documents.land', descKey: 'documents.landDesc', required: true },
  { id: 'bank', category: 'financial', titleKey: 'documents.bank', descKey: 'documents.bankDesc', required: true }
];

export const SCHEME_DOCUMENT_METADATA: Record<string, DocumentItem[]> = {
  'pmegp': [
    { id: 'pmegp_doc_0', category: 'identity', titleKey: 'documents.pmegp_doc_0', descKey: 'documents.pmegp_doc_0_desc', required: true },
    { id: 'pmegp_doc_1', category: 'category', titleKey: 'documents.pmegp_doc_1', descKey: 'documents.pmegp_doc_1_desc', required: true },
    { id: 'pmegp_doc_2', category: 'project', titleKey: 'documents.pmegp_doc_2', descKey: 'documents.pmegp_doc_2_desc', required: true },
    { id: 'pmegp_doc_3', category: 'scheme', titleKey: 'documents.pmegp_doc_3', descKey: 'documents.pmegp_doc_3_desc', required: true },
    { id: 'pmegp_doc_4', category: 'education', titleKey: 'documents.pmegp_doc_4', descKey: 'documents.pmegp_doc_4_desc', required: true }
  ],
  'stand-up-india': [
    { id: 'standup_doc_0', category: 'identity', titleKey: 'documents.standup_doc_0', descKey: 'documents.standup_doc_0_desc', required: true },
    { id: 'standup_doc_1', category: 'category', titleKey: 'documents.standup_doc_1', descKey: 'documents.standup_doc_1_desc', required: true },
    { id: 'standup_doc_2', category: 'project', titleKey: 'documents.standup_doc_2', descKey: 'documents.standup_doc_2_desc', required: true },
    { id: 'standup_doc_3', category: 'project', titleKey: 'documents.standup_doc_3', descKey: 'documents.standup_doc_3_desc', required: true },
    { id: 'standup_doc_4', category: 'scheme', titleKey: 'documents.standup_doc_4', descKey: 'documents.standup_doc_4_desc', required: true }
  ],
  'nsfdc-term-loan': [
    { id: 'nsfdc_doc_0', category: 'category', titleKey: 'documents.nsfdc_doc_0', descKey: 'documents.nsfdc_doc_0_desc', required: true },
    { id: 'nsfdc_doc_1', category: 'category', titleKey: 'documents.nsfdc_doc_1', descKey: 'documents.nsfdc_doc_1_desc', required: true },
    { id: 'nsfdc_doc_2', category: 'project', titleKey: 'documents.nsfdc_doc_2', descKey: 'documents.nsfdc_doc_2_desc', required: true },
    { id: 'nsfdc_doc_3', category: 'project', titleKey: 'documents.nsfdc_doc_3', descKey: 'documents.nsfdc_doc_3_desc', required: true }
  ],
  'nbcfdc-transport': [
    { id: 'nbcfdc_doc_0', category: 'category', titleKey: 'documents.nbcfdc_doc_0', descKey: 'documents.nbcfdc_doc_0_desc', required: true },
    { id: 'nbcfdc_doc_1', category: 'category', titleKey: 'documents.nbcfdc_doc_1', descKey: 'documents.nbcfdc_doc_1_desc', required: true },
    { id: 'nbcfdc_doc_2', category: 'scheme', titleKey: 'documents.nbcfdc_doc_2', descKey: 'documents.nbcfdc_doc_2_desc', required: true },
    { id: 'nbcfdc_doc_3', category: 'project', titleKey: 'documents.nbcfdc_doc_3', descKey: 'documents.nbcfdc_doc_3_desc', required: true },
    { id: 'nbcfdc_doc_4', category: 'scheme', titleKey: 'documents.nbcfdc_doc_4', descKey: 'documents.nbcfdc_doc_4_desc', required: true }
  ],
  'mahila-samriddhi': [
    { id: 'mahila_doc_0', category: 'identity', titleKey: 'documents.mahila_doc_0', descKey: 'documents.mahila_doc_0_desc', required: true },
    { id: 'mahila_doc_1', category: 'category', titleKey: 'documents.mahila_doc_1', descKey: 'documents.mahila_doc_1_desc', required: true },
    { id: 'mahila_doc_2', category: 'category', titleKey: 'documents.mahila_doc_2', descKey: 'documents.mahila_doc_2_desc', required: true },
    { id: 'mahila_doc_3', category: 'financial', titleKey: 'documents.mahila_doc_3', descKey: 'documents.mahila_doc_3_desc', required: true },
    { id: 'mahila_doc_4', category: 'scheme', titleKey: 'documents.mahila_doc_4', descKey: 'documents.mahila_doc_4_desc', required: true }
  ],
  'dr-ambedkar-education': [
    { id: 'ambedkar_doc_0', category: 'education', titleKey: 'documents.ambedkar_doc_0', descKey: 'documents.ambedkar_doc_0_desc', required: true },
    { id: 'ambedkar_doc_1', category: 'category', titleKey: 'documents.ambedkar_doc_1', descKey: 'documents.ambedkar_doc_1_desc', required: true },
    { id: 'ambedkar_doc_2', category: 'category', titleKey: 'documents.ambedkar_doc_2', descKey: 'documents.ambedkar_doc_2_desc', required: true },
    { id: 'ambedkar_doc_3', category: 'financial', titleKey: 'documents.ambedkar_doc_3', descKey: 'documents.ambedkar_doc_3_desc', required: true }
  ]
};

export const DOCUMENT_DICTIONARIES: Record<Language, Record<string, { name: string; description: string; fullName: string }>> = {
  en: {
    aadhaar: {
      name: 'Aadhaar Card',
      description: 'Identity & Age Proof with mobile link',
      fullName: 'Aadhaar Card (Identity & Age Proof with mobile link)'
    },
    pan: {
      name: 'PAN Card',
      description: 'Income Tax & Banking KYC',
      fullName: 'PAN Card (Income Tax & Banking KYC)'
    },
    residence: {
      name: 'Proof of Residence',
      description: 'Voter ID / Domicile Certificate / Electricity Bill',
      fullName: 'Proof of Residence (Voter ID / Domicile Certificate / Electricity Bill)'
    },
    photos: {
      name: 'Passport Size Photographs',
      description: '3 copies of promoter',
      fullName: 'Passport Size Photographs (3 copies of promoter)'
    },
    caste: {
      name: 'Category Certificate',
      description: '{category} issued by competent authority',
      fullName: 'Category Certificate ({category}) issued by competent authority'
    },
    income: {
      name: 'Income Certificate',
      description: 'Self-Declaration of Annual Family Income',
      fullName: 'Income Certificate / Self-Declaration of Annual Family Income'
    },
    dpr: {
      name: 'Detailed Project Report (DPR)',
      description: 'Covering machinery, raw materials & cashflow',
      fullName: 'Detailed Project Report (DPR) covering machinery, raw materials & cashflow'
    },
    quotations: {
      name: 'Machinery / Equipment Quotations',
      description: 'Invoices from verified suppliers',
      fullName: 'Machinery / Equipment Quotations & Invoices from verified suppliers'
    },
    land: {
      name: 'Premises Proof',
      description: 'Rent/Lease Agreement or Land Ownership Record',
      fullName: 'Premises Proof (Rent/Lease Agreement or Land Ownership Record)'
    },
    bank: {
      name: 'Bank Statement',
      description: 'Last 6 months showing promoter equity',
      fullName: 'Bank Statement of applicant (Last 6 months showing promoter equity)'
    },
    pmegp_doc_0: {
      name: 'Aadhaar Card & PAN Card',
      description: 'Identity and tax verification for applicant',
      fullName: 'Aadhaar Card & PAN Card'
    },
    pmegp_doc_1: {
      name: 'Social Category / Caste Certificate',
      description: 'For SC, ST, OBC subsidy',
      fullName: 'Social Category / Caste Certificate (for SC, ST, OBC subsidy)'
    },
    pmegp_doc_2: {
      name: 'Detailed Project Report (DPR)',
      description: 'With equipment cost estimates',
      fullName: 'Detailed Project Report (DPR) with equipment cost estimates'
    },
    pmegp_doc_3: {
      name: 'Rural Area Certificate',
      description: 'From Gram Panchayat for rural subsidy slab',
      fullName: 'Rural Area Certificate from Gram Panchayat (for rural subsidy slab)'
    },
    pmegp_doc_4: {
      name: 'Educational Qualification Certificate',
      description: 'Min 8th pass for projects > ₹10L',
      fullName: 'Educational Qualification Certificate (min 8th pass for projects > ₹10L)'
    },
    standup_doc_0: {
      name: 'Proof of Identity & Address',
      description: 'Aadhaar, Passport, Voter ID',
      fullName: 'Proof of Identity & Address (Aadhaar, Passport, Voter ID)'
    },
    standup_doc_1: {
      name: 'SC/ST Certificate',
      description: 'If applying under SC/ST quota',
      fullName: 'SC/ST Certificate (if applying under SC/ST quota)'
    },
    standup_doc_2: {
      name: 'Comprehensive Detailed Project Report (DPR)',
      description: 'With cashflow projections',
      fullName: 'Comprehensive Detailed Project Report (DPR) with cashflow projections'
    },
    standup_doc_3: {
      name: 'Equipment Quotations & Invoices',
      description: 'Proforma invoices for plant machinery or commercial vehicles',
      fullName: 'Proforma invoices and quotations for equipment, plant or commercial vehicles'
    },
    standup_doc_4: {
      name: 'Statutory Clearances & NOC',
      description: 'Pollution Control Board NOC / statutory municipal licenses',
      fullName: 'Pollution Control Board NOC / statutory municipal licenses'
    },
    nsfdc_doc_0: {
      name: 'Valid SC Caste Certificate',
      description: 'Issued by competent Revenue Authority (Tehsildar/SDM)',
      fullName: 'Valid SC Caste Certificate issued by competent Revenue Authority (Tehsildar/SDM)'
    },
    nsfdc_doc_1: {
      name: 'Income Certificate',
      description: 'Verifying annual family income <= ₹3,00,000',
      fullName: 'Income Certificate issued by Revenue Authority verifying annual family income <= ₹3,00,000'
    },
    nsfdc_doc_2: {
      name: 'Project Profile & Machinery Quotations',
      description: 'Supplier quotes and technical profile',
      fullName: 'Project Profile & Machinery Quotations'
    },
    nsfdc_doc_3: {
      name: 'Proof of Business Premises',
      description: 'Workplace tenancy or ownership',
      fullName: 'Proof of Business Premises / Workplace tenancy or ownership'
    },
    nbcfdc_doc_0: {
      name: 'OBC / EWS Certificate',
      description: 'Non-Creamy Layer Certificate issued by Revenue Authority',
      fullName: 'OBC / EWS Non-Creamy Layer Certificate issued by Revenue Authority'
    },
    nbcfdc_doc_1: {
      name: 'Family Income Certificate',
      description: 'Verifying annual income <= ₹3,00,000',
      fullName: 'Family Income Certificate verifying annual income <= ₹3,00,000'
    },
    nbcfdc_doc_2: {
      name: 'Commercial Driving License',
      description: 'Valid Commercial Driving License (LMV / Transport category)',
      fullName: 'Valid Commercial Driving License (LMV / Transport category)'
    },
    nbcfdc_doc_3: {
      name: 'Vehicle Proforma Invoice',
      description: 'Authorized Dealership Vehicle Proforma Invoice / Price Quotation',
      fullName: 'Authorized Dealership Vehicle Proforma Invoice / Price Quotation'
    },
    nbcfdc_doc_4: {
      name: 'RTO Clearance / Route Permit',
      description: 'Route Permit / Regional Transport Office (RTO) preliminary clearance',
      fullName: 'Route Permit / Regional Transport Office (RTO) preliminary clearance'
    },
    mahila_doc_0: {
      name: 'Aadhaar Card & Photo ID',
      description: 'Photo ID of Woman Applicant',
      fullName: 'Aadhaar Card & Photo ID of Woman Applicant'
    },
    mahila_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'Issued by Revenue Authority',
      fullName: 'OBC / EWS Certificate issued by Revenue Authority'
    },
    mahila_doc_2: {
      name: 'Income Certificate',
      description: 'Proving annual family income does NOT exceed ₹1,50,000',
      fullName: 'Income Certificate proving annual family income does NOT exceed ₹1,50,000'
    },
    mahila_doc_3: {
      name: 'Bank Passbook Copy',
      description: 'Jan Dhan or regular savings account',
      fullName: 'Bank Passbook copy (Jan Dhan or regular savings account)'
    },
    mahila_doc_4: {
      name: 'SHG Membership Certificate',
      description: 'SHG Membership Certificate or self-employment declaration',
      fullName: 'SHG Membership Certificate or self-employment declaration'
    },
    ambedkar_doc_0: {
      name: 'Admission Proof',
      description: 'Enrollment letter in recognized higher education program',
      fullName: 'Admission proof / enrollment letter in recognized higher education program'
    },
    ambedkar_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'Valid community certificate',
      fullName: 'OBC / EWS Certificate'
    },
    ambedkar_doc_2: {
      name: 'Family Income Certificate',
      description: 'Showing family income <= ₹8.00 Lakh/year',
      fullName: 'Income Certificate showing family income <= ₹8.00 Lakh/year'
    },
    ambedkar_doc_3: {
      name: 'Education Loan Sanction Letter',
      description: 'Loan sanction letter under IBA Educational Loan Scheme',
      fullName: 'Loan sanction letter under IBA Educational Loan Scheme'
    }
  },
  hi: {
    aadhaar: {
      name: 'Aadhaar Card',
      description: 'पहचान एवं आयु प्रमाण, मोबाइल लिंक सहित',
      fullName: 'Aadhaar Card (पहचान एवं आयु प्रमाण, मोबाइल लिंक सहित)'
    },
    pan: {
      name: 'PAN Card',
      description: 'आयकर एवं बैंकिंग केवाईसी',
      fullName: 'PAN Card (आयकर एवं बैंकिंग केवाईसी)'
    },
    residence: {
      name: 'Proof of Residence',
      description: 'मतदाता पहचान पत्र / मूल निवास प्रमाण पत्र / बिजली बिल',
      fullName: 'Proof of Residence (मतदाता पहचान पत्र / मूल निवास प्रमाण पत्र / बिजली बिल)'
    },
    photos: {
      name: 'Passport Size Photographs',
      description: 'प्रवर्तक की 3 नवीनतम प्रतियां',
      fullName: 'Passport Size Photographs (प्रवर्तक की 3 नवीनतम प्रतियां)'
    },
    caste: {
      name: 'Category Certificate',
      description: 'सक्षम प्राधिकारी द्वारा जारी {category} प्रमाण पत्र',
      fullName: 'Category Certificate (सक्षम प्राधिकारी द्वारा जारी {category} प्रमाण पत्र)'
    },
    income: {
      name: 'Income Certificate',
      description: 'वार्षिक पारिवारिक आय का स्व-घोषणा पत्र',
      fullName: 'Income Certificate / वार्षिक पारिवारिक आय का स्व-घोषणा पत्र'
    },
    dpr: {
      name: 'Detailed Project Report (DPR)',
      description: 'मशीनरी, कच्चा माल और नकदी प्रवाह विवरण',
      fullName: 'Detailed Project Report (DPR) - मशीनरी, कच्चा माल और नकदी प्रवाह विवरण'
    },
    quotations: {
      name: 'Machinery / Equipment Quotations',
      description: 'सत्यापित आपूर्तिकर्ताओं से इनवॉयस',
      fullName: 'Machinery / Equipment Quotations एवं सत्यापित आपूर्तिकर्ताओं से इनवॉयस'
    },
    land: {
      name: 'Premises Proof',
      description: 'किराया/पट्टा समझौता अथवा भूमि स्वामित्व अभिलेख',
      fullName: 'Premises Proof (किराया/पट्टा समझौता अथवा भूमि स्वामित्व अभिलेख)'
    },
    bank: {
      name: 'Bank Statement',
      description: 'प्रवर्तक पूंजी दर्शाने वाला पिछले 6 माह का बैंक खाता विवरण',
      fullName: 'Bank Statement (प्रवर्तक पूंजी दर्शाने वाला पिछले 6 माह का बैंक खाता विवरण)'
    },
    pmegp_doc_0: {
      name: 'Aadhaar Card एवं PAN Card',
      description: 'आवेदक पहचान एवं कर सत्यापन',
      fullName: 'Aadhaar Card एवं PAN Card'
    },
    pmegp_doc_1: {
      name: 'Social Category / जाति प्रमाण पत्र',
      description: 'SC, ST, OBC विशेष सब्सिडी स्लैब हेतु',
      fullName: 'Social Category / जाति प्रमाण पत्र (SC, ST, OBC सब्सिडी हेतु)'
    },
    pmegp_doc_2: {
      name: 'Detailed Project Report (DPR)',
      description: 'उपकरण एवं मशीनरी लागत अनुमान सहित',
      fullName: 'Detailed Project Report (DPR) - उपकरण एवं मशीनरी लागत अनुमान सहित'
    },
    pmegp_doc_3: {
      name: 'Rural Area Certificate',
      description: 'ग्राम पंचायत से ग्रामीण क्षेत्र प्रमाण पत्र (35% सब्सिडी स्लैब हेतु)',
      fullName: 'Rural Area Certificate - ग्राम पंचायत से ग्रामीण क्षेत्र प्रमाण पत्र'
    },
    pmegp_doc_4: {
      name: 'Educational Qualification Certificate',
      description: '₹10 लाख से अधिक परियोजनाओं हेतु न्यूनतम 8वीं पास',
      fullName: 'Educational Qualification Certificate (₹10 लाख से अधिक परियोजनाओं हेतु न्यूनतम 8वीं पास)'
    },
    standup_doc_0: {
      name: 'Proof of Identity & Address',
      description: 'Aadhaar, पासपोर्ट, मतदाता पहचान पत्र',
      fullName: 'Proof of Identity & Address (Aadhaar, पासपोर्ट, मतदाता पहचान पत्र)'
    },
    standup_doc_1: {
      name: 'SC/ST Certificate',
      description: 'SC/ST कोटा के तहत आवेदन हेतु अनिवार्य',
      fullName: 'SC/ST Certificate (SC/ST कोटा के तहत आवेदन हेतु)'
    },
    standup_doc_2: {
      name: 'Comprehensive Detailed Project Report (DPR)',
      description: '5-वर्षीय नकदी प्रवाह अनुमान सहित',
      fullName: 'Comprehensive Detailed Project Report (DPR) - 5-वर्षीय नकदी प्रवाह अनुमान सहित'
    },
    standup_doc_3: {
      name: 'Equipment Quotations & Invoices',
      description: 'प्लांट मशीनरी, उपकरण अथवा व्यावसायिक वाहनों के प्रोफार्मा इनवॉयस',
      fullName: 'प्लांट मशीनरी, उपकरण अथवा व्यावसायिक वाहनों के प्रोफार्मा इनवॉयस'
    },
    standup_doc_4: {
      name: 'Statutory Clearances & NOC',
      description: 'प्रदूषण नियंत्रण बोर्ड NOC / वैधानिक नगर पालिका लाइसेंस',
      fullName: 'प्रदूषण नियंत्रण बोर्ड NOC / वैधानिक नगर पालिका लाइसेंस'
    },
    nsfdc_doc_0: {
      name: 'Valid SC Caste Certificate',
      description: 'सक्षम राजस्व प्राधिकारी (तहसीलदार/SDM) द्वारा जारी',
      fullName: 'सक्षम राजस्व प्राधिकारी (तहसीलदार/SDM) द्वारा जारी वैध SC प्रमाण पत्र'
    },
    nsfdc_doc_1: {
      name: 'Income Certificate',
      description: 'वार्षिक पारिवारिक आय ₹3,00,000 के भीतर सत्यापित करने वाला प्रमाण पत्र',
      fullName: 'वार्षिक पारिवारिक आय ₹3,00,000 के भीतर सत्यापित करने वाला Income Certificate'
    },
    nsfdc_doc_2: {
      name: 'Project Profile & Machinery Quotations',
      description: 'मशीनरी लागत अनुमान एवं आपूर्तिकर्ता कोटेशन',
      fullName: 'Project Profile एवं मशीनरी कोटेशन'
    },
    nsfdc_doc_3: {
      name: 'Proof of Business Premises',
      description: 'कार्यस्थल का किराया समझौता अथवा भूमि स्वामित्व दस्तावेज',
      fullName: 'कार्यस्थल का किराया समझौता अथवा भूमि स्वामित्व दस्तावेज (Premises Proof)'
    },
    nbcfdc_doc_0: {
      name: 'OBC / EWS Certificate',
      description: 'राजस्व प्राधिकारी द्वारा जारी नॉन-क्रीमी लेयर प्रमाण पत्र',
      fullName: 'राजस्व प्राधिकारी द्वारा जारी OBC / EWS नॉन-क्रीमी लेयर प्रमाण पत्र'
    },
    nbcfdc_doc_1: {
      name: 'Family Income Certificate',
      description: 'वार्षिक आय ₹3,00,000 के भीतर सत्यापित करने वाला',
      fullName: 'वार्षिक पारिवारिक आय ₹3,00,000 के भीतर सत्यापित करने वाला Family Income Certificate'
    },
    nbcfdc_doc_2: {
      name: 'Commercial Driving License',
      description: 'वैध वाणिज्यिक ड्राइविंग लाइसेंस (LMV / परिवहन श्रेणी)',
      fullName: 'वैध Commercial Driving License (LMV / परिवहन श्रेणी)'
    },
    nbcfdc_doc_3: {
      name: 'Vehicle Proforma Invoice',
      description: 'अधिकृत डीलरशिप से वाहन प्रोफार्मा इनवॉयस / मूल्य कोटेशन',
      fullName: 'अधिकृत डीलरशिप से वाहन प्रोफार्मा इनवॉयस / मूल्य कोटेशन'
    },
    nbcfdc_doc_4: {
      name: 'RTO Clearance / Route Permit',
      description: 'रूट परमिट / क्षेत्रीय परिवहन कार्यालय (RTO) प्रारंभिक स्वीकृति',
      fullName: 'रूट परमिट / क्षेत्रीय परिवहन कार्यालय (RTO) प्रारंभिक स्वीकृति'
    },
    mahila_doc_0: {
      name: 'Aadhaar Card & Photo ID',
      description: 'महिला आवेदक का वैध फोटो पहचान पत्र',
      fullName: 'महिला आवेदक का Aadhaar Card एवं फोटो पहचान पत्र'
    },
    mahila_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'राजस्व प्राधिकारी द्वारा जारी',
      fullName: 'राजस्व प्राधिकारी द्वारा जारी OBC / EWS प्रमाण पत्र'
    },
    mahila_doc_2: {
      name: 'Income Certificate',
      description: 'पारिवारिक वार्षिक आय ₹1,50,000 से अधिक न होने का प्रमाण',
      fullName: 'पारिवारिक वार्षिक आय ₹1,50,000 से अधिक न होने का Income Certificate'
    },
    mahila_doc_3: {
      name: 'Bank Passbook Copy',
      description: 'जन धन अथवा नियमित बचत बैंक खाता पासबुक की प्रति',
      fullName: 'जन धन अथवा नियमित बचत बैंक खाता पासबुक की प्रति (Bank Passbook)'
    },
    mahila_doc_4: {
      name: 'SHG Membership Certificate',
      description: 'स्वयं सहायता समूह (SHG) सदस्यता प्रमाण पत्र अथवा स्व-रोजगार घोषणा',
      fullName: 'स्वयं सहायता समूह (SHG) सदस्यता प्रमाण पत्र अथवा स्व-रोजगार घोषणा'
    },
    ambedkar_doc_0: {
      name: 'Admission Proof',
      description: 'मान्यता प्राप्त उच्च शिक्षा पाठ्यक्रम में प्रवेश पत्र',
      fullName: 'मान्यता प्राप्त उच्च शिक्षा पाठ्यक्रम में प्रवेश पत्र (Admission Proof)'
    },
    ambedkar_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'सक्षम प्राधिकारी द्वारा जारी वैध समुदाय प्रमाण पत्र',
      fullName: 'सक्षम प्राधिकारी द्वारा जारी वैध OBC / EWS प्रमाण पत्र'
    },
    ambedkar_doc_2: {
      name: 'Family Income Certificate',
      description: 'पारिवारिक आय ₹8.00 लाख/वर्ष के भीतर दर्शाने वाला',
      fullName: 'पारिवारिक आय ₹8.00 लाख/वर्ष के भीतर दर्शाने वाला Income Certificate'
    },
    ambedkar_doc_3: {
      name: 'Education Loan Sanction Letter',
      description: 'IBA शिक्षा ऋण योजना के अंतर्गत बैंक से ऋण स्वीकृति पत्र',
      fullName: 'IBA शिक्षा ऋण योजना के अंतर्गत बैंक से ऋण स्वीकृति पत्र'
    }
  },
  pa: {
    aadhaar: {
      name: 'Aadhaar Card',
      description: 'ਪਛਾਣ ਅਤੇ ਉਮਰ ਦਾ ਸਬੂਤ, ਮੋਬਾਈਲ ਲਿੰਕ ਸਮੇਤ',
      fullName: 'Aadhaar Card (ਪਛਾਣ ਅਤੇ ਉਮਰ ਦਾ ਸਬੂਤ, ਮੋਬਾਈਲ ਲਿੰਕ ਸਮੇਤ)'
    },
    pan: {
      name: 'PAN Card',
      description: 'ਇਨਕਮ ਟੈਕਸ ਅਤੇ ਬੈਂਕਿੰਗ ਕੇਵਾਈਸੀ',
      fullName: 'PAN Card (ਇਨਕਮ ਟੈਕਸ ਅਤੇ ਬੈਂਕਿੰਗ ਕੇਵਾਈਸੀ)'
    },
    residence: {
      name: 'Proof of Residence',
      description: 'ਵੋਟਰ ਆਈਡੀ / ਨਿਵਾਸ ਸਰਟੀਫਿਕੇਟ / ਬਿਜਲੀ ਬਿੱਲ',
      fullName: 'Proof of Residence (ਵੋਟਰ ਆਈਡੀ / ਨਿਵਾਸ ਸਰਟੀਫਿਕੇਟ / ਬਿਜਲੀ ਬਿੱਲ)'
    },
    photos: {
      name: 'Passport Size Photographs',
      description: 'ਪ੍ਰਮੋਟਰ ਦੀਆਂ 3 ਕਾਪੀਆਂ',
      fullName: 'Passport Size Photographs (ਪ੍ਰਮੋਟਰ ਦੀਆਂ 3 ਕਾਪੀਆਂ)'
    },
    caste: {
      name: 'Category Certificate',
      description: 'ਸਮਰੱਥ ਅਧਿਕਾਰੀ ਦੁਆਰਾ ਜਾਰੀ {category} ਸਰਟੀਫਿਕੇਟ',
      fullName: 'Category Certificate (ਸਮਰੱਥ ਅਧਿਕਾਰੀ ਦੁਆਰਾ ਜਾਰੀ {category} ਸਰਟੀਫਿਕੇਟ)'
    },
    income: {
      name: 'Income Certificate',
      description: 'ਸਾਲਾਨਾ ਪਰਿਵਾਰਕ ਆਮਦਨ ਦਾ ਸਵੈ-ਘੋਸ਼ਣਾ ਪੱਤਰ',
      fullName: 'Income Certificate / ਸਾਲਾਨਾ ਪਰਿਵਾਰਕ ਆਮਦਨ ਦਾ ਸਵੈ-ਘੋਸ਼ਣਾ ਪੱਤਰ'
    },
    dpr: {
      name: 'Detailed Project Report (DPR)',
      description: 'ਮਸ਼ੀਨਰੀ, ਕੱਚਾ ਮਾਲ ਅਤੇ ਕੈਸ਼ਫਲੋ ਵੇਰਵਾ',
      fullName: 'Detailed Project Report (DPR) - ਮਸ਼ੀਨਰੀ, ਕੱਚਾ ਮਾਲ ਅਤੇ ਕੈਸ਼ਫਲੋ ਵੇਰਵਾ'
    },
    quotations: {
      name: 'Machinery / Equipment Quotations',
      description: 'ਪ੍ਰਮਾਣਿਤ ਸਪਲਾਇਰਾਂ ਤੋਂ ਇਨਵੌਇਸ',
      fullName: 'Machinery / Equipment Quotations ਅਤੇ ਪ੍ਰਮਾਣਿਤ ਸਪਲਾਇਰਾਂ ਤੋਂ ਇਨਵੌਇਸ'
    },
    land: {
      name: 'Premises Proof',
      description: 'ਕਿਰਾਇਆ/ਲੀਜ਼ ਸਮਝੌਤਾ ਜਾਂ ਜ਼ਮੀਨ ਮਾਲਕੀ ਰਿਕਾਰਡ',
      fullName: 'Premises Proof (ਕਿਰਾਇਆ/ਲੀਜ਼ ਸਮਝੌਤਾ ਜਾਂ ਜ਼ਮੀਨ ਮਾਲਕੀ ਰਿਕਾਰਡ)'
    },
    bank: {
      name: 'Bank Statement',
      description: 'ਪ੍ਰਮੋਟਰ ਪੂੰਜੀ ਦਰਸਾਉਂਦਾ ਪਿਛਲੇ 6 ਮਹੀਨਿਆਂ ਦਾ ਬੈਂਕ ਸਟੇਟਮੈਂਟ',
      fullName: 'Bank Statement (ਪ੍ਰਮੋਟਰ ਪੂੰਜੀ ਦਰਸਾਉਂਦਾ ਪਿਛਲੇ 6 ਮਹੀਨਿਆਂ ਦਾ ਬੈਂਕ ਸਟੇਟਮੈਂਟ)'
    },
    pmegp_doc_0: {
      name: 'Aadhaar Card ਅਤੇ PAN Card',
      description: 'ਲਾਭਪਾਤਰੀ ਪਛਾਣ ਅਤੇ ਟੈਕਸ ਵੈਰੀਫਿਕੇਸ਼ਨ',
      fullName: 'Aadhaar Card ਅਤੇ PAN Card'
    },
    pmegp_doc_1: {
      name: 'Social Category / ਜਾਤੀ ਸਰਟੀਫਿਕੇਟ',
      description: 'SC, ST, OBC ਸਬਸਿਡੀ ਲਈ',
      fullName: 'Social Category / ਜਾਤੀ ਸਰਟੀਫਿਕੇਟ (SC, ST, OBC ਸਬਸਿਡੀ ਲਈ)'
    },
    pmegp_doc_2: {
      name: 'Detailed Project Report (DPR)',
      description: 'ਉਪਕਰਨ ਲਾਗਤ ਅਨੁਮਾਨਾਂ ਸਮੇਤ',
      fullName: 'Detailed Project Report (DPR) - ਉਪਕਰਨ ਲਾਗਤ ਅਨੁਮਾਨਾਂ ਸਮੇਤ'
    },
    pmegp_doc_3: {
      name: 'Rural Area Certificate',
      description: 'ਗ੍ਰਾਮ ਪੰਚਾਇਤ ਤੋਂ ਪੇਂਡੂ ਖੇਤਰ ਸਰਟੀਫਿਕੇਟ',
      fullName: 'Rural Area Certificate - ਗ੍ਰਾਮ ਪੰਚਾਇਤ ਤੋਂ ਪੇਂਡੂ ਖੇਤਰ ਸਰਟੀਫਿਕੇਟ'
    },
    pmegp_doc_4: {
      name: 'Educational Qualification Certificate',
      description: '₹10 ਲੱਖ ਤੋਂ ਵੱਧ ਪ੍ਰੋਜੈਕਟਾਂ ਲਈ ਘੱਟੋ-ਘੱਟ 8ਵੀਂ ਪਾਸ',
      fullName: 'Educational Qualification Certificate (₹10 ਲੱਖ ਤੋਂ ਵੱਧ ਪ੍ਰੋਜੈਕਟਾਂ ਲਈ ਘੱਟੋ-ਘੱਟ 8ਵੀਂ ਪਾਸ)'
    },
    standup_doc_0: {
      name: 'Proof of Identity & Address',
      description: 'Aadhaar, ਪਾਸਪੋਰਟ, ਵੋਟਰ ਆਈਡੀ',
      fullName: 'Proof of Identity & Address (Aadhaar, ਪਾਸਪੋਰਟ, ਵੋਟਰ ਆਈਡੀ)'
    },
    standup_doc_1: {
      name: 'SC/ST Certificate',
      description: 'SC/ST ਕੋਟੇ ਤਹਿਤ ਅਰਜ਼ੀ ਲਈ',
      fullName: 'SC/ST Certificate (SC/ST ਕੋਟੇ ਤਹਿਤ ਅਰਜ਼ੀ ਲਈ)'
    },
    standup_doc_2: {
      name: 'Comprehensive Detailed Project Report (DPR)',
      description: '5-ਸਾਲਾ ਕੈਸ਼ਫਲੋ ਅਨੁਮਾਨਾਂ ਸਮੇਤ',
      fullName: 'Comprehensive Detailed Project Report (DPR) - ਕੈਸ਼ਫਲੋ ਅਨੁਮਾਨਾਂ ਸਮੇਤ'
    },
    standup_doc_3: {
      name: 'Equipment Quotations & Invoices',
      description: 'ਮਸ਼ੀਨਰੀ ਜਾਂ ਵਪਾਰਕ ਵਾਹਨਾਂ ਦੇ ਕੋਟੇਸ਼ਨ',
      fullName: 'ਮਸ਼ੀਨਰੀ ਜਾਂ ਵਪਾਰਕ ਵਾਹਨਾਂ ਦੇ ਕੋਟੇਸ਼ਨ ਅਤੇ ਪ੍ਰੋਫਾਰਮਾ ਇਨਵੌਇਸ'
    },
    standup_doc_4: {
      name: 'Statutory Clearances & NOC',
      description: 'ਪ੍ਰਦੂਸ਼ਣ ਕੰਟਰੋਲ ਬੋਰਡ NOC / ਨਗਰਪਾਲਿਕਾ ਲਾਇਸੈਂਸ',
      fullName: 'ਪ੍ਰਦੂਸ਼ਣ ਕੰਟਰੋਲ ਬੋਰਡ NOC / ਨਗਰਪਾਲਿਕਾ ਲਾਇਸੈਂਸ'
    },
    nsfdc_doc_0: {
      name: 'Valid SC Caste Certificate',
      description: 'ਤਹਿਸੀਲਦਾਰ/SDM ਦੁਆਰਾ ਜਾਰੀ ਵੈਧ SC ਸਰਟੀਫਿਕੇਟ',
      fullName: 'ਤਹਿਸੀਲਦਾਰ/SDM ਦੁਆਰਾ ਜਾਰੀ ਵੈਧ SC ਸਰਟੀਫਿਕੇਟ'
    },
    nsfdc_doc_1: {
      name: 'Income Certificate',
      description: 'ਸਾਲਾਨਾ ਆਮਦਨ ₹3,00,000 ਤੱਕ ਤਸਦੀਕ ਕਰਦਾ ਸਰਟੀਫਿਕੇਟ',
      fullName: 'ਸਾਲਾਨਾ ਪਰਿਵਾਰਕ ਆਮਦਨ ₹3,00,000 ਤੱਕ ਦਾ Income Certificate'
    },
    nsfdc_doc_2: {
      name: 'Project Profile & Machinery Quotations',
      description: 'ਮਸ਼ੀਨਰੀ ਖਰੀਦ ਕੋਟੇਸ਼ਨ',
      fullName: 'Project Profile ਅਤੇ ਮਸ਼ੀਨਰੀ ਕੋਟੇਸ਼ਨ'
    },
    nsfdc_doc_3: {
      name: 'Proof of Business Premises',
      description: 'ਦਫ਼ਤਰ/ਦੁਕਾਨ ਲੀਜ਼ ਸਮਝੌਤਾ ਜਾਂ ਮਾਲਕੀ ਰਿਕਾਰਡ',
      fullName: 'ਕਾਰੋਬਾਰੀ ਜਗ੍ਹਾ ਦਾ ਲੀਜ਼ ਸਮਝੌਤਾ ਜਾਂ ਮਾਲਕੀ ਰਿਕਾਰਡ'
    },
    nbcfdc_doc_0: {
      name: 'OBC / EWS Certificate',
      description: 'ਨਾਨ-ਕ੍ਰੀਮੀ ਲੇਅਰ ਸਰਟੀਫਿਕੇਟ',
      fullName: 'OBC / EWS ਨਾਨ-ਕ੍ਰੀਮੀ ਲੇਅਰ ਸਰਟੀਫਿਕੇਟ'
    },
    nbcfdc_doc_1: {
      name: 'Family Income Certificate',
      description: 'ਸਾਲਾਨਾ ਆਮਦਨ ₹3,00,000 ਸੀਮਾ ਅੰਦਰ',
      fullName: 'ਸਾਲਾਨਾ ਆਮਦਨ ₹3,00,000 ਸੀਮਾ ਅੰਦਰ Family Income Certificate'
    },
    nbcfdc_doc_2: {
      name: 'Commercial Driving License',
      description: 'ਵਪਾਰਕ ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ (LMV / ਟਰਾਂਸਪੋਰਟ ਸ਼੍ਰੇਣੀ)',
      fullName: 'ਵੈਧ Commercial Driving License (LMV / ਟਰਾਂਸਪੋਰਟ)'
    },
    nbcfdc_doc_3: {
      name: 'Vehicle Proforma Invoice',
      description: 'ਅਧਿਕਾਰਤ ਡੀਲਰਸ਼ਿਪ ਤੋਂ ਵਾਹਨ ਪ੍ਰੋਫਾਰਮਾ ਇਨਵੌਇਸ',
      fullName: 'ਅਧਿਕਾਰਤ ਡੀਲਰਸ਼ਿਪ ਤੋਂ ਵਾਹਨ ਪ੍ਰੋਫਾਰਮਾ ਇਨਵੌਇਸ'
    },
    nbcfdc_doc_4: {
      name: 'RTO Clearance / Route Permit',
      description: 'ਰੂਟ ਪਰਮਿਟ / RTO ਮੁੱਢਲੀ ਪ੍ਰਵਾਨਗੀ',
      fullName: 'ਰੂਟ ਪਰਮਿਟ / RTO ਮੁੱਢਲੀ ਪ੍ਰਵਾਨਗੀ'
    },
    mahila_doc_0: {
      name: 'Aadhaar Card & Photo ID',
      description: 'ਮਹਿਲਾ ਬਿਨੈਕਾਰ ਦਾ ਫੋਟੋ ਸ਼ਨਾਖਤੀ ਕਾਰਡ',
      fullName: 'ਮਹਿਲਾ ਬਿਨੈਕਾਰ ਦਾ Aadhaar Card ਅਤੇ ਫੋਟੋ ਆਈਡੀ'
    },
    mahila_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'ਮਾਲ ਅਧਿਕਾਰੀ ਦੁਆਰਾ ਜਾਰੀ',
      fullName: 'OBC / EWS ਸਰਟੀਫਿਕੇਟ'
    },
    mahila_doc_2: {
      name: 'Income Certificate',
      description: 'ਸਾਲਾਨਾ ਆਮਦਨ ₹1,50,000 ਤੋਂ ਘੱਟ ਹੋਣ ਦਾ ਸਬੂਤ',
      fullName: 'ਸਾਲਾਨਾ ਪਰਿਵਾਰਕ ਆਮਦਨ ₹1,50,000 ਤੋਂ ਘੱਟ ਦਾ Income Certificate'
    },
    mahila_doc_3: {
      name: 'Bank Passbook Copy',
      description: 'ਜਨ ਧਨ ਜਾਂ ਰੈਗੂਲਰ ਬੱਚਤ ਖਾਤਾ ਪਾਸਬੁੱਕ ਕਾਪੀ',
      fullName: 'ਜਨ ਧਨ ਜਾਂ ਬੱਚਤ ਖਾਤਾ Bank Passbook ਦੀ ਕਾਪੀ'
    },
    mahila_doc_4: {
      name: 'SHG Membership Certificate',
      description: 'ਸਵੈ ਸਹਾਇਤਾ ਸਮੂਹ (SHG) ਮੈਂਬਰਸ਼ਿਪ ਸਰਟੀਫਿਕੇਟ',
      fullName: 'ਸਵੈ ਸਹਾਇਤਾ ਸਮੂਹ (SHG) ਮੈਂਬਰਸ਼ਿਪ ਸਰਟੀਫਿਕੇਟ'
    },
    ambedkar_doc_0: {
      name: 'Admission Proof',
      description: 'ਉੱਚ ਸਿੱਖਿਆ ਕੋਰਸ ਦਾ ਦਾਖਲਾ ਪੱਤਰ',
      fullName: 'ਉੱਚ ਸਿੱਖਿਆ ਕੋਰਸ ਦਾ ਦਾਖਲਾ ਪੱਤਰ (Admission Proof)'
    },
    ambedkar_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'ਸਮਰੱਥ ਅਥਾਰਟੀ ਤੋਂ ਜਾਤੀ ਸਰਟੀਫਿਕੇਟ',
      fullName: 'OBC / EWS ਜਾਤੀ ਸਰਟੀਫਿਕੇਟ'
    },
    ambedkar_doc_2: {
      name: 'Family Income Certificate',
      description: 'ਪਰਿਵਾਰਕ ਆਮਦਨ ₹8.00 ਲੱਖ/ਸਾਲ ਦੇ ਅੰਦਰ',
      fullName: 'ਪਰਿਵਾਰਕ ਆਮਦਨ ₹8.00 ਲੱਖ/ਸਾਲ ਦੇ ਅੰਦਰ ਦਾ Income Certificate'
    },
    ambedkar_doc_3: {
      name: 'Education Loan Sanction Letter',
      description: 'IBA ਸਿੱਖਿਆ ਕਰਜ਼ਾ ਯੋਜਨਾ ਤਹਿਤ ਬੈਂਕ ਮਨਜ਼ੂਰੀ ਪੱਤਰ',
      fullName: 'IBA ਸਿੱਖਿਆ ਕਰਜ਼ਾ ਯੋਜਨਾ ਤਹਿਤ ਬੈਂਕ ਮਨਜ਼ੂਰੀ ਪੱਤਰ'
    }
  },
  bn: {
    aadhaar: {
      name: 'Aadhaar Card',
      description: 'পরিচয় ও বয়সের প্রমাণ, মোবাইল লিঙ্ক সহ',
      fullName: 'Aadhaar Card (পরিচয় ও বয়সের প্রমাণ, মোবাইল লিঙ্ক সহ)'
    },
    pan: {
      name: 'PAN Card',
      description: 'আয়কর এবং ব্যাংকিং কেওয়াইসি',
      fullName: 'PAN Card (আয়কর এবং ব্যাংকিং কেওয়াইসি)'
    },
    residence: {
      name: 'Proof of Residence',
      description: 'ভোটার আইডি / বাসস্থান শংসাপত্র / বিদ্যুৎ বিল',
      fullName: 'Proof of Residence (ভোটার আইডি / বাসস্থান শংসাপত্র / বিদ্যুৎ বিল)'
    },
    photos: {
      name: 'Passport Size Photographs',
      description: 'উদ্যোক্তার ৩ কপি পাসপোর্ট সাইজ ছবি',
      fullName: 'Passport Size Photographs (উদ্যোক্তার ৩ কপি পাসপোর্ট সাইজ ছবি)'
    },
    caste: {
      name: 'Category Certificate',
      description: 'উপযুক্ত কর্তৃপক্ষ কর্তৃক প্রদত্ত {category} শংসাপত্র',
      fullName: 'Category Certificate (উপযুক্ত কর্তৃপক্ষ কর্তৃক প্রদত্ত {category} শংসাপত্র)'
    },
    income: {
      name: 'Income Certificate',
      description: 'বার্ষিক পারিবারিক আয়ের স্ব-ঘোষণা পত্র',
      fullName: 'Income Certificate / বার্ষিক পারিবারিক আয়ের স্ব-ঘোষণা পত্র'
    },
    dpr: {
      name: 'Detailed Project Report (DPR)',
      description: 'যন্ত্রপাতি, কাঁচামাল এবং নগদ প্রবাহ বিবরণ',
      fullName: 'Detailed Project Report (DPR) - যন্ত্রপাতি, কাঁচামাল এবং নগদ প্রবাহ বিবরণ'
    },
    quotations: {
      name: 'Machinery / Equipment Quotations',
      description: 'যাচাইকৃত সরবরাহকারীদের ইনভয়েস',
      fullName: 'Machinery / Equipment Quotations এবং যাচাইকৃত সরবরাহকারীদের ইনভয়েস'
    },
    land: {
      name: 'Premises Proof',
      description: 'ভাড়া/ইজারা চুক্তি অথবা জমির মালিকানা রেকর্ড',
      fullName: 'Premises Proof (ভাড়া/ইজারা চুক্তি অথবা জমির মালিকানা রেকর্ড)'
    },
    bank: {
      name: 'Bank Statement',
      description: 'উদ্যোক্তা মূলধন প্রদর্শনকারী বিগত ৬ মাসের ব্যাংক স্টেটমেন্ট',
      fullName: 'Bank Statement (উদ্যোক্তা মূলধন প্রদর্শনকারী বিগত ৬ মাসের ব্যাংক স্টেটমেন্ট)'
    },
    pmegp_doc_0: {
      name: 'Aadhaar Card এবং PAN Card',
      description: 'আবেদনকারীর পরিচয় ও কর যাচাইকরণ',
      fullName: 'Aadhaar Card এবং PAN Card'
    },
    pmegp_doc_1: {
      name: 'Social Category / জাতিগত শংসাপত্র',
      description: 'SC, ST, OBC ভর্তুকির জন্য',
      fullName: 'Social Category / জাতিগত শংসাপত্র (SC, ST, OBC ভর্তুকির জন্য)'
    },
    pmegp_doc_2: {
      name: 'Detailed Project Report (DPR)',
      description: 'যন্ত্রপাতি ব্যয়ের প্রাক্কলন সহ',
      fullName: 'Detailed Project Report (DPR) - যন্ত্রপাতি ব্যয়ের প্রাক্কলন সহ'
    },
    pmegp_doc_3: {
      name: 'Rural Area Certificate',
      description: 'গ্রাম পঞ্চায়েত থেকে গ্রামীণ এলাকা শংসাপত্র',
      fullName: 'Rural Area Certificate - গ্রাম পঞ্চায়েত থেকে গ্রামীণ এলাকা শংসাপত্র'
    },
    pmegp_doc_4: {
      name: 'Educational Qualification Certificate',
      description: '₹১০ লাখের বেশি প্রকল্পের জন্য ন্যূনতম ৮ম পাস',
      fullName: 'Educational Qualification Certificate (₹১০ লাখের বেশি প্রকল্পের জন্য ন্যূনতম ৮ম পাস)'
    },
    standup_doc_0: {
      name: 'Proof of Identity & Address',
      description: 'Aadhaar, পাসপোর্ট, ভোটার আইডি',
      fullName: 'Proof of Identity & Address (Aadhaar, পাসপোর্ট, ভোটার আইডি)'
    },
    standup_doc_1: {
      name: 'SC/ST Certificate',
      description: 'SC/ST কোটায় আবেদনের জন্য',
      fullName: 'SC/ST Certificate (SC/ST কোটায় আবেদনের জন্য)'
    },
    standup_doc_2: {
      name: 'Comprehensive Detailed Project Report (DPR)',
      description: '৫ বছরের নগদ প্রবাহ প্রক্ষেপণ সহ',
      fullName: 'Comprehensive Detailed Project Report (DPR) - নগদ প্রবাহ বিবরণ সহ'
    },
    standup_doc_3: {
      name: 'Equipment Quotations & Invoices',
      description: 'যন্ত্রপাতি বা বাণিজ্যিক যানবাহনের প্রোফরমা ইনভয়েস',
      fullName: 'যন্ত্রপাতি বা বাণিজ্যিক যানবাহনের প্রোফরমা ইনভয়েস ও কোটেশন'
    },
    standup_doc_4: {
      name: 'Statutory Clearances & NOC',
      description: 'দূষণ নিয়ন্ত্রণ বোর্ড NOC / মিউনিসিপ্যাল লাইসেন্স',
      fullName: 'দূষণ নিয়ন্ত্রণ বোর্ড NOC / মিউনিসিপ্যাল লাইসেন্স'
    },
    nsfdc_doc_0: {
      name: 'Valid SC Caste Certificate',
      description: 'তহসিলদার/SDM দ্বারা প্রদত্ত বৈধ SC শংসাপত্র',
      fullName: 'তহসিলদার/SDM দ্বারা প্রদত্ত বৈধ SC শংসাপত্র'
    },
    nsfdc_doc_1: {
      name: 'Income Certificate',
      description: 'বার্ষিক আয় ₹৩,০০,০০০-এর মধ্যে থাকার প্রমাণ',
      fullName: 'বার্ষিক পারিবারিক আয় ₹৩,০০,০০০-এর মধ্যে থাকার Income Certificate'
    },
    nsfdc_doc_2: {
      name: 'Project Profile & Machinery Quotations',
      description: 'যন্ত্রপাতির কোটেশন ও প্রকল্প বিবরণী',
      fullName: 'Project Profile এবং যন্ত্রপাতির কোটেশন'
    },
    nsfdc_doc_3: {
      name: 'Proof of Business Premises',
      description: 'কর্মস্থলের ভাড়া চুক্তি বা মালিকানা নথি',
      fullName: 'কর্মস্থলের ভাড়া চুক্তি বা জমির দলিল (Premises Proof)'
    },
    nbcfdc_doc_0: {
      name: 'OBC / EWS Certificate',
      description: 'নন-ক্রিমি লেয়ার শংসাপত্র',
      fullName: 'OBC / EWS নন-ক্রিমি লেয়ার শংসাপত্র'
    },
    nbcfdc_doc_1: {
      name: 'Family Income Certificate',
      description: 'বার্ষিক আয় ₹৩,০০,০০০ সীমার মধ্যে',
      fullName: 'বার্ষিক পারিবারিক আয় ₹৩,০০,০০০ সীমার মধ্যে Family Income Certificate'
    },
    nbcfdc_doc_2: {
      name: 'Commercial Driving License',
      description: 'বাণিজ্যিক ড্রাইভিং লাইসেন্স (LMV / পরিবহন বিভাগ)',
      fullName: 'বৈধ Commercial Driving License (LMV / পরিবহন)'
    },
    nbcfdc_doc_3: {
      name: 'Vehicle Proforma Invoice',
      description: 'অনুমোদিত ডিলারশিপ থেকে যানবাহনের প্রোফরমা ইনভয়েস',
      fullName: 'অনুমোদিত ডিলারশিপ থেকে যানবাহনের প্রোফরমা ইনভয়েস'
    },
    nbcfdc_doc_4: {
      name: 'RTO Clearance / Route Permit',
      description: 'রুট পারমিট / RTO প্রাথমিক অনুমোদন',
      fullName: 'রুট পারমিট / RTO প্রাথমিক অনুমোদন'
    },
    mahila_doc_0: {
      name: 'Aadhaar Card & Photo ID',
      description: 'নারী আবেদনকারীর সচিত্র পরিচয়পত্র',
      fullName: 'নারী আবেদনকারীর Aadhaar Card ও সচিত্র পরিচয়পত্র'
    },
    mahila_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'উপযুক্ত রাজস্ব কর্তৃপক্ষ দ্বারা প্রদত্ত',
      fullName: 'OBC / EWS শংসাপত্র'
    },
    mahila_doc_2: {
      name: 'Income Certificate',
      description: 'পারিবারিক বার্ষিক আয় ₹১,৫০,০০০ না ছাড়ানোর প্রমাণ',
      fullName: 'পারিবারিক বার্ষিক আয় ₹১,৫০,০০০ না ছাড়ানোর Income Certificate'
    },
    mahila_doc_3: {
      name: 'Bank Passbook Copy',
      description: 'জন ধন বা সঞ্চয়ী ব্যাংক হিসাবের পাসবইয়ের কপি',
      fullName: 'জন ধন বা সঞ্চয়ী ব্যাংক অ্যাকাউন্টের Bank Passbook কপি'
    },
    mahila_doc_4: {
      name: 'SHG Membership Certificate',
      description: 'স্বনির্ভর দল (SHG) সদস্যতা শংসাপত্র',
      fullName: 'স্বনির্ভর দল (SHG) সদস্যতা শংসাপত্র বা স্ব-ঘোষণা'
    },
    ambedkar_doc_0: {
      name: 'Admission Proof',
      description: 'উচ্চশিক্ষা কোর্সের ভর্তি পত্র',
      fullName: 'উচ্চশিক্ষা কোর্সের ভর্তি পত্র (Admission Proof)'
    },
    ambedkar_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'উপযুক্ত কর্তৃপক্ষের সম্প্রদায় সনদ',
      fullName: 'OBC / EWS শংসাপত্র'
    },
    ambedkar_doc_2: {
      name: 'Family Income Certificate',
      description: 'পারিবারিক আয় ₹৮.০০ লাখ/বছরের মধ্যে',
      fullName: 'পারিবারিক আয় ₹৮.০০ লাখ/বছরের মধ্যে Income Certificate'
    },
    ambedkar_doc_3: {
      name: 'Education Loan Sanction Letter',
      description: 'IBA শিক্ষা ঋণ প্রকল্পের অধীনে ব্যাংক অনুমোদন পত্র',
      fullName: 'IBA শিক্ষা ঋণ প্রকল্পের অধীনে ব্যাংক অনুমোদন পত্র'
    }
  },
  mr: {
    aadhaar: {
      name: 'Aadhaar Card',
      description: 'ओळख आणि वयाचा पुरावा, मोबाइल लिंकसह',
      fullName: 'Aadhaar Card (ओळख आणि वयाचा पुरावा, मोबाइल लिंकसह)'
    },
    pan: {
      name: 'PAN Card',
      description: 'आयकर आणि बँकिंग केवायसी',
      fullName: 'PAN Card (आयकर आणि बँकिंग केवायसी)'
    },
    residence: {
      name: 'Proof of Residence',
      description: 'मतदार ओळखपत्र / अधिवास प्रमाणपत्र / वीज बिल',
      fullName: 'Proof of Residence (मतदार ओळखपत्र / अधिवास प्रमाणपत्र / वीज बिल)'
    },
    photos: {
      name: 'Passport Size Photographs',
      description: 'प्रवर्तकाची 3 पासपोर्ट आकाराची छायाचित्रे',
      fullName: 'Passport Size Photographs (प्रवर्तकाची 3 पासपोर्ट आकाराची छायाचित्रे)'
    },
    caste: {
      name: 'Category Certificate',
      description: 'सक्षम प्राधिकार्‍याने जारी केलेले {category} प्रमाणपत्र',
      fullName: 'Category Certificate (सक्षम प्राधिकार्‍याने जारी केलेले {category} प्रमाणपत्र)'
    },
    income: {
      name: 'Income Certificate',
      description: 'वार्षिक कौटुंबिक उत्पन्नाचे स्वयं-घोषणापत्र',
      fullName: 'Income Certificate / वार्षिक कौटुंबिक उत्पन्नाचे स्वयं-घोषणापत्र'
    },
    dpr: {
      name: 'Detailed Project Report (DPR)',
      description: 'यंत्रसामग्री, कच्चा माल आणि रोख प्रवाह तपशील',
      fullName: 'Detailed Project Report (DPR) - यंत्रसामग्री, कच्चा माल आणि रोख प्रवाह तपशील'
    },
    quotations: {
      name: 'Machinery / Equipment Quotations',
      description: 'पडताळणी केलेल्या पुरवठादारांकडून पावत्या',
      fullName: 'Machinery / Equipment Quotations आणि पडताळणी केलेल्या पुरवठादारांकडून पावत्या'
    },
    land: {
      name: 'Premises Proof',
      description: 'भाडे/भाडेपट्टा करार किंवा जमीन मालकी दस्तऐवज',
      fullName: 'Premises Proof (भाडे/भाडेपट्टा करार किंवा जमीन मालकी दस्तऐवज)'
    },
    bank: {
      name: 'Bank Statement',
      description: 'प्रवर्तकाचे भांडवल दर्शवणारे मागील ६ महिन्यांचे बँक स्टेटमेंट',
      fullName: 'Bank Statement (प्रवर्तकाचे भांडवल दर्शवणारे मागील ६ महिन्यांचे बँक स्टेटमेंट)'
    },
    pmegp_doc_0: {
      name: 'Aadhaar Card आणि PAN Card',
      description: 'अर्जदाराची ओळख आणि कर पडताळणी',
      fullName: 'Aadhaar Card आणि PAN Card'
    },
    pmegp_doc_1: {
      name: 'Social Category / जात प्रमाणपत्र',
      description: 'SC, ST, OBC अनुदानासाठी',
      fullName: 'Social Category / जात प्रमाणपत्र (SC, ST, OBC अनुदानासाठी)'
    },
    pmegp_doc_2: {
      name: 'Detailed Project Report (DPR)',
      description: 'साधनसामग्री खर्च अंदाजासह',
      fullName: 'Detailed Project Report (DPR) - साधनसामग्री खर्च अंदाजासह'
    },
    pmegp_doc_3: {
      name: 'Rural Area Certificate',
      description: 'ग्रामपंचायतीकडून ग्रामीण क्षेत्र प्रमाणपत्र (ग्रामीण अनुदानासाठी)',
      fullName: 'Rural Area Certificate - ग्रामपंचायतीकडून ग्रामीण क्षेत्र प्रमाणपत्र'
    },
    pmegp_doc_4: {
      name: 'Educational Qualification Certificate',
      description: '₹१० लाखांवरील प्रकल्पांसाठी किमान ८वी उत्तीर्ण',
      fullName: 'Educational Qualification Certificate (₹१० लाखांवरील प्रकल्पांसाठी किमान ८वी उत्तीर्ण)'
    },
    standup_doc_0: {
      name: 'Proof of Identity & Address',
      description: 'Aadhaar, पासपोर्ट, मतदार ओळखपत्र',
      fullName: 'Proof of Identity & Address (Aadhaar, पासपोर्ट, मतदार ओळखपत्र)'
    },
    standup_doc_1: {
      name: 'SC/ST Certificate',
      description: 'SC/ST कोट्याअंतर्गत अर्जासाठी',
      fullName: 'SC/ST Certificate (SC/ST कोट्याअंतर्गत अर्जासाठी)'
    },
    standup_doc_2: {
      name: 'Comprehensive Detailed Project Report (DPR)',
      description: '५ वर्षांच्या रोख प्रवाह अंदाजासह',
      fullName: 'Comprehensive Detailed Project Report (DPR) - रोख प्रवाह अंदाजासह'
    },
    standup_doc_3: {
      name: 'Equipment Quotations & Invoices',
      description: 'यंत्रसामग्री किंवा व्यावसायिक वाहनांचे कोटेशन',
      fullName: 'यंत्रसामग्री किंवा व्यावसायिक वाहनांचे प्रोफॉर्मा इनव्हॉइस आणि कोटेशन'
    },
    standup_doc_4: {
      name: 'Statutory Clearances & NOC',
      description: 'प्रदूषण नियंत्रण मंडळ NOC / महापालिका परवाना',
      fullName: 'प्रदूषण नियंत्रण मंडळ NOC / महापालिका परवाना'
    },
    nsfdc_doc_0: {
      name: 'Valid SC Caste Certificate',
      description: 'तहसीलदार/SDM द्वारे जारी केलेले वैध SC प्रमाणपत्र',
      fullName: 'तहसीलदार/SDM द्वारे जारी केलेले वैध SC प्रमाणपत्र'
    },
    nsfdc_doc_1: {
      name: 'Income Certificate',
      description: 'वार्षिक कौटुंबिक उत्पन्न ₹३,००,००० च्या आत असल्याचा पुरावा',
      fullName: 'वार्षिक कौटुंबिक उत्पन्न ₹३,००,००० च्या आत असणारे Income Certificate'
    },
    nsfdc_doc_2: {
      name: 'Project Profile & Machinery Quotations',
      description: 'यंत्रसामग्री दरपत्रक आणि प्रकल्प माहिती',
      fullName: 'Project Profile आणि यंत्रसामग्री दरपत्रक'
    },
    nsfdc_doc_3: {
      name: 'Proof of Business Premises',
      description: 'कार्यस्थळाचा भाडेकरार किंवा मालकी दस्तऐवज',
      fullName: 'कार्यस्थळाचा भाडेकरार किंवा जागा मालकी पुरावा (Premises Proof)'
    },
    nbcfdc_doc_0: {
      name: 'OBC / EWS Certificate',
      description: 'नॉन-क्रिमी लेयर प्रमाणपत्र',
      fullName: 'OBC / EWS नॉन-क्रिमी लेयर प्रमाणपत्र'
    },
    nbcfdc_doc_1: {
      name: 'Family Income Certificate',
      description: 'वार्षिक उत्पन्न ₹३,००,००० मर्यादेत असणारा दाखला',
      fullName: 'वार्षिक उत्पन्न ₹३,००,००० मर्यादेत असणारे Family Income Certificate'
    },
    nbcfdc_doc_2: {
      name: 'Commercial Driving License',
      description: 'व्यावसायिक वाहन चालक परवाना (LMV / ट्रान्सपोर्ट वर्ग)',
      fullName: 'वैध Commercial Driving License (LMV / ट्रान्सपोर्ट)'
    },
    nbcfdc_doc_3: {
      name: 'Vehicle Proforma Invoice',
      description: 'अधिकृत विक्रेत्याकडून वाहन प्रोफॉर्मा इनव्हॉइस',
      fullName: 'अधिकृत विक्रेत्याकडून वाहन प्रोफॉर्मा इनव्हॉइस'
    },
    nbcfdc_doc_4: {
      name: 'RTO Clearance / Route Permit',
      description: 'रूट परमिट / RTO प्राथमिक मंजुरी',
      fullName: 'रूट परमिट / RTO प्राथमिक मंजुरी'
    },
    mahila_doc_0: {
      name: 'Aadhaar Card & Photo ID',
      description: 'महिला अर्जदाराचे ओळखपत्र',
      fullName: 'महिला अर्जदाराचे Aadhaar Card व फोटो ओळखपत्र'
    },
    mahila_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'महसूल प्राधिकार्‍याकडून मिळालेले',
      fullName: 'OBC / EWS प्रमाणपत्र'
    },
    mahila_doc_2: {
      name: 'Income Certificate',
      description: 'कौटुंबिक वार्षिक उत्पन्न ₹१,५०,००० पेक्षा जास्त नसण्याचा दाखला',
      fullName: 'कौटुंबिक वार्षिक उत्पन्न ₹१,५०,००० पेक्षा जास्त नसणारे Income Certificate'
    },
    mahila_doc_3: {
      name: 'Bank Passbook Copy',
      description: 'जन धन किंवा बचत बँक खात्याच्या पासबुकची प्रत',
      fullName: 'जन धन किंवा नियमित बचत बँक खात्याचे Bank Passbook'
    },
    mahila_doc_4: {
      name: 'SHG Membership Certificate',
      description: 'स्वयं सहाय्यता गट (SHG) सदस्यत्व प्रमाणपत्र',
      fullName: 'स्वयं सहाय्यता गट (SHG) सदस्यत्व प्रमाणपत्र किंवा स्वयं-घोषणा'
    },
    ambedkar_doc_0: {
      name: 'Admission Proof',
      description: 'उच्च शिक्षण अभ्यासक्रमाचे प्रवेश पत्र',
      fullName: 'उच्च शिक्षण अभ्यासक्रमाचे प्रवेश पत्र (Admission Proof)'
    },
    ambedkar_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'सक्षम प्राधिकार्‍याकडून समाज प्रमाणपत्र',
      fullName: 'OBC / EWS प्रमाणपत्र'
    },
    ambedkar_doc_2: {
      name: 'Family Income Certificate',
      description: 'कौटुंबिक उत्पन्न ₹८.०० लाख/वर्ष मर्यादेत',
      fullName: 'कौटुंबिक उत्पन्न ₹८.०० लाख/वर्ष मर्यादेत असणारे Income Certificate'
    },
    ambedkar_doc_3: {
      name: 'Education Loan Sanction Letter',
      description: 'IBA शैक्षणिक कर्ज योजनेअंतर्गत बँक मंजुरी पत्र',
      fullName: 'IBA शैक्षणिक कर्ज योजनेअंतर्गत बँक मंजुरी पत्र'
    }
  },
  gu: {
    aadhaar: {
      name: 'Aadhaar Card',
      description: 'ઓળખ અને ઉંમરનો પુરાવો, મોબાઇલ લિંક સાથે',
      fullName: 'Aadhaar Card (ઓળખ અને ઉંમરનો પુરાવો, મોબાઇલ લિંક સાથે)'
    },
    pan: {
      name: 'PAN Card',
      description: 'આવકવેરા અને બેંકિંગ કેવાયસી',
      fullName: 'PAN Card (આવકવેરા અને બેંકિંગ કેવાયસી)'
    },
    residence: {
      name: 'Proof of Residence',
      description: 'ચૂંટણી કાર્ડ / રહેઠાણનો પુરાવો / વીજળી બિલ',
      fullName: 'Proof of Residence (ચૂંટણી કાર્ડ / રહેઠાણનો પુરાવો / વીજળી બિલ)'
    },
    photos: {
      name: 'Passport Size Photographs',
      description: 'ઉદ્યોગસાહસિકના 3 પાસપોર્ટ સાઇઝ ફોટા',
      fullName: 'Passport Size Photographs (ઉદ્યોગસાહસિકના 3 પાસપોર્ટ સાઇઝ ફોટા)'
    },
    caste: {
      name: 'Category Certificate',
      description: 'સક્ષમ સત્તાધિકારી દ્વારા જારી કરાયેલ {category} પ્રમાણપત્ર',
      fullName: 'Category Certificate (સક્ષમ સત્તાધિકારી દ્વારા જારી કરાયેલ {category} પ્રમાણપત્ર)'
    },
    income: {
      name: 'Income Certificate',
      description: 'વાર્ષિક પારિવારિક આવકનું સ્વ-ઘોષણાપત્ર',
      fullName: 'Income Certificate / વાર્ષિક પારિવારિક આવકનું સ્વ-ઘોષણાપત્ર'
    },
    dpr: {
      name: 'Detailed Project Report (DPR)',
      description: 'મશીનરી, કાચો માલ અને કેશફ્લો વિગતો',
      fullName: 'Detailed Project Report (DPR) - મશીનરી, કાચો માલ અને કેશફ્લો વિગતો'
    },
    quotations: {
      name: 'Machinery / Equipment Quotations',
      description: 'ચકાસાયેલ સપ્લાયર્સ પાસેથી ઇન્વૉઇસ',
      fullName: 'Machinery / Equipment Quotations અને ચકાસાયેલ સપ્લાયર્સ પાસેથી ઇન્વૉઇસ'
    },
    land: {
      name: 'Premises Proof',
      description: 'ભાડા/લીઝ કરાર અથવા જમીન માલિકીનો રેકોર્ડ',
      fullName: 'Premises Proof (ભાડા/લીઝ કરાર અથવા જમીન માલિકીનો રેકોર્ડ)'
    },
    bank: {
      name: 'Bank Statement',
      description: 'ઉદ્યોગસાહસિકની મૂડી દર્શાવતું છેલ્લા 6 મહિનાનું બેંક સ્ટેટમેન્ટ',
      fullName: 'Bank Statement (ઉદ્યોગસાહસિકની મૂડી દર્શાવતું છેલ્લા 6 મહિનાનું બેંક સ્ટેટમેન્ટ)'
    },
    pmegp_doc_0: {
      name: 'Aadhaar Card અને PAN Card',
      description: 'અરજદારની ઓળખ અને ટેક્સ ચકાસણી',
      fullName: 'Aadhaar Card અને PAN Card'
    },
    pmegp_doc_1: {
      name: 'Social Category / જાતિ પ્રમાણપત્ર',
      description: 'SC, ST, OBC સબસિડી માટે',
      fullName: 'Social Category / જાતિ પ્રમાણપત્ર (SC, ST, OBC સબસિડી માટે)'
    },
    pmegp_doc_2: {
      name: 'Detailed Project Report (DPR)',
      description: 'સાધન ખર્ચ અંદાજ સાથે',
      fullName: 'Detailed Project Report (DPR) - સાધન ખર્ચ અંદાજ સાથે'
    },
    pmegp_doc_3: {
      name: 'Rural Area Certificate',
      description: 'ગ્રામ પંચાયતનું ગ્રામીણ વિસ્તાર પ્રમાણપત્ર',
      fullName: 'Rural Area Certificate - ગ્રામ પંચાયતનું ગ્રામીણ વિસ્તાર પ્રમાણપત્ર'
    },
    pmegp_doc_4: {
      name: 'Educational Qualification Certificate',
      description: '₹10 લાખથી વધુના પ્રોજેક્ટ માટે લઘુત્તમ 8મું પાસ',
      fullName: 'Educational Qualification Certificate (₹10 લાખથી વધુના પ્રોજેક્ટ માટે લઘુત્તમ 8મું પાસ)'
    },
    standup_doc_0: {
      name: 'Proof of Identity & Address',
      description: 'Aadhaar, પાસપોર્ટ, ચૂંટણી કાર્ડ',
      fullName: 'Proof of Identity & Address (Aadhaar, પાસપોર્ટ, ચૂંટણી કાર્ડ)'
    },
    standup_doc_1: {
      name: 'SC/ST Certificate',
      description: 'SC/ST ક્વોટા હેઠળ અરજી માટે',
      fullName: 'SC/ST Certificate (SC/ST ક્વોટા હેઠળ અરજી માટે)'
    },
    standup_doc_2: {
      name: 'Comprehensive Detailed Project Report (DPR)',
      description: '5 વર્ષના કેશફ્લો અંદાજ સાથે',
      fullName: 'Comprehensive Detailed Project Report (DPR) - કેશફ્લો અંદાજ સાથે'
    },
    standup_doc_3: {
      name: 'Equipment Quotations & Invoices',
      description: 'મશીનરી અથવા કોમર્શિયલ વાહનોના કોટેશન',
      fullName: 'મશીનરી અથવા કોમર્શિયલ વાહનોના પ્રોફોર્મા ઇન્વૉઇસ અને કોટેશન'
    },
    standup_doc_4: {
      name: 'Statutory Clearances & NOC',
      description: 'પ્રદૂષણ નિયંત્રણ બોર્ડ NOC / મ્યુનિસિપલ લાઇસન્સ',
      fullName: 'પ્રદૂષણ નિયંત્રણ બોર્ડ NOC / મ્યુનિસિપલ લાઇસન્સ'
    },
    nsfdc_doc_0: {
      name: 'Valid SC Caste Certificate',
      description: 'મામલતદાર/SDM દ્વારા જારી કરાયેલ માન્ય SC પ્રમાણપત્ર',
      fullName: 'મામલતદાર/SDM દ્વારા જારી કરાયેલ માન્ય SC પ્રમાણપત્ર'
    },
    nsfdc_doc_1: {
      name: 'Income Certificate',
      description: 'વાર્ષિક આવક ₹3,00,000 ની અંદર હોવાનો પુરાવો',
      fullName: 'વાર્ષિક પારિવારિક આવક ₹3,00,000 ની અંદર દર્શાવતું Income Certificate'
    },
    nsfdc_doc_2: {
      name: 'Project Profile & Machinery Quotations',
      description: 'મશીનરી કોટેશન અને પ્રોજેક્ટ પ્રોફાઇલ',
      fullName: 'Project Profile અને મશીનરી કોટેશન'
    },
    nsfdc_doc_3: {
      name: 'Proof of Business Premises',
      description: 'કામકાજના સ્થળનો ભાડા કરાર અથવા માલિકીનો પુરાવો',
      fullName: 'કામકાજના સ્થળનો ભાડા કરાર અથવા માલિકીનો પુરાવો (Premises Proof)'
    },
    nbcfdc_doc_0: {
      name: 'OBC / EWS Certificate',
      description: 'નોન-ક્રીમી લેયર પ્રમાણપત્ર',
      fullName: 'OBC / EWS નોન-ક્રીમી લેયર પ્રમાણપત્ર'
    },
    nbcfdc_doc_1: {
      name: 'Family Income Certificate',
      description: 'વાર્ષિક આવક ₹3,00,000 મર્યાદામાં',
      fullName: 'વાર્ષિક આવક ₹3,00,000 મર્યાદામાં Family Income Certificate'
    },
    nbcfdc_doc_2: {
      name: 'Commercial Driving License',
      description: 'કોમર્શિયલ ડ્રાઇવિંગ લાયસન્સ (LMV / ટ્રાન્સપોર્ટ કેટેગરી)',
      fullName: 'માન્ય Commercial Driving License (LMV / ટ્રાન્સપોર્ટ)'
    },
    nbcfdc_doc_3: {
      name: 'Vehicle Proforma Invoice',
      description: 'ડીલરશીપ પાસેથી વાહન પ્રોફોર્મા ઇન્વૉઇસ',
      fullName: 'ડીલરશીપ પાસેથી વાહન પ્રોફોર્મા ઇન્વૉઇસ'
    },
    nbcfdc_doc_4: {
      name: 'RTO Clearance / Route Permit',
      description: 'રૂટ પરમિટ / RTO પ્રારંભિક મંજૂરી',
      fullName: 'રૂટ પરમિટ / RTO પ્રારંભિક મંજૂરી'
    },
    mahila_doc_0: {
      name: 'Aadhaar Card & Photo ID',
      description: 'મહિલા અરજદારનું ફોટો ઓળખકાર્ડ',
      fullName: 'મહિલા અરજદારનું Aadhaar Card અને ફોટો આઈડી'
    },
    mahila_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'મહેસૂલ અધિકારી દ્વારા જારી કરાયેલ',
      fullName: 'OBC / EWS પ્રમાણપત્ર'
    },
    mahila_doc_2: {
      name: 'Income Certificate',
      description: 'પારિવારિક વાર્ષિક આવક ₹1,50,000 થી વધુ ન હોવાનો દાખલો',
      fullName: 'પારિવારિક વાર્ષિક આવક ₹1,50,000 થી વધુ ન હોવાનું Income Certificate'
    },
    mahila_doc_3: {
      name: 'Bank Passbook Copy',
      description: 'જન ધન અથવા બચત બેંક ખાતા પાસબુકની નકલ',
      fullName: 'જન ધન અથવા નિયમિત બચત ખાતાની Bank Passbook નકલ'
    },
    mahila_doc_4: {
      name: 'SHG Membership Certificate',
      description: 'સ્વ-સહાય જૂથ (SHG) સભ્યપદ પ્રમાણપત્ર',
      fullName: 'સ્વ-સહાય જૂથ (SHG) સભ્યપદ પ્રમાણપત્ર અથવા સ્વ-ઘોષણા'
    },
    ambedkar_doc_0: {
      name: 'Admission Proof',
      description: 'ઉચ્ચ શિક્ષણ અભ્યાસક્રમનું પ્રવેશ પત્ર',
      fullName: 'ઉચ્ચ શિક્ષણ અભ્યાસક્રમનું પ્રવેશ પત્ર (Admission Proof)'
    },
    ambedkar_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'સક્ષમ સત્તામંડળનું જાતિ પ્રમાણપત્ર',
      fullName: 'OBC / EWS પ્રમાણપત્ર'
    },
    ambedkar_doc_2: {
      name: 'Family Income Certificate',
      description: 'પારિવારિક આવક ₹8.00 લાખ/વર્ષની અંદર',
      fullName: 'પારિવારિક આવક ₹8.00 લાખ/વર્ષની અંદર Income Certificate'
    },
    ambedkar_doc_3: {
      name: 'Education Loan Sanction Letter',
      description: 'IBA એજ્યુકેશન લોન સ્કીમ હેઠળ બેંક મંજૂરી પત્ર',
      fullName: 'IBA એજ્યુકેશન લોન સ્કીમ હેઠળ બેંક મંજૂરી પત્ર'
    }
  },
  ta: {
    aadhaar: {
      name: 'Aadhaar Card',
      description: 'அடையாளம் மற்றும் வயது சான்று, மொபைல் இணைப்புடன்',
      fullName: 'Aadhaar Card (அடையாளம் மற்றும் வயது சான்று, மொபைல் இணைப்புடன்)'
    },
    pan: {
      name: 'PAN Card',
      description: 'வருமான வரி மற்றும் வங்கி கேஒய்சி',
      fullName: 'PAN Card (வருமான வரி மற்றும் வங்கி கேஒய்சி)'
    },
    residence: {
      name: 'Proof of Residence',
      description: 'வாக்காளர் அட்டை / இருப்பிடச் சான்றிதழ் / மின் கட்டண ரசீது',
      fullName: 'Proof of Residence (வாக்காளர் அட்டை / இருப்பிடச் சான்றிதழ் / மின் கட்டண ரசீது)'
    },
    photos: {
      name: 'Passport Size Photographs',
      description: 'தொழில்முனைவோரின் 3 பாஸ்போர்ட் அளவு புகைப்படங்கள்',
      fullName: 'Passport Size Photographs (தொழில்முனைவோரின் 3 பாஸ்போர்ட் அளவு புகைப்படங்கள்)'
    },
    caste: {
      name: 'Category Certificate',
      description: 'தகுதிவாய்ந்த அதிகாரியால் வழங்கப்பட்ட {category} சான்றிதழ்',
      fullName: 'Category Certificate (தகுதிவாய்ந்த அதிகாரியால் வழங்கப்பட்ட {category} சான்றிதழ்)'
    },
    income: {
      name: 'Income Certificate',
      description: 'ஆண்டு குடும்ப வருமான சுய பிரகடனம்',
      fullName: 'Income Certificate / ஆண்டு குடும்ப வருமான சுய பிரகடனம்'
    },
    dpr: {
      name: 'Detailed Project Report (DPR)',
      description: 'இயந்திரங்கள், மூலப்பொருட்கள் மற்றும் பணப்புழக்க விவரம்',
      fullName: 'Detailed Project Report (DPR) - இயந்திரங்கள், மூலப்பொருட்கள் மற்றும் பணப்புழக்க விவரம்'
    },
    quotations: {
      name: 'Machinery / Equipment Quotations',
      description: 'சரிபார்க்கப்பட்ட சப்ளையர்களிடமிருந்து விலைப்பட்டியல்கள்',
      fullName: 'Machinery / Equipment Quotations மற்றும் சரிபார்க்கப்பட்ட சப்ளையர்களிடமிருந்து விலைப்பட்டியல்கள்'
    },
    land: {
      name: 'Premises Proof',
      description: 'வாடகை/குத்தகை ஒப்பந்தம் அல்லது நில உரிமை ஆவணம்',
      fullName: 'Premises Proof (வாடகை/குத்தகை ஒப்பந்தம் அல்லது நில உரிமை ஆவணம்)'
    },
    bank: {
      name: 'Bank Statement',
      description: 'தொழில்முனைவோர் பங்கை காட்டும் கடந்த 6 மாத வங்கி கணக்கு அறிக்கை',
      fullName: 'Bank Statement (தொழில்முனைவோர் பங்கை காட்டும் கடந்த 6 மாத வங்கி கணக்கு அறிக்கை)'
    },
    pmegp_doc_0: {
      name: 'Aadhaar Card மற்றும் PAN Card',
      description: 'விண்ணப்பதாரர் அடையாளம் மற்றும் வரி சரிபார்ப்பு',
      fullName: 'Aadhaar Card மற்றும் PAN Card'
    },
    pmegp_doc_1: {
      name: 'Social Category / சாதிச் சான்றிதழ்',
      description: 'SC, ST, OBC மானியத்திற்கு',
      fullName: 'Social Category / சாதிச் சான்றிதழ் (SC, ST, OBC மானியத்திற்கு)'
    },
    pmegp_doc_2: {
      name: 'Detailed Project Report (DPR)',
      description: 'உபகரண செலவு மதிப்பீடுகளுடன்',
      fullName: 'Detailed Project Report (DPR) - உபகரண செலவு மதிப்பீடுகளுடன்'
    },
    pmegp_doc_3: {
      name: 'Rural Area Certificate',
      description: 'கிராம பஞ்சாயத்திலிருந்து ஊரகப் பகுதி சான்றிதழ்',
      fullName: 'Rural Area Certificate - கிராம பஞ்சாயத்திலிருந்து ஊரகப் பகுதி சான்றிதழ்'
    },
    pmegp_doc_4: {
      name: 'Educational Qualification Certificate',
      description: '₹10 லட்சத்திற்கு மேற்பட்ட திட்டங்களுக்கு குறைந்தபட்சம் 8-ஆம் வகுப்பு தேர்ச்சி',
      fullName: 'Educational Qualification Certificate (₹10 லட்சத்திற்கு மேற்பட்ட திட்டங்களுக்கு குறைந்தபட்சம் 8-ஆம் வகுப்பு தேர்ச்சி)'
    },
    standup_doc_0: {
      name: 'Proof of Identity & Address',
      description: 'Aadhaar, பாஸ்போர்ட், வாக்காளர் அட்டை',
      fullName: 'Proof of Identity & Address (Aadhaar, பாஸ்போர்ட், வாக்காளர் அட்டை)'
    },
    standup_doc_1: {
      name: 'SC/ST Certificate',
      description: 'SC/ST ஒதுக்கீட்டின் கீழ் விண்ணப்பிக்க',
      fullName: 'SC/ST Certificate (SC/ST ஒதுக்கீட்டின் கீழ் விண்ணப்பிக்க)'
    },
    standup_doc_2: {
      name: 'Comprehensive Detailed Project Report (DPR)',
      description: '5 ஆண்டுகால பணப்புழக்க திட்டமிடலுடன்',
      fullName: 'Comprehensive Detailed Project Report (DPR) - பணப்புழக்க திட்டமிடலுடன்'
    },
    standup_doc_3: {
      name: 'Equipment Quotations & Invoices',
      description: 'இயந்திரங்கள் அல்லது வணிக வாகனங்களுக்கான விலைப்பட்டியல்',
      fullName: 'இயந்திரங்கள் அல்லது வணிக வாகனங்களுக்கான விலைப்பட்டியல் மற்றும் மேற்கோள்'
    },
    standup_doc_4: {
      name: 'Statutory Clearances & NOC',
      description: 'மாசு கட்டுப்பாட்டு வாரிய NOC / நகராட்சி உரிமம்',
      fullName: 'மாசு கட்டுப்பாட்டு வாரிய NOC / நகராட்சி உரிமம்'
    },
    nsfdc_doc_0: {
      name: 'Valid SC Caste Certificate',
      description: 'வட்டாட்சியர்/SDM வழங்கிய செல்லுபடியாகும் SC சான்றிதழ்',
      fullName: 'வட்டாட்சியர்/SDM வழங்கிய செல்லுபடியாகும் SC சான்றிதழ்'
    },
    nsfdc_doc_1: {
      name: 'Income Certificate',
      description: 'வருடாந்திர வருமானம் ₹3,00,000-க்குள் இருப்பதை உறுதிப்படுத்தும் சான்று',
      fullName: 'வருடாந்திர குடும்ப வருமானம் ₹3,00,000-க்குள் உள்ள Income Certificate'
    },
    nsfdc_doc_2: {
      name: 'Project Profile & Machinery Quotations',
      description: 'இயந்திர விலைப்பட்டியல் மற்றும் திட்ட விவரம்',
      fullName: 'Project Profile மற்றும் இயந்திர விலைப்பட்டியல்'
    },
    nsfdc_doc_3: {
      name: 'Proof of Business Premises',
      description: 'தொழிலிட வாடகை ஒப்பந்தம் அல்லது நில உரிமை ஆவணம்',
      fullName: 'தொழிலிட வாடகை ஒப்பந்தம் அல்லது உரிமை ஆவணம் (Premises Proof)'
    },
    nbcfdc_doc_0: {
      name: 'OBC / EWS Certificate',
      description: 'கிரீமிலேயர் அற்ற சான்றிதழ்',
      fullName: 'OBC / EWS கிரீமிலேயர் அற்ற சான்றிதழ்'
    },
    nbcfdc_doc_1: {
      name: 'Family Income Certificate',
      description: 'ஆண்டு வருமானம் ₹3,00,000 வரம்பிற்குள்',
      fullName: 'ஆண்டு வருமானம் ₹3,00,000 வரம்பிற்குள் உள்ள Family Income Certificate'
    },
    nbcfdc_doc_2: {
      name: 'Commercial Driving License',
      description: 'வணிக ஓட்டுநர் உரிமம் (LMV / போக்குவரத்து பிரிவு)',
      fullName: 'செல்லுபடியாகும் Commercial Driving License (LMV / போக்குவரத்து)'
    },
    nbcfdc_doc_3: {
      name: 'Vehicle Proforma Invoice',
      description: 'அங்கீகரிக்கப்பட்ட விற்பனையாளரிடமிருந்து வாகன விலை மேற்கோள்',
      fullName: 'அங்கீகரிக்கப்பட்ட விற்பனையாளரிடமிருந்து வாகன விலை மேற்கோள்'
    },
    nbcfdc_doc_4: {
      name: 'RTO Clearance / Route Permit',
      description: 'வழித்தட அனுமதி / RTO ஆரம்ப அனுமதி',
      fullName: 'வழித்தட அனுமதி / RTO ஆரம்ப அனுமதி'
    },
    mahila_doc_0: {
      name: 'Aadhaar Card & Photo ID',
      description: 'பெண் விண்ணப்பதாரரின் புகைப்பட அடையாள அட்டை',
      fullName: 'பெண் விண்ணப்பதாரரின் Aadhaar Card மற்றும் புகைப்பட அடையாள அட்டை'
    },
    mahila_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'வருவாய்த்துறை அதிகாரியால் வழங்கப்பட்டது',
      fullName: 'OBC / EWS சான்றிதழ்'
    },
    mahila_doc_2: {
      name: 'Income Certificate',
      description: 'குடும்ப ஆண்டு வருமானம் ₹1,50,000 மிகாமல் இருப்பதற்கான சான்று',
      fullName: 'குடும்ப ஆண்டு வருமானம் ₹1,50,000 மிகாமல் உள்ள Income Certificate'
    },
    mahila_doc_3: {
      name: 'Bank Passbook Copy',
      description: 'ஜன் தன் அல்லது சேமிப்பு வங்கி கணக்கு புத்தக நகல்',
      fullName: 'ஜன் தன் அல்லது வழக்கமான சேமிப்பு Bank Passbook நகல்'
    },
    mahila_doc_4: {
      name: 'SHG Membership Certificate',
      description: 'சுயஉதவிக் குழு (SHG) உறுப்பினர் சான்றிதழ்',
      fullName: 'சுயஉதவிக் குழு (SHG) உறுப்பினர் சான்றிதழ் அல்லது சுய அறிவிப்பு'
    },
    ambedkar_doc_0: {
      name: 'Admission Proof',
      description: 'உயர்கல்வி சேர்க்கை கடிதம்',
      fullName: 'உயர்கல்வி சேர்க்கை கடிதம் (Admission Proof)'
    },
    ambedkar_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'தகுதிவாய்ந்த அதிகாரியால் வழங்கப்பட்ட சமூகச் சான்றிதழ்',
      fullName: 'OBC / EWS சான்றிதழ்'
    },
    ambedkar_doc_2: {
      name: 'Family Income Certificate',
      description: 'குடும்ப வருமானம் ₹8.00 லட்சம்/ஆண்டுக்குள்',
      fullName: 'குடும்ப வருமானம் ₹8.00 லட்சம்/ஆண்டுக்குள் உள்ள Income Certificate'
    },
    ambedkar_doc_3: {
      name: 'Education Loan Sanction Letter',
      description: 'IBA கல்வி கடன் திட்டத்தின் கீழ் வங்கி ஒப்புதல் கடிதம்',
      fullName: 'IBA கல்வி கடன் திட்டத்தின் கீழ் வங்கி ஒப்புதல் கடிதம்'
    }
  },
  te: {
    aadhaar: {
      name: 'Aadhaar Card',
      description: 'గుర్తింపు మరియు వయస్సు ధృవీకరణ, మొబైల్ లింక్‌తో',
      fullName: 'Aadhaar Card (గుర్తింపు మరియు వయస్సు ధృవీకరణ, మొబైల్ లింక్‌తో)'
    },
    pan: {
      name: 'PAN Card',
      description: 'ఆదాయపు పన్ను మరియు బ్యాంకింగ్ కేవైసీ',
      fullName: 'PAN Card (ఆదాయపు పన్ను మరియు బ్యాంకింగ్ కేవైసీ)'
    },
    residence: {
      name: 'Proof of Residence',
      description: 'ఓటరు గుర్తింపు కార్డు / నివాస ధృవీకరణ పత్రం / విద్యుత్ బిల్లు',
      fullName: 'Proof of Residence (ఓటరు గుర్తింపు కార్డు / నివాస ధృవీకరణ పత్రం / విద్యుత్ బిల్లు)'
    },
    photos: {
      name: 'Passport Size Photographs',
      description: 'ప్రವರ್తకుడి 3 పాస్‌పోర్ట్ సైజు ఫోటోలు',
      fullName: 'Passport Size Photographs (ప్రವರ್తకుడి 3 పాస్‌పోర్ట్ సైజు ఫోటోలు)'
    },
    caste: {
      name: 'Category Certificate',
      description: 'సంబంధిత అధికారి జారీ చేసిన {category} ధృవీకరణ పత్రం',
      fullName: 'Category Certificate (సంబంధిత అధికారి జారీ చేసిన {category} ధృవీకరణ పత్రం)'
    },
    income: {
      name: 'Income Certificate',
      description: 'వార్షిక కుటుంబ ఆదాయ స్వీయ ప్రకటన పత్రం',
      fullName: 'Income Certificate / వార్షిక కుటుంబ ఆదాయ స్వీయ ప్రకటన పత్రం'
    },
    dpr: {
      name: 'Detailed Project Report (DPR)',
      description: 'యంత్రాలు, ముడి పదార్థాలు మరియు నగదు ప్రవాహ వివరాలు',
      fullName: 'Detailed Project Report (DPR) - యంత్రాలు, ముడి పదార్థాలు మరియు నగదు ప్రవాహ వివరాలు'
    },
    quotations: {
      name: 'Machinery / Equipment Quotations',
      description: 'ధృవీకరించబడిన సరఫరాదారుల నుండి కొటేషన్లు',
      fullName: 'Machinery / Equipment Quotations మరియు ధృవీకరించబడిన సరఫరాదారుల నుండి కొటేషన్లు'
    },
    land: {
      name: 'Premises Proof',
      description: 'అద్దె/లీజు ఒప్పందం లేదా భూమి యాజమాన్య పత్రం',
      fullName: 'Premises Proof (అద్దె/లీజు ఒప్పందం లేదా భూమి యాజమాన్య పత్రం)'
    },
    bank: {
      name: 'Bank Statement',
      description: 'ప్రమోటర్ వాటాను చూపే గత 6 నెలల బ్యాంక్ స్టేట్‌మెంట్',
      fullName: 'Bank Statement (ప్రమోటర్ వాటాను చూపే గత 6 నెలల బ్యాంక్ స్టేట్‌మెంట్)'
    },
    pmegp_doc_0: {
      name: 'Aadhaar Card మరియు PAN Card',
      description: 'దరఖాస్తుదారు గుర్తింపు మరియు పన్ను ధృవీకరణ',
      fullName: 'Aadhaar Card మరియు PAN Card'
    },
    pmegp_doc_1: {
      name: 'Social Category / కుల ధృవీకరణ పత్రం',
      description: 'SC, ST, OBC రాయితీ కోసం',
      fullName: 'Social Category / కుల ధృవీకరణ పత్రం (SC, ST, OBC రాయితీ కోసం)'
    },
    pmegp_doc_2: {
      name: 'Detailed Project Report (DPR)',
      description: 'పరికరాల వ్యయ అంచనాలతో',
      fullName: 'Detailed Project Report (DPR) - పరికరాల వ్యయ అంచనాలతో'
    },
    pmegp_doc_3: {
      name: 'Rural Area Certificate',
      description: 'గ్రామ పంచాయతీ నుండి గ్రామీణ ప్రాంత ధృవీకరణ పత్రం',
      fullName: 'Rural Area Certificate - గ్రామ పంచాయతీ నుండి గ్రామీణ ప్రాంత ధృవీకరణ పత్రం'
    },
    pmegp_doc_4: {
      name: 'Educational Qualification Certificate',
      description: '₹10 లక్షల కంటే ఎక్కువ ప్రాజెక్టులకు కనీసం 8వ తరగతి ఉత్తీర్ణత',
      fullName: 'Educational Qualification Certificate (₹10 లక్షల కంటే ఎక్కువ ప్రాజెక్టులకు కనీసం 8వ తరగతి ఉత్తీర్ణత)'
    },
    standup_doc_0: {
      name: 'Proof of Identity & Address',
      description: 'Aadhaar, పాస్‌పోర్ట్, ఓటరు గుర్తింపు కార్డు',
      fullName: 'Proof of Identity & Address (Aadhaar, పాస్‌పోర్ట్, ఓటరు గుర్తింపు కార్డు)'
    },
    standup_doc_1: {
      name: 'SC/ST Certificate',
      description: 'SC/ST కోటా కింద దరఖాస్తు చేసుకోవడానికి',
      fullName: 'SC/ST Certificate (SC/ST కోటా కింద దరఖాస్తు చేసుకోవడానికి)'
    },
    standup_doc_2: {
      name: 'Comprehensive Detailed Project Report (DPR)',
      description: '5 సంవత్సరాల నగదు ప్రవాహ అంచనాలతో',
      fullName: 'Comprehensive Detailed Project Report (DPR) - నగదు ప్రవాహ అంచనాలతో'
    },
    standup_doc_3: {
      name: 'Equipment Quotations & Invoices',
      description: 'యంత్రాలు లేదా వాణిజ్య వాహనాల కొటేషన్లు',
      fullName: 'యంత్రాలు లేదా వాణిజ్య వాహనాల ప్రొఫార్మా ఇన్వాయిస్‌లు మరియు కొటేషన్లు'
    },
    standup_doc_4: {
      name: 'Statutory Clearances & NOC',
      description: 'కాలుష్య నియంత్రణ మండలి NOC / పురపాలక లైసెన్స్',
      fullName: 'కాలుష్య నియంత్రణ మండలి NOC / పురపాలక లైసెన్స్'
    },
    nsfdc_doc_0: {
      name: 'Valid SC Caste Certificate',
      description: 'తహశీల్దార్/SDM జారీ చేసిన చెల్లుబాటు అయ్యే SC ధృవీకరణ పత్రం',
      fullName: 'తహశీల్దార్/SDM జారీ చేసిన చెల్లుబాటు అయ్యే SC ధృవీకరణ పత్రం'
    },
    nsfdc_doc_1: {
      name: 'Income Certificate',
      description: 'వార్షిక ఆదాయం ₹3,00,000 లోపు ఉన్నట్లు ధృవీకరించే పత్రం',
      fullName: 'వార్షిక కుటుంబ ఆదాయం ₹3,00,000 లోపు ఉన్నట్లు తెలిపే Income Certificate'
    },
    nsfdc_doc_2: {
      name: 'Project Profile & Machinery Quotations',
      description: 'యంత్రాల కొటేషన్ మరియు ప్రాజెక్ట్ ప్రొఫైల్',
      fullName: 'Project Profile మరియు యంత్రాల కొటేషన్'
    },
    nsfdc_doc_3: {
      name: 'Proof of Business Premises',
      description: 'పని ప్రదేశం అద్దె ఒప్పందం లేదా యాజమాన్య పత్రం',
      fullName: 'పని ప్రదేశం అద్దె ఒప్పందం లేదా భూమి పత్రం (Premises Proof)'
    },
    nbcfdc_doc_0: {
      name: 'OBC / EWS Certificate',
      description: 'నాన్-క్రీమీ లేయర్ ధృవీకరణ పత్రం',
      fullName: 'OBC / EWS నాన్-క్రీమీ లేయర్ ధృవీకరణ పత్రం'
    },
    nbcfdc_doc_1: {
      name: 'Family Income Certificate',
      description: 'వార్షిక ఆదాయం ₹3,00,000 పరిమితిలో ఉన్నట్లు',
      fullName: 'వార్షిక ఆదాయం ₹3,00,000 పరిమితిలో ఉన్నట్లు Family Income Certificate'
    },
    nbcfdc_doc_2: {
      name: 'Commercial Driving License',
      description: 'వాణిజ్య డ్రైవింగ్ లైసెన్స్ (LMV / రవాణా విభాగం)',
      fullName: 'చెల్లుబాటు అయ్యే Commercial Driving License (LMV / రవాణా)'
    },
    nbcfdc_doc_3: {
      name: 'Vehicle Proforma Invoice',
      description: 'అధీకృత డీలర్‌షిప్ నుండి వాహన ప్రొఫార్మా ఇన్వాయిస్',
      fullName: 'అధీకృత డీలర్‌షిప్ నుండి వాహన ప్రొఫార్మా ఇన్వాయిస్'
    },
    nbcfdc_doc_4: {
      name: 'RTO Clearance / Route Permit',
      description: 'రూట్ పర్మిట్ / RTO ప్రాథమిక అనుమతి',
      fullName: 'రూట్ పర్మిట్ / RTO ప్రాథమిక అనుమతి'
    },
    mahila_doc_0: {
      name: 'Aadhaar Card & Photo ID',
      description: 'మహిళా దరఖాస్తుదారు గుర్తింపు కార్డు',
      fullName: 'మహిళా దరఖాస్తుదారు Aadhaar Card మరియు ఫోటో గుర్తింపు కార్డు'
    },
    mahila_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'రెవెన్యూ అధికారి జారీ చేసిన పత్రం',
      fullName: 'OBC / EWS ధృవీకరణ పత్రం'
    },
    mahila_doc_2: {
      name: 'Income Certificate',
      description: 'కుటుంబ వార్షిక ఆదాయం ₹1,50,000 మించలేదని ధృవీకరణ',
      fullName: 'కుటుంబ వార్షిక ఆదాయం ₹1,50,000 మించలేదని తెలిపే Income Certificate'
    },
    mahila_doc_3: {
      name: 'Bank Passbook Copy',
      description: 'జన్ ధన్ లేదా పొదుపు బ్యాంకు ఖాతా పాస్‌బుక్ కాపీ',
      fullName: 'జన్ ధన్ లేదా పొదుపు ఖాతా Bank Passbook కాపీ'
    },
    mahila_doc_4: {
      name: 'SHG Membership Certificate',
      description: 'స్వయం సహాయక సంఘం (SHG) సభ్యత్వ ధృవీకరణ పత్రం',
      fullName: 'స్వయం సహాయక సంఘం (SHG) సభ్యత్వ ధృవీకరణ పత్రం'
    },
    ambedkar_doc_0: {
      name: 'Admission Proof',
      description: 'ఉన్నత విద్యా కోర్సు అడ్మిషన్ లేఖ',
      fullName: 'ఉన్నత విద్యా కోర్సు అడ్మిషన్ లేఖ (Admission Proof)'
    },
    ambedkar_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'సంబంధిత అధికారి జారీ చేసిన వర్గ ధృవీకరణ పత్రం',
      fullName: 'OBC / EWS ధృవీకరణ పత్రం'
    },
    ambedkar_doc_2: {
      name: 'Family Income Certificate',
      description: 'కుటుంబ ఆదాయం ₹8.00 లక్షలు/సంవత్సరానికి లోబడి ఉన్నట్లు',
      fullName: 'కుటుంబ ఆదాయం ₹8.00 లక్షలు/సంవత్సరానికి లోబడి ఉన్నట్లు Income Certificate'
    },
    ambedkar_doc_3: {
      name: 'Education Loan Sanction Letter',
      description: 'IBA విద్యా రుణ పథకం కింద బ్యాంకు మంజూరు లేఖ',
      fullName: 'IBA విద్యా రుణ పథకం కింద బ్యాంకు మంజూరు లేఖ'
    }
  },
  kn: {
    aadhaar: {
      name: 'Aadhaar Card',
      description: 'ಗುರುತು ಮತ್ತು ವಯಸ್ಸಿನ ಪುರಾವೆ, ಮೊಬೈಲ್ ಲಿಂಕ್ ಹೊಂದಿರುವ',
      fullName: 'Aadhaar Card (ಗುರುತು ಮತ್ತು ವಯಸ್ಸಿನ ಪುರಾವೆ, ಮೊಬೈಲ್ ಲಿಂಕ್ ಹೊಂದಿರುವ)'
    },
    pan: {
      name: 'PAN Card',
      description: 'ಆದಾಯ ತೆರಿಗೆ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಕೆವೈಸಿ',
      fullName: 'PAN Card (ಆದಾಯ ತೆರಿಗೆ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಕೆವೈಸಿ)'
    },
    residence: {
      name: 'Proof of Residence',
      description: 'ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿ / ನಿವಾಸ ಪ್ರಮಾಣಪತ್ರ / ವಿದ್ಯುತ್ ಬಿಲ್',
      fullName: 'Proof of Residence (ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿ / ನಿವಾಸ ಪ್ರಮಾಣಪತ್ರ / ವಿದ್ಯುತ್ ಬಿಲ್)'
    },
    photos: {
      name: 'Passport Size Photographs',
      description: 'ಉದ್ಯಮಿಯ 3 ಪಾಸ್‌ಪೋರ್ಟ್ ಅಳತೆಯ ಭಾವಚಿತ್ರಗಳು',
      fullName: 'Passport Size Photographs (ಉದ್ಯಮಿಯ 3 ಪಾಸ್‌ಪೋರ್ಟ್ ಅಳತೆಯ ಭಾವಚಿತ್ರಗಳು)'
    },
    caste: {
      name: 'Category Certificate',
      description: 'ಸಕ್ಷಮ ಪ್ರಾಧಿಕಾರದಿಂದ ನೀಡಲಾದ {category} ಪ್ರಮಾಣಪತ್ರ',
      fullName: 'Category Certificate (ಸಕ್ಷಮ ಪ್ರಾಧಿಕಾರದಿಂದ ನೀಡಲಾದ {category} ಪ್ರಮಾಣಪತ್ರ)'
    },
    income: {
      name: 'Income Certificate',
      description: 'ವಾರ್ಷಿಕ ಕುಟುಂಬದ ಆದಾಯದ ಸ್ವಯಂ ಘೋಷಣೆ',
      fullName: 'Income Certificate / ವಾರ್ಷಿಕ ಕುಟುಂಬದ ಆದಾಯದ ಸ್ವಯಂ ಘೋಷಣೆ'
    },
    dpr: {
      name: 'Detailed Project Report (DPR)',
      description: 'ಯಂತ್ರೋಪಕರಣಗಳು, ಕಚ್ಚಾ ವಸ್ತುಗಳು ಮತ್ತು ನಗದು ಹರಿವಿನ ವಿವರ',
      fullName: 'Detailed Project Report (DPR) - ಯಂತ್ರೋಪಕರಣಗಳು, ಕಚ್ಚಾ ವಸ್ತುಗಳು ಮತ್ತು ನಗದು ಹರಿವಿನ ವಿವರ'
    },
    quotations: {
      name: 'Machinery / Equipment Quotations',
      description: 'ಪರಿಶೀಲಿಸಿದ ಪೂರೈಕೆದಾರರಿಂದ ಇನ್‌ವಾಯ್ಸ್‌ಗಳು',
      fullName: 'Machinery / Equipment Quotations ಮತ್ತು ಪರಿಶೀಲಿಸಿದ ಪೂರೈಕೆದಾರರಿಂದ ಇನ್‌ವಾಯ್ಸ್‌ಗಳು'
    },
    land: {
      name: 'Premises Proof',
      description: 'ಬಾಡಿಗೆ/ಗುತ್ತಿಗೆ ಒಪ್ಪಂದ ಅಥವಾ ಭೂ ಮಾಲೀಕತ್ವದ ದಾಖಲೆ',
      fullName: 'Premises Proof (ಬಾಡಿಗೆ/ಗುತ್ತಿಗೆ ಒಪ್ಪಂದ ಅಥವಾ ಭೂ ಮಾಲೀಕತ್ವದ ದಾಖಲೆ)'
    },
    bank: {
      name: 'Bank Statement',
      description: 'ಉದ್ಯಮಿಯ ಬಂಡವಾಳವನ್ನು ತೋರಿಸುವ ಕಳೆದ 6 ತಿಂಗಳ ಬ್ಯಾಂಕ್ ವಿವರ',
      fullName: 'Bank Statement (ಉದ್ಯಮಿಯ ಬಂಡವಾಳವನ್ನು ತೋರಿಸುವ ಕಳೆದ 6 ತಿಂಗಳ ಬ್ಯಾಂಕ್ ವಿವರ)'
    },
    pmegp_doc_0: {
      name: 'Aadhaar Card ಮತ್ತು PAN Card',
      description: 'ಅರ್ಜಿದಾರರ ಗುರುತು ಮತ್ತು ತೆರಿಗೆ ಪರಿಶೀಲನೆ',
      fullName: 'Aadhaar Card ಮತ್ತು PAN Card'
    },
    pmegp_doc_1: {
      name: 'Social Category / ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ',
      description: 'SC, ST, OBC ಸಬ್ಸಿಡಿಗಾಗಿ',
      fullName: 'Social Category / ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ (SC, ST, OBC ಸಬ್ಸಿಡಿಗಾಗಿ)'
    },
    pmegp_doc_2: {
      name: 'Detailed Project Report (DPR)',
      description: 'ಉಪಕರಣಗಳ ವೆಚ್ಚದ ಅಂದಾಜಿನೊಂದಿಗೆ',
      fullName: 'Detailed Project Report (DPR) - ಉಪಕರಣಗಳ ವೆಚ್ಚದ ಅಂದಾಜಿನೊಂದಿಗೆ'
    },
    pmegp_doc_3: {
      name: 'Rural Area Certificate',
      description: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿಯಿಂದ ಗ್ರಾಮೀಣ ಪ್ರದೇಶದ ಪ್ರಮಾಣಪತ್ರ',
      fullName: 'Rural Area Certificate - ಗ್ರಾಮ ಪಂಚಾಯಿತಿಯಿಂದ ಗ್ರಾಮೀಣ ಪ್ರದೇಶದ ಪ್ರಮಾಣಪತ್ರ'
    },
    pmegp_doc_4: {
      name: 'Educational Qualification Certificate',
      description: '₹10 ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಯೋಜನೆಗಳಿಗೆ ಕನಿಷ್ಠ 8ನೇ ತರಗತಿ ಉತ್ತೀರ್ಣ',
      fullName: 'Educational Qualification Certificate (₹10 ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಯೋಜನೆಗಳಿಗೆ ಕನಿಷ್ಠ 8ನೇ ತರಗತಿ ಉತ್ತೀರ್ಣ)'
    },
    standup_doc_0: {
      name: 'Proof of Identity & Address',
      description: 'Aadhaar, ಪಾಸ್‌ಪೋರ್ಟ್, ಮತದಾರರ ಚೀಟಿ',
      fullName: 'Proof of Identity & Address (Aadhaar, ಪಾಸ್‌ಪೋರ್ಟ್, ಮತದಾರರ ಚೀಟಿ)'
    },
    standup_doc_1: {
      name: 'SC/ST Certificate',
      description: 'SC/ST ಕೋಟಾದಡಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು',
      fullName: 'SC/ST Certificate (SC/ST ಕೋಟಾದಡಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು)'
    },
    standup_doc_2: {
      name: 'Comprehensive Detailed Project Report (DPR)',
      description: '5 ವರ್ಷಗಳ ನಗದು ಹರಿವಿನ ಅಂದಾಜಿನೊಂದಿಗೆ',
      fullName: 'Comprehensive Detailed Project Report (DPR) - ನಗದು ಹರಿವಿನ ಅಂದಾಜಿನೊಂದಿಗೆ'
    },
    standup_doc_3: {
      name: 'Equipment Quotations & Invoices',
      description: 'ಯಂತ್ರೋಪಕರಣಗಳು ಅಥವಾ ವಾಣಿಜ್ಯ ವಾಹನಗಳ ಕೊಟೇಶನ್',
      fullName: 'ಯಂತ್ರೋಪಕರಣಗಳು ಅಥವಾ ವಾಣಿಜ್ಯ ವಾಹನಗಳ ಪ್ರೊಫಾರ್ಮಾ ಇನ್‌ವಾಯ್ಸ್‌ಗಳು'
    },
    standup_doc_4: {
      name: 'Statutory Clearances & NOC',
      description: 'ಮಾಲಿನ್ಯ ನಿಯಂತ್ರಣ ಮಂಡಳಿ NOC / ಪುರಸಭೆ ಪರವಾನಗಿ',
      fullName: 'ಮಾಲಿನ್ಯ ನಿಯಂತ್ರಣ ಮಂಡಳಿ NOC / ಪುರಸಭೆ ಪರವಾನಗಿ'
    },
    nsfdc_doc_0: {
      name: 'Valid SC Caste Certificate',
      description: 'ತಹಶೀಲ್ದಾರ್/SDM ನೀಡಿದ ಮಾನ್ಯವಾದ SC ಪ್ರಮಾಣಪತ್ರ',
      fullName: 'ತಹಶೀಲ್ದಾರ್/SDM ನೀಡಿದ ಮಾನ್ಯವಾದ SC ಪ್ರಮಾಣಪತ್ರ'
    },
    nsfdc_doc_1: {
      name: 'Income Certificate',
      description: 'ವಾರ್ಷಿಕ ಆದಾಯ ₹3,00,000 ಒಳಗೆ ಇರುವುದನ್ನು ದೃಢೀಕರಿಸುವ ಪತ್ರ',
      fullName: 'ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ ₹3,00,000 ಒಳಗೆ ಇರುವ Income Certificate'
    },
    nsfdc_doc_2: {
      name: 'Project Profile & Machinery Quotations',
      description: 'ಯಂತ್ರೋಪಕರಣಗಳ ಕೊಟೇಶನ್ ಮತ್ತು ಯೋಜನಾ ವಿವರ',
      fullName: 'Project Profile ಮತ್ತು ಯಂತ್ರೋಪಕರಣಗಳ ಕೊಟೇಶನ್'
    },
    nsfdc_doc_3: {
      name: 'Proof of Business Premises',
      description: 'ಕಾರ್ಯಸ್ಥಳದ ಬಾಡಿಗೆ ಒಪ್ಪಂದ ಅಥವಾ ಮಾಲೀಕತ್ವದ ದಾಖಲೆ',
      fullName: 'ಕಾರ್ಯಸ್ಥಳದ ಬಾಡಿಗೆ ಒಪ್ಪಂದ ಅಥವಾ ಮಾಲೀಕತ್ವದ ದಾಖಲೆ (Premises Proof)'
    },
    nbcfdc_doc_0: {
      name: 'OBC / EWS Certificate',
      description: 'ನಾನ್-ಕ್ರೀಮಿ ಲೇಯರ್ ಪ್ರಮಾಣಪತ್ರ',
      fullName: 'OBC / EWS ನಾನ್-ಕ್ರೀಮಿ ಲೇಯರ್ ಪ್ರಮಾಣಪತ್ರ'
    },
    nbcfdc_doc_1: {
      name: 'Family Income Certificate',
      description: 'ವಾರ್ಷಿಕ ಆದಾಯ ₹3,00,000 ಮಿತಿಯೊಳಗೆ',
      fullName: 'ವಾರ್ಷಿಕ ಆದಾಯ ₹3,00,000 ಮಿತಿಯೊಳಗೆ Family Income Certificate'
    },
    nbcfdc_doc_2: {
      name: 'Commercial Driving License',
      description: 'ವಾಣಿಜ್ಯ ಚಾಲನಾ ಪರವಾನಗಿ (LMV / ಸಾರಿಗೆ ವಿಭಾಗ)',
      fullName: 'ಮಾನ್ಯವಾದ Commercial Driving License (LMV / ಸಾರಿಗೆ)'
    },
    nbcfdc_doc_3: {
      name: 'Vehicle Proforma Invoice',
      description: 'ಅಧಿಕೃತ ಡೀಲರ್‌ಶಿಪ್‌ನಿಂದ ವಾಹನ ಪ್ರೊಫಾರ್ಮಾ ಇನ್‌ವಾಯ್ಸ್',
      fullName: 'ಅಧಿಕೃತ ಡೀಲರ್‌ಶಿಪ್‌ನಿಂದ ವಾಹನ ಪ್ರೊಫಾರ್ಮಾ ಇನ್‌ವಾಯ್ಸ್'
    },
    nbcfdc_doc_4: {
      name: 'RTO Clearance / Route Permit',
      description: 'ಮಾರ್ಗ ಪರವಾನಗಿ / RTO ಪ್ರಾಥಮಿಕ ಅನುಮೋದನೆ',
      fullName: 'ಮಾರ್ಗ ಪರವಾನಗಿ / RTO ಪ್ರಾಥಮಿಕ ಅನುಮೋದನೆ'
    },
    mahila_doc_0: {
      name: 'Aadhaar Card & Photo ID',
      description: 'ಮಹಿಳಾ ಅರ್ಜಿದಾರರ ಫೋಟೋ ಗುರುತಿನ ಚೀಟಿ',
      fullName: 'ಮಹಿಳಾ ಅರ್ಜಿದಾರರ Aadhaar Card ಮತ್ತು ಫೋಟೋ ಗುರುತಿನ ಚೀಟಿ'
    },
    mahila_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'ಕಂದಾಯ ಪ್ರಾಧಿಕಾರದಿಂದ ನೀಡಲಾದ ಪತ್ರ',
      fullName: 'OBC / EWS ಪ್ರಮಾಣಪತ್ರ'
    },
    mahila_doc_2: {
      name: 'Income Certificate',
      description: 'ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹1,50,000 ಮೀರದ ದಾಖಲೆ',
      fullName: 'ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ₹1,50,000 ಮೀರದ Income Certificate'
    },
    mahila_doc_3: {
      name: 'Bank Passbook Copy',
      description: 'ಜನ್ ಧನ್ ಅಥವಾ ಉಳಿತಾಯ ಬ್ಯಾಂಕ್ ಖಾತೆ ಪಾಸ್‌ಬುಕ್ ಪ್ರತಿ',
      fullName: 'ಜನ್ ಧನ್ ಅಥವಾ ಉಳಿತಾಯ ಬ್ಯಾಂಕ್ ಖಾತೆಯ Bank Passbook ಪ್ರತಿ'
    },
    mahila_doc_4: {
      name: 'SHG Membership Certificate',
      description: 'ಸ್ವ-ಸಹಾಯ ಗುಂಪು (SHG) ಸದಸ್ಯತ್ವ ಪ್ರಮಾಣಪತ್ರ',
      fullName: 'ಸ್ವ-ಸಹಾಯ ಗುಂಪು (SHG) ಸದಸ್ಯತ್ವ ಪ್ರಮಾಣಪತ್ರ'
    },
    ambedkar_doc_0: {
      name: 'Admission Proof',
      description: 'ಉನ್ನತ ಶಿಕ್ಷಣ ಕೋರ್ಸ್ ಪ್ರವೇಶ ಪತ್ರ',
      fullName: 'ಉನ್ನತ ಶಿಕ್ಷಣ ಕೋರ್ಸ್ ಪ್ರವೇಶ ಪತ್ರ (Admission Proof)'
    },
    ambedkar_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'ಸಕ್ಷಮ ಪ್ರಾಧಿಕಾರದಿಂದ ಸಮುದಾಯ ಪ್ರಮಾಣಪತ್ರ',
      fullName: 'OBC / EWS ಪ್ರಮಾಣಪತ್ರ'
    },
    ambedkar_doc_2: {
      name: 'Family Income Certificate',
      description: 'ಕುಟುಂಬದ ಆದಾಯ ₹8.00 ಲಕ್ಷ/ವರ್ಷದ ಒಳಗೆ',
      fullName: 'ಕುಟುಂಬದ ಆದಾಯ ₹8.00 ಲಕ್ಷ/ವರ್ಷದ ಒಳಗೆ Income Certificate'
    },
    ambedkar_doc_3: {
      name: 'Education Loan Sanction Letter',
      description: 'IBA ಶೈಕ್ಷಣಿಕ ಸಾಲ ಯೋಜನೆಯಡಿ ಬ್ಯಾಂಕ್ ಮಂಜೂರಾತಿ ಪತ್ರ',
      fullName: 'IBA ಶೈಕ್ಷಣಿಕ ಸಾಲ ಯೋಜನೆಯಡಿ ಬ್ಯಾಂಕ್ ಮಂಜೂರಾತಿ ಪತ್ರ'
    }
  },
  ml: {
    aadhaar: {
      name: 'Aadhaar Card',
      description: 'തിരിച്ചറിയൽ രേഖയും പ്രായ തെളിവും, മൊബൈൽ ലിങ്ക് സഹിതം',
      fullName: 'Aadhaar Card (തിരിച്ചറിയൽ രേഖയും പ്രായ തെളിവും, മൊബൈൽ ലിങ്ക് സഹിതം)'
    },
    pan: {
      name: 'PAN Card',
      description: 'ആദായ നികുതിയും ബാങ്കിംഗ് കെവൈസിയും',
      fullName: 'PAN Card (ആദായ നികുതിയും ബാങ്കിംഗ് കെവൈസിയും)'
    },
    residence: {
      name: 'Proof of Residence',
      description: 'വോട്ടർ ഐഡി / സ്ഥിരതാമസ സർട്ടിഫിക്കറ്റ് / വൈദ്യുതി ബിൽ',
      fullName: 'Proof of Residence (വോട്ടർ ഐഡി / സ്ഥിരതാമസ സർട്ടിഫിക്കറ്റ് / വൈദ്യുതി ബിൽ)'
    },
    photos: {
      name: 'Passport Size Photographs',
      description: 'സംരംഭകന്റെ 3 പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ',
      fullName: 'Passport Size Photographs (സംരംഭകന്റെ 3 പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോകൾ)'
    },
    caste: {
      name: 'Category Certificate',
      description: 'ബന്ധപ്പെട്ട അതോറിറ്റി നൽകിയ {category} സർട്ടിഫിക്കറ്റ്',
      fullName: 'Category Certificate (ബന്ധപ്പെട്ട അതോറിറ്റി നൽകിയ {category} സർട്ടിഫിക്കറ്റ്)'
    },
    income: {
      name: 'Income Certificate',
      description: 'വാർഷിക കുടുംബ വരുമാന സ്വയം സാക്ഷ്യപത്രം',
      fullName: 'Income Certificate / വാർഷിക കുടുംബ വരുമാന സ്വയം സാക്ഷ്യപത്രം'
    },
    dpr: {
      name: 'Detailed Project Report (DPR)',
      description: 'യന്ത്രങ്ങൾ, അസംസ്കൃത വസ്തുക്കൾ, പണമൊഴുക്ക് വിവരങ്ങൾ',
      fullName: 'Detailed Project Report (DPR) - യന്ത്രങ്ങൾ, അസംസ്കൃത വസ്തുക്കൾ, പണമൊഴുക്ക് വിവരങ്ങൾ'
    },
    quotations: {
      name: 'Machinery / Equipment Quotations',
      description: 'അംഗീകൃത വിതരണക്കാരിൽ നിന്നുള്ള വിലവിവരപ്പട്ടിക',
      fullName: 'Machinery / Equipment Quotations അംഗീകൃത വിതരണക്കാരിൽ നിന്നുള്ള വിലവിവരപ്പട്ടിക'
    },
    land: {
      name: 'Premises Proof',
      description: 'വാടക/പാട്ടക്കരാർ അല്ലെങ്കിൽ ഭൂവുടമസ്ഥതാ രേഖ',
      fullName: 'Premises Proof (വാടക/പാട്ടക്കരാർ അല്ലെങ്കിൽ ഭൂവുടമസ്ഥതാ രേഖ)'
    },
    bank: {
      name: 'Bank Statement',
      description: 'സംരംഭകന്റെ മൂലധനം വ്യക്തമാക്കുന്ന കഴിഞ്ഞ 6 മാസത്തെ ബാങ്ക് സ്റ്റേറ്റ്‌മെന്റ്',
      fullName: 'Bank Statement (സംരംഭകന്റെ മൂലധനം വ്യക്തമാക്കുന്ന കഴിഞ്ഞ 6 മാസത്തെ ബാങ്ക് സ്റ്റേറ്റ്‌മെന്റ്)'
    },
    pmegp_doc_0: {
      name: 'Aadhaar Card, PAN Card',
      description: 'അപേക്ഷകന്റെ തിരിച്ചറിയലും നികുതി പരിശോധനയും',
      fullName: 'Aadhaar Card, PAN Card'
    },
    pmegp_doc_1: {
      name: 'Social Category / ജാതി സർട്ടിഫിക്കറ്റ്',
      description: 'SC, ST, OBC സബ്‌സിഡിക്ക്',
      fullName: 'Social Category / ജാതി സർട്ടിഫിക്കറ്റ് (SC, ST, OBC സബ്‌സിഡിക്ക്)'
    },
    pmegp_doc_2: {
      name: 'Detailed Project Report (DPR)',
      description: 'ഉപകരണ ചെലവ് കണക്കാക്കൽ സഹിതം',
      fullName: 'Detailed Project Report (DPR) - ഉപകരണ ചെലവ് കണക്കാക്കൽ സഹിതം'
    },
    pmegp_doc_3: {
      name: 'Rural Area Certificate',
      description: 'ഗ്രാമപഞ്ചായത്തിൽ നിന്നുള്ള ഗ്രാമീണ മേഖല സർട്ടിഫിക്കറ്റ്',
      fullName: 'Rural Area Certificate - ഗ്രാമപഞ്ചായത്ത് സർട്ടിഫിക്കറ്റ്'
    },
    pmegp_doc_4: {
      name: 'Educational Qualification Certificate',
      description: '₹10 ലക്ഷത്തിന് മുകളിലുള്ള പ്രോജക്റ്റുകൾക്ക് കുറഞ്ഞത് എട്ടാം ക്ലാസ് വിജയം',
      fullName: 'Educational Qualification Certificate (₹10 ലക്ഷത്തിന് മുകളിലുള്ള പ്രോജക്റ്റുകൾക്ക് കുറഞ്ഞത് എട്ടാം ക്ലാസ് വിജയം)'
    },
    standup_doc_0: {
      name: 'Proof of Identity & Address',
      description: 'Aadhaar, പാസ്‌പോർട്ട്, വോട്ടർ ഐഡി',
      fullName: 'Proof of Identity & Address (Aadhaar, പാസ്‌പോർട്ട്, വോട്ടർ ഐഡി)'
    },
    standup_doc_1: {
      name: 'SC/ST Certificate',
      description: 'SC/ST ക്വാട്ടയിൽ അപേക്ഷിക്കാൻ',
      fullName: 'SC/ST Certificate (SC/ST ക്വാട്ടയിൽ അപേക്ഷിക്കാൻ)'
    },
    standup_doc_2: {
      name: 'Comprehensive Detailed Project Report (DPR)',
      description: '5 വർഷത്തെ പണമൊഴുക്ക് അനുമാനങ്ങൾ സഹിതം',
      fullName: 'Comprehensive Detailed Project Report (DPR) - പണമൊഴുക്ക് വിവരങ്ങൾ സഹിതം'
    },
    standup_doc_3: {
      name: 'Equipment Quotations & Invoices',
      description: 'മെഷിനറികൾ അല്ലെങ്കിൽ വാണിജ്യ വാഹനങ്ങളുടെ കൊട്ടേഷൻ',
      fullName: 'മെഷിനറികൾ അല്ലെങ്കിൽ വാണിജ്യ വാഹനങ്ങളുടെ പ്രൊഫോർമ ഇൻവോയ്സ്'
    },
    standup_doc_4: {
      name: 'Statutory Clearances & NOC',
      description: 'മലിനീകരണ നിയന്ത്രണ ബോർഡ് NOC / മുനിസിപ്പൽ ലൈസൻസ്',
      fullName: 'മലിനീകരണ നിയന്ത്രണ ബോർഡ് NOC / മുനിസിപ്പൽ ലൈസൻസ്'
    },
    nsfdc_doc_0: {
      name: 'Valid SC Caste Certificate',
      description: 'തഹസിൽദാർ/SDM നൽകിയ സാധുവായ SC സർട്ടിഫിക്കറ്റ്',
      fullName: 'തഹസിൽദാർ/SDM നൽകിയ സാധുവായ SC സർട്ടിഫിക്കറ്റ്'
    },
    nsfdc_doc_1: {
      name: 'Income Certificate',
      description: 'വാർഷിക വരുമാനം ₹3,00,000-ൽ താഴെയെന്ന് തെളിയിക്കുന്ന രേഖ',
      fullName: 'വാർഷിക കുടുംബ വരുമാനം ₹3,00,000-ൽ താഴെയുള്ള Income Certificate'
    },
    nsfdc_doc_2: {
      name: 'Project Profile & Machinery Quotations',
      description: 'മെഷിനറി വിലവിവരപ്പട്ടികയും പ്രോജക്ട് പ്രൊഫൈലും',
      fullName: 'Project Profile, മെഷിനറി വിലവിവരപ്പട്ടിക'
    },
    nsfdc_doc_3: {
      name: 'Proof of Business Premises',
      description: 'സ്ഥാപനത്തിന്റെ വാടകക്കരാർ അല്ലെങ്കിൽ ഉടമസ്ഥതാ രേഖ',
      fullName: 'സ്ഥാപനത്തിന്റെ വാടകക്കരാർ അല്ലെങ്കിൽ ഉടമസ്ഥതാ രേഖ (Premises Proof)'
    },
    nbcfdc_doc_0: {
      name: 'OBC / EWS Certificate',
      description: 'നോൺ-ക്രീമിലെയർ സർട്ടിഫിക്കറ്റ്',
      fullName: 'OBC / EWS നോൺ-ക്രീമിലെയർ സർട്ടിഫിക്കറ്റ്'
    },
    nbcfdc_doc_1: {
      name: 'Family Income Certificate',
      description: 'വാർഷിക വരുമാനം ₹3,00,000 പരിധിക്കുള്ളിൽ',
      fullName: 'വാർഷിക വരുമാനം ₹3,00,000 പരിധിക്കുള്ളിലുള്ള Family Income Certificate'
    },
    nbcfdc_doc_2: {
      name: 'Commercial Driving License',
      description: 'കൊമേഴ്‌സ്യൽ ഡ്രൈവിംഗ് ലൈസൻസ് (LMV / ട്രാൻസ്പോർട്ട്)',
      fullName: 'സാധുവായ Commercial Driving License (LMV / ട്രാൻസ്പോർട്ട്)'
    },
    nbcfdc_doc_3: {
      name: 'Vehicle Proforma Invoice',
      description: 'അംഗീകൃത ഡീലർഷിപ്പിൽ നിന്നുള്ള പ്രൊഫോർമ ഇൻവോയ്സ്',
      fullName: 'അംഗീകൃത ഡീലർഷിപ്പിൽ നിന്നുള്ള വാഹനം പ്രൊഫോർമ ഇൻവോയ്സ്'
    },
    nbcfdc_doc_4: {
      name: 'RTO Clearance / Route Permit',
      description: 'റൂട്ട് പെർമിറ്റ് / RTO പ്രാഥമിക അനുമതി',
      fullName: 'റൂട്ട് പെർമിറ്റ് / RTO പ്രാഥമിക അനുമതി'
    },
    mahila_doc_0: {
      name: 'Aadhaar Card & Photo ID',
      description: 'വനിതാ അപേക്ഷകയുടെ ഫോട്ടോ പതിച്ച തിരിച്ചറിയൽ കാർഡ്',
      fullName: 'വനിതാ അപേക്ഷകയുടെ Aadhaar Card, ഫോട്ടോ തിരിച്ചറിയൽ കാർഡ്'
    },
    mahila_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'റവന്യൂ അധികാരി നൽകിയത്',
      fullName: 'OBC / EWS സർട്ടിഫിക്കറ്റ്'
    },
    mahila_doc_2: {
      name: 'Income Certificate',
      description: 'കുടുംബ വാർഷിക വരുമാനം ₹1,50,000 കവിയുന്നില്ലെന്ന തെളിവ്',
      fullName: 'കുടുംബ വാർഷിക വരുമാനം ₹1,50,000 കവിയുന്നില്ലെന്ന Income Certificate'
    },
    mahila_doc_3: {
      name: 'Bank Passbook Copy',
      description: 'ജൻ ധൻ അല്ലെങ്കിൽ സേവിംഗ്സ് അക്കൗണ്ട് പാസ്ബുക്ക് കോപ്പി',
      fullName: 'ജൻ ധൻ അല്ലെങ്കിൽ സേവിംഗ്സ് ബാങ്ക് അക്കൗണ്ട് Bank Passbook കോപ്പി'
    },
    mahila_doc_4: {
      name: 'SHG Membership Certificate',
      description: 'സ്വയംസഹായ സംഘം (SHG) അംഗത്വ സർട്ടിഫിക്കറ്റ്',
      fullName: 'സ്വയംസഹായ സംഘം (SHG) അംഗത്വ സർട്ടിഫിക്കറ്റ്'
    },
    ambedkar_doc_0: {
      name: 'Admission Proof',
      description: 'ഉന്നതവിദ്യാഭ്യാസ കോഴ്സ് പ്രവേശന കത്ത്',
      fullName: 'ഉന്നതവിദ്യാഭ്യാസ കോഴ്സ് പ്രവേശന കത്ത് (Admission Proof)'
    },
    ambedkar_doc_1: {
      name: 'OBC / EWS Certificate',
      description: 'അംഗീകൃത അതോറിറ്റിയുടെ കമ്മ്യൂണിറ്റി സർട്ടിഫിക്കറ്റ്',
      fullName: 'OBC / EWS സർട്ടിഫിക്കറ്റ്'
    },
    ambedkar_doc_2: {
      name: 'Family Income Certificate',
      description: 'കുടുംബ വരുമാനം ₹8.00 ലക്ഷം/വർഷത്തിന് താഴെ',
      fullName: 'കുടുംബ വരുമാനം ₹8.00 ലക്ഷം/വർഷത്തിന് താഴെയുള്ള Income Certificate'
    },
    ambedkar_doc_3: {
      name: 'Education Loan Sanction Letter',
      description: 'IBA വിദ്യാഭ്യാസ വായ്പാ പദ്ധതി പ്രകാരമുള്ള ബാങ്ക് അനുമതി പത്രം',
      fullName: 'IBA വിദ്യാഭ്യാസ വായ്പാ പദ്ധതി പ്രകാരമുള്ള ബാങ്ക് അനുമതി പത്രം'
    }
  }
};

/**
 * Normalizes any text or document reference and returns the localized representation
 */
export function getLocalizedDocument(
  doc: string | { id?: string; category?: string; label?: string; translationKey?: string; descriptionKey?: string },
  lang: Language,
  params?: Record<string, string>
): LocalizedDoc {
  const dict = DOCUMENT_DICTIONARIES[lang] || DOCUMENT_DICTIONARIES.en;
  const enDict = DOCUMENT_DICTIONARIES.en;

  let docId = '';
  if (typeof doc === 'object' && doc !== null) {
    docId = doc.id || '';
    if (!docId && doc.label) {
      docId = findDocIdByText(doc.label);
    }
  } else if (typeof doc === 'string') {
    docId = findDocIdByText(doc);
  }

  // Look up by docId
  if (docId && dict[docId]) {
    const item = dict[docId];
    let name = item.name;
    let description = item.description;
    let fullName = item.fullName;

    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        name = name.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        description = description.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        fullName = fullName.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      });
    }

    return { name, description, fullName };
  }

  // Fallback to en dictionary if found
  if (docId && enDict[docId]) {
    const item = enDict[docId];
    return { name: item.name, description: item.description, fullName: item.fullName };
  }

  // If raw string passed with parenthetical description
  const rawText = typeof doc === 'string' ? doc : (doc.label || doc.id || '');
  return {
    name: rawText,
    description: '',
    fullName: rawText
  };
}

/**
 * Matches raw strings to document IDs
 */
function findDocIdByText(text: string): string {
  if (!text) return '';
  const lower = text.toLowerCase();

  // Base IDs
  if (lower.startsWith('aadhaar card & pan')) return 'pmegp_doc_0';
  if (lower.startsWith('aadhaar')) return 'aadhaar';
  if (lower.startsWith('pan card')) return 'pan';
  if (lower.includes('residence') || lower.includes('domicile') || lower.includes('voter id')) return 'residence';
  if (lower.includes('photograph') || lower.includes('photos')) return 'photos';
  if (lower.includes('category certificate') || lower.includes('caste certificate')) {
    if (lower.includes('competent authority')) return 'caste';
    if (lower.includes('sc/st quota')) return 'standup_doc_1';
    if (lower.includes('sc caste certificate') || lower.includes('tehsildar/sdm')) return 'nsfdc_doc_0';
    if (lower.includes('obc') && lower.includes('non-creamy')) return 'nbcfdc_doc_0';
    if (lower.includes('sc, st, obc subsidy')) return 'pmegp_doc_1';
    return 'caste';
  }
  if (lower.includes('income certificate') || lower.includes('family income')) {
    if (lower.includes('1,50,000')) return 'mahila_doc_2';
    if (lower.includes('3,00,000')) return 'nsfdc_doc_1';
    if (lower.includes('8.00 lakh')) return 'ambedkar_doc_2';
    return 'income';
  }
  if (lower.includes('detailed project report') || lower.includes('dpr')) {
    if (lower.includes('cashflow projections') || lower.includes('comprehensive')) return 'standup_doc_2';
    if (lower.includes('equipment cost')) return 'pmegp_doc_2';
    return 'dpr';
  }
  if (lower.includes('quotation') || lower.includes('invoices') || lower.includes('machinery')) {
    if (lower.includes('project profile & machinery')) return 'nsfdc_doc_2';
    if (lower.includes('commercial vehicles') || lower.includes('proforma invoices and quotations')) return 'standup_doc_3';
    return 'quotations';
  }
  if (lower.includes('premises') || lower.includes('rent/lease') || lower.includes('tenancy')) {
    if (lower.includes('workplace tenancy')) return 'nsfdc_doc_3';
    return 'land';
  }
  if (lower.includes('bank statement')) return 'bank';
  if (lower.includes('rural area certificate')) return 'pmegp_doc_3';
  if (lower.includes('educational qualification') || lower.includes('8th pass')) return 'pmegp_doc_4';
  if (lower.includes('driving license')) return 'nbcfdc_doc_2';
  if (lower.includes('dealership vehicle proforma invoice')) return 'nbcfdc_doc_3';
  if (lower.includes('route permit') || lower.includes('rto')) return 'nbcfdc_doc_4';
  if (lower.includes('photo id of woman applicant')) return 'mahila_doc_0';
  if (lower.includes('bank passbook')) return 'mahila_doc_3';
  if (lower.includes('shg membership')) return 'mahila_doc_4';
  if (lower.includes('admission proof') || lower.includes('enrollment letter')) return 'ambedkar_doc_0';
  if (lower.includes('iba educational loan scheme') || lower.includes('loan sanction letter')) return 'ambedkar_doc_3';
  if (lower.includes('pollution control board')) return 'standup_doc_4';

  return '';
}

/**
 * Returns the localized document category label
 */
export function getDocumentCategoryLabel(category: string, lang: Language): string {
  const dict = DOCUMENT_CATEGORIES[lang] || DOCUMENT_CATEGORIES.en;
  return dict[category] || dict.scheme || 'Scheme Specific';
}
