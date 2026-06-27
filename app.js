let currentLanguage = 'hi';
let currentStream = '';
let allSubjectsData = []; // पूरी फाइल का डेटा यहाँ आएगा
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function selectLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('lang-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.remove('hidden');
}

// फाइल फेच करना और सब्जेक्ट लिस्ट बनाना
async function fetchStreamData(stream) {
    currentStream = stream;
    document.getElementById('stream-screen').classList.add('hidden');
    document.getElementById('subject-screen').classList.remove('hidden');
    document.getElementById('subjects-container').innerHTML = '<h3>डेटा लोड हो रहा है...</h3>';

    try {
        const response = await fetch(`${currentStream}.json`);
        if (!response.ok) throw new Error("File not found");
        
        allSubjectsData = await response.json(); // Array of subjects
        
        let container = document.getElementById('subjects-container');
        container.innerHTML = ''; // लोडिंग टेक्स्ट हटाएं

        // सब्जेक्ट्स के बटन बनाएं
        allSubjectsData.forEach((subjectObj, index) => {
            let btn = document.createElement('button');
            btn.innerText = subjectObj.subject;
            btn.className = 'btn';
            btn.onclick = () => startQuiz(index);
            container.appendChild(btn);
        });

    } catch (err) {
        console.error(err);
        alert("JSON फाइल लोड करने में त्रुटि! (सुनिश्चित करें कि JSON फाइल में [ ] का प्रयोग किया गया है)");
        location.reload();
    }
}

function backToStream() {
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.remove('hidden');
}

// किसी विशेष सब्जेक्ट का क्विज शुरू करना
function startQuiz(subjectIndex) {
    quizQuestions = allSubjectsData[subjectIndex].questions;
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    let q = quizQuestions[currentQuestionIndex];
    document.getElementById('progress').innerText = `Q: ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    document.getElementById('score-live').innerText = `Score: ${score}`;
    
    // 1. प्रश्न सेट करना
    document.getElementById('question-text').innerText = (currentLanguage === 'hi' && q.question_hi) ? q.question_hi : q.question_en;
    
    // 2. विकल्प सेट करना (डेटा की असमानता को संभालना)
    let options = [];
    if (currentLanguage === 'hi' && q.options_hi) {
        options = q.options_hi; // Arts के लिए
    } else if (currentLanguage === 'en' && q.options_en) {
        options = q.options_en; // Arts के लिए
    } else {
        options = q.options; // Science/Commerce के लिए (दोनों भाषाओं में एक ही है)
    }

    // 3. सही उत्तर का इंडेक्स निकालना
    let correctAnsIndex = (q.correct_index !== undefined) ? q.correct_index : q.answer_index;

    let container = document.getElementById('options-container');
    container.innerHTML = '';

    // बटन बनाना
    options.forEach((opt, index) => {
        let btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'btn option-btn';
        btn.onclick = () => checkAnswer(index, correctAnsIndex, btn);
        container.appendChild(btn);
    });
    
    document.getElementById('next-btn').classList.add('hidden');
}

function checkAnswer(selectedIndex, correctIndex, btn) {
    let allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true); // दोबारा क्लिक करने से रोकें

    if (selectedIndex === correctIndex) {
        btn.classList.add('correct');
        score++;
        document.getElementById('score-live').innerText = `Score: ${score}`;
    } else {
        btn.classList.add('wrong');
        // सही उत्तर को हरा रंग दें
        if(allBtns[correctIndex]) {
            allBtns[correctIndex].classList.add('correct');
        }
    }
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score-display').innerText = `${score} / ${quizQuestions.length}`;
}
