const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const highScore = document.getElementById("highScore");
const showEl = document.querySelector("#show");

var timeEl = document.querySelector(".time");

var secondsLeft = 30;

// list of questions that will be on the quiz
let questions = [
    {
        question : "JavaScript is a ___ -side programming language.",
        choiceA : "Client",
        choiceB : "Server",
        choiceC : "both",
        correct : "C"
    },
    {
        question : "How do you find the minimum of x and y using JavaScript?",
        choiceA : "min(x,y);",
        choiceB : "Math.min(x,y)",
        choiceC : "Math.min(xy)",
        correct : "B"
    },
    {
        question : "What does JS stand for?",
        choiceA : "JavaScript",
        choiceB : "JavaScribe",
        choiceC : "JavaStarbucks",
        correct : "A"
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
}

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    setTime();
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
    }
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        answerIsCorrect();
    }else{
        // answer is wrong
        answerIsWrong();
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        scoreRender();
        quiz.style.display = "none";
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion);
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion);
    secondsLeft -= 5;
}
// Stores and presents the users  initials and highscore.
function scoreRender(){
    var highScore = secondsLeft;
    var initials = prompt("What are your initials");
    localStorage.setItem("highScore", initials + "-" + highScore);
    var allScores = localStorage.getItem("highScore");
    document.getElementById("totalScores").innerHTML = allScores;
    secondsLeft = 1;

//Below is the code I am working on to try to get multiple Highscores to show up.

    // for (var i = 0; i < allScores.length; i++) {
    //     var total = allScores[i];
    
    //     var li = document.createElement("li");
    //     li.textContent = total;
    //     li.setAttribute("data-index", i);
    
    //     li.appendChild(total);
    //   }
}

// Button you can click to view highscores without actually taking the quiz
showEl.addEventListener("click", function() {
    var allScores = localStorage.getItem("highScore");
    document.getElementById("totalScores").innerHTML = allScores
  });