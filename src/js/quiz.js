document.addEventListener('DOMContentLoaded', function() {
  // Obtenha referências aos elementos do DOM
  const startQuizBtn = document.querySelector('.start-quiz');
  const nextQuestionBtn = document.querySelector('.next-question');
  const questionContainer = document.querySelector('.question-container');
  const questionList = document.getElementById('question-list');
  const submitBtn = document.getElementById('submit-btn');
  const resultContainer = document.getElementById('result-container');
  
  // Adicione um ouvinte de evento de clique ao botão de início do quiz
  startQuizBtn.addEventListener('click', function() {
      // Mostre o contêiner de perguntas
      questionContainer.classList.remove('hide');
      // Esconda o botão de início do quiz
      startQuizBtn.classList.add('hide');
      // Iniciar o quiz
      showQuestion(0);
  });

  // Função para mostrar uma pergunta com base no índice
  function showQuestion(index) {
      // Limpe o conteúdo da lista de perguntas
      questionList.innerHTML = '';
      // Obtenha a pergunta atual do array de perguntas
      const question = questions[index];
      // Crie o HTML da pergunta e suas opções
      const questionHTML = `
          <li>
              <h3>${question.question}</h3>
              <ul>
                  ${question.options.map(option => `<li><input type="radio" name="question-${index}" value="${option}">${option}</li>`).join('')}
              </ul>
          </li>
      `;
      // Adicione o HTML da pergunta à lista de perguntas
      questionList.innerHTML += questionHTML;
      // Adicione um ouvinte de evento de clique ao botão de próxima pergunta
      nextQuestionBtn.addEventListener('click', function() {
          // Verifique se uma opção foi selecionada
          const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
          if (!selectedOption) {
              alert('Por favor, selecione uma opção.');
              return;
          }
          // Avance para a próxima pergunta ou exiba o resultado se for a última pergunta
          if (index < questions.length - 1) {
              showQuestion(index + 1);
          } else {
              showResult();
          }
      });
  }

  // Função para calcular e exibir o resultado do quiz
  function showResult() {
      const userAnswers = [];
      // Obtenha as respostas do usuário para cada pergunta
      questions.forEach((question, index) => {
          const userAnswer = document.querySelector(`input[name="question-${index}"]:checked`).value;
          userAnswers.push(userAnswer);
      });

      // Obtenha as respostas corretas
      const correctAnswers = questions.map(question => question.answer);

      // Calcular a pontuação do usuário
      const score = userAnswers.reduce((acc, current, index) => {
          if (current === correctAnswers[index]) {
              acc++;
          }
          return acc;
      }, 0);

      // Gerar HTML com o resultado do quiz
      const resultHTML = `
          <h2>Você acertou ${score} de ${questions.length} perguntas!</h2>
          <p>Parabéns! Você é um verdadeiro ciclista!</p>
          <!-- Adicione outras informações do resultado aqui, se desejar -->
      `;
      // Exibir o resultado na tela
      resultContainer.innerHTML = resultHTML;
  }
});
