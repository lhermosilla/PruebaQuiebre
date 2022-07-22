let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3500;

// Cambia el tamaño dependiendo de la orientación del celular
window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
});

// Intervalo de ejecución del slide
setInterval(function () {
  slides();
}, intervalo);

// Define el desplazamiento de cada sección del slide
function slides() {
  slider.style.transform = "translate(" + -width * contador + "px)";
  slider.style.transition = "transform 1.2s";
  contador++;

  if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 1500);
  }
}
