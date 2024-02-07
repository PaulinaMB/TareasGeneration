package org.generation.employee;
/*
 * La estructura básica para crear objetos es la siguiente
 * 	1. Atributos o propiedades
 * 	2. Método constructor (1 - n métodos)
 * 	3. Métodos del objeto (comportamiento)
 * 	4. Métodos Getters y Setters
 * 	5. Método toString
 * */


public class Employeee {
	//no vamos a poner metodo main hasta que instanciemos lo objetos
	//1. Atributos o propiedades
	String nombre;
	String apellido;
	int id;
	double salario;
	String puesto;
	
	//2. Método constructor. Tiene el mismo nombre que la clase, no retorna nada, recibe parámetros (atributos) y los asigna a variables del constructor (this)
	//El objeto cuando lo instancie seguira el orden que yo le di en el constructor
	Employeee(String nombre, String apellido, int id, double salario, String puesto){
		//Asignar a variables de constructor. BP: variables llamadas igual que atributos
		this.nombre = nombre;
		this.apellido = apellido;
		this.id = id;
		this.salario = salario;
		this.puesto = puesto;
	}
		//Podemos tener varios constructor, ej. const vacio, que recibe 2 parametros en lugar de 5, esto es sobrecarga de metodos que veremos mas adelante.
		
		//3. Métodos de comportamiento. 
		void trabajar() {
			System.out.println("Estoy trabajando");
		}
		
		void calcularSalario() {
			System.out.println("El salario del empleado " + this.nombre + " " + this.apellido + " es de $" + this.salario + " pesos");
		}
		
		void capacitarse (){
			System.out.println("El trabajador del puesto " + this.puesto + " se capacita");
		}	
		
		void infoGeneral() {
			System.out.println("Id: " + this.id + "\nNombre: " + this.nombre + "\nApellido: " + this.apellido); 
		}
		
		//4. Getters y Setter si mi obj no necesita enviar o recibir info no se usan. Son métodos que nos permiten obtener o enviar información que está protegida por modificadores de acceso y de esta manera interactuar con nuestros objetos. Los getters nos permiten obtener la info y los setters nos permiten enviar la info.
		/*
		 * Estructura de getter:
		 * 	public tipoDato getNombreVariable () {
		 * 		return nombreVariable
		 * 	}
		 * 	p.e.
		 * 		public String getNombre (){
		 * 			return nombre;
		 * 		}
		 * 
		 * 
		 * Estructura de Setter:
		 * 	public void setNombreVariable (variable) {
		 * 		this.variable = variable;
		 * 	}
		 * 	p.e.
		 * 		public void setNombre (String nombre){
		 * 			this.nombre = nombre;
		 * 		}
		 * 
		 * Podemos inicializar Getters y Setters dando click derecho > Source > Generate Getters y Setters en español Código fuent > Generar Modificadores y ...
		 * */
		
		public String getNombre() {
			return nombre;
		}

		public void setNombre(String nombre) {
			this.nombre = nombre;
		}

		public String getApellido() {
			return apellido;
		}

		public void setApellido(String apellido) {
			this.apellido = apellido;
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

		//así se muestra la info del objeto. es metodo que manda a llamar una declaracion como un super tipo para evitar errores en el codigo.
		//Las anotaciones se escriben con un @ antes
		//La anotación @Override simplemente se utiliza, para forzar al compilador a comprobar en tiempo de compilación que estás sobrescribiendo correctamente un método, y de este modo evitar errores en tiempo de ejecución, los cuales serían mucho más difíciles de detectar.
		//https://es.stackoverflow.com/questions/156432/para-que-sirve-la-l%C3%ADnea-override-en-java
		@Override 
		public String toString() {
			return "Employeee ["
					+ "nombre=" + nombre 
					+ ", "	
					+ "apellido=" +	apellido 
					+ ", id=" + id 
					+ ", salario=" + salario
					+ ", puesto=" + puesto 
					+ "]";
		}
		
		//5. Método toString. Es un "Override" que se refiere a la capacidad de proporcionar información específica de una clase en forma de cadena de caracteres. Nos permite imprimir nuestros objetos en formato String. 
		//Podemos inicializar toString dando click derecho > Source > Generate toString > Fields (seleccionar todo) y dar clic en generar en español Código fuent > Generar Modificadores y ...
		
		
		
		
}
	

