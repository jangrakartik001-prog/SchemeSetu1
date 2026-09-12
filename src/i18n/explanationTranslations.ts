import { Language } from './types';

export const RULE_NAMES: Record<Language, Record<string, string>> = {
  en: {
    'PROFILE_COMPLETENESS': 'Profile Information Completeness',
    'Profile Information Completeness': 'Profile Information Completeness',
    'CATEGORY_ELIGIBILITY': 'Category & Beneficiary Eligibility',
    'Category & Beneficiary Eligibility': 'Category & Beneficiary Eligibility',
    'INCOME_ELIGIBILITY': 'Annual Family Income Eligibility',
    'Annual Family Income Eligibility': 'Annual Family Income Eligibility',
    'AGE_LIMIT': 'Applicant Age Bracket',
    'Applicant Age Bracket': 'Applicant Age Bracket',
    'Minimum & Maximum Age Limit': 'Applicant Age Bracket',
    'PURPOSE_ALIGNMENT': 'Financing Purpose Alignment',
    'Financing Purpose Alignment': 'Financing Purpose Alignment',
    'PROJECT_SECTOR': 'Project Sector & Activity Type',
    'Project Sector & Activity Type': 'Project Sector & Activity Type',
    'Eligible Project Activities & Sector': 'Project Sector & Activity Type',
    'BUSINESS_STAGE': 'Business Stage Compatibility',
    'Business Stage Compatibility': 'Business Stage Compatibility',
    'Project Stage / Greenfield Feasibility': 'Business Stage Compatibility',
    'PROJECT_COST': 'Project Cost Bounds',
    'Project Cost Bounds': 'Project Cost Bounds',
    'Project Financing Scale & Ceilings': 'Project Cost Bounds',
    'FINANCING_CEILING': 'Financing Amount Ceiling',
    'Financing Amount Ceiling': 'Financing Amount Ceiling',
    'GEOGRAPHIC_AVAILABILITY': 'Geographic Availability',
    'Geographic Availability': 'Geographic Availability',
    'Geographical State & District Jurisdiction': 'Geographic Availability',
    'PROMOTER_CONTRIBUTION': 'Promoter Own Contribution Feasibility',
    'Promoter Own Contribution Feasibility': 'Promoter Own Contribution Feasibility',
    'EDUCATIONAL_QUALIFICATION': 'Mandatory Educational Qualification',
    'Mandatory Educational Qualification': 'Mandatory Educational Qualification'
  },
  hi: {
    'PROFILE_COMPLETENESS': 'प्रोफ़ाइल जानकारी की पूर्णता',
    'Profile Information Completeness': 'प्रोफ़ाइल जानकारी की पूर्णता',
    'CATEGORY_ELIGIBILITY': 'वर्ग एवं लाभार्थी पात्रता',
    'Category & Beneficiary Eligibility': 'वर्ग एवं लाभार्थी पात्रता',
    'INCOME_ELIGIBILITY': 'वार्षिक पारिवारिक आय पात्रता',
    'Annual Family Income Eligibility': 'वार्षिक पारिवारिक आय पात्रता',
    'AGE_LIMIT': 'आवेदक आयु सीमा',
    'Applicant Age Bracket': 'आवेदक आयु सीमा',
    'Minimum & Maximum Age Limit': 'आवेदक आयु सीमा',
    'PURPOSE_ALIGNMENT': 'वित्तपोषण उद्देश्य अनुरूपता',
    'Financing Purpose Alignment': 'वित्तपोषण उद्देश्य अनुरूपता',
    'PROJECT_SECTOR': 'परियोजना क्षेत्र एवं गतिविधि प्रकार',
    'Project Sector & Activity Type': 'परियोजना क्षेत्र एवं गतिविधि प्रकार',
    'Eligible Project Activities & Sector': 'परियोजना क्षेत्र एवं गतिविधि प्रकार',
    'BUSINESS_STAGE': 'व्यवसाय चरण अनुकूलता',
    'Business Stage Compatibility': 'व्यवसाय चरण अनुकूलता',
    'Project Stage / Greenfield Feasibility': 'व्यवसाय चरण अनुकूलता',
    'PROJECT_COST': 'परियोजना लागत सीमाएं',
    'Project Cost Bounds': 'परियोजना लागत सीमाएं',
    'Project Financing Scale & Ceilings': 'परियोजना लागत सीमाएं',
    'FINANCING_CEILING': 'ऋण राशि अधिकतम सीमा',
    'Financing Amount Ceiling': 'ऋण राशि अधिकतम सीमा',
    'GEOGRAPHIC_AVAILABILITY': 'भौगोलिक उपलब्धता',
    'Geographic Availability': 'भौगोलिक उपलब्धता',
    'Geographical State & District Jurisdiction': 'भौगोलिक उपलब्धता',
    'PROMOTER_CONTRIBUTION': 'स्वयं का अंशदान व्यवहार्यता',
    'Promoter Own Contribution Feasibility': 'स्वयं का अंशदान व्यवहार्यता',
    'EDUCATIONAL_QUALIFICATION': 'अनिवार्य शैक्षणिक योग्यता',
    'Mandatory Educational Qualification': 'अनिवार्य शैक्षणिक योग्यता'
  },
  pa: {
    'PROFILE_COMPLETENESS': 'ਪ੍ਰੋਫਾਈਲ ਜਾਣਕਾਰੀ ਦੀ ਪੂਰਨਤਾ',
    'Profile Information Completeness': 'ਪ੍ਰੋਫਾਈਲ ਜਾਣਕਾਰੀ ਦੀ ਪੂਰਨਤਾ',
    'CATEGORY_ELIGIBILITY': 'ਸ਼੍ਰੇਣੀ ਅਤੇ ਲਾਭਪਾਤਰੀ ਯੋਗਤਾ',
    'Category & Beneficiary Eligibility': 'ਸ਼੍ਰੇਣੀ ਅਤੇ ਲਾਭਪਾਤਰੀ ਯੋਗਤਾ',
    'INCOME_ELIGIBILITY': 'ਸਾਲਾਨਾ ਪਰਿਵਾਰਕ ਆਮਦਨ ਯੋਗਤਾ',
    'Annual Family Income Eligibility': 'ਸਾਲਾਨਾ ਪਰਿਵਾਰਕ ਆਮਦਨ ਯੋਗਤਾ',
    'AGE_LIMIT': 'ਬਿਨੈਕਾਰ ਉਮਰ ਹੱਦ',
    'Applicant Age Bracket': 'ਬਿਨੈਕਾਰ ਉਮਰ ਹੱਦ',
    'Minimum & Maximum Age Limit': 'ਬਿਨੈਕਾਰ ਉਮਰ ਹੱਦ',
    'PURPOSE_ALIGNMENT': 'ਵਿੱਤ ਉਦੇਸ਼ ਅਨੁਕੂਲਤਾ',
    'Financing Purpose Alignment': 'ਵਿੱਤ ਉਦੇਸ਼ ਅਨੁਕੂਲਤਾ',
    'PROJECT_SECTOR': 'ਪ੍ਰੋਜੈਕਟ ਖੇਤਰ ਅਤੇ ਗਤੀਵਿਧੀ ਕਿਸਮ',
    'Project Sector & Activity Type': 'ਪ੍ਰੋਜੈਕਟ ਖੇਤਰ ਅਤੇ ਗਤੀਵਿਧੀ ਕਿਸਮ',
    'Eligible Project Activities & Sector': 'ਪ੍ਰੋਜੈਕਟ ਖੇਤਰ ਅਤੇ ਗਤੀਵਿਧੀ ਕਿਸਮ',
    'BUSINESS_STAGE': 'ਕਾਰੋਬਾਰ ਪੜਾਅ ਅਨੁਕੂਲਤਾ',
    'Business Stage Compatibility': 'ਕਾਰੋਬਾਰ ਪੜਾਅ ਅਨੁਕੂਲਤਾ',
    'Project Stage / Greenfield Feasibility': 'ਕਾਰੋਬਾਰ ਪੜਾਅ ਅਨੁਕੂਲਤਾ',
    'PROJECT_COST': 'ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ ਸੀਮਾਵਾਂ',
    'Project Cost Bounds': 'ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ ਸੀਮਾਵਾਂ',
    'Project Financing Scale & Ceilings': 'ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ ਸੀਮਾਵਾਂ',
    'FINANCING_CEILING': 'ਕਰਜ਼ਾ ਰਕਮ ਅਧਿਕਤਮ ਸੀਮਾ',
    'Financing Amount Ceiling': 'ਕਰਜ਼ਾ ਰਕਮ ਅਧਿਕਤਮ ਸੀਮਾ',
    'GEOGRAPHIC_AVAILABILITY': 'ਭੂਗੋਲਿਕ ਉਪਲਬਧਤਾ',
    'Geographic Availability': 'ਭੂਗੋਲਿਕ ਉਪਲਬਧਤਾ',
    'Geographical State & District Jurisdiction': 'ਭੂਗੋਲਿਕ ਉਪਲਬਧਤਾ',
    'PROMOTER_CONTRIBUTION': 'ਪ੍ਰਮੋਟਰ ਦਾ ਆਪਣਾ ਯੋਗਦਾਨ',
    'Promoter Own Contribution Feasibility': 'ਪ੍ਰਮੋਟਰ ਦਾ ਆਪਣਾ ਯੋਗਦਾਨ',
    'EDUCATIONAL_QUALIFICATION': 'ਲਾਜ਼ਮੀ ਵਿਦਿਅਕ ਯੋਗਤਾ',
    'Mandatory Educational Qualification': 'ਲਾਜ਼ਮੀ ਵਿਦਿਅਕ ਯੋਗਤਾ'
  },
  bn: {
    'PROFILE_COMPLETENESS': 'প্রোফাইল তথ্যের সম্পূর্ণতা',
    'Profile Information Completeness': 'প্রোফাইল তথ্যের সম্পূর্ণতা',
    'CATEGORY_ELIGIBILITY': 'শ্রেণি ও সুবিধাভোগী যোগ্যতা',
    'Category & Beneficiary Eligibility': 'শ্রেণি ও সুবিধাভোগী যোগ্যতা',
    'INCOME_ELIGIBILITY': 'বার্ষিক পারিবারিক আয় যোগ্যতা',
    'Annual Family Income Eligibility': 'বার্ষিক পারিবারিক আয় যোগ্যতা',
    'AGE_LIMIT': 'আবেদনকারীর বয়সসীমা',
    'Applicant Age Bracket': 'আবেদনকারীর বয়সসীমা',
    'Minimum & Maximum Age Limit': 'আবেদনকারীর বয়সসীমা',
    'PURPOSE_ALIGNMENT': 'অর্থায়নের উদ্দেশ্য সামঞ্জস্য',
    'Financing Purpose Alignment': 'অর্থায়নের উদ্দেশ্য সামঞ্জস্য',
    'PROJECT_SECTOR': 'প্রকল্প ক্ষেত্র ও কার্যক্রমের ধরন',
    'Project Sector & Activity Type': 'প্রকল্প ক্ষেত্র ও কার্যক্রমের ধরন',
    'Eligible Project Activities & Sector': 'প্রকল্প ক্ষেত্র ও কার্যক্রমের ধরন',
    'BUSINESS_STAGE': 'ব্যবসায়ের পর্যায় সামঞ্জস্য',
    'Business Stage Compatibility': 'ব্যবসায়ের পর্যায় সামঞ্জস্য',
    'Project Stage / Greenfield Feasibility': 'ব্যবসায়ের পর্যায় সামঞ্জস্য',
    'PROJECT_COST': 'প্রকল্প ব্যয়ের সীমা',
    'Project Cost Bounds': 'প্রকল্প ব্যয়ের সীমা',
    'Project Financing Scale & Ceilings': 'প্রকল্প ব্যয়ের সীমা',
    'FINANCING_CEILING': 'ঋণ পরিমাণের সর্বোচ্চ সীমা',
    'Financing Amount Ceiling': 'ঋণ পরিমাণের সর্বোচ্চ সীমা',
    'GEOGRAPHIC_AVAILABILITY': 'ভৌগোলিক প্রাপ্যতা',
    'Geographic Availability': 'ভৌগোলিক প্রাপ্যতা',
    'Geographical State & District Jurisdiction': 'ভৌগোলিক প্রাপ্যতা',
    'PROMOTER_CONTRIBUTION': 'উদ্যোক্তার নিজস্ব অবদান',
    'Promoter Own Contribution Feasibility': 'উদ্যোক্তার নিজস্ব অবদান',
    'EDUCATIONAL_QUALIFICATION': 'বাধ্যতামূলক শিক্ষাগত যোগ্যতা',
    'Mandatory Educational Qualification': 'বাধ্যতামূলক শিক্ষাগত যোগ্যতা'
  },
  mr: {
    'PROFILE_COMPLETENESS': 'प्रोफाइल माहितीची पूर्णता',
    'Profile Information Completeness': 'प्रोफाइल माहितीची पूर्णता',
    'CATEGORY_ELIGIBILITY': 'प्रवर्ग व लाभार्थी पात्रता',
    'Category & Beneficiary Eligibility': 'प्रवर्ग व लाभार्थी पात्रता',
    'INCOME_ELIGIBILITY': 'वार्षिक कौटुंबिक उत्पन्न पात्रता',
    'Annual Family Income Eligibility': 'वार्षिक कौटुंबिक उत्पन्न पात्रता',
    'AGE_LIMIT': 'अर्जदार वयोमर्यादा',
    'Applicant Age Bracket': 'अर्जदार वयोमर्यादा',
    'Minimum & Maximum Age Limit': 'अर्जदार वयोमर्यादा',
    'PURPOSE_ALIGNMENT': 'वित्तपुरवठा उद्दिष्ट सुसंगतता',
    'Financing Purpose Alignment': 'वित्तपुरवठा उद्दिष्ट सुसंगतता',
    'PROJECT_SECTOR': 'प्रकल्प क्षेत्र व उपक्रम प्रकार',
    'Project Sector & Activity Type': 'प्रकल्प क्षेत्र व उपक्रम प्रकार',
    'Eligible Project Activities & Sector': 'प्रकल्प क्षेत्र व उपक्रम प्रकार',
    'BUSINESS_STAGE': 'व्यवसाय टप्पा सुसंगतता',
    'Business Stage Compatibility': 'व्यवसाय टप्पा सुसंगतता',
    'Project Stage / Greenfield Feasibility': 'व्यवसाय टप्पा सुसंगतता',
    'PROJECT_COST': 'प्रकल्प खर्च मर्यादा',
    'Project Cost Bounds': 'प्रकल्प खर्च मर्यादा',
    'Project Financing Scale & Ceilings': 'प्रकल्प खर्च मर्यादा',
    'FINANCING_CEILING': 'कर्ज रक्कम कमाल मर्यादा',
    'Financing Amount Ceiling': 'कर्ज रक्कम कमाल मर्यादा',
    'GEOGRAPHIC_AVAILABILITY': 'भौगोलिक उपलब्धता',
    'Geographic Availability': 'भौगोलिक उपलब्धता',
    'Geographical State & District Jurisdiction': 'भौगोलिक उपलब्धता',
    'PROMOTER_CONTRIBUTION': 'प्रवर्तकाचे स्वतःचे योगदान',
    'Promoter Own Contribution Feasibility': 'प्रवर्तकाचे स्वतःचे योगदान',
    'EDUCATIONAL_QUALIFICATION': 'अनिवार्य शैक्षणिक पात्रता',
    'Mandatory Educational Qualification': 'अनिवार्य शैक्षणिक पात्रता'
  },
  gu: {
    'PROFILE_COMPLETENESS': 'પ્રોફાઇલ માહિતીની પૂર્ણતા',
    'Profile Information Completeness': 'પ્રોફાઇલ માહિતીની પૂર્ણતા',
    'CATEGORY_ELIGIBILITY': 'વર્ગ અને લાભાર્થી પાત્રતા',
    'Category & Beneficiary Eligibility': 'વર્ગ અને લાભાર્થી પાત્રતા',
    'INCOME_ELIGIBILITY': 'વાર્ષિક કૌટુંબિક આવક પાત્રતા',
    'Annual Family Income Eligibility': 'વાર્ષિક કૌટુંબિક આવક પાત્રતા',
    'AGE_LIMIT': 'અરજદાર વય મર્યાદા',
    'Applicant Age Bracket': 'અરજદાર વય મર્યાદા',
    'Minimum & Maximum Age Limit': 'અરજદાર વય મર્યાદા',
    'PURPOSE_ALIGNMENT': 'ધિરાણ હેતુ સુસંગતતા',
    'Financing Purpose Alignment': 'ધિરાણ હેતુ સુસંગતતા',
    'PROJECT_SECTOR': 'પ્રોજેક્ટ ક્ષેત્ર અને પ્રવૃત્તિ પ્રકાર',
    'Project Sector & Activity Type': 'પ્રોજેક્ટ ક્ષેત્ર અને પ્રવૃત્તિ પ્રકાર',
    'Eligible Project Activities & Sector': 'પ્રોજેક્ટ ક્ષેત્ર અને પ્રવૃત્તિ પ્રકાર',
    'BUSINESS_STAGE': 'વ્યવસાય તબક્કો સુસંગતતા',
    'Business Stage Compatibility': 'વ્યવસાય તબક્કો સુસંગતતા',
    'Project Stage / Greenfield Feasibility': 'વ્યવસાય તબક્કો સુસંગતતા',
    'PROJECT_COST': 'પ્રોજેક્ટ ખર્ચ મર્યાદાઓ',
    'Project Cost Bounds': 'પ્રોજેક્ટ ખર્ચ મર્યાદાઓ',
    'Project Financing Scale & Ceilings': 'પ્રોજેક્ટ ખર્ચ મર્યાદાઓ',
    'FINANCING_CEILING': 'લોન રકમ મહત્તમ મર્યાદા',
    'Financing Amount Ceiling': 'લોન રકમ મહત્તમ મર્યાદા',
    'GEOGRAPHIC_AVAILABILITY': 'ભૌગોલિક ઉપલબ્ધતા',
    'Geographic Availability': 'ભૌગોલિક ઉપલબ્ધતા',
    'Geographical State & District Jurisdiction': 'ભૌગોલિક ઉપલબ્ધતા',
    'PROMOTER_CONTRIBUTION': 'પ્રમોટરનું પોતાનું રોકાણ',
    'Promoter Own Contribution Feasibility': 'પ્રમોટરનું પોતાનું રોકાણ',
    'EDUCATIONAL_QUALIFICATION': 'ફરજિયાત શૈક્ષણિક લાયકાત',
    'Mandatory Educational Qualification': 'ફરજિયાત શૈક્ષણિક લાયકાત'
  },
  ta: {
    'PROFILE_COMPLETENESS': 'சுயவிவர தகவலின் முழுமை',
    'Profile Information Completeness': 'சுயவிவர தகவலின் முழுமை',
    'CATEGORY_ELIGIBILITY': 'பிரிவு மற்றும் பயனாளி தகுதி',
    'Category & Beneficiary Eligibility': 'பிரிவு மற்றும் பயனாளி தகுதி',
    'INCOME_ELIGIBILITY': 'ஆண்டு குடும்ப வருமான தகுதி',
    'Annual Family Income Eligibility': 'ஆண்டு குடும்ப வருமான தகுதி',
    'AGE_LIMIT': 'விண்ணப்பதாரர் வயது வரம்பு',
    'Applicant Age Bracket': 'விண்ணப்பதாரர் வயது வரம்பு',
    'Minimum & Maximum Age Limit': 'விண்ணப்பதாரர் வயது வரம்பு',
    'PURPOSE_ALIGNMENT': 'நிதி நோக்கம் பொருத்தம்',
    'Financing Purpose Alignment': 'நிதி நோக்கம் பொருத்தம்',
    'PROJECT_SECTOR': 'திட்டத் துறை மற்றும் செயல்பாடு வகை',
    'Project Sector & Activity Type': 'திட்டத் துறை மற்றும் செயல்பாடு வகை',
    'Eligible Project Activities & Sector': 'திட்டத் துறை மற்றும் செயல்பாடு வகை',
    'BUSINESS_STAGE': 'வணிக நிலை இணக்கத்தன்மை',
    'Business Stage Compatibility': 'வணிக நிலை இணக்கத்தன்மை',
    'Project Stage / Greenfield Feasibility': 'வணிக நிலை இணக்கத்தன்மை',
    'PROJECT_COST': 'திட்ட செலவு வரம்புகள்',
    'Project Cost Bounds': 'திட்ட செலவு வரம்புகள்',
    'Project Financing Scale & Ceilings': 'திட்ட செலவு வரம்புகள்',
    'FINANCING_CEILING': 'கடன் தொகை உச்சவரம்பு',
    'Financing Amount Ceiling': 'கடன் தொகை உச்சவரம்பு',
    'GEOGRAPHIC_AVAILABILITY': 'புவியியல் கிடைக்கும் தன்மை',
    'Geographic Availability': 'புவியியல் கிடைக்கும் தன்மை',
    'Geographical State & District Jurisdiction': 'புவியியல் கிடைக்கும் தன்மை',
    'PROMOTER_CONTRIBUTION': 'தொழில்முனைவோர் சொந்த பங்களிப்பு',
    'Promoter Own Contribution Feasibility': 'தொழில்முனைவோர் சொந்த பங்களிப்பு',
    'EDUCATIONAL_QUALIFICATION': 'கட்டாய கல்வித் தகுதி',
    'Mandatory Educational Qualification': 'கட்டாய கல்வித் தகுதி'
  },
  te: {
    'PROFILE_COMPLETENESS': 'ప్రొఫైల్ సమాచారం సంపూర్ణత',
    'Profile Information Completeness': 'ప్రొఫైల్ సమాచారం సంపూర్ణత',
    'CATEGORY_ELIGIBILITY': 'వర్గం & లబ్ధిదారుల అర్హత',
    'Category & Beneficiary Eligibility': 'వర్గం & లబ్ధిదారుల అర్హత',
    'INCOME_ELIGIBILITY': 'వార్షిక కుటుంబ ఆదాయ అర్హత',
    'Annual Family Income Eligibility': 'వార్షిక కుటుంబ ఆదాయ అర్హత',
    'AGE_LIMIT': 'దరఖాస్తుదారు వయోపరిమితి',
    'Applicant Age Bracket': 'దరఖాస్తుదారు వయోపరిమితి',
    'Minimum & Maximum Age Limit': 'దరఖాస్తుదారు వయోపరిమితి',
    'PURPOSE_ALIGNMENT': 'ఫైనాన్సింగ్ ఉద్దేశ్యం అనుకూలత',
    'Financing Purpose Alignment': 'ఫైనాన్సింగ్ ఉద్దేశ్యం అనుకూలత',
    'PROJECT_SECTOR': 'ప్రాజెక్ట్ రంగం & కార్యాచరణ రకం',
    'Project Sector & Activity Type': 'ప్రాజెక్ట్ రంగం & కార్యాచరణ రకం',
    'Eligible Project Activities & Sector': 'ప్రాజెక్ట్ రంగం & కార్యాచరణ రకం',
    'BUSINESS_STAGE': 'వ్యాపార దశ అనుకూలత',
    'Business Stage Compatibility': 'వ్యాపార దశ అనుకూలత',
    'Project Stage / Greenfield Feasibility': 'వ్యాపార దశ అనుకూలత',
    'PROJECT_COST': 'ప్రాజెక్ట్ వ్యయ పరిమితులు',
    'Project Cost Bounds': 'ప్రాజెక్ట్ వ్యయ పరిమితులు',
    'Project Financing Scale & Ceilings': 'ప్రాజెక్ట్ వ్యయ పరిమితులు',
    'FINANCING_CEILING': 'రుణ మొత్తం గరిష్ట పరిమితి',
    'Financing Amount Ceiling': 'రుణ మొత్తం గరిష్ట పరిమితి',
    'GEOGRAPHIC_AVAILABILITY': 'భౌగోళిక లభ్యత',
    'Geographic Availability': 'భౌగోళిక లభ్యత',
    'Geographical State & District Jurisdiction': 'భౌగోళిక లభ్యత',
    'PROMOTER_CONTRIBUTION': 'ప్రమోటర్ సొంత వాటా',
    'Promoter Own Contribution Feasibility': 'ప్రమోటర్ సొంత వాటా',
    'EDUCATIONAL_QUALIFICATION': 'తప్పనిసరి విద్యార్హత',
    'Mandatory Educational Qualification': 'తప్పనిసరి విద్యార్హత'
  },
  kn: {
    'PROFILE_COMPLETENESS': 'ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿಯ ಪರಿಪೂರ್ಣತೆ',
    'Profile Information Completeness': 'ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿಯ ಪರಿಪೂರ್ಣತೆ',
    'CATEGORY_ELIGIBILITY': 'ವರ್ಗ ಮತ್ತು ಫಲಾನುಭವಿಗಳ ಅರ್ಹತೆ',
    'Category & Beneficiary Eligibility': 'ವರ್ಗ ಮತ್ತು ಫಲಾನುಭವಿಗಳ ಅರ್ಹತೆ',
    'INCOME_ELIGIBILITY': 'ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ ಅರ್ಹತೆ',
    'Annual Family Income Eligibility': 'ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ ಅರ್ಹತೆ',
    'AGE_LIMIT': 'ಅರ್ಜಿದಾರರ ವಯೋಮಿತಿ',
    'Applicant Age Bracket': 'ಅರ್ಜಿದಾರರ ವಯೋಮಿತಿ',
    'Minimum & Maximum Age Limit': 'ಅರ್ಜಿದಾರರ ವಯೋಮಿತಿ',
    'PURPOSE_ALIGNMENT': 'ಹಣಕಾಸು ಉದ್ದೇಶ ಹೊಂದಾಣಿಕೆ',
    'Financing Purpose Alignment': 'ಹಣಕಾಸು ಉದ್ದೇಶ ಹೊಂದಾಣಿಕೆ',
    'PROJECT_SECTOR': 'ಪ್ರಾಜೆಕ್ಟ್ ವಲಯ ಮತ್ತು ಚಟುವಟಿಕೆ ಪ್ರಕಾರ',
    'Project Sector & Activity Type': 'ಪ್ರಾಜೆಕ್ಟ್ ವಲಯ ಮತ್ತು ಚಟುವಟಿಕೆ ಪ್ರಕಾರ',
    'Eligible Project Activities & Sector': 'ಪ್ರಾಜೆಕ್ಟ್ ವಲಯ ಮತ್ತು ಚಟುವಟಿಕೆ ಪ್ರಕಾರ',
    'BUSINESS_STAGE': 'ವ್ಯವಹಾರ ಹಂತ ಹೊಂದಾಣಿಕೆ',
    'Business Stage Compatibility': 'ವ್ಯವಹಾರ ಹಂತ ಹೊಂದಾಣಿಕೆ',
    'Project Stage / Greenfield Feasibility': 'ವ್ಯವಹಾರ ಹಂತ ಹೊಂದಾಣಿಕೆ',
    'PROJECT_COST': 'ಪ್ರಾಜೆಕ್ಟ್ ವೆಚ್ಚದ ಮಿತಿಗಳು',
    'Project Cost Bounds': 'ಪ್ರಾಜೆಕ್ಟ್ ವೆಚ್ಚದ ಮಿತಿಗಳು',
    'Project Financing Scale & Ceilings': 'ಪ್ರಾಜೆಕ್ಟ್ ವೆಚ್ಚದ ಮಿತಿಗಳು',
    'FINANCING_CEILING': 'ಸಾಲದ ಮೊತ್ತದ ಗರಿಷ್ಠ ಮಿತಿ',
    'Financing Amount Ceiling': 'ಸಾಲದ ಮೊತ್ತದ ಗರಿಷ್ಠ ಮಿತಿ',
    'GEOGRAPHIC_AVAILABILITY': 'ಭೌಗೋಳಿಕ ಲಭ್ಯತೆ',
    'Geographic Availability': 'ಭೌಗೋಳಿಕ ಲಭ್ಯತೆ',
    'Geographical State & District Jurisdiction': 'ಭೌಗೋಳಿಕ ಲಭ್ಯತೆ',
    'PROMOTER_CONTRIBUTION': 'ಪ್ರವರ್ತಕರ ಸ್ವಂತ ಕೊಡುಗೆ',
    'Promoter Own Contribution Feasibility': 'ಪ್ರವರ್ತಕರ ಸ್ವಂತ ಕೊಡುಗೆ',
    'EDUCATIONAL_QUALIFICATION': 'ಕಡ್ಡಾಯ ಶೈಕ್ಷಣಿಕ ಅರ್ಹತೆ',
    'Mandatory Educational Qualification': 'ಕಡ್ಡಾಯ ಶೈಕ್ಷಣಿಕ ಅರ್ಹತೆ'
  },
  ml: {
    'PROFILE_COMPLETENESS': 'പ്രൊഫൈൽ വിവരങ്ങളുടെ പൂർണ്ണത',
    'Profile Information Completeness': 'പ്രൊഫൈൽ വിവരങ്ങളുടെ പൂർണ്ണത',
    'CATEGORY_ELIGIBILITY': 'വിഭാഗവും ഗുണഭോക്തൃ യോഗ്യതയും',
    'Category & Beneficiary Eligibility': 'വിഭാഗവും ഗുണഭോക്തൃ യോഗ്യതയും',
    'INCOME_ELIGIBILITY': 'വാർഷിക കുടുംബ വരുമാന യോഗ്യത',
    'Annual Family Income Eligibility': 'വാർഷിക കുടുംബ വരുമാന യോഗ്യത',
    'AGE_LIMIT': 'അപേക്ഷകന്റെ പ്രായപരിധി',
    'Applicant Age Bracket': 'അപേക്ഷകന്റെ പ്രായപരിധി',
    'Minimum & Maximum Age Limit': 'അപേക്ഷകന്റെ പ്രായപരിധി',
    'PURPOSE_ALIGNMENT': 'വായ്പാ ലക്ഷ്യ അനുയോജ്യത',
    'Financing Purpose Alignment': 'വായ്പാ ലക്ഷ്യ അനുയോജ്യത',
    'PROJECT_SECTOR': 'പ്രോജക്ട് മേഖലയും പ്രവർത്തന തരവും',
    'Project Sector & Activity Type': 'പ്രോജക്ട് മേഖലയും പ്രവർത്തന തരവും',
    'Eligible Project Activities & Sector': 'പ്രോജക്ട് മേഖലയും പ്രവർത്തന തരവും',
    'BUSINESS_STAGE': 'ബിസിനസ്സ് ഘട്ട അനുയോജ്യത',
    'Business Stage Compatibility': 'ബിസിനസ്സ് ഘട്ട അനുയോജ്യത',
    'Project Stage / Greenfield Feasibility': 'ബിസിനസ്സ് ഘട്ട അനുയോജ്യത',
    'PROJECT_COST': 'പ്രോജക്ട് ചെലവ് പരിധികൾ',
    'Project Cost Bounds': 'പ്രോജക്ട് ചെലവ് പരിധികൾ',
    'Project Financing Scale & Ceilings': 'പ്രോജക്ട് ചെലവ് പരിധികൾ',
    'FINANCING_CEILING': 'വായ്പാ തുകയുടെ പരമാവധി പരിധി',
    'Financing Amount Ceiling': 'വായ്പാ തുകയുടെ പരമാവധി പരിധി',
    'GEOGRAPHIC_AVAILABILITY': 'ഭൂമിശാസ്ത്രപരമായ ലഭ്യത',
    'Geographic Availability': 'ഭൂമിശാസ്ത്രപരമായ ലഭ്യത',
    'Geographical State & District Jurisdiction': 'ഭൂമിശാസ്ത്രപരമായ ലഭ്യത',
    'PROMOTER_CONTRIBUTION': 'സംരംഭകന്റെ സ്വന്തം വിഹിതം',
    'Promoter Own Contribution Feasibility': 'സംരംഭകന്റെ സ്വന്തം വിഹിതം',
    'EDUCATIONAL_QUALIFICATION': 'നിർബന്ധിത വിദ്യാഭ്യാസ യോഗ്യത',
    'Mandatory Educational Qualification': 'നിർബന്ധിത വിദ്യാഭ്യാസ യോഗ്യത'
  }
};

