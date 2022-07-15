const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionsIndex;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')


startButton.addEventListener('click', startGame);


function startGame() {
  console.log('started')
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(()=> Math.random() - .5);
  currentQuestionsIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();

}

function setNextQuestion(){
  resetState();
  showQuestion(shuffledQuestions[currentQuestionsIndex]);
}

function showQuestion(question){
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

function resetState() {
  
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '12', correct: false},
            {text: '18', correct: false}


        ]
    }
]