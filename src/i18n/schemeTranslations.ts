import { Language } from './types';

export interface LocalizedSchemeInfo {
  name: string;
  shortDescription: string;
  fullDescription: string;
  subsidyDetails: string;
  focusArea: string;
  ownContribution: string;
}

export const SCHEME_TRANSLATIONS: Record<Language, Record<string, LocalizedSchemeInfo>> = {
  en: {
    'pmegp': {
      name: "Prime Minister's Employment Generation Programme (PMEGP)",
      shortDescription: 'Flagship credit-linked capital subsidy scheme for setting up micro-enterprises in manufacturing and service sectors.',
      fullDescription: 'PMEGP is a major credit-linked subsidy programme administered by the Ministry of MSME, aimed at generating self-employment opportunities through micro-enterprise ventures in both rural and urban areas. The scheme provides a capital subsidy of 15% to 35% of the project cost, with rural special category beneficiaries (SC, ST, OBC, Women, Minorities, Ex-servicemen) receiving the highest 35% subsidy rate.',
      subsidyDetails: 'Back-ended capital subsidy: 25% (Urban) to 35% (Rural) for SC/ST/OBC/Women/Minority; 15% (Urban) to 25% (Rural) for General Category.',
      focusArea: 'Micro-Enterprise & Production',
      ownContribution: '5% for SC, ST, OBC, Women & Minorities; 10% for General Category'
    },
    'stand-up-india': {
      name: 'Stand-Up India Scheme for SC, ST and Women Entrepreneurs',
      shortDescription: 'Specialized enterprise credit between ₹10 Lakh and ₹1 Crore for greenfield enterprises promoted by SC, ST or Women entrepreneurs.',
      fullDescription: 'Stand-Up India facilitates bank loans between ₹10 Lakh and ₹1 Crore to at least one SC or ST borrower and at least one woman borrower per bank branch for setting up greenfield enterprises in manufacturing, services, agri-allied activities, or the trading sector. Loans are secured under the Credit Guarantee Fund for Stand-Up India (CGFSI).',
      subsidyDetails: 'Interest rates at lowest applicable bank rate (not to exceed base rate + 3% + tenor premium). Up to 15% margin money convergence with central/state schemes.',
      focusArea: 'Affirmative Enterprise Credit',
      ownContribution: '15% minimum promoter equity (can converge down to 10% with state subsidies)'
    },
    'mudra-kishore': {
      name: 'Pradhan Mantri Mudra Yojana (PMMY) — Kishore Category',
      shortDescription: 'Collateral-free institutional micro-credit between ₹50,000 and ₹5 Lakh for existing micro-enterprises and expanding trade.',
      fullDescription: 'Under PMMY, the Kishore category provides non-farm, micro-enterprise loans between ₹50,000 and ₹5,00,000 for purchasing equipment, machinery, transport vehicles, or working capital. The loans are completely collateral-free and guaranteed under the Credit Guarantee Fund for Micro Units (CGFMU).',
      subsidyDetails: 'Zero collateral required. Guarantee coverage provided by NCGTC. Interest rates concessional and set competitively by lending institutions.',
      focusArea: 'Collateral-Free Micro Credit',
      ownContribution: 'Nil to 10% depending on bank sanction policy'
    },
    'pm-vishwakarma': {
      name: 'PM Vishwakarma Scheme for Traditional Artisans & Craftspeople',
      shortDescription: 'Holistic support, modern toolkits, skill training, and collateral-free credit at 5% interest for traditional artisan trades.',
      fullDescription: 'PM Vishwakarma provides end-to-end support to traditional artisans and craftspeople across 18 designated trades (such as carpenters, blacksmiths, potters, sculptors, cobblers, weavers, and tailors). Beneficiaries receive recognition via Vishwakarma Certificate & ID Card, basic & advanced skill training with a ₹500/day stipend, a ₹15,000 modern toolkit incentive, and collateral-free enterprise development loans at an attractive 5% interest rate.',
      subsidyDetails: 'Subvented interest rate capped at 5% (GoI absorbs up to 8% interest subvention). Free modern toolkit grant of ₹15,000. Digital transaction incentives.',
      focusArea: 'Traditional Artisans & Crafts',
      ownContribution: 'Nil (100% institutional support for recognized trades)'
    },
    'nbcfdc-term': {
      name: 'NBCFDC Term Loan Scheme for Other Backward Classes',
      shortDescription: 'Concessional term loans and financial assistance for viable self-employment ventures for eligible backward class beneficiaries.',
      fullDescription: 'The National Backward Classes Finance & Development Corporation (NBCFDC) provides term loan assistance to backward class entrepreneurs through State Channelizing Agencies (SCAs), selected Public Sector Banks, and Regional Rural Banks. The scheme finances up to 85% of project cost for income-generating micro and small enterprises with subsidized interest rates.',
      subsidyDetails: 'Concessional interest rate between 6.0% and 8.0% per annum. SCAs/Banks provide flexible repayment terms and moratorium options.',
      focusArea: 'OBC Economic Development',
      ownContribution: '15% promoter margin money (10% for women under specific sub-schemes)'
    },
    'nsfdc-term': {
      name: 'NSFDC Term Loan Scheme for Scheduled Caste Entrepreneurs',
      shortDescription: 'Targeted long-term concessional financing for income-generating industrial, agricultural, and service projects of SC founders.',
      fullDescription: 'The National Scheduled Castes Finance and Development Corporation (NSFDC) provides term credit assistance up to ₹50 Lakh for viable commercial and industrial projects undertaken by Scheduled Caste entrepreneurs. Financing is routed through State Channelizing Agencies, lead public sector banks, and nominated RRBs with interest rates starting at 6% per annum.',
      subsidyDetails: 'Subsidized rate of 6% to 9% per annum depending on project size. Up to 90% of project cost funded with 5-year repayment and 6-month moratorium.',
      focusArea: 'SC Economic Empowerment',
      ownContribution: '10% minimum promoter margin money'
    },
    'nsfdc-term-loan': {
      name: 'NSFDC Term Loan Scheme for Scheduled Caste Entrepreneurs',
      shortDescription: 'Targeted long-term concessional financing for income-generating industrial, agricultural, and service projects of SC founders.',
      fullDescription: 'The National Scheduled Castes Finance and Development Corporation (NSFDC) provides term credit assistance up to ₹50 Lakh for viable commercial and industrial projects undertaken by Scheduled Caste entrepreneurs. Financing is routed through State Channelizing Agencies, lead public sector banks, and nominated RRBs with interest rates starting at 6% per annum.',
      subsidyDetails: 'Subsidized rate of 6% to 9% per annum depending on project size. Up to 90% of project cost funded with 5-year repayment and 6-month moratorium.',
      focusArea: 'SC Economic Empowerment',
      ownContribution: '10% minimum promoter margin money'
    },
    'nbcfdc-transport': {
      name: 'NBCFDC Transport Sector Credit Scheme (Passenger & Commercial Vehicles)',
      shortDescription: 'Concessional credit scheme enabling OBC youth and transport operators to acquire commercial passenger and logistics vehicles.',
      fullDescription: 'NBCFDC offers dedicated financing up to ₹10 Lakhs for eligible OBC beneficiaries to purchase battery rickshaws, commercial auto-rickshaws, small commercial transport vehicles, or goods carriages. Channelized through State Nodal Corporations and participating commercial banks.',
      subsidyDetails: 'Concessional interest rate between 6.0% and 8.0% per annum. Up to 85% project cost funded.',
      focusArea: 'Transport & Logistics Mobility',
      ownContribution: '15% borrower promoter margin'
    },
    'mahila-samriddhi': {
      name: 'Mahila Samriddhi Yojana (NBCFDC Micro-Finance Scheme for Women)',
      shortDescription: 'Micro-credit assistance exclusively for women entrepreneurs belonging to Backward Classes to start tiny rural enterprises.',
      fullDescription: 'Mahila Samriddhi Yojana provides micro-finance support up to ₹1,40,000 to backward classes women entrepreneurs either directly or through accredited Self-Help Groups (SHGs). Features a highly subsidized interest rate of 4% per annum with minimal collateral requirements.',
      subsidyDetails: 'Interest rate capped at 4% per annum for women beneficiaries; up to 95% project cost funded by NBCFDC.',
      focusArea: 'Women Micro-Credit',
      ownContribution: '5% promoter contribution'
    },
    'dr-ambedkar-education': {
      name: 'Dr. Ambedkar Central Sector Scheme of Interest Subsidy for Higher Education',
      shortDescription: '100% interest subsidy on education loans for OBC/EWS students pursuing professional master and doctoral degrees.',
      fullDescription: 'This Central Sector Scheme provides full interest subsidy during the moratorium period (course duration plus 1 year) to meritorious OBC and EWS students whose total family income is up to ₹8.00 Lakh per annum, pursuing approved higher education courses.',
      subsidyDetails: 'Full 100% interest subsidy paid by Central Government throughout the moratorium period.',
      focusArea: 'Higher Education Interest Subsidy',
      ownContribution: '0% during course duration'
    }
  },
  hi: {
    'pmegp': {
      name: "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)",
      shortDescription: 'विनिर्माण और सेवा क्षेत्रों में सूक्ष्म उद्यमों की स्थापना के लिए प्रमुख क्रेडिट-लिंक्ड पूंजीगत सब्सिडी योजना।',
      fullDescription: 'PMEGP सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय (MSME) द्वारा संचालित एक प्रमुख क्रेडिट-लिंक्ड सब्सिडी कार्यक्रम है, जिसका उद्देश्य ग्रामीण और शहरी दोनों क्षेत्रों में सूक्ष्म उद्यमों के माध्यम से स्वरोजगार के अवसर पैदा करना है। यह योजना परियोजना लागत का 15% से 35% तक पूंजीगत अनुदान (सब्सिडी) प्रदान करती है, जिसमें ग्रामीण विशेष वर्ग के लाभार्थियों (एससी, एसटी, ओबीसी, महिलाएं, अल्पसंख्यक) को 35% की उच्चतम सब्सिडी दर मिलती है।',
      subsidyDetails: 'पूंजीगत सब्सिडी: एससी/एसटी/ओबीसी/महिला/अल्पसंख्यक हेतु 25% (शहरी) से 35% (ग्रामीण); सामान्य वर्ग हेतु 15% (शहरी) से 25% (ग्रामीण)।',
      focusArea: 'सूक्ष्म उद्यम एवं विनिर्माण',
      ownContribution: 'एससी, एसटी, ओबीसी, महिलाओं और अल्पसंख्यकों के लिए 5%; सामान्य वर्ग के लिए 10%'
    },
    'stand-up-india': {
      name: 'स्टैंड-अप इंडिया योजना (एससी, एसटी एवं महिला उद्यमी)',
      shortDescription: 'एससी, एसटी या महिला उद्यमियों द्वारा नए ग्रीनफील्ड उद्यमों हेतु ₹10 लाख से ₹1 करोड़ तक का विशेष संस्थागत ऋण।',
      fullDescription: 'स्टैंड-अप इंडिया योजना विनिर्माण, सेवा, कृषि-संबद्ध गतिविधियों या व्यापार क्षेत्र में नए ग्रीनफील्ड उद्यम स्थापित करने के लिए प्रत्येक बैंक शाखा में कम से कम एक एससी या एसटी उधारकर्ता और कम से कम एक महिला उधारकर्ता को ₹10 लाख से ₹1 करोड़ के बीच बैंक ऋण की सुविधा प्रदान करती है। यह ऋण स्टैंड-अप इंडिया क्रेडिट गारंटी फंड (CGFSI) द्वारा सुरक्षित है।',
      subsidyDetails: 'बैंक की न्यूनतम लागू ब्याज दर (आधार दर + 3% से कम)। केंद्र/राज्य योजनाओं के साथ मार्जिन मनी का 15% तक समायोजन संभव।',
      focusArea: 'समावेशी उद्यम ऋण',
      ownContribution: 'न्यूनतम 15% प्रवर्तक अंशदान (राज्य सब्सिडी के साथ घटकर 10% तक संभव)'
    },
    'mudra-kishore': {
      name: 'प्रधानमंत्री मुद्रा योजना (PMMY) — किशोर श्रेणी',
      shortDescription: 'मौजूदा सूक्ष्म उद्यमों और व्यापार विस्तार के लिए ₹50,000 से ₹5 लाख तक का बिना गारंटी (कोलैटरल-फ्री) संस्थागत ऋण।',
      fullDescription: 'PMMY के तहत, किशोर श्रेणी उपकरण, मशीनरी, परिवहन वाहन खरीदने या कार्यशील पूंजी के लिए ₹50,000 से ₹5,00,000 के बीच गैर-कृषि सूक्ष्म उद्यम ऋण प्रदान करती है। यह ऋण पूरी तरह से बिना किसी संपत्ति बंधक (कोलैटरल-फ्री) के होता है और सूक्ष्म इकाइयों हेतु क्रेडिट गारंटी फंड (CGFMU) द्वारा समर्थित है।',
      subsidyDetails: 'शून्य संपत्ति बंधक (कोलैटरल)। NCGTC द्वारा ऋण गारंटी कवरेज। प्रतिस्पर्धी एवं रियायती ब्याज दरें।',
      focusArea: 'बिना गारंटी सूक्ष्म ऋण',
      ownContribution: 'बैंक स्वीकृति नीति के अनुसार शून्य से 10%'
    },
    'pm-vishwakarma': {
      name: 'पीएम विश्वकर्मा योजना (पारंपरिक कारीगर एवं शिल्पकार)',
      shortDescription: 'पारंपरिक कारीगरों के लिए आधुनिक टूलकिट, कौशल प्रशिक्षण और 5% रियायती ब्याज दर पर बिना गारंटी वित्तीय सहायता।',
      fullDescription: 'पीएम विश्वकर्मा योजना 18 चिन्हित पारंपरिक व्यवसायों (जैसे बढ़ई, लोहार, कुम्हार, मूर्तिकार, मोची, बुनकर और दर्जी) के कारीगरों और शिल्पकारों को समग्र सहायता प्रदान करती है। लाभार्थियों को विश्वकर्मा प्रमाण पत्र व आईडी कार्ड, ₹500/दिन के वजीफे के साथ प्रशिक्षण, ₹15,000 का आधुनिक टूलकिट अनुदान और 5% की आकर्षक ब्याज दर पर बिना गारंटी का उद्यम विकास ऋण मिलता है।',
      subsidyDetails: 'ब्याज दर अधिकतम 5% पर सीमित (भारत सरकार द्वारा 8% तक ब्याज अनुदान)। ₹15,000 का निःशुल्क टूलकिट अनुदान व डिजिटल लेनदेन प्रोत्साहन।',
      focusArea: 'पारंपरिक कारीगर एवं शिल्प',
      ownContribution: 'शून्य (मान्यता प्राप्त व्यवसायों के लिए 100% संस्थागत सहायता)'
    },
    'nbcfdc-term': {
      name: 'एनबीसीएफडीसी (NBCFDC) सावधि ऋण योजना (अन्य पिछड़ा वर्ग)',
      shortDescription: 'पात्र अन्य पिछड़ा वर्ग (OBC) लाभार्थियों के लिए व्यवहार्य स्वरोजगार उद्यमों हेतु रियायती सावधि ऋण।',
      fullDescription: 'राष्ट्रीय पिछड़ा वर्ग वित्त एवं विकास निगम (NBCFDC) राज्य चैनलाइजिंग एजेंसियों (SCAs), चुनिंदा सार्वजनिक क्षेत्र के बैंकों और क्षेत्रीय ग्रामीण बैंकों के माध्यम से पिछड़ा वर्ग के उद्यमियों को सावधि ऋण सहायता प्रदान करता है। यह योजना रियायती ब्याज दरों के साथ आय-सृजन करने वाले सूक्ष्म और लघु उद्यमों के लिए परियोजना लागत का 85% तक वित्तपोषण करती है।',
      subsidyDetails: 'वार्षिक 6.0% से 8.0% के बीच रियायती ब्याज दर। राज्य एजेंसियों एवं बैंकों द्वारा सुविधाजनक पुनर्भुगतान व मोराटोरियम विकल्प।',
      focusArea: 'ओबीसी आर्थिक विकास',
      ownContribution: '15% प्रवर्तक मार्जिन मनी (विशिष्ट उप-योजनाओं में महिलाओं हेतु 10%)'
    },
    'nsfdc-term': {
      name: 'एनएसएफडीसी (NSFDC) सावधि ऋण योजना (अनुसूचित जाति उद्यमी)',
      shortDescription: 'अनुसूचित जाति के संस्थापकों की औद्योगिक, कृषि और सेवा परियोजनाओं हेतु लक्षित दीर्घकालिक रियायती वित्तपोषण।',
      fullDescription: 'राष्ट्रीय अनुसूचित जाति वित्त एवं विकास निगम (NSFDC) अनुसूचित जाति के उद्यमियों द्वारा शुरू की गई व्यवहार्य वाणिज्यिक और औद्योगिक परियोजनाओं के लिए ₹50 लाख तक की ऋण सहायता प्रदान करता है। यह वित्तपोषण राज्य चैनलाइजिंग एजेंसियों और प्रमुख सार्वजनिक बैंकों के माध्यम से 6% प्रति वर्ष की शुरुआती ब्याज दर पर प्रदान किया जाता है।',
      subsidyDetails: 'परियोजना आकार के आधार पर 6% से 9% प्रति वर्ष की रियायती दर। 5 वर्ष की पुनर्भुगतान अवधि और 6 माह के मोराटोरियम के साथ परियोजना लागत का 90% तक वित्तपोषण।',
      focusArea: 'एससी आर्थिक सशक्तिकरण',
      ownContribution: 'न्यूनतम 10% प्रवर्तक मार्जिन मनी'
    },
    'nsfdc-term-loan': {
      name: 'एनएसएफडीसी (NSFDC) सावधि ऋण योजना (अनुसूचित जाति उद्यमी)',
      shortDescription: 'अनुसूचित जाति के संस्थापकों की औद्योगिक, कृषि और सेवा परियोजनाओं हेतु लक्षित दीर्घकालिक रियायती वित्तपोषण।',
      fullDescription: 'राष्ट्रीय अनुसूचित जाति वित्त एवं विकास निगम (NSFDC) अनुसूचित जाति के उद्यमियों द्वारा शुरू की गई व्यवहार्य वाणिज्यिक और औद्योगिक परियोजनाओं के लिए ₹50 लाख तक की ऋण सहायता प्रदान करता है। यह वित्तपोषण राज्य चैनलाइजिंग एजेंसियों और प्रमुख सार्वजनिक बैंकों के माध्यम से 6% प्रति वर्ष की शुरुआती ब्याज दर पर प्रदान किया जाता है।',
      subsidyDetails: 'परियोजना आकार के आधार पर 6% से 9% प्रति वर्ष की रियायती दर। 5 वर्ष की पुनर्भुगतान अवधि और 6 माह के मोराटोरियम के साथ परियोजना लागत का 90% तक वित्तपोषण।',
      focusArea: 'एससी आर्थिक सशक्तिकरण',
      ownContribution: 'न्यूनतम 10% प्रवर्तक मार्जिन मनी'
    },
    'nbcfdc-transport': {
      name: 'एनबीसीएफडीसी (NBCFDC) परिवहन क्षेत्र ऋण योजना (व्यावसायिक वाहन)',
      shortDescription: 'ओबीसी युवाओं व ऑपरेटरों को यात्री और वाणिज्यिक मालवाहक वाहन खरीदने हेतु रियायती ऋण सहायता।',
      fullDescription: 'राष्ट्रीय पिछड़ा वर्ग वित्त एवं विकास निगम (NBCFDC) पात्र ओबीसी लाभार्थियों को ऑटो-रिक्शा, ई-रिक्शा, छोटे वाणिज्यिक वाहन व मालवाहक खरीदने हेतु ₹10 लाख तक का रियायती ऋण प्रदान करता है। यह योजना राज्य एजेंसियों और बैंकों के माध्यम से संचालित है।',
      subsidyDetails: 'वार्षिक 6.0% से 8.0% के बीच रियायती ब्याज दर। परियोजना लागत का 85% तक वित्तपोषण।',
      focusArea: 'परिवहन एवं लॉजिस्टिक्स गतिशीलता',
      ownContribution: '15% उधारकर्ता प्रवर्तक मार्जिन'
    },
    'mahila-samriddhi': {
      name: 'महिला समृद्धि योजना (एनबीसीएफडीसी महिला सूक्ष्म ऋण योजना)',
      shortDescription: 'पिछड़ा वर्ग की महिला उद्यमियों के लिए छोटे ग्रामीण व्यवसाय शुरू करने हेतु विशेष सूक्ष्म ऋण सहायता।',
      fullDescription: 'महिला समृद्धि योजना पिछड़ा वर्ग की महिला उद्यमियों को सीधे या स्वयं सहायता समूहों (SHG) के माध्यम से ₹1,40,000 तक की सूक्ष्म ऋण सहायता प्रदान करती है। इसमें केवल 4% प्रति वर्ष की अत्यधिक रियायती ब्याज दर और न्यूनतम कागजी कार्रवाई की सुविधा है।',
      subsidyDetails: 'महिला लाभार्थियों के लिए मात्र 4% प्रति वर्ष ब्याज दर; एनबीसीएफडीसी द्वारा परियोजना लागत का 95% तक वित्तपोषण।',
      focusArea: 'महिला सूक्ष्म ऋण',
      ownContribution: '5% प्रवर्तक अंशदान'
    },
    'dr-ambedkar-education': {
      name: 'डॉ. अंबेडकर उच्च शिक्षा ऋण ब्याज अनुदान केंद्रीय क्षेत्र योजना',
      shortDescription: 'ओबीसी व ईडब्ल्यूएस छात्रों के उच्च व्यावसायिक अध्ययन हेतु शिक्षा ऋण पर 100% ब्याज सब्सिडी।',
      fullDescription: 'यह केंद्रीय क्षेत्र योजना ₹8 लाख तक की पारिवारिक आय वाले मेधावी ओबीसी और ईडब्ल्यूएस छात्रों को स्वीकृत उच्च शिक्षा पाठ्यक्रमों हेतु मोराटोरियम अवधि (पाठ्यक्रम अवधि + 1 वर्ष) के दौरान पूर्ण ब्याज अनुदान प्रदान करती है।',
      subsidyDetails: 'मोराटोरियम अवधि के दौरान केंद्र सरकार द्वारा 100% ब्याज सब्सिडी का प्रत्यक्ष भुगतान।',
      focusArea: 'उच्च शिक्षा ब्याज अनुदान',
      ownContribution: 'पाठ्यक्रम अवधि के दौरान 0%'
    }
  },
  pa: {
    'pmegp': {
      name: "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਰੋਜ਼ਗਾਰ ਉਤਪਾਦਨ ਪ੍ਰੋਗਰਾਮ (PMEGP)",
      shortDescription: 'ਨਿਰਮਾਣ ਅਤੇ ਸੇਵਾ ਖੇਤਰਾਂ ਵਿੱਚ ਸੂਖਮ ਉੱਦਮ ਸਥਾਪਤ ਕਰਨ ਲਈ ਪ੍ਰਮੁੱਖ ਕ੍ਰੈਡਿਟ-ਲਿੰਕਡ ਪੂੰਜੀ ਸਬਸਿਡੀ ਸਕੀਮ।',
      fullDescription: 'PMEGP ਸੂਖਮ, ਲਘੂ ਅਤੇ ਦਰਮਿਆਨੇ ਉਦਯੋਗ ਮੰਤਰਾਲੇ (MSME) ਦੁਆਰਾ ਚਲਾਇਆ ਜਾਂਦਾ ਇੱਕ ਪ੍ਰਮੁੱਖ ਪ੍ਰੋਗਰਾਮ ਹੈ, ਜਿਸਦਾ ਉਦੇਸ਼ ਪੇਂਡੂ ਅਤੇ ਸ਼ਹਿਰੀ ਖੇਤਰਾਂ ਵਿੱਚ ਸਵੈ-ਰੋਜ਼ਗਾਰ ਦੇ ਮੌਕੇ ਪੈਦਾ ਕਰਨਾ ਹੈ। ਇਹ ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ ਦਾ 15% ਤੋਂ 35% ਤੱਕ ਪੂੰਜੀਗਤ ਅਨੁਦਾਨ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਪੇਂਡੂ ਵਿਸ਼ੇਸ਼ ਵਰਗ ਦੇ ਲਾਭਪਾਤਰੀਆਂ (SC, ST, OBC, ਮਹਿਲਾਵਾਂ, ਘੱਟ ਗਿਣਤੀ) ਨੂੰ 35% ਦੀ ਸਭ ਤੋਂ ਵੱਧ ਸਬਸਿਡੀ ਮਿਲਦੀ ਹੈ।',
      subsidyDetails: 'ਪੂੰਜੀ ਸਬਸਿਡੀ: SC/ST/OBC/ਮਹਿਲਾ/ਘੱਟ ਗਿਣਤੀ ਲਈ 25% (ਸ਼ਹਿਰੀ) ਤੋਂ 35% (ਪੇਂਡੂ); ਜਨਰਲ ਸ਼੍ਰੇਣੀ ਲਈ 15% (ਸ਼ਹਿਰੀ) ਤੋਂ 25% (ਪੇਂਡੂ)।',
      focusArea: 'ਸੂਖਮ ਉੱਦਮ ਅਤੇ ਉਤਪਾਦਨ',
      ownContribution: 'SC, ST, OBC, ਮਹਿਲਾਵਾਂ ਅਤੇ ਘੱਟ ਗਿਣਤੀਆਂ ਲਈ 5%; ਜਨਰਲ ਸ਼੍ਰੇਣੀ ਲਈ 10%'
    },
    'stand-up-india': {
      name: 'ਸਟੈਂਡ-ਅੱਪ ਇੰਡੀਆ ਸਕੀਮ (SC, ST ਅਤੇ ਮਹਿਲਾ ਉੱਦਮੀ)',
      shortDescription: 'SC, ST ਜਾਂ ਮਹਿਲਾ ਉੱਦਮੀਆਂ ਦੁਆਰਾ ਨਵੇਂ ਗ੍ਰੀਨਫੀਲਡ ਉੱਦਮਾਂ ਲਈ ₹10 ਲੱਖ ਤੋਂ ₹1 ਕਰੋੜ ਤੱਕ ਦਾ ਵਿਸ਼ੇਸ਼ ਸੰਸਥਾਗਤ ਕਰਜ਼ਾ।',
      fullDescription: 'ਸਟੈਂਡ-ਅੱਪ ਇੰਡੀਆ ਯੋਜਨਾ ਨਿਰਮਾਣ, ਸੇਵਾਵਾਂ, ਖੇਤੀਬਾੜੀ ਸਹਾਇਕ ਗਤੀਵਿਧੀਆਂ ਜਾਂ ਵਪਾਰ ਵਿੱਚ ਨਵੇਂ ਉੱਦਮ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਪ੍ਰਤੀ ਬੈਂਕ ਸ਼ਾਖਾ ਘੱਟੋ-ਘੱਟ ਇੱਕ SC ਜਾਂ ST ਅਤੇ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਮਹਿਲਾ ਉਧਾਰਕਰਤਾ ਨੂੰ ₹10 ਲੱਖ ਤੋਂ ₹1 ਕਰੋੜ ਦਾ ਕਰਜ਼ਾ ਦਿੰਦੀ ਹੈ। ਇਹ ਕਰਜ਼ਾ ਕ੍ਰੈਡਿਟ ਗਾਰੰਟੀ ਫੰਡ (CGFSI) ਅਧੀਨ ਸੁਰੱਖਿਅਤ ਹੈ।',
      subsidyDetails: 'ਬੈਂਕ ਦੀ ਘੱਟੋ-ਘੱਟ ਲਾਗੂ ਵਿਆਜ ਦਰ। ਕੇਂਦਰ/ਰਾਜ ਸਕੀਮਾਂ ਨਾਲ ਮਾਰਜਿਨ ਮਨੀ ਦਾ 15% ਤੱਕ ਸੁਮੇਲ ਸੰਭਵ।',
      focusArea: 'ਸਮਾਵੇਸ਼ੀ ਉੱਦਮ ਕਰਜ਼ਾ',
      ownContribution: 'ਘੱਟੋ-ਘੱਟ 15% ਪ੍ਰਮੋਟਰ ਹਿੱਸਾ (ਰਾਜ ਸਬਸਿਡੀ ਨਾਲ ਘਟ ਕੇ 10% ਤੱਕ ਸੰਭਵ)'
    },
    'mudra-kishore': {
      name: 'ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਮੁਦਰਾ ਯੋਜਨਾ (PMMY) — ਕਿਸ਼ੋਰ ਸ਼੍ਰੇਣੀ',
      shortDescription: 'ਮੌਜੂਦਾ ਸੂਖਮ ਉੱਦਮਾਂ ਅਤੇ ਵਪਾਰ ਦੇ ਵਿਸਥਾਰ ਲਈ ₹50,000 ਤੋਂ ₹5 ਲੱਖ ਤੱਕ ਦਾ ਬਿਨਾਂ ਗਾਰੰਟੀ ਸੰਸਥਾਗਤ ਕਰਜ਼ਾ।',
      fullDescription: 'PMMY ਅਧੀਨ, ਕਿਸ਼ੋਰ ਸ਼੍ਰੇਣੀ ਮਸ਼ੀਨਰੀ, ਉਪਕਰਣ ਜਾਂ ਕਾਰਜਕਾਰੀ ਪੂੰਜੀ ਲਈ ₹50,000 ਤੋਂ ₹5,00,000 ਤੱਕ ਦਾ ਕਰਜ਼ਾ ਦਿੰਦੀ ਹੈ। ਇਹ ਕਰਜ਼ੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਬਿਨਾਂ ਕਿਸੇ ਜਾਇਦਾਦ ਬੰਧਕ (ਕੋਲੈਟਰਲ-ਮੁਕਤ) ਦੇ ਹੁੰਦੇ ਹਨ ਅਤੇ CGFMU ਦੁਆਰਾ ਗਾਰੰਟੀਸ਼ੁਦਾ ਹਨ।',
      subsidyDetails: 'ਕੋਈ ਜਾਇਦਾਦ ਬੰਧਕ ਨਹੀਂ। NCGTC ਦੁਆਰਾ ਗਾਰੰਟੀ ਕਵਰੇਜ। ਮੁਕਾਬਲੇ ਵਾਲੀਆਂ ਅਤੇ ਰਿਆਇਤੀ ਵਿਆਜ ਦਰਾਂ।',
      focusArea: 'ਗਾਰੰਟੀ-ਮੁਕਤ ਸੂਖਮ ਕਰਜ਼ਾ',
      ownContribution: 'ਬੈਂਕ ਨੀਤੀ ਅਨੁਸਾਰ ਜ਼ੀਰੋ ਤੋਂ 10%'
    },
    'pm-vishwakarma': {
      name: 'ਪੀਐੱਮ ਵਿਸ਼ਵਕਰਮਾ ਯੋਜਨਾ (ਰਵਾਇਤੀ ਕਾਰੀਗਰ ਅਤੇ ਸ਼ਿਲਪਕਾਰ)',
      shortDescription: 'ਰਵਾਇਤੀ ਕਾਰੀਗਰਾਂ ਲਈ ਆਧੁਨਿਕ ਟੂਲਕਿੱਟ, ਹੁਨਰ ਸਿਖਲਾਈ ਅਤੇ 5% ਰਿਆਇਤੀ ਵਿਆਜ ਤੇ ਬਿਨਾਂ ਗਾਰੰਟੀ ਵਿੱਤੀ ਸਹਾਇਤਾ।',
      fullDescription: 'ਪੀਐੱਮ ਵਿਸ਼ਵਕਰਮਾ 18 ਰਵਾਇਤੀ ਕਿੱਤਿਆਂ (ਤਰਖਾਣ, ਲੁਹਾਰ, ਘੁਮਿਆਰ, ਮੋਚੀ, ਜੁਲਾਹੇ ਆਦਿ) ਦੇ ਕਾਰੀਗਰਾਂ ਨੂੰ ਸਮੁੱਚੀ ਸਹਾਇਤਾ ਦਿੰਦੀ ਹੈ। ਲਾਭਪਾਤਰੀਆਂ ਨੂੰ ਸਰਟੀਫਿਕੇਟ, ₹500/ਦਿਨ ਵਜ਼ੀਫੇ ਨਾਲ ਸਿਖਲਾਈ, ₹15,000 ਦੀ ਆਧੁਨਿਕ ਟੂਲਕਿੱਟ ਗ੍ਰਾਂਟ ਅਤੇ 5% ਵਿਆਜ ਦਰ ਤੇ ਬਿਨਾਂ ਗਾਰੰਟੀ ਕਰਜ਼ਾ ਮਿਲਦਾ ਹੈ।',
      subsidyDetails: 'ਵਿਆਜ ਦਰ ਵੱਧ ਤੋਂ ਵੱਧ 5% (ਭਾਰਤ ਸਰਕਾਰ 8% ਤੱਕ ਸਬਸਿਡੀ ਸਹਿਣ ਕਰਦੀ ਹੈ)। ₹15,000 ਮੁਫ਼ਤ ਟੂਲਕਿੱਟ ਗ੍ਰਾਂਟ।',
      focusArea: 'ਰਵਾਇਤੀ ਕਾਰੀਗਰ ਅਤੇ ਸ਼ਿਲਪ',
      ownContribution: 'ਜ਼ੀਰੋ (ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਕਿੱਤਿਆਂ ਲਈ 100% ਸੰਸਥਾਗਤ ਸਹਾਇਤਾ)'
    },
    'nbcfdc-term': {
      name: 'ਐੱਨਬੀਸੀਐੱਫਡੀਸੀ (NBCFDC) ਮਿਆਦੀ ਕਰਜ਼ਾ ਸਕੀਮ (ਹੋਰ ਪੱਛੜੀਆਂ ਸ਼੍ਰੇਣੀਆਂ)',
      shortDescription: 'ਯੋਗ ਪੱਛੜੀਆਂ ਸ਼੍ਰੇਣੀਆਂ (OBC) ਦੇ ਲਾਭਪਾਤਰੀਆਂ ਲਈ ਸਵੈ-ਰੋਜ਼ਗਾਰ ਉੱਦਮਾਂ ਵਾਸਤੇ ਰਿਆਇਤੀ ਮਿਆਦੀ ਕਰਜ਼ਾ।',
      fullDescription: 'ਰਾਸ਼ਟਰੀ ਪੱਛੜੀਆਂ ਸ਼੍ਰੇਣੀਆਂ ਵਿੱਤ ਅਤੇ ਵਿਕਾਸ ਨਿਗਮ (NBCFDC) ਰਾਜ ਚੈਨਲਾਈਜ਼ਿੰਗ ਏਜੰਸੀਆਂ (SCAs) ਅਤੇ ਸਰਕਾਰੀ ਬੈਂਕਾਂ ਰਾਹੀਂ ਪੱਛੜੀਆਂ ਸ਼੍ਰੇਣੀਆਂ ਦੇ ਉੱਦਮੀਆਂ ਨੂੰ ਰਿਆਇਤੀ ਕਰਜ਼ਾ ਦਿੰਦਾ ਹੈ। ਇਹ ਯੋਜਨਾ ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ ਦਾ 85% ਤੱਕ ਵਿੱਤ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ।',
      subsidyDetails: 'ਸਾਲਾਨਾ 6.0% ਤੋਂ 8.0% ਵਿਚਕਾਰ ਰਿਆਇਤੀ ਵਿਆਜ ਦਰ। ਲਚਕਦਾਰ ਮੁੜ-ਭੁਗਤਾਨ ਅਤੇ ਮੋਰੇਟੋਰੀਅਮ ਵਿਕਲਪ।',
      focusArea: 'OBC ਆਰਥਿਕ ਵਿਕਾਸ',
      ownContribution: '15% ਪ੍ਰਮੋਟਰ ਮਾਰਜਿਨ ਮਨੀ (ਮਹਿਲਾਵਾਂ ਲਈ ਕੁਝ ਸਕੀਮਾਂ ਵਿੱਚ 10%)'
    },
    'nsfdc-term': {
      name: 'ਐੱਨਐੱਸਐੱਫਡੀਸੀ (NSFDC) ਮਿਆਦੀ ਕਰਜ਼ਾ ਸਕੀਮ (ਅਨੁਸੂਚਿਤ ਜਾਤੀ ਉੱਦਮੀ)',
      shortDescription: 'ਅਨੁਸੂਚਿਤ ਜਾਤੀ ਦੇ ਸੰਸਥਾਪਕਾਂ ਦੇ ਉਦਯੋਗਿਕ, ਖੇਤੀਬਾੜੀ ਅਤੇ ਸੇਵਾ ਪ੍ਰੋਜੈਕਟਾਂ ਲਈ ਲੰਬੀ ਮਿਆਦ ਦਾ ਰਿਆਇਤੀ ਕਰਜ਼ਾ।',
      fullDescription: 'ਰਾਸ਼ਟਰੀ ਅਨੁਸੂਚਿਤ ਜਾਤੀ ਵਿੱਤ ਅਤੇ ਵਿਕਾਸ ਨਿਗਮ (NSFDC) SC ਉੱਦਮੀਆਂ ਦੇ ਵਪਾਰਕ ਅਤੇ ਉਦਯੋਗਿਕ ਪ੍ਰੋਜੈਕਟਾਂ ਲਈ ₹50 ਲੱਖ ਤੱਕ ਦੀ ਕਰਜ਼ਾ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਵਿੱਤ ਰਾਜ ਏਜੰਸੀਆਂ ਅਤੇ ਬੈਂਕਾਂ ਰਾਹੀਂ 6% ਸਾਲਾਨਾ ਸ਼ੁਰੂਆਤੀ ਵਿਆਜ ਤੇ ਮਿਲਦਾ ਹੈ।',
      subsidyDetails: 'ਪ੍ਰੋਜੈਕਟ ਅਕਾਰ ਦੇ ਆਧਾਰ ਤੇ 6% ਤੋਂ 9% ਪ੍ਰਤੀ ਸਾਲ ਰਿਆਇਤੀ ਦਰ। ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ ਦਾ 90% ਤੱਕ ਵਿੱਤਪੋਸ਼ਣ।',
      focusArea: 'SC ਆਰਥਿਕ ਸਸ਼ਕਤੀਕਰਨ',
      ownContribution: 'ਘੱਟੋ-ਘੱਟ 10% ਪ੍ਰਮੋਟਰ ਮਾਰਜਿਨ ਮਨੀ'
    },
    'nsfdc-term-loan': {
      name: 'ਐੱਨਐੱਸਐੱਫਡੀਸੀ (NSFDC) ਮਿਆਦੀ ਕਰਜ਼ਾ ਸਕੀਮ (ਅਨੁਸੂਚਿਤ ਜਾਤੀ ਉੱਦਮੀ)',
      shortDescription: 'ਅਨੁਸੂਚਿਤ ਜਾਤੀ ਦੇ ਸੰਸਥਾਪਕਾਂ ਦੇ ਉਦਯੋਗਿਕ, ਖੇਤੀਬਾੜੀ ਅਤੇ ਸੇਵਾ ਪ੍ਰੋਜੈਕਟਾਂ ਲਈ ਲੰਬੀ ਮਿਆਦ ਦਾ ਰਿਆਇਤੀ ਕਰਜ਼ਾ।',
      fullDescription: 'ਰਾਸ਼ਟਰੀ ਅਨੁਸੂਚਿਤ ਜਾਤੀ ਵਿੱਤ ਅਤੇ ਵਿਕਾਸ ਨਿਗਮ (NSFDC) SC ਉੱਦਮੀਆਂ ਦੇ ਵਪਾਰਕ ਅਤੇ ਉਦਯੋਗਿਕ ਪ੍ਰੋਜੈਕਟਾਂ ਲਈ ₹50 ਲੱਖ ਤੱਕ ਦੀ ਕਰਜ਼ਾ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਵਿੱਤ ਰਾਜ ਏਜੰਸੀਆਂ ਅਤੇ ਬੈਂਕਾਂ ਰਾਹੀਂ 6% ਸਾਲਾਨਾ ਸ਼ੁਰੂਆਤੀ ਵਿਆਜ ਤੇ ਮਿਲਦਾ ਹੈ।',
      subsidyDetails: 'ਪ੍ਰੋਜੈਕਟ ਅਕਾਰ ਦੇ ਆਧਾਰ ਤੇ 6% ਤੋਂ 9% ਪ੍ਰਤੀ ਸਾਲ ਰਿਆਇਤੀ ਦਰ। ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ ਦਾ 90% ਤੱਕ ਵਿੱਤਪੋਸ਼ਣ।',
      focusArea: 'SC ਆਰਥਿਕ ਸਸ਼ਕਤੀਕਰਨ',
      ownContribution: 'ਘੱਟੋ-ਘੱਟ 10% ਪ੍ਰਮੋਟਰ ਮਾਰਜਿਨ ਮਨੀ'
    },
    'nbcfdc-transport': {
      name: 'ਐੱਨਬੀਸੀਐੱਫਡੀਸੀ (NBCFDC) ਟਰਾਂਸਪੋਰਟ ਸੈਕਟਰ ਕ੍ਰੈਡਿਟ ਸਕੀਮ (ਵਪਾਰਕ ਵਾਹਨ)',
      shortDescription: 'OBC ਨੌਜਵਾਨਾਂ ਨੂੰ ਵਪਾਰਕ ਯਾਤਰੀ ਅਤੇ ਮਾਲ ਵਾਹਨ ਖਰੀਦਣ ਲਈ ਰਿਆਇਤੀ ਕਰਜ਼ਾ ਸਹਾਇਤਾ।',
      fullDescription: 'NBCFDC ਯੋਗ OBC ਲਾਭਪਾਤਰੀਆਂ ਨੂੰ ਆਟੋ-ਰਿਕਸ਼ਾ, ਈ-ਰਿਕਸ਼ਾ, ਛੋਟੇ ਵਪਾਰਕ ਵਾਹਨ ਖਰੀਦਣ ਲਈ ₹10 ਲੱਖ ਤੱਕ ਦਾ ਰਿਆਇਤੀ ਕਰਜ਼ਾ ਦਿੰਦਾ ਹੈ। ਇਹ ਸਕੀਮ ਰਾਜ ਏਜੰਸੀਆਂ ਅਤੇ ਬੈਂਕਾਂ ਰਾਹੀਂ ਲਾਗੂ ਹੁੰਦੀ ਹੈ।',
      subsidyDetails: 'ਸਾਲਾਨਾ 6.0% ਤੋਂ 8.0% ਵਿਚਕਾਰ ਰਿਆਇਤੀ ਵਿਆਜ ਦਰ। ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ ਦਾ 85% ਤੱਕ ਵਿੱਤਪੋਸ਼ਣ।',
      focusArea: 'ਟਰਾਂਸਪੋਰਟ ਅਤੇ ਲੌਜਿਸਟਿਕਸ',
      ownContribution: '15% ਉਧਾਰਕਰਤਾ ਪ੍ਰਮੋਟਰ ਮਾਰਜਿਨ'
    },
    'mahila-samriddhi': {
      name: 'ਮਹਿਲਾ ਸਮ੍ਰਿੱਧੀ ਯੋਜਨਾ (NBCFDC ਮਹਿਲਾ ਮਾਈਕ੍ਰੋ-ਕ੍ਰੈਡਿਟ ਸਕੀਮ)',
      shortDescription: 'ਪੱਛੜੀਆਂ ਸ਼੍ਰੇਣੀਆਂ ਦੀਆਂ ਮਹਿਲਾ ਉੱਦਮੀਆਂ ਲਈ ਛੋਟੇ ਪੇਂਡੂ ਕਾਰੋਬਾਰ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਵਿਸ਼ੇਸ਼ ਮਾਈਕ੍ਰੋ-ਫਾਈਨਾਂਸ ਸਹਾਇਤਾ।',
      fullDescription: 'ਮਹਿਲਾ ਸਮ੍ਰਿੱਧੀ ਯੋਜਨਾ ਪੱਛੜੀਆਂ ਸ਼੍ਰੇਣੀਆਂ ਦੀਆਂ ਮਹਿਲਾ ਉੱਦਮੀਆਂ ਨੂੰ ਸਿੱਧੇ ਜਾਂ ਸਵੈ-ਸਹਾਇਤਾ ਸਮੂਹਾਂ (SHG) ਰਾਹੀਂ ₹1,40,000 ਤੱਕ ਦਾ ਮਾਈਕ੍ਰੋ-ਲੋਨ ਦਿੰਦੀ ਹੈ। ਇਸ ਵਿੱਚ ਸਿਰਫ਼ 4% ਸਾਲਾਨਾ ਵਿਆਜ ਦਰ ਹੁੰਦੀ ਹੈ।',
      subsidyDetails: 'ਮਹਿਲਾ ਲਾਭਪਾਤਰੀਆਂ ਲਈ ਸਿਰਫ਼ 4% ਸਾਲਾਨਾ ਵਿਆਜ ਦਰ; NBCFDC ਦੁਆਰਾ ਪ੍ਰੋਜੈਕਟ ਲਾਗਤ ਦਾ 95% ਤੱਕ ਵਿੱਤਪੋਸ਼ਣ।',
      focusArea: 'ਮਹਿਲਾ ਮਾਈਕ੍ਰੋ-ਕ੍ਰੈਡਿਟ',
      ownContribution: '5% ਪ੍ਰਮੋਟਰ ਹਿੱਸਾ'
    },
    'dr-ambedkar-education': {
      name: 'ਡਾ. ਅੰਬੇਡਕਰ ਉੱਚ ਸਿੱਖਿਆ ਵਿਆਜ ਸਬਸਿਡੀ ਕੇਂਦਰੀ ਖੇਤਰ ਸਕੀਮ',
      shortDescription: 'OBC/EWS ਵਿਦਿਆਰਥੀਆਂ ਦੇ ਪੇਸ਼ੇਵਰ ਮਾਸਟਰ ਅਤੇ ਡਾਕਟੋਰਲ ਅਧਿਐਨ ਲਈ ਸਿੱਖਿਆ ਕਰਜ਼ਿਆਂ ਤੇ 100% ਵਿਆਜ ਸਬਸਿਡੀ।',
      fullDescription: 'ਇਹ ਕੇਂਦਰੀ ਖੇਤਰ ਸਕੀਮ ₹8.00 ਲੱਖ ਤੱਕ ਪਰਿਵਾਰਕ ਆਮਦਨ ਵਾਲੇ ਯੋਗ OBC ਅਤੇ EWS ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਮੋਰੇਟੋਰੀਅਮ ਮਿਆਦ (ਕੋਰਸ ਅਵਧੀ + 1 ਸਾਲ) ਦੌਰਾਨ ਪੂਰੀ ਵਿਆਜ ਸਬਸਿਡੀ ਦਿੰਦੀ ਹੈ।',
      subsidyDetails: 'ਮੋਰੇਟੋਰੀਅਮ ਮਿਆਦ ਦੌਰਾਨ ਕੇਂਦਰ ਸਰਕਾਰ ਦੁਆਰਾ 100% ਵਿਆਜ ਸਬਸਿਡੀ ਦਾ ਸਿੱਧਾ ਭੁਗਤਾਨ।',
      focusArea: 'ਉੱਚ ਸਿੱਖਿਆ ਵਿਆਜ ਸਬਸਿਡੀ',
      ownContribution: 'ਕੋਰਸ ਦੌਰਾਨ 0%'
    }
  },
  bn: {
    'pmegp': {
      name: "প্রধানমন্ত্রী কর্মসংস্থান সৃষ্টি কর্মসূচি (PMEGP)",
      shortDescription: 'উৎপাদন ও সেবা খাতে ক্ষুদ্র উদ্যোগ স্থাপনের জন্য প্রধান ঋণ-সংযুক্ত মূলধনী ভর্তুকি প্রকল্প।',
      fullDescription: 'PMEGP হলো ক্ষুদ্র, ছোট ও মাঝারি উদ্যোগ মন্ত্রণালয় (MSME) পরিচালিত একটি ফ্ল্যাগশিপ ক্রেডিট-লিঙ্কড ভর্তুকি প্রকল্প, যার লক্ষ্য গ্রামীণ ও শহরাঞ্চলে স্ব-কর্মসংস্থানের সুযোগ তৈরি করা। এই প্রকল্প মোট ব্যয়ের ১৫% থেকে ৩৫% মূলধনী ভর্তুকি দেয়, যেখানে গ্রামীণ বিশেষ বিভাগের সুবিধাভোগীরা (SC, ST, OBC, নারী, সংখ্যালঘু) সর্বোচ্চ ৩৫% ভর্তুকি পান।',
      subsidyDetails: 'মূলধনী ভর্তুকি: SC/ST/OBC/নারী/সংখ্যালঘুদের জন্য ২৫% (শহরাঞ্চল) থেকে ৩৫% (গ্রামাঞ্চল); সাধারণ শ্রেণির জন্য ১৫% (শহরাঞ্চল) থেকে ২৫% (গ্রামাঞ্চল)।',
      focusArea: 'ক্ষুদ্র উদ্যোগ ও উৎপাদন',
      ownContribution: 'SC, ST, OBC, নারী ও সংখ্যালঘুদের জন্য ৫%; সাধারণ শ্রেণির জন্য ১০%'
    },
    'stand-up-india': {
      name: 'স্ট্যান্ড-আপ ইন্ডিয়া প্রকল্প (SC, ST এবং নারী উদ্যোক্তা)',
      shortDescription: 'SC, ST বা নারী উদ্যোক্তাদের গ্রিনফিল্ড উদ্যোগের জন্য ₹১০ লাখ থেকে ₹১ কোটি বিশেষ প্রাতিষ্ঠানিক ঋণ।',
      fullDescription: 'স্ট্যান্ড-আপ ইন্ডিয়া উৎপাদন, সেবা, কৃষি-সংলগ্ন খাত বা বাণিজ্যে নতুন উদ্যোগ স্থাপনের জন্য প্রতি ব্যাংক শাখায় অন্তত একজন SC/ST এবং একজন নারী উদ্যোক্তাকে ₹১০ লাখ থেকে ₹১ কোটি ঋণ সুবিধা দেয়। এটি CGFSI তহবিল দ্বারা সুরক্ষিত।',
      subsidyDetails: 'সর্বনিম্ন প্রযোজ্য ব্যাংক সুদের হার। কেন্দ্রীয়/রাজ্য প্রকল্পের সাথে ১৫% পর্যন্ত মার্জিন মানি সমন্বয় সম্ভব।',
      focusArea: 'অন্তর্ভুক্তিমূলক উদ্যোগ ঋণ',
      ownContribution: 'ন্যূনতম ১৫% নিজস্ব মূলধন (রাজ্য ভর্তুকি সহ ১০% পর্যন্ত নামানো সম্ভব)'
    },
    'mudra-kishore': {
      name: 'প্রধানমন্ত্রী মুদ্রা যোজনা (PMMY) — কিশোর বিভাগ',
      shortDescription: 'বিদ্যমান ক্ষুদ্র উদ্যোগ ও বাণিজ্যের সম্প্রসারণের জন্য ₹৫০,০০০ থেকে ₹৫ লাখ জামানতমুক্ত ঋণ।',
      fullDescription: 'PMMY-এর আওতায় কিশোর বিভাগ যন্ত্রপাতি ক্রয় বা চলতি মূলধনের জন্য ₹৫০,০০০ থেকে ₹৫,০০,০০০ পর্যন্ত অ-কৃষি ক্ষুদ্র ঋণ প্রদান করে। এই ঋণ সম্পূর্ণ জামানতমুক্ত এবং CGFMU দ্বারা সুরক্ষিত।',
      subsidyDetails: 'কোনো বন্ধকী জামানতের প্রয়োজন নেই। NCGTC দ্বারা গ্যারান্টি কভারেজ। প্রতিযোগিতামূলক ও রেয়াতি সুদের হার।',
      focusArea: 'জামানতমুক্ত ক্ষুদ্র ঋণ',
      ownContribution: 'ব্যাংকের নীতি অনুযায়ী শূন্য থেকে ১০%'
    },
    'pm-vishwakarma': {
      name: 'পিএম বিশ্বকর্মা প্রকল্প (ঐতিহ্যবাহী কারিগর ও শিল্পী)',
      shortDescription: 'ঐতিহ্যবাহী কারিগরদের জন্য আধুনিক টুলকিট, দক্ষতা প্রশিক্ষণ এবং ৫% সুদে জামানতমুক্ত আর্থিক সহায়তা।',
      fullDescription: 'পিএম বিশ্বকর্মা ১৮টি নির্দিষ্ট পেশার (ছুতোর, কামার, কুমার, মুচি, তাঁতি প্রভৃতি) কারিগরদের সহায়তা দেয়। সুবিধাভোগীরা সনদপত্র, দৈনিক ₹৫০০ ভাতাসহ প্রশিক্ষণ, ₹১৫,০০০ আধুনিক টুলকিট অনুদান এবং ৫% সুদে জামানতমুক্ত ঋণ পান।',
      subsidyDetails: 'সুদের হার সর্বোচ্চ ৫% (সরকার ৮% পর্যন্ত সুদ ভর্তুকি বহন করে)। বিনামূল্যে ₹১৫,০০০-এর আধুনিক টুলকিট অনুদান।',
      focusArea: 'ঐতিহ্যবাহী কারিগর ও শিল্প',
      ownContribution: 'শূন্য (স্বীকৃত পেশার জন্য ১০০% প্রাতিষ্ঠানিক সহায়তা)'
    },
    'nbcfdc-term': {
      name: 'এনবিসিএফডিসি (NBCFDC) মেয়াদি ঋণ প্রকল্প (অন্যান্য অনগ্রসর শ্রেণি)',
      shortDescription: 'যোগ্য অন্যান্য অনগ্রসর শ্রেণির (OBC) জন্য লাভজনক স্ব-কর্মসংস্থান উদ্যোগে রেয়াতি মেয়াদি ঋণ।',
      fullDescription: 'জাতীয় অনগ্রসর শ্রেণি অর্থ ও উন্নয়ন নিগম (NBCFDC) রাজ্য চ্যানেলাইজিং এজেন্সি এবং সরকারি ব্যাংকের মাধ্যমে অনগ্রসর শ্রেণির উদ্যোক্তাদের মেয়াদি ঋণ প্রদান করে। প্রকল্প ব্যয়ের ৮৫% পর্যন্ত অর্থায়ন করা হয়।',
      subsidyDetails: 'বার্ষিক ৬.০% থেকে ৮.০% রেয়াতি সুদের হার। নমনীয় পরিশোধ এবং মোরেটোরিয়াম সুবিধা।',
      focusArea: 'OBC অর্থনৈতিক উন্নয়ন',
      ownContribution: '১৫% নিজস্ব মার্জিন মানি (নারীদের জন্য নির্দিষ্ট ক্ষেত্রে ১০%)'
    },
    'nsfdc-term': {
      name: 'এনএসএফডিসি (NSFDC) মেয়াদি ঋণ প্রকল্প (তফসিলি জাতি উদ্যোক্তা)',
      shortDescription: 'তফসিলি জাতি (SC) উদ্যোক্তাদের শিল্প, কৃষি ও সেবা প্রকল্পের জন্য দীর্ঘমেয়াদি রেয়াতি অর্থায়ন।',
      fullDescription: 'জাতীয় তফসিলি জাতি অর্থ ও উন্নয়ন নিগম (NSFDC) তফসিলি জাতি উদ্যোক্তাদের বাণিজ্যিক ও শিল্প প্রকল্পের জন্য ₹৫০ লাখ পর্যন্ত ঋণ সহায়তা দেয়। সুদের হার বার্ষিক ৬% থেকে शुरू হয়।',
      subsidyDetails: 'প্রকল্পের আকার অনুযায়ী ৬% থেকে ৯% রেয়াতি হার। প্রকল্প ব্যয়ের ৯০% পর্যন্ত অর্থায়ন ও ৫ বছরের পরিশোধকাল।',
      focusArea: 'SC অর্থনৈতিক ক্ষমতায়ন',
      ownContribution: 'ন্যূনতম ১০% নিজস্ব মার্জিন মানি'
    },
    'nsfdc-term-loan': {
      name: 'এনএসএফডিসি (NSFDC) মেয়াদি ঋণ প্রকল্প (তফসিলি জাতি উদ্যোক্তা)',
      shortDescription: 'তফসিলি জাতি (SC) উদ্যোক্তাদের শিল্প, কৃষি ও সেবা প্রকল্পের জন্য দীর্ঘমেয়াদি রেয়াতি অর্থায়ন।',
      fullDescription: 'জাতীয় তফসিলি জাতি অর্থ ও উন্নয়ন নিগম (NSFDC) তফসিলি জাতি উদ্যোক্তাদের বাণিজ্যিক ও শিল্প প্রকল্পের জন্য ₹৫০ লাখ পর্যন্ত ঋণ সহায়তা দেয়। সুদের হার বার্ষিক ৬% থেকে શરૂ হয়।',
      subsidyDetails: 'প্রকল্পের আকার অনুযায়ী ৬% থেকে ৯% রেয়াতি হার। প্রকল্প ব্যয়ের ৯০% পর্যন্ত অর্থায়ন ও ৫ বছরের পরিশোধকাল।',
      focusArea: 'SC অর্থনৈতিক ক্ষমতায়ন',
      ownContribution: 'ন্যূনতম ১০% নিজস্ব মার্জিন মানি'
    },
    'nbcfdc-transport': {
      name: 'এনবিসিএফডিসি (NBCFDC) পরিবহন ক্ষেত্র ঋণ প্রকল্প (বাণিজ্যিক যানবাহন)',
      shortDescription: 'OBC যুব ও চালকদের যাত্রী ও পণ্যবাহী বাণিজ্যিক যানবাহন ক্রয়ে রেয়াতি ঋণ সহায়তা।',
      fullDescription: 'NBCFDC যোগ্য OBC সুবিধাভোগীদের অটো-রিকশা, ই-রিকশা, ছোট বাণিজ্যিক পরিবহন বা পণ্যবাহী যান কেনার জন্য ₹১০ লাখ পর্যন্ত রেয়াতি ঋণ প্রদান করে। এটি রাজ্য সংস্থা ও ব্যাংকের মাধ্যমে পরিচালিত হয়।',
      subsidyDetails: 'বার্ষিক ৬.০% থেকে ৮.০% রেয়াতি সুদের হার। প্রকল্প ব্যয়ের ৮৫% পর্যন্ত অর্থায়ন।',
      focusArea: 'পরিবহন ও লজিস্টিকস সচলতা',
      ownContribution: '১৫% ঋণগ্রহীতা মার্জিন মানি'
    },
    'mahila-samriddhi': {
      name: 'মহিলা সমৃদ্ধি যোজনা (NBCFDC মহিলা ক্ষুদ্র ঋণ প্রকল্প)',
      shortDescription: 'অনগ্রসর শ্রেণির নারী উদ্যোক্তাদের ক্ষুদ্র গ্রামীণ ব্যবসা শুরুর জন্য বিশেষ মাইক্রো-ক্রেডিট সহায়তা।',
      fullDescription: 'মহিলা সমৃদ্ধি যোজনা অনগ্রসর শ্রেণির নারী উদ্যোক্তাদের সরাসরি বা স্বনির্ভর দলগুলির (SHG) মাধ্যমে ₹১,৪০,০০০ পর্যন্ত ক্ষুদ্র ঋণ সহায়তা দেয়। এতে মাত্র ৪% বার্ষিক রেয়াতি সুদের হার প্রযোজ্য।',
      subsidyDetails: 'নারী সুবিধাভোগীদের জন্য মাত্র ৪% বার্ষিক সুদের হার; NBCFDC দ্বারা প্রকল্প ব্যয়ের ৯৫% পর্যন্ত অর্থায়ন।',
      focusArea: 'নারী ক্ষুদ্র ঋণ',
      ownContribution: '৫% নিজস্ব মূলধন'
    },
    'dr-ambedkar-education': {
      name: 'ড. আম্বেদকর উচ্চ শিক্ষা ঋণ সুদ ভর্তুকি কেন্দ্রীয় ক্ষেত্র প্রকল্প',
      shortDescription: 'OBC/EWS শিক্ষার্থীদের উচ্চশিক্ষার জন্য শিক্ষা ঋণে ১০০% সুদ ভর্তুকি।',
      fullDescription: 'এই কেন্দ্রীয় ক্ষেত্র প্রকল্পটি ₹৮.০০ লাখ পর্যন্ত পারিবারিক আয়ের মেধাবী OBC ও EWS শিক্ষার্থীদের অনুমোদিত উচ্চশিক্ষার জন্য মোরেটোরিয়াম মেয়াদে (কোর্স কাল + ১ বছর) সম্পূর্ণ সুদ ভর্তুকি প্রদান করে।',
      subsidyDetails: 'মোরেটোরিয়াম মেয়াদে কেন্দ্রীয় সরকার কর্তৃক সম্পূর্ণ ১০০% সুদ ভর্তুকি সরাসরি প্রদান।',
      focusArea: 'উচ্চ শিক্ষা সুদ ভর্তুকি',
      ownContribution: 'কোর্সের সময়কালে ০%'
    }
  },
  mr: {
    'pmegp': {
      name: "प्रधानमंत्री रोजगार निर्मिती कार्यक्रम (PMEGP)",
      shortDescription: 'उत्पादन व सेवा क्षेत्रांमध्ये सूक्ष्म उद्योग स्थापन करण्यासाठी प्रमुख क्रेडिट-लिंक्ड भांडवली अनुदान योजना.',
      fullDescription: 'PMEGP हा सूक्ष्म, लघु आणि मध्यम उद्योग मंत्रालय (MSME) द्वारे राबवला जाणारा प्रमुख कार्यक्रम आहे, ज्याचा उद्देश ग्रामीण व शहरी भागात स्वयंरोजगार निर्माण करणे आहे. या योजनेत प्रकल्प खर्चाच्या १५% ते ३५% भांडवली अनुदान मिळते, ग्रामीण विशेष प्रवर्गातील लाभार्थ्यांना (SC, ST, OBC, महिला, अल्पसंख्याक) सर्वाधिक ३५% अनुदान मिळते.',
      subsidyDetails: 'भांडवली अनुदान: SC/ST/OBC/महिला/अल्पसंख्याकांसाठी २५% (शहरी) ते ३५% (ग्रामीण); सर्वसाधारण प्रवर्गासाठी १५% (शहरी) ते २५% (ग्रामीण).',
      focusArea: 'सूक्ष्म उद्योग व उत्पादन',
      ownContribution: 'SC, ST, OBC, महिला व अल्पसंख्याकांसाठी ५%; सर्वसाधारण प्रवर्गासाठी १०%'
    },
    'stand-up-india': {
      name: 'स्टँड-अप इंडिया योजना (SC, ST व महिला उद्योजक)',
      shortDescription: 'SC, ST किंवा महिला उद्योजकांनी नवीन ग्रीनफील्ड उपक्रम सुरू करण्यासाठी ₹१० लाख ते ₹१ कोटी विशेष संस्थात्मक कर्ज.',
      fullDescription: 'स्टँड-अप इंडिया योजना उत्पादन, सेवा, कृषी-संलग्न किंवा व्यापार क्षेत्रात नवीन व्यवसाय सुरू करण्यासाठी प्रत्येक बँक शाखेत किमान एका SC/ST आणि एका महिला अर्जदाराला ₹१० लाख ते ₹१ कोटी कर्ज उपलब्ध करून देते. हे कर्ज CGFSI द्वारे हमीकृत आहे.',
      subsidyDetails: 'बँकेचा किमान लागू व्याजदर. केंद्र/राज्य योजनांसोबत १५% पर्यंत मार्जिन मनी समायोजन शक्य.',
      focusArea: 'समावेशक उद्योजकता कर्ज',
      ownContribution: 'किमान १५% स्वतःचे भांडवल (राज्य अनुदानासह १०% पर्यंत कमी शक्य)'
    },
    'mudra-kishore': {
      name: 'प्रधानमंत्री मुद्रा योजना (PMMY) — किशोर प्रवर्ग',
      shortDescription: 'विद्यमान सूक्ष्म उद्योग व व्यवसाय विस्तारासाठी ₹५०,००० ते ₹५ लाख विनातारण संस्थात्मक कर्ज.',
      fullDescription: 'PMMY अंतर्गत किशोर प्रवर्ग उपकरणे, यंत्रसामग्री खरेदी किंवा खेळत्या भांडवलासाठी ₹५०,००० ते ₹५,००,००० पर्यंत बिगर-शेती कर्ज देतो. हे कर्ज पूर्णपणे तारणमुक्त असून CGFMU द्वारे हमी दिलेले असते.',
      subsidyDetails: 'कोणतेही तारण आवश्यक नाही. NCGTC द्वारे हमी संरक्षण. वाजवी व स्पर्धात्मक व्याजदर.',
      focusArea: 'विनातारण सूक्ष्म कर्ज',
      ownContribution: 'बँकेच्या धोरणानुसार शून्य ते १०%'
    },
    'pm-vishwakarma': {
      name: 'पीएम विश्वकर्मा योजना (पारंपरिक कारागीर व शिल्पकार)',
      shortDescription: 'पारंपरिक कारागिरांना आधुनिक टूलकिट, कौशल्य प्रशिक्षण आणि ५% व्याजदरावर विनातारण आर्थिक साहाय्य.',
      fullDescription: 'पीएम विश्वकर्मा योजना १८ पारंपरिक व्यवसायांतील (सुतार, लोहार, कुंभार, चांभार, विणकर इत्यादी) कारागिरांना सर्वसमावेशक साहाय्य देते. लाभार्थ्यांना प्रमाणपत्र, ₹५००/दिवस विद्यावेतनासह प्रशिक्षण, ₹१५,००० मोफत टूलकिट अनुदान आणि ५% सवलतीच्या व्याजदरात कर्ज मिळते.',
      subsidyDetails: 'कमाल व्याजदर ५% (सरकार ८% पर्यंत व्याज अनुदान देते). ₹१५,००० मोफत टूलकिट अनुदान.',
      focusArea: 'पारंपरिक कारागीर व कला',
      ownContribution: 'शून्य (मान्यताप्राप्त व्यवसायांसाठी १००% संस्थात्मक साहाय्य)'
    },
    'nbcfdc-term': {
      name: 'एनबीसीएफडीसी (NBCFDC) मुदत कर्ज योजना (इतर मागासवर्गीय)',
      shortDescription: 'पात्र इतर मागासवर्गीय (OBC) लाभार्थ्यांसाठी स्वयंरोजगार उपक्रमांसाठी सवलतीचे मुदत कर्ज.',
      fullDescription: 'राष्ट्रीय मागासवर्ग वित्त आणि विकास महामंडळ (NBCFDC) राज्य महामंडळे आणि सरकारी बँकांद्वारे मागासवर्गीय उद्योजकांना मुदत कर्ज उपलब्ध करून देते. प्रकल्प खर्चाच्या ८५% पर्यंत वित्तपुरवठा केला जातो.',
      subsidyDetails: 'वार्षिक ६.०% ते ८.०% सवलतीचा व्याजदर. लवचिक परतफेड आणि मोरेटोरियम पर्याय.',
      focusArea: 'OBC आर्थिक विकास',
      ownContribution: '१५% स्वतःचे भांडवल (महिलांसाठी काही योजनांमध्ये १०%)'
    },
    'nsfdc-term': {
      name: 'एनएसएफडीसी (NSFDC) मुदत कर्ज योजना (अनुसूचित जाती उद्योजक)',
      shortDescription: 'अनुसूचित जाती (SC) च्या संस्थापकांच्या औद्योगिक, कृषी व सेवा प्रकल्पांसाठी दीर्घकालीन सवलतीचे वित्तपुरवठा.',
      fullDescription: 'राष्ट्रीय अनुसूचित जाती वित्त आणि विकास महामंडळ (NSFDC) अनुसूचित जातीच्या उद्योजकांच्या व्यावसायिक प्रकल्पांसाठी ₹५० लाख पर्यंत कर्ज साहाय्य देते. व्याजदर ६% पासून सुरू होतो.',
      subsidyDetails: 'प्रकल्पाच्या आकारानुसार ६% ते ९% सवलतीचा दर. ९०% पर्यंत वित्तपुरवठा आणि ५ वर्षांची मुदत.',
      focusArea: 'SC आर्थिक सक्षमीकरण',
      ownContribution: 'किमान १०% स्वतःचे भांडवल'
    },
    'nsfdc-term-loan': {
      name: 'एनएसएफडीसी (NSFDC) मुदत कर्ज योजना (अनुसूचित जाती उद्योजक)',
      shortDescription: 'अनुसूचित जाती (SC) च्या संस्थापकांच्या औद्योगिक, कृषी व सेवा प्रकल्पांसाठी दीर्घकालीन सवलतीचे वित्तपुरवठा.',
      fullDescription: 'राष्ट्रीय अनुसूचित जाती वित्त आणि विकास महामंडळ (NSFDC) अनुसूचित जातीच्या उद्योजकांच्या व्यावसायिक प्रकल्पांसाठी ₹५० लाख पर्यंत कर्ज साहाय्य देते. व्याजदर ६% पासून सुरू होतो.',
      subsidyDetails: 'प्रकल्पाच्या आकारानुसार ६% ते ९% सवलतीचा दर. ९०% पर्यंत वित्तपुरवठा आणि ५ वर्षांची मुदत.',
      focusArea: 'SC आर्थिक सक्षमीकरण',
      ownContribution: 'किमान १०% स्वतःचे भांडवल'
    },
    'nbcfdc-transport': {
      name: 'एनबीसीएफडीसी (NBCFDC) वाहतूक क्षेत्र कर्ज योजना (व्यावसायिक वाहने)',
      shortDescription: 'ओबीसी युवक व चालकांसाठी व्यावसायिक प्रवासी व मालवाहू वाहने खरेदी करण्यासाठी सवलतीचे कर्ज.',
      fullDescription: 'NBCFDC पात्र ओबीसी लाभार्थ्यांना ऑटो-रिक्षा, ई-रिक्षा, लहान व्यावसायिक वाहने खरेदी करण्यासाठी ₹१० लाख पर्यंत सवलतीचे कर्ज उपलब्ध करून देते. ही योजना राज्य महामंडळे व बँकांमार्फत राबवली जाते.',
      subsidyDetails: 'वार्षिक ६.०% ते ८.०% सवलतीचा व्याजदर. प्रकल्प खर्चाच्या ८५% पर्यंत वित्तपुरवठा.',
      focusArea: 'वाहतूक व लॉजिस्टिक गतिशीलता',
      ownContribution: '१५% कर्जदार स्वतःचे भांडवल'
    },
    'mahila-samriddhi': {
      name: 'महिला समृद्धी योजना (NBCFDC महिला सूक्ष्म कर्ज योजना)',
      shortDescription: 'मागासवर्गीय महिला उद्योजकांसाठी छोटे ग्रामीण व्यवसाय सुरू करण्यासाठी विशेष सूक्ष्म कर्ज साहाय्य.',
      fullDescription: 'महिला समृद्धी योजना मागासवर्गीय महिला उद्योजकांना थेट किंवा बचत गटांमार्फत (SHG) ₹१,४०,००० पर्यंत सूक्ष्म कर्ज साहाय्य देते. यात केवळ ४% वार्षिक सवलतीचा व्याजदर लागू होतो.',
      subsidyDetails: 'महिला लाभार्थ्यांसाठी फक्त ४% वार्षिक व्याजदर; NBCFDC कडून प्रकल्प खर्चाच्या ९५% पर्यंत वित्तपुरवठा.',
      focusArea: 'महिला सूक्ष्म कर्ज',
      ownContribution: '५% स्वतःचे भांडवल'
    },
    'dr-ambedkar-education': {
      name: 'डॉ. आंबेडकर उच्च शिक्षण कर्ज व्याज सवलत केंद्रीय क्षेत्र योजना',
      shortDescription: 'ओबीसी व ईडब्ल्यूएस विद्यार्थ्यांच्या उच्च शिक्षणासाठी शैक्षणिक कर्जावर १००% व्याज अनुदान.',
      fullDescription: 'ही केंद्रीय क्षेत्र योजना ₹८.०० लाख पर्यंत कौटुंबिक उत्पन्न असलेल्या गुणवंत ओबीसी आणि ईडब्ल्यूएस विद्यार्थ्यांना मान्यताप्राप्त उच्च शिक्षणासाठी मोरेटोरियम कालावधीत (अभ्यासक्रम + १ वर्ष) संपूर्ण व्याज अनुदान देते.',
      subsidyDetails: 'मोरेटोरियम कालावधीत केंद्र सरकारद्वारे १००% व्याज अनुदानाची थेट परतफेड.',
      focusArea: 'उच्च शिक्षण व्याज अनुदान',
      ownContribution: 'अभ्यासक्रम कालावधीत ०%'
    }
  },
  gu: {
    'pmegp': {
      name: "પ્રધાનમંત્રી રોજગાર નિર્માણ કાર્યક્રમ (PMEGP)",
      shortDescription: 'ઉત્પાદન અને સેવા ક્ષેત્રોમાં સૂક્ષ્મ એકમો સ્થાપવા માટે મુખ્ય ક્રેડિટ-લિંક્ડ મૂડી સબસિડી યોજના.',
      fullDescription: 'PMEGP એ MSME મંત્રાલય દ્વારા સંચાલિત મુખ્ય ક્રેડિટ-લિંક્ડ સબસિડી કાર્યક્રમ છે, જેનો ઉદ્દેશ ગ્રામીણ અને શહેરી વિસ્તારોમાં સ્વ-રોજગાર પેદા કરવાનો છે. આ યોજના પ્રોજેક્ટ ખર્ચના ૧૫% થી ૩૫% મૂડી સબસિડી આપે છે, જેમાં ગ્રામીણ વિશેષ વર્ગના લાભાર્થીઓ (SC, ST, OBC, મહિલાઓ, લઘુમતી) ને સૌથી વધુ ૩૫% સબસિડી મળે છે.',
      subsidyDetails: 'મૂડી સબસિડી: SC/ST/OBC/મહિલા/લઘુમતી માટે ૨૫% (શહેરી) થી ૩૫% (ગ્રામીણ); સામાન્ય વર્ગ માટે ૧૫% (શહેરી) થી ૨૫% (ગ્રામીણ).',
      focusArea: 'સૂક્ષ્મ ઉદ્યોગ અને ઉત્પાદન',
      ownContribution: 'SC, ST, OBC, મહિલાઓ અને લઘુમતીઓ માટે ૫%; સામાન્ય વર્ગ માટે ૧૦%'
    },
    'stand-up-india': {
      name: 'સ્ટેન્ડ-અપ ઇન્ડિયા યોજના (SC, ST અને મહિલા ઉદ્યોગસાહસિકો)',
      shortDescription: 'SC, ST અથવા મહિલા ઉદ્યોગસાહસિકો દ્વારા નવા ગ્રીનફીલ્ડ એકમો માટે ₹૧૦ લાખ થી ₹૧ કરોડ સુધીનું વિશિષ્ટ સંસ્થાકીય ધિરાણ.',
      fullDescription: 'સ્ટેન્ડ-અપ ઇન્ડિયા ઉત્પાદન, સેવા, કૃષિ-સંલગ્ન અથવા વેપાર ક્ષેત્રે નવો વ્યવસાય શરૂ કરવા માટે દરેક બેંક શાખા દીઠ ઓછામાં ઓછા એક SC/ST અને એક મહિલાને ₹૧૦ લાખ થી ₹૧ કરોડ લોન પૂરી પાડે છે. આ લોન CGFSI હેઠળ સુરક્ષિત છે.',
      subsidyDetails: 'બેંકનો લઘુત્તમ લાગુ વ્યાજદર. કેન્દ્ર/રાજ્ય યોજનાઓ સાથે ૧૫% સુધી માર્જિન મની સંકલન શક્ય.',
      focusArea: 'સમાવેશી ઉદ્યોગસાહસિકતા લોન',
      ownContribution: 'લઘુત્તમ ૧૫% પ્રમોટર મૂડી (રાજ્ય સબસિડી સાથે ઘટીને ૧૦% સુધી શક્ય)'
    },
    'mudra-kishore': {
      name: 'પ્રધાનમંત્રી મુદ્રા યોજના (PMMY) — કિશોર કેટેગરી',
      shortDescription: 'હાલના સૂક્ષ્મ એકમો અને વ્યવસાય વિસ્તાર માટે ₹૫૦,૦૦૦ થી ₹૫ લાખ સુધીનું જામીનમુક્ત (કોલેટરલ-ફ્રી) સંસ્થાકીય ધિરાણ.',
      fullDescription: 'PMMY હેઠળ, કિશોર કેટેગરી સાધનો, મશીનરી કે કાર્યકારી મૂડી માટે ₹૫૦,૦૦૦ થી ₹૫,૦૦,૦૦૦ સુધી બિન-ખેતી લોન આપે છે. આ લોન સંપૂર્ણપણે જામીનમુક્ત છે અને CGFMU દ્વારા ગેરંટીકૃત છે.',
      subsidyDetails: 'કોઈ મિલકત ગીરવે મૂકવાની જરૂર નથી. NCGTC દ્વારા ગેરંટી કવરેજ. સ્પર્ધાત્મક અને રાહતદરે વ્યાજ.',
      focusArea: 'જામીનમુક્ત સૂક્ષ્મ ધિરાણ',
      ownContribution: 'બેંક નીતિ મુજબ શૂન્ય થી ૧૦%'
    },
    'pm-vishwakarma': {
      name: 'પીએમ વિશ્વકર્મા યોજના (પરંપરાગત કારીગરો અને શિલ્પકારો)',
      shortDescription: 'પરંપરાગત કારીગરો માટે આધુનિક ટૂલકિટ, કૌશલ્ય તાલીમ અને ૫% વ્યાજે જામીનમુક્ત નાણાકીય સહાય.',
      fullDescription: 'પીએમ વિશ્વકર્મા યોજના ૧૮ નિર્ધારિત વ્યવસાયો (સુથાર, લુહાર, કુંભાર, મોચી, વણકર વગેરે) ના કારીગરોને સંપૂર્ણ સહાય પૂરી પાડે છે. લાભાર્થીઓને પ્રમાણપત્ર, ₹૫૦૦/દિવસ સ્ટાઇપેન્ડ સાથે તાલીમ, ₹૧૫,૦૦૦ ની આધુનિક ટૂલકિટ ગ્રાન્ટ અને ૫% વ્યાજે લોન મળે છે.',
      subsidyDetails: 'વ્યાજદર મહત્તમ ૫% (સરકાર ૮% સુધી વ્યાજ સબસિડી ભોગવે છે). ₹૧૫,૦૦૦ મફત ટૂલકિટ ગ્રાન્ટ.',
      focusArea: 'પરંપરાગત કારીગરી અને કલા',
      ownContribution: 'શૂન્ય (માન્ય વ્યવસાયો માટે ૧૦૦% સંસ્થાકીય સહાય)'
    },
    'nbcfdc-term': {
      name: 'એનબીસીએફડીસી (NBCFDC) મુદતી લોન યોજના (અન્ય પછાત વર્ગ)',
      shortDescription: 'પાત્ર અન્ય પછાત વર્ગ (OBC) ના લાભાર્થીઓ માટે સ્વ-રોજગાર એકમો માટે રાહતદરે મુદતી લોન.',
      fullDescription: 'નેશનલ બેકવર્ડ ક્લાસિસ ફાઇનાન્સ એન્ડ ડેવલપમેન્ટ કોર્પોરેશન (NBCFDC) રાજ્ય ચેનલાઇઝિંગ એજન્સીઓ અને સરકારી બેંકો મારફતે પછાત વર્ગના ઉદ્યમીઓને લોન સહાય આપે છે. આ યોજના પ્રોજેક્ટ ખર્ચના ૮૫% સુધી ધિરાણ પૂરું પાડે છે.',
      subsidyDetails: 'વાર્ષિક ૬.૦% થી ૮.૦% વચ્ચે રાહત વ્યાજદર. લવચીક પુનઃચુકવણી અને મોરેટોરિયમ વિકલ્પ.',
      focusArea: 'OBC આર્થિક વિકાસ',
      ownContribution: '૧૫% પ્રમોટર માર્જિન મની (મહિલાઓ માટે અમુક પેટા-યોજનાઓમાં ૧૦%)'
    },
    'nsfdc-term': {
      name: 'એનએસએફડીસી (NSFDC) મુદતી લોન યોજના (અનુસૂચિત જાતિ ઉદ્યોગસાહસિકો)',
      shortDescription: 'અનુસૂચિત જાતિ (SC) ના સ્થાપકોના ઔદ્યોગિક, કૃષિ અને સેવા પ્રોજેક્ટ્સ માટે લાંબા ગાળાનું રાહતદરે ધિરાણ.',
      fullDescription: 'નેશનલ શેડ્યુલ્ડ કાસ્ટ્સ ફાઇનાન્સ એન્ડ ડેવલપમેન્ટ કોર્પોરેશન (NSFDC) SC ઉદ્યમીઓના પ્રોજેક્ટ્સ માટે ₹૫૦ લાખ સુધી લોન સહાય આપે છે. વ્યાજદર વાર્ષિક ૬% થી શરૂ થાય છે.',
      subsidyDetails: 'પ્રોજેક્ટ કદ મુજબ ૬% થી ૯% રાહતદર. ૯૦% સુધી ધિરાણ અને ૫ વર્ષની મુદત.',
      focusArea: 'SC આર્થિક સશક્તિકરણ',
      ownContribution: 'લઘુત્તમ ૧૦% પ્રમોટર માર્જિન મની'
    },
    'nsfdc-term-loan': {
      name: 'એનએસએફડીસી (NSFDC) મુદતી લોન યોજના (અનુસૂચિત જાતિ ઉદ્યોગસાહસિકો)',
      shortDescription: 'અનુસૂચિત જાતિ (SC) ના સ્થાપકોના ઔદ્યોગિક, કૃષિ અને સેવા પ્રોજેક્ટ્સ માટે લાંબા ગાળાનું રાહતદરે ધિરાણ.',
      fullDescription: 'નેશનલ શેડ્યુલ્ડ કાસ્ટ્સ ફાઇનાન્સ એન્ડ ડેવલપમેન્ટ કોર્પોરેશન (NSFDC) SC ઉદ્યમીઓના પ્રોજેક્ટ્સ માટે ₹૫૦ લાખ સુધી લોન સહાય આપે છે. વ્યાજદર વાર્ષિક ૬% થી શરૂ થાય છે.',
      subsidyDetails: 'પ્રોજેક્ટ કદ મુજબ ૬% થી ૯% રાહતદર. ૯૦% સુધી ધિરાણ અને ૫ વર્ષની મુદત.',
      focusArea: 'SC આર્થિક સશક્તિકરણ',
      ownContribution: 'લઘુત્તમ ૧૦% પ્રમોટર માર્જિન મની'
    },
    'nbcfdc-transport': {
      name: 'એનબીસીએફડીસી (NBCFDC) વાહન વ્યવહાર ક્ષેત્ર લોન યોજના (વાણિજ્યિક વાહનો)',
      shortDescription: 'OBC યુવાનો અને ડ્રાઇવરોને પેસેન્જર અને વાણિજ્યિક વાહનો ખરીદવા માટે રાહત ધિરાણ સહાય.',
      fullDescription: 'NBCFDC પાત્ર OBC લાભાર્થીઓને ઓટો-રિક્ષા, ઇ-રિક્ષા, નાના વાણિજ્યિક વાહનો ખરીદવા માટે ₹૧૦ લાખ સુધીની રાહત લોન આપે છે. આ યોજના રાજ્ય એજન્સીઓ અને બેંકો મારફતે ચાલે છે.',
      subsidyDetails: 'વાર્ષિક ૬.૦% થી ૮.૦% રાહત વ્યાજદર. પ્રોજેક્ટ ખર્ચના ૮૫% સુધી ધિરાણ.',
      focusArea: 'વાહન વ્યવહાર અને લોજિસ્ટિક્સ',
      ownContribution: '૧૫% લોનધારક માર્જિન મની'
    },
    'mahila-samriddhi': {
      name: 'મહિલા સમૃદ્ધિ યોજના (NBCFDC મહિલા માઇક્રો ક્રેડિટ યોજના)',
      shortDescription: 'પછાત વર્ગની મહિલા ઉદ્યોગસાહસિકોને નાના ગ્રામીણ વ્યવસાયો શરૂ કરવા માટે વિશેષ માઇક્રો-ફાઇનાન્સ સહાય.',
      fullDescription: 'મહિલા સમૃદ્ધિ યોજના પછાત વર્ગની મહિલા ઉદ્યોગસાહસિકોને સીધી રીતે અથવા સ્વ-સહાય જૂથો (SHG) મારફતે ₹૧,૪૦,૦૦૦ સુધીની માઇક્રો લોન સહાય આપે છે. આમાં માત્ર ૪% વાર્ષિક રાહત વ્યાજદર લાગુ પડે છે.',
      subsidyDetails: 'મહિલા લાભાર્થીઓ માટે માત્ર ૪% વાર્ષિક વ્યાજદર; NBCFDC દ્વારા પ્રોજેક્ટ ખર્ચના ૯૫% સુધી ધિરાણ.',
      focusArea: 'મહિલા માઇક્રો ધિરાણ',
      ownContribution: '૫% પ્રમોટર ફાળો'
    },
    'dr-ambedkar-education': {
      name: 'ડૉ. આંબેડકર ઉચ્ચ શિક્ષણ લોન વ્યાજ સબસિડી કેન્દ્રીય ક્ષેત્ર યોજના',
      shortDescription: 'OBC/EWS વિદ્યાર્થીઓના ઉચ્ચ વ્યાવસાયિક અભ્યાસ માટે શિક્ષણ લોન પર ૧૦૦% વ્યાજ સબસિડી.',
      fullDescription: 'આ કેન્દ્રીય ક્ષેત્ર યોજના ₹૮.૦૦ લાખ સુધીની કૌટુંબિક આવક ધરાવતા તેજસ્વી OBC અને EWS વિદ્યાર્થીઓને મંજૂર ઉચ્ચ શિક્ષણ અભ્યાસક્રમો માટે મોરેટોરિયમ સમયગાળા (કોર્સ સમયગાળો + ૧ વર્ષ) દરમિયાન સંપૂર્ણ વ્યાજ સબસિડી પૂરી પાડે છે.',
      subsidyDetails: 'મોરેટોરિયમ સમયગાળા દરમિયાન કેન્દ્ર સરકાર દ્વારા ૧૦૦% વ્યાજ સબસિડીની સીધી ચુકવણી.',
      focusArea: 'ઉચ્ચ શિક્ષણ વ્યાજ સબસિડી',
      ownContribution: 'કોર્સ સમયગાળા દરમિયાન ૦%'
    }
  },
  ta: {
    'pmegp': {
      name: "பிரதம மந்திரி வேலைவாய்ப்பு உருவாக்கும் திட்டம் (PMEGP)",
      shortDescription: 'உற்பத்தி மற்றும் சேவைத் துறைகளில் குறுந்தொழில் தொடங்க முதன்மை கடன்-இணைக்கப்பட்ட மூலதன மானியத் திட்டம்.',
      fullDescription: 'PMEGP என்பது MSME அமைச்சகத்தால் நிர்வகிக்கப்படும் முதன்மை கடன்-இணைக்கப்பட்ட மானியத் திட்டமாகும், இது கிராமப்புற மற்றும் நகர்ப்புறங்களில் சுயவேலைவாய்ப்பை உருவாக்குவதை நோக்கமாகக் கொண்டுள்ளது. இத்திட்டம் திட்டச் செலவில் 15% முதல் 35% வரை மூலதன மானியத்தை வழங்குகிறது, இதில் கிராமப்புற சிறப்புப் பிரிவு பயனாளிகள் (SC, ST, OBC, பெண்கள், சிறுபான்மையினர்) அதிகபட்சமாக 35% மானியம் பெறுகின்றனர்.',
      subsidyDetails: 'மூலதன மானியம்: SC/ST/OBC/பெண்கள்/சிறுபான்மையினருக்கு 25% (நகர்ப்புறம்) முதல் 35% (கிராமப்புறம்); பொதுப் பிரிவினருக்கு 15% (நகர்ப்புறம்) முதல் 25% (கிராமப்புறம்).',
      focusArea: 'குறுந்தொழில் மற்றும் உற்பத்தி',
      ownContribution: 'SC, ST, OBC, பெண்கள் மற்றும் சிறுபான்மையினருக்கு 5%; பொதுப் பிரிவினருக்கு 10%'
    },
    'stand-up-india': {
      name: 'ஸ்டாண்ட்-அப் இந்தியா திட்டம் (SC, ST மற்றும் பெண் தொழில்முனைவோர்)',
      shortDescription: 'SC, ST அல்லது பெண் தொழில்முனைவோரின் புதிய வணிக முயற்சிகளுக்கு (Greenfield) ₹10 லட்சம் முதல் ₹1 கோடி வரை பிரத்யேக நிறுவனக் கடன்.',
      fullDescription: 'ஸ்டாண்ட்-அப் இந்தியா உற்பத்தி, சேவைகள், விவசாயம் சார்ந்த அல்லது வர்த்தகத் துறைகளில் புதிய தொழில் தொடங்க ஒவ்வொரு வங்கி கிளையும் குறைந்தபட்சம் ஒரு SC/ST மற்றும் ஒரு பெண் தொழில்முனைவோருக்கு ₹10 லட்சம் முதல் ₹1 கோடி வரை கடன் வழங்க வகைசெய்கிறது. இக்கடன்கள் CGFSI உத்தரவாதத்தின் கீழ் பாதுகாக்கப்படுகின்றன.',
      subsidyDetails: 'வங்கியின் மிகக் குறைந்த பொருந்தக்கூடிய வட்டி விகிதம். மத்திய/மாநில மானியங்களுடன் 15% வரை விளிம்புத் தொகை ஒருங்கிணைப்பு சாத்தியம்.',
      focusArea: 'உள்ளடக்கிய தொழில்முனைவோர் கடன்',
      ownContribution: 'குறைந்தபட்சம் 15% சொந்த பங்கு (மாநில மானியங்களுடன் 10% வரை குறைய வாய்ப்புள்ளது)'
    },
    'mudra-kishore': {
      name: 'பிரதம மந்திரி முத்ரா திட்டம் (PMMY) — கிஷோர் பிரிவு',
      shortDescription: 'ஏற்கனவே உள்ள குறுந்தொழில்கள் மற்றும் வணிக விரிவாக்கத்திற்கு ₹50,000 முதல் ₹5 லட்சம் வரை பிணையற்ற (Collateral-Free) கடன்.',
      fullDescription: 'PMMY திட்டத்தின் கீழ், கிஷோர் பிரிவு உபகரணங்கள், இயந்திரங்கள் அல்லது நடைமுறை மூலதனத்திற்காக ₹50,000 முதல் ₹5,00,000 வரை விவசாயம் அல்லாத கடன்களை வழங்குகிறது. இக்கடன் முற்றிலும் பிணையற்றது மற்றும் CGFMU மூலம் உத்தரவாதம் அளிக்கப்படுகிறது.',
      subsidyDetails: 'எந்தவித சொத்து பிணையமும் தேவையில்லை. NCGTC உத்தரவாத பாதுகாப்பு. போட்டிக்குரிய சலுகை வட்டி விகிதம்.',
      focusArea: 'பிணையற்ற குறுங்கடன்',
      ownContribution: 'வங்கி கொள்கைப்படி பூஜ்ஜியம் முதல் 10% வரை'
    },
    'pm-vishwakarma': {
      name: 'பிஎம் விஸ்வகர்மா திட்டம் (பாரம்பரிய கைவினைஞர்கள் & தொழிலாளர்கள்)',
      shortDescription: 'பாரம்பரிய கைவினைஞர்களுக்கு நவீன கருவித்தொகுப்பு, திறன் பயிற்சி மற்றும் 5% சலுகை வட்டியில் பிணையற்ற நிதி உதவி.',
      fullDescription: 'பிஎம் விஸ்வகர்மா திட்டம் 18 பாரம்பரிய கைவினைத் தொழில்களில் (தச்சர், கொல்லர், குயவர், காலணி தயாரிப்பாளர், நெசவாளர் போன்றவை) ஈடுபட்டுள்ள கைவினைஞர்களுக்கு விரிவான ஆதரவை வழங்குகிறது. பயனாளிகள் அதிகாரப்பூர்வ சான்றிதழ், நாள் ஒன்றுக்கு ₹500 உதவித்தொகையுடன் பயிற்சி, ₹15,000 கருவித்தொகுப்பு மானியம் மற்றும் 5% வட்டியில் கடன் பெறுகின்றனர்.',
      subsidyDetails: 'வட்டி விகிதம் அதிகபட்சம் 5% (அரசு 8% வரை வட்டி மானியம் ஏற்கிறது). ₹15,000 இலவச கருவித்தொகுப்பு மானியம்.',
      focusArea: 'பாரம்பரிய கைவினைத்திறன் & கலை',
      ownContribution: 'பூஜ்ஜியம் (அங்கீகரிக்கப்பட்ட தொழில்களுக்கு 100% நிறுவன ஆதரவு)'
    },
    'nbcfdc-term': {
      name: 'NBCFDC தவணைக் கடன் திட்டம் (இதர பிற்படுத்தப்பட்ட வகுப்பினர் - OBC)',
      shortDescription: 'தகுதியுள்ள இதர பிற்படுத்தப்பட்ட வகுப்பினர் (OBC) சுயவேலைவாய்ப்புத் தொழில்களைத் தொடங்க சலுகை தவணைக் கடன்.',
      fullDescription: 'தேசிய பிற்படுத்தப்பட்டோர் நிதி மற்றும் மேம்பாட்டுக் கழகம் (NBCFDC) மாநில முகமைகள் மற்றும் பொதுத்துறை வங்கிகள் மூலம் பிற்படுத்தப்பட்ட வகுப்பைச் சேர்ந்த தொழில்முனைவோருக்கு கடன் வழங்குகிறது. இத்திட்டம் திட்டச் செலவில் 85% வரை நிதியளிக்கிறது.',
      subsidyDetails: 'ஆண்டுக்கு 6.0% முதல் 8.0% வரை சலுகை வட்டி விகிதம். நெகிழ்வான திருப்பிச் செலுத்தும் காலமும் சலுகைக் காலமும்.',
      focusArea: 'OBC பொருளாதார மேம்பாடு',
      ownContribution: '15% சொந்த பங்கு விளிம்புத் தொகை (பெண்களுக்கான சில துணைத் திட்டங்களில் 10%)'
    },
    'nsfdc-term': {
      name: 'NSFDC தவணைக் கடன் திட்டம் (பட்டியலின தொழில்முனைவோர் - SC)',
      shortDescription: 'பட்டியலின (SC) நிறுவனர்களின் தொழில், விவசாயம் மற்றும் சேவைத் திட்டங்களுக்கு நீண்டகால சலுகைக் கடன் உதவி.',
      fullDescription: 'தேசிய பட்டியலினத்தவர் நிதி மற்றும் மேம்பாட்டுக் கழகம் (NSFDC) SC தொழில்முனைவோரின் வருவாய் ஈட்டும் திட்டங்களுக்கு ₹50 லட்சம் வரை கடன் உதவி வழங்குகிறது. வட்டி விகிதம் ஆண்டுக்கு 6% முதல் தொடங்குகிறது.',
      subsidyDetails: 'திட்ட அளவைப் பொறுத்து 6% முதல் 9% வரை சலுகை விகிதம். 90% வரை நிதியுதவி மற்றும் 5 ஆண்டுகள் வரை கால அளவு.',
      focusArea: 'SC பொருளாதார வலுவூட்டல்',
      ownContribution: 'குறைந்தபட்சம் 10% சொந்த பங்கு விளிம்புத் தொகை'
    },
    'nsfdc-term-loan': {
      name: 'NSFDC தவணைக் கடன் திட்டம் (பட்டியலின தொழில்முனைவோர் - SC)',
      shortDescription: 'பட்டியலின (SC) நிறுவனர்களின் தொழில், விவசாயம் மற்றும் சேவைத் திட்டங்களுக்கு நீண்டகால சலுகைக் கடன் உதவி.',
      fullDescription: 'தேசிய பட்டியலினத்தவர் நிதி மற்றும் மேம்பாட்டுக் கழகம் (NSFDC) SC தொழில்முனைவோரின் வருவாய் ஈட்டும் திட்டங்களுக்கு ₹50 லட்சம் வரை கடன் உதவி வழங்குகிறது. வட்டி விகிதம் ஆண்டுக்கு 6% முதல் தொடங்குகிறது.',
      subsidyDetails: 'திட்ட அளவைப் பொறுத்து 6% முதல் 9% வரை சலுகை விகிதம். 90% வரை நிதியுதவி மற்றும் 5 ஆண்டுகள் வரை கால அளவு.',
      focusArea: 'SC பொருளாதார வலுவூட்டல்',
      ownContribution: 'குறைந்தபட்சம் 10% சொந்த பங்கு விளிம்புத் தொகை'
    },
    'nbcfdc-transport': {
      name: 'NBCFDC போக்குவரத்து துறை கடன் திட்டம் (வணிக வாகனங்கள்)',
      shortDescription: 'OBC இளைஞர்கள் மற்றும் ஓட்டுநர்கள் வணிக பயணிகள் மற்றும் சரக்கு வாகனங்கள் வாங்க சலுகைக் கடன் உதவி.',
      fullDescription: 'NBCFDC தகுதியுள்ள OBC பயனாளிகளுக்கு ஆட்டோ ரிக்ஷா, இ-ரிக்ஷா, சிறிய வணிக வாகனங்கள் வாங்க ₹10 லட்சம் வரை சலுகைக் கடன் வழங்குகிறது. இது மாநில முகமைகள் மற்றும் வங்கிகள் மூலம் செயல்படுத்தப்படுகிறது.',
      subsidyDetails: 'ஆண்டுக்கு 6.0% முதல் 8.0% வரை சலுகை வட்டி விகிதம். திட்டச் செலவில் 85% வரை நிதியுதவி.',
      focusArea: 'போக்குவரத்து மற்றும் தளவாட இயக்கம்',
      ownContribution: '15% கடன் வாங்குபவர் சொந்த பங்கு'
    },
    'mahila-samriddhi': {
      name: 'மகிளா சம்ரித்தி யோஜனா (NBCFDC மகளிர் குறுங்கடன் திட்டம்)',
      shortDescription: 'பிற்படுத்தப்பட்ட வகுப்பு பெண் தொழில்முனைவோர் சிறிய கிராமப்புற தொழில்களைத் தொடங்க சிறப்பு மைக்ரோ-கடன் உதவி.',
      fullDescription: 'மகிளா சம்ரித்தி யோஜனா பிற்படுத்தப்பட்ட வகுப்பு பெண் தொழில்முனைவோருக்கு நேரடியாகவோ அல்லது சுயஉதவிக் குழுக்கள் (SHG) மூலமாகவோ ₹1,40,000 வரை குறுங்கடன் வழங்குகிறது. இதில் ஆண்டுக்கு வெறும் 4% சலுகை வட்டி மட்டுமே வசூலிக்கப்படுகிறது.',
      subsidyDetails: 'பெண் பயனாளிகளுக்கு ஆண்டுக்கு வெறும் 4% வட்டி விகிதம்; NBCFDC மூலம் திட்டச் செலவில் 95% வரை நிதியுதவி.',
      focusArea: 'மகளிர் குறுங்கடன்',
      ownContribution: '5% சொந்த பங்கு'
    },
    'dr-ambedkar-education': {
      name: 'டாக்டர் அம்பேத்கர் உயர்கல்வி கடன் வட்டி மானிய மத்திய துறை திட்டம்',
      shortDescription: 'OBC/EWS மாணவர்களின் உயர்கல்வி படிப்புகளுக்கான கல்விக் கடன்களுக்கு 100% வட்டி மானியம்.',
      fullDescription: 'இத்திட்டம் ₹8.00 லட்சம் வரை குடும்ப வருமானம் கொண்ட தகுதியுள்ள OBC மற்றும் EWS மாணவர்களுக்கு அங்கீகரிக்கப்பட்ட உயர்கல்வி படிப்புகளுக்கு சலுகைக் காலத்தில் (படிப்பு காலம் + 1 ஆண்டு) முழு வட்டி மானியத்தை வழங்குகிறது.',
      subsidyDetails: 'சலுகைக் காலம் முழுவதும் மத்திய அரசால் முழு 100% வட்டி மானியமும் நேரடியாக செலுத்தப்படுகிறது.',
      focusArea: 'உயர்கல்வி வட்டி மானியம்',
      ownContribution: 'படிப்பு காலத்தில் 0%'
    }
  },
  te: {
    'pmegp': {
      name: "ప్రధానమంత్రి ఉపాధి కల్పన కార్యక్రమం (PMEGP)",
      shortDescription: 'ఉత్పాదక మరియు సేవా రంగాలలో సూక్ష్మ పరిశ్రమల స్థాపనకు ప్రముఖ క్రెడిట్-లింక్డ్ మూలధన సబ్సిడీ పథకం.',
      fullDescription: 'PMEGP అనేది MSME మంత్రిత్వ శాఖచే నిర్వహించబడుతున్న ప్రధాన క్రెడిట్-లింక్డ్ సబ్సిడీ కార్యక్రమం, గ్రామీణ మరియు పట్టణ ప్రాంతాలలో స్వయం ఉపాధిని సృష్టించడం దీని లక్ష్యం. ఈ పథకం ప్రాజెక్ట్ వ్యయంలో 15% నుండి 35% వరకు మూలధన సబ్సిడీని అందిస్తుంది, ఇందులో గ్రామీణ ప్రత్యేక వర్గాల లబ్ధిదారులకు (SC, ST, OBC, మహిళలు, మైనారిటీలు) గరిష్టంగా 35% సబ్సిడీ లభిస్తుంది.',
      subsidyDetails: 'మూలధన సబ్సిడీ: SC/ST/OBC/మహిళలు/మైనారిటీలకు 25% (పట్టణ) నుండి 35% (గ్రామీణ); సాధారణ వర్గానికి 15% (పట్టణ) నుండి 25% (గ్రామీణ).',
      focusArea: 'సూక్ష్మ పరిశ్రమలు మరియు తయారీ',
      ownContribution: 'SC, ST, OBC, మహిళలు మరియు మైనారిటీలకు 5%; సాధారణ వర్గానికి 10%'
    },
    'stand-up-india': {
      name: 'స్టాండ్-అప్ ఇండియా పథకం (SC, ST మరియు మహిళా వ్యవస్థాపకులు)',
      shortDescription: 'SC, ST లేదా మహిళా వ్యవస్థాపకుల సరికొత్త ప్రాజెక్ట్‌లకు (Greenfield) ₹10 లక్షల నుండి ₹1 కోటి వరకు ప్రత్యేక సంస్థాగత రుణం.',
      fullDescription: 'తయారీ, సేవలు, వ్యవసాయ అనుబంధ లేదా వాణిజ్య రంగాలలో కొత్త వ్యాపారాన్ని ప్రారంభించడానికి ప్రతి బ్యాంక్ బ్రాంచ్‌కు కనీసం ఒక SC/ST మరియు ఒక మహిళకు ₹10 లక్షల నుండి ₹1 కోటి వరకు రుణం అందించడానికి స్టాండ్-అప్ ఇండియా రూపొందించబడింది. ఈ రుణాలు CGFSI హామీ ద్వారా రక్షించబడతాయి.',
      subsidyDetails: 'బ్యాంక్ యొక్క అత్యల్ప వర్తించే వడ్డీ రేటు. కేంద్ర/రాష్ట్ర సబ్సిడీలతో కలిపి 15% వరకు మార్జిన్ మనీ సమన్వయం సాధ్యం.',
      focusArea: 'సమ్మిళిత వ్యవస్థాపకత రుణం',
      ownContribution: 'కనీసం 15% సొంత వాటా (రాష్ట్ర సబ్సిడీలతో 10% వరకు తగ్గే అవకాశం)'
    },
    'mudra-kishore': {
      name: 'ప్రధానమంత్రి ముద్రా యోజన (PMMY) — కిశోర్ విభాగం',
      shortDescription: 'ప్రస్తుత సూక్ష్మ యూనిట్లు మరియు వ్యాపార విస్తరణ కోసం ₹50,000 నుండి ₹5 లక్షల వరకు తాకట్టు లేని (Collateral-Free) సంస్థాగత రుణం.',
      fullDescription: 'PMMY కింద, కిశోర్ విభాగం పరికరాలు, యంత్రాలు లేదా వర్కింగ్ క్యాపిటల్ కోసం ₹50,000 నుండి ₹5,00,000 వరకు వ్యవసాయేతర రుణాలను అందిస్తుంది. ఈ రుణం పూర్తిగా పూచీకత్తు లేనిది మరియు CGFMU ద్వారా హామీ ఇవ్వబడింది.',
      subsidyDetails: 'ఆస్తి తాకట్టు అవసరం లేదు. NCGTC ద్వారా గ్యారెంటీ కవరేజ్. పోటీ మరియు రాయితీ వడ్డీ రేటు.',
      focusArea: 'తాకట్టు లేని సూక్ష్మ రుణాలు',
      ownContribution: 'బ్యాంక్ విధానం ప్రకారం సున్నా నుండి 10%'
    },
    'pm-vishwakarma': {
      name: 'పీఎం విశ్వకర్మ యోజన (సాంప్రదాయ కళాకారులు & చేతివృత్తులవారు)',
      shortDescription: 'సాంప్రదాయ కళాకారులకు ఆధునిక టూల్‌కిట్, నైపుణ్య శిక్షణ మరియు 5% రాయితీ వడ్డీతో పూచీకత్తు లేని ఆర్థిక సహాయం.',
      fullDescription: 'పీఎం విశ్వకర్మ యోజన 18 నిర్దేశిత చేతివృత్తుల (వడ్రంగి, కమ్మరి, కుమ్మరి, చెప్పులు కుట్టేవారు, చేనేతకారులు మొదలైనవి) కళాకారులకు సమగ్ర మద్దతును అందిస్తుంది. లబ్ధిదారులు అధికారిక గుర్తింపు కార్డు, రోజుకు ₹500 స్టైఫండ్‌తో శిక్షణ, ₹15,000 టూల్‌కిట్ గ్రాంట్ మరియు 5% వడ్డీతో రుణం పొందుతారు.',
      subsidyDetails: 'వడ్డీ రేటు గరిష్టంగా 5% (ప్రభుత్వం 8% వరకు వడ్డీ సబ్సిడీని భరిస్తుంది). ₹15,000 ఉచిత టూల్‌కిట్ గ్రాంట్.',
      focusArea: 'సాంప్రదాయ చేతివృత్తులు & కళలు',
      ownContribution: 'సున్నా (గుర్తింపు పొందిన వృత్తులకు 100% సంస్థాగత మద్దతు)'
    },
    'nbcfdc-term': {
      name: 'NBCFDC టర్మ్ లోన్ పథకం (ఇతర వెనుకబడిన తరగతులు - OBC)',
      shortDescription: 'అర్హులైన ఇతర వెనుకబడిన తరగతుల (OBC) లబ్ధిదారులకు స్వయం ఉపాధి యూనిట్ల కోసం రాయితీ టర్మ్ లోన్.',
      fullDescription: 'నేషనల్ బ్యాక్‌వర్డ్ క్లాసెస్ ఫైనాన్స్ అండ్ డెవలప్‌మెంట్ కార్పొరేషన్ (NBCFDC) రాష్ట్ర ఏజెన్సీలు మరియు ప్రభుత్వ బ్యాంకుల ద్వారా వెనుకబడిన తరగతుల వ్యవస్థాపకులకు రుణ సహాయం అందిస్తుంది. ఈ పథకం ప్రాజెక్ట్ వ్యయంలో 85% వరకు నిధులను అందిస్తుంది.',
      subsidyDetails: 'సంవత్సరానికి 6.0% నుండి 8.0% రాయితీ వడ్డీ రేటు. సౌకర్యవంతమైన కాలపరిమితి మరియు మారటోరియం ఎంపిక.',
      focusArea: 'OBC ఆర్థిక అభివృద్ధి',
      ownContribution: '15% సొంత మార్జిన్ మనీ (మహిళల కోసం కొన్ని ఉప-పథకాలలో 10%)'
    },
    'nsfdc-term': {
      name: 'NSFDC టర్మ్ లోన్ పథకం (షెడ్యూల్డ్ కులాల వ్యవస్థాపకులు - SC)',
      shortDescription: 'షెడ్యూల్డ్ కులాల (SC) వ్యవస్థాపకుల పారిశ్రామిక, వ్యవసాయ మరియు సేవా ప్రాజెక్ట్‌లకు దీర్ఘకాలిక రాయితీ రుణం.',
      fullDescription: 'నేషనల్ షెడ్యూల్డ్ కాస్ట్స్ ఫైనాన్స్ అండ్ డెవలప్‌మెంట్ కార్పొరేషన్ (NSFDC) SC వ్యవస్థాపకుల ఆదాయ ఉత్పత్తి ప్రాజెక్ట్‌ల కోసం ₹50 లక్షల వరకు రుణ సహాయాన్ని అందిస్తుంది. వడ్డీ రేటు సంవత్సరానికి 6% నుండి ప్రారంభమవుతుంది.',
      subsidyDetails: 'ప్రాజెక్ట్ పరిమాణాన్ని బట్టి 6% నుండి 9% రాయితీ రేటు. 90% వరకు నిధులు మరియు 5 సంవత్సరాల కాలపరిమితి.',
      focusArea: 'SC ఆర్థిక సాధికారత',
      ownContribution: 'కనీసం 10% సొంత మార్జిన్ మనీ'
    },
    'nsfdc-term-loan': {
      name: 'NSFDC టర్మ్ లోన్ పథకం (షెడ్యూల్డ్ కులాల వ్యవస్థాపకులు - SC)',
      shortDescription: 'షెడ్యూల్డ్ కులాల (SC) వ్యవస్థాపకుల పారిశ్రామిక, వ్యవసాయ మరియు సేవా ప్రాజెక్ట్‌లకు దీర్ఘకాలిక రాయితీ రుణం.',
      fullDescription: 'నేషనల్ షెడ్యూల్డ్ కాస్ట్స్ ఫైనాన్స్ అండ్ డెవలప్‌మెంట్ కార్పొరేషన్ (NSFDC) SC వ్యవస్థాపకుల ఆదాయ ఉత్పత్తి ప్రాజెక్ట్‌ల కోసం ₹50 లక్షల వరకు రుణ సహాయాన్ని అందిస్తుంది. వడ్డీ రేటు సంవత్సరానికి 6% నుండి ప్రారంభమవుతుంది.',
      subsidyDetails: 'ప్రాజెక్ట్ పరిమాణాన్ని బట్టి 6% నుండి 9% రాయితీ రేటు. 90% వరకు నిధులు మరియు 5 సంవత్సరాల కాలపరిమితి.',
      focusArea: 'SC ఆర్థిక సాధికారత',
      ownContribution: 'కనీసం 10% సొంత మార్జిన్ మనీ'
    },
    'nbcfdc-transport': {
      name: 'NBCFDC రవాణా రంగ రుణ పథకం (వాణిజ్య వాహనాలు)',
      shortDescription: 'OBC యువత మరియు డ్రైవర్లు ప్రయాణీకుల మరియు వాణిజ్య రవాణా వాహనాలను కొనుగోలు చేయడానికి రాయితీ రుణం.',
      fullDescription: 'NBCFDC అర్హులైన OBC లబ్ధిదారులకు ఆటో రిక్షాలు, ఇ-రిక్షాలు, చిన్న వాణిజ్య రవాణా వాహనాలు కొనుగోలు చేయడానికి ₹10 లక్షల వరకు రాయితీ రుణాన్ని అందిస్తుంది. ఇది రాష్ట్ర సంస్థలు మరియు బ్యాంకుల ద్వారా నిర్వహించబడుతుంది.',
      subsidyDetails: 'సంవత్సరానికి 6.0% నుండి 8.0% రాయితీ వడ్డీ రేటు. ప్రాజెక్ట్ వ్యయంలో 85% వరకు నిధులు.',
      focusArea: 'రవాణా మరియు లాజిస్టిక్స్ మొబిలిటీ',
      ownContribution: '15% రుణగ్రహీత సొంత వాటా'
    },
    'mahila-samriddhi': {
      name: 'మహిళా సమృద్ధి యోజన (NBCFDC మహిళా మైక్రో క్రెడిట్ పథకం)',
      shortDescription: 'వెనుకబడిన తరగతుల మహిళా వ్యవస్థాపకులు చిన్న గ్రామీణ వ్యాపారాలను ప్రారంభించడానికి ప్రత్యేక మైక్రో-ఫైనాన్స్ సహాయం.',
      fullDescription: 'మహిళా సమృద్ధి యోజన వెనుకబడిన తరగతుల మహిళా వ్యవస్థాపకులకు నేరుగా లేదా స్వయం సహాయక సంఘాల (SHG) ద్వారా ₹1,40,000 వరకు మైక్రో రుణాలు అందిస్తుంది. ఇందులో సంవత్సరానికి కేవలం 4% రాయితీ వడ్డీ రేటు మాత్రమే వర్తిస్తుంది.',
      subsidyDetails: 'మహిళా లబ్ధిదారులకు కేవలం 4% వార్షిక వడ్డీ రేటు; NBCFDC ద్వారా ప్రాజెక్ట్ వ్యయంలో 95% వరకు నిధులు.',
      focusArea: 'మహిళా మైక్రో క్రెడిట్',
      ownContribution: '5% సొంత వాటా'
    },
    'dr-ambedkar-education': {
      name: 'డాక్టర్ అంబేద్కర్ ఉన్నత విద్యా రుణ వడ్డీ సబ్సిడీ కేంద్ర రంగ పథకం',
      shortDescription: 'OBC/EWS విద్యార్థుల ఉన్నత విద్య కోసం విద్యా రుణాలపై 100% వడ్డీ సబ్సిడీ.',
      fullDescription: 'ఈ కేంద్ర పథకం ₹8.00 లక్షల వరకు కుటుంబ వార్షిక ఆదాయం కలిగిన ప్రతిభావంతులైన OBC మరియు EWS విద్యార్థులకు ఆమోదించబడిన ఉన్నత విద్యా కోర్సుల మారటోరియం వ్యవధిలో (కోర్సు కాలం + 1 సంవత్సరం) పూర్తి వడ్డీ సబ్సిడీని అందిస్తుంది.',
      subsidyDetails: 'మారటోరియం వ్యవధిలో కేంద్ర ప్రభుత్వం ద్వారా పూర్తి 100% వడ్డీ సబ్సిడీ నేరుగా చెల్లింపు.',
      focusArea: 'ఉన్నత విద్యా వడ్డీ సబ్సిడీ',
      ownContribution: 'కోర్సు వ్యవధిలో 0%'
    }
  },
  kn: {
    'pmegp': {
      name: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಉದ್ಯೋಗ ಸೃಜನ ಕಾರ್ಯಕ್ರಮ (PMEGP)",
      shortDescription: 'ಉತ್ಪಾದನೆ ಮತ್ತು ಸೇವಾ ವಲಯಗಳಲ್ಲಿ ಸೂಕ್ಷ್ಮ ಉದ್ಯಮಗಳನ್ನು ಸ್ಥಾಪಿಸಲು ಪ್ರಮುಖ ಕ್ರೆಡಿಟ್-ಲಿಂಕ್ಡ್ ಬಂಡವಾಳ ಸಬ್ಸಿಡಿ ಯೋಜನೆ.',
      fullDescription: 'PMEGP ಎಂಬುದು MSME ಸಚಿವಾಲಯದಿಂದ ನಿರ್ವಹಿಸಲ್ಪಡುವ ಪ್ರಮುಖ ಕ್ರೆಡಿಟ್-ಲಿಂಕ್ಡ್ ಸಬ್ಸಿಡಿ ಕಾರ್ಯಕ್ರಮವಾಗಿದ್ದು, ಗ್ರಾಮೀಣ ಮತ್ತು ನಗರ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸ್ವಯಂ ಉದ್ಯೋಗವನ್ನು ಸೃಷ್ಟಿಸುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ. ಈ ಯೋಜನೆಯು ಯೋಜನಾ ವೆಚ್ಚದ 15% ರಿಂದ 35% ವರೆಗೆ ಬಂಡವಾಳ ಸಬ್ಸಿಡಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ, ಇದರಲ್ಲಿ ಗ್ರಾಮೀಣ ವಿಶೇಷ ವರ್ಗದ ಫಲಾನುಭವಿಗಳು (SC, ST, OBC, ಮಹಿಳೆಯರು, ಅಲ್ಪಸಂಖ್ಯಾತರು) ಗರಿಷ್ಠ 35% ಸಬ್ಸಿಡಿಯನ್ನು ಪಡೆಯುತ್ತಾರೆ.',
      subsidyDetails: 'ಬಂಡವಾಳ ಸಬ್ಸಿಡಿ: SC/ST/OBC/ಮಹಿಳೆಯರು/ಅಲ್ಪಸಂಖ್ಯಾತರಿಗೆ 25% (ನಗರ) ದಿಂದ 35% (ಗ್ರಾಮೀಣ); ಸಾಮಾನ್ಯ ವರ್ಗಕ್ಕೆ 15% (ನಗರ) ದಿಂದ 25% (ಗ್ರಾಮೀಣ).',
      focusArea: 'ಸೂಕ್ಷ್ಮ ಉದ್ಯಮ ಮತ್ತು ಉತ್ಪಾದನೆ',
      ownContribution: 'SC, ST, OBC, ಮಹಿಳೆಯರು ಮತ್ತು ಅಲ್ಪಸಂಖ್ಯಾತರಿಗೆ 5%; ಸಾಮಾನ್ಯ ವರ್ಗಕ್ಕೆ 10%'
    },
    'stand-up-india': {
      name: 'ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಯೋಜನೆ (SC, ST ಮತ್ತು ಮಹಿಳಾ ಉದ್ಯಮಿಗಳು)',
      shortDescription: 'SC, ST ಅಥವಾ ಮಹಿಳಾ ಉದ್ಯಮಿಗಳ ಹೊಸ ಯೋಜನೆಗಳಿಗೆ (Greenfield) ₹10 ಲಕ್ಷದಿಂದ ₹1 ಕೋಟಿವರೆಗೆ ವಿಶೇಷ ಸಾಂಸ್ಥಿಕ ಸಾಲ.',
      fullDescription: 'ಉತ್ಪಾದನೆ, ಸೇವೆಗಳು, ಕೃಷಿ ಪೂರಕ ಅಥವಾ ವ್ಯಾಪಾರ ವಲಯದಲ್ಲಿ ಹೊಸ ವ್ಯವಹಾರವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಪ್ರತಿ ಬ್ಯಾಂಕ್ ಶಾಖೆಗೆ ಕನಿಷ್ಠ ಒಬ್ಬ SC/ST ಮತ್ತು ಒಬ್ಬ ಮಹಿಳೆಗೆ ₹10 ಲಕ್ಷದಿಂದ ₹1 ಕೋಟಿವರೆಗೆ ಸಾಲವನ್ನು ಸುಲಭಗೊಳಿಸಲು ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾವನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ಈ ಸಾಲಗಳು CGFSI ಅಡಿಯಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿವೆ.',
      subsidyDetails: 'ಬ್ಯಾಂಕಿನ ಕನಿಷ್ಠ ಅನ್ವಯವಾಗುವ ಬಡ್ಡಿ ದರ. ಕೇಂದ್ರ/ರಾಜ್ಯ ಸಬ್ಸಿಡಿಗಳೊಂದಿಗೆ 15% ವರೆಗೆ ಮಾರ್ಜಿನ್ ಹಣ ಸಮನ್ವಯ ಸಾಧ್ಯ.',
      focusArea: 'ಸಮಗ್ರ ಉದ್ಯಮಶೀಲತೆಯ ಸಾಲ',
      ownContribution: 'ಕನಿಷ್ಠ 15% ಪ್ರವರ್ತಕರ ಪಾಲು (ರಾಜ್ಯ ಸಬ್ಸಿಡಿಗಳೊಂದಿಗೆ 10% ಕ್ಕೆ ಇಳಿಯುವ ಸಾಧ್ಯತೆ)'
    },
    'mudra-kishore': {
      name: 'ಪ್ರಧಾನ ಮಂತ್ರಿ ಮುದ್ರಾ ಯೋಜನೆ (PMMY) — ಕಿಶೋರ್ ವರ್ಗ',
      shortDescription: 'ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಸೂಕ್ಷ್ಮ ಘಟಕಗಳು ಮತ್ತು ವ್ಯವಹಾರ ವಿಸ್ತರಣೆಗಾಗಿ ₹50,000 ದಿಂದ ₹5 ಲಕ್ಷದವರೆಗೆ ಜಾಮೀನು ರಹಿತ (Collateral-Free) ಸಾಂಸ್ಥಿಕ ಸಾಲ.',
      fullDescription: 'PMMY ಅಡಿಯಲ್ಲಿ, ಕಿಶೋರ್ ವರ್ಗವು ಉಪಕರಣಗಳು, ಯಂತ್ರೋಪಕರಣಗಳು ಅಥವಾ ದುಡಿಯುವ ಬಂಡವಾಳಕ್ಕಾಗಿ ₹50,000 ದಿಂದ ₹5,00,000 ವರೆಗೆ ಕೃಷಿಯೇತರ ಸಾಲಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಈ ಸಾಲವು ಸಂಪೂರ್ಣವಾಗಿ ಜಾಮೀನು ರಹಿತವಾಗಿದ್ದು CGFMU ನಿಂದ ಖಾತರಿಪಡಿಸಲಾಗಿದೆ.',
      subsidyDetails: 'ಯಾವುದೇ ಆಸ್ತಿ ಅಡಮಾನ ಅಗತ್ಯವಿಲ್ಲ. NCGTC ಯಿಂದ ಖಾತರಿ ರಕ್ಷಣೆ. ಸ್ಪರ್ಧಾತ್ಮಕ ಮತ್ತು ರಿಯಾಯಿತಿ ಬಡ್ಡಿ ದರ.',
      focusArea: 'ಜಾಮೀನು ರಹಿತ ಸೂಕ್ಷ್ಮ ಸಾಲ',
      ownContribution: 'ಬ್ಯಾಂಕ್ ನೀತಿಯ ಪ್ರಕಾರ ಶೂನ್ಯದಿಂದ 10%'
    },
    'pm-vishwakarma': {
      name: 'ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಯೋಜನೆ (ಸಾಂಪ್ರದಾಯಿಕ ಕುಶಲಕರ್ಮಿಗಳು & ಶಿಲ್ಪಿಗಳು)',
      shortDescription: 'ಸಾಂಪ್ರದಾಯಿಕ ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ಆಧುನಿಕ ಟೂಲ್‌ಕಿಟ್, ಕೌಶಲ್ಯ ತರಬೇತಿ ಮತ್ತು 5% ರಿಯಾಯಿತಿ ಬಡ್ಡಿಯಲ್ಲಿ ಜಾಮೀನು ರಹಿತ ಹಣಕಾಸು ನೆರವು.',
      fullDescription: 'ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಯೋಜನೆಯು 18 ಗೊತ್ತುಪಡಿಸಿದ ವೃತ್ತಿಗಳಲ್ಲಿ (ಬಡಗಿ, ಕಮ್ಮಾರ, ಕುಂಬಾರ, ಚಮ್ಮಾರ, ನೇಕಾರ ಮುಂತಾದವು) ತೊಡಗಿರುವ ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ಸಮಗ್ರ ಬೆಂಬಲವನ್ನು ನೀಡುತ್ತದೆ. ಫಲಾನುಭವಿಗಳು ಪ್ರಮಾಣಪತ್ರ, ದಿನಕ್ಕೆ ₹500 ಸ್ಟೈಫಂಡ್‌ನೊಂದಿಗೆ ತರಬೇತಿ, ₹15,000 ಟೂಲ್‌ಕಿಟ್ ಅನುದಾನ ಮತ್ತು 5% ಬಡ್ಡಿಯಲ್ಲಿ ಸಾಲ ಪಡೆಯುತ್ತಾರೆ.',
      subsidyDetails: 'ಬಡ್ಡಿ ದರ ಗರಿಷ್ಠ 5% (ಸರ್ಕಾರವು 8% ವರೆಗೆ ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ ಭರಿಸುತ್ತದೆ). ₹15,000 ಉಚಿತ ಟೂಲ್‌ಕಿಟ್ ಅನುದಾನ.',
      focusArea: 'ಸಾಂಪ್ರದಾಯಿಕ ಕರಕುಶಲ ಮತ್ತು ಕಲೆ',
      ownContribution: 'ಶೂನ್ಯ (ಗುರುತಿಸಲ್ಪಟ್ಟ ವೃತ್ತಿಗಳಿಗೆ 100% ಸಾಂಸ್ಥಿಕ ಬೆಂಬಲ)'
    },
    'nbcfdc-term': {
      name: 'NBCFDC ಅವಧಿ ಸಾಲ ಯೋಜನೆ (ಇತರ ಹಿಂದುಳಿದ ವರ್ಗಗಳು - OBC)',
      shortDescription: 'ಅರ್ಹ ಇತರ ಹಿಂದುಳಿದ ವರ್ಗಗಳ (OBC) ಫಲಾನುಭವಿಗಳಿಗೆ ಸ್ವಯಂ ಉದ್ಯೋಗ ಘಟಕಗಳಿಗಾಗಿ ರಿಯಾಯಿತಿ ಅವಧಿ ಸಾಲ.',
      fullDescription: 'ರಾಷ್ಟ್ರೀಯ ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಹಣಕಾಸು ಮತ್ತು ಅಭಿವೃದ್ಧಿ ನಿಗಮ (NBCFDC) ರಾಜ್ಯ ಏಜೆನ್ಸಿಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಬ್ಯಾಂಕ್‌ಗಳ ಮೂಲಕ ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಉದ್ಯಮಿಗಳಿಗೆ ಸಾಲ ಸಹಾಯವನ್ನು ನೀಡುತ್ತದೆ. ಈ ಯೋಜನೆಯು ಯೋಜನಾ ವೆಚ್ಚದ 85% ರಷ್ಟು ಹಣಕಾಸು ಒದಗಿಸುತ್ತದೆ.',
      subsidyDetails: 'ವಾರ್ಷಿಕ 6.0% ರಿಂದ 8.0% ರಿಯಾಯಿತಿ ಬಡ್ಡಿ ದರ. ಹೊಂದಿಕೊಳ್ಳುವ ಮರುಪಾವತಿ ಮತ್ತು ಮೊರಟೋರಿಯಂ ಆಯ್ಕೆ.',
      focusArea: 'OBC ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ',
      ownContribution: '15% ಪ್ರವರ್ತಕರ ಮಾರ್ಜಿನ್ ಹಣ (ಮಹಿಳೆಯರಿಗಾಗಿ ಕೆಲವು ಉಪ-ಯೋಜನೆಗಳಲ್ಲಿ 10%)'
    },
    'nsfdc-term': {
      name: 'NSFDC ಅವಧಿ ಸಾಲ ಯೋಜನೆ (ಪರಿಶಿಷ್ಟ ಜಾತಿ ಉದ್ಯಮಿಗಳು - SC)',
      shortDescription: 'ಪರಿಶಿಷ್ಟ ಜಾತಿ (SC) ಸಂಸ್ಥಾಪಕರ ಕೈಗಾರಿಕಾ, ಕೃಷಿ ಮತ್ತು ಸೇವಾ ಯೋಜನೆಗಳಿಗೆ ದೀರ್ಘಾವಧಿಯ ರಿಯಾಯಿತಿ ಸಾಲ ನೆರವು.',
      fullDescription: 'ರಾಷ್ಟ್ರೀಯ ಪರಿಶಿಷ್ಟ ಜಾತಿಗಳ ಹಣಕಾಸು ಮತ್ತು ಅಭಿವೃದ್ಧಿ ನಿಗಮ (NSFDC) SC ಉದ್ಯಮಿಗಳ ಆದಾಯ-ಉತ್ಪಾದಿಸುವ ಯೋಜನೆಗಳಿಗೆ ₹50 ಲಕ್ಷದವರೆಗೆ ಸಾಲ ಸಹಾಯವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಬಡ್ಡಿ ದರವು ವಾರ್ಷಿಕ 6% ರಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.',
      subsidyDetails: 'ಯೋಜನೆಯ ಗಾತ್ರಕ್ಕೆ ಅನುಗುಣವಾಗಿ 6% ರಿಂದ 9% ರಿಯಾಯಿತಿ ದರ. 90% ವರೆಗೆ ಹಣಕಾಸು ಮತ್ತು 5 ವರ್ಷಗಳವರೆಗೆ ಅವಧಿ.',
      focusArea: 'SC ಆರ್ಥಿಕ ಸಬಲೀಕರಣ',
      ownContribution: 'ಕನಿಷ್ಠ 10% ಪ್ರವರ್ತಕರ ಮಾರ್ಜಿನ್ ಹಣ'
    },
    'nsfdc-term-loan': {
      name: 'NSFDC ಅವಧಿ ಸಾಲ ಯೋಜನೆ (ಪರಿಶಿಷ್ಟ ಜಾತಿ ಉದ್ಯಮಿಗಳು - SC)',
      shortDescription: 'ಪರಿಶಿಷ್ಟ ಜಾತಿ (SC) ಸಂಸ್ಥಾಪಕರ ಕೈಗಾರಿಕಾ, ಕೃಷಿ ಮತ್ತು ಸೇವಾ ಯೋಜನೆಗಳಿಗೆ ದೀರ್ಘಾವಧಿಯ ರಿಯಾಯಿತಿ ಸಾಲ ನೆರವು.',
      fullDescription: 'ರಾಷ್ಟ್ರೀಯ ಪರಿಶಿಷ್ಟ ಜಾತಿಗಳ ಹಣಕಾಸು ಮತ್ತು ಅಭಿವೃದ್ಧಿ ನಿಗಮ (NSFDC) SC ಉದ್ಯಮಿಗಳ ಆದಾಯ-ಉತ್ಪಾದಿಸುವ ಯೋಜನೆಗಳಿಗೆ ₹50 ಲಕ್ಷದವರೆಗೆ ಸಾಲ ಸಹಾಯವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಬಡ್ಡಿ ದರವು ವಾರ್ಷಿಕ 6% ರಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.',
      subsidyDetails: 'ಯೋಜನೆಯ ಗಾತ್ರಕ್ಕೆ ಅನುಗುಣವಾಗಿ 6% ರಿಂದ 9% ರಿಯಾಯಿತಿ ದರ. 90% ವರೆಗೆ ಹಣಕಾಸು ಮತ್ತು 5 ವರ್ಷಗಳವರೆಗೆ ಅವಧಿ.',
      focusArea: 'SC ಆರ್ಥಿಕ ಸಬಲೀಕರಣ',
      ownContribution: 'ಕನಿಷ್ಠ 10% ಪ್ರವರ್ತಕರ ಮಾರ್ಜಿನ್ ಹಣ'
    },
    'nbcfdc-transport': {
      name: 'NBCFDC ಸಾರಿಗೆ ವಲಯ ಸಾಲ ಯೋಜನೆ (ವಾಣಿಜ್ಯ ವಾಹನಗಳು)',
      shortDescription: 'OBC ಯುವಕರು ಮತ್ತು ಚಾಲಕರು ವಾಣಿಜ್ಯ ಪ್ರಯಾಣಿಕರ ಮತ್ತು ಸರಕು ವಾಹನಗಳನ್ನು ಖರೀದಿಸಲು ರಿಯಾಯಿತಿ ಸಾಲ.',
      fullDescription: 'NBCFDC ಅರ್ಹ OBC ಫಲಾನುಭವಿಗಳಿಗೆ ಆಟೋ ರಿಕ್ಷಾ, ಇ-ರಿಕ್ಷಾ, ಸಣ್ಣ ವಾಣಿಜ್ಯ ವಾಹನಗಳನ್ನು ಖರೀದಿಸಲು ₹10 ಲಕ್ಷದವರೆಗೆ ರಿಯಾಯಿತಿ ಸಾಲವನ್ನು ನೀಡುತ್ತದೆ. ಇದು ರಾಜ್ಯ ಏಜೆನ್ಸಿಗಳು ಮತ್ತು ಬ್ಯಾಂಕ್‌ಗಳ ಮೂಲಕ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.',
      subsidyDetails: 'ವಾರ್ಷಿಕ 6.0% ರಿಂದ 8.0% ರಿಯಾಯಿತಿ ಬಡ್ಡಿ ದರ. ಯೋಜನಾ ವೆಚ್ಚದ 85% ರಷ್ಟು ಹಣಕಾಸು.',
      focusArea: 'ಸಾರಿಗೆ ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಮೊಬಿಲಿಟಿ',
      ownContribution: '15% ಸಾಲಗಾರರ ಸ್ವಂತ ಪಾಲು'
    },
    'mahila-samriddhi': {
      name: 'ಮಹಿಳಾ ಸಮೃದ್ಧಿ ಯೋಜನೆ (NBCFDC ಮಹಿಳಾ ಮೈಕ್ರೋ ಕ್ರೆಡಿಟ್ ಯೋಜನೆ)',
      shortDescription: 'ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಮಹಿಳಾ ಉದ್ಯಮಿಗಳು ಸಣ್ಣ ಗ್ರಾಮೀಣ ವ್ಯವಹಾರಗಳನ್ನು ಪ್ರಾರಂಭಿಸಲು ವಿಶೇಷ ಮೈಕ್ರೋ-ಫೈನಾನ್ಸ್ ನೆರವು.',
      fullDescription: 'ಮಹಿಳಾ ಸಮೃದ್ಧಿ ಯೋಜನೆಯು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ನೇರವಾಗಿ ಅಥವಾ ಸ್ವಸಹಾಯ ಗುಂಪುಗಳ (SHG) ಮೂಲಕ ₹1,40,000 ವರೆಗೆ ಮೈಕ್ರೋ ಸಾಲವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ವಾರ್ಷಿಕ ಕೇವಲ 4% ರಿಯಾಯಿತಿ ಬಡ್ಡಿ ದರವನ್ನು ಹೊಂದಿದೆ.',
      subsidyDetails: 'ಮಹಿಳಾ ಫಲಾನುಭವಿಗಳಿಗೆ ಕೇವಲ 4% ವಾರ್ಷಿಕ ಬಡ್ಡಿ ದರ; NBCFDC ಯಿಂದ ಯೋಜನಾ ವೆಚ್ಚದ 95% ರಷ್ಟು ಹಣಕಾಸು.',
      focusArea: 'ಮಹಿಳಾ ಮೈಕ್ರೋ ಕ್ರೆಡಿಟ್',
      ownContribution: '5% ಸ್ವಂತ ಪಾಲು'
    },
    'dr-ambedkar-education': {
      name: 'ಡಾ. ಅಂಬೇಡ್ಕರ್ ಉನ್ನತ ಶಿಕ್ಷಣ ಸಾಲ ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ ಕೇಂದ್ರ ವಲಯ ಯೋಜನೆ',
      shortDescription: 'OBC/EWS ವಿದ್ಯಾರ್ಥಿಗಳ ಉನ್ನತ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಶೈಕ್ಷಣಿಕ ಸಾಲಗಳ ಮೇಲೆ 100% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ.',
      fullDescription: 'ಈ ಕೇಂದ್ರ ವಲಯ ಯೋಜನೆಯು ₹8.00 ಲಕ್ಷದವರೆಗೆ ಕುಟುಂಬ ವಾರ್ಷಿಕ ಆದಾಯ ಹೊಂದಿರುವ ಪ್ರತಿಭಾವಂತ OBC ಮತ್ತು EWS ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅನುಮೋದಿತ ಉನ್ನತ ಶಿಕ್ಷಣ ಕೋರ್ಸ್‌ಗಳ ಮೊರಟೋರಿಯಂ ಅವಧಿಯಲ್ಲಿ (ಕೋರ್ಸ್ ಅವಧಿ + 1 ವರ್ಷ) ಪೂರ್ಣ ಬಡ್ಡಿ ಸಬ್ಸಿಡಿಯನ್ನು ನೀಡುತ್ತದೆ.',
      subsidyDetails: 'ಮೊರಟೋರಿಯಂ ಅವಧಿಯಲ್ಲಿ ಕೇಂದ್ರ ಸರ್ಕಾರದಿಂದ ಸಂಪೂರ್ಣ 100% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿಯ ನೇರ ಪಾವತಿ.',
      focusArea: 'ಉನ್ನತ ಶಿಕ್ಷಣ ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ',
      ownContribution: 'ಕೋರ್ಸ್ ಅವಧಿಯಲ್ಲಿ 0%'
    }
  },
  ml: {
    'pmegp': {
      name: "പ്രധാനമന്ത്രി തൊഴിൽ ദായക പദ്ധതി (PMEGP)",
      shortDescription: 'ഉൽപ്പാദന, സേവന മേഖലകളിൽ സൂക്ഷ്മ യൂണിറ്റുകൾ ആരംഭിക്കുന്നതിനുള്ള പ്രമുഖ ക്രെഡിറ്റ് ലിങ്ക്ഡ് മൂലധന സബ്‌സിഡി പദ്ധതി.',
      fullDescription: 'ഗ്രാമീണ, നഗര പ്രദേശങ്ങളിൽ സ്വയംതൊഴിൽ സൃഷ്ടിക്കാൻ ലക്ഷ്യമിട്ട് MSME മന്ത്രാലയം നടപ്പിലാക്കുന്ന പ്രധാന ക്രെഡിറ്റ് ലിങ്ക്ഡ് സബ്‌സിഡി പദ്ധതിയാണ് PMEGP. പ്രോജക്ട് ചെലവിന്റെ 15% മുതൽ 35% വരെ മൂലധന സബ്‌സിഡി ലഭിക്കുന്നു. ഗ്രാമീണ പ്രത്യേക വിഭാഗക്കാർക്ക് (SC, ST, OBC, വനിതകൾ, ന്യൂനപക്ഷങ്ങൾ) പരമാവധി 35% സബ്‌സിഡി ലഭ്യമാണ്.',
      subsidyDetails: 'മൂലധന സബ്‌സിഡി: SC/ST/OBC/വനിതകൾ/ന്യൂനപക്ഷങ്ങൾക്ക് 25% (നഗരം) മുതൽ 35% (ഗ്രാമം); ജനറൽ വിഭാഗത്തിന് 15% (നഗരം) മുതൽ 25% (ഗ്രാമം).',
      focusArea: 'സൂക്ഷ്മ സംരംഭങ്ങളും നിർമ്മാണവും',
      ownContribution: 'SC, ST, OBC, വനിതകൾ, ന്യൂനപക്ഷങ്ങൾക്ക് 5%; ജനറൽ വിഭാഗത്തിന് 10%'
    },
    'stand-up-india': {
      name: 'സ്റ്റാൻഡ്-അപ്പ് ഇന്ത്യ പദ്ധതി (SC, ST, വനിതാ സംരംഭകർ)',
      shortDescription: 'SC, ST അല്ലെങ്കിൽ വനിതാ സംരംഭകരുടെ പുതിയ ഗ്രീൻഫീൽഡ് പദ്ധതികൾക്കായി ₹10 ലക്ഷം മുതൽ ₹1 കോടി വരെ ബാങ്ക് വായ്പ.',
      fullDescription: 'നിർമ്മാണം, സേവനം, കാർഷികാനുബന്ധം, വ്യാപാരം എന്നീ മേഖലകളിൽ പുതിയ സംരംഭം ആരംഭിക്കാൻ ഓരോ ബാങ്ക് ശാഖയും കുറഞ്ഞത് ഒരു SC/ST വ്യക്തിക്കും ഒരു വനിതയ്ക്കും ₹10 ലക്ഷം മുതൽ ₹1 കോടി വരെ വായ്പ നൽകുന്നു. CGFSI ഗ്യാരണ്ടിയുടെ സുരക്ഷിതത്വമുണ്ട്.',
      subsidyDetails: 'ബാങ്കിന്റെ ഏറ്റവും കുറഞ്ഞ ബാധകമായ പലിശ നിരക്ക്. കേന്ദ്ര/സംസ്ഥാന സബ്‌സിഡികൾ സംയോജിപ്പിച്ച് 15% വരെ മാർജിൻ മണി ക്രമീകരിക്കാം.',
      focusArea: 'ഉൾക്കൊള്ളുന്ന സംരംഭകത്വ വായ്പ',
      ownContribution: 'കുറഞ്ഞത് 15% സ്വന്തം വിഹിതം (സംസ്ഥാന സബ്‌സിഡികൾ ഉണ്ടെങ്കിൽ 10% വരെയാകാം)'
    },
    'mudra-kishore': {
      name: 'പ്രധാനമന്ത്രി മുദ്ര യോജന (PMMY) — കിഷോർ വിഭാഗം',
      shortDescription: 'നിലവിലുള്ള സൂക്ഷ്മ യൂണിറ്റുകൾക്കും ബിസിനസ്സ് വിപുലീകരണത്തിനും ₹50,000 മുതൽ ₹5 ലക്ഷം വരെ ഈടില്ലാത്ത (Collateral-Free) ബാങ്ക് വായ്പ.',
      fullDescription: 'PMMY കിഴിൽ, കിഷോർ വിഭാഗം ഉപകരണങ്ങൾ, മെഷിനറികൾ, പ്രവർത്തന മൂലധനം എന്നിവയ്ക്കായി ₹50,000 മുതൽ ₹5,00,000 വരെ കാർഷികേതര വായ്പ നൽകുന്നു. യാതൊരു ഈടും ആവശ്യമില്ലാത്ത ഈ വായ്പ CGFMU ഗ്യാരണ്ടിയുള്ളതാണ്.',
      subsidyDetails: 'ഈട് ആവശ്യമില്ല. NCGTC ഗ്യാരണ്ടി പരിരക്ഷ. മിതമായ പലിശ നിരക്ക്.',
      focusArea: 'ഈടില്ലാത്ത സൂക്ഷ്മ വായ്പ',
      ownContribution: 'ബാങ്ക് നയമനുസരിച്ച് പൂജ്യം മുതൽ 10% വരെ'
    },
    'pm-vishwakarma': {
      name: 'പിഎം വിശ്വകർമ്മ യോജന (പരമ്പരാഗത കരകൗശല വിദഗ്ദ്ധർ & തൊഴിലാളികൾ)',
      shortDescription: 'പരമ്പരാഗത കരകൗശല വിദഗ്ദ്ധർക്ക് ആധുനിക ടൂൾകിറ്റ്, നൈപുണ്യ പരിശീലനം, 5% പലിശയിൽ ഈടില്ലാത്ത സാമ്പത്തിക സഹായം.',
      fullDescription: '18 പരമ്പരാഗത മേഖലകളിലെ തൊഴിലാളികൾക്കായി (ആശാരി, കൊല്ലൻ, കുശവൻ, തുകൽ പണിക്കാർ, നെയ്ത്തുകാർ തുടങ്ങിയവർ) സമഗ്ര പിന്തുണ ഉറപ്പാക്കുന്നു. ഔദ്യോഗിക തിരിച്ചറിയൽ രേഖ, ദിവസം ₹500 സ്റ്റൈപ്പന്റോടെയുള്ള പരിശീലനം, ₹15,000 ടൂൾകിറ്റ് ഗ്രാന്റ്, 5% പലിശയിൽ വായ്പ എന്നിവ ലഭിക്കുന്നു.',
      subsidyDetails: 'പരമാവധി 5% പലിശ നിരക്ക് (സർക്കാർ 8% വരെ പലിശ സബ്‌സിഡി നൽകുന്നു). ₹15,000 സൗജന്യ ടൂൾകിറ്റ് ഗ്രാന്റ്.',
      focusArea: 'പരമ്പരാഗത കരകൗശലവും കലയും',
      ownContribution: 'പൂജ്യം (അംഗീകൃത തൊഴിലുകൾക്ക് 100% സ്ഥാപന പിന്തുണ)'
    },
    'nbcfdc-term': {
      name: 'NBCFDC ടേം ലോൺ പദ്ധതി (ഇതര പിന്നാക്ക വിഭാഗങ്ങൾ - OBC)',
      shortDescription: 'അർഹരായ ഒ.ബി.സി (OBC) ഗുണഭോക്താക്കൾക്ക് സ്വയംതൊഴിൽ സംരംഭങ്ങൾക്കായി കുറഞ്ഞ പലിശയിൽ ടേം ലോൺ.',
      fullDescription: 'ദേശീയ പിന്നാക്ക വിഭാഗ ധനകാര്യ വികസന കോർപ്പറേഷൻ (NBCFDC) സംസ്ഥാന ചാനലൈസിംഗ് ഏജൻസികൾ വഴിയും പൊതുമേഖലാ ബാങ്കുകൾ വഴിയും ഒ.ബി.സി സംരംഭകർക്ക് വായ്പാ സഹായം നൽകുന്നു. പ്രോജക്ട് ചെലവിന്റെ 85% വരെ ധനസഹായം ലഭിക്കും.',
      subsidyDetails: 'പ്രതിവർഷം 6.0% മുതൽ 8.0% വരെ കുറഞ്ഞ പലിശ നിരക്ക്. സൗകര്യപ്രദമായ തിരിച്ചടവും മൊറട്ടോറിയം വ്യവസ്ഥകളും.',
      focusArea: 'OBC സാമ്പത്തിക വികസനം',
      ownContribution: '15% സ്വന്തം മാർജിൻ മണി (വനിതകൾക്കുള്ള ചില ഉപപദ്ധതികളിൽ 10%)'
    },
    'nsfdc-term': {
      name: 'NSFDC ടേം ലോൺ പദ്ധതി (പട്ടികജാതി സംരംഭകർ - SC)',
      shortDescription: 'പട്ടികജാതി (SC) സംരംഭകരുടെ വ്യാവസായിക, കാർഷിക, സേവന പദ്ധതികൾക്കായി ദീർഘകാല ഇളവ് വായ്പാ സഹായം.',
      fullDescription: 'ദേശീയ പട്ടികജാതി ധനകാര്യ വികസന കോർപ്പറേഷൻ (NSFDC) SC സംരംഭകരുടെ വരുമാനദായക പദ്ധതികൾക്കായി ₹50 ലക്ഷം വരെ വായ്പാ സഹായം നൽകുന്നു. പലിശ നിരക്ക് പ്രതിവർഷം 6% മുതൽ ആരംഭിക്കുന്നു.',
      subsidyDetails: 'പദ്ധതി വലിപ്പത്തിനനുസരിച്ച് 6% മുതൽ 9% വരെ ഇളവ് നിരക്ക്. 90% വരെ ധനസഹായവും 5 വർഷം വരെ കാലാവധിയും.',
      focusArea: 'SC സാമ്പത്തിക ശാക്തീകരണം',
      ownContribution: 'കുറഞ്ഞത് 10% സ്വന്തം മാർജിൻ മണി'
    },
    'nsfdc-term-loan': {
      name: 'NSFDC ടേം ലോൺ പദ്ധതി (പട്ടികജാതി സംരംഭകർ - SC)',
      shortDescription: 'പട്ടികജാതി (SC) സംരംഭകരുടെ വ്യാവസായിക, കാർഷിക, സേവന പദ്ധതികൾക്കായി ദീർഘകാല ഇളവ് വായ്പാ സഹായം.',
      fullDescription: 'ദേശീയ പട്ടികജാതി ധനകാര്യ വികസന കോർപ്പറേഷൻ (NSFDC) SC സംരംഭകരുടെ വരുമാനദായക പദ്ധതികൾക്കായി ₹50 ലക്ഷം വരെ വായ്പാ സഹായം നൽകുന്നു. പലിശ നിരക്ക് പ്രതിവർഷം 6% മുതൽ ആരംഭിക്കുന്നു.',
      subsidyDetails: 'പദ്ധതി വലിപ്പത്തിനനുസരിച്ച് 6% മുതൽ 9% വരെ ഇളവ് നിരക്ക്. 90% വരെ ധനസഹായവും 5 വർഷം വരെ കാലാവധിയും.',
      focusArea: 'SC സാമ്പത്തിക ശാക്തീകരണം',
      ownContribution: 'കുറഞ്ഞത് 10% സ്വന്തം മാർജിൻ മണി'
    },
    'nbcfdc-transport': {
      name: 'NBCFDC ട്രാൻസ്‌പോർട്ട് സെക്ടർ വായ്പാ പദ്ധതി (വാണിജ്യ വാഹനങ്ങൾ)',
      shortDescription: 'OBC യുവാക്കൾക്കും ഡ്രൈവർമാർക്കും യാത്രാ, വാണിജ്യ വാഹനങ്ങൾ വാങ്ങാൻ ഇളവ് വായ്പ.',
      fullDescription: 'NBCFDC അർഹരായ OBC ഗുണഭോക്താക്കൾക്ക് ഓട്ടോറിക്ഷ, ഇ-റിക്ഷ, ചെറിയ വാണിജ്യ വാഹനങ്ങൾ വാങ്ങാൻ ₹10 ലക്ഷം വരെ ഇളവ് വായ്പ നൽകുന്നു. ഇത് സംസ്ഥാന ഏജൻസികൾ വഴിയും ബാങ്കുകൾ വഴിയും ലഭ്യമാക്കുന്നു.',
      subsidyDetails: 'പ്രതിവർഷം 6.0% മുതൽ 8.0% വരെ ഇളവ് പലിശ നിരക്ക്. പ്രോജക്ട് ചെലവിന്റെ 85% വരെ ധനസഹായം.',
      focusArea: 'ഗതാഗതവും ലോജിസ്റ്റിക്സും',
      ownContribution: '15% സ്വന്തം വിഹിതം'
    },
    'mahila-samriddhi': {
      name: 'മഹിളാ സമൃദ്ധി യോജന (NBCFDC വനിതാ മൈക്രോ ക്രെഡിറ്റ് പദ്ധതി)',
      shortDescription: 'പിന്നാക്ക വിഭാഗങ്ങളിലെ വനിതാ സംരംഭകർക്ക് ഗ്രാമീണ ചെറുകിട സംരംഭങ്ങൾ ആരംഭിക്കാൻ മൈക്രോ ഫിനാൻസ് സഹായം.',
      fullDescription: 'മഹിളാ സമൃദ്ധി യോജന പിന്നാക്ക വിഭാഗങ്ങളിലെ വനിതാ സംരംഭകർക്ക് നേരിട്ടോ സ്വയംസഹായ സംഘങ്ങൾ (SHG) വഴിയോ ₹1,40,000 വരെ മൈക്രോ വായ്പ നൽകുന്നു. ഇതിൽ പ്രതിവർഷം 4% മാത്രമാണ് ഇളവ് പലിശ നിരക്ക്.',
      subsidyDetails: 'വനിതാ ഗുണഭോക്താക്കൾക്ക് വെറും 4% പലിശ നിരക്ക്; NBCFDC വഴി പ്രോജക്ട് ചെലവിന്റെ 95% വരെ ധനസഹായം.',
      focusArea: 'വനിതാ മൈക്രോ ക്രെഡിറ്റ്',
      ownContribution: '5% സ്വന്തം വിഹിതം'
    },
    'dr-ambedkar-education': {
      name: 'ഡോ. അംബേദ്കർ ഉന്നത വിദ്യാഭ്യാസ വായ്പാ പലിശ സബ്‌സിഡി കേന്ദ്ര മേഖലാ പദ്ധതി',
      shortDescription: 'OBC/EWS വിദ്യാർത്ഥികൾക്ക് പ്രൊഫഷണൽ മാസ്റ്റർ, ഡോക്ടറൽ പഠനങ്ങൾക്ക് വിദ്യാഭ്യാസ വായ്പകളിൽ 100% പലിശ സബ്‌സിഡി.',
      fullDescription: 'കുടുംബ വാർഷിക വരുമാനം ₹8.00 ലക്ഷം വരെയുള്ള പ്രതിഭാധനരായ OBC, EWS വിദ്യാർത്ഥികൾക്ക് അംഗീകൃത ഉന്നത വിദ്യാഭ്യാസ കോഴ്സുകൾക്ക് മൊറട്ടോറിയം കാലയളവിൽ (കോഴ്സ് കാലാവധി + 1 വർഷം) മുഴുവൻ പലിശ സബ്‌സിഡിയും നൽകുന്നു.',
      subsidyDetails: 'മൊറട്ടോറിയം കാലയളവിൽ കേന്ദ്ര സർക്കാർ നൽകുന്ന 100% പലിശ സബ്‌സിഡി.',
      focusArea: 'ഉന്നത വിദ്യാഭ്യാസ പലിശ സബ്‌സിഡി',
      ownContribution: 'കോഴ്സ് കാലയളവിൽ 0%'
    }
  }
};

