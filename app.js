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

// 3. क्विज़ शुरू करना (रैंडम और शफल लॉजिक के साथ)
function startQuiz(subjectKey) {
    currentSubject = subjectKey;
    let allSourceQuestions = null;
    
    // अभी केवल इतिहास (History) का डेटा उपलब्ध है
    if (currentSubject === 'history') {
        // चेक करना कि क्या इतिहास का डेटाबेस लोड हुआ है
        if (typeof hi !== 'undefined' && typeof en !== 'undefined') {
            allSourceQuestions = (currentLanguage === 'hi') ? hi : en;
        }
    }
    
    // स्मार्ट चेक: अगर किसी ऐसे सब्जेक्ट पर क्लिक किया जिसका डेटा अभी नहीं बनाया है
    if (!allSourceQuestions || allSourceQuestions.length === 0) {
        const alertMsg = currentLanguage === 'hi' 
            ? "इस विषय के प्रश्न जल्द ही ऐप में जोड़े जा रहे हैं! कृपया तब तक इतिहास (History) का टेस्ट दें।" 
            : "Questions for this subject are coming soon! Please try History in the meantime.";
        alert(alertMsg);
        return;
    }
    
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    score = 0;
    currentQuestionIndex = 0;
    
    // पूरे प्रश्न बैंक को शफल करना
    let shuffledPool = shuffleArray([...allSourceQuestions]);
    
    // केवल रैंडम 20 सवाल बाहर निकालना
    quizQuestions = shuffledPool.slice(0, 20);
    
    showQuestion();
}

// 4. स्क्रीन पर प्रश्न दिखाना
function showQuestion() {
    isAnswered = false;
    timeLeft = 20;
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('timer').innerText = `⏱️ ${currentLanguage === 'hi' ? 'समय' : 'Time'}: 20s`;
    document.getElementById('progress').innerText = `${currentLanguage === 'hi' ? 'प्रश्न' : 'Question'}: ${currentQuestionIndex + 1} / 20`;
    
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
    if (currentQuestionIndex < 20) {
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
    
    scoreDisplay.innerText = `${score} / 20`;
    
    if (currentLanguage === 'hi') {
        if (score >= 18) remark.innerText = "👑 उत्कृष्ट! आपकी तैयारी बहुत मजबूत है।";
        else if (score >= 12) remark.innerText = "👍 बहुत अच्छा! थोड़ा और अभ्यास करें।";
        else remark.innerText = "📚 और सुधार की आवश्यकता है, दोबारा प्रयास करें।";
    } else {
        if (score >= 18) remark.innerText = "👑 Outstanding! Your preparation is rock solid.";
        else if (score >= 12) remark.innerText = "👍 Good job! Keep practicing.";
        else remark.innerText = "📚 Need improvement, try again.";
    }
}

// 9. क्विज़ रीस्टार्ट
function restartQuiz() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('lang-screen').classList.remove('hidden');
}
