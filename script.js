var timerSeconds = 20;
$(".card-header").hide();
var timer;
var questionNumber = 0;
var correctAnswersCount = 0;
var wrongAnswersCount = 0;
var calculatedScore;
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
];


$("#startQuiz").on("click", function() {
    $(".card-header").show();
    $("#startQuiz").hide();
    $("#timer").text(timerSeconds);
    timer = setInterval(countDownFunction,1000);
    question();
});

// $("#nextQuestion").on("click", function(){
//     questionNumber++;
//     $("#answerList").empty();
//     question();
// });


function countDownFunction() {
    timerSeconds--;
    $("#timer").text(timerSeconds);
    if(timerSeconds <= 0) {
        $("#timer").text("YOU FAIL, YOU NO DOCTOR!");
        clearInterval(timer);
        $(".card").empty();
        storeInitials();
    }
}

function nextQuestion() {
    questionNumber++;
    $("#answerList").empty();
    question();
}

function question() {
    $("h2").text("Question " + parseInt(questionNumber + 1));
    $("#currentQuestion").text(questions[questionNumber].question);
    
    // var answerList = $("#answers").append("<ol></ol>");
    // answerList.attr("id", "answerList");
    $("#answerList").attr("type","A");

    var currentQuestion = questions[questionNumber];

    for (var i = 0; i < questions[questionNumber].choices.length; i++) {
        var answerButtons = $("<button>").css("text-align", "left");
        answerButtons.addClass("btn hello");
        // answerButtons.attr("data-answer", questions[questionNumber].choices[i]);
        answerButtons.attr("id",questions[questionNumber].choices[i]);
        // answerButtons.attr("onclick","hello(this.id)");
        // $("#answers").append(i+1 + ")")
        answerButtons.text(questions[questionNumber].choices[i]);
        $("#answerList").append("<li></li>");
        $("li:last").append(answerButtons);
        // $(answerListItem).append(answerButtons);
        // $("#answers").append("<br>");
        // console.log(answerButtons.attr("id"));
    }
    

    $(".hello").click(function(event) {
        // var mySelf = $(this);
        alert(event.currentTarget.id);
        if(event.currentTarget.id == questions[questionNumber].answer) {
            alert("correct");
            correctAnswersCount++;
            alert(correctAnswersCount);
        }
        else {
            alert("wrong");
            timerSeconds -= 10;
            wrongAnswersCount++;
            alert(wrongAnswersCount);
        }
        nextQuestion();
        // alert("you clicked a button " + answerButtons.attr("id"));
        // alert(answerButtons.text($(this).attr("data-answer")));
        // alert(answerButtons.attr("id"));
    });
}

function calculateScore() {
    calculatedScore = questions.length - wrongAnswersCount;
}

function scoreBoard() {
    $(".card").empty();
    calculateScore();
    var scoreBoardDiv = $("<div class = 'card-body'>");
    var scoreBoardTitle = $("<h2> High Scores</h2>").css("text-align","center");
    scoreBoardTitle.addClass("card-header");
    // scoreBoardDiv.append("<div class = 'container'>").append("<div class = 'row'>").append("<div class = 'col-6'>").append("<div class = 'col-6'>");
    var score = $("<p>" + localStorage.getItem("initials") + " " + calculatedScore + "</p>");
    score.css("margin-top", "3%");
    scoreBoardDiv.append(scoreBoardTitle);
    scoreBoardDiv.append(score);
    $(".card").append(scoreBoardDiv);
}

function storeInitials() {
    var inputInitials = $("<input type='text' placeholder = 'Type in initials'>");
    $(".card").append("<div class = 'card-body'>");
    $(".card-body").append(inputInitials); 
    $(".card-body").append("</br><button id = 'submit' class = 'btn'>Submit</button>");
    $("#submit").click(function(){
        localStorage.setItem("initials", inputInitials.val());
        scoreBoard();
    })
}



// function hello(id) {
//     alert(id);
// }


// function test(clickedID){
//     alert(clickedID);
//    }


