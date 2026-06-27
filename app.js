const streams = {
    "Science": ["physics", "chemistry", "biology", "maths", "computer_science", "biotech", "physiology"],
    "Commerce": ["accountancy", "economics", "applied_maths", "basic_studies"],
    "Arts": ["history", "geography", "political_science", "sociology", "hindi_lit_json", "english_lit", "philosophy", "home_science", "legal_studies"]
};

let quizData = [], score = 0, currentIdx = 0, lang = 'hi', timer, timeLeft = 15;

function shuffle(a) { return a.sort(() => Math.random() - 0.5); }
function render(html) { document.getElementById('app').innerHTML = `<div class="card">${html}</div>`; }

function start() {
    render(`<h2>Language / माध्यम</h2><button class="btn" onclick="setLang('hi')">Hindi</button><button class="btn" onclick="setLang('en')">English</button>`);
}

function setLang(l) { 
    lang = l; 
    render(`<h2>Select Stream</h2>` + Object.keys(streams).map(s => `<button class="btn" onclick="showSubjects('${s}')">${s}</button>`).join('')); 
}

function showSubjects(stream) {
    // Yahan file extension .json jodna zaruri hai agar file mein nahi hai
    render(`<h2>Select Subject</h2>` + streams[stream].map(sub => 
        `<button class="btn" onclick="loadQuiz('${sub}')">${sub.replace('_', ' ').toUpperCase()}</button>`).join(''));
}

async function loadQuiz(sub) {
    try {
        // Filename fix: agar file hindi_lit_json hai to wahi use karenge
        const fileName = sub.includes('.') ? sub : `${sub}.json`;
        const res = await fetch(fileName);
        const data = await res.json();
        quizData = shuffle([...data]).slice(0, 10);
        score = 0; currentIdx = 0;
        showQuestion();
    } catch (e) {
        alert("Error: File load nahi ho payi, check file name: " + sub);
    }
}

function startTimer() {
    timeLeft = 15;
    const timerEl = document.getElementById('timer');
    if(timerEl) timerEl.innerText = `Time: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        if(timerEl) timerEl.innerText = `Time: ${timeLeft}s`;
        if(timeLeft <= 0) { clearInterval(timer); check(false, null); }
    }, 1000);
}

function showQuestion() {
    if (currentIdx >= quizData.length) return showResults();
    clearInterval(timer); startTimer();
    const q = quizData[currentIdx];
    
    // Check agar questions data mein hai
    const qText = lang === 'hi' ? q.question_hi : q.question_en;
    const optionsRaw = lang === 'hi' ? q.options_hi : q.options_en;
    let options = optionsRaw.map((text, i) => ({ text, isCorrect: i === q.answer_index }));
    options = shuffle(options);

    render(`<div id="timer">Time: 15s</div><p>Question ${currentIdx + 1}/10</p><h3>${qText}</h3>` + 
    options.map(opt => `<button class="btn" onclick="check(${opt.isCorrect}, this)">${opt.text}</button>`).join(''));
}

function check(isCorrect, btn) {
    clearInterval(timer);
    if(btn) { btn.classList.add(isCorrect ? 'correct' : 'wrong'); }
    if(isCorrect) score++;
    setTimeout(() => { currentIdx++; showQuestion(); }, 1000);
}

function showResults() {
    let acc = (score / 10) * 100;
    render(`<div style="background: linear-gradient(135deg, #a8edea, #fed6e3); padding: 30px; border-radius: 20px;">
    <h2>Final Report Card</h2>
    <div style="font-size: 40px; font-weight: bold; color: #333;">${score}/10</div>
    <p>Accuracy: ${acc}%</p>
    <p>${score >= 8 ? "Excellent! Genius level!" : "Keep Practicing!"}</p>
    <button class="btn" onclick="location.reload()">Restart Quiz</button></div>`);
}
start();
