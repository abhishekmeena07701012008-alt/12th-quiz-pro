let currentLanguage = 'hi';
let currentStream = '';
let currentSubject = '';
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 20;
let isAnswered = false;

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

function selectLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('lang-screen').classList.add('hidden');
    document.getElementById('stream-screen').classList.remove('hidden');
}

function selectStream(stream) {
    currentStream = stream;
    document.getElementById('stream-screen').classList.add('hidden');
    document.getElementById('subject-screen').classList.remove('hidden');
    
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    
    const subjectsList = streamData[stream][currentLanguage];
    const keysList = streamData[stream]['keys'];
    
    subjectsList.forEach((subjectName, index) => {
        let button = document.createElement('button');
        button.innerText = subjectName;
        button.className = `btn btn-${stream}`;
        button.onclick = () => startQuiz(keysList[index]);
        container.appendChild(button);
    });
}

async function startQuiz(subjectKey) {
    currentSubject = subjectKey;
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('question-text').innerText = "Loading...";

    try {
        const response = await fetch(`${currentStream}.json`);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        
        // फ़िल्टरिंग लॉजिक
        quizQuestions = data.filter(q => {
            const qSub = (q.subject || "").toLowerCase().replace(/[^a-z]/g, '');
            const target = subjectKey.toLowerCase().replace(/[^a-z]/g, '');
            return qSub.includes(target) || target.includes(qSub);
        });

        if (quizQuestions.length === 0) {
            alert("इस विषय के लिए कोई प्रश्न नहीं मिले। JSON में 'subject' नाम चेक करें!");
            restartQuiz();
            return;
        }

        showQuestion();
    } catch (err) {
        console.error("JSON Error:", err);
        alert("JSON फाइल लोड नहीं हो पाई! सुनिश्चित करें कि फ़ाइल का नाम और सिंटैक्स सही है।");
        restartQuiz();
    }
}

function showQuestion() {
    let q = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = q.question;
    // यहाँ विकल्प दिखाने का लॉजिक...
    document.getElementById('next-btn').classList.remove('hidden');
}

function restartQuiz() {
    location.reload();
}
