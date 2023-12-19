/**
 * Manipulación del DOM
 * Leer y traer nodos del árbol del DOM.
 * propiedad a usar:
 * document.getElementById (trae elementos por Id)
 * Primero entra al doc y luego trae algo
 * document.getElementsByClassName (trae elementos por Class)
 * document.getElementsByTagName (trae elementos por Etiquetas)
 * 
 * Nuestros elementos a llamar deben estar como id, o clase
 */

//Traer elementos por Id

/*Para poder acceder a los nodos vamos a guardar la info dentro de variables, como estas vars no van a cambiar porque solo almacenarán un nodo. como no queremos que cambien será const */
const titulo = document.getElementById ("title1");//guardar el nodo para manipularlo. dentro de los parentesis es lo que voy a traer, no lleva # .
console.log(titulo); //muestra info del nodo debe aparecer el h1 con todo lo que conforma al elemento.
console.log(titulo.innerText); //trae un string, el texto que vive dentro del objeto id

//Elementos por clase
const titulos = document.getElementsByClassName("title");
console.log(titulos); //muestra elementos pertenecientes a esa clase, podemos ver las propiedades aparecen el innerText y así

//escribir un cole log una variable y pasarle un metodo
console.log(titulos.length); //devuelve la longitud de elementos de la clase. podemos acceder a cada elemento de la clase usando índices
//podemos ver el tipo solo para comprobar de elementos
console.log(typeof title); //esto es repaso. muestra que es un object porque es una coleccion de arrays
//Llamar por etiquetas
const tituloH3 = document.getElementsByTagName("H3");
console.log(tituloH3);
console.log(tituloH3[0].innerText); //acceder a uno de estos h3 y le pongo innertext para saber lo que contiene
//formas de llamarlos y manipularlos, pero hay otra manera enfocada en CSS:

/*Métodos para llamar elementos mediante selectores de CSS. se usa para procesos más específicos y la sintaxis es querySelector.
Se tienen dos:
*document.querySelector("selector"); el selector debe llevar la sintaxis correspondiente ya sea #, ., <>
*document.querySelectorAll(). Seleccionar cualquier elemento que se especifique.

Siempre van a traer el primer elemento con el selector indicado
*/
//querySelector
//guardar dentro de una clase , con fines practicos una constante y traer un elemento mapeado por la etiqueta y retorna el primer elemento que deciende del nodo seleccionado
const query = document.querySelector("#title4"); //contiene el nodo con el title4
console.log(query.innerText); //muestro en consola el texto que vive en el nodo con id title4.
//puedo traer todo lo que esta dentro de la clase, como a continuación:
const queryClass = document.querySelector(".title");
//en teoria deberia mostrar un array, pero me muestra todo, solo me arroja el primer elemento del array
console.log(queryClass);
//ahora sí todos los elementos:
//querySelectorAll
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll); //trae todos los elementos pertenecientes a la class 

//como nosotros podemos manipular nuestro dom podemos hacerlo

/**
 * guardamos en una const el titulo con el title1
 * 
 */
//manipular elementos del DOM (styles de CSS) con JS
//Podemos establecer estilos de 3 maneras. surge una 4ta posibilidad, mediante la manipulacion del DOM
//llamar constante y pasarle una propiedad, como quiero modificar stilo se llama style, puedo modificar cualquier valor mandandolo aca. ver que se pone atributo.
//ir a insoeccion de elementos, y ver que en línea se pudo ese estilo
titulo.style.textAlign = "center";
titulo.style.color = "#5058F2";
//cambiar el texto dentro del elemento, manipular el texto de un elemento.
const titulo2 = document.querySelector("#title2");
//mandamos a llamar la const y le ponemos innertext
titulo2.innerText = "Sesión de Manipulación del DOM. CH35";
titulo2.style.color = "#F23D3D";
//ya manipulamos estilos, el texto
/**
 * Métodos para crear y agregar elementos en el DOM.
 * Este proceso se divide en dos partes: 1. crear el nodo y 2. agregar el nodo.
 * -Crear nodos: a partir de elementos, etiquetas o etiquetas
        document.createElement("element") --> Crea elementos a  partir de etiquetas.
        document.createTextNode("texto") --> cra texto dentro de las etiquetas.
*/
const nodo1 = document.createElement("h4");
//ya cree el nodo, vive pero en ningun lado, solo ocupara un  lugar en la memoria. Falta gregarlo.
const imgNodo = document.createElement("img");
/*
Agregar nodos: 
*mandamos a llamar el elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado.

a partir de elemento padre (parte de html la etiqueta donde vivira el nuevo nodo). con el div podemos agregar porque no tiene nada dentro. 
 - parentElement.appendChild(const); //nos interesa +++
 - parentElement.append(const) //no hace referencia  un nodo hijo
 - parentElement.insertBefore(const);
 - parentElement.insertAdjacentElement(const);

*/
//puedo traer el elemento padre a traves de etiqueta, a través de clase y a través de id.
// Primero. obtengo el elemento padre por tag, class, id.
const parentElement = document.getElementById("dif");
//ya creamos el nodo un h4 y una img, ahora los vamos a agregar. insertar nodos en el elemento padre. puedo insertar nodos pero volvemos a lo mismo, el h4 y la img no tendrán nada, así que primero tenemos que ponerles algo mediante .
//crear el texto que vivirá en el nodo 1
const textNodo1 = document.createTextNode("Imagen agregada desde el DOM");
//meter el texto en el nodo 1
nodo1.appendChild(textNodo1);
//insertar nodo1 en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "201226";
//Agregando imagen
//inserto el imgNodo en el elemento padre para sefinirlo posteriormente
parentElement.appendChild(imgNodo);
//el problema es que las imgs no van a llevar texto, las props de la imgn son src, alt, wifth, etc, pero no podremos poner eso
//accedo a las props de la imagen
imgNodo.src = "./src/assets/octocat.jpg";
imgNodo.alt = "Octocat-github";
imgNodo.style.width = "300px";
/*
Otra forma de leer y modificar nodos. es a través de document.outerHTML (leer)
node.innerHTML (escribir sobre el nodo)

*/
const elementoOuter = titulo2.outerHTML; //dentro va a estar titulo dos y le vamos a pasar oterHTML que nos va a permitir leer
console.log(elementoOuter); 
//tengo guardado dentro de una const el titulo2 y ahora tengo otra const elementOuter y a esta le pudse una prop de elementOuter, otra forma de leer su contenido. si quiero modificar nuevamente el texto se hace como: 

titulo2.innerHTML = "Manipulación del DOM - CH35"; //nuevo texto que quiero que aparezca.

/*
Vamos a poner en el html un enlace para que no nos saque, y tener que abrir y cerrar el live server
*/
