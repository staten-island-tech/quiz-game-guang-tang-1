import { DOMSelectors} from "./dom";
import {questions} from "./questions"

DOMSelectors.choiceOne.addEventListener("click", answerOne);
function answerOne() {
  console.log("answered 1")
}
DOMSelectors.choiceTwo.addEventListener("click", answerTwo);
function answerTwo() {
  console.log("answered 2")
}
DOMSelectors.choiceThree.addEventListener("click", answerThree);
function answerThree() {
  console.log("answered 3")
}
DOMSelectors.choiceFour.addEventListener("click", answerFour)
function answerFour() {
  console.log("answer 4")
}
DOMSelectors.start.addEventListener('click', startButton)
function startButton() {
  console.log("clicked the start button!")
}
DOMSelectors.back.addEventListener('click', backButton)
function backButton() {
  console.log("clicked the back button!")
}
DOMSelectors.next.addEventListener('click', nextButton)
function nextButton() {
  console.log("clicked the next button!")
} 

// next to complete
// Get questions and answers working and substituted into the HTML properly
// Get the page to be able to recognize a correct answer, incorrect one.
// Get the page to change questions and answers if a correct answer is clicked.

console.log(questions);

function nextButton() {
  DOMSelectors.choiceOne.innerHTML = "working"
  DOMSelectors.choiceTwo.innerHTML = "working"
  DOMSelectors.choiceThree.innerHTML = "working"
  DOMSelectors.choiceFour.innerHTML = "working"
}