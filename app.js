let lang = '', currentQuestions = [], index = 0, score = 0;

function setLanguage(l) {
    lang = l;
    document.getElementById('lang-screen').classList.add('hidden');
    document.getElementById('sub-screen').classList.remove('hidden');
    
    // डेटाबेस से यूनिक विषयों (Subjects) की लिस्ट निकालें
    let subjects = [...new Set(quizDataMaster.map(q => q.subject))];
    let subList = document.getElementById('sub-list');
    subList.innerHTML = '';

    subjects.forEach(sub => {
        let btn = document.createElement('button');
        btn.className = 'btn';
        btn.innerText = sub;
        btn.onclick = () => startQuiz(sub);
        subList.appendChild(btn);
    });
}

function startQuiz(sub) {
    // चुने हुए विषय के 20 रैंडम प्रश्न लोड करें
    currentQuestions = quizDataMaster
        .filter(q => q.subject === sub)
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);

    document.getElementById('sub-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('subject-name').innerText = sub;
    showQ();
}

function showQ() {
    if(index >= currentQuestions.length) {
        alert("क्विज़ समाप्त! आपका स्कोर: " + score + "/" + currentQuestions.length);
        location.reload();
        return;
    }
    
    let q = currentQuestions[index];
    document.getElementById('question').innerText = q.question || q.q;
    let optDiv = document.getElementById('options');
    optDiv.innerHTML = '';
    
    q.options.forEach((o, i) => {
        let b = document.createElement('button');
        b.className = 'option-btn';
        b.innerText = o;
        b.onclick = () => {
            document.querySelectorAll('.option-btn').forEach(x => x.style.pointerEvents='none');
            // 'q.correct' के बजाय 'q.answer' का उपयोग करें यदि आपकी फ़ाइल में वह नाम है
            let correctIndex = q.correct !== undefined ? q.correct : q.answer; 
            if(i === correctIndex) { b.classList.add('correct'); score++; }
            else { b.classList.add('wrong'); }
            setTimeout(() => { index++; showQ(); }, 1000);
        };
        optDiv.appendChild(b);
    });
}
