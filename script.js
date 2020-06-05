

$(".slideshow").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

function pregunta(numeroPregunta) {
  // numeropregunta=1
  let respuestas = "respuesta" + numeroPregunta;
  let mostrarRespuesta = document.getElementById(respuestas) 
  console.log(respuestas)
  let estado = mostrarRespuesta.style.display
  if (estado == "" || estado == "none") {
    mostrarRespuesta.style.display = "block";
  } else {
mostrarRespuesta.style.display = "none";
  }
}