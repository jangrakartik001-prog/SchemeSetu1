import { ScreenType } from '../types';
import { AssistantContext } from '../types/assistant';
import { Language } from '../i18n/types';

interface ContextualQuestion {
  id: string;
  category: 'general' | 'scheme' | 'financial' | 'partner' | 'readiness';
  text: Record<Language, string>;
}

const QUESTION_BANK: ContextualQuestion[] = [
  // General / Early Journey Questions
  {
    id: 'how-matching-works',
    category: 'general',
    text: {
      en: 'How does SchemeSetu match schemes?',
      hi: 'स्कीमसेतु योजनाओं का मिलान कैसे करता है?',
      pa: 'ਸਕੀਮਸੇਤੂ ਸਕੀਮਾਂ ਦਾ ਮਿਲਾਨ ਕਿਵੇਂ ਕਰਦਾ ਹੈ?',
      bn: 'স্কিমসেতু কীভাবে প্রকল্পের মিল খুঁজে পায়?',
      mr: 'स्कीमसेतू योजनांची जुळवणी कशी करते?',
      gu: 'સ્કીમસેતુ યોજનાઓનું મેળવણી કેવી રીતે કરે છે?',
      ta: 'ஸ்கீம்சேது திட்டங்களை எவ்வாறு பொருத்துகிறது?',
      te: 'స్కీమ్‌సేతు పథకాలను ఎలా సరిపోలుస్తుంది?',
      kn: 'ಸ್ಕೀಮ್‌ಸೇತು ಯೋಜನೆಗಳನ್ನು ಹೇಗೆ ಹೊಂದಿಸುತ್ತದೆ?',
      ml: 'സ്കീംസേതു പദ്ധതികൾ എങ്ങനെ പൊരുത്തപ്പെടുത്തുന്നു?'
    }
  },
  {
    id: 'what-schemes-suit',
    category: 'general',
    text: {
      en: 'What schemes might suit my profile?',
      hi: 'मेरी प्रोफ़ाइल के लिए कौन सी योजनाएँ उपयुक्त हो सकती हैं?',
      pa: 'ਮੇਰੀ ਪ੍ਰੋਫਾਈਲ ਲਈ ਕਿਹੜੀਆਂ ਸਕੀਮਾਂ ਢੁਕਵੀਆਂ ਹੋ ਸਕਦੀਆਂ ਹਨ?',
      bn: 'আমার প্রোফাইলের জন্য কোন প্রকল্পগুলি উপযুক্ত হতে পারে?',
      mr: 'माझ्या प्रोफाईलसाठी कोणत्या योजना योग्य असू शकतात?',
      gu: 'મારી પ્રોફાઇલ માટે કઈ યોજનાઓ યોગ્ય હોઈ શકે છે?',
      ta: 'எனது விவரக்குறிப்பிற்கு எந்த திட்டங்கள் பொருந்தும்?',
      te: 'నా ప్రొఫైల్‌కు ఏ పథకాలు సరిపోలవచ్చు?',
      kn: 'ನನ್ನ ಪ್ರೊಫೈಲ್‌ಗೆ ಯಾವ ಯೋಜನೆಗಳು ಸೂಕ್ತವಾಗಿರಬಹುದು?',
      ml: 'എന്റെ പ്രൊഫൈലിന് അനുയോജ്യമായ പദ്ധതികൾ ഏവ?'
    }
  },
  {
    id: 'moratorium-meaning',
    category: 'general',
    text: {
      en: 'What does moratorium mean?',
      hi: 'मोरेटोरियम (Moratorium) का क्या अर्थ है?',
      pa: 'ਮੋਰੇਟੋਰੀਅਮ (Moratorium) ਦਾ ਕੀ ਅਰਥ ਹੈ?',
      bn: 'মোরেটোরিয়াম (Moratorium) বলতে কী বোঝায়?',
      mr: 'मोरेटोरियम (Moratorium) म्हणजे काय?',
      gu: 'મોરેટોરિયમ (Moratorium) નો અર્થ શું છે?',
      ta: 'மொரட்டோரியம் (Moratorium) என்றால் என்ன?',
      te: 'మొరటోరియం (Moratorium) అంటే ఏమిటి?',
      kn: 'ಮೊರಟೋರಿಯಂ (Moratorium) ಎಂದರೇನು?',
      ml: 'മൊറട്ടോറിയം (Moratorium) എന്നാൽ എന്താണ്?'
    }
  },

  // Scheme Stage Questions
  {
    id: 'why-scheme-recommended',
    category: 'scheme',
    text: {
      en: 'Why was this scheme recommended?',
      hi: 'यह योजना मेरे लिए क्यों अनुशंसित की गई?',
      pa: 'ਇਹ ਸਕੀਮ ਮੇਰੇ ਲਈ ਕਿਉਂ ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ ਗਈ?',
      bn: 'এই প্রকল্পটি কেন সুপারিশ করা হয়েছে?',
      mr: 'ही योजना माझ्यासाठी का शिफारस केली गेली?',
      gu: 'આ યોજના શા માટે ભલામણ કરવામાં આવી?',
      ta: 'இந்த திட்டம் ஏன் பரிந்துரைக்கப்பட்டது?',
      te: 'ఈ పథకం ఎందుకు సిఫార్సు చేయబడింది?',
      kn: 'ಈ ಯೋಜನೆಯನ್ನು ಏಕೆ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ?',
      ml: 'ഈ പദ്ധതി എന്തുകൊണ്ട് ശുപാർശ ചെയ്തു?'
    }
  },
  {
    id: 'why-others-not-recommended',
    category: 'scheme',
    text: {
      en: 'Why were other schemes not recommended?',
      hi: 'अन्य योजनाओं की सिफारिश क्यों नहीं की गई?',
      pa: 'ਹੋਰ ਸਕੀਮਾਂ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕਿਉਂ ਨਹੀਂ ਕੀਤੀ ਗਈ?',
      bn: 'অন্যান্য প্রকল্পগুলি কেন সুপারিশ করা হয়নি?',
      mr: 'इतर योजनांची शिफारस का केली गेली नाही?',
      gu: 'અન્ય યોજનાઓની ભલામણ કેમ કરવામાં ન આવી?',
      ta: 'மற்ற திட்டங்கள் ஏன் பரிந்துரைக்கப்படவில்லை?',
      te: 'ఇతర పథకాలు ఎందుకు సిఫార్సు చేయబడలేదు?',
      kn: 'ಇತರ ಯೋಜನೆಗಳನ್ನು ಏಕೆ ಶಿಫಾರಸು ಮಾಡಲಾಗಿಲ್ಲ?',
      ml: 'മറ്റ് പദ്ധതികൾ എന്തുകൊണ്ട് ശുപാർശ ചെയ്തില്ല?'
    }
  },

  // Financial Simulator Questions
  {
    id: 'how-emi-calculated',
    category: 'financial',
    text: {
      en: 'How was my EMI calculated?',
      hi: 'मेरी ईएमआई (EMI) की गणना कैसे की गई?',
      pa: 'ਮੇਰੀ EMI ਦੀ ਗਣਨਾ ਕਿਵੇਂ ਕੀਤੀ ਗਈ ਸੀ?',
      bn: 'আমার EMI কীভাবে গণনা করা হয়েছে?',
      mr: 'माझ्या EMI चे गणित कसे केले गेले?',
      gu: 'મારી EMI ની ગણતરી કેવી રીતે કરવામાં આવી?',
      ta: 'எனது இஎம்ஐ (EMI) எவ்வாறு கணக்கிடப்பட்டது?',
      te: 'నా EMI ఎలా లెక్కించబడింది?',
      kn: 'ನನ್ನ EMI ಅನ್ನು ಹೇಗೆ ಲೆಕ್ಕಹಾಕಲಾಯಿತು?',
      ml: 'എന്റെ ഇ.എം.ഐ (EMI) എങ്ങനെ കണക്കാക്കി?'
    }
  },
  {
    id: 'longer-tenure-effect',
    category: 'financial',
    text: {
      en: 'What happens if I choose a longer tenure?',
      hi: 'यदि मैं लंबी अवधि चुनता हूँ तो क्या होगा?',
      pa: 'ਜੇ ਮੈਂ ਲੰਮੀ ਮਿਆਦ ਚੁਣਾਂ ਤਾਂ ਕੀ ਹੋਵੇਗਾ?',
      bn: 'আমি দীর্ঘ মেয়াদ বেছে নিলে কী হবে?',
      mr: 'मी जास्त मुदत निवडल्यास काय होईल?',
      gu: 'જો હું લાંબી મુદત પસંદ કરું તો શું થશે?',
      ta: 'நான் நீண்ட கால அவகாசத்தைத் தேர்வுசெய்தால் என்ன நடக்கும்?',
      te: 'నేను ఎక్కువ కాలపరిమితిని ఎంచుకుంటే ఏమవుతుంది?',
      kn: 'ನಾನು ದೀರ್ಘಾವಧಿಯ ಅವಧಿಯನ್ನು ಆರಿಸಿದರೆ ಏನಾಗುತ್ತದೆ?',
      ml: 'കൂടുതൽ തിരിച്ചടവ് കാലയളവ് തിരഞ്ഞെടുത്താൽ എന്ത് സംഭവിക്കും?'
    }
  },
  {
    id: 'total-repayment-breakdown',
    category: 'financial',
    text: {
      en: 'What is my total repayment and interest?',
      hi: 'मेरा कुल पुनर्भुगतान और ब्याज कितना है?',
      pa: 'ਮੇਰੀ ਕੁੱਲ ਮੁੜ ਅਦਾਇਗੀ ਅਤੇ ਵਿਆਜ ਕਿੰਨਾ ਹੈ?',
      bn: 'আমার মোট পরিশোধ এবং সুদের পরিমাণ কত?',
      mr: 'माझी एकूण परतफेड आणि व्याज किती आहे?',
      gu: 'મારી કુલ ચુકવણી અને વ્યાજ કેટલું છે?',
      ta: 'எனது மொத்த திருப்பிச் செலுத்துதல் மற்றும் வட்டி எவ்வளவு?',
      te: 'నా మొత్తం తిరిగి చెల్లింపు మరియు వడ్డీ ఎంత?',
      kn: 'ನನ್ನ ಒಟ್ಟು ಮರುಪಾವತಿ ಮತ್ತು ಬಡ್ಡಿ ಎಷ್ಟು?',
      ml: 'എന്റെ ആകെ തിരിച്ചടവും പലിശയും എത്രയാണ്?'
    }
  },

  // Partner Routing Questions
  {
    id: 'why-partner-selected',
    category: 'partner',
    text: {
      en: 'Why was this partner selected?',
      hi: 'इस पार्टनर बैंक / संस्था को क्यों चुना गया?',
      pa: 'ਇਸ ਭਾਈਵਾਲ ਬੈਂਕ / ਸੰਸਥਾ ਨੂੰ ਕਿਉਂ ਚੁਣਿਆ ਗਿਆ?',
      bn: 'এই অংশীদার ব্যাংক / সংস্থাকে কেন নির্বাচন করা হয়েছে?',
      mr: 'या भागीदार बँक / संस्थेची निवड का झाली?',
      gu: 'આ પાર્ટનર બેંક / સંસ્થા શા માટે પસંદ કરવામાં આવી?',
      ta: 'இந்த கூட்டாளர் வங்கி / நிறுவனம் ஏன் தேர்ந்தெடுக்கப்பட்டது?',
      te: 'ఈ భాగస్వామి బ్యాంక్ / సంస్థ ఎందుకు ఎంపిక చేయబడింది?',
      kn: 'ಈ ಪಾಲುದಾರ ಬ್ಯಾಂಕ್ / ಸಂಸ್ಥೆಯನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ?',
      ml: 'ഈ പങ്കാളി ബാങ്ക് / സ്ഥാപനത്തെ എന്തുകൊണ്ട് തിരഞ്ഞെടുത്തു?'
    }
  },
  {
    id: 'why-not-closest-partner',
    category: 'partner',
    text: {
      en: 'Why not the closest partner?',
      hi: 'सबसे नजदीकी पार्टनर की सिफारिश क्यों नहीं की गई?',
      pa: 'ਸਭ ਤੋਂ ਨਜ਼ਦੀਕੀ ਭਾਈਵਾਲ ਕਿਉਂ ਨਹੀਂ ਚੁਣਿਆ ਗਿਆ?',
      bn: 'নিকটতম অংশীদারকে কেন বেছে নেওয়া হয়নি?',
      mr: 'सर्वात जवळच्या भागीदाराची शिफारस का केली नाही?',
      gu: 'સૌથી નજીકના પાર્ટનરને કેમ પસંદ ન કરાયું?',
      ta: 'ஏன் மிக அருகிலுள்ள கூட்டாளரைத் தேர்வு செய்யவில்லை?',
      te: 'సమీప భాగస్వామిని ఎందుకు ఎంపిక చేయలేదు?',
      kn: 'ಹತ್ತಿರದ ಪಾಲುದಾರರನ್ನು ಏಕೆ ಶಿಫಾರಸು ಮಾಡಲಾಗಿಲ್ಲ?',
      ml: 'ഏറ്റവും അടുത്തുള്ള പങ്കാളിയെ എന്തുകൊണ്ട് തിരഞ്ഞෙടുത്തില്ല?'
    }
  },

  // Readiness / Next Steps
  {
    id: 'what-documents-prepare',
    category: 'readiness',
    text: {
      en: 'What documents should I prepare?',
      hi: 'मुझे कौन से दस्तावेज़ तैयार करने चाहिए?',
      pa: 'ਮੈਨੂੰ ਕਿਹੜੇ ਦਸਤਾਵੇਜ਼ ਤਿਆਰ ਕਰਨੇ ਚਾਹੀਦੇ ਹਨ?',
      bn: 'আমার কোন কোন নথি প্রস্তুত করা উচিত?',
      mr: 'मी कोणती कागदपत्रे तयार करावीत?',
      gu: 'મારે કયા દસ્તાવેજો તૈયાર કરવા જોઈએ?',
      ta: 'நான் என்ன ஆவணங்களைத் தயார் செய்ய வேண்டும்?',
      te: 'నేను ఏ పత్రాలను సిద్ధం చేసుకోవాలి?',
      kn: 'ನಾನು ಯಾವ ದಾಖಲೆಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿಕೊಳ್ಳಬೇಕು?',
      ml: 'ഞാൻ ഏതൊക്കെ രേഖകൾ തയ്യാറാക്കണം?'
    }
  },
  {
    id: 'what-next-step',
    category: 'readiness',
    text: {
      en: 'What should I do next?',
      hi: 'मुझे आगे क्या कदम उठाना चाहिए?',
      pa: 'ਮੈਨੂੰ ਅੱਗੇ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?',
      bn: 'এরপর আমার কী করা উচিত?',
      mr: 'मी पुढे काय करावे?',
      gu: 'મારે આગળ શું કરવું જોઈએ?',
      ta: 'அடுத்து நான் என்ன செய்ய வேண்டும்?',
      te: 'తరువాత నేను ఏమి చేయాలి?',
      kn: 'ನಾನು ಮುಂದೆ ಏನು ಮಾಡಬೇಕು?',
      ml: 'ഞാൻ അടുത്തതായി എന്താണ് ചെയ്യേണ്ടത്?'
    }
  }
];

