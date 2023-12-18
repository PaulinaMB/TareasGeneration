/*
*==Arrays==
*Es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa el array.
*Los array se utilizan para almacenar y organizar datos de manera más eficiente. 
*/
//* Crar un Array
const numeros = [1, 2, 3, 4, 5];
//* Array de cadena de texto 
const comida = ["pizza", "pasta", "quesadillas", "pastel"];
console.log(comida);

//*Array mixto
const mixto = ["perfume", 2, true,{nombre:"Pau"}];
console.log(mixto);

//*Array vacio
const supermercado = [];
console.log ("supermercado");
//* Agregar elementos a mi array
supermercado[0] = "Aguacates";
supermercado[1] = "Fresas";
supermercado[2] = "Limones";
supermercado[3] = "Nesquik de fresa";
console.log(supermercado);

//Otra manera de crear Arrays
const frutas = new Array("Manzana", "Naranjas", "Peras", "Fresas", "Guayabas");

/**
 * Esta sintaxis se puede emplear en arrays porque son objects, es una manera de mandar a llamar a un nuevo objeto de tipo array.
 */
console.log(frutas);
//*Longitud de un array 
console.log(frutas.length);
//*Acceder a los elementos del array, acorde a su índice.
console.log(frutas[3]); //Fresas
console.log(frutas[5]); //undefined

//Modificar un elemento del array por el indice
const cremeria = ["jamón","salchicha", "queso adobera", "queso cotija", "yogurt"];
console.log(cremeria);
// cambiamos un elemento de queso a quesillo
cremeria[2] = "Quesillo";
cremeria[4] = "Danonino del grande";
console.log(cremeria);

//Arreglo de arreglos o multidimensional
console.log("Arreglo de arreglos");

//Estados: Estado de México, Guadalajara, Yucatán, Sonora, Oaxaca, CDMX.

// Platillos: Guajolocombo, torta ahogada, salbutes, dogos, tlayudas, tortas de tamal.

const estados =["Estado de México", "Guadalajara", "Yucatán", "Sonora", "Oaxaca", "CDMX"];

const platillos = ["Guajolocombo", "torta ahogada", "salbutes", "dogos", "tlayudas", "tortas de tamal"];
const menu = [estados, platillos];
console.log(menu [0][1], menu[1][1]);

/**
 * En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.
 */

console.log(`En ${menu[0][1]} el platillo típico es ${menu[1][1]} `)

/**
 * Métodos de array
*Método de cola (queue). Los métodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principio de FIFO (first-in-filrst-out) lo que significa que el primer elemento añadido es el primer elemento eliminado.

*push 
*shift
*unshift

*Metodo de pila (stack). Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (last-in-first-out) que significa el último elemento añadido es el primero en ser eliminado.
*
*push
*pop

*/
console.log("Métodos de arrays");
const ch35 = ["Dani", "Fer", "Mar", "Maara", "Gaby", "Pao", "Enrique"];
console.log(ch35);
//*pop() eliminar el ultimo elemento del array
let popch35 = ch35.pop();
console.log(popch35); //devuelve el dato eliminado
console.log(ch35); //elimina el dato de la lista

//*push () agregar al final del array
let pushch35 = ch35.push("Moni");
console.log(ch35);

//shift() quitar primero del array
let shiftch35 = ch35.shift();
console.log(ch35);
//* unshift agregar al principio del array
let unshiftch35 = ch35.unshift("Dani");
console.log(ch35);

//reverse () cambia el sentido del ordenamiento del array.
let reversech35 = ch35.reverse();
console.log(ch35);

/**
 * investigar:
 * 
 * 
 * sort
 este ordena el propio array cambiando el orden de los elementos.
También devuelve un nuevo array ordenado, pero este usualmente se descarta ya que arr en sí mismo es modificado.
 * 
let arr = [ 1, 2, 15 ];

// el método reordena el contenido de arr
arr.sort();

alert( arr );  // 1, 15, 2

Los elementos son ordenados como strings (cadenas de caracteres) por defecto

Todos los elementos son literalmente convertidos a string para ser comparados. En el caso de strings se aplica el orden lexicográfico, por lo que efectivamente "2" > "15".


 * foreach
 permite ejecutar una función a cada elemento del array
 // para cada elemento ejecuta alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);



 * slice
 arr.slice([principio], [final])
 Devuelve un nuevo array copiando en el mismo todos los elementos desde principio hasta final (sin incluir final). principio y final pueden ser negativos, en cuyo caso se asume la posición desde el final del array.

Es similar al método para strings str.slice, pero en lugar de substrings genera subarrays.
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copia desde 1 hasta 3)

alert( arr.slice(-2) ); // s,t (copia desde -2 hasta el final)
 
 
 * 
 * splice
 en los arrays es que el resto de los elementos se desplace y se ocupe el lugar libre. Lo que esperamos es un array más corto.

Por lo tanto, necesitamos utilizar métodos especiales.

El método arr.splice funciona como una navaja suiza para arrays. Puede hacer todo: insertar, remover y remplazar elementos.

La sintaxis es:
arr.splice(start[, deleteCount, elem1, ..., elemN])
Esto modifica arr comenzando en el índice start: remueve la cantidad deleteCount de elementos y luego inserta elem1, ..., elemN en su lugar. Lo que devuelve es un array de los elementos removidos.
let arr = ["Yo", "estudio", "JavaScript"];

arr.splice(1, 1); // desde el índice 1, remover 1 elemento

alert( arr ); // ["Yo", "JavaScript"]
 
 
 
 * 
 * 
 * 
 * indexof
 arr.indexOf(item, from) – busca item comenzando desde el index from, y devuelve el index donde fue encontrado, de otro modo devuelve -1.
let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true
 * 
 */

