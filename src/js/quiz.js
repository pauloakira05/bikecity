const quizContainer = document.getElementById('quiz-container');
const questionList = document.getElementById('question-list');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');

// Perguntas e respostas do quiz
const questions = [
    {
        question: 'Qual é o tipo de bicicleta mais adequado para estradas planas?',
        options: ['Mountain bike', 'Road bike', 'Hybrid bike'],
        answer: 'Road bike'
    },
    {
        question: 'Qual é o componente mais importante de uma bicicleta?',
        options: ['Quadro', 'Rodas', 'Freios'],
        answer: 'Quadro'
    },
    { 
        question: "Qual é a principal parte do quadro de uma bicicleta?", 
        options: ["Guidão", "Pedal", "Tubo superior"], 
        answer: "Tubo superior" 
    },
    { 
        question: "Em que ano foi criada a primeira bicicleta?", 
        options: ["1817", "1890", "1850"], 
        answer: "1817" 
    },
    { 
        question: "Qual é a função do câmbio traseiro em uma bicicleta?", 
        options: ["Mudar de marcha", "Frear a bicicleta", "Controlar a direção"], 
        answer: "Mudar de marcha" 
    },
    { 
        question: "O que significa a sigla 'BTT' em alguns países de língua portuguesa em referência ao ciclismo?", 
        options: ["Bicicleta Técnica de Travessia", "Bicicleta Todo Terreno", "Bicicleta de Turismo e Trilhas"], 
        answer: "Bicicleta Todo Terreno" 
    },
    { 
        question: "Qual é a principal função das sapatas de freio em uma bicicleta?", 
        options: ["Lubrificar a corrente", "Manter a bicicleta em pé", "Controlar a velocidade"], 
        answer: "Controlar a velocidade" 
    },
    { 
        question: "Qual desses acessórios é essencial para a segurança do ciclista durante a noite?", 
        options: ["Colete refletivo", "Luvas", "Jaqueta de couro"], 
        answer: "Colete refletivo" 
    },
    { 
        question: "O que é um 'pinhão' em uma bicicleta?", 
        options: ["Uma peça que conecta a corrente ao câmbio traseiro", "Uma peça que conecta a roda traseira ao quadro", "Uma peça que conecta a corrente ao pedal"], 
        answer: "Uma peça que conecta a corrente ao câmbio traseiro" 
    },
    { 
        question: "O que o termo 'cadência' descreve no ciclismo", 
        options: ["O nível de resistência do freio", "A velocidade média", "A quantidade de rotações que o ciclista executa por minuto ao girar os pedais (RPM)"], 
        answer: "A quantidade de rotações que o ciclista executa por minuto ao girar os pedais (RPM)" 
    },
];

// Itera sobre as perguntas e cria o HTML correspondente para cada uma
questions.forEach((question, index) => {
    const questionHTML = `
        <li>
            <h3>${question.question}</h3>
            <ul>
                ${question.options.map(option => `<li><input type="radio" name="question-${index}" value="${option}">${option}</li>`).join('')}
            </ul>
        </li>
    `;
    questionList.innerHTML += questionHTML;
});

// Adiciona um evento de clique ao botão de envio
submitBtn.addEventListener('click', () => {
    const userAnswers = [];
    questions.forEach((question, index) => {
        const userAnswer = document.querySelector(`input[name="question-${index}"]:checked`).value;
        userAnswers.push(userAnswer);
    });

    const correctAnswers = questions.map(question => question.answer);
    const score = userAnswers.reduce((acc, current, index) => {
        if (current === correctAnswers[index]) {
            acc++;
        }
        return acc;
    }, 0);

    const resultHTML = `
        <h2>Você acertou ${score} de ${questions.length} perguntas!</h2>
        <p>Parabéns! Você é um verdadeiro ciclista!</p>
        <p>A resposta correta da alternativa 1 é: Road bike</p>
        <p>A resposta correta da alternativa 2 é: Quadro</p>
        <p>A resposta correta da alternativa 3 é: Tubo superior</p>
        <p>A resposta correta da alternativa 4 é: 1817</p>
        <p>A resposta correta da alternativa 5 é: Mudar de marcha</p>
        <p>A resposta correta da alternativa 6 é: Bicicleta Todo Terreno</p>
        <p>A resposta correta da alternativa 7 é: Controlar a velocidade</p>
        <p>A resposta correta da alternativa 8 é: Colete refletivo</p>
        <p>A resposta correta da alternativa 9 é: Uma peça que conecta a corrente ao câmbio traseiro</p>
        <p>A resposta correta da alternativa 10 é: A quantidade de rotações que o ciclista executa por minuto ao girar os pedais (RPM)</p>
    `;
    resultContainer.innerHTML = resultHTML;
});
