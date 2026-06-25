// ग्लोबल वेरिएबल्स
let currentLanguage = 'hi';
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 20;
let isAnswered = false;

// 1. भाषा का चुनाव
function selectLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('lang-screen').classList.add('hidden');
    document.getElementById('subject-screen').classList.remove('hidden');
    
    const subjTitle = document.getElementById('subject-title');
    if(lang === 'hi') {
        subjTitle.innerText = "विषय का चयन करें:";
    } else {
        subjTitle.innerText = "Select your Subject:";
    }
}

// सरणी (Array) को शफल करने का फंक्शन (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 2. क्विज़ शुरू करना (रैंडम 20 सवाल निकालना और शफल करना)
function startQuiz() {
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    score = 0;
    currentQuestionIndex = 0;
    
    // इतिहास की फाइल (history.js) से सही भाषा का डेटा उठाना
    let allSourceQuestions = (currentLanguage === 'hi') ? hi : en;
    
    // प्रश्नों का एक डीप क्लोन बनाकर पूरे पूल को शफल करना
    let shuffledPool = shuffleArray([...allSourceQuestions]);
    
    // शफल पूल में से केवल टॉप 20 सवाल चुनना
    quizQuestions = shuffledPool.slice(0, 20);
    
    showQuestion();
}

// 3. प्रश्न स्क्रीन पर दिखाना
function showQuestion() {
    isAnswered = false;
    timeLeft = 20;
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('timer').innerText = `⏱️ ${currentLanguage === 'hi' ? 'समय' : 'Time'}: 20s`;
    
    // प्रोग्रेस बार अपडेट करना
    document.getElementById('progress').innerText = `${currentLanguage === 'hi' ? 'प्रश्न' : 'Question'}: ${currentQuestionIndex + 1} / 20`;
    
    let currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = currentQuestion.question;
    
    // ऑप्शंस को तैयार करना और शफल करना
    let optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // सही उत्तर का टेक्स्ट ढूंढना ताकि शफल के बाद भी ट्रैकिंग सही रहे
    let correctAnswerText = currentQuestion.options[currentQuestion.correct];
    
    // ऑप्शंस का शफलिंग अरेंजमेंट
    let optionsObjects = currentQuestion.options.map((opt) => {
        return { text: opt, isCorrect: opt === correctAnswerText };
    });
    
    optionsObjects = shuffleArray(optionsObjects);
    
    // स्क्रीन पर बटन बनाना
    optionsObjects.forEach(opt => {
        let button = document.createElement('button');
        button.innerText = opt.text;
        button.classList.add('btn', 'option-btn');
        button.onclick = () => checkAnswer(button, opt.isCorrect);
        optionsContainer.appendChild(button);
    });
    
    // टाइमर चालू करना
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

// 4. टाइमर अपडेट लॉजिक
function updateTimer() {
    timeLeft--;
    document.getElementById('timer').innerText = `⏱️ ${currentLanguage === 'hi' ? 'समय' : 'Time'}: ${timeLeft}s`;
    
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        autoLockAnswer();
    }
}

// 5. उत्तर की जांच (सही पर ग्रीन, गलत पर रेड)
function checkAnswer(selectedButton, isCorrect) {
    if (isAnswered) return; // एक बार उत्तर देने पर लॉक
    isAnswered = true;
    clearInterval(timerInterval);
    
    let buttons = document.querySelectorAll('.option-btn');
    
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
        // सही बटन को हाइलाइट करना
        buttons.forEach(btn => {
            if (btn.innerText === quizQuestions[currentQuestionIndex].options[quizQuestions[currentQuestionIndex].correct]) {
                // या फिर शफल्ड ऑब्जेक्ट ट्रैकिंग से मिलान
            }
        });
    }
    
    // सभी बटन्स को डिसेबल करना और सही वाले को ग्रीन दिखाना
    buttons.forEach(btn => {
        btn.disabled = true;
        // बैकअप चेकिंग ताकि सही जवाब यूजर को दिख जाए
        let currentQ = quizQuestions[currentQuestionIndex];
        let correctText = currentQ.options[currentQ.correct];
        if (btn.innerText === correctText) {
            btn.classList.add('correct');
        }
    });
    
    document.getElementById('next-btn').classList.remove('hidden');
}

// 6. समय समाप्त होने पर अपने आप लॉक होना
function autoLockAnswer() {
    isAnswered = true;
    let buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        let currentQ = quizQuestions[currentQuestionIndex];
        let correctText = currentQ.options[currentQ.correct];
        if (btn.innerText === correctText) {
            btn.classList.add('correct');
        }
    });
    document.getElementById('next-btn').classList.remove('hidden');
}

// 7. अगला प्रश्न या रिजल्ट स्क्रीन
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 20) {
        showQuestion();
    } else {
        showResult();
    }
}

// 8. फाइनल रिपोर्ट कार्ड दिखाना
function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    const scoreDisplay = document.getElementById('score-display');
    const remark = document.getElementById('remark');
    
    scoreDisplay.innerText = `${score} / 20`;
    
    if (currentLanguage === 'hi') {
        if (score >= 18) remark.innerText = "👑 उत्कृष्ट! आपकी तैयारी बहुत मजबूत है।";
        else if (score >= 12) remark.innerText = "👍 बहुत अच्छा! थोड़ा और प्रयास करें।";
        else remark.innerText = "📚 और सुधार की आवश्यकता है, दोबारा प्रयास करें।";
    } else {
        if (score >= 18) remark.innerText = "👑 Outstanding! Your preparation is rock solid.";
        else if (score >= 12) remark.innerText = "👍 Good job! Keep practicing.";
        else remark.innerText = "📚 Need improvement, try again.";
    }
}

// 9. क्विज़ दोबारा शुरू करना
function restartQuiz() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('lang-screen').classList.remove('hidden');
}
