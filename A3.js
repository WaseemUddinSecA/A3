const quizForm = document.getElementById('quiz-form');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const resultElement = document.getElementById('result');

const quizData = [
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Brazil", "France", "Germany", "Spain"],
        answer: 1
    },
    {
        question: "Who is the all-time top scorer in the English Premier League?",
        options: ["Thierry Henry", "Wayne Rooney", "Alan Shearer", "Frank Lampard"],
        answer: 2
    },
    {
        question: "Which player has won the most Ballon d'Or awards?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Zinedine Zidane"],
        answer: 0
    },
    {
        question: "Which club has won the UEFA Champions League the most times?",
        options: ["Real Madrid", "Barcelona", "Bayern Munich", "AC Milan"],
        answer: 0
    },
    {
        question: "Which country has hosted the most FIFA World Cup tournaments?",
        options: ["Brazil", "Italy", "Germany", "France"],
        answer: 1
    }

];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    const options = currentQuestion.options.map((option, index) => {
        return `<label><input type="radio" name="answer" value="${index}"> ${option}</label><br>`;
    }).join('');

    optionsElement.innerHTML = options;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        feedbackElement.textContent = "Please select an answer.";
        return;
    }

    const selectedAnswer = Number(selectedOption.value);
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answer) {
        feedbackElement.style.color = 'green';
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.style.color = 'red';
        feedbackElement.textContent = "Incorrect.";
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizForm.style.display = 'none';
    resultElement.textContent = `Quiz completed. Your score is ${score}/${quizData.length}.`;
}

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    checkAnswer();
});
displayQuestion();


