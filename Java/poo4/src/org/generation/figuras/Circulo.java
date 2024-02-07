package org.generation.figuras;


	/***********Clase circulo *********/
	public class Circulo extends Figura{
		private double radio;

		public Circulo(double radio) {
			//super();
			this.radio = radio;
		}
		
		@Override
		public double calcularArea() {
			return Math.PI * radio * radio;
		}
		
	//Instanciar
	public static void main(String[] args) {
		Rectangulo rectangulo = new Rectangulo(5,3);
		System.out.println("El área del rectángulo es " + rectangulo.calcularArea() + " metros");
		
		rectangulo.infoFigura(); //método que viene de la figura
	}
		
	}
	
	
	
