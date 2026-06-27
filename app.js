const streams = {
    "Science": ["physics", "chemistry", "biology", "maths", "computer_science", "biotech", "physiology"],
    "Commerce": ["accountancy", "economics", "applied_maths", "basic_studies"],
    "Arts": ["history", "geography", "political_science", "sociology", "hindi_lit", "english_lit", "philosophy", "home_science", "legal_studies"]
};

let quizData = [], score = 0, currentIdx = 0, lang = 'hi';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function render(html) { document.getElementById('app').innerHTML = html; }

function start() {
    render(`<h2>भाषा चुनें</h2><button class="btn" onclick="setLang('hi')">हिंदी</button><button class="btn" onclick="setLang('en')">English</button>`);
}

function setLang(l) { lang = l; render(`<h2>स्ट्रीम चुनें</h2>` + Object.keys(streams).map(s => `<button class="btn" onclick="showSubjects('${s}')">${s}</button>`).join('')); }

function showSubjects(stream) {
    render(`<h2>विषय चुनें</h2>` + streams[stream].map(sub => `<button class="btn" onclick="loadQuiz('${sub}')">${sub.replace('_', ' ').toUpperCase()}</button>`).join(''));
}

async function loadQuiz(sub) {
    const res = await fetch(`${sub}.json`);
    const data = await res.json();
    quizData = shuffle([...data]).slice(0, 10);
    score = 0; currentIdx = 0;
    showQuestion();
}

function showQuestion() {
    if (currentIdx >= quizData.length) return showResults();
    const q = quizData[currentIdx];
    let options = (lang === 'hi' ? q.options_hi : q.options_en).map((opt, i) => ({ text: opt, isCorrect: i === q.answer_index }));
    options = shuffle(options);

    render(`<p>प्रश्न ${currentIdx + 1}/10</p><h3>${lang === 'hi' ? q.question_hi : q.question_en}</h3>` + 
    options.map(opt => `<button class="btn option-btn" onclick="check(${opt.isCorrect}, this)">${opt.text}</button>`).join(''));
}

function check(isCorrect, btn) {
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    if (isCorrect) { btn.classList.add('correct'); score++; } else { btn.classList.add('wrong'); }
    setTimeout(() => { currentIdx++; showQuestion(); }, 800);
}

function showResults() {
    render(`<div class="result-card"><h2>परिणाम</h2><div class="score-circle">${score}/10</div>
    <p>${score >= 8 ? "गजब प्रदर्शन!" : score >= 5 ? "अच्छी कोशिश!" : "मेहनत जारी रखें!"}</p>
    <button class="btn" style="background:white; color:#6c5ce7;" onclick="location.reload()">फिर से शुरू करें</button></div>`);
}

start();
