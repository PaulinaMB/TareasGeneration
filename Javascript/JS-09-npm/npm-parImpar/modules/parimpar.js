//Creando funcion para determinar si un numero es par o impar
//Necesitamos exportar esta funcion para que pueda ser utilizada en cualquier parte del proyecto, solamente llamando al script. PAra ello tenemos que agregar las palabras reservadas `export default`
//Nota: no puede ser función flecha, sino por declaración, por commonJS
export default function determinarParImpar (numero) {
    (numero % 2 === 0) ? console.log(`El número ${numero} es par`) : console.log(`El número ${numero} es impar`);
}

