//Programación sincrónica
/*function two () {
    console.log("dos");
}

function one(){
    console.log("uno");
    two();
    console.log("tres");
}

one();
console.log("**************************");
//programacion asíncrona. usar propiedad conocida como setTimeout
/**
 * setTimeout que recibe una funcion anonima y establece un tiempo (en milisegundos 1000ms=1s)de ejecucion para cumplir con la condicion de asincronismo.
 */
/*

const twoAsync = () => {
    setTimeout(()=>{
        console.log("dos");
    }, 5000);

}

const oneAsync = () => {
    setTimeout( function(){
        console.log("uno Async");
    }, 2000);
    twoAsync ();
    console.log("tres Async");
}

oneAsync();

*/
/**
 * Trabajando con promesas mediante Fetch API
 */
const url = "https://jsonplaceholder.typicode.com/users";
//usando fetch para mostrar en consola
fetch(url)
//si se cumple la promesa, vamos a traer los datos de la API y se convertirán en tipo json para  poder mostrarlos en consola
    .then(data => data.json())
    .then(data=>{
        console.log(data); //mostrando en consola todos los usuarios de la api
        console.log(data[0].name); //mostrando en consola el usuario con el indice cero y trayendo solamente su nombre
    })

    .catch(error => console.error("¡Upes, algo salió mal", error)); //mensaje de error
//usando fetch para mostrar en navegador
const botonInfo = document.querySelector("#btn-mensaje");

const info = document.querySelector("#mensaje");
//traer api directo desde el enlace
//consumiendo API con fetch (promesas)


// var para guardar la infor que se va a traer desde la api debe ser de tipo null
let post=null;


//crear var nula para traer info especifica para esa variable
//funcion que me permita manipular la var de tipo null
botonInfo.addEventListener("click", () =>{
    fetch("https://jsonplaceholder.typicode.com/users/6")
    .then(response => response.json())
    .then(response => {
        post=response; //guardado los datos de response en la var de tipo null, para modificar el dato
        //mandamos llamar la var desde la fcn (peeero, esa no la hemos hecho, hay que hacerla)
        mostrarDatos(post);
    })
    .catch(error=>console.log.error("¡problemas!", error));
})
//funcion que me permita manipular la var de tipo mull
//quiero traer name, username, email, phone del user de la API
const mostrarDatos = (post) => {
    //creando nodos (elementos) mediante DOM manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");
    //Ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    //Hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}
//mostrar productos usando fetch para mostrar en navegador

//1. poner en constantes lo que quiero guardar

const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;
botonProductos.addEventListener("click", ()=>{
    fetch("https://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(response=> {productos = response;
            //fcn por definir
            mostrarProductos(productos);
        })
        .catch(error=>console.error("Cuidado",error))
});

//fcn para crear, agregar y mostrar elementos desde el DOM

const mostrarProductos = (productos) => {
    //mando a llamar las llaves de title, price, description,category, image desde la api
    productos.map((productos) => {
        //el método map toma el array (objeto en JS) y crea nuevos arreglos que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach
     const imagen = document.createElement("img");   
     const titulo = document.createElement("h2");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const  categoria = document.createElement("p");
    const separador = document.createElement("hr");

    //enviar a html con innerhtml
    imagen.src = productos.image;
    imagen.width = 200;
    titulo.innerHTML=productos.title;
    precio.innerHTML = productos.price;
    descripcion.innerHTML = productos.description;
    categoria.innerHTML = productos.category;
//Mostrarlos en navegador al agregarlos a su padre
    tienda.appendChild(imagen);
    tienda.appendChild(titulo);
    tienda.appendChild(precio);
    tienda.appendChild(descripcion);
    tienda.appendChild(categoria);
    tienda.appendChild(separador);
    })
}
//metodo post utilizando fetch. me permite crear recursos en la api
fetch("https://jsonplaceholder.typicode.com/posts", {
    //indicar que es un metodo de tipo post
    method: "POST", 
    //Creo el body de mi nuevo objeto, siguiendo las mismas llaves de la API existente (userId, title, body)
    body: JSON.stringify({ //books
        userId: 1986, //userid
        title: "Sueñan los androides con ovejas eléctricas?", //book
        body: "Author: Philipe K. Dick" //author.value
    }),
    //Definir headers
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }

})//Fin de mi fetch
//inicio de mis promesas
    .then(response => response.json())
    .then(json => {
        console.log(json)
    })
/**>>>>>>>>>>>>>>>Programación asíncrona (promise) */
//Funcion flecha de tipo async-await
//indico que es una funcion asíncrona con la palabra reservada async antes de los parámetros
const getUser = async () =>{
    //para que se cumpla la promesa, no utiliza then, sino que suamos try.
    //Para errores se sigue utilizando catch.
    try {

        //retardo para que se ejecute de manera asincrona. Tengo que crear una nueva promesa que recibe un setTimeout
        await new Promise(resolve=>setTimeout(resolve, 3000));
        //mi promesa que se ejecuta
        const response = await  fetch ("https://jsonplaceholder.typicode.com/users/4");
        const data = await response.json();
        console.log(data);

    } 
    catch (error){
        console.error("Error inexplicable", error);
    }
}

//Invocar funcion, por favor, que no se nos olvide
getUser();
/**>>>>LocalStorage>>>>> */
//Nos permite crear, modificar, eliminar, guardar objetos de JS de manera local (en el equipo)
//crear un objeto de JS con sus llaves y valores
const user = [
{
    id: 1,
    name: "Daniel",
    apellido: "Maldonado",
    email: "danieldlcm@idr.com",
    posicion: "instructor",
    empresa: "Generation"
},
{
    id:2,
    name:"Diana",
    apellido: "alvarez",
    email: "diana.alv@gmail.com",
    posicion: "java dev",
    empresa: "cofepris"
}
];
//convertir el bjeto creado a notacion json y almacenarlo en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));
//traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
//sessionStorage, local permanece ahi hasta que no se haga una limpieza del nav, en cambio este expira cuando se termina la sesión
console.log(`${user[1].name} con posición ${user[1].posicion}, trabaja en ${user[1].empresa}`); //Output: Diana con posicion java dev, trabaja en cofepris

