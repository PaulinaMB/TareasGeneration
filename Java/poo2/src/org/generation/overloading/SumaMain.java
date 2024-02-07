package org.generation.overloading;

import java.math.BigDecimal;

//Aquí vamos a invocar los métodos de Suma, principio de responsabilidad única
public class SumaMain {
	public static void main(String[] args) {
		//invocación de métodos. 
		//si instancio como si fuera objeto
		//Suma objeto = new Suma()
		// objeto.sumar(2.2, 3.3);
		//Se marca una advertencia, el met estatico no puede ser accedido en forma estatica.
		
		//Mandar a llamar toda la clase y a esta pasarle un metodo. Invocamos el método de tipo static mediante su clase y no mediante la instancia de un objeto.
		//Suma.sumar(8, 5); Vamos a guardarlo en una var para poder concatenarlo con un mensaje después
		int suma1 = Suma.sumar(8,5);
		double suma2 = Suma.sumar(4.3, 6.26);
//*************************************************		
		//Guardar en una variable BigDecimal el metodo invocado desde la clase. Marca que se puede convertir de double a BigDecimal. Para imprimir BigDecimal, debemos guardar los valores de los parámetros en objetos de tipo BigDecimal y asignarlos como argumentos de String de cada nueva instancia. 
		//Instancias objeto de BigDecimal
		BigDecimal num1 = new BigDecimal("4.3"); //Primer objeto instanciado
		BigDecimal num2 = new BigDecimal("6.26"); //Segundo objeto instanciado
		
		//Mando a llamar los objetos instanciados de BigDecimal como los parámetros del método
		BigDecimal suma3 = Suma.sumar(num1, num2);
		
		System.out.println("La suma de enteros me da " + suma1);
		System.out.println("La suma de decimales me da " + suma2);
		
		//BigDecimal. ver video para ver como fcnan flotantes y codigo binario. Clase de la JavaMath
		System.out.println("El resultado exacto de la suma de decimales es " + suma3);

	
	}
	
	
	
}
