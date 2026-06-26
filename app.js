let currentQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 20);
let currentIndex = 0;
let score = 0;

function showQuestion() {
    if (currentIndex >= currentQuestions.length) {
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("report").style.display = "block";
        document.getElementById("score-text").innerText = `आपका स्कोर: ${score} / 20`;
        return;
    }

    let q = currentQuestions[currentIndex];
    document.getElementById("question").innerText = q.question;
    document.getElementById("subject-tag").innerText = `विषय: ${q.subject}`;
    document.getElementById("progress").innerText = `प्रश्न ${currentIndex + 1} / 20`;
    
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    // उत्तरों को शफल करना
    let shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((opt) => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "option-btn";
        btn.onclick = () => checkAnswer(opt, q.answer, btn);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected, correct, btn) {
    let allBtns = document.querySelectorAll(".option-btn");
    allBtns.forEach(b => b.style.pointerEvents = "none"); // क्लिक बंद करना

    if (selected === correct) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
        // सही उत्तर को हरा दिखाना
        allBtns.forEach(b => { if(b.innerText === correct) b.classList.add("correct"); });
    }

    setTimeout(() => {
        currentIndex++;
        showQuestion();
    }, 1000);
}

showQuestion();
