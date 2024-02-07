package org.generation.banco;
/*
 * En esta clase se definen los métodos para disparar las excepciones, es decir, el try-catch. Sin embargo, aquí no se ejecuta el try-catch
 * Se definen otros métodos como depositar dinero, retirar dinero,
 * 	Requerimientos:
 * 		- Trabajar bajo POO
 * 		- Encapsular (modificadores, getters y setters)
 * 		- Crear variables y métodos para instanciar objetos
 * 
 * 
 * */

public class CuentaBancaria {
	//Atributos (podemos agregar Nombre del cliente, rfc, etc...)
	private double saldo;
	//Nombre del cliente, rfc, etc...
	private int idCuenta;
	
	//Consttuctor que recibe solamente el atributo numero
	public CuentaBancaria(int numero) {
		//super(); Se quita porque no está heredando atributos de ninguna clase superior
		this.idCuenta = idCuenta;
	}
	//Método para depositar dinero
	public void depositar (double monto) {
		saldo += monto; //Esto es lo mismo que saldo = saldo + monto
	}
	//Método para retirar dinero
	/*Verificar si el monto a retirar es menor o igual al saldo actual.
	 * 		- true: Se puede retirar el monto solicitado
	 * 		- false: No se puede retirar y calculamos cuánto dinero falta para completar la operación
	 * */
	public void retirar (double monto) throws FondosInsuficientesException{
		if(monto <= saldo) {
			saldo -= monto; // Esto es lo mismo que saldo = saldo - monto; 
		}else {
			double faltante = monto - saldo;
			//Crear la instancia de la clase FondosInsuficientesExcepcion con las palabras throw new e y le pasamos el parámetro correspondiente a la variable que dispara la excepción.
			throw new FondosInsuficientesException(faltante); //Esto nos va a marcar un error porque queremos instanciar de manera local y no lo encuentra, para ello necesitamos "heredarlo" como parte delencabezado del método con la palabra reservada throws y el nombre de la excepción
		}
	}
	
	//Getters y setters
	public double getSaldo() {
		return saldo;
	}
	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	public int getIdCuenta() {
		return idCuenta;
	}
	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
	
	
	
	
	
}
