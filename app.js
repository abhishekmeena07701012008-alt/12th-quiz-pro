// Global Configuration & State
const streamData = {
    science: {
        hi: ['भौतिकी (Physics)', 'रसायन विज्ञान (Chemistry)', 'जीव विज्ञान (Biology)', 'बायोटेक्नोलॉजी (Biotechnology)', 'गणित (Mathematics)', 'एप्लाइड मैथ (Applied Maths)', 'कंप्यूटर विज्ञान (Computer Science)'],
        en: ['Physics', 'Chemistry', 'Biology', 'Biotechnology', 'Mathematics', 'Applied Mathematics', 'Computer Science'],
        keys: ['physics', 'chemistry', 'biology', 'biotech', 'maths', 'applied_math', 'computer_science']
    },
    commerce: {
        hi: ['लेखाकर्म (Accountancy)', 'व्यावसायिक अध्ययन (B.St)', 'उद्यमशीलता (Entrepreneurship)', 'अर्थशास्त्र (Economics)', 'गणित (Mathematics)', 'एप्लाइड मैथ (Applied Maths)', 'कंप्यूटर विज्ञान (Computer Science)'],
        en: ['Accountancy', 'Business Studies', 'Entrepreneurship', 'Economics', 'Mathematics', 'Applied Mathematics', 'Computer Science'],
        keys: ['accountancy', 'business', 'entrepreneurship', 'economics', 'maths', 'applied_math', 'computer_science']
    },
    arts: {
        hi: ['इतिहास (History)', 'राजनीति विज्ञान (Pol. Science)', 'भूगोल (Geography)', 'अर्थशास्त्र (Economics)', 'समाजशास्त्र (Sociology)', 'मनोविज्ञान (Psychology)', 'गृह विज्ञान (Home Science)', 'दर्शनशास्त्र (Philosophy)', 'कानूनी अध्ययन (Legal Studies)', 'हिंदी साहित्य (Hindi Lit.)', 'अंग्रेजी साहित्य (English Lit.)', 'गणित (Mathematics)', 'एप्लाइड मैथ (Applied Maths)', 'कंप्यूटर विज्ञान (Computer Science)'],
        en: ['History', 'Political Science', 'Geography', 'Economics', 'Sociology', 'Psychology', 'Home Science', 'Philosophy', 'Legal Studies', 'Hindi Literature', 'English Literature', 'Mathematics', 'Applied Mathematics', 'Computer Science'],
        keys: ['history', 'political', 'geography', 'economics', 'sociology', 'psychology', 'home_science', 'philosophy', 'legal_studies', 'hindi_lit', 'english_lit', 'maths', 'applied_math', 'computer_science']
    }
};

let currentLanguage = 'hi'; // Default Language
let currentStream = '';
let currentSubject = '';
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswersTrack = []; 

// Language Selection
function selectLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('language-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.remove('hidden');
    updateStreamScreenText();
}

function updateStreamScreenText() {
    const title = document.getElementById('stream-title');
    if (currentLanguage === 'hi') {
        title.innerText = "अपनी स्ट्रीम चुनें";
        document.getElementById('btn-science').innerText = "विज्ञान (Science)";
        document.getElementById('btn-commerce').innerText = "वाणिज्य (Commerce)";
        document.getElementById('btn-arts').innerText = "कला (Arts)";
    } else {
        title.innerText = "Select Your Stream";
        document.getElementById('btn-science').innerText = "Science";
        document.getElementById('btn-commerce').innerText = "Commerce";
        document.getElementById('btn-arts').innerText = "Arts";
    }
}

// Stream Selection
function selectStream(stream) {
    currentStream = stream;
    document.getElementById('stream-screen').classList.add('hidden');
    document.getElementById('subject-screen').classList.remove('hidden');
    renderSubjects();
}

