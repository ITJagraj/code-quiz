var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalsocre');
var countDown = document.getElementById('countdown');
var score = 0;
var startBtn = document.getElementById("start");
var questionDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var optionsDiv = document.getElementById("options");
var counter = 0;
var timer;
var currentQuestionIndex = 0;
var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');
var qaBody = document.querySelector('.qa_body');
var questions = [{
    question: "1. What does HTML stands for ?",
    options: ["Hyperlinks and text Markup Language", "Home tool Markup Language", "Hyper Text Markup Language", "Hyper Text Manipulating Language"],
    correctAnswer: "Hyper Text Markup Language"
},
{
    question: "3. In the DOM's event object, what does its target property refer to?",
    options: ["Not defined", "It refers to the HTML element we want to affect as a result of our dispatched event.", "It refers to the HTML element that was interacted with to dispatch the event.", "Wrong statement",],
    correctAnswer: "It refers to the HTML element that was interacted with to dispatch the event."
},
{
    question: "4. What does event.preventDefault() do?",
    options: ["Not defined", "It stops the browser from allowing the form submission event to occur.", "It stops the browser from reloading the page upon a form submission.", "Does not do anything"],
    correctAnswer: "It stops the browser from reloading the page upon a form submission.",
},
{
    uestion: "4. Which symbol is used for comments in Javascript?",
    options: ["for Single line comments", "/* Multi", "It stops the browser from reloading the page upon a form submission.", "Line","*/",],
    correctAnswer: "*/", 
}

]
var time = questions.length * 15;
function start() {
    var startDiv = document.getElementById("start-btn");
    startDiv.classList.add("hide");
    questionDiv.classList.remove("hide");
    timer = setInterval(countDownTimer, 1000);
    countDown.textContent = time;
    renderQuestion();

}
function renderQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    optionsDiv.innerHTML = "";
    currentQuestion.options.forEach(function (option) {
        var answer = document.createElement("button");
        answer.setAttribute("class", "option");
        answer.setAttribute("value", option);
        answer.textContent = option;
        answer.onclick = answerClick;
        optionsDiv.appendChild(answer);
    })
}

function answerClick() {
    if (this.value !== questions[currentQuestionIndex].correctAnswer) {
        console.log("wrong")
    } else {
        console.log("correct")
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        gameover()
    } else {
        renderQuestion();
    }
}

function countDownTimer() {
    time--;
    countDown.textContent = time;
    if (time <= 0) {
        gameover()
    }
}
function gameover() {
    clearInterval(timer)
    score.textContent = time
}
startBtn.addEventListener("click", start)
