let currentLanguage = 'hi';
let currentStream = '';
let currentSubject = '';
let quizQuestions = [];
let currentQuestionIndex = 0;

async function startQuiz(subjectKey) {
    document.getElementById('subject-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('question-text').innerText = "डेटा लोड हो रहा है...";

    try {
        // आपकी फाइल फेच कर रहे हैं
        const response = await fetch(`${currentStream}.json`);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        
        // अब यहाँ हम 'questions' वाली लिस्ट को निकाल रहे हैं
        // (आपके JSON स्ट्रक्चर के हिसाब से)
        quizQuestions = data.questions || [];

        if (quizQuestions.length === 0) {
            alert("प्रश्न नहीं मिले!");
            location.reload();
            return;
        }

        currentQuestionIndex = 0;
        showQuestion();
    } catch (err) {
        console.error("Error:", err);
        alert("JSON फाइल लोड करने में समस्या आई।");
        location.reload();
    }
}

function showQuestion() {
    let q = quizQuestions[currentQuestionIndex];
    if (q) {
        // यहाँ से प्रश्न और विकल्प दिखेंगे
        document.getElementById('question-text').innerText = q.question_hi || "प्रश्न उपलब्ध नहीं";
        document.getElementById('next-btn').classList.remove('hidden');
    }
}
