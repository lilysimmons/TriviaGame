// global variables

var startQuiz = document.getElementsByClassName("btn btn-primary btn");


var resultsCorrect = 0;
var resultsIncorrect = 0;
// var noAnswer = 0;
var seconds = 15;
// var intervalId

var questionIndex = 0;


var intervalId;



// onclick for start quiz button, sends you to start timer function and the buttons hides
function startQuiz() {  

    startQuiz.onlick = startTimer();



}

// my questions array.  Having a lot of problems with this. 
// For some reason index 2 & 3 fire at the same time so it skips index 2. 
// Check console log. 
// I commented out the last index, because it only gives an error.

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
        message: "'Orange Orangutans' is not a team on Legends of the Hidden Temple."

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



// I tried to put an if statement to check if my questions array ended,
// but the rest of the code wouldn't run.  I decided to leave out the end of game function,
// so you could at least see the questions and gifs change

function nextQuestion() {
//    if (questions[questionIndex] < 4){
    questionIndex++;
    timerReset();
    $("#questions").css("visibility", "visible");
    $("#afterClick").css("visibility", "hidden");
    displayAnswers();
    answerSection();


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


// I could not get my game to reset
function resetQuiz() {

 if (questions.length > 4){
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

// There is a div that displays, however I have it hidden. The idea was I would unhide it
// until the end of the game, and then make if visible If you want to check if it's functional, just take of the 
// visibility on css. You can see the div in the HTML.

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




