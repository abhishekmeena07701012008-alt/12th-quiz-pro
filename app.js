const streams = {
    "Science": ["physics", "chemistry", "biology", "maths", "computer_science", "biotech", "physiology"],
    "Commerce": ["accountancy", "economics", "applied_maths", "basic_studies"],
    "Arts": ["history", "geography", "political_science", "sociology", "hindi_lit", "english_lit", "philosophy", "home_science", "legal_studies"]
};

let quizData = [], score = 0, currentIdx = 0, lang = 'hi';

function render(html) { document.getElementById('app').innerHTML = html; }

// स्टेप 1: मीडियम चुनें
function init() {
    render(`<h3>माध्यम चुनें (Choose Medium):</h3>
    <button class="btn" onclick="setLang('hi')">हिंदी (Hindi)</button>
    <button class="btn" onclick="setLang('en')">English</button>`);
}

function setLang(l) { lang = l; showStreams(); }

// स्टेप 2: स्ट्रीम चुनें
function showStreams() {
    render(`<h3>स्ट्रीम चुनें:</h3>` + Object.keys(streams).map(s => 
        `<button class="btn" onclick="showSubjects('${s}')">${s}</button>`).join(''));
}

// स्टेप 3: विषय चुनें
function showSubjects(stream) {
    render(`<h3>विषय चुनें:</h3>` + streams[stream].map(sub => 
        `<button class="btn" onclick="loadQuiz('${sub}')">${sub.replace('_', ' ').toUpperCase()}</button>`).join(''));
}

// क्विज लोडिंग लॉजिक
async function loadQuiz(sub) {
    const res = await fetch(`${sub}.json`);
    const data = await res.json();
    quizData = data.sort(() => 0.5 - Math.random()).slice(0, 10);
    score = 0; currentIdx = 0;
    showQuestion();
}

// प्रश्न दिखाना
function showQuestion() {
    if (currentIdx >= quizData.length) return showResults();
    const q = quizData[currentIdx];
    const opts = lang === 'hi' ? q.options_hi : q.options_en;
    
    render(`<p>प्रश्न ${currentIdx + 1}/10</p>
    <h3>${lang === 'hi' ? q.question_hi : q.question_en}</h3>
    ${opts.map((opt, i) => `<button class="btn option-btn" onclick="check(${i}, ${q.answer_index}, this)">${opt}</button>`).join('')}`);
}

// जवाब चेक करना
function check(sel, cor, btn) {
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    if (sel === cor) { btn.classList.add('correct'); score++; }
    else { btn.classList.add('wrong'); document.querySelectorAll('.option-btn')[cor].classList.add('correct'); }
    setTimeout(() => { currentIdx++; showQuestion(); }, 1000);
}

// रिजल्ट कार्ड
function showResults() {
    render(`<h2>रिपोर्ट कार्ड</h2><p>आपका स्कोर: ${score}/10</p>
    <button class="btn" onclick="location.reload()">वापस शुरू करें</button>`);
}

init();
