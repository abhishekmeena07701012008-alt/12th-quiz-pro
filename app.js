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

// सभी स्ट्रीम्स और उनके विषयों की मैपिंग
const streamData = {
    science: {
        hi: ['भौतिक विज्ञान (Physics)', 'रसायन विज्ञान (Chemistry)', 'जीव विज्ञान (Biology)', 'गणित (Maths)', 'हिंदी अनिवार्य', 'अंग्रेजी अनिवार्य'],
        en: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Hindi Compulsory', 'English Compulsory'],
        keys: ['physics', 'chemistry', 'biology', 'maths', 'hindi_comp', 'english_comp']
    },
    commerce: {
        hi: ['लेखाशास्त्र (Accountancy)', 'व्यवसाय अध्ययन (B.St)', 'अर्थशास्त्र (Economics)', 'हिंदी अनिवार्य', 'अंग्रेजी अनिवार्य'],
        en: ['Accountancy', 'Business Studies', 'Economics', 'Hindi Compulsory', 'English Compulsory'],
        keys: ['accountancy', 'business', 'economics', 'hindi_comp', 'english_comp']
    },
    arts: {
        hi: ['इतिहास (History)', 'भूगोल (Geography)', 'राजनीति विज्ञान (Pol. Science)', 'अर्थशास्त्र (Economics)', 'हिंदी अनिवार्य', 'अंग्रेजी अनिवार्य'],
        en: ['History', 'Geography', 'Political Science', 'Economics', 'Hindi Compulsory', 'English Compulsory'],
        keys: ['history', 'geography', 'political', 'economics', 'hindi_comp', 'english_comp']
    }
};

// 1. भाषा का चुनाव
function selectLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('lang-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.remove('hidden');
    document.getElementById('stream-title').innerText = lang === 'hi' ? "अपना संकाय (Stream) चुनें:" : "Select your Stream:";
}

// 2. स्ट्रीम का चुनाव और विषयों की लिस्ट जेनरेट करना
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
    
    // स्क्रीन पर डायनामिकली बटन्स बनाना
    subjectsList.forEach((subjectName, index) => {
        let button = document.createElement('button');
        button.innerText = subjectName;
        button.classList.add('btn');
        
        // अनिवार्य विषयों को फुल विड्थ देने के लिए
        if(subjectName.includes('अनिवार्य') || subjectName.includes('Compulsory')) {
            button.classList.add('full-width');
        }
        
        button.onclick = () => startQuiz(keysList[index]);
        container.appendChild(button);
    });
}

// पीछे जाने का बटन लॉजिक
function backToStreams() {
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.remove('hidden');
}

