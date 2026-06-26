// ग्लोबल वेरिएबल्स
let currentLanguage = 'hi';
let currentStream = '';
let currentSubject = '';
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 20;
let isAnswered = false;

// तुम्हारी दी हुई लिस्ट के अनुसार सटीक मैपिंग (मैथ्स/कंप्यूटर तीनों स्ट्रीम में कॉमन हैं)
const streamData = {
    science: {
        hi: ['भौतिकी (Physics)', 'रसायन विज्ञान (Chemistry)', 'जीव विज्ञान (Biology)', 'बायोटेक्नोलॉजी (Biotechnology)', 'गणित (Mathematics)', 'एप्लाइड मैथ (Applied Maths)', 'कंप्यूटर विज्ञान (Computer Science)'],
        en: ['Physics', 'Chemistry', 'Biology', 'Biotechnology', 'Mathematics', 'Applied Mathematics', 'Computer Science'],
        keys: ['physics', 'chemistry', 'biology', 'biotech', 'maths', 'applied_math', 'computer_science']
    },
    commerce: {
        hi: ['लेखाकर्म (Accountancy)', 'व्यावसायिक अध्ययन (B.St)', 'उद्यमशीलता (Entrepreneurship)', 'अर्थशास्त्र (Economics)', 'गणित (Mathematics)', 'एप्लाइड मैथ (Applied Maths)', 'कंप्यूटर विज्ञान (Computer Science)'],
        en: ['Accountancy', 'Business Studies', 'Entrepreneurship', 'Economics', 'Mathematics', 'Applied Mathematics', 'Computer Science'],
        keys: ['accountancy', 'business', 'entrepreneurship', 'economics', 'maths', 'applied_math', 'computer_science']
    },
    arts: {
        hi: ['इतिहास (History)', 'राजनीति विज्ञान (Pol. Science)', 'भूгол (Geography)', 'अर्थशास्त्र (Economics)', 'समाजशास्त्र (Sociology)', 'मनोविज्ञान (Psychology)', 'गृह विज्ञान (Home Science)', 'दर्शनशास्त्र (Philosophy)', 'कानूनी अध्ययन (Legal Studies)', 'हिंदी साहित्य (Hindi Lit.)', 'अंग्रेजी साहित्य (English Lit.)', 'गणित (Mathematics)', 'एप्लाइड मैथ (Applied Maths)', 'कंप्यूटर विज्ञान (Computer Science)'],
        en: ['History', 'Political Science', 'Geography', 'Economics', 'Sociology', 'Psychology', 'Home Science', 'Philosophy', 'Legal Studies', 'Hindi Literature', 'English Literature', 'Mathematics', 'Applied Mathematics', 'Computer Science'],
        keys: ['history', 'political', 'geography', 'economics', 'sociology', 'psychology', 'home_science', 'philosophy', 'legal_studies', 'hindi_lit', 'english_lit', 'maths', 'applied_math', 'computer_science']
    }
};

// 1. भाषा का चुनाव
function selectLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('lang-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.remove('hidden');
    document.getElementById('stream-title').innerText = lang === 'hi' ? "अपना संकाय (Stream) चुनें:" : "Select your Stream:";
}

// 2. स्ट्रीम चुनना और विषयों की लिस्ट जेनरेट करना
function selectStream(stream) {
    currentStream = stream;
    document.getElementById('stream-screen').classList.add('hidden');
    document.getElementById('subject-screen').classList.remove('hidden');
    
    const subjTitle = document.getElementById('subject-title');
    subjTitle.innerText = currentLanguage === 'hi' ? "अपना विषय चुनें:" : "Select your Subject:";
    
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    
    const subjectsList = streamData[stream][currentLanguage];
    const keysList = streamData[stream]['keys'];
    
    subjectsList.forEach((subjectName, index) => {
        let button = document.createElement('button');
        button.innerText = subjectName;
        button.classList.add('btn');
        button.onclick = () => startQuiz(keysList[index]);
        container.appendChild(button);
    });
}

function backToStreams() {
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.remove('hidden');
}

