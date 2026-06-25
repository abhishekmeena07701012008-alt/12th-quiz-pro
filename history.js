const subjectQuizData = {
    // ---- हिंदी माध्यम (कम से कम 400 प्रश्न) ----
    hi: [
        {
            question: "इतिहास (प्रश्न 1): हड़प्पा सभ्यता की खोज किस वर्ष में की गई थी?",
            options: ["1921 में", "1922 में", "1935 में", "1947 में"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 2): प्रभावती गुप्त किस गुप्त शासक की पुत्री थी?",
            options: ["चंद्रगुप्त प्रथम", "चंद्रगुप्त द्वितीय", "समुद्रगुप्त", "स्कंदगुप्त"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 3): महापरिनिर्वाण का संबंध बुद्ध के जीवन की किस घटना से है?",
            options: ["जन्म", "ज्ञान प्राप्ति", "प्रथम उपदेश", "मृत्यु"],
            correct: 3
        },
        {
            question: "इतिहास (प्रश्न 4): 'यात्रियों का राजकुमार' किसे कहा जाता है?",
            options: ["इब्न बतूता", "ह्वेन सांग", "अल-बिरूनी", "मार्को पोलो"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 5): विजयनगर साम्राज्य की स्थापना किस वर्ष हुई थी?",
            options: ["1336", "1356", "1420", "1526"],
            correct: 0
        }
        // इसी प्रकार नीचे कॉमा (,) लगा-लगाकर प्रश्न संख्या 6 से लेकर पूरे 400 प्रश्न जोड़ें...
    ],

    // ---- इंग्लिश माध्यम (कम से कम 400 प्रश्न) ----
    en: [
        {
            question: "History (Q1): In which year was the Harappan civilization discovered?",
            options: ["1921", "1922", "1935", "1947"],
            correct: 0
        },
        {
            question: "History (Q2): Prabhavati Gupta was the daughter of which Gupta ruler?",
            options: ["Chandragupta I", "Chandragupta II", "Samudragupta", "Skandagupta"],
            correct: 1
        },
        {
            question: "History (Q3): Mahaparinirvana is associated with which event of Buddha's life?",
            options: ["Birth", "Enlightenment", "First Sermon", "Death"],
            correct: 3
        },
        {
            question: "History (Q4): Who is known as the 'Prince of Pilgrims'?",
            options: ["Ibn Battuta", "Hiuen Tsang", "Al-Biruni", "Marco Polo"],
            correct: 1
        },
        {
            question: "History (Q5): In which year was the Vijayanagara Empire established?",
            options: ["1336", "1356", "1420", "1526"],
            correct: 0
        // इतिहास की फाइल में 'hi' और 'en' के अंदर ही इन्हें आगे बढ़ाते जाएं:

        // ---- हिंदी माध्यम (कठिन प्रश्न) ----
        {
            question: "इतिहास (प्रश्न 6): निम्नलिखित में से किस हड़प्पाई स्थल से 'नहरों के अवशेष' प्राप्त हुए हैं, जो यह दर्शाते हैं कि कृषि के लिए सिंचाई की जाती थी?",
            options: ["शोरतुघई (अफगानिस्तान)", "धौलावीरा (गुजरात)", "कालीबंगा (राजस्थान)", "बनवाली (हरियाणा)"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 7): जेम्स प्रिंसेप द्वारा ब्राह्मी और खरोष्ठी लिपियों को पढ़ने में सफलता किस वर्ष प्राप्त की गई थी, जिसने भारतीय अभिलेख विज्ञान को एक नई दिशा दी?",
            options: ["1815", "1825", "1838", "1857"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 8): 'महानवमी डिब्बा' और 'सभामंडप' को संयुक्त रूप से 'विजय का भवन' किसने कहा था?",
            options: ["अब्दुर रज्जाक", "डोमिंगो पेस", "फर्नआओ नुनीज", "मार्को पोलो"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 9): इब्न बतूता ने भारत की डाक व्यवस्था का विस्तृत विवरण दिया है। उसके अनुसार, अश्व डाक व्यवस्था को क्या कहा जाता था?",
            options: ["उलुक", "दावा", "बरिद", "पायक"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 10): आरबीएसई पाठ्यपुस्तक के अनुसार, किस मौर्य शासक ने जैन परंपरा के तहत 'सल्लेखना व्रत' (उपवास द्वारा प्राण त्यागना) अपनाकर शरीर त्यागा था?",
            options: ["चंद्रगुप्त मौर्य", "बिन्दुसार", "अशोक", "दशरथ"],
            correct: 0
        },


        // ---- इंग्लिश माध्यम (Hard Questions) ----
        {
            question: "History (Q6): From which of the following Harappan sites have traces of canals been found, indicating artificial irrigation for agriculture?",
            options: ["Shortughai (Afghanistan)", "Dholavira (Gujarat)", "Kalibangan (Rajasthan)", "Banawali (Haryana)"],
            correct: 0
        },
        {
            question: "History (Q7): In which year did James Prinsep successfully decipher the Brahmi and Kharosthi scripts, giving a new direction to Indian epigraphy?",
            options: ["1815", "1825", "1838", "1857"],
            correct: 2
        },
        {
            question: "History (Q8): Who collectively termed the 'Mahanavami Dibba' and the 'Audience Hall' as the 'House of Victory'?",
            options: ["Abdur Razzak", "Domingo Paes", "Fernao Nuniz", "Marco Polo"],
            correct: 1
        },
        {
            question: "History (Q9): Ibn Battuta described the Indian postal system in detail. According to him, what was the horse-post system called?",
            options: ["Uluq", "Dawa", "Barid", "Payak"],
            correct: 0
        },
        {
            question: "History (Q10): According to the RBSE textbook, which Mauryan ruler renounced his body by following the Jain tradition of 'Santhara/Sallekhana'?",
            options: ["Chandragupta Maurya", "Bindusara", "Ashoka", "Dasharatha"],
            correct: 0
        },       // इन्हें अपने 'hi' एरे (Array) के अंदर पेस्ट करें:
        {
            question: "इतिहास (प्रश्न 11): सिंधु घाटी सभ्यता का वह एकमात्र शहर कौन सा है जो तीन भागों (दुर्ग, मध्यम नगर और निचला नगर) में विभाजित था?",
            options: ["धौलावीरा", "लोथल", "कालीबंगा", "चन्हुदड़ो"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 12): हड़प्पा सभ्यता में 'मेसोपोटामिया के लेखों' में वर्णित 'मेलुहा' शब्द संभवतः किस क्षेत्र के लिए प्रयुक्त किया गया था?",
            options: ["ओमान", "बहरीन", "सिंधु क्षेत्र", "मिस्र"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 13): ब्राह्मी लिपि के संदर्भ में निम्नलिखित में से कौन सा कथन सत्य है?",
            options: ["यह दाईं से बाईं ओर लिखी जाती थी", "यह बाईं से दाईं ओर लिखी जाती थी", "इसे केवल अशोक ने आविष्कृत किया था", "यह केवल खरोष्ठी का सुधरा हुआ रूप है"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 14): किस गुप्त शासक के शासनकाल के दौरान प्रसिद्ध चीनी यात्री फाह्यान ने भारत की यात्रा की थी?",
            options: ["चंद्रगुप्त प्रथम", "समुद्रगुप्त", "चंद्रगुप्त द्वितीय", "स्कंदगुप्त"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 15): प्रयाग प्रशस्ति (इलाहाबाद स्तंभ अभिलेख) की रचना हरिषेण ने किस भाषा में की थी?",
            options: ["प्राकृत", "पालि", "संस्कृत", "अपभ्रंश"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 16): सुदर्शन झील का जीर्णोद्धार कराने वाले प्रसिद्ध शक शासक रुद्रदामन का जूनागढ़ अभिलेख किस शताब्दी का है?",
            options: ["प्रथम शताब्दी ई.पू.", "प्रथम शताब्दी ईस्वी", "द्वितीय शताब्दी ईस्वी", "तीसरी शताब्दी ईस्वी"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 17): धर्मशास्त्रों के अनुसार, विवाह के कुल कितने प्रकार मान्य थे, जिनमें से पहले चार को उत्तम माना गया था?",
            options: ["चार", "छह", "आठ", "दस"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 18): प्रसिद्ध ग्रन्थ 'मनुस्मृति' का संकलन मुख्य रूप से किस कालखंड के दौरान किया गया था?",
            options: ["500 ई.पू. से 200 ई.पू.", "200 ई.पू. से 200 ईस्वी", "300 ईस्वी से 600 ईस्वी", "100 ई.पू. से 300 ईस्वी"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 19): बौद्ध परंपरा के अनुसार, अशोक ने बुद्ध के अवशेषों के हिस्से प्रत्येक महत्वपूर्ण शहर में बांटकर स्तूप बनाने का आदेश दिया। इन स्तूपों का विवरण किस बौद्ध ग्रंथ में मिलता है?",
            options: ["दिव्यावदान", "महावंश", "दीपवंश", "अशोकवदान"],
            correct: 3
        },
        {
            question: "इतिहास (प्रश्न 20): सांची के स्तूप के संरक्षण में भोपाल की किन बेगमों ने महत्वपूर्ण योगदान दिया और जॉन मार्शल को संग्रहालय बनाने के लिए अनुदान दिया?",
            options: ["शाहजहाँ बेगम और सुल्तान जहाँ बेगम", "सिकंदर बेगम और शाहजहाँ बेगम", "मुमताज बेगम और जहाँआरा", "रज़िया सुल्तान और सुल्तान बेगम"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 21): अल-बिरूनी द्वारा अरबी भाषा में लिखी गई प्रसिद्ध कृति 'किताब-उल-हिन्द' कुल कितने अध्यायों में विभाजित है?",
            options: ["60 अध्याय", "70 अध्याय", "80 अध्याय", "90 अध्याय"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 22): फ्रांसिस्का बर्नियर, जो एक फ्रांसीसी चिकित्सक और दार्शनिक था, भारत में किस मुगल सम्राट के कालखंड में आया था?",
            options: ["अकबर", "जहाँगीर", "शाहजहाँ", "औरंगज़ेब"],
            correct: 3
        },
        {
            question: "इतिहास (प्रश्न 23): कबीर की वाणियों का संकलन 'बीजक' में सुरक्षित है। यह मुख्य रूप से किन अनुयायियों द्वारा संरक्षित किया गया था?",
            options: ["कबीर पंथियों द्वारा", "सिखों द्वारा", "नाथपंथियों द्वारा", "सूफियों द्वारा"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 24): तमिलनाडु के 'अलवार' और 'नयनार' संतों ने क्रमशः किन देवताओं के प्रति अपनी भक्ति प्रकट की?",
            options: ["शिव और विष्णु", "विष्णु और शिव", "ब्रह्मा और शिव", "कार्तिकेय और विष्णु"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 25): कर्नाटक में 'वीरशैव' (लिंगायत) आंदोलन के जनक कौन थे, जिन्होंने जाति प्रथा पर तीखा प्रहार किया?",
            options: ["बासवन्ना", "रामकृष्ण", "रामानुज", "शंकराचार्य"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 26): चिश्ती संप्रदाय के किस सूफी संत को 'सुलतान-उल-मशायख' (शेखों का राजा) कहा जाता था, जिनके दरगाह दिल्ली में स्थित है?",
            options: ["ख्वाजा मुइनुद्दीन चिश्ती", "शेख निजामुद्दीन औलिया", "बाबा फरीद", "बख्तियार काकी"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 27): विजयनगर साम्राज्य के पतन का मुख्य कारण बनी 'तालीकोटा की लड़ाई' (राक्षसी-तांगड़ी का युद्ध) किस वर्ष लड़ी गई थी?",
            options: ["1526", "1556", "1565", "1576"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 28): विजयनगर के किस शासक ने अपनी राजधानी के पास 'नगलपुरम' नामक एक उपनगर की स्थापना अपनी माता के नाम पर की थी?",
            options: ["हरिहर प्रथम", "देवराय द्वितीय", "कृष्णदेव राय", "अच्युत राय"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 29): विजयनगर साम्राज्य की प्रशासनिक व्यवस्था में 'अमराम-नायक' कौन होते थे?",
            options: ["राजदरबार के कवि", "प्रशासनिक लिपिक", "सैनिक कमांडर जिन्हें क्षेत्र दिए जाते थे", "धार्मिक गुरु"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 30): मुगल काल में आइन-ए-अकबरी के अनुसार, 'खाम' फसल मूल्यांकन की वह पद्धति थी जिसमें:",
            options: ["फसल कटने के बाद अनाज बांटना", "फसल काटने के तुरंत बाद खड़ी फसल का अनुमान", "खेत को बोने के तुरंत बाद कर निर्धारण", "अनाज को साफ करने के बाद तौलना"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 31): मुगल शासन व्यवस्था में 'मीर बख्शी' का मुख्य दायित्व क्या होता था?",
            options: ["शाही खजाने की देखरेख", "सैन्य विभाग का नेतृत्व और वेतन भुगतान", "न्याय व्यवस्था का संचालन", "विदेशी मामलों का प्रबंधन"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 32): ब्रिटिश ईस्ट इंडिया कंपनी द्वारा बंगाल में 'इस्तमरारी बंदोबस्त' (स्थायी बंदोबस्त) किस वर्ष लागू किया गया था?",
            options: ["1773", "1784", "1793", "1813"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 33): पहाड़िया लोगों की जीवन शैली के विपरीत, राजमहल की पहाड़ियों पर किस जनजाति को अंग्रेजों द्वारा खेती के लिए बसाया गया था?",
            options: ["भील", "संथाल", "मुंडा", "गोंड"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 34): 1857 के विद्रोह के दौरान अवध (लखनऊ) में विद्रोह का नेतृत्व किसने किया था?",
            options: ["बेगम हजरत महल", "रानी लक्ष्मीबाई", "नाना साहेब", "कुंवर सिंह"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 35): 1857 के विद्रोह को कुचलने के लिए अंग्रेजों ने मई 1857 में संपूर्ण उत्तर भारत में कौन सा कड़ा कानून लागू किया था?",
            options: ["रौलट एक्ट", "मार्शल लॉ (सैन्य कानून)", "वर्नाक्युलर प्रेस एक्ट", "सहायक संधि कानून"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 36): महात्मा गांधी ने दक्षिण अफ्रीका से भारत पूरी तरह से किस वर्ष वापसी की थी?",
            options: ["1914", "1915", "1916", "1917"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 37): गांधी जी द्वारा वर्ष 1930 में शुरू किए गए 'सविनय अवज्ञा आंदोलन' की शुरुआत किस ऐतिहासिक यात्रा से हुई थी?",
            options: ["चंपारण यात्रा", "खेड़ा यात्रा", "दांडी मार्च", "बारदोली सत्याग्रह"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 38): भारतीय संविधान सभा के गठन के समय इसके कुल सदस्यों की संख्या कितनी निश्चित की गई थी?",
            options: ["299", "389", "411", "543"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 39): भारतीय संविधान सभा में 'उद्देश्य प्रस्ताव' (Objective Resolution) किसके द्वारा प्रस्तुत किया गया था?",
            options: ["डॉ. बी.आर. अम्बेडकर", "जवाहरलाल नेहरू", "डॉ. राजेन्द्र प्रसाद", "सरदार वल्लभभाई पटेल"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 40): हड़प्पा सभ्यता का स्थल 'लोथल' किस नदी के किनारे स्थित है जो प्राचीन काल में एक प्रमुख बंदरगाह था?",
            options: ["रावी", "सिंधु", "भोगवा", "घग्गर"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 41): सिक्कों के अध्ययन को इतिहास लेखन की भाषा में क्या कहा जाता है?",
            options: ["अभिलेखशास्त्र", "मुद्राशास्त्र (Numismatics)", "पुरातत्वशास्त्र", "पैलेओग्राफी"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 42): छठी शताब्दी ईस्वी पूर्व में सबसे शक्तिशाली महाजनपद के रूप में कौन सा राज्य उभरा था?",
            options: ["कोशल", "मगध", "काशी", "अवंती"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 43): मौर्य साम्राज्य के पांच प्रमुख राजनीतिक केंद्रों में से 'तक्षशिला' और 'उज्जयिनी' का महत्व किस रूप में था?",
            options: ["वे दोनों तटीय बंदरगाह थे", "वे लंबी दूरी वाले व्यापारिक मार्गों पर स्थित थे", "वे केवल स्वर्ण खदानें थीं", "वे केवल धार्मिक केंद्र थे"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 44): संस्कृत के ग्रंथों के अनुसार 'कुल' और 'जाति' शब्द क्रमशः किसके लिए प्रयुक्त होते थे?",
            options: ["परिवार और सगे-संबंधियों का बड़ा समूह", "व्यवसाय और धर्म", "गांव और शहर", "शासक और प्रजा"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 45): महाभारत के 'समालोचनात्मक संस्करण' (Critical Edition) तैयार करने का अत्यंत महत्वाकांक्षी कार्य किसके नेतृत्व में शुरू हुआ था?",
            options: ["वी.एस. सुकथांकर", "मैक्स मूलर", "कनिंघम", "आर.ई.एम. व्हीलर"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 46): जैन धर्म के 24वें तीर्थंकर महावीर स्वामी से पहले के 23वें तीर्थंकर कौन थे जिनका संबंध काशी से था?",
            options: ["ऋषभदेव", "पार्श्वनाथ", "नेमिनाथ", "अरिष्टनेमि"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 47): बौद्ध धर्म के सिद्धांतों और उपदेशों का संकलन मुख्य रूप से किस पिटक में मिलता है?",
            options: ["विनय पिटक", "सुत्त पिटक", "अभिधम्म पिटक", "महावंश"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 48): मोरक्को से आए प्रसिद्ध यात्री इब्न बतूता को दिल्ली के किस सुल्तान ने 'काजी' (न्यायाधीश) के पद पर नियुक्त किया था?",
            options: ["अलाउद्दीन खिलजी", "गयासुद्दीन तुगलक", "मोहम्मद बिन तुगलक", "फिरोज शाह तुगलक"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 49): अठारहवीं शताब्दी के उत्तरार्ध में जोतदार कौन थे, जिनका ग्रामीण क्षेत्रों में जमींदारों से अधिक प्रभाव था?",
            options: ["ब्रिटिश सेना के अधिकारी", "धनी किसान और ग्राम प्रधान", "छोटे भूमिहीन मजदूर", "शाही राजस्व अधिकारी"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 50): 1857 के स्वतंत्रता संग्राम के समय भारत का गवर्नर जनरल कौन था?",
            options: ["लॉर्ड डलहौजी", "लॉर्ड कैनिंग", "लॉर्ड रिपन", "लॉर्ड कर्जन"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 51): महात्मा गांधी द्वारा भारत में किया गया प्रथम सफल सत्याग्रह आंदोलन कौन सा था?",
            options: ["असहयोग आंदोलन", "चंपारण सत्याग्रह", "खेड़ा सत्याग्रह", "अहमदाबाद मिल हड़ताल"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 52): कांग्रेस के किस ऐतिहासिक अधिवेशन में पूर्ण स्वराज (पूर्ण स्वतंत्रता) की मांग को औपचारिक रूप से स्वीकार किया गया था?",
            options: ["1907 सूरत अधिवेशन", "1920 नागपुर अधिवेशन", "1929 लाहौर अधिवेशन", "1931 कराची अधिवेशन"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 53): 'क्रिप्स मिशन' भारत किस वर्ष आया था, जिसे गांधी जी ने 'पोस्ट-डेटेड चेक' कहा था?",
            options: ["1940", "1942", "1945", "1946"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 54): भारतीय संविधान सभा के स्थायी अध्यक्ष के रूप में किसे चुना गया था?",
            options: ["डॉ. बी.आर. अम्बेडकर", "जवाहरलाल नेहरू", "डॉ. राजेन्द्र प्रसाद", "सच्चिदानंद सिन्हा"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 55): हड़प्पा लिपि के संदर्भ में कौन सा कथन गलत है?",
            options: ["यह आज तक पढ़ी नहीं जा सकी है", "यह वर्णमालीय थी (इसमें स्वर-व्यंजन थे)", "यह चित्रलेखात्मक थी", "इसमें चिह्नों की संख्या लगभग 375 से 400 के बीच थी"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 56): गुप्त काल के दौरान जारी किए गए सोने के सिक्कों को अभिलेखों में क्या कहा गया है?",
            options: ["दीनार", "रूपक", "जीतल", "टका"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 57): बौद्ध संघ में शामिल होने वाली प्रथम महिला कौन थी, जो बुद्ध की सौतेली माता थीं?",
            options: ["यशोधरा", "महाप्रजापति गौतमी", "आम्रपाली", "मायादेवी"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 58): विजयनगर साम्राज्य का प्रसिद्ध पूजा स्थल 'विट्ठल मंदिर' किस देवता को समर्पित है, जो मुख्य रूप से महाराष्ट्र में पूजे जाते थे?",
            options: ["विष्णु के रूप (विट्ठल देव)", "शिव", "गणेश", "कार्तिकेय"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 59): 'दक्कन दंगा आयोग' (Deccan Riots Commission) की रिपोर्ट ब्रिटिश पार्लियामेंट में किस वर्ष प्रस्तुत की गई थी?",
            options: ["1875", "1878", "1885", "1893"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 60): महात्मा गांधी ने किस घटना के बाद वर्ष 1922 में 'असहयोग आंदोलन' को वापस लेने की घोषणा की थी?",
            options: ["जलियांवाला बाग हत्याकांड", "चौरी-चौरा कांड", "काकौरी कांड", "दांडी नमक कानून तोड़ना"],
            correct: 1
        },
               // इन्हें अपने 'en' एरे (Array) के अंदर पेस्ट करें:
        {
            question: "History (Q11): Which is the only Harappan city that was divided into three distinct parts: the Citadel, the Middle Town, and the Lower Town?",
            options: ["Dholavira", "Lothal", "Kalibangan", "Chanhudaro"],
            correct: 0
        },
        {
            question: "History (Q12): In Mesopotamian texts of the Harappan period, the term 'Meluhha' was probably used for which region?",
            options: ["Oman", "Bahrain", "Indus Region", "Egypt"],
            correct: 2
        },
        {
            question: "History (Q13): Which of the following statements is true regarding the Brahmi script?",
            options: ["It was written from right to left", "It was written from left to right", "It was invented solely by Ashoka", "It is just a modified form of Kharosthi"],
            correct: 1
        },
        {
            question: "History (Q14): During the reign of which Gupta ruler did the famous Chinese traveler Faxian visit India?",
            options: ["Chandragupta I", "Samudragupta", "Chandragupta II", "Skandagupta"],
            correct: 2
        },
        {
            question: "History (Q15): In which language did Harishena compose the famous Prayaga Prashasti (Allahabad Pillar Inscription)?",
            options: ["Prakrit", "Pali", "Sanskrit", "Apabhramsha"],
            correct: 2
        },
        {
            question: "History (Q16): The Junagadh inscription of the famous Shaka ruler Rudradaman, who renovated the Sudarshana Lake, belongs to which century?",
            options: ["1st Century BCE", "1st Century CE", "2nd Century CE", "3rd Century CE"],
            correct: 2
        },
        {
            question: "History (Q17): According to Dharmashastras, how many forms of marriage were recognized, of which the first four were considered good?",
            options: ["Four", "Six", "Eight", "Ten"],
            correct: 2
        },
        {
            question: "History (Q18): The famous text 'Manusmriti' was compiled mainly during which period?",
            options: ["500 BCE to 200 BCE", "200 BCE to 200 CE", "300 CE to 600 CE", "100 BCE to 300 CE"],
            correct: 1
        },
        {
            question: "History (Q19): According to Buddhist tradition, Ashoka distributed pieces of Buddha's relics to every important town and ordered stupas to be built. Which Buddhist text describes this?",
            options: ["Divyavadana", "Mahavamsa", "Dipavamsa", "Ashokavadana"],
            correct: 3
        },
        {
            question: "History (Q20): Which Begums of Bhopal made significant contributions to the preservation of the Sanchi Stupa and provided grants for a museum to John Marshall?",
            options: ["Shahjehan Begum and Sultan Jehan Begum", "Sikandar Begum and Shahjehan Begum", "Mumtaz Begum and Jahanara", "Razia Sultan and Sultan Begum"],
            correct: 0
        },
        {
            question: "History (Q21): The famous book 'Kitab-ul-Hind' written by Al-Biruni in Arabic is divided into how many chapters?",
            options: ["60 Chapters", "70 Chapters", "80 Chapters", "90 Chapters"],
            correct: 2
        },
        {
            question: "History (Q22): Francois Bernier, a French physician and philosopher, came to India during the reign of which Mughal Emperor?",
            options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
            correct: 3
        },
        {
            question: "History (Q23): The compositions of Kabir are compiled in 'Bijak'. This was preserved mainly by which followers?",
            options: ["Kabirpanthis", "Sikhs", "Nathpanthis", "Sufis"],
            correct: 0
        },
        {
            question: "History (Q24): The 'Alvar' and 'Nayanar' saints of Tamil Nadu expressed their devotion to which deities respectively?",
            options: ["Shiva and Vishnu", "Vishnu and Shiva", "Brahma and Shiva", "Kartikeya and Vishnu"],
            correct: 1
        },
        {
            question: "History (Q25): Who was the founder of the 'Veerashaiva' (Lingayat) movement in Karnataka, who strongly criticized the caste system?",
            options: ["Basavanna", "Ramakrishna", "Ramanuja", "Shankaracharya"],
            correct: 0
        },
        {
            question: "History (Q26): Which Sufi saint of the Chisti order was called 'Sultan-ul-Mashaykh' (King of Sheikhs), whose dargah is located in Delhi?",
            options: ["Khwaja Muinuddin Chishti", "Sheikh Nizamuddin Auliya", "Baba Farid", "Bakhtiyar Kaki"],
            correct: 1
        },
        {
            question: "History (Q27): In which year was the 'Battle of Talikota' (Battle of Rakshasi-Tangadi) fought, which led to the decline of the Vijayanagara Empire?",
            options: ["1526", "1556", "1565", "1576"],
            correct: 2
        },
        {
            question: "History (Q28): Which ruler of Vijayanagara established a suburban township near his capital called 'Nagalapuram', named after his mother?",
            options: ["Harihara I", "Devaraya II", "Krishnadeva Raya", "Achyuta Raya"],
            correct: 2
        },
        {
            question: "History (Q29): Who were the 'Amara-Nayakas' in the administrative system of the Vijayanagara Empire?",
            options: ["Court poets", "Administrative clerks", "Military commanders given territories", "Religious gurus"],
            correct: 2
        },
        {
            question: "History (Q30): In the Mughal period, according to Ain-i-Akbari, 'Kham' was a method of crop assessment in which:",
            options: ["Grain was divided after cutting the crop", "Standing crop was estimated immediately after cutting", "Tax was fixed immediately after sowing fields", "Grain was weighed after cleaning"],
            correct: 1
        },
        {
            question: "History (Q31): What was the primary responsibility of the 'Mir Bakshi' in the Mughal administration?",
            options: ["Managing the royal treasury", "Leading the military department and salary payment", "Heading the judiciary", "Managing foreign affairs"],
            correct: 1
        },
        {
            question: "History (Q32): In which year did the British East India Company introduce the 'Istamrari Settlement' (Permanent Settlement) in Bengal?",
            options: ["1773", "1784", "1793", "1813"],
            correct: 2
        },
        {
            question: "History (Q33): Contrary to the lifestyle of the Paharia people, which tribe was settled on Rajmahal hills by the British for agriculture?",
            options: ["Bhils", "Santhals", "Mundas", "Gonds"],
            correct: 1
        },
        {
            question: "History (Q34): Who led the revolt in Awadh (Lucknow) during the Revolt of 1857?",
            options: ["Begum Hazrat Mahal", "Rani Lakshmibai", "Nana Saheb", "Kunwar Singh"],
            correct: 0
        },
        {
            question: "History (Q35): To suppress the Revolt of 1857, which harsh law did the British enforce across North India in May 1857?",
            options: ["Rowlatt Act", "Martial Law", "Vernacular Press Act", "Subsidiary Alliance Law"],
            correct: 1
        },
        {
            question: "History (Q36): In which year did Mahatma Gandhi permanently return to India from South Africa?",
            options: ["1914", "1915", "1916", "1917"],
            correct: 1
        },
        {
            question: "History (Q37): The 'Civil Disobedience Movement' launched by Gandhi ji in 1930 started with which historic journey?",
            options: ["Champaran Journey", "Kheda Journey", "Dandi March", "Bardoli Satyagraha"],
            correct: 2
        },
        {
            question: "History (Q38): What was the total strength fixed for the Constituent Assembly of India at the time of its formation?",
            options: ["299", "389", "411", "543"],
            correct: 1
        },
        {
            question: "History (Q39): Who presented the historic 'Objective Resolution' in the Constituent Assembly?",
            options: ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Vallabhbhai Patel"],
            correct: 1
        },
        {
            question: "History (Q40): The Harappan site 'Lothal', which was a major port in ancient times, is located on the bank of which river?",
            options: ["Ravi", "Indus", "Bhogavo", "Ghaggar"],
            correct: 2
        },
        {
            question: "History (Q41): What is the study of coins known as in historical epigraphy?",
            options: ["Epigraphy", "Numismatics", "Archaeology", "Palaeography"],
            correct: 1
        },
        {
            question: "History (Q42): Which state emerged as the most powerful Mahajanapada in the 6th century BCE?",
            options: ["Kosala", "Magadha", "Kashi", "Avanti"],
            correct: 1
        },
        {
            question: "History (Q43): Out of the five major political centers of the Mauryan Empire, what was the significance of 'Taxila' and 'Ujjayini'?",
            options: ["They both were coastal ports", "They were situated on important long-distance trade routes", "They were only gold mines", "They were purely religious centers"],
            correct: 1
        },
        {
            question: "History (Q44): According to Sanskrit texts, the terms 'Kula' and 'Jati' were used respectively for:",
            options: ["Family and a larger network of kinfolk", "Occupation and Religion", "Village and City", "Ruler and Subjects"],
            correct: 0
        },
        {
            question: "History (Q45): Under whose leadership did the highly ambitious project of preparing a 'Critical Edition' of Mahabharata begin?",
            options: ["V.S. Sukthankar", "Max Muller", "Cunningham", "R.E.M. Wheeler"],
            correct: 0
        },
        {
            question: "History (Q46): Who was the 23rd Tirthankara of Jainism belonging to Kashi, before the 24th Tirthankara Mahavira Swami?",
            options: ["Rishabhadeva", "Parshvanatha", "Neminatha", "Arishtanemi"],
            correct: 1
        },
        {
            question: "History (Q47): The compilation of Buddhist principles and teachings is mainly found in which Pitaka?",
            options: ["Vinaya Pitaka", "Sutta Pitaka", "Abhidhamma Pitaka", "Mahavamsa"],
            correct: 1
        },
        {
            question: "History (Q48): Which Sultan of Delhi appointed the famous Moroccan traveler Ibn Battuta to the post of 'Qazi' (Judge)?",
            options: ["Alauddin Khalji", "Ghiyasuddin Tughlaq", "Muhammad bin Tughlaq", "Firoz Shah Tughlaq"],
            correct: 2
        },
        {
            question: "History (Q49): In the late eighteenth century, who were the Jotedars, who had more influence in rural areas than the Zamindars?",
            options: ["British military officers", "Rich peasants and village headmen", "Small landless laborers", "Royal revenue officers"],
            correct: 1
        },
        {
            question: "History (Q50): Who was the Governor-General of India during the Revolt of 1857?",
            options: ["Lord Dalhousie", "Lord Canning", "Lord Ripon", "Lord Curzon"],
            correct: 1
        },
        {
            question: "History (Q51): Which was the first successful satyagraha movement led by Mahatma Gandhi in India?",
            options: ["Non-Cooperation Movement", "Champaran Satyagraha", "Kheda Satyagraha", "Ahmedabad Mill Strike"],
            correct: 1
        },
        {
            question: "History (Q52): Formal acceptance of the demand for 'Purna Swaraj' (Complete Independence) was taken in which historic session of Congress?",
            options: ["1907 Surat Session", "1920 Nagpur Session", "1929 Lahore Session", "1931 Karachi Session"],
            correct: 2
        },
        {
            question: "History (Q53): In which year did the 'Cripps Mission' come to India, which Gandhi ji called a 'post-dated check'?",
            options: ["1940", "1942", "1945", "1946"],
            correct: 1
        },
        {
            question: "History (Q54): Who was elected as the permanent President of the Constituent Assembly of India?",
            options: ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sachchidanand Sinha"],
            correct: 2
        },
        {
            question: "History (Q55): Which statement is incorrect regarding the Harappan script?",
            options: ["It has not been deciphered till date", "It was alphabetical (containing vowels/consonants)", "It was pictographic", "The number of signs was between 375 and 400"],
            correct: 1
        },
        {
            question: "History (Q56): What were the gold coins issued during the Gupta period called in contemporary inscriptions?",
            options: ["Dinar", "Rupaka", "Jital", "Tanka"],
            correct: 0
        },
        {
            question: "History (Q57): Who was the first woman to be ordained as a bhikkhuni in the Buddhist Sangha, who was also Buddha's foster mother?",
            options: ["Yashodhara", "Mahaprajapati Gautami", "Amrapali", "Mayadevi"],
            correct: 1
        },
        {
            question: "History (Q58): The famous 'Vitthala Temple', a major place of worship in the Vijayanagara Empire, is dedicated to which deity worshipped mainly in Maharashtra?",
            options: ["Form of Vishnu (Lord Vitthala)", "Shiva", "Ganesha", "Kartikeya"],
            correct: 0
        },
        {
            question: "History (Q59): In which year was the report of the 'Deccan Riots Commission' presented in the British Parliament?",
            options: ["1875", "1878", "1885", "1893"],
            correct: 1
        },
        {
            question: "History (Q60): After which event did Mahatma Gandhi announce the withdrawal of the 'Non-Cooperation Movement' in 1922?",
            options: ["Jallianwala Bagh Massacre", "Chauri-Chaura Incident", "Kakori Train Action", "Breaking of Salt Law at Dandi"],
            correct: 1
        },
                // इन्हें अपने 'hi' एरे (Array) के अंदर आगे पेस्ट करें:
        {
            question: "इतिहास (प्रश्न 61): हड़प्पा सभ्यता के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए:\n1. पुरातात्विक साक्ष्यों के अनुसार यहाँ 'हड़प्पाई सवाधानों' में आमतौर पर मृतकों को गर्तों में दफनाया जाता था।\n2. कुछ कब्रों में मृदभांड और आभूषण मिले हैं, जो पारलौकिक जीवन (मृत्यु के बाद के जीवन) में विश्वास को दर्शाते हैं।\nउपरोक्त में से कौन सा/से कथन सत्य है/हैं?",
            options: ["केवल 1", "केवल 2", "1 और 2 दोनों", "दोनों में से कोई नहीं"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 62): मौर्य काल के प्रसिद्ध 'अशोक के अभिलेखों' के संबंध में निम्नलिखित में से कौन सा तथ्य पूरी तरह सही है?",
            options: ["अशोक के अधिकांश अभिलेख प्राकृत भाषा और ब्राह्मी लिपि में हैं।", "उत्तर-पश्चिम (पाकिस्तान) के अभिलेख केवल संस्कृत भाषा में हैं।", "अशोक ने अपने अभिलेखों में स्वयं को केवल 'चक्रवर्ती सम्राट' कहा है।", "अशोक के अभिलेखों को सबसे पहले अलेक्जेंडर कनिंघम ने पढ़ा था।"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 63): राजाओं की दिव्य स्थिति और उच्च प्रतिष्ठा प्राप्त करने के लिए कुषाण शासकों द्वारा अपनाई गई पद्धतियों के बारे में क्या सत्य है?",
            options: ["उन्होंने स्वयं को 'देवपुत्र' की उपाधि से विभूषित किया और अपनी विशाल मूर्तियाँ स्थापित करवाईं।", "उन्होंने बौद्ध धर्म को पूरी तरह प्रतिबंधित कर दिया था।", "वे केवल सिक्कों पर अपनी तस्वीरें नहीं बनवाते थे।", "उन्होंने मौर्यों की तरह केवल महामात्यों की नियुक्ति की थी।"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 64): आरंभिक बौद्ध धर्म में 'बोधिसत्व' की संकल्पना के संबंध में कौन सा कथन सही है?",
            options: ["वे ऐसे व्यक्ति थे जिन्होंने केवल अपने लिए मोक्ष प्राप्त किया।", "वे परम करुणामय जीव थे जो अपने पुण्यों से दूसरों के दुखों को दूर करते थे।", "वे केवल श्रीलंका के बौद्ध भिक्षु हुआ करते थे।", "वे जैन धर्म के तीर्थंकरों का दूसरा नाम थे।"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 65): इब्न बतूता के यात्रा वृत्तांत 'रिहला' के अनुसार, उसने दिल्ली के किस प्रसिद्ध और विशाल दरवाजे को सबसे बड़ा और सुंदर बताया था?",
            options: ["बदायूँ दरवाजा", "मांडवी दरवाजा", "गुल दरवाजा", "अजमेरी दरवाजा"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 66): प्रसिद्ध फ्रांसीसी यात्री बर्नियर ने भारत के भू-स्वामित्व के संबंध में कौन सा सिद्धांत दिया था, जिसे यूरोप में व्यापक रूप से स्वीकार किया गया?",
            options: ["निजी भू-स्वामित्व का सिद्धांत", "राजकीय भू-स्वामित्व (जमीन पर केवल सम्राट का अधिकार) का सिद्धांत", "सामुदायिक कृषि का सिद्धांत", "जमींदारी उन्मूलन का सिद्धांत"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 67): भक्ति आंदोलन की प्रसिद्ध रहस्यवादी कवयित्री 'मीराबाई' के संदर्भ में कौन सा कथन असत्य (गलत) है?",
            options: ["वे मेड़ता के रतनसिंह की पुत्री थीं।", "उनका विवाह मेवाड़ के सिसोदिया कुल के भोजराज से हुआ था।", "उन्होंने अपने गुरु के रूप में संत कबीर को स्वीकार किया था।", "उनके गीत आज भी राजस्थान और गुजरात में गाए जाते हैं।"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 68): इस्लामी कानून के संदर्भ में 'शरिया' क्या है और यह किन मुख्य स्रोतों पर आधारित है?",
            options: ["यह केवल राजाओं के आदेश हैं जो कर निर्धारण करते हैं।", "यह मुस्लिम समुदाय को निर्देशित करने वाला कानून है, जो कुरान, हदीस, इज्मा और कयास पर आधारित है।", "यह केवल विदेशी यात्रियों पर लगाया जाने वाला धार्मिक कर है।", "यह सूफी संतों की कविताओं का संग्रह है।"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 69): सूफी परंपरा में 'खानकाह' शब्द से क्या तात्पर्य है?",
            options: ["वह स्थान जहाँ सूफी संत और उनके चेले निवास करते थे और गतिविधियां चलाते थे।", "सूफियों द्वारा गाया जाने वाला एक विशेष प्रकार का संगीत।", "मुगल काल में राजाओं द्वारा सूफियों को दी जाने वाली भूमि।", "सूफी संतों द्वारा लिखी गई आत्मकथा।"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 70): विजयनगर साम्राज्य की विशाल भौगोलिक स्थिति में 'कमलापुरम जलाशय' का निर्माण किस नदी के पानी को रोककर किया गया था, जो आज भी सिंचाई के काम आता है?",
            options: ["कृष्णा नदी", "तुंगभद्रा नदी", "कावेरी नदी", "गोदावरी नदी"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 71): विजयनगर की शाही संरचना में 'हजार राम मंदिर' के संदर्भ में कौन सा कथन सही है?",
            options: ["यह केवल आम जनता के पूजा-पाठ के लिए खुला था।", "इसका उपयोग केवल राजा और उनके परिवार द्वारा किया जाता था, और इसकी दीवारों पर रामायण के दृश्य उत्कीर्ण हैं।", "यह एक बौद्ध मठ था जिसे बाद में बदला गया।", "इसकी खोज कोलिन मैकेन्जी ने 1950 में की थी।"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 72): 16वीं और 17वीं शताब्दी के दौरान भारत में मुगल साम्राज्य की कृषि व्यवस्था में 'जिंस-ए-कामिल' शब्द का प्रयोग किसके लिए किया जाता था?",
            options: ["अनाज की कमी वाली फसलों के लिए", "सर्वोत्तम नकद फसलें (जैसे कपास, गन्ना) जिससे अधिक राजस्व मिलता था", "केवल सूखी और बंजर भूमि पर होने वाली फसलें", "शाही बागानों में उगाई जाने वाली जड़ी-बूटियाँ"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 73): मुगल काल में राजस्व निर्धारण की 'कानकूत' व्यवस्था के अंतर्गत कर का निर्धारण कैसे किया जाता था?",
            options: ["फसल कटने के बाद अनाज को तौलकर", "खड़ी फसल का अनुमान लगाकर और जमीन को मापकर", "फसल बोने से पहले ही एक निश्चित नकद राशि तय करके", "जमींदार की मर्जी के अनुसार"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 74): 1793 के 'इस्तमरारी बंदोबस्त' के बाद जब जमींदार समय पर राजस्व नहीं चुका पाते थे, तो उनकी जमींदारियों को नीलाम कर दिया जाता था। इसके लिए कौन सा नियम जिम्मेदार था?",
            options: ["सूर्यास्त कानून (Sunset Law)", "सूर्योदय कानून (Sunrise Law)", "हड़प नीति (Doctrine of Lapse)", "स्थायी कर कानून"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 75): वर्ष 1756 में संथालों ने अंग्रेजों और जमींदारों के खिलाफ विद्रोह कर दिया। अंग्रेजों ने इस विद्रोह को शांत करने के लिए उनके लिए किस विशेष क्षेत्र का सीमांकन किया था?",
            options: ["दामिन-इ-कोह", "राजमहल रिजर्व", "संथाल परगना छावनी", "कोल डिस्टिक्ट"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 76): औपनिवेशिक काल के दौरान बंबई (मुंबई) में निर्मित 'गेटवे ऑफ इंडिया' की स्थापत्य शैली निम्नलिखित में से कौन सी है?",
            options: ["नव-शास्त्रीय शैली (Neo-Classical)", "इंडो-सारैसेनिक शैली (Indo-Saracenic)", "नव-गोथिक शैली (Neo-Gothic)", "विक्टोरियन शैली"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 77): 1857 के विद्रोह के भड़कने का एक मुख्य तात्कालिक कारण 'एनफील्ड राइफल' के कारतूस थे। इन कारतूसों में किन पशुओं की चर्बी होने की अफवाह फैली थी?",
            options: ["गाय और सूअर", "बकरी और भेड़", "घोड़ा और ऊँट", "शेर और हाथी"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 78): वर्ष 1916 में बनारस हिंदू विश्वविद्यालय (BHU) के उद्घाटन समारोह में महात्मा गांधी के भाषण का मुख्य केंद्र बिंदु क्या था?",
            options: ["अंग्रेजों को तुरंत भारत छोड़ने की चेतावनी देना", "भारतीय राजनीति में किसानों और मजदूरों की उपेक्षा पर चिंता जताना और अभिजात्य वर्ग की आलोचना करना", "असहयोग आंदोलन की रूपरेखा प्रस्तुत करना", "केवल चंपारण के किसानों के मुद्दों पर बात करना"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 79): वर्ष 1946 में भारत आई 'कैबिनेट मिशन' योजना के तीन मुख्य सदस्य कौन-कौन थे?",
            options: ["लॉर्ड माउंटबेटन, चर्चिल और एटली", "लॉर्ड डलहौजी, कर्जन और रिपन", "पैथिक लॉरेंस, सर स्टैफोर्ड क्रिप्स और ए.वी. अलेक्जेंडर", "जॉन साइमन, क्लीमेंट एटली और वेवेल"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 80): भारतीय संविधान सभा में 'शक्तिशाली केंद्र' के पक्ष में सबसे मजबूत दलील किसने दी थी, जिनका मानना था कि कमजोर केंद्र देश को टुकड़ों में बांट देगा?",
            options: ["जवाहरलाल नेहरू और बी.एन. राव", "के. संथानम और पोcontent", "जवाहरलाल नेहरू और बी.आर. अम्बेडकर", "महात्मा गांधी और मोहम्मद अली जिन्ना"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 81): हड़प्पा सभ्यता का स्थल 'बनवाली' भारत के किस राज्य में स्थित है, जहाँ से मिट्टी के बने हल का प्रतिरूप मिला है?",
            options: ["राजस्थान", "पंजाब", "हरियाणा", "गुजरात"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 82): छठी शताब्दी ई.पू. के महाजनपदों के शासन के संदर्भ में 'ओलिगार्की' (समूह शासन) से क्या तात्पर्य है?",
            options: ["जहाँ केवल एक निरंकुश राजा शासन करता था।", "जहाँ शासन की शक्ति पुरुषों के एक समूह के हाथ में होती थी, और प्रत्येक व्यक्ति राजा कहलाता था।", "जहाँ केवल धार्मिक गुरुओं का शासन होता था।", "जहाँ कोई सरकार नहीं होती थी।"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 83): मौर्य प्रशासन में 'राजुक' नामक अधिकारियों का मुख्य कार्य क्या था, जिसे अशोक के अभिलेखों में वर्णित किया गया है?",
            options: ["शाही महलों की सुरक्षा करना", "लोगों के न्याय और ग्रामीण क्षेत्रों के विकास व कर संग्रह का कार्य", "केवल विदेशी मेहमानों की देखरेख करना", "सेना के घोड़ों को प्रशिक्षित करना"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 84): सातवाहन राजवंश के शासकों के संदर्भ में कौन सा विशिष्ट लक्षण सही है?",
            options: ["वे पूरी तरह विदेशी मूल के थे।", "वे मातृवंशीय समाज की तरह माताओं के नाम से जाने जाते थे (जैसे गौतमीपुत्र), लेकिन सिंहासन का उत्तराधिकार पितृवंशीय था।", "उन्होंने केवल सोने के बड़े सिक्के जारी किए थे।", "वे बौद्ध धर्म के सबसे बड़े शत्रु थे।"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 85): बौद्ध धर्म के इतिहास में 'महायान' संप्रदाय के उदय के साथ कौन सा महत्वपूर्ण बदलाव आया?",
            options: ["बुद्ध को केवल प्रतीकों के रूप में दिखाना शुरू किया गया।", "बुद्ध की मानव रूप में मूर्तियाँ बनाई जाने लगीं और बोधिसत्व की पूजा शुरू हुई।", "बौद्ध भिक्षुओं का विवाह अनिवार्य कर दिया गया।", "स्तूपों का निर्माण पूरी तरह रोक दिया गया।"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 86): प्रसिद्ध इतिहासकार कनिंघम, जो भारतीय पुरातत्व सर्वेक्षण के पहले महानिदेशक थे, हड़प्पा के महत्व को समझने में क्यों चूक गए?",
            options: ["क्योंकि वे हड़प्पा कभी गए ही नहीं थे।", "क्योंकि उनका मानना था कि भारतीय इतिहास की शुरुआत गंगा की घाटी में पनपे पहले शहरों से हुई थी, न कि सिंधु घाटी से।", "क्योंकि उन्हें कोई भी हड़प्पाई वस्तु नहीं मिली थी।", "वे चीनी यात्रियों के विवरण पर भरोसा नहीं करते थे।"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 87): मोरक्को के यात्री इब्न बतूता ने भारत की किस फसल के बारे में लिखा कि इसे देखकर लोग चकित रह जाते हैं क्योंकि यह मानव सिर जैसी दिखती है?",
            options: ["पान", "नारियल", "तरबूज", "कटहल"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 88): सूफी संत ख्वाजा मुइनुद्दीन चिश्ती की अजमेर स्थित दरगाह पर आने वाले पहले मुगल सम्राट कौन थे, जिन्होंने यहाँ एक मस्जिद भी बनवाई थी?",
            options: ["बाबर", "हुमायूँ", "अकबर", "जहाँगीर"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 89): गुरु नानक देव जी द्वारा स्थापित की गई धार्मिक और सामाजिक व्यवस्था के संदर्भ में 'संगत' और 'पंगत' का क्या अर्थ है?",
            options: ["धार्मिक प्रवचन और सामूहिक रसोई (लंगर) में एक साथ बैठना", "सिख सेना के दो अलग-अलग दल", "विशेष प्रकार की पोशाकें", "गुरुद्वारा निर्माण की तकनीक"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 90): विजयनगर साम्राज्य की खोज और इसके भग्नावशेषों को पहली बार प्रकाश में लाने का श्रेय वर्ष 1800 में किस ब्रिटिश इंजीनियर और सर्वेक्षक को जाता है?",
            options: ["जॉन मार्शल", "कोलिन मैकेन्जी", "अलेक्जेंडर कनिंघम", "आर.ई.एम. व्हीलर"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 91): विजयनगर की स्थापत्य कला का अद्भुत उदाहरण 'महानवमी डिब्बा' वास्तव में क्या था?",
            options: ["एक बहुत बड़ा अनाज भंडार गृह", "एक विशाल मंच (Platform) जिसका उपयोग राजा धार्मिक अनुष्ठानों और उत्सवों के लिए करते थे", "शाही खजाना रखने की गुप्त जगह", "एक विजय स्मारक मीनार"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 92): अकबर के शासनकाल के इतिहास को समेटने वाली प्रसिद्ध पुस्तक 'अकबरनामा' के लेखक अबुल फजल की हत्या किसने की थी?",
            options: ["शहजादा खुर्रम ने", "वीरसिंह देव बुंदेला ने (शहजादा सलीम के उकसाने पर)", "बैरम खान ने", "मानसिंह ने"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 93): मुगल प्रशासन में 'मनसबदारी व्यवस्था' के अंतर्गत 'जात' और 'सवार' पद क्रमशः क्या दर्शाते थे?",
            options: ["सैनिकों की जाति और घोड़ों की नस्ल", "मनसबदार की प्रशासनिक व व्यक्तिगत स्थिति (ओहदा/वेतन) और उसके अधीन घुड़सवारों की संख्या", "धार्मिक कर और व्यापारिक कर", "शाही अंगरक्षक और पैदल सैनिक"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 94): पाँचवीं रिपोर्ट (Fifth Report) जो 1813 में ब्रिटिश संसद में पेश की गई थी, इसका मुख्य उद्देश्य क्या था?",
            options: ["भारत में शिक्षा व्यवस्था का विस्तार करना", "भारत में ईस्ट इंडिया कंपनी के प्रशासन और गतिविधियों की समीक्षा करना तथा उस पर नियंत्रण स्थापित करना", "भारतीय राजाओं को पेंशन देना", "संथाल विद्रोह की जांच करना"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 95): 1857 के विद्रोह के दौरान 'शाही घोषणाओं' में बार-बार किस बात पर बल दिया गया था ताकि विद्रोह को व्यापक बनाया जा सके?",
            options: ["हिंदू-मुस्लिम एकता और दोनों समुदायों के धार्मिक अधिकारों की रक्षा पर", "केवल जमींदारों को जमीन वापस दिलाने पर", "अंग्रेजी भाषा को अपनाने पर", "मुगल सम्राट को हटाने पर"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 96): महात्मा गांधी ने वर्ष 1917 में 'चंपारण' (बिहार) की यात्रा किसके अनुरोध पर की थी, ताकि वहाँ के नील किसानों की समस्याओं को सुलझाया जा सके?",
            options: ["राजकुमार शुक्ल", "राजेंद्र प्रसाद", "ब्रजकिशोर किशोर", "जे.बी. कृपलानी"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 97): भारत की स्वतंत्रता के समय ब्रिटिश भारत के विभाजन और सांप्रदायिक दंगों के बीच 'नोआखली' (वर्तमान बांग्लादेश) में शांति स्थापित करने के लिए किसने पैदल यात्रा की थी?",
            options: ["जवाहरलाल नेहरू", "सरदार पटेल", "महात्मा गांधी", "मौलाना अबुल कलाम आजाद"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 98): भारतीय संविधान के निर्माण में 'प्रारूप समिति' (Drafting Committee) के अध्यक्ष के रूप में किसने संविधान को अंतिम रूप देने में सबसे महत्वपूर्ण भूमिका निभाई?",
            options: ["डॉ. राजेन्द्र प्रसाद", "डॉ. बी.आर. अम्बेडकर", "के.एम. मुंशी", "अल्लादि कृष्णस्वामी अय्यर"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 99): हड़प्पा सभ्यता के किस स्थल से 'विशाल स्नानागार' (Great Bath) के साक्ष्य मिले हैं, जिसका उपयोग संभवतः किसी विशेष अनुष्ठानिक स्नान के लिए होता था?",
            options: ["हड़प्पा", "मोहनजोदड़ो", "लोथल", "राखीगढ़ी"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 100): मौर्य सम्राट अशोक ने कलिंग युद्ध (261 ई.पू.) के बाद किस नीति को पूरी तरह त्याग दिया था और 'धम्म घोष' को अपनाया था?",
            options: ["भेरी घोष (युद्ध नीति)", "प्रशासनिक नीति", "धार्मिक नीति", "विदेश व्यापार नीति"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 101): गुप्त वंश के किस सम्राट को उसकी युद्ध विजयों और पराक्रम के कारण 'भारत का नेपोलियन' कहा जाता है?",
            options: ["चंद्रगुप्त प्रथम", "समुद्रगुप्त", "कुमारगुप्त", "स्कंदगुप्त"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 102): बौद्ध धर्म के प्रसिद्ध ग्रंथ 'त्रिपिटक' की रचना मूल रूप से किस प्राचीन भाषा में की गई थी?",
            options: ["संस्कृत", "प्राकृत", "पालि", "अर्धमागधी"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 103): विजयनगर साम्राज्य का प्रसिद्ध 'विरूपाक्ष मंदिर' किस मुख्य देवता को समर्पित है, जो प्राचीन काल से ही उस क्षेत्र के संरक्षक देवता माने जाते थे?",
            options: ["भगवान शिव (विरूपाक्ष रूप)", "भगवान विष्णु", "भगवान कृष्ण", "भगवान राम"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 104): मुगल सम्राट अकबर ने किस वर्ष हिंदुओं पर से धार्मिक कर 'जज़िया' को पूरी तरह समाप्त कर दिया था, जिससे सामाजिक सद्भाव बढ़ा?",
            options: ["1556", "1564", "1575", "1582"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 105): 1857 के विद्रोह के समय दिल्ली में प्रतीकात्मक रूप से विद्रोह का नेतृत्व 'बहादुर शाह जफर' के हाथ में था, परंतु वास्तविक सैन्य नेतृत्व किसने संभाला था?",
            options: ["बख्त खान", "नाना साहेब", "तांत्या टोपे", "कुंवर सिंह"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 106): वर्ष 1919 में ब्रिटिश सरकार द्वारा पारित किए गए 'रौलट एक्ट' का भारत में व्यापक विरोध क्यों हुआ?",
            options: ["क्योंकि इसने बिना मुकदमे के किसी भी व्यक्ति को जेल में बंद करने का अधिकार सरकार को दे दिया था।", "क्योंकि इसने भारतीय उद्योगों को बंद कर दिया था।", "क्योंकि इसने प्रेस पर पूरी तरह प्रतिबंध लगा दिया था।", "क्योंकि इसमें करों को दोगुना कर दिया गया था।"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 107): महात्मा गांधी ने वर्ष 1942 में शुरू किए गए 'भारत छोड़ो आंदोलन' के दौरान कौन सा प्रसिद्ध नारा दिया था?",
            options: ["इंकलाब जिंदाबाद", "दिल्ली चलो", "करो या मरो", "स्वराज मेरा जन्मसिद्ध अधिकार है"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 108): भारतीय संविधान किस तिथि को पूरी तरह से लागू किया गया, जिसके उपलक्ष्य में हम हर वर्ष गणतंत्र दिवस मनाते हैं?",
            options: ["26 नवंबर 1949", "15 अगस्त 1947", "26 जनवरी 1950", "30 जनवरी 1948"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 109): प्रसिद्ध सूफी संत शेख नसीरुद्दीन चिश्ती को किस लोकप्रिय नाम से जाना जाता था, जिनकी दरगाह दिल्ली में है?",
            options: ["चिराग-ए-देहली (दिल्ली का दीपक)", "गरीब नवाज", "सुलतान-उल-मशायख", "बंदे नवाज"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 110): दक्कन के विद्रोह (1875) की शुरुआत मुख्य रूप से पुणे जिले के किस गाँव से हुई थी, जहाँ किसानों ने साहूकारों के बही-खातों को जला दिया था?",
            options: ["सुपा गाँव", "शिरूर गाँव", "इंदापुर गाँव", "बारामती गाँव"],
            correct: 0
        },
                // इन्हें अपने 'en' एरे (Array) के अंदर आगे पेस्ट करें:
        {
            question: "History (Q61): With reference to the Harappan civilization, consider the following statements:\n1. Archaeological evidence suggests that the dead were generally buried in pits.\n2. Pots and ornaments have been found in some graves, indicating a belief in an afterlife.\nWhich of the statement(s) given above is/are correct?",
            options: ["Only 1", "Only 2", "Both 1 and 2", "Neither 1 nor 2"],
            correct: 2
        },
        {
            question: "History (Q62): Regarding the famous 'Inscriptions of Ashoka' from the Mauryan period, which of the following facts is completely correct?",
            options: ["Most of Ashoka's inscriptions are in the Prakrit language and Brahmi script.", "The inscriptions of the North-West (Pakistan) are exclusively in Sanskrit.", "Ashoka referred to himself only as 'Chakravarti Samrat' in his inscriptions.", "Ashoka's inscriptions were first deciphered by Alexander Cunningham."],
            correct: 0
        },
        {
            question: "History (Q63): Which of the following is true regarding the strategies adopted by Kushana rulers to claim high divine status?",
            options: ["They adopted the title 'Devaputra' (son of god) and installed colossal statues of themselves.", "They completely banned Buddhism.", "They did not depict their images on coins.", "They only appointed Mahamattas like the Mauryas."],
            correct: 0
        },
        {
            question: "History (Q64): Which statement is correct regarding the concept of 'Bodhisattva' in early Buddhism?",
            options: ["They were individuals who attained liberation only for themselves.", "They were deeply compassionate beings who accumulated merit to help others.", "They were exclusively Buddhist monks from Sri Lanka.", "They were another name for Jain Tirthankaras."],
            correct: 1
        },
        {
            question: "History (Q65): According to Ibn Battuta's travelogue 'Rihla', which famous and massive gate of Delhi did he describe as the largest and most beautiful?",
            options: ["Budaun Gate", "Mandvi Gate", "Gul Gate", "Ajmeri Gate"],
            correct: 0
        },
        {
            question: "History (Q66): Which theory regarding land ownership in India was propounded by the French traveler Francois Bernier, which was widely accepted in Europe?",
            options: ["Theory of private land ownership", "Theory of Crown Ownership (the Emperor owned all land)", "Theory of communal farming", "Theory of abolition of Zamindari"],
            correct: 1
        },
        {
            question: "History (Q67): Which statement is false regarding 'Mirabai', the celebrated mystic poetess of the Bhakti movement?",
            options: ["She was the daughter of Ratan Singh of Merta.", "She was married to Bhojraj of the Sisodia clan of Mewar.", "She accepted Saint Kabir as her guru.", "Her songs are still sung in Rajasthan and Gujarat."],
            correct: 2
        },
        {
            question: "History (Q68): With reference to Islamic law, what is 'Sharia' and what are its primary sources?",
            options: ["It is a set of royal decrees determining taxation.", "It is the law governing the Muslim community, based on the Quran, Hadith, Ijma, and Qiyas.", "It is a religious tax imposed only on foreign travelers.", "It is a collection of poems written by Sufi saints."],
            correct: 1
        },
        {
            question: "History (Q69): What does the term 'Khanqah' signify in Sufi tradition?",
            options: ["A place where Sufi saints and their disciples lived and conducted activities.", "A special genre of music sung by Sufis.", "Land granted to Sufis by kings during the Mughal period.", "Autobiographies written by Sufi saints."],
            correct: 0
        },
        {
            question: "History (Q70): In the grand geography of the Vijayanagara Empire, the 'Kamalapuram Tank' was built by damming the water of which river?",
            options: ["Krishna River", "Tungabhadra River", "Kaveri River", "Godavari River"],
            correct: 1
        },
        {
            question: "History (Q71): Which statement is correct regarding the 'Hazara Rama Temple' in the royal center of Vijayanagara?",
            options: ["It was open for worship to the general public.", "It was used only by the king and his family, and scenes from the Ramayana are sculpted on its walls.", "It was a Buddhist monastery later converted.", "It was discovered by Colin Mackenzie in 1950."],
            correct: 1
        },
        {
            question: "History (Q72): During the 16th and 17th centuries, what did the term 'Jins-i-Kamil' denote in the agricultural system of the Mughal Empire?",
            options: ["Food crops facing acute shortage", "Perfect crops / high-value cash crops (like cotton, sugarcane) yielding maximum revenue", "Crops grown exclusively on dry and barren lands", "Medicinal herbs grown in royal gardens"],
            correct: 1
        },
        {
            question: "History (Q73): Under the 'Kankut' system of revenue assessment in the Mughal period, how was the tax determined?",
            options: ["By weighing the grain after harvest", "By estimation of the standing crop and inspecting the land", "By fixing a fixed cash amount before sowing the crop", "According to the sweet will of the Zamindar"],
            correct: 1
        },
        {
            question: "History (Q74): Following the Permanent Settlement of 1793, if Zamindars failed to pay revenue on time, their estates were auctioned. Which regulation was responsible for this?",
            options: ["Sunset Law", "Sunrise Law", "Doctrine of Lapse", "Permanent Tax Regulation"],
            correct: 0
        },
        {
            question: "History (Q75): In 1856, the Santhals revolted against the British and Zamindars. To pacify the revolt, which specific area did the British demarcate for them?",
            options: ["Damin-i-Koh", "Rajmahal Reserve", "Santhal Pargana Cantonment", "Kol District"],
            correct: 0
        },
        {
            question: "History (Q76): Which architectural style represents the 'Gateway of India' built in Bombay during the colonial period?",
            options: ["Neo-Classical style", "Indo-Saracenic style", "Neo-Gothic style", "Victorian style"],
            correct: 1
        },
        {
            question: "History (Q77): A major immediate cause of the outbreak of the Revolt of 1857 was the cartridges of the 'Enfield Rifle'. Rumors spread that these cartridges were greased with the fat of which animals?",
            options: ["Cows and Pigs", "Goats and Sheep", "Horses and Camels", "Lions and Elephants"],
            correct: 0
        },
        {
            question: "History (Q78): What was the central focus of Mahatma Gandhi's speech at the opening of Banaras Hindu University (BHU) in 1916?",
            options: ["Warning the British to leave India immediately", "Expressing concern over the neglect of peasants and workers in Indian politics and criticizing the elite class", "Presenting the blueprint of the Non-Cooperation Movement", "Discussing solely the issues of Champaran peasants"],
            correct: 1
        },
        {
            question: "History (Q79): Who were the three main members of the 'Cabinet Mission' plan that arrived in India in 1946?",
            options: ["Lord Mountbatten, Churchill, and Attlee", "Lord Dalhousie, Curzon, and Ripon", "Pethick-Lawrence, Sir Stafford Cripps, and A.V. Alexander", "John Simon, Clement Attlee, and Wavell"],
            correct: 2
        },
        {
            question: "History (Q80): Who put forward the strongest argument for a 'strong Centre' in the Constituent Assembly, believing that a weak Centre would tear the country apart?",
            options: ["Jawaharlal Nehru and B.N. Rau", "K. Santhanam and Pokker Sahib", "Jawaharlal Nehru and Dr. B.R. Ambedkar", "Mahatma Gandhi and Mohammad Ali Jinnah"],
            correct: 2
        },
        {
            question: "History (Q81): The Harappan site 'Banawali' is located in which Indian state, from where terracotta models of the plough have been found?",
            options: ["Rajasthan", "Punjab", "Haryana", "Gujarat"],
            correct: 2
        },
        {
            question: "History (Q82): With reference to the governance of Mahajanapadas in the 6th century BCE, what is meant by 'Oligarchy'?",
            options: ["Where a single absolute king ruled.", "Where the power of governance was exercised by a group of men, each known as a Raja.", "Where only religious leaders ruled.", "Where there was no government."],
            correct: 1
        },
        {
            question: "History (Q83): What was the primary duty of the officers named 'Rajukas' in Mauryan administration, as mentioned in Ashoka's inscriptions?",
            options: ["Guarding the royal palaces", "Administration of justice, rural development, and revenue collection", "Managing foreign guests exclusively", "Training horses for the cavalry"],
            correct: 1
        },
        {
            question: "History (Q84): Which distinctive feature is correct regarding the rulers of the Satavahana dynasty?",
            options: ["They were entirely of foreign origin.", "They were metronymic (named after mothers, e.g., Gautamiputra), but succession to the throne was patrilineal.", "They issued only massive gold coins.", "They were the bitterest enemies of Buddhism."],
            correct: 1
        },
        {
            question: "History (Q85): What major shift occurred in the history of Buddhism with the rise of the 'Mahayana' sect?",
            options: ["Buddha was depicted purely through symbols.", "Buddha began to be personified in human statues and worship of Bodhisattvas started.", "Marriage of Buddhist monks was made mandatory.", "Construction of stupas was completely stopped."],
            correct: 1
        },
        {
            question: "History (Q86): Why did the famous historian Cunningham, the first Director-General of ASI, fail to understand the significance of Harappa?",
            options: ["Because he never visited Harappa.", "Because he believed that Indian history began with the first cities in the Ganga valley, not the Indus valley.", "Because he found no Harappan artifact.", "He did not trust the accounts of Chinese travelers."],
            correct: 1
        },
        {
            question: "History (Q87): The Moroccan traveler Ibn Battuta wrote about which Indian crop that it amazes people because it looks like a human head?",
            options: ["Betel Leaf", "Coconut", "Watermelon", "Jackfruit"],
            correct: 1
        },
        {
            question: "History (Q88): Who was the first Mughal Emperor to visit the Ajmer Dargah of Sufi saint Khwaja Muinuddin Chishti, where he also built a mosque?",
            options: ["Babur", "Humayun", "Akbar", "Jahangir"],
            correct: 2
        },
        {
            question: "History (Q89): With reference to the religious and social system established by Guru Nanak Dev Ji, what do 'Sangat' and 'Pangat' mean?",
            options: ["Religious congregation and sitting together in the community kitchen (Langar)", "Two different factions of the Sikh army", "Special types of attires", "Technique of Gurdwara construction"],
            correct: 0
        },
        {
            question: "History (Q90): To which British engineer and surveyor goes the credit of bringing the ruins of the Vijayanagara Empire to light in the year 1800?",
            options: ["John Marshall", "Colin Mackenzie", "Alexander Cunningham", "R.E.M. Wheeler"],
            correct: 1
        },
        {
            question: "History (Q91): What exactly was the 'Mahanavami Dibba', a spectacular example of Vijayanagara architecture?",
            options: ["A massive grain storage house", "A massive platform used by kings for religious rituals and festivals", "A secret chamber for keeping royal treasure", "A victory memorial tower"],
            correct: 1
        },
        {
            question: "History (Q92): Who assassinated Abu'l Fazl, the author of the famous book 'Akbarnama' capturing the history of Akbar's reign?",
            options: ["Prince Khurram", "Bir Singh Dev Bundela (at the instigation of Prince Salim)", "Bairam Khan", "Man Singh"],
            correct: 1
        },
        {
            question: "History (Q93): In the Mughal administration, what did the terms 'Zat' and 'Sawar' represent under the Mansabdari system?",
            options: ["Caste of soldiers and breed of horses", "The administrative & personal rank (status/salary) of the Mansabdar and the number of cavalrymen maintained by him", "Religious tax and trade tax", "Royal bodyguards and infantry soldiers"],
            correct: 1
        },
        {
            question: "History (Q94): What was the primary objective of the Fifth Report presented in the British Parliament in 1813?",
            options: ["To expand the education system in India", "To review and regulate the administration and activities of the East India Company in India", "To grant pensions to Indian rulers", "To investigate the Santhal rebellion"],
            correct: 1
        },
        {
            question: "History (Q95): What aspect was repeatedly emphasized in the 'proclamations' during the Revolt of 1857 to make the rebellion widespread?",
            options: ["Hindu-Muslim unity and the protection of the religious rights of both communities", "Restoring land exclusively to Zamindars", "Adopting the English language", "Removing the Mughal Emperor"],
            correct: 0
        },
        {
            question: "History (Q96): At whose request did Mahatma Gandhi visit 'Champaran' (Bihar) in 1917 to look into the problems of indigo peasants?",
            options: ["Raj Kumar Shukla", "Rajendra Prasad", "Brajkishore Prasad", "J.B. Kripalani"],
            correct: 0
        },
        {
            question: "History (Q97): At the time of India's independence, who undertook a walking tour of 'Noakhali' (now in Bangladesh) to restore peace amid partition and communal riots?",
            options: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "Maulana Abul Kalam Azad"],
            correct: 2
        },
        {
            question: "History (Q98): Who played the most critical role as the Chairman of the Drafting Committee in finalizing the Constitution of India?",
            options: ["Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "K.M. Munshi", "Alladi Krishnaswami Ayyar"],
            correct: 1
        },
        {
            question: "History (Q99): From which site of the Harappan civilization has the 'Great Bath' been discovered, which was probably used for a special ritual bath?",
            options: ["Harappa", "Mohenjodaro", "Lothal", "Rakhigarhi"],
            correct: 1
        },
        {
            question: "History (Q100): Which policy did Mauryan Emperor Ashoka completely renounce after the Kalinga War (261 BCE), adopting 'Dhamma-ghosha' instead?",
            options: ["Bheri-ghosha (policy of war)", "Administrative policy", "Religious policy", "Foreign trade policy"],
            correct: 0
        },
        {
            question: "History (Q101): Which emperor of the Gupta dynasty is called the 'Napoleon of India' due to his military conquests and valor?",
            options: ["Chandragupta I", "Samudragupta", "Kumaragupta", "Skandagupta"],
            correct: 1
        },
        {
            question: "History (Q102): In which ancient language was the famous Buddhist scripture 'Tripitaka' originally composed?",
            options: ["Sanskrit", "Prakrit", "Pali", "Ardhamagadhi"],
            correct: 2
        },
        {
            question: "History (Q103): The famous 'Virupaksha Temple' of the Vijayanagara Empire is dedicated to which chief deity, who was considered the guardian deity of that region since ancient times?",
            options: ["Lord Shiva (form of Virupaksha)", "Lord Vishnu", "Lord Krishna", "Lord Ram"],
            correct: 0
        },
        {
            question: "History (Q104): In which year did Mughal Emperor Akbar completely abolish the religious tax 'Jizya' on Hindus, promoting social harmony?",
            options: ["1556", "1564", "1575", "1582"],
            correct: 1
        },
        {
            question: "History (Q105): During the Revolt of 1857, while the symbolic leadership in Delhi was in the hands of 'Bahadur Shah Zafar', who held the actual military command?",
            options: ["Bakht Khan", "Nana Sahib", "Tatya Tope", "Kunwar Singh"],
            correct: 0
        },
        {
            question: "History (Q106): Why was the 'Rowlatt Act' passed by the British Government in 1919 widely opposed in India?",
            options: ["Because it authorized the government to imprison any person without trial.", "Because it shut down Indian industries.", "Because it completely banned the press.", "Because it doubled the taxes."],
            correct: 0
        },
        {
            question: "History (Q107): Which famous slogan was given by Mahatma Gandhi during the 'Quit India Movement' launched in 1942?",
            options: ["Inquilab Zindabad", "Dilli Chalo", "Do or Die", "Swaraj is my birthright"],
            correct: 2
        },
        {
            question: "History (Q108): On which date did the Constitution of India come fully into force, which we celebrate every year as Republic Day?",
            options: ["26 November 1949", "15 August 1947", "26 January 1950", "30 January 1948"],
            correct: 2
        },
        {
            question: "History (Q109): By what popular name was the famous Sufi saint Sheikh Nasiruddin Chishti known, whose dargah is in Delhi?",
            options: ["Chirag-i-Dehli (Lamp of Delhi)", "Gharib Nawaz", "Sultan-ul-Mashaykh", "Bande Nawaz"],
            correct: 0
        },
        {
            question: "History (Q110): The Deccan Riots (1875) started primarily from which village in Pune district, where peasants burnt the account books of moneylenders?",
            options: ["Supa Village", "Shirur Village", "Indapur Village", "Baramati Village"],
            correct: 0
        },
                // इन्हें अपने 'hi' एरे (Array) के अंदर आगे पेस्ट करें:
        {
            question: "इतिहास (प्रश्न 111): प्राचीन भारत में 'अग्रहार' भूमि से क्या तात्पर्य था, जिसका उल्लेख गुप्तकालीन और गुप्तोत्तर कालीन अभिलेखों में मिलता है?",
            options: ["राजा द्वारा अपने सैन्य कमांडरों को दी जाने वाली भूमि", "ब्राह्मणों को दान में दी गई भूमि, जिससे कोई कर नहीं लिया जाता था", "शाही बागानों के लिए आरक्षित भूमि", "विदेशी व्यापारियों के ठहरने का स्थान"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 112): प्रसिद्ध पुरातत्वविद जॉन मार्शल ने किस वर्ष आधिकारिक रूप से संपूर्ण विश्व के सामने सिंधु घाटी में एक नई सभ्यता (हड़प्पा सभ्यता) की खोज की घोषणा की थी?",
            options: ["1921", "1922", "1924", "1930"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 113): अशोक के 'सिंह चतुर्मुख स्तंभ शीर्ष' (सारनाथ स्तंभ), जिसे भारत का राष्ट्रीय चिह्न माना गया है, के आधार पर कौन से चार पशु उत्कीर्ण हैं?",
            options: ["हाथी, घोड़ा, सांड और सिंह", "हाथी, बाघ, हिरण और बैल", "सिंह, चीता, ऊँट और गैंडा", "घोड़ा, कुत्ता, गाय और सिंह"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 114): प्राचीन काल के प्रसिद्ध 'बहिर्विवाह' पद्धति से क्या तात्पर्य है, जिसे धर्मशास्त्रों में सही माना गया था?",
            options: ["गोत्र के अंदर ही विवाह करना", "गोत्र से बाहर विवाह करना", "किसी विदेशी नागरिक से विवाह करना", "केवल राजाओं के परिवार में विवाह करना"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 115): बौद्ध धर्म के इतिहास में प्रथम बौद्ध संगीति (काउंसिल) का आयोजन राजगृह की किस गुफा में बुद्ध के महापरिनिर्वाण के तुरंत बाद किया गया था?",
            options: ["सप्तपर्णी गुफा", "लोमस ऋषि गुफा", "बाराबर गुफा", "एलोरा गुफा"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 116): जैन धर्म के अनुसार, इस संसार की सभी वस्तुएं (चाहे वे सजीव हों या निर्जीव) आत्मा से युक्त हैं। इस सिद्धांत को क्या कहा जाता है?",
            options: ["अनेकांतवाद", "स्यादवाद", "जीववाद (सर्वप्राणवाद)", "अपरिग्रह"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 117): अल-बिरूनी ने भारत के ब्राह्मणों से ज्ञान प्राप्त करने के बाद, किस प्रसिद्ध भारतीय ग्रन्थ का अरबी भाषा में अनुवाद किया था?",
            options: ["मनुस्मृति", "पतंजलि का महाभाष्य", "भगवद्गीता", "अर्थशास्त्र"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 118): मध्यकालीन यात्री बर्नियर ने भारतीय शहरों को 'शिविर नगर' (Camp Towns) कहा था। इसका क्या अर्थ था?",
            options: ["वे शहर जो केवल सैनिकों के रहने के लिए बने थे", "वे शहर जो शाही दरबार के आगमन पर अस्तित्व में आते थे और उसके जाने पर उजड़ जाते थे", "वे शहर जहाँ केवल तंबू गाड़े जाते थे", "वे शहर जो पूरी तरह बंजर भूमि पर बने थे"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 119): भक्ति परंपरा की प्रसिद्ध नयनार महिला संत 'करइक्काल अम्मैयार' ने शिव की भक्ति में किस मार्ग को अपनाया था?",
            options: ["अत्यंत कोमल और संगीत का मार्ग", "घोर वैराग्य और चरम तपस्या (राक्षसी रूप धारण करना) का मार्ग", "राजसी ठाट-बाट का मार्ग", "घरेलू जीवन का मार्ग"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 120): सूफी संत बाबा फरीद के उपदेशों और वाणियों को सिखों के किस पवित्र धर्मग्रंथ में स्थान दिया गया है?",
            options: ["गुरु ग्रंथ साहिब (आदि ग्रंथ)", "दसम ग्रंथ", "जपुजी साहिब", "रहिरास साहिब"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 121): विजयनगर साम्राज्य का प्रसिद्ध 'विजया विट्ठल मंदिर' अपने किन विशेष स्तंभों के लिए प्रसिद्ध है, जिनसे संगीत की ध्वनियाँ निकलती हैं?",
            options: ["56 संगीतमय स्तंभ (Musical Pillars)", "स्वर्ण निर्मित स्तंभ", "हाथी की आकृति वाले स्तंभ", "अशोक चक्र वाले स्तंभ"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 122): विजयनगर के शासक कृष्णदेव राय ने किस भाषा में 'अमुक्तमाल्याद' नामक एक प्रसिद्ध प्रशासनिक व राजनीतिक ग्रंथ की रचना की थी?",
            options: ["तमिल", "तेलुगु", "कन्नड़", "संस्कृत"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 123): मुगल काल में ग्रामीण समुदायों का हिस्सा रहे 'पाहिकाश्त' किसान कौन होते थे?",
            options: ["वे किसान जो उसी गाँव में रहते थे जहाँ उनकी जमीन थी", "वे गैर-निवासी किसान जो दूसरे गाँवों से ठेके पर खेती करने आते थे", "वे भूमिहीन मजदूर जो बंधुआ थे", "शाही अधिकारी जो खेती की देखरेख करते थे"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 124): अकबर के आदेश पर तैयार की गई 'आइन-ए-अकबरी' का मुख्य संकलनकर्ता अबुल फजल था। यह ग्रन्थ कुल कितने भागों (दफ्तरों) में विभाजित है?",
            options: ["तीन भाग", "चार भाग", "पाँच भाग", "सात भाग"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 125): बंगाल के वर्धमान में वर्ष 1797 में की गई प्रसिद्ध जमींदारी नीलामी के समय राजा ने अपनी जमींदारी बचाने के लिए कौन सी चाल चली थी?",
            options: ["फर्जी बिक्री (अधिकारियों को रिश्वत देकर बेनामी खरीदार खड़े करना)", "अंग्रेजों पर हमला करना", "किसानों को भड़काना", "अदालत से स्टे लेना"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 126): वर्ष 1857 के विद्रोह के समय लखनऊ में हेनरी लॉरेंस की मृत्यु किस प्रसिद्ध इमारत की घेराबंदी के दौरान हुई थी?",
            options: ["रेजीडेंसी (Residency)", "शाही महल", "रूमी दरवाजा", "बड़ा इमामबाड़ा"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 127): 1857 के विद्रोह को कुचलने के लिए अंग्रेजों ने किस नीति का पालन किया, जिसके तहत पकड़े गए बागियों को तोपों के मुंह पर बांधकर उड़ा दिया जाता था?",
            options: ["दमन और आतंक की नीति (Reign of Terror)", "सहानुभूति की नीति", "फूट डालो और राज करो", "सहायक संधि नीति"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 128): महात्मा गांधी ने वर्ष 1920 में शुरू किए गए असहयोग आंदोलन के दौरान विदेशी कपड़ों के बहिष्कार के साथ-साथ किस घरेलू उद्योग को बढ़ावा देने पर सबसे अधिक बल दिया था?",
            options: ["लोहा और इस्पात उद्योग", "हथकरघा और चरखा (खादी) उद्योग", "चमड़ा उद्योग", "हस्तशिल्प और सोने के आभूषण"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 129): मुस्लिम लीग ने किस तिथि को 'प्रत्यक्ष कार्यवाही दिवस' (Direct Action Day) के रूप में मनाने की घोषणा की थी, जिसके बाद कलकत्ता में भीषण दंगे हुए?",
            options: ["15 अगस्त 1947", "16 अगस्त 1946", "26 जनवरी 1950", "23 मार्च 1940"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 130): भारतीय संविधान के निर्माण में 'संवैधानिक सलाहकार' (Constitutional Advisor) के पद पर किसे नियुक्त किया गया था, जिन्होंने प्रारंभिक ड्राफ्ट तैयार किया था?",
            options: ["बी.एन. राव (B.N. Rau)", "सच्चिदानंद सिन्हा", "डॉ. राजेन्द्र प्रसाद", "के.एम. मुंशी"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 131): हड़प्पा सभ्यता के किस स्थल से 'तांबे के रथ' का प्रतिरूप मिला है, जो इसकी धातु कला को दर्शाता है?",
            options: ["दैमाबाद (महाराष्ट्र)", "राखीगढ़ी (हरियाणा)", "रोपड़ (पंजाब)", "आलमगीरपुर (उत्तर प्रदेश)"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 132): मौर्य काल में पाटलिपुत्र के नगर प्रशासन की देखरेख के लिए छह समितियां थीं। प्रत्येक समिति में कितने सदस्य होते थे?",
            options: ["तीन सदस्य", "पाँच सदस्य", "दस सदस्य", "बारह सदस्य"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 133): राजा खारवेल का प्रसिद्ध 'हाथीगुम्फा अभिलेख' भारत के किस राज्य में स्थित है, जिससे उनके शासनकाल की जानकारी मिलती है?",
            options: ["ओडिशा", "आंध्र प्रदेश", "तमिलनाडु", "कर्नाटक"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 134): महाभारत के आख्यान भाग में क्या शामिल है, जो इसे उपदेशात्मक भाग से अलग करता है?",
            options: ["कहानियों और घटनाओं का संग्रह", "सामाजिक आचार-विचार के नियम", "धार्मिक अनुष्ठानों की विधियां", "मंत्रों का संग्रह"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 135): बौद्ध ग्रंथों के अनुसार, वह स्थान जहाँ बुद्ध ने अपना 'प्रथम उपदेश' (धर्मचक्रप्रवर्तन) दिया था, किस नाम से जाना जाता है?",
            options: ["बोधिगया", "सारनाथ", "कुशीनगर", "लुम्बिनी"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 136): जैन धर्म में 'पाँच महाव्रतों' में से पाँचवाँ महाव्रत 'ब्रह्मचर्य' मूल रूप से किसने जोड़ा था?",
            options: ["ऋषभदेव", "पार्श्वनाथ", "नेमिनाथ", "महावीर स्वामी"],
            correct: 3
        },
        {
            question: "इतिहास (प्रश्न 137): फ्रांसिस्का बर्नियर की प्रसिद्ध पुस्तक 'ट्रैवल्स इन द मुगल एम्पायर' का प्रकाशन सर्वप्रथम किस शहर में हुआ था?",
            options: ["पेरिस", "लंदन", "दिल्ली", "एम्सटर्डम"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 138): कबीर की बानियों का वह भाग जो सिखों के पवित्र ग्रंथ 'आदि ग्रंथ' में संकलित है, उसे क्या कहा जाता है?",
            options: ["कबीर ग्रंथावली", "कबीर बीजक", "सबद और साखी", "अनुराग सागर"],
            correct: 2
        },
        {
            question: "इतिहास (प्रश्न 139): विजयनगर साम्राज्य का वह पहला राजवंश कौन सा था, जिससे हरिहर और बुक्का संबंधित थे?",
            options: ["संगम राजवंश", "सालुव राजवंश", "तुलुव राजवंश", "अराविदु राजवंश"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 140): मुगल काल के दौरान भारत में तंबाकू की खेती की शुरुआत किस विदेशी शक्ति द्वारा 17वीं शताब्दी के प्रारंभ में की गई थी?",
            options: ["अंग्रेज", "पुर्तगाली", "डच", "फ्रांसीसी"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 141): ब्रिटिश शासन के खिलाफ वर्ष 1831-32 में हुआ प्रसिद्ध 'कोल विद्रोह' मुख्य रूप से किस क्षेत्र में फैला था?",
            options: ["छोटा नागपुर क्षेत्र", "राजमहल की पहाड़ियां", "खानदेश", "मालाबार"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 142): 1857 के विद्रोह के समय झांसी की रानी लक्ष्मीबाई के खिलाफ सैन्य अभियान का नेतृत्व करने वाला ब्रिटिश कमांडर कौन था?",
            options: ["सर ह्यूरोज (Sir Hugh Rose)", "कॉलिन कैंपबेल", "हेनरी हैवलॉक", "विलियम टेलर"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 143): वर्ष 1919 के जलियांवाला बाग हत्याकांड के विरोध में किसने ब्रिटिश सरकार द्वारा दी गई 'नाइटहुड' (Sir) की उपाधि लौटा दी थी?",
            options: ["महात्मा गांधी", "रवींद्रनाथ टैगोर", "बाल गंगाधर तिलक", "गोपाल कृष्ण गोखले"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 144): गांधी-इरविन समझौते (1931) के तहत किस मुख्य मांग को अंग्रेजों ने स्वीकार किया था, जिसके बाद सविनय अवज्ञा आंदोलन स्थगित हुआ?",
            options: ["पूर्ण स्वतंत्रता देना", "तटीय इलाकों में नमक बनाने की अनुमति और राजनीतिक कैदियों की रिहाई", "जमींदारी प्रथा का अंत", "सेना का भारतीयकरण करना"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 145): भारतीय संविधान सभा के किस सदस्य ने पुरजोर शब्दों में यह मांग की थी कि हिंदी को तुरंत देश की 'राष्ट्रभाषा' घोषित किया जाना चाहिए?",
            options: ["आर.वी. धुलेकर", "जवाहरलाल नेहरू", "डॉ. बी.आर. अम्बेडकर", "टी.ए. रामलिंगम चेट्टियार"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 146): हड़प्पा काल के 'बांट' (Weights) किस पत्थर से बनाए जाते थे, जो आमतौर पर घनाकार होते थे और उन पर कोई निशान नहीं होता था?",
            options: ["चर्ट (Chert) पत्थर", "कैलसाइट पत्थर", "क्वार्ट्ज पत्थर", "बलुआ पत्थर"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 147): प्रसिद्ध इतिहासकार कलहण द्वारा रचित 'राजतरंगिणी' से भारत के किस क्षेत्र का प्राचीन इतिहास ज्ञात होता है?",
            options: ["कश्मीरी राज राजवंश", "मगध साम्राज्य", "चोल राजवंश", "राजस्थान के राजपूत"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 148): मौर्य साम्राज्य के संस्थापक चंद्रगुप्त मौर्य के प्रधानमंत्री चाणक्य द्वारा लिखित 'अर्थशास्त्र' मुख्य रूप से किस विषय पर आधारित है?",
            options: ["अर्थशास्त्र और धन का प्रबंधन", "राजनीति और शासन संचालन के सिद्धांत (Statecraft)", "धार्मिक अनुष्ठान", "विदेशी देशों का भूगोल"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 149): प्राचीन विवाह पद्धतियों में 'अंतर्विवाह' (Endogamy) से क्या तात्पर्य है?",
            options: ["एक ही गोत्र, जाति या समूह के भीतर विवाह करना", "विदेशी समूहों में विवाह करना", "जाति से बाहर जाकर विवाह करना", "राजघरानों के बीच का राजनीतिक विवाह"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 150): बौद्ध धर्म के अनुसार, संघ में रहने वाले भिक्षुओं और भिक्षुणियों के लिए बनाए गए कड़े नियमों का संग्रह किस पिटक में मिलता है?",
            options: ["विनय पिटक", "सुत्त पिटक", "अभिधम्म पिटक", "दीपवंश"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 151): जैन धर्म के प्रथम तीर्थंकर कौन थे, जिन्हें जैन परंपरा में इस धर्म का मूल संस्थापक माना जाता है?",
            options: ["ऋषभदेव (आदिनाथ)", "अशोक", "महावीर स्वामी", "पार्श्वनाथ"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 152): इब्न बतूता ने भारत की किस संचार व्यवस्था को 'दावा' कहा था, जो बहुत तीव्र थी और हर एक तिहाई मील पर स्थापित थी?",
            options: ["पैदल डाक व्यवस्था (Foot-post)", "अश्व डाक व्यवस्था", "कबूतर डाक व्यवस्था", "शाही गुप्तचर व्यवस्था"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 153): सूफी परंपरा में 'बेशरिया' सूफियों से क्या तात्पर्य था, जो मुख्य रूप से कलंदर और मदारियों के नाम से जाने जाते थे?",
            options: ["जो इस्लामी शरिया कानून का कड़ाई से पालन करते थे", "जो शरिया कानून की परवाह न करके रहस्यवादी और फकीरों की तरह रहते थे", "जो केवल महलों में रहते थे", "जो सेना में भर्ती होते थे"],
            correct: 1
        },
        {
            question: "इतिहास (प्रश्न 154): विजयनगर साम्राज्य का वह कौन सा प्रसिद्ध भवन है, जिसकी स्थापत्य शैली में इंडो-इस्लामिक प्रभाव साफ दिखाई देता है और जिसे 'लोटस महल' भी कहा जाता है?",
            options: ["कमल महल (Lotus Mahal)", "सभामंडप", "महानवमी डिब्बा", "हजार राम मंदिर"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 155): मुगल सम्राट अकबर ने अपनी नई राजधानी 'फतेहपुर सीकरी' में सूफी संत शेख सलीम चिश्ती की दरगाह के पास किसका निर्माण करवाया था?",
            options: ["बुलंद दरवाजा", "ताजमहल", "लाल किला", "चारमीनार"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 156): मद्रास (चेन्नई) में औपनिवेशिक काल के दौरान गोरों के रहने वाले सुरक्षित इलाके को अंग्रेजों द्वारा क्या नाम दिया गया था?",
            options: ["व्हाइट टाउन (White Town / Fort St. George)", "ब्लैक टाउन", "कैंटोनमेंट", "सिविल लाइंस"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 157): बिहार के जगदीशपुर में 1857 के विद्रोह का कुशल सैन्य नेतृत्व किस वृद्ध जमींदार ने किया था, जिन्हें 'बिहार का सिंह' कहा जाता है?",
            options: ["कुंवर सिंह", "अमर सिंह", "पीर अली", "बाबू कली खान"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 158): वर्ष 1922 में हुए 'चौरी-चौरा कांड' के कारण महात्मा गांधी ने किस बड़े आंदोलन को तुरंत स्थगित करने का निर्णय लिया था?",
            options: ["असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन", "स्वदेशी आंदोलन"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 159): वर्ष 1947 में भारत के विभाजन के समय पंजाब और बंगाल में सीमाओं का निर्धारण करने के लिए गठित सीमा आयोग के अध्यक्ष कौन थे?",
            options: ["सिरिल रेडक्लिफ (Cyril Radcliffe)", "लॉर्ड माउंटबेटन", "पैथिक लॉरेंस", "सर स्टैफोर्ड क्रिप्स"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 160): भारतीय संविधान सभा के कुल कितने सत्र (Sessions) आयोजित किए गए थे, जिसके दौरान संविधान को अंतिम रूप दिया गया?",
            options: ["11 सत्र", "15 सत्र", "9 सत्र", "20 सत्र"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 161): हड़प्पा सभ्यता के किस स्थल से 'जलाशयों और वाटर हार्वेस्टिंग सिस्टम' के सबसे उन्नत साक्ष्य मिले हैं?",
            options: ["धौलावीरा (गुजरात)", "लोथल", "कालीबंगा", "राखीगढ़ी"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 162): यूनानी राजदूत मेगास्थनीज ने मौर्य साम्राज्य पर 'इंडिका' नामक पुस्तक लिखी। वह किस यूनानी शासक का दूत बनकर चंद्रगुप्त मौर्य के दरबार में आया था?",
            options: ["सैल्युकस निकेटर", "सिकंदर", "एंटिओकस", "प्लूटार्क"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 163): गुप्त काल में सोने के सिक्कों को दीनार कहा जाता था, जबकि चाँदी के सिक्कों को क्या कहा जाता था?",
            options: ["रूप्यक", "जीतल", "टका", "कार्षापण"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 164): मनुस्मृति के अनुसार पुरुषों के लिए धन अर्जित करने के कुल कितने वैध तरीके बताए गए थे?",
            options: ["सात तरीके", "छह तरीके", "आठ तरीके", "दस तरीके"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 165): बौद्ध धर्म के सिद्धांतों के अनुसार 'अष्टांगिक मार्ग' का पालन करने से मनुष्य को किसकी प्राप्ति होती है?",
            options: ["निर्वाण (मोक्ष)", "स्वर्ग", "पुनर्जन्म", "भौतिक संपत्ति"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 166): सूफी मत के इतिहास में 'सिलसिला' शब्द का शाब्दिक अर्थ क्या है, जो गुरु और शिष्य के अटूट संबंध को दर्शाता है?",
            options: ["जंजीर या कड़ी (Chain)", "पवित्र ग्रंथ", "धार्मिक गीत", "उपवास"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 167): विजयनगर साम्राज्य का प्रसिद्ध 'हम्पी' स्थल किस नदी के तट पर स्थित है, जिसकी खोज कोलिन मैकेन्जी ने की थी?",
            options: ["तुंगभद्रा नदी", "कृष्णा नदी", "कावेरी नदी", "गोदावरी नदी"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 168): मुगल काल में राजस्व वसूली के लिए नियुक्त वह अधिकारी जो परगना स्तर पर मुख्य राजस्व अधिकारी होता था, उसे क्या कहते थे?",
            options: ["अमिल-गुजार (या आमिल)", "मीर बख्शी", "कोतवाल", "काजी"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 169): अवध को ब्रिटिश साम्राज्य में मिलाने के लिए लॉर्ड डलहौजी ने किस नवाब पर 'कुशासन का आरोप' (Misgovernance) लगाया था?",
            options: ["वाजिद अली शाह", "आसफ-उद-दौला", "सुजाउद्दौला", "सादात खान"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 170): 1857 के विद्रोह के दौरान कानपुर में विद्रोह का नेतृत्व किसने किया था और स्वयं को पेशवा घोषित किया था?",
            options: ["नाना साहेब", "तांत्या टोपे", "अजीमुल्ला खान", "बख्त खान"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 171): महात्मा गांधी ने किस वर्ष 'चंपारण सत्याग्रह' के माध्यम से भारत में अपना पहला शांतिपूर्ण जन आंदोलन शुरू किया?",
            options: ["1917", "1915", "1919", "1920"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 172): वर्ष 1930 में महात्मा गांधी ने साबरमती आश्रम से कितने अनुयायियों के साथ दांडी मार्च की शुरुआत की थी?",
            options: ["78 अनुयायी", "100 अनुयायी", "50 अनुयायी", "200 अनुयायी"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 173): भारतीय संविधान सभा का प्रथम अधिवेशन (First Session) किस तिथि को शुरू हुआ था, जिसकी अध्यक्षता डॉ. सच्चिदानंद सिन्हा ने की थी?",
            options: ["9 दिसंबर 1946", "11 दिसंबर 1946", "26 नवंबर 1949", "15 अगस्त 1947"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 174): हड़प्पा सभ्यता के किस स्थल से 'अग्निकुंड (हवन कुंड)' के साक्ष्य मिले हैं, जो धार्मिक अनुष्ठानों को दर्शाते हैं?",
            options: ["कालीबंगा और लोथल", "मोहनजोदड़ो", "हड़प्पा", "चन्हुदड़ो"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 175): मौर्य वंश का अंतिम शासक कौन था, जिसकी हत्या उसके सेनापति पुष्यमित्र शुंग ने करके शुंग राजवंश की स्थापना की थी?",
            options: ["बृहद्रथ", "दशरथ", "सम्प्रति", "देववर्मन"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 176): समुद्रगुप्त की ऐतिहासिक सैन्य विजयों का विवरण देने वाली 'प्रयाग प्रशस्ति' किस प्रसिद्ध स्तंभ पर खुदी हुई है?",
            options: ["इलाहाबाद स्तंभ (अशोक स्तंभ)", "लोहे का स्तंभ (महरौली)", "सारनाथ स्तंभ", "सांची स्तंभ"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 177): महाभारत का युद्ध कुरुक्षेत्र के मैदान में कुल कितने दिनों तक लड़ा गया था, जिसका विवरण आदिपर्व में मिलता है?",
            options: ["18 दिन", "15 दिन", "20 दिन", "24 दिन"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 178): बौद्ध धर्म की 'महायान' शाखा का विकास मुख्य रूप से किस कुषाण राजा के शासनकाल के दौरान चौथी बौद्ध संगीति में हुआ था?",
            options: ["कनिष्क", "कुजुल कडफिसेस", "विम कडफिसेस", "हुविष्क"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 179): जैन धर्म के सिद्धांतों के अनुसार, मोक्ष प्राप्त करने के लिए 'त्रिरत्न' का पालन आवश्यक है। इन त्रिरत्नों में क्या शामिल है?",
            options: ["सम्यक दर्शन, सम्यक ज्ञान, सम्यक चरित्र", "सत्य, अहिंसा, अस्तेय", "बुद्ध, धम्म, संघ", "ज्ञान, कर्म, भक्ति"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 180): इब्न बतूता के अनुसार भारत का वह कौन सा शहर था जो आकार और आबादी में दिल्ली के बराबर था और दक्षिण भारत का सबसे बड़ा केंद्र था?",
            options: ["दौलताबाद", "लखनौती", "खंभात", "मदुरै"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 181): सूफी संत ख्वाजा मुइनुद्दीन चिश्ती किसके शासनकाल में अजमेर आए थे और उन्होंने अपनी खानकाह स्थापित की थी?",
            options: ["पृथ्वीराज चौहान", "इल्तुतमिश", "अलाउद्दीन खिलजी", "मुहम्मद गोरी"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 182): विजयनगर साम्राज्य में भू-राजस्व (Land Revenue) की दर आमतौर पर उपज का कितना हिस्सा निर्धारित की गई थी?",
            options: ["उपज का 1/6 भाग", "उपज का 1/3 भाग", "उपज का 1/2 भाग", "उपज का 1/4 भाग"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 183): अकबर ने किस वर्ष एक नए धार्मिक और सामाजिक दृष्टिकोण 'दीन-ए-इलाही' (तौहीद-ए-इलाही) की घोषणा की थी?",
            options: ["1582", "1575", "1579", "1585"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 184): वर्ष 1793 में बंगाल में स्थायी बंदोबस्त लागू करने वाला ब्रिटिश गवर्नर जनरल कौन था?",
            options: ["लॉर्ड कॉर्नवॉलिस (Lord Cornwallis)", "वारेन हेस्टिंग्स", "लॉर्ड वेलेज़ली", "लॉर्ड विलियम बेंटिक"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 185): 1857 के स्वतंत्रता संग्राम के दौरान फैजाबाद में विद्रोह का भयंकर नेतृत्व करने वाले प्रसिद्ध मौलवी कौन थे?",
            options: ["मौलवी अहमदशाह (Ahmadullah Shah)", "मौलवी लियाकत अली", "खान बहादुर खान", "मजहर अली"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 186): वर्ष 1919 में महात्मा गांधी ने ब्रिटिश सरकार के किस दमनकारी कानून के खिलाफ देशव्यापी 'रौलट सत्याग्रह' शुरू किया था?",
            options: ["रौलट एक्ट", "वर्नाक्युलर एक्ट", "नमक कानून", "आर्म्स एक्ट"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 187): द्वितीय गोलमेज सम्मेलन (Second Round Table Conference - 1931) में कांग्रेस के एकमात्र प्रतिनिधि के रूप में किसने भाग लिया था?",
            options: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "सुभाष चंद्र बोस"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 188): भारतीय संविधान को संविधान सभा द्वारा किस तिथि को अंगीकृत, अधिनियमित और आत्मार्पित (Adopted) किया गया था?",
            options: ["26 नवंबर 1949", "26 जनवरी 1950", "15 अगस्त 1947", "9 दिसंबर 1946"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 189): हड़प्पा सभ्यता के किस प्रसिद्ध स्थल से 'कांस्य की नर्तकी' (Bronze Dancing Girl) की मूर्ति मिली है, जो उनकी धातु ढलाई कला का शिखर है?",
            options: ["मोहनजोदड़ो", "हड़प्पा", "लोथल", "कालीबंगा"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 190): मौर्य प्रशासन में 'समाहर्ता' नामक उच्च अधिकारी का मुख्य कार्य क्या था?",
            options: ["राजकीय कर संग्रह और बजट तैयार करना (Chief Revenue Collector)", "शाही खजाने की सुरक्षा", "सेना का नेतृत्व", "न्याय व्यवस्था"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 191): कनिष्क द्वारा 78 ईस्वी में शुरू किया गया संवत किस नाम से जाना जाता है, जिसे भारत सरकार द्वारा आधिकारिक रूप से प्रयोग किया जाता है?",
            options: ["शक संवत", "विक्रम संवत", "गुप्त संवत", "हिजरी संवत"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 192): बौद्ध परंपरा के अनुसार, बौद्ध भिक्षुणियों के संगठन 'भिक्षुणी संघ' की स्थापना बुद्ध ने किस स्थान पर की थी?",
            options: ["वैशाली", "सारनाथ", "राजगृह", "श्रावस्ती"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 193): विजयनगर साम्राज्य का प्रसिद्ध 'हज़ारा राम मंदिर' किस राजा के शासनकाल के दौरान निर्मित किया गया था?",
            options: ["कृष्णदेव राय", "देवराय प्रथम", "हरिहर द्वितीय", "अच्युत राय"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 194): मुगल काल में 'अकबरनामा' के तीसरे भाग को किस नाम से जाना जाता है, जो मुगल साम्राज्य के नियमों और सांख्यिकी का विस्तृत ब्योरा है?",
            options: ["आइन-ए-अकबरी", "तारिख-ए-फरिश्ता", "मुंतखाब-उत-तवारीख", "तुजुक-ए-जहाँगीरी"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 195): अंग्रेजों ने बॉम्बे (मुंबई) द्वीप को किस यूरोपीय देश के राजा से दहेज के रूप में प्राप्त किया था?",
            options: ["पुर्तगाल", "डच (हॉलैंड)", "फ्रांस", "स्पेन"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 196): 1857 के विद्रोह के समय राजस्थान के किस छावनी केंद्र में सैनिकों ने 'चलो दिल्ली, मारो फिरंगी' का नारा देकर विद्रोह किया था?",
            options: ["एरिनपुरा छावनी", "नसीराबाद छावनी", "नीमच छावनी", "ब्यावर छावनी"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 197): वर्ष 1918 में महात्मा गांधी ने गुजरात के अहमदाबाद में मिल मजदूरों के समर्थन में जो आंदोलन किया, उसमें उनकी मुख्य मांग क्या थी?",
            options: ["प्लेग बोनस को 35% बढ़ाना", "काम के घंटे कम करना", "वेतन का नकद भुगतान", "जमीन कर माफ करना"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 198): वर्ष 1929 के ऐतिहासिक लाहौर अधिवेशन में कांग्रेस के अध्यक्ष कौन थे, जिन्होंने पूर्ण स्वराज का प्रस्ताव पारित किया था?",
            options: ["जवाहरलाल नेहरू", "महात्मा गांधी", "मोतीलाल नेहरू", "सुभाष चंद्र बोस"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 199): भारतीय संविधान सभा की 'प्रारूप समिति' का गठन किस तिथि को किया गया था, जिसके अध्यक्ष डॉ. बी.आर. अम्बेडकर थे?",
            options: ["29 अगस्त 1947", "15 अगस्त 1947", "26 नवंबर 1949", "9 दिसंबर 1946"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 200): हड़प्पा सभ्यता का प्रसिद्ध स्थल 'कालीबंगा' राजस्थान के किस जिले में स्थित है, जहाँ से जुते हुए खेत के साक्ष्य मिले हैं?",
            options: ["हनुमानगढ़ जिला", "श्रीगंगानगर जिला", "बीकानेर जिला", "जैसलमेर जिला"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 201): अशोक के अभिलेखों को पढ़ने में सर्वप्रथम सफलता पाने वाले जेम्स प्रिंसेप किस टंकणालय (Mint) के अधिकारी थे?",
            options: ["कलकत्ता टंकणालय", "बॉम्बे टंकणालय", "मद्रास टंकणालय", "लंदन टंकणालय"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 202): गुप्त सम्राट चंद्रगुप्त द्वितीय को किस अन्य प्रसिद्ध नाम या उपाधि से जाना जाता है?",
            options: ["विक्रमादित्य", "महेंद्रादित्य", "प्रियदसी", "कविराज"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 203): बौद्ध धर्म के दार्शनिक सिद्धांतों और विषयों का विश्लेषण किस पिटक में विस्तार से किया गया है?",
            options: ["अभिधम्म पिटक", "विनय पिटक", "सुत्त पिटक", "महावंश"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 204): सूफी परंपरा में 'वली' शब्द का क्या अर्थ होता है, जो ईश्वर के अत्यंत प्रिय और आध्यात्मिक मित्र माने जाते थे?",
            options: ["ईश्वर का मित्र (Saint/Friend of God)", "शाही सैनिक", "संगीतकार", "कर वसूलने वाला"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 205): विजयनगर साम्राज्य की स्थापना के समय दिल्ली सल्तनत पर किस सुल्तान का शासन था?",
            options: ["मुहम्मद बिन तुगलक", "गयासुद्दीन तुगलक", "अलाउद्दीन खिलजी", "फिरोज शाह तुगलक"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 206): मुगल काल में भूमि के वर्गीकरण के अनुसार, वह भूमि जिस पर प्रत्येक वर्ष नियमित रूप से खेती की जाती थी और जो कभी खाली नहीं छोड़ी जाती थी, उसे क्या कहते थे?",
            options: ["पोलज (Polaj)", "परौती", "चच्चर", "बंजर"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 207): वर्ष 1855-56 में राजमहल की पहाड़ियों में हुए संथाल विद्रोह के दो सबसे प्रमुख आदिवासी नेता कौन थे?",
            options: ["सिद्घू और कान्हू (Sidhu and Kanhu)", "बिरसा मुंडा", "गोमधर कोंवर", "अल्लूरी सीताराम राजू"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 208): 1857 के विद्रोह के समय भारत के सबसे बड़े रियासतों में से एक 'अवध' को लॉर्ड डलहौजी ने क्या कहकर पुकारा था?",
            options: ["यह गिलास फल (चेरी) एक दिन हमारे ही मुंह में आकर गिरेगा", "यह एक अभेद्य किला है", "यह अंग्रेजों का सबसे वफादार मित्र है", "यह बंजर भूमि का टुकड़ा है"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 209): वर्ष 1932 में महात्मा गांधी और डॉ. बी.आर. अम्बेडकर के बीच दलितों के पृथक निर्वाचन को लेकर कौन सा प्रसिद्ध समझौता हुआ था?",
            options: ["पूना पैक्ट (Poona Pact)", "गांधी-इरविन समझौता", "लखनऊ समझौता", "शिमला समझौता"],
            correct: 0
        },
        {
            question: "इतिहास (प्रश्न 210): भारतीय संविधान सभा के किस सत्र के अंतिम दिन, यानी 24 जनवरी 1950 को सभी सदस्यों ने संविधान की प्रतियों पर अपने अंतिम हस्ताक्षर किए थे?",
            options: ["11वें सत्र के विशेष अंतिम दिन", "12वें विशेष अधिवेशन में", "10वें सत्र में", "15वें सत्र में"],
            correct: 0
        },
                // इन्हें अपने 'en' एरे (Array) के अंदर आगे पेस्ट करें:
        {
            question: "History (Q111): In ancient India, what did the term 'Agrahara' land signify, as mentioned in Gupta and post-Gupta inscriptions?",
            options: ["Land granted by the king to his military commanders", "Land granted to Brahmins, which was exempted from all taxes", "Land reserved for royal gardens", "Resting place for foreign merchants"],
            correct: 1
        },
        {
            question: "History (Q12): In which year did the famous archaeologist John Marshall officially announce the discovery of a new civilization (the Harappan civilization) in the Indus Valley to the world?",
            options: ["1921", "1922", "1924", "1930"],
            correct: 2
        },
        {
            question: "History (Q113): On the base of Ashoka's 'Lion Capital' (Sarnath Pillar), which is accepted as the National Emblem of India, which four animals are carved?",
            options: ["Elephant, Horse, Bull, and Lion", "Elephant, Tiger, Deer, and Ox", "Lion, Cheetah, Camel, and Rhinoceros", "Horse, Dog, Cow, and Lion"],
            correct: 0
        },
        {
            question: "History (Q114): In ancient times, what is meant by the famous practice of 'Exogamy', which was approved by the Dharmashastras?",
            options: ["Marrying within one's own gotra", "Marrying outside one's own gotra", "Marrying a foreign citizen", "Marrying only within the king's family"],
            correct: 1
        },
        {
            question: "History (Q115): In the history of Buddhism, where was the First Buddhist Council organized immediately after the Mahaparinirvana of Buddha?",
            options: ["Saptaparni Cave", "Lomas Rishi Cave", "Barabar Cave", "Ellora Cave"],
            correct: 0
        },
        {
            question: "History (Q116): According to Jainism, everything in this world (whether animate or inanimate) possesses a soul. What is this principle called?",
            options: ["Anekantavada", "Syadvada", "Animism (Jivavada)", "Aparigraha"],
            correct: 2
        },
        {
            question: "History (Q117): After acquiring knowledge from the Brahmins of India, which famous Indian text did Al-Biruni translate into Arabic?",
            options: ["Manusmriti", "Patanjali's Mahabhashya", "Bhagavad Gita", "Arthashastra"],
            correct: 1
        },
        {
            question: "History (Q118): The medieval traveler Bernier called Indian towns 'Camp Towns'. What did this imply?",
            options: ["Towns that were built only for soldiers to stay", "Towns that came into existence with the arrival of the royal court and declined with its departure", "Towns where only tents were pitched", "Towns built entirely on barren lands"],
            correct: 1
        },
        {
            question: "History (Q119): Which path of devotion did the famous Nayanar woman saint 'Karaikkal Ammaiyar' adopt in her devotion to Shiva?",
            options: ["A path of extreme gentleness and music", "A path of extreme asceticism and severe penance (adopting a demoness form)", "A path of royal grandeur", "A path of domestic life"],
            correct: 1
        },
        {
            question: "History (Q120): The teachings and verses of Sufi saint Baba Farid are included in which sacred scripture of the Sikhs?",
            options: ["Guru Granth Sahib (Adi Granth)", "Dasam Granth", "Japji Sahib", "Rehras Sahib"],
            correct: 0
        },
        {
            question: "History (Q121): The famous 'Vijaya Vitthala Temple' of the Vijayanagara Empire is celebrated for its specific pillars that emit musical notes. How many such pillars are there?",
            options: ["56 Musical Pillars", "Gold-plated pillars", "Elephant-shaped pillars", "Ashoka Chakra pillars"],
            correct: 0
        },
        {
            question: "History (Q122): In which language did the Vijayanagara ruler Krishnadeva Raya compose 'Amuktamalyada', a celebrated treatise on statecraft?",
            options: ["Tamil", "Telugu", "Kannada", "Sanskrit"],
            correct: 1
        },
        {
            question: "History (Q123): Who were the 'Pahikashta' peasants who formed a part of the rural communities during the Mughal period?",
            options: ["Peasants who resided in the same village where they owned land", "Non-resident cultivators who came from other villages to farm on a contract basis", "Landless laborers who were bonded", "Royal officers supervising agriculture"],
            correct: 1
        },
        {
            question: "History (Q124): Prepared under Akbar's orders, 'Ain-i-Akbari' was compiled by Abu'l Fazl. Into how many parts (books/daftars) is this work divided?",
            options: ["Three parts", "Four parts", "Five parts", "Permanent seven parts"],
            correct: 2
        },
        {
            question: "History (Q125): At the time of the famous Zamindari auction in Burdwan, Bengal, in 1797, what strategy did the Raja use to save his estate?",
            options: ["Fictitious sales (setting up benami buyers by bribing officials)", "Attacking the British", "Instigating the peasants", "Getting a stay order from the court"],
            correct: 0
        },
        {
            question: "History (Q126): During the Revolt of 1857, Henry Lawrence died during the siege of which famous building in Lucknow?",
            options: ["The Residency", "The Royal Palace", "Rumi Darwaza", "Bara Imambara"],
            correct: 0
        },
        {
            question: "History (Q127): What policy did the British adopt to suppress the Revolt of 1857, under which captured rebels were blown away from the mouths of cannons?",
            options: ["Policy of absolute suppression and terror (Reign of Terror)", "Policy of sympathy", "Divide and Rule", "Subsidiary Alliance"],
            correct: 0
        },
        {
            question: "History (Q128): Along with boycotting foreign clothes during the Non-Cooperation Movement (1920), which domestic industry did Mahatma Gandhi emphasize most?",
            options: ["Iron and Steel industry", "Handloom and Spinning wheel (Khadi) industry", "Leather industry", "Handicrafts and gold ornaments"],
            correct: 1
        },
        {
            question: "History (Q129): On which date did the Muslim League call for 'Direct Action Day', leading to massive communal riots in Calcutta?",
            options: ["15 August 1947", "16 August 1946", "26 January 1950", "23 March 1940"],
            correct: 1
        },
        {
            question: "History (Q130): Who was appointed as the 'Constitutional Advisor' to the Constituent Assembly of India, who prepared the initial draft?",
            options: ["B.N. Rau", "Sachchidanand Sinha", "Dr. Rajendra Prasad", "K.M. Munshi"],
            correct: 0
        },
        {
            question: "History (Q131): From which site of the Harappan civilization has a terracotta model of a chariot been found, representing its metal craftsmanship?",
            options: ["Daimabad (Maharashtra)", "Rakhigarhi (Haryana)", "Ropar (Punjab)", "Alamgirpur (Uttar Pradesh)"],
            correct: 0
        },
        {
            question: "History (Q132): In the Mauryan period, the city administration of Pataliputra was managed by six committees. How many members did each committee have?",
            options: ["Three members", "Five members", "Ten members", "Twelve members"],
            correct: 1
        },
        {
            question: "History (Q133): In which Indian state is the famous 'Hathigumpha Inscription' of King Kharavela located, providing information about his reign?",
            options: ["Odisha", "Andhra Pradesh", "Tamil Nadu", "Karnataka"],
            correct: 0
        },
        {
            question: "History (Q134): What is contained in the narrative section of the Mahabharata, distinguishing it from the didactic section?",
            options: ["Collection of stories and events", "Rules of social behavior", "Methods of religious rituals", "Collection of hymns"],
            correct: 0
        },
        {
            question: "History (Q135): According to Buddhist texts, by what name is the place known where Buddha delivered his first sermon (Dhammachakkapavattana)?",
            options: ["Bodh Gaya", "Sarnath", "Kushinagar", "Lumbini"],
            correct: 1
        },
        {
            question: "History (Q136): Among the 'Five Great Vows' (Mahavratas) of Jainism, who originally added the fifth vow of 'Brahmacharya' (Celibacy)?",
            options: ["Rishabhadeva", "Parshvanatha", "Neminatha", "Mahavira Swami"],
            correct: 3
        },
        {
            question: "History (Q137): In which city was Francois Bernier's famous book 'Travels in the Mogul Empire' first published?",
            options: ["Paris", "London", "Delhi", "Amsterdam"],
            correct: 0
        },
        {
            question: "History (Q138): What is the portion of Kabir's verses compiled in the holy book 'Adi Granth' of the Sikhs called?",
            options: ["Kabir Granthavali", "Kabir Bijak", "Sabad and Sakhi", "Anurag Sagar"],
            correct: 2
        },
        {
            question: "History (Q139): Which was the first dynasty of the Vijayanagara Empire to which Harihara and Bukka belonged?",
            options: ["Sangam Dynasty", "Saluva Dynasty", "Tuluv Dynasty", "Aravidu Dynasty"],
            correct: 0
        },
        {
            question: "History (Q140): During the Mughal period, by which foreign power was tobacco cultivation introduced in India at the beginning of the 17th century?",
            options: ["British", "Portuguese", "Dutch", "French"],
            correct: 1
        },
        {
            question: "History (Q141): In which region did the famous 'Kol Rebellion' of 1831-32 against British rule primarily spread?",
            options: ["Chota Nagpur region", "Rajmahal Hills", "Khandesh", "Malabar"],
            correct: 0
        },
        {
            question: "History (Q142): Who was the British commander who led the military campaign against Rani Lakshmibai of Jhansi during the Revolt of 1857?",
            options: ["Sir Hugh Rose", "Colin Campbell", "Henry Havelock", "William Taylor"],
            correct: 0
        },
        {
            question: "History (Q143): Who renounced the title of 'Knighthood' (Sir) given by the British Government in protest against the Jallianwala Bagh Massacre of 1919?",
            options: ["Mahatma Gandhi", "Rabindranath Tagore", "Bal Gangadhar Tilak", "Gopal Krishna Gokhle"],
            correct: 1
        },
        {
            question: "History (Q144): Under the Gandhi-Irwin Pact (1931), which primary demand was accepted by the British, leading to the suspension of the Civil Disobedience Movement?",
            options: ["Granting complete independence", "Permission to make salt in coastal areas and release of political prisoners", "Abolition of Zamindari system", "Indianization of the army"],
            correct: 1
        },
        {
            question: "History (Q145): Which member of the Constituent Assembly strongly demanded that Hindi should be immediately declared the 'National Language' of the country?",
            options: ["R.V. Dhulekar", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "T.A. Ramalingam Chettiar"],
            correct: 0
        },
        {
            question: "History (Q146): From which stone were the weights of the Harappan period made, which were usually cubical and had no markings?",
            options: ["Chert", "Calcite", "Quartz", "Sandstone"],
            correct: 0
        },
        {
            question: "History (Q147): The ancient history of which region of India is known from 'Rajatarangini' composed by the famous historian Kalhana?",
            options: ["Kashmir", "Magadha Empire", "Chola Dynasty", "Rajputs of Rajasthan"],
            correct: 0
        },
        {
            question: "History (Q148): The book 'Arthashastra' written by Chanakya, the Prime Minister of Chandragupta Maurya, is primarily based on which subject?",
            options: ["Economics and wealth management", "Principles of politics and governance (Statecraft)", "Religious rituals", "Geography of foreign nations"],
            correct: 1
        },
        {
            question: "History (Q149): What is meant by 'Endogamy' in ancient marriage systems?",
            options: ["Marrying within the same gotra, caste, or group", "Marrying into foreign groups", "Marrying outside one's caste", "Political marriage between royal families"],
            correct: 0
        },
        {
            question: "History (Q150): According to Buddhism, the collection of strict rules made for the monks and nuns living in the Sangha is found in which Pitaka?",
            options: ["Vinaya Pitaka", "Sutta Pitaka", "Abhidhamma Pitaka", "Dipavamsa"],
            correct: 0
        },
        {
            question: "History (Q151): Who was the first Tirthankara of Jainism, considered the original founder of the religion in Jain tradition?",
            options: ["Rishabhadeva (Adinath)", "Ashoka", "Mahavira Swami", "Parshvanatha"],
            correct: 0
        },
        {
            question: "History (Q152): Which communication system in India was called 'Dawa' by Ibn Battuta, describing it as very rapid and stationed at every one-third of a mile?",
            options: ["Foot-post system", "Horse-post system", "Pigeon post system", "Royal spy system"],
            correct: 0
        },
        {
            question: "History (Q153): What was meant by 'Be-sharia' Sufis, who were known mostly as Kalandars and Madaris?",
            options: ["Those who strictly followed the Islamic Sharia law", "Those who ignored Sharia law and lived like mystics and fakirs", "Those who lived only in palaces", "Those who joined the army"],
            correct: 1
        },
        {
            question: "History (Q154): Which famous building of the Vijayanagara Empire clearly shows an Indo-Islamic influence in its architecture and is also called 'Lotus Mahal'?",
            options: ["Lotus Mahal", "Audience Hall", "Mahanavami Dibba", "Hazara Rama Temple"],
            correct: 0
        },
        {
            question: "History (Q155): Near the tomb of Sufi saint Sheikh Salim Chishti in his new capital Fatehpur Sikri, what grand structure did Mughal Emperor Akbar build?",
            options: ["Buland Darwaza", "Taj Mahal", "Red Fort", "Charminar"],
            correct: 0
        },
        {
            question: "History (Q156): What name was given by the British to the secure area where Europeans lived in Madras (Chennai) during the colonial period?",
            options: ["White Town (Fort St. George)", "Black Town", "Cantonment", "Civil Lines"],
            correct: 0
        },
        {
            question: "History (Q157): Who led the Revolt of 1857 in Jagdishpur, Bihar, and was affectionately called 'The Lion of Bihar'?",
            options: ["Kunwar Singh", "Amar Singh", "Peer Ali", "Babu Kali Khan"],
            correct: 0
        },
        {
            question: "History (Q158): Due to the 'Chauri-Chaura incident' in 1922, which major movement did Mahatma Gandhi decide to suspend immediately?",
            options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
            correct: 0
        },
        {
            question: "History (Q159): Who was the Chairman of the Boundary Commission appointed to demarcate borders in Punjab and Bengal during the partition of India in 1947?",
            options: ["Cyril Radcliffe", "Lord Mountbatten", "Pethick-Lawrence", "Sir Stafford Cripps"],
            correct: 0
        },
        {
            question: "History (Q160): How many total sessions of the Constituent Assembly of India were held during the finalization of the Constitution?",
            options: ["11 Sessions", "15 Sessions", "9 Sessions", "20 Sessions"],
            correct: 0
        },
        {
            question: "History (Q161): From which site of the Harappan civilization have the most advanced traces of water reservoirs and water harvesting systems been found?",
            options: ["Dholavira (Gujarat)", "Lothal", "Kalibangan", "Rakhigarhi"],
            correct: 0
        },
        {
            question: "History (Q162): The Greek ambassador Megasthenes wrote about the Mauryan Empire in his book 'Indica'. He came to the court of Chandragupta Maurya as an envoy of which Greek ruler?",
            options: ["Seleucus Nicator", "Alexander", "Antiochus", "Plutarch"],
            correct: 0
        },
        {
            question: "History (Q163): Gold coins in the Gupta period were called Dinars, while silver coins were called what?",
            options: ["Rupyaka", "Jital", "Tanka", "Karshapana"],
            correct: 0
        },
        {
            question: "History (Q164): According to Manusmriti, how many valid modes of acquiring wealth were prescribed for men?",
            options: ["Seven modes", "Six modes", "Eight modes", "Ten modes"],
            correct: 0
        },
        {
            question: "History (Q165): According to the principles of Buddhism, adherence to the 'Eightfold Path' leads to the attainment of what?",
            options: ["Nirvana (Liberation)", "Heaven", "Rebirth", "Material wealth"],
            correct: 0
        },
        {
            question: "History (Q166): What is the literal meaning of the word 'Silsila' in the history of Sufism, representing the unbroken link between teacher and disciple?",
            options: ["Chain", "Sacred Text", "Religious Song", "Fasting"],
            correct: 0
        },
        {
            question: "History (Q167): On the bank of which river is the famous 'Hampi' site of the Vijayanagara Empire located, discovered by Colin Mackenzie?",
            options: ["Tungabhadra River", "Krishna River", "Kaveri River", "Godavari River"],
            correct: 0
        },
        {
            question: "History (Q168): What was the officer called who was appointed at the Pargana level as the chief revenue collector during the Mughal period?",
            options: ["Amil-guzar (or Amil)", "Mir Bakshi", "Kotwal", "Qazi"],
            correct: 0
        },
        {
            question: "History (Q169): To annex Awadh into the British Empire, which Nawab did Lord Dalhousie accuse of 'Misgovernance'?",
            options: ["Wajid Ali Shah", "Asaf-ud-Daula", "Shuja-ud-Daula", "Saadat Khan"],
            correct: 0
        },
        {
            question: "History (Q170): Who led the Revolt of 1857 in Kanpur and declared himself the Peshwa?",
            options: ["Nana Sahib", "Tatya Tope", "Azimullah Khan", "Bakht Khan"],
            correct: 0
        },
        {
            question: "History (Q171): In which year did Mahatma Gandhi launch his first peaceful satyagraha movement in India through the 'Champaran Satyagraha'?",
            options: ["1917", "1915", "1919", "1920"],
            correct: 0
        },
        {
            question: "History (Q172): With how many followers did Mahatma Gandhi start the Dandi March from Sabarmati Ashram in 1930?",
            options: ["78 Followers", "100 Followers", "50 Followers", "200 Followers"],
            correct: 0
        },
        {
            question: "History (Q173): On which date did the first session of the Constituent Assembly of India begin, presided over by Dr. Sachchidanand Sinha?",
            options: ["9 December 1946", "11 December 1946", "26 November 1949", "15 August 1947"],
            correct: 0
        },
        {
            question: "History (Q174): From which site of the Harappan civilization have traces of fire altars been found, indicating religious rituals?",
            options: ["Kalibangan and Lothal", "Mohenjodaro", "Harappa", "Chanhudaro"],
            correct: 0
        },
        {
            question: "History (Q175): Who was the last ruler of the Mauryan dynasty, assassinated by his commander Pushyamitra Shunga to establish the Shunga dynasty?",
            options: ["Brihadratha", "Dasharatha", "Samprati", "Devavarman"],
            correct: 0
        },
        {
            question: "History (Q176): On which famous pillar is the 'Prayaga Prashasti' engraved, which describes the historic military conquests of Samudragupta?",
            options: ["Allahabad Pillar (Ashoka Pillar)", "Iron Pillar (Mehrauli)", "Sarnath Pillar", "Sanchi Pillar"],
            correct: 0
        },
        {
            question: "History (Q177): For how many days was the Mahabharata war fought on the field of Kurukshetra, as described in the Adiparva?",
            options: ["18 Days", "15 Days", "20 Days", "24 Days"],
            correct: 0
        },
        {
            question: "History (Q178): The 'Mahayana' sect of Buddhism developed primarily during the Fourth Buddhist Council under the reign of which Kushana king?",
            options: ["Kanishka", "Kujula Kadphises", "Vima Kadphises", "Huvishka"],
            correct: 0
        },
        {
            question: "History (Q179): According to Jain principles, to attain liberation, adherence to 'Triratna' (Three Jewels) is essential. What do they include?",
            options: ["Right Faith, Right Knowledge, Right Conduct", "Truth, Non-violence, Non-stealing", "Buddha, Dhamma, Sangha", "Knowledge, Action, Devotion"],
            correct: 0
        },
        {
            question: "History (Q180): According to Ibn Battuta, which city of India was equal to Delhi in size and population and was the largest center in South India?",
            options: ["Daulatabad", "Lakhanauti", "Khambat", "Madurai"],
            correct: 0
        },
        {
            question: "History (Q181): During whose reign did Khwaja Muinuddin Chishti come to Ajmer and establish his khanqah?",
            options: ["Prithviraj Chauhan", "Iltutmish", "Alauddin Khalji", "Muhammad Ghori"],
            correct: 0
        },
        {
            question: "History (Q182): What portion of the produce was land revenue typically fixed at in the Vijayanagara Empire?",
            options: ["1/6th of the produce", "1/3rd of the produce", "1/2 of the produce", "1/4th of the produce"],
            correct: 0
        },
        {
            question: "History (Q183): In which year did Akbar announce a new socio-religious outlook called 'Din-i-Ilahi' (Tauhid-i-Ilahi)?",
            options: ["1582", "1575", "1579", "1585"],
            correct: 0
        },
        {
            question: "History (Q184): Who was the British Governor-General who introduced the Permanent Settlement in Bengal in the year 1793?",
            options: ["Lord Cornwallis", "Warren Hestings", "Lord Wellesley", "Lord William Bentinck"],
            correct: 0
        },
        {
            question: "History (Q185): Who was the famous Maulvi who fiercely led the revolt in Faizabad during the 1857 War of Independence?",
            options: ["Moulvi Ahmadullah Shah", "Moulvi Liaqat Ali", "Khan Bahadur Khan", "Mazhar Ali"],
            correct: 0
        },
        {
            question: "History (Q186): Against which repressive law of the British Government did Mahatma Gandhi launch his first nationwide 'Rowlatt Satyagraha' in 1919?",
            options: ["Rowlatt Act", "Vernacular Act", "Salt Law", "Arms Act"],
            correct: 0
        },
        {
            question: "History (Q187): Who participated as the sole representative of the Congress in the Second Round Table Conference (1931)?",
            options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"],
            correct: 0
        },
        {
            question: "History (Q188): On which date was the Constitution of India adopted and enacted by the Constituent Assembly?",
            options: ["26 November 1949", "26 January 1950", "15 August 1947", "9 December 1946"],
            correct: 0
        },
        {
            question: "History (Q189): From which famous site of the Harappan civilization was the 'Bronze Dancing Girl' statue found?",
            options: ["Mohenjodaro", "Harappa", "Lothal", "Kalibangan"],
            correct: 0
        },
        {
            question: "History (Q190): What was the primary responsibility of the high officer named 'Samaharta' in the Mauryan administration?",
            options: ["State revenue collection and budget preparation (Chief Revenue Collector)", "Guarding the royal treasury", "Leading the army", "Judiciary administration"],
            correct: 0
        },
        {
            question: "History (Q191): The era started by Kanishka in 78 CE is known by what name, which is officially used by the Government of India?",
            options: ["Saka Era", "Vikram Era", "Gupta Era", "Hijri Era"],
            correct: 0
        },
        {
            question: "History (Q192): According to Buddhist tradition, where did Buddha establish the organization of nuns called 'Bhikkhuni Sangha'?",
            options: ["Vaishali", "Sarnath", "Rajgir", "Shravasti"],
            correct: 0
        },
        {
            question: "History (Q193): The famous 'Hazara Rama Temple' of the Vijayanagara Empire was constructed during the reign of which king?",
            options: ["Krishnadeva Raya", "Devaraya I", "Harihara II", "Achyuta Raya"],
            correct: 0
        },
        {
            question: "History (Q194): By what name is the third part of 'Akbarnama' known, which contains the regulations and statistics of the Mughal Empire?",
            options: ["Ain-i-Akbari", "Tarikh-i-Farishta", "Muntakhab-ut-Tawarikh", "Tuzuk-i-Jahangiri"],
            correct: 0
        },
        {
            question: "History (Q195): From the king of which European country did the British receive the island of Bombay as part of a marriage dowry?",
            options: ["Portugal", "Dutch (Holland)", "France", "Spain"],
            correct: 0
        },
        {
            question: "History (Q196): During the Revolt of 1857, in which cantonment center of Rajasthan did soldiers revolt with the slogan 'Chalo Delhi, Maro Firangi'?",
            options: ["Erinpura Cantonment", "Nasirabad Cantonment", "Neemuch Cantonment", "Beawar Cantonment"],
            correct: 0
        },
        {
            question: "History (Q197): In the movement led by Mahatma Gandhi in 1918 in support of Ahmedabad mill workers, what was their primary demand?",
            options: ["To increase the plague bonus by 35%", "Reduction of working hours", "Cash payment of wages", "Exemption of land tax"],
            correct: 0
        },
        {
            question: "History (Q198): Who was the President of the Congress at the historic Lahore Session of 1929, where the resolution for Purna Swaraj was passed?",
            options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Motilal Nehru", "Subhas Chandra Bose"],
            correct: 0
        },
        {
            question: "History (Q199): On which date was the 'Drafting Committee' of the Constituent Assembly formed, with Dr. B.R. Ambedkar as its Chairman?",
            options: ["29 August 1947", "15 August 1947", "26 November 1949", "9 December 1946"],
            correct: 0
        },
        {
            question: "History (Q200): The famous Harappan site 'Kalibangan' is located in which district of Rajasthan, from where evidence of ploughed fields was found?",
            options: ["Hanumangarh District", "Sri Ganganagar District", "Bikaner District", "Jaisalmer District"],
            correct: 0
        },
        {
            question: "History (Q201): James Prinsep, who first succeeded in deciphering Ashoka's inscriptions, was an officer at which Mint?",
            options: ["Calcutta Mint", "Bombay Mint", "Madras Mint", "London Mint"],
            correct: 0
        },
        {
            question: "History (Q202): By what other celebrated name or title is the Gupta Emperor Chandragupta II known?",
            options: ["Vikramaditya", "Mahendraditya", "Piyadassi", "Kaviraja"],
            correct: 0
        },
        {
            question: "History (Q203): In which Pitaka are the philosophical principles and tenets of Buddhism analyzed in detail?",
            options: ["Abhidhamma Pitaka", "Vinaya Pitaka", "Sutta Pitaka", "Mahavamsa"],
            correct: 0
        },
        {
            question: "History (Q204): What does the word 'Wali' mean in Sufi tradition, signifying those who were considered close spiritual friends of God?",
            options: ["Friend of God (Saint)", "Royal Soldier", "Musician", "Tax Collector"],
            correct: 0
        },
        {
            question: "History (Q205): Which Sultan was ruling the Delhi Sultanate at the time of the establishment of the Vijayanagara Empire?",
            options: ["Muhammad bin Tughlaq", "Ghiyasuddin Tughlaq", "Alauddin Khalji", "Firoz Shah Tughlaq"],
            correct: 0
        },
        {
            question: "History (Q206): According to the land classification during the Mughal period, what was the land called that was annually cultivated and never left fallow?",
            options: ["Polaj", "Parauti", "Chachar", "Banjar"],
            correct: 0
        },
        {
            question: "History (Q207): Who were the two most prominent tribal leaders of the Santhal Rebellion that broke out in the Rajmahal Hills in 1855-56?",
            options: ["Sidhu and Kanhu", "Birsa Munda", "Gomdhar Konwar", "Alluri Sitarama Raju"],
            correct: 0
        },
        {
            question: "History (Q208): Regarding the kingdom of Awadh during the Revolt of 1857, what had Lord Dalhousie famously remarked?",
            options: ["A cherry that will drop into our mouth one day", "An impregnable fortress", "The most faithful friend of the British", "A piece of barren land"],
            correct: 0
        },
        {
            question: "History (Q209): Which famous agreement took place between Mahatma Gandhi and Dr. B.R. Ambedkar in 1932 regarding separate electorates for the depressed classes?",
            options: ["Poona Pact", "Gandhi-Irwin Pact", "Lucknow Pact", "Simla Pact"],
            correct: 0
        },
        {
            question: "History (Q210): On the final day of which session of the Constituent Assembly, on 24 January 1950, did all members sign the official copies of the Constitution?",
            options: ["Final day of the 11th Session", "12th Special Session", "10th Session", "15th Session"],
            correct: 0
        }


