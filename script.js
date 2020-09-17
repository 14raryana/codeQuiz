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
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choices: ["True", "False"],
        answer: "False"
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
    $("#answerList").empty();
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
    $("#currentQuestion").text(questions[questionNumber].question);
    
    // var answerList = $("#answers").append("<ol></ol>");
    // answerList.attr("id", "answerList");
    $("#answerList").attr("type","A")

    for (var i = 0; i < questions[questionNumber].choices.length; i++) {
        var answerButtons = $("<button>").css("text-align", "left");
        answerButtons.addClass("btn");
        // $("#answers").append(i+1 + ")")
        answerButtons.append(answerButtons.text(questions[questionNumber].choices[i]));
        $("#answerList").append("<li></li>");
        $("li:last").append(answerButtons);
        // $(answerListItem).append(answerButtons);
        // $("#answers").append("<br>");
    }
}

