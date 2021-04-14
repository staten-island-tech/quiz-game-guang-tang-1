const DOMSelectors = {
    question: document.querySelector('#questions-text'),
    choiceOne: document.querySelector('#answer-choices button:nth-child(1)'),
    choiceTwo: document.querySelector('#answer-choices button:nth-child(2)'),
    choiceThree: document.querySelector('#answer-choices button:nth-child(3)'),
    choiceFour: document.querySelector('#answer-choices button:nth-child(4)'),
    start: document.querySelector('#control button:nth-child(1)'),
    back: document.querySelector('#control button:nth-child(2)'),
    next: document.querySelector('#control button:nth-child(3)'),

    question: document.getElementById('questions'),
  };
  
  export { DOMSelectors };