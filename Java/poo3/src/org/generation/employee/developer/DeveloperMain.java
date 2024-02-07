package org.generation.employee.developer;

public class DeveloperMain {

	public static void main(String[] args) {
		//Objeto 
		Developer Baruch = new Developer("Baruch Moreno", 418005, 18632, "Programador", "Java" );
		//Traer información
		System.out.println(Baruch); //Es el toString
		//Pasandole diversos métodos
		Baruch.calcularSalario(); //Método de superclase
		Baruch.codear(); //Método de la subclase
		//Para ver qué hace un método podemos dar ctrl + clic y nos lleva al método
		
	}

}
