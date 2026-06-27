const streams = {
    "Science": ["physics", "chemistry", "biology", "maths", "computer_science", "biotech", "physiology"],
    "Commerce": ["accountancy", "economics", "applied_maths", "basic_studies", "entrepreneurship"],
    "Arts": ["history", "geography", "political_science", "sociology", "hindi_lit", "english_lit", "philosophy", "home_science", "legal_studies"]
};

let quizData = [], score = 0, currentIdx = 0, lang = 'hi';

function render(html) { document.getElementById('app').innerHTML = `<div class="card">${html}</div>`; }
function shuffle(a) { return a.sort(() => Math.random() - 0.5); }

function start() {
    render(`<h2>Language</h2><button class="btn" onclick="setLang('hi')">Hindi</button><button class="btn" onclick="setLang('en')">English</button>`);
}

window.setLang = (l) => { lang = l; render(`<h2>Select Stream</h2>` + Object.keys(streams).map(s => `<button class="btn" onclick="showSubjects('${s}')">${s}</button>`).join('')); };

window.showSubjects = (stream) => { render(`<h2>Select Subject</h2>` + streams[stream].map(sub => `<button class="btn" onclick="loadQuiz('${sub}')">${sub.replace('_', ' ').toUpperCase()}</button>`).join('')); };

window.loadQuiz = async (sub) => {
    const fileName = (sub === 'political_science') ? 'politicl_science' : sub;
    try {
        const res = await fetch(`./${fileName}.json`);
        const data = await res.json();
        quizData = shuffle([...data]).slice(0, 10);
        score = 0; currentIdx = 0;
        showQuestion();
    } catch (e) { alert("File error!"); }
};

function showQuestion() {
    if (currentIdx >= quizData.length) return showResults();
    const q = quizData[currentIdx];
    // ऑप्शंस तैयार करें
    let options = (lang === 'hi' ? q.options_hi : q.options_en).map((text, i) => ({ text, isCorrect: i === q.answer_index }));
    
    render(`<p>Q: ${currentIdx + 1}/10</p><h3>${lang === 'hi' ? q.question_hi : q.question_en}</h3>` + 
    options.map((opt, i) => `<button class="btn" onclick="checkAnswer(this, ${opt.isCorrect}, ${q.answer_index})">${opt.text}</button>`).join(''));
}

window.checkAnswer = (btn, isCorrect, correctIdx) => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(b => b.disabled = true); // क्लिक डिसेबल

    if (isCorrect) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        btns[correctIdx].classList.add('highlight-correct'); // सही जवाब को चमकाएं
    }
    
    setTimeout(() => { currentIdx++; showQuestion(); }, 1000); // 1 सेकंड का इंतज़ार
};

function showResults() {
    render(`<h2>Final Report</h2><div style="font-size: 30px;">Score: ${score}/10</div><button class="btn" onclick="location.reload()">Restart</button>`);
}

document.addEventListener('DOMContentLoaded', start);
