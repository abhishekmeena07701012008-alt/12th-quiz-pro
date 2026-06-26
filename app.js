let currentQ = 0;
let userScores = {}; // इसमें हर विषय का स्कोर स्टोर होगा

function loadQuestion() {
    if (currentQ >= quizDataMaster.length) {
        showResults();
        return;
    }
    const q = quizDataMaster[currentQ];
    document.getElementById('question').innerText = q.question;
    const optCont = document.getElementById('options-container');
    optCont.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optCont.appendChild(btn);
    });
}

function checkAnswer(index) {
    const q = quizDataMaster[currentQ];
    if (index === q.correct) {
        userScores[q.subject] = (userScores[q.subject] || 0) + 1;
    }
    currentQ++;
    loadQuestion();
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    const res = document.getElementById('result-container');
    res.style.display = 'block';
    
    let table = "<table><tr><th>विषय</th><th>स्कोर</th></tr>";
    for (let sub in userScores) {
        table += `<tr><td>${sub}</td><td>${userScores[sub]}</td></tr>`;
    }
    table += "</table>";
    document.getElementById('score-table').innerHTML = table;
}

// शुरुआत करें
loadQuestion();
