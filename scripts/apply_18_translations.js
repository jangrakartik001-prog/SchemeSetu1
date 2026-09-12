import fs from 'fs';
import path from 'path';

const pa = {
  'explorer.maxFinancing': 'ਵੱਧ ਤੋਂ ਵੱਧ ਵਿੱਤਪੋਸ਼ਣ',
  'explorer.interestRate': 'ਵਿਆਜ ਦਰ',
  'explorer.coverage': 'ਵਿੱਤਪੋਸ਼ਣ ਕਵਰੇਜ',
  'explorer.ageLimit': 'ਉਮਰ ਸੀਮਾ',
  'explorer.noResultsTitle': 'ਕੋਈ ਸਕੀਮਾਂ ਨਹੀਂ ਮਿਲੀਆਂ',
  'explorer.noResultsDesc': 'ਖੋਜ ਸ਼ਬਦ ਬਦਲ ਕੇ ਜਾਂ ਫਿਲਟਰ ਹਟਾ ਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
  'explorer.clearFilters': 'ਸਾਰੇ ਫਿਲਟਰ ਸਾਫ਼ ਕਰੋ',
  'explorer.totalSchemes': '{count} ਜਨਤਕ ਕ੍ਰੈਡਿਟ ਸਕੀਮਾਂ ਉਪਲਬਧ ਹਨ',
  'tools.bannerNoDataTitle': 'ਨਿੱਜੀ ਵਿੱਤੀ ਅੰਦਾਜ਼ੇ ਲਈ ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਵੇਰਵੇ ਪੂਰੇ ਕਰੋ।',
  'tools.bannerNoDataDesc': 'ਤੁਸੀਂ ਹੇਠਾਂ ਕਿਸੇ ਵੀ ਕਰਜ਼ੇ ਦੀ ਰਕਮ ਨੂੰ ਸਿਮੂਲੇਟ ਕਰ ਸਕਦੇ ਹੋ, ਜਾਂ ਆਪਣੀ ਸ਼੍ਰੇਣੀ ਅਤੇ ਸਥਾਨ ਅਨੁਸਾਰ ਅਨੁਕੂਲਿਤ ਸਿਫ਼ਾਰਸ਼ਾਂ ਲਈ ਮੁਲਾਂਕਣ ਸ਼ੁਰੂ ਕਰ ਸਕਦੇ ਹੋ।',
  'tools.startJourneyBtn': 'ਮੇਰੀ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ',
  'network.findMyPartnerBtn': 'ਮੇਰਾ ਸਿਫ਼ਾਰਸ਼ੀ ਪਾਰਟਨਰ ਲੱਭੋ',
  'network.ticketRange': 'ਕਰਜ਼ਾ ਸੀਮਾ',
  'network.simulatedCapacity': 'ਸਿਮੂਲੇਟ ਕੀਤੀ ਸਮਰੱਥਾ',
  'network.supportedSchemes': 'ਸਮਰਥਿਤ ਸਕੀਮਾਂ',
  'network.noResultsTitle': 'ਕੋਈ ਪਾਰਟਨਰ ਨਹੀਂ ਮਿਲਿਆ',
  'network.noResultsDesc': 'ਖੋਜ ਜਾਂ ਰਾਜ ਫਿਲਟਰ ਬਦਲ ਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
  'network.totalPartners': 'ਨੈੱਟਵਰਕ ਵਿੱਚ {count} ਚੈਨਲ ਪਾਰਟਨਰ'
};

