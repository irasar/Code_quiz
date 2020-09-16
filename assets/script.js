//hook elements from html
var displayQuestionEl = document.querySelector(".display-questions");
//hook timer element
var timerEl = document.querySelector(".timer");
//hook score element
var resultsEl = document.querySelector(".results");
//hooking into container element
var gameContainer = document.querySelector(".game-container");
//make heading for start of quiz
var mainDisplay = document.createElement("h3");
//make start button
var startBtn = document.createElement("button");
 var scoresEl = document.querySelector(".scores");
 var finalPage = document.querySelector(".final-page");
//global variables


//var to store number on timer
var timer = 75;
//var to store current index
var index = 0;
//oh?
var questionTimer;
var scoresArray = [];

//object arrays
const questions = [
  //question and answers 1
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["1.Strings", "2.Booleans", "3.Alerts", "4.Numbers"],
    answer: "3.Alerts"
  },
  //question and answers 2
  {
    title: "The conditional in an if/else statement is enclosed in ________:",
    choices: ["1.Quotes", "2.Curly Braces", "3.Parentheses", "4.Square Brackets"],
    answer: "3.Parentheses"
  },
  //question and answers 3
  {
    title: "Arrays in javaScript can be used to store __________:",
    choices: ["1.Numbers and strings", "2.Other arrays", "3.Booleans", "4.All of the above"],
    answer: "4.All of the above"
  },
  //question and answers 4
  {
    title: "Sting values must be enclosed within:",
    choices: ["1.Commas", "2.Curly braces", "3.Quotes", "4.Parentheses"],
    answer: "3.Quotes"
  },
  //question and answers 5
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1.JavaScript", "2.Terminal/bash", "3.For loops", "4.Console.log"],
    answer: "4.Console.log"
  },
];





//function that loads main page
function openingPage() {
//opening page instructions
  mainDisplay.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
  //start btn text
  startBtn.textContent = "Start"
  //append btn and heading to page
  displayQuestionEl.append(mainDisplay, startBtn)
}


//function that starts the game
function startQuiz() {
  //show timer function
  showTimer()
  //call nextQuestion function
  nextQuestion()
}


//function for timer
function showTimer() {
  // display timer to screen
  timerEl.textContent = timer;
  //create setInterval and store it to a var
  var questionTimer = setInterval(function () {
    //decrease timer by 1
    timer--
    //display timer on screen
    timerEl.textContent = timer;
//if timer goes down to 0, clear interval
    if (timer <= 0) {
      clearInterval(questionTimer);
    }
  }, 1 * 1000)


}
//function that starts next question
function nextQuestion() {
//declare a var to store current question. Assign thre current question
  var currentQuestion = questions[index];
//log current ques
  console.log(currentQuestion);
//empty question container element
  displayQuestionEl.textContent = "";
//add current question title to the main text display variable
  mainDisplay.textContent = currentQuestion.title;
//append the main text display var to the ques container elem
  displayQuestionEl.append(mainDisplay);
//create a div to wrap the choices
  var choicesContainer = document.createElement("div");
//loop to:
  for (let i = 0; i < currentQuestion.choices.length; i++) {
//make multiple choice buttons
    var choiceBtn = document.createElement("button");
//text added to buttons from object
    choiceBtn.textContent = currentQuestion.choices[i];
//add event listener to button to check answers
    choiceBtn.addEventListener("click", checkAnswer);
//append button to div created to wrap choices
    choicesContainer.append(choiceBtn);
  }

// append div element to the question constainer elem
  displayQuestionEl.append(choicesContainer);
}



//function to checkanswer and show the questio or show result screen
function checkAnswer(event) {

  // logic to check for right answer
  var responseText = event.target.textContent;
  console.log(responseText);
  if (responseText === questions[index].answer) {
    //goes to next ques or shows score
    resultsEl.textContent = "correct";
    
  } else {
    resultsEl.textContent = "incorrect";
    timer -= 10;
  }
  if (index < questions.length - 1){
    //increase index by 1
  index++;
  //show next question
  nextQuestion();
   //logic if game over 
  //make into function??
} else {
  console.log("game over", timer)
  gameContainer.style.display = "none";
  resultsEl.style.display = "none";
  clearInterval(questionTimer);
resultsScreen();
  }

  //??? make timer stop check and see if qurstion index is undefined if it is it clear timer and show the score
}



function resultsScreen() {
//to get final score to pop up in result screen
const resultsEl = localStorage.getItem(".results");
var scoreTitle = document.createElement("h3");
var scoreText = document.createElement("p");
scoreTitle.textContent = "All Done!";
scoreText.textContent = "Your final score is: " + timer;

scoresEl.append(scoreTitle, scoreText);
var formEl = document.createElement("form");
var inputEl = document.createElement("input");
formEl.textContent = "Enter initials: ";
inputEl.textContent = "";
var hsBtn = document.createElement("button");
hsBtn.textContent = "Submit";
hsBtn.addEventListener("click", highPage);
scoresEl.append(formEl, inputEl, hsBtn);

highPage();
}


function highPage (){
  var headingEl = document.createElement("h2");
  var hpBtn = document.createElement("button");
  var finalBtn = document.createElement("button");
  headingEl.textContent = "Highscores";
  hpBtn.textContent = "Go Back";
  finalBtn.textContent = "Clear Highscores";
  finalPage.append(headingEl, hpBtn, finalBtn);

 console.log("hi")
}



//add event listener for start button
startBtn.addEventListener("click", startQuiz)
//call function for opening page
openingPage();



//create form, click







