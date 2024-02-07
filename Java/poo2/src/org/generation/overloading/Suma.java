package org.generation.overloading;

import java.math.BigDecimal;

public class Suma {
	//Crear dos métodos llamados sumar, uno que reciba dos párametros de tipo entero y el otro reciba dos parámetros de tipo double
	//los voy a invocar como clase y no objeto, así que serán de tipo static
	static int sumar(int num1, int num2) {
		return num1 + num2;
	}
	//2metodo solo cambia el tipo y los parámetros. esto es sobrecarga de metodos
	static double sumar( double num1, double num2) {
		return num1 + num2;
	}
	
	//crear un tercer metodo llamado sumar de tipo BigDecimal. sera estatico pero no será ni int ni double, será BigDecimal
	static BigDecimal sumar(BigDecimal num1, BigDecimal num2 ) {
		return num1.add(num2); //Método para sumar dos números
	}
	
	
	
	
}