const bn = {
  'explorer.maxFinancing': 'সর্বোচ্চ অর্থায়ন',
  'explorer.interestRate': 'সুদের হার',
  'explorer.coverage': 'অর্থায়ন কভারেজ',
  'explorer.ageLimit': 'বয়স সীমা',
  'explorer.noResultsTitle': 'কোনো স্কিম পাওয়া যায়নি',
  'explorer.noResultsDesc': 'অনুসন্ধানের শব্দ পরিবর্তন করে বা ফিল্টার সরিয়ে আবার চেষ্টা করুন।',
  'explorer.clearFilters': 'সমস্ত ফিল্টার সাফ করুন',
  'explorer.totalSchemes': '{count}টি সরকারি ঋণ প্রকল্প উপলব্ধ',
  'tools.bannerNoDataTitle': 'ব্যক্তিগতকৃত আর্থিক অনুমানের জন্য আপনার প্রোফাইল এবং প্রকল্পের বিবরণ সম্পন্ন করুন।',
  'tools.bannerNoDataDesc': 'আপনি নিচে যেকোনো ঋণের পরিমাণ সিমুলেট করতে পারেন, অথবা আপনার শ্রেণী ও অবস্থান অনুযায়ী কাস্টম সুপারিশ পেতে মূল্যায়ন শুরু করতে পারেন।',
  'tools.startJourneyBtn': 'আমার যাত্রা শুরু করুন',
  'network.findMyPartnerBtn': 'আমার সুপারিশকৃত পার্টনার খুঁজুন',
  'network.ticketRange': 'ঋণের সীমা',
  'network.simulatedCapacity': 'সিমুলেটেড ক্ষমতা',
  'network.supportedSchemes': 'সমর্থিত স্কিমসমূহ',
  'network.noResultsTitle': 'কোনো পার্টনার পাওয়া যায়নি',
  'network.noResultsDesc': 'অনুসন্ধান শব্দ বা রাজ্য ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।',
  'network.totalPartners': 'নেটওয়ার্কে {count}টি চ্যানেল পার্টনার'
};

const mr = {
  'explorer.maxFinancing': 'कमाल वित्तपुरवठा',
  'explorer.interestRate': 'व्याजदर',
  'explorer.coverage': 'वित्तपुरवठा कव्हरेज',
  'explorer.ageLimit': 'वयोमर्यादा',
  'explorer.noResultsTitle': 'कोणतीही योजना आढळली नाही',
  'explorer.noResultsDesc': 'शोध शब्द बदलून किंवा फिल्टर काढून पुन्हा प्रयत्न करा.',
  'explorer.clearFilters': 'सर्व फिल्टर साफ करा',
  'explorer.totalSchemes': '{count} सार्वजनिक क्रेडिट योजना उपलब्ध',
  'tools.bannerNoDataTitle': 'वैयक्तिक वित्तीय अंदाजासाठी तुमची प्रोफाइल आणि प्रकल्प तपशील पूर्ण करा.',
  'tools.bannerNoDataDesc': 'तुम्ही खाली कोणत्याही कर्ज रकमेचे सिम्युलेशन करू शकता, किंवा तुमच्या प्रवर्गासाठी सानुकूल शिफारसी मिळवण्यासाठी प्रवास सुरू करू शकता.',
  'tools.startJourneyBtn': 'माझा प्रवास सुरू करा',
  'network.findMyPartnerBtn': 'माझा शिफारस केलेला पार्टनर शोधा',
  'network.ticketRange': 'कर्ज मर्यादा',
  'network.simulatedCapacity': 'सिम्युलेटेड क्षमता',
  'network.supportedSchemes': 'समर्थित योजना',
  'network.noResultsTitle': 'कोणताही पार्टनर सापडला नाही',
  'network.noResultsDesc': 'शोध शब्द किंवा राज्य फिल्टर बदलून पुन्हा प्रयत्न करा.',
  'network.totalPartners': 'नेटवर्कमध्ये {count} चॅनेल पार्टनर'
};

