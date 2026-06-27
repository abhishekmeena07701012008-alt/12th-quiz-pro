const app = document.getElementById('app');
let score = 0, currentQ = 0, questions = [];

// Data Fetching and Initialization
function initQuiz(subjectData) {
    questions = shuffle(subjectData); // Questions shuffle
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQ];
    const shuffledOptions = shuffle([...q.options]); // Options shuffle
    
    app.innerHTML = `
        <h3>Sawaal ${currentQ + 1}/20</h3>
        <p>${q.question}</p>
        ${shuffledOptions.map((opt, i) => 
            `<button class="btn" onclick="checkAnswer('${opt}', '${q.answer}')">${opt}</button>`
        ).join('')}
    `;
}

function checkAnswer(selected, correct) {
    if(selected === correct) score++;
    // Feedback Logic
    currentQ++;
    setTimeout(() => {
        if(currentQ < 20) renderQuestion();
        else showReport();
    }, 1000);
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function showReport() {
    app.innerHTML = `<h2>Report Card</h2><p>Aapka Score: ${score}/20</p>
    <button class="btn" onclick="location.reload()">Phir se khele</button>`;
}
