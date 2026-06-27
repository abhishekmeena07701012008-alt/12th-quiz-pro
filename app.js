const streams = {
    "Science": ["physics", "chemistry", "biology", "maths", "computer_science", "biotech", "physiology"],
    "Commerce": ["accountancy", "economics", "applied_maths", "basic_studies"],
    "Arts": ["history", "geography", "political_science", "sociology", "hindi_lit_json", "english_lit", "philosophy", "home_science", "legal_studies"]
};

let quizData = [], score = 0, currentIdx = 0, lang = 'hi', timer, timeLeft = 15;

function shuffle(a) { return a.sort(() => Math.random() - 0.5); }
function render(html) { document.getElementById('app').innerHTML = `<div class="card">${html}</div>`; }

function start() {
    render(`<h2>भाषा चुनें</h2><button class="btn" onclick="setLang('hi')">हिंदी</button><button class="btn" onclick="setLang('en')">English</button>`);
}

function setLang(l) { lang = l; render(`<h2>स्ट्रीम चुनें</h2>` + Object.keys(streams).map(s => `<button class="btn" onclick="showSubjects('${s}')">${s}</button>`).join('')); }

function showSubjects(stream) {
    render(`<h2>विषय चुनें</h2>` + streams[stream].map(sub => `<button class="btn" onclick="loadQuiz('${sub}')">${sub.replace('_', ' ').toUpperCase()}</button>`).join(''));
}

async function loadQuiz(sub) {
    // फाइल का नाम सही करने के लिए लॉजिक
    let fileName = sub.endsWith('.json') ? sub : (sub + ".json");
    // अगर फाइल का नाम 'hindi_lit_json.json' हो गया है, तो उसे ठीक करें (Screenshot के हिसाब से)
    if(sub === 'hindi_lit_json') fileName = 'hindi_lit_json.json'; 

    try {
        const res = await fetch(fileName);
        const data = await res.json();
        quizData = shuffle([...data]).slice(0, 10);
        score = 0; currentIdx = 0;
        showQuestion();
    } catch(err) {
        alert("फाइल नहीं मिली: " + fileName + ". कृपया अपने फोल्डर में फाइल का नाम जांचें।");
    }
}

function showQuestion() {
    if (currentIdx >= quizData.length) return showResults();
    const q = quizData[currentIdx];
    let options = (lang === 'hi' ? q.options_hi : q.options_en).map((text, i) => ({ text, isCorrect: i === q.answer_index }));
    options = shuffle(options);

    render(`<p>प्रश्न ${currentIdx + 1}/10</p><h3>${lang === 'hi' ? q.question_hi : q.question_en}</h3>` + 
    options.map(opt => `<button class="btn" onclick="checkAnswer(${opt.isCorrect}, this)">${opt.text}</button>`).join(''));
}

function checkAnswer(isCorrect, btn) {
    btn.classList.add(isCorrect ? 'correct' : 'wrong');
    if(isCorrect) score++;
    setTimeout(() => { currentIdx++; showQuestion(); }, 800);
}

function showResults() {
    render(`<div class="result-card"><h2>रिपोर्ट कार्ड</h2><div style="font-size:30px">${score}/10</div>
    <p>सटीकता: ${(score/10)*100}%</p>
    <button class="btn" onclick="location.reload()">फिर से शुरू करें</button></div>`);
}
start();
