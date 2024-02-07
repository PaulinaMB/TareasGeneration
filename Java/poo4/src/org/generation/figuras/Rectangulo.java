package org.generation.figuras;

//***********************Clase rectángulo********/
	public class Rectangulo extends Figura {
		//Atributos que se definen para rectángulo y que podemos crear gracias a la abstracción
		private double altura;
		private double base;
		//Constructor
		public Rectangulo(double altura, double base) {
			//super();
			this.altura = altura;
			this.base = base;
		}
		//Implementando el método abstracto de Figura. Una BP es indicar que el método es heredado utilizando la anotación @Override
		@Override
		public double calcularArea() {
			return base * altura;
		}		
	}