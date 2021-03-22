var skip = document.getElementById('skip');
var score = document.getElementById('socre');
var totalscore = document.getElementById('totalsocre');
var countdown = document.getElementById('coundown');
var count = 0;
var scorecount = 0;
var duration = 0;
var currentQuestion = 0;
var qaSet = document.querySelectorAll('.qa_set');
var qaAnswer = document.querySelectorAll('.qa_set .qa_ans_row input');
var qaBody = document.querySelector('.qa_body');
var questions = [{
    question: "1. What does HTML stands for ?", 
    option1: "Hyperlinks and text Markup Language",
    option2: "Home tool Markup Language",
    option3: "Hyper Text Markup Language",
    option4: "Hyper Text Manipulating Language",
}]

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
var questions = [{
    question: "2. In the DOM’s event object, what does its target property refer to?", 
    option1: "Hyperlinks and text Markup Language",
    option2: "Home tool Markup Language",
    option3: "Hyper Text Markup Language",
    option4: "Hyper Text Manipulating Language",
}]
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

function option() {
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

skip.addEventListener('click', function() {
    step();
})
function step() {
    count += 1;
    for (var i = 0; 1 < qaSet.length; i++ ) {
        qaSet[i].className = 'qa_set' ;
    }
    qaSet[count].className = 'qa_set active'; 
    if(count == 5) {
        skip.style.display = none;
    }
}
code();