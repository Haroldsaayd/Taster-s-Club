

$(".slideshow").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
});

let mostrarRespuesta = document.getElementById("respuesta");
let ocultarRespuesta = document.getElementById("pregunta");

function respuesta() {

  let estado = mostrarRespuesta.style.display
  if (estado == "" || estado == "none") {
    mostrarRespuesta.style.display = "grid";
  } else {
mostrarRespuesta.style.display = "none";
  }
  
}


