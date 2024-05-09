// Seleção dos elementos DOM
const $startGameButton = document.querySelector(".start-quiz");
const $nextQuestionButton = document.querySelector(".next-question");
const $questionsContainer = document.querySelector(".question-container");
const $questionText = document.querySelector(".question");
const $answersContainer = document.querySelector(".answers-container");
const $answers = document.querySelectorAll(".answer");

// Variáveis de controle do jogo
let currentQuestionIndex = 0;
let totalCorrect = 0;

// Adiciona listeners de evento aos botões
$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

// Função para iniciar o jogo
function startGame() {
  $startGameButton.classList.add("hide");
  $questionsContainer.classList.remove("hide");
  displayNextQuestion();
}

// Função para exibir a próxima pergunta
function displayNextQuestion() {
  resetState();
  
  if (questions.length === currentQuestionIndex) {
    return finishGame();
  }

  $questionText.textContent = questions[currentQuestionIndex].question;
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.text;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAnswer);

    newAnswer.addEventListener("click", selectAnswer);
  });
}

// Função para redefinir o estado do jogo
function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild);
  }

  document.body.removeAttribute("class");
  $nextQuestionButton.classList.add("hide");
}

// Função para selecionar uma resposta
function selectAnswer(event) {
  const answerClicked = event.target;

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct");
    totalCorrect++;
  } else {
    document.body.classList.add("incorrect");
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;

    if (button.dataset.correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
  
  $nextQuestionButton.classList.remove("hide");
  currentQuestionIndex++;
}

// Função para finalizar o jogo
function finishGame() {
  const totalQuestions = questions.length;
  const performance = Math.floor(totalCorrect * 100 / totalQuestions);
  
  let message = "";

  switch (true) {
    case (performance >= 90):
      message = "Excellent :)";
      break;
    case (performance >= 70):
      message = "Very good :)";
      break;
    case (performance >= 50):
      message = "Good";
      break;
    default:
      message = "Could do better :(";
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      You got ${totalCorrect} out of ${totalQuestions} questions right!
      <span>Result: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Restart quiz
    </button>
  `;
}

// Array de objetos de perguntas e respostas
const questions = [
    {
      question: "Who is the inventor of the bicycle?",
      answers: [
        { text: "Leonardo da Vinci", correct: false },
        { text: "Karl Drais", correct: true },
        { text: "Thomas Jefferson", correct: false },
        { text: "Wilbur Wright", correct: false }
      ]
    },
    {
      question: "What is the heaviest part of a typical bicycle?",
      answers: [
        { text: "Frame", correct: false },
        { text: "Wheels", correct: false },
        { text: "Pedals", correct: false },
        { text: "Seat", correct: true }
      ]
    },
    {
      question: "What is the maximum speed reached by a cyclist on a common bicycle in a steep downhill?",
      answers: [
        { text: "50 km/h", correct: false },
        { text: "70 km/h", correct: true },
        { text: "100 km/h", correct: false },
        { text: "120 km/h", correct: false }
      ]
    },
    {
      question: "What is the most famous cycling event in the world?",
      answers: [
        { text: "Tour de France", correct: true },
        { text: "Giro d'Italia", correct: false },
        { text: "Vuelta a España", correct: false },
        { text: "Paris-Roubaix", correct: false }
      ]
    },
    {
      question: "How many teeth does a typical road bike crankset have?",
      answers: [
        { text: "52/36", correct: false },
        { text: "50/34", correct: true },
        { text: "53/39", correct: false },
        { text: "48/32", correct: false }
      ]
    }
  ];