// Render Subjects List
function renderSubjects() {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    
    const title = document.getElementById('subject-title');
    title.innerText = currentLanguage === 'hi' ? "अपना विषय चुनें" : "Select Your Subject";

    const subjectsText = streamData[currentStream][currentLanguage];
    const subjectsKeys = streamData[currentStream].keys;

    subjectsText.forEach((subjectName, index) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-500 hover:bg-blue-50/50 transition-all font-medium text-gray-700 flex justify-between items-center group";
        btn.innerHTML = `
            <span>${subjectName}</span>
            <i class="bi bi-chevron-right text-gray-400 group-hover:text-blue-500 transition-colors"></i>
        `;
        btn.onclick = () => startQuiz(subjectsKeys[index]);
        container.appendChild(btn);
    });
}

// Start Quiz Logic with Case-Insensitive Filter
function startQuiz(subjectKey) {
    currentSubject = subjectKey;
    let filteredQuestions = [];

    // 'history.js' के quizDataMaster से डेटा फ़िल्टर करना
    if (typeof quizDataMaster !== 'undefined' && Array.isArray(quizDataMaster)) {
        filteredQuestions = quizDataMaster.filter(q => {
            if (!q.subject || !q.lang) return false;
            
            // मैचिंग को आसान बनाने के लिए स्पेस और अंडरस्कोर हटाना
            let dbSubject = q.subject.toLowerCase().replace(/_|\s/g, '');
            let appSubject = currentSubject.toLowerCase().replace(/_|\s/g, '');
            
            // विषय और भाषा दोनों का मिलान (जैसे: 'hi' या 'en')
            return (dbSubject.includes(appSubject) || appSubject.includes(dbSubject)) && q.lang.startsWith(currentLanguage);
        });
    } 
    
    // यदि कोई प्रश्न न मिले तो यूजर को अलर्ट दें
    if (!filteredQuestions || filteredQuestions.length === 0) {
        alert(currentLanguage === 'hi' ? "इस विषय के प्रश्न जल्द ही जोड़े जा रहे हैं!" : "Questions for this subject are coming soon!");
        return;
    }
    
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    score = 0;
    currentQuestionIndex = 0;
    selectedAnswersTrack = [];
    
    // सवालों के क्रम को रैंडम (Shuffle) करना
    let shuffledPool = shuffleArray([...filteredQuestions]);
    
    // अधिकतम 20 प्रश्न चुनना
    let limit = shuffledPool.length < 20 ? shuffledPool.length : 20;
    quizQuestions = shuffledPool.slice(0, limit);
    
    showQuestion();
}

// Display Question
function showQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        endQuiz();
        return;
    }

    const q = quizQuestions[currentQuestionIndex];
    
    // प्रोग्रेस बार और काउंटर अपडेट करना
    const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('question-counter').innerText = `${currentLanguage === 'hi' ? 'प्रश्न' : 'Question'} ${currentQuestionIndex + 1}/${quizQuestions.length}`;
    
    // प्रश्न टेक्स्ट दिखाना
    document.getElementById('question-text').innerText = q.question;
    
    // ऑप्शन्स लोड करना
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-all font-medium text-gray-700 flex items-center space-x-3 option-btn";
        btn.innerHTML = `
            <span class="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-lg text-sm font-bold text-gray-500 option-idx">${String.fromCharCode(65 + idx)}</span>
            <span class="flex-1">${option}</span>
        `;
        btn.onclick = () => handleAnswerSelect(idx, btn);
        optionsContainer.appendChild(btn);
    });

    // नेविगेशन बटन छुपाना या दिखाना
    document.getElementById('prev-btn').classList.toggle('hidden', currentQuestionIndex === 0);
    const nextBtn = document.getElementById('next-btn');
    nextBtn.innerText = currentQuestionIndex === quizQuestions.length - 1 ? (currentLanguage === 'hi' ? 'सबमिट करें' : 'Submit') : (currentLanguage === 'hi' ? 'अगला' : 'Next');
    nextBtn.disabled = selectedAnswersTrack[currentQuestionIndex] === undefined;
    
    // अगर पहले से कोई आंसर सिलेक्टेड है तो उसे हाईलाइट करें
    if (selectedAnswersTrack[currentQuestionIndex] !== undefined) {
        const previousSelectedIndex = selectedAnswersTrack[currentQuestionIndex];
        setTimeout(() => {
            const buttons = optionsContainer.getElementsByClassName('option-btn');
            if (buttons[previousSelectedIndex]) {
                highlightSelectedOption(buttons[previousSelectedIndex], previousSelectedIndex);
            }
        }, 10);
    }
}

