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

// स्ट्रीम डेटा मैपिंग (history.js की keys के साथ एकदम सटीक मैच)
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
        hi: ['इतिहास (History)', 'राजनीति विज्ञान (Pol. Science)', 'भूगोल (Geography)', 'अर्थशास्त्र (Economics)', 'समाजशास्त्र (Sociology)', 'मनोविज्ञान (Psychology)', 'गृह विज्ञान (Home Science)', 'दर्शनशास्त्र (Philosophy)', 'कानूनी अध्ययन (Legal Studies)', 'हिंदी साहित्य (Hindi Lit.)', 'अंग्रेजी साहित्य (English Lit.)', 'गणित (Mathematics)', 'एप्लाइड मैथ (Applied Maths)', 'कंप्यूटर विज्ञान (Computer Science)'],
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
        // स्ट्रीम के हिसाब से कलर थीम
        if(stream === 'science') button.classList.add('btn-science');
        if(stream === 'commerce') button.classList.add('btn-commerce');
        if(stream === 'arts') button.classList.add('btn-arts');
        
        button.onclick = () => startQuiz(keysList[index]);
        container.appendChild(button);
    });
}

function backToStreams() {
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.remove('hidden');
}

// ऐरे शफल फंक्शन
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 3. क्विज़ शुरू करना (इतिहास और बाकी 22 विषयों के लिए स्मार्ट फ़िल्टर)
function startQuiz(subjectKey) {
    currentSubject = subjectKey;
    let filteredQuestions = [];

    // 'history.js' में मौजूद 'quizDataMaster' से डेटा उठाना
    if (typeof quizDataMaster !== 'undefined' && Array.isArray(quizDataMaster)) {
        filteredQuestions = quizDataMaster.filter(q => {
            if (!q.subject || !q.lang) return false;
            
            // डेटाबेस की कीज़ और ऐप की कीज़ को केस-इन्सेंसिटिव मैच करना
            let dbSubject = q.subject.toLowerCase().replace(/_|\s/g, '');
            let appSubject = currentSubject.toLowerCase().replace(/_|\s/g, '');
            
            return (dbSubject.includes(appSubject) || appSubject.includes(dbSubject)) && q.lang.toLowerCase() === currentLanguage.toLowerCase();
        });
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
    
    // पूरे प्रश्न बैंक को रैंडमली शफल करना
    let shuffledPool = shuffleArray([...filteredQuestions]);
    
    // अधिकतम 20 सवालों की सीमा सेट करना
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
    
    // 'correct' या 'answer' दोनों इंडेक्स को सपोर्ट करने के लिए सेफ चेक
    let correctIndex = currentQuestion.correct !== undefined ? currentQuestion.correct : currentQuestion.answer;
    let correctAnswerText = currentQuestion.options[correctIndex];
    
    // विकल्पों को शफल करना
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

// 6. उत्तर चेक (सही पर ग्रीन, गलत पर रेड)
function checkAnswer(selectedButton, isCorrect) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timerInterval);
    
    let buttons = document.querySelectorAll('.option-btn');
    let currentQuestion = quizQuestions[currentQuestionIndex];
    let correctIndex = currentQuestion.correct !== undefined ? currentQuestion.correct : currentQuestion.answer;
    let correctText = currentQuestion.options[correctIndex];
    
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
    let currentQuestion = quizQuestions[currentQuestionIndex];
    let correctIndex = currentQuestion.correct !== undefined ? currentQuestion.correct : currentQuestion.answer;
    let correctText = currentQuestion.options[correctIndex];
    
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

// 8. रिपोर्ट कार्ड स्क्रीन
function showResult() {
    clearInterval(timerInterval);
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
