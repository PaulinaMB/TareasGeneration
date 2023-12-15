/**
 * Operador
 Es un signo que especifica qué debe efectuar una determinanda operación.

 * Operadores aritméticos (+, -, *, /, %, ++, --)
 * Operadores de asignación (=)
 * Operadores lógicos (&&, ||, !)
 * Operadores de comparación (==, === {Igualdad estricta}, <, >, !=, !==, <=, >=)
 * Operadores de cadena {hacer cambios en los strings} (+ {concatenar}, toLowerCase, toUpperCase, trim, toString, concat)
 */

 /**
  * Operadores aritméticos
  (+):suma, se utiliza para sumar dos números
  (-): resta, se utiliza para restar un número de otro.
  (*): multiplicación, se utiliza para multiplicar dos números.
  (/): división, se utiliza para dividir un número entre otro.
  (%): residuo, se utiliza para obtener el resto de una división.
  (++): incremento de una unidad la cantidad o número.
  (--): Disminuya en una unidad la cantidad o número. 
  */

  let number1 = 10;
  let number2 = 8;

  addition = number1 + number2;
  substraction = number1 - number2;
  multiplication = number1*number2;
  division = number1 / number2;
  remainder = number1%number2;
  increment =number1;
  increment ++;
  decremento =number2;
  decremento --;

  console.log(addition);
  console.log(substraction);
  console.log(multiplication);
  console.log(division);
  console.log(increment);
  console.log(division);
  console.log(increment);
  console.log(decremento);


 //Ejemplo de como aplicar un descuento 
  let precioReal = 1000;
  let porcentajeDescuento = 20;

  let cantidadDescuento = (precioReal*porcentajeDescuento)/100;

  let precioConDescuento = precioReal - cantidadDescuento;

  console.log("Precio Real:$" + precioReal);
  console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");
  console.log("Precio con descuento aplicado: $" + precioConDescuento);

/*Operadores de asignación
 (=): Este opreador no compara, lo que hace es asignar un valor a una variable.

*/

let fruits = "apples";

/*Operadores de comparación
(==): Igualdad, compara si nuestros valores son iguales.
 */

let number3 = 10;
let text = "10";

console.log(number3 == text);
/*(===): Igualdad estricta, comprueba si tienen el mismo valor y si el tipo de dato es igual.
 */
console.log(number3 === text);

/* (!=): Desigualdad o distinto, verifica si dos valores no sean iguales y de ser necesario realiza la conversión.
 * 
 */
let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja != precioMaximo){
    console.log("El precio es diferente al límite máximo");
}
else{
    console.log("El precio es igual límite máximo");
}
//En este ejemplo convertimos el tipo de dato :P
let number4 = 10;
let number5 = "10";

if (number4 != Number(number5)){
    console.log("Son diferentes")
}
else{
    console.log("Son iguales")
}



/* (!===) Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) también verifica que tengan el mismo tipo de dato.
 * 
 */
let number7 = 41;
let number8 = 50;
if (number7 !== number8){
    console.log("Los valores son diferentes");
}
else{
    console.log("Los valores son iguales");
}

/**
 * (>): Mayor que, básicamente nos indica si un valor es mayor que otro.
 */

let puntuacionFinal = 85;
let puntuacionRequerida = 102;
console.log(puntuacionFinal>puntuacionRequerida);

/*(<): Menor que, nos indica si un valor es menor que otro*/

let anios = 20;
let edadLimite = 30;
console.log(anios<edadLimite);

/*(>=): Mayor o igual que y nos dice si un valor es mayor o igual a otro. */

let edad = 18;
let edadNecesaria = 18;
console.log(edad>=edadNecesaria);

/*(<=): Menor o igual que y nos dice si un valor es menor o igual a otro. */

let temperatura = 25;
let temperaturaMaxima = 40;
console.log(temperatura<=temperaturaMaxima);

