/*Funciones. Son bloques de código con instrucciones que se pueden reutilizar las veces que sean necesarias
Algunas funciones reciben parámetros y otras no reciben parámetros */

//Funcion que permita saludar
function saludar(){
    console.log("Hola desde una función");
}

//Ejecutar la función con el nombre de la función y los parámetros
saludar();

//Hoisting. característica de una funcion que nos permite invocarla desde antes de su inicializacion, es decir, se puede invocar antes del bloque de código o después.

//se invocan en la linea 10 y 18
function saludar(){
    console.log("Hola invocando la función con hoisting");
}
saludar();

//funciones que retornan algo 
//para funciones que retornan algo (un string, una operacion, una variable, etc), necesitamos indicarle al código de la función que vamos a retornar mediante la palabra return

function greeting(){
    return "Hola desde una función que retorna";
}
console.log(greeting());

//funcion que retorna y recibe parámetros

function sumar(x,y){
    return x + y;
}
let resultado = sumar (255, 245);
console.log(`El resultado de sumar x + y es ${resultado}`);

//funcion para calcular el cuadrado de un numero
function calcCuadrado (numero){
    return numero*numero;
}
let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//---funciones flecha (arroy function)---. es una manera de declarar una funcion por declaracion, sintetizando código y haciendolo mas legible.

//funcion flecha para calcular el cubo de un numero
const calcCubo = (number) =>{
    return number*number*number;
}
let resultCubo = calcCubo(3);
console.log(resultCubo);
//funciones anonimas. son un tipo de funciones que se declaran sin nombre de funcion y se alojan en el interior de una variable. se hace referencia a ellas cada vez que la utilicemos
//las funciones anonimas no permiten el hoisting (no se puede invocar antes de inicializarlas)

const mensaje=function(){
    return "Este es un msj desde una función anónima";
}
console.log(mensaje());

//callbacks. o funciones de retrollamadas. es pasar una funcion B por parámetro a una función A, de modo que la función A pueda ejecutar esta funcion de forma generica desde su codigo.
//funcion B

const functionB = function () {
    console.log("Ejecutando función B");
}
//funcion A que mandará a llamar a la funcion B
const functionA = function (callback){
    callback();
}
functionA(functionB);
//investigar async - await