const gu = {
  'explorer.maxFinancing': 'મહત્તમ ધિરાણ',
  'explorer.interestRate': 'વ્યાજ દર',
  'explorer.coverage': 'ધિરાણ કવરેજ',
  'explorer.ageLimit': 'વય મર્યાદા',
  'explorer.noResultsTitle': 'કોઈ યોજના મળી નથી',
  'explorer.noResultsDesc': 'શોધ શબ્દ બદલીને અથવા ફિલ્ટર્સ હટાવીને ફરી પ્રયાસ કરો.',
  'explorer.clearFilters': 'બધા ફિલ્ટર્સ સાફ કરો',
  'explorer.totalSchemes': '{count} જાહેર ધિરાણ યોજનાઓ ઉપલબ્ધ',
  'tools.bannerNoDataTitle': 'વ્યક્તિગત નાણાકીય અંદાજ માટે તમારી પ્રોફાઇલ અને પ્રોજેક્ટ વિગતો પૂર્ણ કરો.',
  'tools.bannerNoDataDesc': 'તમે નીચે કોઈપણ લોન રકમ સિમ્યુલેટ કરી શકો છો, અથવા તમારી શ્રેણી અનુસાર કસ્ટમ ભલામણો મેળવવા માટે પ્રવાસ શરૂ કરી શકો છો.',
  'tools.startJourneyBtn': 'મારી સફર શરૂ કરો',
  'network.findMyPartnerBtn': 'મારા ભલામણ કરેલ પાર્ટનર શોધો',
  'network.ticketRange': 'લોન મર્યાદા',
  'network.simulatedCapacity': 'સિમ્યુલેટેડ ક્ષમતા',
  'network.supportedSchemes': 'સમર્થિત યોજનાઓ',
  'network.noResultsTitle': 'કોઈ પાર્ટનર મળ્યા નથી',
  'network.noResultsDesc': 'શોધ શબ્દ અથવા રાજ્ય ફિલ્ટર બદલીને ફરી પ્રયાસ કરો.',
  'network.totalPartners': 'નેટવર્કમાં {count} ચેનલ પાર્ટનર્સ'
};

const ta = {
  'explorer.maxFinancing': 'அதிகபட்ச நிதி',
  'explorer.interestRate': 'வட்டி விகிதம்',
  'explorer.coverage': 'நிதி கவரேஜ்',
  'explorer.ageLimit': 'வயது வரம்பு',
  'explorer.noResultsTitle': 'திட்டங்கள் எதுவும் கிடைக்கவில்லை',
  'explorer.noResultsDesc': 'தேடல் சொற்களை மாற்றி அல்லது வடிகட்டிகளை நீக்கி மீண்டும் முயற்சிக்கவும்.',
  'explorer.clearFilters': 'அனைத்து வடிகட்டிகளையும் அழிக்கவும்',
  'explorer.totalSchemes': '{count} அரசு கடன் திட்டங்கள் உள்ளன',
  'tools.bannerNoDataTitle': 'தனிப்பயனாக்கப்பட்ட நிதி மதிப்பீட்டிற்கு உங்கள் சுயவிவரம் மற்றும் திட்ட விவரங்களை முடிக்கவும்.',
  'tools.bannerNoDataDesc': 'கீழே நீங்கள் எந்தவொரு கடன் தொகையையும் கணக்கிடலாம் அல்லது உங்கள் பிரிவுக்கு ஏற்ற தனிப்பயன் பரிந்துரைகளைப் பெற மதிப்பீட்டைத் தொடங்கலாம்.',
  'tools.startJourneyBtn': 'பயணத்தைத் தொடங்குக',
  'network.findMyPartnerBtn': 'பரிந்துரைக்கப்பட்ட பார்ட்னரைக் கண்டறியவும்',
  'network.ticketRange': 'கடன் வரம்பு',
  'network.simulatedCapacity': 'செயல்திறன் பயன்பாடு',
  'network.supportedSchemes': 'ஆதரிக்கப்படும் திட்டங்கள்',
  'network.noResultsTitle': 'பார்ட்னர்கள் யாரும் கிடைக்கவில்லை',
  'network.noResultsDesc': 'தேடல் அல்லது மாநில வடிகட்டியை மாற்றி மீண்டும் முயற்சிக்கவும்.',
  'network.totalPartners': 'நெட்வொர்க்கில் {count} சேனல் பார்ட்னர்கள்'
};

