/**
 * Para manipular la información de un usuario, necesito crear un perfil mediante un objeto de JS.
 * 
 */
//vamos a crear un objeto con cuatro claves que serán las del div .profile
const user = {
    username: 'PaulinaMB',
    age: 23,
    email: 'paulina@gmail.com',
    favFilms: ['JJK', 'HxH', 'BNHA', 'SnK'] 
}

//crear una función que me permita ingresar el objeto del perfil en el nodo padre (en este caso nodos padres).

const createUser = (user) => {
    document.getElementById("username").textContent = user.username;//VERRRR 4:15
    //llamarlos para empezar a manipularlos
    //agregar texto que ya existe en el nodo
    //vamos a llamar cada uno de los elementos del html del .profile
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    //mostrando elementos de lista en forma de lista
    /**
     * Para mostrar el array en forma de lista utilizaremos un ciclo forEach para recorrer todo el array y traer cada elemeto a la lista
     */
    const ul = document.getElementById("fav-films"); //id de html
    user.favFilms.forEach(film =>{
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
    });
    //modificando estilos de la ul para quitar viñetas
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "D9B70D";

    //


    //mostrando elementos de lista en forma de fila (no nos sirve porque definimos una lista desordenada "ul" y no un párrafo).
    //document.getElementById("fav-films").textContent = user.favFilms;
    //quiero que mis peliculas se visualicen a manera de lista
}

//Invocando la función 
createUser(user);

/**
 * Events para actualizar el username mediante el input y el botón
 */

//guardar lo mismo dentro de nuestras constantes
const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener("click", ()=>{
    userName.textContent = inputName.value;
})
//name = nput
//btn-main = boton
//username = h3 del card