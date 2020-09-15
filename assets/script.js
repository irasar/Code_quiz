//hook elements from html
var displayQuestionEl = document.querySelector(".display-questions");
//hook timer element
var timerEl = document.querySelector(".timer");
var resultsEl = document.querySelector(".results");

//make heading for start of quiz
var mainDisplay = document.createElement("h3");
//make button
var startBtn = document.createElement("button");

//global variables
//start timer variable
var timer = 75;
//var to store current index
var index = 0;








//function that loads main page
function openingPage() {

  mainDisplay.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answwers will penalize your score/time by ten seconds!"
  startBtn.textContent = "start"
  displayQuestionEl.append(mainDisplay, startBtn)
}



function startQuiz() {
  showTimer()
}



function showTimer() {
  timerEl.textContent = timer;
  var questionTimer = setInterval(function () {
    timer--
    timerEl.textContent = timer;

    if (timer <= 0) {
      clearInterval(questionTimer);
    }
  }, 1 * 1000)


}

function nextQuestion() {

var currentQuestion = questions[index];

console.log(currentQuestion);

displayQuestionEl.textContent = "";

mainDisplay.textContent = currentQuestion.title;

displayQuestionEl.append(mainDisplay);

var choicesContainer = document.createElement("div");

for (let i = 0; i < currentQuestion.choices.length; i++) {

  var choiceBtn = document.createElement("button");

  choiceBtn.textContent = currentQuestion.choices[i];

  choiceBtn.addEventListener("click, checkAnswer");

  choicesContainer.append(choiceBtn);
}









displayQuestionEl.append(choicesContainer);
}




function checkAnswer(event) {


  var responseText = event.target.textContent;
  console.log(responseText);
  if (responseText === questions[index].answer) {
    console.log("correct");
  } else {
    console.log("Incorrect");

  }
  index++;
  nextQuestion();
}

startBtn.addEventListener("click", startQuiz)
openingPage();




















const questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["1.Strings", "2.Booleans", "3.Alerts", "4.Numbers"],
    answer: "Alerts"
  },
  {
    title: "The conditional in an if/else statement is enclosed in ________.:",
    choices: ["1.Quotes", "2.Curly Braces", "3.Parentheses", "4.Square Brackets"],
    answer: "3.Parentheses"
  },
  {
    title: "Arrays in javaScript can be used to store __________.:",
    choices: ["1.Numbers and strings", "2.Other arrays", "3.Booleans", "4.All of the above"],
    answer: "4.All of the above"
  },
  {
    title: "Sting values must be enclosed within:",
    choices: ["1.Commas", "2.Curly braces", "3.Quotes", "4.Parentheses"],
    answer: "3.Quotes"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1.JavaScript", "2.Terminal/bash", "3.For loops", "4.Console.log"],
    answer: "4.Console.log"
  },
];






