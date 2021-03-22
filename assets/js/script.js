var skip = document.getElementById('skip');
var score = document.getElementById('socre');
var totalScore = document.getElementById('totalsocre');
var countDown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 0;
var counter = 0;
var currentQuestion = 0;
var question = 0;
var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');
var qaBody = document.querySelector('.qa_body');
var questions = [{
    question: "1. What does HTML stands for ?",
    option1: "Hyperlinks and text Markup Language",
    option2: "Home tool Markup Language",
    option3: "Hyper Text Markup Language",
    option4: "Hyper Text Manipulating Language",
},
{
    question: "2. What does event.preventDefault() do?",
    option1: "Not defined",
    option2: "It stops the browser from allowing the form submission event to occur.",
    option3: "It stops the browser from reloading the page upon a form submission.",
    option4: "Does not do anything",
},
{
    question: "3. In the DOM's event object, what does its target property refer to?",
    option1: "Not defined",
    option2: "It refers to the HTML element we want to affect as a result of our dispatched event.",
    option3: "It refers to the HTML element that was interacted with to dispatch the event.",
    option4: "Wrong statement",
},
{
    question: "4. Which symbol is used for comments in Javascript?",
    option1: "// for Single line comments",
    option2: "/* Multi",
    option3: "Line",
    option4: "*/",  
}
]


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
qaAnsRow.forEach(function (qaAnsRowSingle) {
    qaAnsRowSingle.addEventListener('click', function () {
        setTimeout(function () {
            step();
        }, 500)
        var valid = this.getattribute("valid");
        if (valid == "valid") {
            scoreCount += 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        } else {
            scoreCount -= 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;

        }
    })
});
function step() {
    console.log(qaSet);
    currentQuestion += 1;
    code();
}