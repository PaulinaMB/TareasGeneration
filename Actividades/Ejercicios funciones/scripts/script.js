//Programa para convertir minutos a segundos

console.log("Primer ejercicio");

function convertidor(m){
    return m*60;
}

let m = parseInt(prompt("Ingresa tu número de la suerte: "));

console.log(`Tu numero de la suerte convertido a segundos es: ${convertidor (m)}`);

//Programa para hacer una funcion que tome un argumento numerico y lo incremente en uno


console.log("Segundo ejercicio");
function incrementar(x){
    return x+1;
}

let n = parseInt(prompt("Ingresa un número para incrementarlo en uno: "));

console.log(`El número incrementado en una unidad es: ${incrementar(n)}`);


//Area del triangulo

console.log("Tercer ejercicio");
function area(base, altura){
    return (base*altura)/2
}

console.log(`El área de un triángulo con base de 5 y altura de 6 es: ${area (5,6)}`);

//Edad en días

console.log("Cuarto ejercicio");
const calEdad = (age) =>{
    return age*365;
}

let edad = prompt("Ingresa tu edad en años: ");
console.log(`Tu edad en días es: ${calEdad(20)}`);

/*
Create a function that takes voltage and current and returns the calculated power.

*Examples*

    circuitPower(230, 10) ➞ 2300
    circuitPower(110, 3) ➞ 330
    circuitPower(480, 20) ➞ 9600

*/
console.log("Quinto ejercicio");

function circuitPower(voltage, current){
    return voltage*current;
}
console.log(`La potencia con un voltaje de 230 y una corriente de 10, es: ${circuitPower(230,10)}`);

/*
**6. Return Something to Me!.**

Write a function that returns the string "something" joined with a space " " and the given argument a.

*Examples*

    giveMeSomething("is better than nothing") ➞ "something is better than nothing"
    giveMeSomething("Bob Jane") ➞ "something Bob Jane"
    giveMeSomething("something") ➞ "something something"
*/
console.log("Sexto ejercicio");

function something(oracion){
    return oracion + " something";
}
let oracion = prompt("Ingresa una oración a la cual le quieras añadir un 'something'");
console.log(something(oracion));

/*
**7. Sum of Polygon Angles.**

Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

*Examples*

    sumPolygon(3) ➞ 180
    sumPolygon(4) ➞ 360
    sumPolygon(6) ➞ 720

*/
console.log("Séptimo ejercicio");

function angulos(lados){
    return (lados - 2) * 180;
}

let lados = prompt("Ingresa el número de lados de un polígono (ejemplo un cuadrado): ");
console.log(`La suma de los ángulos internos es: ${angulos(lados)}`);

/*
**8. Convert Hours and Minutes into Seconds.**

Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

*Examples*

    convert(1, 3) ➞ 3780
    convert(2, 0) ➞ 7200
    convert(0, 0) ➞ 0

*/

console.log("Octavo ejercicio");
function horasAndMinutos (horas,minutos){
    return horas*3600 + minutos*60;
}
let horas = prompt("Ingresa un número de horas que quieras pasar a segundos: ");
let minutos = prompt("Ingresa un número de minutos que quieras sumarle a las horas que pusiste con anterioridad: ");
console.log("prueba");
console.log(`Tus horas y minutos convertidos a segundos son ${horasAndMinutos(horas,minutos)}`);