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
  { subject: "computer_science", lang: "en", question: "What is the extension of a Python file?", options: [".py", ".pyc", ".python", ".txt"], correct: 0 }
];
