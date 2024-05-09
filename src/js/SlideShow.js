// Seleção de elementos DOM
const textSlides = document.querySelectorAll(".text--slides h1");
const slides = document.querySelectorAll(".img--slides img");
let slideIndex = 0;
let intervalId = null;

// Evento que é acionado quando o DOM está totalmente carregado
document.addEventListener("DOMContentLoaded", initializeSlider);

// Função para inicializar o slider
function initializeSlider(){
    if (slides.length > 0) {
        // Exibe o primeiro slide ao carregar a página
        slides[slideIndex].classList.add("displaySlide");
        textSlides[slideIndex].classList.add("displaySlide");
    }
    // Inicia o slideshow
    startSlideShow(); 
}

// Função para exibir um slide específico
function showSlide(index){
    // Garante que o índice do slide esteja dentro dos limites
    if(index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    
    // Remove a classe "displaySlide" de todos os slides e textos
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    // Adiciona a classe "displaySlide" ao slide atual
    slides[slideIndex].classList.add("displaySlide");

    textSlides.forEach(textSlide => {
        textSlide.classList.remove("displaySlide");
    });
    textSlides[slideIndex].classList.add("displaySlide");
}

// Função para mostrar o slide anterior
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

// Função para mostrar o próximo slide
function nextSlide(){
    slideIndex++;
    // Volta para o primeiro slide se chegou ao último
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

// Função para iniciar o slideshow automaticamente
function startSlideShow() {
    intervalId = setInterval(nextSlide, 10000); // Muda o slide a cada 10 segundos
}

// Função para parar o slideshow quando o mouse entra na área do slider
function stopSlideShow() {
    clearInterval(intervalId);
}

// Evento para parar o slideshow quando o mouse entra na área do slider
document.querySelector(".slider").addEventListener("mouseenter", stopSlideShow);

// Evento para retomar o slideshow quando o mouse sai da área do slider
document.querySelector(".slider").addEventListener("mouseleave", startSlideShow);