/* [
  {
    questionContent: "What kind of energy do Sorcerors in Jujutsu Kaisen?",
    choices: [
      { choice: "Spiritual", value: 0 },
      { choice: "Cursed", value: 1 },
      { choice: "Condensed", value: 0 },
      { choice: "Soul", value: 0 },
    ],
  },
  {
    questionContent: "What is the type of animal hoodie that Umaru-chan wears?",
    choices: [
      { choice: "Bear", value: 0 },
      { choice: "Cat", value: 0 },
      { choice: "Raccoon", value: 0 },
      { choice: "Hamster", value: 1 },
    ],
  },
  {
    questionContent:
      "Which of these characters are not a part of the Big Three?",
    choices: [
      { choice: "Goku", value: 1 },
      { choice: "Naruto", value: 0 },
      { choice: "Ichigo", value: 0 },
      { choice: "Luffy", value: 0 },
    ],
  },
  {
    questionContent: "Which of these games is from a Japanese company?",
    choices: [
      { choice: "Genshin Impact", value: 0 },
      { choice: "Granblue Fantasy", value: 1 },
      { choice: "Arknights", value: 0 },
      { choice: "Azur Lane", value: 0 },
    ],
  },
  {
    questionContent: "Which of these servants is a Saber class?",
    choices: [
      { choice: "Jeanne d'Arc", value: 0 },
      { choice: "Gilgamesh", value: 0 },
      { choice: "Mordred", value: 1 },
      { choice: "Astolfo", value: 0 },
    ],
  },
  {
    questionContent: "Which of these films was not directed by Hayao Miyazaki?",
    choices: [
      { choice: "My Neighbor Totoro", value: 0 },
      { choice: "Grave of the Fireflies", value: 1 },
      { choice: "Howl's Moving Castle", value: 0 },
      { choice: "Princess Mononoke", value: 0 },
    ],
  },
  {
    questionContent:
      "Which of these is studios was formed specifically for Mushoku Tensei?",
    choices: [
      { choice: "MAPPA", value: 0 },
      { choice: "Studio Bind", value: 0 },
      { choice: "Wit Studio", value: 1 },
      { choice: "A-1 Pictures", value: 0 },
    ],
  },
  {
    questionContent:
      "Which of these movies grossed the most at the box office?",
    choices: [
      { choice: "A Silent Voice", value: 0 },
      { choice: "Weathering With You", value: 0 },
      { choice: "Your Name", value: 0 },
      { choice: "Spirited Away", value: 1 },
    ],
  },
];
*/

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
/* DOMSelectors.start.addEventListener('click', startButton)
function startButton() {
  console.log("clicked the start button")
}
DOMSelectors.next.addEventListener('click', nextButton)
function nextButton() {
  console.log("clicked the next button")
} */

// next to complete
// Get questions and answers working and substituted into the HTML properly
// Get the page to be able to recognize a correct answer, incorrect one.
// Get the page to change questions and answers if a correct answer is clicked.

