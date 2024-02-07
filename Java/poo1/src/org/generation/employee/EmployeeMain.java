package org.generation.employee;
//Aquí vamos a instancas los objetos de manera especifica. no hay limite de objetos
public class EmployeeMain {
//Aquí vivirán los objetos así que establecer método main
	public static void main(String[] args) {
		//Instanciar los objetos.
		//Para instanciar definir tipo de obj y p/esto hacer referencia a la clase
		Employeee Daniel = new Employeee("Daniel", "Maldonado", 7836, 8596.33d, "Instructor");
		//los parametros son los que defini en el constructor de Employeee
		Employeee Abigail = new Employeee("Abigail", "Martinez", 5274, 19754.28d, "Desarrolladora frontend");
		Employeee Arturo = new Employeee("Arturo", "Avila", 4403, 17999.62, "Desarrodallor backend");
		
		System.out.println(Daniel);
		System.out.println(Abigail);
		System.out.println(Arturo);
		
		//Aplicando métodos definidos previamente (trabajar, calcularSalario, capacitarse, infoGeneral)
		Daniel.infoGeneral();
		Arturo.calcularSalario();
		Abigail.capacitarse();
		
		//Utilizar información específica de cada objeto mediante sus propiedades 
		//Usando getter
		System.out.println(Daniel.getNombre() + " " + Daniel.getApellido() + " ocupa el puesto de " + Daniel.getPuesto()); //pide al getter que me traiga la info correspondiente al nombre
		//Puedo no usar los getter y usar las propiedades del objeto
		//Accediendo a la propiedad del objeto
		System.out.println(Abigail.puesto + " gana $" + Abigail.salario + " pesos");
		
		//Actualizar información mediante Setter. Si yo no quiero modificar nunca el nombre puedo eliminar el setter y getter. 
		Arturo.setSalario(24598.11);
		Arturo.calcularSalario();
		
		
		
	}
	
	
	
}
