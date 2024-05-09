const quizContainer = document.getElementById('quiz-container');
const questionList = document.getElementById('question-list');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');

// Quiz questions and answers
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
        options: [" Guidão", " Pedal", " Tubo superior"], 
        answer: "Tubo Superior" 
    },
    { 
        question: "Em que ano foi criada a primeira bicicleta?", 
        options: ["1817", " 1890", " 1850"], 
        answer: "1817" 
    },
    { 
        question: "Qual é a função do câmbio traseiro em uma bicicleta?", 
        options: ["Mudar de marcha", "Frear a bicicleta", "Controlar a direção"], 
        answer: "Mudar de Marcha" 
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
        options: ["Colete refletivo", "luvas", "Jaqueta de couro"], 
        answer: "Colete refletivo" 
    },
    { 
        question: "O que é um 'pinhão' em uma bicicleta?", 
        options: ["Uma peça que conecta a corrente ao câmbio traseiro", "Uma peça que conecta a roda traseira ao quadro", "Uma peça que conecta a corrente ao pedal"], 
        answer: "Uma peça que conecta a corrente ao câmbio traseiro" 
    },
    { 
        question: "O que o termo 'cadência' descreve no ciclismo", 
        options: ["O nível de resistência do freio", "A velocidade média", "a quantidade de rotações que o ciclista executa por minuto ao girar os pedais (RPM)"], 
        answer: "a quantidade de rotações que o ciclista executa por minuto ao girar os pedais (RPM)" 
    },


  
];

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
        <p> A Resposta correta da alternativa 1 - Road bike</p>
        <p> A Resposta correta da alternativa 2 - Quadro</p>
        <p> A Resposta correta da alternativa 3 - Tubo Superior</p>
        <p> A Resposta correta da alternativa 4 - 1817</p>
        <p> A Resposta correta da alternativa 5 - Mudar de Marcha</p>
        <p> A Resposta correta da alternativa 6 - Bicicleta Todo Terreno</p>
        <p> A Resposta correta da alternativa 7 - Controlar a velocidade</p>
        <p> A Resposta correta da alternativa 8 - Colete refletivo</p>
        <p> A Resposta correta da alternativa 9 - Uma peça que conecta a corrente ao câmbio traseiro</p>
        <p> A Resposta correta da alternativa 10 - a quantidade de rotações que o ciclista executa por minuto ao girar os pedais (RPM)</p>
        `;
    resultContainer.innerHTML = resultHTML;
});

//crazy.js

document.querySelector("#show-login").addEventListener("click", function() {
    document.querySelector(".crazy").classList.add("active");
});

document.querySelector("#show-contacts").addEventListener("click", function() {
    document.querySelector(".contacts-crazy").classList.add("active");
});

document.querySelectorAll(".crazy .close-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.querySelector(".crazy").classList.remove("active");
    });
});

document.querySelectorAll(".contacts-crazy .close-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.querySelector(".contacts-crazy").classList.remove("active");
    });
});