var slideIndex = 0; // Inicializa o índice do slide

// Função para exibir os slides
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide"); // Obtém todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Oculta todos os slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} // Reinicia o índice quando chegar ao último slide
  slides[slideIndex-1].style.display = "block";  // Exibe o slide atual
  setTimeout(showSlides, 2000); // Altera a imagem a cada 2 segundos
}

showSlides(); // Chama a função showSlides para iniciar o slideshow automaticamente
