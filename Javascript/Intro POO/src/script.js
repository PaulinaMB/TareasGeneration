/**
 * Paradigmas de programación 
 * Programación imperativa: se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada.
 * Programación basada en eventos: click, scroll, abrir un archivo, etc. Se basa en la gestión y respuesta de eventos.
 * Programación declarativa: Explicar lo que queremos obtener.
 * Programación orientada a objetos: Toma cierta informacion o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus características (propiedades o atributos) y sus comportamientos o acciones (metodos).
 * 
 * 
 */
//Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias (hacerlo presente) de este tipo de objeto.
class persona{
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";
//objetos
//El constructor es una fcn especial, cuya fnalidad es la de construir o instanciar objetos
//para inicializar un objeto es necesario definir un constructor que tomará los atributos.

//clases= molde Objeto= gomita constructor=chefisita atributos= ingredientes metodos=comportamientos

constructor (nombre, apellido, edad, email, telefono){
    //respetar orden por como fueron declarados
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
}
//el constructor va a tomar en cuenta solo a atributos y no a los metodos


comer(){
    console.log("Bon apetit");

}//metodo comer

bailar(){
    console.log("Bailecito");
}

pintar(){
    console.log("Haz sentir orgulloso a Bob Ross");
}

dormir(){
    console.log("A hacer la mimición")
}


mostrarInfo(){
    console.log("Nombre: ", this.nombre);
    console.log("Apellido: ", this.apellido);
    console.log("Edad: ", this.edad);
    console.log("Email: ", this.email);
    console.log("Telefono: ", this.telefono);
}
}
//materializar el objeto
let usuario1 = new persona ("Fernanda", "Ramos", 31, "fer@gmail.com", "5574123698");

let usuario2 = new persona ("Maara", "Lomeli", 29, "maara@gmail.com", "5598653212")

let usuario3 = new persona ("Daniel", "Cruz", 37, "dani@gmail.com", "5598653213")
let usuario4 = new persona ("Mariana", "Valladolid", 28, "mar@gmail.com", "5598653214")
let usuario5 = new persona ("Gaby", "Cortes", 29, "gaby@gmail.com", "5598653215")

console.log(usuario1); //imprimir objeto completo
console.log(usuario4.email); //imprimir un atributo en específico
console.log(usuario1.email, usuario2.email, usuario3.email, usuario4.email, usuario5.email);

usuario4.comer(); //Invocar el metodo 

usuario2.dormir();

usuario5.pintar();

usuario1.mostrarInfo();

console.log(usuario3.telefono, usuario5.apellido);

//Cuatro pilares de la programacion orientada a objetos
/*Herencia
Polimorfismo
Encapsulamiento
Abstracción*/
//Herencia: nos permite heredar a clases inferiores para poder optimizar el programa 

class arrendadxr extends persona{ //subclase
    capacidad = 0; //atributos
    costo = 0;
    nombreLugar = "";

    constructor(nombre, apellido, edad, email, telefono,capacidad,costo,nombreLugar){
        super(nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar =nombreLugar;
    }


mostrarInfo(){
    console.log("Capacidad" , this.capacidad);
    console.log("Costo", this.costo);
    console.log("Nombre del lugar", this.nombreLugar);
}
}

let arrendadxr1=new arrendadxr("Rocio", "Hernandez",29,"rocio@gmail.com", "5541236987", 100, 50000, "salon G");

/*class arendadxrGuadalajara extends arrendadxr{

}*/

console.log(arrendadxr1);
console.log(arrendadxr1.costo);
arrendadxr1.mostrarInfo();

class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido();


  /**
   * Polimorfismo: Permite que objetos de diferentes clases resondan a la misma clase o método.
   * Tener objetos de diferentes tipos que pueden ser manipulados en común. Nota: La posibilidad de realizar cambios en distintos objetos que comparten atributos en común.
   */
class producto {
    marca = "";
    precio = 0;

    constructor(marca,precio){
        this.marca=marca;
        this.precio=precio;
    }

    mostrarDescripcion (){
        console.log("Marca ");
        console.log("Precio");
    }
}

let producto1 = new producto("ASUS", 15000);

/**
 * Encapsulamiento
 * Nos va a ayudar a ocultar cosas o solo mostrar cosas que querramos.
 * Ocultar la implementación de un objeto y solo mostrar los datos necesarios
 */

class Usuario{
    #contraseña;

    constructor(userName, correo, contraseña){
        this.userName = userName;
        this.correo = correo;
        this.contraseña = contraseña;
    }
}
/*
verificarContraseña(contraseña){
    return this.#contraseña === contraseña;

};*/

//abstraccion no es nada mas que traer objetos del mundo real y poder aplicarlos a la programación mediante clases, métodos, constructores y objetos.

//objetos de tipo JSON
/**
 * 
 //Nos va a yudar a que sea de facil interpretacion, la mayoria de los datos son string. El sistema sea más rápido.

 //los objetos de tipo Json en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son más flexibles y generalmente se ejecutan con fetch.
 */
 let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);

//Principios solid INV PATRONES DE DISEÑO
/**
 * 1. Principio de Responsabilidad única (Single responsability principle SRP):ir de lo general a lo mas especifico, clase general no debe tener cambio, las subclases sí pueden. Esta tarea específica no debe ser modificada.
 * Una clase debe tener asignada una tarea o responsabilidad especifica y esta no deberia de cambiar
 * 
 * 2. Principio abierto/cerrado (open/closed principle OCP). Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma
 * 
 * 3. Principio de sustitución de Liskov (Liskov Sustitution Principle LSP): los objetos de una clase hijo pueden sustituit objetos de una superclase (clase padre).
 * 
 * 4. Principio de segregación de interfaces (Interface Segregation Principle ISP): No crear interfaces que no vamos a utilizar. Delimitar los métodos que necesito y dejar fuera los innecesarios.
 * 
 * 5. Principio de inversion de dependencias (Dependency Inversion Principle DIP)
 * 
 * 
 * Investigar el 5to principio sólido
 */

/*programa que conste de una clase llamada alumno que tenga como atributos nombre y calificación. Definir los metodos para inicializar sus atributos (constructor) , imprimirlos y mostrar un mensaje con el resultado de si la calificación es aprobatoria o no.
Atributos
nombre
calificacion

constructor
atributos

metodos 
imprimirCalificacion
evaluacion

la calificacion aprobatoria es de 6
if para evaluar la calificación 
*/

//clases= molde Objeto= gomita constructor=chefisita atributos= ingredientes metodos=comportamientos

class calificaciones{
    nombre = "";
    calificacion = 0;

    //constructor
    constructor (nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }


    //metodo
    mostrarCalificacion(calificacion){
        console.log("Nombre: ", this.nombre);
        console.log("Calificación: ", this.calificacion);
        
            if (calificacion>=6){
                console.log("Excelente");
            }
            else{
                console.log("Falta practicar");
            }

    }
}

//materializar el objeto
let alumno1 = new calificaciones ("Paulina", 8);

console.log(alumno1); //imprimir objeto completo

//console.log(alumno1.nombre); //imprimir un atributo en específico


alumno1.mostrarCalificacion(); //Invocar el metodo 

 