// सरणी (Array) को पूरी तरह रैंडम शफल करने का फंक्शन
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 3. क्विज़ शुरू करना (स्मार्ट फिल्टर लॉजिक - अगर सवाल मिक्स फाइल में भी हों, तो सही सब्जेक्ट और भाषा उठाएगा)
function startQuiz(subjectKey) {
    currentSubject = subjectKey;
    let filteredQuestions = [];

    // अगर 'quizDataMaster' नाम का मिक्स एरे (Array) हमारे डेटाबेस में मौजूद है
    if (typeof quizDataMaster !== 'undefined' && Array.isArray(quizDataMaster)) {
        filteredQuestions = quizDataMaster.filter(q => q.subject === currentSubject && q.lang === currentLanguage);
    } 
    // पुराने अलग-अलग वेरिएबल सिस्टम को भी बैकअप के लिए चालू रखा है
    else {
        if (currentSubject === 'history' && typeof hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? hi : en;
        else if (currentSubject === 'political' && typeof pol_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? pol_hi : pol_en;
        else if (currentSubject === 'geography' && typeof geo_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? geo_hi : geo_en;
        else if (currentSubject === 'economics' && typeof eco_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? eco_hi : eco_en;
        else if (currentSubject === 'sociology' && typeof soc_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? soc_hi : soc_en;
        else if (currentSubject === 'psychology' && typeof psy_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? psy_hi : psy_en;
        else if (currentSubject === 'home_science' && typeof home_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? home_hi : home_en;
        else if (currentSubject === 'philosophy' && typeof phil_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? phil_hi : phil_en;
        else if (currentSubject === 'legal_studies' && typeof legal_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? legal_hi : legal_en;
        else if (currentSubject === 'hindi_lit' && typeof hin_lit_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? hin_lit_hi : hin_lit_en;
        else if (currentSubject === 'english_lit' && typeof eng_lit_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? eng_lit_hi : eng_lit_en;
        else if (currentSubject === 'accountancy' && typeof acc_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? acc_hi : acc_en;
        else if (currentSubject === 'business' && typeof bst_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? bst_hi : bst_en;
        else if (currentSubject === 'entrepreneurship' && typeof ent_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? ent_hi : ent_en;
        else if (currentSubject === 'physics' && typeof phy_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? phy_hi : phy_en;
        else if (currentSubject === 'chemistry' && typeof chem_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? chem_hi : chem_en;
        else if (currentSubject === 'biology' && typeof bio_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? bio_hi : bio_en;
        else if (currentSubject === 'biotech' && typeof bio_tech_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? bio_tech_hi : bio_tech_en;
        else if (currentSubject === 'maths' && typeof math_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? math_hi : math_en;
        else if (currentSubject === 'applied_math' && typeof app_math_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? app_math_hi : app_math_en;
        else if (currentSubject === 'computer_science' && typeof cs_hi !== 'undefined') filteredQuestions = (currentLanguage === 'hi') ? cs_hi : cs_en;
    }
    
    // अगर कोई सवाल नहीं मिले तो प्यार से अलर्ट दिखाना
    if (!filteredQuestions || filteredQuestions.length === 0) {
        alert(currentLanguage === 'hi' ? "इस विषय के प्रश्न जल्द ही जोड़े जा रहे हैं!" : "Questions for this subject are coming soon!");
        return;
    }
    
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    score = 0;
    currentQuestionIndex = 0;
    
    // पूरे प्रश्न बैंक को रैंडमली शफल करना (Question Shuffling)
    let shuffledPool = shuffleArray([...filteredQuestions]);
    
    // 20 सवालों की सीमा सेट करना (अगर कम हैं तो जितने हैं उतने उठाएगा)
    let limit = shuffledPool.length < 20 ? shuffledPool.length : 20;
    quizQuestions = shuffledPool.slice(0, limit);
    
    showQuestion();
}

// 4. स्क्रीन पर प्रश्न और ऑप्शंस दिखाना
function showQuestion() {
    isAnswered = false;
    timeLeft = 20; // 20 सेकंड का टाइमर रीसेट
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('timer').innerText = `⏱️ ${currentLanguage === 'hi' ? 'समय' : 'Time'}: 20s`;
    document.getElementById('progress').innerText = `${currentLanguage === 'hi' ? 'प्रश्न' : 'Question'}: ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    
    let currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = currentQuestion.question;
    
    let optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    let correctAnswerText = currentQuestion.options[currentQuestion.correct];
    
    // विकल्पों को शफल करना (Answer/Option Shuffling)
    let optionsObjects = currentQuestion.options.map(opt => {
        return { text: opt, isCorrect: opt === correctAnswerText };
    });
    optionsObjects = shuffleArray(optionsObjects);
    
    // बटन्स रेंडर करना
    optionsObjects.forEach(opt => {
        let button = document.createElement('button');
        button.innerText = opt.text;
        button.classList.add('btn', 'option-btn');
        button.onclick = () => checkAnswer(button, opt.isCorrect);
        optionsContainer.appendChild(button);
    });
    
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

// 5. टाइमर लॉजिक
function updateTimer() {
    timeLeft--;
    document.getElementById('timer').innerText = `⏱️ ${currentLanguage === 'hi' ? 'समय' : 'Time'}: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        autoLockAnswer();
    }
}

// 6. उत्तर चेक (सही पर ग्रीन, गलत पर रेड कलर लॉजिक)
function checkAnswer(selectedButton, isCorrect) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timerInterval);
    
    let buttons = document.querySelectorAll('.option-btn');
    let correctText = quizQuestions[currentQuestionIndex].options[quizQuestions[currentQuestionIndex].correct];
    
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }
    
    // सभी ऑप्शंस लॉक करना और जो सही है उसे हमेशा ग्रीन दिखाना
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correctText) {
            btn.classList.add('correct');
        }
    });
    document.getElementById('next-btn').classList.remove('hidden');
}

// टाइमर खत्म होने पर ऑटो लॉक
function autoLockAnswer() {
    isAnswered = true;
    let buttons = document.querySelectorAll('.option-btn');
    let correctText = quizQuestions[currentQuestionIndex].options[quizQuestions[currentQuestionIndex].correct];
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correctText) {
            btn.classList.add('correct');
        }
    });
    document.getElementById('next-btn').classList.remove('hidden');
}

// 7. अगला प्रश्न
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 8. रिपोर्ट कार्ड स्क्रीन (Result Report Card)
function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    const scoreDisplay = document.getElementById('score-display');
    const remark = document.getElementById('remark');
    
    scoreDisplay.innerText = `${score} / ${quizQuestions.length}`;
    let percentage = (score / quizQuestions.length) * 100;
    
    if (currentLanguage === 'hi') {
        if (percentage >= 80) remark.innerText = "👑 उत्कृष्ट! आपकी तैयारी बहुत मजबूत है।";
        else if (percentage >= 50) remark.innerText = "👍 बहुत अच्छा! थोड़ा और अभ्यास करें।";
        else remark.innerText = "📚 और सुधार की आवश्यकता है, दोबारा प्रयास करें।";
    } else {
        if (percentage >= 80) remark.innerText = "👑 Outstanding! Your preparation is rock solid.";
        else if (percentage >= 50) remark.innerText = "👍 Good job! Keep practicing.";
        else remark.innerText = "📚 Need improvement, try again.";
    }
}

// 9. क्विज़ रीस्टार्ट
function restartQuiz() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('lang-screen').classList.remove('hidden');
}