// सरणी (Array) को शफल करने का फंक्शन (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 3. क्विज़ शुरू करना (सभी 11 विषयों का डायनामिक लॉजिक)
function startQuiz(subjectKey) {
    currentSubject = subjectKey;
    let allSourceQuestions = null;
    
    // विषय की चाबी (Key) के हिसाब से सही वेरिएबल लोड करना
    if (currentSubject === 'history') {
        if (typeof hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? hi : en;
    } else if (currentSubject === 'geography') {
        if (typeof geo_hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? geo_hi : geo_en;
    } else if (currentSubject === 'political') {
        if (typeof pol_hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? pol_hi : pol_en;
    } else if (currentSubject === 'physics') {
        if (typeof phy_hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? phy_hi : phy_en;
    } else if (currentSubject === 'chemistry') {
        if (typeof chem_hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? chem_hi : chem_en;
    } else if (currentSubject === 'biology') {
        if (typeof bio_hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? bio_hi : bio_en;
    } else if (currentSubject === 'maths') {
        if (typeof math_hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? math_hi : math_en;
    } else if (currentSubject === 'accountancy') {
        if (typeof acc_hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? acc_hi : acc_en;
    } else if (currentSubject === 'business') {
        if (typeof bst_hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? bst_hi : bst_en;
    } else if (currentSubject === 'economics') {
        if (typeof eco_hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? eco_hi : eco_en;
    } else if (currentSubject === 'hindi_comp') {
        if (typeof hin_comp_hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? hin_comp_hi : hin_comp_en;
    } else if (currentSubject === 'english_comp') {
        if (typeof eng_comp_hi !== 'undefined') allSourceQuestions = (currentLanguage === 'hi') ? eng_comp_hi : eng_comp_en;
    }
    
    // सुरक्षा जांच: अगर डेटा लोड नहीं हुआ
    if (!allSourceQuestions || allSourceQuestions.length === 0) {
        alert(currentLanguage === 'hi' ? "इस विषय का डेटाबेस लोड नहीं हो पाया!" : "Database for this subject could not be loaded!");
        return;
    }
    
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    score = 0;
    currentQuestionIndex = 0;
    
    // पूरे प्रश्न बैंक को शफल करना
    let shuffledPool = shuffleArray([...allSourceQuestions]);
    
    // डायनामिक लिमिट: अगर सवाल 20 से कम हैं (जैसे अभी 5 हैं), तो जितने हैं उतने ही देगा, भविष्य में 20 दे देगा
    let limit = shuffledPool.length < 20 ? shuffledPool.length : 20;
    quizQuestions = shuffledPool.slice(0, limit);
    
    showQuestion();
}

// 4. स्क्रीन पर प्रश्न दिखाना
function showQuestion() {
    isAnswered = false;
    timeLeft = 20;
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('timer').innerText = `⏱️ ${currentLanguage === 'hi' ? 'समय' : 'Time'}: 20s`;
    
    // कुल प्रश्नों की संख्या को डायनामिक दिखाना (जैसे: 1 / 5 या 1 / 20)
    document.getElementById('progress').innerText = `${currentLanguage === 'hi' ? 'प्रश्न' : 'Question'}: ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    
    let currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = currentQuestion.question;
    
    let optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // सही उत्तर का टेक्स्ट सुरक्षित रखना ताकि शफल के बाद भी ट्रैकिंग सही रहे
    let correctAnswerText = currentQuestion.options[currentQuestion.correct];
    
    // ऑप्शंस को ऑब्जेक्ट में बदलकर शफल करना
    let optionsObjects = currentQuestion.options.map(opt => {
        return { text: opt, isCorrect: opt === correctAnswerText };
    });
    optionsObjects = shuffleArray(optionsObjects);
    
    // ऑप्शंस के बटन्स तैयार करना
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

// 5. टाइमर अपडेट
function updateTimer() {
    timeLeft--;
    document.getElementById('timer').innerText = `⏱️ ${currentLanguage === 'hi' ? 'समय' : 'Time'}: ${timeLeft}s`;
    
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        autoLockAnswer();
    }
}

// 6. उत्तर जांच (सही पर ग्रीन, गलत पर रेड)
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
    
    // सभी बटन्स लॉक करना और जो सही है उसे हमेशा ग्रीन दिखाना
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correctText) {
            btn.classList.add('correct');
        }
    });
    
    document.getElementById('next-btn').classList.remove('hidden');
}

// समय समाप्त होने पर ऑटो-लॉक
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

// 7. अगला प्रश्न बदलना
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 8. शानदार रिपोर्ट कार्ड
function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    const scoreDisplay = document.getElementById('score-display');
    const remark = document.getElementById('remark');
    
    // स्कोर बोर्ड को कुल प्रश्नों के हिसाब से डायनामिक दिखाना
    scoreDisplay.innerText = `${score} / ${quizQuestions.length}`;
    
    // प्रतिशत के आधार पर रिमार्क सेट करना
    let percentage = (score / quizQuestions.length) * 100;
    
    if (currentLanguage === 'hi') {
        if (percentage >= 80) remark.innerText = "👑 उत्कृष्ट! आपकी तैयारी बहुत मजबूत है।";
        else if (percentage >= 50) remark.innerText = "👍 बहुत अच्छा! थोड़ा और प्रयास करें।";
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
