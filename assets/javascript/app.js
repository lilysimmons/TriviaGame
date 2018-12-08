// global variables

var startQuiz = document.getElementsByClassName("btn btn-primary btn");


var resultsCorrect = 0;
var resultsIncorrect = 0;
// var noAnswer = 0;
var seconds = 15;
var clockRunning = false
// var time = 0;

var questionIndex = 0;
// var triviaAnswers;

var intervalId;


// var intervalId

function startQuiz() {

    startQuiz.onlick = startTimer();
    
    
}
        

     
     
     
    
     
 
    

     //logic to start game

    //display answer (that's another function)

    //start timer (maybe another)

    //reset score (maybe )


function nextQuestion() {
    if(resultsCorrect + resultsIncorrect === questions.length){




        
    }
    $("#questions").css("visibility", "visible");
    $("#afterClick").css("visibility", "hidden");
    questionIndex++;
    displayAnswers();
    $(".answerSection").on("click", ".answer", function () {
        var userAnswer = $(this).text();
        if (userAnswer === questions[questionIndex].correctAnswer) {
            $("#afterClick").css("visibility", "visible");
            $("#confirm").text("Correct!! " + questions[questionIndex].message);
            $("#gif").attr("src", questions[questionIndex].imageSrc);
            resultsCorrect++;
            $("#correctAnswer").text("Correct answers: " + resultsCorrect);
            setTimeout(nextQuestion, 5000);

        }
        else {
            $("#afterClick").css("visibility", "visible");
            $("#confirm").text("Wrong!! " + questions[questionIndex].message);
            $("#gif").attr("src", questions[questionIndex].imageSrc);
            resultsIncorrect++;
            $("#incorrectAnswer").text("Incorrect answers: " + resultsIncorrect);
            setTimeout(nextQuestion, 5000);
    
        };
    //increment score (right or wrong)
    
    });   

    //restart timer
    startTimer();

}


function startTimer() {
 
     intervalId = setInterval(count, 1000);
 }
 


function count() {
    seconds--;

    console.log(seconds);

    if (seconds === 0) {
       timerReset(); 
    }
    else if (seconds > 0){

        $(".answerSection").on("click", ".answer", function(){
        clearInterval(intervalId);
        timerReset();
        
    });
}  
        
    $("#questionTimer").html("<p>" + seconds + "</p");

}

function timerReset(){
    seconds = 15;
    
}


function stopTimer() {

    $(".answerSection").on("click", ".answer", function(){
        clearInterval(intervalID);
        
    });
       

}

var questions = [
        {
            display: "What is the name of Rocko's dog?",
            answers: ["Sparky", "Spanner", "Punkin", "Spunky", "Sputnik"],
            // displayQuestion: function(){
            //     return this.display;
            // },
            //triviaAnswers: function(i){
            // for(var i = 0; i < this.answers.length; i++){

            //       return this.answers[i];

            // }

            //},
            correctAnswer: "Spunky",
            imageSrc: "assets/images/spunky.gif",
            message: "The name of Rocko's dog is Spunky."
            // correctAnswerId: "#answer4",
            // incorrectAnswerId: ["#answer1", "#answer2", "#answer3", "#answer5"]

        },
        {
            display: "Which is NOT a team on Legends of the Hidden Temple?",
            answers: ["Green Monkeys", "Purple Parrots", "Orange Orangutans", "Silver Snakes", "Red Jaguars"],
            correctAnswer: "Orange Orangutans",
            imageSrc: "assets/images/Legends.gif",
            message: "Orange Orangutans' is not a team on Legends of the Hidden Temple."

        }
    ]
    //var question1 = 



    function displayAnswers() {
        //loop through answers array
        var q = questions[questionIndex]
        $("#triviaQuestion").html(q.display);
        for (var i = 0; i < q.answers.length; i++) {
            var id = i + 1;
            $("#answer" + id).html(q.answers[i]);

        }
    }

    // $("#answer1").html(question1.answers[i]);
    // $("#answer2").html(question1.triviaAnswers(1));
    // $("#answer3").html(question1.triviaAnswers(2));
    // $("#answer4").html(question1.triviaAnswers(3));
    // $("#answer5").html(question1.triviaAnswers(4));

    //if
    // $(question1.correctAnswerId).click(function(){


    // });

    // for(var i = 0; i < question1.incorrectAnswerId.length; i++){
    //     $(question1.incorrectAnswerId[i]).click(function(){


    //     });
    // }

    $(".answerSection").on("click", ".answer", function () {
        var userAnswer = $(this).text();
        if (userAnswer === questions[questionIndex].correctAnswer) {
            $("#afterClick").css("visibility", "visible");
            $("#questions").css("visibility", "hidden");
            $("#confirm").text("Correct!! " + questions[questionIndex].message);
            $("#gif").attr("src", questions[questionIndex].imageSrc);
            resultsCorrect++;
            $("#correctAnswer").text("Correct answers: " + resultsCorrect);
            setTimeout(nextQuestion, 5000);

        }
        else {
            $("#afterClick").css("visibility", "visible");
            $("#questions").css("visibility", "hidden");
            $("#confirm").text("Wrong!! " + questions[questionIndex].message);
            $("#gif").attr("src", questions[questionIndex].imageSrc);
            resultsIncorrect++;
            $("#incorrectAnswer").text("Incorrect answers: " + resultsIncorrect);
            setTimeout(nextQuestion, 5000);
        }
        // nextQuestion();
    });

    // var count = 30;

    // var counter = setInterval(count, 1000);

    // function startTimer(){

    // count--;

    //   if (count === 0)
    //   {
    //      clearInterval(counter);
    //      return counter;

    //      }

    // console.log(counter);
    // $("#questionTimer").html("<p>" + counter + "</p");
    // }





    displayAnswers();



// var question2 = {
//     display = "Which is NOT a team on Legends of the Hidden Temple?"; 

// }


// var question3 ={
//  display: "What was the always the final challenge on Nickelodeon GUTS?"

// }


