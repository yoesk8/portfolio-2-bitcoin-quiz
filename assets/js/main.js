//Variables and constants used througout the code
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const introContainerElement = document.getElementById('intro-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const greatscore = document.getElementById('greatscore');
const goodscore = document.getElementById('goodscore');
const badscore = document.getElementById('badscore');
let shuffledQuestions, currentQuestionIndex;
let resultsContainer = document.getElementById('results-container');
let correctAnswersNum = document.getElementById('correct-ans-num');
let correctAnswers;



// Event listeners for the start and next buttons
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});
//Main function that starts the game
function startGame() {
  introContainerElement.classList.add('hide');
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  correctAnswers = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}





// Sets the next question (but doesn't show it)
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
// Displays the next question
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
// Resets the game, screen color
function resetState() {
  nextButton.classList.add('hide');
  resultsContainer.classList.add('hide');
  greatscore.classList.add('hide');
  goodscore.classList.add('hide');
  badscore.classList.add('hide');

  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    correctAnswers++;
    alert("Well done! That's correct!")
  }
  else{
    alert("Oops, that's not right :(")
  }
  
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    resultsContainer.classList.remove('hide');
    if (correctAnswers >= 9){
      greatscore.classList.remove('hide');
    }
    else if (correctAnswers >= 6){
      goodscore.classList.remove('hide');
    }
    else {
      badscore.classList.remove('hide');
    }
    correctAnswersNum.innerText = correctAnswers;
    questionContainerElement.classList.add('hide');
    startButton.innerText = 'Play Again!';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.disabled = true;
    element.classList.add('btn-success');
        
  } else {
    element.disabled = true;
    element.classList.add('btn-danger');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

//Websocket for live bitcoin price
let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcgbp@trade');
let stockPriceElement = document.getElementById('stock-price');
ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  stockPriceElement.innerText = parseFloat(stockObject.p).toFixed(2);
};