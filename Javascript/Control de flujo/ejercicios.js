// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
console.log("Ejercicio 1");

let edad = 23;

if(edad>=18){
    console.log("Ya estás viejitx");
}
else{
    console.log("Te falta vivir :P");
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
console.log("Ejercicio 2");

let n = 73;
if(n%7 ==0 && n%8 ==0){
    console.log("verdadero");
}
else{
    console.log("falso");
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

console.log("Ejercicio 3");
let m = 7;
if(m%4 ==0 || m%9 ==0){
    console.log("verdadero");
}
else{
    console.log("falso");
}


/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
console.log("Ejercicio 4");
let catpeli = "romance";
switch (catpeli){
    case "accion":
        console.log("John Wick");
        break;
    case "drama": 
        console.log("Taxi Driver");
        break;
    case "comedia": 
        console.log("Strays");
        break;
    case "romance":
        console.log("Your name");
        break;
    case "suspenso":
        console.log("Nowhere");
        break;
    case "terror":
        console.log("VHS 85");
        break;
    default:
        console.log("El viaje de Chihiro")
    break;
}



/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
console.log("Ejercicio 5");
let operacion = 1;
if(operacion = 1){
    console.log("Retirar dinero");
}
else if(operacion = 2){
    console.log("Transferencia");
}
else if(operacion = 3){
    console.log("Transferencia");
}
else if (operacion = 4){
    console.log("Transferencia");
}
else {
    console.log("Opcion incorrecta");
}


/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

function convertirDivisas(opcion) {
    let opcion = prompt("Ingrese una opción: ");
    switch (opcion) {
        case 1:
            return "A dolar estadounidense";
        case 2:
            return "A euros";
        case 3:
            return "A yen japones";
        case 4:
            return "A libre esterlina";
        case 5:
            return "A franco suizo";
        default:
            return "Opcion incorrecta";
    }
}

console.log(convertirDivisas(opcion));