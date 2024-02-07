package org.generation.employee;

public class Employee {
	//Crear atributos
	private String nombreCompleto;
	private int id;
	private double salario;
	private String puesto;
	//Constructor
	public Employee(String nombreCompleto, int id, double salario, String puesto) {
		super(); //si fuera clase que extiende superclase, ahí en super() vivirian los elementos de la superclase
		this.nombreCompleto = nombreCompleto;
		this.id = id;
		this.salario = salario;
		this.puesto = puesto;
	}
	//Declarar métodos
	public void trabajar() {
		System.out.println(this.nombreCompleto + " está trabajando");
	}
//se modifico porque no está retornando nada y es una cadena de texto
	public void calcularSalario(){
		System.out.println("El salario base del empleado " + this.nombreCompleto + " es de $" + this.salario );
		
	}
	
	public void capacitarse() {
		System.out.println("Los empleados con puesto de " + this.puesto + " se capacitan");
	}
	
	public void infoGeneral() {
		System.out.println("Id: " + this.id + ", Nombre: " + this.nombreCompleto + ", puesto: " + this.puesto);
	}
	
	//Getters y Setters
	public String getNombreCompleto() {
		return nombreCompleto;
	}
	public void setNombreCompleto(String nombreCompleto) {
		this.nombreCompleto = nombreCompleto;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public double getSalario() {
		return salario;
	}
	public void setSalario(double salario) {
		this.salario = salario;
	}
	public String getPuesto() {
		return puesto;
	}
	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}
	//toString, lo podemos midificar
	@Override
	public String toString() {
		return "Employee: nombreCompleto= " + nombreCompleto + ", id=" + id + ", salario=" + salario + ", puesto="
				+ puesto + "]";
	}
	
	
	
	
	
	
}
