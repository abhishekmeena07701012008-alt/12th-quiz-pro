let currentLanguage = 'hi';
let currentStream = '';
let currentSubject = '';
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 20;
let isAnswered = false;

// स्ट्रीम और विषयों का डेटा
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
        keys: ['history', 'political', 'geography', 'economics', 'sociology', 'psychology', 'home_science', 'philosophy', 'legal_studies', 'hindilit', 'englishlit', 'maths', 'applied_math', 'computer_science']
    }
};

function selectLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('lang-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.remove('hidden');
    document.getElementById('stream-title').innerText = lang === 'hi' ? "अपना संकाय (Stream) चुनें:" : "Select your Stream:";
}

function selectStream(stream) {
    currentStream = stream;
    document.getElementById('stream-screen').classList.add('hidden');
    document.getElementById('subject-screen').classList.remove('hidden');
    
    document.getElementById('subject-title').innerText = currentLanguage === 'hi' ? "अपना विषय चुनें:" : "Select your Subject:";
    
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    
    const subjectsList = streamData[stream][currentLanguage];
    const keysList = streamData[stream]['keys'];
    
    subjectsList.forEach((subjectName, index) => {
        let button = document.createElement('button');
        button.innerText = subjectName;
        button.classList.add('btn');
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// यह नया Async फंक्शन है जो JSON फाइल को fetch करेगा
async function startQuiz(subjectKey) {
    currentSubject = subjectKey.toLowerCase().replace(/_|\s/g, '');
    if (currentSubject.includes('math')) currentSubject = 'math';

    let filteredQuestions = [];

    document.getElementById('subject-screen').classList.add('hidden');
    
    // लोडिंग का अनुभव देने के लिए
    let loadingMsg = currentLanguage === 'hi' ? "प्रश्न लोड हो रहे हैं..." : "Loading questions...";
    document.getElementById('question-text').innerText = loadingMsg;
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('options-container').innerHTML = '';

    try {
        // आपकी रिपॉजिटरी से JSON फाइल लोड करना (ex: arts.json, science.json)
        const response = await fetch(`${currentStream}.json`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const quizData = await response.json();

        // एडवांस्ड डीप सर्च फंक्शन जो Bilingual JSON स्ट्रक्चर को समझता है
        function deepSearch(obj, inheritedSubject = '') {
            if (!obj) return;

            if (Array.isArray(obj)) {
                obj.forEach(item => deepSearch(item, inheritedSubject));
                return;
            }

            let itemSub = obj.subject ? obj.subject.toLowerCase().replace(/_|\s/g, '') : inheritedSubject;
            if (itemSub.includes('math')) itemSub = 'math';

            // भाषा के अनुसार प्रश्न और विकल्प चुनें
            let qText = currentLanguage === 'hi' ? (obj.question_hi || obj.question || obj.q) : (obj.question_en || obj.question || obj.q);
            let opts = currentLanguage === 'hi' ? (obj.options_hi || obj.options) : (obj.options_en || obj.options);
            let ansIdx = obj.answer_index !== undefined ? obj.answer_index : obj.answer;

            // अगर विषय मैच करता है और डेटा मौजूद है
            if (itemSub.includes(currentSubject) || currentSubject.includes(itemSub)) {
                if (qText && Array.isArray(opts)) {
                    filteredQuestions.push({
                        question: qText,
                        options: opts,
                        correct: ansIdx || 0
                    });
                }
            }

            if (obj.questions && Array.isArray(obj.questions)) {
                obj.questions.forEach(subItem => deepSearch(subItem, itemSub));
            }
            if (obj.data && Array.isArray(obj.data)) {
                obj.data.forEach(subItem => deepSearch(subItem, itemSub));
            }
        }

        deepSearch(quizData);

        if (filteredQuestions.length === 0) {
            alert(currentLanguage === 'hi' ? "इस विषय के प्रश्न जल्द ही जोड़े जा रहे हैं!" : "Questions for this subject are coming soon!");
            document.getElementById('quiz-screen').classList.add('hidden');
            document.getElementById('subject-screen').classList.remove('hidden');
            return;
        }
        
        score = 0;
        currentQuestionIndex = 0;
        
        let shuffledPool = shuffleArray([...filteredQuestions]);
        // 20 सवालों का सेट बनाएं
        let limit = shuffledPool.length < 20 ? shuffledPool.length : 20;
        quizQuestions = shuffledPool.slice(0, limit);
        
        showQuestion();

    } catch (error) {
        console.error("Error loading JSON:", error);
        alert(currentLanguage === 'hi' ? "डेटा लोड करने में समस्या हुई। कृपया जांचें कि JSON फाइल सर्वर पर मौजूद है।" : "Error loading data. Make sure JSON file exists.");
        document.getElementById('quiz-screen').classList.add('hidden');
        document.getElementById('subject-screen').classList.remove('hidden');
    }
}

function showQuestion() {
    isAnswered = false;
    timeLeft = 20;
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('timer').innerText = `⏱️ ${currentLanguage === 'hi' ? 'समय' : 'Time'}: 20s`;
    document.getElementById('progress').innerText = `${currentLanguage === 'hi' ? 'प्रश्न' : 'Question'}: ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    
    let currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = currentQuestion.question;
    
    let optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // सही उत्तर का टेक्स्ट निकालें
    let correctAnswerText = currentQuestion.options[currentQuestion.correct];
    
    // विकल्पों को शफल (मिक्स) करें
    let optionsObjects = currentQuestion.options.map(opt => {
        return { text: opt, isCorrect: opt === correctAnswerText };
    });
    optionsObjects = shuffleArray(optionsObjects);
    
    optionsObjects.forEach(opt => {
        let button = document.createElement('button');
        button.innerText = opt.text;
        button.classList.add('btn', 'option-btn');
        button.onclick = () => checkAnswer(button, opt.isCorrect, correctAnswerText);
        optionsContainer.appendChild(button);
    });
    
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').innerText = `⏱️ ${currentLanguage === 'hi' ? 'समय' : 'Time'}: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        autoLockAnswer();
    }
}

function checkAnswer(selectedButton, isCorrect, correctText) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timerInterval);
    
    let buttons = document.querySelectorAll('.option-btn');
    
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }
    
    // सभी बटन डिसेबल करें और सही को हाईलाइट करें
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correctText) {
            btn.classList.add('correct');
        }
    });
    document.getElementById('next-btn').classList.remove('hidden');
}

function autoLockAnswer() {
    isAnswered = true;
    let buttons = document.querySelectorAll('.option-btn');
    let currentQuestion = quizQuestions[currentQuestionIndex];
    let correctText = currentQuestion.options[currentQuestion.correct];
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correctText) {
            btn.classList.add('correct');
        }
    });
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

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

function restartQuiz() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.add('hidden');
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('lang-screen').classList.remove('hidden');
}
