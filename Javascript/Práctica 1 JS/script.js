//comentarios de una sola línea
/*comentarios
multilinea */
//alert("Hola mundo");

//console.log("Este es un mensaje para mi consola");

// var nombre=prompt("Ingresa tu nombre");
// alert("Hola, "+ nombre +" Bienvenido a la ch35");

// var numero1 = parseInt (prompt("Ingresa el primer número:"));
// var numero2 = parseInt (prompt("Ingresa el segundo número:"));

// console.log("suma:" + (numero1 + numero2));
// console.log("resta:" + (numero1 - numero2));
// console.log("multiplicación:" + (numero1 * numero2));
// console.log("división:" + (numero1 / numero2));
// var nombre = prompt("Ingresa tu nombre");

// var edad = parseInt(prompt("Ingresa tu edad"));

// if ( edad < 17 ){

//     alert(nombre + ". Tas chavo, chavo");
// }
// else{
//     alert(nombre + ". Ya te sabes la de chambear");
// }

// var edad = parseInt(prompt("Ingresa tu edad"));

// if ( edad < 18 ){

//     alert(nombre + ". Tas chavo, chavo");
// }
// else if (edad>=18 && edad <=65){
//     alert(nombre + ". Ya te sabes la de chambear");
// }
// else{
//     alert(nombre+"tas viejito");
// }

/* scope es el alcance de nuestras variables*/
// var, let, const la diferencia es el alcance. var tiene un alcance global
/*let tiene un alcance local
const se mantiene sin nigun cambio*/
/*string: cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied: no esta asignado o definido
*/
//SE ESTÁ USANDO CAMEL CASE

// let nombre = "Daniel";
// let invitadxsExtras = 2;
// let edad = 24;
// let esMayorEdad = true;
// let invitadxEspecial = null;
// let horaDeSalida = undefined;

/*Todas nuestras variables deben ser declaradas con nombres específicos y claros, sin espacios, no deben iniciar con numeros */

// console.log("nombre");
// document.write(nombre);

/*Encasillamiento o tipado
es la clasificación de nuestros datos del programa, distintas casillas para poner separadas las variables. sirve para proyectos grandes. para mantenimiento del codigo ya que lo hace mas legible y facil de entender. prevención de errores para reducir la probabilidad de los mismos.
mejora el rendimiento de nuesto programa*/

// let numero = 15;
// let texto = "hola";

/*con encasillamiento */

// let numeroEncasillado= number = 5;
// let textoEncasillado= string = "hola";

/*typeof: preguntamos el tipo de dato. palabra reservada para saber que tipo de dato tenemos. nos ayuda para hacer cambios o modificaciones.  */

// console.log(typeof(nombre));

// let funcionNumber = console.log (typeof Number (nombre));

// metodoParseInt = console.log(typeof parseInt (nombre));

// metodoParseFloat = console.log(typeof parseFloat (nombre));

/*parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambas nos ayudan en este cambio */

/*conversion de number a string 
 console.log(typeof String(edad));
 console.log(typeof edad.toString());

conversión de boolean a number

let numero = Number(esMayorEdad);
console.log(typeof(numero));

let texto = String(esMayorEdad);
console.log(typeof(texto));
console.log(typeof esMayorEdad.toString()); */

// let negación = !esMayorEdad;
// console.log (negación):

/*concatenar basicamente unir strings*/

let saludo = "Hola humanx ";
let frase = "el futuro es hoy";

texto = saludo + frase;

document.write(texto);

console.log(texto);

/*hacer una receta para hot cakes 12 personas declarar vars con ingredientes que lleven la cantidad primero como string, luego a number, luego a boolean */

/* Tipos de datos
< - String (cadenas de texto)
< - Number (numéricos)
< - Booleans (booleanos: true or false)
< - Null (nulos)
< - Undefined (Indefinidos)
< - Objects (Objects)
< - Objects (Arrays)


console.log() para ejecutar algún programa no necesito ponerlo. nos permite visualizar en consola del navegador el codigo de JS

console.warn() muestra un mensaje de advertencia
console.error(); Muestra un mensaje de error.
console.table();


*/

let firstName;
firstName = "Daniel";
let lastName;
lastName = "Maldonado";

console.log(firstName + " " + lastName); 
console.log("Mi nombre es " +firstName +"y mi apellido es "+lastName)

/*ECMAScript 6 (ES6). Interpolación de cadenas
<- backticks `
para variables ${}
texto para string
*/
let age=37;
console.log(`Mi nombre es ${firstName},
mi apellido es ${lastName}
y tengo ${age} años`)


console.warn(`Precaucion, no es buena práctica dejar sin punto y coma`);

console.error(`Status 404:failed`);

/*
- Array. Se traduce como matriz o arreglo. es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
- Los arrays se pueden manipular mediante métodos específicos.
- Los elementos de un array se contabilizan como índices empezando por índice 0, por lo cual el primer elemento del array posee el índice 0.
- Un array posee n cantidad de elementos.
- Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato.
*/
let arreglo1 = []; //array vacío
console.log(`Array vacío ${arreglo1}`);
//los elemento de un array se separan mediante comas
let cars = ["volkswagen", "BMW","Mazda", "Kia"]; //array de string
console.log(cars);
//longitud e indice son diferentes, la longitud (length) es el numero de elementos y el índice corresponde a cada elemento a partir del cero.

console.log(typeof(cars));

let salaries = [15000, 12000, 18000, 25000, 28000, 10000,18500, 10200,20500,15300, 17000, 17200]
console.log(salaries.length);

/* Objetos
los objetos son tipos de datos en JS con una estructura definida que nos permite almacenar informacion mediante llaves (claves) y valores.
Su sintaxis es la siguiente
    const object = {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)
    }
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
    firstName: "Rey David",
    lastName: "Martinez",
    age: 29,
    country: "Mexico"
}
console.log(employee);

//mostrando mi array como table
console.table(cars);

//mostrando mi objetivo como tabla
console.table(employee);