const te = {
  'explorer.maxFinancing': 'గరిష్ట రుణం',
  'explorer.interestRate': 'వడ్డీ రేటు',
  'explorer.coverage': 'ఫైనాన్సింగ్ కవరేజ్',
  'explorer.ageLimit': 'వయోపరిమితి',
  'explorer.noResultsTitle': 'ఎటువంటి పథకాలు కనుగొనబడలేదు',
  'explorer.noResultsDesc': 'శోధన పదాలను మార్చి లేదా ఫిల్టర్‌లను తొలగించి మళ్లీ ప్రయత్నించండి.',
  'explorer.clearFilters': 'అన్ని ఫిల్టర్‌లను క్లియర్ చేయండి',
  'explorer.totalSchemes': '{count} ప్రభుత్వ క్రెడిట్ పథకాలు అందుబాటులో ఉన్నాయి',
  'tools.bannerNoDataTitle': 'వ్యక్తిగత ఆర్థిక అంచనా కోసం మీ ప్రొఫైల్ మరియు ప్రాజెక్ట్ వివరాలను పూర్తి చేయండి.',
  'tools.bannerNoDataDesc': 'మీరు క్రింద ఏదైనా రుణ మొత్తాన్ని సిమ్యులేట్ చేయవచ్చు లేదా మీ కేటగిరీకి అనుగుణంగా సిఫార్సులను పొందడానికి మూల్యాంకనాన్ని ప్రారంభించవచ్చు.',
  'tools.startJourneyBtn': 'ప్రయాణాన్ని ప్రారంభించండి',
  'network.findMyPartnerBtn': 'సిఫార్సు చేసిన భాగస్వామిని కనుగొనండి',
  'network.ticketRange': 'రుణ పరిమితి',
  'network.simulatedCapacity': 'సిమ్యులేటెడ్ సామర్థ్యం',
  'network.supportedSchemes': 'మద్దతు ఉన్న పథకాలు',
  'network.noResultsTitle': 'ఎటువంటి భాగస్వాములు కనుగొనబడలేదు',
  'network.noResultsDesc': 'శోధన పదం లేదా రాష్ట్ర ఫిల్టర్‌ను మార్చి మళ్లీ ప్రయత్నించండి.',
  'network.totalPartners': 'నెట్‌వర్క్‌లో {count} ఛానల్ భాగస్వాములు'
};

const kn = {
  'explorer.maxFinancing': 'ಗರಿಷ್ಠ ಸಾಲ',
  'explorer.interestRate': 'ಬಡ್ಡಿದರ',
  'explorer.coverage': 'ಹಣಕಾಸು ವ್ಯಾಪ್ತಿ',
  'explorer.ageLimit': 'ವಯೋಮಿತಿ',
  'explorer.noResultsTitle': 'ಯಾವುದೇ ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ',
  'explorer.noResultsDesc': 'ಹುಡುಕಾಟ ಪದಗಳನ್ನು ಬದಲಾಯಿಸಿ ಅಥವಾ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
  'explorer.clearFilters': 'ಎಲ್ಲಾ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ',
  'explorer.totalSchemes': '{count} ಸಾರ್ವಜನಿಕ ಕ್ರೆಡಿಟ್ ಯೋಜನೆಗಳು ಲಭ್ಯವಿದೆ',
  'tools.bannerNoDataTitle': 'ವೈಯಕ್ತಿಕ ಆರ್ಥಿಕ ಅಂದಾಜಿಗಾಗಿ ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಯೋಜನಾ ವಿವರಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.',
  'tools.bannerNoDataDesc': 'ನೀವು ಕೆಳಗೆ ಯಾವುದೇ ಸಾಲದ ಮೊತ್ತವನ್ನು ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಬಹುದು, ಅಥವಾ ನಿಮ್ಮ ವರ್ಗಕ್ಕೆ ತಕ್ಕ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಲು ಮೌಲ್ಯಮಾಪನ ಆರಂಭಿಸಬಹುದು.',
  'tools.startJourneyBtn': 'ಪ್ರಯಾಣ ಆರಂಭಿಸಿ',
  'network.findMyPartnerBtn': 'ಶಿಫಾರಸು ಮಾಡಿದ ಪಾಲುದಾರರನ್ನು ಹುಡುಕಿ',
  'network.ticketRange': 'ಸಾಲದ ಶ್ರೇಣಿ',
  'network.simulatedCapacity': 'ಸಿಮ್ಯುಲೇಟೆಡ್ ಸಾಮರ್ಥ್ಯ',
  'network.supportedSchemes': 'ಬೆಂಬಲಿತ ಯೋಜನೆಗಳು',
  'network.noResultsTitle': 'ಯಾವುದೇ ಪಾಲುದಾರರು ಕಂಡುಬಂದಿಲ್ಲ',
  'network.noResultsDesc': 'ಹುಡುಕಾಟ ಅಥವಾ ರಾಜ್ಯ ಫಿಲ್ಟರ್ ಬದಲಾಯಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
  'network.totalPartners': 'ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ {count} ಚಾನೆಲ್ ಪಾಲುದಾರರು'
};

