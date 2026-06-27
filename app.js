const streams = {
    "Science": ["physics", "chemistry", "biology", "maths", "computer_science", "biotech", "physiology"],
    "Commerce": ["accountancy", "economics", "applied_maths", "basic_studies"],
    "Arts": ["history", "geography", "political_science", "sociology", "hindi_lit", "english_lit", "philosophy", "home_science", "legal_studies"]
};

let quizData = [], score = 0, currentIdx = 0, lang = 'hi';

// Fisher-Yates शफलिंग - ये सबसे बेस्ट है
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function render(html) { document.getElementById('app').innerHTML = `<div class="card">${html}</div>`; }

function start() {
    render(`<h2>भाषा चुनें</h2>
    <button class="btn" onclick="setLang('hi')">हिंदी (Hindi)</button>
    <button class="btn" onclick="setLang('en')">English</button>`);
}

function setLang(l) { lang = l; showStreams(); }

function showStreams() {
    render(`<h2>स्ट्रीम चुनें</h2>` + Object.keys(streams).map(s => 
        `<button class="btn" onclick="showSubjects('${s}')">${s}</button>`).join(''));
}

function showSubjects(stream) {
    render(`<h2>विषय चुनें</h2>` + streams[stream].map(sub => 
        `<button class="btn" onclick="loadQuiz('${sub}')">${sub.replace('_', ' ').toUpperCase()}</button>`).join(''));
}

async function loadQuiz(sub) {
    const res = await fetch(`${sub}.json`);
    const data = await res.json();
    // 1. पूरे क्वेश्चन लिस्ट को शफल किया
    quizData = shuffleArray([...data]).slice(0, 10);
    score = 0; currentIdx = 0;
    showQuestion();
}

function showQuestion() {
    if (currentIdx >= quizData.length) return showResults();
    const q = quizData[currentIdx];
    
    // 2. ऑप्शंस को इंडेक्स के साथ जोड़कर फिर शफल किया (जगह बदलने के लिए)
    let options = (lang === 'hi' ? q.options_hi : q.options_en).map((text, i) => ({
        text: text,
        isCorrect: i === q.answer_index
    }));
    options = shuffleArray(options);

    render(`<p>प्रश्न ${currentIdx + 1}/10</p><h3>${lang === 'hi' ? q.question_hi : q.question_en}</h3>` + 
    options.map(opt => `<button class="btn option-btn" onclick="check(${opt.isCorrect}, this)">${opt.text}</button>`).join(''));
}

function check(isCorrect, btn) {
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    if (isCorrect) { btn.classList.add('correct'); score++; } else { btn.classList.add('wrong'); }
    setTimeout(() => { currentIdx++; showQuestion(); }, 1000);
}

function showResults() {
    render(`<div class="result-card"><h2>आपका स्कोर</h2><div class="score-circle" style="font-size:40px">${score}/10</div>
    <p>${score >= 8 ? "गजब प्रदर्शन! आप जीनियस हैं!" : score >= 5 ? "अच्छी कोशिश!" : "मेहनत जारी रखें!"}</p>
    <button class="btn" onclick="location.reload()">दोबारा खेलें</button></div>`);
}

start();
