let currentLanguage = 'hi';
let currentStream = '';
let currentSubject = '';
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 20;
let isAnswered = false;

// स्ट्रीम और विषयों का डेटा
const streamData = {
    science: {
        hi: ['भौतिकी (Physics)', 'रसायन विज्ञान (Chemistry)', 'जीव विज्ञान (Biology)', 'गणित (Mathematics)'],
        keys: ['physics', 'chemistry', 'biology', 'maths']
    },
    commerce: {
        hi: ['लेखाकर्म (Accountancy)', 'व्यावसायिक अध्ययन (B.St)', 'अर्थशास्त्र (Economics)'],
        keys: ['accountancy', 'business', 'economics']
    },
    arts: {
        hi: ['इतिहास (History)', 'राजनीति विज्ञान (Pol. Science)', 'भूगोल (Geography)', 'अर्थशास्त्र (Economics)', 'समाजशास्त्र (Sociology)', 'मनोविज्ञान (Psychology)', 'गृह विज्ञान (Home Science)'],
        keys: ['history', 'political', 'geography', 'economics', 'sociology', 'psychology', 'home_science']
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
    
    streamData[stream].hi.forEach((subjectName, index) => {
        let button = document.createElement('button');
        button.innerText = subjectName;
        button.className = 'btn';
        button.onclick = () => startQuiz(streamData[stream].keys[index]);
        container.appendChild(button);
    });
}

// सबसे महत्वपूर्ण अपडेट: यहाँ हमने एरर हैंडलिंग को सुपर-स्ट्रॉन्ग बनाया है
async function startQuiz(subjectKey) {
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('question-text').innerText = "Loading data, please wait...";

    try {
        // फाइल फेच कर रहे हैं
        const response = await fetch(`${currentStream}.json`);
        
        if (!response.ok) throw new Error(`Status: ${response.status}`);
        
        const data = await response.json();
        
        // डेटा फ़िल्टरिंग: अगर फाइल बड़ी है तो यह तरीका उसे हैंग नहीं होने देगा
        quizQuestions = data.filter(q => {
            const qSub = (q.subject || "").toLowerCase();
            return qSub.includes(subjectKey.toLowerCase());
        });

        if (quizQuestions.length === 0) {
            alert("इस विषय के प्रश्न नहीं मिले! अपनी JSON फाइल में 'subject' नाम चेक करें।");
            location.reload();
            return;
        }

        showQuestion();
    } catch (err) {
        console.error("JSON Error:", err);
        alert("JSON फाइल लोड नहीं हो सकी। चेक करें कि फ़ाइल में कॉमा ',' या ब्रैकेट '}' सही है या नहीं।");
        location.reload();
    }
}

function showQuestion() {
    let q = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = q.question;
    document.getElementById('next-btn').classList.remove('hidden');
}
