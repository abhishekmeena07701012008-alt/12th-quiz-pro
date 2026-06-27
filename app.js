const subjects = ["physics", "chemistry", "biology", "history", "geography", "economics", "accountancy", "maths", "computer_science"];
let currentQuizData = [], score = 0, currentIndex = 0;

function init() {
    const app = document.getElementById('app');
    app.innerHTML = `<h3>विषय चुनें:</h3>` + subjects.map(sub => 
        `<button class="sub-btn" onclick="loadQuiz('${sub}')">${sub.toUpperCase()}</button>`).join('');
}

async function loadQuiz(subject) {
    const response = await fetch(`${subject}.json`);
    const data = await response.json();
    currentQuizData = data.sort(() => 0.5 - Math.random()).slice(0, 10);
    currentIndex = 0; score = 0;
    showQuestion();
}

function showQuestion() {
    if (currentIndex >= currentQuizData.length) return showResults();
    const q = currentQuizData[currentIndex];
    const app = document.getElementById('app');
    
    let options = q.options_hi.map((opt, i) => ({ text: opt, isCorrect: i === q.answer_index }));
    options.sort(() => 0.5 - Math.random());

    app.innerHTML = `
        <p><strong>प्रश्न ${currentIndex + 1}/10:</strong> ${q.question_hi}</p>
        ${options.map(opt => `<button class="option-btn" onclick="checkAnswer(this, ${opt.isCorrect})">${opt.text}</button>`).join('')}
    `;
}

function checkAnswer(btn, isCorrect) {
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    btn.classList.add(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) score++;
    setTimeout(() => { currentIndex++; showQuestion(); }, 1000);
}

function showResults() {
    document.getElementById('app').innerHTML = `
        <h2>क्विज पूर्ण!</h2>
        <p>आपका स्कोर: ${score} / 10</p>
        <button class="sub-btn" onclick="location.reload()">वापस मुख्य मेनू पर जाएँ</button>
    `;
}
init();
