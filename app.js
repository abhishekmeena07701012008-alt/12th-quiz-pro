const streams = {
    "Science": ["physics", "chemistry", "biology", "maths", "computer_science", "biotech", "physiology"],
    "Commerce": ["accountancy", "economics", "applied_maths", "basic_studies", "entrepreneurship"],
    "Arts": ["history", "geography", "political_science", "sociology", "hindi_lit", "english_lit", "philosophy", "home_science", "legal_studies"]
};

let quizData = [], score = 0, currentIdx = 0, lang = 'hi', timer, timeLeft = 15;

function shuffle(a) { return a.sort(() => Math.random() - 0.5); }
function render(html) { document.getElementById('app').innerHTML = `<div class="card">${html}</div>`; }

function start() {
    render(`<h2>Language/माध्यम</h2><button class="btn" onclick="setLang('hi')">Hindi</button><button class="btn" onclick="setLang('en')">English</button>`);
}

function setLang(l) { 
    lang = l; 
    render(`<h2>Select Stream</h2>` + Object.keys(streams).map(s => `<button class="btn" onclick="showSubjects('${s}')">${s}</button>`).join('')); 
}

function showSubjects(stream) {
    render(`<h2>Select Subject</h2>` + streams[stream].map(sub => `<button class="btn" onclick="loadQuiz('${sub}')">${sub.replace('_', ' ').toUpperCase()}</button>`).join(''));
}

async function loadQuiz(sub) {
    // यहाँ आपकी फाइल के नाम और स्ट्रीम नाम का मिलान किया गया है
    let fileName = sub === 'political_science' ? 'politicl_science' : sub;
    
    try {
        const res = await fetch(`${fileName}.json`);
        const data = await res.json();
        quizData = shuffle([...data]).slice(0, 10);
        score = 0; currentIdx = 0;
        showQuestion();
    } catch (e) {
        alert("फ़ाइल नहीं मिली: " + fileName + ".json");
    }
}

function startTimer() {
    timeLeft = 15;
    document.getElementById('timer').innerText = `Time: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time: ${timeLeft}s`;
        if(timeLeft <= 0) { clearInterval(timer); check(false, null); }
    }, 1000);
}

function showQuestion() {
    if (currentIdx >= quizData.length) return showResults();
    clearInterval(timer); startTimer();
    const q = quizData[currentIdx];
    let options = (lang === 'hi' ? q.options_hi : q.options_en).map((text, i) => ({ text, isCorrect: i === q.answer_index }));
    options = shuffle(options);

    render(`<div id="timer">Time: 15s</div><p>Question ${currentIdx + 1}/10</p><h3>${lang === 'hi' ? q.question_hi : q.question_en}</h3>` + 
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
    render(`<div style="padding: 20px;"><h2>Final Report</h2><div style="font-size: 50px;">${score}/10</div>
    <p>Accuracy: ${acc}%</p><button class="btn" onclick="location.reload()">Restart</button></div>`);
}
start();