export const STATUS_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    'PASS': 'PASS',
    'FAIL': 'FAIL',
    'WARNING': 'WARNING',
    'Active & Processing': 'Active & Processing',
    'Operational - Minor Delays': 'Operational - Minor Delays',
    'Processing Suspended': 'Processing Suspended',
    'Optimal Capacity': 'Optimal Capacity',
    'Healthy Load': 'Healthy Load',
    'Moderate Queue': 'Moderate Queue',
    'Elevated Load': 'Elevated Load',
    'Near Capacity / Constrained': 'Near Capacity / Constrained',
    'Same District': 'Same District',
    'Regional / Service Area': 'Regional / Service Area',
    'Statewide Unit': 'Statewide Unit',
    'Out of Area': 'Out of Area',
    'Verified official source': 'Verified official source',
    'Prototype scheme data': 'Prototype scheme data'
  },
  hi: {
    'PASS': 'सफल',
    'FAIL': 'अपात्र',
    'WARNING': 'चेतावनी',
    'Active & Processing': 'सक्रिय एवं प्रसंस्करण जारी',
    'Operational - Minor Delays': 'कार्यशील - मामूली विलंब',
    'Processing Suspended': 'प्रसंस्करण स्थगित',
    'Optimal Capacity': 'इष्टतम क्षमता',
    'Healthy Load': 'सामान्य भार',
    'Moderate Queue': 'मध्यम कतार',
    'Elevated Load': 'अधिक कार्यभार',
    'Near Capacity / Constrained': 'पूर्ण क्षमता के करीब / सीमित',
    'Same District': 'समान जिला (स्थानीय)',
    'Regional / Service Area': 'क्षेत्रीय / सेवा क्षेत्र',
    'Statewide Unit': 'राज्यस्तरीय इकाई',
    'Out of Area': 'क्षेत्र से बाहर',
    'Verified official source': 'सत्यापित आधिकारिक स्रोत',
    'Prototype scheme data': 'प्रोटोटाइप योजना डेटा'
  },
  pa: {
    'PASS': 'ਪਾਸ',
    'FAIL': 'ਅਯੋਗ',
    'WARNING': 'ਚੇਤਾਵਨੀ',
    'Active & Processing': 'ਸਰਗਰਮ ਅਤੇ ਪ੍ਰਕਿਰਿਆ ਜਾਰੀ',
    'Operational - Minor Delays': 'ਕਾਰਜਸ਼ੀਲ - ਮਾਮੂਲੀ ਦੇਰੀ',
    'Processing Suspended': 'ਪ੍ਰਕਿਰਿਆ ਮੁਅੱਤਲ',
    'Optimal Capacity': 'ਸਰਵੋਤਮ ਸਮਰੱਥਾ',
    'Healthy Load': 'ਸਧਾਰਨ ਲੋਡ',
    'Moderate Queue': 'ਦਰਮਿਆਨੀ ਕਤਾਰ',
    'Elevated Load': 'ਵੱਧ ਕੰਮ ਦਾ ਬੋਝ',
    'Near Capacity / Constrained': 'ਪੂਰੀ ਸਮਰੱਥਾ ਦੇ ਨੇੜੇ / ਸੀਮਤ',
    'Same District': 'ਉਹੀ ਜ਼ਿਲ੍ਹਾ (ਸਥਾਨਕ)',
    'Regional / Service Area': 'ਖੇਤਰੀ / ਸੇਵਾ ਖੇਤਰ',
    'Statewide Unit': 'ਰਾਜ ਪੱਧਰੀ ਯੂਨਿਟ',
    'Out of Area': 'ਖੇਤਰ ਤੋਂ ਬਾਹਰ',
    'Verified official source': 'ਪ੍ਰਮਾਣਿਤ ਅਧਿਕਾਰਤ ਸਰੋਤ',
    'Prototype scheme data': 'ਪ੍ਰੋਟੋਟਾਈਪ ਸਕੀਮ ਡੇਟਾ'
  },
  bn: {
    'PASS': 'উত্তীর্ণ',
    'FAIL': 'অনুপযুক্ত',
    'WARNING': 'সতর্কতা',
    'Active & Processing': 'সক্রিয় ও প্রক্রিয়াকরণ চলছে',
    'Operational - Minor Delays': 'কার্যকর - সামান্য বিলম্ব',
    'Processing Suspended': 'প্রক্রিয়াকরণ স্থগিত',
    'Optimal Capacity': 'অনুকূল ক্ষমতা',
    'Healthy Load': 'স্বাভাবিক লোড',
    'Moderate Queue': 'মাঝারি সারি',
    'Elevated Load': 'উচ্চ চাপ',
    'Near Capacity / Constrained': 'ক্ষমতার প্রান্তে / সীমাবদ্ধ',
    'Same District': 'একই জেলা (স্থানীয়)',
    'Regional / Service Area': 'আঞ্চলিক / সেবা এলাকা',
    'Statewide Unit': 'রাজ্যব্যাপী ইউনিট',
    'Out of Area': 'এলাকার বাইরে',
    'Verified official source': 'যাচাইকৃত সরকারি উৎস',
    'Prototype scheme data': 'প্রোটোটাইপ প্রকল্প তথ্য'
  },
  mr: {
    'PASS': 'पात्र',
    'FAIL': 'अपात्र',
    'WARNING': 'इशारा',
    'Active & Processing': 'सक्रिय व प्रक्रिया सुरू',
    'Operational - Minor Delays': 'कार्यरत - किंचित विलंब',
    'Processing Suspended': 'प्रक्रिया स्थगित',
    'Optimal Capacity': 'इष्टतम क्षमता',
    'Healthy Load': 'सामान्य भार',
    'Moderate Queue': 'मध्यम रांग',
    'Elevated Load': 'जास्त ताण',
    'Near Capacity / Constrained': 'कमाल क्षमतेजवळ / मर्यादित',
    'Same District': 'तोच जिल्हा (स्थानिक)',
    'Regional / Service Area': 'प्रादेशिक / सेवा क्षेत्र',
    'Statewide Unit': 'राज्यस्तरीय घटक',
    'Out of Area': 'कार्यक्षेत्राबाहेर',
    'Verified official source': 'सत्यापित अधिकृत स्रोत',
    'Prototype scheme data': 'प्रोटोटाइप योजना माहिती'
  },
  gu: {
    'PASS': 'પાસ',
    'FAIL': 'અપાત્ર',
    'WARNING': 'ચેતવણી',
    'Active & Processing': 'સક્રિય અને પ્રક્રિયા ચાલુ',
    'Operational - Minor Delays': 'કાર્યરત - સહેજ વિલંબ',
    'Processing Suspended': 'પ્રક્રિયા સ્થગિત',
    'Optimal Capacity': 'શ્રેષ્ઠ ક્ષમતા',
    'Healthy Load': 'સામાન્ય લોડ',
    'Moderate Queue': 'મધ્યમ કતાર',
    'Elevated Load': 'વધારે વર્કલોડ',
    'Near Capacity / Constrained': 'સંપૂર્ણ ક્ષમતાની નજીક / મર્યાદિત',
    'Same District': 'તે જ જિલ્લો (સ્થાનિક)',
    'Regional / Service Area': 'પ્રાદેશિક / સેવા ક્ષેત્ર',
    'Statewide Unit': 'રાજ્યવ્યાપી એકમ',
    'Out of Area': 'વિસ્તાર બહાર',
    'Verified official source': 'પ્રમાણિત સત્તાવાર સ્ત્રોત',
    'Prototype scheme data': 'પ્રોટોટાઇપ યોજના ડેટા'
  },
  ta: {
    'PASS': 'தேர்ச்சி',
    'FAIL': 'தகுதியற்றது',
    'WARNING': 'எச்சரிக்கை',
    'Active & Processing': 'செயலில் உள்ளது & பரிசீலனை',
    'Operational - Minor Delays': 'செயல்பாட்டில் - சிறிய தாமதம்',
    'Processing Suspended': 'செயலாக்கம் நிறுத்திவைக்கப்பட்டுள்ளது',
    'Optimal Capacity': 'உகந்த திறன்',
    'Healthy Load': 'சாதாரண பணிச்சுமை',
    'Moderate Queue': 'மிதமான வரிசை',
    'Elevated Load': 'அதிக பணிச்சுமை',
    'Near Capacity / Constrained': 'முழு கொள்ளளவை நெருங்குகிறது',
    'Same District': 'அதே மாவட்டம் (உள்ளூர்)',
    'Regional / Service Area': 'மண்டல / சேவை பகுதி',
    'Statewide Unit': 'மாநில அளவிலான பிரிவு',
    'Out of Area': 'பகுதிக்கு வெளியே',
    'Verified official source': 'சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ ஆதாரம்',
    'Prototype scheme data': 'மாதிரி திட்டத் தரவு'
  },
  te: {
    'PASS': 'ఉత్తీర్ణం',
    'FAIL': 'అనర్హత',
    'WARNING': 'హెచ్చరిక',
    'Active & Processing': 'యాక్టివ్ & ప్రాసెసింగ్',
    'Operational - Minor Delays': 'పనిచేస్తోంది - స్వల్ప ఆలస్యం',
    'Processing Suspended': 'ప్రాసెసింగ్ నిలిపివేయబడింది',
    'Optimal Capacity': 'అనుకూల సామర్థ్యం',
    'Healthy Load': 'సాధారణ పనిభారం',
    'Moderate Queue': 'మితమైన నిరీక్షణ',
    'Elevated Load': 'అధిక భారం',
    'Near Capacity / Constrained': 'గరిష్ట సామర్థ్యానికి దగ్గరగా / పరిమితం',
    'Same District': 'అదే జిల్లా (స్థానిక)',
    'Regional / Service Area': 'ప్రాంతీయ / సేవా ప్రాంతం',
    'Statewide Unit': 'రాష్ట్ర స్థాయి విభాగం',
    'Out of Area': 'ప్రాంతం వెలుపల',
    'Verified official source': 'ధృవీకరించబడిన అధికారిక మూలం',
    'Prototype scheme data': 'ప్రోటోటైప్ పథకం డేటా'
  },
  kn: {
    'PASS': 'ತೇರ್ಗಡೆ',
    'FAIL': 'ಅನರ್ಹ',
    'WARNING': 'ಎಚ್ಚರಿಕೆ',
    'Active & Processing': 'ಸಕ್ರಿಯ ಮತ್ತು ಪ್ರಕ್ರಿಯೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ',
    'Operational - Minor Delays': 'ಕಾರ್ಯನಿರತ - ಸಣ್ಣ ವಿಳಂಬ',
    'Processing Suspended': 'ಪ್ರಕ್ರಿಯೆ ಸ್ಥಗಿತಗೊಳಿಸಲಾಗಿದೆ',
    'Optimal Capacity': 'ಸೂಕ್ತ ಸಾಮರ್ಥ್ಯ',
    'Healthy Load': 'ಸಾಮಾನ್ಯ ಹೊರೆ',
    'Moderate Queue': 'ಮಧ್ಯಮ ಸಾಲು',
    'Elevated Load': 'ಹೆಚ್ಚಿದ ಕೆಲಸದ ಹೊರೆ',
    'Near Capacity / Constrained': 'ಗರಿಷ್ಠ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ಹತ್ತಿರ / ಸೀಮಿತ',
    'Same District': 'ಅದೇ ಜಿಲ್ಲೆ (ಸ್ಥಳೀಯ)',
    'Regional / Service Area': 'ಪ್ರಾದೇಶಿಕ / ಸೇವಾ ಪ್ರದೇಶ',
    'Statewide Unit': 'ರಾಜ್ಯವ್ಯಾಪಿ ಘಟಕ',
    'Out of Area': 'ಪ್ರದೇಶದ ಹೊರಗೆ',
    'Verified official source': 'ಪರಿಶೀಲಿಸಿದ ಅಧಿಕೃತ ಮೂಲ',
    'Prototype scheme data': 'ಮಾದರಿ ಯೋಜನೆ ಡೇಟಾ'
  },
  ml: {
    'PASS': 'പാസ്സായി',
    'FAIL': 'യോഗ്യതയില്ല',
    'WARNING': 'മുന്നറിയിപ്പ്',
    'Active & Processing': 'സജീവം & പ്രോസസ്സിംഗ് നടക്കുന്നു',
    'Operational - Minor Delays': 'പ്രവർത്തനക്ഷമം - ചെറിയ കാലതാമസം',
    'Processing Suspended': 'പ്രോസസ്സിംഗ് നിർത്തിവെച്ചു',
    'Optimal Capacity': 'അനുയോജ്യമായ ശേഷി',
    'Healthy Load': 'സാധാരണ ജോലിഭാരം',
    'Moderate Queue': 'മിതമായ നിര',
    'Elevated Load': 'കൂടിയ ജോലിഭാരം',
    'Near Capacity / Constrained': 'പരമാവധി ശേഷിക്ക് അടുത്ത് / പരിമിതം',
    'Same District': 'അതേ ജില്ല (പ്രാദേശികം)',
    'Regional / Service Area': 'മേഖലാ / സേവന പരിധി',
    'Statewide Unit': 'സംസ്ഥാനതല യൂണിറ്റ്',
    'Out of Area': 'പരിധിക്ക് പുറത്ത്',
    'Verified official source': 'സ്ഥിരീകരിച്ച ഔദ്യോഗിക ഉറവിടം',
    'Prototype scheme data': 'മാതൃകാ പദ്ധതി വിവരങ്ങൾ'
  }
};

