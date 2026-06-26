let currentLanguage = 'hi';
let currentStream = '';
let currentSubject = '';
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 20;
let isAnswered = false;

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

// अल्ट्रा-स्मार्ट सब्जेक्ट मैचिंग फंक्शन (स्पेलिंग/स्पेस कुछ भी हो, यह ढूंढ लेगा)
function isSubjectMatch(dataSubject, selectedKey) {
    if (!dataSubject) return false;
    
    let s = dataSubject.toLowerCase().replace(/[^a-z]/g, ''); // केवल अक्षर
    let k = selectedKey.toLowerCase().replace(/[^a-z]/g, '');

    if (s.includes(k) || k.includes(s)) return true;
    
    // खास विषयों के लिए स्मार्ट कीवर्ड्स
    if (k.includes('hindi')) return s.includes('hindi');
    if (k.includes('english')) return s.includes('english');
    if (k.includes('politi')) return s.includes('politi') || s.includes('civic');
    if (k.includes('home')) return s.includes('home');
    if (k.includes('legal')) return s.includes('legal') || s.includes('law');
    if (k.includes('math')) return s.includes('math');
    if (k.includes('account')) return s.includes('account');
    if (k.includes('business') || k.includes('bst')) return s.includes('business') || s.includes('bst');
    if (k.includes('eco')) return s.includes('eco');
    if (k.includes('geo')) return s.includes('geo');
    if (k.includes('history')) return s.includes('history');
    if (k.includes('socio')) return s.includes('socio');
    if (k.includes('psycho')) return s.includes('psycho');
    if (k.includes('philo')) return s.includes('philo');
    
    return false;
}

async function startQuiz(subjectKey) {
    currentSubject = subjectKey;

    let filteredQuestions = [];

    document.getElementById('subject-screen').classList.add('hidden');
    let loadingMsg = currentLanguage === 'hi' ? "प्रश्न लोड हो रहे हैं, कृपया प्रतीक्षा करें..." : "Loading questions, please wait...";
    document.getElementById('question-text').innerText = loadingMsg;
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('options-container').innerHTML = '';

    try {
        const response = await fetch(`${currentStream}.json`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const quizData = await response.json();

        // बड़ी फाइल्स को क्रैश होने से बचाने के लिए डीप सर्च
        function deepSearch(obj, inheritedSubject = '') {
            if (!obj) return;

            if (Array.isArray(obj)) {
                obj.forEach(item => deepSearch(item, inheritedSubject));
                return;
            }

            let currentItemSubject = obj.subject ? obj.subject : inheritedSubject;

            let qText = currentLanguage === 'hi' ? (obj.question_hi || obj.question || obj.q) : (obj.question_en || obj.question || obj.q);
            let opts = currentLanguage === 'hi' ? (obj.options_hi || obj.options) : (obj.options_en || obj.options);
            let ansIdx = obj.answer_index !== undefined ? obj.answer_index : obj.answer;

            // अगर यह प्रश्न हमारे विषय का है, तो इसे ऐरे में जोड़ लें
            if (isSubjectMatch(currentItemSubject, currentSubject)) {
                if (qText && Array.isArray(opts) && opts.length > 0) {
                    filteredQuestions.push({
                        question: qText,
                        options: opts,
                        correct: ansIdx || 0
                    });
                }
            }

            // नेस्टेड (अंदर के) ऑब्जेक्ट्स की जाँच
            if (obj.questions && Array.isArray(obj.questions)) {
                obj.questions.forEach(subItem => deepSearch(subItem, currentItemSubject));
            }
            if (obj.data && Array.isArray(obj.data)) {
                obj.data.forEach(subItem => deepSearch(subItem, currentItemSubject));
            }
        }

        deepSearch(quizData);

        // अगर फिर भी कोई सवाल नहीं मिलता है
        if (filteredQuestions.length === 0) {
            alert(currentLanguage === 'hi' 
                ? "इस विषय के प्रश्न अभी उपलब्ध नहीं हैं। (चेक करें कि JSON फाइल में 'subject' का नाम सही लिखा है या नहीं)" 
                : "Questions for this subject are not available yet.");
            document.getElementById('quiz-screen').classList.add('hidden');
            document.getElementById('subject-screen').classList.remove('hidden');
            return;
        }
        
        score = 0;
        currentQuestionIndex = 0;
        
        let shuffledPool = shuffleArray([...filteredQuestions]);
        let limit = shuffledPool.length < 20 ? shuffledPool.length : 20;
        quizQuestions = shuffledPool.slice(0, limit);
        
        showQuestion();

    } catch (error) {
        console.error("Error loading JSON:", error);
        alert(currentLanguage === 'hi' 
            ? "डेटा लोड करने में समस्या हुई। (चेक करें: कहीं आपकी JSON फाइल में कोई कोमा ',' या ब्रैकेट '}' तो नहीं छूट गया?)" 
            : "Error loading data. Make sure JSON syntax is correct.");
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
    
    let correctAnswerText = currentQuestion.options[currentQuestion.correct];
    
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
