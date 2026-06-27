const streams = {
    "Science": ["physics", "chemistry", "biology", "maths", "computer_science", "biotech", "physiology"],
    "Commerce": ["accountancy", "economics", "applied_maths", "basic_studies", "entrepreneurship"],
    "Arts": ["history", "geography", "political_science", "sociology", "hindi_lit", "english_lit", "philosophy", "home_science", "legal_studies"]
};

let quizData = [], score = 0, currentIdx = 0, lang = 'hi';

function render(html) {
    document.getElementById('app').innerHTML = `<div class="card">${html}</div>`;
}

function start() {
    render(`<h2>Language/माध्यम</h2>
            <button class="btn" onclick="setLang('hi')">Hindi</button>
            <button class="btn" onclick="setLang('en')">English</button>`);
}

function setLang(l) {
    lang = l;
    render(`<h2>Select Stream</h2>` + Object.keys(streams).map(s => 
        `<button class="btn" onclick="showSubjects('${s}')">${s}</button>`).join(''));
}

function showSubjects(stream) {
    render(`<h2>Select Subject</h2>` + streams[stream].map(sub => 
        `<button class="btn" onclick="loadQuiz('${sub}')">${sub.replace('_', ' ').toUpperCase()}</button>`).join(''));
}

async function loadQuiz(sub) {
    // यहाँ स्पेलिंग ठीक की गई है ताकि politicl_science भी सही लोड हो
    const fileName = (sub === 'political_science') ? 'politicl_science' : sub;
    
    try {
        const res = await fetch(`./${fileName}.json`);
        if (!res.ok) throw new Error("File not found");
        const data = await res.json();
        
        // डेटा का स्ट्रक्चर चेक करना
        quizData = data.sort(() => Math.random() - 0.5).slice(0, 10);
        score = 0; currentIdx = 0;
        showQuestion();
    } catch (e) {
        alert("एरर: " + fileName + ".json नहीं मिली। कृपया फाइल नेम चेक करें।");
    }
}

function showQuestion() {
    if (currentIdx >= quizData.length) return showResults();
    const q = quizData[currentIdx];
    
    // सुरक्षित तरीके से ऑप्शंस दिखाना
    const options = (lang === 'hi' ? q.options_hi : q.options_en) || [];
    
    render(`<p>Question ${currentIdx + 1}/10</p>
            <h3>${lang === 'hi' ? q.question_hi : q.question_en}</h3>` + 
            options.map((opt, i) => `<button class="btn" onclick="check(${i === q.answer_index})">${opt}</button>`).join(''));
}

function check(isCorrect) {
    if (isCorrect) score++;
    currentIdx++;
    showQuestion();
}

function showResults() {
    render(`<h2>Final Report</h2>
            <div style="font-size: 40px;">Score: ${score}/10</div>
            <button class="btn" onclick="location.reload()">Restart</button>`);
}

document.addEventListener('DOMContentLoaded', start);