// Handle Answer Selection
function handleAnswerSelect(index, clickedBtn) {
    const optionsContainer = document.getElementById('options-container');
    const buttons = optionsContainer.getElementsByClassName('option-btn');
    
    // पुराने सिलेक्शन स्टाइल को हटाना
    for (let btn of buttons) {
        btn.classList.remove('border-blue-500', 'bg-blue-50', 'text-blue-700');
        btn.classList.add('bg-gray-50', 'border-gray-200', 'text-gray-700');
        const idxSpan = btn.querySelector('.option-idx');
        if (idxSpan) {
            idxSpan.classList.remove('bg-blue-500', 'border-blue-500', 'text-white');
            idxSpan.classList.add('bg-white', 'border-gray-300', 'text-gray-500');
        }
    }

    // नए सिलेक्टेड ऑप्शन को स्टाइल देना
    highlightSelectedOption(clickedBtn, index);
    
    // स्टेट स्टोर करना
    selectedAnswersTrack[currentQuestionIndex] = index;
    document.getElementById('next-btn').disabled = false;
}

function highlightSelectedOption(btn, index) {
    btn.classList.remove('bg-gray-50', 'border-gray-200', 'text-gray-700');
    btn.classList.add('border-blue-500', 'bg-blue-50', 'text-blue-700');
    const idxSpan = btn.querySelector('.option-idx');
    if (idxSpan) {
        idxSpan.classList.remove('bg-white', 'border-gray-300', 'text-gray-500');
        idxSpan.classList.add('bg-blue-500', 'border-blue-500', 'text-white');
    }
}

// Navigation Controls
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// End Quiz & Calculate Final Score
function endQuiz() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    // स्कोर की गणना
    score = 0;
    quizQuestions.forEach((q, idx) => {
        if (selectedAnswersTrack[idx] === q.answer) {
            score++;
        }
    });
    
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    // परिणाम टेक्स्ट और एनिमेशन सेट करना
    document.getElementById('result-score').innerText = `${score} / ${quizQuestions.length}`;
    document.getElementById('result-percentage').innerText = `${percentage}%`;
    
    const statusText = document.getElementById('result-status');
    const statusIcon = document.getElementById('result-icon');
    
    if (percentage >= 33) {
        statusText.innerText = currentLanguage === 'hi' ? "बधाई हो! आप पास हो गए।" : "Congratulations! You Passed.";
        statusText.className = "text-xl font-bold text-green-600 mt-2";
        statusIcon.innerHTML = `<div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-500 text-4xl mb-4 shadow-sm"><i class="bi bi-trophy-fill"></i></div>`;
    } else {
        statusText.innerText = currentLanguage === 'hi' ? "बेहतर प्रयास करें! आप फेल हो गए।" : "Better Luck Next Time! You Failed.";
        statusText.className = "text-xl font-bold text-red-600 mt-2";
        statusIcon.innerHTML = `<div class="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-500 text-4xl mb-4 shadow-sm"><i class="bi bi-exclamation-triangle-fill"></i></div>`;
    }
    
    // टेक्स्ट ट्रांसलेशन संभालना
    document.getElementById('txt-score-label').innerText = currentLanguage === 'hi' ? "आपका स्कोर" : "Your Score";
    document.getElementById('txt-percent-label').innerText = currentLanguage === 'hi' ? "प्रतिशत" : "Percentage";
    document.getElementById('btn-restart').innerText = currentLanguage === 'hi' ? "मुख्य मेनू पर जाएँ" : "Go to Main Menu";
}

// Restart App
function restartQuiz() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('language-screen').classList.remove('hidden');
    currentLanguage = 'hi';
    currentStream = '';
    currentSubject = '';
    quizQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswersTrack = [];
}

// Utility Function to Shuffle Array Elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[array[j]]] = [array[j], array[i]];
    }
    return array;
}