export function translateRuleName(
  ruleOrCode: string | { ruleName?: string; ruleCode?: string },
  lang: Language
): string {
  if (!ruleOrCode) return '';
  if (typeof ruleOrCode === 'object') {
    if (ruleOrCode.ruleCode) {
      const codeMatch = RULE_NAMES[lang]?.[ruleOrCode.ruleCode] || RULE_NAMES.en?.[ruleOrCode.ruleCode];
      if (codeMatch) return codeMatch;
    }
    const name = ruleOrCode.ruleName || '';
    return RULE_NAMES[lang]?.[name] || RULE_NAMES.en?.[name] || name;
  }
  return RULE_NAMES[lang]?.[ruleOrCode] || RULE_NAMES.en?.[ruleOrCode] || ruleOrCode;
}

export function translateStatus(status: string, lang: Language): string {
  if (!status) return '';
  return STATUS_TRANSLATIONS[lang]?.[status] || STATUS_TRANSLATIONS.en?.[status] || status;
}

export type ExplanationInput = string | {
  explanation: string;
  ruleCode?: string;
  params?: Record<string, string | number>;
};

export function translateExplanation(
  input: ExplanationInput,
  lang: Language,
  overrideParams?: Record<string, string | number>
): string {
  let text = '';
  let ruleCode: string | undefined = undefined;
  let params: Record<string, string | number> = {};

  if (typeof input === 'object' && input !== null) {
    text = input.explanation || '';
    ruleCode = input.ruleCode;
    params = { ...(input.params || {}), ...(overrideParams || {}) };
  } else {
    text = String(input || '');
    params = overrideParams || {};
  }

  if (lang === 'en' || !text) {
    return text;
  }

  // 1. RULE CODE LEVEL TEMPLATE DISPATCH
  if (ruleCode === 'PROFILE_COMPLETENESS') {
    if (text.includes('Missing mandatory')) {
      const f = params.fields || '';
      if (lang === 'hi') return `अनिवार्य मूल्यांकन विवरण अनुपलब्ध हैं: ${f}। कृपया अपनी प्रोफ़ाइल में सुधार करें।`;
      if (lang === 'pa') return `ਲਾਜ਼ਮੀ ਮੁਲਾਂਕਣ ਵੇਰਵੇ ਗੁੰਮ ਹਨ: ${f}। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਅਪਡੇਟ ਕਰੋ।`;
      if (lang === 'bn') return `বাধ্যতামূলক মূল্যায়নের তথ্য অনুপস্থিত: ${f}। অনুগ্রহ করে আপনার প্রোফাইল আপডেট করুন।`;
      if (lang === 'mr') return `अनिवार्य मूल्यमापन तपशील गहाळ आहेत: ${f}. कृपया आपले प्रोफाइल अपडेट करा.`;
      if (lang === 'gu') return `ફરજિયાત આકારણી વિગતો ખૂટે છે: ${f}. કૃપા કરીને તમારી પ્રોફાઇલ અપડેટ કરો.`;
      if (lang === 'ta') return `கட்டாய மதிப்பீட்டு விவரங்கள் விடுபட்டுள்ளன: ${f}. உங்கள் சுயவிவரத்தை புதுப்பிக்கவும்.`;
      if (lang === 'te') return `తప్పనిసరి అంచనా వివరాలు లేవు: ${f}. దయచేసి మీ ప్రొఫైల్‌ను నవీకరించండి.`;
      if (lang === 'kn') return `ಕಡ್ಡಾಯ ಮೌಲ್ಯಮಾಪನ ವಿವರಗಳು ಕಾಣೆಯಾಗಿವೆ: ${f}. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಿ.`;
      if (lang === 'ml') return `നിർബന്ധിത വിലയിരുത്തൽ വിവരങ്ങൾ അപൂർണ്ണമാണ്: ${f}. ദയവായി നിങ്ങളുടെ പ്രൊഫൈൽ അപ്ഡേറ്റ് ചെയ്യുക.`;
    } else {
      if (lang === 'hi') return 'सभी अनिवार्य प्रोफ़ाइल और परियोजना विवरण पूर्ण रूप से उपलब्ध हैं।';
      if (lang === 'pa') return 'ਸਾਰੇ ਲਾਜ਼ਮੀ ਪ੍ਰੋਫਾਈਲ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਵੇਰਵੇ ਪੂਰੇ ਹਨ।';
      if (lang === 'bn') return 'সমস্ত বাধ্যতামূলক প্রোফাইল এবং প্রকল্প বিবরণ সম্পূর্ণ রয়েছে।';
      if (lang === 'mr') return 'सर्व अनिवार्य प्रोफाइल आणि प्रकल्प तपशील पूर्ण भरलेले आहेत.';
      if (lang === 'gu') return 'તમામ ફરજિયાત પ્રોફાઇલ અને પ્રોજેક્ટ વિગતો પૂર્ણ થયેલ છે.';
      if (lang === 'ta') return 'அனைத்து கட்டாய சுயவிவர மற்றும் திட்ட விவரங்களும் முழுமையாக வழங்கப்பட்டுள்ளன.';
      if (lang === 'te') return 'అన్ని తప్పనిసరి ప్రొఫైల్ మరియు ప్రాజెక్ట్ వివరాలు పూర్తిగా అందించబడ్డాయి.';
      if (lang === 'kn') return 'ಎಲ್ಲಾ ಕಡ್ಡಾಯ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಪ್ರಾಜೆಕ್ಟ್ ವಿವರಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಒದಗಿಸಲಾಗಿದೆ.';
      if (lang === 'ml') return 'എല്ലാ നിർബന്ധിത പ്രൊഫൈൽ, പ്രോജക്ട് വിവരങ്ങളും പൂർണ്ണമായി നൽകിയിട്ടുണ്ട്.';
    }
  }

  if (ruleCode === 'AGE_LIMIT' || text.includes('Applicant age')) {
    const age = params.age || text.match(/\((\d+)\s*years\)/)?.[1] || text.match(/(\d+)\s*years/)?.[1] || '';
    const minAge = params.minAge || text.match(/minimum required age of (\d+)/)?.[1] || '18';
    const maxAge = params.maxAge || text.match(/maximum permitted age of (\d+)/)?.[1] || text.match(/to (\d+) years/)?.[1] || '65';

    if (text.includes('is below the minimum required age')) {
      if (lang === 'hi') return `आवेदक की आयु (${age} वर्ष) न्यूनतम आवश्यक आयु ${minAge} वर्ष से कम है।`;
      if (lang === 'pa') return `ਬਿਨੈਕਾਰ ਦੀ ਉਮਰ (${age} ਸਾਲ) ਘੱਟੋ-ਘੱਟ ਲੋੜੀਂਦੀ ਉਮਰ ${minAge} ਸਾਲ ਤੋਂ ਘੱਟ ਹੈ।`;
      if (lang === 'bn') return `আবেদনকারীর বয়স (${age} বছর) ন্যূনতম প্রয়োজনীয় বয়স ${minAge} বছরের কম।`;
      if (lang === 'mr') return `अर्जदाराचे वय (${age} वर्षे) किमान आवश्यक वय ${minAge} वर्षांपेक्षा कमी आहे.`;
      if (lang === 'gu') return `અરજદારની ઉંમર (${age} વર્ષ) લઘુત્તમ જરૂરી વય ${minAge} વર્ષ કરતાં ઓછી છે.`;
      if (lang === 'ta') return `விண்ணப்பதாரரின் வயது (${age} ஆண்டுகள்) தேவையான குறைந்தபட்ச வயது ${minAge} ஆண்டுகளை விட குறைவு.`;
      if (lang === 'te') return `దరఖాస్తుదారు వయస్సు (${age} సంవత్సరాలు) కనీస అవసరమైన వయస్సు ${minAge} సంవత్సరాల కంటే తక్కువ.`;
      if (lang === 'kn') return `ಅರ್ಜಿದಾರರ ವಯಸ್ಸು (${age} ವರ್ಷಗಳು) ಕನಿಷ್ಠ ಅಗತ್ಯವಿರುವ ವಯಸ್ಸು ${minAge} ವರ್ಷಗಳಿಗಿಂತ ಕಡಿಮೆಯಿದೆ.`;
      if (lang === 'ml') return `അപേക്ഷകന്റെ പ്രായം (${age} വയസ്സ്) കുറഞ്ഞ പ്രായമായ ${minAge} വയസ്സിനേക്കാൾ കുറവാണ്.`;
    } else if (text.includes('exceeds the maximum permitted age')) {
      if (lang === 'hi') return `आवेदक की आयु (${age} वर्ष) इस योजना के लिए अधिकतम अनुमत आयु ${maxAge} वर्ष से अधिक है।`;
      if (lang === 'pa') return `ਬਿਨੈਕਾਰ ਦੀ ਉਮਰ (${age} ਸਾਲ) ਇਸ ਸਕੀਮ ਲਈ ਵੱਧ ਤੋਂ ਵੱਧ ਉਮਰ ${maxAge} ਸਾਲ ਤੋਂ ਵੱਧ ਹੈ।`;
      if (lang === 'bn') return `আবেদনকারীর বয়স (${age} বছর) এই প্রকল্পের সর্বোচ্চ অনুমোদিত বয়স ${maxAge} বছরের বেশি।`;
      if (lang === 'mr') return `अर्जदाराचे वय (${age} वर्षे) या योजनेच्या कमाल मर्यादेपेक्षा (${maxAge} वर्षे) जास्त आहे.`;
      if (lang === 'gu') return `અરજદારની ઉંમર (${age} વર્ષ) આ યોજના માટે મહત્તમ માન્ય વય ${maxAge} વર્ષ કરતાં વધુ છે.`;
      if (lang === 'ta') return `விண்ணப்பதாரரின் வயது (${age} ஆண்டுகள்) திட்டத்தின் அதிகபட்ச வயது ${maxAge} ஆண்டுகளை விட அதிகம்.`;
      if (lang === 'te') return `దరఖాస్తుదారు వయస్సు (${age} సంవత్సరాలు) ఈ పథకం గరిష్ట అనుమతించబడిన వయస్సు ${maxAge} సంవత్సరాలను మించిపోయింది.`;
      if (lang === 'kn') return `ಅರ್ಜಿದಾರರ ವಯಸ್ಸು (${age} ವರ್ಷಗಳು) ಈ ಯೋಜನೆಗೆ ಗರಿಷ್ಠ ಅನುಮತಿಸಲಾದ ವಯಸ್ಸು ${maxAge} ವರ್ಷಗಳನ್ನು ಮೀರಿದೆ.`;
      if (lang === 'ml') return `അപേക്ഷകന്റെ പ്രായം (${age} വയസ്സ്) അനുവദനീയമായ പരമാവധി പ്രായമായ ${maxAge} വയസ്സിന് മുകളിലാണ്.`;
    } else if (text.includes('is within the eligible range') || text.includes('is within eligible window')) {
      if (lang === 'hi') return `आवेदक की आयु (${age} वर्ष) ${minAge} से ${maxAge} वर्ष की पात्र सीमा के भीतर है।`;
      if (lang === 'pa') return `ਬਿਨੈਕਾਰ ਦੀ ਉਮਰ (${age} ਸਾਲ) ${minAge} ਤੋਂ ${maxAge} ਸਾਲ ਦੀ ਯੋਗ ਸੀਮਾ ਦੇ ਅੰਦਰ ਹੈ।`;
      if (lang === 'bn') return `আবেদনকারীর বয়স (${age} বছর) ${minAge} থেকে ${maxAge} বছরের গ্রহণযোগ্য সীমার মধ্যে রয়েছে।`;
      if (lang === 'mr') return `अर्जदाराचे वय (${age} वर्षे) ${minAge} ते ${maxAge} वर्षांच्या पात्र मर्यादेत आहे.`;
      if (lang === 'gu') return `અરજદારની ઉંમર (${age} વર્ષ) ${minAge} થી ${maxAge} વર્ષની પાત્ર મર્યાદામાં છે.`;
      if (lang === 'ta') return `விண்ணப்பதாரரின் வயது (${age} ஆண்டுகள்) ${minAge} முதல் ${maxAge} ஆண்டுகள் வரை அனுமதிக்கப்பட்ட வரம்பிற்குள் உள்ளது.`;
      if (lang === 'te') return `దరఖాస్తుదారు వయస్సు (${age} సంవత్సరాలు) ${minAge} నుండి ${maxAge} సంవత్సరాల అర్హత పరిధిలో ఉంది.`;
      if (lang === 'kn') return `ಅರ್ಜಿದಾರರ ವಯಸ್ಸು (${age} ವರ್ಷಗಳು) ${minAge} ರಿಂದ ${maxAge} ವರ್ಷಗಳ ಅರ್ಹತಾ ಮಿತಿಯೊಳಗೆ ಇದೆ.`;
      if (lang === 'ml') return `അപേക്ഷകന്റെ പ്രായം (${age} വയസ്സ്) ${minAge} മുതൽ ${maxAge} വയസ്സ് വരെയുള്ള അനുവദനീയമായ പരിധിക്കുള്ളിലാണ്.`;
    }
  }

  if (ruleCode === 'INCOME_ELIGIBILITY' || text.includes('annual family income') || text.includes('Reported annual family income')) {
    const income = params.income || text.match(/\((₹?[0-9,]+)\)/)?.[1] || '';
    const limit = params.limit || text.match(/ceiling of (₹?[0-9,]+)/)?.[1] || text.match(/limit of (₹?[0-9,]+)/)?.[1] || '';

    if (text.includes('exceeds the scheme limit') || text.includes('exceeds the scheme ceiling')) {
      if (lang === 'hi') return `दर्ज वार्षिक पारिवारिक आय (${income}) योजना की अधिकतम सीमा ${limit}/वर्ष से अधिक है।`;
      if (lang === 'pa') return `ਦਰਜ ਕੀਤੀ ਸਾਲਾਨਾ ਪਰਿਵਾਰਕ ਆਮਦਨ (${income}) ਸਕੀਮ ਦੀ ਹੱਦ ${limit}/ਸਾਲ ਤੋਂ ਵੱਧ ਹੈ।`;
      if (lang === 'bn') return `নথিভুক্ত বার্ষিক পারিবারিক আয় (${income}) প্রকল্পের সর্বোচ্চ সীমা ${limit}/বছরের চেয়ে বেশি।`;
      if (lang === 'mr') return `नोंदवलेले कौटुंबिक वार्षिक उत्पन्न (${income}) योजनेच्या कमाल मर्यादेपेक्षा (${limit}/वर्ष) जास्त आहे.`;
      if (lang === 'gu') return `નોંધાયેલ વાર્ષિક કૌટુંબિક આવક (${income}) યોજનાની મર્યાદા ${limit}/વર્ષ કરતાં વધુ છે.`;
      if (lang === 'ta') return `பதிவு செய்யப்பட்ட ஆண்டு குடும்ப வருமானம் (${income}) திட்டத்தின் உச்சவரம்பான ${limit}/ஆண்டு-ஐ விட அதிகம்.`;
      if (lang === 'te') return `నమోదు చేసిన వార్షిక కుటుంబ ఆదాయం (${income}) పథకం గరిష్ట పరిమితి ${limit}/సంవత్సరం కంటే ఎక్కువ.`;
      if (lang === 'kn') return `ದಾಖಲಿಸಲಾದ ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ (${income}) ಯೋಜನೆಯ ಗರಿಷ್ಠ ಮಿತಿ ${limit}/ವರ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿದೆ.`;
      if (lang === 'ml') return `രേഖപ്പെടുത്തിയ വാർഷിക കുടുംബ വരുമാനം (${income}) പദ്ധതിയുടെ പരിധിയായ ${limit}/വർഷം എന്നതിനേക്കാൾ കൂടുതലാണ്.`;
    } else if (text.includes('is within the scheme ceiling') || text.includes('within threshold limit')) {
      if (lang === 'hi') return `दर्ज वार्षिक पारिवारिक आय (${income}) योजना की निर्धारित सीमा ${limit} के अंतर्गत है।`;
      if (lang === 'pa') return `ਦਰਜ ਕੀਤੀ ਗਈ ਸਾਲਾਨਾ ਪਰਿਵਾਰਕ ਆਮਦਨ (${income}) ਸਕੀਮ ਦੀ ਹੱਦ ${limit} ਦੇ ਅੰਦਰ ਹੈ।`;
      if (lang === 'bn') return `নথিভুক্ত বার্ষিক পারিবারিক আয় (${income}) প্রকল্পের নির্ধারিত সীমা ${limit}-এর মধ্যে রয়েছে।`;
      if (lang === 'mr') return `नोंदवलेले कौटुंबिक वार्षिक उत्पन्न (${income}) योजनेच्या विहित मर्यादेत (${limit}) आहे.`;
      if (lang === 'gu') return `નોંધાયેલ વાર્ષિક કૌટુંબિક આવક (${income}) યોજનાની મર્યાદા ${limit} ની અંદર છે.`;
      if (lang === 'ta') return `பதிவு செய்யப்பட்ட ஆண்டு குடும்ப வருமானம் (${income}) திட்ட உச்சவரம்பான ${limit}-க்குள் உள்ளது.`;
      if (lang === 'te') return `నమోదు చేసిన వార్షిక కుటుంబ ఆదాయం (${income}) పథకం పరిమితి ${limit} లోబడి ఉంది.`;
      if (lang === 'kn') return `ದಾಖಲಿಸಲಾದ ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ (${income}) ಯೋಜನೆಯ ಮಿತಿ ${limit} ಒಳಗೆ ಇದೆ.`;
      if (lang === 'ml') return `രേഖപ്പെടുത്തിയ വാർഷിക കുടുംബ വരുമാനം (${income}) പദ്ധതി പരിധിയായ ${limit}-ന് ഉള്ളിലാണ്.`;
    } else if (text.includes('no upper family income limit restriction') || text.includes('without income ceiling')) {
      if (lang === 'hi') return 'इस योजना में पारिवारिक आय की कोई ऊपरी सीमा नहीं है।';
      if (lang === 'pa') return 'ਇਸ ਸਕੀਮ ਵਿੱਚ ਪਰਿਵਾਰਕ ਆਮਦਨ ਦੀ ਕੋਈ ਉੱਪਰਲੀ ਸੀਮਾ ਨਹੀਂ ਹੈ।';
      if (lang === 'bn') return 'এই প্রকল্পে পারিবারিক আয়ের কোনো ঊর্ধ্বসীমা নেই।';
      if (lang === 'mr') return 'या योजनेमध्ये कौटुंबिक उत्पन्नाची कोणतीही कमाल मर्यादा नाही.';
      if (lang === 'gu') return 'આ યોજનામાં કૌટુંબિક આવકની કોઈ ઉપલી મર્યાદા નથી.';
      if (lang === 'ta') return 'இந்தத் திட்டத்தில் குடும்ப வருமானத்திற்கான உச்சவரம்பு ஏதுமில்லை.';
      if (lang === 'te') return 'ఈ పథకంలో కుటుంబ ఆదాయానికి ఎలాంటి గరిష్ట పరిమితి లేదు.';
      if (lang === 'kn') return 'ಈ ಯೋಜನೆಯಲ್ಲಿ ಕುಟುಂಬದ ಆದಾಯದ ಯಾವುದೇ ಗರಿಷ್ಠ ಮಿತಿಯಿಲ್ಲ.';
      if (lang === 'ml') return 'ഈ പദ്ധതിയിൽ കുടുംബ വരുമാനത്തിന് ഉയർന്ന പരിധിയില്ല.';
    }
  }

  if (ruleCode === 'CATEGORY_ELIGIBILITY' || text.includes('Stand-Up India') || text.includes('Mahila Samriddhi') || text.includes('Applicant category')) {
    if (text.includes('Eligible under Stand-Up India mandate')) {
      if (lang === 'hi') return 'स्टैंड-अप इंडिया नियम के तहत अनुसूचित जाति / जनजाति अथवा महिला उद्यमी के रूप में पात्र।';
      if (lang === 'pa') return 'ਸਟੈਂਡ-ਅੱਪ ਇੰਡੀਆ ਨਿਯਮਾਂ ਅਧੀਨ ਅਨੁਸੂਚਿਤ ਜਾਤੀ / ਜਨਜਾਤੀ ਜਾਂ ਮਹਿਲਾ ਉੱਦਮੀ ਵਜੋਂ ਯੋਗ।';
      if (lang === 'bn') return 'স্ট্যান্ড-আপ ইন্ডিয়ার নির্দেশিকা অনুযায়ী SC / ST বা নারী উদ্যোক্তা হিসেবে যোগ্য।';
      if (lang === 'mr') return 'स्टँड-अप इंडिया नियमांनुसार SC/ST किंवा महिला उद्योजक म्हणून पात्र.';
      if (lang === 'gu') return 'સ્ટેન્ડ-અપ ઇન્ડિયા નિયમો હેઠળ SC/ST અથવા મહિલા ઉદ્યોગસાહસિક તરીકે પાત્ર.';
      if (lang === 'ta') return 'ஸ்டாண்ட்-அப் இந்தியா விதிகளின் கீழ் SC/ST அல்லது பெண் தொழில்முனைவோராக தகுதியுடையவர்.';
      if (lang === 'te') return 'స్టాండ్-అప్ ఇండియా నిబంధనల ప్రకారం SC/ST లేదా మహిళా వ్యవస్థాపకురాలిగా అర్హత ఉంది.';
      if (lang === 'kn') return 'ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ನಿಯಮಗಳ ಅಡಿಯಲ್ಲಿ SC/ST ಅಥವಾ ಮಹಿಳಾ ಉದ್ಯಮಿಯಾಗಿ ಅರ್ಹತೆ ಇದೆ.';
      if (lang === 'ml') return 'സ്റ്റാൻഡ്-അപ്പ് ഇന്ത്യ ചട്ടങ്ങൾ പ്രകാരം SC/ST അല്ലെങ്കിൽ വനിതാ സംരംഭകയായി അർഹതയുണ്ട്.';
    } else if (text.includes('Stand-Up India requires the entrepreneur to be either SC, ST, or a Woman')) {
      if (lang === 'hi') return 'स्टैंड-अप इंडिया योजना केवल अनुसूचित जाति (SC), अनुसूचित जनजाति (ST), या किसी भी वर्ग की महिला उद्यमियों के लिए है।';
      if (lang === 'pa') return 'ਸਟੈਂਡ-ਅੱਪ ਇੰਡੀਆ ਯੋਜਨਾ ਸਿਰਫ਼ SC, ST ਜਾਂ ਕਿਸੇ ਵੀ ਵਰਗ ਦੀਆਂ ਮਹਿਲਾ ਉੱਦਮੀਆਂ ਲਈ ਹੈ।';
      if (lang === 'bn') return 'স্ট্যান্ড-আপ ইন্ডিয়া প্রকল্প শুধুমাত্র SC, ST বা যেকোনো শ্রেণির নারী উদ্যোক্তাদের জন্য প্রযোজ্য।';
      if (lang === 'mr') return 'स्टँड-अप इंडिया योजना फक्त SC, ST किंवा कोणत्याही प्रवर्गातील महिला उद्योजकांसाठी आहे.';
      if (lang === 'gu') return 'સ્ટેન્ડ-અપ ઇન્ડિયા યોજના ફક્ત SC, ST અથવા કોઈપણ વર્ગની મહિલા ઉદ્યોગસાહસિકો માટે છે.';
      if (lang === 'ta') return 'ஸ்டாண்ட்-அப் இந்தியா திட்டம் SC, ST அல்லது பெண்கள் தொழில்முனைவோருக்கு மட்டுமே பொருந்தும்.';
      if (lang === 'te') return 'స్టాండ్-అప్ ఇండియా పథకం కేవలం SC, ST లేదా మహిళా వ్యవస్థాపకులకు మాత్రమే వర్తిస్తుంది.';
      if (lang === 'kn') return 'ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಯೋಜನೆಯು SC, ST ಅಥವಾ ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಮಾತ್ರ ಅನ್ವಯಿಸುತ್ತದೆ.';
      if (lang === 'ml') return 'സ്റ്റാൻഡ്-അപ്പ് ഇന്ത്യ പദ്ധതി SC, ST അല്ലെങ്കിൽ വനിതാ സംരംഭകർക്ക് മാത്രമുള്ളതാണ്.';
    } else if (text.includes('exclusively reserved for women entrepreneurs')) {
      if (lang === 'hi') return 'महिला समृद्धि योजना विशेष रूप से महिला उद्यमियों के लिए आरक्षित है।';
      if (lang === 'pa') return 'ਮਹਿਲਾ ਸਮ੍ਰਿੱਧੀ ਯੋਜਨਾ ਵਿਸ਼ੇਸ਼ ਤੌਰ ਤੇ ਮਹਿਲਾ ਉੱਦਮੀਆਂ ਲਈ ਰਾਖਵੀਂ ਹੈ।';
      if (lang === 'bn') return 'মহিলা সমৃদ্ধি যোজনা বিশেষভাবে নারী উদ্যোক্তাদের জন্য সংরক্ষিত।';
      if (lang === 'mr') return 'महिला समृद्धी योजना केवळ महिला उद्योजकांसाठी राखीव आहे.';
      if (lang === 'gu') return 'મહિલા સમૃદ્ધિ યોજના ફક્ત મહિલા ઉદ્યોગસાહસિકો માટે અનામત છે.';
      if (lang === 'ta') return 'மகிளா சம்ரித்தி யோஜனா பெண் தொழில்முனைவோருக்கு மட்டுமே ஒதுக்கப்பட்டுள்ளது.';
      if (lang === 'te') return 'మహిళా సమృద్ధి యోజన మహిళా వ్యవస్థాపకులకు మాత్రమే కేటాయించబడింది.';
      if (lang === 'kn') return 'ಮಹಿಳಾ ಸಮೃದ್ಧಿ ಯೋಜನೆಯು ಕೇವಲ ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಮೀಸಲಾಗಿದೆ.';
      if (lang === 'ml') return 'മഹിളാ സമൃദ്ധി യോജന വനിതാ സംരംഭകർക്കായി മാത്രം നീക്കിവെച്ചിട്ടുള്ളതാണ്.';
    } else if (text.includes('is eligible for this scheme')) {
      if (lang === 'hi') return 'आवेदक का सामाजिक वर्ग इस योजना के लिए पूरी तरह पात्र है।';
      if (lang === 'pa') return 'ਬਿਨੈਕਾਰ ਦੀ ਸ਼੍ਰੇਣੀ ਇਸ ਸਕੀਮ ਲਈ ਪੂਰੀ ਤਰ੍ਹਾਂ ਯੋਗ ਹੈ।';
      if (lang === 'bn') return 'আবেদনকারীর সামাজিক শ্রেণি এই প্রকল্পের জন্য সম্পূর্ণ যোগ্য।';
      if (lang === 'mr') return 'अर्जदाराचा सामाजिक प्रवर्ग या योजनेसाठी पूर्णपणे पात्र आहे.';
      if (lang === 'gu') return 'અરજદારનો સામાજિક વર્ગ આ યોજના માટે સંપૂર્ણ પાત્ર છે.';
      if (lang === 'ta') return 'விண்ணப்பதாரரின் சமூகப் பிரிவு இத்திட்டத்திற்கு முழுமையாக தகுதியானது.';
      if (lang === 'te') return 'దరఖాస్తుదారు సామాజిక వర్గం ఈ పథకానికి పూర్తిగా అర్హమైనది.';
      if (lang === 'kn') return 'ಅರ್ಜಿದಾರರ ಸಾಮಾಜಿಕ ವರ್ಗವು ಈ ಯೋಜನೆಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಅರ್ಹವಾಗಿದೆ.';
      if (lang === 'ml') return 'അപേക്ഷകന്റെ സാമൂഹിക വിഭാഗം ഈ പദ്ധതിക്ക് പൂർണ്ണമായും അർഹമാണ്.';
    } else if (text.includes('not covered') || text.includes('not eligible')) {
      if (lang === 'hi') return 'आवेदक का सामाजिक वर्ग इस योजना के पात्रता मानदंडों के तहत शामिल नहीं है।';
      if (lang === 'pa') return 'ਬਿਨੈਕਾਰ ਦੀ ਸ਼੍ਰੇਣੀ ਇਸ ਸਕੀਮ ਅਧੀਨ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ।';
      if (lang === 'bn') return 'আবেদনকারীর সামাজিক শ্রেণি এই প্রকল্পের আওতাভুক্ত নয়।';
      if (lang === 'mr') return 'अर्जदाराचा सामाजिक प्रवर्ग या योजनेअंतर्गत समाविष्ट नाही.';
      if (lang === 'gu') return 'અરજદારનો સામાજિક વર્ગ આ યોજના હેઠળ આવરી લેવાયેલ નથી.';
      if (lang === 'ta') return 'விண்ணப்பதாரரின் சமூகப் பிரிவு இத்திட்டத்தின் கீழ் உள்ளடக்கப்படவில்லை.';
      if (lang === 'te') return 'దరఖాస్తుదారు సామాజిక వర్గం ఈ పథకం కింద కవర్ కాలేదు.';
      if (lang === 'kn') return 'ಅರ್ಜಿದಾರರ ಸಾಮಾಜಿಕ ವರ್ಗವು ಈ ಯೋಜನೆಯಡಿ ಒಳಪಟ್ಟಿಲ್ಲ.';
      if (lang === 'ml') return 'അപേക്ഷകന്റെ സാമൂഹിക വിഭാഗം ഈ പദ്ധതിക്ക് കീഴിൽ ഉൾപ്പെടുന്നില്ല.';
    }
  }

  if (ruleCode === 'PURPOSE_ALIGNMENT' || text.includes('Financing purpose')) {
    const purpose = params.purpose || text.match(/"([^"]+)"/)?.[1] || '';
    if (text.includes('is fully supported')) {
      if (lang === 'hi') return `वित्तपोषण का उद्देश्य "${purpose}" योजना के दिशा-निर्देशों के अनुरूप मान्य है।`;
      if (lang === 'pa') return `ਵਿੱਤ ਦਾ ਉਦੇਸ਼ "${purpose}" ਸਕੀਮ ਦੇ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਅਨੁਸਾਰ ਪ੍ਰਵਾਨਿਤ ਹੈ।`;
      if (lang === 'bn') return `অর্থায়নের উদ্দেশ্য "${purpose}" প্রকল্পের নির্দেশিকা অনুযায়ী সম্পূর্ণ সমর্থিত।`;
      if (lang === 'mr') return `वित्तपुरवठा उद्दिष्ट "${purpose}" योजनेच्या मार्गदर्शक तत्त्वांचे पालन करते.`;
      if (lang === 'gu') return `ધિરાણ હેતુ "${purpose}" યોજનાના માર્ગદર્શિકા હેઠળ સંપૂર્ણ માન્ય છે.`;
      if (lang === 'ta') return `நிதி நோக்கம் "${purpose}" திட்ட வழிகாட்டுதல்களின் கீழ் முழுமையாக ஏற்றுக்கொள்ளப்பட்டது.`;
      if (lang === 'te') return `ఫైనాన్సింగ్ ఉద్దేశ్యం "${purpose}" పథకం మార్గదర్శకాల ప్రకారం పూర్తిగా మద్దతు ఇవ్వబడింది.`;
      if (lang === 'kn') return `ಹಣಕಾಸು ಉದ್ದೇಶ "${purpose}" ಯೋಜನೆಯ ಮಾರ್ಗಸೂಚಿಗಳ ಅಡಿಯಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಅನುಮೋದಿಸಲ್ಪಟ್ಟಿದೆ.`;
      if (lang === 'ml') return `വായ്പാ ലക്ഷ്യം "${purpose}" പദ്ധതി മാർഗ്ഗനിർദ്ദേശങ്ങൾക്ക് കീഴിൽ പൂർണ്ണമായും അനുവദനീയമാണ്.`;
    } else if (text.includes('academic education loans')) {
      if (lang === 'hi') return 'यह योजना केवल उच्च शैक्षणिक शिक्षा ऋण के लिए है, व्यावसायिक उद्यमों के लिए नहीं।';
      if (lang === 'pa') return 'ਇਹ ਸਕੀਮ ਸਿਰਫ਼ ਉੱਚ ਸਿੱਖਿਆ ਕਰਜ਼ਿਆਂ ਲਈ ਹੈ, ਵਪਾਰਕ ਉੱਦਮਾਂ ਲਈ ਨਹੀਂ।';
      if (lang === 'bn') return 'এই প্রকল্পটি কেবলমাত্র উচ্চশিক্ষার ঋণের জন্য, বাণিজ্যিক উদ্যোগের জন্য নয়।';
      if (lang === 'mr') return 'ही योजना केवळ उच्च शिक्षणासाठी आहे, व्यावसायिक उद्योगांसाठी नाही.';
      if (lang === 'gu') return 'આ યોજના ફક્ત ઉચ્ચ શિક્ષણ લોન માટે છે, વ્યાપારી સાહસો માટે નથી.';
      if (lang === 'ta') return 'இந்தத் திட்டம் உயர் கல்வி கடன்களுக்கு மட்டுமே, வணிக நிறுவனங்களுக்கு அல்ல.';
      if (lang === 'te') return 'ఈ పథకం ఉన్నత విద్యా రుణాలకు మాత్రమే, వాణిజ్య వ్యాపారాలకు కాదు.';
      if (lang === 'kn') return 'ಈ ಯೋಜನೆಯು ಉನ್ನತ ಶಿಕ್ಷಣ ಸಾಲಗಳಿಗೆ ಮಾತ್ರ, ವಾಣಿಜ್ಯ ಉದ್ಯಮಗಳಿಗಲ್ಲ.';
      if (lang === 'ml') return 'ഈ പദ്ധതി ഉന്നത വിദ്യാഭ്യാസ വായ്പകൾക്ക് മാത്രമുള്ളതാണ്, വാണിജ്യ സംരംഭങ്ങൾക്കല്ല.';
    } else if (text.includes('does not support purpose')) {
      if (lang === 'hi') return `योजना उद्देश्य "${purpose}" का समर्थन नहीं करती है।`;
      if (lang === 'pa') return `ਸਕੀਮ ਉਦੇਸ਼ "${purpose}" ਦਾ ਸਮਰਥਨ ਨਹੀਂ ਕਰਦੀ।`;
      if (lang === 'bn') return `প্রকল্পটি "${purpose}" উদ্দেশ্যের জন্য প্রযোজ্য নয়।`;
      if (lang === 'mr') return `योजना उद्दिष्ट "${purpose}" ला पाठिंबा देत नाही.`;
      if (lang === 'gu') return `યોજના હેતુ "${purpose}" ને સમર્થન આપતી નથી.`;
      if (lang === 'ta') return `திட்டம் "${purpose}" நோக்கத்திற்கு ஆதரவளிக்கவில்லை.`;
      if (lang === 'te') return `పథకం "${purpose}" ఉద్దేశ్యానికి మద్దతు ఇవ్వదు.`;
      if (lang === 'kn') return `ಯೋಜನೆಯು "${purpose}" ಉದ್ದೇಶವನ್ನು ಬೆಂಬಲಿಸುವುದಿಲ್ಲ.`;
      if (lang === 'ml') return `പദ്ധതി "${purpose}" എന്ന ലക്ഷ്യത്തെ പിന്തുണയ്ക്കുന്നില്ല.`;
    }
  }

  if (ruleCode === 'PROJECT_SECTOR' || text.includes('Project activity') || text.includes('Project Sector') || text.includes('approved sector')) {
    const sector = params.sector || text.match(/"([^"]+)"/)?.[1] || '';
    if (text.includes('is an approved sector') || text.includes('is officially recognized')) {
      if (lang === 'hi') return `परियोजना गतिविधि "${sector}" इस योजना के तहत स्वीकृत क्षेत्र है।`;
      if (lang === 'pa') return `ਪ੍ਰੋਜੈਕਟ ਗਤੀਵਿਧੀ "${sector}" ਇਸ ਸਕੀਮ ਅਧੀਨ ਪ੍ਰਵਾਨਿਤ ਖੇਤਰ ਹੈ।`;
      if (lang === 'bn') return `প্রকল্পের কার্যক্রম "${sector}" এই প্রকল্পের অনুমোদিত ক্ষেত্র।`;
      if (lang === 'mr') return `प्रकल्प उपक्रम "${sector}" या योजनेअंतर्गत मंजूर क्षेत्र आहे.`;
      if (lang === 'gu') return `પ્રોજેક્ટ પ્રવૃત્તિ "${sector}" આ યોજના હેઠળ માન્ય ક્ષેત્ર છે.`;
      if (lang === 'ta') return `திட்ட நடவடிக்கை "${sector}" இத்திட்டத்தின் கீழ் அங்கீகரிக்கப்பட்ட துறை.`;
      if (lang === 'te') return `ప్రాజెక్ట్ కార్యాచరణ "${sector}" ఈ పథకం కింద ఆమోదించబడిన రంగం.`;
      if (lang === 'kn') return `ಪ್ರಾಜೆಕ್ಟ್ ಚಟುವಟಿಕೆ "${sector}" ಈ ಯೋಜನೆಯಡಿಯಲ್ಲಿ ಅನುಮೋದಿತ ವಲಯವಾಗಿದೆ.`;
      if (lang === 'ml') return `പ്രോജക്ട് പ്രവർത്തനം "${sector}" ഈ പദ്ധതിക്ക് കീഴിൽ അംഗീകൃത മേഖലയാണ്.`;
    } else if (text.includes('is not supported by this scheme')) {
      if (lang === 'hi') return `क्षेत्र "${sector}" इस योजना के तहत समर्थित नहीं है।`;
      if (lang === 'pa') return `ਖੇਤਰ "${sector}" ਇਸ ਸਕੀਮ ਅਧੀਨ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ।`;
      if (lang === 'bn') return `ক্ষেত্র "${sector}" এই প্রকল্পের আওতাভুক্ত নয়।`;
      if (lang === 'mr') return `क्षेत्र "${sector}" या योजनेअंतर्गत पात्र नाही.`;
      if (lang === 'gu') return `ક્ષેત્ર "${sector}" આ યોજના હેઠળ આવરી લેવાયેલ નથી.`;
      if (lang === 'ta') return `துறை "${sector}" இத்திட்டத்தின் கீழ் ஆதரிக்கப்படவில்லை.`;
      if (lang === 'te') return `రంగం "${sector}" ఈ పథకం కింద మద్దతు ఇవ్వబడదు.`;
      if (lang === 'kn') return `ವಲಯ "${sector}" ಈ ಯೋಜನೆಯಡಿಯಲ್ಲಿ ಲಭ್ಯವಿಲ್ಲ.`;
      if (lang === 'ml') return `മേഖല "${sector}" ഈ പദ്ധതിക്ക് കീഴിൽ പിന്തുണയ്ക്കുന്നില്ല.`;
    }
  }

  if (ruleCode === 'BUSINESS_STAGE' || text.includes('Business stage')) {
    const stage = params.stage || text.match(/"([^"]+)"/)?.[1] || '';
    if (text.includes('meets scheme criteria')) {
      if (lang === 'hi') return `व्यवसाय चरण "${stage}" योजना के मानदंडों के अनुकूल है।`;
      if (lang === 'pa') return `ਕਾਰੋਬਾਰ ਪੜਾਅ "${stage}" ਸਕੀਮ ਦੇ ਮਾਪਦੰਡਾਂ ਅਨੁਕੂਲ ਹੈ।`;
      if (lang === 'bn') return `ব্যবসায়ের পর্যায় "${stage}" প্রকল্পের মানদণ্ড পূরণ করে।`;
      if (lang === 'mr') return `व्यवसाय टप्पा "${stage}" योजनेच्या निकषांशी सुसंगत आहे.`;
      if (lang === 'gu') return `વ્યવસાય તબક્કો "${stage}" યોજનાના માપદંડ મુજબ છે.`;
      if (lang === 'ta') return `வணிக நிலை "${stage}" திட்ட அளவுகோல்களை பூர்த்தி செய்கிறது.`;
      if (lang === 'te') return `వ్యాపార దశ "${stage}" పథకం ప్రమాణాలకు అనుగుణంగా ఉంది.`;
      if (lang === 'kn') return `ವ್ಯವಹಾರ ಹಂತ "${stage}" ಯೋಜನೆಯ ಮಾನದಂಡಗಳನ್ನು ಪೂರೈಸುತ್ತದೆ.`;
      if (lang === 'ml') return `ബിസിനസ്സ് ഘട്ടം "${stage}" പദ്ധതി മാനദണ്ഡങ്ങൾ പാലിക്കുന്നു.`;
    } else {
      if (lang === 'hi') return `योजना इस व्यावसायिक चरण "${stage}" का समर्थन नहीं करती।`;
      if (lang === 'pa') return `ਸਕੀਮ ਇਸ ਕਾਰੋਬਾਰ ਪੜਾਅ "${stage}" ਦਾ ਸਮਰਥਨ ਨਹੀਂ ਕਰਦੀ।`;
      if (lang === 'bn') return `প্রকল্পটি এই ব্যবসায়িক পর্যায় "${stage}" সমর্থন করে না।`;
      if (lang === 'mr') return `योजना व्यवसाय टप्पा "${stage}" चे समर्थन करत नाही.`;
      if (lang === 'gu') return `યોજના આ વ્યવસાય તબક્કા "${stage}" ને સમર્થન આપતી નથી.`;
      if (lang === 'ta') return `திட்டம் இந்த வணிக நிலை "${stage}"-க்கு ஆதரவளிக்கவில்லை.`;
      if (lang === 'te') return `పథకం ఈ వ్యాపార దశ "${stage}" కు మద్దతు ఇవ్వదు.`;
      if (lang === 'kn') return `ಯೋಜನೆಯು ಈ ವ್ಯವಹಾರ ಹಂತ "${stage}" ಅನ್ನು ಬೆಂಬಲಿಸುವುದಿಲ್ಲ.`;
      if (lang === 'ml') return `പദ്ധതി ഈ ബിസിനസ്സ് ഘട്ടമായ "${stage}"-നെ പിന്തുണയ്ക്കുന്നില്ല.`;
    }
  }

  if (ruleCode === 'PROJECT_COST' || text.includes('Total project cost')) {
    const cost = params.cost || text.match(/\((₹?[0-9,]+)\)/)?.[1] || '';
    const minCost = params.minCost || text.match(/threshold of (₹?[0-9,]+)/)?.[1] || text.match(/\((₹?[0-9,]+)\s*–/)?.[1] || '';
    const maxCost = params.maxCost || text.match(/limit of (₹?[0-9,]+)/)?.[1] || text.match(/–\s*(₹?[0-9,]+)\)/)?.[1] || '';

    if (text.includes('is below the scheme minimum')) {
      if (lang === 'hi') return `कुल परियोजना लागत (${cost}) योजना की न्यूनतम सीमा ${minCost} से कम है।`;
      if (lang === 'pa') return `ਕੁੱਲ ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ (${cost}) ਸਕੀਮ ਦੀ ਘੱਟੋ-ਘੱਟ ਸੀਮਾ ${minCost} ਤੋਂ ਘੱਟ ਹੈ।`;
      if (lang === 'bn') return `মোট প্রকল্প ব্যয় (${cost}) প্রকল্পের ন্যূনতম সীমা ${minCost}-এর কম।`;
      if (lang === 'mr') return `एकूण प्रकल्प खर्च (${cost}) योजनेच्या किमान मर्यादेपेक्षा (${minCost}) कमी आहे.`;
      if (lang === 'gu') return `કુલ પ્રોજેક્ટ ખર્ચ (${cost}) યોજનાની લઘુત્તમ મર્યાદા ${minCost} કરતાં ઓછો છે.`;
      if (lang === 'ta') return `மொத்த திட்ட செலவு (${cost}) திட்டத்தின் குறைந்தபட்ச வரம்பான ${minCost}-ஐ விட குறைவு.`;
      if (lang === 'te') return `మొత్తం ప్రాజెక్ట్ వ్యయం (${cost}) పథకం కనీస పరిమితి ${minCost} కంటే తక్కువ.`;
      if (lang === 'kn') return `ಒಟ್ಟು ಪ್ರಾಜೆಕ್ಟ್ ವೆಚ್ಚ (${cost}) ಯೋಜನೆಯ ಕನಿಷ್ಠ ಮಿತಿ ${minCost} ಗಿಂತ ಕಡಿಮೆಯಿದೆ.`;
      if (lang === 'ml') return `ആകെ പ്രോജക്ട് ചെലവ് (${cost}) പദ്ധതിയുടെ കുറഞ്ഞ പരിധിയായ ${minCost}-നേക്കാൾ കുറവാണ്.`;
    } else if (text.includes('exceeds the maximum permissible limit') || text.includes('exceeds scheme maximum')) {
      if (lang === 'hi') return `कुल परियोजना लागत (${cost}) योजना की अधिकतम सीमा ${maxCost} से अधिक है।`;
      if (lang === 'pa') return `ਕੁੱਲ ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ (${cost}) ਸਕੀਮ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਸੀਮਾ ${maxCost} ਤੋਂ ਵੱਧ ਹੈ।`;
      if (lang === 'bn') return `মোট প্রকল্প ব্যয় (${cost}) প্রকল্পের সর্বোচ্চ সীমা ${maxCost}-এর বেশি।`;
      if (lang === 'mr') return `एकूण प्रकल्प खर्च (${cost}) योजनेच्या कमाल मर्यादेपेक्षा (${maxCost}) जास्त आहे.`;
      if (lang === 'gu') return `કુલ પ્રોજેક્ટ ખર્ચ (${cost}) યોજનાની મહત્તમ મર્યાદા ${maxCost} કરતાં વધુ છે.`;
      if (lang === 'ta') return `மொத்த திட்ட செலவு (${cost}) திட்டத்தின் அதிகபட்ச உச்சவரம்பான ${maxCost}-ஐ விட அதிகம்.`;
      if (lang === 'te') return `మొత్తం ప్రాజెక్ట్ వ్యయం (${cost}) పథకం గరిష్ట పరిమితి ${maxCost} కంటే ఎక్కువ.`;
      if (lang === 'kn') return `ಒಟ್ಟು ಪ್ರಾಜೆಕ್ಟ್ ವೆಚ್ಚ (${cost}) ಯೋಜನೆಯ ಗರಿಷ್ಠ ಮಿತಿ ${maxCost} ಗಿಂತ ಹೆಚ್ಚಾಗಿದೆ.`;
      if (lang === 'ml') return `ആകെ പ്രോജക്ട് ചെലവ് (${cost}) പദ്ധതിയുടെ പരമാവധി പരിധിയായ ${maxCost}-നേക്കാൾ കൂടുതലാണ്.`;
    } else if (text.includes('is within the eligible range') || text.includes('is within permissible range')) {
      if (lang === 'hi') return `कुल परियोजना लागत (${cost}) मान्य सीमा (${minCost} – ${maxCost}) के भीतर है।`;
      if (lang === 'pa') return `ਕੁੱਲ ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ (${cost}) ਮਨਜ਼ੂਰ ਸੀਮਾ (${minCost} – ${maxCost}) ਦੇ ਅੰਦਰ ਹੈ।`;
      if (lang === 'bn') return `মোট প্রকল্প ব্যয় (${cost}) গ্রহণযোগ্য সীমার (${minCost} – ${maxCost}) মধ্যে রয়েছে।`;
      if (lang === 'mr') return `एकूण प्रकल्प खर्च (${cost}) पात्र मर्यादेत (${minCost} – ${maxCost}) बसतो.`;
      if (lang === 'gu') return `કુલ પ્રોજેક્ટ ખર્ચ (${cost}) પાત્ર મર્યાદા (${minCost} – ${maxCost}) ની અંદર છે.`;
      if (lang === 'ta') return `மொத்த திட்ட செலவு (${cost}) அனுமதிக்கப்பட்ட வரம்பிற்குள் (${minCost} – ${maxCost}) உள்ளது.`;
      if (lang === 'te') return `మొత్తం ప్రాజెక్ట్ వ్యయం (${cost}) అర్హత పరిధిలో (${minCost} – ${maxCost}) ఉంది.`;
      if (lang === 'kn') return `ಒಟ್ಟು ಪ್ರಾಜೆಕ್ಟ್ ವೆಚ್ಚ (${cost}) ಅರ್ಹ ಮಿತಿಯೊಳಗೆ (${minCost} – ${maxCost}) ಇದೆ.`;
      if (lang === 'ml') return `ആകെ പ്രോജക്ട് ചെലവ് (${cost}) അനുവദനീയമായ പരിധിക്കുള്ളിലാണ് (${minCost} – ${maxCost}).`;
    }
  }

  if (ruleCode === 'FINANCING_CEILING' || text.includes('Required financing') || text.includes('Requested financing')) {
    const req = params.requested || text.match(/\((₹?[0-9,]+)\)/)?.[1] || '';
    const maxL = params.maxLoan || text.match(/ceiling of (₹?[0-9,]+)/)?.[1] || text.match(/limit of (₹?[0-9,]+)/)?.[1] || '';

    if (text.includes('exceeds the scheme\'s maximum loan ceiling')) {
      if (lang === 'hi') return `आवश्यक ऋण (${req}) योजना की अधिकतम ऋण सीमा ${maxL} से अधिक है।`;
      if (lang === 'pa') return `ਲੋੜੀਂਦਾ ਕਰਜ਼ਾ (${req}) ਸਕੀਮ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਕਰਜ਼ਾ ਸੀਮਾ ${maxL} ਤੋਂ ਵੱਧ ਹੈ।`;
      if (lang === 'bn') return `প্রয়োজনীয় ঋণ (${req}) প্রকল্পের সর্বোচ্চ ঋণ সীমা ${maxL}-এর বেশি।`;
      if (lang === 'mr') return `आवश्यक कर्ज (${req}) योजनेच्या कमाल कर्ज मर्यादेपेक्षा (${maxL}) जास्त आहे.`;
      if (lang === 'gu') return `જરૂરી ધિરાણ (${req}) યોજનાની મહત્તમ લોન મર્યાદા ${maxL} કરતાં વધુ છે.`;
      if (lang === 'ta') return `தேவைப்படும் கடன் (${req}) திட்டத்தின் அதிகபட்ச கடன் உச்சவரம்பான ${maxL}-ஐ விட அதிகம்.`;
      if (lang === 'te') return `అవసరమైన రుణం (${req}) పథకం గరిష్ట రుణ పరిమితి ${maxL} కంటే ఎక్కువ.`;
      if (lang === 'kn') return `ಅಗತ್ಯವಿರುವ ಹಣಕಾಸು (${req}) ಯೋಜನೆಯ ಗರಿಷ್ಠ ಸಾಲದ ಮಿತಿ ${maxL} ಮೀರಿದೆ.`;
      if (lang === 'ml') return `ആവശ്യമായ വായ്പ (${req}) പദ്ധതിയുടെ പരമാവധി വായ്പാ പരിധിയായ ${maxL}-നേക്കാൾ കൂടുതലാണ്.`;
    } else {
      if (lang === 'hi') return `वांछित ऋण (${req}) योजना की अधिकतम सीमा ${maxL} के भीतर है।`;
      if (lang === 'pa') return `ਲੋੜੀਂਦਾ ਕਰਜ਼ਾ (${req}) ਸਕੀਮ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਸੀਮਾ ${maxL} ਦੇ ਅੰਦਰ ਹੈ।`;
      if (lang === 'bn') return `অনুরোধকৃত ঋণ (${req}) প্রকল্পের সর্বোচ্চ ঋণ সীমা ${maxL}-এর মধ্যে রয়েছে।`;
      if (lang === 'mr') return `मागितलेले कर्ज (${req}) योजनेच्या कमाल मर्यादेत (${maxL}) आहे.`;
      if (lang === 'gu') return `માંગેલ ધિરાણ (${req}) યોજનાની મહત્તમ લોન મર્યાદા ${maxL} ની અંદર છે.`;
      if (lang === 'ta') return `கோரப்பட்ட கடன் (${req}) திட்டத்தின் அதிகபட்ச கடன் வரம்பான ${maxL}-க்குள் உள்ளது.`;
      if (lang === 'te') return `కోరిన రుణం (${req}) పథకం గరిష్ట రుణ పరిమితి ${maxL} లోబడి ఉంది.`;
      if (lang === 'kn') return `ಕೋರಿದ ಹಣಕಾಸು (${req}) ಯೋಜನೆಯ ಗರಿಷ್ಠ ಸಾಲದ ಮಿತಿ ${maxL} ಒಳಗೆ ಇದೆ.`;
      if (lang === 'ml') return `ആവശ്യപ്പെട്ട വായ്പ (${req}) പദ്ധതിയുടെ പരമാവധി വായ്പാ പരിധിയായ ${maxL}-ന് ഉള്ളിലാണ്.`;
    }
  }

  if (ruleCode === 'GEOGRAPHIC_AVAILABILITY' || text.includes('Scheme operates pan-India') || text.includes('pan-India and is active')) {
    const state = params.state || text.match(/active in ([^.]+)/)?.[1] || '';
    if (lang === 'hi') return `यह योजना अखिल भारतीय स्तर पर संचालित है और ${state} में सक्रिय है।`;
    if (lang === 'pa') return `ਇਹ ਸਕੀਮ ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਚੱਲਦੀ ਹੈ ਅਤੇ ${state} ਵਿੱਚ ਸਰਗਰਮ ਹੈ।`;
    if (lang === 'bn') return `এই প্রকল্পটি সর্বভারতীয় এবং ${state}-এ সক্রিয়ভাবে পরিচালিত।`;
    if (lang === 'mr') return `ही योजना संपूर्ण भारतात आणि ${state} मध्ये सक्रियपणे कार्यरत आहे.`;
    if (lang === 'gu') return `આ યોજના સમગ્ર ભારતમાં અને ${state} માં સક્રિયપણે કાર્યરत છે.`;
    if (lang === 'ta') return `இத்திட்டம் அகில இந்திய அளவில் செயல்படுகிறது மற்றும் ${state} மாநிலத்திலும் இயங்குகிறது.`;
    if (lang === 'te') return `ఈ పథకం భారతదేశమంతటా పనిచేస్తుంది మరియు ${state} లో సక్రియంగా ఉంది.`;
    if (lang === 'kn') return `ಈ ಯೋಜನೆಯು ಅಖಿಲ ಭಾರತ ಮಟ್ಟದಲ್ಲಿ ಮತ್ತು ${state} ನಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.`;
    if (lang === 'ml') return `ഈ പദ്ധതി ഇന്ത്യയിലുടനീളം പ്രവർത്തിക്കുന്നതും ${state} സംസ്ഥാനത്ത് സജീവവുമാണ്.`;
  }

  // 2. SUITABILITY FACTORS TRANSLATIONS
  if (text.includes('Direct alignment with your financing purpose')) {
    const purpose = text.match(/\(([^)]+)\)/)?.[1] || '';
    if (lang === 'hi') return `आपके वित्तपोषण उद्देश्य (${purpose}) के साथ सीधा संरेखण।`;
    if (lang === 'pa') return `ਤੁਹਾਡੇ ਵਿੱਤ ਉਦੇਸ਼ (${purpose}) ਨਾਲ ਸਿੱਧਾ ਮੇਲ।`;
    if (lang === 'bn') return `আপনার অর্থায়নের উদ্দেশ্যের (${purpose}) সাথে সরাসরি সামঞ্জস্যপূর্ণ।`;
    if (lang === 'mr') return `आपल्या वित्तपुरवठा उद्दिष्टाशी (${purpose}) थेट सुसंगत.`;
    if (lang === 'gu') return `તમારા ધિરાણ હેતુ (${purpose}) સાથે સીધું સંરેખણ.`;
    if (lang === 'ta') return `உங்கள் நிதி நோக்கத்துடன் (${purpose}) நேரடி பொருத்தம்.`;
    if (lang === 'te') return `మీ ఫైనాన్సింగ్ ఉద్దేశ్యంతో (${purpose}) ప్రత్యక్ష అనుకూలత.`;
    if (lang === 'kn') return `ನಿಮ್ಮ ಹಣಕಾಸು ಉದ್ದೇಶದೊಂದಿಗೆ (${purpose}) ನೇರ ಹೊಂದಾಣಿಕೆ.`;
    if (lang === 'ml') return `നിങ്ങളുടെ വായ്പാ ലക്ഷ്യവുമായി (${purpose}) നേരിട്ടുള്ള പൊരുത്തം.`;
  }
  if (text.includes('Specialized focus area for')) {
    const focus = text.replace('Specialized focus area for', '').trim();
    if (lang === 'hi') return `${focus} के लिए विशेष रूप से केंद्रित क्षेत्र।`;
    if (lang === 'pa') return `${focus} ਲਈ ਵਿਸ਼ੇਸ਼ ਫੋਕਸ ਖੇਤਰ।`;
    if (lang === 'bn') return `${focus}-এর জন্য বিশেষ ফোকাস এলাকা।`;
    if (lang === 'mr') return `${focus} साठी विशेष लक्ष केंद्रित क्षेत्र.`;
    if (lang === 'gu') return `${focus} માટે વિશિષ્ટ ફોકસ વિસ્તાર.`;
    if (lang === 'ta') return `${focus} க்கான சிறப்பு கவனம் செலுத்தும் பகுதி.`;
    if (lang === 'te') return `${focus} కోసం ప్రత్యేక దృష్టి సారించిన రంగం.`;
    if (lang === 'kn') return `${focus} ಗಾಗಿ ವಿಶೇಷ ಗಮನ ಕೇಂದ್ರೀಕರಿಸಿದ ಕ್ಷೇತ್ರ.`;
    if (lang === 'ml') return `${focus}-ന് പ്രത്യേക ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്ന മേഖല.`;
  }
  if (text.includes('Dedicated apex corporation finance with concessional')) {
    if (lang === 'hi') return 'अनुसूचित जाति उद्यमियों के लिए 6%–8% प्रति वर्ष की रियायती ब्याज दर पर शीर्ष निगम वित्तपोषण।';
    if (lang === 'pa') return 'ਅਨੁਸੂਚਿਤ ਜਾਤੀ ਉੱਦਮੀਆਂ ਲਈ 6%–8% ਸਾਲਾਨਾ ਰਿਆਇਤੀ ਵਿਆਜ ਦਰ ਤੇ ਵਿੱਤ।';
    if (lang === 'bn') return 'তফসিলি জাতি উদ্যোক্তাদের জন্য ৬%-৮% বার্ষিক রেয়াতি সুদের হারে বিশেষ অর্থায়ন।';
    if (lang === 'mr') return 'अनुसूचित जाती उद्योजकांसाठी ६%–८% सवलतीच्या व्याजदराने विशेष कॉर्पोरेशन वित्तपुरवठा.';
    if (lang === 'gu') return 'SC ઉદ્યોગસાહસિકો માટે 6%–8% વાર્ષિક રાહત દરે વિશેષ ધિરાણ.';
    if (lang === 'ta') return 'பட்டியலின தொழில்முனைவோருக்கு 6%–8% சலுகை வட்டி விகிதத்தில் சிறப்பு நிதி.';
    if (lang === 'te') return 'SC వ్యవస్థాపకులకు 6%–8% రాయితీ వడ్డీ రేటుతో ప్రత్యేక కార్పొరేషన్ ఫైనాన్స్.';
    if (lang === 'kn') return 'ಪರಿಶಿಷ್ಟ ಜಾತಿ ಉದ್ಯಮಿಗಳಿಗೆ 6%–8% ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರದಲ್ಲಿ ವಿಶೇಷ ಸಾಲ ಸೌಲಭ್ಯ.';
    if (lang === 'ml') return 'പട്ടികജാതി സംരംഭകർക്ക് 6%–8% ഇളവുള്ള പലിശ നിരക്കിൽ പ്രത്യേക ധനസഹായം.';
  }
  if (text.includes('Priority statutory bank branch target under Stand-Up India mandate')) {
    if (lang === 'hi') return 'स्टैंड-अप इंडिया नियम के अंतर्गत प्रत्येक बैंक शाखा के लिए प्राथमिकता लक्ष्य।';
    if (lang === 'pa') return 'ਸਟੈਂਡ-ਅੱਪ ਇੰਡੀਆ ਅਧੀਨ ਹਰੇਕ ਬੈਂਕ ਸ਼ਾਖਾ ਲਈ ਤਰਜੀਹੀ ਟੀਚਾ।';
    if (lang === 'bn') return 'স্ট্যান্ড-আপ ইন্ডিয়া নির্দেশিকা অনুযায়ী প্রতিটি ব্যাংক শাখার অগ্রাধিকার লক্ষ্য।';
    if (lang === 'mr') return 'स्टँड-अप इंडिया अंतर्गत बँक शाखेसाठी प्राधान्य उद्दिष्ट.';
    if (lang === 'gu') return 'સ્ટેન્ડ-અપ ઇન્ડિયા હેઠળ બેંક શાખા માટે અગ્રતા લક્ષ્ય.';
    if (lang === 'ta') return 'ஸ்டாண்ட்-அப் இந்தியா விதிகளின் கீழ் வங்கி கிளைகளுக்கான முன்னுரிமை இலக்கு.';
    if (lang === 'te') return 'స్టాండ్-అప్ ఇండియా నిబంధన ప్రకారం బ్యాంక్ శాఖలకు ప్రాధాన్య లక్ష్యం.';
    if (lang === 'kn') return 'ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಅಡಿಯಲ್ಲಿ ಬ್ಯಾಂಕ್ ಶಾಖೆಗೆ ಆದ್ಯತೆಯ ಗುರಿ.';
    if (lang === 'ml') return 'സ്റ്റാൻഡ്-അപ്പ് ഇന്ത്യ പ്രകാരം ബാങ്ക് ശാഖകൾക്കുള്ള മുൻഗണനാ ലക്ഷ്യം.';
  }
  if (text.includes('capital subsidy under special rural category norms')) {
    if (lang === 'hi') return 'ग्रामीण क्षेत्र के विशेष मानदंडों के तहत अधिकतम 35% पूंजीगत सब्सिडी के लिए पात्र।';
    if (lang === 'pa') return 'ਪੇਂਡੂ ਖੇਤਰਾਂ ਲਈ ਵੱਧ ਤੋਂ ਵੱਧ 35% ਪੂੰਜੀ ਸਬਸਿਡੀ ਲਈ ਯੋਗ।';
    if (lang === 'bn') return 'গ্রামীণ এলাকার বিশেষ নিয়মে সর্বোচ্চ ৩৫% মূলধন ভর্তুকির জন্য যোগ্য।';
    if (lang === 'mr') return 'ग्रामीण भागातील विशेष नियमांनुसार कमाल ३५% भांडवली अनुदानासाठी पात्र.';
    if (lang === 'gu') return 'ગ્રામીણ વિસ્તારના નિયમો હેઠળ મહત્તમ 35% કેપિટલ સબસિડી માટે પાત્ર.';
    if (lang === 'ta') return 'கிராமப்புற சிறப்பு விதிகளின் கீழ் அதிகபட்சமாக 35% மூலதன மானியத்திற்கு தகுதியானது.';
    if (lang === 'te') return 'గ్రామీణ ప్రత్యేక నిబంధనల ప్రకారం గరిష్టంగా 35% మూలధన సబ్సిడీకి అర్హత.';
    if (lang === 'kn') return 'ಗ್ರಾಮೀಣ ವಿಶೇಷ ನಿಯಮಗಳ ಅಡಿಯಲ್ಲಿ ಗರಿಷ್ಠ 35% ಬಂಡವಾಳ ಸಬ್ಸಿಡಿಗೆ ಅರ್ಹತೆ.';
    if (lang === 'ml') return 'ഗ്രാമീണ പ്രത്യേക മാനദണ്ഡങ്ങൾ പ്രകാരം പരമാവധി 35% മൂലധന സബ്‌സിഡിക്ക് അർഹത.';
  }
  if (text.includes('deeply subsidized 4% p.a. interest rate for women')) {
    if (lang === 'hi') return 'महिला उद्यमियों के लिए अत्यधिक रियायती 4% वार्षिक ब्याज दर पर अनुकूलित ऋण।';
    if (lang === 'pa') return 'ਮਹਿਲਾ ਉੱਦਮੀਆਂ ਲਈ ਸਿਰਫ਼ 4% ਸਾਲਾਨਾ ਵਿਆਜ ਦਰ ਤੇ ਵਿਸ਼ੇਸ਼ ਕਰਜ਼ਾ।';
    if (lang === 'bn') return 'নারী উদ্যোক্তাদের জন্য মাত্র ৪% বার্ষিক সুদের হারে বিশেষ ঋণ।';
    if (lang === 'mr') return 'महिला उद्योजकांसाठी अत्यंत सवलतीच्या ४% दराने विशेष कर्ज.';
    if (lang === 'gu') return 'મહિલા ઉદ્યોગસાહસિકો માટે ફક્ત 4% વાર્ષિક વ્યાજ દરે વિશિષ્ટ લોન.';
    if (lang === 'ta') return 'பெண்களுக்காக 4% குறைந்த வட்டி விகிதத்தில் தனிப்பயனாக்கப்பட்ட கடன்.';
    if (lang === 'te') return 'మహిళా వ్యవస్థాపకుల కోసం కేవలం 4% వార్షిక వడ్డీ రేటుతో ప్రత్యేక రుణం.';
    if (lang === 'kn') return 'ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಕೇವಲ 4% ವಾರ್ಷಿಕ ಬಡ್ಡಿದರದಲ್ಲಿ ವಿಶೇಷ ಸಾಲ.';
    if (lang === 'ml') return 'വനിതാ സംരംഭകർക്കായി വെറും 4% വാർഷിക പലിശ നിരക്കിലുള്ള പ്രത്യേക വായ്പ.';
  }
  if (text.includes('Well-structured for')) {
    const stage = text.replace('Well-structured for', '').trim();
    if (lang === 'hi') return `${stage} चरण के उद्यमों के लिए उत्तम संरचना।`;
    if (lang === 'pa') return `${stage} ਪੜਾਅ ਲਈ ਉੱਤਮ ਢਾਂਚਾ।`;
    if (lang === 'bn') return `${stage} পর্যায়ের জন্য চমৎকার কাঠামো।`;
    if (lang === 'mr') return `${stage} टप्प्यासाठी योग्य रचना.`;
    if (lang === 'gu') return `${stage} તબક્કા માટે ઉત્તમ માળખું.`;
    if (lang === 'ta') return `${stage} நிலைக்கு ஏற்ற சிறந்த கட்டமைப்பு.`;
    if (lang === 'te') return `${stage} దశకు అనువైన నిర్మాణం.`;
    if (lang === 'kn') return `${stage} ಹಂತಕ್ಕೆ ಅತ್ಯುತ್ತಮ ರಚನೆ.`;
    if (lang === 'ml') return `${stage} ഘട്ടത്തിന് അനുയോജ്യമായ ഘടന.`;
  }
  if (text.includes('Higher subsidy slab applies to rural enterprise locations')) {
    if (lang === 'hi') return 'ग्रामीण उद्यम स्थानों के लिए उच्चतर सब्सिडी स्लैब लागू होता है।';
    if (lang === 'pa') return 'ਪੇਂਡੂ ਉੱਦਮਾਂ ਲਈ ਉੱਚ ਸਬਸਿਡੀ ਸਲੈਬ ਲਾਗੂ ਹੁੰਦਾ ਹੈ।';
    if (lang === 'bn') return 'গ্রামীণ উদ্যোগের ক্ষেত্রে উচ্চতর ভর্তুকি স্তর প্রযোজ্য।';
    if (lang === 'mr') return 'ग्रामीण उद्योग स्थानांसाठी उच्च अनुदान स्लॅब लागू होतो.';
    if (lang === 'gu') return 'ગ્રામીણ સાહસો માટે ઉચ્ચ સબસિડી સ્લેબ લાગુ પડે છે.';
    if (lang === 'ta') return 'கிராமப்புற நிறுவனங்களுக்கு அதிக மானிய வரம்பு பொருந்தும்.';
    if (lang === 'te') return 'గ్రామీణ సంస్థలకు అధిక సబ్సిడీ స్లాబ్ వర్తిస్తుంది.';
    if (lang === 'kn') return 'ಗ್ರಾಮೀಣ ಉದ್ಯಮಗಳಿಗೆ ಹೆಚ್ಚಿನ ಸಬ್ಸಿಡಿ ಸ್ಲ್ಯಾಬ್ ಅನ್ವಯಿಸುತ್ತದೆ.';
    if (lang === 'ml') return 'ഗ്രാമീണ സംരംഭങ്ങൾക്ക് ഉയർന്ന സബ്‌സിഡി നിരക്ക് ബാധകമാണ്.';
  }
  if (text.includes('repayment moratorium period')) {
    const m = text.match(/(\d+)-month/)?.[1] || '6';
    if (lang === 'hi') return `ऋण अदायगी में ${m} महीने की मोहलत (मोरेटोरियम) अवधि शामिल है।`;
    if (lang === 'pa') return `ਕਰਜ਼ਾ ਮੋੜਨ ਲਈ ${m} ਮਹੀਨਿਆਂ ਦੀ ਛੋਟ (ਮੋਰੇਟੋਰੀਅਮ) ਸ਼ਾਮਲ ਹੈ।`;
    if (lang === 'bn') return `ঋণ পরিশোধে ${m} মাসের মোরেটোরিয়াম সুবিধা অন্তর্ভুক্ত।`;
    if (lang === 'mr') return `कर्जफेडीसाठी ${m} महिन्यांची सवलत (मोरेटोरियम) समाविष्ट आहे.`;
    if (lang === 'gu') return `લોન ચુકવણી માટે ${m} મહિનાની મોરેટોરિયમ અવધિ સામેલ છે.`;
    if (lang === 'ta') return `கடன் തിരിച്ചடைவுக்கு ${m} மாத கால அவகாசம் (மொரட்டோரியம்) உண்டு.`;
    if (lang === 'te') return `రుణ చెల్లింపులో ${m} నెలల మొరటోరియం వ్యవధి చేర్చబడింది.`;
    if (lang === 'kn') return `ಸಾಲ ಮರುಪಾವತಿಗೆ ${m} ತಿಂಗಳ ಮೊರಟೋರಿಯಂ ಅವಧಿ ಒಳಗೊಂಡಿದೆ.`;
    if (lang === 'ml') return `വായ്പാ തിരിച്ചടവിന് ${m} മാസത്തെ മൊറട്ടോറിയം കാലയളവ് ഉൾപ്പെടുന്നു.`;
  }
  if (text.includes('Promoter equity guideline:')) {
    const g = text.replace('Promoter equity guideline:', '').trim();
    if (lang === 'hi') return `प्रवर्तक इक्विटी दिशानिर्देश: ${g}।`;
    if (lang === 'pa') return `ਪ੍ਰਮੋਟਰ ਹਿੱਸੇਦਾਰੀ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼: ${g}।`;
    if (lang === 'bn') return `উদ্যোক্তার নিজস্ব বিনিয়োগ নির্দেশিকা: ${g}।`;
    if (lang === 'mr') return `प्रवर्तक भांडवल मार्गदर्शक तत्त्व: ${g}.`;
    if (lang === 'gu') return `પ્રમોટર મૂડી માર્ગદર્શિકા: ${g}.`;
    if (lang === 'ta') return `தொழில்முனைவோர் சொந்த மூலதன வழிகாட்டுதல்: ${g}.`;
    if (lang === 'te') return `ప్రమోటర్ సొంత మూలధన మార్గదర్శకం: ${g}.`;
    if (lang === 'kn') return `ಪ್ರವರ್ತಕರ ಸ್ವಂತ ಬಂಡವಾಳ ಮಾರ್ಗಸೂಚಿ: ${g}.`;
    if (lang === 'ml') return `സംരംഭകന്റെ സ്വന്തം നിക്ഷേപ മാർഗ്ഗനിർദ്ദേശം: ${g}.`;
  }

  // 3. PARTNER ROUTING EXPLANATIONS
  if (text.includes('Recommended because this partner combines direct local presence')) {
    const d = text.match(/presence in ([^with]+) with/)?.[1]?.trim() || '';
    if (lang === 'hi') return `इस पार्टनर की अनुशंसा इसलिए की गई है क्योंकि यह ${d ? d + ' में ' : ''}प्रत्यक्ष स्थानीय उपस्थिति, मजबूत योजना व परियोजना अनुकूलता, उपयुक्त भौगोलिक कवरेज और अनुकूल प्रोटोटाइप क्षमता संकेतक प्रदान करता है।`;
    if (lang === 'pa') return `ਇਸ ਪਾਰਟਨਰ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਗਈ ਹੈ ਕਿਉਂਕਿ ਇਹ ${d ? d + ' ਵਿੱਚ ' : ''}ਸਥਾਨਕ ਮੌਜੂਦਗੀ, ਮਜ਼ਬੂਤ ਸਕੀਮ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਅਨੁਕੂਲਤਾ, ਉਚਿਤ ਭੂਗੋਲਿਕ ਕਵਰੇਜ ਅਤੇ ਅਨੁਕੂਲ ਪ੍ਰੋਟੋਟਾਈਪ ਸਮਰੱਥਾ ਸੂਚਕ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।`;
    if (lang === 'bn') return `এই পার্টনারের সুপারিশ করা হয়েছে কারণ এটি ${d ? d + '-এ ' : ''}স্থানীয় উপস্থিতি, চমৎকার প্রকল্প ও স্কিম সামঞ্জস্য, উপযুক্ত ভৌগোলিক পরিধি এবং অনুকূল প্রোটোটাইপ সক্ষমতা নির্দেশক প্রদান করে।`;
    if (lang === 'mr') return `या भागीदाराची शिफारस केली आहे कारण तो ${d ? d + ' मध्ये ' : ''}स्थानिक शाखा, मजबूत योजना व प्रकल्प सुसंगतता, योग्य भौगोलिक कव्हरेज आणि अनुकूल प्रोटोटाइप क्षमता दर्शक देतो.`;
    if (lang === 'gu') return `આ પાર્ટનરની ભલામણ કરાઈ છે કારણ કે તે ${d ? d + ' માં ' : ''}સ્થાનિક હાજરી, મજબૂત યોજના અને પ્રોજેક્ટ સુસંગતતા, યોગ્ય ભૌગોલિક કવરેજ અને સાનુકૂળ પ્રોટોટાઇપ ક્ષમતા સૂચક ધરાવે છે.`;
    if (lang === 'ta') return `இந்த கூட்டாளர் ${d ? d + ' மாவட்டத்தில் ' : ''}உள்ளூர் கிளை, வலுவான திட்ட இணக்கம், பொருத்தமான புவியியல் வரம்பு மற்றும் சாதகமான மாதிரி கொள்ளளவு காட்டி கொண்டிருப்பதால் பரிந்துரைக்கப்படுகிறார்.`;
    if (lang === 'te') return `ఈ భాగస్వామి ${d ? d + ' లో ' : ''}స్థానిక ఉనికి, బలమైన పథకం మరియు ప్రాజెక్ట్ అనుకూలత, అనువైన భౌగోళిక పరిధి మరియు అనుకూలమైన ప్రోటోటైప్ సామర్థ్య సూచికను కలిగి ఉన్నందున సిఫార్సు చేయబడింది.`;
    if (lang === 'kn') return `ಈ ಪಾಲುದಾರರು ${d ? d + ' ನಲ್ಲಿ ' : ''}ಸ್ಥಳೀಯ ಶಾಖೆ, ಬಲವಾದ ಯೋಜನೆ ಮತ್ತು ಪ್ರಾಜೆಕ್ಟ್ ಹೊಂದಾಣಿಕೆ, ಸೂಕ್ತ ಭೌಗೋಳಿಕ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಅನುಕೂಲಕರ ಮಾದರಿ ಸಾಮರ್ಥ್ಯ ಸೂಚಕ ಹೊಂದಿರುವುದರಿಂದ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.`;
    if (lang === 'ml') return `ഈ പങ്കാളി ${d ? d + '-ൽ ' : ''}പ്രാദേശിക സാന്നിധ്യവും ശക്തമായ പദ്ധതി അനുയോജ്യതയും അനുയോജ്യമായ ഭൂമിശാസ്ത്രപരമായ കവറേജും അനുകൂലമായ പ്രോട്ടോടൈപ്പ് ശേഷി സൂചകവും ഉള്ളതിനാൽ ശുപാർശ ചെയ്യുന്നു.`;
  }
  if (text.includes('Recommended because this partner has strong scheme and project compatibility')) {
    if (lang === 'hi') return 'इस पार्टनर की अनुशंसा इसलिए की गई है क्योंकि यह मजबूत योजना व परियोजना अनुकूलता, उपयुक्त भौगोलिक कवरेज और अनुकूल प्रोटोटाइप क्षमता संकेतक प्रदान करता है।';
    if (lang === 'pa') return 'ਇਸ ਪਾਰਟਨਰ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਗਈ ਹੈ ਕਿਉਂਕਿ ਇਹ ਮਜ਼ਬੂਤ ਸਕੀਮ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਅਨੁਕੂਲਤਾ, ਉਚਿਤ ਭੂਗੋਲਿਕ ਕਵਰੇਜ ਅਤੇ ਅਨੁਕੂਲ ਪ੍ਰੋਟੋਟਾਈਪ ਸਮਰੱਥਾ ਸੂਚਕ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।';
    if (lang === 'bn') return 'এই পার্টনারের সুপারিশ করা হয়েছে কারণ এটি শক্তিশালী স্কিম ও প্রকল্প সামঞ্জস্য, উপযুক্ত ভৌগোলিক পরিধি এবং অনুকূল প্রোটোটাইপ সক্ষমতা নির্দেশক প্রদান করে।';
    if (lang === 'mr') return 'या भागीदाराची शिफारस केली आहे कारण तो मजबूत योजना व प्रकल्प सुसंगतता, योग्य भौगोलिक कव्हरेज आणि अनुकूल प्रोटोटाइप क्षमता दर्शक देतो.';
    if (lang === 'gu') return 'આ પાર્ટનરની ભલામણ કરાઈ છે કારણ કે તે મજબૂત યોજના અને પ્રોજેક્ટ સુસંગતતા, યોગ્ય ભૌગોલિક કવરેજ અને સાનુકૂળ પ્રોટોટાઇપ ક્ષમતા સૂચક ધરાવે છે.';
    if (lang === 'ta') return 'இந்த கூட்டாளர் வலுவான திட்ட இணக்கம், பொருத்தமான புவியியல் எல்லை மற்றும் சாதகமான மாதிரி கொள்ளளவு காட்டி கொண்டிருப்பதால் பரிந்துரைக்கப்படுகிறார்.';
    if (lang === 'te') return 'ఈ భాగస్వామి బలమైన పథకం మరియు ప్రాజెక్ట్ అనుకూలత, తగిన భౌగోళిక పరిధి మరియు అనుకూలమైన ప్రోటోటైప్ సామర్థ్య సూచికను కలిగి ఉన్నందున సిఫార్సు చేయబడింది.';
    if (lang === 'kn') return 'ಈ ಪಾಲುದಾರರು ಬಲವಾದ ಯೋಜನೆ ಮತ್ತು ಪ್ರಾಜೆಕ್ಟ್ ಹೊಂದಾಣಿಕೆ, ಸೂಕ್ತ ಭೌಗೋಳಿಕ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಅನುಕೂಲಕರ ಮಾದರಿ ಸಾಮರ್ಥ್ಯ ಸೂಚಕ ಹೊಂದಿರುವುದರಿಂದ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.';
    if (lang === 'ml') return 'ഈ പങ്കാളി ശക്തമായ പദ്ധതി അനുയോജ്യതയും അനുയോജ്യമായ ഭൂമിശാസ്ത്രപരമായ കവറേജും അനുകൂലമായ പ്രോട്ടോടൈപ്പ് ശേഷി സൂചകവും നൽകുന്നതിനാൽ ശുപാർശ ചെയ്യുന്നു.';
  }
  if (text.includes('Recommended because this partner achieves the highest combined score')) {
    if (lang === 'hi') return 'इस पार्टनर की अनुशंसा इसलिए की गई है क्योंकि यह योजना संरेखण, परियोजना अनुकूलता और परिचालन क्षमता में सर्वोच्च समग्र अंक प्राप्त करता है।';
    if (lang === 'pa') return 'ਇਸ ਪਾਰਟਨਰ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਗਈ ਹੈ ਕਿਉਂਕਿ ਇਹ ਯੋਜਨਾ ਮੇਲ, ਪ੍ਰੋਜੈਕਟ ਅਨੁਕੂਲਤਾ ਅਤੇ ਸੰਚਾਲਨ ਸਮਰੱਥਾ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਸਕੋਰ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ।';
    if (lang === 'bn') return 'এই পার্টনারের সুপারিশ করা হয়েছে কারণ এটি প্রকল্প সামঞ্জস্য ও পরিচালন দক্ষতায় সর্বোচ্চ স্কোর অর্জন করেছে।';
    if (lang === 'mr') return 'या भागीदाराची शिफारस केली आहे कारण तो योजना सुसंगतता आणि कामकाज क्षमतेत सर्वोच्च गुण मिळवतो.';
    if (lang === 'gu') return 'આ પાર્ਟનરની ભલામણ કરાઈ છે કારણ કે તે યોજના સંરેખણ અને સંચાલન ક્ષમતામાં સર્વોચ્ચ સ્કોર પ્રાપ્ત કરે છે.';
    if (lang === 'ta') return 'திட்ட பொருத்தம் மற்றும் செயல்பாட்டுத் திறனில் இந்த கூட்டாளர் அதிக மதிப்பெண் பெற்றுள்ளதால் பரிந்துரைக்கப்படுகிறார்.';
    if (lang === 'te') return 'పథక అనుకూలత మరియు కార్యాచరణ సామర్థ్యంలో ఈ భాగస్వామి అత్యధిక స్కోరు సాధించినందున సిఫార్సు చేయబడింది.';
    if (lang === 'kn') return 'ಯೋಜನೆ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ ಸಾಮರ್ಥ್ಯದಲ್ಲಿ ಈ ಪಾಲುದಾರರು ಗರಿಷ್ಠ ಅಂಕಗಳನ್ನು ಗಳಿಸಿರುವುದರಿಂದ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.';
    if (lang === 'ml') return 'പദ്ധതി അനുയോജ്യതയിലും പ്രവർത്തന ശേഷിയിലും ഈ പങ്കാളി ഉയർന്ന സ്കോർ നേടിയതിനാൽ ശുപാർശ ചെയ്യുന്നു.';
  }

  // 4. COMMON SHORT PHRASES
  if (text.includes('Full scheme accreditation and active nodal processing window')) {
    if (lang === 'hi') return 'पूर्ण योजना मान्यता एवं सक्रिय नोडल प्रसंस्करण विंडो।';
    if (lang === 'pa') return 'ਪੂਰੀ ਸਕੀਮ ਮਾਨਤਾ ਅਤੇ ਸਰਗਰਮ ਨੋਡਲ ਪ੍ਰੋਸੈਸਿੰਗ ਵਿੰਡੋ।';
    if (lang === 'bn') return 'সম্পূর্ণ প্রকল্প স্বীকৃতি এবং সক্রিয় নোডাল প্রক্রিয়াকরণ উইন্ডো।';
    if (lang === 'mr') return 'पूर्ण योजना मान्यता व सक्रिय नोडल प्रक्रिया विंडो.';
    if (lang === 'gu') return 'સંપૂર્ણ યોજના માન્યતા અને સક્રિય નોડલ પ્રોસેસિંગ વિન્ડો.';
    if (lang === 'ta') return 'முழு திட்ட அங்கீகாரம் மற்றும் செயலில் உள்ள செயலாக்க சாளரம்.';
    if (lang === 'te') return 'పూర్తి పథక గుర్తింపు మరియు క్రియాశీల నోడల్ ప్రాసెసింగ్ విండో.';
    if (lang === 'kn') return 'ಪೂರ್ಣ ಯೋಜನೆಯ ಮಾನ್ಯತೆ ಮತ್ತು ಸಕ್ರಿಯ ನೋಡಲ್ ಪ್ರಕ್ರಿಯೆ ವಿಂಡೋ.';
    if (lang === 'ml') return 'പൂർണ്ണ പദ്ധതി അംഗീകാരവും സജീവമായ പ്രോസസ്സിംഗ് വിൻഡോയും.';
  }
  if (text.includes('Direct portfolio specialization in')) {
    const s = text.replace('Direct portfolio specialization in', '').trim();
    if (lang === 'hi') return `${s} क्षेत्र में प्रत्यक्ष पोर्टफोलियो विशेषज्ञता।`;
    if (lang === 'pa') return `${s} ਵਿੱਚ ਸਿੱਧੀ ਪੋਰਟਫੋਲੀਓ ਮੁਹਾਰਤ।`;
    if (lang === 'bn') return `${s}-এ বিশেষীকৃত পোর্টফোলিও অভিজ্ঞতা।`;
    if (lang === 'mr') return `${s} मध्ये थेट पोर्टफोलिओ विशेषीकरण.`;
    if (lang === 'gu') return `${s} માં પ્રત્યક્ષ પોર્ટફોલિયો વિશેષતા.`;
    if (lang === 'ta') return `${s} துறையில் நேரடி நிபுணத்துவம்.`;
    if (lang === 'te') return `${s} లో ప్రత్యక్ష పోర్ట్‌ఫోలియో నైపుణ్యం.`;
    if (lang === 'kn') return `${s} ನಲ್ಲಿ ನೇರ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಪರಿಣತಿ.`;
    if (lang === 'ml') return `${s} മേഖലയിൽ നേരിട്ടുള്ള വൈദഗ്ദ്ധ്യം.`;
  }
  if (text.includes('Direct local presence in')) {
    const d = text.replace('Direct local presence in', '').replace('district.', '').trim();
    if (lang === 'hi') return `${d} जिले में प्रत्यक्ष स्थानीय शाखा उपस्थिति।`;
    if (lang === 'pa') return `${d} ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਸਥਾਨਕ ਬ੍ਰਾਂਚ ਮੌਜੂਦਗੀ।`;
    if (lang === 'bn') return `${d} জেলায় সরাসরি স্থানীয় শাখার উপস্থিতি।`;
    if (lang === 'mr') return `${d} जिल्ह्यात थेट स्थानिक शाखा उपस्थिती.`;
    if (lang === 'gu') return `${d} જિલ્લામાં પ્રત્યક્ષ સ્થાનિક શાખા હાજરી.`;
    if (lang === 'ta') return `${d} மாவட்டத்தில் நேரடி உள்ளூர் கிளை இருப்பு.`;
    if (lang === 'te') return `${d} జిల్లాలో ప్రత్యక్ష స్థానిక శాఖ ఉనికి.`;
    if (lang === 'kn') return `${d} ಜಿಲ್ಲೆಯಲ್ಲಿ ನೇರ ಸ್ಥಳೀಯ ಶಾಖೆಯ ಉಪಸ್ಥಿತಿ.`;
    if (lang === 'ml') return `${d} ജില്ലയിൽ നേരിട്ടുള്ള പ്രാദേശിക ശാഖാ സാന്നിധ്യം.`;
  }
  if (text.includes('Designated service area coverage for')) {
    const d = text.replace('Designated service area coverage for', '').replace('district.', '').trim();
    if (lang === 'hi') return `${d} जिले के लिए निर्दिष्ट सेवा क्षेत्र कवरेज।`;
    if (lang === 'pa') return `${d} ਜ਼ਿਲ੍ਹੇ ਲਈ ਮਨੋਨੀਤ ਸੇਵਾ ਖੇਤਰ ਕਵਰੇਜ।`;
    if (lang === 'bn') return `${d} জেলার জন্য নির্ধারিত পরিষেবা কভারেজ।`;
    if (lang === 'mr') return `${d} जिल्ह्यासाठी नियुक्त सेवा क्षेत्र कव्हरेज.`;
    if (lang === 'gu') return `${d} જિલ્લા માટે નિયુક્ત સેવા વિસ્તાર કવરેજ.`;
    if (lang === 'ta') return `${d} மாவட்டத்திற்கான நியமிக்கப்பட்ட சேவை எல்லை.`;
    if (lang === 'te') return `${d} జిల్లా కోసం నిర్దేశించిన సేవా ప్రాంతం.`;
    if (lang === 'kn') return `${d} ಜಿಲ್ಲೆಗಾಗಿ ಗೊತ್ತುಪಡಿಸಿದ ಸೇವಾ ಪ್ರದೇಶದ ವ್ಯಾಪ್ತಿ.`;
    if (lang === 'ml') return `${d} ജില്ലയ്ക്കായി നിയുക്തമാക്കിയ സേവന പരിധി.`;
  }
  if (text.includes('State-level specialized MSME hub servicing')) {
    const s = text.replace('State-level specialized MSME hub servicing', '').trim();
    if (lang === 'hi') return `${s} के लिए राज्य स्तरीय विशेष एमएसएमई हब सेवा।`;
    if (lang === 'pa') return `${s} ਲਈ ਰਾਜ ਪੱਧਰੀ ਵਿਸ਼ੇਸ਼ MSME ਹੱਬ ਸੇਵਾ।`;
    if (lang === 'bn') return `${s}-এর জন্য রাজ্য পর্যায়ের বিশেষ MSME হাব সেবা।`;
    if (lang === 'mr') return `${s} साठी राज्यस्तरीय विशेष एमएसएमई केंद्र सेवा.`;
    if (lang === 'gu') return `${s} માટે રાજ્ય કક્ષાનું વિશેષ MSME હબ સેવા.`;
    if (lang === 'ta') return `${s} மாநிலத்திற்கான சிறப்பு MSME மையம்.`;
    if (lang === 'te') return `${s} కోసం రాష్ట్ర స్థాయి ప్రత్యేక MSME హబ్ సేవ.`;
    if (lang === 'kn') return `${s} ಗಾಗಿ ರಾಜ್ಯ ಮಟ್ಟದ ವಿಶೇಷ MSME ಹಬ್ ಸೇವೆ.`;
    if (lang === 'ml') return `${s}-നായി സംസ്ഥാന തലത്തിലുള്ള പ്രത്യേക MSME ഹബ്ബ് സേവനം.`;
  }
  if (text.includes('Optimal simulated capacity')) {
    const u = text.match(/\((\d+)%\s*utilization\)/)?.[1] || '35';
    if (lang === 'hi') return `इष्टतम प्रसंस्करण क्षमता (${u}% उपयोग) त्वरित संस्वीकृति सक्षम करती है।`;
    if (lang === 'pa') return `ਸਰਵੋਤਮ ਸਮਰੱਥਾ (${u}% ਵਰਤੋਂ) ਤੇਜ਼ੀ ਨਾਲ ਫਾਈਲ ਪ੍ਰੋਸੈਸਿੰਗ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦੀ ਹੈ।`;
    if (lang === 'bn') return `অনুকূল সক্ষমতা (${u}% ব্যবহার) দ্রুত ফাইল প্রক্রিয়াকরণে সহায়ক।`;
    if (lang === 'mr') return `इष्टतम क्षमता (${u}% वापर) जलद फाइल प्रक्रिया करण्यास मदत करते.`;
    if (lang === 'gu') return `શ્રેષ્ઠ ક્ષમતા (${u}% વપરાશ) ઝડપી પ્રક્રિયાને સક્ષમ બનાવે છે.`;
    if (lang === 'ta') return `உகந்த செயலாக்க திறன் (${u}% பயன்பாடு) விரைவான ஒப்புதலை உறுதி செய்கிறது.`;
    if (lang === 'te') return `అనుకూల ప్రాసెసింగ్ సామర్థ్యం (${u}% వినియోగం) వేగవంతమైన ఫైల్ ప్రాసెసింగ్‌ను సాధ్యం చేస్తుంది.`;
    if (lang === 'kn') return `ಸೂಕ್ತ ಪ್ರಕ್ರಿಯೆ ಸಾಮರ್ಥ್ಯವು (${u}% ಬಳಕೆ) ವೇಗದ ಕಡತ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.`;
    if (lang === 'ml') return `അനുയോജ്യമായ ശേഷി (${u}% ഉപയോഗം) വേഗത്തിലുള്ള ഫയൽ പ്രോസസ്സിംഗ് സാധ്യമാക്കുന്നു.`;
  }
  if (text.includes('Healthy operational load')) {
    const u = text.match(/\((\d+)%\s*simulated utilization\)/)?.[1] || '45';
    if (lang === 'hi') return `सामान्य परिचालन भार (${u}% अनुमानित उपयोग)।`;
    if (lang === 'pa') return `ਸਧਾਰਨ ਸੰਚਾਲਨ ਲੋਡ (${u}% ਵਰਤੋਂ)।`;
    if (lang === 'bn') return `স্বাভাবিক পরিচালন চাপ (${u}% ব্যবহার)।`;
    if (lang === 'mr') return `सामान्य कामकाज भार (${u}% वापर).`;
    if (lang === 'gu') return `સામાન્ય ઓપરેશનલ લોડ (${u}% વપરાશ).`;
    if (lang === 'ta') return `வழக்கமான செயல்பாட்டு பணிச்சுமை (${u}% பயன்பாடு).`;
    if (lang === 'te') return `సాధారణ కార్యాచరణ భారం (${u}% వినియోగం).`;
    if (lang === 'kn') return `ಸಾಮಾನ್ಯ ಕಾರ್ಯಾಚರಣೆಯ ಹೊರೆ (${u}% ಬಳಕೆ).`;
    if (lang === 'ml') return `സാധാരണ പ്രവർത്തന ഭാരം (${u}% ഉപയോഗം).`;
  }
  if (text.includes('Requested financing aligns well with partner’s standard sanction range')) {
    if (lang === 'hi') return 'वांछित ऋण राशि पार्टनर की मानक स्वीकृति सीमा के पूरी तरह अनुकूल है।';
    if (lang === 'pa') return 'ਲੋੜੀਂਦੀ ਕਰਜ਼ਾ ਰਕਮ ਪਾਰਟਨਰ ਦੀ ਮਨਜ਼ੂਰੀ ਸੀਮਾ ਨਾਲ ਚੰਗੀ ਤਰ੍ਹਾਂ ਮੇਲ ਖਾਂਦੀ ਹੈ।';
    if (lang === 'bn') return 'অনুরোধকৃত ঋণ পার্টনারের স্ট্যান্ডার্ড অনুমোদন সীমার সাথে সামঞ্জস্যপূর্ণ।';
    if (lang === 'mr') return 'मागितलेली कर्ज रक्कम भागीदाराच्या मानक मंजुरी मर्यादेशी सुसंगत आहे.';
    if (lang === 'gu') return 'માંગેલ લોનની રકમ પાર્ટનરની માનક મંજૂરી શ્રેણી સાથે સંપૂર્ણ મેળ ખાય છે.';
    if (lang === 'ta') return 'கோரப்பட்ட கடன் தொகை கூட்டாளரின் நிலையான ஒப்புதல் வரம்புடன் பொருந்துகிறது.';
    if (lang === 'te') return 'కోరిన రుణ మొత్తం భాగస్వామి ప్రామాణిక పరిమితితో సరిపోతుంది.';
    if (lang === 'kn') return 'ಕೋರಿದ ಸಾಲದ ಮೊತ್ತವು ಪಾಲುದಾರರ ಪ್ರಮಾಣಿತ ಮಂಜೂರಾತಿ ಮಿತಿಗೆ ಸರಿಹೊಂದುತ್ತದೆ.';
    if (lang === 'ml') return 'ആവശ്യപ്പെട്ട വായ്പാ തുക പങ്കാളിയുടെ സാധാരണ അനുമതി പരിധിയുമായി പൊരുത്തപ്പെടുന്നു.';
  }
  if (text.includes('Active daily intake without administrative holds')) {
    if (lang === 'hi') return 'दैनिक आवेदन स्वीकार्यता सक्रिय है और कोई प्रशासनिक रोक नहीं है।';
    if (lang === 'pa') return 'ਰੋਜ਼ਾਨਾ ਅਰਜ਼ੀਆਂ ਸਰਗਰਮ ਹਨ ਅਤੇ ਕੋਈ ਪ੍ਰਬੰਧਕੀ ਰੋਕ ਨਹੀਂ ਹੈ।';
    if (lang === 'bn') return 'দৈনিক আবেদন গ্রহণ সক্রিয় রয়েছে এবং কোনো প্রশাসনিক স্থগিতাদেশ নেই।';
    if (lang === 'mr') return 'दैनंदिन अर्ज स्वीकारणे सक्रिय असून कोणतीही प्रशासकीय स्थगिती नाही.';
    if (lang === 'gu') return 'દૈનિક અરજી સ્વીકારવાનું ચાલુ છે અને કોઈ વહીવટી રોક નથી.';
    if (lang === 'ta') return 'தினசரி விண்ணப்ப ஏற்பு செயலில் உள்ளது மற்றும் தடைகள் ஏதுமில்லை.';
    if (lang === 'te') return 'రోజువారీ దరఖాస్తుల స్వీకరణ యాక్టివ్‌గా ఉంది మరియు ఎలాంటి అడ్డంకులు లేవు.';
    if (lang === 'kn') return 'ದೈನಂದಿನ ಅರ್ಜಿಗಳ ಸ್ವೀಕಾರ ಸಕ್ರಿಯವಾಗಿದೆ ಮತ್ತು ಯಾವುದೇ ತಡೆಗಳಿಲ್ಲ.';
    if (lang === 'ml') return 'ദൈനംദിന അപേക്ഷാ സ്വീകരണം സജീവമാണ്, ഭരണപരമായ തടസ്സങ്ങളൊന്നുമില്ല.';
  }

  // 5. EXCLUDED PARTNER REASONS
  if (text.includes('Scheme not supported:') || text.includes('does not process intake for')) {
    const s = text.match(/intake for ([^.]+)/)?.[1] || '';
    if (lang === 'hi') return `योजना समर्थित नहीं: यह पार्टनर ${s} के लिए आवेदन स्वीकार नहीं करता।`;
    if (lang === 'pa') return `ਸਕੀਮ ਸਮਰਥਿਤ ਨਹੀਂ: ਇਹ ਪਾਰਟਨਰ ${s} ਲਈ ਅਰਜ਼ੀਆਂ ਸਵੀਕਾਰ ਨਹੀਂ ਕਰਦਾ।`;
    if (lang === 'bn') return `প্রকল্প সমর্থিত নয়: এই পার্টনার ${s}-এর জন্য আবেদন গ্রহণ করে না।`;
    if (lang === 'mr') return `योजना समर्थित नाही: हा भागीदार ${s} साठी अर्ज स्वीकारत नाही.`;
    if (lang === 'gu') return `યોજના માન્ય નથી: આ પાર્ટનર ${s} માટે અરજી સ્વીકારતો નથી.`;
    if (lang === 'ta') return `திட்டம் பொருந்தாது: இந்த கூட்டாளர் ${s} திட்டத்திற்கான விண்ணப்பங்களை ஏற்பதில்லை.`;
    if (lang === 'te') return `పథకం మద్దతు లేదు: ఈ భాగస్వామి ${s} కోసం దరఖాస్తులను స్వీకరించరు.`;
    if (lang === 'kn') return `ಯೋಜನೆ ಲಭ್ಯವಿಲ್ಲ: ಈ ಪಾಲುದಾರರು ${s} ಯೋಜನೆಗೆ ಅರ್ಜಿಗಳನ್ನು ಸ್ವೀಕರಿಸುವುದಿಲ್ಲ.`;
    if (lang === 'ml') return `പദ്ധതി ലഭ്യമല്ല: ഈ പങ്കാളി ${s} പദ്ധതിക്കായുള്ള അപേക്ഷകൾ സ്വീകരിക്കുന്നില്ല.`;
  }
  if (text.includes('Project type not supported:') || text.includes('does not finance')) {
    const p = text.match(/does not finance ([^.]+)/)?.[1] || '';
    if (lang === 'hi') return `परियोजना प्रकार समर्थित नहीं: यह पार्टनर ${p} क्षेत्र को वित्तपोषित नहीं करता।`;
    if (lang === 'pa') return `ਪ੍ਰੋਜੈਕਟ ਕਿਸਮ ਸਮਰਥਿਤ ਨਹੀਂ: ਇਹ ਪਾਰਟਨਰ ${p} ਖੇਤਰ ਨੂੰ ਕਰਜ਼ਾ ਨਹੀਂ ਦਿੰਦਾ।`;
    if (lang === 'bn') return `প্রকল্পের ধরন সমর্থিত নয়: এই পার্টনার ${p} খাতে অর্থায়ন করে না।`;
    if (lang === 'mr') return `प्रकल्प प्रकार समर्थित नाही: हा भागीदार ${p} क्षेत्राला कर्जपुरवठा करत नाही.`;
    if (lang === 'gu') return `પ્રોજેક્ટ પ્રકાર માન્ય નથી: આ પાર્ટનર ${p} ક્ષેત્રને ધિરાણ આપતો નથી.`;
    if (lang === 'ta') return `திட்ட வகை பொருந்தாது: இந்த கூட்டாளர் ${p} துறைக்கு நிதியளிப்பதில்லை.`;
    if (lang === 'te') return `ప్రాజెక్ట్ రకం మద్దతు లేదు: ఈ భాగస్వామి ${p} రంగానికి నిధులు సమకూర్చరు.`;
    if (lang === 'kn') return `ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರಕಾರ ಲಭ್ಯವಿಲ್ಲ: ಈ ಪಾಲುದಾರರು ${p} ಕ್ಷೇತ್ರಕ್ಕೆ ಸಾಲ ನೀಡುವುದಿಲ್ಲ.`;
    if (lang === 'ml') return `പ്രോജക്ട് തരം ലഭ്യമല്ല: ഈ പങ്കാളി ${p} മേഖലയ്ക്ക് ധനസഹായം നൽകുന്നില്ല.`;
  }
  if (text.includes('Outside service area:')) {
    if (lang === 'hi') return 'सेवा क्षेत्र से बाहर: यह ऋणदाता आपके जिले/राज्य में कार्यरत नहीं है।';
    if (lang === 'pa') return 'ਸੇਵਾ ਖੇਤਰ ਤੋਂ ਬਾਹਰ: ਇਹ ਬੈਂਕ ਤੁਹਾਡੇ ਜ਼ਿਲ੍ਹੇ/ਰਾਜ ਵਿੱਚ ਸੇਵਾ ਨਹੀਂ ਦਿੰਦਾ।';
    if (lang === 'bn') return 'পরিষেবা এলাকার বাইরে: এই ঋণদাতা আপনার জেলা বা রাজ্যে সক্রিয় নয়।';
    if (lang === 'mr') return 'कार्यक्षेत्राबाहेर: हा कर्जदाता आपल्या जिल्ह्यात किंवा राज्यात कार्यरत नाही.';
    if (lang === 'gu') return 'સેવા વિસ્તાર બહાર: આ ધિરાણકર્તા તમારા જિલ્લા/રાજ્યમાં કાર્યરત નથી.';
    if (lang === 'ta') return 'சேவை எல்லைக்கு வெளியே: இந்த கடன் வழங்குநர் உங்கள் மாவட்டம்/மாநிலத்தில் செயல்படவில்லை.';
    if (lang === 'te') return 'సేవా ప్రాంతం వెలుపల: ఈ రుణదాత మీ జిల్లా/రాష్ట్రంలో పనిచేయడం లేదు.';
    if (lang === 'kn') return 'ಸೇವಾ ಪ್ರದೇಶದ ಹೊರಗೆ: ಈ ಸಾಲದಾತರು ನಿಮ್ಮ ಜಿಲ್ಲೆ/ರಾಜ್ಯದಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿಲ್ಲ.';
    if (lang === 'ml') return 'സേവന പരിധിക്ക് പുറത്ത്: ഈ വായ്പാ ദാതാവ് നിങ്ങളുടെ ജില്ലയിലോ സംസ്ഥാനത്തോ പ്രവർത്തിക്കുന്നില്ല.';
  }
  if (text.includes('Financing amount below partner minimum:')) {
    const minL = text.match(/₹([0-9,]+)/)?.[1] || '';
    if (lang === 'hi') return `ऋण राशि न्यूनतम सीमा से कम: पार्टनर को कम से कम ₹${minL} का ऋण आवश्यक है।`;
    if (lang === 'pa') return `ਕਰਜ਼ਾ ਰਕਮ ਘੱਟੋ-ਘੱਟ ਸੀਮਾ ਤੋਂ ਘੱਟ: ਪਾਰਟਨਰ ਨੂੰ ਘੱਟੋ-ਘੱਟ ₹${minL} ਦਾ ਕਰਜ਼ਾ ਚਾਹੀਦਾ ਹੈ।`;
    if (lang === 'bn') return `ঋণ সীমা অপর্যাপ্ত: পার্টনারের ন্যূনতম ঋণের আকার ₹${minL}।`;
    if (lang === 'mr') return `कर्ज रक्कम किमान मर्यादेपेक्षा कमी: या शाखेला किमान ₹${minL} चे कर्ज आवश्यक आहे.`;
    if (lang === 'gu') return `લોન રકમ લઘુત્તમ કરતાં ઓછી: પાર્ટનરને ઓછામાં ઓછી ₹${minL} ની લોન જરૂરી છે.`;
    if (lang === 'ta') return `குறைந்தபட்ச வரம்பை விடக் குறைவு: கூட்டாளருக்கு குறைந்தபட்சம் ₹${minL} கடன் தேவை.`;
    if (lang === 'te') return `కనీస రుణం కంటే తక్కువ: భాగస్వామికి కనీసం ₹${minL} రుణం అవసరం.`;
    if (lang === 'kn') return `ಕನಿಷ್ಠ ಸಾಲಕ್ಕಿಂತ ಕಡಿಮೆ: ಪಾಲುದಾರರಿಗೆ ಕನಿಷ್ಠ ₹${minL} ಸಾಲ ಅಗತ್ಯವಿದೆ.`;
    if (lang === 'ml') return `കുറഞ്ഞ വായ്പയേക്കാൾ താഴെ: പങ്കാളിക്ക് കുറഞ്ഞത് ₹${minL} വായ്പ ആവശ്യമാണ്.`;
  }
  if (text.includes('Financing amount exceeds partner limit:')) {
    if (lang === 'hi') return 'ऋण राशि पार्टनर की शाखा सीमा से अधिक है।';
    if (lang === 'pa') return 'ਕਰਜ਼ਾ ਰਕਮ ਇਸ ਸ਼ਾਖਾ ਦੀ ਅਧਿਕਤਮ ਸੀਮਾ ਤੋਂ ਜ਼ਿਆਦਾ ਹੈ।';
    if (lang === 'bn') return 'ঋণের পরিমাণ এই শাখার সর্বোচ্চ সীমার বেশি।';
    if (lang === 'mr') return 'कर्ज रक्कम या शाखेच्या कमाल मर्यादेपेक्षा जास्त आहे.';
    if (lang === 'gu') return 'લોનની રકમ આ શાખાની મહત્તમ મર્યાદા કરતાં વધુ છે.';
    if (lang === 'ta') return 'கடன் தொகை இந்த கிளையின் அதிகபட்ச வரம்பை விட அதிகம்.';
    if (lang === 'te') return 'రుణ మొత్తం ఈ శాఖ పరిమితి కంటే ఎక్కువగా ఉంది.';
    if (lang === 'kn') return 'ಸಾಲದ ಮೊತ್ತವು ಈ ಶಾಖೆಯ ಗರಿಷ್ಠ ಮಿತಿಗಿಂತ ಹೆಚ್ಚಾಗಿದೆ.';
    if (lang === 'ml') return 'വായ്പാ തുക ഈ ശാഖാ പരിധിയേക്കാൾ കൂടുതലാണ്.';
  }
  if (text.includes('Operational issue:') || text.includes('temporarily suspended')) {
    if (lang === 'hi') return 'परिचालन बाधा: शाखा में वर्तमान में ऋण आवेदन प्रक्रिया अस्थायी रूप से स्थगित है।';
    if (lang === 'pa') return 'ਸੰਚਾਲਨ ਸਮੱਸਿਆ: ਇਸ ਸ਼ਾਖਾ ਵਿੱਚ ਫਿਲਹਾਲ ਕਰਜ਼ਾ ਅਰਜ਼ੀਆਂ ਰੋਕੀਆਂ ਗਈਆਂ ਹਨ।';
    if (lang === 'bn') return 'পরিচালনগত সমস্যা: এই শাখায় বর্তমানে আবেদন প্রক্রিয়া স্থগিত রয়েছে।';
    if (lang === 'mr') return 'कामकाजातील अडचण: या शाखेत सध्या नवीन अर्ज स्वीकारणे तात्पुरते बंद आहे.';
    if (lang === 'gu') return 'સંચાલન અડચણ: આ શાખામાં હાલમાં અરજી સ્વીકારવાનું મોકૂફ રખાયેલ છે.';
    if (lang === 'ta') return 'செயல்பாட்டுச் சிக்கல்: இந்த கிளையில் தற்போது புதிய விண்ணப்ப செயலாக்கம் நிறுத்தி வைக்கப்பட்டுள்ளது.';
    if (lang === 'te') return 'కార్యాచరణ సమస్య: ఈ శాఖలో ప్రస్తుతం కొత్త దరఖాస్తుల స్వీకరణ నిలిపివేయబడింది.';
    if (lang === 'kn') return 'ಕಾರ್ಯಾಚರಣೆಯ ಸಮಸ್ಯೆ: ಈ ಶಾಖೆಯಲ್ಲಿ ಸದ್ಯಕ್ಕೆ ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಸ್ಥಗಿತಗೊಳಿಸಲಾಗಿದೆ.';
    if (lang === 'ml') return 'പ്രവർത്തന തടസ്സം: ഈ ശാഖയിൽ നിലവിൽ അപേക്ഷാ നടപടികൾ താൽക്കാലികമായി നിർത്തിവെച്ചിരിക്കുന്നു.';
  }
  if (text.includes('Capacity constraint:') || text.includes('maximum simulated queue capacity')) {
    if (lang === 'hi') return 'क्षमता सीमा: शाखा अपनी अधिकतम क्षमता पर पहुंच चुकी है और नए आवेदन रोक दिए गए हैं।';
    if (lang === 'pa') return 'ਸਮਰੱਥਾ ਸੀਮਾ: ਸ਼ਾਖਾ ਆਪਣੀ ਅਧਿਕਤਮ ਸੀਮਾ ਤੇ ਪਹੁੰਚ ਚੁੱਕੀ ਹੈ ਅਤੇ ਨਵੀਆਂ ਅਰਜ਼ੀਆਂ ਰੋਕੀਆਂ ਗਈਆਂ ਹਨ।';
    if (lang === 'bn') return 'সক্ষমতার সীমাবদ্ধতা: শাখাটি সর্বোচ্চ ক্ষমতায় পৌঁছেছে এবং নতুন আবেদন গ্রহণ বন্ধ রয়েছে।';
    if (lang === 'mr') return 'क्षमता मर्यादा: शाखा कमाल क्षमतेवर पोहोचली असून नवीन अर्ज थांबवले आहेत.';
    if (lang === 'gu') return 'ક્ષમતા મર્યાદા: શાખા તેની મહત્તમ ક્ષમતાએ પહોંચી ગઈ છે અને નવી અરજીઓ થોભાવી છે.';
    if (lang === 'ta') return 'கொள்ளளவு கட்டுப்பாடு: கிளை முழு திறனை எட்டியதால் புதிய விண்ணப்பங்கள் இடைநிறுத்தப்பட்டுள்ளன.';
    if (lang === 'te') return 'సామర్థ్య పరిమితి: శాఖ గరిష్ట సామర్థ్యానికి చేరుకుంది మరియు కొత్త దరఖాస్తులు నిలిపివేయబడ్డాయి.';
    if (lang === 'kn') return 'ಸಾಮರ್ಥ್ಯದ ಮಿತಿ: ಶಾಖೆಯು ಗರಿಷ್ಠ ಮಿತಿಯನ್ನು ತಲುಪಿದೆ ಮತ್ತು ಹೊಸ ಅರ್ಜಿಗಳನ್ನು ನಿಲ್ಲಿಸಲಾಗಿದೆ.';
    if (lang === 'ml') return 'ശേഷി പരിമിതി: ശാഖ പരമാവധി ശേഷിയിലെത്തി പുതിയ അപേക്ഷകൾ നിർത്തിവെച്ചു.';
  }

  // Missing fields mappings
  const fieldMap: Record<string, Record<Language, string>> = {
    'Full Name': { en: 'Full Name', hi: 'पूरा नाम', pa: 'ਪੂਰਾ ਨਾਮ', bn: 'পুরো নাম', mr: 'पूर्ण नाव', gu: 'પૂરું નામ', ta: 'முழு பெயர்', te: 'పూర్తి పేరు', kn: 'ಪೂರ್ಣ ಹೆಸರು', ml: 'മുഴുവൻ പേര്' },
    'Age': { en: 'Age', hi: 'आयु', pa: 'ਉਮਰ', bn: 'বয়স', mr: 'वय', gu: 'ઉંમર', ta: 'வயது', te: 'వయస్సు', kn: 'ವಯಸ್ಸು', ml: 'പ്രായം' },
    'State': { en: 'State', hi: 'राज्य', pa: 'ਰਾਜ', bn: 'রাজ্য', mr: 'राज्य', gu: 'રાજ્ય', ta: 'மாநிலம்', te: 'రాష్ట్రం', kn: 'ರಾಜ್ಯ', ml: 'സംസ്ഥാനം' },
    'Social Category': { en: 'Social Category', hi: 'सामाजिक वर्ग', pa: 'ਸਮਾਜਿਕ ਸ਼੍ਰੇਣੀ', bn: 'সামাজিক শ্রেণী', mr: 'सामाजिक प्रवर्ग', gu: 'સામાજિક વર્ગ', ta: 'சமூகப் பிரிவு', te: 'సామాజిక వర్గం', kn: 'ಸಾಮಾಜಿಕ ವರ್ಗ', ml: 'സാമൂഹിക വിഭാഗം' },
    'Annual Family Income': { en: 'Annual Family Income', hi: 'वार्षिक पारिवारिक आय', pa: 'ਸਾਲਾਨਾ ਪਰਿਵਾਰਕ ਆਮਦਨ', bn: 'বার্ষিক পারিবারিক আয়', mr: 'वार्षिक कौटुंबिक उत्पन्न', gu: 'વાર્ષિક કૌટુંબિક આવક', ta: 'ஆண்டு குடும்ப வருமானம்', te: 'వార్షిక కుటుంబ ఆదాయం', kn: 'ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ', ml: 'വാർഷിക കുടുംബ വരുമാനം' },
    'Project Name': { en: 'Project Name', hi: 'परियोजना का नाम', pa: 'ਪ੍ਰੋਜੈਕਟ ਦਾ ਨਾਮ', bn: 'প্রকল্পের নাম', mr: 'प्रकल्पाचे नाव', gu: 'પ્રોજેક્ટનું નામ', ta: 'திட்டத்தின் பெயர்', te: 'ప్రాజెక్ట్ పేరు', kn: 'ಯೋಜನೆಯ ಹೆಸರು', ml: 'പദ്ധതിയുടെ പേര്' },
    'Project Type': { en: 'Project Type', hi: 'परियोजना का प्रकार', pa: 'ਪ੍ਰੋਜੈਕਟ ਦੀ ਕਿਸਮ', bn: 'প্রকল্পের ধরন', mr: 'प्रकल्पाचा प्रकार', gu: 'પ્રોજેક્ટનો પ્રકાર', ta: 'திட்ட வகை', te: 'ప్రాజెక్ట్ రకం', kn: 'ಯೋಜನೆಯ ಪ್ರಕಾರ', ml: 'പദ്ധതി തരം' },
    'Total Project Cost': { en: 'Total Project Cost', hi: 'कुल परियोजना लागत', pa: 'ਕੁੱਲ ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ', bn: 'মোট প্রকল্প খরচ', mr: 'एकूण प्रकल्प खर्च', gu: 'કુલ પ્રોજેક્ટ ખર્ચ', ta: 'மொத்த திட்டச் செலவு', te: 'మొత్తం ప్రాజెక్ట్ ఖర్చు', kn: 'ಒಟ್ಟು ಯೋಜನಾ ವೆಚ್ಚ', ml: 'ആകെ പദ്ധതി ചെലവ്' }
  };
  if (fieldMap[text]?.[lang]) {
    return fieldMap[text][lang];
  }

  return text;
}
