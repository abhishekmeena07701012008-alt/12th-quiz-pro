let currentQuestionIdx = 0;
let score = 0;
let currentQuestionsList = [];

const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const qText = document.getElementById('q-text');
const qCount = document.getElementById('q-count');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const subjectSelect = document.getElementById('subject-select');

function loadSubjectData() {
    // वैल्यू को अलग करो, जैसे 'history:hi' बनेगा subject='history' और medium='hi'
    const [subject, medium] = subjectSelect.value.split(':');
    
    const oldScript = document.getElementById('dynamic-subject-script');
    if (oldScript) { oldScript.remove(); }

    const script = document.createElement('script');
    script.src = `quiz_files/${subject}.js`; // सिर्फ सब्जेक्ट के नाम की फाइल लोड होगी (जैसे history.js)
    script.id = 'dynamic-subject-script';
    
    script.onload = function() {
        if (typeof subjectQuizData !== 'undefined' && subjectQuizData[medium]) {
            // सही माध्यम (hi या en) के सवाल उठाओ
            currentQuestionsList = subjectQuizData[medium];
            restartQuiz();
        } else {
            qText.innerText = "Error: Questions data format not found for this medium.";
        }
    };
    script.onerror = function() {
        qText.innerText = "इस विषय के सवाल अभी जोड़े जा रहे हैं। कृपया दूसरा विषय चुनें!";
        optionsContainer.innerHTML = '';
        nextBtn.style.display = 'none';
    };

    document.body.appendChild(script);
}

function loadQuestion() {
    resetState();
    if(currentQuestionsList.length === 0) return;

    let currentQuestion = currentQuestionsList[currentQuestionIdx];
    qText.innerText = currentQuestion.question;
    qCount.innerText = `Question ${currentQuestionIdx + 1} of ${currentQuestionsList.length}`;
    
    let progressPercentage = (currentQuestionIdx / currentQuestionsList.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(index, button));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    nextBtn.style.display = 'none';
    optionsContainer.innerHTML = '';
}

function selectAnswer(selectedIndex, selectedBtn) {
    let correctIndex = currentQuestionsList[currentQuestionIdx].correct;
    let allButtons = optionsContainer.children;

    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        allButtons[correctIndex].classList.add('correct');
    }

    for (let btn of allButtons) { btn.classList.add('disabled'); }
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIdx++;
    if (currentQuestionIdx < currentQuestionsList.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    progressBar.style.width = `100%`;
    quizBox.style.display = 'none';
    resultBox.style.display = 'block';
    document.getElementById('score').innerText = score;
    document.getElementById('total-q').innerText = currentQuestionsList.length;
}

function restartQuiz() {
    currentQuestionIdx = 0;
    score = 0;
    resultBox.style.display = 'none';
    quizBox.style.display = 'block';
    loadQuestion();
}

window.onload = loadSubjectData;
