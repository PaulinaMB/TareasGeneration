//Contiene h2 y la tarjeta
//const container = document.querySelector("#container-div");
const container = document.getElementById("#container-div"); //el style debe ser con get element, con query no funciona
//agregar dentro de una constante el botón
const button = document.querySelector("#card-btn");
//agregando estilos al container para visibilidad
container.style.visibility = "visible";

//Manejando eventos para ocultar el container desde el botón
//hacer sentencia condicional,  el elemento se va a gregar al botón porque este va a escuchar
button.addEventListener("click", () => {
    container.style.visibility = (container.style.visibility === "visible") ? "hidden": "visible" ; //tomar en cuenta el container con su estilo y visibilidad, si esto es exactamente igual va a pasar algo o no
});

