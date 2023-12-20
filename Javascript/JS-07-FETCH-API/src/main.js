//Programación sincrónica
function two () {
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


/**
 * Trabajando con promesas mediante Fetch API
 */
const url = "https://jsonplaceholder.typicode.com/users";
//usando fetch
fetch(url)
//si se cumple la promesa, vamos a traer los datos de la API y se convertirán en tipo json para  poder mostrarlos en consola
    .then(data => data.json())
    .then(data=>{
        console.log(data); //mostrando en consola todos los usuarios de la api
        console.log(data[0].name); //mostrando en consola el usuario con el indice cero y trayendo solamente su nombre
    })

    .catch(error => console.error("¡Upes, algo salió mal", error)); //mensaje de error
