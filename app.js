const streams = {
    "Science": ["physics", "chemistry", "biology", "maths", "computer_science", "biotech", "physiology"],
    "Commerce": ["accountancy", "economics", "applied_maths", "basic_studies"],
    "Arts": ["history", "geography", "political_science", "sociology", "hindi_lit_json", "english_lit", "philosophy", "home_science", "legal_studies"]
};

let quizData = [], score = 0, currentIdx = 0, lang = 'hi';

// UI Render function
function render(html) {
    document.getElementById('app').innerHTML = `<div class="card">${html}</div>`;
}

// 1. Language Select
function start() {
    render(`<h2>Choose Language</h2>
    <button class="btn" onclick="setLang('hi')">Hindi</button>
    <button class="btn" onclick="setLang('en')">English</button>`);
}

function setLang(l) { 
    lang = l; 
    render(`<h2>Select Stream</h2>` + Object.keys(streams).map(s => `<button class="btn" onclick="showSubjects('${s}')">${s}</button>`).join('')); 
}

// 2. Subject Select
function showSubjects(stream) {
    render(`<h2>Select Subject</h2>` + streams[stream].map(sub => 
        `<button class="btn" onclick="loadQuiz('${sub}')">${sub.replace('_', ' ').toUpperCase()}</button>`).join(''));
}

// 3. Load Quiz
async function loadQuiz(sub) {
    try {
        // Aapki files .json format mein hain, toh bas .json append karna hai
        const res = await fetch(`${sub}.json`);
        const data = await res.json();
        
        // Random 10 questions select karna
        quizData = data.sort(() => Math.random() - 0.5).slice(0, 10);
        score = 0; 
        currentIdx = 0;
        showQuestion();
    } catch (e) {
        alert("File load nahi ho rahi. File ka naam check karein: " + sub);
    }
}

// 4. Show Question
function showQuestion() {
    if (currentIdx >= quizData.length) return showResults();
    
    const q = quizData[currentIdx];
    const qText = (lang === 'hi') ? q.question_hi : q.question_en;
    const options = (lang === 'hi') ? q.options_hi : q.options_en;

    let html = `<h3>${qText}</h3>`;
    options.forEach((opt, i) => {
        html += `<button class="btn" onclick="checkAnswer(${i}, ${q.answer_index})">${opt}</button>`;
    });
    
    render(html);
}

// 5. Check Answer
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        score++;
    }
    currentIdx++;
    showQuestion();
}

// 6. Report Card
function showResults() {
    render(`<h2>Final Report</h2>
    <div style="font-size:30px">Score: ${score}/10</div>
    <button class="btn" onclick="location.reload()">Restart</button>`);
}

start();
