//Variables and constants used througout the code
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;
let resultsContainer = document.getElementById('results-container');
let correctAnswers = 0;
// Event listeners for the start and next buttons
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
//Main function that starts the game
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
// Sets the next question (but doesn't show it)
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
// Displays the next question
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      correctAnswers++;
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
// Resets the game, screen color
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  resultsContainer.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    resultsContainer.classList.remove('hide');
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: ' What is actually Bitcoin?',
    answers: [
      { text: 'A peer to peer digital currency', correct: true },
      { text: 'A stock', correct: false },
      { text: 'A ponzi scheme', correct: false },
      {text: 'A speculative asset', correct: false}
    ]
  },
  {
    question: "Who is Bitcoin's creator?",
    answers: [
      { text: 'Satoshi Nakamoto', correct: true },
      { text: 'Vitalik Buterin', correct: false },
      { text: 'Craig Wright (lol)', correct: false },
      { text: 'Elon Musk', correct: false }
    ]
  },
  {
    question: 'What is currently the smallest unit of the Bitcoin currency?',
    answers: [
      { text: 'Bits', correct: false },
      { text: 'doges', correct: false },
      { text: 'shiba', correct: false },
      { text: 'satoshi', correct: true }
    ]
  },
  {
    question: 'Which factor or who determines the market price of Bitcoin?',
    answers: [
      { text: 'The creator of Bitcoin', correct: false },
      { text: 'Supply and Demand', correct: true },
      {text: 'The world’s economy and politics', correct: false},
      {text: 'The position of the stars', correct: false}
    ]
  }
]
//Websocket for live bitcoin price
let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcgbp@trade');
let stockPriceElement = document.getElementById('stock-price');
ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  stockPriceElement.innerText = parseFloat(stockObject.p).toFixed(2);
}