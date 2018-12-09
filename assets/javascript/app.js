// global variables

var startQuiz = document.getElementsByClassName("btn btn-primary btn");


var resultsCorrect = 0;
var resultsIncorrect = 0;
// var noAnswer = 0;
var seconds = 15;
// var clockRunning = false
// var time = 0;

var questionIndex = 0;
// var triviaAnswers;

var intervalId;


// var intervalId

function startQuiz() {

    startQuiz.onlick = startTimer();



}


var questions = [
    {
        display: "What is the name of Rocko's dog?",
        answers: ["Sparky", "Spanner", "Punkin", "Spunky", "Sputnik"],
        correctAnswer: "Spunky",
        imageSrc: "assets/images/spunky.gif",
        message: "The name of Rocko's dog is Spunky.",

    },
    {
        display: "Which is NOT a team on Legends of the Hidden Temple?",
        answers: ["Green Monkeys", "Purple Parrots", "Orange Orangutans", "Silver Snakes", "Red Jaguars"],
        correctAnswer: "Orange Orangutans",
        imageSrc: "assets/images/Legends.gif",
        message: "Orange Orangutans' is not a team on Legends of the Hidden Temple."

    },
    {
        display: "What is always the final challenge in Nickelodeon GUTS?",
        answers: ["Vertiboggan", "Aggro Crag", "Slam-A-Jama", "Eat My Dust", "Dodge It"],
        correctAnswer: "Aggro Crag",
        imageSrc: "assets/images/aggroCrag.gif",
        message: "The fifth and final event is the Aggro Crag.",
    },

    {
        display: "What is Stimpy's favorite song?",
        answers: ["Every Wants a Log", "Tickle Tickle Ichy Pickle", "I LOVE MY LITTER", "Three Blind Mice", "HAPPY HAPPY JOY JOY!!"],
        correctAnswer: "HAPPY HAPPY JOY JOY!!",
        imageSrc: "assets/images/REV.gif",
        message: "Stimpy's favorite song is HAPPY HAPPY JOY JOY!!",
    },

    // {
    //     display: "What does the monster community use as currency in 'Aaahh!!! Real Monsters'?",
    //     answers: ["toe nails", "boogers", "nuts and bolts", "Hair clippings", "skin flakes"],
    //     correctAnswer: "toe nails",
    //     imageSrc: "assets/images/monsters.gif",
    //     message: "The monsters use toe nails as a form of currency.",
    // },
]







//logic to start game

//display answer (that's another function)

//start timer (maybe another)

//reset score (maybe )


function nextQuestion() {
   if (questions[questionsIndex] < questions.length){
    questionIndex++;
    timerReset();
    $("#questions").css("visibility", "visible");
    $("#afterClick").css("visibility", "hidden");
    displayAnswers();
    answerSection();

   }

   else if (questions[questionsIndex] === questions.length){
       resetQuiz();
   }
   

    // $(".answerSection").on("click", ".answer", function () {
    //     var userAnswer = $(this).text();
    //     if (userAnswer === questions[questionIndex].correctAnswer) {
    //         $("#afterClick").css("visibility", "visible");
    //         $("#confirm").text("Correct!! " + questions[questionIndex].message);
    //         $("#gif").attr("src", questions[questionIndex].imageSrc);
    //         resultsCorrect++;
    //         $("#resultsCorrect").text("Correct answers: " + resultsCorrect);
    //         setTimeout(nextQuestion, 5000);

    //     }
    //     else {
    //         $("#afterClick").css("visibility", "visible");
    //         $("#confirm").text("Wrong!! " + questions[questionIndex].message);
    //         $("#gif").attr("src", questions[questionIndex].imageSrc);
    //         resultsIncorrect++;
    //         $("#resultsIncorrect").text("Incorrect answers: " + resultsIncorrect);
    //         setTimeout(nextQuestion, 5000);

    //     };
    // //increment score (right or wrong)

    // });   

    //restart timer
    // resetTimer();

}


function startTimer() {

    intervalId = setInterval(count, 1000);
    
    $("#startButton").css("visibility", "hidden");
    $("#questions").css("visibility", "visible");


}



function count() {
    seconds--;

    console.log(seconds);

    if (seconds === 0) {
        timerReset();

    }
    // else if (seconds > 0){

    //     $(".answerSection").on("click", ".answer", function(){
    //     clearInterval(intervalId);
    //     timerReset();

    // });
    $("#questionTimer").html("<p>" + seconds + "</p");
}





function timerReset() {
    seconds = 15;

}


function resetQuiz() {

 if (questions[questionIndex] > 4){
    clearInterval(intervalID);
    resultsCorrect = 0;
    resultsIncorrect = 0;
    startQuiz();}

    }

    
    

  
    







function displayAnswers() {
    //loop through answers array
    var q = questions[questionIndex]
    $("#triviaQuestion").html(q.display);
    for (var i = 0; i < q.answers.length; i++) {
        var id = i + 1;
        $("#answer" + id).html(q.answers[i]);

    }
    console.log(q.display);
}



function answerSection() {
    $(".answerSection").on("click", ".answer", function () {
        var userAnswer = $(this).text();
        if (userAnswer === questions[questionIndex].correctAnswer) {
            $("#afterClick").css("visibility", "visible");
            $("#questions").css("visibility", "hidden");
            $("#confirm").text("Correct!! " + questions[questionIndex].message);
            $("#gif").attr("src", questions[questionIndex].imageSrc);
            resultsCorrect++;
            $("#resultsCorrect").text("Correct answers: " + resultsCorrect);
            setTimeout(nextQuestion, 5000);

        }
        else {
            $("#afterClick").css("visibility", "visible");
            $("#questions").css("visibility", "hidden");
            $("#confirm").text("Wrong!! " + questions[questionIndex].message);
            $("#gif").attr("src", questions[questionIndex].imageSrc);
            resultsIncorrect++;
            $("#resultsIncorrect").text("Incorrect answers: " + resultsIncorrect);
            setTimeout(nextQuestion, 5000);
        }
        
    });

}









displayAnswers();
answerSection();




