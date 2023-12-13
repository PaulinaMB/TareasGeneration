//Programa para convertir minutos a segundos
/*function convertidor(m){
    m=parseInt(prompt("Ingrese un número"));
    let resultado=m*60;
    return console.log(`Tu numero de la suerte convertido a segundos es: ${resultado}`);
}

convertidor ();
*/
//Programa para hacer una funcion que tome un argumento numerico y lo incremente en uno
/*
function incrementar(x){
    let resultado = x + 1;
    return resultado;
}

incrementar(5);

console.log(`El numero incrementado en una unidad es: ${incrementar(5)}`);

*/

//Area del triangulo

function area(base, altura){
    return (base*altura)/2
}

console.log(area (5,6));

//Edad en días
/*function calEdad(age){
    return age*365;
}
*/
const calEdad = (age) =>{
    return age*365;
}

console.log(calEdad(20))

function circuitPower(voltage, current){
    return(voltage*current);
}
console.log(circuitPoer(5,6));