const ml = {
  'explorer.maxFinancing': 'പരമാവധി വായ്പ',
  'explorer.interestRate': 'പലിശ നിരക്ക്',
  'explorer.coverage': 'വായ്പാ കവറേജ്',
  'explorer.ageLimit': 'പ്രായപരിധി',
  'explorer.noResultsTitle': 'പദ്ധതികളൊന്നും കണ്ടെത്തിയില്ല',
  'explorer.noResultsDesc': 'തിരയൽ പദങ്ങൾ മാറ്റുകയോ ഫിൽട്ടറുകൾ നീക്കം ചെയ്യുകയോ ചെയ്ത് വീണ്ടും ശ്രമിക്കുക.',
  'explorer.clearFilters': 'എല്ലാ ഫിൽട്ടറുകളും ഒഴിവാക്കുക',
  'explorer.totalSchemes': '{count} സർക്കാർ വായ്പാ പദ്ധതികൾ ലഭ്യമാണ്',
  'tools.bannerNoDataTitle': 'വ്യക്തിഗത സാമ്പത്തിക എസ്റ്റിമേറ്റിനായി നിങ്ങളുടെ പ്രൊഫൈലും പ്രോജക്റ്റ് വിശദാംശങ്ങളും പൂർത്തിയാക്കുക.',
  'tools.bannerNoDataDesc': 'നിങ്ങൾക്ക് താഴെ ഏത് വായ്പാ തുകയും കണക്കാക്കാം, അല്ലെങ്കിൽ നിങ്ങളുടെ വിഭാഗത്തിന് അനുയോജ്യമായ ശുപാർശകൾക്കായി വിലയിരുത്തൽ ആരംഭിക്കാം.',
  'tools.startJourneyBtn': 'ആരംഭിക്കുക',
  'network.findMyPartnerBtn': 'എന്റെ പങ്കാളിയെ കണ്ടെത്തുക',
  'network.ticketRange': 'വായ്പാ പരിധി',
  'network.simulatedCapacity': 'ശേഷി ഉപയോഗം',
  'network.supportedSchemes': 'പിന്തുണയ്ക്കുന്ന പദ്ധതികൾ',
  'network.noResultsTitle': 'പങ്കാളികളെ കണ്ടെത്തിയില്ല',
  'network.noResultsDesc': 'തിരയൽ പദമോ സംസ്ഥാന ഫിൽട്ടറോ മാറ്റി വീണ്ടും ശ്രമിക്കുക.',
  'network.totalPartners': 'ശൃംഖലയിൽ {count} ചാനൽ പങ്കാളികൾ'
};

function update(lang, dict) {
  const filePath = path.join('./src/i18n', `${lang}.ts`);
  let content = fs.readFileSync(filePath, 'utf8');
  const lastBraceIdx = content.lastIndexOf('};');
  const addedLines = [];
  for (const [k, v] of Object.entries(dict)) {
    const regex = new RegExp(`['"]${k.replace(/\./g, '\\.')}['"]\\s*:`);
    if (!regex.test(content)) {
      const safeVal = v.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      addedLines.push(`  '${k}': '${safeVal}',`);
    }
  }
  if (addedLines.length > 0) {
    const before = content.slice(0, lastBraceIdx).trimEnd();
    const after = content.slice(lastBraceIdx);
    fs.writeFileSync(filePath, `${before}\n\n  // Remaining navigation/explorer/tools/network keys\n${addedLines.join('\n')}\n${after}`, 'utf8');
    console.log(`Updated ${lang}.ts with ${addedLines.length} keys.`);
  }
}

update('pa', pa);
update('bn', bn);
update('mr', mr);
update('gu', gu);
update('ta', ta);
update('te', te);
update('kn', kn);
update('ml', ml);

console.log('18 keys successfully applied!');
