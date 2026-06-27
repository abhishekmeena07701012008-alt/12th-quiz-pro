let lang = 'hi';
let questions = [];
let currentIdx = 0;
let score = 0;

async function startQuiz(selectedLang) {
    lang = selectedLang;
    document.getElementById('setup').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    
    // यहाँ अपनी JSON फाइल का पाथ डालें
    const res = await fetch('physics.json'); 
    const allData = await res.json();
    questions = allData.slice(0, 10); // पहले 10 प्रश्न
    showQuestion();
}

function showQuestion() {
    if (currentIdx >= questions.length) return showReport();
    
    const q = questions[currentIdx];
    document.getElementById('question').innerText = lang === 'hi' ? q.question_hi : q.question_en;
    const optDiv = document.getElementById('options');
    optDiv.innerHTML = '';
    
    const opts = lang === 'hi' ? q.options_hi : q.options_en;
    opts.forEach((opt, i) => {
        const btn = document.createElement('div');
        btn.className = 'option';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i, btn);
        optDiv.appendChild(btn);
    });
}

function checkAnswer(idx, element) {
    const correct = questions[currentIdx].answer_index;
    if (idx === correct) {
        element.classList.add('correct');
        score++;
    } else {
        element.classList.add('wrong');
    }
    
    // 1 सेकंड बाद अगला प्रश्न
    setTimeout(() => {
        currentIdx++;
        showQuestion();
    }, 1000);
}

function showReport() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('report').style.display = 'block';
    document.getElementById('score').innerText = `आपने ${questions.length} में से ${score} सही किए।`;
}
