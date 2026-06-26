let lang = '', currentQuestions = [], index = 0, score = 0;

function selectLang(l) {
    lang = l;
    document.getElementById('lang-screen').classList.add('hidden');
    document.getElementById('sub-screen').classList.remove('hidden');
    let subs = [...new Set(quizDataMaster.map(q => q.subject))];
    let list = document.getElementById('sub-list');
    subs.forEach(s => {
        let b = document.createElement('button');
        b.className = 'btn';
        b.innerText = s;
        b.onclick = () => startQuiz(s);
        list.appendChild(b);
    });
}

function startQuiz(sub) {
    // यहाँ question और q दोनों का सपोर्ट है
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
        alert("आपका स्कोर: " + score + "/" + currentQuestions.length);
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
            if(i === q.correct) { b.classList.add('correct'); score++; }
            else { b.classList.add('wrong'); }
            setTimeout(() => { index++; showQ(); }, 1000);
        };
        optDiv.appendChild(b);
    });
}
