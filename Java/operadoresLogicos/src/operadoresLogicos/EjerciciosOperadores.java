package operadoresLogicos;

public class EjerciciosOperadores {

	public static void main(String[] args) {
		/*&& operador And  devuelve true si ambas expresiones son verdaderas 
		 || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversa */
	//&& and
		
	int anios = 5;
	boolean esInfante = true;
	boolean costoInfante = anios <= 12 && esInfante;
	System.out.println("Es peque "+costoInfante);
		
	String cliente = "cliente123";
	String credenciales = "fertakisfuego123";
	boolean credencialCorrecta = cliente.equals("cliente123")&& credenciales.equals("fertakisfuego123");
	System.out.println("Las creden si son válidas " + credencialCorrecta);
	
	// || or
	double costoPasaje = 380.50;
	int edad = 62;
	boolean credenInapam = false;
	
	boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
	
	System.out.println("Tiene descuento " + descuentoAdultoMayor);
	
	// ! not
	boolean asientosDisponibles = true;
	boolean asientosConDescuento= !asientosDisponibles;
	boolean libres = true;
	System.out.println("Tenemos asientos con descuento " + asientosConDescuento);
	
	/*Autobús a oaxaca
costo boleto 350
62 asientos
4 destinados a adultxs mayores
6 a estudiantes
descuento a inapam es de 35%
a estudiantes 30%
calcular asientos normales
calcular descuento de boletos
calcular la ganancia total del camión
	 * */
	int costoBoleto = 350;
	int asientosTotales = 62;
	int asientosMayores = 4;
	int asientosEstudiantes = 6;
	double inapam = 0.35;
	double estudiantes = 0.30;
	
	int asientosSinOcupar = asientosTotales - asientosMayores - asientosEstudiantes;
	System.out.println("Los asientos disponibles son: " + asientosSinOcupar);
	
	double boletoMayores = costoBoleto * (1 - inapam);
	double boletoEstudiantes = costoBoleto * (1 - estudiantes);
	System.out.println("El costo del boleto para un adulto mayor es de " + boletoMayores);
	System.out.println("El costo del boleto para un estudiante es de " + boletoEstudiantes);
	
	double ganancias = costoBoleto*asientosTotales - asientosMayores*inapam - asientosEstudiantes*estudiantes;
	System.out.println("Las ganancias del camión son de " + ganancias);
	
	
	
	}

}
