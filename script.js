var timerSeconds = 5;
$(".card-header").hide();
var timer;
var questionNumber = 0;
$("#startQuizAlign").css("text-align", "center");

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
        answer: "<script>"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["Both the <head> section and the <body> section are correct", "the <body> section", "The <head> section"],
        answer: "the <body> section"
    }
]

$("#startQuiz").on("click", function() {
    $(".card-header").show();
    $("#startQuiz").hide();
    $("#timer").text(timerSeconds);
    timer = setInterval(timerSecondsFunction,1000);
    question();
});

$("#nextQuestion").on("click", function(){
    questionNumber++;
    $("#answers").empty();
    question();
});



function timerSecondsFunction() {
    timerSeconds--;
    $("#timer").text(timerSeconds);
    if(timerSeconds == 0) {
        $("#timer").text("YOU FAIL, YOU NO DOCTOR!");
        clearInterval(timer);
    }
}

function question() {
    $("h2").text("Question " + parseInt(questionNumber + 1));
    for (var i = 0; i < questions[questionNumber].choices.length; i++) {
    var answerButtons = $("<button>").css("text-align", "left");
    answerButtons.addClass("btn");
    $("#answers").append(i+1 + ")")
    answerButtons.append(answerButtons.text(questions[questionNumber].choices[i]));
    $("#answers").append(answerButtons);
    $("#answers").append("<br>");
    }

    // var answerButtons = $("<button>");
    // answerButtons.addClass("btn");
    // answerButtons.append(answerButtons.text(questions[0].choices[1]));
    // $("#answers").append(answerButtons);
    // $("#answers").append(answerButtons.text(questions[0].choices[0]));
    // $("#answers").append(answerButtons.text(questions[0].choices[1]));
}