/*ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o hay alguno que sea mayor que otro*/
// let eligeNumber = parseInt(prompt("Ingresa un numero"));
// let eligeNumber2 = parseInt(prompt("Ingresa un segundo numero"));

// if (eligeNumber==eligeNumber2){
//     console.log("Son numeros iguales");
// }
// else if(eligeNumber<eligeNumber2){
//     console.log("El primer numero es menor que el segundo");
// }
// else{
//     console.log("El primer numero es mayor que el segundo");
// }



// ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
// let eligePalabra = prompt("Ingresa una palabra");
// let eligePalabra2 = prompt("Ingresa una segunda palabra");
//     console.log(eligePalabra === eligePalabra2);

/**Operadores lógicos
 * (&&): And, se utiliza cuando dos condiciones deben cumplirse. 
 */

let mayoridaDeEdad = 18;
let tieneIdentificacion = true;
if (mayoridaDeEdad>=18 && tieneIdentificacion){
    console.log("Puedes rentar el salón");
}
else{
    console.log("No lo puedes rentar");
}
/* (||): Or, se utiliza cuando se debe cumplir una condición u otra */

let esPrime = false;
let descuento = true;
if(esPrime || descuento){
    console.log("Califica para descuento");
}
else{
    console.log("No se puede aplicar descuento");
}
/**(!) not, se utiliza para negar el valor de una condición

*/
let esDiaLibre = false;
if(!esDiaLibre){
    console.log("Se trabaja");
}
else{
    console.log("Descansito");
}

/**Operadores de cadena
 * Palabras que dicen cómo se va a utilizar
 * toLowerCase: Cambia la cadena de texto a minúsculas.
 * 
 */

let mensajeUsuario = "Bienvenido a la tierra";
let cambioMinusculas = mensajeUsuario.toLowerCase();
console.log(cambioMinusculas);

/**
 * toUpperCase: Hace el cambio de nuestro string a mayúsculas.
 */

let mensajeUsu = "Tengo sueño";
let cambioMayusculas = mensajeUsu.toUpperCase();
console.log(cambioMayusculas);


/**
 * trim: quita los espacios
 */
let aviso = "  CH35  Rifa    ";
let sinEspacios = aviso.trim();
console.log(sinEspacios);

/**
 * toString: convierte un tipo de dato number en string
 */

let numero10 = 31;
let cambioString = numero10.toString();
console.log(cambioString);

/**
 * concat: Concatenar, juntar 
 */
let nombreP = "Paulina";
let apellidoP = "Mendoza";
let nombreCompleto = nombreP.concat(" ",apellidoP);
console.log(nombreCompleto);

/**
 * Expresiones: 
 * expresion aritmetica
 let operacion = 14+ 25*12; combina la suma con multiplicacion

 * expresion de cadena
let notificacion = "Casi, " + "Anio nuevo"; expresion concatenando.

* expresion logica
let esMayorDeEdad = (23 > 18) && (23 < 65); tiene operadores logicos y de comparacion

* expresion de asignacion

let frasco = "chocolates"; asigna el valor a la variable frasco de chocolates.

*/

let harina = true;
let huevo = 2 ;
let azucar = true;
let mantequilla = false;
let nutella = true;

if (harina && azucar && huevo>=2){
        console.log("se pueden hacer");
    }
else{
        console.log("no se puede");
}
   

let siHay = true;

    if (siHay == true) {
        console.log("¡Genial! Tienes todos los ingredientes para hacer hotcakes.");
        console.log("Comienza mezclando la harina, los huevos y la leche, luego añade la mantequilla derretida.");
        console.log("Calienta un sartén y vierte un poco de la mezcla para hacer los hotcakes.");
        console.log("Hotcakes listos, ¡a disfrutar!");
      } else {
            console.log("Tssss, t faltan ingredientes para hacer hotcakes.");
            console.log("No es posible hacer hotcakes sin todos los ingredientes.");
            console.log("Ve a conseguirlos, CORREEEE");
      }


