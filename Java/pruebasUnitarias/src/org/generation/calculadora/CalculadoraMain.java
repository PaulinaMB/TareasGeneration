package org.generation.calculadora;

public class CalculadoraMain {
	public static void main(String[] args) {
		//Instanciar
		Calculadora calculadora = new Calculadora();
		//Método sumar
		System.out.println("El resultado de sumar " +calculadora.sumar(5, 8));
		
		//Método restar
		System.out.println("El resultado de restar " + calculadora.restar(5, 8));
		
		//Método restar
		System.out.println("El resultado de multiplicar " + calculadora.multiplicar(5, 8));
				
		//Método restar
		System.out.println("El resultado de dividir " + calculadora.dividir(50, 8));
		
	}
	
	
}
