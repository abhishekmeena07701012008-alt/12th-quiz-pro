// 12th Quiz Pro - मास्टर डेटाबेस (सभी 22 विषयों के 5-5 प्रश्न)
var quizDataMaster = [
  // ==========================================
  // 1. इतिहास (History)
  // ==========================================
  { subject: "history", lang: "hi", question: "हड़प्पा सभ्यता की खोज किस वर्ष हुई थी?", options: ["1921", "1922", "1935", "1947"], correct: 0 },
  { subject: "history", lang: "hi", question: "भारतीय संविधान का जनक किसे कहा जाता है?", options: ["डॉ. बी.आर. अम्बेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "डॉ. राजेन्द्र प्रसाद"], correct: 0 },
  { subject: "history", lang: "hi", question: "अशोक के अभिलेखों को सर्वप्रथम किसने पढ़ा?", options: ["जेम्स प्रिंसेप", "कनिंघम", "जॉन मार्शल", "व्हीलर"], correct: 0 },
  { subject: "history", lang: "hi", question: "महात्मा गांधी ने असहयोग आंदोलन किस वर्ष शुरू किया था?", options: ["1920", "1922", "1930", "1942"], correct: 0 },
  { subject: "history", lang: "hi", question: "विजयनगर साम्राज्य की स्थापना किसने की थी?", options: ["हरिहर और बुक्का", "कृष्णदेव राय", "देवराय प्रथम", "सदाशिव राय"], correct: 0 },
  { subject: "history", lang: "en", question: "In which year was the Harappan civilization discovered?", options: ["1921", "1922", "1935", "1947"], correct: 0 },
  { subject: "history", lang: "en", question: "Who is known as the Father of the Indian Constitution?", options: ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Dr. Rajendra Prasad"], correct: 0 },
  { subject: "history", lang: "en", question: "Who first deciphered Ashoka's inscriptions?", options: ["James Prinsep", "Cunningham", "John Marshall", "Wheeler"], correct: 0 },
  { subject: "history", lang: "en", question: "In which year did Mahatma Gandhi start the Non-Cooperation Movement?", options: ["1920", "1922", "1930", "1942"], correct: 0 },
  { subject: "history", lang: "en", question: "Who founded the Vijayanagara Empire?", options: ["Harihara and Bukka", "Krishnadeva Raya", "Devaraya I", "Sadashiva Raya"], correct: 0 },

  // ==========================================
  // 2. राजनीति विज्ञान (Political Science)
  // ==========================================
  { subject: "political", lang: "hi", question: "भारत में प्रथम आम चुनाव कब हुए थे?", options: ["1951-52", "1947", "1950", "1955"], correct: 0 },
  { subject: "political", lang: "hi", question: "नीति आयोग का अध्यक्ष कौन होता है?", options: ["प्रधानमंत्री", "राष्ट्रपति", "वित्त मंत्री", "उपराष्ट्रपति"], correct: 0 },
  { subject: "political", lang: "hi", question: "सोवियत संघ का विघटन किस वर्ष हुआ था?", options: ["1991", "1989", "1993", "1985"], correct: 0 },
  { subject: "political", lang: "hi", question: "क्युबा मिसाइल संकट किस वर्ष हुआ था?", options: ["1962", "1960", "1965", "1970"], correct: 0 },
  { subject: "political", lang: "hi", question: "संपूर्ण क्रांति का नारा किसने दिया था?", options: ["जयप्रकाश नारायण", "राममनोहर लोहिया", "इन्दिरा गांधी", "मोरारजी देसाई"], correct: 0 },
  { subject: "political", lang: "en", question: "When were the first general elections held in India?", options: ["1951-52", "1947", "1950", "1955"], correct: 0 },
  { subject: "political", lang: "en", question: "Who is the ex-officio Chairman of NITI Aayog?", options: ["Prime Minister", "President", "Finance Minister", "Vice President"], correct: 0 },
  { subject: "political", lang: "en", question: "In which year did the Soviet Union disintegrate?", options: ["1991", "1989", "1993", "1985"], correct: 0 },
  { subject: "political", lang: "en", question: "In which year did the Cuban Missile Crisis occur?", options: ["1962", "1960", "1965", "1970"], correct: 0 },
  { subject: "political", lang: "en", question: "Who gave the slogan of 'Total Revolution'?", options: ["Jayaprakash Narayan", "Ram Manohar Lohia", "Indira Gandhi", "Morarji Desai"], correct: 0 },

  // ==========================================
  // 3. भूगोल (Geography)
  // ==========================================
  { subject: "geography", lang: "hi", question: "मानव भूगोल का जनक किसे कहा जाता है?", options: ["फ्रेडरिक रैटजेल", "ब्लांश", "हंटिंगटन", "इरेटोस्थनीज"], correct: 0 },
  { subject: "geography", lang: "hi", question: "भारत में सर्वाधिक जनघनत्व वाला राज्य कौन सा है?", options: ["बिहार", "पश्चिम बंगाल", "उत्तर प्रदेश", "केरल"], correct: 0 },
  { subject: "geography", lang: "hi", question: "निम्नलिखित में से कौन सी एक रोपण फसल है?", options: ["कॉफी", "गेहूं", "चावल", "चना"], correct: 0 },
  { subject: "geography", lang: "hi", question: "बोकारो इस्पात संयंत्र किस राज्य में स्थित है?", options: ["झारखंड", "छत्तीसगढ़", "ओडिशा", "पश्चिम Bengal"], correct: 0 },
  { subject: "geography", lang: "hi", question: "भारत की सबसे लंबी नदी कौन सी है?", options: ["गंगा", "गोदावरी", "ब्रह्मपुत्र", "सिंधु"], correct: 0 },
  { subject: "geography", lang: "en", question: "Who is known as the father of Human Geography?", options: ["Friedrich Ratzel", "Vidal de la Blache", "Huntington", "Eratosthenes"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which state has the highest population density in India?", options: ["Bihar", "West Bengal", "Uttar Pradesh", "Kerala"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which of the following is a plantation crop?", options: ["Coffee", "Wheat", "Rice", "Gram"], correct: 0 },
  { subject: "geography", lang: "en", question: "In which state is the Bokaro Steel Plant located?", options: ["Jharkhand", "Chhattisgarh", "Odisha", "West Bengal"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which is the longest river in India?", options: ["Ganga", "Godavari", "Brahmaputra", "Indus"], correct: 0 },

  // ==========================================
  // 4. अर्थशास्त्र (Economics)
  // ==========================================
  { subject: "economics", lang: "hi", question: "व्यष्टि अर्थशास्त्र में किसका अध्ययन किया जाता है?", options: ["व्यक्तिगत इकाई", "राष्ट्रीय आय", "कुल रोजगार", "सामान्य कीमत स्तर"], correct: 0 },
  { subject: "economics", lang: "hi", question: "भारत का केंद्रीय बैंक कौन सा है?", options: ["भारतीय रिजर्व बैंक", "भारतीय स्टेट बैंक", "पंजाब नेशनल बैंक", "बैंक ऑफ बड़ौदा"], correct: 0 },
  { subject: "economics", lang: "hi", question: "बजट की अवधि क्या होती है?", options: ["वार्षिक", "द्विवार्षिक", "पंचवर्षीय", "त्रैमासिक"], correct: 0 },
  { subject: "economics", lang: "hi", question: "मांग का नियम क्या दर्शाता है?", options: ["कीमत और मांग में विपरीत संबंध", "कीमत और मांग में सीधा संबंध", "आय और मांग में संबंध", "कोई नहीं"], correct: 0 },
  { subject: "economics", lang: "hi", question: "जीएसटी (GST) भारत में कब लागू किया गया?", options: ["1 जुलाई 2017", "1 अप्रैल 2016", "1 जनवरी 2018", "15 अगस्त 2017"], correct: 0 },
  { subject: "economics", lang: "en", question: "What is studied in Microeconomics?", options: ["Individual unit", "National Income", "Total employment", "General price level"], correct: 0 },
  { subject: "economics", lang: "en", question: "Which is the central bank of India?", options: ["Reserve Bank of India", "State Bank of India", "Punjab National Bank", "Bank of Baroda"], correct: 0 },
  { subject: "economics", lang: "en", question: "What is the duration of a Government Budget?", options: ["Annual", "Bi-annual", "Five years", "Quarterly"], correct: 0 },
  { subject: "economics", lang: "en", question: "What does the Law of Demand show?", options: ["Inverse relationship between price and demand", "Direct relationship between price and demand", "Income and demand relationship", "None of these"], correct: 0 },
  { subject: "economics", lang: "en", question: "When was GST implemented in India?", options: ["1 July 2017", "1 April 2016", "1 January 2018", "15 August 2017"], correct: 0 },

  // ==========================================
  // 5. समाजशास्त्र (Sociology)
  // ==========================================
  { subject: "sociology", lang: "hi", question: "समाजशास्त्र के जनक कौन हैं?", options: ["अगस्त कॉम्टे", "कार्ल मार्क्स", "इमाइल दुर्खीम", "मैक्स वेबर"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "जाति एक बंद वर्ग है, यह किसने कहा?", options: ["मजूमदार एवं मदान", "जी. एस. घुरिये", "एम. एन. श्रीनिवास", "इरावती कर्वे"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "भारत में 'सत्यशोधक समाज' की स्थापना किसने की?", options: ["ज्योतिराव फुले", "राजा राममोहन राय", "स्वामी दयानन्द", "डॉ. अम्बेडकर"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "पूंजीवादी समाज की मुख्य विशेषता क्या है?", options: ["निजी स्वामित्व", "समानता", "सहयोग", "राज्य का नियंत्रण"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "हरित क्रांति का सर्वाधिक प्रभाव किस फसल पर पड़ा?", options: ["गेहूं", "चावल", "मक्का", "दालें"], correct: 0 },
  { subject: "sociology", lang: "en", question: "Who is the father of Sociology?", options: ["Auguste Comte", "Karl Marx", "Emile Durkheim", "Max Weber"], correct: 0 },
  { subject: "sociology", lang: "en", question: "Who said 'Caste is a closed class'?", options: ["Majumdar and Madan", "G. S. Ghurye", "M. N. Srinivas", "Irawati Karve"], correct: 0 },
  { subject: "sociology", lang: "en", question: "Who founded the 'Satyashodhak Samaj' in India?", options: ["Jyotirao Phule", "Raja Ram Mohan Roy", "Swami Dayanand", "Dr. Ambedkar"], correct: 0 },
  { subject: "sociology", lang: "en", question: "What is the main characteristic of a capitalist society?", options: ["Private ownership", "Equality", "Cooperation", "State control"], correct: 0 },
  { subject: "sociology", lang: "en", question: "Which crop was most impacted by the Green Revolution?", options: ["Wheat", "Rice", "Maize", "Pulses"], correct: 0 },

  // ==========================================
  // 6. मनोविज्ञान (Psychology)
  // ==========================================
  { subject: "psychology", lang: "hi", question: "बुद्धि का एक-कारक सिद्धांत किसने दिया?", options: ["बिने", "स्पियरमैन", "थर्स्टन", "गार्डनर"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "व्यक्तित्व का मनोविश्लेषणात्मक सिद्धांत किसने प्रतिपादित किया?", options: ["सिगमंड फ्रायड", "आलपोर्ट", "कार्ल रोजर्स", "मैस्लो"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "तनाव का सामना करने के लिए सीखी गई तकनीक क्या कहलाती है?", options: ["कोपिंग स्ट्रेटेजी", "रक्षा तंत्र", "समायोजन", "कुंठा"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "मानसिक आयु (MA) की अवधारणा किसने विकसित की?", options: ["अल्फ्रेड बिने", "स्टर्न", "टरमन", "वेक्सलर"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "टी.ए.टी. (TAT) व्यक्तित्व परीक्षण किसके द्वारा बनाया गया?", options: ["मरे एवं मॉर्गन", "रोर्शा", "कैटल", "ऑलपोर्ट"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Who gave the Uni-factor theory of intelligence?", options: ["Binet", "Spearman", "Thurstone", "Gardner"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Who propounded the Psychoanalytic theory of personality?", options: ["Sigmund Freud", "Allport", "Carl Rogers", "Maslow"], correct: 0 },
  { subject: "psychology", lang: "en", question: "What is the learned technique to face stress called?", options: ["Coping Strategy", "Defense Mechanism", "Adjustment", "Frustration"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Who developed the concept of Mental Age (MA)?", options: ["Alfred Binet", "Stern", "Terman", "Wechsler"], correct: 0 },
  { subject: "psychology", lang: "en", question: "The T.A.T. personality test was developed by whom?", options: ["Murray and Morgan", "Rorschach", "Cattell", "Allport"], correct: 0 },

  // ==========================================
  // 7. गृह विज्ञान (Home Science)
  // ==========================================
  { subject: "home_science", lang: "hi", question: "शिशु के लिए सर्वोत्तम आहार कौन सा है?", options: ["मां का दूध", "गाय का दूध", "डिब्बे का दूध", "शहद"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "विटामिन 'सी' की कमी से कौन सा रोग होता है?", options: ["स्कर्वी", "रिकेट्स", "रतौंधी", "बेरी-बेरी"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "ओ.आर.एस. (ORS) का घोल किस बीमारी में दिया जाता है?", options: ["डायरिया / दस्त", "बुखार", "खांसी", "चेचक"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "कौन सा तंतु प्राकृतिक तंतु है?", options: ["सूती (कॉटन)", "नायलॉन", "पॉलिएस्टर", "रेयॉन"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "कार्य सरलीकरण का क्या अर्थ है?", options: ["समय और ऊर्जा बचाना", "काम छोड़ना", "धीमे काम करना", "कठिन काम करना"], correct: 0 },
  { subject: "home_science", lang: "en", question: "Which is the best food for an infant?", options: ["Mother's milk", "Cow's milk", "Formula milk", "Honey"], correct: 0 },
  { subject: "home_science", lang: "en", question: "Which disease is caused by deficiency of Vitamin C?", options: ["Scurvy", "Rickets", "Night Blindness", "Beriberi"], correct: 0 },
  { subject: "home_science", lang: "en", question: "ORS solution is given in which disease?", options: ["Diarrhea", "Fever", "Cough", "Smallpox"], correct: 0 },
  { subject: "home_science", lang: "en", question: "Which fiber is a natural fiber?", options: ["Cotton", "Nylon", "Polyester", "Rayon"], correct: 0 },
  { subject: "home_science", lang: "en", question: "What does work simplification mean?", options: ["Saving time and energy", "Leaving work", "Working slowly", "Doing hard work"], correct: 0 },

  // ==========================================
  // 8. दर्शनशास्त्र (Philosophy)
  // ==========================================
  { subject: "philosophy", lang: "hi", question: "जैन धर्म के प्रथम तीर्थंकर कौन थे?", options: ["ऋषभदेव", "महावीर स्वामी", "पार्वनाथ", "नेमिनाथ"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "बौद्ध दर्शन के अनुसार 'आर्य सत्यों' की संख्या कितनी है?", options: ["चार", "तीन", "आठ", "दो"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "गीता का मुख्य उपदेश क्या है?", options: ["निष्काम कर्मयोग", "ज्ञानयोग", "भक्तियोग", "संन्यासयोग"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "अद्वैत वेदांत के मुख्य प्रतिपादक कौन थे?", options: ["शंकराचार्य", "रामानुजाचार्य", "मध्वाचार्य", "निम्बार्काचार्य"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "न्याय दर्शन के प्रवर्तक कौन हैं?", options: ["महर्षि गौतम", "महर्षि कणाद", "महर्षि कपिल", "महर्षि पतंजलि"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "Who was the first Tirthankara of Jainism?", options: ["Rishabhdev", "Mahavira", "Parshvanath", "Neminath"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "According to Buddhism, what is the number of 'Noble Truths'?", options: ["Four", "Three", "Eight", "Two"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "What is the main teaching of the Bhagavad Gita?", options: ["Nishkama Karma Yoga", "Jnana Yoga", "Bhakti Yoga", "Sannyasa Yoga"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "Who was the main exponent of Advaita Vedanta?", options: ["Shankaracharya", "Ramanujacharya", "Madhvacharya", "Nimbarkacharya"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "Who is the founder of Nyaya Philosophy?", options: ["Maharishi Gautama", "Maharishi Kanada", "Maharishi Kapila", "Maharishi Patanjali"], correct: 0 },

  // ==========================================
  // 9. कानूनी अध्ययन (Legal Studies)
  // ==========================================
  { subject: "legal_studies", lang: "hi", question: "भारतीय संविधान का कौन सा अनुच्छेद समानता के अधिकार से संबंधित है?", options: ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "भारत के सर्वोच्च न्यायालय के मुख्य न्यायाधीश की नियुक्ति कौन करता है?", options: ["राष्ट्रपति", "प्रधानमंत्री", "संसद", "कानून मंत्री"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "एफआईआर (FIR) का पूर्ण रूप क्या है?", options: ["फर्स्ट इनफार्मेशन रिपोर्ट", "फर्स्ट इन्वेस्टिगेशन रिपोर्ट", "फर्स्ट इन्क्वायरी रिपोर्ट", "फाइनल इनफार्मेशन रिपोर्ट"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "अंतर्राष्ट्रीय न्यायालय (ICJ) का मुख्यालय कहाँ स्थित है?", options: ["द हेग", "जिनेवा", "न्यू यॉर्क", "पेरिस"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "भारत में कानूनी साक्षरता दिवस कब मनाया जाता है?", options: ["9 नवंबर", "26 जनवरी", "15 अगस्त", "10 दिसंबर"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "Which Article of the Indian Constitution relates to the Right to Equality?", options: ["Article 14", "Article 19", "Article 21", "Article 32"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "Who appoints the Chief Justice of the Supreme Court of India?", options: ["President", "Prime Minister", "Parliament", "Law Minister"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "What is the full form of F.I.R.?", options: ["First Information Report", "First Investigation Report", "First Inquiry Report", "Final Information Report"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "Where is the headquarters of the International Court of Justice located?", options: ["The Hague", "Geneva", "New York", "Paris"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "When is Legal Literacy Day celebrated in India?", options: ["9 November", "26 January", "15 August", "10 December"], correct: 0 },

  // ==========================================
  // 10. हिंदी साहित्य (Hindi Literature)
  // ==========================================
  { subject: "hindi_lit", lang: "hi", question: "हिंदी साहित्य के इतिहास का प्रथम लेखक कौन है?", options: ["गार्सा द तासी", "आचार्य रामचंद्र शुक्ल", "शिवसिंह सेंगर", "मिश्र बंधु"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "'कबीरदास' किस काव्यधारा के कवि हैं?", options: ["ज्ञानाश्रयी शाखा", "प्रेमाश्रयी शाखा", "कृष्णभक्ति शाखा", "रामभक्ति शाखा"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "'कामायनी' महाकाव्य के रचयिता कौन हैं?", options: ["जयशंकर प्रसाद", "सूर्यकांत त्रिपाठी निराला", "सुमित्रानंदन पंत", "महादेवी वर्मा"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "हिंदी का प्रथम उपन्यास किसे माना जाता है?", options: ["परीक्षा गुरु", "गोदान", "तितली", "चंद्रकांता"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "किसे 'आधुनिक युग की मीरा' कहा जाता है?", options: ["महादेवी वर्मा", "सुभद्रा कुमारी चौहान", "मन्नू भंडारी", "कृष्णा सोबती"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Who is considered the first historian of Hindi Literature?", options: ["Garcin de Tassy", "Acharya Ramchandra Shukla", "Shivsingh Sengar", "Mishra Bandhu"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Kabirdas belongs to which branch of poetry?", options: ["Gyanashrayi Branch", "Premashrayi Branch", "Krishna Bhakti Branch", "Rama Bhakti Branch"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Who is the author of the epic poem 'Kamayani'?", options: ["Jaishankar Prasad", "Suryakant Tripathi Nirala", "Sumitranandan Pant", "Mahadevi Varma"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Which is considered the first novel of Hindi?", options: ["Pariksha Guru", "Godan", "Titli", "Chandrakanta"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Who is called 'Meera of the Modern Age'?", options: ["Mahadevi Varma", "Subhadra Kumari Chauhan", "Mannu Bhandari", "Krishna Sobti"], correct: 0 },

  // ==========================================
  // 11. अंग्रेजी साहित्य (English Literature)
  // ==========================================
  { subject: "english_lit", lang: "hi", question: "'फादर ऑफ इंग्लिश पोएट्री' किसे कहा जाता है?", options: ["जॉफ्री चौसर", "विलियम शेक्सपियर", "जॉन मिल्टन", "विलियम वर्डसवर्थ"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "शेक्सपियर का प्रसिद्ध नाटक 'हैमलेट' क्या है?", options: ["त्रासदी (Tragedy)", "कॉमेडी (Comedy)", "इतिहास", "रोमांस"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "रोमांटिक आंदोलन की शुरुआत किस रचना से मानी जाती है?", options: ["लिरिकल बैलड्स", "प्रील्यूड", "ओड टू द वेस्ट विंड", "कुबला खान"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "'प्राइड एंड प्रेजुडिस' उपन्यास किसने लिखा?", options: ["जेन ऑस्टेन", "शर्लोट ब्रोंटे", "जॉर्ज एलियट", "वर्जिशिया वुल्फ"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "अंग्रेजी साहित्य में 'सॉनेट' में कितनी पंक्तियाँ होती हैं?", options: ["14 पंक्तियाँ", "12 पंक्तियाँ", "10 पंक्तियाँ", "16 पंक्तियाँ"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who is known as the 'Father of English Poetry'?", options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "William Wordsworth"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Shakespeare's famous play 'Hamlet' belongs to which genre?", options: ["Tragedy", "Comedy", "History", "Romance"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "The Romantic Movement is said to begin with which work?", options: ["Lyrical Ballads", "The Prelude", "Ode to the West Wind", "Kubla Khan"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who wrote the novel 'Pride and Prejudice'?", options: ["Jane Austen", "Charlotte Bronte", "George Eliot", "Virginia Woolf"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "How many lines are there in a standard Shakespearean Sonnet?", options: ["14 lines", "12 lines", "10 lines", "16 lines"], correct: 0 },

  // ==========================================
  // 12. लेखाकर्म (Accountancy)
  // ==========================================
  { subject: "accountancy", lang: "hi", question: "पुस्तपालन का मुख्य उद्देश्य क्या होता है?", options: ["वित्तीय लेनदेनों का रिकॉर्ड रखना", "लाभ की गणना", "कर निर्धारण", "ऑडिट करना"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "मशीनरी खरीदने पर कौन सा खाता डेबिट किया जाएगा?", options: ["मशीनरी खाता", "रोकड़ खाता", "क्रय खाता", "बैंक खाता"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "साझेदारी विलेख (Partnership Deed) के अभाव में लाभ का विभाजन कैसे होता है?", options: ["बराबर-बराबर", "पूंजी के अनुपात में", "समय के अनुपात में", "वरिष्ठता के आधार पर"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "ख्याति (Goodwill) किस प्रकार की संपत्ति है?", options: ["अमूर्त संपत्ति", "मूर्त संपत्ति", "चालू संपत्ति", "कृत्रिम संपत्ति"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "कंपनी के वास्तविक स्वामी कौन होते हैं?", options: ["समता अंशधारी (Equity Shareholders)", "ऋणपत्रधारी", "निदेशक मंडल", "प्रबंधक"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "What is the main objective of Bookkeeping?", options: ["Recording financial transactions", "Calculating profit", "Tax assessment", "Auditing"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "Which account will be debited on purchase of machinery?", options: ["Machinery Account", "Cash Account", "Purchase Account", "Bank Account"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "In the absence of a Partnership Deed, how is profit shared?", options: ["Equally", "In Capital Ratio", "In Time Ratio", "Based on seniority"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "What type of asset is Goodwill?", options: ["Intangible Asset", "Tangible Asset", "Current Asset", "Fictitious Asset"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "Who are the real owners of a joint stock company?", options: ["Equity Shareholders", "Debenture holders", "Board of Directors", "Managers"], correct: 0 },

  // ==========================================
  // 13. व्यावसायिक अध्ययन (Business Studies)
  // ==========================================
  { subject: "business", lang: "hi", question: "प्रबंध (Management) का पहला कार्य कौन सा है?", options: ["नियोजन (Planning)", "संगठन", "नियंत्रण", "निर्देशन"], correct: 0 },
  { subject: "business", lang: "hi", question: "वैज्ञानिक प्रबंध के जनक कौन माने जाते हैं?", options: ["एफ. डब्ल्यू. टेलर", "हेनरी फेयोल", "एल्टन मेयो", "पीटर ड्रकर"], correct: 0 },
  { subject: "business", lang: "hi", question: "हेनरी फेयोल द्वारा प्रबंध के कितने सिद्धांत दिए गए हैं?", options: ["14 सिद्धांत", "10 सिद्धांत", "12 सिद्धांत", "16 सिद्धांत"], correct: 0 },
  { subject: "business", lang: "hi", question: "भारत में मुद्रा बाजार का नियंत्रण कौन करता है?", options: ["आरबीआई (RBI)", "सेबी (SEBI)", "एसबीआई", "वित्त मंत्रालय"], correct: 0 },
  { subject: "business", lang: "hi", question: "उपभोक्ता संरक्षण अधिनियम भारत में कब लागू हुआ?", options: ["1986", "2019", "1992", "2005"], correct: 0 },
  { subject: "business", lang: "en", question: "Which is the first function of Management?", options: ["Planning", "Organizing", "Controlling", "Directing"], correct: 0 },
  { subject: "business", lang: "en", question: "Who is considered the Father of Scientific Management?", options: ["F.W. Taylor", "Henri Fayol", "Elton Mayo", "Peter Drucker"], correct: 0 },
  { subject: "business", lang: "en", question: "How many principles of management were given by Henri Fayol?", options: ["14 Principles", "10 Principles", "12 Principles", "16 Principles"], correct: 0 },
  { subject: "business", lang: "en", question: "Who regulates the Money Market in India?", options: ["RBI", "SEBI", "SBI", "Ministry of Finance"], correct: 0 },
  { subject: "business", lang: "en", question: "In which year was the original Consumer Protection Act passed?", options: ["1986", "2019", "1992", "2005"], correct: 0 },

  // ==========================================
  // 14. उद्यमशीलता (Entrepreneurship)
  // ==========================================
  { subject: "entrepreneurship", lang: "hi", question: "उद्यमशीलता की मुख्य विशेषता क्या है?", options: ["जोखिम उठाना", "केवल लाभ कमाना", "आराम करना", "नौकरी ढूंढना"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "नवाचार (Innovation) का सिद्धांत किसने दिया था?", options: ["शुम्पीटर", "मार्शल", "टेलर", "ड्रकर"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "व्यावसायिक योजना (Business Plan) का पहला चरण क्या है?", options: ["विचार की पहचान", "पूंजी जुटाना", "मार्केटिंग", "कर्मचारी रखना"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "आईडीबीआई (IDBI) बैंक की स्थापना किस वर्ष हुई थी?", options: ["1964", "1955", "1982", "1990"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "एक सफल उद्यमी में कौन सा गुण होना आवश्यक है?", options: ["दूरदर्शिता और नेतृत्व", "अहंकार", "आलस्य", "अस्थिरता"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What is the primary characteristic of entrepreneurship?", options: ["Risk-bearing", "Only earning profit", "Resting", "Job-seeking"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "Who gave the Innovation Theory of entrepreneurship?", options: ["Schumpeter", "Marshall", "Taylor", "Drucker"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What is the first step in formulating a Business Plan?", options: ["Identification of an Idea", "Raising Capital", "Marketing", "Hiring Staff"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "In which year was IDBI established?", options: ["1964", "1955", "1982", "1990"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "Which quality is essential for a successful entrepreneur?", options: ["Vision and Leadership", "Ego", "Laziness", "Instability"], correct: 0 },

  // ==========================================
  // 15. भौतिकी (Physics)
  // ==========================================
  { subject: "physics", lang: "hi", question: "विद्युत आवेश का एस.आई. (SI) मात्रक क्या है?", options: ["कूलॉम", "एम्पियर", "वोल्ट", "ओम"], correct: 0 },
  { subject: "physics", lang: "hi", question: "लेंस की क्षमता का मात्रक क्या होता है?", options: ["डायोप्टर", "मीटर", "वाट", "जूल"], correct: 0 },
  { subject: "physics", lang: "hi", question: "प्रकाश वर्ष किसका मात्रक है?", options: ["दूरी का", "समय का", "तीव्रता का", "द्रव्यमान का"], correct: 0 },
  { subject: "physics", lang: "hi", question: "अर्धचालक (Semiconductor) का प्रतिरोध ताप बढ़ने पर क्या होता है?", options: ["घटता है", "बढ़ता है", "अपरिवर्तित रहता है", "शून्य हो जाता保持"], correct: 0 },
  { subject: "physics", lang: "hi", question: "गाउस का नियम किससे संबंधित है?", options: ["विद्युत फ्लक्स", "चुंबकीय बल", "धारा नियम", "प्रतिरोध"], correct: 0 },
  { subject: "physics", lang: "en", question: "What is the SI unit of electric charge?", options: ["Coulomb", "Ampere", "Volt", "Ohm"], correct: 0 },
  { subject: "physics", lang: "en", question: "What is the unit of power of a lens?", options: ["Diopter", "Meter", "Watt", "Joule"], correct: 0 },
  { subject: "physics", lang: "en", question: "Light year is a unit of what?", options: ["Distance", "Time", "Intensity", "Mass"], correct: 0 },
  { subject: "physics", lang: "en", question: "What happens to the resistance of a semiconductor on increasing temperature?", options: ["Decreases", "Increases", "Remains unchanged", "Becomes zero"], correct: 0 },
  { subject: "physics", lang: "en", question: "Gauss's Law is related to which of the following?", options: ["Electric Flux", "Magnetic Force", "Current Law", "Resistance"], correct: 0 },

  // ==========================================
  // 16. रसायन विज्ञान (Chemistry)
  // ==========================================
  { subject: "chemistry", lang: "hi", question: "शुद्ध जल का पीएच (pH) मान कितना होता है?", options: ["7", "6", "8", "0"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "आधुनिक आवर्त सारणी किसने तैयार की थी?", options: ["मोसले", "मेंडलीव", "डोबेराइनर", "न्यूलैंड्स"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "लोहे पर जंग लगना किस प्रकार की अभिक्रिया है?", options: ["ऑक्सीकरण (Oxidation)", "अपचयन", "उदासीनीकरण", "विस्थापन"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "हंसाने वाली गैस (Laughing Gas) का रासायनिक नाम क्या है?", options: ["नाइट्रस ऑक्साइड", "नाइट्रिक ऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "अमोनिया"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "हीरा और ग्रेफाइट कार्बन के क्या हैं?", options: ["अपररूप (Allotropes)", "समस्थानिक", "समावयवी", "समभारिक"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "What is the pH value of pure water?", options: ["7", "6", "8", "0"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Who formulated the Modern Periodic Table?", options: ["Moseley", "Mendeleev", "Dobereiner", "Newlands"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Rusting of iron is which type of reaction?", options: ["Oxidation", "Reduction", "Neutralization", "Displacement"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "What is the chemical name of Laughing Gas?", options: ["Nitrous Oxide", "Nitric Oxide", "Nitrogen Dioxide", "Ammonia"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Diamond and Graphite are carbon's what?", options: ["Allotropes", "Isotopes", "Isomers", "Isobars"], correct: 0 },

  // ==========================================
  // 17. जीव विज्ञान (Biology)
  // ==========================================
  { subject: "biology", lang: "hi", question: "कोशिका का 'पावरहाउस' किसे कहा जाता है?", options: ["माइटोकॉन्ड्रिया", "लाइसोसोम", "राइबोसोम", "गॉल्जीकाय"], correct: 0 },
  { subject: "biology", lang: "hi", question: "मानव शरीर में कुल कितनी हड्डियां होती हैं?", options: ["206", "208", "300", "210"], correct: 0 },
  { subject: "biology", lang: "hi", question: "अनुवांशिकी का जनक (Father of Genetics) किसे कहा जाता है?", options: ["ग्रेगर मेंडल", "डार्विन", "लैमार्क", "अरस्तू"], correct: 0 },
  { subject: "biology", lang: "hi", question: "रक्त का लाल रंग किसके कारण होता है?", options: ["हीमोग्लोबिन", "प्लाज्मा", "प्लेटलेट्स", "श्वेत रक्त कणिकाएं"], correct: 0 },
  { subject: "biology", lang: "hi", question: "पेनिसिलिन की खोज किसने की थी?", options: ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "एडवर्ड जेनर"], correct: 0 },
  { subject: "biology", lang: "en", question: "Which organelle is called the 'Powerhouse' of the cell?", options: ["Mitochondria", "Lysosome", "Ribosome", "Golgi apparatus"], correct: 0 },
  { subject: "biology", lang: "en", question: "How many bones are there in an adult human body?", options: ["206", "208", "300", "210"], correct: 0 },
  { subject: "biology", lang: "en", question: "Who is known as the Father of Genetics?", options: ["Gregor Mendel", "Darwin", "Lamarck", "Aristotle"], correct: 0 },
  { subject: "biology", lang: "en", question: "The red color of blood is due to what?", options: ["Hemoglobin", "Plasma", "Platelets", "WBC"], correct: 0 },
  { subject: "biology", lang: "en", question: "Who discovered Penicillin?", options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Edward Jenner"], correct: 0 },

  // ==========================================
  // 18. बायोटेक्नोलॉजी (Biotechnology)
  // ==========================================
  { subject: "biotech", lang: "hi", question: "डीएनए (DNA) के धागे काटने के लिए किस एंजाइम का उपयोग किया जाता है?", options: ["प्रतिबंधन एंडोन्यूक्लिएज (Restriction Enzyme)", "लाइगेज", "पॉलीमरेज", "आरएनए प्राइमेस"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "पीसीआर (PCR) तकनीक की खोज किसने की थी?", options: ["कैरी मुलिस", "वाटसन और क्रिक", "कोहलर", "दक्षिणी"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "प्रथम क्लोन स्तनधारी जीव का क्या नाम था?", options: ["डॉली भेड़", "पॉली", "मोली", "चार्ली"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "बीटी (Bt) कपास में 'Bt' का क्या अर्थ है?", options: ["बैसिलस थुरिंगिएंसिस", "बायोटेक कपास", "बोटेनिकल टेक्सटाइल", "बैक्टीरियल टॉक्सिन"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "जेल इलेक्ट्रोफोरेसिस का उपयोग क्यों किया जाता है?", options: ["डीएनए खंडों को अलग करने के लिए", "डीएनए बनाने के लिए", "कोशिका नष्ट करने के लिए", "कोई नहीं"], correct: 0 },
  { subject: "biotech", lang: "en", question: "Which enzyme is used as molecular scissors to cut DNA strands?", options: ["Restriction Endonuclease", "Ligase", "Polymerase", "RNA Primase"], correct: 0 },
  { subject: "biotech", lang: "en", question: "Who discovered the PCR technique?", options: ["Kary Mullis", "Watson and Crick", "Kohler", "Southern"], correct: 0 },
  { subject: "biotech", lang: "en", question: "What was the name of the first cloned mammal?", options: ["Dolly sheep", "Polly", "Molly", "Charlie"], correct: 0 },
  { subject: "biotech", lang: "en", question: "What does 'Bt' stand for in Bt Cotton?", options: ["Bacillus thuringiensis", "Biotech Cotton", "Botanical Textile", "Bacterial Toxin"], correct: 0 },
  { subject: "biotech", lang: "en", question: "Gel electrophoresis is used for what purpose?", options: ["Separation of DNA fragments", "Synthesis of DNA", "Cell destruction", "None of these"], correct: 0 },

  // ==========================================
  // 19. गणित (Mathematics)
  // ==========================================
  { subject: "maths", lang: "hi", question: "sin²x + cos²x का मान कितना होता है?", options: ["1", "0", "-1", "2"], correct: 0 },
  { subject: "maths", lang: "hi", question: "एक रिक्त समुच्चय (Empty Set) की कार्डिनलिटी क्या होती है?", options: ["0", "1", "अनंत", "परिभाषित नहीं"], correct: 0 },
  { subject: "maths", lang: "hi", question: "d/dx (e^x) का अवकलन क्या होगा?", options: ["e^x", "xe^(x-1)", "1", "0"], correct: 0 },
  { subject: "maths", lang: "hi", question: "वृत्त के क्षेत्रफल का सूत्र क्या है?", options: ["πr²", "2πr", "πd", "4πr²"], correct: 0 },
  { subject: "maths", lang: "hi", question: "यदि दो रेखाएं समानांतर हैं, तो उनके ढाल (Slopes) में क्या संबंध होता है?", options: ["दोनों बराबर होते हैं", "दोनों का गुणनफल -1 होता है", "एक दूसरे का आधा होता है", "शून्य होता है"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the value of sin²x + cos²x?", options: ["1", "0", "-1", "2"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the cardinality of an Empty Set?", options: ["0", "1", "Infinite", "Not defined"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the derivative d/dx (e^x)?", options: ["e^x", "xe^(x-1)", "1", "0"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the formula for the area of a circle?", options: ["πr²", "2πr", "πd", "4πr²"], correct: 0 },
  { subject: "maths", lang: "en", question: "If two lines are parallel, what is the relation between their slopes?", options: ["Slopes are equal", "Product of slopes is -1", "One is half of the other", "Slopes are zero"], correct: 0 },

  // ==========================================
  // 20. एप्लाइड मैथ (Applied Mathematics)
  // ==========================================
  { subject: "applied_math", lang: "hi", question: "सांख्यिकी में 'माध्यिका' (Median) क्या दर्शाती है?", options: ["मध्य मूल्य", "औसत मूल्य", "सर्वाधिक बार आने वाला मूल्य", "कुल योग"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "साधारण ब्याज का सूत्र क्या है?", options: ["(मूलधन × दर × समय) / 100", "मूलधन + ब्याज", "मूलधन × दर", "कोई नहीं"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "कालानुक्रमिक श्रेणी (Time Series) का मुख्य घटक क्या है?", options: ["दीर्घकालीन प्रवृत्ति (Trend)", "यादृच्छिक उतार-चढ़ाव", "त्रैमासिक उतार-चढ़ाव", "स्थिरता"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "अनुकूलन समस्या (Linear Programming) का उद्देश्य क्या होता है?", options: ["लाभ को अधिकतम या लागत को न्यूनतम करना", "रेखांकन करना", "ग्राफ बनाना", "केवल गुणा करना"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "किसी निश्चित घटना की प्रायिकता (Probability) कितनी होती है?", options: ["1", "0", "0.5", "अनंत"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What does 'Median' represent in statistics?", options: ["Middlemost value", "Average value", "Most frequent value", "Total sum"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What is the formula for Simple Interest?", options: ["(P × R × T) / 100", "P + I", "P × R", "None of these"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What is a major component of a Time Series?", options: ["Secular Trend", "Random fluctuation", "Quarterly change", "Stability"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What is the main goal of Linear Programming Problems?", options: ["Maximize profit or minimize cost", "Plotting lines", "Making graphs", "Simple multiplication"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What is the probability of a certain event?", options: ["1", "0", "0.5", "Infinite"], correct: 0 },

  // ==========================================
  // 21. कंप्यूटर विज्ञान (Computer Science)
  // ==========================================
  { subject: "computer_science", lang: "hi", question: "जावास्क्रिप्ट किस प्रकार की भाषा है?", options: ["क्लाइंट और सर्वर साइड स्क्रिप्टिंग", "केवल मशीन कोड", "केवल असेंबली", "लो लेवल लैंग्वेज"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "डीबीएमएस (DBMS) का पूर्ण रूप क्या है?", options: ["डेटाबेस मैनेजमेंट सिस्टम", "डेटाबेस मॉनिटरिंग सिस्टम", "डेटाबेस मेंटेनेंस सिस्टम", "डेटाबेस मॉडल सिस्टम"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "एसक्यूएल (SQL) में डेटा को टेबल से हटाने के लिए किस कमांड का उपयोग किया जाता है?", options: ["DROP या DELETE", "REMOVE", "CLEAR", "EXIT"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "नेटवर्किंग में 'IP' का पूर्ण रूप क्या है?", options: ["इंटरनेट प्रोटोकॉल", "इंट्रानेट प्रोटोकॉल", "इंटरनेट पेज", "इन्फो प्रोटोकॉल"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "पायथन (Python) फ़ाइल का एक्सटेंशन क्या होता है?", options: [".py", ".pyc", ".python", ".txt"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "What type of language is JavaScript?", options: ["Client and Server-side scripting", "Machine code only", "Assembly only", "Low-level language"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "What is the full form of DBMS?", options: ["Database Management System", "Database Monitoring System", "Database Maintenance System", "Database Model System"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "Which command is used to remove a table/data in SQL?", options: ["DROP or DELETE", "REMOVE", "CLEAR", "EXIT"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "What does 'IP' stand for in networking?", options: ["Internet Protocol", "Intranet Protocol", "Internet Page", "Info Protocol"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "What is the extension of a Python file?", options: [".py", ".pyc", ".python", ".txt"], correct: 0 },
    // ==========================================
  // 1. इतिहास (History) - SET 2
  // ==========================================
  { subject: "history", lang: "hi", question: "जैन धर्म के 24वें तीर्थंकर कौन थे?", options: ["महावीर स्वामी", "ऋषभदेव", "पार्श्वनाथ", "नेमिनाथ"], correct: 0 },
  { subject: "history", lang: "hi", question: "पानीपत का प्रथम युद्ध कब लड़ा गया था?", options: ["1526", "1556", "1761", "1191"], correct: 0 },
  { subject: "history", lang: "hi", question: "कोलकाता में एशियाटिक सोसाइटी की स्थापना किसने की थी?", options: ["विलियम जोन्स", "कनिंघम", "वारन हेस्टिंग्स", "राजा राममोहन राय"], correct: 0 },
  { subject: "history", lang: "hi", question: "इब्नबतूता किस देश का यात्री था?", options: ["मोरक्को", "मिस्र", "तुर्की", "ईरान"], correct: 0 },
  { subject: "history", lang: "hi", question: "भारत छोड़ो आंदोलन कब शुरू हुआ था?", options: ["August 1942", "March 1942", "January 1930", "October 1920"], correct: 0 },
  { subject: "history", lang: "en", question: "Who was the 24th Tirthankara of Jainism?", options: ["Mahavira", "Rishabhdev", "Parshvanath", "Neminath"], correct: 0 },
  { subject: "history", lang: "en", question: "When was the First Battle of Panipat fought?", options: ["1526", "1556", "1761", "1191"], correct: 0 },
  { subject: "history", lang: "en", question: "Who founded the Asiatic Society in Kolkata?", options: ["William Jones", "Cunningham", "Warren Hastings", "Raja Ram Mohan Roy"], correct: 0 },
  { subject: "history", lang: "en", question: "Ibnu Batuta was a traveler from which country?", options: ["Morocco", "Egypt", "Turkey", "Iran"], correct: 0 },
  { subject: "history", lang: "en", question: "When did the Quit India Movement start?", options: ["August 1942", "March 1942", "January 1930", "October 1920"], correct: 0 },

  // ==========================================
  // 2. राजनीति विज्ञान (Political Science) - SET 2
  // ==========================================
  { subject: "political", lang: "hi", question: "भारतीय संविधान सभा के अध्यक्ष कौन थे?", options: ["डॉ. राजेन्द्र प्रसाद", "डॉ. बी.आर. अम्बेडकर", "जवाहरलाल नेहरू", "सच्चिदानन्द सिन्हा"], correct: 0 },
  { subject: "political", lang: "hi", question: "सार्क (SAARC) की स्थापना किस वर्ष हुई थी?", options: ["1985", "1990", "1975", "1995"], correct: 0 },
  { subject: "political", lang: "hi", question: "शीत युद्ध का अंत कब हुआ था?", options: ["1991", "1989", "1995", "1990"], correct: 0 },
  { subject: "political", lang: "hi", question: "राज्य पुनर्गठन आयोग की स्थापना कब हुई थी?", options: ["1953", "1956", "1950", "1952"], correct: 0 },
  { subject: "political", lang: "hi", question: "भारत में किस प्रकार की दलीय व्यवस्था है?", options: ["बहुदलीय", "एकदलीय", "द्विदलीय", "कोई नहीं"], correct: 0 },
  { subject: "political", lang: "en", question: "Who was the President of the Constituent Assembly of India?", options: ["Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sachchidananda Sinha"], correct: 0 },
  { subject: "political", lang: "en", question: "In which year was SAARC established?", options: ["1985", "1990", "1975", "1995"], correct: 0 },
  { subject: "political", lang: "en", question: "When did the Cold War end?", options: ["1991", "1989", "1995", "1990"], correct: 0 },
  { subject: "political", lang: "en", question: "When was the States Reorganisation Commission established?", options: ["1953", "1956", "1950", "1952"], correct: 0 },
  { subject: "political", lang: "en", question: "What type of party system exists in India?", options: ["Multi-party", "Single-party", "Bi-party", "None of these"], correct: 0 },

  // ==========================================
  // 3. भूगोल (Geography) - SET 2
  // ==========================================
  { subject: "geography", lang: "hi", question: "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है?", options: ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"], correct: 0 },
  { subject: "geography", lang: "hi", question: "स्वेज नहर किन दो सागरों को जोड़ती है?", options: ["भूमध्य सागर और लाल सागर", "लाल सागर और अरब सागर", "भूमध्य सागर और अटलांटिक", "कोई नहीं"], correct: 0 },
  { subject: "geography", lang: "hi", question: "विश्व में सर्वाधिक जनसंख्या वाला देश कौन सा है?", options: ["भारत", "चीन", "अमेरिका", "इंडोनेशिया"], correct: 0 },
  { subject: "geography", lang: "hi", question: "झरिया कोयला क्षेत्र भारत के किस राज्य में स्थित है?", options: ["झारखंड", "ओडिशा", "छत्तीसगढ़", "पश्चिम बंगाल"], correct: 0 },
  { subject: "geography", lang: "hi", question: "रबी की फसल किस ऋतु में बोई जाती है?", options: ["शीत ऋतु", "ग्रीष्म ऋतु", "वर्षा ऋतु", "शरद ऋतु"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which is the largest state in India by area?", options: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which two seas are connected by the Suez Canal?", options: ["Mediterranean Sea and Red Sea", "Red Sea and Arabian Sea", "Mediterranean Sea and Atlantic", "None"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which is the most populous country in the world?", options: ["India", "China", "USA", "Indonesia"], correct: 0 },
  { subject: "geography", lang: "en", question: "In which Indian state is the Jharia coalfield located?", options: ["Jharkhand", "Odisha", "Chhattisgarh", "West Bengal"], correct: 0 },
  { subject: "geography", lang: "en", question: "In which season are Rabi crops sown?", options: ["Winter season", "Summer season", "Rainy season", "Autumn season"], correct: 0 },

  // ==========================================
  // 4. अर्थशास्त्र (Economics) - SET 2
  // ==========================================
  { subject: "economics", lang: "hi", question: "समष्टि अर्थशास्त्र (Macroeconomics) का मुख्य विषय क्या है?", options: ["राष्ट्रीय आय", "फर्म का संतुलन", "उपभोक्ता व्यवहार", "मांग का नियम"], correct: 0 },
  { subject: "economics", lang: "hi", question: "मुद्रा स्फीति (Inflation) से किसे लाभ होता है?", options: ["ऋणी (Debtor)", "ऋणदाता", "पेंशनभोगी", "बचतकर्ता"], correct: 0 },
  { subject: "economics", lang: "hi", question: "भारत में योजना आयोग को बदलकर क्या बनाया गया?", options: ["नीति आयोग", "वित्त आयोग", "चुनाव आयोग", "राष्ट्रीय विकास परिषद"], correct: 0 },
  { subject: "economics", lang: "hi", question: "पूर्ण प्रतियोगिता बाजार में वस्तु की कीमत कौन निर्धारित करता है?", options: ["उद्योग (मांग और पूर्ति)", "फर्म", "सरकार", "उपभोक्ता"], correct: 0 },
  { subject: "economics", lang: "hi", question: "मानव विकास सूचकांक (HDI) कौन जारी करता है?", options: ["UNDP", "IMF", "World Bank", "WTO"], correct: 0 },
  { subject: "economics", lang: "en", question: "What is the main subject matter of Macroeconomics?", options: ["National Income", "Equilibrium of a firm", "Consumer behavior", "Law of demand"], correct: 0 },
  { subject: "economics", lang: "en", question: "Who benefits from Inflation?", options: ["Debtor", "Creditor", "Pensioner", "Saver"], correct: 0 },
  { subject: "economics", lang: "en", question: "What was the Planning Commission of India replaced with?", options: ["NITI Aayog", "Finance Commission", "Election Commission", "National Development Council"], correct: 0 },
  { subject: "economics", lang: "en", question: "Who determines the price of a commodity in a Perfect Competition market?", options: ["Industry (Demand and Supply)", "Firm", "Government", "Consumer"], correct: 0 },
  { subject: "economics", lang: "en", question: "Who releases the Human Development Index (HDI)?", options: ["UNDP", "IMF", "World Bank", "WTO"], correct: 0 },

  // ==========================================
  // 5. समाजशास्त्र (Sociology) - SET 2
  // ==========================================
  { subject: "sociology", lang: "hi", question: "भारत में जनजातीय समाज की मुख्य विशेषता क्या है?", options: ["सामान्य संस्कृति", "लिखित कानून", "औद्योगिक अर्थव्यवस्था", "उच्च साक्षरता"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "अस्पृश्यता अपराध अधिनियम किस वर्ष पारित हुआ था?", options: ["1955", "1950", "1961", "1976"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "'कास्ट इन मॉडर्न इंडिया' पुस्तक किसने लिखी है?", options: ["एम. एन. श्रीनिवास", "जी. एस. घुरिये", "योगेन्द्र सिंह", "एस. सी. दुबे"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "पश्चिमीकरण (Westernization) की अवधारणा किसने दी?", options: ["एम. एन. श्रीनिवास", "योगेन्द्र सिंह", "दामोदर धर्मानंद", "ए. आर. देसाई"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "भारत में पहली बार जनगणना कब हुई थी?", options: ["1872", "1881", "1901", "1951"], correct: 0 },
  { subject: "sociology", lang: "en", question: "What is the main feature of tribal society in India?", options: ["Common Culture", "Written Law", "Industrial Economy", "High Literacy"], correct: 0 },
  { subject: "sociology", lang: "en", question: "In which year was the Untouchability Offences Act passed?", options: ["1955", "1950", "1961", "1976"], correct: 0 },
  { subject: "sociology", lang: "en", question: "Who wrote the book 'Caste in Modern India'?", options: ["M. N. Srinivas", "G. S. Ghurye", "Yogendra Singh", "S. C. Dube"], correct: 0 },
  { subject: "sociology", lang: "en", question: "Who gave the concept of Westernization?", options: ["M. N. Srinivas", "Yogendra Singh", "D. D. Kosambi", "A. R. Desai"], correct: 0 },
  { subject: "sociology", lang: "en", question: "When was the first census conducted in India?", options: ["1872", "1881", "1901", "1951"], correct: 0 },

  // ==========================================
  // 6. मनोविज्ञान (Psychology) - SET 2
  // ==========================================
  { subject: "psychology", lang: "hi", question: "बुद्धि लब्धि (IQ) की गणना का सही सूत्र क्या है?", options: ["(MA / CA) × 100", "(CA / MA) × 100", "MA + CA", "MA × CA"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "अंतर्मुखी और बहिर्मुखी व्यक्तित्व का वर्गीकरण किसने किया?", options: ["कार्ल जुंग (Jung)", "फ्रायड", "आलपोर्ट", "कैटल"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "सृजनात्मकता (Creativity) का संबंध मुख्य रूप से किससे है?", options: ["अपसारी चिंतन (Divergent)", "अभिसारी चिंतन", "याद रखना", "अनुकरण"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "सामूहिक अचेतन (Collective Unconscious) की अवधारणा किसने दी?", options: ["कार्ल जुंग", "अ德勒", "फ्रायड", "होर्नी"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "डाउन सिंड्रोम किस प्रकार का विकार है?", options: ["गुणसूत्रीय विकार", "मानसिक तनाव", "व्यवहार विकार", "कोई नहीं"], correct: 0 },
  { subject: "psychology", lang: "en", question: "What is the correct formula to calculate Intelligence Quotient (IQ)?", options: ["(MA / CA) × 100", "(CA / MA) × 100", "MA + CA", "MA × CA"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Who classified personality into Introvert and Extrovert?", options: ["Carl Jung", "Freud", "Allport", "Cattell"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Creativity is mainly related to which type of thinking?", options: ["Divergent Thinking", "Convergent Thinking", "Memorization", "Imitation"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Who gave the concept of Collective Unconscious?", options: ["Carl Jung", "Adler", "Freud", "Horney"], correct: 0 },
  { subject: "psychology", lang: "en", question: "What type of disorder is Down's Syndrome?", options: ["Chromosomal Disorder", "Mental Stress", "Behavioral Disorder", "None of these"], correct: 0 },

  // ==========================================
  // 7. गृह विज्ञान (Home Science) - SET 2
  // ==========================================
  { subject: "home_science", lang: "hi", question: "मानव शरीर में जल का प्रतिशत कितना होता है?", options: ["60% - 70%", "40% - 50%", "80% - 90%", "30%"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "एगमार्क (AGMARK) किन पदार्थों की गुणवत्ता दर्शाता है?", options: ["कृषि उत्पाद", "सोना", "कपड़े", "इलेक्ट्रॉनिक्स"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "दूध को जीवाणुरहित करने की प्रक्रिया क्या कहलाती है?", options: ["पाश्चुरीकरण", "उबालना", "जमाना", "छानना"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "गर्भावस्था की कुल अवधि सामान्यतः कितने दिनों की होती है?", options: ["280 दिन", "250 दिन", "300 दिन", "365 दिन"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "दाग-धब्बे छुड़ाने के लिए नींबू के रस का उपयोग किस रूप में होता है?", options: ["ब्लीचिंग एजेंट", "क्षारीय एजेंट", "चिकनाई विलायक", "कोई नहीं"], correct: 0 },
  { subject: "home_science", lang: "en", question: "What is the percentage of water in the human body?", options: ["60% - 70%", "40% - 50%", "80% - 90%", "30%"], correct: 0 },
  { subject: "home_science", lang: "en", question: "AGMARK indicates the quality of which goods?", options: ["Agricultural Products", "Gold", "Clothes", "Electronics"], correct: 0 },
  { subject: "home_science", lang: "en", question: "What is the process of sterilizing milk called?", options: ["Pasteurization", "Boiling", "Freezing", "Filtering"], correct: 0 },
  { subject: "home_science", lang: "en", question: "What is the normal duration of pregnancy in days?", options: ["280 days", "250 days", "300 days", "365 days"], correct: 0 },
  { subject: "home_science", lang: "en", question: "Lemon juice is used to remove stains as what?", options: ["Bleaching Agent", "Alkaline Agent", "Grease Solvent", "None of these"], correct: 0 },

  // ==========================================
  // 8. दर्शनशास्त्र (Philosophy) - SET 2
  // ==========================================
  { subject: "philosophy", lang: "hi", question: "चारवाक दर्शन किस प्रकार का दर्शन है?", options: ["भौतिकवादी (Materialist)", "आध्यात्मिक", "आस्तिक", "मीमांसक"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "सांख्य दर्शन के प्रवर्तक कौन हैं?", options: ["महर्षि कपिल", "महर्षि पतंजलि", "महर्षि गौतम", "महर्षि कणाद"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "बौद्ध धर्म के प्रवर्तक कौन थे?", options: ["महात्मा बुद्ध", "महावीर स्वामी", "ऋषभदेव", "गुरु नानक"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "भारतीय दर्शन में आस्तिक और नास्तिक का भेद किस आधार पर है?", options: ["वेदों की प्रामाणिकता", "ईश्वर में विश्वास", "पुनर्जन्म", "मोक्ष"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "योग दर्शन का मुख्य ग्रंथ कौन सा है?", options: ["योगसूत्र", "सांख्यकारिका", "न्यायसूत्र", "ब्रह्मसूत्र"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "What type of philosophy is Charvaka school?", options: ["Materialist", "Spiritual", "Orthodox", "Mimamsak"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "Who is the founder of Samkhya Philosophy?", options: ["Maharishi Kapila", "Maharishi Patanjali", "Maharishi Gautama", "Maharishi Kanada"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "Who was the founder of Buddhism?", options: ["Mahatma Buddha", "Mahavira", "Rishabhdev", "Guru Nanak"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "On what basis are Orthodox and Heterodox schools divided in Indian Philosophy?", options: ["Authority of Vedas", "Belief in God", "Rebirth", "Moksha"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "Which is the main text of Yoga Philosophy?", options: ["Yoga Sutra", "Samkhya Karika", "Nyaya Sutra", "Brahma Sutra"], correct: 0 },

  // ==========================================
  // 9. कानूनी अध्ययन (Legal Studies) - SET 2
  // ==========================================
  { subject: "legal_studies", lang: "hi", question: "भारतीय संविधान का संरक्षक कौन है?", options: ["भारत का सर्वोच्च न्यायालय", "संसद", "राष्ट्रपति", "प्रधानमंत्री"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "लोक अदालत का मुख्य उद्देश्य क्या होता है?", options: ["आपसी समझौते से विवाद सुलझाना", "कठोर सजा देना", "जुर्माना लगाना", "केस को लटकाना"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "सूचना का अधिकार (RTI) अधिनियम किस वर्ष लागू हुआ?", options: ["2005", "2010", "2000", "1992"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "संविधान के किस अनुच्छेद के तहत आपातकाल लगाया जाता है?", options: ["अनुच्छेद 352, 356, 360", "अनुच्छेद 12, 14, 19", "अनुच्छेद 324", "अनुच्छेद 370"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "भारत में मतदान करने की न्यूनतम आयु क्या है?", options: ["18 वर्ष", "21 वर्ष", "25 वर्ष", "16 वर्ष"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "Who is the custodian of the Indian Constitution?", options: ["Supreme Court of India", "Parliament", "President", "Prime Minister"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "What is the main objective of Lok Adalat?", options: ["Amicable settlement of disputes", "Giving harsh punishment", "Imposing fines", "Delaying cases"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "In which year did the Right to Information (RTI) Act come into force?", options: ["2005", "2010", "2000", "1992"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "Under which Articles can emergency be declared in India?", options: ["Articles 352, 356, 360", "Articles 12, 14, 19", "Article 324", "Article 370"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "What is the minimum voting age in India?", options: ["18 years", "21 years", "25 years", "16 years"], correct: 0 },

  // ==========================================
  // 10. हिंदी साहित्य (Hindi Literature) - SET 2
  // ==========================================
  { subject: "hindi_lit", lang: "hi", question: "'गोदान' उपन्यास के लेखक कौन हैं?", options: ["मुंशी प्रेमचंद", "जयशंकर प्रसाद", "फणीश्वरनाथ रेणु", "अज्ञेय"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "रामचंद्र शुक्ल ने हिंदी साहित्य के इतिहास को कितने भागों में बांटा?", options: ["चार भाग", "तीन भाग", "पांच भाग", "दो भाग"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "कवि 'बिहारी' किस काल के कवि हैं?", options: ["रीतिकाल", "भक्तिकाल", "आदिकाल", "आधुनिक काल"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "मैथिलीशरण गुप्त को 'राष्ट्रकवि' की उपाधि किसने दी?", options: ["महात्मा गांधी", "रवीन्द्रनाथ टैगोर", "रामचंद्र शुक्ल", "नेहरू"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "'मधुशाला' किसकी प्रसिद्ध रचना है?", options: ["हरिवंश राय बच्चन", "महादेवी वर्मा", "रामधारी सिंह दिनकर", "निराला"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Who is the author of the novel 'Godan'?", options: ["Munshi Premchand", "Jaishankar Prasad", "Phanishwar Nath Renu", "Agyeya"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "In how many periods did Ramchandra Shukla divide Hindi Lit history?", options: ["Four periods", "Three periods", "Five periods", "Two periods"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Poet 'Bihari' belongs to which period?", options: ["Riti Kaal", "Bhakti Kaal", "Aadi Kaal", "Adhunik Kaal"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Who gave the title of 'Rashtrakavi' to Maithili Sharan Gupt?", options: ["Mahatma Gandhi", "Rabindranath Tagore", "Ramchandra Shukla", "Nehru"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Whose famous composition is 'Madhushala'?", options: ["Harivansh Rai Bachchan", "Mahadevi Varma", "Ramdhari Singh Dinkar", "Nirala"], correct: 0 },

  // ==========================================
  // 11. अंग्रेजी साहित्य (English Literature) - SET 2
  // ==========================================
  { subject: "english_lit", lang: "hi", question: "शेक्सपियर के नाटकों की कुल संख्या कितनी मानी जाती है?", options: ["37 नाटके", "35 नाटके", "40 नाटके", "30 नाटके"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "'पैराडाइज लॉस्ट' महाकाव्य किसने लिखा है?", options: ["जॉन मिल्टन", "विलियम शेक्सपियर", "अलेक्जेंडर पोप", "जॉन कीट्स"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "किसे 'फादर ऑफ इंग्लिश नॉवेल' कहा जाता है?", options: ["हेनरी फील्डिंग", "डैनियल डिफ़ो", "सामुएल रिचर्डसन", "चार्ल्स डिकेंस"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "'द वेस्ट लैंड' कविता के रचयिता कौन हैं?", options: ["टी. एस. एलियट", "डब्ल्यू. बी. यीट्स", "डब्लू. एच. ऑडेन", "रॉबर्ट फ्रॉस्ट"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "'गाइड' उपन्यास के भारतीय लेखक कौन हैं?", options: ["आर. के. नारायण", "राजा राव", "मुल्क राज आनंद", "खुशवंत सिंह"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "What is the total number of plays attributed to Shakespeare?", options: ["37 plays", "35 plays", "40 plays", "30 plays"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who wrote the epic poem 'Paradise Lost'?", options: ["John Milton", "William Shakespeare", "Alexander Pope", "John Keats"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who is known as the 'Father of the English Novel'?", options: ["Henry Fielding", "Daniel Defoe", "Samuel Richardson", "Charles Dickens"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who wrote the famous modern poem 'The Waste Land'?", options: ["T.S. Eliot", "W.B. Yeats", "W.H. Auden", "Robert Frost"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who is the Indian author of the novel 'The Guide'?", options: ["R.K. Narayan", "Raja Rao", "Mulk Raj Anand", "Khushwant Singh"], correct: 0 },

  // ==========================================
  // 12. लेखाकर्म (Accountancy) - SET 2
  // ==========================================
  { subject: "accountancy", lang: "hi", question: "लेखांकन समीकरण (Accounting Equation) क्या दर्शाता है?", options: ["संपत्तियां = दायित्व + पूंजी", "संपत्तियां = दायित्व - पूंजी", "पूंजी = संपत्तियां + दायित्व", "कोई नहीं"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "तुलन पत्र (Balance Sheet) क्या है?", options: ["एक विवरण (Statement)", "एक खाता", "एक बही", "कोई नहीं"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "ह्रास (Depreciation) किस प्रकार का व्यय है?", options: ["गैर-नकद व्यय (Non-cash)", "नकद व्यय", "असाधारण व्यय", "कोई नहीं"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "कच्चा माल (Raw Material) किस प्रकार का स्टॉक है?", options: ["चालू संपत्ति", "स्थिर संपत्ति", "दायित्व", "अमूर्त संपत्ति"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "बैंक समाधान विवरण (Bank Reconciliation) कौन तैयार करता है?", options: ["खाताधारक / व्यापारी", "बैंक", "ऑडिटर", "सरकार"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "What does the basic Accounting Equation state?", options: ["Assets = Liabilities + Capital", "Assets = Liabilities - Capital", "Capital = Assets + Liabilities", "None of these"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "What is a Balance Sheet?", options: ["A Statement", "An Account", "A Ledger", "None of these"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "What type of expense is Depreciation?", options: ["Non-cash expense", "Cash expense", "Extraordinary expense", "None of these"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "Raw Material stock comes under which category?", options: ["Current Asset", "Fixed Asset", "Liability", "Intangible Asset"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "Who prepares the Bank Reconciliation Statement (BRS)?", options: ["Account holder / Trader", "Bank", "Auditor", "Government"], correct: 0 },

  // ==========================================
  // 13. व्यावसायिक अध्ययन (Business Studies) - SET 2
  // ==========================================
  { subject: "business", lang: "hi", question: "प्रबंध किस प्रकार का मानवीय प्रयास है?", options: ["सर्वव्यापी (Universal)", "केवल व्यापारिक", "सीमित", "स्थानीय"], correct: 0 },
  { subject: "business", lang: "hi", question: "भर्ती (Recruitment) का आंतरिक स्रोत कौन सा है?", options: ["पदोन्नति (Promotion)", "विज्ञापन", "कैंपस इंटरव्यू", "रोजगार कार्यालय"], correct: 0 },
  { subject: "business", lang: "hi", question: "प्रबंध का सार (Essence of Management) किसे कहा जाता है?", options: ["समन्वय (Coordination)", "नियोजन", "नियंत्रण", "संगठन"], correct: 0 },
  { subject: "business", lang: "hi", question: "सेबी (SEBI) की स्थापना किस वर्ष हुई थी?", options: ["1988 (1992 Act)", "1980", "1995", "2000"], correct: 0 },
  { subject: "business", lang: "hi", question: "संदेशवाहन (Communication) में बाधाओं को क्या कहा जाता है?", options: ["शोर (Noise)", "फीडबैक", "चैनल", "डिकोडिंग"], correct: 0 },
  { subject: "business", lang: "en", question: "Management is what type of human effort?", options: ["Universal", "Business only", "Limited", "Local"], correct: 0 },
  { subject: "business", lang: "en", question: "Which is an internal source of Recruitment?", options: ["Promotion", "Advertisement", "Campus Interview", "Employment Exchange"], correct: 0 },
  { subject: "business", lang: "en", question: "What is called the 'Essence of Management'?", options: ["Coordination", "Planning", "Controlling", "Organizing"], correct: 0 },
  { subject: "business", lang: "en", question: "In which year was SEBI established?", options: ["1988", "1980", "1995", "2000"], correct: 0 },
  { subject: "business", lang: "en", question: "What are barriers in communication collectively called?", options: ["Noise", "Feedback", "Channel", "Decoding"], correct: 0 },

  // ==========================================
  // 14. उद्यमशीलता (Entrepreneurship) - SET 2
  // ==========================================
  { subject: "entrepreneurship", lang: "hi", question: "उद्यमी क्या सृजित करता है?", options: ["रोजगार के अवसर", "बेरोजगारी", "आर्थिक संकट", "मोनोपॉली"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "बाजार मूल्यांकन (Market Assessment) में क्या जरूरी है?", options: ["मांग की प्रकृति", "पूंजी का आकार", "कर्मचारियों की संख्या", "सप्लाई"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "कार्यशील पूंजी (Working Capital) का क्या अर्थ है?", options: ["चालू संपत्ति - चालू दायित्व", "स्थिर संपत्ति", "कुल पूंजी", "बैंक लोन"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "परियोजना प्रतिवेदन (Project Report) क्या है?", options: ["एक रूपरेखा (Blue Print)", "केवल एक बिल", "एक रसीद", "कोई नहीं"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "उद्यमिता विकास कार्यक्रम (EDP) का उद्देश्य क्या प्रदान करना है?", options: ["रोजगार और कौशल", "लोन", "मुफ्त जमीन", "प्रमाण पत्र"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What does an entrepreneur create?", options: ["Employment opportunities", "Unemployment", "Economic crisis", "Monopoly"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What is essential in Market Assessment?", options: ["Nature of demand", "Size of capital", "Number of employees", "Supply"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What does Working Capital mean?", options: ["Current Assets - Current Liabilities", "Fixed Assets", "Total Capital", "Bank Loan"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What is a Project Report?", options: ["A Blueprint", "Just a bill", "A receipt", "None of these"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What is the main objective of an EDP?", options: ["Employment and skill development", "Loan allocation", "Free land", "Certificates"], correct: 0 },

  // ==========================================
  // 15. भौतिकी (Physics) - SET 2
  // ==========================================
  { subject: "physics", lang: "hi", question: "निर्वात में प्रकाश की चाल कितनी होती है?", options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "1.5 × 10⁸ m/s"], correct: 0 },
  { subject: "physics", lang: "hi", question: "स्वप्रेरकत्व (Self-Inductance) का मात्रक क्या है?", options: ["हेनरी", "फैराडे", "वेबर", "टेसला"], correct: 0 },
  { subject: "physics", lang: "hi", question: "एक स्वस्थ मानव आंख के लिए स्पष्ट दृष्टि की न्यूनतम दूरी क्या है?", options: ["25 सेमी", "50 सेमी", "अनंत", "10 सेमी"], correct: 0 },
  { subject: "physics", lang: "hi", question: "ट्रांसफॉर्मर किस सिद्धांत पर कार्य करता है?", options: ["अन्योन्य प्रेरण (Mutual Induction)", "स्वप्रेरण", "भंवर धाराएं", "जूल प्रभाव"], correct: 0 },
  { subject: "physics", lang: "hi", question: "फोटोइलेक्ट्रिक प्रभाव की व्याख्या के लिए किसे नोबेल पुरस्कार मिला था?", options: ["अल्बर्ट आइंस्टीन", "न्यूटन", "मैक्स प्लैंक", "बोह्र"], correct: 0 },
  { subject: "physics", lang: "en", question: "What is the speed of light in vacuum?", options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "1.5 × 10⁸ m/s"], correct: 0 },
  { subject: "physics", lang: "en", question: "What is the unit of Self-Inductance?", options: ["Henry", "Faraday", "Weber", "Tesla"], correct: 0 },
  { subject: "physics", lang: "en", question: "What is the minimum distance of distinct vision for a normal human eye?", options: ["25 cm", "50 cm", "Infinity", "10 cm"], correct: 0 },
  { subject: "physics", lang: "en", question: "On which principle does a transformer work?", options: ["Mutual Induction", "Self-Induction", "Eddy Currents", "Joule Effect"], correct: 0 },
  { subject: "physics", lang: "en", question: "Who received the Nobel Prize for explaining the Photoelectric Effect?", options: ["Albert Einstein", "Newton", "Max Planck", "Bohr"], correct: 0 },

  // ==========================================
  // 16. रसायन विज्ञान (Chemistry) - SET 2
  // ==========================================
  { subject: "chemistry", lang: "hi", question: "सबसे हल्की धातु कौन सी है?", options: ["लिथियम", "सोडियम", "हाइड्रोजन", "हीलियम"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "साधारण नमक का रासायनिक सूत्र क्या है?", options: ["NaCl", "HCl", "NaOH", "KOH"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "चिप्स के पैकेट में कौन सी गैस भरी जाती है?", options: ["नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "परमाणु के नाभिक (Nucleus) में कौन से कण होते हैं?", options: ["प्रोटॉन और न्यूट्रॉन", "प्रोटॉन और इलेक्ट्रॉन", "केवल न्यूट्रॉन", "इलेक्ट्रॉन"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "सिरके (Vinegar) में कौन सा अम्ल पाया जाता है?", options: ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Which is the lightest metal?", options: ["Lithium", "Sodium", "Hydrogen", "Helium"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "What is the chemical formula of common salt?", options: ["NaCl", "HCl", "NaOH", "KOH"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Which gas is filled inside potato chips packets?", options: ["Nitrogen", "Oxygen", "Hydrogen", "Carbon Dioxide"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Which particles are present inside the atomic nucleus?", options: ["Protons and Neutrons", "Protons and Electrons", "Neutrons only", "Electrons only"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Which acid is found in Vinegar?", options: ["Acetic Acid", "Citric Acid", "Lactic Acid", "Formic Acid"], correct: 0 },

  // ==========================================
  // 17. जीव विज्ञान (Biology) - SET 2
  // ==========================================
  { subject: "biology", lang: "hi", question: "मानव हृदय में कितने कक्ष (Chambers) होते हैं?", options: ["चार", "दो", "तीन", "एक"], correct: 0 },
  { subject: "biology", lang: "hi", question: "इंसुलिन हार्मोन की कमी से कौन सा रोग होता है?", options: ["मधुमेह (Diabetes)", "घेंघा", "एनीमिया", "रिकेट्स"], correct: 0 },
  { subject: "biology", lang: "hi", question: "प्रकाश संश्लेषण में पौधे कौन सी गैस ग्रहण करते हैं?", options: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"], correct: 0 },
  { subject: "biology", lang: "hi", question: "सर्वदाता रक्त समूह (Universal Donor) कौन सा है?", options: ["O", "AB", "A", "B"], correct: 0 },
  { subject: "biology", lang: "hi", question: "पादप कोशिका भित्ति किसकी बनी होती है?", options: ["सेल्यूलोज़", "काइटिन", "प्रोटीन", "लिपिड"], correct: 0 },
  { subject: "biology", lang: "en", question: "How many chambers are there in the human heart?", options: ["Four", "Two", "Three", "One"], correct: 0 },
  { subject: "biology", lang: "en", question: "Deficiency of insulin hormone causes which disease?", options: ["Diabetes", "Goitre", "Anemia", "Rickets"], correct: 0 },
  { subject: "biology", lang: "en", question: "Which gas do plants absorb during photosynthesis?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 0 },
  { subject: "biology", lang: "en", question: "Which blood group is known as the Universal Donor?", options: ["O", "AB", "A", "B"], correct: 0 },
  { subject: "biology", lang: "en", question: "The plant cell wall is primarily composed of what?", options: ["Cellulose", "Chitin", "Protein", "Lipid"], correct: 0 },

  // ==========================================
  // 18. बायोटेक्नोलॉजी (Biotechnology) - SET 2
  // ==========================================
  { subject: "biotech", lang: "hi", question: "डीएनए (DNA) का द्विकुंडली मॉडल (Double Helix) किसने दिया था?", options: ["वाटसन और क्रिक", "मेंडल", "मॉर्गन", "पाश्चर"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "अनुवांशिक रूप से संशोधित (GM) सुनहरे चावल (Golden Rice) में कौन सा विटामिन प्रचुर होता है?", options: ["विटामिन A", "विटामिन C", "विटामिन B12", "विटामिन D"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "प्लास्मिड (Plasmid) क्या है?", options: ["जीवाणु में अतिरिक्त गुणसूत्रीय डीएनए", "एक कवक", "विषाणु का हिस्सा", "कोई नहीं"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "एलीसा (ELISA) टेस्ट किस बीमारी के निदान के लिए किया जाता है?", options: ["एड्स (AIDS)", "टाइफाइड", "मलेरिया", "कैंसर"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "जीन थेरेपी का प्राथमिक उद्देश्य क्या है?", options: ["दोषपूर्ण जीन को सही जीन से बदलना", "एंटीबायोटिक बनाना", "क्लोन बनाना", "दवाइयां बनाना"], correct: 0 },
  { subject: "biotech", lang: "en", question: "Who proposed the Double Helix model of DNA?", options: ["Watson and Crick", "Mendel", "Morgan", "Pasteur"], correct: 0 },
  { subject: "biotech", lang: "en", question: "Genetically modified Golden Rice is rich in which vitamin?", options: ["Vitamin A", "Vitamin C", "Vitamin B12", "Vitamin D"], correct: 0 },
  { subject: "biotech", lang: "en", question: "What is a Plasmid?", options: ["Extra-chromosomal DNA in bacteria", "A fungus", "Part of a virus", "None of these"], correct: 0 },
  { subject: "biotech", lang: "en", question: "ELISA test is performed for the diagnosis of which disease?", options: ["AIDS", "Typhoid", "Malaria", "Cancer"], correct: 0 },
  { subject: "biotech", lang: "en", question: "What is the primary goal of Gene Therapy?", options: ["Replacing a defective gene with a functional one", "Antibiotic production", "Cloning", "Drug manufacturing"], correct: 0 },

  // ==========================================
  // 19. गणित (Mathematics) - SET 2
  // ==========================================
  { subject: "maths", lang: "hi", question: "d/dx (sin x) का अवकलन क्या होता है?", options: ["cos x", "-cos x", "tan x", "sec²x"], correct: 0 },
  { subject: "maths", lang: "hi", question: "किन्हीं दो परस्पर अपवर्जित घटनाओं (Mutually Exclusive Events) के इंटरसेक्शन की प्रायिकता क्या होगी?", options: ["0", "1", "0.5", "निर्धारित नहीं"], correct: 0 },
  { subject: "maths", lang: "hi", question: "एक वर्ग आव्यूह (Square Matrix) का डिटरमिनेट शून्य हो तो वह क्या कहलाता है?", options: ["अव्युत्क्रमणीय आव्यूह (Singular)", "व्युत्क्रमणीय आव्यूह", "इकाई आव्यूह", "शून्य आव्यूह"], correct: 0 },
  { subject: "maths", lang: "hi", question: "∫ (1/x) dx का समाकलन क्या होगा?", options: ["log|x| + C", "x² + C", "-1/x² + C", "1"], correct: 0 },
  { subject: "maths", lang: "hi", question: "यदि दो सदिश (Vectors) परस्पर लंबवत हैं, तो उनका डॉट गुणनफल (Dot Product) क्या होगा?", options: ["0", "1", "-1", "दोनों के परिमाण का गुणनफल"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the derivative d/dx (sin x)?", options: ["cos x", "-cos x", "tan x", "sec²x"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the probability of intersection of two Mutually Exclusive events?", options: ["0", "1", "0.5", "Not defined"], correct: 0 },
  { subject: "maths", lang: "en", question: "If the determinant of a Square Matrix is zero, it is called what?", options: ["Singular Matrix", "Non-Singular Matrix", "Identity Matrix", "Zero Matrix"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the integral ∫ (1/x) dx?", options: ["log|x| + C", "x² + C", "-1/x² + C", "1"], correct: 0 },
  { subject: "maths", lang: "en", question: "If two vectors are perpendicular to each other, their Dot Product is what?", options: ["0", "1", "-1", "Product of their magnitudes"], correct: 0 },

  // ==========================================
  // 20. एप्लाइड मैथ (Applied Mathematics) - SET 2
  // ==========================================
  { subject: "applied_math", lang: "hi", question: "सांख्यिकी में कौन सा केंद्रीय प्रवृत्ति का माप चरम मानों (Extreme Values) से प्रभावित नहीं होता?", options: ["माध्यिका (Median)", "समान्तर माध्य", "गुणोत्तर माध्य", "कोई नहीं"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "चक्रवृद्धि ब्याज (Compound Interest) की गणना में मिश्रधन का सूत्र क्या है?", options: ["P(1 + R/100)^T", "P × R × T / 100", "P + I", "कोई नहीं"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "रैखिक प्रोग्रामन समस्या (LPP) में सुसंगत क्षेत्र (Feasible Region) क्या होता है?", options: ["सभी प्रतिबंधों को संतुष्ट करने वाला क्षेत्र", "केवल अधिकतम लाभ वाला क्षेत्र", "एक सीधी रेखा", "शून्य क्षेत्र"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "लागत फलन (Cost Function) का अवकलन करने पर क्या प्राप्त होता है?", options: ["सीमांत लागत (Marginal Cost)", "कुल लागत", "औसत लागत", "राजस्व फलन"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "एक निष्पक्ष पासे (Dice) को फेंकने पर सम संख्या (Even Number) आने की प्रायिकता क्या है?", options: ["1/2", "1/6", "1/3", "2/3"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "Which measure of central tendency is not affected by extreme values?", options: ["Median", "Mean", "Geometric Mean", "None of these"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What is the total amount formula in Compound Interest?", options: ["P(1 + R/100)^T", "P × R × T / 100", "P + I", "None of these"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What is a Feasible Region in a Linear Programming Problem?", options: ["Region satisfying all constraints", "Region with maximum profit only", "A straight line", "Zero region"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "Differentiating a Cost Function gives which value?", options: ["Marginal Cost", "Total Cost", "Average Cost", "Revenue Function"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What is the probability of getting an even number when throwing a fair dice?", options: ["1/2", "1/6", "1/3", "2/3"], correct: 0 },

  // ==========================================
  // 21. कंप्यूटर विज्ञान (Computer Science) - SET 2
  // ==========================================
  { subject: "computer_science", lang: "hi", question: "जावास्क्रिप्ट में किसी वेरिएबल को डिक्लेअर करने का सही कीवर्ड कौन सा है?", options: ["let / const / var", "variable", "int", "def"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "एसक्यूएल (SQL) में टेबल से विशिष्ट रिकॉर्ड चुनने के लिए किस क्लॉज का उपयोग किया जाता है?", options: ["WHERE", "GROUP BY", "ORDER BY", "SELECT"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "कंप्यूटर नेटवर्क में 'LAN' का पूर्ण रूप क्या है?", options: ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लॉन्ग एरिया नेटवर्क", "लाइन एरिया नेटवर्क"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "डेटा स्ट्रक्चर में स्टैक (Stack) किस सिद्धांत पर कार्य करता है?", options: ["LIFO (Last In First Out)", "FIFO", "Linear", "Random"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "पायथन में कमेंट (Comment) लिखने के लिए किस सिंबल का उपयोग किया जाता है?", options: ["#", "//", "/*", "<!--"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "Which keyword is valid to declare a variable in JavaScript?", options: ["let / const / var", "variable", "int", "def"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "Which clause is used to filter records in an SQL query?", options: ["WHERE", "GROUP BY", "ORDER BY", "SELECT"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "What is the full form of LAN in computer networking?", options: ["Local Area Network", "Large Area Network", "Long Area Network", "Line Area Network"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "On which principle does a Stack data structure work?", options: ["LIFO (Last In First Out)", "FIFO", "Linear", "Random"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "Which symbol is used to write a comment in Python?", options: ["#", "//", "/*", "<!--"], correct: 0 },
    // ==========================================
  // 1. इतिहास (History) - SET 3
  // ==========================================
  { subject: "history", lang: "hi", question: "गुप्त वंश का संस्थापक कौन था?", options: ["श्रीगुप्त", "चन्द्रगुप्त प्रथम", "समुद्रगुप्त", "स्कन्दगुप्त"], correct: 0 },
  { subject: "history", lang: "hi", question: "अकबरनामा की रचना किसने की थी?", options: ["अबुल फजल", "फैजी", "बदायूँनी", "बीरबल"], correct: 0 },
  { subject: "history", lang: "hi", question: "कम्पारण सत्याग्रह किस वर्ष हुआ था?", options: ["1917", "1919", "1920", "1930"], correct: 0 },
  { subject: "history", lang: "hi", question: "सिन्धु घाटी सभ्यता में विशाल स्नानागार के अवशेष कहाँ से मिले हैं?", options: ["मोहनजोदड़ो", "हड़प्पा", "लोथल", "कालीबंगा"], correct: 0 },
  { subject: "history", lang: "hi", question: "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई थी?", options: ["1885", "1895", "1905", "1920"], correct: 0 },
  { subject: "history", lang: "en", question: "Who was the founder of the Gupta Dynasty?", options: ["Srigupta", "Chandragupta I", "Samudragupta", "Skandagupta"], correct: 0 },
  { subject: "history", lang: "en", question: "Who wrote Akbarnama?", options: ["Abul Fazl", "Faizi", "Badauni", "Birbal"], correct: 0 },
  { subject: "history", lang: "en", question: "In which year did the Champaran Satyagraha take place?", options: ["1917", "1919", "1920", "1930"], correct: 0 },
  { subject: "history", lang: "en", question: "Where were the remains of the Great Bath found in the Indus Valley Civilization?", options: ["Mohenjo-daro", "Harappa", "Lothal", "Kalibangan"], correct: 0 },
  { subject: "history", lang: "en", question: "When was the Indian National Congress established?", options: ["1885", "1895", "1905", "1920"], correct: 0 },

  // ==========================================
  // 2. राजनीति विज्ञान (Political Science) - SET 3
  // ==========================================
  { subject: "political", lang: "hi", question: "भारतीय संविधान में मौलिक अधिकार किस देश से लिए गए हैं?", options: ["अमेरिका", "सोवियत संघ", "ब्रिटेन", "कनाडा"], correct: 0 },
  { subject: "political", lang: "hi", question: "यूरोपीय संघ (EU) की मुद्रा क्या है?", options: ["यूरो (Euro)", "डॉलर", "पाउंड", "रुपया"], correct: 0 },
  { subject: "political", lang: "hi", question: "भारत के प्रथम उपराष्ट्रपति कौन थे?", options: ["डॉ. एस. राधाकृष्णन", "जाकिर हुसैन", "वी. वी. गिरि", "जी. एस. पाठक"], correct: 0 },
  { subject: "political", lang: "hi", question: "संयुक्त राष्ट्र संघ (UNO) की स्थापना कब हुई थी?", options: ["24 अक्टूबर 1945", "15 अगस्त 1947", "26 जनवरी 1950", "10 दिसंबर 1948"], correct: 0 },
  { subject: "political", lang: "hi", question: "दक्षेश (SAARC) का मुख्यालय कहाँ स्थित है?", options: ["काठमांडू", "नई दिल्ली", "ढाका", "इस्लामाबाद"], correct: 0 },
  { subject: "political", lang: "en", question: "From which country are Fundamental Rights taken in the Indian Constitution?", options: ["USA", "Soviet Union", "Britain", "Canada"], correct: 0 },
  { subject: "political", lang: "en", question: "What is the currency of the European Union (EU)?", options: ["Euro", "Dollar", "Pound", "Rupee"], correct: 0 },
  { subject: "political", lang: "en", question: "Who was the first Vice President of India?", options: ["Dr. S. Radhakrishnan", "Zakir Husain", "V.V. Giri", "G.S. Pathak"], correct: 0 },
  { subject: "political", lang: "en", question: "When was the United Nations Organization (UNO) established?", options: ["24 October 1945", "15 August 1947", "26 January 1950", "10 December 1948"], correct: 0 },
  { subject: "political", lang: "en", question: "Where is the headquarters of SAARC located?", options: ["Kathmandu", "New Delhi", "Dhaka", "Islamabad"], correct: 0 },

  // ==========================================
  // 3. भूगोल (Geography) - SET 3
  // ==========================================
  { subject: "geography", lang: "hi", question: "निम्नलिखित में से कौन सा एक धात्विक खनिज है?", options: ["लोहा", "अभ्रक", "कोयला", "चूना पत्थर"], correct: 0 },
  { subject: "geography", lang: "hi", question: "विश्व का सबसे बड़ा महासागर कौन सा है?", options: ["प्रशांत महासागर", "अटलांटिक महासागर", "हिन्द महासागर", "आर्कटिक महासागर"], correct: 0 },
  { subject: "geography", lang: "hi", question: "भारत में थार मरुस्थल किस राज्य में स्थित है?", options: ["राजस्थान", "गुजरात", "पंजाब", "हरियाणा"], correct: 0 },
  { subject: "geography", lang: "hi", question: "जनसंख्या की दृष्टि से भारत का विश्व में कौन सा स्थान है?", options: ["पहला", "दूसरा", "तीसरा", "चौथा"], correct: 0 },
  { subject: "geography", lang: "hi", question: "काजीरंगा राष्ट्रीय उद्यान किस राज्य में स्थित है?", options: ["असम", "पश्चिम बंगाल", "उत्तराखंड", "मध्य प्रदेश"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which of the following is a metallic mineral?", options: ["Iron", "Mica", "Coal", "Limestone"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which is the largest ocean in the world?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], correct: 0 },
  { subject: "geography", lang: "en", question: "In which Indian state is the Thar Desert located?", options: ["Rajasthan", "Gujarat", "Punjab", "Haryana"], correct: 0 },
  { subject: "geography", lang: "en", question: "What is the rank of India in the world in terms of population?", options: ["First", "Second", "Third", "Fourth"], correct: 0 },
  { subject: "geography", lang: "en", question: "In which state is the Kaziranga National Park located?", options: ["Assam", "West Bengal", "Uttarakhand", "Madhya Pradesh"], correct: 0 },

  // ==========================================
  // 4. अर्थशास्त्र (Economics) - SET 3
  // ==========================================
  { subject: "economics", lang: "hi", question: "भारत में वित्तीय वर्ष की अवधि क्या होती है?", options: ["1 अप्रैल से 31 मार्च", "1 जनवरी से 31 दिसंबर", "1 जुलाई से 30 जून", "कोई नहीं"], correct: 0 },
  { subject: "economics", lang: "hi", question: "मांग की लोच (Elasticity of Demand) का सूत्र क्या होता है?", options: ["मांग में % परिवर्तन / कीमत में % परिवर्तन", "कीमत में % परिवर्तन / मांग में % परिवर्तन", "मांग में परिवर्तन + कीमत में परिवर्तन", "कोई नहीं"], correct: 0 },
  { subject: "economics", lang: "hi", question: "भारत में ₹1 के नोट पर किसके हस्ताक्षर होते हैं?", options: ["वित्त सचिव (Finance Secretary)", "आरबीआई गवर्नर", "वित्त मंत्री", "प्रधानमंत्री"], correct: 0 },
  { subject: "economics", lang: "hi", question: "निम्नलिखित में से कौन सा एक प्रत्यक्ष कर (Direct Tax) है?", options: ["आयकर (Income Tax)", "जीएसटी (GST)", "उत्पाद शुल्क", "सीमा शुल्क"], correct: 0 },
  { subject: "economics", lang: "hi", question: "विश्व बैंक (World Bank) का मुख्यालय कहाँ स्थित है?", options: ["वाशिंगटन डी.सी.", "न्यू यॉर्क", "जिनेवा", "पेरिस"], correct: 0 },
  { subject: "economics", lang: "en", question: "What is the duration of the Financial Year in India?", options: ["1 April to 31 March", "1 January to 31 December", "1 July to 30 June", "None of these"], correct: 0 },
  { subject: "economics", lang: "en", question: "What is the formula for Elasticity of Demand?", options: ["% Change in Demand / % Change in Price", "% Change in Price / % Change in Demand", "Change in Demand + Change in Price", "None of these"], correct: 0 },
  { subject: "economics", lang: "en", question: "Whose signature is on the ₹1 note in India?", options: ["Finance Secretary", "RBI Governor", "Finance Minister", "Prime Minister"], correct: 0 },
  { subject: "economics", lang: "en", question: "Which of the following is a Direct Tax?", options: ["Income Tax", "GST", "Excise Duty", "Customs Duty"], correct: 0 },
  { subject: "economics", lang: "en", question: "Where is the headquarters of the World Bank located?", options: ["Washington D.C.", "New York", "Geneva", "Paris"], correct: 0 },

  // ==========================================
  // 5. समाजशास्त्र (Sociology) - SET 3
  // ==========================================
  { subject: "sociology", lang: "hi", question: "संयुक्त परिवार (Joint Family) की मुख्य विशेषता क्या है?", options: ["बड़ा आकार और साझा रसोई", "छोटा आकार", "व्यक्तिवादिता", "कोई नहीं"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "भारत में 'चिपको आंदोलन' किससे संबंधित था?", options: ["पर्यावरण / वृक्ष संरक्षण", "जाति उन्मूलन", "महिला शिक्षा", "मजदूर आंदोलन"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "संस्कृतिकरण (Sanskritization) की अवधारणा किसने दी थी?", options: ["एम. एन. श्रीनिवास", "जी. एस. घुरिये", "कार्ल मार्क्स", "इमाइल दुर्खीम"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "भारत में बाल विवाह निरोधक अधिनियम किस वर्ष पारित हुआ था?", options: ["1929 (शारदा एक्ट)", "1955", "1976", "2006"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "ग्रामीण समाज की मुख्य विशेषता क्या है?", options: ["कृषि आधारित अर्थव्यवस्था", "बड़ी-बड़ी फैक्ट्रियां", "अत्यधिक जनघनत्व", "आधुनिक जीवनशैली"], correct: 0 },
  { subject: "sociology", lang: "en", question: "What is the main feature of a Joint Family?", options: ["Large size and common kitchen", "Small size", "Individualism", "None of these"], correct: 0 },
  { subject: "sociology", lang: "en", question: "The 'Chipko Movement' in India was related to what?", options: ["Environment / Tree protection", "Caste abolition", "Women's education", "Labor movement"], correct: 0 },
  { subject: "sociology", lang: "en", question: "Who gave the concept of Sanskritization?", options: ["M. N. Srinivas", "G. S. Ghurye", "Karl Marx", "Emile Durkheim"], correct: 0 },
  { subject: "sociology", lang: "en", question: "In which year was the first Child Marriage Restraint Act passed in India?", options: ["1929", "1955", "1976", "2006"], correct: 0 },
  { subject: "sociology", lang: "en", question: "What is the main characteristic of rural society?", options: ["Agriculture-based economy", "Large factories", "High population density", "Modern lifestyle"], correct: 0 },

  // ==========================================
  // 6. मनोविज्ञान (Psychology) - SET 3
  // ==========================================
  { subject: "psychology", lang: "hi", question: "बुद्धि का बहुबुद्धि सिद्धांत (Multiple Intelligence) किसने दिया?", options: ["हावर्ड गार्डनर", "स्पियरमैन", "थर्स्टन", "बिने"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "मनोविज्ञान की प्रथम प्रयोगशाला किसने स्थापित की थी?", options: ["विलियम वुण्ट (Wundt)", "विलियम जेम्स", "वाटसन", "फ्रायड"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "फ्रायड के अनुसार व्यक्तित्व का कौन सा भाग 'सुख के सिद्धांत' पर काम करता है?", options: ["इद् (Id)", "अहं (Ego)", "पराहं (Superego)", "कोई नहीं"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "प्रक्षेप्य तकनीक (Projective Technique) का उपयोग किसके मापन के लिए होता है?", options: ["व्यक्तित्व (Personality)", "बुद्धि", "रुचि", "अभिक्षमता"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "फोबिया (Phobia) का क्या अर्थ होता है?", options: ["असंगत या अत्यधिक डर", "अत्यधिक गुस्सा", "भ्रम", "अनिद्रा"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Who proposed the Theory of Multiple Intelligences?", options: ["Howard Gardner", "Spearman", "Thurstone", "Binet"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Who established the first laboratory of psychology?", options: ["Wilhelm Wundt", "William James", "Watson", "Freud"], correct: 0 },
  { subject: "psychology", lang: "en", question: "According to Freud, which part of personality works on the 'Pleasure Principle'?", options: ["Id", "Ego", "Superego", "None of these"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Projective techniques are primarily used to measure what?", options: ["Personality", "Intelligence", "Interest", "Aptitude"], correct: 0 },
  { subject: "psychology", lang: "en", question: "What does Phobia mean?", options: ["Irrational or excessive fear", "Excessive anger", "Delusion", "Insomnia"], correct: 0 },

  // ==========================================
  // 7. गृह विज्ञान (Home Science) - SET 3
  // ==========================================
  { subject: "home_science", lang: "hi", question: "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?", options: ["यकृत (Liver)", "थायरॉयड", "पीयूष ग्रंथि", "अग्न्याशय"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "जल को शुद्ध करने के लिए किस रासायनिक पदार्थ का उपयोग किया जाता है?", options: ["ब्लीचिंग पाउडर / क्लोरीन", "नमक", "बेकिंग सोडा", "सिरका"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "कपड़ों पर से ग्रीस का दाग हटाने के लिए किसका उपयोग होता है?", options: ["टैल्कम पाउडर / चाक", "नींबू", "नमक", "दही"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "एनीमिया (Anemia) रोग किस पोषक तत्व की कमी से होता है?", options: ["लोहा (Iron)", "कैल्शियम", "आयोडीन", "विटामिन ए"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "बचत सुरक्षित रखने का सबसे अच्छा साधन कौन सा है?", options: ["बैंक खाता", "घर में छुपाना", "लॉटरी", "दोस्त को देना"], correct: 0 },
  { subject: "home_science", lang: "en", question: "Which is the largest gland in the human body?", options: ["Liver", "Thyroid", "Pituitary", "Pancreas"], correct: 0 },
  { subject: "home_science", lang: "en", question: "Which chemical is commonly used to purify water?", options: ["Bleaching Powder / Chlorine", "Salt", "Baking Soda", "Vinegar"], correct: 0 },
  { subject: "home_science", lang: "en", question: "What is used to absorb grease stains from clothes?", options: ["Talcum Powder / Chalk", "Lemon", "Salt", "Curd"], correct: 0 },
  { subject: "home_science", lang: "en", question: "Anemia is caused by the deficiency of which nutrient?", options: ["Iron", "Calcium", "Iodine", "Vitamin A"], correct: 0 },
  { subject: "home_science", lang: "en", question: "Which is the safest medium to keep savings?", options: ["Bank Account", "Hiding at home", "Lottery", "Giving to a friend"], correct: 0 },

  // ==========================================
  // 8. दर्शनशास्त्र (Philosophy) - SET 3
  // ==========================================
  { subject: "philosophy", lang: "hi", question: "अष्टांगिक मार्ग का सिद्धांत किस दर्शन से संबंधित है?", options: ["बौद्ध दर्शन", "जैन दर्शन", "वैशेषिक", "वेदांत"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "भगवद्गीता महाभारत के किस पर्व का हिस्सा है?", options: ["भीष्म पर्व", "वन पर्व", "सभा पर्व", "आदि पर्व"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "वैशेषिक दर्शन के प्रवर्तक कौन हैं?", options: ["महर्षि कणाद", "महर्षि कपिल", "महर्षि गौतम", "महर्षि पतंजलि"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "जैन दर्शन के अनुसार 'स्याद्वाद' का क्या अर्थ है?", options: ["ज्ञान की सापेक्षता (Relativity)", "कट्टरता", "नास्तिकता", "संशयवाद"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "मीमांसा दर्शन के प्रवर्तक कौन हैं?", options: ["महर्षि जैमिनी", "महर्षि बादरायण", "महर्षि कपिल", "महर्षि कणाद"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "The Eightfold Path (Ashtangika Marga) is related to which philosophy?", options: ["Buddhist Philosophy", "Jain Philosophy", "Vaisheshika", "Vedanta"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "The Bhagavad Gita is a part of which Parva of Mahabharata?", options: ["Bhishma Parva", "Vana Parva", "Sabha Parva", "Aadi Parva"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "Who is the founder of Vaisheshika Philosophy?", options: ["Maharishi Kanada", "Maharishi Kapila", "Maharishi Gautama", "Maharishi Patanjali"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "According to Jainism, what does 'Syadvada' mean?", options: ["Relativity of knowledge", "Dogmatism", "Atheism", "Skepticism"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "Who is the founder of Mimamsa Philosophy?", options: ["Maharishi Jaimini", "Maharishi Badarayana", "Maharishi Kapila", "Maharishi Kanada"], correct: 0 },

  // ==========================================
  // 9. कानूनी अध्ययन (Legal Studies) - SET 3
  // ==========================================
  { subject: "legal_studies", lang: "hi", question: "भारतीय संविधान का कौन सा अनुच्छेद 'संविधान की आत्मा' कहलाता है?", options: ["अनुच्छेद 32", "अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "भारत में उच्च न्यायालयों (High Courts) के न्यायाधीशों की सेवानिवृत्ति की आयु क्या है?", options: ["62 वर्ष", "65 वर्ष", "60 वर्ष", "58 वर्ष"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "भारतीय दंड संहिता (IPC) किस वर्ष लागू हुई थी?", options: ["1862", "1860", "1950", "1973"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "मानवाधिकार दिवस कब मनाया जाता है?", options: ["10 दिसंबर", "26 नवंबर", "2 अक्टूबर", "15 अगस्त"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "भारत के प्रथम मुख्य न्यायाधीश कौन थे?", options: ["एच. जे. कनिया", "पतंजलि शास्त्री", "मेहर चंद महाजन", "एम. हिदायतुल्ला"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "Which Article is called the 'Heart and Soul of the Constitution'?", options: ["Article 32", "Article 14", "Article 19", "Article 21"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "What is the retirement age of High Court judges in India?", options: ["62 years", "65 years", "60 years", "58 years"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "In which year did the Indian Penal Code (IPC) come into force?", options: ["1862", "1860", "1950", "1973"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "When is Human Rights Day celebrated?", options: ["10 December", "26 November", "2 October", "15 August"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "Who was the first Chief Justice of India?", options: ["H.J. Kania", "Patanjali Sastri", "Mehr Chand Mahajan", "M. Hidayatullah"], correct: 0 },

  // ==========================================
  // 10. हिंदी साहित्य (Hindi Literature) - SET 3
  // ==========================================
  { subject: "hindi_lit", lang: "hi", question: "'बीजक' किसकी रचनाओं का संग्रह है?", options: ["कबीरदास", "सूरदास", "तुलसीदास", "जायसी"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "छायावाद के चार प्रमुख स्तंभों में कौन शामिल नहीं है?", options: ["मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "सुमित्रानंदन पंत", "महादेवी वर्मा"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "'मैला आंचल' उपन्यास के लेखक कौन हैं?", options: ["फणीश्वरनाथ रेणु", "प्रेमचंद", "अज्ञेय", "यशपाल"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "हिंदी दिवस कब मनाया जाता है?", options: ["14 सितंबर", "10 जनवरी", "26 जनवरी", "2 अक्टूबर"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "'रामचरितमानस' की रचना किस भाषा में हुई है?", options: ["अवधी", "ब्रजभाषा", "खड़ी बोली", "मैथिली"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "'Bijak' is a collection of compositions by whom?", options: ["Kabirdas", "Surdas", "Tulsidas", "Jayasi"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Who is not among the four pillars of Chhayavad?", options: ["Maithili Sharan Gupt", "Jaishankar Prasad", "Sumitranandan Pant", "Mahadevi Varma"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Who wrote the novel 'Maila Anchal'?", options: ["Phanishwar Nath Renu", "Premchand", "Agyeya", "Yashpal"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "When is Hindi Diwas celebrated in India?", options: ["14 September", "10 January", "26 January", "2 October"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "In which language was 'Ramcharitmanas' composed?", options: ["Awadhi", "Brajbhasha", "Khari Boli", "Maithili"], correct: 0 },

  // ==========================================
  // 11. अंग्रेजी साहित्य (English Literature) - SET 3
  // ==========================================
  { subject: "english_lit", lang: "hi", question: "शेक्सपियर के नाटक 'मैकबेथ' का मुख्य विषय क्या है?", options: ["अंधा महत्वाकांक्षा (Ambition)", "ईर्ष्या", "प्यार", "बदला"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "'ओड ऑन ए ग्रीशियन अर्न' कविता किसने लिखी है?", options: ["जॉन कीट्स", "पर्सी शेली", "लॉर्ड बायरन", "वर्डसवर्थ"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "उपन्यास 'रोबिन्सन क्रूसो' के लेखक कौन हैं?", options: ["डैनियल डिफ़ो", "जोनाथन स्विफ्ट", "हेनरी फील्डिंग", "वॉल्टर स्कॉट"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "किसे 'फादर ऑफ इंग्लिश एस्से' कहा जाता है?", options: ["फ्रांसिस बेकन", "चार्ल्स लैम्ब", "जोसेफ एडिसन", "रिचर्ड स्टील"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "'उलेिसिस' उपन्यास किसने लिखा है?", options: ["जेम्स जॉइस", "वर्जिशिया वुल्फ", "डी. एच. लॉरेंस", "जॉर्ज ऑरवेल"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "What is the central theme of Shakespeare's 'Macbeth'?", options: ["Blind Ambition", "Jealousy", "Love", "Revenge"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who wrote the poem 'Ode on a Grecian Urn'?", options: ["John Keats", "Percy Bysshe Shelley", "Lord Byron", "William Wordsworth"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who is the author of the novel 'Robinson Crusoe'?", options: ["Daniel Defoe", "Jonathan Swift", "Henry Fielding", "Walter Scott"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who is known as the 'Father of English Essays'?", options: ["Francis Bacon", "Charles Lamb", "Joseph Addison", "Richard Steele"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who wrote the famous modernist novel 'Ulysses'?", options: ["James Joyce", "Virginia Woolf", "D.H. Lawrence", "George Orwell"], correct: 0 },

  // ==========================================
  // 12. लेखाकर्म (Accountancy) - SET 3
  // ==========================================
  { subject: "accountancy", lang: "hi", question: "लागत अवधारणा (Cost Concept) के अनुसार संपत्तियों को किस मूल्य पर दर्ज किया जाता है?", options: ["ऐतिहासिक लागत (Historical Cost)", "बाजार मूल्य", "वसूली योग्य मूल्य", "कोई नहीं"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "कौन सा खाता नाममात्र खाता (Nominal Account) है?", options: ["वेतन खाता (Salary Account)", "भवन खाता", "रोकड़ खाता", "राम का खाता"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "नया साझेदार आने पर पुरानी ख्याति को किस अनुपात में बांटा जाता है?", options: ["पुराने लाभ-हानि अनुपात में", "पूंजी के अनुपात में", "त्याग के अनुपात में", "बराबर"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "चालू अनुपात (Current Ratio) का आदर्श रूप क्या माना जाता है?", options: ["2:1", "1:1", "3:1", "1:2"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "रोकड़ प्रवाह विवरण (Cash Flow Statement) किससे संबंधित है?", options: ["लेखांकन मानक 3 (AS-3)", "AS-10", "AS-6", "AS-9"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "According to Cost Concept, assets are recorded at which value?", options: ["Historical Cost", "Market Value", "Realizable Value", "None of these"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "Which of the following is a Nominal Account?", options: ["Salary Account", "Building Account", "Cash Account", "Ram's Account"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "On admission of a new partner, old goodwill is written off in which ratio?", options: ["Old Profit Sharing Ratio", "Capital Ratio", "Sacrificing Ratio", "Equally"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "What is considered an ideal Current Ratio?", options: ["2:1", "1:1", "3:1", "1:2"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "Cash Flow Statement is prepared as per which Accounting Standard?", options: ["AS-3", "AS-10", "AS-6", "AS-9"], correct: 0 },

  // ==========================================
  // 13. व्यावसायिक अध्ययन (Business Studies) - SET 3
  // ==========================================
  { subject: "business", lang: "hi", question: "प्रबंध के सिद्धांतों की प्रकृति कैसी होती है?", options: ["लोचशील (Flexible)", "कठोर", "स्थिर", "सीमित"], correct: 0 },
  { subject: "business", lang: "hi", question: "पूंजी संरचना (Capital Structure) में क्या शामिल होता है?", options: ["ऋण और समता (Debt & Equity)", "केवल वर्किंग कैपिटल", "केवल करंट एसेट्स", "कोई नहीं"], correct: 0 },
  { subject: "business", lang: "hi", question: "नियंत्रण (Controlling) प्रबंध का कौन सा कार्य है?", options: ["अंतिम कार्य", "पहला कार्य", "दूसरा कार्य", "मध्यम कार्य"], correct: 0 },
  { subject: "business", lang: "hi", question: "राष्ट्रीय उपभोक्ता विवाद निवारण आयोग की मौद्रिक सीमा क्या है?", options: ["2 करोड़ रुपये से अधिक", "10 लाख रुपये", "50 लाख रुपये", "1 करोड़ रुपये"], correct: 0 },
  { subject: "business", lang: "hi", question: "औपचारिक संगठन (Formal Organization) का निर्माण कैसे होता है?", options: ["सोच-समझकर प्रबंध द्वारा", "स्वतः", "दोस्तों द्वारा", "कोई नहीं"], correct: 0 },
  { subject: "business", lang: "en", question: "What is the nature of principles of management?", options: ["Flexible", "Rigid", "Static", "Limited"], correct: 0 },
  { subject: "business", lang: "en", question: "What does Capital Structure comprise?", options: ["Debt and Equity", "Working Capital only", "Current Assets only", "None of these"], correct: 0 },
  { subject: "business", lang: "en", question: "Controlling is which function of Management?", options: ["Last function", "First function", "Second function", "Intermediate function"], correct: 0 },
  { subject: "business", lang: "en", question: "What is the monetary limit for National Consumer Disputes Redressal Commission?", options: ["Above 2 Crore Rupees", "10 Lakh Rupees", "50 Lakh Rupees", "1 Crore Rupees"], correct: 0 },
  { subject: "business", lang: "en", question: "How is a Formal Organization created?", options: ["Deliberately by management", "Spontaneously", "By friends", "None of these"], correct: 0 },

  // ==========================================
  // 14. उद्यमशीलता (Entrepreneurship) - SET 3
  // ==========================================
  { subject: "entrepreneurship", lang: "hi", question: "उद्यमी और प्रबंधक में मुख्य अंतर क्या होता है?", options: ["उद्यमी जोखिम उठाता है, प्रबंधक नहीं", "प्रबंधक मालिक होता है", "दोनों में कोई अंतर नहीं", "प्रबंधक रिस्क लेता है"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "स्थिर लागत (Fixed Cost) का उदाहरण कौन सा है?", options: ["कारखाने का किराया", "कच्चे माल की लागत", "मजदूरी", "बिजली बिल"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "सम-विच्छेद बिंदु (Break-Even Point) क्या दर्शाता है?", options: ["न लाभ, न हानि की स्थिति", "अधिकतम लाभ", "न्यूनतम हानि", "व्यवसाय बंद होना"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "परियोजना की पहचान (Project Identification) किस पर निर्भर करती है?", options: ["अनुभव और अवसर दोनों पर", "केवल सरकारी नियमों पर", "केवल भाग्य पर", "कोई नहीं"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "बीज पूंजी (Seed Capital) का क्या अर्थ है?", options: ["व्यवसाय शुरू करने के लिए शुरुआती पूंजी", "फसल उगाने की पूंजी", "बैंक का पूरा लोन", "अंतिम पूंजी"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What is the main difference between an entrepreneur and a manager?", options: ["Entrepreneur bears risk, manager does not", "Manager is the owner", "There is no difference", "Manager bears risk"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "Which of the following is an example of Fixed Cost?", options: ["Factory Rent", "Raw material cost", "Labor wages", "Electricity bill"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What does Break-Even Point (BEP) indicate?", options: ["No profit, no loss situation", "Maximum profit", "Minimum loss", "Business closure"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "Project Identification depends on what?", options: ["Both experience and opportunity", "Government rules only", "Luck only", "None of these"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What does Seed Capital mean?", options: ["Initial capital to start a business", "Capital to grow crops", "Full bank loan", "Final capital"], correct: 0 },

  // ==========================================
  // 15. भौतिकी (Physics) - SET 3
  // ==========================================
  { subject: "physics", lang: "hi", question: "ओम का नियम (Ohm's Law) का सूत्र क्या है?", options: ["V = IR", "P = VI", "W = QV", "I = VR"], correct: 0 },
  { subject: "physics", lang: "hi", question: "क्यूरी (Curie) किसकी इकाई है?", options: ["रेडियोधर्मिता (Radioactivity)", "तापमान", "चुंबकीय क्षेत्र", "विद्युत धारा"], correct: 0 },
  { subject: "physics", lang: "hi", question: "इंद्रधनुष बनने का मुख्य कारण क्या है?", options: ["वर्ण विक्षेपण और पूर्ण आंतरिक परावर्तन", "केवल विवर्तन", "केवल ध्रुवण", "केवल अपवर्तन"], correct: 0 },
  { subject: "physics", lang: "hi", question: "एक आदर्श एमीटर (Ammeter) का प्रतिरोध कितना होना चाहिए?", options: ["शून्य", "अनंत", "बहुत उच्च", "1 ओम"], correct: 0 },
  { subject: "physics", lang: "hi", question: "नाभिकीय रिएक्टर में मंदक (Moderator) के रूप में किसका उपयोग होता है?", options: ["भारी जल (D₂O)", "युरेनियम", "बोरॉन", "तरल सोडियम"], correct: 0 },
  { subject: "physics", lang: "en", question: "What is the formula for Ohm's Law?", options: ["V = IR", "P = VI", "W = QV", "I = VR"], correct: 0 },
  { subject: "physics", lang: "en", question: "Curie is a unit of what?", options: ["Radioactivity", "Temperature", "Magnetic Field", "Electric Current"], correct: 0 },
  { subject: "physics", lang: "en", question: "What is the primary reason for the formation of a rainbow?", options: ["Dispersion and Total Internal Reflection", "Diffraction only", "Polarization only", "Refraction only"], correct: 0 },
  { subject: "physics", lang: "en", question: "What should be the resistance of an ideal Ammeter?", options: ["Zero", "Infinity", "Very high", "1 Ohm"], correct: 0 },
  { subject: "physics", lang: "en", question: "Which material is used as a Moderator in a nuclear reactor?", options: ["Heavy Water (D₂O)", "Uranium", "Boron", "Liquid Sodium"], correct: 0 },

  // ==========================================
  // 16. रसायन विज्ञान (Chemistry) - SET 3
  // ==========================================
  { subject: "chemistry", lang: "hi", question: "भारी जल (Heavy Water) का रासायनिक सूत्र क्या है?", options: ["D₂O", "H₂O", "T₂O", "H₂O₂"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "भोपाल गैस त्रासदी में कौन सी गैस लीक हुई थी?", options: ["मिथाइल आइसोसाइनेट", "क्लोरीन", "अमोनिया", "फॉस्जीन"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "गुब्बारों में भरने के लिए किस निष्क्रिय गैस का उपयोग होता है?", options: ["हीलियम", "नियोन", "आर्गन", "रेडॉन"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "सोने की शुद्धता को किस इकाई में मापा जाता है?", options: ["कैरेट (Karat)", "ग्राम", "मिलीग्राम", "मीटर"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "अम्ल वर्षा (Acid Rain) मुख्य रूप से किन गैसों के कारण होती है?", options: ["SO₂ और NO₂", "CO और CO₂", "CH₄ और O₃", "NH₃ और Cl₂"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "What is the chemical formula of Heavy Water?", options: ["D₂O", "H₂O", "T₂O", "H₂O₂"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Which gas leaked during the Bhopal Gas Tragedy?", options: ["Methyl Isocyanate", "Chlorine", "Ammonia", "Phosgene"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Which noble gas is used to fill balloons?", options: ["Helium", "Neon", "Argon", "Radon"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "In which unit is the purity of gold measured?", options: ["Karat", "Gram", "Milligram", "Meter"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Acid Rain is primarily caused by which gases?", options: ["SO₂ and NO₂", "CO and CO₂", "CH₄ and O₃", "NH₃ and Cl₂"], correct: 0 },

  // ==========================================
  // 17. जीव विज्ञान (Biology) - SET 3
  // ==========================================
  { subject: "biology", lang: "hi", question: "मानव शरीर में इंसुलिन का निर्माण कहाँ होता है?", options: ["अग्न्याशय (Pancreas)", "यकृत", "पित्ताशय", "प्लीहा"], correct: 0 },
  { subject: "biology", lang: "hi", question: "रक्त का थक्का (Clotting) जमने में कौन सा विटामिन सहायक है?", options: ["विटामिन K", "विटामिन C", "विटामिन D", "विटामिन E"], correct: 0 },
  { subject: "biology", lang: "hi", question: "एड्स (AIDS) किसके कारण होने वाला रोग है?", options: ["विषाणु (Virus)", "जीवाणु", "कवक", "प्रोटोजोआ"], correct: 0 },
  { subject: "biology", lang: "hi", question: "पौधों में जल का परिवहन किस ऊतक द्वारा होता है?", options: ["जाइलम (Xylem)", "फ्लोएम", "कॉर्टेक्स", "एपिडर्मिस"], correct: 0 },
  { subject: "biology", lang: "hi", question: "लार (Saliva) में कौन सा एंजाइम पाया जाता है?", options: ["टायलिन (Ptaylin)", "पेप्सिन", "ट्रिप्सिन", "रेनिन"], correct: 0 },
  { subject: "biology", lang: "en", question: "Where is insulin produced in the human body?", options: ["Pancreas", "Liver", "Gallbladder", "Spleen"], correct: 0 },
  { subject: "biology", lang: "en", question: "Which vitamin helps in blood clotting?", options: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin E"], correct: 0 },
  { subject: "biology", lang: "en", question: "AIDS is caused by which pathogen?", options: ["Virus", "Bacteria", "Fungus", "Protozoa"], correct: 0 },
  { subject: "biology", lang: "en", question: "Water transport in plants occurs through which tissue?", options: ["Xylem", "Phloem", "Cortex", "Epidermis"], correct: 0 },
  { subject: "biology", lang: "en", question: "Which enzyme is found in human saliva?", options: ["Ptyalin", "Pepsin", "Trypsin", "Renin"], correct: 0 },

  // ==========================================
  // 18. बायोटेक्नोलॉजी (Biotechnology) - SET 3
  // ==========================================
  { subject: "biotech", lang: "hi", question: "अनुवांशिक इंजीनियरिंग में 'आणविक गोंद' किसे कहा जाता है?", options: ["डीएनए लाइगेज (DNA Ligase)", "प्रतिबंधन एंडोन्यूक्लिएज", "पॉलीमरेज", "आरएनए प्राइमेस"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "प्रथम मानव निर्मित इंसुलिन का व्यावसायिक नाम क्या है?", options: ["ह्यूमलिन (Humulin)", "इंसुलिन-जी", "बायोलिन", "रेग्युलर इंसुलिन"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "स्टेम सेल (Stem Cells) की मुख्य विशेषता क्या है?", options: ["किसी भी कोशिका प्रकार में विकसित होने की क्षमता", "केवल रक्त बनाना", "नष्ट न होना", "कोई नहीं"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "क्राय प्रोटीन (Cry Protein) किस बैक्टीरिया से प्राप्त होता है?", options: ["बैसिलस थुरिंगिएंसिस", "ई. कोलाई", "राइजोबियम", "लैक्टोबैसिलस"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "डीएनए फिंगरप्रिंटिंग तकनीक का विकास किसने किया था?", options: ["एलेक जेफ्रीस", "कैरी मुलिस", "वाटसन", "क्रिक"], correct: 0 },
  { subject: "biotech", lang: "en", question: "Which enzyme acts as 'molecular glue' to join DNA fragments?", options: ["DNA Ligase", "Restriction Endonuclease", "Polymerase", "RNA Primase"], correct: 0 },
  { subject: "biotech", lang: "en", question: "What is the commercial name of the first genetically engineered human insulin?", options: ["Humulin", "Insulin-G", "Biolin", "Regular Insulin"], correct: 0 },
  { subject: "biotech", lang: "en", question: "What is the main property of Stem Cells?", options: ["Ability to differentiate into any cell type", "Producing blood only", "Immunity to damage", "None of these"], correct: 0 },
  { subject: "biotech", lang: "en", question: "Cry protein is obtained from which bacteria?", options: ["Bacillus thuringiensis", "E. coli", "Rhizobium", "Lactobacillus"], correct: 0 },
  { subject: "biotech", lang: "en", question: "Who developed the DNA Fingerprinting technique?", options: ["Alec Jeffreys", "Kary Mullis", "Watson", "Crick"], correct: 0 },

  // ==========================================
  // 19. गणित (Mathematics) - SET 3
  // ==========================================
  { subject: "maths", lang: "hi", question: "f(x) = x³ का अवकलन d/dx क्या होगा?", options: ["3x²", "x²", "3x", "6x"], correct: 0 },
  { subject: "maths", lang: "hi", question: "शून्य आव्यूह (Zero Matrix) के सभी अवयव क्या होते हैं?", options: ["0", "1", "-1", "परिभाषित नहीं"], correct: 0 },
  { subject: "maths", lang: "hi", question: "∫ e^x dx का समाकलन मान क्या होगा?", options: ["e^x + C", "e^-x + C", "xe^x + C", "1"], correct: 0 },
  { subject: "maths", lang: "hi", question: "त्रिविमीय ज्यामिति में मूल बिन्दु (Origin) के निर्देशांक क्या होते हैं?", options: ["(0, 0, 0)", "(1, 1, 1)", "(0, 0)", "(1, 0, 0)"], correct: 0 },
  { subject: "maths", lang: "hi", question: "यदि P(A) = 0.3 है, तो P(A') (घटना न घटने) की प्रायिकता क्या होगी?", options: ["0.7", "0.3", "1", "0"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the derivative d/dx of f(x) = x³?", options: ["3x²", "x²", "3x", "6x"], correct: 0 },
  { subject: "maths", lang: "en", question: "What are all the elements of a Zero Matrix?", options: ["0", "1", "-1", "Not defined"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the integral ∫ e^x dx?", options: ["e^x + C", "e^-x + C", "xe^x + C", "1"], correct: 0 },
  { subject: "maths", lang: "en", question: "What are the coordinates of the Origin in 3D geometry?", options: ["(0, 0, 0)", "(1, 1, 1)", "(0, 0)", "(1, 0, 0)"], correct: 0 },
  { subject: "maths", lang: "en", question: "If P(A) = 0.3, what is the probability of P(A')?", options: ["0.7", "0.3", "1", "0"], correct: 0 },

  // ==========================================
  // 20. एप्लाइड मैथ (Applied Mathematics) - SET 3
  // ==========================================
  { subject: "applied_math", lang: "hi", question: "सांख्यिकी में 'बहुलक' (Mode) क्या दर्शाता है?", options: ["सबसे अधिक बारंबारता वाला मूल्य", "मध्य मूल्य", "औसत मूल्य", "न्यूनतम मान"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "मूल्य ह्रास (Depreciation) की सीधी रेखा पद्धति (Straight Line Method) में ह्रास की राशि हर वर्ष:", options: ["समान रहती है", "घटती है", "बढ़ती है", "शून्य होती है"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "एक रैखिक प्रोग्रामन समस्या (LPP) में उद्देश्य फलन (Objective Function) हमेशा कैसा होता है?", options: ["रैखिक (Linear)", "द्विघाती", "अचर", "कोई नहीं"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "राजस्व फलन (Revenue Function) का सूत्र क्या होता है जब कीमत P और मात्रा Q हो?", options: ["R = P × Q", "R = P / Q", "R = P + Q", "R = P - Q"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "दो सिक्कों को एक साथ उछालने पर कम से कम एक चित (Head) आने की प्रायिकता क्या है?", options: ["3/4", "1/4", "1/2", "1"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What does 'Mode' represent in statistics?", options: ["Most frequent value", "Middle value", "Average value", "Minimum value"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "In Straight Line Method of depreciation, the depreciation amount every year:", options: ["Remains same", "Decreases", "Increases", "Becomes zero"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "An Objective Function in an LPP is always what type of function?", options: ["Linear", "Quadratic", "Constant", "None of these"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What is the formula for Revenue Function given Price P and Quantity Q?", options: ["R = P × Q", "R = P / Q", "R = P + Q", "R = P - Q"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What is the probability of getting at least one Head when tossing two coins simultaneously?", options: ["3/4", "1/4", "1/2", "1"], correct: 0 },

  // ==========================================
  // 21. कंप्यूटर विज्ञान (Computer Science) - SET 3
  // ==========================================
  { subject: "computer_science", lang: "hi", question: "HTML का पूर्ण रूप क्या है?", options: ["हाइपर टेक्स्ट मार्कअप लैंग्वेज", "हाइपर लिंक मार्कअप लैंग्वेज", "हाई टेक्स्ट मशीन लैंग्वेज", "कोई नहीं"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "एसक्यूएल (SQL) में डेटा को अपडेट करने के लिए किस कमांड का उपयोग होता है?", options: ["UPDATE", "ALTER", "CHANGE", "MODIFY"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "इंटरनेट पर फाइलों के ट्रांसफर के लिए किस प्रोटोकॉल का उपयोग होता है?", options: ["FTP", "HTTP", "SMTP", "IP"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "डेटा स्ट्रक्चर में क्यू (Queue) किस सिद्धांत पर कार्य करता है?", options: ["FIFO (First In First Out)", "LIFO", "Random", "Tree"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "पायथन में लिस्ट (List) को दर्शाने के लिए किस ब्रैकेट का उपयोग होता है?", options: ["[] (स्क्वायर ब्रैकेट)", "{}", "()", "<>"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "What is the full form of HTML?", options: ["Hyper Text Markup Language", "Hyper Link Markup Language", "High Text Machine Language", "None of these"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "Which command is used to modify existing data inside a table in SQL?", options: ["UPDATE", "ALTER", "CHANGE", "MODIFY"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "Which protocol is primarily used for transferring files over the internet?", options: ["FTP", "HTTP", "SMTP", "IP"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "On which principle does a Queue data structure work?", options: ["FIFO (First In First Out)", "LIFO", "Random", "Tree"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "Which bracket is used to define a List in Python?", options: ["[]", "{}", "()", "<>"], correct: 0 },
    // ==========================================
  // 1. इतिहास (History) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "history", lang: "hi", question: "हरिषेण निम्नलिखित में से किस गुप्त शासक का राजकवि था, जिसने प्रयाग प्रशस्ति की रचना की थी?", options: ["समुद्रगुप्त", "चन्द्रगुप्त द्वितीय", "स्कन्दगुप्त", "कुमारगुप्त"], correct: 0 },
  { subject: "history", lang: "hi", question: "विजयनगर साम्राज्य की स्थापना 1336 ई. में किन दो भाइयों ने मिलकर की थी?", options: ["हरिहर और बुक्का", "कृष्णदेव राय और अच्युत राय", "राम राय और सदाशिव", "कोई नहीं"], correct: 0 },
  { subject: "history", lang: "hi", question: "महात्मा गांधी ने 1942 में 'भारत छोड़ो आंदोलन' के दौरान कौन सा प्रसिद्ध नारा दिया था?", options: ["करो या मरो", "स्वराज मेरा जन्मसिद्ध अधिकार है", "तुम मुझे खून दो, मैं तुम्हें आजादी दूंगा", "इंकलाब जिंदाबाद"], correct: 0 },
  { subject: "history", lang: "hi", question: "संविधान सभा की प्रारूप समिति (Drafting Committee) के अध्यक्ष निम्नलिखित में से कौन थे?", options: ["डॉ. बी. आर. अम्बेडकर", "डॉ. राजेन्द्र प्रसाद", "जवाहरलाल नेहरू", "सरदार पटेल"], correct: 0 },
  { subject: "history", lang: "hi", question: "इब्नबतूता किस देश का यात्री था जो 14वीं शताब्दी में मोहम्मद बिन तुगलक के काल में भारत आया था?", options: ["मोरक्को", "फारस (इरान)", "मिस्र", "तुर्की"], correct: 0 },
  { subject: "history", lang: "en", question: "Harishena was the court poet of which Gupta ruler and composed the Prayaga Prashasti?", options: ["Samudragupta", "Chandragupta II", "Skandagupta", "Kumaragupta"], correct: 0 },
  { subject: "history", lang: "en", question: "The Vijaynagar Empire was established in 1336 AD by which two brothers?", options: ["Harihara and Bukka", "Krishnadeva Raya and Achyuta Raya", "Rama Raya and Sadashiva", "None of these"], correct: 0 },
  { subject: "history", lang: "en", question: "Which famous slogan was given by Mahatma Gandhi during the Quit India Movement in 1942?", options: ["Do or Die", "Swaraj is my birthright", "Give me blood, I will give you freedom", "Inquilab Zindabad"], correct: 0 },
  { subject: "history", lang: "en", question: "Who among the following was the Chairman of the Drafting Committee of the Constituent Assembly?", options: ["Dr. B. R. Ambedkar", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"], correct: 0 },
  { subject: "history", lang: "en", question: "Ibn Battuta was a traveler from which country who came to India during the reign of Muhammad bin Tughluq?", options: ["Morocco", "Persia", "Egypt", "Turkey"], correct: 0 },

  // ==========================================
  // 2. राजनीति विज्ञान (Political Science) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "political", lang: "hi", question: "क्यूबा मिसाइल संकट (Cuba Missile Crisis) किस वर्ष उत्पन्न हुआ था जिसे शीतयुद्ध का चरम बिंदु कहा जाता है?", options: ["1962", "1961", "1965", "1971"], correct: 0 },
  { subject: "political", lang: "hi", question: "सोवियत संघ का औपचारिक विघटन किस वर्ष और किस महीने में हुआ था?", options: ["दिसंबर 1991", "नवंबर 1989", "मार्च 1990", "जनवरी 1992"], correct: 0 },
  { subject: "political", lang: "hi", question: "नीति आयोग (NITI Aayog) की स्थापना कब की गई थी जिसने योजना आयोग का स्थान लिया?", options: ["1 जनवरी 2015", "15 अगस्त 2014", "26 जनवरी 2015", "1 अप्रैल 2014"], correct: 0 },
  { subject: "political", lang: "hi", question: "भारतीय संविधान का 42वां संशोधन किस वर्ष पारित किया गया था जिसे 'लघु संविधान' भी कहते हैं?", options: ["1976", "1978", "1975", "1980"], correct: 0 },
  { subject: "political", lang: "hi", question: "1975 में आपातकाल (Emergency) की घोषणा के समय भारत के राष्ट्रपति कौन थे?", options: ["फखरुद्दीन अली अहमद", "वी. वी. गिरि", "डॉ. जाकिर हुसैन", "ज्ञानी जैल सिंह"], correct: 0 },
  { subject: "political", lang: "en", question: "In which year did the Cuban Missile Crisis occur, which is called the high point of the Cold War?", options: ["1962", "1961", "1965", "1971"], correct: 0 },
  { subject: "political", lang: "en", question: "In which year and month did the formal dissolution of the Soviet Union take place?", options: ["December 1991", "November 1989", "March 1990", "January 1992"], correct: 0 },
  { subject: "political", lang: "en", question: "When was the NITI Aayog established, replacing the historic Planning Commission?", options: ["1 January 2015", "15 August 2014", "26 January 2015", "1 April 2014"], correct: 0 },
  { subject: "political", lang: "en", question: "In which year was the 42nd Amendment of the Indian Constitution passed, also known as 'Mini Constitution'?", options: ["1976", "1978", "1975", "1980"], correct: 0 },
  { subject: "political", lang: "en", question: "Who was the President of India at the time of the declaration of Emergency in 1975?", options: ["Fakhruddin Ali Ahmed", "V.V. Giri", "Dr. Zakir Husain", "Giani Zail Singh"], correct: 0 },

  // ==========================================
  // 3. भूगोल (Geography) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "geography", lang: "hi", question: "मानव भूगोल के जनक (Father of Human Geography) के रूप में किस भूगोलवेत्ता को जाना जाता है?", options: ["फ्रेडरिक रेटजेल", "एलेन चर्चिल सेम्पल", "पॉल विडाल डी ला ब्लाश", "कार्ल सावर"], correct: 0 },
  { subject: "geography", lang: "hi", question: "जनसांख्यिकीय संक्रमण सिद्धांत (Demographic Transition Theory) की प्रथम अवस्था क्या दर्शाती है?", options: ["उच्च जन्म दर और उच्च मृत्यु दर", "निम्न जन्म दर और निम्न मृत्यु दर", "उच्च जन्म दर और निम्न मृत्यु दर", "शून्य जनसंख्या वृद्धि"], correct: 0 },
  { subject: "geography", lang: "hi", question: "स्वेज नहर (Suez Canal) भूमध्य सागर को निम्नलिखित में से किस सागर से जोड़ती है?", options: ["लाल सागर (Red Sea)", "काला सागर", "कैस्पियन सागर", "अरब सागर"], correct: 0 },
  { subject: "geography", lang: "hi", question: "भारत के किस राज्य में मुख्य रूप से झूम कृषि (स्थानांतरणशील कृषि) की जाती है?", options: ["उत्तर-पूर्वी राज्य (जैसे असम, नागालैंड)", "राजस्थान", "पंजाब", "केरल"], correct: 0 },
  { subject: "geography", lang: "hi", question: "भारत का सबसे लंबा राष्ट्रीय राजमार्ग (National Highway) कौन सा है जो उत्तर को दक्षिण से जोड़ता है?", options: ["NH 44", "NH 7", "NH 8", "NH 2"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which geographer is known as the Father of Human Geography?", options: ["Friedrich Ratzel", "Ellen Churchill Semple", "Paul Vidal de la Blache", "Carl Sauer"], correct: 0 },
  { subject: "geography", lang: "en", question: "What does the first stage of Demographic Transition Theory represent?", options: ["High birth rate and high death rate", "Low birth rate and low death rate", "High birth rate and low death rate", "Zero population growth"], correct: 0 },
  { subject: "geography", lang: "en", question: "The Suez Canal connects the Mediterranean Sea with which of the following seas?", options: ["Red Sea", "Black Sea", "Caspian Sea", "Arabian Sea"], correct: 0 },
  { subject: "geography", lang: "en", question: "In which state of India is Jhum cultivation (shifting cultivation) primarily practiced?", options: ["North-Eastern States (Assam, Nagaland)", "Rajasthan", "Punjab", "Kerala"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which is the longest National Highway in India, connecting the North to the South?", options: ["NH 44", "NH 7", "NH 8", "NH 2"], correct: 0 },

  // ==========================================
  // 4. अर्थशास्त्र (Economics) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "economics", lang: "hi", question: "व्यष्टि अर्थशास्त्र (Microeconomics) और समष्टि अर्थशास्त्र (Macroeconomics) में अंतर का मुख्य आधार क्या है?", options: ["अध्ययन का स्तर (व्यक्तिगत बनाम संपूर्ण अर्थव्यवस्था)", "पैसों की मात्रा", "सरकारी नियंत्रण", "अंतर्राष्ट्रीय व्यापार"], correct: 0 },
  { subject: "economics", lang: "hi", question: "जब कुल उपयोगिता (Total Utility) अधिकतम होती है, तब सीमांत उपयोगिता (Marginal Utility) का मान क्या होता है?", options: ["शून्य", "धनात्मक", "ऋणात्मक", "अनंत"], correct: 0 },
  { subject: "economics", lang: "hi", question: "केंद्रीय बैंक (आरबीआई) द्वारा वाणिज्यिक बैंकों को दिए जाने वाले ऋण की दर को क्या कहा जाता है?", options: ["बैंक दर (Bank Rate)", "रेपो दर", "रिवर्स रेपो दर", "नकद आरक्षित अनुपात"], correct: 0 },
  { subject: "economics", lang: "hi", question: "निम्नलिखित में से कौन सा घटक सकल घरेलू उत्पाद (GDP) की गणना की आय विधि में शामिल नहीं होता?", options: ["हस्तांतरण भुगतान (Transfer Payments)", "मजदूरी और वेतन", "लगान (किराया)", "लाभ"], correct: 0 },
  { subject: "economics", lang: "hi", question: "बजट रेखा (Budget Line) का ढाल निम्नलिखित में से किसके द्वारा प्रदर्शित किया जाता है?", options: ["- Px / Py", "Px × Py", "Py / Px", "Px + Py"], correct: 0 },
  { subject: "economics", lang: "en", question: "What is the main basis of difference between Microeconomics and Macroeconomics?", options: ["Level of study (Individual vs Whole economy)", "Amount of money", "Government control", "International trade"], correct: 0 },
  { subject: "economics", lang: "en", question: "When Total Utility is maximum, what is the value of Marginal Utility?", options: ["Zero", "Positive", "Negative", "Infinity"], correct: 0 },
  { subject: "economics", lang: "en", question: "What is the interest rate at which the central bank (RBI) lends money to commercial banks called?", options: ["Bank Rate", "Repo Rate", "Reverse Repo Rate", "Cash Reserve Ratio"], correct: 0 },
  { subject: "economics", lang: "en", question: "Which of the following items is not included in the Income Method of calculating GDP?", options: ["Transfer Payments", "Wages and Salaries", "Rent", "Profit"], correct: 0 },
  { subject: "economics", lang: "en", question: "The slope of the Budget Line is represented by which of the following options?", options: ["- Px / Py", "Px × Py", "Py / Px", "Px + Py"], correct: 0 },

  // ==========================================
  // 5. समाजशास्त्र (Sociology) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "sociology", lang: "hi", question: "जाति व्यवस्था की मुख्य विशेषता 'अंतर्विवाह' (Endogamy) का क्या अर्थ होता है?", options: ["अपनी ही जाति के अंदर विवाह करना", "दूसरी जाति में विवाह करना", "गोत्र के बाहर विवाह न करना", "कोई नहीं"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "उपनिवेशवाद (Colonialism) का भारतीय सामाजिक संरचना पर क्या प्रभाव पड़ा?", options: ["नये वर्गों का उदय और पाश्चात्य शिक्षा की शुरुआत", "जाति व्यवस्था का पूर्ण खात्मा", "संयुक्त परिवार का मजबूत होना", "शहरीकरण का रुकना"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "भारत में 2011 की जनगणना के अनुसार सबसे कम लिंगानुपात (Sex Ratio) वाला राज्य कौन सा है?", options: ["हरियाणा", "पंजाब", "राजस्थान", "बिहार"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "थॉमस माल्थस ने अपने जनसंख्या सिद्धांत (Malthusian Theory) में जनसंख्या वृद्धि को किस रूप में बताया है?", options: ["ज्यामितीय (Geometric Growth)", "अंकगणितीय", "स्थिर", "नकारात्मक"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "भारत में 'अस्पृश्यता (अपराध) अधिनियम' किस वर्ष पारित किया गया था जिसे बाद में नागरिक अधिकार संरक्षण अधिनियम कहा गया?", options: ["1955", "1950", "1976", "1989"], correct: 0 },
  { subject: "sociology", lang: "en", question: "What does 'Endogamy', a key feature of the caste system, mean?", options: ["Marrying only within one's own caste", "Marrying outside one's caste", "Not marrying outside the clan", "None of these"], correct: 0 },
  { subject: "sociology", lang: "en", question: "What was the major impact of Colonialism on the Indian social structure?", options: ["Rise of new classes and Western education", "Complete elimination of caste system", "Strengthening of joint families", "Stoppage of urbanization"], correct: 0 },
  { subject: "sociology", lang: "en", question: "According to the 2011 Census of India, which state has the lowest Sex Ratio?", options: ["Haryana", "Punjab", "Rajasthan", "Bihar"], correct: 0 },
  { subject: "sociology", lang: "en", question: "In his population theory, Thomas Malthus stated that population grows in which progression?", options: ["Geometric progression", "Arithmetic progression", "Static rate", "Negative rate"], correct: 0 },
  { subject: "sociology", lang: "en", question: "In which year was the Untouchability (Offences) Act passed in India, later renamed as Protection of Civil Rights Act?", options: ["1955", "1950", "1976", "1989"], correct: 0 },

  // ==========================================
  // 6. मनोविज्ञान (Psychology) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "psychology", lang: "hi", question: "अल्बर्ट बांडुरा द्वारा प्रतिपादित 'सामाजिक अधिगम सिद्धांत' (Social Learning Theory) का मुख्य आधार क्या है?", options: ["अवलोकन और अनुकरण (Observation)", "पुरस्कार और दंड", "अंतर्दृष्टि", "शास्त्रीय अनुबंधन"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "तनाव (Stress) के प्रति शरीर की प्रतिक्रिया को समझाने के लिए 'सामान्य अनुकूलन सिंड्रोम' (GAS) किसने दिया था?", options: ["हंस सेली (Hans Selye)", "लजारस", "फ्रायड", "कार्ल रोजर्स"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "दबाव की स्थिति में व्यक्ति का पुरानी या बचकानी आदतों की ओर लौट जाना कौन सी रक्षा युक्ति (Defense Mechanism) है?", options: ["प्रतिगमन (Regression)", "दमन", "प्रक्षेपण", "युक्तिकरण"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "बुद्धि लब्धि (IQ) की गणना करने का सही सूत्र क्या होता है?", options: ["(मानसिक आयु / वास्तविक आयु) × 100", "(वास्तविक आयु / मानसिक आयु) × 100", "मानसिक आयु + वास्तविक आयु", "कोई नहीं"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "कार्ल रोजर्स और अब्राहम मास्लो मनोविज्ञान की किस धारा या दृष्टिकोण के मुख्य समर्थक हैं?", options: ["मानवतावादी दृष्टिकोण (Humanistic)", "व्यवहारवाद", "मनोविश्लेषणवाद", "संज्ञानवाद"], correct: 0 },
  { subject: "psychology", lang: "en", question: "What is the primary basis of 'Social Learning Theory' proposed by Albert Bandura?", options: ["Observation and Imitation", "Reward and Punishment", "Insight", "Classical Conditioning"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Who proposed the 'General Adaptation Syndrome' (GAS) to explain the body's response to stress?", options: ["Hans Selye", "Lazarus", "Freud", "Carl Rogers"], correct: 0 },
  { subject: "psychology", lang: "en", question: "A defense mechanism where an individual reverts to immature behavior under pressure is called:", options: ["Regression", "Repression", "Projection", "Rationalization"], correct: 0 },
  { subject: "psychology", lang: "en", question: "What is the correct formula to calculate Intelligence Quotient (IQ)?", options: ["(Mental Age / Chronological Age) × 100", "(Chronological Age / Mental Age) × 100", "Mental Age + Chronological Age", "None of these"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Carl Rogers and Abraham Maslow are key proponents of which approach in psychology?", options: ["Humanistic Approach", "Behaviorism", "Psychoanalysis", "Cognitivism"], correct: 0 },

  // ==========================================
  // 7. गृह विज्ञान (Home Science) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "home_science", lang: "hi", question: "शिशुओं को पूरक आहार (Supplementary Food) देना किस आयु से प्रारंभ कर देना चाहिए?", options: ["6 माह की आयु से", "1 वर्ष की आयु से", "3 माह की आयु से", "9 माह की आयु से"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "खाद्य पदार्थों के संरक्षण के लिए 'पाश्चुरीकरण' (Pasteurization) विधि का उपयोग मुख्य रूप से किस पर होता है?", options: ["दूध (Milk)", "अचार", "अनाज", "सब्जियां"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "डीपीटी (DPT) का टीका बच्चों को किन तीन गंभीर बीमारियों से सुरक्षा प्रदान करने के लिए लगाया जाता है?", options: ["डिप्थीरिया, काली खांसी, टिटनेस", "पोलियो, चेचक, टीबी", "खसरा, मम्स, रूबेला", "कोई नहीं"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "कपड़ों की बुनाई में प्रयुक्त होने वाले दो मुख्य धागे 'ताना' और 'बाना' में से ताना (Warp) किसे कहते हैं?", options: ["लम्बाई के रुख चलने वाला सीधा धागा", "चौड़ाई के रुख चलने वाला आड़ा धागा", "तिरछा धागा", "गांठ वाला धागा"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "उपभोक्ता संरक्षण अधिनियम (COPRA) भारत में पहली बार किस वर्ष पारित किया गया था?", options: ["1986", "2019", "2005", "1995"], correct: 0 },
  { subject: "home_science", lang: "en", question: "At what age should supplementary feeding be introduced to an infant?", options: ["From 6 months of age", "From 1 year of age", "From 3 months of age", "From 9 months of age"], correct: 0 },
  { subject: "home_science", lang: "en", question: "The process of 'Pasteurization' is primarily used to preserve which food item?", options: ["Milk", "Pickle", "Grains", "Vegetables"], correct: 0 },
  { subject: "home_science", lang: "en", question: "The DPT vaccine provides protection to children against which three serious diseases?", options: ["Diphtheria, Pertussis (Whooping Cough), Tetanus", "Polio, Smallpox, TB", "Measles, Mumps, Rubella", "None of these"], correct: 0 },
  { subject: "home_science", lang: "en", question: "In fabric weaving, which thread is referred to as the 'Warp'?", options: ["The longitudinal/vertical thread", "The transverse/horizontal thread", "The diagonal thread", "The knotted thread"], correct: 0 },
  { subject: "home_science", lang: "en", question: "In which year was the Consumer Protection Act (COPRA) first passed in India?", options: ["1986", "2019", "2005", "1995"], correct: 0 },

  // ==========================================
  // 8. दर्शनशास्त्र (Philosophy) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "philosophy", lang: "hi", question: "चारवाक दर्शन को भारतीय दर्शन की किस श्रेणी में रखा जाता है और क्यों?", options: ["नास्तिक दर्शन (वेदों की प्रामाणिकता को न मानने के कारण)", "आस्तिक दर्शन", "रूढ़िवादी दर्शन", "कोई नहीं"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "बौद्ध दर्शन के 'प्रतीत्यसमुत्पाद' (Pratityasamutpada) के सिद्धांत का क्या मूल अर्थ है?", options: ["कारण-कार्य नियम (एक के होने पर दूसरे की उत्पत्ति)", "आत्मा की अमरता", "ईश्वर की सर्वव्यापकता", "संसार की नित्यता"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "न्याय दर्शन के अनुसार ज्ञान प्राप्त करने के कुल कितने मुख्य प्रमाण स्वीकार किए गए हैं?", options: ["चार (प्रत्यक्ष, अनुमान, उपमान, शब्द)", "दो", "छह", "तीन"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "अद्वैत वेदांत दर्शन के मुख्य प्रतिपादक कौन हैं जिन्होंने 'ब्रह्म सत्यं जगन्मिथ्या' का संदेश दिया?", options: ["आदि शंकराचार्य", "रामानुजाचार्य", "मध्वाचार्य", "निम्बार्काचार्य"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "ईमानुएल कांट (Immanuel Kant) के अनुसार 'कर्तव्य के लिए कर्तव्य' (Duty for Duty's Sake) का क्या अर्थ है?", options: ["बिना किसी फल या परिणाम की इच्छा के कर्तव्य करना", "कानूनी डर से काम करना", "स्वार्थ के लिए काम करना", "सामाजिक दबाव में काम करना"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "In which category is Charvaka philosophy placed and why?", options: ["Heterodox/Nastika (Due to non-acceptance of Vedas)", "Orthodox/Astika", "Conservative", "None of these"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "What is the core meaning of the Buddhist doctrine of 'Pratityasamutpada'?", options: ["Law of Cause and Effect (Dependent Origination)", "Immortality of soul", "Omnipresence of God", "Permanence of the world"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "According to Nyaya Philosophy, how many valid sources of knowledge (Pramanas) are accepted?", options: ["Four (Pratyaksha, Anumana, Upamana, Shabda)", "Two", "Six", "Three"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "Who is the main proponent of Advaita Vedanta philosophy, who gave the slogan 'Brahma Satyam Jagan Mithya'?", options: ["Adi Shankaracharya", "Ramanujacharya", "Madhvacharya", "Nimbarkacharya"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "According to Immanuel Kant, what does 'Duty for Duty's Sake' mean?", options: ["Doing duty without any desire for reward or consequence", "Acting out of legal fear", "Acting for self-interest", "Acting under social pressure"], correct: 0 },

  // ==========================================
  // 9. कानूनी अध्ययन (Legal Studies) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "legal_studies", lang: "hi", question: "भारतीय न्यायपालिका की संरचना में सर्वोच्च स्थान पर कौन सा न्यायालय स्थित है जिसकी शक्तियां पूरे भारत पर लागू होती हैं?", options: ["भारत का सर्वोच्च न्यायालय (Supreme Court)", "उच्च न्यायालय", "जिला न्यायालय", "सत्र न्यायालय"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "अपकृत्य कानून (Law of Torts) के अंतर्गत किस प्रकार की क्षतिपूर्ति या हर्जाना दिलाया जाता है?", options: ["अनिर्धारित क्षतिपूर्ति (Unliquidated Damages)", "निर्धारित क्षतिपूर्ति", "आपराधिक दंड", "जेल की सजा"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "भारतीय अनुबंध अधिनियम (Indian Contract Act) के तहत एक वैध अनुबंध के लिए क्या अनिवार्य शर्त है?", options: ["प्रस्ताव, स्वीकृति और वैध प्रतिफल (Consideration)", "केवल लिखित होना", "सरकारी गवाह", "कोई नहीं"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "'मल्टीपल एफिशिएंट रेमेडी' के रूप में प्रयुक्त होने वाली रिट 'हेबियस कॉर्पस' (Habeas Corpus) का शाब्दिक अर्थ क्या है?", options: ["शरीर को प्रस्तुत करना (To have the body)", "हम आदेश देते हैं", "किस अधिकार से", "प्रमाणित होना"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "निशुल्क कानूनी सहायता (Free Legal Aid) का प्रावधान भारतीय संविधान के किस अनुच्छेद के तहत एक निदेशक सिद्धांत के रूप में जोड़ा गया है?", options: ["अनुच्छेद 39A", "अनुच्छेद 21", "अनुच्छेद 44", "अनुच्छेद 45"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "Which court stands at the apex of the Indian judicial structure?", options: ["Supreme Court of India", "High Court", "District Court", "Sessions Court"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "What type of damages are awarded under the Law of Torts?", options: ["Unliquidated Damages", "Liquidated Damages", "Criminal Punishment", "Imprisonment"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "Under the Indian Contract Act, what is an essential condition for a valid contract?", options: ["Offer, Acceptance, and Lawful Consideration", "Being in writing only", "Government witness", "None of these"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "What is the literal meaning of the writ 'Habeas Corpus'?", options: ["To have the body", "We command", "By what authority", "To be certified"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "The provision of Free Legal Aid is added under which Article of the Indian Constitution as a DPSP?", options: ["Article 39A", "Article 21", "Article 44", "Article 45"], correct: 0 },

  // ==========================================
  // 10. हिंदी साहित्य (Hindi Literature) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "hindi_lit", lang: "hi", question: "आचार्य रामचंद्र शुक्ल ने हिंदी साहित्य के इतिहास को कुल कितने कालों में विभाजित किया है?", options: ["चार काल", "तीन काल", "पांच काल", "छह काल"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "भक्ति काल की 'सगुण काव्यधारा' को किन दो मुख्य शाखाओं में बांटा गया है?", options: ["रामाश्रयी और कृष्णाश्रयी शाखा", "ज्ञानाश्रयी और प्रेमाश्रयी शाखा", "संत और सूफी काव्य", "कोई नहीं"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "सूर्यकांत त्रिपाठी 'निराला' की प्रसिद्ध शोक-गीत रचना कौन सी है जो उन्होंने अपनी पुत्री की मृत्यु पर लिखी थी?", options: ["सरोज स्मृति", "राम की शक्ति पूजा", "कुकुरमुत्ता", "अनामिका"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "कथा सम्राट प्रेमचंद का वह कौन सा अंतिम और पूर्ण उपन्यास है जिसे कृषक जीवन का महाकाव्य कहा जाता है?", options: ["गोदान", "गबन", "रंगभूमि", "सेवासदन"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "भारतेन्दु हरिश्चंद्र द्वारा रचित किस प्रसिद्ध नाटक में अंग्रेजी शासन की कमियों पर तीखा व्यंग्य किया गया है?", options: ["भारत दुर्दशा", "अंधेर नगरी", "सत्य हरिश्चंद्र", "मुद्राराक्षस"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Into how many periods did Acharya Ramchandra Shukla divide the history of Hindi literature?", options: ["Four periods", "Three periods", "Five periods", "Six periods"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "The 'Saguna Kavyadhara' of the Bhakti period is divided into which two main branches?", options: ["Ramashrayi and Krishnashrayi", "Gyanashrayi and Premashrayi", "Sant and Sufi poetry", "None of these"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Which famous elegy poem did Suryakant Tripathi 'Nirala' write on the death of his daughter?", options: ["Saroj Smriti", "Ram Ki Shakti Puja", "Kukurmutta", "Anamika"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Which last completed novel of Premchand is called the epic of peasant life?", options: ["Godan", "Gaban", "Rangbhoomi", "Sevasadan"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Which famous play written by Bhartendu Harishchandra severely criticizes British rule?", options: ["Bharat Durdasha", "Andher Nagri", "Satya Harishchandra", "Mudrarakshas"], correct: 0 },

  // ==========================================
  // 11. अंग्रेजी साहित्य (English Literature) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "english_lit", lang: "hi", question: "विलियम वर्डसवर्थ और एस. टी. कोलरिज की किस संयुक्त कृति के प्रकाशन से 1798 में रोमांटिक युग की शुरुआत मानी जाती है?", options: ["लिरिकल बैलाड्स (Lyrical Ballads)", "प्रील्यूड", "कुबला खान", "बायोग्राफिया लिटरेरिया"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "जॉन मिल्टन द्वारा रचित प्रसिद्ध महाकाव्य 'पैराडाइज लॉस्ट' (Paradise Lost) किस काव्य शैली (Verse) में लिखा गया है?", options: ["ब्लैंक वर्स (Blank Verse)", "राइम रॉयल", "फ्री वर्स", "हीरोइक कपलेट"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "उपन्यास 'प्राइड एंड प्रेजुडिस' (Pride and Prejudice) की लेखिका कौन हैं जो अपने सामाजिक उपन्यासों के लिए प्रसिद्ध हैं?", options: ["जेन ऑस्टेन", "शार्लेट ब्रोंटे", "जॉर्ज एलियट", "वर्जिलिया वुल्फ"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "टी. एस. एलियट की प्रसिद्ध आधुनिक कविता 'द वेस्ट लैंड' (The Waste Land) किस वर्ष प्रकाशित हुई थी?", options: ["1922", "1915", "1930", "1925"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "चार्ल्स डिकेंस का कौन सा प्रसिद्ध उपन्यास एक अनाथ बच्चे के जीवन संघर्ष पर आधारित है और औद्योगिक क्रांति की कमियों को दिखाता है?", options: ["ओलीवर ट्विस्ट (Oliver Twist)", "ग्रेट एक्सपेक्टेशंस", "अ टेल ऑफ टू सिटीज", "डेविड कॉपरफील्ड"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "The publication of which joint work by Wordsworth and Coleridge in 1798 marks the beginning of the Romantic Age?", options: ["Lyrical Ballads", "The Prelude", "Kubla Khan", "Biographia Literaria"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "John Milton's famous epic masterpiece 'Paradise Lost' is written in which verse form?", options: ["Blank Verse", "Rhyme Royal", "Free Verse", "Heroic Couplet"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who is the author of the famous novel 'Pride and Prejudice'?", options: ["Jane Austen", "Charlotte Bronte", "George Eliot", "Virginia Woolf"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "In which year was T.S. Eliot's landmark modernist poem 'The Waste Land' published?", options: ["1922", "1915", "1930", "1925"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Which famous novel by Charles Dickens follows the struggles of an orphan boy in industrial London?", options: ["Oliver Twist", "Great Expectations", "A Tale of Two Cities", "David Copperfield"], correct: 0 },

  // ==========================================
  // 12. लेखाकर्म (Accountancy) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "accountancy", lang: "hi", question: "साझेदारी विलेख (Partnership Deed) की अनुपस्थिति में साझेदारों के बीच लाभ-हानि का विभाजन किस प्रकार किया जाता है?", options: ["समान अनुपात में (Equally)", "पूंजी के अनुपात में", "कार्य के अनुसार", "केवल सक्रिय साझेदार को"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "कंपनी द्वारा अंशों के समर्पण या किस्तों का भुगतान न करने पर अंशों का हरण (Forfeiture of Shares) करने पर 'अंश हरण खाते' का शेष कहाँ ट्रांसफर होता है?", options: ["पूंजी आरक्षित खाता (Capital Reserve Account)", "सामान्य आरक्षित खाता", "लाभ-हानि खाता", "कोई नहीं"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "साझेदार के अवकाश ग्रहण (Retirement) करने पर उसकी हिस्सेदारी की ख्याति (Goodwill) शेष साझेदारों द्वारा किस अनुपात में वहन की जाती है?", options: ["फायदे के अनुपात में (Gaining Ratio)", "त्याग के अनुपात में", "पुराने अनुपात में", "पूंजी अनुपात में"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "कंपनी के ऋणपत्रों (Debentures) पर दिया जाने वाला ब्याज कंपनी के लाभों पर क्या माना जाता है?", options: ["लाभों पर प्रभार (Charge against profits)", "लाभों का नियोजन", "विविध व्यय", "कोई नहीं"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "गैर-व्यापारिक संस्थाओं (NPO) द्वारा बनाया जाने वाला 'आय-व्यय खाता' (Income and Expenditure Account) किस प्रकृति का होता है?", options: ["नाममात्र खाता (Nominal Account)", "वास्तविक खाता", "व्यक्तिगत खाता", "कोई नहीं"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "In the absence of a Partnership Deed, how is profit or loss shared among partners?", options: ["Equally", "In Capital Ratio", "According to work", "Only to active partners"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "Upon forfeiture of shares, the balance of the Shares Forfeiture Account is transferred to which account?", options: ["Capital Reserve Account", "General Reserve Account", "Profit & Loss Account", "None of these"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "On retirement of a partner, his share of goodwill is borne by remaining partners in which ratio?", options: ["Gaining Ratio", "Sacrificing Ratio", "Old Ratio", "Capital Ratio"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "Interest paid on a company's debentures is considered as a:", options: ["Charge against profits", "Appropriation of profits", "Miscellaneous expense", "None of these"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "The Income and Expenditure Account prepared by an NPO is of which nature?", options: ["Nominal Account", "Real Account", "Personal Account", "None of these"], correct: 0 },

  // ==========================================
  // 13. व्यावसायिक अध्ययन (Business Studies) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "business", lang: "hi", question: "हेनरी फेयोल द्वारा प्रतिपादित प्रबंध के कुल कितने सिद्धांतों का उल्लेख कक्षा 12 के पाठ्यक्रम में है?", options: ["14 सिद्धांत", "10 सिद्धांत", "5 सिद्धांत", "12 सिद्धांत"], correct: 0 },
  { subject: "business", lang: "hi", question: "प्रबंध का वह कौन सा कार्य है जिसके अंतर्गत सही कार्य पर सही योग्यता वाले व्यक्ति की नियुक्ति की जाती है?", options: ["नियुक्तिकरण (Staffing)", "नियोजन", "संगठन", "निर्देशन"], correct: 0 },
  { subject: "business", lang: "hi", question: "अंगूरीलता संदेशवाहन (Grapevine Communication) निम्नलिखित में से किस प्रकार के संगठन या संदेशवाहन का उदाहरण है?", options: ["अनौपचारिक संदेशवाहन (Informal)", "औपचारिक संदेशवाहन", "लिखित संदेशवाहन", "कोई नहीं"], correct: 0 },
  { subject: "business", lang: "hi", question: "एफ. डब्ल्यू. टेलर द्वारा विकसित 'क्रियात्मक फोरमैनशिप' (Functional Foremanship) के अंतर्गत कुल कितने नायक या फोरमैन होते हैं?", options: ["8 फोरमैन", "4 फोरमैन", "6 फोरमैन", "10 फोरमैन"], correct: 0 },
  { subject: "business", lang: "hi", question: "वित्तीय बाजार के अंतर्गत 'मुद्रा बाजार' (Money Market) में किस प्रकार की प्रतिभूतियों का लेन-देन होता है?", options: ["अल्पकालीन प्रतिभूतियां (Short-term)", "दीर्घकालीन प्रतिभूतियां", "मध्यमकालीन प्रतिभूतियां", "कोई नहीं"], correct: 0 },
  { subject: "business", lang: "en", question: "How many Principles of Management were propagated by Henri Fayol?", options: ["14 Principles", "10 Principles", "5 Principles", "12 Principles"], correct: 0 },
  { subject: "business", lang: "en", question: "Which function of management involves placing the right person with the right qualification at the right job?", options: ["Staffing", "Planning", "Organizing", "Directing"], correct: 0 },
  { subject: "business", lang: "en", question: "Grapevine Communication is an example of which type of communication network?", options: ["Informal Communication", "Formal Communication", "Written Communication", "None of these"], correct: 0 },
  { subject: "business", lang: "en", question: "Under Functional Foremanship developed by F.W. Taylor, how many total foremen are specified?", options: ["8 Foremen", "4 Foremen", "6 Foremen", "10 Foremen"], correct: 0 },
  { subject: "business", lang: "en", question: "In a financial market, the Money Market deals with what type of securities?", options: ["Short-term securities", "Long-term securities", "Medium-term securities", "None of these"], correct: 0 },

  // ==========================================
  // 14. उद्यमशीलता (Entrepreneurship) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "entrepreneurship", lang: "hi", question: "व्यावसायिक अवसरों की खोज या पहचान के लिए उद्यमी को पर्यावरण के किन घटकों का विश्लेषण करना पड़ता है?", options: ["आंतरिक और बाह्य दोनों पर्यावरण", "केवल आंतरिक पर्यावरण", "केवल सरकारी नीतियों का", "कोई नहीं"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "एक परियोजना प्रतिवेदन या बिजनेस प्लान (Project Report) तैयार करने का मुख्य उद्देश्य क्या होता है?", options: ["ऋण प्राप्त करने और मार्गदर्शक के रूप में", "केवल टैक्स बचाने के लिए", "प्रतियोगियों को डराने के लिए", "कोई नहीं"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "कार्यशील पूंजी (Working Capital) की गणना करने का सही लेखांकन सूत्र क्या है?", options: ["चालू संपत्ति - चालू दायित्व (CA - CL)", "कुल संपत्ति - कुल दायित्व", "चालू संपत्ति + चालू दायित्व", "स्थिर संपत्ति - चालू दायित्व"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "विपणन मिश्रण (Marketing Mix) के अंतर्गत आने वाले '4 Ps' में कौन सा तत्व शामिल नहीं है?", options: ["पॉलिसी (Policy)", "प्रोडक्ट (Product)", "प्राइस (Price)", "प्लेस (Place)"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "किसी नए उद्यम को स्थापित करते समय आने वाली सबसे पहली व्यावहारिक कठिनाई या चरण कौन सा है?", options: ["व्यावसायिक विचार का चयन (Idea Generation)", "पूंजी जुटाना", "फैक्ट्री का निर्माण", "कर्मचारियों की भर्ती"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "To scan business opportunities, an entrepreneur must analyze which environmental components?", options: ["Both Internal and External environment", "Internal environment only", "Government policies only", "None of these"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What is the primary objective of preparing a Project Report/Business Plan?", options: ["For securing loans and as a guiding tool", "Only for tax saving", "To intimidate competitors", "None of these"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What is the correct accounting formula to calculate Working Capital?", options: ["Current Assets - Current Liabilities (CA - CL)", "Total Assets - Total Liabilities", "Current Assets + Current Liabilities", "Fixed Assets - Current Liabilities"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "Which element is not included in the '4 Ps' of the Marketing Mix?", options: ["Policy", "Product", "Price", "Place"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "What is the very first practical step or stage when starting a new venture?", options: ["Selection of a business idea (Idea Generation)", "Raising capital", "Factory construction", "Recruiting employees"], correct: 0 },

  // ==========================================
  // 15. भौतिकी (Physics) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "physics", lang: "hi", question: "गाउस का नियम (Gauss's Law) किसी बंद पृष्ठ से गुजरने वाले कुल विद्युत फ्लक्स और आवेश में क्या संबंध बताता है?", options: ["Φ = q / ε₀", "Φ = q · ε₀", "Φ = ε₀ / q", "Φ = E · dA"], correct: 0 },
  { subject: "physics", lang: "hi", question: "लेंज का नियम (Lenz's Law) निम्नलिखित में से किस भौतिक राशि के संरक्षण नियम पर आधारित है?", options: ["ऊर्जा संरक्षण (Conservation of Energy)", "आवेश संरक्षण", "संवेग संरक्षण", "द्रव्यमान संरक्षण"], correct: 0 },
  { subject: "physics", lang: "hi", question: "गोलीय दर्पण या लेंस के लिए फोकस दूरी (f) और वक्रता त्रिज्या (R) में क्या संबंध होता है?", options: ["f = R / 2", "f = 2R", "f = R", "f = 1 / R"], correct: 0 },
  { subject: "physics", lang: "hi", question: "प्रकाश विद्युत प्रभाव (Photoelectric Effect) की सफल व्याख्या करने के लिए अल्बर्ट आइंस्टीन को किस वर्ष का नोबेल पुरस्कार मिला था?", options: ["1921", "1905", "1911", "1930"], correct: 0 },
  { subject: "physics", lang: "hi", question: "p-प्रकार के अर्धचालक (p-type Semiconductor) बनाने के लिए शुद्ध जर्मेनियम में किस संयोजकता वाली अशुद्धि मिलाई जाती है?", options: ["त्रि-संयोजी (Trivalent, जैसे बोरॉन)", "पंच-संयोजी", "चतुष्-संयोजी", "शून्य संयोजी"], correct: 0 },
  { subject: "physics", lang: "en", question: "What relation does Gauss's Law establish between the total electric flux and enclosed charge?", options: ["Φ = q / ε₀", "Φ = q · ε₀", "Φ = ε₀ / q", "Φ = E · dA"], correct: 0 },
  { subject: "physics", lang: "en", question: "Lenz's Law of electromagnetic induction is based on which conservation law?", options: ["Conservation of Energy", "Conservation of Charge", "Conservation of Momentum", "Conservation of Mass"], correct: 0 },
  { subject: "physics", lang: "en", question: "What is the relationship between focal length (f) and radius of curvature (R) for a spherical mirror?", options: ["f = R / 2", "f = 2R", "f = R", "f = 1 / R"], correct: 0 },
  { subject: "physics", lang: "en", question: "Albert Einstein was awarded the Nobel Prize for his successful explanation of which phenomenon?", options: ["Photoelectric Effect", "Theory of Relativity", "Brownian Motion", "X-Ray Diffraction"], correct: 0 },
  { subject: "physics", lang: "en", question: "To prepare a p-type semiconductor, pure Germanium is doped with an impurity of which valency?", options: ["Trivalent (e.g., Boron)", "Pentavalent", "Tetravalent", "Zero valency"], correct: 0 },

  // ==========================================
  // 16. रसायन विज्ञान (Chemistry) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "chemistry", lang: "hi", question: "शून्य कोटि की अभिक्रिया (Zero Order Reaction) के लिए वेग स्थिरांक (Rate Constant) की इकाई क्या होती है?", options: ["मोल लीटर⁻¹ सेकंड⁻¹", "सेकंड⁻¹", "लीटर मोल⁻¹ सेकंड⁻¹", "मोल⁻¹ सेकंड⁻¹"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "निम्नलिखित में से कौन सा क्रिस्टलीय ठोस का दोष घनत्व को कम कर देता है (जैसे NaCl में)?", options: ["शॉटकी दोष (Schottky Defect)", "फ्रेंकेल दोष", "अंतराकाशी दोष", "धातु आधिक्य दोष"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "ऐल्किल हैलाइड की शुष्क ईथर की उपस्थिति में सोडियम धातु से क्रिया कराने पर ऐल्केन बनने की अभिक्रिया क्या कहलाती है?", options: ["वुर्ट्ज अभिक्रिया (Wurtz Reaction)", "कैनिजारो अभिक्रिया", "रीमर-टीमैन अभिक्रिया", "हॉफमैन अभिक्रिया"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "लोहे के निष्कर्षण में वात्या भट्टी (Blast Furnace) में प्रयुक्त होने वाला मुख्य गालक (Flux) कौन सा है?", options: ["चूना पत्थर (CaCO³)", "सिलिका", "कोक", "कोई नहीं"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "विद्युत अपघटन के नियमों का प्रतिपादन किस वैज्ञानिक ने किया था जिसके दो मुख्य नियम सिलेबस में हैं?", options: ["माइकल फैराडे", "अर्नहिनियम", "कोलराउश", "नेर्नस्ट"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "What is the unit of Rate Constant for a Zero Order Reaction?", options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol⁻¹ s⁻¹"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Which defect in crystalline solids decreases the density of the crystal?", options: ["Schottky Defect", "Frenkel Defect", "Interstitial Defect", "Metal Excess Defect"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "What is the reaction called when an alkyl halide reacts with sodium metal in dry ether to form an alkane?", options: ["Wurtz Reaction", "Cannizzaro Reaction", "Reimer-Tiemann Reaction", "Hofmann Reaction"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Which material acts as the primary flux during the extraction of iron in a blast furnace?", options: ["Limestone (CaCO³)", "Silica", "Coke", "None of these"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Which scientist formulated the Laws of Electrolysis widely studied in electrochemistry?", options: ["Michael Faraday", "Arrhenius", "Kohlrausch", "Nernst"], correct: 0 },

  // ==========================================
  // 17. जीव विज्ञान (Biology) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "biology", lang: "hi", question: "डीएनए (DNA) के दो धागे आपस में किस रासायनिक बंध द्वारा जुड़े होते हैं?", options: ["हाइड्रोजन बंध (Hydrogen Bond)", "पेप्टाइड बंध", "फॉस्फोडाइएस्टर बंध", "ग्लाइकोसिडिक बंध"], correct: 0 },
  { subject: "biology", lang: "hi", question: "मेंडल ने अपने अनुवांशिकता के नियमों को प्रतिपादित करने के लिए किस पौधे का चयन किया था और उसका वैज्ञानिक नाम क्या है?", options: ["उद्यान मटर (Pisum sativum)", "मीठी मटर", "जंगली मटर", "गुलाब"], correct: 0 },
  { subject: "biology", lang: "hi", question: "मानव मादा के मासिक चक्र (Menstrual Cycle) के किस दिन अंडोत्सर्ग (Ovulation) सामान्यतः होता है?", options: ["14वें दिन", "5वें दिन", "28वें दिन", "10वें दिन"], correct: 0 },
  { subject: "biology", lang: "hi", question: "मलेरिया रोग फैलाने वाले परजीवी 'प्लाज्मोडियम' का वाहक कौन सा मच्छर होता है?", options: ["मादा एनोफिलीज मच्छर", "मादा एडीज मच्छर", "नर एनोफिलीज मच्छर", "क्यूलेक्स मच्छर"], correct: 0 },
  { subject: "biology", lang: "hi", question: "डीएनए से आरएनए (RNA) बनने की प्रक्रिया को अनुवांशिकी में क्या कहा जाता है?", options: ["अनुलेखन (Transcription)", "अनुवादन (Translation)", "प्रतिकृतियन", "उत्परिवर्तन"], correct: 0 },
  { subject: "biology", lang: "en", question: "The two strands of a DNA double helix are held together by which chemical bonds?", options: ["Hydrogen Bonds", "Peptide Bonds", "Phosphodiester Bonds", "Glycosidic Bonds"], correct: 0 },
  { subject: "biology", lang: "en", question: "Which plant did Mendel select for his genetics experiments and what is its scientific name?", options: ["Garden Pea (Pisum sativum)", "Sweet Pea", "Wild Pea", "Rose"], correct: 0 },
  { subject: "biology", lang: "en", question: "On which day of a typical human menstrual cycle does ovulation generally occur?", options: ["14th day", "5th day", "28th day", "10th day"], correct: 0 },
  { subject: "biology", lang: "en", question: "Which mosquito acts as the vector for the malaria-causing parasite Plasmodium?", options: ["Female Anopheles mosquito", "Female Aedes mosquito", "Male Anopheles mosquito", "Culex mosquito"], correct: 0 },
  { subject: "biology", lang: "en", question: "What is the process of synthesizing RNA from a DNA template called?", options: ["Transcription", "Translation", "Replication", "Mutation"], correct: 0 },

  // ==========================================
  // 18. बायोटेक्नोलॉजी (Biotechnology) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "biotech", lang: "hi", question: "पीसीआर (PCR - Polymerase Chain Reaction) तकनीक में प्रयुक्त होने वाला 'Taq पॉलीमरेज' एंजाइम किस बैक्टीरिया से निकाला जाता है?", options: ["थर्मस एक्वाटिकस (Thermus aquaticus)", "ई. कोलाई", "बैसिलस थुरिंगिएंसिस", "स्यूडोमोनास"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "जेल इलेक्ट्रोफोरेसिस (Gel Electrophoresis) तकनीक में डीएनए टुकड़ों को देखने के लिए किस डाई या रंजक का उपयोग किया जाता है?", options: ["एथिडियम ब्रोमाइड (Ethidium Bromide)", "मिथाइलीन ब्लू", "सैफ्रानिन", "क्रिस्टल वायलेट"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "अनुवांशिक रूपांतरित फसल 'Bt कॉटन' में 'Bt' शब्द निम्नलिखित में से किसको दर्शाता है?", options: ["एक बैक्टीरिया (Bacillus thuringiensis)", "बायोटेक्नोलॉजी", "बोटैनिकल गार्डन", "ब्रिटिश तकनीक"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "डीएनए को विशिष्ट स्थानों पर काटने वाले एंजाइम 'प्रतिबंधन एंडोन्यूक्लिएज' (EcoRI) में 'co' अक्षर क्या दर्शाता है?", options: ["कोलाई प्रजाति (coli)", "को-एंजाइम", "कोलोन", "कोई नहीं"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "वह कौन सा पहला अनुवांशिक रूपांतरित (Transgenic) जंतु था जिसे 1997 में भेड़ के रूप में क्लोन किया गया था?", options: ["डॉली भेड़ (Dolly)", "रोज़ी गाय", "एंडी बंदर", "पॉली भेड़"], correct: 0 },
  { subject: "biotech", lang: "en", question: "The heat-stable 'Taq Polymerase' enzyme used in PCR is isolated from which bacteria?", options: ["Thermus aquaticus", "E. coli", "Bacillus thuringiensis", "Pseudomonas"], correct: 0 },
  { subject: "biotech", lang: "en", question: "Which dye is used to stain DNA fragments in Gel Electrophoresis to make them visible under UV light?", options: ["Ethidium Bromide", "Methylene Blue", "Safranin", "Crystal Violet"], correct: 0 },
  { subject: "biotech", lang: "en", question: "In the genetically modified crop 'Bt Cotton', what does the abbreviation 'Bt' stand for?", options: ["A bacterium (Bacillus thuringiensis)", "Biotechnology", "Botanical Garden", "British Technology"], correct: 0 },
  { subject: "biotech", lang: "en", question: "In the restriction endonuclease enzyme EcoRI, what does the part 'co' represent?", options: ["Species name (coli)", "Co-enzyme", "Colon", "None of these"], correct: 0 },
  { subject: "biotech", lang: "en", question: "Which was the first transgenic mammal successfully cloned from an adult somatic cell in 1997?", options: ["Dolly (Sheep)", "Rosie (Cow)", "Andi (Monkey)", "Polly (Sheep)"], correct: 0 },

  // ==========================================
  // 19. गणित (Mathematics) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "maths", lang: "hi", question: "यदि दो सदिशों (Vectors) A और B के बीच का कोण 90° (लंबवत) है, तो उनका अदिश गुणनफल (Dot Product) A · B क्या होगा?", options: ["0", "1", "-1", "A × B"], correct: 0 },
  { subject: "maths", lang: "hi", question: "त्रिविमीय ज्यामिति में किसी रेखा की दिक्-कोज्याओं (Direction Cosines) के वर्गों का योग l² + m² + n² हमेशा किसके बराबर होता है?", options: ["1", "0", "2", "-1"], correct: 0 },
  { subject: "maths", lang: "hi", question: "मुख्य मान शाखा (Principal Value Branch) के अंतर्गत sin⁻¹(1) का मान निम्नलिखित में से क्या होगा?", options: ["π / 2", "π", "0", "- π / 2"], correct: 0 },
  { subject: "maths", lang: "hi", question: "यदि एक आव्यूह (Matrix) A का सारणिक |A| ≠ 0 है, तो वह आव्यूह किस प्रकार का आव्यूह कहलाता है?", options: ["व्युत्क्रमणीय आव्यूह (Invertible / Non-singular)", "अव्युत्क्रमणीय आव्यूह", "शून्य आव्यूह", "अदिश आव्यूह"], correct: 0 },
  { subject: "maths", lang: "hi", question: "अवकल समीकरण (Differential Equation) (d²y/dx²)³ + (dy/dx)⁴ + y = 0 की कोटि (Order) क्या होगी?", options: ["2", "3", "4", "1"], correct: 0 },
  { subject: "maths", lang: "en", question: "If two vectors A and B are perpendicular to each other (90°), what is their Dot Product A · B?", options: ["0", "1", "-1", "A × B"], correct: 0 },
  { subject: "maths", lang: "en", question: "In 3D geometry, the sum of squares of the direction cosines l² + m² + n² is always equal to:", options: ["1", "0", "2", "-1"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the principal value of sin⁻¹(1)?", options: ["π / 2", "π", "0", "- π / 2"], correct: 0 },
  { subject: "maths", lang: "en", question: "If the determinant of a matrix |A| ≠ 0, then the matrix is called a/an:", options: ["Non-singular / Invertible Matrix", "Singular Matrix", "Zero Matrix", "Scalar Matrix"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the Order of the differential equation (d²y/dx²)³ + (dy/dx)⁴ + y = 0?", options: ["2", "3", "4", "1"], correct: 0 },

  // ==========================================
  // 20. एप्लाइड मैथ (Applied Mathematics) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "applied_math", lang: "hi", question: "वित्तीय गणित में प्रभावी ब्याज दर (Effective Rate of Interest) और नाममात्र दर (Nominal Rate) में क्या संबंध होता है जब चक्रवृद्धि ब्याज छमाही या तिमाही हो?", options: ["प्रभावी दर हमेशा नाममात्र दर से अधिक या बराबर होती है", "प्रभावी दर छोटी होती है", "दोनों बिल्कुल समान होती हैं", "कोई संबंध नहीं है"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "काल श्रेणी विश्लेषण (Time Series Analysis) में फसल की बुनाई या त्योहारों के कारण आने वाले नियमित उतार-चढ़ाव को क्या कहा जाता है?", options: ["मौसमी उच्चावचन (Seasonal Variations)", "दीर्घकालीन रुझान", "चक्रीय उतार-चढ़ाव", "अनियमित उतार-चढ़ाव"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "प्रतिगमन रेखाओं (Regression Lines) Y on X और X on Y का कटान बिन्दु हमेशा किस निर्देशांक को प्रदर्शित करता है?", options: ["माध्य मूल्यों को (Mean of X and Y)", "बहुलक को", "मध्यिका को", "शून्य को"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "एक वित्तीय वार्षिकी (Annuity) जिसमें भुगतान प्रत्येक अवधि या अंतराल के अंत में किया जाता है, क्या कहलाती है?", options: ["साधारण वार्षिकी (Ordinary Annuity)", "देय वार्षिकी (Annuity Due)", "स्थायी वार्षिकी", "कोई नहीं"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "सांख्यिकी में प्वासों वितरण (Poisson Distribution) का उपयोग किस प्रकार की घटनाओं के लिए किया जाता है?", options: ["दुर्लभ घटनाओं के लिए (Rare Events)", "नियमित घटनाओं के लिए", "सतत चरों के लिए", "कोई नहीं"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What is the relationship between Effective Rate and Nominal Rate of Interest when compounding is done more than once a year?", options: ["Effective rate is always greater than or equal to nominal rate", "Effective rate is smaller", "Both are exactly equal", "There is no relation"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "In Time Series Analysis, regular fluctuations caused by seasons or festivals are termed as:", options: ["Seasonal Variations", "Secular Trend", "Cyclical Fluctuation", "Irregular Variation"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "The point of intersection of two regression lines always represents which coordinates?", options: ["Mean values of X and Y", "Mode values", "Median values", "Origin"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "An annuity in which payments are made at the end of each period is known as:", options: ["Ordinary Annuity", "Annuity Due", "Perpetuity", "None of these"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "In statistics, Poisson Distribution is primarily used to model which type of events?", options: ["Rare Events", "Regular Events", "Continuous Variables", "None of these"], correct: 0 },

  // ==========================================
  // 21. कंप्यूटर विज्ञान (Computer Science) - SET 4 (Board Exam Special)
  // ==========================================
  { subject: "computer_science", lang: "hi", question: "डेटाबेस में प्राइमरी की (Primary Key) और फॉरेन की (Foreign Key) का मुख्य अंतर क्या सुनिश्चित करता है?", options: ["प्राइमरी की डुप्लिकेट मान स्वीकार नहीं करती, फॉरेन की दो टेबल्स को जोड़ती है", "दोनों में कोई अंतर नहीं है", "फॉरेन की हमेशा यूनिक होती है", "कोई नहीं"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "पायथन में किसी डिक्शनरी (Dictionary) के सभी की-वैल्यू पेयर्स को एक साथ डिलीट करने के लिए किस मेथड का उपयोग होता है?", options: ["clear()", "delete()", "remove()", "pop()"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "कंप्यूटर नेटवर्किंग में ओएसआई (OSI Model) की किस लेयर पर आईपी एड्रेस (IP Address) और राउटिंग का कार्य होता है?", options: ["नेटवर्क लेयर (Network Layer)", "फिजिकल लेयर", "डेटा लिंक लेयर", "ट्रांसपोर्ट लेयर"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "स्टैक (Stack) डेटा स्ट्रक्चर में सबसे अंत में जोड़े गए एलिमेंट को सबसे पहले हटाने के नियम को क्या कहते हैं?", options: ["LIFO (Last In First Out)", "FIFO", "Linear", "Sorting"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "साइबर सुरक्षा में 'फिशिंग' (Phishing) हमले का मुख्य उद्देश्य क्या होता है?", options: ["धोखे से यूजर का यूजरनेम, पासवर्ड और वित्तीय डेटा चुराना", "कंप्यूटर की स्पीड बढ़ाना", "फाइल फॉर्मेट बदलना", "कोई नहीं"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "What is the primary distinction between a Primary Key and a Foreign Key in a database?", options: ["Primary key rejects duplicates, foreign key links two tables", "There is no distinction", "Foreign key must always be unique", "None of these"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "Which method is used to remove all items from a Dictionary in Python?", options: ["clear()", "delete()", "remove()", "pop()"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "At which layer of the OSI Model do IP addresses and routing functions operate?", options: ["Network Layer", "Physical Layer", "Data Link Layer", "Transport Layer"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "What is the principle of removing the last-added element first in a Stack data structure called?", options: ["LIFO (Last In First Out)", "FIFO", "Linear", "Sorting"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "What is the primary objective of a 'Phishing' attack in cybersecurity?", options: ["To steal sensitive data like usernames, passwords, and credit card details", "To optimize system performance", "To change file extensions", "None of these"], correct: 0 },
    // ==========================================
  // 1. इतिहास (History) - SET 5
  // ==========================================
  { subject: "history", lang: "hi", question: "अशोक के अभिलेखों को सर्वप्रथम 1837 ई. में पढ़ने में किस विद्वान को सफलता मिली थी?", options: ["जेम्स प्रिंसेप", "जॉन मार्शल", "कनिंघम", "ह्वेनसांग"], correct: 0 },
  { subject: "history", lang: "hi", question: "सूफी संत ख्वाजा मुईनुद्दीन चिश्ती की दरगाह राजस्थान के किस शहर में स्थित है?", options: ["अजमेर", "जयपुर", "उदयपुर", "जोधपुर"], correct: 0 },
  { subject: "history", lang: "en", question: "Which scholar successfully deciphered Ashoka's inscriptions for the first time in 1837?", options: ["James Prinsep", "John Marshall", "Alexander Cunningham", "Xuanzang"], correct: 0 },
  { subject: "history", lang: "en", question: "The Dargah of Sufi Saint Khwaja Moinuddin Chishti is located in which city of Rajasthan?", options: ["Ajmer", "Jaipur", "Udaipur", "Jodhpur"], correct: 0 },

  // ==========================================
  // 2. राजनीति विज्ञान (Political Science) - SET 5
  // ==========================================
  { subject: "political", lang: "hi", question: "गुटनिरपेक्ष आंदोलन (NAM) का प्रथम शिखर सम्मेलन 1961 में कहाँ आयोजित किया गया था?", options: ["बेलग्रेड", "नई दिल्ली", "काहिरा", "बांडुंग"], correct: 0 },
  { subject: "political", lang: "hi", question: "स्वतंत्र भारत के प्रथम चुनाव आयुक्त (First Chief Election Commissioner) कौन थे?", options: ["सुकुमार सेन", "टी. एन. शेषन", "के. वी. के. सुंदरम", "डॉ. राजेन्द्र प्रसाद"], correct: 0 },
  { subject: "political", lang: "en", question: "Where was the first summit of the Non-Aligned Movement (NAM) held in 1961?", options: ["Belgrade", "New Delhi", "Cairo", "Bandung"], correct: 0 },
  { subject: "political", lang: "en", question: "Who was the first Chief Election Commissioner of independent India?", options: ["Sukumar Sen", "T. N. Seshan", "K. V. K. Sundaram", "Dr. Rajendra Prasad"], correct: 0 },

  // ==========================================
  // 3. भूगोल (Geography) - SET 5
  // ==========================================
  { subject: "geography", lang: "hi", question: "निम्नलिखित में से कौन सा एक विरल जनसंख्या (Sparse Population) वाला क्षेत्र नहीं है?", options: ["दक्षिण-पूर्वी एशिया", "अटाकामा मरुस्थल", "ध्रुवीय प्रदेश", "भूमध्यरेखीय प्रदेश"], correct: 0 },
  { subject: "geography", lang: "hi", question: "संसार का सबसे व्यस्ततम समुद्री मार्ग कौन सा है जो दो विकसित क्षेत्रों को जोड़ता है?", options: ["उत्तरी अटलांटिक समुद्री मार्ग", "स्वेज नहर मार्ग", "पनामा नहर मार्ग", "केप मार्ग"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which of the following is NOT a region of sparse population?", options: ["South-East Asia", "Atacama Desert", "Polar Regions", "Equatorial Region"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which is the busiest ocean trade route in the world, connecting two highly developed regions?", options: ["North Atlantic Ocean Route", "Suez Canal Route", "Panama Canal Route", "Cape of Good Hope Route"], correct: 0 },

  // ==========================================
  // 4. अर्थशास्त्र (Economics) - SET 5
  // ==========================================
  { subject: "economics", lang: "hi", question: "मांग की लोच (Elasticity of Demand) पूर्णतः लोचदार होने पर मांग वक्र का आकार कैसा होता है?", options: ["X-अक्ष के समांतर क्षैतिज रेखा", "Y-अक्ष के समांतर लंबवत रेखा", "नीचे की ओर गिरता हुआ", "आयताकार अतिपरवलय"], correct: 0 },
  { subject: "economics", lang: "hi", question: "मुद्रा आपूर्ति के किस माप को 'तरलतम माप' (Most Liquid Measure) माना जाता है?", options: ["M1", "M2", "M3", "M4"], correct: 0 },
  { subject: "economics", lang: "en", question: "What is the shape of the demand curve when the Elasticity of Demand is perfectly elastic?", options: ["Horizontal line parallel to X-axis", "Vertical line parallel to Y-axis", "Downward sloping", "Rectangular Hyperbola"], correct: 0 },
  { subject: "economics", lang: "en", question: "Which measure of money supply is considered the most liquid measure?", options: ["M1", "M2", "M3", "M4"], correct: 0 },

  // ==========================================
  // 5. समाजशास्त्र (Sociology) - SET 5
  // ==========================================
  { subject: "sociology", lang: "hi", question: "प्रसिद्ध समाजशास्त्री एम. एन. श्रीनिवास ने जाति परिवर्तन को समझाने के लिए किस अवधारणा का प्रतिपादन किया था?", options: ["संस्कृतीकरण (Sanskritization)", "पश्चिमीकरण", "आधुनिकीकरण", "धर्मनिरपेक्षीकरण"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "भारत में किस वर्ष को 'जनसांख्यिकीय विभाजन का वर्ष' (Year of Great Divide) कहा जाता है क्योंकि इसके बाद जनसंख्या तेजी से बढ़ी?", options: ["1921", "1951", "1947", "1911"], correct: 0 },
  { subject: "sociology", lang: "en", question: "Which concept was introduced by M.N. Srinivas to explain cultural and social change in rural India?", options: ["Sanskritization", "Westernization", "Modernization", "Secularization"], correct: 0 },
  { subject: "sociology", lang: "en", question: "Which year is known as the 'Year of Great Divide' in demographic history of India?", options: ["1921", "1951", "1947", "1911"], correct: 0 },

  // ==========================================
  // 6. मनोविज्ञान (Psychology) - SET 5
  // ==========================================
  { subject: "psychology", lang: "hi", question: "सिगमंड फ्रायड द्वारा प्रतिपादित व्यक्तित्व संरचना के तीन घटकों 'इड, ईगो और सुपरइगो' में से कौन सा घटक नैतिक सिद्धांतों पर चलता है?", options: ["सुपरइगो (Super-Ego)", "इड", "ईगो", "चेतन मन"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "रोर्शा मसीलक्ष्य परीक्षण (Rorschach Inkblot Test) का उपयोग मनोविज्ञान में किसके मापन के लिए किया जाता है?", options: ["व्यक्तित्व (Personality)", "बुद्धि", "सृजनात्मकता", "अभिवृत्ति"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Among Id, Ego, and Super-Ego proposed by Freud, which component works on the moral principle?", options: ["Super-Ego", "Id", "Ego", "Conscious mind"], correct: 0 },
  { subject: "psychology", lang: "en", question: "The Rorschach Inkblot Test is widely used in psychology to measure:", options: ["Personality", "Intelligence", "Creativity", "Aptitude"], correct: 0 },

  // ==========================================
  // 7. गृह विज्ञान (Home Science) - SET 5
  // ==========================================
  { subject: "home_science", lang: "hi", question: "रक्तहीनता या एनीमिया (Anemia) रोग भोजन में किस खनिज तत्व की कमी के कारण होता है?", options: ["लोह तत्व (Iron)", "कैल्शियम", "आयोडीन", "फास्फोरस"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "कपड़ों से चाय या कॉफी के दाग हटाने के लिए निम्नलिखित में से किस घरेलू विलायक का उपयोग किया जाता है?", options: ["सुहागा (Borax) या गर्म पानी", "सिरका", "नमक", "मिट्टी का तेल"], correct: 0 },
  { subject: "home_science", lang: "en", question: "Anemia is caused due to the deficiency of which mineral element in the diet?", options: ["Iron", "Calcium", "Iodine", "Phosphorus"], correct: 0 },
  { subject: "home_science", lang: "en", question: "Which domestic reagent is commonly used to remove tea or coffee stains from fabrics?", options: ["Borax or hot water", "Vinegar", "Salt", "Kerosene"], correct: 0 },

  // ==========================================
  // 8. दर्शनशास्त्र (Philosophy) - SET 5
  // ==========================================
  { subject: "philosophy", lang: "hi", question: "गीता के अनुसार 'निष्काम कर्म' का वास्तविक तात्पर्य क्या है?", options: ["फल की इच्छा के बिना केवल कर्तव्य बुद्धि से कर्म करना", "कर्म का पूर्ण त्याग कर देना", "सकाम कर्म करना", "भाग्य के भरोसे बैठना"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "जैन दर्शन के अनुसार 'स्याद्वाद' या 'अनेकांतवाद' का मुख्य सिद्धांत क्या प्रदर्शित करता है?", options: ["ज्ञान की सापेक्षता (ज्ञान एकांगी नहीं बल्कि बहुआयामी होता है)", "ईश्वर की सत्ता", "कट्टरता", "शून्यवाद"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "According to the Bhagavad Gita, what is the true meaning of 'Nishkama Karma'?", options: ["Performing duty without attachment to the results", "Complete renunciation of action", "Action driven by desire", "Believing entirely in fate"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "According to Jain philosophy, what does the doctrine of 'Syadvada' or 'Anekantavada' represent?", options: ["Relativity of knowledge (Truth is multi-faceted)", "Existence of a creator God", "Dogmatism", "Nihilism"], correct: 0 },

  // ==========================================
  // 9. कानूनी अध्ययन (Legal Studies) - SET 5
  // ==========================================
  { subject: "legal_studies", lang: "hi", question: "न्याय के सिद्धांतों के तहत 'ऑडी अल्टरम पार्टम' (Audi Alteram Partem) का क्या अर्थ है?", options: ["दूसरे पक्ष को भी सुना जाना चाहिए (Hear the other side)", "कोई अपने मामले में जज नहीं हो सकता", "सच्चाई ही जीतेगी", "लिखित कानून सर्वोपरि है"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "संसद द्वारा पारित सूचना का अधिकार अधिनियम (RTI Act) भारत में किस वर्ष लागू किया गया था?", options: ["2005", "2000", "2010", "1995"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "What is the literal meaning of the principles of natural justice 'Audi Alteram Partem'?", options: ["No man should be condemned unheard / Hear the other side", "No one can be a judge in his own case", "Truth alone triumphs", "Written law is supreme"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "In which year was the Right to Information (RTI) Act implemented in India?", options: ["2005", "2000", "2010", "1995"], correct: 0 },

  // ==========================================
  // 10. हिंदी साहित्य (Hindi Literature) - SET 5
  // ==========================================
  { subject: "hindi_lit", lang: "hi", question: "छायावाद के चार प्रमुख स्तंभों में से किसे 'प्रकृति का सुकुमार कवि' कहा जाता है?", options: ["सुमित्रानंदन पंत", "जयशंकर प्रसाद", "सूर्यकांत त्रिपाठी निराला", "महादेवी वर्मा"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "कवि बिहारी मुख्य रूप से किस काल के कवि हैं और उनकी एकमात्र प्रसिद्ध रचना कौन सी है?", options: ["रीति काल - बिहारी सतसई", "भक्ति काल - सूरसागर", "वीरगाथा काल - पृथ्वीराज रासो", "आधुनिक काल - कामायनी"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Who among the four pillars of Chhayavad is known as the 'Poet of Nature'?", options: ["Sumitranandan Pant", "Jaishankar Prasad", "Suryakant Tripathi Nirala", "Mahadevi Verma"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Poet Bihari belonged to which period of Hindi literature and what is his single famous work?", options: ["Riti Kaal - Bihari Satsai", "Bhakti Kaal - Sursagar", "Veergatha Kaal - Prithviraj Raso", "Adhunik Kaal - Kamayani"], correct: 0 },

  // ==========================================
  // 11. अंग्रेजी साहित्य (English Literature) - SET 5
  // ==========================================
  { subject: "english_lit", lang: "hi", question: "विलियम शेक्सपियर द्वारा लिखित नाटक 'हैमलेट' (Hamlet) किस विधा की रचना है?", options: ["त्रासदी (Tragedy)", "कॉमेडी", "ऐतिहासिक नाटक", "रोमांस"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "अंग्रेजी कविता में 'सॉनेट' (Sonnet) कुल कितनी पंक्तियों की कविता होती है जिसका एक निश्चित छंद नियम होता है?", options: ["14 पंक्तियाँ", "10 पंक्तियाँ", "12 पंक्तियाँ", "16 पंक्तियाँ"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "The famous play 'Hamlet' written by William Shakespeare falls into which genre?", options: ["Tragedy", "Comedy", "History Play", "Romance"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "A traditional 'Sonnet' in English poetry consists of how many lines?", options: ["14 lines", "10 lines", "12 lines", "16 lines"], correct: 0 },

  // ==========================================
  // 12. लेखाकर्म (Accountancy) - SET 5
  // ==========================================
  { subject: "accountancy", lang: "hi", question: "ख्याति (Goodwill) के मूल्यांकन की 'अधि-लाभ विधि' (Super Profit Method) में अधि-लाभ की गणना कैसे की जाती है?", options: ["औसत लाभ - सामान्य लाभ (Average Profit - Normal Profit)", "औसत लाभ + सामान्य लाभ", "कुल लाभ / वर्षों की संख्या", "कोई नहीं"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "साझेदारी फर्म के विघटन (Dissolution) पर संपत्तियों को बेचने से प्राप्त राशि को किस खाते में लिखा जाता है?", options: ["वसूली खाता (Realization Account)", "पुनर्मूल्यांकन खाता", "पूंजी खाता", "बैंक खाता"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "Under the Super Profit Method of valuation of goodwill, how is Super Profit calculated?", options: ["Average Profit - Normal Profit", "Average Profit + Normal Profit", "Total Profit / Number of Years", "None of these"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "On the dissolution of a partnership firm, the amount realized from the sale of assets is credited to:", options: ["Realization Account", "Revaluation Account", "Partners' Capital Account", "Cash Account"], correct: 0 },

  // ==========================================
  // 13. व्यावसायिक अध्ययन (Business Studies) - SET 5
  // ==========================================
  { subject: "business", lang: "hi", question: "प्रबंध का अंतिम और महत्वपूर्ण कार्य कौन सा है जो यह सुनिश्चित करता है कि कार्य योजना के अनुसार हो रहा है?", options: ["नियंत्रण (Controlling)", "नियोजन", "निर्देशन", "नियुक्तिकरण"], correct: 0 },
  { subject: "business", lang: "hi", question: "उपभोक्ता अपनी शिकायतों के निवारण के लिए जिला स्तर पर किस फोरम या आयोग में जा सकता है?", options: ["जिला उपभोक्ता विवाद निवारण आयोग", "राज्य उपभोक्ता आयोग", "राष्ट्रीय आयोग", "सुप्रीम कोर्ट"], correct: 0 },
  { subject: "business", lang: "en", question: "Which is the final function of management that checks performance against standards?", options: ["Controlling", "Planning", "Directing", "Staffing"], correct: 0 },
  { subject: "business", lang: "en", question: "At the district level, a consumer can file complaints in which redressal agency?", options: ["District Consumer Disputes Redressal Commission", "State Commission", "National Commission", "Supreme Court"], correct: 0 },

  // ==========================================
  // 14. उद्यमशीलता (Entrepreneurship) - SET 5
  // ==========================================
  { subject: "entrepreneurship", lang: "hi", question: "सम-विच्छेद बिन्दु या ब्रेक-इवन पॉइंट (Break-Even Point) वह स्थिति है जहाँ व्यावसायिक इकाई को:", options: ["न लाभ होता है और न ही हानि", "अधिकतम लाभ होता है", "भारी हानि होती है", "पूंजी की कमी होती है"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "पूंजी बाजार (Capital Market) के अंतर्गत प्राथमिक बाजार (Primary Market) में मुख्य रूप से किसका लेन-देन होता है?", options: ["नए जारी किए गए अंशों और प्रतिभूतियों का (New Issues)", "पुराने अंशों का", "अल्पकालीन ऋणों का", "कोई नहीं"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "The Break-Even Point (BEP) is a market situation where a business unit experiences:", options: ["Neither profit nor loss", "Maximum profit", "Severe financial loss", "Capital deficiency"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "The Primary Market under the Capital Market ecosystem primarily deals with:", options: ["New securities being issued for the first time", "Trading of second-hand shares", "Short-term commercial papers", "None of these"], correct: 0 },

  // ==========================================
  // 15. भौतिकी (Physics) - SET 5
  // ==========================================
  { subject: "physics", lang: "hi", question: "किसी विद्युत परिपथ में किर्खोफ का प्रथम नियम (धारा का नियम) किस संरक्षण सिद्धांत पर आधारित है?", options: ["आवेश संरक्षण (Conservation of Charge)", "ऊर्जा संरक्षण", "संवेग संरक्षण", "द्रव्यमान संरक्षण"], correct: 0 },
  { subject: "physics", lang: "hi", question: "प्रकाश का किसी तीक्ष्ण किनारे या अवरोध से टकराकर उसकी छाया में मुड़ जाना क्या कहलाता है?", options: ["विवर्तन (Diffraction)", "व्यतिकरण", "अपवर्तन", "ध्रुवण"], correct: 0 },
  { subject: "physics", lang: "en", question: "Kirchhoff's First Law (Current Law) in an electrical circuit is based on the law of conservation of:", options: ["Charge", "Energy", "Momentum", "Mass"], correct: 0 },
  { subject: "physics", lang: "en", question: "The bending of light waves around the sharp edges of an obstacle or slit is known as:", options: ["Diffraction", "Interference", "Refraction", "Polarization"], correct: 0 },

  // ==========================================
  // 16. रसायन विज्ञान (Chemistry) - SET 5
  // ==========================================
  { subject: "chemistry", lang: "hi", question: "विशिष्ट चालकता (Specific Conductance) या कप्पा (κ) की एसआई (SI) इकाई निम्नलिखित में से क्या होती है?", options: ["साइमेंस मीटर⁻¹ (S m⁻¹)", "ओह्म सेंटीमीटर", "साइमेंस मीटर²", "ओह्म⁻¹"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "प्राथमिक ऐमीन (Primary Amine) की क्लोरोफॉर्म और केओएच (KOH) के साथ क्रिया कराने पर अत्यधिक दुर्गंधयुक्त पदार्थ बनना क्या कहलाता है?", options: ["कार्बिलामीन अभिक्रिया (Carbylamine Reaction)", "वुर्ट्ज अभिक्रिया", "कैनिजारो अभिक्रिया", "सैंडमेयर अभिक्रिया"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "What is the SI unit of Specific Conductance (κ)?", options: ["S m⁻¹", "ohm cm", "S m²", "ohm⁻¹"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "The reaction of a primary amine with chloroform and ethanolic KOH to form a foul-smelling isocyanide is called:", options: ["Carbylamine Reaction", "Wurtz Reaction", "Cannizzaro Reaction", "Sandmeyer Reaction"], correct: 0 },

  // ==========================================
  // 17. जीव विज्ञान (Biology) - SET 5
  // ==========================================
  { subject: "biology", lang: "hi", question: "टर्नर सिंड्रोम (Turner's Syndrome) से ग्रसित किसी मादा में क्रोमोसोम या गुणसूत्रों की कुल संख्या कितनी होती है?", options: ["45 (44 + XO)", "47 (44 + XXY)", "46 (44 + XX)", "47 (45 + XX)"], correct: 0 },
  { subject: "biology", lang: "hi", question: "आवृतबीजी पौधों (Angiosperms) में भ्रूणपोष (Endosperm) की गुणता (Ploidy) सामान्यतः क्या होती है?", options: ["त्रिगुणित (3n)", "द्विगुणित (2n)", "अगुणित (n)", "चतुर्गुणित (4n)"], correct: 0 },
  { subject: "biology", lang: "en", question: "What is the total number of chromosomes in a female suffering from Turner's Syndrome?", options: ["45 (44 + XO)", "47 (44 + XXY)", "46 (44 + XX)", "47 (45 + XX)"], correct: 0 },
  { subject: "biology", lang: "en", question: "What is the ploidy level of Endosperm in typical Angiosperm plants?", options: ["Triploid (3n)", "Diploid (2n)", "Haploid (n)", "Tetraploid (4n)"], correct: 0 },

  // ==========================================
  // 18. बायोटेक्नोलॉजी (Biotechnology) - SET 5
  // ==========================================
  { subject: "biotech", lang: "hi", question: "प्लास्मिड pBR322 में पाए जाने वाले 'ampR' और 'tetR' जीन का मुख्य कार्य जैव प्रौद्योगिकी में क्या है?", options: ["वरणयोग्य चिह्नक (Selectable Markers) के रूप में", "डीएनए रेप्लिकेशन को रोकने में", "क्लोनिंग साइट बनाने में", "कोई नहीं"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "बायोरिएक्टर (Bioreactor) में हवा के झोंके या स्पर्जर (Sparger) का मुख्य उद्देश्य क्या होता है?", options: ["पूरे संवर्धन तंत्र में ऑक्सीजन की उपलब्धता बढ़ाना", "तापमान को कम करना", "पीएच (pH) को नियंत्रित करना", "झाग को खत्म करना"], correct: 0 },
  { subject: "biotech", lang: "en", question: "What is the primary function of 'ampR' and 'tetR' genes in plasmid pBR322?", options: ["As Selectable Markers", "Inhibiting DNA replication", "Creating a cloning site", "None of these"], correct: 0 },
  { subject: "biotech", lang: "en", question: "What is the main objective of using a sparger system in a continuous Bioreactor?", options: ["To ensure uniform availability of oxygen", "To decrease the core temperature", "To control the pH level", "To eliminate foam formation"], correct: 0 },

  // ==========================================
  // 19. गणित (Mathematics) - SET 5
  // ==========================================
  { subject: "maths", lang: "hi", question: "यदि दो रेखाओं के दिक्-अनुपात (Direction Ratios) a₁, b₁, c₁ और a₂, b₂, c₂ हैं, तो उनके परस्पर लंबवत (Perpendicular) होने की शर्त क्या है?", options: ["a₁a₂ + b₁b₂ + c₁c₂ = 0", "a₁/a₂ = b₁/b₂ = c₁/c₂", "a₁a₂ + b₁b₂ + c₁c₂ = 1", "कोई नहीं"], correct: 0 },
  { subject: "maths", lang: "hi", question: "निश्चित समाकलन (Definite Integral) ∫₀^(π/2) (sin x / (sin x + cos x)) dx का मान हमेशा क्या होता है?", options: ["π / 4", "π / 2", "1", "0"], correct: 0 },
  { subject: "maths", lang: "en", question: "If the direction ratios of two lines are a₁, b₁, c₁ and a₂, b₂, c₂, what is the condition for them to be perpendicular?", options: ["a₁a₂ + b₁b₂ + c₁c₂ = 0", "a₁/a₂ = b₁/b₂ = c₁/c₂", "a₁a₂ + b₁b₂ + c₁c₂ = 1", "None of these"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the standard value of the definite integral ∫₀^(π/2) (sin x / (sin x + cos x)) dx?", options: ["π / 4", "π / 2", "1", "0"], correct: 0 },

  // ==========================================
  // 20. एप्लाइड मैथ (Applied Mathematics) - SET 5
  // ==========================================
  { subject: "applied_math", lang: "hi", question: "एक रैखिक प्रोग्रामन समस्या (LPP) में वे सभी प्रतिबंध जो चरों के मानों को सीमित करते हैं, क्या कहलाते हैं?", options: ["व्यवरोध (Constraints)", "उद्देश्य फलन", "इष्टतम मान", "कोई नहीं"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "सांख्यिकीय परिकल्पना परीक्षण में टाइप-I त्रुटि (Type-I Error) का क्या तात्पर्य है?", options: ["सत्य शून्य परिकल्पना (H₀) को अस्वीकार करना", "असत्य शून्य परिकल्पना को स्वीकार करना", "परिकल्पना का परीक्षण न करना", "कोई नहीं"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "In a Linear Programming Problem (LPP), the linear inequalities or restrictions on the variables are called:", options: ["Constraints", "Objective Function", "Feasible Region", "None of these"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "In statistical hypothesis testing, a Type-I Error occurs when we:", options: ["Reject a true null hypothesis (H₀)", "Accept a false null hypothesis", "Fail to test a hypothesis", "None of these"], correct: 0 },

  // ==========================================
  // 21. कंप्यूटर विज्ञान (Computer Science) - SET 5
  // ==========================================
  { subject: "computer_science", lang: "hi", question: "एसक्यूएल (SQL) में टेबल के स्ट्रक्चर को बदलने या किसी कॉलम को डिलीट/एड करने के लिए किस कमांड का उपयोग किया जाता है?", options: ["ALTER TABLE", "UPDATE", "MODIFY", "DROP TABLE"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "पायथन में बनाई गई बाइनरी फाइल (.dat) में डेटा को राइट (Write) करने के लिए किस मॉड्यूल के dump() फंक्शन का उपयोग होता है?", options: ["pickle", "json", "os", "sys"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "Which DDL command is used to modify, delete, or add columns in an existing SQL table structure?", options: ["ALTER TABLE", "UPDATE", "MODIFY", "DROP TABLE"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "Which Python module provides the dump() function to write data into a binary file?", options: ["pickle", "json", "os", "sys"], correct: 0 },
    // ==========================================
  // 1. इतिहास (History) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "history", lang: "hi", question: "सिंधु घाटी सभ्यता का प्रसिद्ध स्थल 'कालीबंगा' राजस्थान के किस जिले में स्थित है, जहाँ से जुते हुए खेत के साक्ष्य मिले हैं?", options: ["हनुमानगढ़", "गंगानगर", "बीकानेर", "जोधपुर"], correct: 0 },
  { subject: "history", lang: "hi", question: "सूफी मत के विकास में 'खानकाह' शब्द का वास्तविक तात्पर्य निम्नलिखित में से किससे है?", options: ["सूफी संतों का निवास स्थान या आश्रम", "एक विशेष प्रकार का वस्त्र", "सूफी संगीत का दरबार", "धार्मिक कर"], correct: 0 },
  { subject: "history", lang: "en", question: "The famous Indus Valley Civilization site 'Kalibangan', where evidence of ploughed fields was found, is located in which district of Rajasthan?", options: ["Hanumangarh", "Ganganagar", "Bikaner", "Jodhpur"], correct: 0 },
  { subject: "history", lang: "en", question: "In the development of Sufism, what does the term 'Khanqah' literally refer to?", options: ["The hospice or resting place of Sufi saints", "A special type of garment", "Sufi musical court", "A religious tax"], correct: 0 },

  // ==========================================
  // 2. राजनीति विज्ञान (Political Science) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "political", lang: "hi", question: "सोवियत संघ के अंतिम राष्ट्रपति मिखाइल गोर्बाचेव द्वारा शुरू की गई 'पेरेस्त्रोइका' (पुनर्संरचना) नीति का मुख्य उद्देश्य क्या था?", options: ["आर्थिक और राजनीतिक व्यवस्था में सुधार और ढील देना", "परमाणु हथियारों की संख्या बढ़ाना", "सेंसरशिप को कड़ा करना", "सैन्य शासन लागू करना"], correct: 0 },
  { subject: "political", lang: "hi", question: "राज्य पुनर्गठन आयोग (SRC) की स्थापना किस वर्ष की गई थी, जिसकी सिफारिशों के आधार पर 14 राज्य और 6 केंद्र शासित प्रदेश बने?", options: ["1953", "1956", "1950", "1952"], correct: 0 },
  { subject: "political", lang: "en", question: "What was the main objective of the 'Perestroika' (Restructuring) policy introduced by Mikhail Gorbachev, the last leader of the Soviet Union?", options: ["To reform and loosen the economic and political system", "To increase the nuclear arsenal", "To tighten state censorship", "To implement military rule"], correct: 0 },
  { subject: "political", lang: "en", question: "In which year was the States Reorganisation Commission (SRC) established, leading to the creation of 14 states based on language?", options: ["1953", "1956", "1950", "1952"], correct: 0 },

  // ==========================================
  // 3. भूगोल (Geography) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "geography", lang: "hi", question: "रुको और जाओ निश्चयवाद (Stop and Go Determinism) अथवा नव-निश्चयवाद की संकल्पना किस भूगोलवेत्ता द्वारा दी गई थी?", options: ["ग्रिफिथ टेलर", "फ्रेडरिक रेटजेल", "एलेन चर्चिल सेम्पल", "ब्लाश"], correct: 0 },
  { subject: "geography", lang: "hi", question: "जनसंख्या परिवर्तन के तीन मुख्य घटक निम्नलिखित में से कौन से हैं जो किसी क्षेत्र की आबादी बदलते हैं?", options: ["जन्म, मृत्यु और प्रवास (Migration)", "आयु, लिंग और साक्षरता", "कृषि, उद्योग और व्यापार", "शहरीकरण, गरीबी और भुखमरी"], correct: 0 },
  { subject: "geography", lang: "en", question: "The concept of 'Neo-Determinism' or 'Stop and Go Determinism' was introduced by which prominent geographer?", options: ["Griffith Taylor", "Friedrich Ratzel", "Ellen Churchill Semple", "Vidal de la Blache"], correct: 0 },
  { subject: "geography", lang: "en", question: "Which of the following are the three primary components of population change in human geography?", options: ["Birth, Death, and Migration", "Age, Sex, and Literacy", "Agriculture, Industry, and Trade", "Urbanization, Poverty, and Starvation"], correct: 0 },

  // ==========================================
  // 4. अर्थशास्त्र (Economics) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "economics", lang: "hi", question: "यदि किसी वस्तु की कीमत में बदलाव होने पर भी उसकी मांगी जाने वाली मात्रा में कोई परिवर्तन न हो, तो मांग की लोच का मान क्या होगा?", options: ["शून्य (पूर्णतः बेलोचदार मांग)", "इकाई के बराबर", "अनंत", "इकाई से अधिक"], correct: 0 },
  { subject: "economics", lang: "hi", question: "व्यावसायिक बैंकों द्वारा ऋण निर्माण या साख सृजन (Credit Creation) की क्षमता मुख्य रूप से किस पर निर्भर करती है?", options: ["नकद आरक्षित अनुपात (CRR) और प्राथमिक जमा पर", "केवल बैंक की शाखाओं पर", "शेयर बाजार के उतार-चढ़ाव पर", "कोई नहीं"], correct: 0 },
  { subject: "economics", lang: "en", question: "If the quantity demanded of a good remains completely unchanged despite a change in its price, the elasticity of demand is:", options: ["Zero (Perfectively Inelastic)", "Equal to Unity", "Infinite", "Greater than Unity"], correct: 0 },
  { subject: "economics", lang: "en", question: "The credit creation capacity of commercial banks in an economy primarily depends on which factor?", options: ["Cash Reserve Ratio (CRR) and Initial Deposits", "The number of bank branches only", "Stock market fluctuations", "None of these"], correct: 0 },

  // ==========================================
  // 5. समाजशास्त्र (Sociology) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "sociology", lang: "hi", question: "भारत में 'अखिल भारतीय अनुसूचित जाति महासंघ' की स्थापना 1942 में किसके द्वारा दलितों के अधिकारों के लिए की गई थी?", options: ["डॉ. बी. आर. अम्बेडकर", "ज्योतिराव फुले", "महात्मा गांधी", "पेरियार"], correct: 0 },
  { subject: "sociology", lang: "hi", question: "राजनैतिक या सामाजिक बदलाव के संदर्भ में 'प्रभु जाति' (Dominant Caste) की अवधारणा किस समाजशास्त्री की देन है?", options: ["एम. एन. श्रीनिवास", "ए. आर. देसाई", "जी. एस. घुरिये", "योगेन्द्र सिंह"], correct: 0 },
  { subject: "sociology", lang: "en", question: "Who founded the 'All India Scheduled Castes Federation' in 1942 to campaign for the rights of the Dalit community?", options: ["Dr. B. R. Ambedkar", "Jyotirao Phule", "Mahatma Gandhi", "E.V. Ramasamy Periyar"], correct: 0 },
  { subject: "sociology", lang: "en", question: "The sociological concept of 'Dominant Caste' used to study agrarian social structure in India was given by:", options: ["M. N. Srinivas", "A. R. Desai", "G. S. Ghurye", "Yogendra Singh"], correct: 0 },

  // ==========================================
  // 6. मनोविज्ञान (Psychology) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "psychology", lang: "hi", question: "हंस सेली के अनुसार दबाव या तनाव के प्रति शरीर की तीन चरणों वाली अनुक्रिया (GAS) का सही क्रम क्या है?", options: ["सचेत प्रतिक्रिया, प्रतिरोध, परिश्रान्ति (Alarm, Resistance, Exhaustion)", "प्रतिरोध, सचेत प्रतिक्रिया, परिश्रान्ति", "परिश्रान्ति, प्रतिरोध, सचेत प्रतिक्रिया", "कोई नहीं"], correct: 0 },
  { subject: "psychology", lang: "hi", question: "बुद्धि के 'द्वि-कारक सिद्धांत' (Two-Factor Theory) का प्रतिपादन किसने किया था जिसके अंतर्गत G-Factor और S-Factor आते हैं?", options: ["चार्ल्स स्पीयरमैन", "अल्फ्रेड बिने", "हावर्ड गार्डनर", "लुईस थर्स्टन"], correct: 0 },
  { subject: "psychology", lang: "en", question: "According to Hans Selye's GAS model, what is the correct sequence of stages the body goes through under stress?", options: ["Alarm Reaction, Resistance, Exhaustion", "Resistance, Alarm Reaction, Exhaustion", "Exhaustion, Resistance, Alarm Reaction", "None of these"], correct: 0 },
  { subject: "psychology", lang: "en", question: "Who formulated the 'Two-Factor Theory' of intelligence, introducing the concepts of General (g) and Specific (s) factors?", options: ["Charles Spearman", "Alfred Binet", "Howard Gardner", "Louis Thurstone"], correct: 0 },

  // ==========================================
  // 7. गृह विज्ञान (Home Science) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "home_science", lang: "hi", question: "कार्यस्थल पर एर्गोनॉमिक्स (Ergonomics / श्रमदक्षता शास्त्र) का मुख्य उद्देश्य क्या सुनिश्चित करना होता है?", options: ["कार्य और कार्यस्थल को कार्यकर्ता की शारीरिक व मानसिक क्षमता के अनुकूल बनाना", "केवल कार्य के घंटे बढ़ाना", "मशीनों का खर्च कम करना", "सुंदरता बढ़ाना"], correct: 0 },
  { subject: "home_science", lang: "hi", question: "किशोरावस्था में होने वाले तीव्र शारीरिक और मनोवैज्ञानिक परिवर्तनों के कारण उत्पन्न होने वाली पहचान की समस्या को क्या कहा जाता है?", options: ["पहचान का संकट (Identity Crisis)", "संज्ञानात्मक विकास", "एनीमिया", "स्मृति लोप"], correct: 0 },
  { subject: "home_science", lang: "en", question: "What is the primary objective of implementing 'Ergonomics' in a modern work environment?", options: ["To adapt the job and workplace layout to fit the psychological and physiological needs of the worker", "To maximize working hours only", "To reduce machine maintenance costs", "To enhance aesthetic look"], correct: 0 },
  { subject: "home_science", lang: "en", question: "The confusion and struggle experienced by adolescents regarding their role and future position in society is termed as:", options: ["Identity Crisis", "Cognitive Development", "Anemia", "Amnesia"], correct: 0 },

  // ==========================================
  // 8. दर्शनशास्त्र (Philosophy) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "philosophy", lang: "hi", question: "वैशेषिक दर्शन के अनुसार संपूर्ण ब्रह्मांड का निर्माण किन सूक्ष्म, अविभाज्य और नित्य तत्वों से हुआ है?", options: ["परमाणु (Atom)", "पंचमहाभूत", "माया", "पुरुष और प्रकृति"], correct: 0 },
  { subject: "philosophy", lang: "hi", question: "महात्मा गांधी के 'एकादश व्रत' के सामाजिक सिद्धांतों में 'अस्पृश्यता निवारण' के साथ-साथ आर्थिक समानता के लिए कौन सा सिद्धांत मुख्य है?", options: ["ट्रस्टीशिप (न्यासधारिता का सिद्धांत)", "सत्याग्रह", "सविनय अवज्ञा", "अपरिग्रह"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "According to Vaisheshika philosophy, the entire physical universe is composed of which eternal, indivisible entities?", options: ["Paramanu (Atoms)", "Panchamahabhutas", "Maya", "Purusha and Prakriti"], correct: 0 },
  { subject: "philosophy", lang: "en", question: "Along with the eradication of untouchability, which economic doctrine did Mahatma Gandhi advocate for social justice?", options: ["Trusteeship Theory", "Satyagraha", "Civil Disobedience", "Aparigraha"], correct: 0 },

  // ==========================================
  // 9. कानूनी अध्ययन (Legal Studies) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "legal_studies", lang: "hi", question: "भारतीय न्यायिक प्रणाली में 'न्यायिक समीक्षा' (Judicial Review) की शक्ति का मुख्य कार्य क्या है?", options: ["संसद द्वारा बनाए गए कानूनों की संवैधानिक वैधता की जांच करना", "निचली अदालतों के जजों का तबादला करना", "नए कानून का मसौदा तैयार करना", "अपराधियों को सीधी सजा देना"], correct: 0 },
  { subject: "legal_studies", lang: "hi", question: "अंतर्राष्ट्रीय न्यायालय (ICJ) का मुख्यालय कहाँ स्थित है, जो संयुक्त राष्ट्र का मुख्य न्यायिक अंग है?", options: ["द हेग, नीदरलैंड (The Hague)", "न्यूयार्क, यूएसए", "जेनिटा, जिनेवा", "लंदन, यूके"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "What is the primary function of the power of 'Judicial Review' held by the Indian Judiciary?", options: ["To examine the constitutional validity of laws enacted by the Legislature", "To transfer judges of lower courts", "To draft new legislative bills", "To directly punish criminals"], correct: 0 },
  { subject: "legal_studies", lang: "en", question: "Where is the headquarters of the International Court of Justice (ICJ), the principal judicial organ of the UN, situated?", options: ["The Hague, Netherlands", "New York, USA", "Geneva, Switzerland", "London, UK"], correct: 0 },

  // ==========================================
  // 10. हिंदी साहित्य (Hindi Literature) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "hindi_lit", lang: "hi", question: "रीतिकाल के किस सुप्रसिद्ध कवि ने मुख्य रूप से 'वीर रस' की कविताएं लिखकर राष्ट्रीय चेतना का संचार किया था?", options: ["कवि भूषण", "बिहारी", "घनानंद", "केशवदास"], correct: 0 },
  { subject: "hindi_lit", lang: "hi", question: "आधुनिक हिंदी गद्य के विकास में 'फोर्ट विलियम कॉलेज' (स्थापना 1800 ई.) का मुख्य योगदान कहाँ स्थित होने के कारण था?", options: ["कोलकाता (Calcutta)", "दिल्ली", "इलाहाबाद", "बनारस"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Which famous poet of the Riti period wrote primarily in 'Veer Ras' (heroic poetry) to inspire national consciousness?", options: ["Kavi Bhushan", "Bihari", "Ghananand", "Keshavdas"], correct: 0 },
  { subject: "hindi_lit", lang: "en", question: "Fort William College, established in 1800 AD, played a key role in developing Hindi prose. Where was it located?", options: ["Kolkata (Calcutta)", "Delhi", "Allahabad", "Banaras"], correct: 0 },

  // ==========================================
  // 11. अंग्रेजी साहित्य (English Literature) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "english_lit", lang: "hi", question: "साहित्यिक विधा में 'मेटाफिजिकल पोएट्स' (Metaphysical Poets) समूह के अगुआ और प्रसिद्ध कवि कौन माने जाते हैं?", options: ["जॉन डन (John Donne)", "एलेक्जेंडर पोप", "विलियम वर्डसवर्थ", "जॉन कीट्स"], correct: 0 },
  { subject: "english_lit", lang: "hi", question: "विलियम शेक्सपियर के नाटक 'द मर्चेंट ऑफ वेनिस' (The Merchant of Venice) में प्रसिद्ध यहूदी सूदखोर (Cruel Money-lender) चरित्र का नाम क्या है?", options: ["शायलॉक (Shylock)", "एन्टोनियो", "बैसेनियो", "इयागो"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "Who is considered the leader and pioneer of the group known as the 'Metaphysical Poets' in English literature?", options: ["John Donne", "Alexander Pope", "William Wordsworth", "John Keats"], correct: 0 },
  { subject: "english_lit", lang: "en", question: "What is the name of the famous antagonist and Jewish moneylender character in Shakespeare's 'The Merchant of Venice'?", options: ["Shylock", "Antonio", "Bassanio", "Iago"], correct: 0 },

  // ==========================================
  // 12. लेखाकर्म (Accountancy) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "accountancy", lang: "hi", question: "नए साझेदार के प्रवेश (Admission of a New Partner) पर संपत्तियों और दायित्वों के पुनर्मूल्यांकन पर होने वाले लाभ या हानि को पुराने साझेदारों में किस अनुपात में बांटा जाता है?", options: ["पुराने लाभ-विभाजन अनुपात में (Old Profit Sharing Ratio)", "समान अनुपात में", "त्याग के अनुपात में", "पूंजी के अनुपात में"], correct: 0 },
  { subject: "accountancy", lang: "hi", question: "एक सीमित कंपनी के वित्तीय विवरणों के विश्लेषण में 'समान आकार के विवरण' (Common-Size Statements) में तुलना का मुख्य आधार (100) किसे माना जाता है?", options: ["संचालन से राजस्व / शुद्ध बिक्री (Revenue from Operations)", "कुल संपत्तियां", "शुद्ध लाभ", "पूंजी"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "On the admission of a new partner, the profit or loss arising from the revaluation of assets and liabilities is divided among old partners in which ratio?", options: ["Old Profit Sharing Ratio", "Equal Ratio", "Sacrificing Ratio", "Capital Ratio"], correct: 0 },
  { subject: "accountancy", lang: "en", question: "In the financial statement analysis of a limited company, what is taken as the base (100) in Common-Size Income Statements?", options: ["Revenue from Operations (Net Sales)", "Total Assets", "Net Profit", "Total Equity"], correct: 0 },

  // ==========================================
  // 13. व्यावसायिक अध्ययन (Business Studies) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "business", lang: "hi", question: "प्रबंध के सिद्धांतों की प्रकृति 'लोचशील' (Flexible) होने का वास्तविक अर्थ क्या है?", options: ["इन्हें बदलती हुई व्यावसायिक परिस्थितियों के अनुसार ढाला और बदला जा सकता है", "यह कठोर नियम हैं", "यह केवल सरकारी कंपनियों पर लागू होते हैं", "कोई नहीं"], correct: 0 },
  { subject: "business", lang: "hi", question: "नियोजन (Planning) का वह कौन सा विशिष्ट प्रकार है जो संगठन के दीर्घकालीन लक्ष्यों को प्राप्त करने के लिए बनाई गई व्यापक योजना होती है?", options: ["रणनीति / व्यूहरचना (Strategy)", "नीति (Policy)", "नियम (Rule)", "बजट (Budget)"], correct: 0 },
  { subject: "business", lang: "en", question: "What does it mean when we state that the Principles of Management are 'Flexible' in nature?", options: ["They can be modified and adapted according to changing business situations", "They are rigid laws that must be followed strictly", "They only apply to public sector enterprises", "None of these"], correct: 0 },
  { subject: "business", lang: "en", question: "Which specific type of plan represents a comprehensive, long-term blueprint designed to achieve organizational objectives?", options: ["Strategy", "Policy", "Rule", "Budget"], correct: 0 },

  // ==========================================
  // 14. उद्यमशीलता (Entrepreneurship) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "entrepreneurship", lang: "hi", question: "एक सफल उद्यमी का वह कौन सा प्रमुख गुण है जो उसे जोखिम उठाने और अनिश्चितता का सामना करने की हिम्मत देता है?", options: ["उच्च उपलब्धि की आकांक्षा और नवाचार (Innovation) क्षमता", "बहुत अधिक धन होना", "राजनीतिक संपर्क होना", "केवल पुरानी तकनीकों पर भरोसा"], correct: 0 },
  { subject: "entrepreneurship", lang: "hi", question: "बाजार के विश्लेषण (Market Analysis) के दौरान मांग का पूर्वानुमान (Demand Forecasting) लगाने की 'सशर्त विधि' क्या कहलाती है?", options: ["क्रेताओं के विचार या सर्वेक्षण विधि", "अतीत के आंकड़ों की नकल", "अनुमान लगाना", "कोई नहीं"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "Which core characteristic drives an entrepreneur to successfully handle calculated risks and explore uncertainties?", options: ["High need for achievement and innovative capacity", "Possession of vast family wealth", "Strong political connections", "Reliance on traditional methods only"], correct: 0 },
  { subject: "entrepreneurship", lang: "en", question: "During market evaluation, collecting data directly from potential consumers regarding future buying intentions is called:", options: ["Survey of Buyers' Intentions / Opinion Method", "Trend Projection Method", "Guesswork", "None of these"], correct: 0 },

  // ==========================================
  // 15. भौतिकी (Physics) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "physics", lang: "hi", question: "समानांतर प्लेट संधारित्र (Parallel Plate Capacitor) की धारिता (C) प्लेटों के बीच की दूरी (d) बदलने पर किस प्रकार परिवर्तित होती है?", options: ["दूरी के व्युत्क्रमानुपाती होती है (C ∝ 1/d)", "दूरी के समानुपाती होती है", "दूरी के वर्ग के समानुपाती होती है", "दूरी पर निर्भर नहीं करती"], correct: 0 },
  { subject: "physics", lang: "hi", question: "हाइड्रोजन परमाणु के बोहर मॉडल के अनुसार इलेक्ट्रॉनिक कक्षा की त्रिज्या (rn) मुख्य क्वांटम संख्या (n) के साथ कैसे बदलती है?", options: ["n² के समानुपाती होती है (rn ∝ n²)", "n के समानुपाती होती है", "n के व्युत्क्रमानुपाती होती है", "परिवर्तित नहीं होती"], correct: 0 },
  { subject: "physics", lang: "en", question: "How does the capacitance (C) of a parallel plate capacitor change with the distance (d) between its plates?", options: ["Inversely proportional to the distance (C ∝ 1/d)", "Directly proportional to the distance", "Directly proportional to the square of distance", "Independent of the distance"], correct: 0 },
  { subject: "physics", lang: "en", question: "According to Bohr's model of a hydrogen atom, the radius of the nth stable electron orbit (rn) is proportional to:", options: ["n²", "n", "1 / n", "1 / n²"], correct: 0 },

  // ==========================================
  // 16. रसायन विज्ञान (Chemistry) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "chemistry", lang: "hi", question: "विलयन के वे गुणधर्म जो केवल विलेय के कणों की संख्या पर निर्भर करते हैं, उनकी प्रकृति पर नहीं, क्या कहलाते हैं?", options: ["अणुसंख्यक गुणधर्म (Colligative Properties)", "विशिष्ट गुणधर्म", "रासायनिक गुणधर्म", "ऊष्मागतिक गुणधर्म"], correct: 0 },
  { subject: "chemistry", lang: "hi", question: "फिनॉल की क्लोरोफॉर्म और जलीय NaOH के साथ क्रिया कराने पर मुख्य उत्पाद के रूप में 'सैलिसिलैल्डिहाइड' बनना कौन सी प्रसिद्ध नाम वाली अभिक्रिया है?", options: ["रीमर-टीमैन अभिक्रिया (Reimer-Tiemann Reaction)", "कोल्बे अभिक्रिया", "विलियमसन संश्लेषण", "कैनिजारो अभिक्रिया"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "Properties of a solution that depend solely on the total number of solute particles and not on their chemical identity are called:", options: ["Colligative Properties", "Specific Properties", "Chemical Properties", "Thermodynamic Properties"], correct: 0 },
  { subject: "chemistry", lang: "en", question: "The conversion of phenol to salicylaldehyde by treating it with chloroform in the presence of aqueous sodium hydroxide is known as:", options: ["Reimer-Tiemann Reaction", "Kolbe's Reaction", "Williamson's Synthesis", "Cannizzaro Reaction"], correct: 0 },

  // ==========================================
  // 17. जीव विज्ञान (Biology) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "biology", lang: "hi", question: "मानव में हीमोफीलिया (Haemophilia) रोग किस प्रकार का आनुवंशिक विकार है जो पुरुषों में अधिक सामान्यतः प्रकट होता है?", options: ["X-सहलग्न अप्रभावी विकार (X-linked Recessive)", "Y-सहलग्न प्रभावी विकार", "ऑटोसोमल प्रभावी विकार", "गुणसूत्रीय विलोपन"], correct: 0 },
  { subject: "biology", lang: "hi", question: "पारिस्थितिक तंत्र में ऊर्जा का प्रवाह (Flow of Energy) एक पोषण स्तर से दूसरे पोषण स्तर में हमेशा किस प्रकार का होता है?", options: ["एकदिशीय (Unidirectional - 10% का नियम)", "द्विदिशीय", "बहुदिशीय", "चक्रीय"], correct: 0 },
  { subject: "biology", lang: "en", question: "Hemophilia in humans is classified as which type of genetic disorder that shows criss-cross inheritance?", options: ["X-linked Recessive Disorder", "X-linked Dominant Disorder", "Autosomal Dominant Disorder", "Chromosomal Deletion"], correct: 0 },
  { subject: "biology", lang: "en", question: "The flow of energy across different trophic levels in any functional ecosystem is always:", options: ["Unidirectional (10% Law)", "Bidirectional", "Multidirectional", "Cyclic"], correct: 0 },

  // ==========================================
  // 18. बायोटेक्नोलॉजी (Biotechnology) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "biotech", lang: "hi", question: "जीन थेरेपी (Gene Therapy) का सर्वप्रथम क्लिनिकल प्रयोग 1990 में एक 4 वर्षीय बच्ची पर किस एंजाइम की कमी को दूर करने के लिए किया गया था?", options: ["एडेनोसिन डीएमिनेज (ADA)", "इंसुलिन पॉलीमरेज", "Taq पॉलीमरेज", "पेप्सिन एंजाइम"], correct: 0 },
  { subject: "biotech", lang: "hi", question: "बैक्टीरिया कोशिका को डीएनए (DNA) को ग्रहण करने के लिए 'सक्षम' (Competent) बनाने के लिए किस द्विसंयोजी धनायन का उपयोग किया जाता है?", options: ["कैल्शियम आयन (Ca²⁺)", "मैग्नीशियम आयन", "सोडियम आयन", "लोह आयन"], correct: 0 },
  { subject: "biotech", lang: "en", question: "The first clinical gene therapy session in 1990 was given to a four-year-old girl to treat the deficiency of which enzyme?", options: ["Adenosine Deaminase (ADA)", "Insulin Polymerase", "Taq Polymerase", "Pepsin Enzyme"], correct: 0 },
  { subject: "biotech", lang: "en", question: "Which divalent cation is commonly used to treat bacterial cells to increase their efficiency in taking up recombinant DNA?", options: ["Calcium ion (Ca²⁺)", "Magnesium ion", "Sodium ion", "Iron ion"], correct: 0 },

  // ==========================================
  // 19. गणित (Mathematics) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "maths", lang: "hi", question: "यदि दो आव्यूहों (Matrices) A और B का गुणनफल AB संभव है, तो आव्यूह गुणनफल के परिवर्तन (Transpose) का नियम क्या होता है?", options: ["(AB)ᵀ = BᵀAᵀ", "(AB)ᵀ = AᵀBᵀ", "(AB)ᵀ = AB", "(AB)ᵀ = - BᵀAᵀ"], correct: 0 },
  { subject: "maths", lang: "hi", question: "अवकल समीकरण (Differential Equation) dy/dx + Py = Q (जहाँ P और Q केवल X के फलन हैं) का समाकलन गुणक (Integrating Factor - I.F.) क्या होगा?", options: ["e^(∫P dx)", "e^(∫Q dx)", "∫P dx", "e^(∫P dy)"], correct: 0 },
  { subject: "maths", lang: "en", question: "According to the properties of matrices, what is the transpose of the product of two matrices (AB)ᵀ equal to?", options: ["BᵀAᵀ", "AᵀBᵀ", "AB", "- BᵀAᵀ"], correct: 0 },
  { subject: "maths", lang: "en", question: "What is the correct expression for the Integrating Factor (I.F.) of the linear differential equation dy/dx + Py = Q?", options: ["e^(∫P dx)", "e^(∫Q dx)", "∫P dx", "e^(∫P dy)"], correct: 0 },

  // ==========================================
  // 20. एप्लाइड मैथ (Applied Mathematics) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "applied_math", lang: "hi", question: "वित्तीय बाजार में ऋणपत्रों या बॉन्ड के अंकित मूल्य (Face Value) और वर्तमान बाजार मूल्य में क्या संबंध होता है यदि ब्याज दरें बढ़ जाएं?", options: ["बॉन्ड का बाजार मूल्य घट जाता है (Inversely Related)", "बॉन्ड का बाजार मूल्य बढ़ जाता है", "मूल्य समान रहता है", "कोई संबंध नहीं है"], correct: 0 },
  { subject: "applied_math", lang: "hi", question: "एक सामान्य वितरण वक्र (Normal Distribution Curve) की आकृति किस प्रकार की होती है जो पूर्णतः सममित (Symmetrical) होता है?", options: ["घंटाकार (Bell-shaped)", "यू-आकार (U-shaped)", "सीधी रेखा", "आयताकार"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "In financial mathematics, how does an increase in market interest rates generally affect the current market value of an existing bond?", options: ["The bond price decreases (Inversely Related)", "The bond price increases", "The bond price remains unaffected", "There is no correlation"], correct: 0 },
  { subject: "applied_math", lang: "en", question: "What is the geometric shape of a standard Normal Distribution Curve in statistical analysis?", options: ["Bell-shaped", "U-shaped", "Linear / Straight line", "Rectangular"], correct: 0 },

  // ==========================================
  // 21. कंप्यूटर विज्ञान (Computer Science) - SET 6 (RBSE Board Special)
  // ==========================================
  { subject: "computer_science", lang: "hi", question: "एसक्यूएल (SQL) में डेटा को कस्टमाइज़्ड या सॉर्टेड ऑर्डर में व्यवस्थित करने के लिए किस क्लॉज (Clause) का उपयोग किया जाता है?", options: ["ORDER BY", "GROUP BY", "SORT BY", "WHERE"], correct: 0 },
  { subject: "computer_science", lang: "hi", question: "कंप्यूटर नेटवर्क में प्रयुक्त होने वाली 'मेश टोपोलॉजी' (Mesh Topology) की सबसे मुख्य विशेषता या लाभ क्या है?", options: ["यह अत्यधिक विश्वसनीय (Highly Reliable) होती है क्योंकि इसमें बैकअप पाथ होते हैं", "इसको सेट करना बहुत सस्ता होता है", "इसमें कम केबल लगती है", "कोई नहीं"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "Which SQL clause is used to sort the result-set of a query in ascending or descending order?", options: ["ORDER BY", "GROUP BY", "SORT BY", "WHERE"], correct: 0 },
  { subject: "computer_science", lang: "en", question: "What is the primary advantage of using a Full Mesh Topology in computer networks?", options: ["It is highly reliable and fault-tolerant due to redundant paths", "It is extremely cheap to configure", "It requires minimal cabling infrastructure", "None of these Hoskins"], correct: 0 },
    // ==========================================
  // 1. इतिहास (History) - 5 नए प्रश्न
  // ==========================================
  { subject: "history", lang: "hi", question: "कौटिल्य (चाणक्य) द्वारा रचित सुप्रसिद्ध ग्रंथ 'अर्थशास्त्र' का मुख्य विषय निम्नलिखित में से क्या है?", options: ["मौर्यकालीन राज्य शासन और राजनीति", "अर्थशास्त्र और व्यापार", "सैन्य अभियान", "धार्मिक अनुष्ठान"], correct: 0 },
  { subject: "history", lang: "en", question: "What is the primary subject matter of the famous treatise 'Arthashastra' written by Kautilya (Chanakya)?", options: ["Mauryan statecraft, governance, and politics", "Economics and foreign trade", "Military expeditions", "Religious rituals"], correct: 0 },

  { subject: "history", lang: "hi", question: "प्रसिद्ध चीनी यात्री ह्वेनसांग (Xuanzang) ने भारत की यात्रा किस सम्राट के शासनकाल में की थी?", options: ["हर्षवर्धन", "चंद्रगुप्त मौर्य", "समुद्रगुप्त", "अशोक"], correct: 0 },
  { subject: "history", lang: "en", question: "The famous Chinese traveler Xuanzang visited India during the reign of which emperor?", options: ["Harshavardhana", "Chandragupta Maurya", "Samudragupta", "Ashoka"], correct: 0 },

  { subject: "history", lang: "hi", question: "महात्मा गांधी ने वर्ष 1930 में प्रसिद्ध दांडी मार्च की शुरुआत साबरमती आश्रम से किस कानून के विरोध में की थी?", options: ["नमक कानून (Salt Law)", "रोलेट एक्ट", "भू-राजस्व नीति", "प्रेस पर प्रतिबंध"], correct: 0 },
  { subject: "history", lang: "en", question: "In 1930, Mahatma Gandhi started the famous Dandi March from Sabarmati Ashram to protest against which law?", options: ["The Salt Law", "The Rowlatt Act", "Land Revenue Policy", "Press Censorship"], correct: 0 },

  { subject: "history", lang: "hi", question: "विजयनगर साम्राज्य की स्थापना 1336 ई. में किन दो भाइयों ने मिलकर तुंगभद्रा नदी के तट पर की थी?", options: ["हरिहर और बुक्का", "कृष्णदेव राय और अच्युत राय", "राम राय और सदाशिव", "देवराय प्रथम और द्वितीय"], correct: 0 },
  { subject: "history", lang: "en", question: "The Vijayanagara Empire was founded in 1336 AD on the banks of the Tungabhadra River by which two brothers?", options: ["Harihara and Bukka", "Krishnadeva Raya and Achyuta Raya", "Rama Raya and Sadashiva", "Devaraya I and II"], correct: 0 },

  { subject: "history", lang: "hi", question: "भारतीय पुरातत्व सर्वेक्षण (ASI) के प्रथम महानिदेशक (Director-General) कौन थे जिन्हें 'भारतीय पुरातत्व का जनक' भी कहा जाता है?", options: ["अलेक्जेंडर कनिंघम", "जॉन मार्शल", "आर. ई. एम. व्हीलर", "दयाराम साहनी"], correct: 0 },
  { subject: "history", lang: "en", question: "Who was the first Director-General of the Archaeological Survey of India (ASI), often called the 'Father of Indian Archaeology'?", options: ["Alexander Cunningham", "John Marshall", "R.E.M. Wheeler", "Dayaram Sahni"], correct: 0 },

  // ==========================================
  // 2. राजनीति विज्ञान (Political Science) - 5 नए प्रश्न
  // ==========================================
  { subject: "political", lang: "hi", question: "क्यूबा मिसाइल संकट (Cuban Missile Crisis) किस वर्ष उत्पन्न हुआ था, जिसे शीतयुद्ध का चरम बिंदु माना जाता है?", options: ["1962", "1961", "1965", "1971"], correct: 0 },
  { subject: "political", lang: "en", question: "In which year did the Cuban Missile Crisis occur, which is considered the peak or climax of the Cold War?", options: ["1962", "1961", "1965", "1971"], correct: 0 },

  { subject: "political", lang: "hi", question: "भारत में योजना आयोग (Planning Commission) के स्थान पर 'नीति आयोग' (NITI Aayog) का गठन किस वर्ष किया गया था?", options: ["2015", "2014", "2016", "2019"], correct: 0 },
  { subject: "political", lang: "en", question: "In which year was the 'NITI Aayog' formed in India, replacing the old Planning Commission?", options: ["2015", "2014", "2016", "2019"], correct: 0 },

  { subject: "political", lang: "hi", question: "भारतीय संविधान का कौन सा अनुच्छेद आपातकाल के प्रावधानों (राष्ट्रीय आपातकाल) से संबंधित है?", options: ["अनुच्छेद 352", "अनुच्छेद 356", "अनुच्छेद 360", "अनुच्छेद 370"], correct: 0 },
  { subject: "political", lang: "en", question: "Which article of the Indian Constitution is related to the provisions of National Emergency?", options: ["Article 352", "Article 356", "Article 360", "Article 370"], correct: 0 },

  { subject: "political", lang: "hi", question: "1975 में भारत में आपातकाल की घोषणा के समय भारत के राष्ट्रपति पद पर कौन आसीन थे?", options: ["फखरुद्दीन अली अहमद", "डॉ. जाकिर हुसैन", "वी. वी. गिरि", "ज्ञानी जैल सिंह"], correct: 0 },
  { subject: "political", lang: "en", question: "Who was the President of India when the internal emergency was declared in June 1975?", options: ["Fakhruddin Ali Ahmed", "Dr. Zakir Husain", "V. V. Giri", "Giani Zail Singh"], correct: 0 },

  { subject: "political", lang: "hi", question: "दक्षिण एशियाई क्षेत्रीय सहयोग संगठन (SAARC) की स्थापना किस वर्ष ढाका में हुई थी?", options: ["1985", "1990", "1980", "1995"], correct: 0 },
  { subject: "political", lang: "en", question: "In which year was the South Asian Association for Regional Cooperation (SAARC) established in Dhaka?", options: ["1985", "1990", "1980", "1995"], correct: 0 },

  // ==========================================
  // 3. भूगोल (Geography) - 5 नए प्रश्न
  // ==========================================
  { subject: "geography", lang: "hi", question: "मानव भूगोल के किस विचारधारा के तहत मनुष्य को प्रकृति का दास माना गया है (मानव का प्राकृतिकरण)?", options: ["निश्चयवाद या पर्यावरणीय निश्चयवाद", "संभववाद", "नव-निश्चयवाद", "कल्याणपरक विचारधारा"], correct: 0 },
  { subject: "geography", lang: "en", question: "Under which school of thought in human geography is man considered passive and a slave to nature?", options: ["Determinism / Environmental Determinism", "Possibilism", "Neo-Determinism", "Welfare School"], correct: 0 },

  { subject: "geography", lang: "hi", question: "संयुक्त राष्ट्र विकास कार्यक्रम (UNDP) द्वारा प्रथम मानव विकास रिपोर्ट (HDR) किस वर्ष प्रकाशित की गई थी?", options: ["1990", "1985", "1995", "2000"], correct: 0 },
  { subject: "geography", lang: "en", question: "In which year was the first Human Development Report (HDR) published by the United Nations Development Programme?", options: ["1990", "1985", "1995", "2000"], correct: 0 },

  { subject: "geography", lang: "hi", question: "भूमध्यसागरीय कृषि (Mediterranean Agriculture) मुख्य रूप से किस प्रकार के फसलों के उत्पादन के लिए विश्व प्रसिद्ध है?", options: ["खट्टे व रसीले फल (जैसे अंगूर)", "गेहूँ और चावल", "चाय और कॉफी", "मक्का और मोटे अनाज"], correct: 0 },
  { subject: "geography", lang: "en", question: "Mediterranean Agriculture is globally renowned primarily for the commercial cultivation of which products?", options: ["Citrus and juicy fruits (like grapes)", "Wheat and rice", "Tea and coffee", "Maize and millets"], correct: 0 },

  { subject: "geography", lang: "hi", question: "भारत की पहली संपूर्ण और व्यवस्थित जनगणना (First Synchronous Census) किस वर्ष संपन्न हुई थी?", options: ["1881", "1872", "1901", "1911"], correct: 0 },
  { subject: "geography", lang: "en", question: "In which year was the first complete and synchronous population census conducted in India?", options: ["1881", "1872", "1901", "1911"], correct: 0 },

  { subject: "geography", lang: "hi", question: "भारत के किस राज्य में स्थित खेतड़ी (Khetri) क्षेत्र तांबा अयस्क के खनन के लिए ऐतिहासिक रूप से प्रसिद्ध है?", options: ["राजस्थान", "मध्य प्रदेश", "झारखंड", "ओडिशा"], correct: 0 },
  { subject: "geography", lang: "en", question: "The Khetri belt, famous for its extensive copper mines and reserves, is located in which Indian state?", options: ["Rajasthan", "Madhya Pradesh", "Jharkhand", "Odisha"], correct: 0 },

  // ==========================================
  // 4. अर्थशास्त्र (Economics) - 5 नए प्रश्न
  // ==========================================
  { subject: "economics", lang: "hi", question: "व्यष्टि अर्थशास्त्र (Microeconomics) और समष्टि अर्थशास्त्र (Macroeconomics) शब्दों का सर्वप्रथम प्रयोग किस अर्थशास्त्री ने किया था?", options: ["राग्नार फ्रिश (Ragnar Frisch)", "एडम स्मिथ", "जे. एम. कीन्स", "अल्फ्रेड मार्शल"], correct: 0 },
  { subject: "economics", lang: "en", question: "Who was the first economist to coin and use the terms 'Microeconomics' and 'Macroeconomics' in 1933?", options: ["Ragnar Frisch", "Adam Smith", "John Maynard Keynes", "Alfred Marshall"], correct: 0 },

  { subject: "economics", lang: "hi", question: "जब कुल उपयोगिता (Total Utility) अपने अधिकतम स्तर पर होती है, तब सीमांत उपयोगिता (Marginal Utility) का मान क्या होता है?", options: ["शून्य (Zero)", "धनात्मक", "ऋणात्मक", "इकाई के बराबर"], correct: 0 },
  { subject: "economics", lang: "en", question: "When Total Utility (TU) reaches its maximum point, the Marginal Utility (MU) is:", options: ["Zero", "Positive", "Negative", "Equal to Unity"], correct: 0 },

  { subject: "economics", lang: "hi", question: "'द जनरल थ्योरी ऑफ एम्प्लॉयमेंट, इंटरेस्ट एंड मनी' नामक सुप्रसिद्ध पुस्तक के लेखक कौन हैं जिन्हें आधुनिक समष्टि अर्थशास्त्र का जनक माना जाता है?", options: ["जॉन मेनार्ड कीन्स (J.M. Keynes)", "एडम स्मिथ", "डेविड रिकार्डो", "कार्ल मार्क्स"], correct: 0 },
  { subject: "economics", lang: "en", question: "Who wrote the groundbreaking book 'The General Theory of Employment, Interest and Money' published in 1936?", options: ["John Maynard Keynes", "Adam Smith", "David Ricardo", "Karl Marx"], correct: 0 },

  { subject: "economics", lang: "hi", question: "भारत में केंद्रीय बैंकिंग कार्य करने वाले सर्वोच्च बैंक 'भारतीय रिजर्व बैंक' (RBI) का राष्ट्रीयकरण किस वर्ष किया गया था?", options: ["1949", "1935", "1951", "1969"], correct: 0 },
  { subject: "economics", lang: "en", question: "In which year was the Reserve Bank of India (RBI), the central banking institution of the nation, nationalized?", options: ["1949", "1935", "1951", "1969"], correct: 0 },

  { subject: "economics", lang: "hi", question: "राजकोषीय घाटे (Fiscal Deficit) की गणना करने का सही सूत्र निम्नलिखित में से क्या है?", options: ["कुल व्यय - (राजस्व प्राप्तियां + गैर-ऋण पूंजीगत प्राप्तियां)", "कुल व्यय - कुल राजस्व प्राप्तियां", "राजस्व व्यय - राजस्व प्राप्तियां", "कोई नहीं"], correct: 0 },
  { subject: "economics", lang: "en", question: "What is the correct mathematical formula to calculate the Fiscal Deficit of a government?", options: ["Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts)", "Total Expenditure - Total Revenue Receipts", "Revenue Expenditure - Revenue Receipts", "None of these"], correct: 0 },

  // ==========================================
  // 5. समाजशास्त्र (Sociology) - 5 नए प्रश्न
  // ==========================================
  { subject: "sociology", lang: "hi", question: "माल्थस के जनसंख्या सिद्धांत (Malthusian Theory) के अनुसार जनसंख्या किस दर या श्रेणी से बढ़ती है?", options: ["ज्यामितीय श्रेणी (Geometric Progression - 2, 4, 8, 16)", "अंकगणितीय श्रेणी", "समानुपाती श्रेणी", "घटती दर से"], correct: 0 },
  { subject: "sociology", lang: "en", question: "According to Thomas Malthus's essay on population growth, the human population increases in which progression?", options: ["Geometric Progression (2, 4, 8, 16...)", "Arithmetic Progression", "Harmonic Progression", "Diminishing Progression"], correct: 0 },

  { subject: "sociology", lang: "hi", question: "भारतीय समाज के संदर्भ में 'अस्पृश्यता (उन्मूलन) अधिनियम' (Untouchability Offences Act) संसद द्वारा सर्वप्रथम किस वर्ष पारित किया गया था?", options: ["1955", "1950", "1947", "1965"], correct: 0 },
  { subject: "sociology", lang: "en", question: "In the context of social reforms in India, in which year was the Untouchability (Offences) Act originally passed by the Parliament?", options: ["1955", "1950", "1947", "1965"], correct: 0 },

  { subject: "sociology", lang: "hi", question: "भारत में किस समाज सुधारक ने सती प्रथा के खिलाफ कड़ा आंदोलन चलाया, जिसके फलस्वरूप 1829 में इस पर प्रतिबंध लगा?", options: ["राजा राममोहन राय", "स्वामी दयानंद सरस्वती", "ईश्वरचंद्र विद्यासागर", "महात्मा ज्योतिराव फुले"], correct: 0 },
  { subject: "sociology", lang: "en", question: "Which legendary Indian social reformer initiated a strong crusade against the Sati practice, leading to its abolition in 1829?", options: ["Raja Ram Mohan Roy", "Swami Dayananda Saraswati", "Ishwar Chandra Vidyasagar", "Jyotirao Phule"], correct: 0 },

  { subject: "sociology", lang: "hi", question: "ग्रामीण समाज में भूमि सुधारों के तहत ब्रिटिश काल में प्रचलित जमींदारी प्रथा को आजादी के बाद समाप्त करने का मुख्य उद्देश्य क्या था?", options: ["बिचौलियों (Intermediaries) का अंत करना और काश्तकारों को मालिकाना हक देना", "सरकारी लगान बढ़ाना", "जमीन का छोटे टुकड़ों में बंटवारा", "कोई नहीं"], correct: 0 },
  { subject: "sociology", lang: "en", question: "What was the primary social and economic objective of abolishing the Zamindari system after independence?", options: ["To eliminate intermediaries and grant land ownership rights to actual tillers", "To increase land tax collection for the state", "To segment land holdings into smaller pieces", "None of these"], correct: 0 },

  { subject: "sociology", lang: "hi", question: "भारत सरकार द्वारा वर्ष 1978 में पारित बाल विवाह निरोधक (संशोधन) अधिनियम के तहत लड़कों की विवाह योग्य न्यूनतम आयु कितनी तय की गई थी?", options: ["21 वर्ष", "18 वर्ष", "25 वर्ष", "20 वर्ष"], correct: 0 },
  { subject: "sociology", lang: "en", question: "According to the Child Marriage Restraint (Amendment) Act passed by the government in 1978, the minimum legal age of marriage for males was set to:", options: ["21 years", "18 years", "25 years", "20 years"], correct: 0 },
  // ==========================================
// 1. इतिहास (History) - 5 प्रश्न
// ==========================================
{ subject: "history", lang: "hi", question: "कौटिल्य द्वारा रचित सुप्रसिद्ध ग्रंथ 'अर्थशास्त्र' का मुख्य विषय निम्नलिखित में से क्या है?", options: ["मौर्यकालीन राज्य शासन और राजनीति", "अर्थशास्त्र और व्यापार", "सैन्य अभियान", "धार्मिक अनुष्ठान"], correct: 0 },
{ subject: "history", lang: "en", question: "What is the primary subject matter of the famous treatise 'Arthashastra' written by Kautilya?", options: ["Mauryan statecraft, governance, and politics", "Economics and foreign trade", "Military expeditions", "Religious rituals"], correct: 0 },
{ subject: "history", lang: "hi", question: "प्रसिद्ध चीनी यात्री ह्वेनसांग ने भारत की यात्रा किस मौर्योत्तर या गुप्तोत्तर सम्राट के शासनकाल में की थी?", options: ["हर्षवर्धन", "चंद्रगुप्त मौर्य", "समुद्रगुप्त", "अशोक"], correct: 0 },
{ subject: "history", lang: "en", question: "The famous Chinese traveler Xuanzang visited India during the reign of which emperor?", options: ["Harshavardhana", "Chandragupta Maurya", "Samudragupta", "Ashoka"], correct: 0 },
{ subject: "history", lang: "hi", question: "महात्मा गांधी ने वर्ष 1930 में प्रसिद्ध दांडी मार्च की शुरुआत साबरमती आश्रम से किस कानून के विरोध में की थी?", options: ["नमक कानून", "रोलेट एक्ट", "भू-राजस्व नीति", "प्रेस पर प्रतिबंध"], correct: 0 },
{ subject: "history", lang: "en", question: "In 1930, Mahatma Gandhi started the famous Dandi March from Sabarmati Ashram to protest against which law?", options: ["The Salt Law", "The Rowlatt Act", "Land Revenue Policy", "Press Censorship"], correct: 0 },
{ subject: "history", lang: "hi", question: "विजयनगर साम्राज्य की स्थापना 1336 ई. में किन दो भाइयों ने मिलकर तुंगभद्रा नदी के तट पर की थी?", options: ["हरिहर और बुक्का", "कृष्णदेव राय और अच्युत राय", "राम राय और सदाशिव", "देवराय प्रथम"], correct: 0 },
{ subject: "history", lang: "en", question: "The Vijayanagara Empire was founded in 1336 AD on the banks of the Tungabhadra River by which two brothers?", options: ["Harihara and Bukka", "Krishnadeva Raya and Achyuta Raya", "Rama Raya and Sadashiva", "Devaraya I"], correct: 0 },
{ subject: "history", lang: "hi", question: "भारतीय पुरातत्व सर्वेक्षण (ASI) के प्रथम महानिदेशक कौन थे जिन्हें 'भारतीय पुरातत्व का जनक' भी कहा जाता है?", options: ["अलेक्जेंडर कनिंघम", "जॉन मार्शल", "आर. ई. एम. व्हीलर", "दयाराम साहनी"], correct: 0 },
{ subject: "history", lang: "en", question: "Who was the first Director-General of the Archaeological Survey of India, often called the 'Father of Indian Archaeology'?", options: ["Alexander Cunningham", "John Marshall", "R.E.M. Wheeler", "Dayaram Sahni"], correct: 0 },

// ==========================================
// 2. राजनीति विज्ञान (Political Science) - 5 प्रश्न
// ==========================================
{ subject: "political", lang: "hi", question: "क्यूबा मिसाइल संकट किस वर्ष उत्पन्न हुआ था, जिसे शीतयुद्ध का चरम बिंदु माना जाता है?", options: ["1962", "1961", "1965", "1971"], correct: 0 },
{ subject: "political", lang: "en", question: "In which year did the Cuban Missile Crisis occur, which is considered the peak of the Cold War?", options: ["1962", "1961", "1965", "1971"], correct: 0 },
{ subject: "political", lang: "hi", question: "भारत में योजना आयोग के स्थान पर 'नीति आयोग' (NITI Aayog) का गठन किस वर्ष किया गया था?", options: ["2015", "2014", "2016", "2019"], correct: 0 },
{ subject: "political", lang: "en", question: "In which year was the 'NITI Aayog' formed in India, replacing the old Planning Commission?", options: ["2015", "2014", "2016", "2019"], correct: 0 },
{ subject: "political", lang: "hi", question: "भारतीय संविधान का कौन सा अनुच्छेद आपातकाल के प्रावधानों (राष्ट्रीय आपातकाल) से संबंधित है?", options: ["अनुच्छेद 352", "अनुच्छेद 356", "अनुच्छेद 360", "अनुच्छेद 370"], correct: 0 },
{ subject: "political", lang: "en", question: "Which article of the Indian Constitution is related to the provisions of National Emergency?", options: ["Article 352", "Article 356", "Article 360", "Article 370"], correct: 0 },
{ subject: "political", lang: "hi", question: "1975 में भारत में आपातकाल की घोषणा के समय भारत के राष्ट्रपति पद पर कौन आसीन थे?", options: ["फखरुद्दीन अली अहमद", "डॉ. जाकिर हुसैन", "वी. वी. गिरि", "ज्ञानी जैल सिंह"], correct: 0 },
{ subject: "political", lang: "en", question: "Who was the President of India when the internal emergency was declared in June 1975?", options: ["Fakhruddin Ali Ahmed", "Dr. Zakir Husain", "V. V. Giri", "Giani Zail Singh"], correct: 0 },
{ subject: "political", lang: "hi", question: "दक्षिण एशियाई क्षेत्रीय सहयोग संगठन (SAARC) की स्थापना किस वर्ष ढाका में हुई थी?", options: ["1985", "1990", "1980", "1995"], correct: 0 },
{ subject: "political", lang: "en", question: "In which year was the South Asian Association for Regional Cooperation (SAARC) established in Dhaka?", options: ["1985", "1990", "1980", "1995"], correct: 0 },

// ==========================================
// 3. भूगोल (Geography) - 5 प्रश्न
// ==========================================
{ subject: "geography", lang: "hi", question: "मानव भूगोल के किस विचारधारा के तहत मनुष्य को प्रकृति का दास माना गया है?", options: ["पर्यावरण निश्चयवाद", "संभववाद", "नव-निश्चयवाद", "कल्याणपरक विचारधारा"], correct: 0 },
{ subject: "geography", lang: "en", question: "Under which school of thought in human geography is man considered passive and a slave to nature?", options: ["Environmental Determinism", "Possibilism", "Neo-Determinism", "Welfare School"], correct: 0 },
{ subject: "geography", lang: "hi", question: "संयुक्त राष्ट्र विकास कार्यक्रम (UNDP) द्वारा प्रथम मानव विकास रिपोर्ट किस वर्ष प्रकाशित की गई थी?", options: ["1990", "1985", "1995", "2000"], correct: 0 },
{ subject: "geography", lang: "en", question: "In which year was the first Human Development Report published by the UNDP?", options: ["1990", "1985", "1995", "2000"], correct: 0 },
{ subject: "geography", lang: "hi", question: "भूमध्यसागरीय कृषि मुख्य रूप से किस प्रकार के फसलों के उत्पादन के लिए विश्व प्रसिद्ध है?", options: ["खट्टे व रसीले फल (जैसे अंगूर)", "गेहूँ और चावल", "चाय और कॉफी", "मक्का और मोटे अनाज"], correct: 0 },
{ subject: "geography", lang: "en", question: "Mediterranean Agriculture is globally renowned primarily for the commercial cultivation of which products?", options: ["Citrus and juicy fruits", "Wheat and rice", "Tea and coffee", "Maize and millets"], correct: 0 },
{ subject: "geography", lang: "hi", question: "भारत की पहली संपूर्ण और व्यवस्थित जनगणना किस वर्ष संपन्न हुई थी?", options: ["1881", "1872", "1901", "1911"], correct: 0 },
{ subject: "geography", lang: "en", question: "In which year was the first complete and synchronous population census conducted in India?", options: ["1881", "1872", "1901", "1911"], correct: 0 },
{ subject: "geography", lang: "hi", question: "भारत के किस राज्य में स्थित खेतड़ी क्षेत्र तांबा अयस्क के खनन के लिए ऐतिहासिक रूप से प्रसिद्ध है?", options: ["राजस्थान", "मध्य प्रदेश", "झारखंड", "ओडिशा"], correct: 0 },
{ subject: "geography", lang: "en", question: "The Khetri belt, famous for its extensive copper mines and reserves, is located in which Indian state?", options: ["Rajasthan", "Madhya Pradesh", "Jharkhand", "Odisha"], correct: 0 },

// ==========================================
// 4. अर्थशास्त्र (Economics) - 5 प्रश्न
// ==========================================
{ subject: "economics", lang: "hi", question: "व्यष्टि अर्थशास्त्र और समष्टि अर्थशास्त्र शब्दों का सर्वप्रथम प्रयोग किस अर्थशास्त्री ने किया था?", options: ["राग्नार फ्रिश", "एडम स्मिथ", "जे. एम. कीन्स", "अल्फ्रेड मार्शल"], correct: 0 },
{ subject: "economics", lang: "en", question: "Who was the first economist to coin and use the terms 'Microeconomics' and 'Macroeconomics'?", options: ["Ragnar Frisch", "Adam Smith", "John Maynard Keynes", "Alfred Marshall"], correct: 0 },
{ subject: "economics", lang: "hi", question: "जब कुल उपयोगिता (Total Utility) अपने अधिकतम स्तर पर होती है, तब सीमांत उपयोगिता का मान क्या होता है?", options: ["शून्य", "धनात्मक", "ऋणात्मक", "इकाई के बराबर"], correct: 0 },
{ subject: "economics", lang: "en", question: "When Total Utility reaches its maximum point, the Marginal Utility is:", options: ["Zero", "Positive", "Negative", "Equal to Unity"], correct: 0 },
{ subject: "economics", lang: "hi", question: "'द जनरल थ्योरी ऑफ एम्प्लॉयमेंट, इंटरेस्ट एंड मनी' नामक सुप्रसिद्ध पुस्तक के लेखक कौन हैं?", options: ["जॉन मेनार्ड कीन्स", "एडम स्मिथ", "डेविड रिकार्डो", "कार्ल मार्क्स"], correct: 0 },
{ subject: "economics", lang: "en", question: "Who wrote the groundbreaking book 'The General Theory of Employment, Interest and Money'?", options: ["John Maynard Keynes", "Adam Smith", "David Ricardo", "Karl Marx"], correct: 0 },
{ subject: "economics", lang: "hi", question: "भारत में केंद्रीय बैंकिंग कार्य करने वाले सर्वोच्च बैंक 'भारतीय रिजर्व बैंक' का राष्ट्रीयकरण किस वर्ष किया गया था?", options: ["1949", "1935", "1951", "1969"], correct: 0 },
{ subject: "economics", lang: "en", question: "In which year was the Reserve Bank of India, the central banking institution of the nation, nationalized?", options: ["1949", "1935", "1951", "1969"], correct: 0 },
{ subject: "economics", lang: "hi", question: "राजकोषीय घाटे (Fiscal Deficit) की गणना करने का सही सूत्र निम्नलिखित में से क्या है?", options: ["कुल व्यय - (राजस्व प्राप्तियां + गैर-ऋण पूंजीगत प्राप्तियां)", "कुल व्यय - कुल राजस्व प्राप्तियां", "राजस्व व्यय - राजस्व प्राप्तियां", "कोई नहीं"], correct: 0 },
{ subject: "economics", lang: "en", question: "What is the correct mathematical formula to calculate the Fiscal Deficit of a government?", options: ["Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts)", "Total Expenditure - Total Revenue Receipts", "Revenue Expenditure - Revenue Receipts", "None of these"], correct: 0 },

// ==========================================
// 5. समाजशास्त्र (Sociology) - 5 प्रश्न
// ==========================================
{ subject: "sociology", lang: "hi", question: "माल्थस के जनसंख्या सिद्धांत के अनुसार मानव जनसँख्या किस दर या श्रेणी से बढ़ती है?", options: ["ज्यामितीय श्रेणी (2, 4, 8, 16)", "अंकगणितीय श्रेणी", "समानुपाती श्रेणी", "घटती दर से"], correct: 0 },
{ subject: "sociology", lang: "en", question: "According to Thomas Malthus's essay on population growth, the human population increases in which progression?", options: ["Geometric Progression", "Arithmetic Progression", "Harmonic Progression", "Diminishing Progression"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "भारतीय समाज के संदर्भ में 'अस्पृच्छता निवारण अधिनियम' संसद द्वारा सर्वप्रथम किस वर्ष पारित किया गया था?", options: ["1955", "1950", "1947", "1965"], correct: 0 },
{ subject: "sociology", lang: "en", question: "In the context of social reforms in India, in which year was the Untouchability (Offences) Act originally passed?", options: ["1955", "1950", "1947", "1965"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "भारत में किस समाज सुधारक ने सती प्रथा के खिलाफ कड़ा आंदोलन चलाया, जिसके फलस्वरूप 1829 में इस पर प्रतिबंध लगा?", options: ["राजा राममोहन राय", "स्वामी दयानंद सरस्वती", "ईश्वरचंद्र विद्यासागर", "महात्मा ज्योतिराव फुले"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Which legendary Indian social reformer initiated a strong crusade against the Sati practice, leading to its abolition in 1829?", options: ["Raja Ram Mohan Roy", "Swami Dayananda Saraswati", "Ishwar Chandra Vidyasagar", "Jyotirao Phule"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "ग्रामीण समाज में भूमि सुधारों के तहत ब्रिटिश काल में प्रचलित जमींदारी प्रथा को आजादी के बाद समाप्त करने का मुख्य उद्देश्य क्या था?", options: ["बिचौलियों का अंत करना और काश्तकारों को मालिकाना हक देना", "सरकारी लगान बढ़ाना", "जमीन का छोटे टुकड़ों में बंटवारा", "कोई नहीं"], correct: 0 },
{ subject: "sociology", lang: "en", question: "What was the primary social and economic objective of abolishing the Zamindari system after independence?", options: ["To eliminate intermediaries and grant land ownership rights to actual tillers", "To increase land tax collection for the state", "To segment land holdings into smaller pieces", "None of these"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "भारत सरकार द्वारा वर्ष 1978 में पारित बाल विवाह निरोधक अधिनियम के तहत लड़कों की विवाह योग्य न्यूनतम आयु कितनी तय की गई थी?", options: ["21 वर्ष", "18 वर्ष", "25 वर्ष", "20 वर्ष"], correct: 0 },
{ subject: "sociology", lang: "en", question: "According to the Child Marriage Restraint Act passed by the government in 1978, the minimum legal age of marriage for males was set to:", options: ["21 years", "18 years", "25 years", "20 years"], correct: 0 },

// ==========================================
// 6. मनोविज्ञान (Psychology) - 5 प्रश्न
// ==========================================
{ subject: "psychology", lang: "hi", question: "बुद्धि का पास मॉडल (PASS Model) किसके द्वारा प्रतिपादित किया गया था?", options: ["दास, नागलीरी और किर्बी", "अल्फ्रेड बिने", "हावर्ड गार्डनर", "थर्स्टन"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The PASS Model of intelligence was developed by which of the following psychologists?", options: ["Das, Naglieri, and Kirby", "Alfred Binet", "Howard Gardner", "Thurstone"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "व्यक्तित्व का 'कथानक संप्रत्यक्षण परीक्षण' (TAT) किसके द्वारा विकसित किया गया था?", options: ["मारे एवं मरे (Morgan and Murray)", "रोर्शा", "हथवे", "ऑलपोर्ट"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The Thematic Apperception Test (TAT) for personality measurement was developed by:", options: ["Morgan and Murray", "Rorschach", "Hathaway", "Allport"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "मानसिक विकृतियों के वर्गीकरण की पद्धति 'DSM-5' किसके द्वारा प्रकाशित की जाती है?", options: ["अमेरिकन साइकियाट्रिक एसोसिएशन", "विश्व स्वास्थ्य संगठन", "यूनिसेफ", "अमेरिकन साइकोलॉजिकल एसोसिएशन"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The diagnostic classification manual DSM-5 is published by which organization?", options: ["American Psychiatric Association", "World Health Organization", "UNICEF", "American Psychological Association"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "फ्रायड के अनुसार, मन का कौन सा भाग 'सुख के सिद्धांत' (Pleasure Principle) पर काम करता है?", options: ["इड (Id)", "ईगो (Ego)", "सुपरइगो (Super-Ego)", "चेतन मन"], correct: 0 },
{ subject: "psychology", lang: "en", question: "According to Sigmund Freud, which part of the psychical apparatus operates on the pleasure principle?", options: ["Id", "Ego", "Super-Ego", "Conscious mind"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "तनाव प्रबंधन की वह तकनीक जिसमें शरीर के अंगों को शिथिल करने की ट्रेनिंग दी जाती है, क्या कहलाती है?", options: ["जैव प्रतिपुष्टि या प्रगामी शिथिलन", "बायोफीडबैक", "ध्यान", "परामर्श"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The stress management technique focused on deep muscle relaxation is known as:", options: ["Progressive Muscle Relaxation", "Biofeedback", "Meditation", "Counseling"], correct: 0 },

// ==========================================
// 7. गृह विज्ञान (Home Science) - 5 प्रश्न
// ==========================================
{ subject: "home_science", lang: "hi", question: "खाद्य पदार्थों को खराब होने से बचाने के लिए 'पाश्चुरीकरण' विधि में दूध को कितने तापमान पर गर्म किया जाता है?", options: ["72°C पर 15 सेकंड के लिए", "100°C पर 10 मिनट के लिए", "60°C पर 5 सेकंड के लिए", "50°C पर 1 मिनट के लिए"], correct: 0 },
{ subject: "home_science", lang: "en", question: "In the pasteurization method used to preserve food products, milk is heated to which temperature specification?", options: ["72°C for about 15 seconds", "100°C for 10 minutes", "60°C for 5 seconds", "50°C for 1 minute"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "बच्चों में 'क्वाशियोरकोर' (Kwashiorkor) रोग भोजन में किस मुख्य पोषक तत्व की गंभीर कमी के कारण होता है?", options: ["प्रोटीन", "विटामिन ए", "वसा", "आयरन"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Kwashiorkor, a severe form of malnutrition in children, is caused by a deficiency of:", options: ["Protein", "Vitamin A", "Fat", "Iron"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "भारत सरकार द्वारा खाद्य उत्पादों की शुद्धता सुनिश्चित करने के लिए 'एगमार्क' (AGMARK) चिह्न किस प्रकार के उत्पादों पर दिया जाता है?", options: ["कृषि और खाद्य उत्पाद", "इलेक्ट्रॉनिक सामान", "सोने के आभूषण", "ऊनी वस्त्र"], correct: 0 },
{ subject: "home_science", lang: "en", question: "The AGMARK certification eco-label is issued by the government for which category of consumer items?", options: ["Agricultural and food products", "Electronic appliances", "Gold jewelry", "Woolen textiles"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "वस्त्रों की धुलाई में 'कड़ापन' या चमक लाने के लिए निम्नलिखित में से किसका उपयोग कलफ के रूप में किया जाता है?", options: ["स्टार्च (जैसे अरारोट)", "सिरका", "नील", "नमक"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Which agent is traditionally used as a stiffening element during the laundering of cotton textiles?", options: ["Starch", "Vinegar", "Blueing agent", "Salt"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "शिशुओं को जन्म के तुरंत बाद दिया जाने वाला माँ का पहला पीला गाढ़ा दूध क्या कहलाता है जो रोग प्रतिरोधक क्षमता बढ़ाता है?", options: ["कोलोस्ट्रम (खीस)", "लेक्टोज दूध", "सप्लीमेंट दूध", "हल्का दूध"], correct: 0 },
{ subject: "home_science", lang: "en", question: "The thick, yellowish first milk secreted by the mother right after childbirth is called:", options: ["Colostrum", "Lactose milk", "Supplementary milk", "Skimmed milk"], correct: 0 },

// ==========================================
// 8. दर्शनशास्त्र (Philosophy) - 5 प्रश्न
// ==========================================
{ subject: "philosophy", lang: "hi", question: "बौद्ध दर्शन के अनुसार दुखों के मूल कारण 'अविद्या' से लेकर दुख तक की बारह कड़ियों की श्रृंखला को क्या कहा जाता है?", options: ["प्रतीत्यसमुत्पाद", "अष्टांगिक मार्ग", "क्षणिकवाद", "स्याद्वाद"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "According to Buddhist philosophy, the chain of twelve causal links starting from ignorance to suffering is known as:", options: ["Pratityasamutpada", "Ashtangika Marga", "Kshanikavada", "Syadvada"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "चार्वक दर्शन को किस अन्य नाम से भी जाना जाता है जो केवल प्रत्यक्ष प्रमाण को स्वीकार करता है?", options: ["लोकायत दर्शन", "रूढ़िवादी दर्शन", "मीमांसा दर्शन", "जैन दर्शन"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "Carvaka philosophy, which accepts only perception as a valid source of knowledge, is also called:", options: ["Lokayat Darshana", "Orthodox Philosophy", "Mimamsa Darshana", "Jain Darshana"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "न्याय दर्शन के प्रवर्तक या संस्थापक महर्षि कौन माने जाते हैं जिन्होंने तर्कशास्त्र को आधार दिया?", options: ["महर्षि गौतम", "महर्षि कणाद", "महर्षि कपिल", "पतंजलि"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "Who is considered the founder of the Nyaya school of Hindu philosophy, which laid the foundation of logic?", options: ["Maharishi Gautama", "Maharishi Kanada", "Maharishi Kapila", "Patanjali"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "शंकराचार्य के अद्वैत वेदांत दर्शन के अनुसार जगत या संसार का मूल कारण और एकमात्र सत्य सत्ता कौन सी है?", options: ["ब्रह्म (Brahman)", "प्रकृति", "जीवात्मा", "शून्य"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "According to Adi Shankaracharya's Advaita Vedanta philosophy, what is the ultimate reality and sole truth?", options: ["Brahman", "Prakriti", "Jivatma", "Shunya"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "सुकरात के अनुसार ज्ञान और सदाचार में क्या संबंध है?", options: ["ज्ञान ही सद्गुण (Virtue) है", "ज्ञान और सद्गुण अलग हैं", "सद्गुण से ज्ञान कम होता है", "कोई संबंध नहीं"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "According to the ethical philosophy of Socrates, what is the core relationship between knowledge and virtue?", options: ["Knowledge is virtue", "Knowledge and virtue are independent", "Virtue diminishes knowledge", "There is no correlation"], correct: 0 },

// ==========================================
// 9. कानूनी अध्ययन (Legal Studies) - 5 प्रश्न
// ==========================================
{ subject: "legal_studies", lang: "hi", question: "भारतीय संविधान के किस भाग को 'भारत का मैग्नाकार्टा' कहा जाता है जिसमें मौलिक अधिकारों का वर्णन है?", options: ["भाग III", "भाग IV", "भाग II", "भाग V"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Which part of the Indian Constitution is referred to as the 'Magna Carta of India' containing Fundamental Rights?", options: ["Part III", "Part IV", "Part II", "Part V"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "सर्वोच्च न्यायालय द्वारा किस ऐतिहासिक मामले में 'संविधान के बुनियादी ढांचे' (Basic Structure Doctrine) का सिद्धांत दिया गया था?", options: ["केशवानंद भारती बनाम केरल राज्य (1973)", "गोलकनाथ मामला", "मेनका गांधी मामला", "शाह बानो मामला"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "In which landmark case did the Supreme Court of India propagate the famous 'Basic Structure Doctrine'?", options: ["Kesavananda Bharati v. State of Kerala", "Golaknath Case", "Maneka Gandhi Case", "Shah Bano Case"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "अपराध शास्त्र में 'मेन्स रीया' (Mens Rea) का वास्तविक कानूनी तात्पर्य निम्नलिखित में से क्या होता है?", options: ["दुराशय या आपराधिक मनस्थिति (Guilty Mind)", "आपराधिक कृत्य", "सजा का प्रावधान", "गवाह का बयान"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "What does the Latin legal maxim 'Mens Rea' literally translate to in criminal jurisprudence?", options: ["A guilty mind or criminal intent", "The physical criminal act", "Statutory punishment", "Witness testimony"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "लोक अदालत (Lok Adalat) की स्थापना का मुख्य उद्देश्य कानूनी व्यवस्था में क्या सुधार करना है?", options: ["समझौते और मध्यस्थता द्वारा मामलों का त्वरित निपटारा", "नए कानून बनाना", "अपराधियों को कठोरतम दंड देना", "सुप्रीम कोर्ट का काम बढ़ाना"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "What is the primary objective behind organizing Lok Adalats within the Indian judicial framework?", options: ["Fast-track dispute resolution through compromise and conciliation", "Drafting fresh legal statutes", "Awarding maximum statutory sentences", "Increasing the apex court's caseload"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "भारत के वर्तमान अटॉर्नी जनरल (महान्यायावादी) की नियुक्ति राष्ट्रपति द्वारा किस अनुच्छेद के तहत की जाती है?", options: ["अनुच्छेद 76", "अनुच्छेद 72", "अनुच्छेद 148", "अनुच्छेद 61"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Under which article of the Indian Constitution does the President appoint the Attorney General for India?", options: ["Article 76", "Article 72", "Article 148", "Article 61"], correct: 0 },

// ==========================================
// 10. हिंदी साहित्य (Hindi Literature) - 5 प्रश्न
// ==========================================
{ subject: "hindi_lit", lang: "hi", question: "हिंदी साहित्य के इतिहास में किस काल को 'स्वर्णकाल' (Golden Age) के नाम से अभिहित किया जाता है?", options: ["भक्ति काल", "आदि काल", "रीति काल", "आधुनिक काल"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Which period in the history of Hindi literature is designated as the 'Golden Age'?", options: ["Bhakti Kaal", "Aadi Kaal", "Riti Kaal", "Adhunik Kaal"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "मैथिलीशरण गुप्त द्वारा रचित महाकाव्य 'साकेत' का मुख्य कथानक रामायण के किस उपेक्षित चरित्र पर केंद्रित है?", options: ["लक्ष्मण की पत्नी उर्मिला", "कैकई", "भरत", "मांडवी"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "The epic poem 'Saket' written by Maithilisharan Gupt centers around which character from the Ramayana?", options: ["Urmila", "Kaikeyi", "Bharata", "Mandavi"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "आधुनिक काल की सुप्रसिद्ध कवयित्री महादेवी वर्मा को उनकी किस काव्य कृति के लिए प्रतिष्ठित ज्ञानपीठ पुरस्कार मिला था?", options: ["यामा (Yama)", "नीहार", "रश्मि", "दीपशिखा"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "For which collection of poems did the famous poet Mahadevi Verma receive the prestigious Jnanpith Award?", options: ["Yama", "Nihar", "Rashmi", "Deepshikha"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "मुंशी प्रेमचंद द्वारा लिखित अंतिम और पूर्ण उपन्यास कौन सा है जिसे कृषक जीवन का महाकाव्य कहा जाता है?", options: ["गोदान", "गबन", "रंगभूमि", "सेवासदन"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Which is the last complete and celebrated novel written by Munshi Premchand depicting Indian rural life?", options: ["Godan", "Gaban", "Rangbhoomi", "Sevasadan"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "'परिंदें' कहानी के लेखक कौन हैं जिन्हें हिंदी में नई कहानी आंदोलन का जनक माना जाता है?", options: ["निर्मल वर्मा", "मोहन राकेश", "कमलेश्वर", "अज्ञेय"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Who wrote the famous story 'Parinde', widely considered the starting point of the 'Nayi Kahani' movement?", options: ["Nirmal Verma", "Mohan Rakesh", "Kamleshwar", "Agyeya"], correct: 0 },

// ==========================================
// 11. अंग्रेजी साहित्य (English Literature) - 5 प्रश्न
// ==========================================
{ subject: "english_lit", lang: "hi", question: "अंग्रेजी साहित्य में 'रोमांटिक पुनरुत्थान' (Romantic Revival) की शुरुआत किस कृति के प्रकाशन से मानी जाती है?", options: ["लिरिकल बैलाड्स (1798)", "पैराडाइज लॉस्ट", "वेस्ट लैंड", "प्रीलूड"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "The Romantic Movement in English literature is officially considered to have begun with the publication of:", options: ["Lyrical Ballads (1798)", "Paradise Lost", "The Waste Land", "The Prelude"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "सुप्रसिद्ध अंग्रेजी उपन्यास 'प्राइड एंड प्रेजुडिस' (Pride and Prejudice) की लेखिका कौन हैं?", options: ["जेन ऑस्टिन (Jane Austen)", "शर्लोट ब्रोंटे", "जॉर्ज एलियट", "वर्जिशिया वुल्फ"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Who is the author of the classic English domestic novel 'Pride and Prejudice'?", options: ["Jane Austen", "Charlotte Bronte", "George Eliot", "Virginia Woolf"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "आधुनिक अंग्रेजी कविता की रीढ़ माने जाने वाले प्रसिद्ध काव्य 'द वेस्ट लैंड' (The Waste Land) के रचयिता कौन हैं?", options: ["टी. एस. एलियट (T.S. Eliot)", "डब्ल्यू. बी. यीट्स", "डब्लू. एच. ऑडेन", "एजरा पाउंड"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Who wrote the monumental modernist poem 'The Waste Land' published in 1922?", options: ["T.S. Eliot", "W.B. Yeats", "W.H. Auden", "Ezra Pound"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "विलियम वर्डसवर्थ मुख्य रूप से किस प्रकार के कवि के रूप में जाने जाते हैं जिन्होंने प्रकृति पर अत्यधिक कविताएँ लिखीं?", options: ["प्रकृति के कवि (Nature Poet)", "मेटाफिजिकल कवि", "युद्ध कवि", "सैटायरिकल कवि"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "William Wordsworth is primarily celebrated as what type of poet in English literary history?", options: ["Nature Poet", "Metaphysical Poet", "War Poet", "Satirical Poet"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "अंग्रेजी नाटक 'डॉक्टर फॉस्टस' (Doctor Faustus) की रचना पुनर्जागरण काल के किस नाटककार ने की थी?", options: ["क्रिस्टोफर मार्लो", "विलियम शेक्सपियर", "बेन जॉनसन", "जॉन वेबस्टर"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Which Renaissance playwright and contemporary of Shakespeare wrote the tragedy 'Doctor Faustus'?", options: ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"], correct: 0 },

// ==========================================
// 12. लेखाकर्म (Accountancy) - 5 प्रश्न
// ==========================================
{ subject: "accountancy", lang: "hi", question: "एक गैर-व्यापारिक संस्था (NPO) द्वारा बनाया जाने वाला 'प्राप्ति एवं भुगतान खाता' (Receipts and Payments Account) किस प्रकृति का होता है?", options: ["वास्तविक खाता (Real Account)", "नाममात्र का खाता", "व्यक्तिगत खाता", "प्रतिनिधि खाता"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "The Receipts and Payments Account prepared by a Non-Profit Organization is classified under which type of account?", options: ["Real Account", "Nominal Account", "Personal Account", "Representative Account"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "साझेदारी संलेख (Partnership Deed) की अनुपस्थिति में साझेदारों को उनके द्वारा दिए गए ऋण पर किस दर से वार्षिक ब्याज दिया जाता है?", options: ["6% वार्षिक दर से", "10% वार्षिक दर से", "कोई ब्याज नहीं दिया जाता", "12% वार्षिक दर से"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "In the absolute absence of a Partnership Deed, at what rate is interest on a partner's loan allowed?", options: ["6% per annum", "10% per annum", "No interest is allowed", "12% per annum"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "कम्पनी द्वारा अंशों का हरण (Forfeiture of Shares) करने पर अंश पूंजी खाते (Share Capital Account) को किस राशि से डेबिट किया जाता है?", options: ["मांगी गई राशि से (Called-up Amount)", "अंकित मूल्य से", "प्रदत्त राशि से", "बकाया याचना राशि से"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "On the forfeiture of shares by a company, the Share Capital Account is debited with which amount?", options: ["Called-up value of shares", "Face value of shares", "Paid-up value of shares", "Uncalled value of shares"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "ऋणपत्रों के निर्गमन पर होने वाली हानि (Loss on Issue of Debentures) को कम्पनी के चिट्ठे (Balance Sheet) में किस शीर्षक के अंतर्गत दिखाया जाता है?", options: ["गैर-चालू परिसंपत्तियां या अन्य चालू परिसंपत्तियां", "चालू दायित्व", "शेयरधारक कोष", "दीर्घकालीन ऋण"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Loss on Issue of Debentures is displayed under which major section of a corporate Balance Sheet?", options: ["Non-Current Assets / Other Current Assets", "Current Liabilities", "Shareholders' Funds", "Long-term Borrowings"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "रोकड़ प्रवाह विवरण (Cash Flow Statement) तैयार करते समय 'लाभांश का भुगतान' (Dividend Paid) किस प्रकार की गतिविधि माना जाता है?", options: ["वित्तीय गतिविधि (Financing Activity)", "संचालन गतिविधि", "निवेश गतिविधि", "व्यावसायिक गतिविधि"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "While preparing a Cash Flow Statement, the transaction 'Dividend Paid' is categorized under which activity?", options: ["Financing Activity", "Operating Activity", "Investing Activity", "Business Activity"], correct: 0 },

// ==========================================
// 13. व्यावसायिक अध्ययन (Business Studies) - 5 प्रश्न
// ==========================================
{ subject: "business", lang: "hi", question: "वैज्ञानिक प्रबंध के जनक एफ. डब्ल्यू. टेलर द्वारा प्रतिपादित कार्यकुशलता बढ़ाने वाली पद्धति क्या कहलाती है?", options: ["वैज्ञानिक प्रबंध (Scientific Management)", "प्रशासनिक प्रबंध", "नौकरशाही प्रबंध", "मानवीय संबंध प्रबंध"], correct: 0 },
{ subject: "business", lang: "en", question: "F.W. Taylor is universally recognized as the pioneer of which management methodology designed to optimize industrial efficiency?", options: ["Scientific Management", "Administrative Management", "Bureaucratic Management", "Human Relations Management"], correct: 0 },
{ subject: "business", lang: "hi", question: "हेनरी फेयोल द्वारा प्रतिपादित प्रबंध के 14 सिद्धांतों में से 'गैंग प्लैंक' (Gang Plank) का संबंध किससे है?", options: ["आपातकाल में प्रत्यक्ष संपर्क स्थापित करना (समतल संपर्क)", "आदेश की एकता", "कार्य का विभाजन", "अनुशासन व्यवस्था"], correct: 0 },
{ subject: "business", lang: "en", question: "Among the 14 principles of management formulated by Henri Fayol, what does the concept of a 'Gang Plank' enable?", options: ["Direct communication across scalar chains during emergencies", "Unity of command execution", "Systematic division of labor", "Organizational discipline lines"], correct: 0 },
{ subject: "business", lang: "hi", question: "भर्ती का कौन सा स्रोत आंतरिक स्रोत (Internal Source) कहलाता है जिसमें बाहर से नए लोग नहीं बुलाए जाते?", options: ["पदोन्नति और स्थानांतरण (Promotion & Transfer)", "कैंपस प्लेसमेंट", "रोजगार कार्यालय", "विज्ञापन"], correct: 0 },
{ subject: "business", lang: "en", question: "Which of the following recruitment channels represents an internal source of manpower sourcing?", options: ["Promotion and Transfer", "Campus Placement", "Employment Exchanges", "Direct Media Advertisement"], correct: 0 },
{ subject: "business", lang: "hi", question: "विपणन मिश्रण (Marketing Mix) के चार प्रमुख तत्वों '4 Ps' में निम्नलिखित में से कौन सा शामिल नहीं है?", options: ["प्रक्रिया (Process)", "उत्पाद (Product)", "मूल्य (Price)", "स्थान (Place)"], correct: 0 },
{ subject: "business", lang: "en", question: "Which element is NOT traditionally part of the core '4 Ps' of the classic Marketing Mix framework?", options: ["Process", "Product", "Price", "Place"], correct: 0 },
{ subject: "business", lang: "hi", question: "उपभोक्ता संरक्षण अधिनियम 2019 के अनुसार, राष्ट्रीय उपभोक्ता विवाद निवारण आयोग (National Commission) का क्षेत्राधिकार कितनी राशि तक का है?", options: ["2 करोड़ रुपये से अधिक", "50 लाख रुपये तक", "1 करोड़ रुपये तक", "10 लाख रुपये तक"], correct: 0 },
{ subject: "business", lang: "en", question: "According to the Consumer Protection Act 2019, the monetary jurisdiction of the National Commission covers claims valued at:", options: ["Exceeding 2 Crore Rupees", "Up to 50 Lakh Rupees", "Up to 1 Crore Rupees", "Up to 10 Lakh Rupees"], correct: 0 },

// ==========================================
// 14. उद्यमशीलता (Entrepreneurship) - 5 प्रश्न
// ==========================================
{ subject: "entrepreneurship", lang: "hi", question: "एक नए व्यावसायिक उद्यम को शुरू करने के लिए तैयार किया गया विस्तृत लिखित दस्तावेज क्या कहलाता है?", options: ["व्यावसायिक योजना या प्रोजेक्ट रिपोर्ट", "मेमोरैंडम ऑफ़ एसोसिएशन", "चिट्ठा", "प्रोस्पेक्टस"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "A comprehensive written road-map outlining a new venture's operational and financial objectives is called a:", options: ["Business Plan or Project Report", "Memorandum of Association", "Balance Sheet", "Corporate Prospectus"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "कार्यशील पूंजी (Working Capital) से क्या तात्पर्य है जो व्यवसाय के दैनिक संचालन के लिए आवश्यक होती है?", options: ["चालू परिसंपत्तियां - चालू दायित्व", "कुल स्थायी संपत्तियां", "दीर्घकालीन पूंजी", "बैंक ओवरड्राफ्ट"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "What is the accounting definition of Working Capital required to fund a business entity's daily operational cycles?", options: ["Current Assets - Current Liabilities", "Total Fixed Assets", "Long-term Invested Capital", "Bank Overdraft Limits"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "किसी नए विचार, सेवा या उत्पाद को बाजार में व्यावसायिक रूप से पहली बार पेश करने की प्रक्रिया क्या कहलाती है?", options: ["नवाचार (Innovation)", "विपणन", "नियोजन", "मूल्यांकन"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "The process of translating a novel idea or concept into a commercially successful market product is defined as:", options: ["Innovation", "Marketing", "Planning", "Evaluation"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "वेंचर कैपिटल (Venture Capital / जोखिम पूंजी) मुख्य रूप से किस प्रकार के व्यवसायों को वित्तीय सहायता प्रदान करती है?", options: ["उच्च विकास क्षमता वाले नए और जोखिम भरे स्टार्टअप्स को", "पारंपरिक छोटे कुटीर उद्योगों को", "सरकारी घाटे वाली कंपनियों को", "केवल कृषि कार्यों को"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "Venture Capital firms primarily supply equity funding and institutional support to which corporate structures?", options: ["Early-stage startups possessing high growth potential and risk profiles", "Traditional small-scale cottage industries", "Loss-making public sector enterprises", "Agricultural farming cooperatives only"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "बाजार में किसी वस्तु के मूल्य निर्धारण की वह नीति क्या कहलाती है जिसमें शुरुआत में बहुत कम कीमत रखी जाती है ताकि बाजार हिस्सेदारी कब्जाई जा सके?", options: ["बाजार पैठ मूल्य निर्धारण (Penetration Pricing)", "मूल्य स्किमिंग", "लागत-जोड़ मूल्य निर्धारण", "एकाधिकार मूल्य निर्धारण"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "What pricing strategy sets low initial prices for new entries to rapidly build large market shares?", options: ["Penetration Pricing strategy", "Price Skimming strategy", "Cost-plus Pricing strategy", "Monopoly Pricing strategy"], correct: 0 },

// ==========================================
// 15. भौतिकी (Physics) - 5 प्रश्न
// ==========================================
{ subject: "physics", lang: "hi", question: "गॉस के नियम के अनुसार, किसी बंद पृष्ठ से गुजरने वाला कुल विद्युत फ्लक्स किसके बराबर होता है?", options: ["पृष्ठ द्वारा परिबद्ध कुल आवेश का 1/ε₀ गुना", "पृष्ठ के क्षेत्रफल के गुणांक के", "आवेश के वर्ग के समानुपाती", "शून्य"], correct: 0 },
{ subject: "physics", lang: "en", question: "According to Gauss's Law, the total net electric flux passing through any closed Gaussian surface is equal to:", options: ["1/ε₀ times the net charge enclosed inside", "The surface area coefficient", "Proportional to the square of charge", "Zero"], correct: 0 },
{ subject: "physics", lang: "hi", question: "किसी चालक तार के पदार्थ की विद्युत प्रतिरोधकता (Resistivity) मुख्य रूप से किस कारक पर निर्भर करती है?", options: ["तार के पदार्थ की प्रकृति और तापमान पर", "तार की लंबाई पर", "तार के अनुप्रस्थ काट के क्षेत्रफल पर", "तार के आकार पर"], correct: 0 },
{ subject: "physics", lang: "en", question: "The electrical resistivity of a metallic conductor wire depends fundamentally on which physical property?", options: ["The nature of the material and its temperature", "The total structural length of the wire", "The cross-sectional area of the wire", "The physical shape of the wire"], correct: 0 },
{ subject: "physics", lang: "hi", question: "लेंस के नियम (Lenz's Law) के तहत प्रेरित विद्युत वाहक बल की दिशा ज्ञात की जाती है, यह किस संरक्षण नियम का परिणाम है?", options: ["ऊर्जा संरक्षण नियम", "आवेश संरक्षण नियम", "संवेग संरक्षण नियम", "द्रव्यमान संरक्षण नियम"], correct: 0 },
{ subject: "physics", lang: "en", question: "Lenz's Law, which determines the direction of an induced electromotive force, is a direct consequence of the conservation of:", options: ["Energy", "Charge", "Momentum", "Mass"], correct: 0 },
{ subject: "physics", lang: "hi", question: "एक समतल दर्पण (Plane Mirror) की फोकस दूरी (Focus Length) और आवर्धन क्षमता का मान क्रमशः क्या होता है?", options: ["अनंत और 1", "शून्य और 0", "25 सेमी और 1", "अनंत और शून्य"], correct: 0 },
{ subject: "physics", lang: "en", question: "What are the exact values of the focal length and linear magnification of a standard optical Plane Mirror?", options: ["Infinity and 1", "Zero and 0", "25 cm and 1", "Infinity and zero"], correct: 0 },
{ subject: "physics", lang: "hi", question: "अर्धचालकों (Semiconductors) का तापमान बढ़ाने पर उनकी विद्युत चालकता (Conductivity) पर क्या प्रभाव पड़ता है?", options: ["विद्युत चालकता बढ़ती है (प्रतिरोध घटता है)", "विद्युत चालकता घटती है", "अपरिवर्तित रहती है", "पहले बढ़ती है फिर घटती है"], correct: 0 },
{ subject: "physics", lang: "en", question: "What is the net effect on the electrical conductivity of semiconductor materials when their thermal temperature increases?", options: ["Conductivity increases as resistance drops", "Conductivity decreases linearly", "Conductivity remains entirely unchanged", "Conductivity initially increases then drops"], correct: 0 },

// ==========================================
// 16. रसायन विज्ञान (Chemistry) - 5 प्रश्न
// ==========================================
{ subject: "chemistry", lang: "hi", question: "प्रथम कोटि की अभिक्रिया (First Order Reaction) के वेग स्थिरांक (k) की इकाई निम्नलिखित में से क्या होती है?", options: ["सेकंड⁻¹ (s⁻¹)", "मोल लीटर⁻¹ सेकंड⁻¹", "लीटर मोल⁻¹ सेकंड⁻¹", "मोल⁻¹ सेकंड"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "What is the correct chemical unit for the rate constant of a standard First Order Reaction?", options: ["s⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹", "mol⁻¹ s"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "लोहे पर जंग लगने (Rusting of Iron) की रासायनिक प्रक्रिया को रोकने के लिए जस्ते की परत चढ़ाना क्या कहलाता है?", options: ["यशदलेपन या गैल्वनीकरण", "विद्युत अपघटन", "भर्जन", "एनोडीकरण"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "The industrial electroplating process of coating iron with a protective layer of zinc to prevent rust is called:", options: ["Galvanization", "Electrolysis", "Roasting", "Anodizing"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "डीएनए और आरएनए में पाए जाने वाले नाइट्रोजन युक्त क्षारों में कौन सा क्षार केवल आरएनए में पाया जाता है, डीएनए में नहीं?", options: ["यूरैसिल (Uracil)", "थायमीन", "एडेनिन", "साइटोसिन"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Among the nitrogenous bases found in nucleic acids, which base is present exclusively in RNA and missing in DNA?", options: ["Uracil", "Thymine", "Adenine", "Cytosine"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "एक आदर्श विलयन (Ideal Solution) वह होता है जो सभी सांद्रताओं पर किस नियम का पूर्णतः पालन करता है?", options: ["राउल्ट का नियम (Raoult's Law)", "हेनरी का नियम", "वांट हॉफ नियम", "बॉयल का नियम"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "An Ideal Solution is chemically defined as a solution mixture that strictly obeys which law across all concentrations?", options: ["Raoult's Law", "Henry's Law", "Van 't Hoff Law", "Boyle's Law"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "ऐल्किल हैलाइड की शुष्क ईथर की उपस्थिति में सोडियम धातु के साथ क्रिया कराने पर ऐल्केन बनना कौन सी अभिक्रिया है?", options: ["वुर्ट्ज अभिक्रिया (Wurtz Reaction)", "फ्रैंकलैंड अभिक्रिया", "फिटिग अभिक्रिया", "कोल्बे अभिक्रिया"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "The coupling reaction of alkyl halides with metallic sodium in dry ether to synthesize higher alkanes is named:", options: ["Wurtz Reaction", "Frankland Reaction", "Fittig Reaction", "Kolbe's Reaction"], correct: 0 },

// ==========================================
// 17. जीव विज्ञान (Biology) - 5 प्रश्न
// ==========================================
{ subject: "biology", lang: "hi", question: "डीएनए फिंगरप्रिंटिंग (DNA Fingerprinting) तकनीक का विकास सर्वप्रथम किस वैज्ञानिक द्वारा किया गया था?", options: ["एलेक जेफ्रीस (Alec Jeffreys)", "वाटसन और क्रिक", "हर्शी और चेज", "मार्गने"], correct: 0 },
{ subject: "biology", lang: "en", question: "The molecular profiling technology known as DNA Fingerprinting was originally formulated by which geneticist?", options: ["Alec Jeffreys", "Watson and Crick", "Hershey and Chase", "Thomas Hunt Morgan"], correct: 0 },
{ subject: "biology", lang: "hi", question: "मेंडल के आनुवंशिकी प्रयोगों में दो विपरीत लक्षणों वाले पौधों के संकरण कराने पर प्राप्त F₂ पीढ़ी का फिनोटाइप अनुपात क्या था?", options: ["3 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1", "1 : 1"], correct: 0 },
{ subject: "biology", lang: "en", question: "In Mendel's classical monohybrid cross experiments, what was the observable phenotypic ratio obtained within the F₂ generation?", options: ["3 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1", "1 : 1"], correct: 0 },
{ subject: "biology", lang: "hi", question: "मानव इंसुलिन के कृत्रिम निर्माण में प्रयुक्त होने वाले किस जीवाणु का उपयोग जेनेटिक इंजीनियरिंग में धड़ल्ले से किया जाता है?", options: ["इश्चेरिचिया कोलाई (E. coli)", "लैक्टोबैसिलस", "स्ट्रेप्टोकोकस", "राइजोबियम"], correct: 0 },
{ subject: "biology", lang: "en", question: "Which bacterial species serves as the core host platform for manufacturing recombinant human insulin via genetic engineering?", options: ["Escherichia coli", "Lactobacillus", "Streptococcus", "Rhizobium"], correct: 0 },
{ subject: "biology", lang: "hi", question: "एड्स (AIDS) रोग फैलाने वाले एचआईवी (HIV) वायरस की आनुवंशिक संरचना किस प्रकार की होती है?", options: ["एक रज्जुकी आरएनए (Single-stranded RNA)", "द्वि-रज्जुकी डीएनए", "एक रज्जुकी डीएनए", "द्वि-रज्जुकी आरएनए"], correct: 0 },
{ subject: "biology", lang: "en", question: "What is the exact genetic material composition of the Human Immunodeficiency Virus that induces AIDS?", options: ["Single-stranded RNA", "Double-stranded DNA", "Single-stranded DNA", "Double-stranded RNA"], correct: 0 },
{ subject: "biology", lang: "hi", question: "कन्हा राष्ट्रीय उद्यान (Kanha National Park) भारत के किस राज्य में स्थित है जो बाघों के संरक्षण के लिए प्रसिद्ध है?", options: ["मध्य प्रदेश", "राजस्थान", "उत्तराखंड", "असम"], correct: 0 },
{ subject: "biology", lang: "en", question: "Kanha National Park, globally recognized for its tiger conservation programs, is located in which Indian state?", options: ["Madhya Pradesh", "Rajasthan", "Uttarakhand", "Assam"], correct: 0 },

// ==========================================
// 18. बायोटेक्नोलॉजी (Biotechnology) - 5 प्रश्न
// ==========================================
{ subject: "biotech", lang: "hi", question: "डीएनए खंडों को विशिष्ट स्थानों से काटने वाले 'आणविक कैंची' कहे जाने वाले एंजाइमों को क्या कहा जाता है?", options: ["प्रतिबंधन एंडोन्यूक्लिएज (Restriction Endonuclease)", "डीएनए लाइगेज", "आरएनए पॉलीमरेज", "पेप्टिडेज"], correct: 0 },
{ subject: "biotech", lang: "en", question: "Enzymes capable of cleaving double-stranded DNA at specific nucleotide sequences, acting as 'molecular scissors', are:", options: ["Restriction Endonucleases", "DNA Ligases", "RNA Polymerases", "Peptidases"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "पॉलीमरेज चेन रिएक्शन (PCR) तकनीक में प्रयुक्त होने वाला 'Taq पॉलीमरेज' एंजाइम किस बैक्टीरिया से प्राप्त किया जाता है?", options: ["थर्मस एक्वाटिकस (Thermus aquaticus)", "इश्चेरिचिया कोलाई", "बैसिलस थुरिंगिएंसिस", "एग्रोबैक्टीरियम"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The thermostable Taq Polymerase enzyme utilized in Polymerase Chain Reaction configurations is sourced from:", options: ["Thermus aquaticus", "Escherichia coli", "Bacillus thuriengiensis", "Agrobacterium tumefaciens"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "जेल इलेक्ट्रोफोरेसिस तकनीक में डीएनए खंडों को देखने के लिए किस रंजक से उपचारित कर यूवी प्रकाश में देखा जाता है?", options: ["एथिडियम ब्रोमाइड (Ethidium Bromide)", "मिथाइलीन ब्लू", "क्रिस्टल वॉयलेट", "सैफ्रानिन"], correct: 0 },
{ subject: "biotech", lang: "en", question: "To visualize separated DNA bands in agarose gel electrophoresis under UV light, the gel is stained with:", options: ["Ethidium Bromide", "Methylene Blue", "Crystal Violet", "Safranin"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "पौधों में जीन स्थानांतरण के लिए किस बैक्टीरिया के टी-डीएनए (T-DNA) युक्त 'Ti प्लास्मिड' का उपयोग प्राकृतिक जेनेटिक इंजीनियर के रूप में होता है?", options: ["एग्रोबैक्टीरियम ट्यूमीफेशिएंस", "बैसिलस सब्टिलिस", "स्यूडोमोनास पुतिदा", "क्लॉस्ट्रिडियम"], correct: 0 },
{ subject: "biotech", lang: "en", question: "Which bacterium's Ti-plasmid is widely exploited as a natural vector for delivering genes into plant genomes?", options: ["Agrobacterium tumefaciens", "Bacillus subtilis", "Pseudomonas putida", "Clostridium"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "बीटी कॉटन (Bt Cotton) में पाया जाने वाला 'बीटी विष' (Bt Toxin) प्रो-टॉक्सिन के रूप में होता है, यह कीट की आहार नाल में जाकर किस कारण सक्रिय होता है?", options: ["आहार नाल के क्षारीय पीएच (Alkaline pH) के कारण", "अम्लीय माध्यम के कारण", "तापमान में वृद्धि के कारण", "एंजाइमों के अभाव के कारण"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The inactive Bt pro-toxin ingested by target insects turns into an active, lethal toxin inside the insect gut due to:", options: ["The alkaline pH conditions of the insect gut", "Highly acidic media environments", "Sudden thermal temperature increases", "An absolute lack of digestive enzymes"], correct: 0 },

// ==========================================
// 19. गणित (Mathematics) - 5 प्रश्न
// ==========================================
{ subject: "maths", lang: "hi", question: "यदि आव्यूह A एक सम्मित (Symmetrical Matrix) और विषम-सम्मित आव्यूह दोनों है, तो आव्यूह A आवश्यक रूप से किस प्रकार का आव्यूह होगा?", options: ["एक शून्य आव्यूह (Zero Matrix)", "एक इकाई आव्यूह", "एक विकर्ण आव्यूह", "एक वर्ग आव्यूह"], correct: 0 },
{ subject: "maths", lang: "en", question: "If a matrix A is simultaneously classified as both a Symmetric and a Skew-Symmetric matrix, then A must be a:", options: ["Zero Matrix", "Identity Matrix", "Diagonal Matrix", "Square Matrix only"], correct: 0 },
{ subject: "maths", lang: "hi", question: "फलन f(x) = sin x + cos x का अधिकतम मान (Maximum Value) वास्तविक संख्या प्रणाली में निम्नलिखित में से क्या होगा?", options: ["√2", "1", "2", "0"], correct: 0 },
{ subject: "maths", lang: "en", question: "What is the true maximum absolute value of the trigonometric function f(x) = sin x + cos x?", options: ["√2", "1", "2", "0"], correct: 0 },
{ subject: "maths", lang: "hi", question: "यदि दो सदिशों A और B का अदिश गुणनफल (Dot Product) शून्य है, तो उनके बीच बनने वाले कोण का मान क्या होगा?", options: ["90°", "0°", "180°", "45°"], correct: 0 },
{ subject: "maths", lang: "en", question: "If the dot product of two non-zero vectors A and B is exactly zero, the geometric angle between them is:", options: ["90°", "0°", "180°", "45°"], correct: 0 },
{ subject: "maths", lang: "hi", question: "त्रिविमीय ज्यामिति में किसी रेखा के दिक्-कोसाइन (Direction Cosines) l, m, n के वर्गों का योग किसके बराबर होता है?", options: ["1", "0", "-1", "2"], correct: 0 },
{ subject: "maths", lang: "en", question: "In three-dimensional coordinate systems, the sum of the squares of the direction cosines of any straight line is:", options: ["1", "0", "-1", "2"], correct: 0 },
{ subject: "maths", lang: "hi", question: "एक पासे को दो बार फेंकने पर दोनों बार सम संख्या (Even Number) प्राप्त होने की प्रायिकता (Probability) क्या होगी?", options: ["1 / 4", "1 / 2", "1 / 6", "1 / 8"], correct: 0 },
{ subject: "maths", lang: "en", question: "What is the net probability of obtaining an even number on both dice when a pair of fair dice is rolled once?", options: ["1 / 4", "1 / 2", "1 / 6", "1 / 8"], correct: 0 },

// ==========================================
// 20. एप्लाइड मैथ (Applied Mathematics) - 5 प्रश्न
// ==========================================
{ subject: "applied_math", lang: "hi", question: "समय श्रृंखला विश्लेषण (Time Series Analysis) में मौसमी बदलावों (Seasonal Variations) की अवधि सामान्यतः कितने समय के भीतर दोहराई जाती है?", options: ["एक वर्ष से कम", "पाँच वर्ष", "दस वर्ष", "एक दशक"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "In time series mathematical analysis, periodic seasonal variations repeat systematically within a timeline of:", options: ["Less than one year", "Exactly five years", "Exactly ten years", "A full decade period"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "अनुपात परीक्षण और वित्तीय मूल्यांकन के संदर्भ में 'त्वरित अनुपात' (Quick Ratio) का आदर्श मान क्या माना जाता है?", options: ["1 : 1", "2 : 1", "1 : 2", "3 : 1"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "In financial accounting metrics, what is considered the benchmark ideal value for the Quick Ratio?", options: ["1 : 1", "2 : 1", "1 : 2", "3 : 1"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "रैखिक प्रोग्रामन (LPP) के तहत अनुकूलतम समाधान खोजने के लिए सुसंगत क्षेत्र (Feasible Region) के कौन से बिंदु महत्वपूर्ण होते हैं?", options: ["कोणीय बिंदु या शीर्ष बिंदु (Corner Points)", "केंद्रीय बिंदु", "अक्षों के प्रतिच्छेद बिंदु", "बाहरी बिंदु"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "To isolate optimal values in Linear Programming Problems, which coordinates of the feasible region are tested?", options: ["Corner points or extreme vertices", "Central centroid points", "Axis intercept coordinates", "External boundaries points"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "किसी ऋण के पुनर्भुगतान के लिए बनाई जाने वाली समान मासिक किश्तों (EMI) की गणना में मुख्य रूप से कौन सी वित्तीय विधि अपनाई जाती है?", options: ["वार्षिकी का वर्तमान मूल्य (Present Value of Annuity)", "चक्रवृद्धि भविष्य मूल्य", "साधारण ब्याज पद्धति", "मूल्यह्रास सिंकिंग फंड"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "The financial formula used to determine Equated Monthly Installments for amortizing standard loans relies on:", options: ["Present Value of an Annuity", "Compound Future Value tracks", "Simple interest models", "Depreciation sinking fund formulas"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "सांख्यिकी में दो चरों के बीच संबंधों की दिशा और तीव्रता मापने वाले 'कार्ल पियर्सन गुणांक' का मान हमेशा किस सीमा के बीच रहता है?", options: ["-1 से +1 तक", "0 से 1 तक", "-0.5 से +0.5 तक", "-अनंत से +अनंत तक"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "Karl Pearson's coefficient of correlation evaluating linear relations between two data variables ranges strictly between:", options: ["-1 to +1 inclusive", "0 to 1 inclusive", "-0.5 to +0.5 inclusive", "-infinity to +infinity"], correct: 0 },

// ==========================================
// 21. कंप्यूटर विज्ञान (Computer Science) - 5 प्रश्न
// ==========================================
{ subject: "computer_science", lang: "hi", question: "डेटाबेस मैनेजमेंट सिस्टम (DBMS) में कौन सी 'कुंजी' (Key) किसी टेबल में रिकॉर्ड्स को विशिष्ट रूप से पहचानने के काम आती है?", options: ["प्राथमिक कुंजी (Primary Key)", "विदेशी कुंजी", "कैंडिडेट कुंजी", "अल्टरनेट कुंजी"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Which relational database key constraint uniquely identifies each individual record or row inside a database table?", options: ["Primary Key", "Foreign Key", "Candidate Key", "Alternate Key"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "डेटा स्ट्रक्चर में 'स्टैक' (Stack) किस कार्यप्रणाली या सिद्धांत पर काम करता है जिसमें डेटा एक ही छोर से डाला और निकाला जाता है?", options: ["लास्ट-इन फर्स्ट-आउट (LIFO)", "फर्स्ट-इन फर्स्ट-आउट (FIFO)", "रैंडम एक्सेस", "प्रायोरिटी आधारित"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "The linear Stack data structure operates fundamentally according to which operational sequencing methodology?", options: ["Last-In, First-Out", "First-In, First-Out", "Random Access Protocols", "Priority Based Allocation"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "पायथन प्रोग्रामिंग में किसी डिक्शनरी या लिस्ट में मौजूद कुल तत्वों की संख्या ज्ञात करने के लिए किस अंतर्निहित फंक्शन का उपयोग किया जाता है?", options: ["len()", "count()", "size()", "length()"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Which built-in function in Python returns the total count of key-value items contained inside a dictionary or list container?", options: ["len()", "count()", "size()", "length()"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "साइबर सुरक्षा में 'फिशिंग' (Phishing) हमले का मुख्य उद्देश्य हमलावर के लिए क्या हासिल करना होता है?", options: ["धोखे से उपयोगकर्ताओं के क्रेडेंशियल और संवेदनशील वित्तीय डेटा चुराना", "सिस्टम क्रैश करना", "इंटरनेट स्पीड धीमी करना", "कंप्यूटर हार्डवेयर खराब करना"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "What is the primary objective of a malicious Phishing attack within cybersecurity threat landscapes?", options: ["Tricking users to harvest login credentials and sensitive financial data", "Causing remote operating system crashes", "Slowing down target network bandwidth speeds", "Physically destroying local computer hardware components"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "नेटवर्किंग में प्रयुक्त होने वाले सुप्रसिद्ध प्रोटोकॉल 'HTTP' का पूर्ण रूप (Full Form) क्या होता है?", options: ["Hypertext Transfer Protocol", "Hyperlink Text Transmission Protocol", "High Transfer Tech Protocol", "Hypertext Tech Process"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "What is the correct standard expansion of the core networking communication protocol abbreviation HTTP?", options: ["Hypertext Transfer Protocol", "Hyperlink Text Transmission Protocol", "High Transfer Tech Protocol", "Hypertext Tech Process"], correct: 0 },
// ==========================================
// 1. इतिहास (History) - 5 नए प्रश्न
// ==========================================
{ subject: "history", lang: "hi", question: "सिंधु घाटी सभ्यता का वह प्रसिद्ध स्थल कौन सा है जहाँ से 'विशाल स्नानागार' (Great Bath) के साक्ष्य प्राप्त हुए हैं?", options: ["मोहनजोदड़ो", "हड़प्पा", "लोथल", "कालीबंगा"], correct: 0 },
{ subject: "history", lang: "en", question: "Which famous Indus Valley Civilization site has provided the archaeological evidence of the 'Great Bath'?", options: ["Mohenjo-daro", "Harappa", "Lothal", "Kalibangan"], correct: 0 },
{ subject: "history", lang: "hi", question: "सूफी संत ख्वाजा मुईनुद्दीन चिश्ती की पवित्र दरगाह राजस्थान के किस शहर में स्थित है?", options: ["अजमेर", "जयपुर", "जोधपुर", "उदयपुर"], correct: 0 },
{ subject: "history", lang: "en", question: "The holy dargah of Sufi saint Khwaja Moinuddin Chishti is located in which city of Rajasthan?", options: ["Ajmer", "Jaipur", "Jodhpur", "Udaipur"], correct: 0 },
{ subject: "history", lang: "hi", question: "मुग़ल काल में 'आईन-ए-अकबरी' और 'अकबरनामा' नामक ऐतिहासिक ग्रंथों की रचना किसने की थी?", options: ["अबुल फजल", "फैजी", "बदायूँनी", "गुलबदन बेगम"], correct: 0 },
{ subject: "history", lang: "en", question: "Who authored the famous historical texts 'Ain-i-Akbari' and 'Akbarnama' during the Mughal period?", options: ["Abul Fazl", "Faizi", "Badauni", "Gulbadan Begum"], correct: 0 },
{ subject: "history", lang: "hi", question: "वर्ष 1919 में किस प्रसिद्ध राष्ट्रीय नेता के आह्वान पर 'रॉलेट एक्ट' के विरोध में देशव्यापी हड़ताल की गई थी?", options: ["महात्मा गांधी", "बाल गंगाधर तिलक", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"], correct: 0 },
{ subject: "history", lang: "en", question: "In 1919, a nationwide strike against the 'Rowlatt Act' was organized under the leadership of which national leader?", options: ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Jawaharlal Nehru", "Subhas Chandra Bose"], correct: 0 },
{ subject: "history", lang: "hi", question: "जैन धर्म के 24वें और अंतिम तीर्थंकर भगवान महावीर का जन्म आधुनिक भारत के किस राज्य के निकट कुंडलपुर में हुआ था?", options: ["बिहार", "उत्तर प्रदेश", "मध्य प्रदेश", "गुजरात"], correct: 0 },
{ subject: "history", lang: "en", question: "Lord Mahavira, the 24th and final Tirthankara of Jainism, was born near Kundalpur in which modern Indian state?", options: ["Bihar", "Uttar Pradesh", "Madhya Pradesh", "Gujarat"], correct: 0 },

// ==========================================
// 2. राजनीति विज्ञान (Political Science) - 5 नए प्रश्न
// ==========================================
{ subject: "political", lang: "hi", question: "शीत युद्ध के दौरान सोवियत संघ (USSR) द्वारा सैन्य गठबंधन के रूप में किस संधि या पैक्ट का गठन किया गया था?", options: ["वारसा पैक्ट (Warsaw Pact)", "नाटो (NATO)", "सीटो (SEATO)", "सेंटो (CENTO)"], correct: 0 },
{ subject: "political", lang: "en", question: "Which military alliance was formed by the Soviet Union during the Cold War as a response to NATO?", options: ["Warsaw Pact", "NATO", "SEATO", "CENTO"], correct: 0 },
{ subject: "political", lang: "hi", question: "भारतीय संविधान का 42वां संशोधन किस वर्ष पारित किया गया था, जिसे 'लघु संविधान' (Mini Constitution) भी कहा जाता है?", options: ["1976", "1978", "1975", "1980"], correct: 0 },
{ subject: "political", lang: "en", question: "In which year was the 42nd Amendment of the Indian Constitution passed, often called the 'Mini Constitution'?", options: ["1976", "1978", "1975", "1980"], correct: 0 },
{ subject: "political", lang: "hi", question: "संयुक्त राष्ट्र संघ (UNO) के सचिवालय का सर्वोच्च प्रशासनिक अधिकारी कौन होता है?", options: ["महासचिव (Secretary-General)", "अध्यक्ष", "सुरक्षा परिषद प्रमुख", "महानिदेशक"], correct: 0 },
{ subject: "political", lang: "en", question: "Who functions as the chief administrative officer of the Secretariat of the United Nations Organization?", options: ["Secretary-General", "President", "Security Council Head", "Director-General"], correct: 0 },
{ subject: "political", lang: "hi", question: "स्वतंत्र भारत के प्रथम चुनाव आयुक्त (First Chief Election Commissioner) कौन थे जिन्होंने पहले आम चुनाव का संचालन किया?", options: ["सुकुमार सेन", "टी. एन. शेषन", "के. वी. के. सुंदरम", "सुनील अरोड़ा"], correct: 0 },
{ subject: "political", lang: "en", question: "Who was the first Chief Election Commissioner of independent India, who managed the first general elections?", options: ["Sukumar Sen", "T. N. Seshan", "K. V. K. Sundaram", "Sunil Arora"], correct: 0 },
{ subject: "political", lang: "hi", question: "भारत के किस राज्य में सर्वप्रथम भाषाई आधार पर (Linguistic Basis) वर्ष 1953 में गठन की घोषणा की गई थी?", options: ["आंध्र प्रदेश", "तमिलनाडु", "केरल", "कर्नाटक"], correct: 0 },
{ subject: "political", lang: "en", question: "Which Indian state was the first to be created on a purely linguistic basis in the year 1953?", options: ["Andhra Pradesh", "Tamil Nadu", "Kerala", "Karnataka"], correct: 0 },

// ==========================================
// 3. भूगोल (Geography) - 5 नए प्रश्न
// ==========================================
{ subject: "geography", lang: "hi", question: "विश्व में न्यूनतम जनसंख्या घनत्व वाला महाद्वीप निम्नलिखित में से कौन सा माना जाता है?", options: ["ओशिनिया / ऑस्ट्रेलिया", "अफ्रीका", "दक्षिण अमेरिका", "एशिया"], correct: 0 },
{ subject: "geography", lang: "en", question: "Which continent is considered to have the lowest average population density in the world?", options: ["Oceania / Australia", "Africa", "South America", "Asia"], correct: 0 },
{ subject: "geography", lang: "hi", question: "कनाडा के अटलांटिक तट से प्रशांत तट को जोड़ने वाले विश्व प्रसिद्ध रेलमार्ग का नाम क्या है?", options: ["पार-कनाडाई रेलमार्ग (Trans-Canadian Railway)", "ट्रांस-साइबेरियन रेलमार्ग", "ओरिएंट एक्सप्रेस", "यूनियन पैसिफिक"], correct: 0 },
{ subject: "geography", lang: "en", question: "What is the name of the famous transcontinental railway line that connects Canada's Atlantic and Pacific coasts?", options: ["Trans-Canadian Railway", "Trans-Siberian Railway", "Orient Express", "Union Pacific"], correct: 0 },
{ subject: "geography", lang: "hi", question: "मानव विकास सूचकांक (HDI) की अवधारणा का प्रतिपादन किस सुप्रसिद्ध अर्थशास्त्री द्वारा किया गया था?", options: ["महबूब-उल-हक", "अमर्त्य सेन", "एडम स्मिथ", "डेविड रिकार्डो"], correct: 0 },
{ subject: "geography", lang: "en", question: "The concept of Human Development Index was pioneered and formulated by which renowned economist?", options: ["Mahbub-ul-Haq", "Amartya Sen", "Adam Smith", "David Ricardo"], correct: 0 },
{ subject: "geography", lang: "hi", question: "भारत के किस राज्य में सलेम (Salem) लौह-इस्पात उद्योग केंद्र ऐतिहासिक रूप से संचालित है?", options: ["तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश", "ओडिशा"], correct: 0 },
{ subject: "geography", lang: "en", question: "The Salem Iron and Steel Plant industrial hub is located in which Indian state?", options: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Odisha"], correct: 0 },
{ subject: "geography", lang: "hi", question: "पनामा नहर (Panama Canal) विश्व के किन दो प्रमुख महासागरों को आपस में जोड़ती है?", options: ["प्रशांत महासागर और अटलांटिक महासागर", "हिंद महासागर और प्रशांत महासागर", "अटलांटिक महासागर और हिंद महासागर", "आर्कटिक महासागर और प्रशांत महासागर"], correct: 0 },
{ subject: "geography", lang: "en", question: "The Panama Canal serves as an artificial waterway connecting which two major world oceans?", options: ["Pacific Ocean and Atlantic Ocean", "Indian Ocean and Pacific Ocean", "Atlantic Ocean and Indian Ocean", "Arctic Ocean and Pacific Ocean"], correct: 0 },

// ==========================================
// 4. अर्थशास्त्र (Economics) - 5 नए प्रश्न
// ==========================================
{ subject: "economics", lang: "hi", question: "विलासिता की वस्तुओं (Luxury Goods) के लिए मांग की कीमत लोच (Price Elasticity of Demand) कैसी होती है?", options: ["इकाई से अधिक या लोचदार", "शून्य", "पूर्णतः बेलोचदार", "इकाई से कम"], correct: 0 },
{ subject: "economics", lang: "en", question: "What type of Price Elasticity of Demand is typically observed for luxury commodities?", options: ["Greater than unity / Elastic", "Zero", "Perfectly Inelastic", "Less than unity"], correct: 0 },
{ subject: "economics", lang: "hi", question: "बाजार की वह स्थिति क्या कहलाती है जिसमें किसी वस्तु का केवल एक ही उत्पादक या विक्रेता होता है?", options: ["एकाधिकार (Monopoly)", "अल्पअधिकार", "पूर्ण प्रतियोगिता", "द्वियाधिकार"], correct: 0 },
{ subject: "economics", lang: "en", question: "A market structure characterized by a single producer or seller of a product with no close substitutes is called a:", options: ["Monopoly", "Oligopoly", "Perfect Competition", "Duopoly"], correct: 0 },
{ subject: "economics", lang: "hi", question: "निम्नलिखित में से कौन सा कर (Tax) भारत सरकार के प्रत्यक्ष कर (Direct Tax) का एक प्रमुख उदाहरण है?", options: ["आयकर (Income Tax)", "वस्तु एवं सेवा कर (GST)", "केंद्रीय उत्पाद शुल्क", "सीमा शुल्क"], correct: 0 },
{ subject: "economics", lang: "en", question: "Which of the following taxes levied by the government is a prominent example of a Direct Tax?", options: ["Income Tax", "Goods and Services Tax (GST)", "Central Excise Duty", "Customs Duty"], correct: 0 },
{ subject: "economics", lang: "hi", question: "व्यावसायिक बैंकों द्वारा जनता की जमा राशियों के आधार पर ऋण देने की प्रक्रिया को क्या कहा जाता है?", options: ["साख निर्माण (Credit Creation)", "विमुद्रीकरण", "मुद्रास्फीति नियंत्रण", "नकद आरक्षित अनुपात"], correct: 0 },
{ subject: "economics", lang: "en", question: "The financial process by which commercial banks expand loans based on public deposits is known as:", options: ["Credit Creation", "Demonetization", "Inflation Control", "Cash Reserve Ratio function"], correct: 0 },
{ subject: "economics", lang: "hi", question: "समष्टि अर्थशास्त्र के अंतर्गत 'सकल घरेलू उत्पाद' (GDP) की गणना करते समय किस मूल्य को शामिल किया जाता है?", options: ["केवल अंतिम वस्तुओं और सेवाओं का मूल्य", "मध्यवर्ती वस्तुओं का मूल्य", "कच्चे माल का मूल्य", "पुनर्विक्रय वस्तुओं का मूल्य"], correct: 0 },
{ subject: "economics", lang: "en", question: "While calculating the Gross Domestic Product in macroeconomics, which values are exclusively accounted for?", options: ["The monetary value of final goods and services only", "Value of intermediate goods", "Value of raw materials", "Value of resold commodities"], correct: 0 },

// ==========================================
// 5. समाजशास्त्र (Sociology) - 5 नए प्रश्न
// ==========================================
{ subject: "sociology", lang: "hi", question: "भारतीय समाज में 'संस्कृतिकरण' (Sanskritisation) की प्रसिद्ध अवधारणा किस समाजशास्त्री द्वारा दी गई थी?", options: ["एम. एन. श्रीनिवास (M.N. Srinivas)", "जी. एस. घुरिये", "ए. आर. देसाई", "योगेंद्र सिंह"], correct: 0 },
{ subject: "sociology", lang: "en", question: "The socio-cultural concept of 'Sanskritisation' in Indian sociology was introduced by:", options: ["M.N. Srinivas", "G.S. Ghurye", "A.R. Desai", "Yogendra Singh"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "वर्ष 2011 की भारतीय जनगणना के अनुसार, प्रति 1000 पुरुषों पर भारत का औसत लिंगानुपात (Sex Ratio) कितना था?", options: ["943", "933", "940", "950"], correct: 0 },
{ subject: "sociology", lang: "en", question: "According to the 2011 Census of India, what was the average sex ratio across the nation?", options: ["943 females per 1000 males", "933 females per 1000 males", "940 females per 1000 males", "950 females per 1000 males"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "भारतीय संविधान का कौन सा अनुच्छेद जाति, लिंग, धर्म या जन्मस्थान के आधार पर भेदभाव को पूरी तरह प्रतिबंधित करता है?", options: ["अनुच्छेद 15", "अनुच्छेद 17", "अनुच्छेद 19", "अनुच्छेद 21"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Which article of the Indian Constitution strictly prohibits discrimination on grounds of religion, race, caste, sex, or place of birth?", options: ["Article 15", "Article 17", "Article 19", "Article 21"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "भारत में किस प्रसिद्ध आयोग की सिफारिशों के आधार पर अन्य पिछड़ा वर्ग (OBC) को सरकारी नौकरियों में 27% आरक्षण दिया गया?", options: ["मंडल आयोग (Mandal Commission)", "बलवंत राय मेहता आयोग", "कोठारी आयोग", "सरकारी आयोग"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Based on the recommendations of which commission was 27% reservation granted to Other Backward Classes in central government jobs?", options: ["Mandal Commission", "Balwant Rai Mehta Commission", "Kothari Commission", "Sarkaria Commission"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "औद्योगिक समाज में संयुक्त परिवारों का विघटन होकर एकल परिवारों (Nuclear Families) में बदलने का मुख्य कारण क्या है?", options: ["शहरीकरण और रोजगार के अवसरों की खोज", "पारंपरिक मूल्य बढ़ना", "कृषि भूमि का बढ़ना", "धार्मिक अनुष्ठान"], correct: 0 },
{ subject: "sociology", lang: "en", question: "What is the primary driving factor behind the breakdown of joint family systems into nuclear structures in industrial societies?", options: ["Urbanization and the pursuit of employment opportunities", "Rise in traditional values", "Expansion of agricultural land", "Religious rituals"], correct: 0 },

// ==========================================
// 6. मनोविज्ञान (Psychology) - 5 नए प्रश्न
// ==========================================
{ subject: "psychology", lang: "hi", question: "बुद्धि का 'द्वि-कारक सिद्धांत' (Two-Factor Theory) जिसमें G-फैक्टर और S-फैक्टर शामिल हैं, किसने दिया था?", options: ["चार्ल्स स्पीयरमैन", "लुईस थर्स्टन", "हावर्ड गार्डनर", "रॉबर्ट स्टर्नबर्ग"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Who formulated the Two-Factor Theory of intelligence comprising General (g) and Specific (s) factors?", options: ["Charles Spearman", "Louis Thurstone", "Howard Gardner", "Robert Sternberg"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "रचनात्मकता या सृजनात्मकता (Creativity) का मापन करने के लिए मुख्य रूप से किस प्रकार के चिंतन की आवश्यकता होती है?", options: ["अपसारी चिंतन (Divergent Thinking)", "अभिसारी चिंतन", "तार्किक चिंतन", "अमूर्त चिंतन"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Which type of thinking pattern is fundamentally associated with the measurement of human creativity?", options: ["Divergent Thinking", "Convergent Thinking", "Logical Thinking", "Abstract Thinking"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "मनोवैज्ञानिक अल्फ्रेड एडलर ने व्यक्तित्व विकास के तहत किस महत्वपूर्ण भावना या ग्रंथि की व्याख्या की है?", options: ["हीनता ग्रंथि (Inferiority Complex)", "ओडिपस ग्रंथि", "इलेक्ट्रा ग्रंथि", "आत्म-वास्तविकीकरण"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Which pioneering psychological construct did Alfred Adler emphasize regarding personality development?", options: ["Inferiority Complex", "Oedipus Complex", "Electra Complex", "Self-Actualization"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "तनाव के प्रति शरीर की प्रतिक्रिया के तीन चरणों (सचेत, प्रतिरोध, परिश्रांति) को 'GAS मॉडल' के तहत किसने समझाया?", options: ["हंस सेली (Hans Selye)", "रिचर्ड लेज़ारस", "सिगमंड फ्रायड", "कार्ल रोजर्स"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Who discovered the General Adaptation Syndrome (GAS) model detailing the bodily responses to chronic stress?", options: ["Hans Selye", "Richard Lazarus", "Sigmund Freud", "Carl Rogers"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "मनोविश्लेषण चिकित्सा (Psychoanalytic Therapy) का आविष्कार किस मनोवैज्ञानिक द्वारा किया गया था?", options: ["सिगमंड फ्रायड (Sigmund Freud)", "इवान पावलोव", "बी. एफ. स्किनर", "अल्बर्ट बांडुरा"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The classic clinical methodology of Psychoanalytic Therapy was invented by which psychologist?", options: ["Sigmund Freud", "Ivan Pavlov", "B.F. Skinner", "Albert Bandura"], correct: 0 },

// ==========================================
// 7. गृह विज्ञान (Home Science) - 5 नए प्रश्न
// ==========================================
{ subject: "home_science", lang: "hi", question: "कपड़े के तंतुओं की पहचान के लिए किया जाने वाला 'दहन परीक्षण' (Burning Test) में सूती कपड़ा जलने पर कैसी गंध देता है?", options: ["जले हुए कागज जैसी गंध", "जले हुए बालों जैसी गंध", "प्लास्टिक पिघलने जैसी गंध", "सिरके जैसी गंध"], correct: 0 },
{ subject: "home_science", lang: "en", question: "During the technical burning test for fiber identification, pure cotton textiles emit an odor similar to:", options: ["Burning paper", "Burning hair", "Melting plastic", "Vinegar formula"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "गर्भवती महिला के आहार में किस तत्व की प्रचुरता आवश्यक है ताकि शिशु में 'न्यूरल ट्यूब डिफेक्ट्स' को रोका जा सके?", options: ["फॉलिक एसिड (Folic Acid)", "कैल्शियम", "विटामिन सी", "कार्बोहाइड्रेट"], correct: 0 },
{ subject: "home_science", lang: "en", question: "The dietary abundance of which micro-nutrient is critical during early pregnancy to prevent neural tube defects?", options: ["Folic Acid", "Calcium", "Vitamin C", "Carbohydrate"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "रेफ्रिजरेटर के अंदर बैक्टीरिया की वृद्धि को धीमा करने के लिए आदर्श प्रशीतन तापमान (Refrigeration Temperature) कितना होना चाहिए?", options: ["1°C से 4°C", "10°C से 15°C", "-18°C", "20°C"], correct: 0 },
{ subject: "home_science", lang: "en", question: "What is the recommended storage temperature range inside a standard refrigerator to slow down bacterial proliferation?", options: ["1°C to 4°C", "10°C to 15°C", "-18°C", "20°C"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "वस्त्रों पर लगे चाय या कॉफी के दाग को हटाने के लिए निम्नलिखित में से किस घरेलू विरंजक (Bleach) का उपयोग सुरक्षित माना जाता है?", options: ["सुहागा (Borax)", "सांद्र सल्फ्यूरिक अम्ल", "मिट्टी का तेल", "नमक का तेजाब"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Which household mild bleaching agent is safe to eliminate stubborn tea or coffee stains from delicate fabrics?", options: ["Borax solution", "Concentrated sulfuric acid", "Kerosene oil", "Hydrochloric acid"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "मानव शरीर के विकास, तंतुओं की मरम्मत और एंजाइमों के निर्माण के लिए कौन सा पोषक तत्व प्राथमिक रूप से उत्तरदायी है?", options: ["प्रोटीन", "वसा", "विटामिन डी", "आयोडीन"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Which vital macronutrient is fundamentally responsible for body tissue repair, growth, and structural enzyme formulation?", options: ["Protein", "Fat", "Vitamin D", "Iodine"], correct: 0 },

// ==========================================
// 8. दर्शनशास्त्र (Philosophy) - 5 नए प्रश्न
// ==========================================
{ subject: "philosophy", lang: "hi", question: "जैन दर्शन के अनुसार ज्ञान की सापेक्षता का सिद्धांत, जिसके तहत किसी वस्तु के कई पहलू हो सकते हैं, क्या कहलाता है?", options: ["स्याद्वाद या अनेकांतवाद", "क्षणिकवाद", "शून्यवाद", "अपो्यवाद"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "The doctrine of relativity of knowledge and multiplicity of viewpoints in Jain philosophy is explicitly called:", options: ["Syadvada / Anekantavada", "Kshanikavada", "Shunyavada", "Apohavada"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "श्रीमद्भगवद्गीता के अनुसार बिना किसी फल की इच्छा के अपना कर्तव्य करना किस मार्ग की मुख्य विशेषता है?", options: ["निष्काम कर्मयोग", "सकाम कर्मयोग", "ज्ञानमार्ग", "हठयोग"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "According to the Bhagavad Gita, performing one's duties diligently without any attachment to rewards is defined as:", options: ["Nishkama Karma Yoga", "Sakama Karma Yoga", "Jnana Marga", "Hatha Yoga"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "सांख्य दर्शन (Samkhya Philosophy) के प्रवर्तक आचार्य कौन हैं जिन्होंने प्रकृति और पुरुष के द्वैत का प्रतिपादन किया?", options: ["महर्षि कपिल", "महर्षि पतंजलि", "महर्षि जैमिनि", "महर्षि कणाद"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "Who is the historic founding philosopher of the Samkhya school that postulates the dualism of Prakriti and Purusha?", options: ["Maharishi Kapila", "Maharishi Patanjali", "Maharishi Jaimini", "Maharishi Kanada"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "पाश्चात्य दर्शन के जनक कहे जाने वाले किस ग्रीक दार्शनिक ने 'संदेह पद्धति' (Method of Doubt) को सत्य की खोज का माध्यम बनाया?", options: ["रेने डेकार्ट (Rene Descartes)", "अरस्तू", "इमैनुएल कांट", "जॉन लॉक"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "Which famous modern Western philosopher integrated the fundamental 'Method of Doubt' as a pathway to absolute certainty?", options: ["Rene Descartes", "Aristotle", "Immanuel Kant", "John Locke"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "महात्मा गांधी के दर्शन के अनुसार, 'सत्याग्रह' का वास्तविक और आध्यात्मिक मूल आधार निम्नलिखित में से क्या है?", options: ["सत्य और अहिंसा (Truth and Non-violence)", "राजनैतिक सत्ता", "निष्क्रिय प्रतिरोध", "आर्थिक बहिष्कार"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "According to Mahatma Gandhi's core philosophy, what is the ultimate spiritual and foundational pillar of Satyagraha?", options: ["Truth and Non-violence", "Political Empowerment", "Passive Resistance", "Economic Boycott"], correct: 0 },

// ==========================================
// 9. कानूनी अध्ययन (Legal Studies) - 5 नए प्रश्न
// ==========================================
{ subject: "legal_studies", lang: "hi", question: "भारतीय दंड संहिता (IPC) या वर्तमान न्याय संहिता के तहत किसी व्यक्ति द्वारा किया गया 'अपकृत्य' (Tort) किस श्रेणी का कानून है?", options: ["दीवानी कानून या नागरिक अपकार (Civil Law)", "आपराधिक कानून", "संवैधानिक कानून", "अंतरराष्ट्रीय कानून"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Under legal definitions, a 'Tort' or civil wrong falls primarily under which branch of jurisprudence?", options: ["Civil Law", "Criminal Law", "Constitutional Law", "International Law"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "भारतीय अनुबंध अधिनियम (Indian Contract Act) के अनुसार, एक वैध अनुबंध के लिए 'प्रतिफल' (Consideration) का होना कैसा है?", options: ["अनिवार्य कानूनी आवश्यकता है", "वैकल्पिक है", "गैर-कानूनी है", "इसकी कोई आवश्यकता नहीं"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "According to the Indian Contract Act, the presence of a valid 'Consideration' between executing parties is:", options: ["An absolute mandatory legal requirement", "Completely optional", "Deemed illegal", "Not required at all"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "संसद के दोनों सदनों द्वारा पारित किसी विधेयक को कानून बनने के लिए किसकी अंतिम स्वीकृति मिलना आवश्यक है?", options: ["भारत के राष्ट्रपति", "प्रधानमंत्री", "सुप्रीम कोर्ट के मुख्य न्यायाधीश", "लोकसभा अध्यक्ष"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Before a legislative bill passed by both houses of Parliament can officially become statutory law, whose final assent is mandatory?", options: ["The President of India", "The Prime Minister", "The Chief Justice of India", "The Speaker of the Lok Sabha"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "संविधान के किस अनुच्छेद के तहत उच्च न्यायालय (High Court) को मौलिक अधिकारों की रक्षा के लिए रिट (Writs) जारी करने की शक्ति प्राप्त है?", options: ["अनुच्छेद 226", "अनुच्छेद 32", "अनुच्छेद 136", "अनुच्छेद 143"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Under which specific article of the Indian Constitution is the High Court empowered to issue extraordinary Writs to enforce fundamental rights?", options: ["Article 226", "Article 32", "Article 136", "Article 143"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "अंतरराष्ट्रीय न्यायालय (International Court of Justice - ICJ) का आधिकारिक मुख्यालय विश्व के किस शहर में स्थित है?", options: ["द हेग (नीदरलैंड)", "न्यूयोर्क (यूएसए)", "जेनेवा (स्विट्जरलैंड)", "पेरिस (फ्रांस)"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "The official headquarters of the International Court of Justice (ICJ) is permanently situated in which world city?", options: ["The Hague, Netherlands", "New York, USA", "Geneva, Switzerland", "Paris, France"], correct: 0 },

// ==========================================
// 10. हिंदी साहित्य (Hindi Literature) - 5 नए प्रश्न
// ==========================================
{ subject: "hindi_lit", lang: "hi", question: "कबीरदास की साखियों, सबद और रमैनी का संग्रह किस सुप्रसिद्ध प्रामाणिक ग्रंथ में संकलित है?", options: ["बीजक", "कबीर ग्रंथावली", "सूरसागर", "पद्मावत"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "The compiled poetic compositions of Sant Kabirdas (Sakhi, Sabad, Ramaini) are preserved in which canonical text?", options: ["Bijak", "Kabir Granthavali", "Sursagar", "Padmavat"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "हिंदी साहित्य के छायावाद के चार प्रमुख स्तंभों में से 'प्रकृति के सुकुमार कवि' के नाम से किसे जाना जाता है?", options: ["सुमित्रानंदन पंत", "जयशंकर प्रसाद", "सूर्यकांत त्रिपाठी निराला", "महादेवी वर्मा"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Among the four foundational pillars of Chhayavaad, who is famously hailed as the 'Poet of Nature'?", options: ["Sumitranandan Pant", "Jaishankar Prasad", "Suryakant Tripathi Nirala", "Mahadevi Verma"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "जयशंकर प्रसाद द्वारा रचित सुप्रसिद्ध महाकाव्य कौन सा है जिसे छायावादी काव्य का सर्वोत्कृष्ट रत्न माना जाता है?", options: ["कामायनी (Kamayani)", "आँसू", "लहर", "झरना"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Which monumental epic written by Jaishankar Prasad is celebrated as the absolute masterpiece of Chhayavadi romanticism?", options: ["Kamayani", "Aansu", "Lehar", "Jharna"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "सच्चिदानंद हीरानंद वात्स्यायन 'अज्ञेय' ने किस प्रसिद्ध काव्य संकलन के माध्यम से 'प्रयोगवाद' (Pragativad/Prayogvad) का सूत्रपात किया?", options: ["तार सप्तक (1943)", "दूसरा सप्तक", "इत्यलम", "हरी घास पर क्षण भर"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Agyeya initiated the modernist 'Prayogvad' movement in Hindi poetry through the publication of which compilation?", options: ["Taar Saptak (1943)", "Doosra Saptak", "Ityalam", "Hari Ghas Par Kshan Bhar"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "फणीश्वरनाथ रेणु द्वारा रचित 'मैला आंचल' हिंदी साहित्य में किस प्रकार के उपन्यास का सर्वश्रेष्ठ उदाहरण माना जाता है?", options: ["आंचलिक उपन्यास (Regional Novel)", "ऐतिहासिक उपन्यास", "मनोवैज्ञानिक उपन्यास", "जासूसी उपन्यास"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "The novel 'Maila Anchal' written by Phanishwar Nath Renu is heralded as the finest example of which novel genre?", options: ["Regional Novel / Anchalik Upanyas", "Historical Novel", "Psychological Novel", "Detective Novel"], correct: 0 },

// ==========================================
// 11. अंग्रेजी साहित्य (English Literature) - 5 नए प्रश्न
// ==========================================
{ subject: "english_lit", lang: "hi", question: "विलियम शेक्सपियर द्वारा रचित प्रसिद्ध त्रासदी नाटक 'हैमलेट' (Hamlet) का मुख्य विषय वस्तु क्या है?", options: ["प्रतिशोध (Revenge) और मानसिक द्वंद्व", "महत्वाकांक्षा और सत्ता का लालच", "जातीय ईर्ष्या", "रोमांटिक प्रेम"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "What is the central psychological theme governing William Shakespeare's master tragedy play 'Hamlet'?", options: ["Revenge and internal procrastination", "Blind ambition and political greed", "Racial jealousy", "Romantic tragic love"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "अंग्रेजी कविता के इतिहास में 'फादर ऑफ इंग्लिश पोएट्री' (Father of English Poetry) की उपाधि किसे दी गई है?", options: ["जॉफ्री चौसर (Geoffrey Chaucer)", "जॉन मिल्टन", "विलियम वर्डसवर्थ", "अलेक्जेंडर पोप"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Who is universally venerated with the title of the 'Father of English Poetry' within literary history?", options: ["Geoffrey Chaucer", "John Milton", "William Wordsworth", "Alexander Pope"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "महान कवि जॉन मिल्टन द्वारा रचित महाकाव्य 'पैराडाइज लॉस्ट' (Paradise Lost) मुख्य रूप से किस भाषा शैली में लिखा गया है?", options: ["ब्लैंक वर्स (Blank Verse)", "राइम रॉयल", "फ्री वर्स", "सोनिट फॉर्म"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "John Milton's monumental religious epic poem 'Paradise Lost' was written utilizing which metric structural style?", options: ["Blank Verse", "Rhyme Royal", "Free Verse", "Sonnet Form"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "विक्टोरियन काल के किस प्रसिद्ध उपन्यासकार ने 'ओलिवर ट्विस्ट' (Oliver Twist) और 'ग्रेट एक्सपेक्टेशंस' जैसी रचनाएँ लिखीं?", options: ["चार्ल्स डिकेंस (Charles Dickens)", "थॉमस हार्डी", "जॉर्ज एलियट", "विलियम थैकरी"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Which legendary Victorian era novelist authored standard socio-economic critiques like 'Oliver Twist' and 'Great Expectations'?", options: ["Charles Dickens", "Thomas Hardy", "George Eliot", "William Thackeray"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "आर. के. नारायण द्वारा रचित उपन्यास 'द गाइड' (The Guide) के काल्पनिक शहर का नाम क्या है जहाँ उनकी अधिकांश कहानियाँ आधारित हैं?", options: ["मालगुडी (Malgudi)", "रामनगर", "चंदनपुर", "आनंदपुर"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "What is the name of the fictional South Indian town created by R.K. Narayan as the setting for his celebrated novel 'The Guide'?", options: ["Malgudi", "Ramnagar", "Chandanpur", "Anandpur"], correct: 0 },

// ==========================================
// 12. लेखाकर्म (Accountancy) - 5 नए प्रश्न
// ==========================================
{ subject: "accountancy", lang: "hi", question: "साझेदारी फर्म के पुनर्गठन या नए साझेदार के प्रवेश पर पुरानी ख्याति (Goodwill) को पुराने साझेदारों के बीच किस अनुपात में बांटा जाता है?", options: ["पुराने लाभ-हानि अनुपात में (Old Profit Sharing Ratio)", "त्याग अनुपात में", "नये अनुपात में", "पूंजी के अनुपात में"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "On the admission of a new partner, the existing unamortized Goodwill appearing in the Balance Sheet is written off in which ratio?", options: ["Old Profit Sharing Ratio", "Sacrificing Ratio", "New Profit Sharing Ratio", "Capital Ratio"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "एक सीमित कम्पनी द्वारा लाभांश (Dividend) की घोषणा हमेशा शेयर की किस कीमत पर की जाती है?", options: ["अंकित मूल्य या चुकता मूल्य पर (Face Value / Paid-up value)", "बाजार मूल्य पर", "निर्गमन मूल्य पर", "पुस्तक मूल्य पर"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Corporate dividends declared by a limited public enterprise are always calculated as a percentage of its shares':", options: ["Face Value / Paid-up value", "Market Value", "Issue Price", "Book Value"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "वित्तीय विवरणों के विश्लेषण के लिए उपयोग किए जाने वाले 'चालू अनुपात' (Current Ratio) का सर्वमान्य आदर्श पैमाना क्या माना जाता है?", options: ["2 : 1", "1 : 1", "3 : 1", "1 : 2"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "What is the globally recognized benchmark or ideal configuration for the Current Ratio analytical metric?", options: ["2 : 1", "1 : 1", "3 : 1", "1 : 2"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "फर्म के विघटन या समापन पर संपत्तियों की बिक्री से प्राप्त राशि और दायित्वों के निपटारे के लिए कौन सा खाता तैयार किया जाता है?", options: ["वसूली खाता (Realisation Account)", "पुनर्मूल्यांकन खाता", "लाभ-हानि समायोजन खाता", "साझेदारों का चालू खाता"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Upon the formal dissolution of a partnership firm, which special ledger account is opened to process asset liquidations and liability pay-offs?", options: ["Realisation Account", "Revaluation Account", "Profit and Loss Adjustment Account", "Partners' Current Account"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "कम्पनी अधिनियम 2013 की तालिका 'F' के अनुसार, अग्रिम याचनाओं (Calls-in-Advance) पर अधिकतम कितने प्रतिशत वार्षिक ब्याज दिया जा सकता है?", options: ["12% वार्षिक", "10% वार्षिक", "6% वार्षिक", "5% वार्षिक"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "According to Table F of the Indian Companies Act 2013, the maximum rate of interest permitted on Calls-in-Advance is:", options: ["12% per annum", "10% per annum", "6% per annum", "5% per annum"], correct: 0 },

// ==========================================
// 13. व्यावसायिक अध्ययन (Business Studies) - 5 नए प्रश्न
// ==========================================
{ subject: "business", lang: "hi", question: "प्रबंध का वह कौन सा प्राथमिक कार्य है जिसके अंतर्गत भविष्य के लक्ष्यों और उन्हें प्राप्त करने के तरीकों का निर्धारण पहले से किया जाता है?", options: ["नियोजन (Planning)", "संगठन", "नियुक्तीकरण", "नियंत्रण"], correct: 0 },
{ subject: "business", lang: "en", question: "Which primary managerial function involves setting organizational targets beforehand and charting appropriate courses of action?", options: ["Planning", "Organizing", "Staffing", "Controlling"], correct: 0 },
{ subject: "business", lang: "hi", question: "संगठन संरचना में उच्चाधिकारियों से अधीनस्थों की ओर अधिकारों के अंतरण की प्रक्रिया को क्या कहा जाता है?", options: ["अधिकार अंतरोजन या भारार्पण (Delegation of Authority)", "विकेंद्रीकरण", "विभागीकरण", "केंद्रीयकरण"], correct: 0 },
{ subject: "business", lang: "en", question: "The downward transfer of formal operational authority from a superior executive to an immediate subordinate is known as:", options: ["Delegation of Authority", "Decentralization", "Departmentalization", "Centralization"], correct: 0 },
{ subject: "business", lang: "hi", question: "मौद्रिक बाजार में अल्पकालिक फंड्स के लेनदेन के लिए प्रयुक्त होने वाला 'ट्रेजरी बिल' (Treasury Bill) भारत में किसके द्वारा जारी किया जाता है?", options: ["भारतीय रिजर्व बैंक (RBI)", "भारतीय स्टेट बैंक", "सेबी (SEBI)", "वित्त मंत्रालय"], correct: 0 },
{ subject: "business", lang: "en", question: "Treasury Bills, utilized as short-term financial instruments in money markets, are issued in India exclusively by:", options: ["Reserve Bank of India", "State Bank of India", "SEBI", "Ministry of Finance directly"], correct: 0 },
{ subject: "business", lang: "hi", question: "प्रबंध के किस नियंत्रण सिद्धांत के अनुसार केवल उन्हीं महत्वपूर्ण विचलनों (Deviations) पर ध्यान देना चाहिए जो व्यवसाय को गंभीर नुकसान पहुंचा सकते हैं?", options: ["अपवाद द्वारा प्रबंध (Management by Exception)", "उद्देश्यों द्वारा प्रबंध", "प्रणाली नियंत्रण", "बजटीय नियंत्रण"], correct: 0 },
{ subject: "business", lang: "en", question: "Which managerial control philosophy implies that only significant deviations from standards require executive intervention?", options: ["Management by Exception", "Management by Objectives", "Systems Control", "Budgetary Control"], correct: 0 },
{ subject: "business", lang: "hi", question: "शेयर बाजारों को विनियमित करने और निवेशकों के हितों की रक्षा करने वाली भारत की सर्वोच्च वैधानिक संस्था कौन सी है?", options: ["भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI)", "आरबीआई", "नेशनल स्टॉक एक्सचेंज", "नीति आयोग"], correct: 0 },
{ subject: "business", lang: "en", question: "Which supreme apex statutory body regulates and monitors Indian securities market operations to safeguard investor interests?", options: ["Securities and Exchange Board of India (SEBI)", "Reserve Bank of India", "National Stock Exchange", "NITI Aayog"], correct: 0 },

// ==========================================
// 14. उद्यमशीलता (Entrepreneurship) - 5 नए प्रश्न
// ==========================================
{ subject: "entrepreneurship", lang: "hi", question: "किसी व्यावसायिक प्रोजेक्ट की तकनीकी और आर्थिक व्यावहारिकताओं की जांच करने के लिए किया गया प्रारंभिक अध्ययन क्या कहलाता है?", options: ["व्यवहार्यता अध्ययन (Feasibility Study)", "बाजार सर्वेक्षण", "वित्तीय लेखापरीक्षा", "उत्पाद डिजाइन"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "An initial investigative analysis conducted to verify the economic and technological viability of a proposed project is a:", options: ["Feasibility Study", "Market Survey", "Financial Audit", "Product Design analysis"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "वह बिंदु या स्तर क्या कहलाता है जहाँ व्यवसाय को न तो कोई लाभ होता है और न ही कोई हानि (Total Revenue = Total Cost)?", options: ["सम-विच्छेद बिंदु (Break-Even Point)", "लाभ का स्तर", "शटडाउन पॉइंट", "इष्टतम स्तर"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "The specific operational volume threshold where a business generates zero profit and zero loss is defined as the:", options: ["Break-Even Point", "Profit Maximization level", "Shutdown Point", "Optimum Capacity scale"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "उद्यमी द्वारा अपने व्यवसाय के संचालन के लिए बाहरी वित्तीय संस्थानों (जैसे बैंकों) से लिया गया दीर्घकालीन धन क्या कहलाता है?", options: ["ऋण पूंजी या ऋण वित्तपोषण (Debt Financing)", "समता पूंजी", "एंजेल फंडिंग", "स्वयं की पूंजी"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "Long-term investment capital sourced from banking institutions that incurs compulsory interest liabilities represents:", options: ["Debt Financing", "Equity Financing", "Angel Capital resource", "Owner's personal equity fund"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "व्यवसाय में किसी उत्पाद या ब्रांड की पहचान के लिए उपयोग किया जाने वाला विशिष्ट कानूनी प्रतीक या नाम क्या कहलाता है?", options: ["ट्रेडमार्क (Trademark)", "पेटेंट", "कॉपीराइट", "औद्योगिक डिजाइन"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "A distinct symbol, design, or phrase officially registered to protect the unique brand identity of a commercial product is a:", options: ["Trademark", "Patent", "Copyright", "Industrial Design asset"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "किसी नए स्टार्टअप व्यवसाय को बीज पूंजी (Seed Capital) और शुरुआती मेंटरशिप प्रदान करने वाले धनाढ्य व्यक्तिगत निवेशकों को क्या कहा जाता है?", options: ["एंजेल निवेशक (Angel Investors)", "वेंचर कैपिटलिस्ट", "व्यावसायिक बैंक", "सरकारी प्रमोटर"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "Affluent private individuals who provide crucial seed-stage capital and mentorship to high-potential startups are called:", options: ["Angel Investors", "Venture Capitalists", "Commercial Bankers", "State Promoters"], correct: 0 },

// ==========================================
// 15. भौतिकी (Physics) - 5 नए प्रश्न
// ==========================================
{ subject: "physics", lang: "hi", question: "दो स्थिर बिंदु आवेशों के बीच लगने वाले स्थिर विद्युत बल (Electrostatic Force) की गणना किस नियम द्वारा की जाती है?", options: ["कूलॉम का नियम (Coulomb's Law)", "ओम का नियम", "एम्पियर का नियम", "बायो-सावर्त का नियम"], correct: 0 },
{ subject: "physics", lang: "en", question: "The magnitude of the electrostatic force acting between two stationary point charges is accurately quantified using:", options: ["Coulomb's Law", "Ohm's Law", "Ampere's Law", "Biot-Savart Law"], correct: 0 },
{ subject: "physics", lang: "hi", question: "एक समानांतर पट्टिका संधारित्र (Parallel Plate Capacitor) की धारिता प्लेटों के बीच की दूरी बदलने पर किस प्रकार परिवर्तित होती है?", options: ["दूरी के व्युत्क्रमानुपाती होती है (घटती है)", "दूरी के समानुपाती होती है", "दूरी के वर्ग के समानुपाती होती है", "अपरिवर्तित रहती है"], correct: 0 },
{ subject: "physics", lang: "en", question: "How does the electrical capacitance of a standard Parallel Plate Air Capacitor scale relative to the distance between its plates?", options: ["Inversely proportional to the separation distance", "Directly proportional to the separation distance", "Proportional to the square of distance", "Remains absolutely independent"], correct: 0 },
{ subject: "physics", lang: "hi", question: "एक आदर्श वोल्टमीटर (Ideal Voltmeter) और एक आदर्श अमीटर (Ideal Ammeter) का आंतरिक विद्युत प्रतिरोध क्रमशः कितना होना चाहिए?", options: ["अनंत और शून्य", "शून्य और अनंत", "दोनों का शून्य", "दोनों का अनंत"], correct: 0 },
{ subject: "physics", lang: "en", question: "What are the theoretical internal electrical resistance specifications for an Ideal Voltmeter and an Ideal Ammeter?", options: ["Infinity and Zero respectively", "Zero and Infinity respectively", "Zero for both devices", "Infinity for both devices"], correct: 0 },
{ subject: "physics", lang: "hi", question: "प्रकाश का किसी तीक्ष्ण अवरोध या किनारे से टकराकर उसकी ज्यामितीय छाया में मुड़ जाने की परिघटना क्या कहलाती है?", options: ["विवर्तन (Diffraction)", "व्यतिकरण", "ध्रुवण", "अपवर्तन"], correct: 0 },
{ subject: "physics", lang: "en", question: "The physical phenomenon characterized by the bending of light waves around sharp edges or obstacles into geometric shadows is:", options: ["Diffraction", "Interference", "Polarization", "Refraction"], correct: 0 },
{ subject: "physics", lang: "hi", question: "आइंस्टीन के प्रकाश विद्युत समीकरण के अनुसार, उत्सर्जित प्रकाशिक इलेक्ट्रॉनों की अधिकतम गतिज ऊर्जा किस कारक पर निर्भर करती है?", options: ["आपतित प्रकाश की आवृत्ति पर", "आपतित प्रकाश की तीव्रता पर", "प्लेट के क्षेत्रफल पर", "समय अंतराल पर"], correct: 0 },
{ subject: "physics", lang: "en", question: "According to Einstein's photoelectric equation, the maximum kinetic energy of emitted photoelectrons depends strictly on:", options: ["The frequency of the incident light radiation", "The intensity of the incident light wave", "The surface area of the emitter plate", "The duration of exposure time"], correct: 0 },

// ==========================================
// 16. रसायन विज्ञान (Chemistry) - 5 नए प्रश्न
// ==========================================
{ subject: "chemistry", lang: "hi", question: "क्रिस्टलीय ठोसों के वर्गीकरण में 'हीरा' (Diamond) और 'ग्रेफाइट' को किस प्रकार के ठोसों की श्रेणी में रखा जाता है?", options: ["सहसंयोजक या नेटवर्क ठोस", "आणविक ठोस", "आयनिक ठोस", "धात्विक ठोस"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Under the structural classification of crystalline solids, Diamond and Graphite are categorized as which type?", options: ["Covalent or Network Solids", "Molecular Solids", "Ionic Solids", "Metallic Solids"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "किसी विलयन के वे भौतिक गुण जो केवल उसमें उपस्थित विलेय के कणों की संख्या पर निर्भर करते हैं, क्या कहलाते हैं?", options: ["अणुसंख्या गुणधर्म (Colligative Properties)", "रासायनिक गुणधर्म", "विशिष्ट गुणधर्म", "उभयधर्मी गुणधर्म"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Physical properties of a solution that depend exclusively on the total number of solute particles present are called:", options: ["Colligative Properties", "Chemical Properties", "Specific Properties", "Amphoteric Properties"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "शून्य कोटि की अभिक्रिया (Zero Order Reaction) के लिए वेग स्थिरांक (k) की मानक रासायनिक इकाई क्या होती है?", options: ["मोल लीटर⁻¹ सेकंड⁻¹", "सेकंड⁻¹", "लीटर मोल⁻¹ सेकंड⁻¹", "मोल⁻² सेकंड"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "What is the standard chemical unit of the reaction rate constant for a typical Zero Order Reaction configuration?", options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol⁻² s"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "ल्युकास अभिकर्मक (Lucas Reagent) का उपयोग प्राथमिक, द्वितीयक और तृतीयक ऐल्कोहॉलों की पहचान में होता है, यह किसका मिश्रण है?", options: ["सांद्र HCl और निर्जल ZnCl₂ का", "तनु H₂SO₄ और निर्जल CaCl₂ का", "सांद्र HNO₃ और AgNO₃ का", "CH₃COOH और Zn का"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Lucas Reagent, utilized globally to differentiate between primary, secondary, and tertiary alcohols, consists of a mixture of:", options: ["Concentrated Sales of HCl and anhydrous ZnCl₂", "Dilute H₂SO₄ and anhydrous CaCl₂", "Concentrated HNO₃ and AgNO₃", "CH₃COOH and metallic Zn"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "विटामिन बी₁₂ (Vitamin B12) के जटिल रासायनिक ढांचे के केंद्र में कौन सा धात्विक तत्व अनिवार्य रूप से उपस्थित होता है?", options: ["कोबाल्ट (Cobalt)", "लोहा", "मैग्नीशियम", "जस्ता"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Which metallic coordination element sits at the structural center of the complex vitamin B12 molecule?", options: ["Cobalt", "Iron", "Magnesium", "Zinc"], correct: 0 },

// ==========================================
// 17. जीव विज्ञान (Biology) - 5 नए प्रश्न
// ==========================================
{ subject: "biology", lang: "hi", question: "पुष्पी पादपों में परागकणों (Pollen Grains) की बाहरी कठोर परत 'बाह्यचोल' किस अत्यधिक प्रतिरोधी कार्बनिक पदार्थ की बनी होती है?", options: ["स्पोरोपोलेनिन (Sporopollenin)", "सेल्युलोज़", "पेक्टिन", "काइटिन"], correct: 0 },
{ subject: "biology", lang: "en", question: "The highly resistant organic protective exine layer of pollen grains in flowering plants is composed of:", options: ["Sporopollenin", "Cellulose", "Pectin", "Chitin"], correct: 0 },
{ subject: "biology", lang: "hi", question: "मानव शरीर की किस कोशिका या ग्रंथि को 'टी-हेल्पर' (T-Helper) कोशिकाओं के नष्ट होने के कारण एचआईवी संक्रमण में भारी क्षति पहुंचती है?", options: ["प्रतिरक्षा प्रणाली की लिम्फोसाइट्स", "यकृत की कोशिकाएं", "मस्तिष्क के न्यूरॉन्स", "लाल रक्त कणिकाएं"], correct: 0 },
{ subject: "biology", lang: "en", question: "Which cellular component of the human body undergoes severe depletion during HIV pathogenesis via T-Helper destruction?", options: ["Immune system Lymphocytes", "Hepatic liver cells", "Cerebral brain Neurons", "Erythrocytes / RBCs"], correct: 0 },
{ subject: "biology", lang: "hi", question: "डीएनए अणु की संरचना में एडेनिन (A) हमेशा थायमीन (T) के साथ कितने हाइड्रोजन बंधों द्वारा जुड़ा होता है?", options: ["दो हाइड्रोजन बंध (Double Hydrogen Bonds)", "तीन हाइड्रोजन बंध", "एक हाइड्रोजन बंध", "सहसंयोजक बंध"], correct: 0 },
{ subject: "biology", lang: "en", question: "Within the double-helix structure of a DNA molecule, Adenine binds with Thymine via how many hydrogen bonds?", options: ["Two hydrogen bonds", "Three hydrogen bonds", "Single hydrogen bond", "Covalent bond only"], correct: 0 },
{ subject: "biology", lang: "hi", question: "मानव इंसुलिन के दो पेप्टाइड शृंखलाएं (Chain A और Chain B) आपस में किस रासायनिक बंध द्वारा एक-दूसरे से जुड़ी होती हैं?", options: ["डाईसल्फाइड बंध (Disulfide Bonds)", "पेप्टाइड बंध", "हाइड्रोजन बंध", "फॉस्फोडाईएस्टर बंध"], correct: 0 },
{ subject: "biology", lang: "en", question: "The two polypeptide chains (Chain A and Chain B) of functional human insulin are interconnected via which chemical bonds?", options: ["Disulfide bonds", "Peptide bonds", "Hydrogen bonds", "Phosphodiester links"], correct: 0 },
{ subject: "biology", lang: "hi", question: "पारिस्थितिकी तंत्र में ऊर्जा का प्रवाह (Energy Flow) हमेशा किस दिशा में और कितने प्रतिशत नियम के तहत होता है?", options: ["एकदिशीय और 10% नियम", "द्विदिशीय और 50% नियम", "चक्रीय और 20% नियम", "बहुदिशीय और 5% नियम"], correct: 0 },
{ subject: "biology", lang: "en", question: "Energy transfer across successive trophic levels in an ecosystem progresses in which manner and under what efficiency percentage?", options: ["Unidirectional and 10% efficiency law", "Bidirectional and 50% law", "Cyclic and 20% law", "Multidirectional and 5% law"], correct: 0 },

// ==========================================
// 18. बायोटेक्नोलॉजी (Biotechnology) - 5 नए प्रश्न
// ==========================================
{ subject: "biotech", lang: "hi", question: "जेनेटिक इंजीनियरिंग में प्रयुक्त होने वाला 'pBR322' कृत्रिम रूप से निर्मित क्या है जिसका उपयोग जीन क्लोनिंग में होता है?", options: ["प्लास्मिड वाहक (Plasmid Vector)", "प्रतिबंधन एंजाइम", "जीवाणु जीनोम", "आरएनए प्राइमर"], correct: 0 },
{ subject: "biotech", lang: "en", question: "What is pBR322, widely engineered in molecular biology protocols to serve as a vehicle for gene cloning vectors?", options: ["Plasmid Vector", "Restriction Enzyme", "Bacterial Genome", "RNA Primer sequence"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "वह कौन सी आणविक तकनीक है जिसके द्वारा डीएनए के छोटे से टुकड़े की लाखों प्रतियां अत्यंत कम समय में प्रयोगशाला में बनाई जा सकती हैं?", options: ["पॉलीमरेज चेन रिएक्शन (PCR)", "जेल इलेक्ट्रोफोरेसिस", "साउदर्न ब्लॉटिंग", "वेस्टर्न ब्लॉटिंग"], correct: 0 },
{ subject: "biotech", lang: "en", question: "Which molecular biotechnology allows the amplification of a single DNA fragment into millions of exact copies in vitro?", options: ["Polymerase Chain Reaction (PCR)", "Gel Electrophoresis", "Southern Blotting", "Western Blotting"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "बायोटेक फसलों में 'फ्लेवर सेवर' (Flavr Savr) किस खाद्य वनस्पति की एक अनुवांशिक रूप से संशोधित (GM) उन्नत किस्म है?", options: ["टमाटर (Tomato)", "आलू", "मक्का", "बैंगन"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The famous Flavr Savr bioengineered crop represents the first commercially approved Genetically Modified variety of which vegetable?", options: ["Tomato", "Potato", "Maize", "Eggplant"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "बायोइन्फर्मेटिक्स में प्रयुक्त होने वाले 'BLAST' (ब्लास्ट) सॉफ्टवेयर टूल का प्राथमिक उपयोग वैज्ञानिक अनुसंधान में किस कार्य के लिए होता है?", options: ["अमीनो अम्ल या न्यूक्लियोटाइड अनुक्रमों की समानता खोजने के लिए", "कोशिकाओं की इमेजिंग के लिए", "प्रोटीन के क्रिस्टलीकरण के लिए", "डीएनए को काटने के लिए"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The computing bioinformatics software tool BLAST is deployed in structural research primarily to identify:", options: ["Sequence similarities between nucleotide or amino acid databases", "Cellular structural imaging paths", "Protein crystallization models", "DNA restriction cleavage locations"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "किसी जीव के पूरे जीनोम में मौजूद सभी जीनों के कार्यों और उनकी संरचना का व्यापक अध्ययन जैव प्रौद्योगिकी की किस शाखा के तहत होता है?", options: ["जीनोमिक्स (Genomics)", "प्रोटिओमिक्स", "मेटाबलोमिक्स", "ट्रांसक्रिप्टोमिक्स"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The comprehensive mapping, sequencing, and structural structural modeling of an organism's entire genome code is called:", options: ["Genomics", "Proteomics", "Metabolomics", "Transcriptomics"], correct: 0 },

// ==========================================
// 19. गणित (Mathematics) - 5 नए प्रश्न
// ==========================================
{ subject: "maths", lang: "hi", question: "यदि किसी सारणिक (Determinant) की कोई दो पंक्तियाँ या दो स्तंभ सर्वसम या समान हों, तो उस सारणिक का अंतिम मान क्या होगा?", options: ["0 (शून्य)", "1", "-1", "पंक्तियों के गुणनफल के बराबर"], correct: 0 },
{ subject: "maths", lang: "en", question: "If any two rows or columns of a standard matrix determinant are completely identical or proportional, the value of the determinant is:", options: ["0", "1", "-1", "Equal to product of rows"], correct: 0 },
{ subject: "maths", lang: "hi", question: "फलन f(x) = e^x का x के सापेक्ष प्रथम अवकलन (First Derivative) निम्नलिखित में से क्या होगा?", options: ["e^x", "xe^(x-1)", "1 / e^x", "0"], correct: 0 },
{ subject: "maths", lang: "en", question: "What is the mathematical first derivative of the natural exponential function f(x) = e^x with respect to x?", options: ["e^x", "xe^(x-1)", "1 / e^x", "0"], correct: 0 },
{ subject: "maths", lang: "hi", question: "अनिश्चित समाकलन ∫ (1 / x) dx का वास्तविक मान दिए गए विकल्पों में से क्या होगा?", options: ["log |x| + C", "-1 / x² + C", "x + C", "1"], correct: 0 },
{ subject: "maths", lang: "en", question: "What is the evaluated integral output of the calculus integration operation ∫ (1 / x) dx?", options: ["log |x| + C", "-1 / x² + C", "x + C", "1"], correct: 0 },
{ subject: "maths", lang: "hi", question: "अवकल समीकरण (Differential Equation) (dy/dx)² + y = 0 की घात (Degree) का मान कितना होगा?", options: ["2", "1", "0", "परिभाषित नहीं"], correct: 0 },
{ subject: "maths", lang: "en", question: "What is the mathematical degree of the ordinary differential equation given by (dy/dx)² + y = 0?", options: ["2", "1", "0", "Not defined"], correct: 0 },
{ subject: "maths", lang: "hi", question: "यदि P(A) = 0.5 और P(B) = 0.2 है, तथा A और B दोनों स्वतंत्र घटनाएं (Independent Events) हैं, तो P(A ∩ B) का मान क्या होगा?", options: ["0.1", "0.7", "0.3", "0.5"], correct: 0 },
{ subject: "maths", lang: "en", question: "If events A and B are independent with probabilities P(A) = 0.5 and P(B) = 0.2, evaluate P(A ∩ B):", options: ["0.1", "0.7", "0.3", "0.5"], correct: 0 },

// ==========================================
// 20. एप्लाइड मैथ (Applied Mathematics) - 5 नए प्रश्न
// ==========================================
{ subject: "applied_math", lang: "hi", question: "किसी व्यापारिक मशीनरी या स्थायी संपत्ति के मूल्य में समय के साथ होने वाली क्रमिक कमी को वित्तीय गणित में क्या कहा जाता है?", options: ["मूल्यह्रास (Depreciation)", "परिपक्वता मूल्य", "अधिमूल्य", "बट्टा"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "The systemic structural reduction in the monetary value of a fixed commercial asset over time due to wear and tear is:", options: ["Depreciation", "Maturity Value", "Premium allocation", "Discounting coefficient"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "संख्यात्मक विश्लेषण में 'न्यूटन-राफसन विधि' (Newton-Raphson Method) का मुख्य उपयोग किस कार्य के लिए किया जाता है?", options: ["किसी समीकरण के वास्तविक मूल (Roots) का सन्निकट मान ज्ञात करने के लिए", "मैट्रिक्स के व्युत्क्रम के लिए", "डेटा के ग्राफिक चार्टिंग के लिए", "साधारण औसत के लिए"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "In numerical mathematical analysis, the Newton-Raphson method is primarily deployed to iterate:", options: ["The real numerical roots of non-linear algebraic equations", "The inverse of large matrices", "Graphic charting data fields", "Simple arithmetic averages"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "रैखिक प्रोग्रामन समस्याओं (LPP) में वे रैखिक प्रतिबंध या शर्तें क्या कहलाती हैं जो संसाधनों की सीमाओं को दर्शाती हैं?", options: ["व्यवरोध (Constraints)", "उद्देश्य फलन", "अनुकूलतम बिंदु", "छाया मूल्य"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "In optimization models and LPP tracking, the mathematical linear inequalities defining resource limits are:", options: ["Constraints", "Objective Functions", "Optimal Points", "Shadow Prices"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "यदि एक निवेशक हर साल एक निश्चित राशि बैंक में जमा करता है, तो इस प्रकार के नियमित अंतरालों पर होने वाले भुगतानों की श्रृंखला को क्या कहते हैं?", options: ["वार्षिकी (Annuity)", "साधारण सिंकिंग फंड", "वर्तमान अग्रिम", "सकल लाभांश"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "A sequential stream of equal cash flows occurring at uniform periodic timelines over an investment schedule is an:", options: ["Annuity", "Simple Sinking Fund", "Present Advance cash", "Gross Dividend yield"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "सांख्यिकीय परिकल्पना परीक्षण में वह परिकल्पना क्या कहलाती है जो मानती है कि दो चरों के बीच कोई महत्वपूर्ण अंतर या प्रभाव नहीं है?", options: ["शून्य परिकल्पना (Null Hypothesis)", "वैकल्पिक परिकल्पना", "दिशात्मक परिकल्पना", "जटिल परिकल्पना"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "In statistical hypothesis configurations, the claim stating that no factual difference or effect exists between parameters is the:", options: ["Null Hypothesis", "Alternative Hypothesis", "Directional Track", "Complex Hypothesis model"], correct: 0 },

// ==========================================
// 21. कंप्यूटर विज्ञान (Computer Science) - 5 नए प्रश्न
// ==========================================
{ subject: "computer_science", lang: "hi", question: "स्ट्रक्चर्ड क्वेरी लैंग्वेज (SQL) में डेटाबेस टेबल से किसी विशिष्ट कॉलम को हटाने के लिए किस DDL कमांड का उपयोग किया जाता है?", options: ["ALTER TABLE ... DROP COLUMN", "DELETE COLUMN", "REMOVE COLUMN", "DROP TABLE"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Which relational DDL statement configuration is executed in SQL to drop a specific attribute column from an active table?", options: ["ALTER TABLE ... DROP COLUMN", "DELETE COLUMN", "REMOVE COLUMN", "DROP TABLE"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "पायथन प्रोग्रामिंग में अपवादों या त्रुटियों को सुरक्षित रूप से संभालने के लिए (Exception Handling) किस ब्लॉक का उपयोग किया जाता है?", options: ["try और except ब्लॉक", "if और else ब्लॉक", "for और while ब्लॉक", "catch और throw ब्लॉक"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Which dual block statements are implemented in Python structure to safely trap and manage runtime exceptional errors?", options: ["try and except blocks", "if and else structures", "for and while control loops", "catch and throw blocks"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "नेटवर्क टोपोलॉजी का वह कौन सा प्रकार है जिसमें सभी कंप्यूटर एक केंद्रीय डिवाइस (जैसे हब या स्विच) से सीधे जुड़े होते हैं?", options: ["स्टार टोपोलॉजी (Star Topology)", "बस टोपोलॉजी", "रिंग टोपोलॉजी", "मेष टोपोलॉजी"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Which specific computer network topology routes all peripheral network nodes directly into a central hub or switch device?", options: ["Star Topology", "Bus Topology", "Ring Topology", "Mesh Topology"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "साइबर स्पेस में किसी सुरक्षित नेटवर्क या कंप्यूटर सिस्टम में बिना अनुमति के घुसपैठ कर डेटा चुराने या नुकसान पहुँचाने की क्रिया क्या कहलाती है?", options: ["हैकिंग (Hacking)", "स्पैमिंग", "फ़ायरवॉल प्रोटेक्शन", "डेटा एन्क्रिप्शन"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "The malicious act of exploiting system vulnerabilities to breach secure digital configurations without authorization is:", options: ["Hacking", "Spamming", "Firewall Protection setup", "Data Encryption pathways"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "डेटा स्ट्रक्चर में 'क्यू' (Queue) किस सिद्धांत या एल्गोरिदम प्रणाली पर आधारित होकर डेटा प्रोसेसिंग करता है?", options: ["फर्स्ट-इन फर्स्ट-アウト (FIFO)", "लास्ट-इन फर्स्ट-आउट (LIFO)", "रैंडम सर्चिंग", "प्रायोरिटी बेस प्रोसेसिंग"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "The linear Queue data structure elements are processed according to which standard operational sequencing principle?", options: ["First-In, First-Out (FIFO)", "Last-In, First-Out (LIFO)", "Random Searching paths", "Priority Base Processing configurations"], correct: 0 },
// ==========================================
// 1. इतिहास (History) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "history", lang: "hi", question: "किसे 'भारतीय पुरातत्व का जनक' (Father of Indian Archaeology) कहा जाता है?", options: ["एलेक्जेंडर कनिंघम", "जॉन मार्शल", "आर. ई. एम. व्हीलर", "दयाराम साहनी"], correct: 0 },
{ subject: "history", lang: "en", question: "Who is traditionally referred to as the 'Father of Indian Archaeology'?", options: ["Alexander Cunningham", "John Marshall", "R. E. M. Wheeler", "Dayaram Sahni"], correct: 0 },
{ subject: "history", lang: "hi", question: "प्रसिद्ध चीनी यात्री ह्वेनसांग (Xuanzang) सम्राट हर्षवर्धन के शासनकाल में राजस्थान के किस ऐतिहासिक स्थान पर आया था?", options: ["भीनमाल (जालौर)", "कालीबंगा", "बैराठ", "आहाड़"], correct: 0 },
{ subject: "history", lang: "en", question: "The famous Chinese traveler Xuanzang visited which historical place in Rajasthan during Emperor Harsha's reign?", options: ["Bhinmal (Jalore)", "Kalibangan", "Bairat", "Ahar"], correct: 0 },
{ subject: "history", lang: "hi", question: "विजयनगर साम्राज्य की स्थापना 1336 ईस्वी में किन दो भाइयों द्वारा की गई थी?", options: ["हरिहर और बुक्का", "कृष्णदेव राय और अच्युत राय", "राम राय और सदाशिव", "बुक्का II और विरूपाक्ष"], correct: 0 },
{ subject: "history", lang: "en", question: "The Vijayanagara Empire was founded in the year 1336 AD by which two brothers?", options: ["Harihara and Bukka", "Krishnadeva Raya and Achyuta Raya", "Rama Raya and Sadashiva", "Bukka II and Virupaksha"], correct: 0 },
{ subject: "history", lang: "hi", question: "मुगल सम्राट अकबर द्वारा फतेहपुर सीकरी में 'इबादतखाना' (Prayer Hall) की स्थापना किस वर्ष की गई थी?", options: ["1575 ई.", "1582 ई.", "1570 ई.", "1565 ई."], correct: 0 },
{ subject: "history", lang: "en", question: "In which year did the Mughal Emperor Akbar establish the 'Ibadat Khana' (House of Worship) at Fatehpur Sikri?", options: ["1575 AD", "1582 AD", "1570 AD", "1565 AD"], correct: 0 },
{ subject: "history", lang: "hi", question: "1857 के स्वतंत्रता संग्राम के समय राजस्थान में ब्रिटिश शासन की कितनी सैनिक छावनियां थीं?", options: ["6 छावनियां", "4 छावनियां", "8 छावनियां", "5 छावनियां"], correct: 0 },
{ subject: "history", lang: "en", question: "How many military cantonments of British rule were actively present in Rajasthan during the Revolt of 1857?", options: ["6 Cantonments", "4 Cantonments", "8 Cantonments", "5 Cantonments"], correct: 0 },
{ subject: "history", lang: "hi", question: "महात्मा गांधी ने किस घटना या नरसंहार के बाद अपने प्रसिद्ध 'असहयोग आंदोलन' को स्थगित करने का निर्णय लिया था?", options: ["चौरी-चौरा कांड", "जलियांवाला बाग नरसंहार", "काकौरी कांड", "दांडी मार्च"], correct: 0 },
{ subject: "history", lang: "en", question: "Following which specific violent incident did Mahatma Gandhi formally suspend the Non-Cooperation Movement?", options: ["Chauri Chaura incident", "Jallianwala Bagh massacre", "Kakori conspiracy", "Dandi March confrontation"], correct: 0 },
{ subject: "history", lang: "hi", question: "प्रसिद्ध 'बिजौलिया किसान आंदोलन' का नेतृत्व साधू सीताराम दास के बाद मुख्य रूप से किसके द्वारा किया गया था?", options: ["विजय सिंह पथिक", "माणिक्य लाल वर्मा", "हरिभाऊ उपाध्याय", "जयनारायण व्यास"], correct: 0 },
{ subject: "history", lang: "en", question: "Who primarily took over the leadership of the famous 'Bijolia Peasant Movement' after Sadhu Sitaram Das?", options: ["Vijay Singh Pathik", "Manikya Lal Verma", "Haribhau Upadhyaya", "Jai Narayan Vyas"], correct: 0 },
{ subject: "history", lang: "hi", question: "चंद्रगुप्त मौर्य के दरबार में यूनानी राजदूत मेगस्थनीज द्वारा रचित प्रसिद्ध पुस्तक कौन सी है?", options: ["इंडिका (Indica)", "अर्थशास्त्र", "मुद्राराक्षस", "राजतरंगिणी"], correct: 0 },
{ subject: "history", lang: "en", question: "Which famous book was authored by Megasthenes, the Greek ambassador in the court of Chandragupta Maurya?", options: ["Indica", "Arthashastra", "Mudrarakshasa", "Rajatarangini"], correct: 0 },
{ subject: "history", lang: "hi", question: "इब्न बतूता, जिसने 'रिहला' नामक प्रसिद्ध यात्रा वृत्तांत लिखा था, किस देश का मूल निवासी था?", options: ["मोरक्को", "मिस्र", "फारस", "तुर्की"], correct: 0 },
{ subject: "history", lang: "en", question: "Ibn Battuta, who authored the famous travelogue 'Rihla', originally hailed from which country?", options: ["Morocco", "Egypt", "Persia", "Turkey"], correct: 0 },
{ subject: "history", lang: "hi", question: "कांग्रेस के किस ऐतिहासिक अधिवेशन में पूर्ण स्वराज (Complete Independence) की मांग को आधिकारिक रूप से स्वीकार किया गया था?", options: ["लाहौर अधिवेशन (1929)", "कराची अधिवेशन (1931)", "कलकत्ता अधिवेशन (1920)", "सुरत अधिवेशन (1907)"], correct: 0 },
{ subject: "history", lang: "en", question: "In which historic session of the Indian National Congress was the demand for 'Purna Swaraj' formally adopted?", options: ["Lahore Session (1929)", "Karachi Session (1931)", "Calcutta Session (1920)", "Surat Session (1907)"], correct: 0 },

// ==========================================
// 2. राजनीति विज्ञान (Political Science) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "political", lang: "hi", question: "गुटनिरपेक्ष आंदोलन (NAM) का प्रथम शिखर सम्मेलन वर्ष 1961 में किस शहर में आयोजित किया गया था?", options: ["बेलग्रेड (Belgrade)", "काहिरा", "नई दिल्ली", "बांडुंग"], correct: 0 },
{ subject: "political", lang: "en", question: "The first official summit of the Non-Aligned Movement (NAM) was held in 1961 in which city?", options: ["Belgrade", "Cairo", "New Delhi", "Bandung"], correct: 0 },
{ subject: "political", lang: "hi", question: "सोवियत संघ (USSR) का आधिकारिक विघटन किस वर्ष और किस महीने में प्रभावी हुआ था?", options: ["दिसंबर 1991", "नवंबर 1989", "जनवरी 1990", "अगस्त 1992"], correct: 0 },
{ subject: "political", lang: "en", question: "In which year and month did the formal dissolution of the Soviet Union (USSR) legally take place?", options: ["December 1991", "November 1989", "January 1990", "August 1992"], correct: 0 },
{ subject: "political", lang: "hi", question: "योजना आयोग (Planning Commission) के स्थान पर भारत सरकार द्वारा 'नीति आयोग' का गठन कब किया गया था?", options: ["1 जनवरी 2015", "15 अगस्त 2014", "2 अक्टूबर 2015", "26 जनवरी 2015"], correct: 0 },
{ subject: "political", lang: "en", question: "When did the Government of India officially establish NITI Aayog to replace the historic Planning Commission?", options: ["1 January 2015", "15 August 2014", "2 October 2015", "26 January 2015"], correct: 0 },
{ subject: "political", lang: "hi", question: "भारतीय संविधान का कौन सा संशोधन पंचायती राज संस्थाओं (PRIs) को संवैधानिक दर्जा प्रदान करता है?", options: ["73वां संविधान संशोधन", "74वां संविधान संशोधन", "44वां संविधान संशोधन", "86वां संविधान संशोधन"], correct: 0 },
{ subject: "political", lang: "en", question: "Which constitutional amendment of India officially granted statutory constitutional status to Panchayati Raj Institutions?", options: ["73rd Amendment", "74th Amendment", "44th Amendment", "86th Amendment"], correct: 0 },
{ subject: "political", lang: "hi", question: "दक्षिण एशियाई क्षेत्रीय सहयोग संगठन (SAARC) का स्थायी सचिवालय या मुख्यालय कहाँ स्थित है?", options: ["काठमांडू (नेपाल)", "नई दिल्ली (भारत)", "ढाका (बांग्लादेश)", "कोलंबो (श्रीलंका)"], correct: 0 },
{ subject: "political", lang: "en", question: "Where is the permanent secretariat or headquarters of the South Asian Association for Regional Cooperation (SAARC) situated?", options: ["Kathmandu, Nepal", "New Delhi, India", "Dhaka, Bangladesh", "Colombo, Sri Lanka"], correct: 0 },
{ subject: "political", lang: "hi", question: "वर्ष 1975 में भारत में राष्ट्रीय आपातकाल (National Emergency) की घोषणा के समय भारत के राष्ट्रपति कौन थे?", options: ["फखरुद्दीन अली अहमद", "वी. वी. गिरी", "डॉ. जाकिर हुसैन", "ज्ञानी जैल सिंह"], correct: 0 },
{ subject: "political", lang: "en", question: "Who was the President of India when the nationwide National Emergency was declared in the year 1975?", options: ["Fakhruddin Ali Ahmed", "V. V. Giri", "Dr. Zakir Husain", "Giani Zail Singh"], correct: 0 },
{ subject: "political", lang: "hi", question: "मंडल आयोग की सिफारिशों को लागू करने की घोषणा किस भारतीय प्रधानमंत्री के कार्यकाल में की गई थी?", options: ["वी. पी. सिंह (V.P. Singh)", "राजीव गांधी", "अटल बिहारी वाजपेयी", "पी. वी. नरसिम्हा राव"], correct: 0 },
{ subject: "political", lang: "en", question: "Under the tenure of which Indian Prime Minister was the implementation of the Mandal Commission report announced?", options: ["V.P. Singh", "Rajiv Gandhi", "Atal Bihari Vajpayee", "P.V. Narasimha Rao"], correct: 0 },
{ subject: "political", lang: "hi", question: "यूरोपीय संघ (European Union) की एकल साझा मुद्रा का नाम क्या है जो इसके अधिकांश सदस्य देशों में मान्य है?", options: ["यूरो (Euro)", "पाउंड", "डॉलर", "फ्रैंक"], correct: 0 },
{ subject: "political", lang: "en", question: "What is the official uniform currency utilized across the majority of member states within the European Union (EU)?", options: ["Euro", "Pound", "Dollar", "Franc"], correct: 0 },
{ subject: "political", lang: "hi", question: "स्वतंत्रता के बाद भारत के किस राज्य में सर्वप्रथम गैर-कांग्रेसी सरकार (Communist Party) का गठन 1957 में हुआ था?", options: ["केरल", "पश्चिम बंगाल", "तमिलनाडु", "ओडिशा"], correct: 0 },
{ subject: "political", lang: "en", question: "In which Indian state was the first democratically elected non-Congress government formed in the year 1957?", options: ["Kerala", "West Bengal", "Tamil Nadu", "Odisha"], correct: 0 },
{ subject: "political", lang: "hi", question: "भारत की 'पूर्व की ओर देखो' नीति (Look East Policy) को वर्ष 1992 में किस प्रधानमंत्री द्वारा प्रारंभ किया गया था?", options: ["पी. वी. नरसिम्हा राव", "आई. के. गुजराल", "अटल बिहारी वाजपेयी", "मनमोहन सिंह"], correct: 0 },
{ subject: "political", lang: "en", question: "The conceptual 'Look East Policy' of India was initially launched in 1992 by which Prime Minister?", options: ["P. V. Narasimha Rao", "I. K. Gujral", "Atal Bihari Vajpayee", "Manmohan Singh"], correct: 0 },

// ==========================================
// 3. भूगोल (Geography) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "geography", lang: "hi", question: "'संभववाद' (Possibilism) की विचारधारा का प्रतिपादन किस सुप्रसिद्ध फ्रांसीसी भूगोलवेत्ता द्वारा किया गया था?", options: ["विडाल-डी-ला-ब्लाश", "फ्रेडरिक रेटजेल", "कार्ल सावर", "ग्रिफिथ टेलर"], correct: 0 },
{ subject: "geography", lang: "en", question: "The geographical school of thought known as 'Possibilism' was pioneered by which French geographer?", options: ["Vidal de la Blache", "Friedrich Ratzel", "Carl Sauer", "Griffith Taylor"], correct: 0 },
{ subject: "geography", lang: "hi", question: "विश्व के किस देश का मानव विकास सूचकांक (HDI Value) ऐतिहासिक रूप से लगातार सर्वोच्च स्थानों पर रहा है?", options: ["नार्वे (Norway)", "स्विट्जरलैंड", "जर्मनी", "जापान"], correct: 0 },
{ subject: "geography", lang: "en", question: "Which global country has consistently ranked at or near the absolute top of the Human Development Index (HDI)?", options: ["Norway", "Switzerland", "Germany", "Japan"], correct: 0 },
{ subject: "geography", lang: "hi", question: "विश्व का सबसे लंबा और सबसे व्यस्त आंतरिक जलमार्ग निम्नलिखित में से कौन सा माना जाता है?", options: ["महान झील-सेंट लॉरेंस जलमार्ग", "राइन जलमार्ग", "डेन्यूब जलमार्ग", "मिसिसिपी जलमार्ग"], correct: 0 },
{ subject: "geography", lang: "en", question: "Which system is globally recognized as the longest and busiest commercial inland waterway in the world?", options: ["Great Lakes-St. Lawrence Seaway", "Rhine Waterway", "Danube Waterway", "Mississippi Waterway"], correct: 0 },
{ subject: "geography", lang: "hi", question: "भारत में किस राज्य में 'भिलाई' (Bhilai) लौह और इस्पात उद्योग केंद्र स्थित है?", options: ["छत्तीसगढ़", "झारखंड", "ओडिशा", "मध्य प्रदेश"], correct: 0 },
{ subject: "geography", lang: "en", question: "The strategically vital Bhilai Iron and Steel Plant industrial hub is situated in which Indian state?", options: ["Chhattisgarh", "Jharkhand", "Odisha", "Madhya Pradesh"], correct: 0 },
{ subject: "geography", lang: "hi", question: "भूमध्य सागर (Mediterranean Sea) को लाल सागर (Red Sea) से जोड़ने वाली विश्व प्रसिद्ध कृत्रिम नहर कौन सी है?", options: ["स्वेज नहर (Suez Canal)", "पनामा नहर", "कील नहर", "इरी नहर"], correct: 0 },
{ subject: "geography", lang: "en", question: "Which globally renowned artificial canal directly connects the Mediterranean Sea to the Red Sea?", options: ["Suez Canal", "Panama Canal", "Kiel Canal", "Erie Canal"], correct: 0 },
{ subject: "geography", lang: "hi", question: "भारत के किस राज्य में सर्वाधिक जनसंख्या घनत्व (Population Density) वर्ष 2011 की जनगणना के अनुसार दर्ज किया गया?", options: ["बिहार", "पश्चिम बंगाल", "उत्तर प्रदेश", "केरल"], correct: 0 },
{ subject: "geography", lang: "en", question: "According to the 2011 Census metrics, which Indian state registered the highest population density?", options: ["Bihar", "West Bengal", "Uttar Pradesh", "Kerala"], correct: 0 },
{ subject: "geography", lang: "hi", question: "अंकलेश्वर (Ankleshwar) खनिज तेल उत्पादक क्षेत्र भारत के किस राज्य में स्थित प्रमुख हाइड्रोकार्बन बेल्ट है?", options: ["गुजरात", "असम", "महाराष्ट्र", "राजस्थान"], correct: 0 },
{ subject: "geography", lang: "en", question: "The prominent Ankleshwar petroleum and mineral oil production hub is located within which Indian state?", options: ["Gujarat", "Assam", "Maharashtra", "Rajasthan"], correct: 0 },
{ subject: "geography", lang: "hi", question: "भारत के किस राज्य में 'झूमिंग' (Jhumming) कृषि या कर्तन-दहन प्रणाली को मुख्य रूप से अपनाया जाता है?", options: ["उत्तर-पूर्वी राज्य (North-Eastern States)", "राजस्थान", "पंजाब", "तटीय केरल"], correct: 0 },
{ subject: "geography", lang: "en", question: "In which region of India is the shifting slash-and-burn cultivation technique known as 'Jhumming' traditionally practiced?", options: ["North-Eastern States", "Rajasthan", "Punjab", "Coastal Kerala"], correct: 0 },
{ subject: "geography", lang: "hi", question: "भारत का सबसे लंबा राष्ट्रीय महामार्ग (National Highway) कौन सा है जो उत्तर को दक्षिण से जोड़ता है?", options: ["NH-44", "NH-48", "NH-7", "NH-1"], correct: 0 },
{ subject: "geography", lang: "en", question: "Which is the longest National Highway in India, running continuously from Srinagar to Kanyakumari?", options: ["NH-44", "NH-48", "NH-7", "NH-1"], correct: 0 },
{ subject: "geography", lang: "hi", question: "कपास की खेती के लिए सबसे उपयुक्त और उपजाऊ मृदा (Soil Category) कौन सी मानी जाती है?", options: ["काली मृदा या रेगुर मृदा", "जलोढ़ मृदा", "लाल मृदा", "लैटराइट मृदा"], correct: 0 },
{ subject: "geography", lang: "en", question: "Which soil profile is considered universally ideal and highly productive for widespread cotton cultivation?", options: ["Black Soil / Regur Soil", "Alluvial Soil", "Red Soil", "Laterite Soil"], correct: 0 },

// ==========================================
// 4. अर्थशास्त्र (Economics) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "economics", lang: "hi", question: "ऐसी वस्तुएं जिनकी मांग उपभोक्ता की आय बढ़ने पर घटती है (Negative income effect), क्या कहलाती हैं?", options: ["निम्नस्तरीय या घटिया वस्तुएं (Inferior Goods)", "सामान्य वस्तुएं", "विलासिता वस्तुएं", "प्रतिस्थापन वस्तुएं"], correct: 0 },
{ subject: "economics", lang: "en", question: "Commodities for which the consumer demand contractually decreases as consumer income grows are defined as:", options: ["Inferior Goods", "Normal Goods", "Luxury Goods", "Substitute Goods"], correct: 0 },
{ subject: "economics", lang: "hi", question: "अल्पाधिकार (Oligopoly) बाजार संरचना की वह कौन सी मुख्य विशेषता है जो विक्रेताओं की परस्पर निर्भरता दर्शाती है?", options: ["गिने-चुने बड़े विक्रेताओं की प्रधानता", "एकमात्र विक्रेता", "असीमित क्रेता-विक्रेता", "पूर्ण समरूप वस्तुएं"], correct: 0 },
{ subject: "economics", lang: "en", question: "What is the defining structural property of an Oligopoly market ecosystem regarding the number of dominant firms?", options: ["Dominated by a few large sellers", "Single seller model", "Infinite buyers and sellers", "Perfectly homogeneous commodities"], correct: 0 },
{ subject: "economics", lang: "hi", question: "केंद्रीय बैंक (RBI) द्वारा व्यावसायिक बैंकों को दिए जाने वाले ऋण पर वसूली जाने वाली आधिकारिक ब्याज दर क्या कहलाती है?", options: ["बैंक दर (Bank Rate)", "नकद आरक्षित अनुपात", "वैधानिक तरलता अनुपात", "रिवर्स रेपो दर"], correct: 0 },
{ subject: "economics", lang: "en", question: "The official long-term interest rate charged by the Central Bank (RBI) on loans extended to commercial banks is the:", options: ["Bank Rate", "Cash Reserve Ratio", "Statutory Liquidity Ratio", "Reverse Repo Rate"], correct: 0 },
{ subject: "economics", lang: "hi", question: "एक वित्तीय वर्ष के दौरान देश की भौगोलिक सीमा के भीतर उत्पादित सभी अंतिम वस्तुओं और सेवाओं का कुल मौद्रिक मूल्य क्या कहलाता है?", options: ["सकल घरेलू उत्पाद (GDP)", "शुद्ध राष्ट्रीय उत्पाद", "सकल राष्ट्रीय उत्पाद", "व्यक्तिगत आय"], correct: 0 },
{ subject: "economics", lang: "en", question: "The comprehensive market value of all final goods and services generated strictly within a country's boundaries is the:", options: ["Gross Domestic Product (GDP)", "Net National Product", "Gross National Product", "Personal Disposable Income"], correct: 0 },
{ subject: "economics", lang: "hi", question: "मुद्रास्फीति (Inflation) की स्थिति को नियंत्रित करने के लिए केंद्रीय बैंक मौद्रिक नीति के तहत क्या कदम उठाता है?", options: ["रेपो रेट और बैंक दर में वृद्धि", "नकद आरक्षित अनुपात में कमी", "सरकारी प्रतिभूतियों की खरीद", "ब्याज दरों को कम करना"], correct: 0 },
{ subject: "economics", lang: "en", question: "To effectively counteract rising inflation within an economic ecosystem, the Central Bank typically executes:", options: ["An increase in the Repo Rate and Bank Rate", "A reduction in the Cash Reserve Ratio", "Widespread purchase of government bonds", "Lowering overall interest margins"], correct: 0 },
{ subject: "economics", lang: "hi", question: "ब्रिटिश अर्थशास्त्री जॉन मेनार्ड कीन्स की सुप्रसिद्ध पुस्तक 'द जनरल थ्योरी' किस वर्ष प्रकाशित हुई थी जिसने समष्टि अर्थशास्त्र की नींव रखी?", options: ["1936", "1929", "1944", "1920"], correct: 0 },
{ subject: "economics", lang: "en", question: "In which year was John Maynard Keynes' revolutionary book 'The General Theory of Employment, Interest and Money' published?", options: ["1936", "1929", "1944", "1920"], correct: 0 },
{ subject: "economics", lang: "hi", question: "बजट घाटे (Budget Deficit) को पूरा करने के लिए सरकार द्वारा केंद्रीय बैंक से नई मुद्रा जारी कराने की प्रक्रिया क्या कहलाती है?", options: ["घाटे का वित्तपोषण या हीनार्थ प्रबंधन", "मुद्रा संकुचन", "राजकोषीय सुदृढ़ीकरण", "विमुद्रीकरण"], correct: 0 },
{ subject: "economics", lang: "en", question: "The strategic financial process of printing fresh currency notes to cover budgetary deficits is known as:", options: ["Deficit Financing", "Monetary Contraction", "Fiscal Consolidation", "Demonetization implementation"], correct: 0 },
{ subject: "economics", lang: "hi", question: "वह अर्थशास्त्र क्या कहलाता है जो यह अध्ययन करता है कि आर्थिक सिद्धांत वास्तविक दुनिया में 'क्या होना चाहिए' (Value Judgments) से संबंधित हैं?", options: ["आदर्शात्मक अर्थशास्त्र (Normative Economics)", "वास्तविक अर्थशास्त्र", "व्यष्टि अर्थशास्त्र", "समष्टि अर्थशास्त्र"], correct: 0 },
{ subject: "economics", lang: "en", question: "The branch of economic analysis that evaluates judgements based on normative statements regarding 'what ought to be' is:", options: ["Normative Economics", "Positive Economics", "Microeconomics", "Macroeconomics"], correct: 0 },
{ subject: "economics", lang: "hi", question: "निम्नलिखित में से कौन सा वित्तीय साधन (Financial Instrument) भारत में सरकार की ओर से राजकोषीय घाटे को प्रबंधित करने के लिए प्रयुक्त अल्पकालिक साधन है?", options: ["ट्रेज़री बिल (Treasury Bills)", "शेयर्स प्रमाणपत्र", "दीर्घकालीन डिबेंचर्स", "म्युचुअल फंड्स"], correct: 0 },
{ subject: "economics", lang: "en", question: "Which short-term debt instrument is issued by the Government of India to raise immediate liquid resources?", options: ["Treasury Bills", "Share Certificates", "Long-term Debentures", "Mutual Fund units"], correct: 0 },
{ subject: "economics", lang: "hi", question: "विदेशी मुद्रा विनिमय बाजार में जब किसी देश की सरकार जानबूझकर अपनी मुद्रा का मूल्य विदेशी मुद्राओं की तुलना में कम करती है, तो उसे क्या कहते हैं?", options: ["अवमूल्यन (Devaluation)", "मूल्यह्रास", "अधिमूल्यन", "फ्लोटिंग रेट"], correct: 0 },
{ subject: "economics", lang: "en", question: "When a country's government intentionally lowers the official value of its domestic currency relative to foreign currencies, it is called:", options: ["Devaluation", "Depreciation", "Appreciation", "Floating Exchange adjustment"], correct: 0 },

// ==========================================
// 5. समाजशास्त्र (Sociology) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "sociology", lang: "hi", question: "जाति व्यवस्था की संरचना का गहराई से अध्ययन करने वाले किस प्रसिद्ध समाजशास्त्री ने 'G.S. Ghurye' के नाम से ख्याति प्राप्त की?", options: ["गोविंद सदाशिव घुरिये", "एम. एन. श्रीनिवास", "इरावती कर्वे", "डी. एन. मजूमदार"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Which pioneering Indian sociologist analyzed the caste framework under the formal publication acronym G.S. Ghurye?", options: ["Govind Sadashiv Ghurye", "M. N. Srinivas", "Irawati Karve", "D. N. Majumdar"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "ब्रिटिश काल में 'सती प्रथा निषेध अधिनियम' वर्ष 1829 में किस गवर्नर जनरल द्वारा राजा राममोहन राय के प्रयासों से पारित किया गया था?", options: ["लॉर्ड विलियम बेंटिक", "लॉर्ड डलहौजी", "लॉर्ड कर्जन", "लॉर्ड रिपन"], correct: 0 },
{ subject: "sociology", lang: "en", question: "The historic Abolition of Sati Act of 1829 was formally enacted by which British Governor-General?", options: ["Lord William Bentinck", "Lord Dalhousie", "Lord Curzon", "Lord Ripon"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "वह सामाजिक प्रक्रिया क्या कहलाती है जिसके द्वारा एक अल्पसंख्यक या बाहरी समूह स्थानीय बहुसंख्यक संस्कृति को पूरी तरह अपना लेता है?", options: ["सात्मीकरण (Assimilation)", "एकीकरण", "पृथक्करण", "आधुनिकीकरण"], correct: 0 },
{ subject: "sociology", lang: "en", question: "The distinct social process whereby a minority group or culture comes to fully adopt the customs of a dominant host society is:", options: ["Assimilation", "Integration", "Segregation", "Modernization"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "वर्ष 1955 में पारित किया गया 'अस्पृश्यता निवारण अधिनियम' आगे चलकर किस नाम से संशोधित और प्रभावी हुआ?", options: ["नागरिक अधिकार संरक्षण अधिनियम", "अनुसूचित जाति जनजाति सुरक्षा एक्ट", "मानवाधिकार संरक्षण अधिनियम", "सामाजिक न्याय सुरक्षा कोड"], correct: 0 },
{ subject: "sociology", lang: "en", question: "The historic Untouchability Offences Act enacted in 1955 was later amended and rebranded as the:", options: ["Protection of Civil Rights Act", "Prevention of Atrocities Act", "Protection of Human Rights Act", "Social Justice Security Code"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "भारत में जनजातीय समुदायों के वर्गीकरण के लिए प्रयुक्त 'स्थायी लक्षण' (Permanent Traits) का प्राथमिक आधार क्या माना जाता है?", options: ["भौगोलिक निवास और भाषाई आधार", "आय का स्तर", "शैक्षणिक योग्यता", "धार्मिक अनुष्ठान"], correct: 0 },
{ subject: "sociology", lang: "en", question: "What is considered the foundational criterion under the 'Permanent Traits' classification of tribal communities in India?", options: ["Geographical habitat and linguistic orientation", "Income bracket thresholds", "Educational literacy rates", "Specific religious rituals"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "प्रसिद्ध समाजशास्त्री ए. आर. देसाई ने भारतीय राष्ट्रवाद के विकास के चरणों को किस मुख्य वैचारिक दृष्टिकोण से विश्लेषित किया है?", options: ["मार्क्सवादी दृष्टिकोण (Marxist Perspective)", "प्रकार्यवादी दृष्टिकोण", "संरचनात्मक दृष्टिकोण", "उपनिवेशवादी दृष्टिकोण"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Renowned sociologist A.R. Desai evaluated the operational phases of Indian nationalism utilizing which structural methodology?", options: ["Marxist Perspective", "Functionalist Perspective", "Structuralist Perspective", "Colonialist Framework"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "भारत में किस प्रसिद्ध सामाजिक आंदोलन का नारा 'पारिस्थितिकी स्थायी अर्थव्यवस्था है' (Ecology is permanent economy) था?", options: ["चिपको आंदोलन (Chipko Movement)", "नर्मदा बचाओ आंदोलन", "अपिको आंदोलन", "टिहरी बांध संघर्ष"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Which ecological social movement in India officially adopted the operational slogan 'Ecology is permanent economy'?", options: ["Chipko Movement", "Narmada Bachao Andolan", "Appiko Movement", "Tehri Dam Agitation"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "थॉमस रॉबर्ट माल्थस ने अपने सुप्रसिद्ध जनसंख्या सिद्धांत में जनसंख्या वृद्धि की तुलना किस गणितीय अनुपात से की है?", options: ["ज्यामितीय अनुपात (Geometric Progression)", "अंकगणितीय अनुपात", "हरात्मक अनुपात", "स्थिर अनुपात"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Thomas Robert Malthus, in his famous essay on population dynamics, postulated that human population grows in a:", options: ["Geometric Progression", "Arithmetic Progression", "Harmonic Progression", "Constant Ratio model"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "भारतीय ग्रामीण समाज में 'जजमानी व्यवस्था' (Jajmani System) का प्राथमिक कार्य क्या सुनिश्चित करना था?", options: ["विभिन्न जातियों के बीच आर्थिक और सामाजिक सेवाओं का पारंपरिक विनिमय", "कृषि भूमि का वितरण", "धार्मिक कर वसूलना", "विवाह संबंधों का संचालन"], correct: 0 },
{ subject: "sociology", lang: "en", question: "What was the primary structural function of the traditional 'Jajmani System' within rural Indian society?", options: ["The hereditary inter-caste exchange of socio-economic services", "Redistribution of agricultural lands", "Collection of centralized religious taxes", "Inter-caste marriage system supervision"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "'कास्ट इन मॉडर्न इंडिया' (Caste in Modern India) नामक सुप्रसिद्ध समाजशास्त्रीय पुस्तक के लेखक कौन हैं?", options: ["एम. एन. श्रीनिवास (M.N. Srinivas)", "जी. एस. घुरिये", "योगेंद्र सिंह", "एस. सी. दुबे"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Who authored the structurally highly acclaimed sociological academic book titled 'Caste in Modern India'?", options: ["M. N. Srinivas", "G. S. Ghurye", "Yogendra Singh", "S. C. Dube"], correct: 0 },

// ==========================================
// 6. मनोविज्ञान (Psychology) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "psychology", lang: "hi", question: "बुद्धि का 'बहुबुद्धि सिद्धांत' (Theory of Multiple Intelligences) किस मनोवैज्ञानिक द्वारा प्रतिपादित किया गया था?", options: ["हावर्ड गार्डनर (Howard Gardner)", "चार्ल्स स्पीयरमैन", "रॉबर्ट स्टर्नबर्ग", "लुईस थर्स्टन"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The widely accepted Theory of Multiple Intelligences was formulated by which psychological researcher?", options: ["Howard Gardner", "Charles Spearman", "Robert Sternberg", "Louis Thurstone"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "सिगमंड फ्रायड के अनुसार, व्यक्तित्व का वह कौन सा भाग जो 'आनंद के सिद्धांत' (Pleasure Principle) पर काम करता है?", options: ["इद् (Id)", "अहं (Ego)", "पराहं (Superego)", "चेतन मन"], correct: 0 },
{ subject: "psychology", lang: "en", question: "According to Sigmund Freud's psychoanalytic model, which aspect of personality operates on the 'Pleasure Principle'?", options: ["Id", "Ego", "Superego", "Conscious Mind"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "तनाव प्रबंधन की तकनीक के रूप में 'बायोफीडबैक' (Biofeedback) का मुख्य उद्देश्य क्या नियंत्रित करना होता है?", options: ["शरीर की अनैच्छिक शारीरिक क्रियाएं (जैसे रक्तचाप)", "अमूर्त सोच", "चेतन यादें", "सपनों का विश्लेषण"], correct: 0 },
{ subject: "psychology", lang: "en", question: "As a clinical methodology for stress management, the primary goal of the Biofeedback training cycle is to control:", options: ["Involuntary physiological bodily responses like blood pressure", "Abstract cognitive thoughts", "Conscious memory recall tracks", "Subconscious dream interpretation profiles"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "व्यक्तित्व मापन की 'रोशा मसीलक्ष्य परीक्षण' (Rorschach Inkblot Test) विधि किस श्रेणी के अंतर्गत आती है?", options: ["प्रक्षेपी तकनीकें (Projective Techniques)", "आत्म-प्रतिवेदन माप", "व्यवहारात्मक विश्लेषण", "परिस्थितिजन्य परीक्षण"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The standard personality assessment methodology called the Rorschach Inkblot Test falls under which category?", options: ["Projective Techniques", "Self-Report Inventories", "Behavioral Analysis systems", "Situational Testing profiles"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "गंभीर मानसिक विकार 'स्किज़ोफ्रेनिया' (Schizophrenia) शब्द का सर्वप्रथम प्रयोग किस मनोचिकित्सक द्वारा किया गया था?", options: ["यूजेन ब्लीउलर (Eugen Bleuler)", "सिगमंड फ्रायड", "एमिल क्रेपेलिन", "कार्ल जुंग"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The specific diagnostic mental health term 'Schizophrenia' was historically coined by which psychiatrist?", options: ["Eugen Bleuler", "Sigmund Freud", "Emil Kraepelin", "Carl Jung"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "मनोविज्ञान में बुद्धि लब्धि (IQ) की गणना करने का सही और प्रामाणिक सूत्र निम्नलिखित में से कौन सा है?", options: ["(मानसिक आयु / वास्तविक आयु) × 100", "(वास्तविक आयु / मानसिक आयु) × 100", "मानसिक आयु + वास्तविक आयु", "(मानसिक आयु / 100) × वास्तविक आयु"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Which mathematical formula correctly expresses the computation of the Intelligence Quotient (IQ) in psychometrics?", options: ["(Mental Age / Chronological Age) × 100", "(Chronological Age / Mental Age) × 100", "Mental Age + Chronological Age", "(Mental Age / 100) × Chronological Age"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "कार्ल रोजर्स और अब्राहम मास्लो द्वारा प्रतिपादित व्यक्तित्व सिद्धांत को किस दृष्टिकोण की श्रेणी में रखा जाता है?", options: ["मानवतावादी दृष्टिकोण (Humanistic Approach)", "मनोगतिक दृष्टिकोण", "व्यवहारवादी दृष्टिकोण", "विशेषक दृष्टिकोण"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The personality development frameworks pioneered by Abraham Maslow and Carl Rogers represent the:", options: ["Humanistic Approach", "Psychodynamic Perspective", "Behaviorist Framework", "Trait Psychology school"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "अवांछित या चिंताजनक विचारों को जानबूझकर चेतन मन से हटाकर अचेतन मन में धकेल देने की रक्षा युक्ति क्या कहलाती है?", options: ["दमन (Repression)", "विस्थापन", "प्रक्षेपण", "युक्तिकरण"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The psychological defense mechanism involving the unconscious forcing of unwanted anxiety-inducing thoughts out of awareness is:", options: ["Repression", "Displacement", "Projection", "Rationalization"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "अति-सक्रियता और ध्यान केंद्रित न कर पाने की समस्या वाले बच्चों में किस विकार का निदान (Diagnosis) किया जाता है?", options: ["ADHD (ध्यान अभाव अतिसक्रियता विकार)", "आटिज़्म", "डिस्लेक्सिया", "अवसाद"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Children displaying persistent patterns of severe inattention and hyperactive behavioral tendencies are diagnosed with:", options: ["ADHD (Attention-Deficit/Hyperactivity Disorder)", "Autism Spectrum Disorder", "Dyslexia cognitive condition", "Clinical Depression"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "अल्बर्ट एलिस द्वारा प्रतिपादित 'REBT' चिकित्सा पद्धति का पूरा नाम मनोवैज्ञानिक रूप से क्या है?", options: ["रेशनल इमोटिव बिहेवियर थेरेपी", "रैपिड इमोशन बिहेवियर ट्रीटमेंट", "रेडिकल एम्पैथी बिहेवियर थेरेपी", "रेशनल इफेक्टिव बिहेवियर थेरेपी"], correct: 0 },
{ subject: "psychology", lang: "en", question: "What is the full expansion of the acronym 'REBT' developed as a clinical therapy model by Albert Ellis?", options: ["Rational Emotive Behavior Therapy", "Rapid Emotion Behavior Treatment", "Radical Empathy Behavior Therapy", "Rational Effective Behavior Therapy"], correct: 0 },

// ==========================================
// 7. गृह विज्ञान (Home Science) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "home_science", lang: "hi", question: "शिशुओं को पूरक आहार (Supplementary Feeding) देना किस आयु वर्ग से अनिवार्य रूप से प्रारंभ कर देना चाहिए?", options: ["6 महीने की आयु से", "3 महीने की आयु से", "1 वर्ष की आयु से", "9 महीने की आयु से"], correct: 0 },
{ subject: "home_science", lang: "en", question: "At what specific milestone age should solid supplementary feeding be introduced alongside breast milk for infants?", options: ["6 months of age", "3 months of age", "1 year of age", "9 months of age"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "खाद्य पदार्थों में मिलावट की रोकथाम के लिए भारत सरकार द्वारा पारित 'PFA अधिनियम' किस वर्ष लागू किया गया था?", options: ["1954", "1960", "1947", "1972"], correct: 0 },
{ subject: "home_science", lang: "en", question: "The Prevention of Food Adulteration Act (PFA) was introduced and enacted by the Parliament in which year?", options: ["1954", "1960", "1947", "1972"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "मानव शरीर में रक्त के थक्के जमने (Blood Clotting) के लिए कौन सा विटामिन प्राथमिक रूप से उत्तरदायी होता है?", options: ["विटामिन K", "विटामिन A", "विटामिन E", "विटामिन C"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Which specific oil-soluble vitamin plays an absolute critical role in the human biological blood clotting cascade?", options: ["Vitamin K", "Vitamin A", "Vitamin E", "Vitamin C"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "वस्त्रों की धुलाई में प्रयुक्त होने वाले 'नील' (Blueing Agent) का प्राथमिक उद्देश्य क्या होता है?", options: ["सफेद सूती वस्त्रों का पीलापन दूर कर चमक लाना", "वस्त्रों को कड़ा करना", "धूल के कणों को हटाना", "वस्त्रों को कीड़ों से बचाना"], correct: 0 },
{ subject: "home_science", lang: "en", question: "What is the primary aesthetic purpose of using a blueing agent (Neel) while laundering pristine white cotton textiles?", options: ["To counteract the natural yellowing of white fabrics", "To provide stiffening to the cotton fibers", "To extract dust particles from deep within the weaves", "To shield the fabrics from textile insect infestations"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "बच्चों में प्रोटीन की गंभीर कमी के कारण होने वाले कुपोषण रोग को क्या कहा जाता है?", options: ["क्वाशियोरकर (Kwashiorkor)", "स्कर्वी", "रिकेट्स", "बेरी-बेरी"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Which clinically severe malnutrition disease is caused explicitly due to chronic protein deficiency in early childhood?", options: ["Kwashiorkor", "Scurvy", "Rickets", "Beriberi"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "किन्हीं दो या दो से अधिक वस्त्रों के तंतुओं को मिलाकर बनाए गए धागे को वस्त्र विज्ञान में क्या कहते हैं?", options: ["मिश्रित धागा या ब्लेंडेड यार्न", "एकल धागा", "फिलामेंट यार्न", "स्पन यार्न"], correct: 0 },
{ subject: "home_science", lang: "en", question: "A structural textile thread manufactured by spinning two or more structurally distinct types of fibers together is a:", options: ["Blended Yarn", "Single Filament Yarn", "Continuous Extrusion Yarn", "Spun Core Yarn"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "फलों और सब्जियों को लंबे समय तक सुरक्षित रखने के लिए 'जैम या जेली' बनाते समय किस प्राकृतिक परिरक्षक (Preservative) का उपयोग होता है?", options: ["चीनी की उच्च सांद्रता", "सोडियम क्लोराइड", "सिरका", "सिरके का तेजाब"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Which natural preservative parameter is fundamentally exploited during the industrial processing of fruit jams and jellies?", options: ["High concentration of Sugar", "Sodium chloride solution", "Vinegar concentrate", "Acetic acid synthetic drops"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "नवजात शिशु के जन्म के तुरंत बाद माता के स्तनों से निकलने वाले गाढ़े पीले दूध को क्या कहा जाता है?", options: ["कोलोस्ट्रम या खीस (Colostrum)", "पूरक दूध", "टोन्ड मिल्क", "पाश्चुरीकृत दूध"], correct: 0 },
{ subject: "home_science", lang: "en", question: "The thick immunologically rich yellowish initial milk secreted by the mother's mammary glands immediately post-birth is:", options: ["Colostrum", "Supplementary Formula", "Toned Dairy fluid", "Pasteurized liquid milk"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "दालों में प्राकृतिक रूप से पाए जाने वाले किस विषैले तत्व को पकाने और अंकुरित करने से निष्क्रिय किया जा सकता है?", options: ["ट्रिप्सिन इनहिबिटर (Trypsin Inhibitors)", "कैफीन", "सोलानिन", "ऑक्सालेट लवण"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Which anti-nutritional chemical factor inherently present in pulses can be safely deactivated via soaking and boiling?", options: ["Trypsin Inhibitors", "Caffeine compounds", "Solanine elements", "Oxalate mineral salts"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "उपभोक्ता संरक्षण अधिनियम (COPRA) भारत सरकार द्वारा किस वर्ष उपभोक्ताओं के अधिकारों की सुरक्षा हेतु पारित किया गया था?", options: ["1986", "2005", "1992", "2011"], correct: 0 },
{ subject: "home_science", lang: "en", question: "The landmark historical Consumer Protection Act (COPRA) was introduced by the Union Government in which year?", options: ["1986", "2005", "1992", "2011"], correct: 0 },

// ==========================================
// 8. दर्शनशास्त्र (Philosophy) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "philosophy", lang: "hi", question: "बौद्ध दर्शन के अनुसार संसार के सभी दुखों का मूल कारण 'अविद्या' से उत्पन्न किस चक्र को माना गया है?", options: ["प्रतीत्यसमुत्पाद (Pratityasamutpada)", "क्षणभंगुरवाद", "स्याद्वाद", "अनेकांतवाद"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "The cornerstone analytical doctrine of dependent origination in Buddhist philosophy is officially termed:", options: ["Pratityasamutpada", "Kshanabhanguravada", "Syadvada", "Anekantavada"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "श्रीमद्भगवद्गीता के अनुसार 'स्थितप्रज्ञ' (Sthitaprajna) शब्द का वास्तविक दार्शनिक तात्पर्य क्या है?", options: ["सुख-दुख और लाभ-हानि में स्थिर बुद्धि वाला व्यक्ति", "अत्यंत ज्ञानी सन्यासी", "युद्ध करने वाला वीर", "वेदों का ज्ञाता"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "According to the theological dictates of the Bhagavad Gita, the philosophical state of 'Sthitaprajna' refers to a person:", options: ["Whose intellect remains completely equanimous in pleasure and pain", "Who formally renounces society as an ascetic", "Who fights courageously as a warrior", "Who possesses masterful literacy of all Vedic texts"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "अद्वैत वेदांत दर्शन के मुख्य प्रवर्तक आचार्य कौन हैं जिन्होंने 'ब्रह्म सत्यं जगन्मिथ्या' का उद्घोष किया?", options: ["आदि शंकराचार्य", "रामानुजाचार्य", "मध्वाचार्य", "वल्लभाचार्य"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "Who is the historic founding philosopher of the Advaita Vedanta school who famously proclaimed the ultimate reality of Brahman?", options: ["Adi Shankaracharya", "Ramanujacharya", "Madhvacharya", "Vallabhacharya"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "चार्वक दर्शन (Charvaka Philosophy) को भारतीय दर्शन की किस श्रेणी के अंतर्गत पूरी तरह रखा जाता है?", options: ["नास्तिक और भौतिकवादी दर्शन", "आस्तिक दर्शन", "रूढ़िवादी वेदांत", "रहस्यवादी संप्रदाय"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "The philosophical system of Charvaka is positioned within which epistemological categorization of Indian thought?", options: ["Nastika and purely Materialist philosophy", "Astika orthodoxy school", "Conservative Vedanta track", "Mystical spiritual sect"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "महर्षि पतंजलि द्वारा प्रतिपादित 'अष्टांग योग' (Eightfold Yoga) का प्रथम और बुनियादी सोपान निम्नलिखित में से कौन सा है?", options: ["यम (Yama)", "नियम", "आसन", "प्राणायाम"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "What represents the absolute initial structural stage or limb of the classical Ashtanga Yoga path formulated by Maharishi Patanjali?", options: ["Yama", "Niyama", "Asana", "Pranayama"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "सुकरात की दार्शनिक पद्धति, जिसमें संवाद और प्रश्नों के माध्यम से सत्य को उजागर किया जाता है, क्या कहलाती है?", options: ["द्वंद्वात्मक या धात्री पद्धति (Maieutic/Socratic Method)", "संदेह पद्धति", "अनुभववादी पद्धति", "बुद्धिवादी पद्धति"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "The distinct philosophical methodology of Socrates utilizing structured questioning and dialogues to unveil truth is called the:", options: ["Socratic / Maieutic Method", "Cartesian Method of Doubt", "Empiricist Investigation process", "Rationalist Deduction system"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "कांट के नीतिशास्त्र (Kant's Ethics) के अनुसार वह सर्वोच्च नैतिक नियम क्या कहलाता है जो बिना किसी शर्त के सर्वव्यापी है?", options: ["निरपेक्ष आदेश (Categorical Imperative)", "सशर्त आदेश", "उपयोगितावाद नियम", "आत्म-साक्षात्कार"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "In Immanuel Kant's deontological framework, the supreme objective moral law binding upon all rational agents unconditionally is the:", options: ["Categorical Imperative", "Hypothetical Imperative", "Utilitarian Maxim", "Self-Realization mandate"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "न्याय दर्शन (Nyaya Philosophy) के प्रवर्तक महर्षि अक्षपाद गौतम के अनुसार ज्ञान प्राप्ति के कुल कितने प्रमाण स्वीकार किए गए हैं?", options: ["चार प्रमाण (प्रत्यक्ष, अनुमान, उपमान, शब्द)", "दो प्रमाण", "छह प्रमाण", "केवल एक प्रमाण"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "How many valid instruments of true knowledge (Pramanas) are formally validated within the Nyaya school of philosophy?", options: ["Four Pramanas (Pratyaksha, Anumana, Upamana, Shabda)", "Two Pramanas exclusively", "Six Pramanas in total", "A single empirical Pramana"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "उपयोगितावाद (Utilitarianism) के नैतिक सिद्धांत का मूल नारा 'अधिकतम व्यक्तियों का अधिकतम सुख' किसने प्रतिपादित किया था?", options: ["जर्मी बेंथम और जॉन स्टुअर्ट मिल", "इमैनुएल कांट", "डेविड ह्यूम", "थॉमस हॉब्स"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "The core ethical maxim of Utilitarianism advocating the 'greatest happiness of the greatest number' was championed by:", options: ["Jeremy Bentham and John Stuart Mill", "Immanuel Kant", "David Hume", "Thomas Hobbes"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "वैशेषिक दर्शन के अनुसार संपूर्ण भौतिक जगत का निर्माण किस सूक्ष्म अविभाज्य इकाई से हुआ है जिसके प्रवर्तक महर्षि कणाद हैं?", options: ["परमाणु (Atom/Anu)", "आकाश तत्व", "प्रकृति तत्व", "जीवात्मा"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "According to the Vaisheshika school founded by Maharishi Kanada, the structural universe is fundamentally constructed from:", options: ["Paramanu / Indivisible Atoms", "Akasha ether elements", "Prakriti matrix", "Jivatma cosmic units"], correct: 0 },

// ==========================================
// 9. कानूनी अध्ययन (Legal Studies) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "legal_studies", lang: "hi", question: "भारतीय संविधान का कौन सा अनुच्छेद सुप्रीम कोर्ट को मौलिक अधिकारों के प्रवर्तन के लिए रिट जारी करने की शक्ति देता है?", options: ["अनुच्छेद 32", "अनुच्छेद 226", "अनुच्छेद 136", "अनुच्छेद 142"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Which article of the Indian Constitution empowers the Supreme Court to issue Writs for the enforcement of fundamental rights?", options: ["Article 32", "Article 226", "Article 136", "Article 142"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "कानूनी भाषा में प्रयुक्त सुप्रसिद्ध लैटिन कहावत 'Actus non facit reum nisi mens sit rea' का वास्तविक कानूनी अर्थ क्या है?", options: ["केवल कोई कार्य किसी को तब तक दोषी नहीं बनाता जब तक कि उसका मन भी अपराधी न हो (Mens Rea)", "कानून की अज्ञानता कोई बहाना नहीं है", "न्यायालय गवाहों पर भरोसा करता है", "सजा केवल अपराध के अनुपात में होनी चाहिए"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "What is the accurate jurisprudential interpretation of the Latin legal maxim 'Actus non facit reum nisi mens sit rea'?", options: ["An act does not make a person legally guilty unless their mind is also legally guilty", "Ignorance of statutory law excuses no individual", "The court relies exclusively on documentary evidence", "Punishment must fit the intensity of the crime committed"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "भारत में वैकल्पिक विवाद समाधान (ADR) के तहत लोक अदालतों को किस अधिनियम के तहत वैधानिक दर्जा दिया गया है?", options: ["विधिक सेवा प्राधिकरण अधिनियम 1987", "मध्यस्थता और सुलह अधिनियम 1996", "नागरिक प्रक्रिया संहिता 1908", "लोक न्याय सुरक्षा कानून"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Under which specific central statute are Lok Adalats granted absolute official statutory standing in India?", options: ["Legal Services Authorities Act 1987", "Arbitration and Conciliation Act 1996", "Civil Procedure Code 1908", "Public Justice Enforcement Code"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "संपत्ति के अधिकार (Right to Property) को किस संविधान संशोधन द्वारा मौलिक अधिकारों की सूची से हटाकर कानूनी अधिकार बनाया गया?", options: ["44वां संविधान संशोधन (1978)", "42वां संविधान संशोधन", "86वां संविधान संशोधन", "24वां संविधान संशोधन"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "By which constitutional amendment was the Right to Property officially deleted from the list of Fundamental Rights?", options: ["44th Amendment (1978)", "42nd Amendment", "86th Amendment", "24th Amendment"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "अंतरराष्ट्रीय न्यायालय (ICJ) में न्यायाधीशों का चुनाव संयुक्त राष्ट्र महासभा और सुरक्षा परिषद द्वारा कितने वर्षों के कार्यकाल के लिए किया जाता है?", options: ["9 वर्ष", "5 वर्ष", "7 वर्ष", "10 वर्ष"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Judges presiding over the benches of the International Court of Justice (ICJ) are elected for a term of how many years?", options: ["9 years", "5 years", "7 years", "10 years"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "भारतीय साक्ष्य अधिनियम (Indian Evidence Act) के तहत किसी अभियुक्त द्वारा पुलिस हिरासत में दी गई स्वीकारोक्ति (Confession) की कानूनी स्थिति क्या है?", options: ["अदालत में साक्ष्य के रूप में पूरी तरह अग्राह्य (Not Admissible)", "पूरी तरह ग्राह्य", "न्यायाधीश के विवेक पर निर्भर", "केवल दीवानी मामलों में मान्य"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "What is the statutory admissibility of a confession made by an accused while under direct custody of a police officer?", options: ["It is strictly not admissible as evidence in a court of law", "It is fully admissible without corroboration", "Admissibility rests entirely on the judge's personal discretion", "It holds valid recognition across civil matters only"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "किशोरावस्था के अपराधियों के पुनर्वास और न्याय के लिए भारत में कौन सा विशेष कानून संचालित है?", options: ["किशोर न्याय (बालकों की देखरेख और संरक्षण) अधिनियम", "बाल श्रम निषेध कानून", "पोक्सो (POCSO) अधिनियम", "बाल अधिकार संरक्षण कोड"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Which comprehensive specialized penal legislation governs the trial and institutional rehabilitation of juvenile offenders in India?", options: ["Juvenile Justice (Care and Protection of Children) Act", "Child Labour Prohibition Act", "POCSO Act implementation paths", "Protection of Child Rights code"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "भारत के महान्यायवादी (Attorney General for India) की नियुक्ति का प्रावधान संविधान के किस अनुच्छेद के तहत राष्ट्रपति द्वारा किया जाता है?", options: ["अनुच्छेद 76", "अनुच्छेद 148", "अनुच्छेद 165", "अनुच्छेद 280"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Under which article of the Constitution of India does the President officially appoint the Attorney General for India?", options: ["Article 76", "Article 148", "Article 165", "Article 280"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "मानव अधिकारों की सार्वभौमिक घोषणा (UDHR) को संयुक्त राष्ट्र महासभा द्वारा किस वर्ष और किस तारीख को अंगीकार किया गया था?", options: ["10 दिसंबर 1948", "24 अक्टूबर 1945", "26 जनवरी 1950", "15 अगस्त 1947"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "On which exact date and year did the United Nations General Assembly officially adopt the Universal Declaration of Human Rights (UDHR)?", options: ["10 December 1948", "24 October 1945", "26 January 1950", "15 August 1947"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "भारत में पर्यावरण संरक्षण के मुकदमों के त्वरित निपटारे के लिए गठित 'राष्ट्रीय हरित अधिकरण' (NGT) का मुख्यालय कहाँ है?", options: ["नई दिल्ली", "मुंबई", "चेन्नई", "कोलकाता"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Where is the principal official benchmark seat or headquarters of the National Green Tribunal (NGT) situated in India?", options: ["New Delhi", "Mumbai", "Chennai", "Kolkata"], correct: 0 },

// ==========================================
// 10. हिंदी साहित्य (Hindi Literature) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "hindi_lit", lang: "hi", question: "आचार्य रामचंद्र शुक्ल ने हिंदी साहित्य के इतिहास को चार कालों में बांटते हुए 'वीरगाथा काल' किसे नाम दिया था?", options: ["आदिकाल को", "भक्तिकल को", "रीतिकाल को", "आधुनिक काल को"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "In his canonical history of Hindi literature, Acharya Ramchandra Shukla designated 'Veergatha Kaal' to which era?", options: ["Aadi Kaal", "Bhakti Kaal", "Reeti Kaal", "Aadhunik Kaal"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "मैथिलीशरण गुप्त द्वारा रचित वह कौन सा प्रसिद्ध राष्ट्रभक्ति काव्य है जिसके कारण उन्हें 'राष्ट्रकवि' की उपाधि मिली?", options: ["भारत-भारती", "साकेत", "यशोधरा", "पंचवटी"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Which iconic patriotic poetic text written by Maithilisharan Gupt earned him the title of 'Rashtrakavi'?", options: ["Bharat-Bharati", "Saket", "Yashodhara", "Panchavati"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "सूरदास की सुप्रसिद्ध प्रामाणिक काव्य कृति 'सूरसागर' का मुख्य आधार उपजीव्य ग्रंथ कौन सा माना जाता है?", options: ["श्रीमद्भागवत पुराण", "महाभारत", "वाल्मीकि रामायण", "गीत गोविंद"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Which primary classical text serves as the baseline sub-textual source for Surdas' masterpiece composition 'Sursagar'?", options: ["Srimad Bhagavata Purana", "Mahabharata", "Valmiki Ramayana", "Gita Govinda"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "उपन्यास सम्राट मुंशी प्रेमचंद द्वारा रचित अंतिम और सबसे महत्वपूर्ण पूर्ण उपन्यास कौन सा माना जाता है?", options: ["गोदान (Godan)", "गबन", "रंगभूमि", "सेवासदन"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Which book is widely celebrated as the final completed masterpiece novel written by Munshi Premchand?", options: ["Godan", "Gaban", "Rangbhoomi", "Sevasadan"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "आधुनिक हिंदी कविता के विकास में 'सरस्वती' पत्रिका के यशस्वी संपादक के रूप में किसने युगांतकारी भूमिका निभाई?", options: ["आचार्य महावीर प्रसाद द्विवेदी", "भारतेंदु हरिश्चंद्र", "बाबू श्यामसुंदर दास", "जयशंकर प्रसाद"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Who executed a monumental historical role as the long-term editor of the monthly magazine 'Saraswati'?", options: ["Acharya Mahavir Prasad Dwivedi", "Bharatendu Harishchandra", "Babu Shyamsundar Das", "Jaishankar Prasad"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "मलिक मुहम्मद जायसी द्वारा रचित 'पद्मावत' महाकाव्य मूल रूप से हिंदी साहित्य की किस बोली में लिखा गया है?", options: ["अवधी", "ब्रजभाषा", "खड़ीबोली", "मैथिली"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "The epic masterpiece poem 'Padmavat' written by Malik Muhammad Jayasi was originally composed in which dialect?", options: ["Awadhi", "Brajbhasha", "Khadiboli", "Maithili"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "रीतिकाल के किस प्रसिद्ध कवि ने अपनी एकमात्र कृति 'सतसई' के माध्यम से हिंदी साहित्य में अमरता प्राप्त की?", options: ["कवि विहारी (Bihari)", "घनानंद", "भूषण", "केशवदास"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Which famous poet of the Reeti era attained immortality in Hindi literature through a single composition named 'Satsai'?", options: ["Kavi Bihari", "Ghananand", "Bhushan", "Keshavdas"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "महादेवी वर्मा को उनकी किस उत्कृष्ट पद्य संकलन रचना के लिए भारतीय ज्ञानपीठ पुरस्कार से सम्मानित किया गया था?", options: ["यामा (Yama)", "नीहार", "रश्मि", "सांध्यगीत"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "For which remarkable poetic compilation was Mahadevi Verma officially honored with the prestigious Jnanpith Award?", options: ["Yama", "Nihar", "Rashmi", "Sandhyageet"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "हिंदी का प्रथम प्रामाणिक महाकाव्य (First Epic Poem) आचार्य रामचंद्र शुक्ल के अनुसार कौन सा माना जाता है?", options: ["पृथ्वीराज रासो", "विसलदेव रासो", "रामचरितमानस", "खुमान रासो"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Which composition is officially documented by Acharya Ramchandra Shukla as the first authentic epic poem in Hindi literature?", options: ["Prithviraj Raso", "Bisaldeo Raso", "Ramcharitmanas", "Khuman Raso"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "भूषण किस काव्य धारा के कवि हैं जिन्होंने छत्रसाल और शिवाजी की वीरता पर प्रसिद्ध वीर रस की कविताएँ लिखीं?", options: ["रीतिबद्ध काव्यधारा", "रीतिमुक्त काव्यधारा", "रीतिसिद्ध काव्यधारा", "संत काव्यधारा"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Kavi Bhushan, celebrated for his intense war poetry glorifying Shivaji and Chhatrasal, belonged to which school of Reeti Kaal?", options: ["Reetibaddh Kavyadhara", "Reetimukt Kavyadhara", "Reetisiddh Kavyadhara", "Sant Kavyadhara"], correct: 0 },

// ==========================================
// 11. अंग्रेजी साहित्य (English Literature) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "english_lit", lang: "hi", question: "विलियम शेक्सपियर के सुप्रसिद्ध नाटक 'मैकबेथ' (Macbeth) में चुड़ैलों की भविष्यवाणी किस गहरे मानवीय दोष को दर्शाती है?", options: ["अंधी महत्वाकांक्षा (Blind Ambition)", "अत्यधिक ईर्ष्या", "कायरता", "पारिवारिक प्रतिशोध"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "What is the primary human psychological flaw that drives the tragic character arc in William Shakespeare's 'Macbeth'?", options: ["Blind and vaulting ambition", "Overwhelming romantic jealousy", "Inherent psychological cowardice", "Inter-generational family revenge"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "अंग्रेजी स्वच्छंदतावाद (Romanticism) की शुरुआत वर्ष 1798 में किस काव्य संकलन के प्रकाशन से मानी जाती है?", options: ["लिरिकल बैलेड्स (Lyrical Ballads)", "प्रील्यूड", "ओड टू द वेस्ट विंड", "एलिजी रिटन इन ए कंट्री चर्चयार्ड"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "The official inception of Romanticism in English poetry is marked by the 1798 joint publication of:", options: ["Lyrical Ballads", "The Prelude", "Ode to the West Wind", "Elegy Written in a Country Churchyard"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "महान नाटककार जॉर्ज बर्नार्ड शॉ द्वारा रचित सुप्रसिद्ध व्यंग्यात्मक नाटक कौन सा है जिसमें वर्ग भेद पर चोट की गई है?", options: ["पिगमैलियन (Pygmalion)", "मैन एंड सुपरमैन", "आर्म्स एंड द मैन", "कैंडिडा"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Which globally celebrated analytical satirical play exposing class distinctions was authored by George Bernard Shaw?", options: ["Pygmalion", "Man and Superman", "Arms and the Man", "Candida"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "अंग्रेजी कविता के इतिहास में प्रसिद्ध 'सोनिट' (Sonnet) कविता में अनिवार्य रूप से कुल कितनी पंक्तियाँ होती हैं?", options: ["14 पंक्तियाँ", "12 पंक्तियाँ", "16 पंक्तियाँ", "10 पंक्तियाँ"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "A classical Sonnet within the structural metrics of English poetry consists of a fixed length of exactly how many lines?", options: ["14 lines", "12 lines", "16 lines", "10 lines"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "जॉर्ज ऑरवेल द्वारा रचित वह कौन सा प्रसिद्ध राजनीतिक रूपक (Allegorical Novel) उपन्यास है जो तानाशाही व्यवस्था पर तीखा प्रहार है?", options: ["एनिमल फ़ार्म (Animal Farm)", "1984", "ब्रेव न्यू वर्ल्ड", "द रूनिक कोड"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Which famous dystopian anti-utopian allegorical novella satirical piece targeting totalitarian regimes was authored by George Orwell?", options: ["Animal Farm", "1984", "Brave New World", "The Runic Code"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "प्रसिद्ध रोमैंटिक कवि जॉन कीट्स की कविता 'ओड ऑन ए ग्रीशियन अर्न' की अमर पंक्ति निम्नलिखित में से कौन सी है?", options: ["सत्य ही सौंदर्य है, सौंदर्य ही सत्य है", "प्रकृति कभी धोखा नहीं देती", "मानव निर्मित शहर नर्क की तरह हैं", "जीना ही अपने आप में एक कला है"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Which universally quoted aesthetic philosophy line features at the conclusion of John Keats' 'Ode on a Grecian Urn'?", options: ["Beauty is truth, truth beauty", "Nature never did betray the heart that loved her", "A thing of beauty is a joy forever statement", "To be or not to be is the question"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "अंग्रेजी के किस प्रख्यात लेखक ने औपनिवेशिक भारत की पृष्ठभूमि पर प्रसिद्ध उपन्यास 'ए पैसेज टू इंडिया' लिखा था?", options: ["ई. एम. फोस्टर (E.M. Forster)", "रुडयार्ड किपलिंग", "जोसफ कॉनराड", "ग्राहम ग्रीन"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Which acclaimed British author penned the historic pre-independence analytical narrative titled 'A Passage to India'?", options: ["E.M. Forster", "Rudyard Kipling", "Joseph Conrad", "Graham Greene"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "अमेरिकी साहित्य के इतिहास में 'द ओल्ड मैन एंड द सी' उपन्यास के लिए नोबेल पुरस्कार पाने वाले लेखक कौन हैं?", options: ["अर्नेस्ट हेमिंग्वे (Ernest Hemingway)", "मार्क ट्वेन", "विलियम फॉल्कनर", "रॉबर्ट फ्रॉस्ट"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Who authored the structurally tight classic fishing novella 'The Old Man and the Sea', securing a Nobel Prize in Literature?", options: ["Ernest Hemingway", "Mark Twain", "William Faulkner", "Robert Frost"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "अंग्रेजी निबंध साहित्य के विकास में 'फादर ऑफ इंग्लिश एस्से' (Father of English Essays) किसे कहा जाता है?", options: ["फ्रांसिस बेकन (Francis Bacon)", "चार्ल्स लैम्ब", "जोसफ एडिसन", "रिचर्ड स्टील"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Which iconic British renaissance intellectual is highly venerated as the 'Father of English Essays'?", options: ["Francis Bacon", "Charles Lamb", "Joseph Addison", "Richard Steele"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "टी. एस. एलियट द्वारा रचित बीसवीं सदी की सबसे महत्वपूर्ण आधुनिकतावादी लंबी कविता का शीर्षक क्या है?", options: ["द वेस्ट लैंड (The Waste Land)", "फोर क्वाटैट्स", "द लव सॉन्ग ऑफ जे. अल्फ्रेड प्रुफ्रॉक", "ऐश वेडनेसडे"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Which structural masterpiece long poem published in 1922 by T.S. Eliot is heralded as a cornerstone of Modernist poetry?", options: ["The Waste Land", "Four Quartets", "The Love Song of J. Alfred Prufrock", "Ash Wednesday"], correct: 0 },

// ==========================================
// 12. लेखाकर्म (Accountancy) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "accountancy", lang: "hi", question: "आय-व्यय खाता (Income and Expenditure Account) गैर-व्यापारिक संस्थाओं द्वारा किस आधार पर तैयार किया जाता है?", options: ["उपार्जन आधार पर (Accrual Basis)", "नकद आधार पर", "लागत आधार पर", "अनुमानित आधार पर"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "The Income and Expenditure Account of a Non-Profit Organization (NPO) is strictly configured utilizing the:", options: ["Accrual Basis of accounting", "Cash Basis of accounting", "Historical Cost convention", "Estimated Cost forecasting matrix"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "कम्पनी द्वारा जब्त किए गए अंशों के पुनर्निर्गमन (Re-issue of Forfeited Shares) के बाद शेयर जब्ती खाते के शेष को कहाँ स्थानांतरित किया जाता है?", options: ["पूंजी आरक्षित खाता (Capital Reserve Account)", "सामान्य आरक्षित खाता", "लाभ-हानि विवरणी", "अंश पूंजी खाता"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Post the successful re-issue of forfeited corporate shares, the net credit balance of the Share Forfeiture Account is routed to:", options: ["Capital Reserve Account", "General Reserve Account", "Statement of Profit and Loss", "Share Capital Account ledger"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "तरलता विश्लेषण के लिए प्रयुक्त 'त्वरित अनुपात' (Liquid Ratio/Quick Ratio) की गणना करते समय चालू संपत्तियों में से किसे घटाया जाता है?", options: ["स्टॉक और पूर्वदत्त व्यय (Stock and Prepaid Expenses)", "लेनदार", "बैंक ओवरड्राफ्ट", "अल्पकालिक निवेश"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "While extracting Quick Assets from Current Assets to compute the Liquid Ratio, which components are excluded?", options: ["Inventory / Stock and Prepaid Expenses", "Trade Creditors adjustments", "Bank Overdraft margins", "Short-term marketable securities"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "साझेदार की सेवानिवृत्ति या मृत्यु पर उसके हिस्से के लाभ को शेष साझेदारों द्वारा प्राप्त करने का अनुपात क्या कहलाता है?", options: ["फायदा अनुपात या लाभ प्राप्ति अनुपात (Gaining Ratio)", "त्याग अनुपात", "पुराना अनुपात", "पूंजी अनुपात"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Upon the formal retirement or unfortunate demise of a partner, the ratio in which the continuing partners acquire the departing partner's profit share is the:", options: ["Gaining Ratio", "Sacrificing Ratio", "Old Profit Sharing Ratio", "Capital Ratio setup"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "ऋणपत्रों के निर्गमन पर दी गई कटौती या हानि (Discount/Loss on Issue of Debentures) को वित्तीय विवरण में कहाँ दिखाया जाता है?", options: ["अन्य गैर-चालू संपत्तियों या आस्थगित राजस्व व्यय के तहत", "चालू दायित्वों के तहत", "अंशधारक निधि के तहत कटौती", "कम्पनी के सुरक्षित ऋणों के तहत"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Unamortized Discount or Loss incurred on the issue of long-term Debentures is historically classified in the Balance Sheet under:", options: ["Other Non-Current Assets / Deferred Revenue Expenditure", "Current Liabilities portfolio", "Deductions from Shareholders' Funds", "Secured Corporate Loans schedule"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "एक कम्पनी अधिनियम 2013 के अनुसार वित्तीय विवरणों की संरचना और प्रारूप किस अनुसूची (Schedule) के तहत अनिवार्य किया गया है?", options: ["अनुसूची III (Schedule III)", "अनुसूची V", "अनुसूची I", "अनुसूची VI"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "The statutory format guidelines regulating the structural layout of corporate financial statements are mandated under which Schedule of the Indian Companies Act 2013?", options: ["Schedule III", "Schedule V", "Schedule I", "Schedule VI"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "रोकड़ प्रवाह विवरण (Cash Flow Statement) तैयार करते समय 'लाभांश भुगतान' (Dividend Paid) को किस गतिविधि के अंतर्गत वर्गीकृत किया जाता है?", options: ["वित्तीय गतिविधि (Financing Activity)", "संचालन गतिविधि", "निवेश गतिविधि", "गैर-नकद गतिविधि"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Under which cash operational classification is the corporate payout of 'Dividends Paid' accounted for inside a Cash Flow Statement?", options: ["Financing Activity", "Operating Activity", "Investing Activity", "Non-Cash Transaction cycle"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "फर्म के पुनर्गठन पर किसी अनअंकित संपत्ति (Unrecorded Asset) को खातों में लाने की प्रविष्टि किस खाते के क्रेडिट पक्ष में की जाती है?", options: ["पुनर्मूल्यांकन खाता (Revaluation Account)", "साझेदारों का पूंजी खाता", "वसूली खाता", "रोकड़ खाता"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "The formal accounting integration of an Unrecorded Asset during a partnership firm revaluation is credited directly to the:", options: ["Revaluation Account", "Partners' Capital Account", "Realisation Account", "Cash Account ledger"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "ऋणपत्रों का वह प्रकार क्या कहलाता है जिन्हें एक निश्चित समयावधि के बाद समता अंशों (Equity Shares) में परिवर्तित करने का विकल्प होता है?", options: ["परिवर्तनीय ऋणपत्र (Convertible Debentures)", "अपरिवर्तनीय ऋणपत्र", "शोधनीय ऋणपत्र", "पंजीकृत ऋणपत्र"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Debentures that carry an explicit legal option allowing conversion into corporate Equity Shares after a specified tenure are:", options: ["Convertible Debentures", "Non-Convertible Debentures", "Redeemable Debentures", "Registered Debentures structural setups"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "खेती-बाड़ी या विनिर्माण उद्योगों में प्रयुक्त प्लांट और मशीनरी पर क्रमिक मूल्यह्रास (Depreciation) लगाना किस लेखांकन परंपरा के तहत अनिवार्य है?", options: ["मिलान की अवधारणा (Matching Concept)", "रूढ़िवादिता की परंपरा", "मुद्रा मापन की अवधारणा", "द्वि-पक्षीय अवधारणा"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Charging persistent Depreciation on operational manufacturing plant and machinery across accounting terms satisfies the operational directives of the:", options: ["Matching Concept", "Prudence / Conservatism Convention", "Money Measurement Concept", "Dual Aspect Principle"], correct: 0 },

// ==========================================
// 13. व्यावसायिक अध्ययन (Business Studies) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "business", lang: "hi", question: "प्रसिद्ध प्रबंध शास्त्री हेनरी फेयोल द्वारा औद्योगिक संचालन के संदर्भ में प्रबंध के कुल कितने बुनियादी सिद्धांत प्रतिपादित किए गए हैं?", options: ["14 सिद्धांत (14 Principles)", "10 सिद्धांत", "12 सिद्धांत", "7 सिद्धांत"], correct: 0 },
{ subject: "business", lang: "en", question: "How many foundational structural principles of general management were introduced and documented by Henri Fayol?", options: ["14 Principles", "10 Principles", "12 Principles", "7 Principles"], correct: 0 },
{ subject: "business", lang: "hi", question: "प्रबंध का वह कौन सा व्यवस्थित तंत्र है जिसके द्वारा विभिन्न विभागों की क्रियाओं में एकता और सामंजस्य स्थापित किया जाता है?", options: ["समन्वय (Coordination)", "नियोजन", "निर्देशन", "नियुक्तीकरण"], correct: 0 },
{ subject: "business", lang: "en", question: "Which operational function or binding force is hailed as the absolute essence of management, integrating distinct departmental tasks?", options: ["Coordination", "Planning", "Directing", "Staffing processes"], correct: 0 },
{ subject: "business", lang: "hi", question: "वैज्ञानिक प्रबंध (Scientific Management) के जनक के रूप में किस प्रख्यात मैकेनिकल इंजीनियर को व्यावसायिक अध्ययन में जाना जाता है?", options: ["एफ. डब्ल्यू. टेलर (F.W. Taylor)", "हेनरी फेयोल", "पीटर एफ. ड्रकर", "मैक्स वेबर"], correct: 0 },
{ subject: "business", lang: "en", question: "Who is universally recognized and studied as the official 'Father of Scientific Management' within organizational frameworks?", options: ["F.W. Taylor", "Henri Fayol", "Peter F. Drucker", "Max Weber"], correct: 0 },
{ subject: "business", lang: "hi", question: "भर्ती का वह कौन सा स्रोत कहलाता है जिसके अंतर्गत संगठन के भीतर से ही योग्य कर्मचारियों को उच्च पदों पर भेजा जाता है?", options: ["आंतरिक स्रोत या पदोन्नति (Internal Sources / Promotion)", "बाहरी स्रोत", "कैंपस प्लेसमेंट", "रोजगार एक्सचेंज"], correct: 0 },
{ subject: "business", lang: "en", question: "The operational human resource policy of moving an existing corporate employee to a higher structural scale is categorized as an:", options: ["Internal Source / Promotion path", "External Sourcing route", "Campus Placement initiative", "Employment Exchange procurement"], correct: 0 },
{ subject: "business", lang: "hi", question: "उपभोक्ता अपनी शिकायतों के निवारण के लिए जिला उपभोक्ता फोरम (District Commission) में कितनी मौद्रिक सीमा तक के दावे दर्ज करा सकता है?", options: ["नवीनतम नियमों के अनुसार ₹1 करोड़ तक", "₹20 लाख तक", "₹50 लाख तक", "₹2 करोड़ तक"], correct: 0 },
{ subject: "business", lang: "en", question: "Under updated Consumer Protection legal limits, a consumer can file claims before the District Commission for values up to:", options: ["Up to ₹1 Crore", "Up to ₹20 Lakhs", "Up to ₹50 Lakhs", "Up to ₹2 Crores"], correct: 0 },
{ subject: "business", lang: "hi", question: "मैसेलो के आवश्यकता पदानुक्रम सिद्धांत (Maslow's Hierarchy) के अनुसार मानव की सबसे बुनियादी शारीरिक आवश्यकता कौन सी है?", options: ["रोटी, कपड़ा और मकान (Physiological Needs)", "सुरक्षा की आवश्यकता", "सामाजिक संबंध", "आत्म-वास्तविकीकरण"], correct: 0 },
{ subject: "business", lang: "en", question: "According to Abraham Maslow's motivational hierarchy model, the absolute primary foundational base layer represents:", options: ["Physiological Needs like food, clothing, shelter", "Safety and Security needs", "Social Belongingness networks", "Self-Actualization achievements"], correct: 0 },
{ subject: "business", lang: "hi", question: "पूंजी संरचना (Capital Structure) का वास्तविक व्यावसायिक अर्थ क्या होता है जो वित्तीय प्रबंधन की रीढ़ माना जाता है?", options: ["ऋण पूंजी और समता पूंजी का अनुपात (Debt-Equity Mix)", "केवल कार्यशील पूंजी", "चालू संपत्तियों का योग", "बैंक ओवरड्राफ्ट सीमा"], correct: 0 },
{ subject: "business", lang: "en", question: "The financial composition defining the core framework of an enterprise's Capital Structure is best expressed as the:", options: ["Debt-Equity operational ratio mix", "Net Working Capital calculation", "Aggregate of Current Assets", "Bank Overdraft operational limits"], correct: 0 },
{ subject: "business", lang: "hi", question: "विपणन मिश्रण (Marketing Mix) के सुप्रसिद्ध '4 Ps' मॉडल के अंतर्गत निम्नलिखित में से कौन सा तत्व शामिल नहीं है?", options: ["प्रोसेस (Process)", "प्रोडक्ट (Product)", "प्राइस (Price)", "प्रमोशन (Promotion)"], correct: 0 },
{ subject: "business", lang: "en", question: "Which of the following operational terms does not form part of E. Jerome McCarthy's traditional '4 Ps' Marketing Mix framework?", options: ["Process", "Product", "Price", "Promotion"], correct: 0 },
{ subject: "business", lang: "hi", question: "संदेशवाहन (Communication) के प्रवाह में आने वाली वैसी बाधाएं जो भाषा, शब्दों के गलत अर्थ या अनुवाद से जुड़ी होती हैं, क्या कहलाती हैं?", options: ["भाषाई या सांकेतिक बाधाएं (Semantic Barriers)", "मनोवैज्ञानिक बाधाएं", "संगठनात्मक बाधाएं", "भौतिक बाधाएं"], correct: 0 },
{ subject: "business", lang: "en", question: "Communication breakdowns triggered due to faulty translations, complex jargon, or distorted language interpretations represent:", options: ["Semantic Barriers", "Psychological Barriers", "Organizational Barriers", "Physical Barriers"], correct: 0 },
{ subject: "business", lang: "hi", question: "अधीनस्थों को बिना किसी सख्त बाहरी हस्तक्षेप के स्वतंत्र रूप से निर्णय लेने की छूट देने वाली नेतृत्व शैली (Leadership Style) क्या कहलाती है?", options: ["मुक्त-नीति या अहस्तक्षेपी नेतृत्व (Laissez-Faire Leadership)", "निरंकुश नेतृत्व", "लोकतांत्रिक नेतृत्व", "अधिकारी नेतृत्व"], correct: 0 },
{ subject: "business", lang: "en", question: "The distinct management leadership layout where maximum decentralization allows subordinates complete operational autonomy is called:", options: ["Laissez-Faire / Free-Rein Leadership", "Autocratic Leadership style", "Democratic Leadership model", "Bureaucratic Command layout"], correct: 0 },

// ==========================================
// 14. उद्यमशीलता (Entrepreneurship) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "entrepreneurship", lang: "hi", question: "उद्यमशीलता के विकास में नवाचार का सिद्धांत (Theory of Innovation) किस सुप्रसिद्ध अर्थशास्त्री द्वारा प्रतिपादित किया गया था?", options: ["जोसफ शुम्पीटर (Joseph Schumpeter)", "डेविड मैक्क्लीलैंड", "पीटर एफ. ड्रकर", "एडम स्मिथ"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "The historic driving economic framework correlating entrepreneurship explicitly with the 'Theory of Innovation' was introduced by:", options: ["Joseph Schumpeter", "David McClelland", "Peter F. Drucker", "Adam Smith"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "एक नया व्यवसाय स्थापित करने की योजना बनाते समय 'कार्यशील पूंजी' (Working Capital) का प्राथमिक उद्देश्य क्या होता है?", options: ["दैनिक परिचालन व्ययों का भुगतान करना", "भूमि और भवन खरीदना", "बैंक ऋण चुकता करना", "लाभांश वितरित करना"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "While deploying short-term corporate liquidity resources, the primary objective of Net Working Capital is to:", options: ["Meet daily routine operational expenses smoothly", "Acquire long-term commercial land and factory buildings", "Settle pending long-term bank liabilities", "Distribute structural dividends to corporate shareholders"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "सरकार द्वारा स्थापित 'SIDBI' (सिडबी) का मुख्य वित्तीय उद्देश्य भारत में किस क्षेत्र को बढ़ावा देना है?", options: ["सूक्ष्म, लघु और मध्यम उद्योग (MSME Sector)", "भारी औद्योगिक विनिर्माण", "कृषि ऋण वितरण", "विदेशी व्यापारिक घराने"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "The administrative operational mandate governing the financing activities of SIDBI focuses on supporting the:", options: ["Micro, Small and Medium Enterprises (MSME Sector)", "Heavy core industrial manufacturing plants", "Rural agricultural credit networks", "Large global transnational trading houses"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "किसी उत्पाद के आविष्कारक को सरकार द्वारा दिए जाने वाले वैधानिक एकाधिकार अधिकार को क्या कहते हैं जो नकल को रोकता है?", options: ["पेटेंट (Patent)", "ट्रेडमार्क", "कॉपीराइट", "औद्योगिक लायसेंस"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "The statutory territorial intellectual property monopoly granted by a sovereign government protecting novel inventions is a:", options: ["Patent", "Trademark", "Copyright", "Industrial Licence structural code"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "उद्यमशीलता के संदर्भ में व्यावसायिक पर्यावरण के विश्लेषण के लिए प्रयुक्त 'SWOT' मॉडल में 'W' अक्षर किसे दर्शाता है?", options: ["कमजोरियां (Weaknesses)", "धन (Wealth)", "कार्यबल (Workforce)", "बाजार विस्तार (Wideness)"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "Within strategic corporate analysis tracking environmental parameters under the SWOT methodology, the character 'W' denotes:", options: ["Weaknesses", "Wealth generation tracks", "Workforce capacities", "Wideness of market penetration"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "एक नए उद्यम द्वारा सार्वजनिक शेयर जारी करने से पहले शुरुआती बड़े संस्थागत निवेशकों से प्राप्त होने वाली भारी वित्तीय पूंजी क्या कहलाती है?", options: ["वेंचर कैपिटल या जोखिम पूंजी (Venture Capital)", "ऋण वित्तपोषण", "अल्पकालिक ओवरड्राफ्ट", "व्यापारिक साख"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "The highly specialized long-term risk-bearing private equity capital injected into scalable early-stage high-potential startups represents:", options: ["Venture Capital", "Debt Financing networks", "Short-term Overdraft financing", "Trade Credit options"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "व्यावसायिक विचार के चयन के बाद उद्यम की पूरी कार्यप्रणाली और रणनीतियों को लिखित रूप में दर्ज करने वाला दस्तावेज क्या कहलाता है?", options: ["व्यावसायिक योजना या प्रोजेक्ट रिपोर्ट (Business Plan)", "बैलेंस शीट", "एमओए (MOA)", "साझेदारी विलेख"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "The comprehensive structural roadmap documenting the operational blueprints, financial goals, and execution strategies of a new venture is a:", options: ["Business Plan / Project Report", "Balance Sheet projection", "Memorandum of Association (MOA)", "Partnership Deed documentation"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "भारत सरकार द्वारा स्टार्टअप्स को वित्तीय सहायता, टैक्स छूट और मेंटरशिप देने के लिए 'स्टार्टअप इंडिया' अभियान कब शुरू किया गया?", options: ["16 जनवरी 2016", "15 अगस्त 2015", "2 अक्टूबर 2014", "1 जनवरी 2017"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "When did the Government of India officially flag off the flagship 'Startup India' national initiative to foster innovation ecosystems?", options: ["16 January 2016", "15 August 2015", "2 October 2014", "1 January 2017"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "वह बिंदु जहाँ किसी उत्पाद की बिक्री से प्राप्त कुल आय उसकी कुल उत्पादन लागत के बिल्कुल बराबर हो जाती है, उसे वित्तीय रूप से क्या कहते हैं?", options: ["सम-विच्छेद बिंदु (Break-Even Point)", "लाभ सीमा", "उच्चतम सीमा", "मार्जिन ऑफ सेफ्टी"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "The exact operational volume target where the cumulative business revenue maps identically with aggregate total costs represents the:", options: ["Break-Even Point", "Profit Maximization margin", "Peak Capacity threshold", "Margin of Safety calculation"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "डेविड मैक्क्लीलैंड के अनुसार, उद्यमियों को प्रेरित करने वाली सबसे प्रमुख मनोवैज्ञानिक शक्ति निम्नलिखित में से कौन सी है?", options: ["उच्च उपलब्धि की आवश्यकता (Need for Achievement - nAch)", "सत्ता की आवश्यकता", "सामाजिक संबंध बनाने की ललक", "धन संचय की इच्छा"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "According to David McClelland's motivational psychology matrix, the primary personality trait steering an entrepreneur is the:", options: ["Need for Achievement (nAch)", "Need for Power configuration", "Need for Affiliation mapping", "Inherent desire for passive wealth aggregation"], correct: 0 },

// ==========================================
// 15. भौतिकी (Physics) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "physics", lang: "hi", question: "विद्युत क्षेत्र की तीव्रता (Electric Field Intensity) की मानक एसआई (SI) इकाई निम्नलिखित में से क्या होती है?", options: ["न्यूटन / कूलॉम (N/C) या वोल्ट / मीटर", "जूल / कूलॉम", "कूलॉम / न्यूटन", "ओम × मीटर"], correct: 0 },
{ subject: "physics", lang: "en", question: "What represents the standardized international (SI) unit for quantifying Electric Field Intensity?", options: ["Newton per Coulomb (N/C) or Volt per meter", "Juel per Coulomb", "Coulomb per Newton", "Ohm meter"], correct: 0 },
{ subject: "physics", lang: "hi", question: "कांच के प्रिज्म से श्वेत प्रकाश के गुजरने पर किस रंग का विचलन कोण (Angle of Deviation) न्यूनतम होता है?", options: ["लाल रंग", "बैंगनी रंग", "हरा रंग", "पीला रंग"], correct: 0 },
{ subject: "physics", lang: "en", question: "When white light undergoes dispersion while passing through a glass prism, which wavelength exhibits the minimum angle of deviation?", options: ["Red light", "Violet light", "Green light", "Yellow light"], correct: 0 },
{ subject: "physics", lang: "hi", question: "लेंज का नियम (Lenz's Law) विद्युत चुम्बकीय प्रेरण के तहत किस भौतिक राशि के संरक्षण के नियम का सीधा परिणाम है?", options: ["ऊर्जा संरक्षण का नियम", "आवेश संरक्षण का नियम", "संवेग संरक्षण का नियम", "द्रव्यमान संरक्षण का नियम"], correct: 0 },
{ subject: "physics", lang: "en", question: "Lenz's Law governing the directional mechanics of induced electromotive forces is a direct manifestation of the conservation of:", options: ["Energy", "Charge", "Linear Momentum", "Mass configuration"], correct: 0 },
{ subject: "physics", lang: "hi", question: "एक गतिमान इलेक्ट्रॉन चुंबकीय क्षेत्र के समानांतर (Parallel to Magnetic Field) गति करता है। इस पर लगने वाला चुंबकीय बल कितना होगा?", options: ["शून्य (Zero)", "अधिकतम मान", "ऋणात्मक मान", "अनंत"], correct: 0 },
{ subject: "physics", lang: "en", question: "A high-speed electron moves inside a magnetic field tracking a path parallel to the field lines. The net magnetic force experienced is:", options: ["Zero", "Maximum values", "Negative values", "Infinity"], correct: 0 },
{ subject: "physics", lang: "hi", question: "पी-प्रकार के अर्धचालक (P-type Semiconductor) को निर्मित करने के लिए शुद्ध जर्मेनियम में किस संयोजकता वाली अशुद्धि मिलाई जाती है?", options: ["त्रिसंयोजी (Trivalent जैसे इंडियम)", "पंचसंयोजी", "चतुष्संयोजी", "शून्य संयोजकता"], correct: 0 },
{ subject: "physics", lang: "en", question: "To synthesize a functional P-type extrinsic semiconductor, pure intrinsic Germanium crystals are doped with which impurities?", options: ["Trivalent elements like Indium", "Pentavalent doping profiles", "Tetravalent trace elements", "Noble gas zero-valence items"], correct: 0 },
{ subject: "physics", lang: "hi", question: "किसी गोलीय दर्पण या पतले लेंस की फोकस दूरी (f) और उसकी वक्रता त्रिज्या (R) के बीच क्या संबंध होता है?", options: ["f = R / 2", "f = 2R", "f = R", "f = 1 / R"], correct: 0 },
{ subject: "physics", lang: "en", question: "Which mathematical formula properly establishes the link between the focal length (f) and radius of curvature (R) of a thin spherical lens?", options: ["f = R / 2", "f = 2R", "f = R", "f = 1 / R"], correct: 0 },
{ subject: "physics", lang: "hi", question: "विद्युत परिपथों के लिए प्रयुक्त 'किरचॉफ का प्रथम नियम' (संधि नियम) किस राशि के संरक्षण पर आधारित है?", options: ["विद्युत आवेश (Electric Charge)", "विद्युत ऊर्जा", "रेखीय संवेग", "द्रव्यमान प्रवाह"], correct: 0 },
{ subject: "physics", lang: "en", question: "Kirchhoff's first circuit law, universally known as the Junction Rule, operates directly on the conservation of:", options: ["Electric Charge", "Electrical Energy", "Linear Momentum", "Mass flow distributions"], correct: 0 },
{ subject: "physics", lang: "hi", question: "स्वस्थ मानव नेत्र के लिए स्पष्ट दृष्टि की न्यूनतम दूरी (Least Distance of Distinct Vision) कितनी मानी जाती है?", options: ["25 सेमी", "अनंत", "10 सेमी", "100 सेमी"], correct: 0 },
{ subject: "physics", lang: "en", question: "What is the baseline quantitative value designated as the Least Distance of Distinct Vision for a normal healthy human eye?", options: ["25 cm", "Infinity", "10 cm", "100 cm"], correct: 0 },
{ subject: "physics", lang: "hi", question: "हाइड्रोजन परमाणु के बोहर मॉडल के अनुसार, इलेक्ट्रॉन की कक्षाओं के कोणीय संवेग (Angular Momentum) का मान क्या होता है?", options: ["nh / 2π", "h / 2π", "n²h / 2π", "nh / π"], correct: 0 },
{ subject: "physics", lang: "en", question: "According to the quantum postulates of Bohr's atomic model, the orbital angular momentum of an electron is quantized as:", options: ["nh / 2π", "h / 2π", "n²h / 2π", "nh / π"], correct: 0 },
{ subject: "physics", lang: "hi", question: "ट्रांसफार्मर (Transformer) का कोर भँवर धाराओं (Eddy Currents) के कारण होने वाली ऊर्जा हानि को कम करने के लिए कैसा बनाया जाता है?", options: ["पटलित कोर (Laminated Core)", "ठोस तांबे का कोर", "खोखला लोहा कोर", "चुंबकीय मिश्र धातु कोर"], correct: 0 },
{ subject: "physics", lang: "en", question: "The structural electromagnetic core of a power transformer is intentionally laminated in order to significantly suppress energy losses via:", options: ["Eddy Currents", "Hysteresis loss cycles", "Copper resistive heating", "Flux leakage issues"], correct: 0 },

// ==========================================
// 16. रसायन विज्ञान (Chemistry) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "chemistry", lang: "hi", question: "शारीरिक अंतःशिरा इंजेक्शन (Intravenous Injections) के लिए इस्तेमाल होने वाले सलाइन सॉल्युशन की सांद्रता रक्त कोशिकाओं के साथ कैसी होनी चाहिए?", options: ["0.9% NaCl द्रव्यमान प्रतिशत के समपरासारी (Isotonic)", "अतिपरासारी", "अल्पपरासारी", "सांद्र सल्फ्यूरिक"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Standard saline solution developed for safe intravenous clinical injections must possess an osmotic concentration that is:", options: ["Isotonic with human blood cells containing 0.9% NaCl", "Hypertonic relative to blood properties", "Hypotonic relative to cellular fluids", "Highly concentrated and acidic"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "प्रथम कोटि की अभिक्रिया (First Order Reaction) के लिए अर्धायु काल (t_1/2) का मान अभिकारक की प्रारंभिक सांद्रता पर कैसे निर्भर करता है?", options: ["प्रारंभिक सांद्रता पर निर्भर नहीं करता (Independent)", "सांद्रता के समानुपाती होता है", "सांद्रता के व्युत्क्रमानुपाती होता है", "सांद्रता के वर्ग के समानुपाती होता है"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "The physical half-life period (t_1/2) metric governing a standard First Order chemical Reaction is mathematically:", options: ["Completely independent of the initial concentration of reactants", "Directly proportional to the initial reactant layout", "Inversely proportional to the active concentrations", "Proportional to the square of initial values"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "हेबर विधि द्वारा अमोनिया के औद्योगिक विनिर्माण में आयरन (Fe) उत्प्रेरक के साथ वर्धक (Promoter) के रूप में किसका उपयोग होता है?", options: ["मोलिब्डेनम (Mo)", "प्लैटिनम", "निकेल", "तांबा"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "During the industrial processing of Ammonia via Haber's Method, which catalyst promoter is introduced alongside the Iron matrix?", options: ["Molybdenum (Mo)", "Platinum catalyst flakes", "Finely divided Nickel", "Metallic Copper dust"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "जलीय विलयन में सर्वाधिक विद्युत चालकता और जटिल संरचना प्रदर्शित करने वाले संक्रमण धातुओं के यौगिकों की व्याख्या किसने की?", options: ["अल्फ्रेड वर्नर का उपसहसंयोजन सिद्धांत", "लिविस अम्ल सिद्धांत", "डैल्टन परमाणु सिद्धांत", "फराडे इलेक्ट्रोलेसिस नियम"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "The foundational structural coordination theory detailing the isomerism properties of transition metal complexes was formulated by:", options: ["Alfred Werner", "Gilbert N. Lewis", "John Dalton", "Michael Faraday"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "क्लोरोफॉर्म (CHCl₃) को हवा और प्रकाश की उपस्थिति में खुला छोड़ देने पर बनने वाली अत्यंत विषैली गैस का नाम क्या है?", options: ["फॉस्जीन गैस (Phosgene COCl₂)", "मस्टर्ड गैस", "अश्रु गैस", "लाफिंग गैस"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "When pure liquid Chloroform is exposed directly to atmospheric oxygen and light, it photochemically generates a highly toxic gas called:", options: ["Phosgene (COCl₂)", "Mustard gas chemical compound", "Tear gas compound", "Nitrous oxide laughing gas"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "किस सुप्रसिद्ध नियम के अनुसार, स्थिर ताप पर किसी विलायक के निश्चित आयतन में घुली गैस का द्रव्यमान उसके दाब के समानुपाती होता है?", options: ["हेनरी का नियम (Henry's Law)", "राउल्ट का नियम", "वैल डैल्टन नियम", "चार्लस गैस नियम"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Which chemical law states that at a constant temperature, the mass of a gas dissolved in a given volume of liquid is proportional to its partial pressure?", options: ["Henry's Law", "Raoult's Law", "Dalton's Law of Partial Pressures", "Charles's Gas Law"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "शुष्क ईथर की उपस्थिति में ऐल्किल हैलाइड की सोडियम धातु के साथ अभिक्रिया से एल्केन बनने की रासायनिक प्रक्रिया क्या कहलाती है?", options: ["वुर्ट्ज अभिक्रिया (Wurtz Reaction)", "फ्रीडेल-क्राफ्ट्स अभिक्रिया", "कैनीजारो अभिक्रिया", "रेइमर-टीमैन अभिक्रिया"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "The coupling reaction involving alkyl halides treated with metallic sodium in dry ether to yield symmetrical alkanes is the:", options: ["Wurtz Reaction", "Friedel-Crafts Alkylation", "Cannizzaro Reaction", "Reimer-Tiemann Reaction"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "ऐल्डिहाइड और कीटोन की पहचान के लिए प्रयोगशाला में प्रयुक्त 'टॉलेन अभिकर्मक' (Tollens' Reagent) रासायनिक रूप से क्या है?", options: ["अमोनियामय सिल्वर नाइट्रेट का विलयन", "क्षारीय कॉपर सल्फेट विलयन", "अम्लीय पोटेशियम परमैंगनेट", "उदासीन फेरिक क्लोराइड"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "What is the precise chemical formulation of Tollens' Reagent, deployed to clinically isolate aldehyde profiles via silver mirror synthesis?", options: ["Ammoniacal Silver Nitrate solution", "Alkaline Copper Sulfate complex solution", "Acidified Potassium Permanganate", "Neutral Ferric Chloride solution"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "डीएनए (DNA) के न्यूक्लियोटाइड अणुओं के रासायनिक ढांचे में निम्नलिखित में से कौन सा नाइट्रोजन बेस उपस्थित नहीं होता है?", options: ["यूरेशिल (Uracil)", "एडेनिन", "साइटोसिन", "थायामीन"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Which of the following organic nitrogenous bases is structurally absent within the macromolecular nucleobase chains of DNA?", options: ["Uracil", "Adenine", "Cytosine", "Thymine"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "लोहे पर जंग लगने (Rusting of Iron) की रासायनिक परिघटना को रोकने के लिए विद्युत रासायनिक सेल के रूप में किसका लेपन किया जाता है?", options: ["जस्ता का लेपन या यशदलेपन (Galvanization)", "तांबे की परत चढ़ाना", "नमक का गाढ़ा लेप", "सल्फ्यूरिक एसिड प्रक्षालन"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "The industrial electro-chemical methodology utilized to structurally fortify iron profiles against oxidization via zinc coating is:", options: ["Galvanization", "Copper electro-plating", "Sodium chloride salting parameters", "Sulfuric acid chemical pickling"], correct: 0 },

// ==========================================
// 17. जीव विज्ञान (Biology) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "biology", lang: "hi", question: "आवृतबीजी पादपों में निषेचन के पश्चात 'भ्रूणपोष' (Endosperm) की गुणसूत्र स्थिति या प्लॉइडी स्तर कैसा होता है?", options: ["त्रिगुणित (3n)", "द्विगुणित (2n)", "अगुणित (n)", "चतुर्गुणित (4n)"], correct: 0 },
{ subject: "biology", lang: "en", question: "What is the typical ploidy configuration of the nutritious Endosperm tissue in double-fertilized angiosperm plants?", options: ["Triploid (3n)", "Diploid (2n)", "Haploid (n)", "Tetraploid (4n)"], correct: 0 },
{ subject: "biology", lang: "hi", question: "आधुनिक आनुवंशिकी (Modern Genetics) के जनक कहे जाने वाले ग्रैगर जॉन मेंडल ने अपने प्रयोग किस पौधे पर किए थे?", options: ["उद्यान मटर (Pisum sativum)", "मीठी मटर", "जंगली सरसों", "गुलाब का पौधा"], correct: 0 },
{ subject: "biology", lang: "en", question: "Gregor Johann Mendel, documented as the 'Father of Genetics', pursued his inheritance research using which specimen?", options: ["Garden Pea (Pisum sativum)", "Sweet Pea plant variety", "Wild Mustard plant expansion", "Hybrid Rose flower structures"], correct: 0 },
{ subject: "biology", lang: "hi", question: "डीएनए प्रतिकृतियन (DNA Replication) के दौरान लैगिंग स्टैंड पर बनने वाले छोटे डीएनए खंडों को आपस में जोड़ने वाला एंजाइम कौन सा है?", options: ["डीएनए लाइगेज (DNA Ligase)", "डीएनए पॉलीमरेज", "आरएनए प्राइमेज", "हेलीकेज"], correct: 0 },
{ subject: "biology", lang: "en", question: "Which specific molecular enzyme covalently joins the small Okazaki fragments manufactured along the lagging strand during DNA replication?", options: ["DNA Ligase", "DNA Polymerase", "RNA Primase", "Helicase structural enzyme"], correct: 0 },
{ subject: "biology", lang: "hi", question: "मानव शरीर में रक्त शर्करा (Blood Glucose) के स्तर को नियंत्रित करने वाला हॉर्मोन इंसुलिन अग्न्याशय की किन विशिष्ट कोशिकाओं द्वारा स्रावित होता है?", options: ["लैंगरहैंस की द्वीपिकाओं की बीटा कोशिकाएं (Beta Cells)", "अल्फा कोशिकाएं", "डेल्टा कोशिकाएं", "यकृत की कुफ्फर कोशिकाएं"], correct: 0 },
{ subject: "biology", lang: "en", question: "Insulin, which regulates systemic blood glucose parameters in the human body, is manufactured by which pancreas layout?", options: ["Beta Cells of Islets of Langerhans", "Alpha Cells", "Delta Cells", "Hepatic Kupffer cellular units"], correct: 0 },
{ subject: "biology", lang: "hi", question: "किसी पारिस्थितिकी तंत्र (Ecosystem) में घास के मैदान का जैवभार का पिरामिड (Pyramid of Biomass) कैसा बनता है?", options: ["हमेशा सीधा (Always Upright)", "हमेशा उल्टा", "अंडाकार", "शंकुधारी रूप"], correct: 0 },
{ subject: "biology", lang: "en", question: "What is the structural geometric configuration displayed by the Pyramid of Biomass representing a terrestrial grassland ecosystem?", options: ["Always Upright", "Inverted layout", "Ovoid configuration", "Coniferous distribution model"], correct: 0 },
{ subject: "biology", lang: "hi", question: "स्त्रियों में मासिक चक्र (Menstrual Cycle) के दौरान 14वें दिन 'अंडोत्सर्ग' (Ovulation) को प्रेरित करने वाला मुख्य पीयूष हॉर्मोन कौन सा है?", options: ["ल्यूटिनाइजिंग हॉर्मोन (LH Surge)", "प्रोजेस्टेरोन", "एस्ट्रोजेन", "ऑक्सीटोसिन"], correct: 0 },
{ subject: "biology", lang: "en", question: "Which adenohypophyseal gonadotropin hormone surges sharply around day 14 to initiate ovulation during the human female ovarian cycle?", options: ["Luteinizing Hormone (LH)", "Progesterone profile", "Estrogen formulation", "Oxytocin uterine stimulant"], correct: 0 },
{ subject: "biology", lang: "hi", question: "एक वयस्क मनुष्य के हीमोग्लोबिन अणु (Haemoglobin Molecule) की चतुर्थक संरचना में कुल कितनी पेप्टाइड शृंखलाएं उपस्थित होती हैं?", options: ["चार शृंखलाएं (दो अल्फा और दो बीटा)", "दो शृंखलाएं", "तीन शृंखलाएं", "छह शृंखलाएं"], correct: 0 },
{ subject: "biology", lang: "en", question: "A functional adult human hemoglobin complex protein exhibits a quaternary orientation containing how many polypeptide sub-units?", options: ["Four chains (two alpha and two beta)", "Two identical chains", "Three combined units", "Six chain arrays"], correct: 0 },
{ subject: "biology", lang: "hi", question: "आनुवंशिक कूट (Genetic Code) की खोज और व्याख्या के लिए भारतीय मूल के किस वैज्ञानिक को नोबेल पुरस्कार से सम्मानित किया गया था?", options: ["डॉ. हरगोविंद खुराना", "डॉ. एम. एस. स्वामीनाथन", "डॉ. सतीश धवन", "डॉ. सी. वी. रमन"], correct: 0 },
{ subject: "biology", lang: "en", question: "Which scientist of Indian origin secured a Nobel Prize for deciphering the structural mechanics governing the Genetic Code translation?", options: ["Dr. Har Gobind Khorana", "Dr. M. S. Swaminathan", "Dr. Satish Dhawan", "Dr. C. V. Raman"], correct: 0 },
{ subject: "biology", lang: "hi", question: "मलेरिया रोग फैलाने वाले परजीवी 'प्लाज्मोडियम' (Plasmodium) का प्राथमिक संक्रामक चरण जो मानव शरीर में प्रवेश करता है, क्या कहलाता है?", options: ["स्पोरोजोआइट (Sporozoite)", "मीरोजोआइट", "ट्रोफोजोआइट", "गेमेटाोसाइट"], correct: 0 },
{ subject: "biology", lang: "en", question: "The specific infectious developmental stage of the Plasmodium parasite injected into the human host by a mosquito vector is the:", options: ["Sporozoite", "Merozoite", "Trophozoite", "Gametocyte phase"], correct: 0 },
{ subject: "biology", lang: "hi", question: "भारत सरकार द्वारा देश के समृद्ध वन्यजीवों और वनों की रक्षा के लिए 'वन्यजीव संरक्षण अधिनियम' किस वर्ष पारित किया गया था?", options: ["1972", "1980", "1986", "1992"], correct: 0 },
{ subject: "biology", lang: "en", question: "The statutory framework known as the Wildlife Protection Act was passed into law by the Indian Parliament in which year?", options: ["1972", "1980", "1986", "1992"], correct: 0 },

// ==========================================
// 18. बायोटेक्नोलॉजी (Biotechnology) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "biotech", lang: "hi", question: "डीएनए के अणुओं को विशिष्ट न्यूक्लियोटाइड अनुक्रमों पर काटने वाले एंजाइम 'आणविक कैंची' (Molecular Scissors) क्या कहलाते हैं?", options: ["प्रतिबंधन एंडोन्यूक्लिएज (Restriction Endonucleases)", "डीएनए पॉलीमरेज", "आरएनए पॉलीमरेज", "एक्सोन्यूक्लिएज"], correct: 0 },
{ subject: "biotech", lang: "en", question: "Enzymes engineered in genetic splicing protocols to act as molecular scissors by cutting DNA chains at specific recognition loci are:", options: ["Restriction Endonucleases", "DNA Polymerases", "RNA Polymerases", "Exonucleases structural units"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "एग्रोबैक्टीरियम ट्यूमीफेशियंस (Agro. tumefaciens) जीवाणु से प्राप्त होने वाला कौन सा प्लास्मिड पादप जेनेटिक इंजीनियरिंग में प्रयुक्त होता है?", options: ["Ti-प्लास्मिड (Ti Plasmid)", "pBR322", "pUC19", "लैम्ब्डा फेज"], correct: 0 },
{ subject: "biotech", lang: "en", question: "Which biological plasmid extracted from Agrobacterium tumefaciens is modified into a gene transfer vehicle for engineering plant matrices?", options: ["Ti Plasmid", "pBR322", "pUC19", "Lambda Phage vector systems"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "अनुवांशिक रूप से संशोधित फसल बीटी कॉटन (Bt Cotton) में 'Bt' अक्षर किस विशिष्ट मिट्टी के जीवाणु को संबोधित करता है?", options: ["बैसिलस थुरिंगिएंसिस (Bacillus thuringiensis)", "बैसिलस सब्टिलिस", "एग्रोबैक्टीरियम", "राइजोबियम"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The prefix 'Bt' integrated into transgenically customized commercial Bt Cotton crops points to which soil-dwelling bacterium?", options: ["Bacillus thuringiensis", "Bacillus subtilis bacterium profile", "Agrobacterium tumefaciens", "Rhizobium leguminosarum nitrogen cells"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "डीएनए के टुकड़ों को उनके विद्युत आवेश और आकार के आधार पर अलग करने के लिए प्रयुक्त जैव तकनीकी प्रयोगशाला विधि कौन सी है?", options: ["एगारोज जेल इलेक्ट्रोफोरेसिस (Gel Electrophoresis)", "पॉलीमरेज चेन रिएक्शन", "एलिसा टेस्ट", "वेस्टर्न ब्लॉटिंग"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The laboratory separation methodology used to isolate and track DNA fragments on the basis of their electrical charge and molecular weight is:", options: ["Agarose Gel Electrophoresis", "Polymerase Chain Reaction (PCR)", "ELISA diagnostic system", "Western Blotting profiling technique"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "प्रथम व्यावसायिक अनुवांशिक रूप से निर्मित मानव इंसुलिन (Humulin) को अमेरिकी कम्पनी द्वारा किस वर्ष बाजार में उतारा गया था?", options: ["1983", "1990", "1975", "1995"], correct: 0 },
{ subject: "biotech", lang: "en", question: "In which year did the American pharma enterprise Eli Lilly successfully market 'Humulin', the first recombinant human insulin?", options: ["1983", "1990", "1975", "1995"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "कोशिकाओं की वह अंतर्निहित क्षमता क्या कहलाती है जिसके द्वारा एक एकल पादप कोशिका पूरे नए पौधे में विकसित हो सकती है?", options: ["पूर्णशक्तता (Totipotency)", "बहुभ्रूणता", "उत्परिवर्तन", "प्लुरिपोटेंसी"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The biological developmental property displayed by an isolated single plant cell allowing it to regenerate into a fully mature whole organism is:", options: ["Totipotency", "Polyembryony tracking mechanisms", "Somatic mutation induction", "Pluripotency baseline parameters"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "प्रतिबंधन एंजाइम 'EcoRI' में 'co' अक्षर किस जीवाणु प्रजाति (Species Name) को आनुवंशिक रूप से निरूपित करता है?", options: ["कोलाई (coli)", "कोलोस्ट्रम", "कोरिनेबैक्टीरियम", "क्लॉस्ट्रिडियम"], correct: 0 },
{ subject: "biotech", lang: "en", question: "Inside the alphanumeric designation of the classic restriction endonuclease 'EcoRI', the letters 'co' refer directly to the species:", options: ["coli", "colostrum properties", "corynebacterium structural assets", "clostridium structural matrix"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "एड्स (AIDS) रोग के प्राथमिक निदान के लिए प्रयोगशाला स्तर पर उपयोग की जाने वाली अत्यधिक संवेदनशील बायोटेक विधि कौन सी है?", options: ["एलिसा (ELISA Test)", "पीसीआर", "साउदर्न ब्लॉटिंग", "क्रोमैटोग्राफी"], correct: 0 },
{ subject: "biotech", lang: "en", question: "Which primary diagnostic biochemical screening assay is deployed worldwide to reliably screen for the presence of retroviral HIV antibodies?", options: ["ELISA (Enzyme-Linked Immunosorbent Assay)", "PCR amplification methods", "Southern Blotting analysis", "High Performance Liquid Chromatography"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "पॉलीमरेज चेन रिएक्शन (PCR) तकनीक के दौरान उच्च तापमान पर सक्रिय रहने वाले 'Taq पॉलीमरेज' एंजाइम को किस बैक्टीरिया से निकाला जाता है?", options: ["थर्मस एक्वाटिकस (Thermus aquaticus)", "थर्मोप्लाज्मा सिंड्रोम", "बैसिलस कोलाई", "स्ट्रेप्टोकोकस"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The thermostable DNA Polymerase enzyme known as 'Taq Polymerase' integrated into automated thermocyclers is obtained from:", options: ["Thermus aquaticus", "Thermoplasma acidophilum cell layouts", "Bacillus coli target cultures", "Streptococcus pneumoniae strains"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "अनुवांशिक रोगों के उपचार के लिए त्रुटिपूर्ण या खराब जीन को स्वस्थ क्रियाशील जीन द्वारा बदलने की चिकित्सा पद्धति क्या कहलाती है?", options: ["जीन थेरेपी (Gene Therapy)", "आरएनए इंटरफेरेंस", "स्टेम सेल थ्योरी", "मॉलिक्यूलर क्लोनिंग"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The therapeutic molecular biological approach focused on correcting defective disease-causing genetic codes via functional gene insertion is:", options: ["Gene Therapy", "RNA Interference mechanism", "Stem Cell processing tracks", "Molecular Cloning configurations"], correct: 0 },

// ==========================================
// 19. गणित (Mathematics) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "maths", lang: "hi", question: "यदि एक आव्यूह (Matrix) 'A' एक सममित आव्यूह (Symmetric Matrix) है, तो आव्यूह का परिवर्त (Transpose A') किसके बराबर होगा?", options: ["A", "-A", "0", "आव्यूह के व्युत्क्रम A⁻¹ के बराबर"], correct: 0 },
{ subject: "maths", lang: "en", question: "If a given square matrix 'A' is structurally configured as a Symmetric Matrix, its calculated Transpose matrix (A') equals:", options: ["A", "-A", "0", "The inverse of matrix given by A⁻¹"], correct: 0 },
{ subject: "maths", lang: "hi", question: "त्रिकोणमितीय फलन f(x) = sin x का x के सापेक्ष द्वितीय अवकलन (Second Derivative) निम्नलिखित में से क्या होगा?", options: ["-sin x", "cos x", "-cos x", "sin x"], correct: 0 },
{ subject: "maths", lang: "en", question: "What is the evaluated calculus second derivative of the trigonometric function f(x) = sin x with respect to x?", options: ["-sin x", "cos x", "-cos x", "sin x"], correct: 0 },
{ subject: "maths", lang: "hi", question: "निश्चित समाकलन (Definite Integral) ∫ (सीमा 0 से π/2) sin x dx का संख्यात्मक मान कितना प्राप्त होगा?", options: ["1", "0", "π / 2", "-1"], correct: 0 },
{ subject: "maths", lang: "en", question: "Evaluate the absolute numerical value of the definite trigonometric calculus integral ∫ (from 0 to π/2) sin x dx:", options: ["1", "0", "π / 2", "-1"], correct: 0 },
{ subject: "maths", lang: "hi", question: "दो सदिशों (Vectors) 'a' और 'b' का परस्पर लंबवत (Perpendicular Vectors) होने के लिए उनका अदिश गुणनफल (Dot Product) कितना होना चाहिए?", options: ["0 (शून्य)", "1", "-1", "दोनों सदिशों के परिमाण के गुणनफल के बराबर"], correct: 0 },
{ subject: "maths", lang: "en", question: "For two non-zero vectors 'a' and 'b' to be mutually perpendicular, their evaluated vector Dot Product must equal:", options: ["0", "1", "-1", "The structural scalar product of their magnitudes"], correct: 0 },
{ subject: "maths", lang: "hi", question: "अवकल समीकरण (Differential Equation) d²y/dx² + (dy/dx)³ + y = 0 की कोटि (Order) का मान कितना है?", options: ["2", "3", "1", "परिभाषित नहीं"], correct: 0 },
{ subject: "maths", lang: "en", question: "Determine the exact calculus Order of the given ordinary differential equation: d²y/dx² + (dy/dx)³ + y = 0:", options: ["2", "3", "1", "Not defined logically"], correct: 0 },
{ subject: "maths", lang: "hi", question: "यदि किसी रेखा के दिक्-कोसाइन (Direction Cosines) l, m, n हैं, तो उनके वर्गों का योग l² + m² + n² हमेशा किसके बराबर होता है?", options: ["1", "0", "2", "-1"], correct: 0 },
{ subject: "maths", lang: "en", question: "If the direction cosines of a continuous line in a three-dimensional plane are l, m, and n, determine the value of l² + m² + n²:", options: ["1", "0", "2", "-1"], correct: 0 },
{ subject: "maths", lang: "hi", question: "एक पासे (Dice) को एक बार फेंकने पर उस पर एक अभाज्य संख्या (Prime Number) आने की प्रायिकता (Probability) क्या होगी?", options: ["1 / 2", "1 / 3", "2 / 3", "1 / 6"], correct: 0 },
{ subject: "maths", lang: "en", question: "What is the statistical probability of obtaining a Prime Number on a single unbiased roll of a standard six-sided die?", options: ["1 / 2", "1 / 3", "2 / 3", "1 / 6"], correct: 0 },
{ subject: "maths", lang: "hi", question: "मुख्य मान शाखा के अंतर्गत प्रतिलोम त्रिकोणमितीय फलन sin⁻¹(1) का रेडियन मान निम्नलिखित में से क्या होगा?", options: ["π / 2", "π", "π / 4", "0"], correct: 0 },
{ subject: "maths", lang: "en", question: "Evaluate the principal radian value branch outputs for the inverse trigonometric expression sin⁻¹(1):", options: ["π / 2", "π", "π / 4", "0"], correct: 0 },
{ subject: "maths", lang: "hi", question: "यदि आव्यूह A की कोटि 2 × 3 है और आव्यूह B की कोटि 3 × 4 है, तो उनके गुणनफल आव्यूह AB की कोटि (Order) क्या होगी?", options: ["2 × 4", "3 × 3", "2 × 3", "गुणनफल संभव नहीं है"], correct: 0 },
{ subject: "maths", lang: "en", question: "If the matrix order specification for A is 2 × 3 and for B is 3 × 4, calculate the dimension order of the product matrix AB:", options: ["2 × 4", "3 × 3", "2 × 3", "The matrix multiplication operation is impossible"], correct: 0 },
{ subject: "maths", lang: "hi", question: "फलन f(x) = log(x) का x = 1 पर प्रथम अवकलज का मान निम्नलिखित में से क्या प्राप्त होगा?", options: ["1", "0", "अनंत", "-1"], correct: 0 },
{ subject: "maths", lang: "en", question: "Calculate the exact numerical value of the derivative of f(x) = log(x) evaluated precisely at x = 1:", options: ["1", "0", "Infinity", "-1"], correct: 0 },

// ==========================================
// 20. एप्लाइड मैथ (Applied Mathematics) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "applied_math", lang: "hi", question: "एक निश्चित समयावधि के बाद सिंकिंग फंड (Sinking Fund) का प्राथमिक वित्तीय उपयोग कम्पनी द्वारा किस कार्य के लिए किया जाता है?", options: ["दीर्घकालीन ऋणों का भुगतान या संपत्तियों का प्रतिस्थापन करने के लिए", "कर्मचारियों को बोनस बांटने के लिए", "दैनिक चाय-पानी खर्च के लिए", "शेयर बाजार में सट्टा लगाने के लिए"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "What represents the primary corporate financial purpose behind systematically setting up a Sinking Fund?", options: ["To liquidate long-term liabilities or replace obsolete fixed assets", "To distribute seasonal performance bonuses to workers", "To handle everyday miscellaneous routine expenses", "To speculate heavily inside volatile stock market operations"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "रैखिक प्रोग्रामन समस्याओं (LPP) में उद्देश्य फलन (Objective Function) के अधिकतम या न्यूनतम मान हमेशा कहाँ स्थित होते हैं?", options: ["सुसंगत क्षेत्र के कोणीय बिंदुओं (Corner Points) पर", "सुसंगत क्षेत्र के केंद्र पर", "मूल बिंदु (0,0) पर", "असीम क्षेत्र के बाहर"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "In Linear Programming models, the absolute optimal solution maximizing or minimizing the Objective Function occurs at:", options: ["The corner points of the bounded feasible region", "The absolute center of the bounded geometric plane", "The point of origin marked by coordinates (0,0)", "A random coordinate positioned outside the parameter zones"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "वित्तीय समय शृंखला (Time Series Analysis) विश्लेषण में 'दीर्घकालिक प्रवृत्ति' (Secular Trend) मापने की सबसे सरल और लोकप्रिय विधि कौन सी है?", options: ["चल माध्य विधि (Moving Average Method)", "न्यूटन विधि", "लॉग सारणी विधि", "यादृच्छिक प्रतिचयन"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "Which analytical methodology is widely deployed across business statistics to seamlessly smooth out data trends under Time Series Analysis?", options: ["Moving Average Method", "Newton's Forward Interpolation method", "Logarithmic Table extrapolation matrix", "Random Sampling probability layouts"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "सांख्यिकीय विश्लेषण में दो चरों के बीच संबंधों की दिशा और तीव्रता मापने वाले 'सहसंबंध गुणांक' (Correlation Coefficient) का मान किन सीमाओं के बीच होता है?", options: ["-1 से +1 के बीच", "0 से 1 के बीच", "-infinity से +infinity", "कोई निश्चित सीमा नहीं"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "The statistical correlation coefficient index (r) evaluating the operational strength between variables falls strictly between:", options: ["-1 and +1 inclusive", "0 and 1 exclusively", "-infinity and +infinity boundaries", "No mathematically defined numerical range"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "यदि एक व्यावसायिक परियोजना की 'शुद्ध वर्तमान मूल्य' (NPV) का मान शून्य से अधिक (> 0) आता है, तो वित्तीय निर्णय क्या होना चाहिए?", options: ["परियोजना को स्वीकार कर लेना चाहिए (Accept Project)", "परियोजना को तुरंत खारिज कर देना चाहिए", "परियोजना को लंबे समय के लिए टाल देना चाहिए", "डेटा अपूर्ण माना जाएगा"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "If the evaluated Net Present Value (NPV) computation for an industrial commercial project returns a value greater than zero (> 0):", options: ["The business should formally accept the project investment", "The project must be immediately rejected on financial grounds", "The decision parameters require a long-term hold status", "The financial dataset is deemed completely mathematically invalid"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "प्रतिचयन सिद्धांत (Sampling Theory) के तहत पूरी समष्टि (Population) में से प्रत्येक इकाई के चुने जाने की समान संभावना वाली विधि क्या कहलाती है?", options: ["सरल यादृच्छिक प्रतिचयन (Simple Random Sampling)", "सप्रयोजन प्रतिचयन", "कोटा प्रतिचयन", "स्नोबॉल प्रतिचयन"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "The sampling distribution approach where every individual element of the target population carries an identical selection probability is:", options: ["Simple Random Sampling", "Purposive / Judgmental Sampling technique", "Quota Sampling structural distribution", "Snowball non-probability network selection"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "सांख्यिकी में आधार वर्ष के सापेक्ष चालू वर्ष के मूल्य परिवर्तनों को मापने वाला 'सूचकांक' (Index Number) क्या कहलाता है?", options: ["आर्थिक बैरोमीटर (Economic Barometer)", "लघु फलन", "रेखीय ढाल", "प्रसरण गुणांक"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "Index Numbers tracking directional shifts in pricing metrics relative to an established base year are called the:", options: ["Economic Barometers", "Logarithmic Functions", "Linear Trend Slopes", "Coefficient of Variance functions"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "यदि वित्तीय गणना में ब्याज का संयोजन तिमाही (Quarterly) आधार पर किया जाता है, तो वार्षिक दर और समय में क्या बदलाव होता है?", options: ["दर एक-चौथाई (R/4) और समय चार गुना (4T) हो जाता है", "दर आधी और समय दोगुना हो जाता है", "दर चार गुना और समय एक-चौथाई हो जाता है", "कोई बदलाव नहीं होता"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "If the compound interest parameters on a commercial loan are compounded quarterly, the adjustments applied to nominal Rate (R) and Time (T) are:", options: ["Rate becomes R/4 and Time scales to 4T", "Rate becomes R/2 and Time maps to 2T", "Rate multiplies to 4R and Time contracts to T/4", "No mathematical adjustments are executed"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "लागत फलन C(x) = 5x² + 3x + 10 के लिए 'सीमांत लागत' (Marginal Cost) ज्ञात करने के लिए गणितीय रूप से क्या किया जाता है?", options: ["लागत फलन का x के सापेक्ष प्रथम अवकलन (dC/dx)", "लागत फलन का समाकलन", "लागत फलन को x से विभाजित करना", "x का मान शून्य रखना"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "To extract the Marginal Cost tracking equation from a raw total cost function C(x) = 5x² + 3x + 10, one must calculate:", options: ["The first derivative of the function with respect to x (dC/dx)", "The indefinite calculus integration of the cost function", "Divide the total cost function directly by variable x", "Substitute variable x with a numerical value of zero"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "वित्तीय लेखांकन में प्रयुक्त 'मिश्रित वार्षिकी' या अनवरत वार्षिकी (Perpetuity) का वास्तविक गणितीय और व्यावसायिक तात्पर्य क्या है?", options: ["समान नकद प्रवाह की एक ऐसी शृंखला जो अनंत काल तक चलती है", "केवल दो वर्षों के लिए होने वाला भुगतान", "बैंक ऋण पर मिलने वाली एकमुश्त छूट", "त्रैमासिक कर रिफंड चक्र"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "Within actuarial math applications, a financial investment structured as a Perpetuity is defined as an annuity where:", options: ["The uniform cash flows progress infinitely across time horizons", "The periodic payouts contract and terminate after a two-year phase", "A lump-sum incentive is shaved off long-term bank liabilities", "The quarterly tax refund cycles complete execution tasks"], correct: 0 },

// ==========================================
// 21. कंप्यूटर विज्ञान (Computer Science) - 10 बोर्ड प्रश्न
// ==========================================
{ subject: "computer_science", lang: "hi", question: "डेटाबेस मैनेजमेंट सिस्टम (DBMS) में 'ACID' संपत्तियों के तहत अक्षर 'I' का पूरा रूप क्या होता है जो सुरक्षा सुनिश्चित करता है?", options: ["आइसोलेशन (Isolation)", "इंटीग्रिटी", "इटरेशन", "इंडेक्सिंग"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "What does the character 'I' signify within the standardized transactional 'ACID' properties governing DBMS operations?", options: ["Isolation", "Integrity", "Iteration", "Indexing algorithms"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "पायथन प्रोग्रामिंग में किसी मौजूदा लिस्ट (List) के अंत में एक नया एलिमेंट जोड़ने के लिए किस इन-बिल्ट मेथड का उपयोग करते हैं?", options: ["append()", "add()", "insert()", "extend()"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Which built-in structural list method is invoked in Python programming to append a single element to the tail of an active list?", options: ["append()", "add()", "insert()", "extend()"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "कंप्यूटर नेटवर्किंग में प्रयुक्त 'OSI मॉडल' (OSI Model) में कुल कितनी कार्यात्मक परतें या लेयर्स उपस्थित होती हैं?", options: ["7 परतें (7 Layers)", "5 परतें", "6 परतें", "4 परतें"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "The conceptual Open Systems Interconnection (OSI) network architectural framework comprises a total of how many functional layers?", options: ["7 Layers", "5 Layers", "6 Layers", "4 Layers"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "डेटा स्ट्रक्चर में 'स्टैक' (Stack) किस प्रोसेसिंग सिद्धांत पर कार्य करता है जिसके तहत डेटा इन्सर्ट और डिलीट होता है?", options: ["लास्ट-इन फर्स्ट-आउट (LIFO)", "फर्स्ट-इन फर्स्ट-आउट (FIFO)", "रैंडम एक्सेस", "प्रायोरिटी शेड्यूलिंग"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "The sequential processing rules governing element operations within a linear Stack data structure follow the:", options: ["Last-In, First-Out (LIFO) framework", "First-In, First-Out (FIFO) pipeline", "Random Access distribution model", "Priority Scheduling operational algorithm"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "रिलेशनल डेटाबेस टेबल में प्राथमिक कुंजी (Primary Key) के संदर्भ में कौन सी शर्त अनिवार्य रूप से लागू होती है?", options: ["यह मान कभी भी NULL नहीं हो सकता और हमेशा यूनिक (Unique) होना चाहिए", "यह केवल संख्यात्मक हो सकती है", "तालिका में कई प्राथमिक कुंजियाँ हो सकती हैं", "यह डुप्लिकेट मान रख सकती है"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Which core integrity constraint strictly regulates the operational deployment of a Primary Key inside a database table?", options: ["The attribute value must be completely Unique and cannot contain a NULL entry", "The key values are restricted to numerical characters only", "A single relational table layout can contain multiple distinct primary keys", "The attribute field natively allows duplicate entries across rows"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "इंटरनेट प्रोटोकॉल के तहत 'IPv4' एड्रेस का आकार कितने बिट्स का होता है जो प्रत्येक डिवाइस को ट्रैक करता है?", options: ["32 बिट्स", "64 बिट्स", "128 बिट्स", "16 बिट्स"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "What is the precise bit-length configuration allocated to route data under a standard IPv4 address configuration?", options: ["32 bits", "64 bits", "128 bits", "16 bits"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "वेब डेवलपमेंट में प्रयुक्त स्क्रिप्टिंग भाषा जावास्क्रिप्ट (JavaScript) में किसी वेरिएबल को ब्लॉक-स्कोप्ड घोषित करने के लिए किस कीवर्ड का उपयोग होता है?", options: ["let", "var", "global", "define"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Which variable declaration keyword was introduced in modern JavaScript to instantiate block-scoped variables effectively?", options: ["let", "var", "global", "define keyword option"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "साइबर सुरक्षा में वायरस, वॉर्म्स और ट्रोजन हॉर्स जैसे हानिकारक सॉफ्टवेयर प्रोग्राम्स को सामूहिक रूप से क्या कहा जाता है?", options: ["मालवेयर (Malware)", "स्पैम", "फ़ायरवॉल", "फिशिंग कोड"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "In network security, malicious software applications like logic bombs, ransomware, and trojan horses are collectively classified as:", options: ["Malware", "Spam mail scripts", "Firewall filtering exceptions", "Phishing source assets"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "एसक्यूएल (SQL) के अंतर्गत टेबल की संरचना में बदलाव करने वाले ALTER कमांड को किस डेटा भाषा की श्रेणी में रखा जाता है?", options: ["DDL (डेटा डेफिनिशन लैंग्वेज)", "DML", "DCL", "TCL"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Under which structured query sub-language branch are schema-modifying commands like ALTER TABLE classified inside SQL configurations?", options: ["DDL (Data Definition Language)", "DML (Data Manipulation Language)", "DCL (Data Control Language)", "TCL (Transaction Control Language)"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "सॉर्टिंग एल्गोरिदम के इतिहास में 'डिवाइड एंड कॉनकर' (Divide and Conquer) सिद्धांत पर आधारित सबसे तेज सॉर्बिंग एल्गोरिदम कौन सा है?", options: ["मर्ज सॉर्ट (Merge Sort)", "बबल सॉर्ट", "इंसर्शन सॉर्ट", "सिलेक्शन सॉर्ट"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Which prominent sorting algorithm utilizes the algorithmic paradigm of 'Divide and Conquer' to sort elements efficiently?", options: ["Merge Sort", "Bubble Sort layout", "Insertion Sort script", "Selection Sort method"] },
// ==========================================
// 1. इतिहास (History) - SET 7
// ==========================================
{ subject: "history", lang: "hi", question: "प्राचीन भारतीय इतिहास में 'गौतमीपुत्र शातकर्णी' किस राजवंश का सबसे प्रतापी और महान शासक था?", options: ["सातवाहन वंश", "कुषाण वंश", "मौर्य वंश", "गुप्त वंश"], correct: 0 },
{ subject: "history", lang: "en", question: "In ancient Indian history, 'Gautamiputra Satakarni' was the greatest and most powerful ruler of which dynasty?", options: ["Satavahana Dynasty", "Kushan Dynasty", "Mauryan Dynasty", "Gupta Dynasty"], correct: 0 },
{ subject: "history", lang: "hi", question: "गांधी-इरविन समझौता (Gandhi-Irwin Pact) किस वर्ष हस्ताक्षरित हुआ था, जिसके बाद सविनय अवज्ञा आंदोलन स्थगित किया गया?", options: ["1931", "1929", "1932", "1942"], correct: 0 },
{ subject: "history", lang: "en", question: "In which year was the Gandhi-Irwin Pact signed, which led to the suspension of the Civil Disobedience Movement?", options: ["1931", "1929", "1932", "1942"], correct: 0 },
{ subject: "history", lang: "hi", question: "सिंधु घाटी सभ्यता के किस स्थल से 'नर्तकी की कांस्य मूर्ति' (Bronze Dancing Girl) प्राप्त हुई है?", options: ["मोहनजोदड़ो", "हड़प्पा", "लोथल", "धौलावीरा"], correct: 0 },
{ subject: "history", lang: "en", question: "From which site of the Indus Valley Civilization was the famous 'Bronze Dancing Girl' excavated?", options: ["Mohenjo-daro", "Harappa", "Lothal", "Dholavira"], correct: 0 },
{ subject: "history", lang: "hi", question: "मुगल काल में 'मनसबदारी प्रथा' की शुरुआत किस सम्राट द्वारा सैन्य और नागरिक प्रशासन को सुदृढ़ करने के लिए की गई थी?", options: ["अकबर", "बाबर", "शाहजहाँ", "औरंगजेब"], correct: 0 },
{ subject: "history", lang: "en", question: "Which Mughal Emperor introduced the 'Mansabdari System' to strengthen the military and civil administration?", options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"], correct: 0 },
{ subject: "history", lang: "hi", question: "भारतीय राष्ट्रीय कांग्रेस की प्रथम महिला अध्यक्ष (First Woman President) बनने का गौरव किसे प्राप्त है?", options: ["एनी बेसेंट", "सरोजिनी नायडू", "नेली सेनगुप्ता", "अरुणा आसफ अली"], correct: 0 },
{ subject: "history", lang: "en", question: "Who holds the distinction of being the first woman President of the Indian National Congress?", options: ["Annie Besant", "Sarojini Naidu", "Nellie Sengupta", "Aruna Asaf Ali"], correct: 0 },

// ==========================================
// 2. राजनीति विज्ञान (Political Science) - SET 7
// ==========================================
{ subject: "political", lang: "hi", question: "भारतीय संविधान की प्रस्तावना में 'समाजवादी, धर्मनिरपेक्ष और अखंडता' शब्द किस संविधान संशोधन द्वारा जोड़े गए थे?", options: ["42वें संशोधन (1976)", "44वें संशोधन (1978)", "73वें संशोधन", "86वें संशोधन"], correct: 0 },
{ subject: "political", lang: "en", question: "The words 'Socialist, Secular and Integrity' were added to the Preamble of the Indian Constitution by which amendment?", options: ["42nd Amendment (1976)", "44th Amendment (1978)", "73rd Amendment", "86th Amendment"], correct: 0 },
{ subject: "political", lang: "hi", question: "भारत के सर्वोच्च न्यायालय (Supreme Court) के न्यायाधीशों की सेवानिवृत्ति (Retirement) आयु कितनी निर्धारित है?", options: ["65 वर्ष", "62 वर्ष", "60 वर्ष", "70 वर्ष"], correct: 0 },
{ subject: "political", lang: "en", question: "What is the mandatory retirement age for the judges of the Supreme Court of India?", options: ["65 years", "62 years", "60 years", "70 years"], correct: 0 },
{ subject: "political", lang: "hi", question: "भारतीय संविधान का कौन सा अनुच्छेद 'अस्पृश्यता के अंत' (Abolition of Untouchability) का प्रावधान करता है?", options: ["अनुच्छेद 17", "अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21"], correct: 0 },
{ subject: "political", lang: "en", question: "Which Article of the Indian Constitution provides for the 'Abolition of Untouchability'?", options: ["Article 17", "Article 14", "Article 19", "Article 21"], correct: 0 },
{ subject: "political", lang: "hi", question: "संसद के दोनों सदनों की संयुक्त बैठक (Joint Sitting) की अध्यक्षता निम्नलिखित में से कौन करता है?", options: ["लोकसभा अध्यक्ष (Speaker)", "भारत का राष्ट्रपति", "उपराष्ट्रपति", "प्रधानमंत्री"], correct: 0 },
{ subject: "political", lang: "en", question: "Who presides over the Joint Sitting of both houses of the Indian Parliament?", options: ["Speaker of Lok Sabha", "President of India", "Vice President", "Prime Minister"], correct: 0 },
{ subject: "political", lang: "hi", question: "शीत युद्ध के दौरान सोवियत संघ के प्रभाव को रोकने के लिए अमेरिका द्वारा 1949 में किस सैन्य गठबंधन की स्थापना की गई थी?", options: ["नाटो (NATO)", "वारसा पैक्ट", "सीटो (SEATO)", "सेंटो (CENTO)"], correct: 0 },
{ subject: "political", lang: "en", question: "Which military alliance was established by the USA in 1949 to counter the Soviet Union's influence during the Cold War?", options: ["NATO", "Warsaw Pact", "SEATO", "CENTO"], correct: 0 },

// ==========================================
// 3. भूगोल (Geography) - SET 7
// ==========================================
{ subject: "geography", lang: "hi", question: "पृथ्वी के वायुमंडल की वह कौन सी परत है जहाँ सभी प्रकार की मौसमी घटनाएं (आंधी, वर्षा, बादल) घटित होती हैं?", options: ["क्षोभमंडल (Troposphere)", "समतापमंडल", "मध्यमंडल", "आयनमंडल"], correct: 0 },
{ subject: "geography", lang: "en", question: "In which layer of the Earth's atmosphere do almost all weather phenomena (storms, rain, clouds) occur?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Ionosphere"], correct: 0 },
{ subject: "geography", lang: "hi", question: "भारत और श्रीलंका को अलग करने वाली संकरी समुद्री जलसंधि (Strait) का नाम क्या है?", options: ["पाक जलसंधि (Palk Strait)", "मलक्का जलसंधि", "बेरिंग जलसंधि", "जिब्राल्टर जलसंधि"], correct: 0 },
{ subject: "geography", lang: "en", question: "What is the name of the narrow maritime strait that separates India from Sri Lanka?", options: ["Palk Strait", "Strait of Malacca", "Bering Strait", "Strait of Gibraltar"], correct: 0 },
{ subject: "geography", lang: "hi", question: "लौह अयस्क के उत्पादन के लिए प्रसिद्ध 'कुद्रेमुख' (Kudremukh) खदानें भारत के किस राज्य में स्थित हैं?", options: ["कर्नाटक", "झारखंड", "ओडिशा", "छत्तीसगढ़"], correct: 0 },
{ subject: "geography", lang: "en", question: "The 'Kudremukh' mines, renowned for their vast iron ore production, are located in which Indian state?", options: ["Karnataka", "Jharkhand", "Odisha", "Chhattisgarh"], correct: 0 },
{ subject: "geography", lang: "hi", question: "विश्व का सबसे बड़ा नदी द्वीप (River Island) 'माजुली' भारत की किस नदी पर स्थित है?", options: ["ब्रह्मपुत्र", "गंगा", "गोदावरी", "नर्मदा"], correct: 0 },
{ subject: "geography", lang: "en", question: "Majuli, universally recognized as the world's largest river island, is located on which Indian river?", options: ["Brahmaputra", "Ganges", "Godavari", "Narmada"], correct: 0 },
{ subject: "geography", lang: "hi", question: "किस कृषि प्रणाली को 'कर्तन एवं दहन कृषि' (Slash and Burn Agriculture) के नाम से भी जाना जाता है?", options: ["स्थानांतरित कृषि (Shifting Cultivation)", "गहन निर्वाह कृषि", "व्यापारिक कृषि", "रोपण कृषि"], correct: 0 },
{ subject: "geography", lang: "en", question: "Which agricultural system is widely referred to as 'Slash and Burn Agriculture'?", options: ["Shifting Cultivation", "Intensive Subsistence Farming", "Commercial Farming", "Plantation Farming"], correct: 0 },

// ==========================================
// 4. अर्थशास्त्र (Economics) - SET 7
// ==========================================
{ subject: "economics", lang: "hi", question: "अर्थशास्त्र में 'मुद्रास्फीति' (Inflation) का सीधा और वास्तविक अर्थ क्या होता है?", options: ["वस्तुओं और सेवाओं के सामान्य मूल्य स्तर में निरंतर वृद्धि", "मूल्य स्तर में गिरावट", "मुद्रा के मूल्य में वृद्धि", "बेरोजगारी में कमी"], correct: 0 },
{ subject: "economics", lang: "en", question: "What is the literal and operational meaning of 'Inflation' in economics?", options: ["A continuous rise in the general price level of goods and services", "A drop in general price levels", "An increase in the value of currency", "A decrease in unemployment"], correct: 0 },
{ subject: "economics", lang: "hi", question: "भारत में पंचवर्षीय योजनाओं (Five Year Plans) के मॉडल को किस देश के आर्थिक मॉडल से अपनाया गया था?", options: ["सोवियत संघ (USSR)", "अमेरिका", "ब्रिटेन", "जर्मनी"], correct: 0 },
{ subject: "economics", lang: "en", question: "The model of 'Five Year Plans' implemented in India was adopted from the economic framework of which nation?", options: ["Soviet Union (USSR)", "USA", "Britain", "Germany"], correct: 0 },
{ subject: "economics", lang: "hi", question: "बैंकों का बैंक (Banker's Bank) और अंतिम ऋणदाता के रूप में भारत में कौन कार्य करता है?", options: ["भारतीय रिजर्व बैंक (RBI)", "स्टेट बैंक ऑफ इंडिया (SBI)", "वित्त मंत्रालय", "नाबार्ड (NABARD)"], correct: 0 },
{ subject: "economics", lang: "en", question: "Which institution functions as the 'Banker's Bank' and the lender of last resort in India?", options: ["Reserve Bank of India (RBI)", "State Bank of India (SBI)", "Ministry of Finance", "NABARD"], correct: 0 },
{ subject: "economics", lang: "hi", question: "जीएसटी (GST - वस्तु एवं सेवा कर) भारत में किस प्रकार के कर (Tax) का एक प्रमुख उदाहरण है?", options: ["अप्रत्यक्ष कर (Indirect Tax)", "प्रत्यक्ष कर", "संपत्ति कर", "निगम कर"], correct: 0 },
{ subject: "economics", lang: "en", question: "In India, GST (Goods and Services Tax) serves as a prime example of which category of taxation?", options: ["Indirect Tax", "Direct Tax", "Wealth Tax", "Corporate Tax"], correct: 0 },
{ subject: "economics", lang: "hi", question: "जब किसी देश का आयात (Imports) उसके निर्यात (Exports) से अधिक हो जाता है, तो व्यापार संतुलन (Balance of Trade) कैसा होता है?", options: ["प्रतिकूल या घाटे का (Deficit)", "अनुकूल या लाभ का", "संतुलित", "शून्य"], correct: 0 },
{ subject: "economics", lang: "en", question: "When a nation's total imports exceed its total exports, what is the resulting state of its Balance of Trade?", options: ["Deficit / Unfavorable", "Surplus / Favorable", "Balanced", "Zero"], correct: 0 },

// ==========================================
// 5. समाजशास्त्र (Sociology) - SET 7
// ==========================================
{ subject: "sociology", lang: "hi", question: "भारत में 'सत्यशोधक समाज' की स्थापना 1873 में दलितों और शोषितों के उत्थान के लिए किसने की थी?", options: ["ज्योतिराव फुले", "राजा राममोहन राय", "डॉ. बी.आर. अम्बेडकर", "ईश्वरचंद्र विद्यासागर"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Who founded the 'Satyashodhak Samaj' in 1873 for the upliftment of oppressed classes and Dalits in India?", options: ["Jyotirao Phule", "Raja Ram Mohan Roy", "Dr. B.R. Ambedkar", "Ishwar Chandra Vidyasagar"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "ग्रामीण समाज में पाई जाने वाली 'संयुक्त परिवार' (Joint Family) व्यवस्था का विघटन मुख्य रूप से किस कारण हो रहा है?", options: ["औद्योगीकरण और शहरीकरण (Industrialization & Urbanization)", "कृषि का विस्तार", "धार्मिक अंधविश्वास", "जनसंख्या में कमी"], correct: 0 },
{ subject: "sociology", lang: "en", question: "What is the primary socio-economic factor driving the disintegration of the traditional 'Joint Family' system in rural India?", options: ["Industrialization and Urbanization", "Expansion of agriculture", "Religious superstitions", "Decline in population"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "समाजशास्त्रीय दृष्टिकोण से 'लिंगानुपात' (Sex Ratio) को प्रति कितने पुरुषों पर महिलाओं की संख्या के रूप में मापा जाता है?", options: ["प्रति 1000 पुरुषों पर", "प्रति 100 पुरुषों पर", "प्रति 10,000 पुरुषों पर", "प्रति 500 पुरुषों पर"], correct: 0 },
{ subject: "sociology", lang: "en", question: "In sociological demographics, the 'Sex Ratio' is measured as the number of females per how many males?", options: ["Per 1000 males", "Per 100 males", "Per 10,000 males", "Per 500 males"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "वह प्रक्रिया क्या कहलाती है जिसके द्वारा कोई निम्न जाति उच्च जाति के रीति-रिवाजों और जीवनशैली को अपनाकर अपनी सामाजिक स्थिति सुधारने का प्रयास करती है?", options: ["संस्कृतिकरण (Sanskritisation)", "पश्चिमीकरण", "लौकिकीकरण", "आधुनिकीकरण"], correct: 0 },
{ subject: "sociology", lang: "en", question: "The social process by which a lower caste attempts to elevate its social status by adopting the customs and rituals of upper castes is called:", options: ["Sanskritisation", "Westernisation", "Secularisation", "Modernisation"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "भारतीय समाज में 'हरित क्रांति' (Green Revolution) का सर्वाधिक सकारात्मक प्रभाव किस वर्ग पर पड़ा?", options: ["बड़े और मध्यम किसान", "कृषि मजदूर", "शहरी व्यापारी", "जनजातीय समुदाय"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Which social class in agrarian Indian society reaped the maximum positive benefits from the 'Green Revolution'?", options: ["Large and medium-scale farmers", "Landless agricultural laborers", "Urban traders", "Tribal communities"], correct: 0 },

// ==========================================
// 6. मनोविज्ञान (Psychology) - SET 7
// ==========================================
{ subject: "psychology", lang: "hi", question: "प्रसिद्ध 'शास्त्रीय अनुबंधन' (Classical Conditioning) का सिद्धांत किस रूसी मनोवैज्ञानिक द्वारा कुत्तों पर प्रयोग करके दिया गया था?", options: ["इवान पावलोव (Ivan Pavlov)", "बी. एफ. स्किनर", "अल्बर्ट बांडुरा", "जीन पियाजे"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The famous theory of 'Classical Conditioning' was formulated based on experiments with dogs by which Russian psychologist?", options: ["Ivan Pavlov", "B.F. Skinner", "Albert Bandura", "Jean Piaget"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "सिगमंड फ्रायड द्वारा विकसित 'मनोविश्लेषणवाद' (Psychoanalysis) मुख्य रूप से मन के किस हिस्से के अध्ययन पर जोर देता है?", options: ["अचेतन मन (Unconscious Mind)", "चेतन मन", "अर्धचेतन मन", "अतिचेतन मन"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Sigmund Freud's 'Psychoanalysis' fundamentally emphasizes the deep study of which part of the human mind?", options: ["Unconscious Mind", "Conscious Mind", "Preconscious Mind", "Superconscious Mind"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "बाल विकास में 'संज्ञानात्मक विकास का सिद्धांत' (Theory of Cognitive Development) अवस्थाओं के आधार पर किसने प्रतिपादित किया था?", options: ["जीन पियाजे (Jean Piaget)", "लेव वाइगोत्स्की", "एरिक एरिक्सन", "लॉरेंस कोहलबर्ग"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Who propounded the stage-based 'Theory of Cognitive Development' in developmental psychology?", options: ["Jean Piaget", "Lev Vygotsky", "Erik Erikson", "Lawrence Kohlberg"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "मानसिक आयु (Mental Age) और वास्तविक आयु का अनुपात निकालकर 'बुद्धि लब्धि' (IQ) का संप्रत्यय सर्वप्रथम किसने विकसित किया था?", options: ["विलियम स्टर्न (William Stern)", "अल्फ्रेड बिने", "डेविड वेक्स्लर", "हावर्ड गार्डनर"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Who originally developed the mathematical concept of 'Intelligence Quotient' (IQ) as a ratio of mental age to chronological age?", options: ["William Stern", "Alfred Binet", "David Wechsler", "Howard Gardner"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "तनाव (Stress) के दौरान शरीर में 'लड़ो या भागो' (Fight or Flight) प्रतिक्रिया के लिए कौन सा हार्मोन मुख्य रूप से जिम्मेदार है?", options: ["एड्रेनालाईन / एपिनेफ्रीन (Adrenaline)", "इंसुलिन", "थायरोक्सिन", "मेलाटोनिन"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Which core hormone is primarily responsible for triggering the 'Fight or Flight' physiological response during acute stress?", options: ["Adrenaline / Epinephrine", "Insulin", "Thyroxine", "Melatonin"], correct: 0 },

// ==========================================
// 7. गृह विज्ञान (Home Science) - SET 7
// ==========================================
{ subject: "home_science", lang: "hi", question: "भोजन पकाने की वह कौन सी विधि है जिसमें खाद्य पदार्थ पानी के सीधे संपर्क में नहीं आता, बल्कि भाप द्वारा पकाया जाता है?", options: ["स्टीमिंग / भाप में पकाना", "उबालना", "तलना", "सिमरिंग"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Which cooking method involves cooking food using the vapor produced by boiling water, without direct contact with the water?", options: ["Steaming", "Boiling", "Deep Frying", "Simmering"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "विटामिन डी की कमी से बच्चों में हड्डियों के कमजोर होने और मुड़ने की बीमारी को क्या कहा जाता है?", options: ["रिकेट्स (सूखा रोग / Rickets)", "स्कर्वी", "रतौंधी", "एनीमिया"], correct: 0 },
{ subject: "home_science", lang: "en", question: "The childhood bone disease characterized by softening and bending of bones due to a severe deficiency of Vitamin D is called:", options: ["Rickets", "Scurvy", "Night Blindness", "Anemia"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "ऊन और रेशम जैसे प्रोटीन तंतुओं (Protein Fibers) को धोते समय किस प्रकार के साबुन या डिटर्जेंट का उपयोग करना चाहिए?", options: ["हल्का और उदासीन साबुन (Mild and Neutral Soap)", "अत्यधिक क्षारीय साबुन", "ब्लीच युक्त साबुन", "सख्त डिटरजेंट"], correct: 0 },
{ subject: "home_science", lang: "en", question: "When laundering animal protein fibers like wool and silk, which type of cleaning agent should strictly be utilized?", options: ["Mild and Neutral Soap/Detergent", "Highly alkaline soaps", "Bleach-infused detergents", "Harsh synthetic detergents"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "परिवार की आय और व्यय का अग्रिम अनुमानित लेखा-जोखा तैयार करना गृह प्रबंधन में क्या कहलाता है?", options: ["पारिवारिक बजट (Family Budget)", "बहीखाता", "पासबुक", "निवेश योजना"], correct: 0 },
{ subject: "home_science", lang: "en", question: "In home management, the process of preparing an advance estimated written outline of expected family income and expenditures is called a:", options: ["Family Budget", "Ledger Account", "Bank Passbook", "Investment Portfolio"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "गर्भावस्था के दौरान महिला के आहार में 'आयरन' (लौह तत्व) की प्रचुर मात्रा क्यों आवश्यक होती है?", options: ["रक्त में हीमोग्लोबिन के निर्माण और एनीमिया से बचाव के लिए", "हड्डियों को मजबूत करने के लिए", "आंखों की रोशनी के लिए", "पाचन तंत्र के लिए"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Why is an abundant intake of dietary 'Iron' exceptionally crucial for a woman during her pregnancy period?", options: ["To synthesize hemoglobin in the blood and prevent anemia", "To strengthen skeletal bones", "To improve ocular vision", "To enhance the digestive tract"], correct: 0 },

// ==========================================
// 8. दर्शनशास्त्र (Philosophy) - SET 7
// ==========================================
{ subject: "philosophy", lang: "hi", question: "प्राचीन भारतीय दर्शन में 'योग दर्शन' के प्रणेता या संस्थापक महर्षि कौन माने जाते हैं?", options: ["महर्षि पतंजलि", "महर्षि कपिल", "महर्षि कणाद", "महर्षि जैमिनि"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "In ancient Indian philosophy, who is universally recognized as the foundational sage and propounder of the 'Yoga Darshana'?", options: ["Maharishi Patanjali", "Maharishi Kapila", "Maharishi Kanada", "Maharishi Jaimini"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "बौद्ध धर्म के अनुसार जीवन के 'चार आर्य सत्यों' (Four Noble Truths) में पहला सत्य निम्नलिखित में से क्या है?", options: ["संसार में दुःख है (Dukkha)", "दुःख का कारण है", "दुःख का निवारण है", "दुःख निवारण का मार्ग है"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "According to core Buddhist philosophy, what is the very first absolute truth among the 'Four Noble Truths'?", options: ["The world is full of suffering (Dukkha)", "There is a cause for suffering", "There is an end to suffering", "There is a path to end suffering"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "पाश्चात्य दर्शन में "मैं सोचता हूँ, इसलिए मैं हूँ" (Cogito, ergo sum) का प्रसिद्ध सिद्धांत किस दार्शनिक ने दिया था?", options: ["रेने डेकार्ट (René Descartes)", "सुकरात", "प्लेटो", "इमैनुएल कांट"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "Which influential Western philosopher coined the foundational epistemological proposition 'I think, therefore I am' (Cogito, ergo sum)?", options: ["René Descartes", "Socrates", "Plato", "Immanuel Kant"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "जैन दर्शन के उस सिद्धांत को क्या कहते हैं जो अहिंसा को परम धर्म (अहिंसा परमो धर्म:) मानता है और सभी जीवों के प्रति दया सिखाता है?", options: ["अहिंसा और जीव दया", "अनेकांतवाद", "स्याद्वाद", "अपरिग्रह"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "What is the supreme ethical principle in Jain philosophy that mandates absolute non-injury and compassion towards all living entities?", options: ["Ahimsa (Non-violence)", "Anekantavada", "Syadvada", "Aparigraha"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "नीतिशास्त्र (Ethics) में 'उपयोगितावाद' (Utilitarianism) का सिद्धांत मुख्य रूप से किस बात पर जोर देता है?", options: ["अधिकतम लोगों के अधिकतम सुख पर", "ईश्वर की आज्ञा पालन पर", "आत्म-त्याग पर", "केवल व्यक्तिगत स्वार्थ पर"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "In moral philosophy, the ethical theory of 'Utilitarianism' principally judges actions based on what outcome?", options: ["The greatest happiness for the greatest number of people", "Strict obedience to divine commands", "Absolute self-sacrifice", "Pure personal egoism"], correct: 0 },

// ==========================================
// 9. कानूनी अध्ययन (Legal Studies) - SET 7
// ==========================================
{ subject: "legal_studies", lang: "hi", question: "भारतीय दंड संहिता (IPC) या न्याय संहिता के अनुसार, 'हत्या' (Murder) को अपराध के रूप में किस श्रेणी में रखा जाता है?", options: ["संज्ञेय और गैर-जमानती अपराध (Cognizable & Non-Bailable)", "असंज्ञेय और जमानती अपराध", "केवल दीवानी अपराध", "समझौता योग्य अपराध"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Under Indian criminal law jurisprudence, the heinous offense of 'Murder' is strictly categorized as what type of offense?", options: ["Cognizable and Non-Bailable Offense", "Non-Cognizable and Bailable Offense", "Purely Civil Offense", "Compoundable Offense"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "सूचना का अधिकार अधिनियम (RTI Act) 2005 के तहत किसी नागरिक द्वारा मांगी गई सामान्य जानकारी कितने दिनों के भीतर देना अनिवार्य है?", options: ["30 दिन", "15 दिन", "45 दिन", "60 दिन"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Under the provisions of the RTI Act 2005, what is the mandatory time limit for providing general information requested by a citizen?", options: ["30 Days", "15 Days", "45 Days", "60 Days"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "विधिक सेवा प्राधिकरण अधिनियम के अंतर्गत, समाज के गरीब और कमजोर वर्गों को 'मुफ्त कानूनी सहायता' प्रदान करना किसका दायित्व है?", options: ["राज्य का दायित्व (State's Duty)", "पुलिस का दायित्व", "सुप्रीम कोर्ट का", "वकीलों की संस्था का"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Under the Legal Services Authorities Act, ensuring the provision of 'Free Legal Aid' to marginalized sections is fundamentally the duty of:", options: ["The State", "The Police Department", "The Supreme Court directly", "Private Bar Associations"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "संविधान के अनुच्छेद 21 के तहत दिए गए 'प्राण और दैहिक स्वतंत्रता के संरक्षण' के अधिकार का विस्तार करके इसमें किसे शामिल किया गया है?", options: ["निजता का अधिकार (Right to Privacy) और स्वच्छ पर्यावरण", "हड़ताल करने का अधिकार", "संपत्ति खरीदने का अधिकार", "विदेशी नागरिकता का अधिकार"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Through judicial interpretations, the 'Protection of Life and Personal Liberty' under Article 21 has been expansively broadened to include:", options: ["Right to Privacy and a clean environment", "Right to strike and protest", "Right to acquire unlimited property", "Right to foreign citizenship"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "भारतीय अदालतों में जनहित से जुड़े मुद्दों को उठाने के लिए 'जनहित याचिका' (PIL - Public Interest Litigation) की अवधारणा की शुरुआत किसने की थी?", options: ["जस्टिस पी. एन. भगवती और वी. आर. कृष्ण अय्यर", "जस्टिस एच. जे. कनिया", "जस्टिस चंद्रचूड़", "जस्टिस दीपक मिश्रा"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Which visionary jurists are credited with pioneering the concept of Public Interest Litigation (PIL) in the Indian judicial system?", options: ["Justice P.N. Bhagwati and V.R. Krishna Iyer", "Justice H.J. Kania", "Justice Y.V. Chandrachud", "Justice Dipak Misra"], correct: 0 },

// ==========================================
// 10. हिंदी साहित्य (Hindi Literature) - SET 7
// ==========================================
{ subject: "hindi_lit", lang: "hi", question: "हिंदी गद्य साहित्य में 'कलम का सिपाही' और 'उपन्यास सम्राट' के नाम से किस महान रचनाकार को जाना जाता है?", options: ["मुंशी प्रेमचंद", "जयशंकर प्रसाद", "भारतेंदु हरिश्चंद्र", "फणीश्वरनाथ रेणु"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Which legendary literary figure is universally honored with the titles 'Kalam Ka Sipahi' and 'Emperor of Novels' in Hindi literature?", options: ["Munshi Premchand", "Jaishankar Prasad", "Bharatendu Harishchandra", "Phanishwar Nath Renu"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "गोस्वामी तुलसीदास द्वारा रचित 'रामचरितमानस' मुख्य रूप से किस भाषा या बोली में लिखा गया एक अमर महाकाव्य है?", options: ["अवधी भाषा", "ब्रज भाषा", "खड़ी बोली", "मैथिली"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "The immortal epic 'Ramcharitmanas', composed by Goswami Tulsidas, was originally written in which dialect/language?", options: ["Awadhi", "Braj Bhasha", "Khariboli", "Maithili"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "हिंदी साहित्य के 'रीतिकाल' में किस रस की कविताओं और श्रृंगारिक रचनाओं की सर्वाधिक प्रधानता रही है?", options: ["श्रृंगार रस", "वीर रस", "शांत रस", "करुण रस"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Which 'Rasa' (aesthetic sentiment) was overwhelmingly dominant in the poetic compositions of the 'Reeti Kaal' period in Hindi literature?", options: ["Shringar Rasa (Romantic/Erotic)", "Veer Rasa (Heroic)", "Shant Rasa (Peaceful)", "Karun Rasa (Pathetic)"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "राष्ट्रकवि रामधारी सिंह 'दिनकर' को उनकी किस ओजस्वी रचना के लिए भारतीय ज्ञानपीठ पुरस्कार से सम्मानित किया गया था?", options: ["उर्वशी (Urvashi)", "कुरुक्षेत्र", "रश्मिरथी", "परशुराम की प्रतीक्षा"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Rashtrakavi Ramdhari Singh 'Dinkar' was conferred the prestigious Jnanpith Award for which of his monumental literary works?", options: ["Urvashi", "Kurukshetra", "Rashmirathi", "Parashuram Ki Pratiksha"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "आधुनिक हिंदी साहित्य में छायावाद की 'मीरा' के रूप में किस सुप्रसिद्ध कवयित्री को पहचाना जाता है?", options: ["महादेवी वर्मा", "सुभद्रा कुमारी चौहान", "मन्नू भंडारी", "कृष्णा सोबती"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Which celebrated poetess is widely acknowledged and revered as the 'Meera of Chhayavad' in modern Hindi literature?", options: ["Mahadevi Verma", "Subhadra Kumari Chauhan", "Mannu Bhandari", "Krishna Sobti"], correct: 0 },

// ==========================================
// 11. अंग्रेजी साहित्य (English Literature) - SET 7
// ==========================================
{ subject: "english_lit", lang: "hi", question: "जॉर्ज ऑरवेल के प्रसिद्ध उपन्यास 'एनिमल फार्म' (Animal Farm) में जानवरों का विद्रोह वास्तव में किस ऐतिहासिक घटना का व्यंग्यात्मक रूपक है?", options: ["रूसी क्रांति (Russian Revolution) 1917", "फ्रांसीसी क्रांति", "अमेरिकी स्वतंत्रता संग्राम", "औद्योगिक क्रांति"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "In George Orwell's classic novella 'Animal Farm', the animal rebellion serves as a direct satirical allegory for which historical event?", options: ["The Russian Revolution of 1917", "The French Revolution", "The American War of Independence", "The Industrial Revolution"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "अंग्रेजी के किस सुप्रसिद्ध नाटककार ने 'द मर्चेंट ऑफ वेनिस', 'मैकबेथ' और 'रोमियो एंड जूलियट' जैसी अमर कृतियाँ लिखी हैं?", options: ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "जॉर्ज बर्नार्ड शॉ", "जॉन मिल्टन"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Which legendary English playwright penned immortal masterpieces like 'The Merchant of Venice', 'Macbeth', and 'Romeo and Juliet'?", options: ["William Shakespeare", "Christopher Marlowe", "George Bernard Shaw", "John Milton"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "विलियम वर्डसवर्थ, जॉन कीट्स और पी.बी. शेली अंग्रेजी साहित्य के किस युग या आंदोलन के प्रमुख कवि माने जाते हैं?", options: ["रोमांटिक युग (Romantic Age)", "विक्टोरियन युग", "एलिजाबेथन युग", "आधुनिक युग"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "William Wordsworth, John Keats, and P.B. Shelley are universally recognized as primary pillars of which literary movement in English?", options: ["Romantic Age", "Victorian Age", "Elizabethan Era", "Modernist Period"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "चार्ल्स डिकेंस के उपन्यासों (जैसे ओलिवर ट्विस्ट) की पृष्ठभूमि मुख्य रूप से किस युग के दौरान लंदन के गरीबों की स्थिति दर्शाती है?", options: ["विक्टोरियन युग (Victorian Era)", "जॉर्जियन युग", "एडवर्डियन युग", "रेनेसां युग"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "The narrative backdrop of Charles Dickens' novels (like Oliver Twist) primarily exposes the plight of the poor in London during the:", options: ["Victorian Era", "Georgian Era", "Edwardian Era", "Renaissance Period"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "भारत के किस प्रसिद्ध अंग्रेजी लेखक ने 'मालगुडी डेज' (Malgudi Days) नामक विश्व प्रसिद्ध कहानी संग्रह की रचना की है?", options: ["आर. के. नारायण", "मुल्क राज आनंद", "रस्किन बॉन्ड", "राजा राव"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Which renowned Indian English author created the globally celebrated short story collection titled 'Malgudi Days'?", options: ["R.K. Narayan", "Mulk Raj Anand", "Ruskin Bond", "Raja Rao"], correct: 0 },

// ==========================================
// 12. लेखाकर्म (Accountancy) - SET 7
// ==========================================
{ subject: "accountancy", lang: "hi", question: "लेखांकन में 'दोहरा लेखा प्रणाली' (Double Entry System) के जनक के रूप में किसे विश्व स्तर पर मान्यता प्राप्त है?", options: ["ल्यूकास पेसिओली (Luca Pacioli)", "एडम स्मिथ", "आर्थर फील्डहाउस", "कार्ल मार्क्स"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Who is globally recognized as the historical founding father of the 'Double Entry System' of modern accounting?", options: ["Luca Pacioli", "Adam Smith", "Arthur Fieldhouse", "Karl Marx"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "गैर-व्यापारिक संस्थाओं (NPOs) द्वारा वर्ष के अंत में आय और व्यय का संतुलन जानने के लिए कौन सा मुख्य खाता तैयार किया जाता है?", options: ["आय और व्यय खाता (Income & Expenditure Account)", "लाभ-हानि खाता", "व्यापारिक खाता", "रोकड़ बही"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Which primary ledger account is prepared by Non-Profit Organizations at year-end to ascertain financial surplus or deficit?", options: ["Income & Expenditure Account", "Profit & Loss Account", "Trading Account", "Cash Book summary"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "साझेदारी अधिनियम के अनुसार, जब कोई नया साझेदार फर्म में प्रवेश करता है, तो पुरानी ख्याति (Goodwill) को पुराने साझेदारों के बीच किस अनुपात में अपलिखित किया जाता है?", options: ["पुराने लाभ-विभाजन अनुपात में (Old Ratio)", "त्याग के अनुपात में", "पूंजी के अनुपात में", "बराबर-बराबर"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "Under partnership accounting, when a new partner is admitted, the existing balance of unamortized Goodwill is written off in the:", options: ["Old Profit-Sharing Ratio", "Sacrificing Ratio", "Capital Ratio", "Equal margins strictly"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "एक सीमित कंपनी के वित्तीय विवरण में, अंश निर्गमन पर प्राप्त 'प्रतिभूति प्रीमियम' (Securities Premium) को बैलेंस शीट में कहाँ दर्शाया जाता है?", options: ["शेयरधारक कोष में 'संचय और अधिशेष' (Reserves & Surplus) के अंतर्गत", "चालू दायित्वों में", "स्थायी संपत्तियों में", "अल्पकालीन प्रावधानों में"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "In a corporate Balance Sheet, the 'Securities Premium' collected upon the issuance of shares is formally categorized under:", options: ["Reserves & Surplus under Shareholders' Funds", "Current Liabilities bracket", "Fixed Assets configuration", "Short-term Provisions segment"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "स्थायी संपत्तियों (जैसे मशीनरी, भवन) के मूल्य में समय और उपयोग के कारण आने वाली क्रमिक गिरावट को लेखांकन में क्या कहा जाता है?", options: ["मूल्यह्रास (Depreciation)", "अपरिशोधन", "ऋणमुक्ति", "अधिलाभ"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "The systematic and gradual reduction in the book value of tangible fixed assets due to wear, tear, and time is termed as:", options: ["Depreciation", "Amortization", "Redemption", "Premium surplus"], correct: 0 },

// ==========================================
// 13. व्यावसायिक अध्ययन (Business Studies) - SET 7
// ==========================================
{ subject: "business", lang: "hi", question: "प्रबंध के कार्यों में से वह कार्य कौन सा है जो यह तय करता है कि क्या करना है, कैसे करना है और कब करना है?", options: ["नियोजन (Planning)", "संगठन", "नियंत्रण", "निर्देशन"], correct: 0 },
{ subject: "business", lang: "en", question: "Which core managerial function fundamentally determines in advance what is to be done, how to do it, and when to do it?", options: ["Planning", "Organizing", "Controlling", "Directing"], correct: 0 },
{ subject: "business", lang: "hi", question: "व्यावसायिक संगठन का वह ढांचा क्या कहलाता है जो जानबूझकर प्रबंधकों द्वारा लक्ष्यों की प्राप्ति के लिए बनाया जाता है?", options: ["औपचारिक संगठन (Formal Organisation)", "अनौपचारिक संगठन", "समानांतर संगठन", "अदृश्य संगठन"], correct: 0 },
{ subject: "business", lang: "en", question: "The specific structural framework of an enterprise intentionally designed by management to achieve corporate goals is the:", options: ["Formal Organisation", "Informal Organisation", "Parallel Organisation", "Invisible Organisation"], correct: 0 },
{ subject: "business", lang: "hi", question: "वित्तीय बाजार (Financial Market) का वह अंग कौन सा है जहाँ अल्पकालीन प्रतिभूतियों (जैसे ट्रेजरी बिल) का लेन-देन होता है जिनकी परिपक्वता अवधि एक वर्ष तक होती है?", options: ["मुद्रा बाजार (Money Market)", "पूंजी बाजार", "प्राथमिक बाजार", "द्वितीयक बाजार"], correct: 0 },
{ subject: "business", lang: "en", question: "Which segment of the financial market ecosystem exclusively facilitates the trading of short-term instruments maturing within one year?", options: ["Money Market", "Capital Market", "Primary Market", "Secondary Market"], correct: 0 },
{ subject: "business", lang: "hi", question: "उपभोक्ताओं के अधिकारों की रक्षा के लिए भारत में 'उपभोक्ता संरक्षण अधिनियम' (Consumer Protection Act) का नवीनतम संस्करण किस वर्ष लागू हुआ?", options: ["2019", "1986", "2005", "2014"], correct: 0 },
{ subject: "business", lang: "en", question: "To rigorously safeguard consumer rights, the most recent and updated iteration of the Consumer Protection Act came into force in India in:", options: ["2019", "1986", "2005", "2014"], correct: 0 },
{ subject: "business", lang: "hi", question: "कर्मचारियों को उनके उत्कृष्ट प्रदर्शन के लिए वेतन के अतिरिक्त दिया जाने वाला नकद पुरस्कार या पदोन्नति किस प्रकार की अभिप्रेरणा (Motivation) है?", options: ["सकारात्मक मौद्रिक और अमौद्रिक अभिप्रेरणा", "नकारात्मक अभिप्रेरणा", "कठोर अनुशासन", "बलपूर्वक अभिप्रेरणा"], correct: 0 },
{ subject: "business", lang: "en", question: "The provision of cash bonuses and career promotions to employees for exceptional performance exemplifies which form of motivation?", options: ["Positive financial and non-financial motivation", "Negative coercive motivation", "Strict disciplinary action", "Forced compliance motivation"], correct: 0 },

// ==========================================
// 14. उद्यमशीलता (Entrepreneurship) - SET 7
// ==========================================
{ subject: "entrepreneurship", lang: "hi", question: "एक सफल उद्यमी की सबसे बड़ी मनोवैज्ञानिक विशेषता क्या होती है जो उसे नौकरीपेशा लोगों से अलग करती है?", options: ["जोखिम उठाने की क्षमता और नवाचार (Risk-taking & Innovation)", "निश्चित वेतन की चाह", "आठ घंटे काम करने की आदत", "दूसरों के आदेशों का पालन करना"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "What represents the paramount psychological trait defining a successful entrepreneur, distinguishing them from traditional salaried employees?", options: ["Capacity for calculated risk-taking and relentless innovation", "Desire for fixed monthly salaries", "Habit of strictly working eight-hour shifts", "Strict compliance with top-down orders"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "व्यवसाय शुरू करने से पहले तैयार की जाने वाली 'व्यवसाय योजना' (Business Plan) का मुख्य लाभ क्या होता है?", options: ["यह निवेशकों या बैंकों से ऋण और पूंजी प्राप्त करने में मदद करती है", "इससे टैक्स बिल्कुल माफ हो जाता है", "यह प्रतिस्पर्धियों को खत्म कर देती है", "इसे बनाने से उत्पादन अपने आप शुरू हो जाता है"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "What is the primary practical advantage of drafting a comprehensive 'Business Plan' before launching a new commercial venture?", options: ["It crucially assists in securing capital loans and investments from banks or equity firms", "It guarantees complete and permanent tax exemption", "It legally eliminates all market competitors", "Drafting it automatically commences factory production"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "लघु और कुटीर उद्योगों को बढ़ावा देने के लिए भारत सरकार की 'मुद्रा योजना' (MUDRA Yojana) का मुख्य उद्देश्य क्या है?", options: ["छोटे उद्यमों को आसानी से बिना गारंटी का ऋण उपलब्ध कराना", "विदेशी कंपनियों को सब्सिडी देना", "बड़े उद्योगों को टैक्स छूट देना", "केवल कृषि उपकरण बांटना"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "What is the core strategic objective driving the Government of India's 'MUDRA Yojana' aimed at boosting micro and small enterprises?", options: ["To provide accessible, collateral-free credit funding to micro-entrepreneurs", "To issue subsidies to foreign multi-national corporations", "To grant tax waivers exclusively to heavy industries", "To distribute agricultural tools free of cost"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "वह बिंदु (Point) क्या कहलाता है जहाँ व्यवसाय का कुल राजस्व (Total Revenue) उसकी कुल लागत (Total Cost) के ठीक बराबर हो जाता है?", options: ["सम-विच्छेद बिंदु (Break-Even Point)", "लाभ अधिकतमकरण बिंदु", "निवेश वापसी बिंदु", "शटडाउन बिंदु"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "The precise operational volume threshold where an enterprise's Total Revenue maps identically onto its Total Cost is mathematically termed the:", options: ["Break-Even Point", "Profit Maximization Node", "Return on Investment limit", "Shutdown Protocol threshold"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "नए विचारों और तकनीक आधारित स्टार्टअप्स को शुरुआत में फंडिंग और मेंटरशिप देने वाले बड़े निवेशकों को व्यावसायिक भाषा में क्या कहा जाता है?", options: ["वेंचर कैपिटलिस्ट (Venture Capitalists) या एंजेल इन्वेस्टर", "शेयर ब्रोकर", "थोक व्यापारी", "ऑडिटर"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "High-net-worth investors or institutional firms providing early-stage seed funding and strategic mentorship to tech-driven startups are termed:", options: ["Venture Capitalists or Angel Investors", "Stock Exchange Brokers", "Wholesale Distributors", "Financial Auditors"], correct: 0 },

// ==========================================
// 15. भौतिकी (Physics) - SET 7
// ==========================================
{ subject: "physics", lang: "hi", question: "स्थिर वैद्युतिकी (Electrostatics) में किन्हीं दो बिंदु आवेशों के बीच लगने वाले बल की गणना किस नियम से की जाती है?", options: ["कूलॉम का नियम (Coulomb's Law)", "ओम का नियम", "बायो-सावर्त का नियम", "गॉस का नियम"], correct: 0 },
{ subject: "physics", lang: "en", question: "In electrostatics, the magnitude of the force exerted between two stationary point charges is calculated exclusively using:", options: ["Coulomb's Law", "Ohm's Law", "Biot-Savart Law", "Gauss's Law"], correct: 0 },
{ subject: "physics", lang: "hi", question: "विद्युत चुंबकीय प्रेरण में उत्पन्न 'प्रेरित विद्युत वाहक बल' की दिशा हमेशा उस कारण का विरोध करती है जिससे वह उत्पन्न हुई है। यह कौन सा नियम है?", options: ["लेंज का नियम (Lenz's Law)", "फैराडे का नियम", "एम्पियर का नियम", "किरचॉफ का नियम"], correct: 0 },
{ subject: "physics", lang: "en", question: "The direction of an induced electromotive force always opposes the change in magnetic flux that produced it. This defines:", options: ["Lenz's Law", "Faraday's Law of Induction", "Ampere's Circuital Law", "Kirchhoff's Voltage Law"], correct: 0 },
{ subject: "physics", lang: "hi", question: "एक आदर्श वोल्टमीटर (Ideal Voltmeter) का आंतरिक प्रतिरोध (Internal Resistance) सैद्धांतिक रूप से कितना होना चाहिए?", options: ["अनंत (Infinity)", "शून्य", "एक ओम", "परिपथ के बराबर"], correct: 0 },
{ subject: "physics", lang: "en", question: "To prevent drawing any current from the circuit, the theoretical internal resistance of an Ideal Voltmeter must be:", options: ["Infinity", "Zero", "Exactly one Ohm", "Equal to the circuit's load"], correct: 0 },
{ subject: "physics", lang: "hi", question: "प्रकाश का किसी अवरोध के किनारों से मुड़कर उसकी छाया में प्रवेश कर जाना प्रकाश की कौन सी घटना कहलाती है?", options: ["विवर्तन (Diffraction)", "व्यतिकरण (Interference)", "अपवर्तन (Refraction)", "ध्रुवण (Polarization)"], correct: 0 },
{ subject: "physics", lang: "en", question: "The optical phenomenon characterized by the bending of light waves around sharp edges into regions of geometrical shadow is called:", options: ["Diffraction", "Interference", "Refraction", "Polarization"], correct: 0 },
{ subject: "physics", lang: "hi", question: "अर्धचालकों (Semiconductors) का तापमान बढ़ाने पर उनकी विद्युत चालकता पर क्या प्रभाव पड़ता है?", options: ["चालकता बढ़ती है (प्रतिरोध घटता है)", "चालकता घटती है", "चालकता शून्य हो जाती है", "कोई प्रभाव नहीं पड़ता"], correct: 0 },
{ subject: "physics", lang: "en", question: "When the thermal temperature of an intrinsic semiconductor is increased, how does its electrical conductivity react?", options: ["Conductivity increases (Resistance decreases)", "Conductivity decreases", "Conductivity instantly drops to zero", "It remains entirely unaffected"], correct: 0 },

// ==========================================
// 16. रसायन विज्ञान (Chemistry) - SET 7
// ==========================================
{ subject: "chemistry", lang: "hi", question: "विलयन के वे भौतिक गुण जो उसमें उपस्थित विलेय के कणों की संख्या पर निर्भर करते हैं, प्रकृति पर नहीं, क्या कहलाते हैं?", options: ["अणुसंख्यक गुणधर्म (Colligative Properties)", "विशिष्ट गुणधर्म", "रासायनिक गुणधर्म", "ऊष्मागतिक गुणधर्म"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Physical properties of solutions that strictly depend on the ratio of the number of solute particles to solvent molecules are called:", options: ["Colligative Properties", "Specific properties", "Chemical properties", "Thermodynamic properties"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "प्रथम कोटि की अभिक्रिया (First Order Reaction) के लिए अर्धायु काल (Half-life) का सूत्र क्या होता है?", options: ["t½ = 0.693 / k", "t½ = k / 0.693", "t½ = a / 2k", "t½ = 1 / ka"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Which mathematical formula correctly represents the Half-life period (t½) for a standard First Order chemical Reaction?", options: ["t½ = 0.693 / k", "t½ = k / 0.693", "t½ = a / 2k", "t½ = 1 / ka"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "लोहे पर जंग लगने की प्रक्रिया को रोकने के लिए उस पर जस्ते (Zinc) की परत चढ़ाने की विधि क्या कहलाती है?", options: ["गैल्वनाइजेशन या यशदलेपन (Galvanization)", "विद्युत लेपन", "एनोडीकरण", "थर्माइट वेल्डिंग"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "The industrial process of applying a protective zinc coating to steel or iron to actively prevent severe rusting is termed:", options: ["Galvanization", "Electroplating", "Anodizing", "Thermite Welding"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "डीएनए (DNA) की संरचना में एडेनिन (Adenine) हमेशा किस नाइट्रोजन क्षारक के साथ दो हाइड्रोजन बॉन्ड बनाता है?", options: ["थायमीन (Thymine)", "गुआनिन", "साइटोसिन", "यूरेसिल"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "In the double-helix structure of DNA, the nucleobase Adenine consistently pairs via two hydrogen bonds exclusively with:", options: ["Thymine", "Guanine", "Cytosine", "Uracil"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "क्लोरोफॉर्म (CHCl3) को हवा और प्रकाश में खुला छोड़ देने पर ऑक्सीजन से क्रिया करके कौन सी अत्यधिक विषैली गैस बनती है?", options: ["फॉस्जीन गैस (Phosgene - COCl2)", "मस्टर्ड गैस", "अश्रु गैस", "सल्फर डाइऑक्साइड"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "When pure Chloroform is exposed directly to oxygen and sunlight, it slowly oxidizes to form an extremely poisonous gas called:", options: ["Phosgene (COCl2)", "Mustard gas", "Tear gas", "Sulfur dioxide"], correct: 0 },

// ==========================================
// 17. जीव विज्ञान (Biology) - SET 7
// ==========================================
{ subject: "biology", lang: "hi", question: "मेंडल ने आनुवंशिकता के नियमों की खोज के लिए मुख्य रूप से किस पौधे पर अपने ऐतिहासिक प्रयोग किए थे?", options: ["उद्यान मटर (Pisum sativum)", "जंगली मटर", "चना", "गुलाब"], correct: 0 },
{ subject: "biology", lang: "en", question: "Gregor Mendel, the renowned Father of Genetics, conducted his historic inheritance experiments primarily on which plant species?", options: ["Garden Pea (Pisum sativum)", "Wild Pea", "Chickpea", "Rose variants"], correct: 0 },
{ subject: "biology", lang: "hi", question: "मानव शरीर में रक्त शर्करा (Blood Sugar) के स्तर को नियंत्रित करने वाला हॉर्मोन इंसुलिन किस अंग की कोशिकाओं से स्रावित होता है?", options: ["अग्न्याशय (Pancreas) की बीटा कोशिकाओं से", "यकृत (Liver) से", "थायरॉयड ग्रंथि से", "गुर्दे (Kidney) से"], correct: 0 },
{ subject: "biology", lang: "en", question: "Insulin, the crucial hormone regulating systemic blood sugar levels, is secreted by specific cells located within which human organ?", options: ["Beta cells of the Pancreas", "The Liver lobes", "The Thyroid gland", "The Kidneys"], correct: 0 },
{ subject: "biology", lang: "hi", question: "डीएनए से आरएनए (RNA) बनने की जैविक प्रक्रिया को आनुवंशिकी की भाषा में क्या कहा जाता है?", options: ["अनुलेखन (Transcription)", "अनुवादन (Translation)", "प्रतिकृतियन (Replication)", "उत्परिवर्तन (Mutation)"], correct: 0 },
{ subject: "biology", lang: "en", question: "The fundamental biological process involving the synthesis of an RNA molecule from a DNA template is officially termed:", options: ["Transcription", "Translation", "Replication", "Mutation"], correct: 0 },
{ subject: "biology", lang: "hi", question: "मलेरिया रोग फैलाने वाले परजीवी 'प्लाज्मोडियम' का वाहक (Vector) निम्नलिखित में से कौन सा मच्छर होता है?", options: ["मादा एनोफिलीज (Female Anopheles)", "मादा एडीज", "नर एनोफिलीज", "क्यूलेक्स"], correct: 0 },
{ subject: "biology", lang: "en", question: "Which specific mosquito species acts as the primary biological vector transmitting the Malaria-causing 'Plasmodium' parasite?", options: ["Female Anopheles mosquito", "Female Aedes mosquito", "Male Anopheles mosquito", "Culex mosquito"], correct: 0 },
{ subject: "biology", lang: "hi", question: "पारिस्थितिकी तंत्र (Ecosystem) में ऊर्जा का प्रवाह लिंडेमान के 10% नियम के अनुसार हमेशा किस दिशा में होता है?", options: ["एकदिशीय (Unidirectional)", "द्विदिशीय", "चक्रीय", "बहुदिशीय"], correct: 0 },
{ subject: "biology", lang: "en", question: "According to Lindeman's 10% Law, the flow of energy across successive trophic levels in an ecosystem is always:", options: ["Unidirectional", "Bidirectional", "Cyclic", "Multidirectional"], correct: 0 },

// ==========================================
// 18. बायोटेक्नोलॉजी (Biotechnology) - SET 7
// ==========================================
{ subject: "biotech", lang: "hi", question: "जेनेटिक इंजीनियरिंग में डीएनए के टुकड़ों को विशिष्ट स्थानों से काटने के लिए किन 'आणविक कैंचियों' का उपयोग किया जाता है?", options: ["प्रतिबंधन एंडोन्यूक्लिएज एंजाइम (Restriction Endonucleases)", "डीएनए लाइगेज", "आरएनए प्राइमेस", "पॉलीमरेज"], correct: 0 },
{ subject: "biotech", lang: "en", question: "Which highly specific enzymes act as 'molecular scissors' to cleave DNA molecules at precise recognition sequences in genetic engineering?", options: ["Restriction Endonucleases", "DNA Ligases", "RNA Primases", "Polymerases"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "पी.सी.आर. (PCR) तकनीक में उच्च तापमान पर भी नष्ट न होने वाले 'Taq पॉलीमरेज' एंजाइम को किस जीवाणु से प्राप्त किया जाता है?", options: ["थर्मस एक्वाटिकस (Thermus aquaticus)", "ई. कोलाई", "बैसिलस सब्टिलिस", "एग्रोबैक्टीरियम"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The thermostable 'Taq Polymerase' enzyme, crucial for PCR amplification cycles, is isolated from which extremophile bacterium?", options: ["Thermus aquaticus", "Escherichia coli", "Bacillus subtilis", "Agrobacterium tumefaciens"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "जेल इलेक्ट्रोफोरेसिस तकनीक में डीएनए टुकड़ों को यूवी प्रकाश में देखने के लिए किस विशेष डाई (Dye) का उपयोग किया जाता है?", options: ["एथिडियम ब्रोमाइड (Ethidium Bromide)", "मिथाइलीन ब्लू", "क्रिस्टल वॉयलेट", "सैफ्रानिन"], correct: 0 },
{ subject: "biotech", lang: "en", question: "Which specific fluorescent intercalating dye is utilized in gel electrophoresis to visualize separated DNA bands under UV illumination?", options: ["Ethidium Bromide", "Methylene Blue", "Crystal Violet", "Safranin"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "कृषि क्षेत्र में कीट-प्रतिरोधी फसलें (जैसे Bt कपास) बनाने के लिए प्रयुक्त 'Bt' विष किस सूक्ष्मजीव से लिया जाता है?", options: ["बैसिलस थुरिंगिएंसिस (Bacillus thuringiensis)", "राइजोबियम", "स्यूडोमोनास", "लैक्टोबैसिलस"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The potent insecticidal 'Bt toxin' gene integrated into pest-resistant transgenic crops (like Bt Cotton) is derived from:", options: ["Bacillus thuringiensis", "Rhizobium species", "Pseudomonas variants", "Lactobacillus cultures"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "किसी आनुवंशिक बीमारी को ठीक करने के लिए रोगी की कोशिकाओं में स्वस्थ जीन प्रविष्ट कराने की आधुनिक चिकित्सा विधि क्या कहलाती है?", options: ["जीन थेरेपी (Gene Therapy)", "स्टेम सेल थ्योरी", "क्लोनिंग", "आरएनए इंटरफेरेंस"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The revolutionary therapeutic technique involving the insertion of functional genes into a patient's cells to treat genetic disorders is called:", options: ["Gene Therapy", "Stem Cell Theory", "Molecular Cloning", "RNA Interference"], correct: 0 },

// ==========================================
// 19. गणित (Mathematics) - SET 7
// ==========================================
{ subject: "maths", lang: "hi", question: "यदि किसी सारणिक (Determinant) की किन्हीं दो पंक्तियों या दो स्तंभों के सभी अवयव समान (Identical) हों, तो सारणिक का मान क्या होगा?", options: ["शून्य (0)", "1", "-1", "अनंत"], correct: 0 },
{ subject: "maths", lang: "en", question: "According to the fundamental properties of determinants, if any two rows or columns of a matrix are completely identical, its determinant is:", options: ["Zero (0)", "1", "-1", "Infinity"], correct: 0 },
{ subject: "maths", lang: "hi", question: "यदि दो शून्येतर सदिश (Vectors) 'a' और 'b' एक-दूसरे के लंबवत (Perpendicular) हैं, तो उनका अदिश गुणनफल (Dot Product) कितना होगा?", options: ["0", "1", "-1", "a और b के परिमाणों का गुणनफल"], correct: 0 },
{ subject: "maths", lang: "en", question: "If two non-zero geometric vectors 'a' and 'b' are strictly perpendicular to each other, their scalar Dot Product must invariably be:", options: ["0", "1", "-1", "The product of their absolute magnitudes"], correct: 0 },
{ subject: "maths", lang: "hi", question: "अवकल समीकरण (Differential Equation) (dy/dx)² + y = 0 की घात (Degree) का मान निम्नलिखित में से क्या होगा?", options: ["2", "1", "0", "परिभाषित नहीं"], correct: 0 },
{ subject: "maths", lang: "en", question: "Analyze the provided ordinary differential equation: (dy/dx)² + y = 0. What is its mathematical Degree?", options: ["2", "1", "0", "Undefined"], correct: 0 },
{ subject: "maths", lang: "hi", question: "त्रिविमीय ज्यामिति में किसी रेखा की दिक्-कोसाइन (Direction Cosines) l, m और n के वर्गों का योगफल (l² + m² + n²) सदैव कितना होता है?", options: ["1", "0", "-1", "2"], correct: 0 },
{ subject: "maths", lang: "en", question: "In 3D coordinate geometry, the sum of the squares of the direction cosines (l² + m² + n²) of any arbitrary straight line equals:", options: ["1", "0", "-1", "2"], correct: 0 },
{ subject: "maths", lang: "hi", question: "निश्चित समाकलन (Definite Integral) ∫ (0 से π/2) sin x dx का सही संख्यात्मक मान क्या होगा?", options: ["1", "0", "π / 2", "-1"], correct: 0 },
{ subject: "maths", lang: "en", question: "Calculate the exact evaluated numerical output of the definite calculus integral: ∫ (from 0 to π/2) sin x dx:", options: ["1", "0", "π / 2", "-1"], correct: 0 },

// ==========================================
// 20. एप्लाइड मैथ (Applied Mathematics) - SET 7
// ==========================================
{ subject: "applied_math", lang: "hi", question: "समय श्रृंखला विश्लेषण (Time Series Analysis) में मौसमी उतार-चढ़ाव (Seasonal Variations) की समयावधि सामान्यतः कितनी होती है?", options: ["एक वर्ष या उससे कम", "5 से 10 वर्ष", "अनिश्चित", "कम से कम एक दशक"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "In the context of Time Series Analysis data smoothing, the cyclic duration of standard Seasonal Variations is typically:", options: ["One year or less", "Between 5 to 10 years", "Completely indeterminate", "At least a full decade"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "एक रैखिक प्रोग्रामन समस्या (Linear Programming Problem) में अनुकूलतम समाधान (Optimal Solution) हमेशा ग्राफ के किन बिंदुओं पर प्राप्त होता है?", options: ["सुसंगत क्षेत्र के कोणीय या शीर्ष बिंदुओं (Corner Points) पर", "मूल बिंदु (0,0) पर", "ग्राफ के केंद्र में", "सुसंगत क्षेत्र के बाहर"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "While plotting solutions for Linear Programming Problems, the maximum or minimum Optimal Solution invariably occurs at:", options: ["The Corner Points (vertices) of the bounded feasible region", "The origin coordinates (0,0)", "The geometric centroid of the graph", "Outside the entire feasible region boundaries"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "वित्तीय मूल्यांकन में, एक ऐसी वार्षिकी (Annuity) जिसके भुगतान कभी समाप्त नहीं होते अर्थात् अनंत काल तक चलते हैं, क्या कहलाती है?", options: ["अनवरत वार्षिकी या चिरस्थायित्व (Perpetuity)", "साधारण वार्षिकी", "देय वार्षिकी", "स्थगित वार्षिकी"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "In advanced financial actuarial mathematics, a continuous annuity structure generating uniform cash flows that last indefinitely is called a:", options: ["Perpetuity", "Ordinary Annuity", "Annuity Due", "Deferred Annuity payout"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "सांख्यिकीय विश्लेषण में दो चरों के बीच रैखिक संबंध को मापने वाले 'कार्ल पियर्सन सहसंबंध गुणांक' (Correlation Coefficient) का मान किन सीमाओं के बीच रहता है?", options: ["-1 से +1 के बीच", "0 से 100 के बीच", "-∞ से +∞ के बीच", "केवल 0 से 1 के बीच"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "The numerical value of Karl Pearson's Correlation Coefficient, used to measure linear relationships between variables, strictly falls between:", options: ["-1 and +1 inclusive", "0 and 100", "Negative infinity and positive infinity", "Exclusively between 0 and 1"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "व्यावसायिक संपत्तियों के मूल्य में समय के साथ होने वाली निरंतर गिरावट को वित्तीय गणनाओं में किस मद के रूप में दर्शाया जाता है?", options: ["मूल्यह्रास (Depreciation)", "अधिलाभ", "पूंजीगत लाभ", "कर कटौती"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "The gradual and systematic accounting reduction in the recorded book value of commercial fixed assets over time is formally recorded as:", options: ["Depreciation", "Capital Surplus", "Capital Gains revenue", "Statutory Tax Deductions"], correct: 0 },

// ==========================================
// 21. कंप्यूटर विज्ञान (Computer Science) - SET 7
// ==========================================
{ subject: "computer_science", lang: "hi", question: "रिलेशनल डेटाबेस (RDBMS) में वह कुंजी (Key) क्या कहलाती है जो किसी टेबल के हर रिकॉर्ड को विशिष्ट रूप से (Uniquely) पहचानती है और रिक्त (NULL) नहीं हो सकती?", options: ["प्राथमिक कुंजी (Primary Key)", "विदेशी कुंजी (Foreign Key)", "कैंडिडेट कुंजी", "अल्टरनेट कुंजी"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "In Relational Database Management Systems, which specific constraint uniquely identifies every record in a table and cannot hold a NULL value?", options: ["Primary Key", "Foreign Key", "Candidate Key", "Alternate Key"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "डेटा स्ट्रक्चर में 'स्टैक' (Stack) किस कार्यप्रणाली पर आधारित होकर तत्वों को जोड़ता (Push) और हटाता (Pop) है?", options: ["लास्ट-इन फर्स्ट-आउट (LIFO - Last In First Out)", "फर्स्ट-इन फर्स्ट-आउट (FIFO)", "रैंडम प्रोसेसिंग", "शॉर्टेस्ट जॉब फर्स्ट"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "The linear 'Stack' data structure manages the insertion (Push) and deletion (Pop) of elements sequentially based on which algorithmic principle?", options: ["Last-In, First-Out (LIFO)", "First-In, First-Out (FIFO)", "Random Processing arrays", "Shortest Job First logic"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "पायथन (Python) प्रोग्रामिंग भाषा में किसी लिस्ट के अंत में नया डेटा जोड़ने के लिए किस इन-बिल्ट फंक्शन (Method) का प्रयोग किया जाता है?", options: ["append()", "insert()", "add()", "extend()"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Which built-in Python list method is explicitly utilized to add a single new element directly to the end of an existing list?", options: ["append()", "insert()", "add()", "extend()"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "कंप्यूटर नेटवर्किंग के संदर्भ में 'OSI मॉडल' में डेटा ट्रांसमिशन के लिए कुल कितनी लेयर्स (Layers) परिभाषित की गई हैं?", options: ["7 लेयर्स", "5 लेयर्स", "4 लेयर्स", "9 लेयर्स"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Within the theoretical framework of computer network communications, exactly how many functional layers are defined in the OSI Model?", options: ["7 Layers", "5 Layers", "4 Layers", "9 Layers"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "साइबर सुरक्षा की भाषा में धोखे से किसी व्यक्ति के पासवर्ड और बैंक डिटेल्स चुराने के लिए बनाए गए फर्जी ई-मेल या वेबसाइट के हमले को क्या कहते हैं?", options: ["फिशिंग (Phishing)", "स्पैमिंग (Spamming)", "फायरवॉल हैकिंग", "डेटा एन्क्रिप्शन"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "In cybersecurity threat terminology, the malicious practice of using fraudulent emails and fake websites to steal sensitive user passwords and banking data is called:", options: ["Phishing", "Spamming", "Firewall Hacking", "Data Encryption breaches"], correct: 0 },
// ==========================================
// 1. इतिहास (History) - SET 8 (12th Board Level)
// ==========================================
{ subject: "history", lang: "hi", question: "हड़प्पा सभ्यता में शंख (Shell) से बनी वस्तुओं के निर्माण का सबसे प्रमुख केंद्र निम्नलिखित में से कौन सा था?", options: ["नागेश्वर और बालाकोट", "कालीबंगन", "राखीगढ़ी", "धौलावीरा"], correct: 0 },
{ subject: "history", lang: "en", question: "Which of the following sites was the most important center for making shell objects in the Harappan civilization?", options: ["Nageshwar and Balakot", "Kalibangan", "Rakhigarhi", "Dholavira"], correct: 0 },
{ subject: "history", lang: "hi", question: "विजयनगर साम्राज्य की स्थापना 1336 ई. में किन दो भाइयों ने मिलकर की थी?", options: ["हरिहर और बुक्का", "कृष्णदेव राय और अच्युत देव", "राम राय और तिरुमल", "वीर नरसिंह और सालुव नरसिंह"], correct: 0 },
{ subject: "history", lang: "en", question: "The Vijayanagara Empire was founded in 1336 CE by which two brothers?", options: ["Harihara and Bukka", "Krishnadeva Raya and Achyuta Deva", "Rama Raya and Tirumala", "Vira Narasimha and Saluva Narasimha"], correct: 0 },
{ subject: "history", lang: "hi", question: "मुगलकालीन प्रसिद्ध ग्रंथ 'आइन-ए-अकबरी' का लेखक निम्नलिखित में से कौन था?", options: ["अबुल फज़ल", "गुलबदन बेगम", "अब्दुल हमीद लाहौरी", "इब्न बतूता"], correct: 0 },
{ subject: "history", lang: "en", question: "Who among the following was the author of the famous Mughal text 'Ain-i-Akbari'?", options: ["Abu'l Fazl", "Gulbadan Begum", "Abdul Hamid Lahori", "Ibn Battuta"], correct: 0 },
{ subject: "history", lang: "hi", question: "1857 का ऐतिहासिक विद्रोह मेरठ छावनी से आधिकारिक रूप से किस तिथि को प्रारंभ हुआ था?", options: ["10 मई 1857", "11 मई 1857", "15 अगस्त 1857", "20 जून 1857"], correct: 0 },
{ subject: "history", lang: "en", question: "On which date did the historic Revolt of 1857 officially begin from the Meerut cantonment?", options: ["10 May 1857", "11 May 1857", "15 August 1857", "20 June 1857"], correct: 0 },
{ subject: "history", lang: "hi", question: "संविधान सभा की प्रारूप समिति (Drafting Committee) के अध्यक्ष के रूप में किसने कार्य किया था?", options: ["डॉ. बी.आर. अम्बेडकर", "डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल"], correct: 0 },
{ subject: "history", lang: "en", question: "Who served as the Chairman of the Drafting Committee of the Constituent Assembly?", options: ["Dr. B.R. Ambedkar", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"], correct: 0 },

// ==========================================
// 2. राजनीति विज्ञान (Political Science) - SET 8 (12th Board Level)
// ==========================================
{ subject: "political", lang: "hi", question: "द्वितीय विश्व युद्ध के दौरान निम्नलिखित में से कौन सा देश 'धुरी राष्ट्रों' (Axis Powers) का सदस्य नहीं था?", options: ["फ्रांस", "जर्मनी", "इटली", "जापान"], correct: 0 },
{ subject: "political", lang: "en", question: "Which of the following countries was NOT a member of the 'Axis Powers' during the Second World War?", options: ["France", "Germany", "Italy", "Japan"], correct: 0 },
{ subject: "political", lang: "hi", question: "योजना आयोग (Planning Commission) को समाप्त करके उसके स्थान पर नीति आयोग (NITI Aayog) का गठन कब किया गया?", options: ["1 जनवरी 2015", "15 अगस्त 2014", "26 जनवरी 2015", "1 अप्रैल 2016"], correct: 0 },
{ subject: "political", lang: "en", question: "When was the NITI Aayog established, replacing the former Planning Commission of India?", options: ["1 January 2015", "15 August 2014", "26 January 2015", "1 April 2016"], correct: 0 },
{ subject: "political", lang: "hi", question: "स्वतंत्र भारत के प्रथम मुख्य चुनाव आयुक्त (Chief Election Commissioner) कौन थे?", options: ["सुकुमार सेन", "टी. एन. शेषन", "के. वी. के. सुंदरम", "सुनील अरोड़ा"], correct: 0 },
{ subject: "political", lang: "en", question: "Who was the first Chief Election Commissioner of independent India?", options: ["Sukumar Sen", "T. N. Seshan", "K. V. K. Sundaram", "Sunil Arora"], correct: 0 },
{ subject: "political", lang: "hi", question: "शीत युद्ध के अंत का प्रतीक माने जाने वाले सोवियत संघ (USSR) का विघटन किस वर्ष हुआ था?", options: ["1991", "1989", "1990", "1992"], correct: 0 },
{ subject: "political", lang: "en", question: "In which year did the Soviet Union (USSR) formally disintegrate, marking the end of the Cold War?", options: ["1991", "1989", "1990", "1992"], correct: 0 },
{ subject: "political", lang: "hi", question: "1966 का प्रसिद्ध 'ताशकंद समझौता' भारत और किस देश के बीच हस्ताक्षरित हुआ था?", options: ["पाकिस्तान", "चीन", "नेपाल", "सोवियत संघ"], correct: 0 },
{ subject: "political", lang: "en", question: "The famous 'Tashkent Agreement' of 1966 was signed between India and which other country?", options: ["Pakistan", "China", "Nepal", "Soviet Union"], correct: 0 },

// ==========================================
// 3. भूगोल (Geography) - SET 8 (12th Board Level)
// ==========================================
{ subject: "geography", lang: "hi", question: "2011 की जनगणना के अनुसार, भारत के किस राज्य का जनसंख्या घनत्व (Population Density) सर्वाधिक है?", options: ["बिहार", "पश्चिम बंगाल", "उत्तर प्रदेश", "केरल"], correct: 0 },
{ subject: "geography", lang: "en", question: "According to the 2011 Census, which state in India has the highest population density?", options: ["Bihar", "West Bengal", "Uttar Pradesh", "Kerala"], correct: 0 },
{ subject: "geography", lang: "hi", question: "संयुक्त राज्य अमेरिका की प्रसिद्ध 'बिग इंच' (Big Inch) पाइपलाइन का उपयोग मुख्य रूप से किसके परिवहन के लिए किया जाता है?", options: ["पेट्रोलियम", "जल", "प्राकृतिक गैस", "तरल कोयला"], correct: 0 },
{ subject: "geography", lang: "en", question: "The famous 'Big Inch' pipeline in the USA is primarily used for the transportation of which of the following?", options: ["Petroleum", "Water", "Natural Gas", "Liquid Coal"], correct: 0 },
{ subject: "geography", lang: "hi", question: "निम्नलिखित में से कौन सा कार्य 'तृतीयक आर्थिक क्रियाकलाप' (Tertiary Activity) का उदाहरण है?", options: ["व्यापार और वाणिज्य (Trade and Commerce)", "कृषि", "खनन", "विनिर्माण (Manufacturing)"], correct: 0 },
{ subject: "geography", lang: "en", question: "Which of the following is an example of a tertiary economic activity?", options: ["Trade and Commerce", "Agriculture", "Mining", "Manufacturing"], correct: 0 },
{ subject: "geography", lang: "hi", question: "पनामा नहर (Panama Canal) अटलांटिक महासागर को किस महासागर से जोड़ती है?", options: ["प्रशांत महासागर (Pacific Ocean)", "हिंद महासागर", "आर्कटिक महासागर", "दक्षिणी महासागर"], correct: 0 },
{ subject: "geography", lang: "en", question: "The Panama Canal connects the Atlantic Ocean with which other ocean?", options: ["Pacific Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean"], correct: 0 },
{ subject: "geography", lang: "hi", question: "भारत में बॉक्साइट (Bauxite) का सबसे बड़ा उत्पादक राज्य कौन सा है?", options: ["ओडिशा", "झारखंड", "मध्य प्रदेश", "कर्नाटक"], correct: 0 },
{ subject: "geography", lang: "en", question: "Which state is the largest producer of Bauxite in India?", options: ["Odisha", "Jharkhand", "Madhya Pradesh", "Karnataka"], correct: 0 },

// ==========================================
// 4. अर्थशास्त्र (Economics) - SET 8 (12th Board Level)
// ==========================================
{ subject: "economics", lang: "hi", question: "समष्टि अर्थशास्त्र (Macroeconomics) में 'जीडीपी अवस्फीतिकारक' (GDP Deflator) क्या मापता है?", options: ["नाममात्र जीडीपी और वास्तविक जीडीपी का अनुपात (मुद्रास्फीति दर)", "विदेशी विनिमय दर", "सरकारी घाटा", "प्रति व्यक्ति आय"], correct: 0 },
{ subject: "economics", lang: "en", question: "In Macroeconomics, what does the 'GDP Deflator' fundamentally measure?", options: ["The ratio of Nominal GDP to Real GDP (Inflation rate)", "Foreign Exchange Rate", "Government Deficit", "Per Capita Income"], correct: 0 },
{ subject: "economics", lang: "hi", question: "यदि सीमांत उपभोग प्रवृत्ति (MPC) का मान 0.8 है, तो निवेश गुणक (Investment Multiplier - K) का मान क्या होगा?", options: ["5", "4", "2", "10"], correct: 0 },
{ subject: "economics", lang: "en", question: "If the Marginal Propensity to Consume (MPC) is 0.8, what will be the value of the Investment Multiplier (K)?", options: ["5", "4", "2", "10"], correct: 0 },
{ subject: "economics", lang: "hi", question: "सरकारी बजट में निम्नलिखित में से किसे 'पूंजीगत प्राप्ति' (Capital Receipt) माना जाता है?", options: ["ऋणों की वसूली (Recovery of Loans)", "आयकर राजस्व", "सार्वजनिक उपक्रमों से लाभांश", "जुर्माना और फीस"], correct: 0 },
{ subject: "economics", lang: "en", question: "Which of the following is classified as a 'Capital Receipt' in the Government Budget?", options: ["Recovery of Loans", "Income Tax Revenue", "Dividends from PSUs", "Fines and Fees"], correct: 0 },
{ subject: "economics", lang: "hi", question: "केंद्रीय बैंक मौद्रिक नीति के तहत धन आपूर्ति को नियंत्रित करने के लिए CRR का उपयोग करता है। CRR का पूर्ण रूप क्या है?", options: ["नकद आरक्षित अनुपात (Cash Reserve Ratio)", "क्रेडिट रिजर्व रेशियो", "करेंसी रिजर्व रेट", "कैपिटल रिटर्न रेशियो"], correct: 0 },
{ subject: "economics", lang: "en", question: "The Central Bank controls the money supply using instruments like CRR. What does CRR stand for?", options: ["Cash Reserve Ratio", "Credit Reserve Ratio", "Currency Reserve Rate", "Capital Return Ratio"], correct: 0 },
{ subject: "economics", lang: "hi", question: "जब भारतीय रिजर्व बैंक (RBI) विदेशी मुद्रा बाजार में डॉलर बेचता है, तो घरेलू अर्थव्यवस्था पर इसका क्या प्रभाव पड़ता है?", options: ["घरेलू मुद्रा (रुपये) की आपूर्ति घटती है", "घरेलू मुद्रा की आपूर्ति बढ़ती है", "मुद्रास्फीति तेजी से बढ़ती है", "कोई प्रभाव नहीं पड़ता"], correct: 0 },
{ subject: "economics", lang: "en", question: "When the Reserve Bank of India (RBI) sells foreign exchange in the market, what is its effect on the domestic economy?", options: ["Supply of domestic currency (Rupee) decreases", "Supply of domestic currency increases", "Inflation rises sharply", "It has no effect"], correct: 0 },

// ==========================================
// 5. समाजशास्त्र (Sociology) - SET 8 (12th Board Level)
// ==========================================
{ subject: "sociology", lang: "hi", question: "माल्थस के जनसंख्या सिद्धांत के अनुसार, जबकि जनसंख्या ज्यामितीय प्रगति से बढ़ती है, कृषि उत्पादन किस दर से बढ़ता है?", options: ["अंकगणितीय प्रगति (Arithmetic progression)", "ज्यामितीय प्रगति", "घातांकीय प्रगति", "स्थिर दर"], correct: 0 },
{ subject: "sociology", lang: "en", question: "According to Malthusian theory, while population grows in a geometric progression, agricultural production grows in an:", options: ["Arithmetic progression", "Geometric progression", "Exponential progression", "Constant rate"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "भारतीय समाजशास्त्र में 'प्रबल जाति' (Dominant Caste) की अवधारणा का प्रतिपादन किस समाजशास्त्री ने किया था?", options: ["एम. एन. श्रीनिवास", "जी. एस. घुर्ये", "ए. आर. देसाई", "लुई ड्यूमोंट"], correct: 0 },
{ subject: "sociology", lang: "en", question: "The concept of 'Dominant Caste' in Indian sociology was coined and popularized by which eminent sociologist?", options: ["M. N. Srinivas", "G. S. Ghurye", "A. R. Desai", "Louis Dumont"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "सती प्रथा के उन्मूलन और समाज सुधार के लिए राजा राममोहन राय ने 1828 में किस संस्था की स्थापना की थी?", options: ["ब्रह्म समाज", "आर्य समाज", "प्रार्थना समाज", "रामकृष्ण मिशन"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Which social reform organization was founded by Raja Ram Mohan Roy in 1828 to eradicate the practice of Sati?", options: ["Brahmo Samaj", "Arya Samaj", "Prarthana Samaj", "Ramakrishna Mission"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "प्रसिद्ध पर्यावरण आंदोलन 'चिपको आंदोलन' की शुरुआत भारत के किस राज्य से हुई थी?", options: ["उत्तराखंड", "मध्य प्रदेश", "केरल", "कर्नाटक"], correct: 0 },
{ subject: "sociology", lang: "en", question: "The 'Chipko Movement', a famous environmental conservation movement, originated in which Indian state?", options: ["Uttarakhand", "Madhya Pradesh", "Kerala", "Karnataka"], correct: 0 },
{ subject: "sociology", lang: "hi", question: "समाजशास्त्रीय दृष्टिकोण से 'वैश्वीकरण' (Globalization) को सबसे सही तरीके से कैसे परिभाषित किया जा सकता है?", options: ["विभिन्न देशों के बीच तीव्र एकीकरण और परस्पर जुड़ाव की प्रक्रिया", "स्वदेशी उद्योगों को पूर्ण संरक्षण देना", "विदेशी निवेश पर कड़ा प्रतिबंध", "केवल अपनी संस्कृति को मानना"], correct: 0 },
{ subject: "sociology", lang: "en", question: "Sociologically, 'Globalization' is best described and defined as:", options: ["The process of rapid integration and interconnectedness between countries", "Providing total protection to indigenous industries", "Strict prohibition on foreign investments", "Adhering solely to one's own culture"], correct: 0 },

// ==========================================
// 6. मनोविज्ञान (Psychology) - SET 8 (12th Board Level)
// ==========================================
{ subject: "psychology", lang: "hi", question: "कार्ल जंग के व्यक्तित्व सिद्धांत में, उस 'मुखौटे' या सार्वजनिक चेहरे के लिए किस शब्द का प्रयोग किया गया है जो व्यक्ति दुनिया के सामने पेश करता है?", options: ["परसोना (Persona)", "एनिमा", "शैडो (छाया)", "ईगो"], correct: 0 },
{ subject: "psychology", lang: "en", question: "In Carl Jung's theory of personality, what term is used to describe the 'mask' or the public face an individual presents to the world?", options: ["Persona", "Anima", "Shadow", "Ego"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "प्रसिद्ध 'रोर्शा स्याही धब्बा परीक्षण' (Rorschach Inkblot Test) मनोवैज्ञानिक परीक्षणों की किस श्रेणी में आता है?", options: ["प्रक्षेपी परीक्षण (Projective Test)", "बुद्धि परीक्षण", "अभिक्षमता परीक्षण", "आत्म-रिपोर्ट आविष्कारिका"], correct: 0 },
{ subject: "psychology", lang: "en", question: "The famous 'Rorschach Inkblot Test' is a widely used psychological tool belonging to which category of tests?", options: ["Projective Test", "Intelligence Test", "Aptitude Test", "Self-report Inventory"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "मनोदशा और वास्तविकता से संपर्क टूटने वाले रोग 'स्किज़ोफ्रेनिया' (Schizophrenia) को मुख्य रूप से किस विकार के तहत वर्गीकृत किया जाता है?", options: ["मनोविदलता या साइकोटिक विकार (Psychotic Disorder)", "चिंता विकार (Anxiety Disorder)", "सोमैटोफॉर्म विकार", "व्यक्तित्व विकार"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Schizophrenia, characterized by a loss of contact with reality, is primarily classified under which type of psychological disorder?", options: ["Psychotic Disorder", "Anxiety Disorder", "Somatoform Disorder", "Personality Disorder"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "नकारात्मक विचारों को चुनौती देकर अवसाद (Depression) के इलाज के लिए 'संज्ञानात्मक व्यवहार थेरेपी' (CBT) का विकास किसने किया था?", options: ["आरोन बेक (Aaron Beck)", "कार्ल रोजर्स", "अल्बर्ट एलिस", "सिगमंड फ्रायड"], correct: 0 },
{ subject: "psychology", lang: "en", question: "Cognitive Behavioral Therapy (CBT), specifically formulated to treat depression by challenging negative thoughts, was developed by:", options: ["Aaron Beck", "Carl Rogers", "Albert Ellis", "Sigmund Freud"], correct: 0 },
{ subject: "psychology", lang: "hi", question: "हंस सेली के 'सामान्य अनुकूलन सिंड्रोम' (GAS) मॉडल की वह कौन सी अवस्था है जिसमें तनाव के कारण शरीर के संसाधन पूरी तरह समाप्त हो जाते हैं?", options: ["परिश्रांति की अवस्था (Stage of Exhaustion)", "चेतावनी प्रतिक्रिया", "प्रतिरोध की अवस्था", "प्रारंभिक अवस्था"], correct: 0 },
{ subject: "psychology", lang: "en", question: "In Hans Selye's 'General Adaptation Syndrome' (GAS) model, the stage where the body's physiological resources are completely depleted is called the:", options: ["Stage of Exhaustion", "Alarm Reaction", "Stage of Resistance", "Initial Stage"], correct: 0 },

// ==========================================
// 7. गृह विज्ञान (Home Science) - SET 8 (12th Board Level)
// ==========================================
{ subject: "home_science", lang: "hi", question: "किशोरावस्था के दौरान शरीर के ऊतकों के निर्माण, मरम्मत और तीव्र वृद्धि के लिए कौन सा पोषक तत्व सबसे अधिक जिम्मेदार है?", options: ["प्रोटीन", "कार्बोहाइड्रेट", "वसा (Fat)", "विटामिन सी"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Which macro-nutrient is primarily responsible for tissue building, repair, and rapid physical growth during adolescence?", options: ["Protein", "Carbohydrates", "Fats", "Vitamin C"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "किशोरावस्था के दौरान होने वाले तीव्र शारीरिक विकास और यौन परिपक्वता की अवधि को वैज्ञानिक भाषा में क्या कहा जाता है?", options: ["यौवनारंभ (Puberty)", "प्रारंभिक बाल्यावस्था", "वयस्कता", "शैशवावस्था"], correct: 0 },
{ subject: "home_science", lang: "en", question: "The period of rapid physical growth and sexual maturation occurring specifically during early adolescence is called:", options: ["Puberty", "Early Childhood", "Adulthood", "Infancy"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "आहार नियोजन (Meal Planning) में समय और धन बचाने के साथ-साथ संतुलित आहार सुनिश्चित करने का सबसे प्रभावी तरीका क्या है?", options: ["साप्ताहिक मेनू की पूर्व योजना बनाना", "रोजाना बाजार से ताजा भोजन खरीदना", "केवल एक ही खाद्य समूह का उपयोग करना", "महंगे सप्लीमेंट्स का सेवन करना"], correct: 0 },
{ subject: "home_science", lang: "en", question: "In meal planning, what is the most effective managerial method to ensure a balanced diet while saving time and money?", options: ["Advance weekly menu planning", "Buying fresh groceries daily", "Consuming only one food group", "Relying on expensive health supplements"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "नाजुक ऊनी कपड़ों को सिकुड़ने से बचाने के लिए उन्हें धोते समय कपड़े धोने की किस विशेष विधि का उपयोग किया जाना चाहिए?", options: ["हल्के हाथों से गूंथना और निचोड़ना (Kneading and squeezing)", "मशीन में गर्म पानी से धोना", "कठोर ब्रश से रगड़ना", "ब्लीचिंग एजेंट का उपयोग करना"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Which specialized washing technique is strictly recommended for delicate woolen garments to prevent shrinkage and fiber damage?", options: ["Kneading and squeezing method", "Machine washing in hot water", "Scrubbing with a hard brush", "Using strong bleaching agents"], correct: 0 },
{ subject: "home_science", lang: "hi", question: "उपभोक्ता संरक्षण अधिनियम के तहत 'निवारण का अधिकार' (Right to Redressal) का क्या अर्थ है?", options: ["अनुचित व्यापार प्रथाओं और शोषण के खिलाफ शिकायत और उचित मुआवजा पाने का अधिकार", "दुकानदार से बहस करने का अधिकार", "केवल वस्तुएं खरीदने का अधिकार", "सस्ते दामों पर मोलभाव करने का अधिकार"], correct: 0 },
{ subject: "home_science", lang: "en", question: "Under the Consumer Protection Act, what is the exact meaning of the 'Right to Redressal'?", options: ["The right to seek a fair settlement and compensation against unfair trade practices", "The right to argue with shopkeepers", "The mere right to purchase goods", "The right to bargain for cheaper prices"], correct: 0 },

// ==========================================
// 8. दर्शनशास्त्र (Philosophy) - SET 8 (12th Board Level)
// ==========================================
{ subject: "philosophy", lang: "hi", question: "जैन दर्शन में 'सम्यक् दर्शन, सम्यक् ज्ञान और सम्यक् चरित्र' को सामूहिक रूप से क्या कहा जाता है, जो मोक्ष का मार्ग हैं?", options: ["त्रिरत्न (Triratna)", "अष्टांगिक मार्ग", "पंच महाव्रत", "स्याद्वाद"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "In Jain philosophy, what is the collective term used for the 'Three Jewels' (Samyak Darshan, Samyak Gyan, Samyak Charitra) that lead to liberation?", options: ["Triratna", "Noble Eightfold Path", "Pancha Mahavrata", "Syadvada"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "आदि शंकराचार्य द्वारा प्रतिपादित 'अद्वैत वेदांत' दर्शन के अनुसार, ब्रह्मांड की एकमात्र और अंतिम पारमार्थिक सत्ता (Ultimate Reality) क्या है?", options: ["ब्रह्म (Brahman)", "जीव", "जगत", "माया"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "According to the Advaita Vedanta philosophy propounded by Adi Shankaracharya, what is the single, ultimate metaphysical reality?", options: ["Brahman", "Jiva", "Jagat (World)", "Maya"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "पाश्चात्य दर्शन में यह प्रसिद्ध कथन किसका है कि 'मनुष्य ही सभी वस्तुओं का मापदंड है' (Man is the measure of all things)?", options: ["प्रोटागोरस (Protagoras)", "सुकरात", "प्लेटो", "अरस्तू"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "In Western Philosophy, who is credited with the famous relativistic statement 'Man is the measure of all things'?", options: ["Protagoras", "Socrates", "Plato", "Aristotle"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "नीतिशास्त्र में 'निरपेक्ष आदेश' (Categorical Imperative) का सिद्धांत किस दार्शनिक ने दिया था, जो कहता है कि केवल उसी नियम के अनुसार कार्य करो जिसे तुम सार्वभौमिक नियम बनाना चाहते हो?", options: ["इमैनुएल कांट (Immanuel Kant)", "जॉन स्टुअर्ट मिल", "जेरेमी बेंथम", "डेविड ह्यूम"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "The ethical theory of the 'Categorical Imperative', which states that one should act only according to a maxim that can become a universal law, was given by:", options: ["Immanuel Kant", "John Stuart Mill", "Jeremy Bentham", "David Hume"], correct: 0 },
{ subject: "philosophy", lang: "hi", question: "दर्शनशास्त्र की वह शाखा 'ज्ञानमीमांसा' (Epistemology) मुख्य रूप से किस विषय का अध्ययन करती है?", options: ["ज्ञान की प्रकृति, उत्पत्ति और सीमाओं का अध्ययन", "सौंदर्य और कला का अध्ययन", "नैतिकता का अध्ययन", "ईश्वर का अध्ययन"], correct: 0 },
{ subject: "philosophy", lang: "en", question: "What is the core subject matter investigated by 'Epistemology' as a branch of philosophy?", options: ["The study of the nature, origin, and limits of human knowledge", "The study of beauty and art", "The study of moral ethics", "The study of the divine and God"], correct: 0 },

// ==========================================
// 9. कानूनी अध्ययन (Legal Studies) - SET 8 (12th Board Level)
// ==========================================
{ subject: "legal_studies", lang: "hi", question: "भारतीय संविधान के 'मूल ढांचे का सिद्धांत' (Basic Structure Doctrine) को सर्वोच्च न्यायालय के किस ऐतिहासिक फैसले में स्थापित किया गया था?", options: ["केशवानंद भारती केस (1973)", "गोलकनाथ केस (1967)", "मिनर्वा मिल्स केस (1980)", "मेनका गांधी केस (1978)"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "The 'Basic Structure Doctrine' of the Indian Constitution was firmly established in which landmark Supreme Court judgement?", options: ["Kesavananda Bharati case (1973)", "Golaknath case (1967)", "Minerva Mills case (1980)", "Maneka Gandhi case (1978)"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "भारतीय संविदा अधिनियम, 1872 के अनुसार, 'कानून द्वारा प्रवर्तनीय कोई भी करार' (An agreement enforceable by law) क्या कहलाता है?", options: ["संविदा / अनुबंध (Contract)", "प्रस्ताव", "स्वीकृति", "शून्य करार"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "According to the Indian Contract Act, 1872, 'an agreement enforceable by law' is officially termed as a:", options: ["Contract", "Proposal", "Acceptance", "Void Agreement"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "अपकृत्य विधि (Law of Torts) के तहत, 'प्रतिनिधिक दायित्व' (Vicarious Liability) का कानूनी अर्थ क्या होता है?", options: ["किसी अन्य व्यक्ति के कृत्य के लिए दायित्व (Liability for the act of another)", "कठोर दायित्व", "ईश्वरीय कृत्य के लिए दायित्व", "स्वयं के कृत्य के लिए दायित्व"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Under the Law of Torts, what is the precise legal meaning of 'Vicarious Liability'?", options: ["Liability incurred for the act of another person", "Absolute Strict Liability", "Liability for acts of God", "Liability for one's own direct actions"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "राष्ट्रीय विधिक सेवा प्राधिकरण (NALSA) के 'पदेन कार्यकारी अध्यक्ष' (Ex-officio Executive Chairman) के रूप में कौन कार्य करता है?", options: ["भारत के सर्वोच्च न्यायालय के द्वितीय वरिष्ठतम न्यायाधीश", "भारत के मुख्य न्यायाधीश", "केंद्रीय कानून मंत्री", "भारत के राष्ट्रपति"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "Who officially acts as the 'ex-officio Executive Chairman' of the National Legal Services Authority (NALSA)?", options: ["The second senior-most Judge of the Supreme Court of India", "The Chief Justice of India", "The Union Minister of Law and Justice", "The President of India"], correct: 0 },
{ subject: "legal_studies", lang: "hi", question: "अंतरराष्ट्रीय स्तर पर गंभीर अपराधों (जैसे युद्ध अपराध) के लिए व्यक्तियों पर मुकदमा चलाने के लिए स्थापित 'अंतर्राष्ट्रीय आपराधिक न्यायालय' (ICC) का मुख्यालय कहाँ है?", options: ["हेग, नीदरलैंड्स (The Hague)", "जिनेवा, स्विट्जरलैंड", "न्यूयॉर्क, अमेरिका", "पेरिस, फ्रांस"], correct: 0 },
{ subject: "legal_studies", lang: "en", question: "The International Criminal Court (ICC), established to prosecute individuals for severe international crimes, is headquartered at:", options: ["The Hague, Netherlands", "Geneva, Switzerland", "New York, USA", "Paris, France"], correct: 0 },

// ==========================================
// 10. हिंदी साहित्य (Hindi Literature) - SET 8 (12th Board Level)
// ==========================================
{ subject: "hindi_lit", lang: "hi", question: "कक्षा 12 की आरोह पाठ्यपुस्तक में संकलित 'आत्मपरिचय' नामक प्रसिद्ध कविता के रचयिता कौन हैं?", options: ["हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी निराला", "कुंवर नारायण", "गजानन माधव मुक्तिबोध"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "Who is the author of the famous poem 'Aatm Parichay' compiled in the Class 12 Aroh textbook?", options: ["Harivansh Rai Bachchan", "Suryakant Tripathi Nirala", "Kunwar Narayan", "Gajanan Madhav Muktibodh"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "महादेवी वर्मा द्वारा रचित प्रसिद्ध संस्मरणात्मक रेखाचित्र 'भक्तिन' में मुख्य पात्र भक्तिन का वास्तविक नाम क्या था?", options: ["लछमिन (लक्ष्मी)", "पार्वती", "सरस्वती", "धनिया"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "In Mahadevi Verma's famous memoir sketch 'Bhaktin', what was the real name of the main character Bhaktin?", options: ["Lachhmin (Lakshmi)", "Parvati", "Saraswati", "Dhaniya"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "फणीश्वरनाथ रेणु की प्रसिद्ध आंचलिक कहानी 'पहलवान की ढोलक' में मुख्य पात्र (पहलवान) का क्या नाम है?", options: ["लुट्टन सिंह", "चांद सिंह", "बादल सिंह", "काला खां"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "What is the name of the main character (the wrestler) in Phanishwar Nath Renu's famous regional story 'Pahalwan Ki Dholak'?", options: ["Luttan Singh", "Chand Singh", "Badal Singh", "Kala Khan"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "वितान भाग-2 में संकलित मनोहर श्याम जोशी की 'सिल्वर वैडिंग' कहानी के मुख्य पात्र यशोधर बाबू कार्यालय में किस पद पर कार्य करते थे?", options: ["सेक्शन ऑफिसर", "प्रधानाचार्य", "पोस्टमैन", "बैंक मैनेजर"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "In Manohar Shyam Joshi's story 'Silver Wedding' (Vitan-2), the main character Yashodhar Babu held which post in his office?", options: ["Section Officer", "Principal", "Postman", "Bank Manager"], correct: 0 },
{ subject: "hindi_lit", lang: "hi", question: "रघुवीर सहाय द्वारा रचित कविता 'कैमरे में बंद अपाहिज' उनके किस प्रसिद्ध काव्य संग्रह से ली गई है?", options: ["लोग भूल गए हैं", "आत्महत्या के विरुद्ध", "सीढ़ियों पर धूप में", "हंसो हंसो जल्दी हंसो"], correct: 0 },
{ subject: "hindi_lit", lang: "en", question: "The poem 'Camere Mein Band Apahij' by Raghuvir Sahay is taken from which of his famous poetry collections?", options: ["Log Bhool Gaye Hain", "Atmahatya Ke Viruddh", "Seedhiyon Par Dhoop Mein", "Hanso Hanso Jaldi Hanso"], correct: 0 },

// ==========================================
// 11. अंग्रेजी साहित्य (English Literature) - SET 8 (12th Board Level)
// ==========================================
{ subject: "english_lit", lang: "hi", question: "अल्फोंस डोडे (Alphonse Daudet) की कहानी 'द लास्ट लेसन' (The Last Lesson) में, अलसैस और लोरेन के स्कूलों में किस भाषा को पढ़ाने पर प्रतिबंध लगा दिया गया था?", options: ["फ्रेंच (French)", "जर्मन", "अंग्रेजी", "रूसी"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "In the lesson 'The Last Lesson' by Alphonse Daudet, the teaching of which language was banned in the schools of Alsace and Lorraine?", options: ["French", "German", "English", "Russian"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "अनीस जंग की कहानी 'लॉस्ट स्प्रिंग' (Lost Spring) में, सीमापुरी का युवा लड़का साहेब-ए-आलम क्या काम करता है?", options: ["कचरा बीनने वाला (Ragpicker)", "चाय की दुकान का लड़का", "चूड़ी बनाने वाला", "जूते पॉलिश करने वाला"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "In Anees Jung's 'Lost Spring', what is the profession of Saheb-e-Alam, the young boy living in Seemapuri?", options: ["Ragpicker", "Tea stall boy", "Bangle maker", "Shoeshine boy"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "कक्षा 12 की प्रसिद्ध कविता 'माई मदर एट सिक्सटी-सिक्स' (My Mother at Sixty-six) की लेखिका कौन हैं?", options: ["कमला दास (Kamala Das)", "पाब्लो नेरुदा", "जॉन कीट्स", "स्टीफन स्पेंडर"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "Who is the author of the poignant poem 'My Mother at Sixty-six'?", options: ["Kamala Das", "Pablo Neruda", "John Keats", "Stephen Spender"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "'द रैटट्रैप' (The Rattrap) कहानी में, फेरीवाला (Peddler) पूरी दुनिया की तुलना किस चीज से करता है?", options: ["एक विशाल चूहेदानी से (A giant rattrap)", "एक अंधेरे जंगल से", "एक चरखे से", "एक लोहे की मिल से"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "In Selma Lagerlöf's story 'The Rattrap', what does the peddler metaphorically compare the whole world to?", options: ["A giant rattrap", "A dark forest", "A spinning wheel", "An iron mill"], correct: 0 },
{ subject: "english_lit", lang: "hi", question: "कल्कि की कहानी 'द टाइगर किंग' (The Tiger King) में, प्रतिबंधपुरम का महाराजा ज्योतिषी की भविष्यवाणी को गलत साबित करने के लिए कितने बाघों को मारने की कसम खाता है?", options: ["एक सौ (100)", "पचास (50)", "सत्तर (70)", "निन्यानवे (99)"], correct: 0 },
{ subject: "english_lit", lang: "en", question: "In Kalki's 'The Tiger King', the Maharaja of Pratibandapuram vows to kill how many tigers to disprove the chief astrologer's prophecy?", options: ["One Hundred (100)", "Fifty (50)", "Seventy (70)", "Ninety-nine (99)"], correct: 0 },

// ==========================================
// 12. लेखाकर्म (Accountancy) - SET 8 (12th Board Level)
// ==========================================
{ subject: "accountancy", lang: "hi", question: "साझेदारी फर्म के विघटन (Dissolution) के समय, लाभ-हानि खाते के डेबिट शेष जैसी अवास्तविक संपत्तियों (Fictitious Assets) को कहाँ हस्तांतरित किया जाता है?", options: ["साझेदारों के पूंजी खाते में (Partners' Capital Accounts)", "वसूली खाते में (Realisation Account)", "रोकड़ खाते में", "पुनर्मूल्यांकन खाते में"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "At the time of dissolution of a partnership firm, fictitious assets like the debit balance of the P&L Account are transferred to:", options: ["Partners' Capital Accounts", "Realisation Account", "Cash Account", "Revaluation Account"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "कंपनी अधिनियम 2013 की धारा 53 के अनुसार, कोई भी कंपनी अपने शेयरों (Shares) को किस मूल्य पर जारी नहीं कर सकती है?", options: ["बट्टे पर (Discount)", "प्रीमियम पर (Premium)", "सममूल्य पर (Par)", "अंकित मूल्य पर"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "According to Section 53 of the Companies Act 2013, a company is strictly prohibited from issuing its shares at a:", options: ["Discount", "Premium", "Par", "Face Value"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "नकद प्रवाह विवरण (Cash Flow Statement - AS-3) में, एक गैर-वित्तीय कंपनी द्वारा लाभांश (Dividend) का भुगतान किस प्रकार की गतिविधि के रूप में वर्गीकृत किया जाता है?", options: ["वित्तीय गतिविधि (Financing Activity)", "संचालन गतिविधि", "निवेश गतिविधि", "असाधारण मद"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "In a Cash Flow Statement (AS-3), the payment of dividend by a non-financial manufacturing company is classified as which type of activity?", options: ["Financing Activity", "Operating Activity", "Investing Activity", "Extraordinary Item"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "कंपनी नियम, 2014 के अनुसार एक साधारण साझेदारी फर्म में साझेदारों की अधिकतम संख्या कितनी हो सकती है?", options: ["50", "100", "20", "असीमित"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "What is the maximum number of partners permitted in an ordinary partnership firm as prescribed by the Companies Rules, 2014?", options: ["50", "100", "20", "Unlimited"], correct: 0 },
{ subject: "accountancy", lang: "hi", question: "न मांगी गई पूंजी (Uncalled Capital) का वह हिस्सा जिसे कंपनी केवल अपने समापन (Winding up) की स्थिति में ही मांग सकती है, क्या कहलाता है?", options: ["संचित पूंजी (Reserve Capital)", "पूंजीगत संचय (Capital Reserve)", "अधिकृत पूंजी", "निर्गमित पूंजी"], correct: 0 },
{ subject: "accountancy", lang: "en", question: "The portion of uncalled capital that a company dictates can only be called up in the event of its winding up is known as:", options: ["Reserve Capital", "Capital Reserve", "Authorized Capital", "Issued Capital"], correct: 0 },

// ==========================================
// 13. व्यावसायिक अध्ययन (Business Studies) - SET 8 (12th Board Level)
// ==========================================
{ subject: "business", lang: "hi", question: "हेनरी फेयोल के 'सोपान श्रृंखला' (Scalar Chain) सिद्धांत में पदानुक्रम का कड़ाई से पालन होता है। आपातकाल में इस श्रृंखला को तोड़ने वाले शॉर्टकट को क्या कहा जाता है?", options: ["समतल संपर्क या गैंग प्लैंक (Gang Plank)", "नियंत्रण का विस्तार", "आदेश की एकता", "सहयोग की भावना"], correct: 0 },
{ subject: "business", lang: "en", question: "Henry Fayol's 'Principle of Scalar Chain' emphasizes a formal line of authority. What is the permitted shortcut in emergencies called?", options: ["Gang Plank", "Span of Control", "Unity of Command", "Espirit De Corps"], correct: 0 },
{ subject: "business", lang: "hi", question: "मार्केटिंग मिक्स (Marketing Mix) का वह कौन सा तत्व है जो छूट, क्रेडिट शर्तों और सूची मूल्य (List Price) से संबंधित निर्णय लेता है?", options: ["मूल्य (Price)", "उत्पाद", "स्थान", "संवर्धन"], correct: 0 },
{ subject: "business", lang: "en", question: "Which core element of the Marketing Mix is directly concerned with decisions regarding discounts, credit terms, and list values?", options: ["Price", "Product", "Place", "Promotion"], correct: 0 },
{ subject: "business", lang: "hi", question: "प्रतिभूतियों में निवेशकों के हितों की रक्षा के लिए भारत में 'SEBI' की स्थापना की गई। SEBI का पूर्ण रूप क्या है?", options: ["Securities and Exchange Board of India", "Stock and Equity Board of India", "Securities Evaluation Board of India", "Standard Exchange Bank of India"], correct: 0 },
{ subject: "business", lang: "en", question: "'SEBI' was established to protect the interests of investors in securities. What does the acronym SEBI stand for?", options: ["Securities and Exchange Board of India", "Stock and Equity Board of India", "Securities Evaluation Board of India", "Standard Exchange Bank of India"], correct: 0 },
{ subject: "business", lang: "hi", question: "निम्नलिखित में से कौन सा एक अच्छे 'ब्रांड नाम' (Brand Name) की विशेषता नहीं है?", options: ["यह बहुत लंबा और जटिल होना चाहिए", "यह उच्चारण में आसान होना चाहिए", "यह उत्पाद के लाभों का सुझाव देने वाला होना चाहिए", "यह पैकेजिंग के अनुकूल होना चाहिए"], correct: 0 },
{ subject: "business", lang: "en", question: "Which of the following is definitely NOT a characteristic of a conceptually Good Brand Name?", options: ["It should be very long and complex", "It should be easy to pronounce", "It should suggest product benefits", "It should be adaptable to packaging"], correct: 0 },
{ subject: "business", lang: "hi", question: "किसी कंपनी की कुल पूंजी में ऋण (Debt) और समता (Equity) के अनुपात को तय करने से संबंधित वित्तीय निर्णय को क्या कहा जाता है?", options: ["पूंजी संरचना निर्णय (Capital Structure decision)", "लाभांश निर्णय", "निवेश निर्णय", "कार्यशील पूंजी निर्णय"], correct: 0 },
{ subject: "business", lang: "en", question: "The critical financial management decision concerning the composition of debt and equity in the total capital of a company is called the:", options: ["Capital Structure decision", "Dividend decision", "Investment decision", "Working Capital decision"], correct: 0 },

// ==========================================
// 14. उद्यमशीलता (Entrepreneurship) - SET 8 (12th Board Level)
// ==========================================
{ subject: "entrepreneurship", lang: "hi", question: "वह लिखित दस्तावेज़ क्या कहलाता है जो व्यवसाय के भविष्य के लक्ष्यों और उन्हें प्राप्त करने की रणनीतियों का व्यवस्थित रूप से वर्णन करता है?", options: ["व्यवसाय योजना (Business Plan)", "साझेदारी संलेख", "पार्षद अंतर्नियम", "ज्ञापन"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "A comprehensive written document that systematically describes the future goals of a business and the functional strategies to achieve them is called a:", options: ["Business Plan", "Partnership Deed", "Articles of Association", "Memorandum"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "किसी व्यवसाय में 'निवेश पर प्रतिफल' (Return on Investment - ROI) की गणना करने का सही सूत्र क्या है?", options: ["(शुद्ध लाभ / कुल नियोजित पूंजी) × 100", "(कुल बिक्री / शुद्ध लाभ) × 100", "(सकल लाभ / कुल संपत्ति) × 100", "(शुद्ध लाभ / कार्यशील पूंजी) × 100"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "Which mathematical formula correctly represents the calculation of 'Return on Investment' (ROI)?", options: ["(Net Profit / Total Capital Employed) × 100", "(Total Sales / Net Profit) × 100", "(Gross Profit / Total Assets) × 100", "(Net Profit / Working Capital) × 100"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "व्यवसाय शुरू करने के लिए उपयोग की जाने वाली प्रारंभिक पूंजी, जो अक्सर संस्थापकों की व्यक्तिगत संपत्ति या परिवार से आती है, क्या कहलाती है?", options: ["सीड कैपिटल या प्रारंभिक पूंजी (Seed Capital)", "वेंचर कैपिटल", "कार्यशील पूंजी", "ऋण पूंजी"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "What term specifically describes the initial capital used to start a business, often sourced from the founders' personal assets or family members?", options: ["Seed Capital", "Venture Capital", "Working Capital", "Debt Capital"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "बौद्धिक संपदा अधिकार (IPR) जो लेखकों, संगीतकारों और कलाकारों के मूल कार्यों (किताबें, संगीत, कला) की रक्षा करते हैं, क्या कहलाते हैं?", options: ["कॉपीराइट (Copyrights)", "पेटेंट", "ट्रेडमार्क", "व्यापार रहस्य"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "Intellectual Property Rights (IPR) that exclusively protect original works of authorship like books, music, and art are known as:", options: ["Copyrights", "Patents", "Trademarks", "Trade Secrets"], correct: 0 },
{ subject: "entrepreneurship", lang: "hi", question: "उद्यमिता में 'फ्रेंचाइज़िंग' (Franchising) एक रणनीति है जिसका उपयोग मुख्य रूप से किस उद्देश्य के लिए किया जाता है?", options: ["व्यवसाय के विस्तार और विकास के लिए", "व्यवसाय को बंद करने के लिए", "उत्पाद की गुणवत्ता कम करने के लिए", "सभी करों से बचने के लिए"], correct: 0 },
{ subject: "entrepreneurship", lang: "en", question: "'Franchising' is an entrepreneurial business model and strategy primarily utilized for:", options: ["Business Expansion and Growth", "Liquidating the entire business", "Deliberately reducing product quality", "Avoiding all legal taxes"], correct: 0 },

// ==========================================
// 15. भौतिकी (Physics) - SET 8 (12th Board Level)
// ==========================================
{ subject: "physics", lang: "hi", question: "स्थिर वैद्युतिकी में गॉस के नियम के अनुसार, किसी बंद पृष्ठ से गुजरने वाला कुल विद्युत फ्लक्स केवल किस पर निर्भर करता है?", options: ["पृष्ठ द्वारा परिबद्ध कुल आवेश पर (Net charge enclosed)", "पृष्ठ के आकार पर", "पृष्ठ की आकृति पर", "पृष्ठ के बाहर स्थित आवेशों की स्थिति पर"], correct: 0 },
{ subject: "physics", lang: "en", question: "According to Gauss's Law in electrostatics, the total electric flux through a closed imaginary surface depends solely on:", options: ["The net charge enclosed by the surface", "The size of the surface", "The geometrical shape of the surface", "The position of charges completely outside the surface"], correct: 0 },
{ subject: "physics", lang: "hi", question: "विमानों के नेविगेशन के लिए रडार (RADAR) प्रणालियों में मुख्य रूप से किन विद्युत चुम्बकीय तरंगों का उपयोग किया जाता है?", options: ["सूक्ष्म तरंगें (Microwaves)", "एक्स-रे", "पराबैंगनी किरणें", "गामा किरणें"], correct: 0 },
{ subject: "physics", lang: "en", question: "Which specific electromagnetic waves are most widely utilized in RADAR systems for aircraft navigation and speed detection?", options: ["Microwaves", "X-rays", "Ultraviolet rays", "Gamma rays"], correct: 0 },
{ subject: "physics", lang: "hi", question: "जब उपयुक्त आवृत्ति का प्रकाश किसी धातु की सतह पर पड़ता है, तो सतह से इलेक्ट्रॉनों के उत्सर्जन की घटना क्या कहलाती है?", options: ["प्रकाश विद्युत प्रभाव (Photoelectric effect)", "कॉम्पटन प्रभाव", "तापायनिक उत्सर्जन", "जीमान प्रभाव"], correct: 0 },
{ subject: "physics", lang: "en", question: "The phenomenon of emission of electrons from a metal surface when electromagnetic radiation of suitable frequency falls on it is called:", options: ["Photoelectric effect", "Compton effect", "Thermionic emission", "Zeeman effect"], correct: 0 },
{ subject: "physics", lang: "hi", question: "हाइड्रोजन परमाणु के वर्णक्रम (Spectrum) में, स्पेक्ट्रमी रेखाओं की कौन सी श्रेणी विद्युत चुम्बकीय स्पेक्ट्रम के 'दृश्य क्षेत्र' (Visible region) में आती है?", options: ["बामर श्रेणी (Balmer series)", "लाइमन श्रेणी", "पाश्चन श्रेणी", "ब्रैकेट श्रेणी"], correct: 0 },
{ subject: "physics", lang: "en", question: "In a hydrogen atom's emission spectrum, which series of spectral lines consistently lies in the visible region of the electromagnetic spectrum?", options: ["Balmer series", "Lyman series", "Paschen series", "Brackett series"], correct: 0 },
{ subject: "physics", lang: "hi", question: "डिजिटल इलेक्ट्रॉनिक्स में वह कौन सा लॉजिक गेट है जो केवल तभी उच्च (HIGH - 1) आउटपुट देता है जब उसके दोनों इनपुट उच्च (1) हों?", options: ["AND गेट", "OR गेट", "NAND गेट", "NOR गेट"], correct: 0 },
{ subject: "physics", lang: "en", question: "A fundamental logic gate which yields a HIGH (1) output strictly only when both of its inputs are HIGH (1) is the:", options: ["AND gate", "OR gate", "NAND gate", "NOR gate"], correct: 0 },

// ==========================================
// 16. रसायन विज्ञान (Chemistry) - SET 8 (12th Board Level)
// ==========================================
{ subject: "chemistry", lang: "hi", question: "पॉलिमर (बहुलक) और वृहद अणुओं (Macro-molecules) के मोलर द्रव्यमान का सबसे सटीक निर्धारण करने के लिए किस अणुसंख्यक गुणधर्म का उपयोग किया जाता है?", options: ["परासरण दाब (Osmotic pressure)", "वाष्प दाब का आपेक्षिक अवनमन", "क्वथनांक का उन्नयन", "हिमांक का अवनमन"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Which colligative property is preferred and most accurate for determining the molar mass of polymers, proteins, and macro-molecules?", options: ["Osmotic pressure", "Relative lowering of vapour pressure", "Elevation of boiling point", "Depression of freezing point"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "फैराडे के विद्युत अपघटन के प्रथम नियम के अनुसार, इलेक्ट्रोड पर जमा हुए पदार्थ का द्रव्यमान सीधे किसके समानुपाती होता है?", options: ["प्रवाहित विद्युत की मात्रा के (Quantity of electricity passed)", "विलयन के तापमान के", "विद्युत अपघट्य के आयतन के", "इलेक्ट्रोड की सांद्रता के"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "According to Faraday's First Law of Electrolysis, the mass of the substance deposited at an electrode is directly proportional to:", options: ["Quantity of electricity passed through the electrolyte", "Temperature of the solution", "Volume of the electrolyte", "Concentration of the electrodes"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "सल्फ्यूरिक अम्ल (H2SO4) के निर्माण की औद्योगिक 'संपर्क विधि' (Contact Process) में मुख्य रूप से किस उत्प्रेरक (Catalyst) का उपयोग किया जाता है?", options: ["वैनेडियम पेंटाऑक्साइड (V2O5)", "आयरन ऑक्साइड", "महीन पिसा हुआ निकल", "मैंगनीज डाइऑक्साइड"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "In the industrial 'Contact Process' for manufacturing Sulphuric Acid, which chemical catalyst is predominantly used?", options: ["Vanadium pentoxide (V2O5)", "Iron oxide", "Finely divided Nickel", "Manganese dioxide"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "जब प्राथमिक अल्कोहल (Primary Alcohols) का PCC जैसे हल्के ऑक्सीकारक अभिकर्मकों का उपयोग करके ऑक्सीकरण किया जाता है, तो कौन सा कार्बनिक यौगिक बनता है?", options: ["एल्डिहाइड (Aldehydes)", "कीटोन", "कार्बोक्जिलिक अम्ल", "एस्टर"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "What class of organic compounds is formed when primary alcohols are oxidized using mild oxidizing agents like Pyridinium chlorochromate (PCC)?", options: ["Aldehydes", "Ketones", "Carboxylic Acids", "Esters"], correct: 0 },
{ subject: "chemistry", lang: "hi", question: "विटामिन B12, जो एक जटिल उपसहसंयोजक यौगिक (Coordination compound) है, में कौन सा केंद्रीय संक्रमण धातु परमाणु मौजूद होता है?", options: ["कोबाल्ट (Co)", "आयरन (Fe)", "मैग्नीशियम (Mg)", "जिंक (Zn)"], correct: 0 },
{ subject: "chemistry", lang: "en", question: "Vitamin B12, an essential biological coordination compound, contains which central transition metal atom in its complex?", options: ["Cobalt (Co)", "Iron (Fe)", "Magnesium (Mg)", "Zinc (Zn)"], correct: 0 },

// ==========================================
// 17. जीव विज्ञान (Biology) - SET 8 (12th Board Level)
// ==========================================
{ subject: "biology", lang: "hi", question: "मानव मादाओं में परिपक्व मादा युग्मक (अंडाणु) के निर्माण की जैविक प्रक्रिया क्या कहलाती है?", options: ["अंडजनन (Oogenesis)", "शुक्रजनन", "अनिषेकजनन", "भ्रूणोद्भव"], correct: 0 },
{ subject: "biology", lang: "en", question: "The biological process of formation of a mature female gamete (ovum) in human females is scientifically termed as:", options: ["Oogenesis", "Spermatogenesis", "Parthenogenesis", "Embryogenesis"], correct: 0 },
{ subject: "biology", lang: "hi", question: "मनुष्यों में, 'डाउन सिंड्रोम' (Down's Syndrome) नामक आनुवंशिक विकार किस गुणसूत्र संख्या की त्रिसूत्रता (Trisomy) के कारण होता है?", options: ["गुणसूत्र 21 (Chromosome 21)", "गुणसूत्र 18", "गुणसूत्र 13", "लिंग गुणसूत्र (XX/XY)"], correct: 0 },
{ subject: "biology", lang: "en", question: "In humans, Down's Syndrome is a congenital genetic disorder caused specifically by the trisomy of which chromosome number?", options: ["Chromosome 21", "Chromosome 18", "Chromosome 13", "Sex chromosomes (XX/XY)"], correct: 0 },
{ subject: "biology", lang: "hi", question: "समरूप अंग (Analogous organs), जैसे तितली के पंख और पक्षी के पंख, किस प्रकार के विकास (Evolution) का परिणाम होते हैं?", options: ["अभिसारी विकास (Convergent evolution)", "अपसारी विकास", "अनुकूली विकिरण", "आनुवंशिक विचलन"], correct: 0 },
{ subject: "biology", lang: "en", question: "Analogous organs, such as the wings of a butterfly and the wings of a bird, arise fundamentally due to which type of evolution?", options: ["Convergent evolution", "Divergent evolution", "Adaptive radiation", "Genetic drift"], correct: 0 },
{ subject: "biology", lang: "hi", question: "डीएनए प्रतिकृतियन (Replication) के दौरान डीएनए के दोहरे कुंडलन (Double helix) को खोलने का कार्य कौन सा एंजाइम करता है?", options: ["डीएनए हेलिकेज (DNA Helicase)", "डीएनए पॉलीमरेज", "डीएनए लाइगेज", "आरएनए प्राइमेस"], correct: 0 },
{ subject: "biology", lang: "en", question: "Which specific enzyme is responsible for the unwinding and separation of the DNA double helix strands during DNA replication?", options: ["DNA Helicase", "DNA Polymerase", "DNA Ligase", "RNA Primase"], correct: 0 },
{ subject: "biology", lang: "hi", question: "पारिस्थितिकी में वह अंतर-जातीय पारस्परिक क्रिया क्या कहलाती है जिसमें एक प्रजाति को लाभ होता है और दूसरी को न तो लाभ होता है और न ही हानि?", options: ["सहभोजिता (Commensalism)", "सहोपकारिता", "परजीविता", "अन्तरजातीय परजीविता"], correct: 0 },
{ subject: "biology", lang: "en", question: "The specific inter-specific population interaction where one species benefits while the other is neither harmed nor benefited is called:", options: ["Commensalism", "Mutualism", "Parasitism", "Amensalism"], correct: 0 },

// ==========================================
// 18. बायोटेक्नोलॉजी (Biotechnology) - SET 8 (12th Board Level)
// ==========================================
{ subject: "biotech", lang: "hi", question: "पहला पुनर्योजन (Recombinant) डीएनए स्टेनली कोहेन और हर्बर्ट बॉयर द्वारा किस जीवाणु के प्लास्मिड के साथ एंटीबायोटिक प्रतिरोधी जीन को जोड़कर बनाया गया था?", options: ["साल्मोनेला टाइफीम्यूरियम (Salmonella typhimurium)", "ई. कोलाई", "एग्रोबैक्टीरियम ट्यूमेफेशियंस", "बैसिलस थुरिंगिएंसिस"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The first recombinant DNA was successfully constructed by linking an antibiotic resistance gene with the native plasmid of which bacterium?", options: ["Salmonella typhimurium", "Escherichia coli", "Agrobacterium tumefaciens", "Bacillus thuringiensis"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "पी.सी.आर. (PCR) तकनीक के उस चरण को क्या कहते हैं जिसमें प्राइमर (Primers) डीएनए के एकल-रज्जुक टेम्पलेट से जुड़ते हैं?", options: ["तापनुशीलन (Annealing)", "निष्क्रियकरण (Denaturation)", "प्रसार (Extension)", "बंधन (Ligation)"], correct: 0 },
{ subject: "biotech", lang: "en", question: "In PCR (Polymerase Chain Reaction), the specific step where oligonucleotide primers bind to the single-stranded DNA templates is termed:", options: ["Annealing", "Denaturation", "Extension", "Ligation"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "जेनेटिक इंजीनियरिंग द्वारा तैयार की गई 'गोल्डन राइस' (Golden Rice) फसल किस आवश्यक पोषक तत्व से भरपूर होती है?", options: ["विटामिन ए / बीटा-कैरोटीन (Vitamin A)", "विटामिन सी", "आयरन (लोहा)", "प्रोटीन"], correct: 0 },
{ subject: "biotech", lang: "en", question: "Golden Rice is a genetically modified transgenic crop specifically engineered to be highly enriched in which essential nutrient?", options: ["Vitamin A (Beta-carotene)", "Vitamin C", "Iron", "Protein"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "पौधों की कोशिकाओं में वांछित जीन प्रवेश कराने के लिए क्लोनिंग वाहक के रूप में व्यापक रूप से उपयोग किया जाने वाला 'Ti प्लास्मिड' किससे प्राप्त होता है?", options: ["एग्रोबैक्टीरियम ट्यूमेफेशियंस (Agrobacterium tumefaciens)", "थर्मस एक्वाटिकस", "रेट्रोवायरस", "बैक्टीरियोफेज"], correct: 0 },
{ subject: "biotech", lang: "en", question: "The Ti plasmid, widely utilized as a highly effective cloning vector for delivering genes into plant cells, is naturally obtained from:", options: ["Agrobacterium tumefaciens", "Thermus aquaticus", "Retroviruses", "Bacteriophages"], correct: 0 },
{ subject: "biotech", lang: "hi", question: "जेनेटिक इंजीनियरिंग में 'वरणयोग्य चिह्नकों' (Selectable Markers) जैसे एम्पीसिलीन प्रतिरोधक जीन का मुख्य उद्देश्य क्या होता है?", options: ["रूपांतरजों की पहचान करना और अरूपांतरजों को खत्म करना (Identify transformants)", "डीएनए को विशिष्ट स्थानों पर काटना", "डीएनए टुकड़ों को आपस में जोड़ना", "कोशिका के बाहर डीएनए की प्रतिकृति बनाना"], correct: 0 },
{ subject: "biotech", lang: "en", question: "What is the primary operational purpose of utilizing 'selectable markers' (like ampicillin resistance gene) in genetic engineering vectors?", options: ["To precisely identify transformants and eliminate non-transformants", "To cleave DNA at specific recognition sites", "To ligate multiple DNA fragments", "To replicate DNA molecules outside the host cell"], correct: 0 },

// ==========================================
// 19. गणित (Mathematics) - SET 8 (12th Board Level)
// ==========================================
{ subject: "maths", lang: "hi", question: "समुच्चय A में कोई संबंध R 'तुल्यता संबंध' (Equivalence Relation) कहलाता है, यदि वह संबंध क्या हो?", options: ["स्वतुल्य, सममित और संक्रामक (Reflexive, Symmetric, and Transitive)", "केवल स्वतुल्य", "केवल सममित", "केवल संक्रामक"], correct: 0 },
{ subject: "maths", lang: "en", question: "A relation R formulated in a set A is officially classified as an 'Equivalence Relation' if and only if it is:", options: ["Reflexive, Symmetric, and Transitive", "Only Reflexive", "Only Symmetric", "Only Transitive"], correct: 0 },
{ subject: "maths", lang: "hi", question: "अवकलन में, sin⁻¹x का x के सापेक्ष अवकलज (Derivative) क्या होता है?", options: ["1 / √(1 - x²)", "-1 / √(1 - x²)", "1 / (1 + x²)", "1 / (x√(x² - 1))"], correct: 0 },
{ subject: "maths", lang: "en", question: "In differential calculus, the derivative of the inverse trigonometric function sin⁻¹x with respect to x is strictly:", options: ["1 / √(1 - x²)", "-1 / √(1 - x²)", "1 / (1 + x²)", "1 / (x√(x² - 1))"], correct: 0 },
{ subject: "maths", lang: "hi", question: "अवकल समीकरण (Differential Equation) d²y/dx² + cos(dy/dx) = 0 की कोटि (Order) और घात (Degree) क्या है?", options: ["कोटि 2, घात परिभाषित नहीं (Order 2, Degree not defined)", "कोटि 2, घात 1", "कोटि 1, घात 1", "कोटि 1, घात 2"], correct: 0 },
{ subject: "maths", lang: "en", question: "What is the order and degree (if defined) of the given differential equation: d²y/dx² + cos(dy/dx) = 0?", options: ["Order 2, Degree not defined", "Order 2, Degree 1", "Order 1, Degree 1", "Order 1, Degree 2"], correct: 0 },
{ subject: "maths", lang: "hi", question: "त्रिविमीय ज्यामिति में किन्हीं दो विषमतलीय रेखाओं (Skew lines) के बीच की न्यूनतम दूरी हमेशा किस दिशा के अनुदिश मापी जाती है?", options: ["उनके उभयनिष्ठ लंब के अनुदिश (Along their common perpendicular)", "प्रतिच्छेदन बिंदु पर", "समांतर अक्ष के अनुदिश", "मूल बिंदु पर"], correct: 0 },
{ subject: "maths", lang: "en", question: "In 3D geometry, the shortest distance established between two non-intersecting skew lines is invariably measured along their:", options: ["Common perpendicular", "Point of intersection", "Parallel axis", "Origin points"], correct: 0 },
{ subject: "maths", lang: "hi", question: "प्रायिकता (Probability) में, यदि A और B दो स्वतंत्र घटनाएँ (Independent events) हैं, तो P(A ∩ B) का मान किसके बराबर होता है?", options: ["P(A) × P(B)", "P(A) + P(B)", "P(A) - P(B)", "P(A) / P(B)"], correct: 0 },
{ subject: "maths", lang: "en", question: "In probability theory, if A and B represent two entirely independent events, then P(A ∩ B) translates algebraically to:", options: ["P(A) × P(B)", "P(A) + P(B)", "P(A) - P(B)", "P(A) / P(B)"], correct: 0 },

// ==========================================
// 20. एप्लाइड मैथ (Applied Mathematics) - SET 8 (12th Board Level)
// ==========================================
{ subject: "applied_math", lang: "hi", question: "वित्तीय गणित में निवेश की वृद्धि मापने के लिए 'CAGR' का उपयोग किया जाता है। CAGR का पूर्ण रूप क्या है?", options: ["चक्रवृद्धि वार्षिक वृद्धि दर (Compound Annual Growth Rate)", "कैलकुलेटेड एवरेज ग्रॉस रिटर्न", "करेंट एनुअल गेन रेशियो", "क्युमुलेटिव एसेट ग्रोथ रेट"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "In financial mathematics, 'CAGR' is widely used to evaluate investment growth. What does CAGR stand for?", options: ["Compound Annual Growth Rate", "Calculated Average Gross Return", "Current Annual Gain Ratio", "Cumulative Asset Growth Rate"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "मैट्रिक्स बीजगणित में, एक वर्ग आव्यूह (Square Matrix) A 'अव्युत्क्रमणीय आव्यूह' (Singular Matrix) कहलाता है, यदि उसके सारणिक (|A|) का मान क्या हो?", options: ["0 (शून्य)", "1", "-1", "अनंत"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "A square matrix A is classified strictly as a 'Singular Matrix' if its calculated determinant value (|A|) is exactly equal to:", options: ["0 (Zero)", "1", "-1", "Infinity"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "ऋण चुकाने के लिए दी जाने वाली 'समान मासिक किस्त' (EMI) की अवधारणा गणितीय रूप से मुख्य रूप से किस सिद्धांत पर आधारित है?", options: ["वार्षिकी का वर्तमान मूल्य (Present value of an annuity)", "साधारण ब्याज", "समांतर श्रेढ़ी", "लघुगणक (Logarithms)"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "The widely used banking concept of 'EMI' (Equated Monthly Installment) is mathematically rooted in the fundamental principles of:", options: ["Annuities (Present value of an annuity)", "Simple Interest algorithms", "Arithmetic Progression", "Logarithms"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "अनुमानात्मक सांख्यिकी में, 'शून्य परिकल्पना' (Null Hypothesis - H0) आम तौर पर क्या बताती है?", options: ["चरो के बीच कोई महत्वपूर्ण अंतर या प्रभाव नहीं है", "चरो के बीच बहुत बड़ा अंतर है", "नमूना हमेशा दोषपूर्ण है", "चर पूरी तरह से सहसंबंधित हैं"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "In inferential statistics and testing, the 'Null Hypothesis' (H0) generically posits that:", options: ["There is no significant difference or effect", "There is a massive statistical difference", "The collected sample is inherently flawed", "The variables are perfectly correlated"], correct: 0 },
{ subject: "applied_math", lang: "hi", question: "संक्रिया विज्ञान (Operations Research) में कुल लागत को कम करते हुए संसाधनों (जैसे कामगारों को नौकरियों) का इष्टतम आवंटन खोजने के लिए किस तकनीक का उपयोग किया जाता है?", options: ["नियतन समस्या / हंगेरियन विधि (Assignment Problem)", "काल श्रेणी विश्लेषण", "मार्कोव चेन", "प्रतिगमन विश्लेषण"], correct: 0 },
{ subject: "applied_math", lang: "en", question: "Which optimization technique is utilized in Operations Research to find the most cost-effective assignment of resources (e.g., matching workers to specific jobs)?", options: ["Assignment Problem (Hungarian Method)", "Time Series Analysis", "Markov Chains", "Regression Analysis"], correct: 0 },

// ==========================================
// 21. कंप्यूटर विज्ञान (Computer Science) - SET 8 (12th Board Level)
// ==========================================
{ subject: "computer_science", lang: "hi", question: "पायथन (Python) में, किसी फाइल को किस मोड में खोला जाता है ताकि उसमें नया डेटा पुरानी सामग्री को मिटाए बिना फाइल के अंत में जुड़ जाए?", options: ["'a' (append mode)", "'w' (write mode)", "'r' (read mode)", "'x' (exclusive creation)"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "In Python file handling, which file opening mode is used to add new data to the end of a file strictly without overwriting existing data?", options: ["'a' (append mode)", "'w' (write mode)", "'r' (read mode)", "'x' (exclusive creation)"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "डेटाबेस से किसी पूरी टेबल की संरचना (Structure) और उसके डेटा को स्थायी रूप से हटाने के लिए किस SQL (DDL) कमांड का उपयोग किया जाता है?", options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "Which SQL command is a DDL (Data Definition Language) statement utilized to permanently destroy an entire table structure from a database?", options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "कंप्यूटर नेटवर्क में वह कौन सा डिवाइस है जो IP पतों (IP Addresses) के आधार पर विभिन्न नेटवर्कों के बीच डेटा पैकेट को सही दिशा में भेजता है?", options: ["राउटर (Router)", "स्विच", "हब", "रिपीटर"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "In a computer network architecture, a device that effectively routes data packets between different IP networks based on IP addresses is called a:", options: ["Router", "Switch", "Hub", "Repeater"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "पायथन प्रोग्रामिंग में एक नए फंक्शन (Function) को परिभाषित करने के लिए किस कीवर्ड (Keyword) का उपयोग किया जाता है?", options: ["def", "function", "func", "define"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "A custom user-defined function in Python is formally initiated and defined using which specific keyword?", options: ["def", "function", "func", "define"], correct: 0 },
{ subject: "computer_science", lang: "hi", question: "पायथन में 'लिस्ट' (List) और 'ट्यूपल' (Tuple) के बीच सबसे मूलभूत अंतर क्या है?", options: ["लिस्ट म्यूटेबल (परिवर्तनशील) होती हैं, ट्यूपल इम्यूटेबल (अपरिवर्तनीय) होते हैं", "लिस्ट इम्यूटेबल होती हैं, ट्यूपल म्यूटेबल होते हैं", "लिस्ट में () का प्रयोग होता है, ट्यूपल में [] का", "दोनों में कोई तकनीकी अंतर नहीं है"], correct: 0 },
{ subject: "computer_science", lang: "en", question: "What represents the most fundamental structural difference between a 'List' and a 'Tuple' in Python?", options: ["Lists are mutable (changeable), Tuples are immutable", "Lists are immutable, Tuples are mutable", "Lists use parentheses (), Tuples use brackets []", "There is absolutely no difference"], correct: 0 },
{
  "questions": [
    { "subject": "History", "lang": "hi_en", "question": "1. हड़प्पा सभ्यता का सबसे बड़ा नगर कौन सा था? / Which was the largest city of Harappan civilization?", "options": ["मोहनजोदड़ो", "राखीगढ़ी", "लोथल", "कालीबंगन"], "correct": 1 },
    { "subject": "History", "lang": "hi_en", "question": "2. विजयनगर साम्राज्य की स्थापना किसने की? / Who founded the Vijayanagara Empire?", "options": ["हरिहर और बुक्का", "कृष्णदेव राय", "अच्युत राय", "सदाशिव राय"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "3. 1857 की क्रांति का तात्कालिक कारण? / Immediate cause of 1857 revolt?", "options": ["चर्बी वाले कारतूस", "हड़प नीति", "सहायक संधि", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "4. सांची का स्तूप किस राज्य में है? / In which state is Sanchi Stupa located?", "options": ["मध्य प्रदेश", "उत्तर प्रदेश", "बिहार", "राजस्थान"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "5. मुगलकालीन प्रशासन में 'दीवान' कौन था? / Who was 'Diwan' in Mughal administration?", "options": ["वित्त मंत्री", "सेनापति", "न्यायाधीश", "विदेश मंत्री"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "1. नीति आयोग कब गठित हुआ? / When was NITI Aayog formed?", "options": ["2015", "2014", "2016", "2017"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "2. 'शॉक थेरेपी' का क्या अर्थ है? / What is the meaning of 'Shock Therapy'?", "options": ["आर्थिक मॉडल", "युद्ध", "शांति", "शिक्षा"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "3. भारतीय संविधान कब लागू हुआ? / When was the Indian Constitution implemented?", "options": ["26 Jan 1950", "15 Aug 1947", "26 Nov 1949", "02 Oct 1950"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "4. आसियान (ASEAN) का मुख्यालय? / Headquarters of ASEAN?", "options": ["जकार्ता", "बैंकॉक", "सिंगापुर", "मनीला"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "5. संयुक्त राष्ट्र संघ की स्थापना? / UN was established in?", "options": ["1945", "1944", "1946", "1947"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "1. स्वेज नहर किन दो सागरों को जोड़ती है? / Suez Canal connects which two seas?", "options": ["लाल और भूमध्य", "कैस्पियन और काला", "अरब और लाल", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "2. जनसंख्या घनत्व का सूत्र? / Formula for population density?", "options": ["कुल जनसंख्या/क्षेत्रफल", "क्षेत्रफल/जनसंख्या", "जन्म/मृत्यु", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "3. भारत में सबसे अधिक साक्षरता वाला राज्य? / Highest literacy state in India?", "options": ["केरल", "तमिलनाडु", "महाराष्ट्र", "पंजाब"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "4. बिग इंच पाइपलाइन क्या ले जाती है? / What does Big Inch pipeline transport?", "options": ["पेट्रोलियम", "दूध", "पानी", "गैस"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "5. 'रूर' कोयला क्षेत्र किस देश में है? / Where is 'Ruhr' coal region?", "options": ["जर्मनी", "फ्रांस", "यूके", "रूस"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "1. व्यष्टि अर्थशास्त्र के जनक? / Father of Microeconomics?", "options": ["एडम स्मिथ", "कीन्स", "मार्शल", "रिकार्डो"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "2. GDP का पूर्ण रूप? / Full form of GDP?", "options": ["Gross Domestic Product", "Gross Daily Product", "General Domestic Product", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "3. बैंक दर (Bank Rate) का निर्धारण? / Bank Rate is determined by?", "options": ["RBI", "SBI", "वित्त मंत्रालय", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "4. मांग का नियम क्या है? / Law of Demand?", "options": ["कीमत बढ़ने पर मांग घटना", "कीमत बढ़ने पर मांग बढ़ना", "स्थिर रहना", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "5. मुद्रास्फीति क्या है? / What is Inflation?", "options": ["कीमतों में वृद्धि", "कीमतों में कमी", "रोजगार में वृद्धि", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "1. भारतीय समाज के जनक? / Father of Indian Sociology?", "options": ["जी.एस. घुरिये", "एम.एन. श्रीनिवास", "दुर्खिम", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "2. 'संस्कृतिकरण' की अवधारणा? / Concept of 'Sanskritization'?", "options": ["एम.एन. श्रीनिवास", "गांधी जी", "अंबेडकर", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "3. अस्पृश्यता का अंत किस अनुच्छेद में? / Removal of untouchability in Article?", "options": ["17", "14", "18", "21"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "4. परिवार कैसा समूह है? / Family is which group?", "options": ["प्राथमिक समूह", "द्वितीयक समूह", "औपचारिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "5. समाजशास्त्र के पिता? / Father of Sociology?", "options": ["अगस्त कॉम्टे", "वेबर", "मार्क्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "1. बुद्धि लब्धि (IQ) का सूत्र? / Formula for IQ?", "options": ["MA/CA * 100", "CA/MA * 100", "MA*CA", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "2. मनोविज्ञान के जनक? / Father of Psychology?", "options": ["विलियम वुंट", "फ्रायड", "वाटसन", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "3. व्यक्तित्व के प्रकार किसने दिए? / Who gave types of personality?", "options": ["युंग (Jung)", "पावलोव", "स्किनर", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "4. चेतन मन की व्याख्या? / Theory of conscious mind?", "options": ["सिगमंड फ्रायड", "एडलर", "युंग", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "5. दबाव का GAS मॉडल? / GAS model of stress?", "options": ["हंस सेली", "कैनन", "सेंक", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "1. विटामिन A की कमी से रोग? / Disease due to Vit A deficiency?", "options": ["रतौंधी (Night blindness)", "बेरी-बेरी", "स्कर्वी", "रिकेट्स"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "2. संतुलित आहार में क्या आवश्यक है? / Necessity in balanced diet?", "options": ["प्रोटीन-विटामिन", "सिर्फ वसा", "सिर्फ चीनी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "3. रेशम का स्रोत? / Source of Silk?", "options": ["कीड़ा", "पौधा", "संश्लेषित", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "4. खाद्य मिलावट की जाँच का चिन्ह? / Symbol for food quality?", "options": ["FPO/Agmark", "ISI", "हॉलमार्क", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "5. जल में घुलनशील विटामिन? / Water soluble vitamins?", "options": ["B और C", "A और D", "E और K", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "1. भारत के वर्तमान मुख्य न्यायाधीश की नियुक्ति? / Appointment of CJI by?", "options": ["राष्ट्रपति", "प्रधानमंत्री", "संसद", "खुद"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "2. संविदा (Contract) के लिए आवश्यक? / Necessary for contract?", "options": ["स्वतंत्र सहमति", "दबाव", "धोखा", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "3. कानून का शासन (Rule of Law)? / Concept of Rule of Law?", "options": ["ए.वी. डाइसी", "ऑस्टिन", "बेंथम", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "4. जनहित याचिका (PIL) के जनक? / Father of PIL in India?", "options": ["पी.एन. भगवती", "तिलक", "गांधी", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "5. अपकृत्य क्या है? / What is Tort?", "options": ["नागरिक दोष", "अपराध", "संविदा", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "1. 'भक्तिन' किस प्रकार का पात्र है? / Character type of Bhaktiin?", "options": ["महादेवी वर्मा की सेविका", "राजकुमारी", "शत्रु", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "2. 'आत्मपरिचय' कविता के कवि? / Poet of 'Aatmaparichay'?", "options": ["बच्चन", "निराला", "दिनकर", "पंत"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "3. 'पहलवान की ढोलक' के लेखक? / Author of 'Pahalwan ki Dholak'?", "options": ["फणीश्वरनाथ रेणु", "प्रेमचंद", "प्रसाद", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "4. 'सिल्वर वेडिंग' कहानी का संदेश? / Message of 'Silver Wedding'?", "options": ["पीढ़ी का अंतराल", "गरीबी", "प्रेम", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "5. हिंदी साहित्य में 'छायावाद'? / Chhayavad in Hindi Lit?", "options": ["प्रसाद, पंत, निराला", "कबीर", "तुलसी", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "1. Who wrote 'Keeping Quiet'? / 'कीपिंग क्वाइट' किसने लिखी?", "options": ["पाब्लो नेरुदा", "कीट्स", "वर्ड्सवर्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "2. What is the theme of 'Lost Spring'? / 'लॉस्ट स्प्रिंग' की थीम?", "options": ["बाल मजदूरी", "प्रकृति", "विज्ञान", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "3. The Tiger King belonged to? / टाइगर किंग कहाँ का था?", "options": ["प्रतिबंधपुरम", "दिल्ली", "मैसूर", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "4. Author of 'The Last Lesson'? / 'द लास्ट लेसन' के लेखक?", "options": ["अल्फोंस डॉडेट", "एनीस जंग", "पर्ल एस. बक", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "5. 'My Mother at Sixty-six' poet? / कवि?", "options": ["कमला दास", "टैगोर", "कीट्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "1. साझेदारी संलेख का होना? / Partnership deed is?", "options": ["ऐच्छिक", "अनिवार्य", "गैरकानूनी", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "2. ख्याति क्या है? / Goodwill is?", "options": ["अमूर्त संपत्ति", "मूर्त", "नकद", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "3. कंपनी के मालिक? / Owners of company?", "options": ["शेयरधारक", "ऋणदाता", "कर्मचारी", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "4. लेखांकन का आधार? / Basis of accounting?", "options": ["दोहरा लेखा", "एकहरा", "नकद", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "5. चिट्ठा का स्वरूप? / Balance sheet format?", "options": ["संपत्ति=दायित्व", "लाभ=हानि", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "1. प्रबंधन के कार्य? / Functions of Management?", "options": ["नियोजन, संगठन, आदि", "सिर्फ लाभ", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "2. हेनरी फेयोल के सिद्धांत? / Principles of Fayol?", "options": ["14", "5", "10", "20"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "3. मार्केटिंग मिक्स के 4P? / 4Ps of marketing?", "options": ["Product, Price, Place, Promotion", "Profit, People, Power", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "4. SEBI का कार्य? / Function of SEBI?", "options": ["शेयर बाजार नियंत्रण", "बैंक नियंत्रण", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "5. नियुक्तिकरण का संबंध? / Staffing relates to?", "options": ["मानव संसाधन", "मशीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "1. उद्यमिता क्या है? / What is Entrepreneurship?", "options": ["नवाचार", "नौकरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "2. बिजनेस प्लान क्या है? / What is Business Plan?", "options": ["ब्लूप्रिंट", "बैलेंस शीट", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "3. पेटेंट की अवधि? / Duration of Patent?", "options": ["20 वर्ष", "10 वर्ष", "जीवन भर", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "4. फ्रेंचाइजी का लाभ? / Advantage of Franchise?", "options": ["ब्रांड वैल्यू", "स्वतंत्रता", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "5. उद्यम का मुख्य लक्ष्य? / Goal of enterprise?", "options": ["लाभ और विकास", "सिर्फ हानि", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "1. प्रकाश की चाल? / Speed of light?", "options": ["3*10^8 m/s", "2*10^8", "4*10^8", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "2. ओम का नियम? / Ohm's Law?", "options": ["V=IR", "V=I/R", "I=VR", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "3. आवेश का मात्रक? / Unit of charge?", "options": ["कूलाम", "एम्पीयर", "वोल्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "4. नाभिकीय विखंडन क्या है? / Nuclear Fission?", "options": ["परमाणु का टूटना", "जुड़ना", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "5. लेंस की क्षमता? / Power of lens?", "options": ["डायोप्टर", "मीटर", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "1. आवर्त सारणी का जनक? / Father of Periodic Table?", "options": ["मेंडेलीफ", "न्यूटन", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "2. जल का सूत्र? / Formula of Water?", "options": ["H2O", "CO2", "O2", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "3. pH स्केल की रेंज? / Range of pH?", "options": ["0-14", "1-10", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "4. कार्बन का परमाणु क्रमांक? / Carbon atomic number?", "options": ["6", "8", "12", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "5. विटामिन B12 में धातु? / Metal in Vit B12?", "options": ["कोबाल्ट", "लोहा", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "1. कोशिका की खोज? / Who discovered Cell?", "options": ["रॉबर्ट हुक", "डार्विन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "2. DNA का पूर्ण रूप? / Full form of DNA?", "options": ["Deoxyribonucleic Acid", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "3. मानव हृदय के कितने चैंबर? / Heart chambers?", "options": ["4", "2", "3", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "4. मेंडल किसके जनक? / Mendel is father of?", "options": ["आनुवंशिकी", "वनस्पति", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "5. प्रकाश संश्लेषण कहाँ? / Photosynthesis occurs in?", "options": ["क्लोरोप्लास्ट", "माइटोकॉन्ड्रिया", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "1. PCR का उपयोग? / Use of PCR?", "options": ["DNA प्रवर्धन", "क्लोनींग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "2. क्लोनिंग का उदाहरण? / Example of cloning?", "options": ["डॉली भेड़", "कुत्ता", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "3. रिस्ट्रिक्शन एंजाइम? / Restriction enzyme?", "options": ["DNA काटता है", "जोड़ता है", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "4. जेनेटिक इंजीनियरिंग? / Genetic Engineering?", "options": ["जीन में बदलाव", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "5. प्लास्मिड क्या है? / What is Plasmid?", "options": ["बैक्टीरियल DNA", "वायरस", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "1. d/dx(sin x) = ? / Derivative of sin x?", "options": ["cos x", "-cos x", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "2. a^2 + b^2 = ?", "options": ["कोई नहीं", "(a+b)^2 - 2ab"], "correct": 1 },
    { "subject": "Maths", lang: "hi_en", "question": "3. त्रिकोणमिति में tan 45 = ?", "options": ["1", "0", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "4. वृत्त का क्षेत्रफल? / Area of circle?", "options": ["πr^2", "2πr", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "5. समांतर माध्य का सूत्र? / Mean formula?", "options": ["Σx/n", "Σx*n", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "1. CAGR का उपयोग? / Use of CAGR?", "options": ["वृद्धि दर मापन", "घाटा", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "2. आव्यूह का व्युत्क्रम? / Matrix inverse?", "options": ["A^-1", "A^2", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "3. EMI का अर्थ? / Meaning of EMI?", "options": ["Equated Monthly Installment", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "4. प्रोबेबिलिटी का अधिकतम मान? / Max Probability?", "options": ["1", "10", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "5. सांख्यिकी में बहुलक? / Mode in Stats?", "options": ["सबसे अधिक बारंबारता", "औसत", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "1. Python में प्रिंट के लिए? / Print in Python?", "options": ["print()", "echo", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "2. SQL क्या है? / What is SQL?", "options": ["डेटाबेस भाषा", "ओपेरेटिंग सिस्टम", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "3. CPU का पूरा नाम? / Full form of CPU?", "options": ["Central Processing Unit", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "4. HTML का उपयोग? / Use of HTML?", "options": ["वेब पेज", "ग्राफिक्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "5. RAM का प्रकार? / Type of RAM?", "options": ["Volatile", "Non-Volatile", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "1. अष्टांगिक मार्ग? / Eightfold path?", "options": ["बौद्ध धर्म", "जैन", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "2. न्याय दर्शन के जनक? / Nyaya Philosophy founder?", "options": ["गौतम", "कपिल", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "3. प्लेटो के गुरु? / Teacher of Plato?", "options": ["सुकरात", "अरस्तू", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "4. गीता का मुख्य उपदेश? / Main teaching of Gita?", "options": ["कर्म योग", "त्याग", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "5. वेदों की संख्या? / Number of Vedas?", "options": ["4", "2", "3", "कोई नहीं"], "correct": 0 },
    {
  "questions": [
    { "subject": "History", "lang": "hi_en", "question": "1. 'इंडिका' के लेखक कौन थे? / Who was the author of 'Indica'?", "options": ["मेगास्थनीज", "प्लूटार्क", "फाह्यान", "हुवेनसांग"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "2. विजयनगर के किस शासक ने 'विट्ठल मंदिर' का निर्माण करवाया? / Which ruler built the Vithala temple?", "options": ["कृष्णदेव राय", "देवराय द्वितीय", "अच्युत राय", "राम राय"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "3. 1857 की क्रांति का प्रतीक क्या था? / What was the symbol of the 1857 revolt?", "options": ["कमल और रोटी", "तलवार", "झंडा", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "4. हड़प्पा में 'अन्नागार' का क्या महत्व था? / What was the significance of 'Granary' in Harappa?", "options": ["अनाज भंडारण", "स्नान", "धार्मिक सभा", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "5. मुगल साम्राज्य का वास्तविक संस्थापक? / Actual founder of Mughal Empire?", "options": ["अकबर", "बाबर", "हुमायूँ", "शाहजहाँ"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "1. भारत के पहले गृह मंत्री? / First Home Minister of India?", "options": ["सरदार पटेल", "नेहरू", "अंबेडकर", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "2. G-20 का मुख्यालय? / Headquarters of G-20?", "options": ["कोई नहीं (No fixed HQ)", "न्यूयॉर्क", "पेरिस", "जिनेवा"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "3. भारतीय संविधान का 'हृदय' किसे कहा गया? / Heart of Indian Constitution?", "options": ["अनुच्छेद 32", "प्रस्तावना", "मूल अधिकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "4. सोवियत संघ का अंतिम राष्ट्रपति? / Last President of USSR?", "options": ["गोर्बाचेव", "येल्तसिन", "स्टालिन", "लेनिन"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "5. 'पंचशील' समझौता कब हुआ? / When was Panchsheel signed?", "options": ["1954", "1950", "1962", "1947"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "1. 'मानव भूगोल' के जनक? / Father of Human Geography?", "options": ["रैटजेल", "हम्बोलल्ट", "कार्ल रिटर", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "2. पनामा नहर का निर्माण कब हुआ? / When was Panama Canal completed?", "options": ["1914", "1905", "1920", "1930"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "3. 'प्रवास' का मुख्य कारण? / Main reason for migration?", "options": ["आर्थिक/रोजगार", "धर्म", "शिक्षा", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "4. भारत में 'झूम खेती' कहाँ होती है? / Where is Jhum cultivation practised?", "options": ["पूर्वोत्तर भारत", "राजस्थान", "पंजाब", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "5. सबसे बड़ा महासागर? / Largest Ocean?", "options": ["प्रशांत", "अटलांटिक", "हिंद", "आर्कटिक"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "1. 'अर्थशास्त्र की पुस्तक' के लेखक? / Author of Wealth of Nations?", "options": ["एडम स्मिथ", "कीन्स", "मार्शल", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "2. रेपो रेट का निर्धारण? / Repo Rate decided by?", "options": ["RBI", "SBI", "सरकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "3. राष्ट्रीय आय का मापन? / Measurement of National Income?", "options": ["CSO", "NSSO", "RBI", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "4. बजट कौन प्रस्तुत करता है? / Who presents the Budget?", "options": ["वित्त मंत्री", "PM", "राष्ट्रपति", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "5. मुद्रा का प्राथमिक कार्य? / Primary function of money?", "options": ["विनिमय का माध्यम", "मूल्य संचय", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "1. 'सोसायटी' शब्द की उत्पत्ति? / Origin of word 'Society'?", "options": ["लैटिन", "ग्रीक", "संस्कृत", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "2. जाति एक बंद वर्ग है, यह कथन? / Caste is a closed class?", "options": ["डी.एन. मजूमदार", "घुरिये", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "3. 'आत्म दर्पण' का सिद्धांत? / Looking Glass Self Theory?", "options": ["सी.एच. कूले", "मीड", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "4. भारत में पहली जनगणना? / First Census in India?", "options": ["1872", "1881", "1901", "1951"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "5. धर्म का समाजशास्त्रीय सिद्धांत? / Theory of Religion?", "options": ["दुर्खिम", "वेबर", "मार्क्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "1. बुद्धि का 'द्विकारक सिद्धांत'? / Two-factor theory of Intelligence?", "options": ["स्पीयरमैन", "थार्नडाइक", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "2. व्यवहारवाद के जनक? / Father of Behaviorism?", "options": ["वाटसन", "स्किनर", "पावलोव", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "3. स्मृति के प्रकार? / Types of Memory?", "options": ["अल्पकालीन/दीर्घकालीन", "सिर्फ अल्प", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "4. 'मनोविश्लेषण' के जनक? / Father of Psychoanalysis?", "options": ["फ्रायड", "युंग", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "5. अंतर्मुखी का अर्थ? / Meaning of Introvert?", "options": ["आत्म-केंद्रित", "सामाजिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "1. 'विटामिन D' का स्रोत? / Source of Vit D?", "options": ["सूर्य की रोशनी", "दूध", "फल", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "2. कैल्शियम की कमी? / Deficiency of Calcium?", "options": ["हड्डियों की कमजोरी", "रतौंधी", "स्कर्वी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "3. सफाई के लिए आवश्यक? / Cleaning agent?", "options": ["साबुन/डिटर्जेंट", "पानी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "4. बजट बनाना क्यों जरूरी? / Why budgeting?", "options": ["वित्तीय संतुलन", "बचत", "दोनों", "कोई नहीं"], "correct": 2 },
    { "subject": "Home Science", lang: "hi_en", "question": "5. बच्चों का विकास? / Child Development?", "options": ["शारीरिक/मानसिक", "सिर्फ शारीरिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "1. भारतीय दंड संहिता (IPC) कब बनी? / When was IPC made?", "options": ["1860", "1947", "1950", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "2. मौलिक अधिकार कहाँ से लिए गए? / Fundamental rights from?", "options": ["USA", "UK", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "3. न्यायपालिका की स्वतंत्रता? / Independence of Judiciary?", "options": ["संविधान की रक्षा", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "4. एफ.आई.आर (FIR)? / Full form of FIR?", "options": ["First Information Report", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "5. विधिक सेवा का मतलब? / Meaning of Legal Service?", "options": ["निशुल्क सहायता", "कानूनी शिक्षा", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "1. 'सूरदास' के कवि? / Poet Surdas?", "options": ["भक्ति काल", "आधुनिक काल", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "2. 'कामायनी' के रचनाकार? / Author of Kamayani?", "options": ["जयशंकर प्रसाद", "निराला", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "3. गद्य की विधा? / Form of Prose?", "options": ["कहानी/निबंध", "कविता", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "4. 'मैला आंचल'? / Maila Anchal?", "options": ["रेणु", "प्रेमचंद", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "5. निराला की कविता? / Poem by Nirala?", "options": ["राम की शक्ति पूजा", "कुरुक्षेत्र", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "1. 'The Last Lesson' setting? / 'द लास्ट लेसन' की पृष्ठभूमि?", "options": ["फ्रांस-प्रशियन युद्ध", "विश्व युद्ध", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "2. 'Deep Water' theme? / 'डीप वाटर' की थीम?", "options": ["डर पर विजय", "तैरना", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "3. 'The Rattrap' author? / 'द रैटट्रैप' के लेखक?", "options": ["सेल्मा लेगरलोफ", "एनीस जंग", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "4. 'Indigo' is about? / 'इंडिगो' किसके बारे में है?", "options": ["गांधीजी और चंपारण", "खेती", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "5. 'A Thing of Beauty'? / 'अ थिंग ऑफ ब्यूटी' के कवि?", "options": ["जॉन कीट्स", "वर्ड्सवर्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "1. नाममात्र का खाता? / Nominal Account?", "options": ["खर्च/आय", "संपत्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "2. देनदार (Debtors) क्या है? / Debtors are?", "options": ["संपत्ति (Assets)", "दायित्व", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "3. शेयर पूंजी? / Share Capital?", "options": ["मालिक की पूंजी", "उधार", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "4. लाभांश? / Dividend?", "options": ["लाभ का हिस्सा", "ब्याज", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "5. रोकड़ बही? / Cash Book?", "options": ["नकद व्यवहार", "उधार", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "1. संगठन का मतलब? / Meaning of Organising?", "options": ["कार्यों को बांटना", "अकेले काम", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "2. नियोजन का अर्थ? / Planning meaning?", "options": ["सोच-समझकर कार्य करना", "तुरंत कार्य", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "3. नियंत्रण का कार्य? / Function of Controlling?", "options": ["सुधार करना", "दंड देना", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "4. ब्रांड नाम? / Brand Name?", "options": ["पहचान", "गुण", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "5. वित्त का मुख्य स्रोत? / Source of finance?", "options": ["शेयर/ऋण", "बचत", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "1. उद्यमी कौन है? / Who is an Entrepreneur?", "options": ["जोखिम लेने वाला", "नौकरीपेशा", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "2. नवाचार? / Innovation?", "options": ["नया विचार", "पुराना विचार", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "3. स्टार्टअप का अर्थ? / Startup meaning?", "options": ["नया व्यवसाय", "पुराना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "4. उद्यमिता के प्रकार? / Types of Entrepreneurship?", "options": ["सामाजिक/व्यावसायिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "5. बाजार अनुसंधान? / Market Research?", "options": ["मांग समझना", "बेचना", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "1. वेग का मात्रक? / Unit of Velocity?", "options": ["m/s", "m/s^2", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "2. कार्य का मात्रक? / Unit of Work?", "options": ["जूल", "न्यूटन", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "3. गुरुत्वाकर्षण? / Gravity?", "options": ["न्यूटन का नियम", "केपलर", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "4. परमाणु सिद्धांत? / Atomic Theory?", "options": ["डाल्टन", "न्यूटन", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "5. गति का नियम? / Law of Motion?", "options": ["न्यूटन", "गैलीलियो", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "1. परमाणु भार? / Atomic Weight?", "options": ["प्रोटॉन+न्यूट्रॉन", "प्रोटॉन", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "2. अम्ल का स्वाद? / Taste of Acid?", "options": ["खट्टा", "कड़वा", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "3. क्षारक का स्वाद? / Taste of Base?", "options": ["कड़वा", "खट्टा", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "4. रासायनिक अभिक्रिया? / Chemical Reaction?", "options": ["नया पदार्थ", "भौतिक बदलाव", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "5. आवर्त सारणी में कुल तत्व? / Total elements?", "options": ["118", "100", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "1. श्वसन में कौन सी गैस? / Gas in Respiration?", "options": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "2. पौधों में भोजन? / Food in plants?", "options": ["स्टार्च", "ग्लूकोज", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "3. मनुष्य का मुख्य अंग? / Main organ?", "options": ["हृदय/फेफड़े", "पैर", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "4. रक्त का रंग लाल? / Blood red due to?", "options": ["हीमोग्लोबिन", "आयरन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "5. गुणसूत्र संख्या? / Human chromosomes?", "options": ["46", "23", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "1. जीन क्या है? / What is a Gene?", "options": ["DNA का हिस्सा", "प्रोटीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "2. बायोटेक का क्षेत्र? / Area of Biotech?", "options": ["स्वास्थ्य/कृषि", "इंजीनियरिंग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "3. टी.आई. प्लाज्मिड? / Ti Plasmid?", "options": ["जीन स्थानांतरण", "बीमारी", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "4. बायो-सेफ्टी? / Bio-safety?", "options": ["सुरक्षा मानक", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "5. वैक्सीन का काम? / Vaccine purpose?", "options": ["प्रतिरक्षा", "रोग", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "1. त्रिभुज का क्षेत्रफल? / Area of Triangle?", "options": ["1/2 * b * h", "l*b", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "2. वर्ग का परिमाप? / Perimeter of Square?", "options": ["4 * भुजा", "भुजा^2", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "3. x^2 - 1 = ?", "options": ["(x-1)(x+1)", "(x-1)^2", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "4. आयतन का सूत्र? / Volume formula?", "options": ["l*b*h", "l*b", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "5. प्रायिकता क्या है? / Probability is?", "options": ["घटना/कुल", "योग", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "1. बट्टा? / Discount?", "options": ["मूल्य में कमी", "बढ़ोतरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "2. निवेश का लाभ? / ROI?", "options": ["लाभ/निवेश", "लागत", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "3. किस्त (EMI)? / EMI means?", "options": ["मासिक भुगतान", "एकमुश्त", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "4. आव्यूह का योग? / Matrix Addition?", "options": ["क्रम समान", "अलग", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "5. सांख्यिकी? / Statistics?", "options": ["डेटा विश्लेषण", "कहानी", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "1. इनपुट डिवाइस? / Input device?", "options": ["कीबोर्ड", "मॉनिटर", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "2. आउटपुट डिवाइस? / Output device?", "options": ["प्रिंटर", "माउस", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "3. इंटरनेट का जनक? / Father of Internet?", "options": ["विंट सर्फ", "गेट्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "4. डेटा क्या है? / What is Data?", "options": ["कच्ची जानकारी", "रिजल्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "5. पासवर्ड की सुरक्षा? / Security of password?", "options": ["गोपनीय", "सार्वजनिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "1. सत्य क्या है? / What is Truth?", "options": ["अंतिम यथार्थ", "झूठ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "2. अद्वैत? / Advaita?", "options": ["ब्रह्म सत्य", "माया", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "3. योग का अर्थ? / Meaning of Yoga?", "options": ["जुड़ना", "भागना", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "4. न्याय का आधार? / Basis of Nyaya?", "options": ["तर्क (Logic)", "भावना", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "5. नीतिशास्त्र? / Ethics?", "options": ["सही-गलत का ज्ञान", "विज्ञान", "कोई नहीं"], "correct": 0 },
    {
  "questions": [
    { "subject": "History", "lang": "hi_en", "question": "1. 'अकबरनामा' के रचयिता? / Who wrote 'Akbarnama'?", "options": ["अबुल फज़ल", "बदायूँनी", "फैज़ी", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "2. विजयनगर की यात्रा करने वाला इतालवी यात्री? / Italian traveler to Vijayanagara?", "options": ["निकोलो कांटी", "अब्दुल रज्जाक", "बर्बोसा", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "3. 'गांधी-इरविन समझौता' कब हुआ? / When was Gandhi-Irwin Pact signed?", "options": ["1931", "1930", "1932", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "4. हड़प्पा सभ्यता किस युग की है? / Harappan civilization belongs to?", "options": ["कांस्य युग (Bronze Age)", "लौह युग", "पाषाण", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "5. प्रथम बौद्ध संगीति कहाँ हुई? / Where was 1st Buddhist Council held?", "options": ["राजगृह", "वैशाली", "पाटलिपुत्र", "कश्मीर"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "1. भारत के पहले शिक्षा मंत्री? / First Education Minister of India?", "options": ["मौलाना आज़ाद", "नेहरू", "अंबेडकर", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "2. सार्क (SAARC) का मुख्यालय? / SAARC headquarters?", "options": ["काठमांडू", "नई दिल्ली", "इस्लामाबाद", "ढाका"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "3. भारतीय संविधान में कितने अनुसूचियाँ हैं? / Total schedules in Constitution?", "options": ["12", "8", "10", "22"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "4. सोवियत संघ के विघटन का वर्ष? / Year of USSR dissolution?", "options": ["1991", "1989", "1990", "1992"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "5. 'गुटनिरपेक्षता' का मुख्य नेता? / Leader of Non-Alignment?", "options": ["नेहरू", "गांधी", "पटेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "1. 'मानव भूगोल' की मुख्य विचारधारा? / Key philosophy of Human Geography?", "options": ["निश्चयवाद", "संभववाद", "दोनों", "कोई नहीं"], "correct": 2 },
    { "subject": "Geography", "lang": "hi_en", "question": "2. पनामा नहर का नियंत्रण? / Control of Panama Canal?", "options": ["पनामा", "अमेरिका", "यूके", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "3. विश्व में सबसे अधिक जनसंख्या वाला देश? / Most populous country?", "options": ["भारत", "चीन", "अमेरिका", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "4. 'भिलाई' स्टील प्लांट कहाँ है? / Where is Bhilai steel plant?", "options": ["छत्तीसगढ़", "ओडिशा", "झारखंड", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "5. तापीय प्रदूषण का स्रोत? / Source of thermal pollution?", "options": ["विद्युत संयंत्र", "कृषि", "वाहन", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "1. 'कीन्स' की पुस्तक का नाम? / Keynes' famous book?", "options": ["General Theory", "Wealth of Nations", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "2. बैंक दर (Bank Rate) क्या है? / What is Bank Rate?", "options": ["दीर्घकालीन ब्याज दर", "अल्पकालीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "3. मौद्रिक नीति कौन बनाता है? / Who makes Monetary Policy?", "options": ["RBI", "सरकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "4. मांग का नियम क्या बताता है? / Law of Demand states?", "options": ["कीमत और मांग का विपरीत संबंध", "सीधा संबंध", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "5. अवमूल्यन का लाभ? / Benefit of Devaluation?", "options": ["निर्यात में वृद्धि", "आयात में वृद्धि", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "1. 'सोसायटी' (Society) का अर्थ? / Meaning of Society?", "options": ["सामाजिक संबंधों का जाल", "भीड़", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "2. जाति एक 'बंद वर्ग' है, किसने कहा? / 'Caste is a closed class' by?", "options": ["डी.एन. मजूमदार", "घुरिये", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "3. 'आत्म दर्पण' का सिद्धांत? / Looking Glass Self Theory?", "options": ["सी.एच. कूले", "जी.एच. मीड", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "4. भारत में 'नई जनगणना' (2011) के अनुसार साक्षरता? / Literacy rate 2011?", "options": ["74.04%", "60%", "80%", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "5. 'धर्म' का समाजशास्त्रीय सिद्धांत? / Sociological theory of religion?", "options": ["दुर्खिम", "मार्क्स", "वेबर", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "1. 'बहुबुद्धि सिद्धांत' (Multiple Intelligence)? / Who proposed it?", "options": ["हावर्ड गार्डनर", "बीनेट", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "2. व्यवहारवाद के जनक? / Father of Behaviorism?", "options": ["जे.बी. वाटसन", "स्किनर", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "3. 'शॉर्ट टर्म मेमोरी' (STM)? / What is STM?", "options": ["अल्पकालीन", "दीर्घकालीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "4. 'इड', 'ईगो', 'सुपर-ईगो'? / Concepts by?", "options": ["सिगमंड फ्रायड", "युंग", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", lang: "hi_en", "question": "5. अंतर्मुखी (Introvert) की विशेषता? / Introvert trait?", "options": ["एकांतप्रिय", "सामाजिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "1. 'विटामिन A' का मुख्य कार्य? / Function of Vit A?", "options": ["दृष्टि में सुधार", "हड्डी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "2. एनीमिया (Anemia) किसकी कमी? / Anemia deficiency?", "options": ["लोहा (Iron)", "कैल्शियम", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "3. धुलाई की विधि? / Method of washing?", "options": ["हाथ से/मशीन", "रगड़ना", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "4. बजट का महत्व? / Importance of Budget?", "options": ["वित्तीय योजना", "खर्च बढ़ाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "5. विकास के चरण? / Stages of development?", "options": ["शैशवावस्था, बाल्यावस्था", "बुढ़ापा", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "1. भारतीय दंड संहिता (IPC) कब लागू हुई? / When did IPC start?", "options": ["1862", "1860", "1947", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "2. मौलिक अधिकार का रक्षक? / Guardian of Fundamental Rights?", "options": ["न्यायपालिका", "संसद", "राष्ट्रपति", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "3. कानून के समक्ष समानता (अनुच्छेद 14)? / Article 14?", "options": ["समानता", "स्वतंत्रता", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "4. 'जनहित याचिका' (PIL) का जनक? / Father of PIL?", "options": ["पी.एन. भगवती", "तिलक", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "5. संविदा (Contract) का अर्थ? / Meaning of Contract?", "options": ["वैधानिक समझौता", "दोस्ती", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "1. 'सूरदास' किस काल के कवि? / Surdas belongs to?", "options": ["भक्ति काल", "आधुनिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "2. 'कामायनी' के रचनाकार? / Author of Kamayani?", "options": ["जयशंकर प्रसाद", "निराला", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "3. 'गद्य' का विकास? / Rise of Prose?", "options": ["भारतेंदु युग", "आदिकाल", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "4. 'मैला आंचल' के लेखक? / Author of Maila Anchal?", "options": ["फणीश्वरनाथ रेणु", "प्रेमचंद", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "5. 'निराला' की प्रसिद्ध कविता? / Poem by Nirala?", "options": ["राम की शक्ति पूजा", "कुरुक्षेत्र", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "1. 'The Last Lesson' author? / 'द लास्ट लेसन' के लेखक?", "options": ["अल्फोंस डॉडेट", "एनीस जंग", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "2. 'Lost Spring' theme? / 'लॉस्ट स्प्रिंग' की थीम?", "options": ["बाल श्रम (Child Labor)", "प्रकृति", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "3. 'The Rattrap' is about? / 'द रैटट्रैप' किसकी कहानी?", "options": ["फेरीवाला (Peddler)", "राजा", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "4. 'Indigo' setting? / 'इंडिगो' कहाँ आधारित है?", "options": ["चंपारण", "दिल्ली", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "5. 'A Thing of Beauty' poet? / 'अ थिंग ऑफ ब्यूटी' के कवि?", "options": ["जॉन कीट्स", "वर्ड्सवर्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "1. 'नाममात्र खाता' (Nominal Account)? / Nominal account represents?", "options": ["व्यय/आय", "संपत्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "2. 'देनदार' (Debtors)? / Debtors are?", "options": ["संपत्ति (Assets)", "दायित्व", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "3. 'शेयर पूंजी' (Share Capital)? / Share Capital is?", "options": ["पूंजी (Owner's funds)", "उधार", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "4. 'लाभांश' (Dividend)? / Dividend means?", "options": ["लाभ का भाग", "ब्याज", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "5. 'रोकड़ बही' (Cash Book)? / Records?", "options": ["नकद लेनदेन", "उधार", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "1. 'संगठन' (Organising)? / Purpose?", "options": ["काम का बंटवारा", "आराम", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "2. 'नियोजन' (Planning)? / Purpose?", "options": ["लक्ष्य निर्धारण", "अस्तित्व", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "3. 'नियंत्रण' (Controlling)? / Purpose?", "options": ["सुधार/समीक्षा", "दंड", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "4. 'ब्रांड' (Brand)? / Purpose?", "options": ["पहचान", "गुण", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "5. 'वित्त' (Finance)? / Main source?", "options": ["पूंजी/ऋण", "सिर्फ बचत", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "1. उद्यमी कौन? / Who is an Entrepreneur?", "options": ["जोखिम लेने वाला", "नौकरीपेशा", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "2. नवाचार? / Innovation means?", "options": ["नया विचार/उत्पाद", "पुराना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "3. स्टार्टअप? / Startup?", "options": ["नया व्यापार", "पुराना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "4. व्यावसायिक प्रकार? / Types of business?", "options": ["सामाजिक/वाणिज्यिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "5. बाजार अनुसंधान? / Market Research?", "options": ["मांग समझना", "बेचना", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "1. वेग (Velocity)? / Unit?", "options": ["m/s", "m/s^2", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "2. कार्य (Work)? / Unit?", "options": ["जूल (Joule)", "न्यूटन", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "3. गुरुत्वाकर्षण (Gravity)? / Law by?", "options": ["न्यूटन", "केपलर", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "4. परमाणु सिद्धांत? / Atomic Theory?", "options": ["डाल्टन", "न्यूटन", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "5. गति का नियम? / Law of Motion?", "options": ["न्यूटन", "गैलीलियो", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "1. परमाणु भार? / Atomic weight?", "options": ["प्रोटॉन+न्यूट्रॉन", "प्रोटॉन", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "2. अम्ल (Acid)? / Taste?", "options": ["खट्टा (Sour)", "कड़वा", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "3. क्षार (Base)? / Taste?", "options": ["कड़वा (Bitter)", "खट्टा", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "4. रासायनिक अभिक्रिया? / Chemical Reaction?", "options": ["नया उत्पाद", "भौतिक बदलाव", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "5. आवर्त सारणी (Periodic Table)? / Total elements?", "options": ["118", "100", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "1. श्वसन (Respiration)? / Gas released?", "options": ["CO2", "ऑक्सीजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "2. प्रकाश संश्लेषण (Photosynthesis)? / Food?", "options": ["ग्लूकोज", "स्टार्च", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "3. हृदय (Heart)? / Chambers?", "options": ["4", "2", "3", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "4. हीमोग्लोबिन? / Function?", "options": ["O2 परिवहन", "CO2", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "5. गुणसूत्र (Chromosome)? / Human?", "options": ["46", "23", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "1. जीन (Gene)? / What is it?", "options": ["DNA का अंश", "प्रोटीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "2. बायो-टेक? / Use?", "options": ["स्वास्थ्य/कृषि", "इंजीनियरिंग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "3. प्लास्मिड (Plasmid)? / Where?", "options": ["बैक्टीरिया", "वायरस", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "4. बायो-सेफ्टी? / What?", "options": ["सुरक्षा मानक", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "5. वैक्सीन (Vaccine)? / Why?", "options": ["प्रतिरक्षा", "रोग", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "1. त्रिभुज (Triangle)? / Area?", "options": ["1/2*b*h", "l*b", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "2. वर्ग (Square)? / Perimeter?", "options": ["4*भुजा", "भुजा^2", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "3. x^2 - y^2 = ?", "options": ["(x-y)(x+y)", "(x-y)^2", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "4. आयतन (Volume)? / Formula?", "options": ["l*b*h", "l*b", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "5. प्रायिकता (Probability)? / Max value?", "options": ["1", "10", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "1. बट्टा (Discount)? / Mean?", "options": ["कीमत में कमी", "बढ़ोतरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "2. ROI (Investment return)? / Formula?", "options": ["लाभ/निवेश", "लागत", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "3. EMI? / Mean?", "options": ["मासिक किस्त", "एकमुश्त", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "4. आव्यूह (Matrix)? / Addition?", "options": ["क्रम समान", "अलग", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "5. सांख्यिकी (Statistics)? / Mean?", "options": ["डेटा विश्लेषण", "कहानी", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "1. इनपुट (Input)? / Example?", "options": ["कीबोर्ड", "मॉनिटर", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "2. आउटपुट (Output)? / Example?", "options": ["प्रिंटर", "माउस", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "3. इंटरनेट का जनक? / Father of Internet?", "options": ["विंट सर्फ", "गेट्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "4. डेटा (Data)? / Meaning?", "options": ["कच्ची जानकारी", "रिजल्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "5. पासवर्ड? / Usage?", "options": ["गोपनीय सुरक्षा", "सार्वजनिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "1. सत्य (Truth)? / Mean?", "options": ["अंतिम यथार्थ", "झूठ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "2. अद्वैत (Advaita)? / Mean?", "options": ["ब्रह्म सत्य", "माया", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "3. योग (Yoga)? / Meaning?", "options": ["जुड़ना", "भागना", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "4. न्याय (Nyaya)? / Base?", "options": ["तर्क (Logic)", "भावना", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "5. नीतिशास्त्र (Ethics)? / Mean?", "options": ["सही-गलत ज्ञान", "विज्ञान", "कोई नहीं"], "correct": 0 },
    {
  "questions": [
    { "subject": "History", "lang": "hi_en", "question": "1. 'इंडिका' के लेखक? / Who wrote 'Indica'?", "options": ["मेगास्थनीज", "फाह्यान", "हुवेनसांग", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "2. 'अशोक' के अभिलेख किस लिपि में? / Ashoka's inscriptions script?", "options": ["ब्राह्मी", "देवनागरी", "खरोष्ठी", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "3. 'संविधान सभा' के अध्यक्ष? / President of Constituent Assembly?", "options": ["डॉ. राजेन्द्र प्रसाद", "नेहरू", "अंबेडकर", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "4. 'पानीपत' की पहली लड़ाई? / First battle of Panipat?", "options": ["1526", "1556", "1761", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "5. 'मुगल वंश' का संस्थापक? / Founder of Mughal Empire?", "options": ["बाबर", "अकबर", "हुमायूँ", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "1. 'मौलिक अधिकार' किस देश से लिए गए? / Fundamental Rights borrowed from?", "options": ["अमेरिका (USA)", "ब्रिटेन", "रूस", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "2. 'राज्यपाल' की नियुक्ति कौन करता है? / Who appoints Governor?", "options": ["राष्ट्रपति", "प्रधानमंत्री", "मुख्यमंत्री", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "3. 'लोकसभा' का कार्यकाल? / Tenure of Lok Sabha?", "options": ["5 वर्ष", "6 वर्ष", "4 वर्ष", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "4. 'पंचायती राज' का विषय? / Panchayati Raj subject?", "options": ["राज्य सूची", "संघ सूची", "समवर्ती", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "5. 'भारत' का सर्वोच्च न्यायालय कहाँ है? / Where is Supreme Court?", "options": ["नई दिल्ली", "मुंबई", "कोलकाता", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "1. 'वायुमंडल' में नाइट्रोजन की मात्रा? / Nitrogen % in atmosphere?", "options": ["78%", "21%", "0.03%", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "2. 'भारत' की सबसे लंबी नदी? / Longest river of India?", "options": ["गंगा", "यमुना", "ब्रह्मपुत्र", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "3. 'प्रशांत महासागर' का सबसे गहरा बिंदु? / Deepest point of Pacific?", "options": ["मरियाना ट्रेंच", "हिन्द महासागर", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "4. 'सोना' उत्पादन में अग्रणी राज्य? / Top Gold producer state?", "options": ["कर्नाटक", "राजस्थान", "ओडिशा", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "5. 'मानसून' का अर्थ? / Meaning of Monsoon?", "options": ["हवाओं का मौसम बदलना", "बारिश", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "1. 'गरीबी' रेखा का निर्धारण? / Who defines Poverty line?", "options": ["NITI Aayog", "RBI", "वित्त मंत्रालय", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "2. 'GDP' का पूर्ण रूप? / Full form of GDP?", "options": ["Gross Domestic Product", "Gross Development Plan", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "3. 'भारत' में 'GST' कब लागू हुआ? / When was GST implemented?", "options": ["1 जुलाई 2017", "2016", "2018", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "4. 'मुद्रास्फीति' (Inflation) का अर्थ? / Meaning of Inflation?", "options": ["महंगाई में वृद्धि", "सस्ता होना", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "5. 'नकद आरक्षित अनुपात' (CRR)? / Who sets CRR?", "options": ["RBI", "सरकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "1. 'समाजशास्त्र' के जनक? / Father of Sociology?", "options": ["अगस्त कॉम्टे", "मार्क्स", "वेबर", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "2. 'संयुक्त परिवार' का लक्षण? / Feature of Joint Family?", "options": ["साझा रसोई", "अलग रहना", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "3. 'सामाजिक गतिशीलता' (Social Mobility)? / What is it?", "options": ["दर्जे में बदलाव", "स्थिरता", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "4. 'प्रौद्योगिकी' और समाज? / Technology and Society?", "options": ["परिवर्तनकारी", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "5. 'दलित' चेतना का मुख्य आधार? / Basis of Dalit consciousness?", "options": ["जातिवाद का विरोध", "समर्थन", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "1. 'बुद्धि लब्धि' (IQ) का सूत्र? / IQ Formula?", "options": ["MA/CA * 100", "CA/MA * 100", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "2. 'सीखना' (Learning) कैसा है? / Learning is?", "options": ["व्यवहार में परिवर्तन", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "3. 'प्रेरणा' (Motivation) का चक्र? / Cycle?", "options": ["आवश्यकता -> लक्ष्य", "लक्ष्य -> आवश्यकता", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "4. 'व्यक्तित्व' (Personality) का अर्थ? / Meaning?", "options": ["मनो-दैहिक गुण", "कपड़े", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "5. 'तनाव' (Stress) के कारक? / Stress factors?", "options": ["बाधाएं", "सुख", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "1. 'संतुलित आहार' क्या है? / What is Balanced Diet?", "options": ["सभी पोषक तत्व", "सिर्फ फल", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "2. 'दूध' किसका उत्तम स्रोत? / Milk is rich in?", "options": ["कैल्शियम", "लोहा", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "3. 'समय प्रबंधन' का लाभ? / Benefit of Time Management?", "options": ["कार्यकुशलता", "आराम", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "4. 'रेशेदार कपड़ा' (Cotton) की विशेषता? / Cotton feature?", "options": ["पसीना सोखना", "न चिपकना", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", lang: "hi_en", "question": "5. 'भोजन संरक्षण' की विधि? / Preservation method?", "options": ["सुखाना/अचार", "खुला रखना", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "1. 'न्यायालय' की अवमानना? / Contempt of Court?", "options": ["दंडनीय अपराध", "अधिकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "2. 'कानून' का शासन? / Rule of Law?", "options": ["सब समान", "राजा ऊपर", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "3. 'साक्ष्य अधिनियम' (Evidence Act)? / Purpose?", "options": ["सबूत पेश करना", "सजा", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "4. 'वकील' का कर्तव्य? / Lawyer's duty?", "options": ["क्लाइंट का हित", "झूठ", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "5. 'विवाद' का समाधान? / Dispute resolution?", "options": ["मध्यस्थता/कोर्ट", "लड़ाई", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "1. 'प्रेमचंद' की कहानी? / Story by Premchand?", "options": ["ईदगाह", "गोदान (उपन्यास)", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "2. 'रीतिकाल' की मुख्य प्रवृत्ति? / Feature of Ritikal?", "options": ["श्रृंगार", "भक्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "3. 'आधुनिक काल' के जनक? / Father of Modern Hindi?", "options": ["भारतेंदु", "द्विवेदी", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "4. 'रामचरितमानस' भाषा? / Language of Ramcharitmanas?", "options": ["अवधी", "खड़ी बोली", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "5. 'छायावाद'? / Main poet?", "options": ["प्रसाद", "कबीर", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "1. 'My Mother at Sixty-six' poetess? / कवयित्री?", "options": ["कमला दास", "एड्रियन रिच", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "2. 'Keeping Quiet' poet? / कवि?", "options": ["पाब्लो नेरुदा", "कीट्स", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "3. 'The Third Level' theme? / थीम?", "options": ["कल्पना (Escapism)", "हकीकत", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "4. 'Shakespeare' style? / लेखक शैली?", "options": ["नाटककार", "कवि", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "5. 'Romeo and Juliet' author? / लेखक?", "options": ["शेक्सपियर", "मार्लो", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "1. 'चिट्ठा' (Balance Sheet)? / What?", "options": ["वित्तीय स्थिति", "लाभ", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "2. 'संपत्ति' (Assets)? / Examples?", "options": ["भूमि/मशीन", "कर्ज", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "3. 'लेनदेन' (Transaction)? / Accounting step?", "options": ["पहला चरण", "अंतिम", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "4. 'विकलन/समाकलन' (Debit/Credit)? / Rule?", "options": ["दोहरा लेखा", "एकल", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "5. 'मूल्यह्रास' (Depreciation)? / What?", "options": ["मूल्य में कमी", "बढ़ोतरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "1. 'प्रबंध' (Management)? / Art or Science?", "options": ["दोनों", "सिर्फ कला", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "2. 'नियुक्तीकरण' (Staffing)? / Work?", "options": ["भर्ती", "हटाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "3. 'निर्देशन' (Directing)? / Feature?", "options": ["मार्गदर्शन", "आदेश", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "4. 'विपणन' (Marketing)? / Focus?", "options": ["ग्राहक", "उत्पाद", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "5. 'शेयर बाजार' (Stock Market)? / Regulator?", "options": ["SEBI", "RBI", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "1. 'उद्यमिता' (Entrepreneurship)? / Process?", "options": ["सृजनात्मक", "नकल", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "2. 'व्यापार योजना' (Business Plan)? / Why?", "options": ["भविष्य का खाका", "मौज", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "3. 'जोखिम' (Risk)? / Management?", "options": ["कम करना", "बढ़ाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "4. 'पूंजी' (Capital)? / Need?", "options": ["व्यापार शुरू", "खर्च", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "5. 'स्वॉट' (SWOT) विश्लेषण? / What?", "options": ["शक्ति/कमजोरी", "सिर्फ शक्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "1. 'प्रकाश की चाल'? / Speed of Light?", "options": ["3*10^8 m/s", "100 km/s", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "2. 'विद्युत धारा' का मात्रक? / Current unit?", "options": ["एम्पीयर", "वोल्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "3. 'ओह्म' का नियम? / Ohm's Law?", "options": ["V=IR", "V=I/R", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "4. 'ऊर्जा' (Energy) का मात्रक? / Energy unit?", "options": ["जूल", "वाट", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "5. 'लेंस' की शक्ति? / Lens power unit?", "options": ["डायोप्टर", "मीटर", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "1. 'पानी' का सूत्र? / Formula of Water?", "options": ["H2O", "CO2", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "2. 'आधुनिक आवर्त सारणी' का आधार? / Basis?", "options": ["परमाणु क्रमांक", "द्रव्यमान", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "3. 'लोहे में जंग'? / Type of change?", "options": ["रासायनिक", "भौतिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "4. 'pH' स्केल? / Neutral value?", "options": ["7", "0", "14", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "5. 'अक्रिय गैस' (Noble Gas)? / Example?", "options": ["हीलियम", "ऑक्सीजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "1. 'कोशिका' (Cell) की खोज? / Who discovered?", "options": ["रॉबर्ट हुक", "डार्विन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "2. 'राइबोसोम'? / Function?", "options": ["प्रोटीन निर्माण", "ऊर्जा", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "3. 'डीएनए' (DNA)? / Structure?", "options": ["डबल हेलिक्स", "सिंगल", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "4. 'विटामिन सी' की कमी? / Disease?", "options": ["स्कर्वी", "रिकेट्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "5. 'तंत्रिका तंत्र'? / Main unit?", "options": ["न्यूरॉन", "सेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "1. 'पीसीआर' (PCR)? / Usage?", "options": ["DNA प्रवर्धन", "खाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "2. 'जीएमओ' (GMO)? / Full form?", "options": ["Genetically Modified", "Global", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "3. 'एंजाइम'? / Role?", "options": ["उत्प्रेरक (Catalyst)", "ईंधन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "4. 'क्लोनिंग'? / Definition?", "options": ["समान प्रतिकृति", "बदलाव", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "5. 'बायो-फ्यूल'? / Source?", "options": ["पादप/जैविक", "खनिज", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "1. 'वृत्त' (Circle) का क्षेत्रफल? / Area?", "options": ["πr^2", "2πr", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "2. 'त्रिभुज' के कोणों का योग? / Sum of angles?", "options": ["180°", "360°", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "3. 'साइन' (sin) 90° का मान? / Value?", "options": ["1", "0", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "4. 'माध्य' (Mean)? / Formula?", "options": ["योग/संख्या", "गुणा", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "5. '1 से 100' तक अभाज्य संख्या? / Count?", "options": ["25", "20", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "1. 'चक्रवृद्धि ब्याज' (Compound Interest)? / Formula?", "options": ["P(1+r/100)^n", "P*r*t", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "2. 'अनुपात' (Ratio)? / 2:4 का सरलतम?", "options": ["1:2", "2:1", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "3. 'लाभ' प्रतिशत? / Formula?", "options": ["लाभ/लागत * 100", "विक्रय", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "4. 'रैखिक समीकरण'? / Graph?", "options": ["सीधी रेखा", "वक्र", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "5. 'परिवहन समस्या'? / Purpose?", "options": ["लागत न्यूनतम", "बढ़ाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "1. 'RAM' का पूर्ण रूप? / Full form?", "options": ["Random Access Memory", "Read Only", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "2. 'ऑपरेटिंग सिस्टम'? / Example?", "options": ["Windows/Linux", "MS Word", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "3. 'CPU'? / Brain?", "options": ["हाँ", "नहीं", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "4. 'वायरस' (Virus)? / Type?", "options": ["हानिकारक प्रोग्राम", "उपयोगी", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "5. 'नेटवर्क' का प्रकार? / LAN/WAN?", "options": ["दोनों", "सिर्फ LAN", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "1. 'अहिंसा'? / Meaning?", "options": ["मनसा-वाचा कर्मणा हिंसा न करना", "मारना", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "2. 'कर्म' का सिद्धांत? / Meaning?", "options": ["जैसा कर्म वैसा फल", "भाग्य", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "3. 'आत्मा'? / Nature?", "options": ["अजर-अमर", "नाशवान", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "4. 'मोक्ष'? / Meaning?", "options": ["जन्म-मरण से मुक्ति", "स्वर्ग", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "5. 'तर्कसंगत'? / Meaning?", "options": ["कारण आधारित", "अंधविश्वास", "कोई नहीं"], "correct": 0 },
    {
  "questions": [
    { "subject": "History", "lang": "hi_en", "question": "1. 'मुगल चित्रकला का स्वर्ण युग'? / Golden age of Mughal painting?", "options": ["जहांगीर", "अकबर", "शाहजहाँ", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "2. 'प्लासी' का युद्ध कब हुआ? / Battle of Plassey?", "options": ["1757", "1764", "1857", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "3. 'हड़प्पा' की खोज? / Who discovered Harappa?", "options": ["दयाराम साहनी", "राखालदास", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "4. 'स्वराज मेरा जन्मसिद्ध अधिकार'? / Slogan by?", "options": ["बाल गंगाधर तिलक", "गांधी", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "5. 'जैन धर्म' के 24वें तीर्थंकर? / 24th Tirthankara?", "options": ["महावीर", "ऋषभदेव", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "6. 'बक्सर' का युद्ध कब हुआ? / Battle of Buxar?", "options": ["1764", "1757", "1761", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "7. अकबर का राजस्व मंत्री? / Akbar's Revenue Minister?", "options": ["टोडरमल", "बीरबल", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "8. 'सांची स्तूप' का निर्माता? / Built by?", "options": ["अशोक", "कनिष्क", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "9. 'डिस्कवरी ऑफ इंडिया' के लेखक? / Author of Discovery of India?", "options": ["नेहरू", "गांधी", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "10. 'विजयनगर साम्राज्य' का पतन? / Fall of Vijayanagara?", "options": ["तालीकोटा युद्ध", "पानीपत", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "1. संविधान सभा की पहली बैठक? / 1st meeting of Constituent Assembly?", "options": ["9 Dec 1946", "26 Jan 1950", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "2. अनुच्छेद 370 का संबंध? / Article 370?", "options": ["जम्मू-कश्मीर", "पंजाब", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "3. भारत के पहले राष्ट्रपति? / First President?", "options": ["डॉ. राजेन्द्र प्रसाद", "नेहरू", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "4. राज्यसभा का पदेन सभापति? / Ex-officio chairman?", "options": ["उपराष्ट्रपति", "राष्ट्रपति", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "5. समानता का अधिकार (अनुच्छेद)? / Right to equality?", "options": ["14-18", "19-22", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "6. आपातकाल का प्रावधान? / Emergency provision?", "options": ["अनुच्छेद 352", "अनुच्छेद 370", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "7. लोकतांत्रिक विकेंद्रीकरण? / Democratic decentralization?", "options": ["पंचायती राज", "संसद", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "8. संविधान संशोधन (अनुच्छेद)? / Amendment article?", "options": ["368", "370", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "9. मुख्य चुनाव आयुक्त की नियुक्ति? / Appointment of CEC?", "options": ["राष्ट्रपति", "प्रधानमंत्री", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "10. राज्य के नीति निर्देशक तत्व? / Directive Principles?", "options": ["भाग 4", "भाग 3", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "1. पृथ्वी की सबसे ऊपरी परत? / Uppermost layer?", "options": ["भूपर्पटी (Crust)", "मेंटल", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "2. सूर्य की बाहरी परत? / Outermost solar layer?", "options": ["कोरोना (Corona)", "फोटोस्फीयर", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "3. विश्व की सबसे लंबी नदी? / World's longest river?", "options": ["नील (Nile)", "अमेज़न", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "4. भारत का मानक समय? / Standard time?", "options": ["82.5° E", "80° E", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "5. ज्वालामुखी द्वीप? / Volcanic island?", "options": ["बैरन द्वीप", "लक्षद्वीप", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "6. मानसून शब्द किस भाषा का? / Language of Monsoon?", "options": ["अरबी", "फारसी", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "7. वायुदाब मापक? / Barometer measures?", "options": ["वायुदाब", "तापमान", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "8. ग्रेट बैरियर रीफ कहाँ? / Where is Great Barrier Reef?", "options": ["ऑस्ट्रेलिया", "भारत", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "9. भारत में कॉफी उत्पादक? / Top Coffee Producer?", "options": ["कर्नाटक", "केरल", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "10. ज्वार-भाटा का कारण? / Cause of tides?", "options": ["गुरुत्वाकर्षण", "हवा", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "1. गरीबी रेखा का निर्धारण? / Who defines poverty line?", "options": ["NITI Aayog", "RBI", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "2. GDP का पूर्ण रूप? / Full form of GDP?", "options": ["Gross Domestic Product", "Gross Development Plan", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "3. भारत में GST कब आया? / When did GST start?", "options": ["1 जुलाई 2017", "2016", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "4. मुद्रास्फीति का अर्थ? / Meaning of Inflation?", "options": ["महंगाई", "मंदी", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "5. नकद आरक्षित अनुपात (CRR)? / Who sets CRR?", "options": ["RBI", "सरकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "6. बैंक दर (Bank Rate)? / Meaning?", "options": ["दीर्घकालीन ब्याज", "अल्पकालीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "7. मांग का नियम? / Law of demand?", "options": ["कीमत व मांग का विपरीत संबंध", "सीधा संबंध", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "8. अवमूल्यन (Devaluation) का लाभ? / Benefit?", "options": ["निर्यात वृद्धि", "आयात वृद्धि", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "9. हरित क्रांति के जनक? / Father of Green Revolution?", "options": ["स्वामीनाथन", "नॉर्मन बोरलॉग", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "10. मौद्रिक नीति का मुख्य उद्देश्य? / Aim of Monetary Policy?", "options": ["मूल्य स्थिरता", "सिर्फ लाभ", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "1. समाजशास्त्र के जनक? / Father of Sociology?", "options": ["अगस्त कॉम्टे", "मार्क्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "2. समाज क्या है? / What is Society?", "options": ["सामाजिक संबंधों का जाल", "भीड़", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "3. जाति क्या है? / Caste is?", "options": ["बंद वर्ग", "खुला वर्ग", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "4. संयुक्त परिवार? / Joint Family?", "options": ["साझा रसोई", "अलग रसोई", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "5. सामाजिक गतिशीलता? / Mobility?", "options": ["दर्जे में परिवर्तन", "स्थिरता", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "6. साक्षरता दर (2011)? / Literacy 2011?", "options": ["74.04%", "60%", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "7. धर्म का समाजशास्त्रीय सिद्धांत? / Religion theory?", "options": ["दुर्खिम", "मार्क्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "8. आधुनिकीकरण? / Modernization?", "options": ["परिवर्तन", "रूढ़िवाद", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "9. दलित चेतना? / Dalit consciousness?", "options": ["जातिवाद का विरोध", "समर्थन", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "10. 'आत्म दर्पण' का सिद्धांत? / Looking Glass Self?", "options": ["सी.एच. कूले", "जी.एच. मीड", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "1. बुद्धि लब्धि (IQ) का सूत्र? / IQ formula?", "options": ["MA/CA*100", "CA/MA*100", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "2. व्यवहारवाद के जनक? / Father of Behaviorism?", "options": ["जे.बी. वाटसन", "स्किनर", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "3. व्यक्तित्व का अर्थ? / Personality means?", "options": ["मनो-दैहिक गुण", "कपड़े", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "4. इड, ईगो, सुपर-ईगो? / Concept by?", "options": ["सिगमंड फ्रायड", "युंग", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "5. अंतर्मुखी (Introvert)? / Trait?", "options": ["एकांतप्रिय", "सामाजिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "6. बहुबुद्धि सिद्धांत? / Multiple Intelligence?", "options": ["हावर्ड गार्डनर", "बीनेट", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "7. शॉर्ट टर्म मेमोरी (STM)? / STM means?", "options": ["अल्पकालीन", "दीर्घकालीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "8. तनाव (Stress) का कारक? / Stress factor?", "options": ["बाधाएं", "सुख", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "9. सीखना (Learning) क्या है? / Learning is?", "options": ["व्यवहार में परिवर्तन", "स्थिरता", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "10. प्रेरणा (Motivation) चक्र? / Cycle?", "options": ["आवश्यकता->लक्ष्य", "लक्ष्य->आवश्यकता", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "1. संतुलित आहार? / Balanced diet?", "options": ["सभी पोषक तत्व", "सिर्फ फल", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "2. दूध उत्तम स्रोत? / Milk is rich in?", "options": ["कैल्शियम", "लोहा", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "3. समय प्रबंधन लाभ? / Time management?", "options": ["कार्यकुशलता", "आराम", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "4. कॉटन विशेषता? / Cotton feature?", "options": ["पसीना सोखना", "न चिपकना", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "5. भोजन संरक्षण? / Preservation?", "options": ["सुखाना/अचार", "खुला", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "6. विटामिन C कमी? / Vit C deficiency?", "options": ["स्कर्वी", "रिकेट्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "7. बजट महत्व? / Budget importance?", "options": ["वित्तीय योजना", "खर्च बढ़ाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "8. एनीमिया कारण? / Anemia cause?", "options": ["लोहा कमी", "कैल्शियम", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "9. विकास के चरण? / Development stages?", "options": ["शैशवावस्था, बाल्यावस्था", "बुढ़ापा", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "10. धुलाई विधि? / Washing method?", "options": ["हाथ से/मशीन", "रगड़ना", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi_en", "question": "1. IPC कब लागू? / When IPC started?", "options": ["1862", "1860", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "2. मौलिक अधिकार रक्षक? / Guardian of rights?", "options": ["न्यायपालिका", "संसद", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "3. कानून के समक्ष समानता? / Article 14?", "options": ["अनुच्छेद 14", "15", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "4. जनहित याचिका (PIL) जनक? / Father of PIL?", "options": ["पी.एन. भगवती", "तिलक", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "5. संविदा (Contract) अर्थ? / Contract means?", "options": ["वैधानिक समझौता", "दोस्ती", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "6. न्यायालय की अवमानना? / Contempt of Court?", "options": ["दंडनीय", "अधिकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "7. कानून का शासन? / Rule of law?", "options": ["सब समान", "राजा ऊपर", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "8. साक्ष्य अधिनियम? / Evidence Act?", "options": ["सबूत पेश करना", "सजा", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "9. वकील का कर्तव्य? / Lawyer duty?", "options": ["क्लाइंट हित", "झूठ", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "10. विवाद समाधान? / Dispute resolution?", "options": ["मध्यस्थता", "लड़ाई", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "1. प्रेमचंद कहानी? / Story by Premchand?", "options": ["ईदगाह", "गोदान", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "2. रीतिकाल प्रवृत्ति? / Feature of Ritikal?", "options": ["श्रृंगार", "भक्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "3. आधुनिक काल जनक? / Father of modern Hindi?", "options": ["भारतेंदु", "द्विवेदी", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "4. रामचरितमानस भाषा? / Language?", "options": ["अवधी", "खड़ी बोली", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "5. छायावाद कवि? / Poet?", "options": ["प्रसाद", "कबीर", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "6. सूरदास किस काल के? / Surdas period?", "options": ["भक्ति काल", "आधुनिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "7. कामायनी रचयिता? / Kamayani author?", "options": ["जयशंकर प्रसाद", "निराला", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "8. गद्य का विकास? / Prose rise?", "options": ["भारतेंदु युग", "आदिकाल", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "9. मैला आंचल लेखक? / Author?", "options": ["फणीश्वरनाथ रेणु", "प्रेमचंद", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "10. निराला कविता? / Poem by Nirala?", "options": ["राम की शक्ति पूजा", "कुरुक्षेत्र", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "1. My Mother at 66 poetess? / कवयित्री?", "options": ["कमला दास", "कीट्स", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "2. Keeping Quiet poet? / कवि?", "options": ["पाब्लो नेरुदा", "कीट्स", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "3. The Third Level theme? / थीम?", "options": ["Escapism", "हकीकत", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "4. Shakespeare style? / शैली?", "options": ["नाटककार", "कवि", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "5. Romeo and Juliet author? / लेखक?", "options": ["शेक्सपियर", "मार्लो", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "6. Last Lesson author? / लेखक?", "options": ["अल्फोंस डॉडेट", "एनीस जंग", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "7. Lost Spring theme? / थीम?", "options": ["बाल श्रम", "प्रकृति", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "8. The Rattrap story? / किसकी?", "options": ["फेरीवाला", "राजा", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "9. Indigo setting? / आधार?", "options": ["चंपारण", "दिल्ली", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "10. A Thing of Beauty poet? / कवि?", "options": ["जॉन कीट्स", "वर्ड्सवर्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "1. चिट्ठा (Balance Sheet)? / What?", "options": ["वित्तीय स्थिति", "लाभ", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "2. संपत्ति (Assets)? / Example?", "options": ["भूमि/मशीन", "कर्ज", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "3. लेनदेन (Transaction)? / Step?", "options": ["पहला", "अंतिम", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "4. डेबिट/क्रेडिट? / Rule?", "options": ["दोहरा लेखा", "एकल", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "5. मूल्यह्रास (Depreciation)? / What?", "options": ["मूल्य कमी", "बढ़ोतरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "6. नाममात्र खाता (Nominal)? / Represents?", "options": ["व्यय/आय", "संपत्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "7. देनदार (Debtors)? / Are?", "options": ["संपत्ति", "दायित्व", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "8. शेयर पूंजी? / Share Capital?", "options": ["पूंजी", "उधार", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "9. लाभांश (Dividend)? / Meaning?", "options": ["लाभ का भाग", "ब्याज", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "10. रोकड़ बही (Cash Book)? / Records?", "options": ["नकद लेनदेन", "उधार", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "1. प्रबंध? / Art or Science?", "options": ["दोनों", "कला", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "2. नियुक्तिकरण? / Work?", "options": ["भर्ती", "हटाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "3. निर्देशन (Directing)? / Feature?", "options": ["मार्गदर्शन", "आदेश", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "4. विपणन (Marketing)? / Focus?", "options": ["ग्राहक", "उत्पाद", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "5. शेयर बाजार नियामक? / Regulator?", "options": ["SEBI", "RBI", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "6. संगठन? / Purpose?", "options": ["काम बंटवारा", "आराम", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "7. नियोजन (Planning)? / Purpose?", "options": ["लक्ष्य", "अस्तित्व", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "8. नियंत्रण (Controlling)? / Purpose?", "options": ["सुधार/समीक्षा", "दंड", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "9. ब्रांड? / Purpose?", "options": ["पहचान", "गुण", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "10. वित्त (Finance)? / Source?", "options": ["पूंजी/ऋण", "बचत", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "1. उद्यमिता? / Process?", "options": ["सृजनात्मक", "नकल", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "2. व्यापार योजना? / Why?", "options": ["भविष्य का खाका", "मौज", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "3. जोखिम? / Management?", "options": ["कम करना", "बढ़ाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "4. पूंजी? / Need?", "options": ["व्यापार शुरू", "खर्च", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "5. SWOT विश्लेषण? / What?", "options": ["शक्ति/कमजोरी", "शक्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "6. उद्यमी कौन? / Who is?", "options": ["जोखिम लेने वाला", "नौकरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "7. नवाचार (Innovation)? / Means?", "options": ["नया उत्पाद", "पुराना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "8. स्टार्टअप? / Startup?", "options": ["नया व्यापार", "पुराना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "9. व्यावसायिक प्रकार? / Types?", "options": ["सामाजिक/वाणिज्यिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "10. बाजार अनुसंधान? / Market Research?", "options": ["मांग समझना", "बेचना", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "1. प्रकाश चाल? / Speed?", "options": ["3*10^8 m/s", "100km/s", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "2. विद्युत धारा मात्रक? / Unit?", "options": ["एम्पीयर", "वोल्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "3. ओह्म का नियम? / Ohm's Law?", "options": ["V=IR", "V=I/R", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "4. ऊर्जा मात्रक? / Energy?", "options": ["जूल", "वाट", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "5. लेंस शक्ति? / Power unit?", "options": ["डायोप्टर", "मीटर", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "6. वेग? / Unit?", "options": ["m/s", "m/s^2", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "7. कार्य? / Unit?", "options": ["जूल", "न्यूटन", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "8. गुरुत्वाकर्षण? / Law by?", "options": ["न्यूटन", "केपलर", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "9. परमाणु सिद्धांत? / Theory?", "options": ["डाल्टन", "न्यूटन", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "10. गति का नियम? / Law of motion?", "options": ["न्यूटन", "गैलीलियो", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "1. पानी सूत्र? / Water formula?", "options": ["H2O", "CO2", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "2. आधुनिक आवर्त सारणी आधार? / Basis?", "options": ["परमाणु क्रमांक", "द्रव्यमान", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "3. लोहे में जंग? / Change?", "options": ["रासायनिक", "भौतिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "4. pH स्केल? / Neutral value?", "options": ["7", "0", "14", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "5. अक्रिय गैस? / Example?", "options": ["हीलियम", "ऑक्सीजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "6. परमाणु भार? / Atomic weight?", "options": ["प्रोटॉन+न्यूट्रॉन", "प्रोटॉन", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "7. अम्ल स्वाद? / Acid taste?", "options": ["खट्टा", "कड़वा", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "8. क्षार स्वाद? / Base taste?", "options": ["कड़वा", "खट्टा", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "9. रासायनिक अभिक्रिया? / Reaction?", "options": ["नया उत्पाद", "भौतिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "10. आवर्त सारणी तत्व? / Elements?", "options": ["118", "100", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "1. कोशिका खोज? / Discovered by?", "options": ["रॉबर्ट हुक", "डार्विन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "2. राइबोसोम? / Function?", "options": ["प्रोटीन निर्माण", "ऊर्जा", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "3. डीएनए? / Structure?", "options": ["डबल हेलिक्स", "सिंगल", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "4. विटामिन C कमी? / Disease?", "options": ["स्कर्वी", "रिकेट्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "5. तंत्रिका तंत्र? / Unit?", "options": ["न्यूरॉन", "सेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "6. श्वसन? / Gas released?", "options": ["CO2", "ऑक्सीजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "7. प्रकाश संश्लेषण? / Food?", "options": ["ग्लूकोज", "स्टार्च", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "8. हृदय कक्ष? / Chambers?", "options": ["4", "2", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "9. हीमोग्लोबिन? / Function?", "options": ["O2 परिवहन", "CO2", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "10. गुणसूत्र? / Human?", "options": ["46", "23", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "1. पीसीआर (PCR)? / Usage?", "options": ["DNA प्रवर्धन", "खाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "2. जीएमओ? / Full form?", "options": ["Genetically Modified", "Global", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "3. एंजाइम? / Role?", "options": ["उत्प्रेरक", "ईंधन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "4. क्लोनिंग? / Definition?", "options": ["समान प्रतिकृति", "बदलाव", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "5. बायो-फ्यूल? / Source?", "options": ["पादप/जैविक", "खनिज", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "6. जीन क्या? / What is gene?", "options": ["DNA का अंश", "प्रोटीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "7. बायो-टेक? / Use?", "options": ["स्वास्थ्य/कृषि", "इंजीनियरिंग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "8. प्लास्मिड? / Where?", "options": ["बैक्टीरिया", "वायरस", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "9. बायो-सेफ्टी? / What?", "options": ["सुरक्षा मानक", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "10. वैक्सीन? / Why?", "options": ["प्रतिरक्षा", "रोग", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "1. वृत्त का क्षेत्रफल? / Area?", "options": ["πr^2", "2πr", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "2. त्रिभुज कोण योग? / Sum?", "options": ["180°", "360°", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "3. sin 90°? / Value?", "options": ["1", "0", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "4. माध्य? / Formula?", "options": ["योग/संख्या", "गुणा", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "5. अभाज्य संख्या (1-100)? / Count?", "options": ["25", "20", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "6. त्रिभुज? / Area?", "options": ["1/2*b*h", "l*b", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "7. वर्ग? / Perimeter?", "options": ["4*भुजा", "भुजा^2", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "8. x^2 - y^2? / Result?", "options": ["(x-y)(x+y)", "(x-y)^2", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "9. आयतन? / Formula?", "options": ["l*b*h", "l*b", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "10. प्रायिकता? / Max value?", "options": ["1", "10", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "1. चक्रवृद्धि ब्याज? / Formula?", "options": ["P(1+r/100)^n", "P*r*t", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "2. अनुपात? / 2:4 सरलतम?", "options": ["1:2", "2:1", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "3. लाभ प्रतिशत? / Formula?", "options": ["लाभ/लागत*100", "विक्रय", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "4. रैखिक समीकरण? / Graph?", "options": ["सीधी रेखा", "वक्र", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "5. परिवहन समस्या? / Purpose?", "options": ["लागत न्यूनतम", "बढ़ाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "6. बट्टा? / Meaning?", "options": ["कीमत कमी", "बढ़ोतरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "7. ROI? / Formula?", "options": ["लाभ/निवेश", "लागत", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "8. EMI? / Meaning?", "options": ["मासिक किस्त", "एकमुश्त", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "9. आव्यूह? / Addition?", "options": ["क्रम समान", "अलग", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "10. सांख्यिकी? / Mean?", "options": ["डेटा विश्लेषण", "कहानी", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "1. RAM? / Full form?", "options": ["Random Access Memory", "Read Only", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "2. ऑपरेटिंग सिस्टम? / Example?", "options": ["Windows/Linux", "MS Word", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "3. CPU? / Brain?", "options": ["हाँ", "नहीं", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "4. वायरस? / Type?", "options": ["हानिकारक", "उपयोगी", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "5. नेटवर्क प्रकार? / LAN/WAN?", "options": ["दोनों", "सिर्फ LAN", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "6. इनपुट? / Example?", "options": ["कीबोर्ड", "मॉनिटर", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "7. आउटपुट? / Example?", "options": ["प्रिंटर", "माउस", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "8. इंटरनेट जनक? / Father of Internet?", "options": ["विंट सर्फ", "गेट्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "9. डेटा? / Meaning?", "options": ["कच्ची जानकारी", "रिजल्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "10. पासवर्ड? / Usage?", "options": ["सुरक्षा", "सार्वजनिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "1. अहिंसा? / Meaning?", "options": ["हिंसा न करना", "मारना", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "2. कर्म सिद्धांत? / Meaning?", "options": ["जैसा कर्म वैसा फल", "भाग्य", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "3. आत्मा? / Nature?", "options": ["अजर-अमर", "नाशवान", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "4. मोक्ष? / Meaning?", "options": ["जन्म-मरण मुक्ति", "स्वर्ग", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "5. तर्कसंगत? / Meaning?", "options": ["कारण आधारित", "अंधविश्वास", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "6. सत्य? / Mean?", "options": ["अंतिम यथार्थ", "झूठ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "7. अद्वैत? / Mean?", "options": ["ब्रह्म सत्य", "माया", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "8. योग? / Meaning?", "options": ["जुड़ना", "भागना", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "9. न्याय? / Base?", "options": ["तर्क", "भावना", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "10. नीतिशास्त्र? / Mean?", "options": ["सही-गलत ज्ञान", "विज्ञान", "कोई नहीं"], "correct": 0 },
    {
  "questions": [
    { "subject": "History", "lang": "hi_en", "question": "1. 'पानीपत का तीसरा युद्ध'? / 3rd Battle of Panipat?", "options": ["1761", "1526", "1556", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "2. 'हर्षवर्धन' की राजधानी? / Harsha's capital?", "options": ["कन्नौज", "थानेश्वर", "पाटलिपुत्र", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "3. 'आर्य समाज' के संस्थापक? / Founder of Arya Samaj?", "options": ["दयानंद सरस्वती", "राजा राममोहन", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "4. 'सिंधु घाटी' का बंदरगाह? / Indus Valley port?", "options": ["लोथल", "कालीबंगन", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "5. 'बौद्ध धर्म' की भाषा? / Language of Buddhism?", "options": ["पाली", "संस्कृत", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "6. 'चोल साम्राज्य' का प्रसिद्ध शासक? / Chola king?", "options": ["राजराज प्रथम", "अशोक", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "7. 'दिल्ली सल्तनत' की प्रथम महिला शासिका? / 1st woman ruler?", "options": ["रजिया सुल्तान", "नूरजहां", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "8. 'गांधीजी' का चंपारण सत्याग्रह? / Champaran Satyagraha?", "options": ["1917", "1920", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "9. 'असहयोग आंदोलन' कब स्थगित हुआ? / Non-cooperation end?", "options": ["1922", "1920", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "10. 'जालियांवाला बाग' हत्याकांड? / Massacre?", "options": ["1919", "1920", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "1. 'मौलिक कर्तव्य' किस देश से? / Fundamental Duties from?", "options": ["रूस (USSR)", "अमेरिका", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "2. 'राष्ट्रपति' का कार्यकाल? / President's term?", "options": ["5 वर्ष", "6 वर्ष", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "3. 'राज्यपाल' की न्यूनतम आयु? / Min age for Governor?", "options": ["35 वर्ष", "25 वर्ष", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "4. 'सर्वोच्च न्यायालय' के न्यायाधीश की सेवानिवृत्ति? / Retirement age?", "options": ["65 वर्ष", "62 वर्ष", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "5. 'अनुच्छेद 21A'? / Art 21A?", "options": ["शिक्षा का अधिकार", "काम का", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "6. 'प्रस्तावना' को क्या कहा गया है? / Preamble is?", "options": ["संविधान की कुंजी", "अंत", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "7. 'धन विधेयक' (Money Bill)? / Art?", "options": ["अनुच्छेद 110", "अनुच्छेद 112", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "8. 'पंचायती राज' दिवस? / Day?", "options": ["24 अप्रैल", "26 जनवरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "9. 'भारत' की राजभाषा? / Official Language?", "options": ["हिंदी", "अंग्रेजी", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "10. 'सशस्त्र बलों' के कमांडर-इन-चीफ? / Chief?", "options": ["राष्ट्रपति", "प्रधानमंत्री", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "1. 'ओजोन परत' कहाँ स्थित है? / Ozone layer location?", "options": ["समताप मंडल", "क्षोभ मंडल", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "2. 'भारत' का एकमात्र सक्रिय ज्वालामुखी? / Active volcano?", "options": ["बैरन", "नारकोंडम", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "3. 'विश्व की छत'? / Roof of the world?", "options": ["पामीर का पठार", "तिब्बत", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "4. 'क्षेत्रफल' में सबसे बड़ा राज्य? / Largest state?", "options": ["राजस्थान", "मध्य प्रदेश", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "5. 'भूकंप' की तीव्रता मापक? / Measure?", "options": ["रिक्टर स्केल", "बैरोमीटर", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "6. 'नीली क्रांति'? / Blue revolution?", "options": ["मत्स्य पालन", "दूध", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "7. 'भारत-पाकिस्तान' सीमा रेखा? / Border?", "options": ["रेडक्लिफ", "मैकमोहन", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "8. 'सांबर झील'? / Location?", "options": ["राजस्थान", "ओडिशा", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "9. 'लाल मिट्टी' का रंग? / Color?", "options": ["लौह ऑक्साइड", "मैग्नीशियम", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "10. 'ज्वार' का कारण? / Cause?", "options": ["चंद्रमा का गुरुत्वाकर्षण", "सूर्य", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "1. 'मंदी' (Recession)? / Meaning?", "options": ["आर्थिक गतिविधि में कमी", "तेजी", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "2. 'बंद अर्थव्यवस्था'? / Closed Economy?", "options": ["व्यापार नहीं", "मुक्त व्यापार", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "3. 'मुद्रा' का कार्य? / Function of Money?", "options": ["विनिमय का माध्यम", "सिर्फ बचत", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "4. 'न्यूनतम समर्थन मूल्य' (MSP)? / Who sets?", "options": ["CACP", "RBI", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "5. 'बजट' का अर्थ? / Meaning?", "options": ["आय-व्यय का विवरण", "सिर्फ खर्च", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "6. 'साख नियंत्रण'? / Credit Control?", "options": ["RBI", "सरकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "7. 'बेरोजगारी' के प्रकार? / Type?", "options": ["मौसमी/संरचनात्मक", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "8. 'विश्व व्यापार संगठन' (WTO)? / Headquarters?", "options": ["जिनेवा", "न्यूयॉर्क", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "9. 'राष्ट्रीय आय'? / National Income?", "options": ["GDP", "सिर्फ बचत", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "10. 'विदेशी मुद्रा' भंडार? / Who holds?", "options": ["RBI", "बैंक", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "1. 'प्रस्थिति' (Status)? / Meaning?", "options": ["सामाजिक पद", "नौकरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "2. 'भूमिका' (Role)? / Meaning?", "options": ["पद का व्यवहार", "नाम", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "3. 'प्राथमिक समूह'? / Primary Group?", "options": ["परिवार", "क्लब", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "4. 'द्वितीयक समूह'? / Secondary?", "options": ["क्लब/यूनियन", "परिवार", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "5. 'जनसंख्या विस्फोट'? / Effect?", "options": ["संसाधन की कमी", "विकास", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "6. 'पश्चिमीकरण' (Westernization)? / By?", "options": ["एम.एन. श्रीनिवास", "मार्क्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "7. 'संस्कृति' (Culture)? / Meaning?", "options": ["जीवन जीने का ढंग", "भौतिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "8. 'विवाह' (Marriage)? / Purpose?", "options": ["परिवार संस्था", "मनोरंजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "9. 'सामाजीकरण'? / What?", "options": ["सीखने की प्रक्रिया", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "10. 'नगरीकरण'? / Effect?", "options": ["शहरी जीवन", "गांव", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "1. 'चेतना'? / Level?", "options": ["अवचेतन/अचेतन", "सिर्फ जागृत", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "2. 'भूलना' (Forgetting)? / Cause?", "options": ["बाधा/विस्मृति", "याद", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "3. 'आवेग'? / Emotion?", "options": ["उत्तेजित अवस्था", "शांत", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "4. 'व्यक्तित्व परीक्षण'?", "options": ["Rorschach", "IQ", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "5. 'थकान' (Fatigue)? / Effect?", "options": ["कार्यक्षमता कम", "बढ़ाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "6. 'मनोविज्ञान' का अर्थ? / Psychology is?", "options": ["व्यवहार का विज्ञान", "आत्मा", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "7. 'एकाग्रता'? / Focus?", "options": ["ध्यान", "विचलित", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "8. 'प्रतिरक्षा प्रणाली' (Defense)? / Freud?", "options": ["दमन/प्रक्षेपण", "सच्चाई", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "9. 'विकास' (Growth)? / Nature?", "options": ["निरंतर", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "10. 'समायोजन'? / Adaptation?", "options": ["वातावरण से तालमेल", "लड़ाई", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "1. 'प्रोटीन' कार्य? / Function?", "options": ["ऊतक निर्माण", "ऊर्जा", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "2. 'कार्बोहाइड्रेट'?", "options": ["ऊर्जा स्रोत", "हड्डी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "3. 'वसा'? / Fat?", "options": ["ऊर्जा संचय", "प्रोटीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "4. 'कपड़ा' धुलाई? / Soap role?", "options": ["मैला हटाना", "रंगना", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "5. 'रसोईघर' प्रबंधन?", "options": ["व्यवस्था", "बिखराव", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "6. 'परिवार' का अर्थ?", "options": ["सामाजिक इकाई", "भीड़", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "7. 'बाल विकास'?", "options": ["उम्र अनुसार परिवर्तन", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "8. 'विटामिन D'?", "options": ["हड्डी", "दृष्टि", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "9. 'भोजन विषाक्तता' (Food poisoning)?", "options": ["दूषित भोजन", "ताजा", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "10. 'सिलाई'? / Purpose?", "options": ["वस्त्र निर्माण", "फाड़ना", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi_en", "question": "1. 'न्यायपालिका' कार्य? / Judiciary?", "options": ["न्याय देना", "कानून बनाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "2. 'संसद'?", "options": ["कानून निर्माण", "न्याय", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "3. 'एफ.आई.आर' (FIR)? / Meaning?", "options": ["प्रथम सूचना रिपोर्ट", "अंत", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "4. 'जमानत' (Bail)? / Legal?", "options": ["रिहाई", "सजा", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "5. 'दंड' (Punishment)? / Purpose?", "options": ["सुधार/डर", "बदला", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "6. 'संपत्ति' कानून?", "options": ["अधिकार", "चोरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "7. 'मानवाधिकार'?", "options": ["मूलभूत अधिकार", "अधिकारहीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "8. 'वसीयत'?", "options": ["संपत्ति हस्तांतरण", "खरीद", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "9. 'अदालत'?", "options": ["न्याय का स्थान", "बाजार", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "10. 'वकील' की शपथ?", "options": ["कानून रक्षा", "झूठ", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "1. 'कामायनी' महाकाव्य?", "options": ["प्रसाद", "निराला", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "2. 'गोदान'?", "options": ["प्रेमचंद", "रेणु", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "3. 'कबीर' की वाणी?", "options": ["बीजक", "पद", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "4. 'तुलसीदास'?", "options": ["रामचरितमानस", "कामायनी", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "5. 'मीरा'?", "options": ["कृष्ण भक्ति", "राम", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "6. 'निराला'?", "options": ["छायावाद", "भक्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "7. 'महादेवी वर्मा'?", "options": ["आधुनिक मीरा", "कबीर", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "8. 'दिनकर'?", "options": ["ओजस्वी कवि", "हास्य", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "9. 'भारतेन्दु'?", "options": ["नाटक", "भक्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi_en", "question": "10. 'अज्ञेय'?", "options": ["प्रयोगवाद", "आदिकाल", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "1. 'Hamlet'?", "options": ["शेक्सपियर", "मार्लो", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "2. 'Wordsworth'?", "options": ["प्रकृति कवि", "नाटक", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "3. 'T.S. Eliot'?", "options": ["आधुनिक", "क्लासिक", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "4. 'Keats'?", "options": ["रोमांटिक", "आधुनिक", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "5. 'Dickens'?", "options": ["उपन्यासकार", "कवि", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "6. 'Hardy'?", "options": ["उपन्यास", "नाटक", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "7. 'Austen'?", "options": ["उपन्यास", "कविता", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "8. 'Milton'?", "options": ["महाकाव्य", "नाटक", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "9. 'Shelley'?", "options": ["क्रांतिकारी", "शांत", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi_en", "question": "10. 'Byron'?", "options": ["रोमांटिक", "आधुनिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "1. 'खाता' (Account)?", "options": ["लेखा", "बही", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "2. 'लेखांकन'?", "options": ["व्यवस्थित रिकॉर्ड", "जुगाड़", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "3. 'उधार'?", "options": ["दायित्व", "संपत्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "4. 'अंतिम खाता' (Final Account)?", "options": ["लाभ-हानि", "रिकॉर्ड", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "5. 'पूंजी'? / Capital?", "options": ["निवेश", "उधार", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "6. 'ह्रास'?", "options": ["मूल्य कमी", "वृद्धि", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "7. 'बिक्री'? / Sales?", "options": ["आय", "व्यय", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "8. 'खरीद'?", "options": ["व्यय", "आय", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "9. 'लेखापरीक्षा' (Audit)?", "options": ["जांच", "रिकॉर्ड", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi_en", "question": "10. 'वित्तीय वर्ष'?", "options": ["1 अप्रैल-31 मार्च", "जनवरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "1. 'संगठन'?", "options": ["संरचना", "मौज", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "2. 'भर्ती'?", "options": ["नियुक्ति", "हटाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "3. 'प्रशिक्षण'? / Training?", "options": ["कौशल विकास", "काम", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "4. 'नेतृत्व'? / Leadership?", "options": ["मार्गदर्शन", "कब्जा", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "5. 'प्रेरणा'? / Motivation?", "options": ["कार्य क्षमता", "दबाव", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "6. 'विज्ञापन'?", "options": ["बिक्री बढ़ाना", "कम", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "7. 'वित्तीय योजना'?", "options": ["भविष्य की जरूरत", "बचत", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "8. 'बाजार'?", "options": ["खरीद-बिक्री", "घर", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "9. 'उपभोक्ता अधिकार'?", "options": ["सुरक्षा", "शोषण", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi_en", "question": "10. 'व्यवसाय'? / Business?", "options": ["लाभ-केंद्रित", "सेवा", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "1. 'नवाचार'?", "options": ["नया", "पुराना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "2. 'जोखिम'?", "options": ["अनिश्चितता", "निश्चित", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "3. 'उद्यमी'?", "options": ["निर्माता", "नौकरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "4. 'पूंजी'?", "options": ["व्यापार आधार", "खर्च", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "5. 'लक्ष्य'?", "options": ["उद्देश्य", "अस्पष्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "6. 'बाजार'?", "options": ["अवसर", "बाधा", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "7. 'विकास'?", "options": ["वृद्धि", "पतन", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "8. 'तकनीक'?", "options": ["आधुनिकीकरण", "पिछड़ापन", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "9. 'योजना'?", "options": ["रूपरेखा", "अचानक", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi_en", "question": "10. 'सफलता'?", "options": ["लक्ष्य प्राप्ति", "हार", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "1. 'ध्वनि' गति? / Sound speed?", "options": ["माध्यम निर्भर", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "2. 'चुंबक'?", "options": ["आकर्षण", "विकर्षण", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "3. 'घर्षण'?", "options": ["गति अवरोध", "सहायक", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "4. 'भार'?", "options": ["गुरुत्वाकर्षण", "द्रव्यमान", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "5. 'दाब'?", "options": ["बल/क्षेत्रफल", "दूरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "6. 'उत्तोलक'?", "options": ["मशीन", "औजार", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "7. 'ताप'?", "options": ["ऊर्जा", "दूरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "8. 'अपवर्तन'?", "options": ["प्रकाश मुड़ना", "सीधा", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "9. 'दर्पण'?", "options": ["प्रतिबिंब", "अंधेरा", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi_en", "question": "10. 'परमाणु'?", "options": ["सूक्ष्मतम", "विशाल", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "1. 'कार्बन'?", "options": ["जीवन आधार", "धातु", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "2. 'ऑक्सीजन'?", "options": ["दहन सहायक", "बुझाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "3. 'धातु'?", "options": ["चालक", "कुचालक", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "4. 'अधातु'?", "options": ["कुचालक", "चालक", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "5. 'मिश्रण'?", "options": ["अनिश्चित", "निश्चित", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "6. 'यौगिक'?", "options": ["निश्चित अनुपात", "अनिश्चित", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "7. 'विद्युत अपघटन'?", "options": ["रासायनिक वियोजन", "जोड़ना", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "8. 'ईंधन'?", "options": ["ऊर्जा स्रोत", "बेकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "9. 'प्लास्टिक'?", "options": ["बहुलक", "धातु", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi_en", "question": "10. 'साबुन'?", "options": ["सफाई", "दाग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "1. 'कंकाल'?", "options": ["ढांचा", "मांस", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "2. 'मांसपेशी'?", "options": ["गति", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "3. 'पाचन'?", "options": ["ऊर्जा", "अपशिष्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "4. 'रक्त'?", "options": ["परिवहन", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "5. 'प्रजनन'?", "options": ["वंश", "अंत", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "6. 'हार्मोन'?", "options": ["संदेशवाहक", "भोजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "7. 'विषाणु' (Virus)?", "options": ["सजीव-निर्जीव कड़ी", "पौधा", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "8. 'जीवाणु' (Bacteria)?", "options": ["एककोशिकीय", "बहु", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "9. 'इकोसिस्टम'?", "options": ["जीव-पर्यावरण संबंध", "अलग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi_en", "question": "10. 'जैव विविधता'?", "options": ["जीवों की विविधता", "एकता", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "1. 'जीन थेरेपी'?", "options": ["बीमारी उपचार", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "2. 'फर्मेंटेशन'?", "options": ["सूक्ष्मजीव प्रक्रिया", "ठोस", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "3. 'टीका' (Vaccine)?", "options": ["सुरक्षा", "रोग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "4. 'बायो-सेंसर'?", "options": ["जांच", "शोर", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "5. 'जीनोम'?", "options": ["डीएनए समूह", "भोजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "6. 'एंजाइम'?", "options": ["जैव उत्प्रेरक", "ईंधन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "7. 'क्लोन'?", "options": ["समान", "अलग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "8. 'प्रोटीन इंजीनियरिंग'?", "options": ["संरचना बदलाव", "भोजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "9. 'बायोरिएक्टर'?", "options": ["उत्पादन", "आराम", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi_en", "question": "10. 'बायोहैज़र्ड'?", "options": ["जोखिम", "सुरक्षा", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "1. 'बहुपद'?", "options": ["बीजगणित", "अंकगणित", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "2. 'अवकलन'?", "options": ["परिवर्तन", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "3. 'समाकलन'?", "options": ["योग", "तोड़ना", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "4. 'सदिश'?", "options": ["दिशा+परिमाण", "अदिश", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "5. 'अदिश'?", "options": ["परिमाण", "दिशा", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "6. 'फलन'?", "options": ["संबंध", "भेद", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "7. 'सीमा' (Limit)?", "options": ["नजदीकी मान", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "8. 'ज्यामिति'?", "options": ["आकार", "नंबर", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "9. 'क्रमचय'?", "options": ["व्यवस्था", "चयन", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi_en", "question": "10. 'संचय'?", "options": ["चयन", "क्रम", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "1. 'मांग पूर्वानुमान'?", "options": ["भविष्यवाणी", "अतीत", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "2. 'नेटवर्क विश्लेषण'?", "options": ["प्रोजेक्ट मैनेजमेंट", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "3. 'इन्वेंटरी'?", "options": ["स्टॉक", "बिक्री", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "4. 'अनुक्रम'?", "options": ["सीरीज", "अस्त-व्यस्त", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "5. 'लाभ-हानि'?", "options": ["अंकगणित", "बीजगणित", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "6. 'ब्याज'?", "options": ["पूंजी मूल्य", "खर्च", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "7. 'चक्रवृद्धि'?", "options": ["ब्याज पर ब्याज", "सरल", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "8. 'ग्राफ'?", "options": ["दृश्य डेटा", "टेक्स्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "9. 'सांख्यिकीय'?", "options": ["औसत/विचरण", "कहानी", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi_en", "question": "10. 'रैखिक प्रोग्रामिंग'?", "options": ["अनुकूलन", "अस्त-व्यस्त", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "1. 'सॉफ्टवेयर'?", "options": ["प्रोग्राम समूह", "मशीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "2. 'हार्डवेयर'?", "options": ["भौतिक उपकरण", "प्रोग्राम", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "3. 'इंटरनेट'?", "options": ["नेटवर्क जाल", "मशीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "4. 'वेबसाइट'?", "options": ["पेज संग्रह", "मशीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "5. 'ईमेल'?", "options": ["डिजिटल डाक", "पत्र", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "6. 'प्रोग्रामिंग'?", "options": ["कोडिंग", "बोलना", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "7. 'डेटाबेस'?", "options": ["जानकारी संग्रह", "गाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "8. 'बाइनरी'?", "options": ["0-1", "0-9", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "9. 'सर्वर'?", "options": ["सेवा प्रदाता", "क्लाइंट", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi_en", "question": "10. 'क्लाउड'?", "options": ["इंटरनेट स्टोरेज", "डिस्क", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "1. 'तर्क' (Logic)?", "options": ["सोचने की कला", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "2. 'मानवतावाद'?", "options": ["मानव कल्याण", "स्वार्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "3. 'यथार्थवाद'?", "options": ["वास्तविकता", "कल्पना", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "4. 'आदर्शवाद'?", "options": ["मूल्य/विचार", "पदार्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "5. 'चेतना'?", "options": ["अनुभूति", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "6. 'मुक्ति'?", "options": ["बंधन रहित", "कैद", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "7. 'धर्म'?", "options": ["कर्तव्य/मानवता", "अंधविश्वास", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "8. 'नैतिकता'?", "options": ["सही-गलत", "स्वार्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "9. 'ज्ञान'? / Knowledge?", "options": ["सत्य की समझ", "अज्ञान", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi_en", "question": "10. 'सत्य'?", "options": ["जो शाश्वत है", "झूठ", "कोई नहीं"], "correct": 0 },
    {
  "questions": [
    { "subject": "Science", "lang": "hi_en", "question": "1. 'प्रकाश की चाल' (Speed of light)?", "options": ["3 x 10^8 m/s", "3 x 10^5 m/s", "कोई नहीं"], "correct": 0 },
    { "subject": "Science", "lang": "hi_en", "question": "2. 'मानव हृदय' में कितने कक्ष? / Chambers in Heart?", "options": ["4", "2", "3"], "correct": 0 },
    { "subject": "Science", "lang": "hi_en", "question": "3. 'आधुनिक आवर्त सारणी' किसने दी? / Modern Periodic Table?", "options": ["मोजले", "मेंडलीफ", "कोई नहीं"], "correct": 0 },
    { "subject": "Science", "lang": "hi_en", "question": "4. 'शुष्क बर्फ' क्या है? / Dry Ice?", "options": ["ठोस CO2", "बर्फ", "कोई नहीं"], "correct": 0 },
    { "subject": "Science", "lang": "hi_en", "question": "5. 'विटामिन C' का स्रोत? / Source of Vit C?", "options": ["खट्टे फल", "दूध", "कोई नहीं"], "correct": 0 },
    { "subject": "Science", "lang": "hi_en", "question": "6. 'हीरा' किसका अपरूप है? / Allotrope of?", "options": ["कार्बन", "सिलिकॉन", "कोई नहीं"], "correct": 0 },
    { "subject": "Science", "lang": "hi_en", "question": "7. 'रक्त' का pH मान? / pH of blood?", "options": ["7.4", "6.4", "कोई नहीं"], "correct": 0 },
    { "subject": "Science", "lang": "hi_en", "question": "8. 'मायोपिया' (निकट दृष्टि) का लेंस? / Lens for Myopia?", "options": ["अवतल (Concave)", "उत्तल (Convex)", "कोई नहीं"], "correct": 0 },
    { "subject": "Science", "lang": "hi_en", "question": "9. 'ध्वनि' की तीव्रता की इकाई? / Unit of Sound intensity?", "options": ["डेसिबल", "हर्ट्ज़", "कोई नहीं"], "correct": 0 },
    { "subject": "Science", "lang": "hi_en", "question": "10. 'ऊर्जा' की SI इकाई? / SI unit of Energy?", "options": ["जूल (Joule)", "वाट", "कोई नहीं"], "correct": 0 },
    { "subject": "General Knowledge", "lang": "hi_en", "question": "1. 'स्टैच्यू ऑफ यूनिटी' कहाँ है? / Where is Statue of Unity?", "options": ["गुजरात", "महाराष्ट्र", "कोई नहीं"], "correct": 0 },
    { "subject": "General Knowledge", "lang": "hi_en", "question": "2. 'विश्व पर्यावरण दिवस'? / World Environment Day?", "options": ["5 जून", "10 जून", "कोई नहीं"], "correct": 0 },
    { "subject": "General Knowledge", "lang": "hi_en", "question": "3. 'कंप्यूटर' का पितामह? / Father of Computer?", "options": ["चार्ल्स बैबेज", "बिल गेट्स", "कोई नहीं"], "correct": 0 },
    { "subject": "General Knowledge", "lang": "hi_en", "question": "4. 'प्रथम महिला राष्ट्रपति'? / 1st Woman President of India?", "options": ["प्रतिभा पाटिल", "द्रौपदी मुर्मू", "कोई नहीं"], "correct": 0 },
    { "subject": "General Knowledge", "lang": "hi_en", "question": "5. 'गिद्ध' नृत्य किस राज्य का? / Giddha folk dance?", "options": ["पंजाब", "हरियाणा", "कोई नहीं"], "correct": 0 },
    { "subject": "General Knowledge", "lang": "hi_en", "question": "6. 'संविधान दिवस'? / Constitution Day?", "options": ["26 नवंबर", "26 जनवरी", "कोई नहीं"], "correct": 0 },
    { "subject": "General Knowledge", "lang": "hi_en", "question": "7. 'सर्वाधिक साक्षर' राज्य? / Highest literacy state?", "options": ["केरल", "गोवा", "कोई नहीं"], "correct": 0 },
    { "subject": "General Knowledge", "lang": "hi_en", "question": "8. 'सांची स्तूप' किसने बनवाया? / Who built Sanchi Stupa?", "options": ["अशोक", "अकबर", "कोई नहीं"], "correct": 0 },
    { "subject": "General Knowledge", "lang": "hi_en", "question": "9. 'भारत की पहली रेल'? / 1st Train in India?", "options": ["1853", "1850", "कोई नहीं"], "correct": 0 },
    { "subject": "General Knowledge", "lang": "hi_en", "question": "10. 'ओलिंपिक' में स्वर्ण पदक? / Gold in Olympics?", "options": ["नीरज चोपड़ा", "पी.वी. सिंधु", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "1. 'सिंधु सभ्यता' का खोज वर्ष? / Indus discovery?", "options": ["1921", "1922", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "2. 'अकबरनामा' के लेखक? / Author of Akbarnama?", "options": ["अबुल फजल", "बीरबल", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "3. 'प्लासी का युद्ध'? / Battle of Plassey?", "options": ["1757", "1764", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "4. 'स्वराज मेरा जन्मसिद्ध अधिकार'?", "options": ["बाल गंगाधर तिलक", "गांधीजी", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "5. 'हड़प नीति' (Doctrine of Lapse)?", "options": ["डलहौजी", "कैनिंग", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "6. 'अशोक' की राजधानी? / Capital of Ashoka?", "options": ["पाटलिपुत्र", "तक्षशिला", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "7. 'दिल्ली सल्तनत' का अंत? / End of Delhi Sultanate?", "options": ["1526", "1556", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "8. 'गांधीजी' दक्षिण अफ्रीका से कब आए? / Return from SA?", "options": ["1915", "1917", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "9. 'भारत छोड़ो आंदोलन'? / Quit India Movement?", "options": ["1942", "1940", "कोई नहीं"], "correct": 0 },
    { "subject": "History", "lang": "hi_en", "question": "10. 'कैबिनेट मिशन' कब आया? / Cabinet Mission?", "options": ["1946", "1945", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "1. 'पृथ्वी' की बहन ग्रह? / Twin of Earth?", "options": ["शुक्र (Venus)", "मंगल", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "2. 'भारत' की सबसे लंबी नदी? / Longest river?", "options": ["गंगा", "ब्रह्मपुत्र", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "3. 'कर्क रेखा' किन राज्यों से? / Tropic of Cancer?", "options": ["8 राज्य", "10 राज्य", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "4. 'मानसून' का आगमन? / Monsoon onset?", "options": ["केरल", "तमिलनाडु", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "5. 'विश्व' का सबसे बड़ा मरुस्थल? / Largest Desert?", "options": ["सहारा", "थार", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "6. 'भूकंप' का केंद्र? / Epicenter?", "options": ["अधिकेंद्र", "गर्त", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "7. 'सुंदरवन' कहाँ है? / Sunderbans?", "options": ["पश्चिम बंगाल", "ओडिशा", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "8. 'लक्षद्वीप' का निर्माण? / Origin?", "options": ["प्रवाल (Coral)", "ज्वालामुखी", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "9. 'वायुमंडल' में नाइट्रोजन? / Nitrogen %?", "options": ["78%", "21%", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi_en", "question": "10. 'जैव विविधता' हॉटस्पॉट? / Biodiversity?", "options": ["पश्चिमी घाट", "थार", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "1. 'अर्थशास्त्र' के जनक? / Father of Economics?", "options": ["एडम स्मिथ", "मार्क्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "2. 'RBI' की स्थापना? / Est of RBI?", "options": ["1935", "1947", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "3. 'GST' कब लागू? / Implementation?", "options": ["1 जुलाई 2017", "2016", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "4. 'नरेगा' (NREGA) कब? / Year?", "options": ["2005", "2008", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "5. 'मुद्रास्फीति' का अर्थ? / Inflation?", "options": ["महंगाई", "मंदी", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "6. 'बैंक दर' (Bank Rate) निर्धारित?", "options": ["RBI", "सरकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "7. 'द्वितीयक क्षेत्र'?", "options": ["विनिर्माण (Industry)", "कृषि", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "8. 'पंचवर्षीय योजना' का मॉडल?", "options": ["सोवियत संघ", "अमेरिका", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "9. 'गरीबी रेखा' का मापन?", "options": ["उपभोग/आय", "सिर्फ संपत्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi_en", "question": "10. 'विनिवेश' (Disinvestment)?", "options": ["सरकारी हिस्सेदारी बेचना", "खरीदना", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "1. 'मौलिक अधिकार' कहाँ से? / Fundamental Rights?", "options": ["अमेरिका", "रूस", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "2. 'आपातकाल' का प्रावधान? / Emergency?", "options": ["जर्मनी", "ब्रिटेन", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "3. 'संसद' के सदन? / Houses?", "options": ["2", "3", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "4. 'प्रधानमंत्री' की नियुक्ति?", "options": ["राष्ट्रपति", "जनता", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "5. 'उपराष्ट्रपति' पदेन सभापति?", "options": ["राज्यसभा", "लोकसभा", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "6. 'अविश्वास प्रस्ताव'?", "options": ["लोकसभा", "राज्यसभा", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "7. 'अनुच्छेद 370' हटा? / Abrogation?", "options": ["2019", "2018", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "8. 'निर्वाचन आयोग'? / Election Commission?", "options": ["अनुच्छेद 324", "370", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "9. 'स्थानीय स्वशासन' के जनक?", "options": ["रिपन", "मेयो", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi_en", "question": "10. 'समान नागरिक संहिता'?", "options": ["अनुच्छेद 44", "40", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "1. 'समाज' का अध्ययन? / Sociology study?", "options": ["सामाजिक संबंध", "मन", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "2. 'जाति व्यवस्था'?", "options": ["जन्म आधारित", "कर्म", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "3. 'संयुक्त परिवार'?", "options": ["बड़ी पीढ़ी", "विखंडन", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "4. 'धार्मिक क्रिया'? / Religion?", "options": ["पवित्र विश्वास", "सिर्फ कर्म", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "5. 'सामाजिक परिवर्तन'? / Change?", "options": ["संरचनात्मक बदलाव", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "6. 'वर्ग संघर्ष'?", "options": ["मार्क्स", "दुरखीम", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "7. 'लोकतांत्रिक समाज'?", "options": ["समानता", "तानाशाही", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "8. 'लिंग' (Gender) vs 'Sex'?", "options": ["सामाजिक-जैविक", "एक ही", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "9. 'सांप्रदायिकता'? / Communalism?", "options": ["धार्मिक कट्टरता", "शांति", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi_en", "question": "10. 'मानव अधिकार'?", "options": ["सार्वभौमिक", "सीमित", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "1. 'मनोविश्लेषण'?", "options": ["फ्रायड", "वाटसन", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "2. 'बुद्धि लब्धि' (IQ)?", "options": ["मानसिक/वास्तविक आयु", "बराबर", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "3. 'सीखने' का नियम?", "options": ["थार्नडाइक", "पावलोव", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "4. 'स्मृति' (Memory)?", "options": ["कोडिंग/स्टोरेज", "भूलना", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "5. 'प्रेरणा' (Motivation)?", "options": ["आंतरिक शक्ति", "बाहरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "6. 'फोबिया' (Phobia)?", "options": ["अतार्किक डर", "पसंद", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "7. 'व्यक्तित्व' (Personality)?", "options": ["गुणों का योग", "कपड़े", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "8. 'व्यवहारवाद'? / Behaviorism?", "options": ["वाटसन", "फ्रायड", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "9. 'तनाव' (Stress)?", "options": ["अनुकूलन असंतुलन", "मौज", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi_en", "question": "10. 'संवेग'?", "options": ["उत्तेजना", "ठंडा", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "1. 'संतुलित आहार'?", "options": ["सभी पोषक", "सिर्फ फल", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "2. 'दूध' में कैल्शियम?", "options": ["हाँ", "नहीं", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "3. 'बचत' का महत्व?", "options": ["भविष्य सुरक्षा", "बर्बादी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "4. 'रंग' सिद्धांत?", "options": ["प्राथमिक/द्वितीयक", "अंधेरा", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "5. 'बाल विकास' के चरण?", "options": ["शैशव/किशोरावस्था", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "6. 'कपड़ा' धुलाई विधि?", "options": ["पानी/साबुन", "सिर्फ धूप", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "7. 'खाद्य संरक्षण'?", "options": ["खराब होने से बचाना", "सड़ाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "8. 'घर' की सजावट?", "options": ["कला/सुविधा", "कचरा", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "9. 'आयरन' की कमी?", "options": ["एनीमिया", "हड्डी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi_en", "question": "10. 'समय प्रबंधन'?", "options": ["कार्य दक्षता", "आलस", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi_en", "question": "1. 'कानून' का स्रोत?", "options": ["संविधान/परंपरा", "इच्छा", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "2. 'दीवानी' (Civil) कानून?", "options": ["संपत्ति/विवाद", "अपराध", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "3. 'फौजदारी' (Criminal)?", "options": ["अपराध/सजा", "संपत्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "4. 'जनहित याचिका' (PIL)?", "options": ["सार्वजनिक भलाई", "स्वार्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "5. 'जज' की भूमिका?", "options": ["निष्पक्ष न्याय", "पक्षपात", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "6. 'कॉपीराइट'?", "options": ["बौद्धिक संपदा", "चोरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "7. 'अनुबंध' (Contract)?", "options": ["समझौता", "जबरदस्ती", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "8. 'साक्ष्य' (Evidence)?", "options": ["सबूत", "कहानी", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "9. 'विधिक सहायता'?", "options": ["मुफ्त कानूनी सलाह", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi_en", "question": "10. 'ट्रिब्यूनल'?", "options": ["विशिष्ट अदालत", "बाजार", "कोई नहीं"], "correct": 0 },
    {
  "questions": [
    { "subject": "History", "lang": "hi", "question": "1. 'सिंधु सभ्यता' का सबसे बड़ा स्थल?", "options": ["मोहनजोदड़ो", "लोथल", "राखीगढ़ी"], "correct": 2 },
    { "subject": "History", "lang": "hi", "question": "2. 'अशोक' का नाम 'देवनामप्रिय' किस अभिलेख में है?", "options": ["मास्की", "इलाहाबाद", "सांची"], "correct": 0 },
    { "subject": "History", "lang": "hi", "question": "3. 'मुगल' वंश का संस्थापक?", "options": ["बाबर", "अकबर", "हुमायूं"], "correct": 0 },
    { "subject": "History", "lang": "hi", "question": "4. 'कांग्रेस' की स्थापना कब हुई?", "options": ["1885", "1905", "1857"], "correct": 0 },
    { "subject": "History", "lang": "hi", "question": "5. 'बक्सर का युद्ध' कब लड़ा गया?", "options": ["1764", "1757", "1761"], "correct": 0 },
    { "subject": "History", "lang": "hi", "question": "6. 'हड़प्पा' किस नदी के किनारे है?", "options": ["रावी", "सिंधु", "सतलज"], "correct": 0 },
    { "subject": "History", "lang": "hi", "question": "7. 'जैन धर्म' के 24वें तीर्थंकर?", "options": ["महावीर", "ऋषभदेव", "पार्श्वनाथ"], "correct": 0 },
    { "subject": "History", "lang": "hi", "question": "8. 'बंगाल विभाजन' कब हुआ?", "options": ["1905", "1911", "1907"], "correct": 0 },
    { "subject": "History", "lang": "hi", "question": "9. 'दांडी यात्रा' शुरू हुई?", "options": ["1930", "1920", "1942"], "correct": 0 },
    { "subject": "History", "lang": "hi", "question": "10. 'पानीपत' की दूसरी लड़ाई?", "options": ["1556", "1526", "1761"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi", "question": "1. 'संविधान सभा' के स्थायी अध्यक्ष?", "options": ["राजेंद्र प्रसाद", "अंबेडकर", "नेहरू"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi", "question": "2. 'मौलिक अधिकार' किस भाग में?", "options": ["भाग 3", "भाग 4", "भाग 2"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi", "question": "3. 'राष्ट्रपति' पर महाभियोग?", "options": ["अनुच्छेद 61", "अनुच्छेद 52", "अनुच्छेद 72"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi", "question": "4. 'वित्तीय आपातकाल'?", "options": ["अनुच्छेद 360", "अनुच्छेद 352", "अनुच्छेद 356"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi", "question": "5. 'संपत्ति का अधिकार' कैसा है?", "options": ["विधिक अधिकार", "मौलिक अधिकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi", "question": "6. 'लोकसभा' का सदस्य बनने की आयु?", "options": ["25 वर्ष", "30 वर्ष", "35 वर्ष"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi", "question": "7. 'राज्यों का संघ'?", "options": ["अनुच्छेद 1", "अनुच्छेद 2", "अनुच्छेद 3"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi", "question": "8. 'दलबदल कानून'?", "options": ["10वीं अनुसूची", "8वीं", "9वीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi", "question": "9. 'पंचायती राज' किस अनुसूची में?", "options": ["11वीं", "10वीं", "12वीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi", "question": "10. 'संवैधानिक उपचार'?", "options": ["अनुच्छेद 32", "अनुच्छेद 21", "अनुच्छेद 14"], "correct": 0 },
    { "subject": "Geography", "lang": "hi", "question": "1. 'सौरमंडल' का सबसे बड़ा ग्रह?", "options": ["बृहस्पति", "शनि", "पृथ्वी"], "correct": 0 },
    { "subject": "Geography", "lang": "hi", "question": "2. 'विश्व' का सबसे ऊँचा शिखर?", "options": ["एवरेस्ट", "K2", "कंचनजंगा"], "correct": 0 },
    { "subject": "Geography", "lang": "hi", "question": "3. 'भारत' की सबसे लंबी सीमा?", "options": ["बांग्लादेश", "चीन", "पाकिस्तान"], "correct": 0 },
    { "subject": "Geography", "lang": "hi", "question": "4. 'कर्क रेखा' किस देश से नहीं गुजरती?", "options": ["पाकिस्तान", "भारत", "बांग्लादेश"], "correct": 0 },
    { "subject": "Geography", "lang": "hi", "question": "5. 'ज्वालामुखी' झील कौन सी है?", "options": ["लोनार", "सांबर", "चिल्का"], "correct": 0 },
    { "subject": "Geography", "lang": "hi", "question": "6. 'वायुमंडल' में ऑक्सीजन कितनी है?", "options": ["21%", "78%", "0.03%"], "correct": 0 },
    { "subject": "Geography", "lang": "hi", "question": "7. 'नीलगिरी' की सबसे ऊँची चोटी?", "options": ["दोदाबेटा", "अनामुडी", "गुरु शिखर"], "correct": 0 },
    { "subject": "Geography", "lang": "hi", "question": "8. 'भारत' का 'मानक समय'?", "options": ["82.5°E", "80°E", "85°E"], "correct": 0 },
    { "subject": "Geography", "lang": "hi", "question": "9. 'भूकंप' को मापते हैं?", "options": ["सिस्मोग्राफ", "बैरोमीटर", "थर्मामीटर"], "correct": 0 },
    { "subject": "Geography", "lang": "hi", "question": "10. 'क्षेत्रफल' में विश्व का 7वां देश?", "options": ["भारत", "कनाडा", "चीन"], "correct": 0 },
    { "subject": "Economics", "lang": "hi", "question": "1. 'सकल घरेलू उत्पाद'?", "options": ["GDP", "GNP", "NDP"], "correct": 0 },
    { "subject": "Economics", "lang": "hi", "question": "2. 'अर्थशास्त्र' की पुस्तक?", "options": ["कौटिल्य", "अकबर", "मार्क्स"], "correct": 0 },
    { "subject": "Economics", "lang": "hi", "question": "3. 'नवरत्न' क्या है?", "options": ["सार्वजनिक कंपनियां", "मंदिर", "फिल्म"], "correct": 0 },
    { "subject": "Economics", "lang": "hi", "question": "4. 'मुद्रा' का निर्गमन?", "options": ["RBI", "SBI", "सरकार"], "correct": 0 },
    { "subject": "Economics", "lang": "hi", "question": "5. 'नीति आयोग' अध्यक्ष?", "options": ["प्रधानमंत्री", "राष्ट्रपति", "वित्त मंत्री"], "correct": 0 },
    { "subject": "Economics", "lang": "hi", "question": "6. 'तृतीयक क्षेत्र'?", "options": ["सेवा", "कृषि", "उद्योग"], "correct": 0 },
    { "subject": "Economics", "lang": "hi", "question": "7. 'बजट' पेश कौन करता है?", "options": ["वित्त मंत्री", "प्रधानमंत्री", "राष्ट्रपति"], "correct": 0 },
    { "subject": "Economics", "lang": "hi", "question": "8. 'गरीबी' मापन समिति?", "options": ["तेंदुलकर", "मुद्गल", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi", "question": "9. 'बैंक' की राष्ट्रीयकरण?", "options": ["1969", "1947", "1991"], "correct": 0 },
    { "subject": "Economics", "lang": "hi", "question": "10. 'खुली अर्थव्यवस्था'?", "options": ["मुक्त व्यापार", "बंद", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi", "question": "1. 'संयुक्त परिवार' के फायदे?", "options": ["सुरक्षा", "अकेलापन", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi", "question": "2. 'पश्चिमीकरण'?", "options": ["संस्कृति बदलाव", "राजनीति", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi", "question": "3. 'सामाजिक संरचना'?", "options": ["सामाजिक ढांचा", "बाजार", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi", "question": "4. 'वर्णाश्रम'?", "options": ["हिंदू परंपरा", "आधुनिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi", "question": "5. 'नगरीकरण' का प्रभाव?", "options": ["जीवन शैली", "खेती", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi", "question": "6. 'वर्ग संघर्ष'?", "options": ["कार्ल मार्क्स", "गांधी", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi", "question": "7. 'सामाजीकरण'?", "options": ["सीखना", "दौड़ना", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi", "question": "8. 'जाति' क्या है?", "options": ["बंद वर्ग", "खुला", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi", "question": "9. 'धर्म'?", "options": ["आस्था", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi", "question": "10. 'अपराध'?", "options": ["सामाजिक विचलन", "नियम", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi", "question": "1. 'मनोविज्ञान'?", "options": ["व्यवहार", "आत्मा", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi", "question": "2. 'बुद्धि'?", "options": ["सीखने की क्षमता", "धन", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi", "question": "3. 'चेतना'?", "options": ["जागरूकता", "नींद", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi", "question": "4. 'व्यक्तित्व'?", "options": ["गुणों का समूह", "चेहरा", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi", "question": "5. 'सीखना'?", "options": ["अनुभव", "पैदा होना", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi", "question": "6. 'प्रेरणा'?", "options": ["लक्ष्य प्राप्ति", "आलस", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi", "question": "7. 'भूलना'?", "options": ["याददाश्त कमी", "तेजी", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi", "question": "8. 'संवेग'?", "options": ["भावना", "दिमाग", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi", "question": "9. 'तनाव'?", "options": ["दबाव", "खुशी", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi", "question": "10. 'विकास'?", "options": ["निरंतर", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi", "question": "1. 'कार्बोहाइड्रेट'?", "options": ["ऊर्जा", "प्रोटीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi", "question": "2. 'दूध'?", "options": ["प्रोटीन/कैल्शियम", "फैट", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi", "question": "3. 'सिलाई'?", "options": ["कपड़ा मरम्मत", "खेती", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi", "question": "4. 'रसोई प्रबंधन'?", "options": ["व्यवस्था", "गंदगी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi", "question": "5. 'बाल विकास'?", "options": ["उम्र परिवर्तन", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi", "question": "6. 'विटामिन सी'?", "options": ["खट्टे फल", "दूध", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi", "question": "7. 'खाद्य परिरक्षण'?", "options": ["सुरक्षा", "खराब", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi", "question": "8. 'समय प्रबंधन'?", "options": ["कार्यक्षमता", "आलस", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi", "question": "9. 'कपड़ा धुलाई'?", "options": ["सफाई", "बर्बादी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi", "question": "10. 'संतुलित आहार'?", "options": ["सभी पोषक", "एक", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi", "question": "1. 'FIR'?", "options": ["प्रथम सूचना", "अंतिम", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi", "question": "2. 'दीवानी मामला'?", "options": ["संपत्ति", "अपराध", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi", "question": "3. 'फौजदारी'?", "options": ["अपराध", "संपत्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi", "question": "4. 'न्यायपालिका'?", "options": ["कानून व्याख्या", "बनाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi", "question": "5. 'संविधान'?", "options": ["सर्वोच्च कानून", "किताब", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi", "question": "6. 'वसीयत'?", "options": ["संपत्ति दान", "खरीद", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi", "question": "7. 'मानवाधिकार'?", "options": ["मौलिक", "अधिकारहीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi", "question": "8. 'अदालत'?", "options": ["न्यायलय", "बाजार", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi", "question": "9. 'जमानत'?", "options": ["रिहाई", "सजा", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", lang: "hi", "question": "10. 'वकील'?", "options": ["कानून प्रतिनिधि", "दलाल", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi", "question": "1. 'रामचरितमानस'?", "options": ["तुलसीदास", "कबीर", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi", "question": "2. 'गोदान'?", "options": ["प्रेमचंद", "निराला", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi", "question": "3. 'कामायनी'?", "options": ["प्रसाद", "दिनकर", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi", "question": "4. 'कबीर'?", "options": ["भक्ति", "आधुनिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi", "question": "5. 'मीराबाई'?", "options": ["कृष्ण भक्ति", "राम", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi", "question": "6. 'निराला'?", "options": ["छायावाद", "भक्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi", "question": "7. 'महादेवी'?", "options": ["आधुनिक मीरा", "कबीर", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi", "question": "8. 'दिनकर'?", "options": ["ओजस्वी", "हास्य", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi", "question": "9. 'भारतेन्दु'?", "options": ["नाटक", "भक्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi", "question": "10. 'अज्ञेय'?", "options": ["प्रयोगवाद", "आदि", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi", "question": "1. 'Hamlet'?", "options": ["Shakespeare", "Marlowe", "No"], "correct": 0 },
    { "subject": "English Literature", lang: "hi", "question": "2. 'Wordsworth'?", "options": ["Nature Poet", "Drama", "No"], "correct": 0 },
    { "subject": "English Literature", lang: "hi", "question": "3. 'Eliot'?", "options": ["Modern", "Classic", "No"], "correct": 0 },
    { "subject": "English Literature", lang: "hi", "question": "4. 'Keats'?", "options": ["Romantic", "Modern", "No"], "correct": 0 },
    { "subject": "English Literature", lang: "hi", "question": "5. 'Dickens'?", "options": ["Novelist", "Poet", "No"], "correct": 0 },
    { "subject": "English Literature", lang: "hi", "question": "6. 'Hardy'?", "options": ["Novel", "Drama", "No"], "correct": 0 },
    { "subject": "English Literature", lang: "hi", "question": "7. 'Austen'?", "options": ["Novel", "Drama", "No"], "correct": 0 },
    { "subject": "English Literature", lang: "hi", "question": "8. 'Milton'?", "options": ["Epic", "Drama", "No"], "correct": 0 },
    { "subject": "English Literature", lang: "hi", "question": "9. 'Shelley'?", "options": ["Revolutionary", "Calm", "No"], "correct": 0 },
    { "subject": "English Literature", lang: "hi", "question": "10. 'Byron'?", "options": ["Romantic", "Modern", "No"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi", "question": "1. 'खाता'?", "options": ["लेखा", "बही", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi", "question": "2. 'लेखांकन'?", "options": ["रिकॉर्ड", "जुगाड़", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi", "question": "3. 'उधार'?", "options": ["दायित्व", "संपत्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi", "question": "4. 'अंतिम खाता'?", "options": ["लाभ-हानि", "रिकॉर्ड", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi", "question": "5. 'पूंजी'?", "options": ["निवेश", "उधार", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi", "question": "6. 'ह्रास'?", "options": ["मूल्य कमी", "वृद्धि", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi", "question": "7. 'बिक्री'?", "options": ["आय", "व्यय", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi", "question": "8. 'खरीद'?", "options": ["व्यय", "आय", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi", "question": "9. 'लेखापरीक्षा'?", "options": ["जांच", "रिकॉर्ड", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi", "question": "10. 'वित्तीय वर्ष'?", "options": ["1 अप्रैल-31 मार्च", "जनवरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi", "question": "1. 'संगठन'?", "options": ["ढांचा", "मौज", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi", "question": "2. 'भर्ती'?", "options": ["नियुक्ति", "हटाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi", "question": "3. 'प्रशिक्षण'?", "options": ["कौशल", "काम", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi", "question": "4. 'नेतृत्व'?", "options": ["मार्गदर्शन", "कब्जा", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi", "question": "5. 'प्रेरणा'?", "options": ["क्षमता", "दबाव", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi", "question": "6. 'विज्ञापन'?", "options": ["बिक्री", "कम", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi", "question": "7. 'वित्तीय योजना'?", "options": ["जरूरत", "बचत", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi", "question": "8. 'बाजार'?", "options": ["खरीद", "घर", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi", "question": "9. 'उपभोक्ता अधिकार'?", "options": ["सुरक्षा", "शोषण", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi", "question": "10. 'व्यवसाय'?", "options": ["लाभ", "सेवा", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi", "question": "1. 'नवाचार'?", "options": ["नया", "पुराना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi", "question": "2. 'जोखिम'?", "options": ["अनिश्चित", "निश्चित", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi", "question": "3. 'उद्यमी'?", "options": ["निर्माता", "नौकरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi", "question": "4. 'पूंजी'?", "options": ["व्यापार", "खर्च", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi", "question": "5. 'लक्ष्य'?", "options": ["उद्देश्य", "अस्पष्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi", "question": "6. 'बाजार'?", "options": ["अवसर", "बाधा", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi", "question": "7. 'विकास'?", "options": ["वृद्धि", "पतन", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi", "question": "8. 'तकनीक'?", "options": ["आधुनिक", "पुराना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi", "question": "9. 'योजना'?", "options": ["रूपरेखा", "अचानक", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi", "question": "10. 'सफलता'?", "options": ["लक्ष्य", "हार", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi", "question": "1. 'ध्वनि'?", "options": ["तरंग", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi", "question": "2. 'चुंबक'?", "options": ["आकर्षण", "दूर", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi", "question": "3. 'घर्षण'?", "options": ["अवरोध", "सहायक", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi", "question": "4. 'भार'?", "options": ["गुरुत्वाकर्षण", "द्रव्यमान", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi", "question": "5. 'दाब'?", "options": ["बल/क्षेत्रफल", "दूरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi", "question": "6. 'उत्तोलक'?", "options": ["मशीन", "औजार", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi", "question": "7. 'ताप'?", "options": ["ऊर्जा", "दूरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi", "question": "8. 'अपवर्तन'?", "options": ["प्रकाश मुड़ना", "सीधा", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi", "question": "9. 'दर्पण'?", "options": ["प्रतिबिंब", "अंधेरा", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi", "question": "10. 'परमाणु'?", "options": ["सूक्ष्म", "विशाल", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi", "question": "1. 'कार्बन'?", "options": ["जीवन", "धातु", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi", "question": "2. 'ऑक्सीजन'?", "options": ["दहन", "बुझाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi", "question": "3. 'धातु'?", "options": ["चालक", "कुचालक", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi", "question": "4. 'अधातु'?", "options": ["कुचालक", "चालक", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi", "question": "5. 'मिश्रण'?", "options": ["अनिश्चित", "निश्चित", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi", "question": "6. 'यौगिक'?", "options": ["निश्चित", "अनिश्चित", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi", "question": "7. 'विद्युत अपघटन'?", "options": ["वियोजन", "जोड़ना", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi", "question": "8. 'ईंधन'?", "options": ["ऊर्जा", "बेकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi", "question": "9. 'प्लास्टिक'?", "options": ["बहुलक", "धातु", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi", "question": "10. 'साबुन'?", "options": ["सफाई", "दाग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi", "question": "1. 'कंकाल'?", "options": ["ढांचा", "मांस", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi", "question": "2. 'मांसपेशी'?", "options": ["गति", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi", "question": "3. 'पाचन'?", "options": ["ऊर्जा", "अपशिष्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi", "question": "4. 'रक्त'?", "options": ["परिवहन", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi", "question": "5. 'प्रजनन'?", "options": ["वंश", "अंत", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi", "question": "6. 'हार्मोन'?", "options": ["संदेशवाहक", "भोजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi", "question": "7. 'विषाणु'?", "options": ["जीव-निर्जीव", "पौधा", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi", "question": "8. 'जीवाणु'?", "options": ["एककोशिकीय", "बहु", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi", "question": "9. 'इकोसिस्टम'?", "options": ["जीव-पर्यावरण", "अलग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi", "question": "10. 'जैव विविधता'?", "options": ["विभिन्नता", "एकता", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi", "question": "1. 'जीन थेरेपी'?", "options": ["उपचार", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi", "question": "2. 'फर्मेंटेशन'?", "options": ["सूक्ष्मजीव", "ठोस", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi", "question": "3. 'टीका'?", "options": ["सुरक्षा", "रोग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi", "question": "4. 'बायो-सेंसर'?", "options": ["जांच", "शोर", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi", "question": "5. 'जीनोम'?", "options": ["डीएनए", "भोजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi", "question": "6. 'एंजाइम'?", "options": ["उत्प्रेरक", "ईंधन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi", "question": "7. 'क्लोन'?", "options": ["समान", "अलग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi", "question": "8. 'प्रोटीन इंजीनियरिंग'?", "options": ["बदलाव", "भोजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi", "question": "9. 'बायोरिएक्टर'?", "options": ["उत्पादन", "आराम", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi", "question": "10. 'बायोहैज़र्ड'?", "options": ["जोखिम", "सुरक्षा", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi", "question": "1. 'बहुपद'?", "options": ["बीजगणित", "अंक", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi", "question": "2. 'अवकलन'?", "options": ["परिवर्तन", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi", "question": "3. 'समाकलन'?", "options": ["योग", "तोड़ना", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi", "question": "4. 'सदिश'?", "options": ["दिशा", "अदिश", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi", "question": "5. 'अदिश'?", "options": ["परिमाण", "दिशा", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi", "question": "6. 'फलन'?", "options": ["संबंध", "भेद", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi", "question": "7. 'सीमा'?", "options": ["नजदीकी", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi", "question": "8. 'ज्यामिति'?", "options": ["आकार", "नंबर", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi", "question": "9. 'क्रमचय'?", "options": ["व्यवस्था", "चयन", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi", "question": "10. 'संचय'?", "options": ["चयन", "क्रम", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi", "question": "1. 'पूर्वानुमान'?", "options": ["भविष्य", "अतीत", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi", "question": "2. 'नेटवर्क'?", "options": ["प्रोजेक्ट", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi", "question": "3. 'इन्वेंटरी'?", "options": ["स्टॉक", "बिक्री", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi", "question": "4. 'अनुक्रम'?", "options": ["सीरीज", "अस्त-व्यस्त", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi", "question": "5. 'लाभ-हानि'?", "options": ["अंक", "बीज", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi", "question": "6. 'ब्याज'?", "options": ["पूंजी मूल्य", "खर्च", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi", "question": "7. 'चक्रवृद्धि'?", "options": ["ब्याज पर", "सरल", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi", "question": "8. 'ग्राफ'?", "options": ["डेटा", "टेक्स्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi", "question": "9. 'सांख्यिकी'?", "options": ["औसत", "कहानी", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi", "question": "10. 'प्रोग्रामिंग'?", "options": ["अनुकूलन", "अस्त-व्यस्त", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi", "question": "1. 'सॉफ्टवेयर'?", "options": ["प्रोग्राम", "मशीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi", "question": "2. 'हार्डवेयर'?", "options": ["उपकरण", "प्रोग्राम", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi", "question": "3. 'इंटरनेट'?", "options": ["नेटवर्क", "मशीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi", "question": "4. 'वेबसाइट'?", "options": ["पेज", "मशीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi", "question": "5. 'ईमेल'?", "options": ["डाक", "पत्र", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi", "question": "6. 'प्रोग्रामिंग'?", "options": ["कोडिंग", "बोलना", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi", "question": "7. 'डेटाबेस'?", "options": ["संग्रह", "गाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi", "question": "8. 'बाइनरी'?", "options": ["0-1", "0-9", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi", "question": "9. 'सर्वर'?", "options": ["सेवा", "क्लाइंट", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi", "question": "10. 'क्लाउड'?", "options": ["स्टोरेज", "डिस्क", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi", "question": "1. 'तर्क'?", "options": ["सोचना", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi", "question": "2. 'मानवतावाद'?", "options": ["कल्याण", "स्वार्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi", "question": "3. 'यथार्थवाद'?", "options": ["वास्तविकता", "कल्पना", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi", "question": "4. 'आदर्शवाद'?", "options": ["विचार", "पदार्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi", "question": "5. 'चेतना'?", "options": ["अनुभूति", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi", "question": "6. 'मुक्ति'?", "options": ["बंधन रहित", "कैद", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi", "question": "7. 'धर्म'?", "options": ["कर्तव्य", "अंधविश्वास", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi", "question": "8. 'नैतिकता'?", "options": ["सही-गलत", "स्वार्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi", "question": "9. 'ज्ञान'?", "options": ["समझ", "अज्ञान", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi", "question": "10. 'सत्य'?", "options": ["शाश्वत", "झूठ", "कोई नहीं"], "correct": 0 },
    {
  "questions": [
    { "subject": "History", "lang": "hi-en", "question": "1. 'सिंधु सभ्यता' (Indus Valley) का बंदरगाह?", "options": ["लोथल (Lothal)", "हड़प्पा (Harappa)", "रोपड़ (Ropar)"], "correct": 0 },
    { "subject": "History", "lang": "hi-en", "question": "2. 'गौतम बुद्ध' (Gautam Buddha) का जन्म?", "options": ["लुम्बिनी (Lumbini)", "सारनाथ (Sarnath)", "बोधगया (Bodh Gaya)"], "correct": 0 },
    { "subject": "History", "lang": "hi-en", "question": "3. 'समुद्रगुप्त' (Samudragupta) को क्या कहा गया?", "options": ["भारत का नेपोलियन (Napoleon of India)", "अकबर", "अशोक"], "correct": 0 },
    { "subject": "History", "lang": "hi-en", "question": "4. 'पानीपत' (Panipat) का प्रथम युद्ध?", "options": ["1526", "1556", "1761"], "correct": 0 },
    { "subject": "History", "lang": "hi-en", "question": "5. 'ताजमहल' (Taj Mahal) किसने बनवाया?", "options": ["शाहजहाँ (Shah Jahan)", "अकबर", "बाबर"], "correct": 0 },
    { "subject": "History", "lang": "hi-en", "question": "6. '1857' की क्रांति का नेतृत्व?", "options": ["मंगल पांडे (Mangal Pandey)", "गांधीजी", "नेहरू"], "correct": 0 },
    { "subject": "History", "lang": "hi-en", "question": "7. 'स्वराज' (Swaraj) मेरा जन्मसिद्ध अधिकार?", "options": ["तिलक (Tilak)", "गोखले", "गांधी"], "correct": 0 },
    { "subject": "History", "lang": "hi-en", "question": "8. 'गांधीजी' (Gandhi) का जन्म कब हुआ?", "options": ["1869", "1857", "1900"], "correct": 0 },
    { "subject": "History", "lang": "hi-en", "question": "9. 'संविधान' (Constitution) कब लागू हुआ?", "options": ["1950", "1947", "1949"], "correct": 0 },
    { "subject": "History", "lang": "hi-en", "question": "10. 'असहयोग' (Non-Cooperation) आंदोलन?", "options": ["1920", "1930", "1942"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi-en", "question": "1. 'संविधान सभा' (Constituent Assembly) के अध्यक्ष?", "options": ["डॉ. राजेन्द्र प्रसाद (Dr. Rajendra Prasad)", "अम्बेडकर", "नेहरू"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi-en", "question": "2. 'मौलिक अधिकार' (Fundamental Rights) कहां से लिए?", "options": ["अमेरिका (USA)", "ब्रिटेन", "रूस"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi-en", "question": "3. 'समानता का अधिकार' (Right to Equality)?", "options": ["अनुच्छेद 14-18 (Art 14-18)", "अनुच्छेद 19", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi-en", "question": "4. 'धन विधेयक' (Money Bill)?", "options": ["लोकसभा (Lok Sabha)", "राज्यसभा", "राष्ट्रपति"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi-en", "question": "5. 'राष्ट्रपति' (President) का कार्यकाल?", "options": ["5 वर्ष (5 Years)", "6 वर्ष", "4 वर्ष"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi-en", "question": "6. 'न्यायिक पुनरावलोकन' (Judicial Review)?", "options": ["अमेरिका (USA)", "ब्रिटेन", "फ्रांस"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi-en", "question": "7. 'पंचायती राज' (Panchayati Raj)?", "options": ["73वां संशोधन (73rd Amendment)", "42वां", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi-en", "question": "8. 'अनुच्छेद 370' (Art 370) किससे संबंधित?", "options": ["जम्मू-कश्मीर (J&K)", "पंजाब", "यूपी"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi-en", "question": "9. 'मुख्य चुनाव आयुक्त' (Chief Election Commissioner)?", "options": ["राष्ट्रपति द्वारा नियुक्त", "जनता द्वारा", "कोई नहीं"], "correct": 0 },
    { "subject": "Political Science", "lang": "hi-en", "question": "10. 'सर्वोच्च न्यायालय' (Supreme Court) के जज की आयु?", "options": ["65 वर्ष (65 Years)", "60 वर्ष", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi-en", "question": "1. 'सौरमंडल' (Solar System) का सबसे गर्म ग्रह?", "options": ["शुक्र (Venus)", "बुध", "मंगल"], "correct": 0 },
    { "subject": "Geography", "lang": "hi-en", "question": "2. 'पृथ्वी' (Earth) का औसत तापमान?", "options": ["15°C", "0°C", "50°C"], "correct": 0 },
    { "subject": "Geography", "lang": "hi-en", "question": "3. 'भारत' (India) की मानक समय रेखा?", "options": ["82.5°E", "80°E", "90°E"], "correct": 0 },
    { "subject": "Geography", "lang": "hi-en", "question": "4. 'विश्व' (World) की छत?", "options": ["पामीर का पठार (Pamir Plateau)", "हिमालय", "एवरेस्ट"], "correct": 0 },
    { "subject": "Geography", "lang": "hi-en", "question": "5. 'नर्मदा' (Narmada) नदी कहां गिरती है?", "options": ["अरब सागर (Arabian Sea)", "बंगाल की खाड़ी", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi-en", "question": "6. 'वायुमंडल' (Atmosphere) में नाइट्रोजन?", "options": ["78%", "21%", "0.03%"], "correct": 0 },
    { "subject": "Geography", "lang": "hi-en", "question": "7. 'ज्वालामुखी' (Volcano) से निकलने वाली गैस?", "options": ["जलवाष्प (Water Vapor)", "ऑक्सीजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Geography", "lang": "hi-en", "question": "8. 'भारत' का सबसे बड़ा राज्य?", "options": ["राजस्थान (Rajasthan)", "यूपी", "एमपी"], "correct": 0 },
    { "subject": "Geography", "lang": "hi-en", "question": "9. 'प्रवाल भित्ति' (Coral Reef) कहां है?", "options": ["लक्षद्वीप (Lakshadweep)", "दिल्ली", "पंजाब"], "correct": 0 },
    { "subject": "Geography", "lang": "hi-en", "question": "10. 'अमेज़न' (Amazon) जंगल?", "options": ["ब्राजील (Brazil)", "भारत", "रूस"], "correct": 0 },
    { "subject": "Economics", "lang": "hi-en", "question": "1. 'GDP' (सकल घरेलू उत्पाद) का पूर्ण रूप?", "options": ["Gross Domestic Product", "General Data Product", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi-en", "question": "2. 'मुद्रा' (Currency) जारी करता है?", "options": ["RBI", "SBI", "सरकार"], "correct": 0 },
    { "subject": "Economics", "lang": "hi-en", "question": "3. 'अर्थशास्त्र' (Economics) के जनक?", "options": ["एडम स्मिथ (Adam Smith)", "मार्क्स", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi", "question": "4. 'गरीबी' (Poverty) का मापन?", "options": ["उपभोग व्यय (Consumption Expenditure)", "कमाई", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi-en", "question": "5. 'GST' (जीएसटी) किस प्रकार का कर है?", "options": ["अप्रत्यक्ष (Indirect Tax)", "प्रत्यक्ष", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi-en", "question": "6. 'बजट' (Budget) शब्द का अर्थ?", "options": ["चमड़े का थैला (Leather bag)", "धन", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi-en", "question": "7. 'नवरत्न' (Navratna) का संबंध?", "options": ["सार्वजनिक कंपनियां (PSUs)", "फिल्म", "कोई नहीं"], "correct": 0 },
    { "subject": "Economics", "lang": "hi-en", "question": "8. 'नीति आयोग' (NITI Aayog) के अध्यक्ष?", "options": ["प्रधानमंत्री (PM)", "वित्त मंत्री", "राष्ट्रपति"], "correct": 0 },
    { "subject": "Economics", "lang": "hi-en", "question": "9. 'बैंक' (Bank) का राष्ट्रीयकरण कब हुआ?", "options": ["1969", "1947", "1991"], "correct": 0 },
    { "subject": "Economics", "lang": "hi-en", "question": "10. 'खुली अर्थव्यवस्था' (Open Economy)?", "options": ["मुक्त व्यापार (Free Trade)", "बंद", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi-en", "question": "1. 'समाज' (Society) का अध्ययन?", "options": ["समाजशास्त्र (Sociology)", "इतिहास", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi-en", "question": "2. 'संस्कृति' (Culture)?", "options": ["सीखा हुआ व्यवहार (Learned Behavior)", "जन्मजात", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi-en", "question": "3. 'संयुक्त परिवार' (Joint Family) का लाभ?", "options": ["सुरक्षा (Security)", "अकेलापन", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi-en", "question": "4. 'वर्ग' (Class) की अवधारणा?", "options": ["कार्ल मार्क्स (Karl Marx)", "गांधी", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi-en", "question": "5. 'सामाजीकरण' (Socialization) कहां से शुरू?", "options": ["परिवार (Family)", "स्कूल", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi-en", "question": "6. 'प्रस्थिति' (Status) क्या है?", "options": ["सामाजिक पद (Social Position)", "काम", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi-en", "question": "7. 'नगरीकरण' (Urbanization) का कारण?", "options": ["औद्योगीकरण (Industrialization)", "खेती", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi-en", "question": "8. 'जाति' (Caste) क्या है?", "options": ["जन्म आधारित (Birth-based)", "काम आधारित", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi-en", "question": "9. 'धर्म' (Religion) क्या है?", "options": ["आस्था (Faith)", "विज्ञान", "कोई नहीं"], "correct": 0 },
    { "subject": "Sociology", "lang": "hi-en", "question": "10. 'विचलन' (Deviance) क्या है?", "options": ["नियम तोड़ना (Breaking norms)", "पालन", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi-en", "question": "1. 'मनोविज्ञान' (Psychology) का अर्थ?", "options": ["व्यवहार का विज्ञान (Science of Behavior)", "आत्मा", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi-en", "question": "2. 'बुद्धि' (Intelligence) मापने का सूत्र?", "options": ["IQ = MA/CA * 100", "IQ = CA/MA", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi-en", "question": "3. 'चेतना' (Consciousness)?", "options": ["जागरूकता (Awareness)", "नींद", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi-en", "question": "4. 'व्यक्तित्व' (Personality) के कारक?", "options": ["वंशानुक्रम और वातावरण (Heredity/Environment)", "सिर्फ खाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi-en", "question": "5. 'भूलना' (Forgetting) का कारण?", "options": ["दमन/व्यतिकरण (Repression/Interference)", "तेजी", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi-en", "question": "6. 'प्रेरणा' (Motivation) का चक्र?", "options": ["आवश्यकता (Need)", "मौज", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi-en", "question": "7. 'संवेग' (Emotion) क्या है?", "options": ["भावना (Feeling)", "तर्क", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi-en", "question": "8. 'तनाव' (Stress) के लक्षण?", "options": ["चिंता (Anxiety)", "खुशी", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi-en", "question": "9. 'सीखना' (Learning) क्या है?", "options": ["व्यवहार में परिवर्तन (Behavior Change)", "जन्म", "कोई नहीं"], "correct": 0 },
    { "subject": "Psychology", "lang": "hi-en", "question": "10. 'मनोविश्लेषण' (Psychoanalysis)?", "options": ["फ्रायड (Sigmund Freud)", "वाटसन", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi-en", "question": "1. 'संतुलित आहार' (Balanced Diet)?", "options": ["सभी पोषक तत्व (All Nutrients)", "सिर्फ रोटी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi-en", "question": "2. 'विटामिन सी' (Vitamin C)?", "options": ["खट्टे फल (Citrus Fruits)", "दूध", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi-en", "question": "3. 'सिलाई' (Sewing) का उपयोग?", "options": ["वस्त्र निर्माण (Garment making)", "खाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi-en", "question": "4. 'बजट' (Budget) प्रबंधन?", "options": ["व्यय नियंत्रण (Expense Control)", "बर्बादी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi-en", "question": "5. 'बाल विकास' (Child Development)?", "options": ["शारीरिक/मानसिक (Physical/Mental)", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi-en", "question": "6. 'खाद्य संरक्षण' (Food Preservation)?", "options": ["सुरक्षा (Protection)", "सड़ाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi-en", "question": "7. 'कपड़ा धुलाई' (Laundry)?", "options": ["सफाई (Cleaning)", "गंदगी", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi-en", "question": "8. 'समय प्रबंधन' (Time Management)?", "options": ["कार्यक्षमता (Efficiency)", "आलस", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi-en", "question": "9. 'रसोई' (Kitchen) का प्रकार?", "options": ["मॉड्यूलर (Modular)", "गंदा", "कोई नहीं"], "correct": 0 },
    { "subject": "Home Science", "lang": "hi-en", "question": "10. 'प्रोटीन' (Protein) का स्रोत?", "options": ["दालें/दूध (Pulses/Milk)", "चीनी", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi-en", "question": "1. 'FIR' का अर्थ?", "options": ["प्रथम सूचना रिपोर्ट (First Info Report)", "अंतिम", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi-en", "question": "2. 'दीवानी' (Civil) मामला?", "options": ["संपत्ति/करार (Property/Contract)", "अपराध", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi-en", "question": "3. 'फौजदारी' (Criminal) मामला?", "options": ["अपराध/चोरी (Crime/Theft)", "संपत्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi-en", "question": "4. 'न्यायपालिका' (Judiciary)?", "options": ["कानून की व्याख्या (Interpret Law)", "बनाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi-en", "question": "5. 'संविधान' (Constitution)?", "options": ["सर्वोच्च कानून (Supreme Law)", "किताब", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi-en", "question": "6. 'वसीयत' (Will)?", "options": ["संपत्ति हस्तांतरण (Property Transfer)", "चोरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi-en", "question": "7. 'जमानत' (Bail)?", "options": ["अस्थायी रिहाई (Temporary Release)", "सजा", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi-en", "question": "8. 'वकील' (Lawyer) का काम?", "options": ["कानूनी प्रतिनिधित्व (Legal Representation)", "दलाली", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi-en", "question": "9. 'जनहित याचिका' (PIL)?", "options": ["सार्वजनिक हित (Public Interest)", "स्वार्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Legal Studies", "lang": "hi-en", "question": "10. 'कानून' (Law)?", "options": ["नियमों का ढांचा (Framework of Rules)", "मर्जी", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi-en", "question": "1. 'रामचरितमानस' (Ramcharitmanas) के रचयिता?", "options": ["तुलसीदास (Tulsidas)", "कबीर", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi-en", "question": "2. 'गोदान' (Godaan) के लेखक?", "options": ["प्रेमचंद (Premchand)", "निराला", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi-en", "question": "3. 'कामायनी' (Kamayani)?", "options": ["प्रसाद (Prasad)", "दिनकर", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi-en", "question": "4. 'कबीर' (Kabir) की भाषा?", "options": ["सधुक्कड़ी (Sadhukkari)", "अंग्रेजी", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi-en", "question": "5. 'मीराबाई' (Mirabai) की भक्ति?", "options": ["कृष्ण भक्ति (Krishna Bhakti)", "राम", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi-en", "question": "6. 'निराला' (Nirala) का युग?", "options": ["छायावाद (Chhayavad)", "भक्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi-en", "question": "7. 'महादेवी' (Mahadevi) का उपनाम?", "options": ["आधुनिक मीरा (Modern Mirabai)", "कबीर", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi-en", "question": "8. 'दिनकर' (Dinkar) प्रसिद्ध थे?", "options": ["ओजस्वी कविता (Ojasvi Poetry)", "हास्य", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi-en", "question": "9. 'भारतेन्दु' (Bharatendu) क्या हैं?", "options": ["आधुनिक हिंदी के पिता (Father of Modern Hindi)", "भक्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Hindi Literature", lang: "hi-en", "question": "10. 'अज्ञेय' (Agyeya) का संबंध?", "options": ["प्रयोगवाद (Prayogvad)", "भक्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi-en", "question": "1. 'Shakespeare' (शेक्सपियर) प्रसिद्ध हैं?", "options": ["नाटक (Drama)", "विज्ञान", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi-en", "question": "2. 'Wordsworth' (वर्ड्सवर्थ)?", "options": ["प्रकृति प्रेमी (Nature Poet)", "वैज्ञानिक", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi-en", "question": "3. 'Eliot' (इलियट) का युग?", "options": ["आधुनिक (Modern)", "प्राचीन", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi-en", "question": "4. 'Keats' (कीट्स) क्या थे?", "options": ["रोमांटिक कवि (Romantic Poet)", "गद्य", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi-en", "question": "5. 'Dickens' (डिकेंस)?", "options": ["उपन्यासकार (Novelist)", "नाटक", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi-en", "question": "6. 'Hardy' (हार्डी)?", "options": ["उपन्यासकार (Novelist)", "कविता", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi-en", "question": "7. 'Austen' (ऑस्टेन)?", "options": ["उपन्यासकार (Novelist)", "विज्ञान", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi-en", "question": "8. 'Milton' (मिल्टन) की प्रसिद्ध कृति?", "options": ["पैराडाइज लॉस्ट (Paradise Lost)", "गाना", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi-en", "question": "9. 'Shelley' (शेली)?", "options": ["क्रांतिकारी (Revolutionary)", "शांति", "कोई नहीं"], "correct": 0 },
    { "subject": "English Literature", lang: "hi-en", "question": "10. 'Byron' (बायरन)?", "options": ["रोमांटिक (Romantic)", "आधुनिक", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi-en", "question": "1. 'खाता' (Account)?", "options": ["लेखा (Record)", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi-en", "question": "2. 'लेखांकन' (Accounting)?", "options": ["वित्तीय सूचना (Financial Info)", "जुगाड़", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi-en", "question": "3. 'उधार' (Credit)?", "options": ["दायित्व (Liability)", "संपत्ति", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi-en", "question": "4. 'अंतिम खाता' (Final Accounts)?", "options": ["लाभ-हानि (Profit-Loss)", "रिकॉर्ड", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi-en", "question": "5. 'पूंजी' (Capital)?", "options": ["निवेश (Investment)", "उधार", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi-en", "question": "6. 'ह्रास' (Depreciation)?", "options": ["मूल्य कमी (Value Reduction)", "वृद्धि", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi-en", "question": "7. 'बिक्री' (Sales)?", "options": ["आय (Revenue)", "व्यय", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi-en", "question": "8. 'खरीद' (Purchase)?", "options": ["व्यय (Expense)", "आय", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi-en", "question": "9. 'लेखापरीक्षा' (Auditing)?", "options": ["जांच (Examination)", "लिखना", "कोई नहीं"], "correct": 0 },
    { "subject": "Accountancy", lang: "hi-en", "question": "10. 'वित्तीय वर्ष' (Financial Year)?", "options": ["1 अप्रैल-31 मार्च", "जनवरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi-en", "question": "1. 'संगठन' (Organization)?", "options": ["ढांचा (Structure)", "मौज", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi-en", "question": "2. 'भर्ती' (Recruitment)?", "options": ["नियुक्ति (Hiring)", "हटाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi-en", "question": "3. 'प्रशिक्षण' (Training)?", "options": ["कौशल विकास (Skill Development)", "काम", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi-en", "question": "4. 'नेतृत्व' (Leadership)?", "options": ["मार्गदर्शन (Guidance)", "कब्जा", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi-en", "question": "5. 'प्रेरणा' (Motivation)?", "options": ["इच्छाशक्ति (Willpower)", "दबाव", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi-en", "question": "6. 'विज्ञापन' (Advertising)?", "options": ["बिक्री/प्रचार (Sales/Promo)", "कम", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi-en", "question": "7. 'वित्तीय योजना' (Financial Plan)?", "options": ["जरूरत (Need)", "बचत", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi-en", "question": "8. 'बाजार' (Market)?", "options": ["खरीद-बिक्री (Exchange)", "घर", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi-en", "question": "9. 'उपभोक्ता अधिकार' (Consumer Rights)?", "options": ["सुरक्षा (Protection)", "शोषण", "कोई नहीं"], "correct": 0 },
    { "subject": "Business Studies", lang: "hi-en", "question": "10. 'व्यवसाय' (Business)?", "options": ["लाभ (Profit)", "सेवा", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi-en", "question": "1. 'नवाचार' (Innovation)?", "options": ["नया विचार (New Idea)", "पुराना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi-en", "question": "2. 'जोखिम' (Risk)?", "options": ["अनिश्चितता (Uncertainty)", "निश्चित", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi-en", "question": "3. 'उद्यमी' (Entrepreneur)?", "options": ["निर्माता (Creator)", "नौकरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi-en", "question": "4. 'पूंजी' (Capital)?", "options": ["व्यवसाय धन (Business Money)", "खर्च", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi-en", "question": "5. 'लक्ष्य' (Goal)?", "options": ["उद्देश्य (Objective)", "अस्पष्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi-en", "question": "6. 'बाजार' (Market)?", "options": ["अवसर (Opportunity)", "बाधा", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi-en", "question": "7. 'विकास' (Development)?", "options": ["वृद्धि (Growth)", "पतन", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi-en", "question": "8. 'तकनीक' (Technology)?", "options": ["आधुनिक (Modern)", "पुराना", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi-en", "question": "9. 'योजना' (Planning)?", "options": ["रूपरेखा (Blueprint)", "अचानक", "कोई नहीं"], "correct": 0 },
    { "subject": "Entrepreneurship", lang: "hi-en", "question": "10. 'सफलता' (Success)?", "options": ["लक्ष्य प्राप्ति (Goal Achievement)", "हार", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi-en", "question": "1. 'ध्वनि' (Sound)?", "options": ["तरंग (Wave)", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi-en", "question": "2. 'चुंबक' (Magnet)?", "options": ["आकर्षण (Attraction)", "दूर", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi-en", "question": "3. 'घर्षण' (Friction)?", "options": ["अवरोध (Resistance)", "सहायक", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi-en", "question": "4. 'भार' (Weight)?", "options": ["गुरुत्वाकर्षण (Gravity)", "द्रव्यमान", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi-en", "question": "5. 'दाब' (Pressure)?", "options": ["बल/क्षेत्रफल (Force/Area)", "दूरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi-en", "question": "6. 'उत्तोलक' (Lever)?", "options": ["मशीन (Machine)", "औजार", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi-en", "question": "7. 'ताप' (Temperature)?", "options": ["ऊर्जा का माप (Measure of Energy)", "दूरी", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi-en", "question": "8. 'अपवर्तन' (Refraction)?", "options": ["प्रकाश मुड़ना (Bending of light)", "सीधा", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi-en", "question": "9. 'दर्पण' (Mirror)?", "options": ["प्रतिबिंब (Reflection)", "अंधेरा", "कोई नहीं"], "correct": 0 },
    { "subject": "Physics", lang: "hi-en", "question": "10. 'परमाणु' (Atom)?", "options": ["सूक्ष्म (Micro)", "विशाल", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi-en", "question": "1. 'कार्बन' (Carbon)?", "options": ["जीवन आधार (Life basis)", "धातु", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi-en", "question": "2. 'ऑक्सीजन' (Oxygen)?", "options": ["दहन (Combustion)", "बुझाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi-en", "question": "3. 'धातु' (Metal)?", "options": ["चालक (Conductor)", "कुचालक", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi-en", "question": "4. 'अधातु' (Non-metal)?", "options": ["कुचालक (Insulator)", "चालक", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi-en", "question": "5. 'मिश्रण' (Mixture)?", "options": ["अनिश्चित (Unfixed)", "निश्चित", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi-en", "question": "6. 'यौगिक' (Compound)?", "options": ["निश्चित (Fixed)", "अनिश्चित", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi-en", "question": "7. 'विद्युत अपघटन' (Electrolysis)?", "options": ["वियोजन (Decomposition)", "जोड़ना", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi-en", "question": "8. 'ईंधन' (Fuel)?", "options": ["ऊर्जा (Energy)", "बेकार", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi-en", "question": "9. 'प्लास्टिक' (Plastic)?", "options": ["बहुलक (Polymer)", "धातु", "कोई नहीं"], "correct": 0 },
    { "subject": "Chemistry", lang: "hi-en", "question": "10. 'साबुन' (Soap)?", "options": ["सफाई (Cleaning)", "दाग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi-en", "question": "1. 'कंकाल' (Skeleton)?", "options": ["ढांचा (Framework)", "मांस", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi-en", "question": "2. 'मांसपेशी' (Muscle)?", "options": ["गति (Movement)", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi-en", "question": "3. 'पाचन' (Digestion)?", "options": ["ऊर्जा (Energy)", "अपशिष्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi-en", "question": "4. 'रक्त' (Blood)?", "options": ["परिवहन (Transport)", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi-en", "question": "5. 'प्रजनन' (Reproduction)?", "options": ["वंश (Progeny)", "अंत", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi-en", "question": "6. 'हार्मोन' (Hormone)?", "options": ["संदेशवाहक (Messenger)", "भोजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi-en", "question": "7. 'विषाणु' (Virus)?", "options": ["जीव-निर्जीव (Living-Nonliving)", "पौधा", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi-en", "question": "8. 'जीवाणु' (Bacteria)?", "options": ["एककोशिकीय (Unicellular)", "बहु", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi-en", "question": "9. 'इकोसिस्टम' (Ecosystem)?", "options": ["जीव-पर्यावरण (Bio-Env)", "अलग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biology", lang: "hi-en", "question": "10. 'जैव विविधता' (Biodiversity)?", "options": ["विभिन्नता (Variety)", "एकता", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi-en", "question": "1. 'जीन थेरेपी' (Gene Therapy)?", "options": ["उपचार (Treatment)", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi-en", "question": "2. 'फर्मेंटेशन' (Fermentation)?", "options": ["सूक्ष्मजीव (Microbes)", "ठोस", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi-en", "question": "3. 'टीका' (Vaccine)?", "options": ["सुरक्षा (Protection)", "रोग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi-en", "question": "4. 'बायो-सेंसर' (Biosensor)?", "options": ["जांच (Testing)", "शोर", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi-en", "question": "5. 'जीनोम' (Genome)?", "options": ["डीएनए (DNA)", "भोजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi-en", "question": "6. 'एंजाइम' (Enzyme)?", "options": ["उत्प्रेरक (Catalyst)", "ईंधन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi-en", "question": "7. 'क्लोन' (Clone)?", "options": ["समान (Identical)", "अलग", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi-en", "question": "8. 'प्रोटीन इंजीनियरिंग' (Protein Eng)?", "options": ["बदलाव (Modification)", "भोजन", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi-en", "question": "9. 'बायोरिएक्टर' (Bioreactor)?", "options": ["उत्पादन (Production)", "आराम", "कोई नहीं"], "correct": 0 },
    { "subject": "Biotechnology", lang: "hi-en", "question": "10. 'बायोहैज़र्ड' (Biohazard)?", "options": ["जोखिम (Risk)", "सुरक्षा", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi-en", "question": "1. 'बहुपद' (Polynomial)?", "options": ["बीजगणित (Algebra)", "अंक", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi-en", "question": "2. 'अवकलन' (Differentiation)?", "options": ["परिवर्तन (Change)", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi-en", "question": "3. 'समाकलन' (Integration)?", "options": ["योग (Summation)", "तोड़ना", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi-en", "question": "4. 'सदिश' (Vector)?", "options": ["दिशा (Direction)", "अदिश", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi-en", "question": "5. 'अदिश' (Scalar)?", "options": ["परिमाण (Magnitude)", "दिशा", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi-en", "question": "6. 'फलन' (Function)?", "options": ["संबंध (Relation)", "भेद", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi-en", "question": "7. 'सीमा' (Limit)?", "options": ["नजदीकी (Closeness)", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi-en", "question": "8. 'ज्यामिति' (Geometry)?", "options": ["आकार (Shape)", "नंबर", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi-en", "question": "9. 'क्रमचय' (Permutation)?", "options": ["व्यवस्था (Arrangement)", "चयन", "कोई नहीं"], "correct": 0 },
    { "subject": "Maths", lang: "hi-en", "question": "10. 'संचय' (Combination)?", "options": ["चयन (Selection)", "क्रम", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi-en", "question": "1. 'पूर्वानुमान' (Forecasting)?", "options": ["भविष्य (Future)", "अतीत", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi-en", "question": "2. 'नेटवर्क' (Network)?", "options": ["प्रोजेक्ट (Project)", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi-en", "question": "3. 'इन्वेंटरी' (Inventory)?", "options": ["स्टॉक (Stock)", "बिक्री", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi-en", "question": "4. 'अनुक्रम' (Sequence)?", "options": ["सीरीज (Series)", "अस्त-व्यस्त", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi-en", "question": "5. 'लाभ-हानि' (Profit-Loss)?", "options": ["अंक (Digits)", "बीज", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi-en", "question": "6. 'ब्याज' (Interest)?", "options": ["पूंजी मूल्य (Capital cost)", "खर्च", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi-en", "question": "7. 'चक्रवृद्धि' (Compound)?", "options": ["ब्याज पर (Interest on interest)", "सरल", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi-en", "question": "8. 'ग्राफ' (Graph)?", "options": ["डेटा (Data)", "टेक्स्ट", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi-en", "question": "9. 'सांख्यिकी' (Statistics)?", "options": ["औसत (Average)", "कहानी", "कोई नहीं"], "correct": 0 },
    { "subject": "Applied Maths", lang: "hi-en", "question": "10. 'प्रोग्रामिंग' (Programming)?", "options": ["अनुकूलन (Optimization)", "अस्त-व्यस्त", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi-en", "question": "1. 'सॉफ्टवेयर' (Software)?", "options": ["प्रोग्राम (Program)", "मशीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi-en", "question": "2. 'हार्डवेयर' (Hardware)?", "options": ["उपकरण (Equipment)", "प्रोग्राम", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi-en", "question": "3. 'इंटरनेट' (Internet)?", "options": ["नेटवर्क (Network)", "मशीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi-en", "question": "4. 'वेबसाइट' (Website)?", "options": ["पेज (Page)", "मशीन", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi-en", "question": "5. 'ईमेल' (Email)?", "options": ["डाक (Post)", "पत्र", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi-en", "question": "6. 'प्रोग्रामिंग' (Programming)?", "options": ["कोडिंग (Coding)", "बोलना", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi-en", "question": "7. 'डेटाबेस' (Database)?", "options": ["संग्रह (Collection)", "गाना", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi-en", "question": "8. 'बाइनरी' (Binary)?", "options": ["0-1", "0-9", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi-en", "question": "9. 'सर्वर' (Server)?", "options": ["सेवा (Service)", "क्लाइंट", "कोई नहीं"], "correct": 0 },
    { "subject": "Computer Science", lang: "hi-en", "question": "10. 'क्लाउड' (Cloud)?", "options": ["स्टोरेज (Storage)", "डिस्क", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi-en", "question": "1. 'तर्क' (Logic)?", "options": ["सोचना (Reasoning)", "खेल", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi-en", "question": "2. 'मानवतावाद' (Humanism)?", "options": ["कल्याण (Welfare)", "स्वार्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi-en", "question": "3. 'यथार्थवाद' (Realism)?", "options": ["वास्तविकता (Reality)", "कल्पना", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi-en", "question": "4. 'आदर्शवाद' (Idealism)?", "options": ["विचार (Thought)", "पदार्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi-en", "question": "5. 'चेतना' (Consciousness)?", "options": ["अनुभूति (Experience)", "स्थिर", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi-en", "question": "6. 'मुक्ति' (Liberation)?", "options": ["बंधन रहित (Freedom)", "कैद", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi-en", "question": "7. 'धर्म' (Religion)?", "options": ["कर्तव्य (Duty)", "अंधविश्वास", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi-en", "question": "8. 'नैतिकता' (Ethics)?", "options": ["सही-गलत (Right-Wrong)", "स्वार्थ", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi-en", "question": "9. 'ज्ञान' (Knowledge)?", "options": ["समझ (Understanding)", "अज्ञान", "कोई नहीं"], "correct": 0 },
    { "subject": "Philosophy", lang: "hi-en", "question": "10. 'सत्य' (Truth)?", "options": ["शाश्वत (Eternal)", "झूठ", "कोई नहीं"], "correct": 0 }
   ]:


















