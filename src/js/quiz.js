var pontuacao = 0;
      
function fazerQuiz() {
  var resposta;

  // Pergunta 1
  resposta = prompt("1. O que você deve fazer antes de atravessar a rua com a bicicleta?");
  if (resposta.toLowerCase() === "olhar") {
    pontuacao++;
  }

  // Pergunta 2
  resposta = prompt("2. Qual é o componente mais importante de uma bicicleta?");
  if (resposta.toLowerCase() === "quadro") {
    pontuacao++;
  }

  // Pergunta 3
  resposta = prompt("3. O que você deve fazer se cair da bicicleta?");
  if (resposta.toLowerCase() === "levantar") {
    pontuacao++;
  }

  // Pergunta 4
  resposta = prompt("4. Em que ano foi criada a primeira bicicleta?");
  if (resposta.toLowerCase() === "1817") {
    pontuacao++;
  }

  // Pergunta 5
  resposta = prompt("5. O que você gira para mudar as marchas da bicicleta?");
  if (resposta.toLowerCase() === "marcha") {
    pontuacao++;
  }

  // Pergunta 6
  resposta = prompt("6. Como se chama o objeto que ajuda a segurar a bicicleta quando você a estaciona?");
  if (resposta.toLowerCase() === "cavalete") {
    pontuacao++;
  }

  // Pergunta 7
  resposta = prompt("7. O que você usa para encher os pneus da bicicleta?");
  if (resposta.toLowerCase() === "bomba") {
    pontuacao++;
  }

  // Pergunta 8
  resposta = prompt("8. O que você usa para segurar o guidão da bicicleta?");
  if (resposta.toLowerCase() === "mãos") {
    pontuacao++;
  }

  // Pergunta 9
  resposta = prompt("9. Qual é a parte redonda da bicicleta onde você coloca os pés para pedalar?");
  if (resposta.toLowerCase() === "pedal") {
    pontuacao++;
  }

  // Pergunta 10
  resposta = prompt("10. O que você usa para parar a bicicleta?");
  if (resposta.toLowerCase() === "freios") {
    pontuacao++;
  }

  // Exibir pontuação
  var resultado = "Você acertou " + pontuacao + " de 10 perguntas.";
  alert(resultado);
  document.write("<h2>" + resultado + "</h2>");
}

fazerQuiz();