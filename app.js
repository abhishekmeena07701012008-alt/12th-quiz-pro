let currentLang = '', currentSubject = '', quizQuestions = [], currentIndex = 0, score = 0;

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('lang-screen').classList.add('hidden');
    document.getElementById('subject-screen').classList.remove('hidden');
    renderSubjects();
}

function renderSubjects() {
    let container = document.getElementById('subjects-container');
    // Unique subjects nikalne ke liye
    let subjects = [...new Set(quizDataMaster.map(q => q.subject))];
    subjects.forEach(sub => {
        let btn = document.createElement('button');
        btn.className = 'btn';
        btn.innerText = sub;
        btn.onclick = () => startQuiz(sub);
        container.appendChild(btn);
    });
}

function startQuiz(sub) {
    currentSubject = sub;
    // Data filter: Subject + Lang match hona chahiye
    quizQuestions = quizDataMaster
        .filter(q => q.subject === sub && (q.lang === currentLang || !q.lang))
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);

    if(quizQuestions.length === 0) { alert("Questions not found for this subject!"); return; }

    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    if (currentIndex >= quizQuestions.length) {
        document.getElementById('quiz-screen').classList.add('hidden');
        document.getElementById('report').classList.remove('hidden');
        document.getElementById('score-text').innerText = `Score: ${score} / ${quizQuestions.length}`;
        return;
    }

    let q = quizQuestions[currentIndex];
    // .question ya .q handle karne ke liye (Aapki file ke hisaab se)
    document.getElementById('question').innerText = q.question || q.q;
    document.getElementById('options').innerHTML = "";
    
    q.options.forEach((opt, idx) => {
        let btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx, q.correct, btn);
        document.getElementById('options').appendChild(btn);
    });
}

function checkAnswer(idx, correct, btn) {
    document.querySelectorAll('.option-btn').forEach(b => b.style.pointerEvents = 'none');
    if (idx === correct) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
    }
    setTimeout(() => { currentIndex++; showQuestion(); }, 1000);
}
