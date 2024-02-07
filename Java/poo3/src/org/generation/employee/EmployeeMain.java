package org.generation.employee;

public class EmployeeMain {
	public static void main(String[] args) {
		//instanciar objetos
		Employee Rocio = new Employee("Rocío Hernández", 42013,12000, "Desarrolladora Font-end");
		Employee Rene = new Employee("René Gómez", 97565, 15499, "Desarrollador Backend");
		Employee Diego = new Employee("Diego Gonzalez", 0054,25120.52 ,"Desarrollador móvil");
		
		Rocio.trabajar();
		Rene.capacitarse();
		Diego.calcularSalario();
		Rene.infoGeneral();
		
	}
}
