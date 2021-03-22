var skip = document.getElementById('skip');
var score = document.getElementById('socre');
var totalscore = document.getElementById('totalsocre');
var countdown = document.getElementById('coundown');
var count = 0;
var scorecount = 0;
var duration = 0;
var counter = 0;
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
}, 
{
    question: "3. What does event.preventDefault() do?", 
    option1: "Not defined",
    option2: "It stops the browser from allowing the form submission event to occur.",
    option3: "It stops the browser from reloading the page upon a form submission.",
    option4: "Does not do anything",
},
{
    question: "2. In the DOM's event object, what does its target property refer to?", 
    option1: "It refers to the HTML element that was interacted with to dispatch the event.",
    option2: "It refers to the HTML element we want to affect as a result of our dispatched event.",
    option3: "Not defined",
    option4: "Wrong statement",
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

skip.addEventListener('click', function() {
    step();
})
qaAnsRow.forEach(function(qaAnsRowSingle){
    qaAnsRowSingle.addEventListener('click',function(){
        setTimeout(function(){
            step();
        },500)
        var valid = this.getattribute("valid");
        if(valid == "valid"){
            scoreCount +=20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }else {
            scoreCount -=20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;

        }
});
function step() {
    console.log(qaSet);
    currentQuestion += 1;
    code();
};