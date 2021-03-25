var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalsocre');
var countDown = document.getElementById('countdown');
var score = 0;
var counter = 0;
var currentQuestion = 0;
var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');
var qaBody = document.querySelector('.qa_body');
var questions = [{
    question: "1. What does HTML stands for ?",
    options: ["Hyperlinks and text Markup Language", "Home tool Markup Language", "Hyper Text Markup Language", "Hyper Text Manipulating Language"],
    correctAnswer: "Hyper Text Markup Language"
},
{
    question: "2. What does event.preventDefault() do?",
    options: ["Not defined", "It stops the browser from allowing the form submission event to occur.", "It stops the browser from reloading the page upon a form submission.", "Does not do anything"],
     correctAnswer: "It stops the browser from reloading the page upon a form submission.",
},
// {
//     question: "3. In the DOM's event object, what does its target property refer to?",
//     option1: "Not defined",
//     option2: "It refers to the HTML element we want to affect as a result of our dispatched event.",
//     option3: "It refers to the HTML element that was interacted with to dispatch the event.",
//     option4: "Wrong statement",
//     correctAnswer: "option3",
// },
// {
//     question: "4. Which symbol is used for comments in Javascript?",
//     option1: "// for Single line comments",
//     option2: "/* Multi",
//     option3: "Line",
//     option4: "*/",  
//     correctAnswer: "option3",
// }
]
correctAnswer.addEventListener('click', function (){
    next();
})
function next() {
 var count = localStorage.getItem('correctAnswer');

}


function code() {
    var questionBlock = `<h4>${questions[currentQuestion].question}</h4>
<div class="qa_ans_row">
    <input type="radio" name="a1">
    <span>${questions[currentQuestion].option1}</span>
</div>
    <div class="qa_ans_row">
        <input type="radio" name="a1">
        <span>${questions[currentQuestion].option2}</span>
    </div>
        <div class="qa_ans_row">
            <input type="radio" name="a1" valid= "valid">
            <span>${questions[currentQuestion].option3}</span>
        </div>
            <div class="qa_ans_row">
                <input type="radio" name="a1">
                <span>${questions[currentQuestion].option4}</span>
            </div>`
    qaBody.innerHTML = questionBlock

}

skip.addEventListener('click', function () {
    step();
})

function step() {
    console.log(qaSet);
    if (currentQuestion < questions.length-1) {
        currentQuestion += 1;
    }
    code();
}
code();