export function getSuggestedQuestions(
  currentScreen: ScreenType,
  context?: AssistantContext,
  language: Language = 'en'
): string[] {
  const result: string[] = [];

  const hasScheme = !!context?.scheme?.name;
  const hasFinancial = !!context?.financial?.monthlyEMI;
  const hasPartner = !!context?.partner?.recommendedPartnerName;

  // Filter relevant questions based on actual state and screen
  if (currentScreen === 'channel-partner' || hasPartner) {
    result.push(getQText('why-partner-selected', language));
    result.push(getQText('why-not-closest-partner', language));
    result.push(getQText('what-documents-prepare', language));
    result.push(getQText('what-next-step', language));
  } else if (currentScreen === 'financial-simulator' || hasFinancial) {
    result.push(getQText('how-emi-calculated', language));
    result.push(getQText('longer-tenure-effect', language));
    result.push(getQText('total-repayment-breakdown', language));
    result.push(getQText('moratorium-meaning', language));
  } else if (
    currentScreen === 'recommendation-results' ||
    currentScreen === 'scheme-details' ||
    hasScheme
  ) {
    result.push(getQText('why-scheme-recommended', language));
    result.push(getQText('why-others-not-recommended', language));
    result.push(getQText('what-documents-prepare', language));
    result.push(getQText('what-next-step', language));
  } else {
    // Early stage
    result.push(getQText('what-schemes-suit', language));
    result.push(getQText('how-matching-works', language));
    result.push(getQText('moratorium-meaning', language));
  }

  return result.slice(0, 4);
}

function getQText(id: string, lang: Language): string {
  const q = QUESTION_BANK.find(item => item.id === id);
  if (!q) return '';
  return q.text[lang] || q.text.en;
}
