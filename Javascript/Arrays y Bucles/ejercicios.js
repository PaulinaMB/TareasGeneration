/*
*Ejercicios
*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:
Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/
let temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18]; //Definimos un array con las temperaturas

//Definimos una función que hará la conversión de T en celsius a T en Fahrenheit
function celsiusToFahrenheit (C){  
    return  C*(1.8) + 32
}

let save=[]; //Declaramos un array vacío donde almacenaremos las T en Fahrenheit que calcuremos en el ciclo for.

for (i = 0; i<=(temperaturasCelsius.length-1); i++){
    let  temperaturasFahrenheit = celsiusToFahrenheit(temperaturasCelsius[i]); //Llamamos a la función y la evaluamos en la posición i del array de celsius, esta info se guarda en una variable.
    let ambos = [temperaturasCelsius[i],temperaturasFahrenheit]; //Creamos un array que mostrará la temperatura en celsius de la posición i del arreglo donde proviene y el resultado de la variable anterior. El que sea del tipo let permite que se quede almacenado ese valor.
    console.log(ambos); //Imprime en la consola el array donde esta la T en celsius y la T en Fahrenheit.
    save.push(temperaturasFahrenheit); //Va a guardar la T en Fahrenheit de cada iteración del ciclo for.
}
console.log(`Las temperaturas en grados Celsius a convertir son: ${temperaturasCelsius}`); //Imprimimos las temperaturas en celsius
console.log(`Las temperaturas en grados Fahrenheit son: ${save}`); //Imprimimos las temperaturas en fahrenheit.




/*
*Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/
//Declaramos una variable

//Hacemos un ciclo for donde la variable irá sumando 
//let serie = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

let suma = 0;
for (let i = 1; i <= 10; i++){
    suma += i;
}

console.log(suma);

/*
*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/
/*
let primo = parseInt(prompt("Ingresa un número positivo en un rango no mayor a 50"));

let n=3;
let q;
function contadorPrimos(n,q){
    return q = n%(n++);
}

if (primo%2 >= 1 && primo!=1){ //Si el residuo del número entre dos es mayor a cero y no es uno, entonces entrar a un ciclo para probar si hay residuo con los siguientes primos (3, 5, 7,11,13...)
    q = primo%n;
    while (q<1){ /*Este ciclo sacará el residuo entre el número y un contador (iniciado en 3), este contador seguirá probando con los demás números primos, parará hasta que el residuo sea diferente de cero  */
/*
        n++;
        q = primo%n; //operación para sacar residuo
        if (q==0){          //si es menor a cero es primo  
        alert("El número no es primo");
        break;
        }
        else if (q >= 0){ //si es igual a cero no es primo
        alert("El número no es primo")
        break;
        }
    }
}
else if (primo == 2){
    console.log("El número es primo");
}
else{
    console.log("No es primo");
}

*/


/*
*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).
*/

let saveFibonacci=[];

for (let i = 0; i <= 10; i++){
    if (i==0){
        fibonacci = i;
        console.log(fibonacci);
        n0=fibonacci;
        saveFibonacci.push(n0);
    }
    else if (i>0){
        fibonacci = i+(i-1);
        n2=fibonacci;
        console.log(fibonacci);
        saveFibonacci.slice([0],[0])
        saveFibonacci.push(n2);
        saveFibonacci.slice([0],[i])
    }
}

/*
Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/