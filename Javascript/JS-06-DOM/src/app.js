//definir tres constantes, una para botn random, reset y body, esas vamos a manipular
const botonRandom = document.getElementById("btn");
const botonReset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

//Vamos a declarar una funcion que genere un numero random tomando un parametro number

const random = (number) =>{
    return Math.floor(Math.random()*(number+1)); //permite redondear hacia abajo clase math con metodo floor que es redondeo
} //va a generar un numero leatorio a partir de cero y hacia arriba

//nosotros podemos manipular los nodos, va a surgir algo nuevo, eventos de JavaScript, eventlistener, son notificaciones de sucesos que van a occurrir... COPIAR DIAPO

//Crear eventos de click para que al presionar un botón pase algo. Mandar a llamar constantes y crearles un evento

// botón random
botonRandom.addEventListener("click", ()=>{
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.background = randomColor; // no se pone el return porque es una funcion anonima
});



//- botón de reset
//lo que quiero que haga es que el boton de reset escuche algo y si sucede ejecute algo
botonReset.addEventListener("click", ()=>{
    document.body.style.background = colorFondo;
});
