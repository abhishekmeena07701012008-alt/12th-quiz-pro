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

function startQuiz(subjectKey) {
    currentSubject = subjectKey;
    // यहाँ आपकी 6000 लाइन वाली फाइल का डेटा फिल्टर हो रहा है
    let filteredQuestions = typeof quizDataMaster !== 'undefined' ? quizDataMaster.filter(q => q.subject === currentSubject && q.lang === currentLanguage) : [];
    
    if (filteredQuestions.length === 0) { alert("इस विषय के प्रश्न अभी उपलब्ध नहीं हैं!"); return; }
    
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    score = 0; currentQuestionIndex = 0;
    quizQuestions = shuffleArray([...filteredQuestions]).slice(0, 20);
    showQuestion();
}

function showQuestion() {
    isAnswered = false; timeLeft = 20;
    document.getElementById('timer').innerText = `⏱️ ${currentLanguage === 'hi' ? 'समय' : 'Time'}: 20s`;
    document.getElementById('progress').innerText = `${currentLanguage === 'hi' ? 'प्रश्न' : 'Question'}: ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    let q = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = q.question;
    let container = document.getElementById('options-container');
    container.innerHTML = '';
    q.options.forEach((opt, idx) => {
        let btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('btn', 'option-btn');
        btn.onclick = () => checkAnswer(btn, idx === q.correct);
        container.appendChild(btn);
    });
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').innerText = `⏱️ ${currentLanguage === 'hi' ? 'समय' : 'Time'}: ${timeLeft}s`;
    if (timeLeft <= 0) { clearInterval(timerInterval); autoLockAnswer(); }
}

function checkAnswer(btn, isCorrect) {
    if (isAnswered) return;
    isAnswered = true; clearInterval(timerInterval);
    let correctIdx = quizQuestions[currentQuestionIndex].correct;
    if (isCorrect) { btn.classList.add('correct'); score++; }
    else { btn.classList.add('wrong'); }
    document.querySelectorAll('.option-btn').forEach((b, i) => {
        b.disabled = true;
        if (i === correctIdx) b.classList.add('correct');
    });
    setTimeout(() => { nextQuestion(); }, 1000); // 1 सेकंड ऑटो-स्विच
}

function autoLockAnswer() {
    isAnswered = true;
    let correctIdx = quizQuestions[currentQuestionIndex].correct;
    document.querySelectorAll('.option-btn').forEach((b, i) => {
        b.disabled = true;
        if (i === correctIdx) b.classList.add('correct');
    });
    setTimeout(() => { nextQuestion(); }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) showQuestion();
    else showResult();
}

function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score-display').innerText = `${score} / ${quizQuestions.length}`;
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
