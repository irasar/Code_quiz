

const startButton = document.getElementById("start")
const choiceButtonsElement = document.getElementById("choice-buttons")
const questionElement = document.getElementById("question")
const questionConatinerElement = document.getElementById("question-container")



let randomQuestions, currentQuestionIndex



startButton.addEventListener("click", startGame)




function startGame(){
     console.log("started")
     startButton.classList.add("hide")
     randomQuestions = question.sort(() => Math.random() - .5)
     currentQuestionIndex = 0
     questionConatinerElement.classList.remove("hide")
     setNextQuestion()
    


}


function setNextQuestion() {
showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question

}

function selectAnswer() {
  
}


const question = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["1.Strings", "2.Booleans", "3.Alerts", "4.Numbers"],
      answer: "Alerts"
    },
    {
      title: "The conditional in an if/else statement is enclosed in ________.:",
      choices: ["1.Quotes", "2.Curly Braces", "3.Parentheses", "4.Square Brackets"],
      answer: "Parentheses"
    },
        {
          title: "Arrays in javaScript can be used to store __________.:",
          choices: ["1.Numbers and strings", "2.Other arrays", "3.Booleans", "4.All of the above"],
          answer: "All of the above"
        },
        {
          title: "Sting values must be enclosed within:",
          choices: ["1.Commas", "2.Curly braces", "3.Quotes", "4.Parentheses"],
          answer: "Quotes"
        },
        {
            title: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choices: ["1.JavaScript", "2.Terminal/bash", "3.For loops", "4.Console.log"],
            answer: "Console.log"
          },
      ];






