let currentLanguage = 'hi';
let currentStream = '';
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function selectLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('lang-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.remove('hidden');
}

function selectStream(stream) {
    currentStream = stream; // यह 'science.json' या 'commerce.json' फाइल फेच करेगा
    startQuiz();
}

async function startQuiz() {
    document.getElementById('stream-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    try {
        const response = await fetch(`${currentStream}.json`);
        const data = await response.json();
        quizQuestions = data.questions;
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    } catch (err) {
        alert("डेटा लोड करने में त्रुटि हुई!");
        location.reload();
    }
}

function showQuestion() {
    let q = quizQuestions[currentQuestionIndex];
    document.getElementById('progress').innerText = `Question: ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    
    // भाषा के आधार पर प्रश्न दिखाएं
    document.getElementById('question-text').innerText = currentLanguage === 'hi' ? q.question_hi : q.question_en;
    
    let container = document.getElementById('options-container');
    container.innerHTML = '';

    // ऑप्शंस दिखाएं
    let options = currentLanguage === 'hi' ? q.options_hi : q.options_en;
    options.forEach((opt, index) => {
        let btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'btn option-btn';
        btn.onclick = () => checkAnswer(index, q.answer_index, btn);
        container.appendChild(btn);
    });
    
    document.getElementById('next-btn').classList.add('hidden');
}

function checkAnswer(selectedIndex, correctIndex, btn) {
    let allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (selectedIndex === correctIndex) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        allBtns[correctIndex].classList.add('correct');
    }
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
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score-display').innerText = `${score} / ${quizQuestions.length}`;
}

function restartQuiz() {
    location.reload();
}
