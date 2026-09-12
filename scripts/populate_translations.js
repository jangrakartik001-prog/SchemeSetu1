import fs from 'fs';
import path from 'path';

// Load base missing keys
const missingList = JSON.parse(fs.readFileSync('/tmp/missing_keys.json', 'utf8'));

// Keys we want to ensure exist everywhere:
// missingList has 135 keys with en and hi.
// Let's add the matching and recommendation keys to missingList:
const additionalKeys = [
  {
    key: 'matching.targetDebt',
    en: 'Target Debt:',
    hi: 'लक्षित ऋण:'
  },
  {
    key: 'matching.pipelineTitle',
    en: 'Rule Evaluation Pipeline',
    hi: 'नियम मूल्यांकन पाइपलाइन'
  },
  {
    key: 'matching.rulesChecked',
    en: '{current} of {total} Rules Checked',
    hi: '{total} में से {current} नियमों की जांच पूर्ण'
  },
  {
    key: 'matching.skipToResults',
    en: 'Skip & View Results Immediately',
    hi: 'छोड़ें और तुरंत परिणाम देखें'
  },
  {
    key: 'matching.returnToSummary',
    en: 'Return to Summary',
    hi: 'सारांश पर वापस जाएं'
  },
  {
    key: 'matching.footerNotice',
    en: 'Rule evaluation executed locally via deterministic algorithms • No external API latency',
    hi: 'नियम मूल्यांकन स्थानीय रूप से निर्धारित एल्गोरिदम द्वारा निष्पादित • शून्य बाह्य विलंबता'
  },
  {
    key: 'matching.rule1Title',
    en: 'Demographic & Social Category Filter',
    hi: 'जनसांख्यिकीय और सामाजिक श्रेणी फ़िल्टर'
  },
  {
    key: 'matching.rule1Desc',
    en: 'Validating applicant category and target group alignment',
    hi: 'आवेदक श्रेणी और लक्षित समूह मिलान का सत्यापन'
  },
  {
    key: 'matching.rule2Title',
    en: 'Income Ceiling & Means Verification',
    hi: 'आय सीमा एवं साधन सत्यापन'
  },
  {
    key: 'matching.rule2Desc',
    en: 'Evaluating family income against scheme poverty-line criteria',
    hi: 'योजना के गरीबी रेखा मानदंडों के अनुसार पारिवारिक आय का मूल्यांकन'
  },
  {
    key: 'matching.rule3Title',
    en: 'Sector & Activity Classification',
    hi: 'क्षेत्र एवं गतिविधि वर्गीकरण'
  },
  {
    key: 'matching.rule3Desc',
    en: 'Matching enterprise activity against approved MSME guidelines',
    hi: 'स्वीकृत एमएसएमई दिशानिर्देशों के विरुद्ध उद्यम गतिविधि का मिलान'
  },
  {
    key: 'matching.rule4Title',
    en: 'Financial Bounds & Debt Sizing',
    hi: 'वित्तीय सीमाएं एवं ऋण आकार निर्धारण'
  },
  {
    key: 'matching.rule4Desc',
    en: 'Verifying project cost bounds and promoter equity ratios',
    hi: 'परियोजना लागत सीमाओं और प्रमोटर इक्विटी अनुपात का सत्यापन'
  },
  {
    key: 'matching.rule5Title',
    en: 'Channel Partner & Corporation Routing',
    hi: 'चैनल पार्टनर एवं निगम रूटिंग'
  },
  {
    key: 'matching.rule5Desc',
    en: 'Ranking by interest rate, subsidy slabs, and repayment fit',
    hi: 'ब्याज दर, सब्सिडी स्लैब और पुनर्भुगतान उपयुक्तता के आधार पर रैंकिंग'
  },
  {
    key: 'recommendations.financingTarget',
    en: 'Financing target:',
    hi: 'वित्तपोषण लक्ष्य:'
  },
  {
    key: 'recommendations.standardTenure',
    en: 'Standard tenure:',
    hi: 'मानक अवधि:'
  }
];

const fullKeys = [...missingList, ...additionalKeys];
console.log('Total keys to sync across languages:', fullKeys.length);
fs.writeFileSync('/tmp/full_keys.json', JSON.stringify(fullKeys, null, 2));
