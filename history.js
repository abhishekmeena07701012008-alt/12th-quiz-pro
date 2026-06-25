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
{ subject: "computer_science", lang: "en", question: "The linear Queue data structure elements are processed according to which standard operational sequencing principle?", options: ["First-In, First-Out (FIFO)", "Last-In, First-Out (LIFO)", "Random Searching paths", "Priority Base Processing configurations"], correct: 0 }
]:
