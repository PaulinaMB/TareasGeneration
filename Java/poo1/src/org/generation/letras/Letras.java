package org.generation.letras;

import java.util.Scanner;

/*Crear un programa que le solicite un mensaje al usuario y cuente cuántas vocales, consonantes, numeros y caracteres posee dicho mensaje.
 * 	 Letras: métodos para interactuar con el usuario
 * 	 LetrasMain: vamos a instanciar los objetos
 * 	 Contador: métodos para contar vocales, consonantes, numero y caracteres.
 * 	 
 * */
public class Letras {
	//Para que nuestro usuario interactue, definimos un scanner
	Scanner scanner = new Scanner(System.in);
	
	//Metemos el Scanner dentro de un método
	public String leerEntrada() {
		return scanner.nextLine();
	}
	
	//Método para proporcionar contexto al usuario
	public void mostrarMensaje(String mensaje) {
		System.out.println(mensaje);
	}
	
	
	
	
	
}
