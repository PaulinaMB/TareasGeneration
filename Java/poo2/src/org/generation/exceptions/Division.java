package org.generation.exceptions;

public class Division {
	//Mala practica, vamos a crear un metodo para dividir y luego invocarlo en el main
	public static int dividir(int num1, int num2) {
		return num1 / num2;
	}
	
	
	
	public static void main(String[] args) {
		/*
		 * La clase Exception nos permite manejar cualquier caso excepcional con nuestro código. Es el equivalente a los errores. 
		 * Utiliza una estructura de control try-catch que permite manejar las excepciones. 
		 * 	- try: devuelve el código que puede generar una excepción y lo evalúa.
		 * 	- catch: contiene el código que se ejecuta cuando se lanza la excepción.
		 * 		Sintaxis:
		 * 			try {
		 * 				//código protegido
		 * 			} catch (ExceptionName e) {
		 * 				//Bloque de excepcion
		 * 			}
		 * 	- finally: siempre se ejecuta, y se utiliza para mostrar un mensaje en caso de ser invocado. Podemos prescindir de finally.
		 * */
		//Exception que se arroja si un numero se divide entre cero
		try {
			int resultado = dividir(10,0);
			System.out.println("El resultado de la división es " + resultado);
		}catch(ArithmeticException e) {
			System.out.println("\u001B[31mError: no puedes dividir entre 0\u001B[31m");
		}finally {
			System.out.println("\u001B[32mPrograma finalizado\u001B[32m");
			//colores ANSI
		}
		
		
		
		
		
	}
	
	
	
	
	
}
