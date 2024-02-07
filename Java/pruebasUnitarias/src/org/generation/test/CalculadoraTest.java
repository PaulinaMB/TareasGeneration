package org.generation.test;

import static org.junit.Assert.assertEquals;

import org.generation.calculadora.Calculadora;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test; //viene desde JUnit.jupitar.api.test

public class CalculadoraTest {
	//1. Mandar a llamar un objeto de tipo Calculadora como variable
	private Calculadora calculadoraTest;
	/**Antes de que se mande a ejecutar c/metodo vamos a recurrir a una nueva anotación que nos va a generar un nuevo metodo, que le dira que proviene de un objeto, y que cree la calculadora como parte de este objeto****/
	
	/*1.1 Crear un método llamado setUp para instanciar mi calculadoraTest como nuevo objeto de tipo calculadora y le debo indicar que se ejecute antes de todos los test con la anotación @BeforeEach*/
	@BeforeEach
	public void setUp() {
		calculadoraTest = new Calculadora();
	}
	
	//2. Comenzar a crear métodos de prueba (test) que no retornan (tipo void)
	@Test //Con esto podemos añadir libreria de JUnit, vamos a trabajr con la 5
	public void sumarTest() {
		assertEquals(15, calculadoraTest.sumar(7, 8)); //assertEquals(aquí estará el resultado esperado, el método a evaluar sobre el objeto creado ie variable+método(parámetros a evaluar. Importamos Assert.asserEquals.
		
	}
	//3. Revisar el archivo `module-info.java` y eliminar los modulos que se importaron porque agregamos los modulos
	//4. Importar `Assert.assertEquals`
//Hay que hacer métodos de prueba para el resto de métodos de calculadora. El numero de trest que yo quiera puedo crear
	@Test //Con esto podemos añadir libreria de JUnit, vamos a trabajr con la 5
	public void restarTest() {
		assertEquals(-1, calculadoraTest.restar(17, 18)); //assertEquals(aquí estará el resultado esperado, el método a evaluar sobre el objeto creado ie variable+método(parámetros a evaluar. Importamos Assert.asserEquals.
		
	}
	
	@Test //Con esto podemos añadir libreria de JUnit, vamos a trabajr con la 5
	public void multiplicarTest() {
		assertEquals(18, calculadoraTest.multiplicar(3, 6)); //assertEquals(aquí estará el resultado esperado, el método a evaluar sobre el objeto creado ie variable+método(parámetros a evaluar. Importamos Assert.asserEquals.
		
	}
	
	@Test //Con esto podemos añadir libreria de JUnit, vamos a trabajr con la 5
	public void sumarDividr() {
		assertEquals(12, calculadoraTest.dividir(96, 8)); //assertEquals(aquí estará el resultado esperado, el método a evaluar sobre el objeto creado ie variable+método(parámetros a evaluar. Importamos Assert.asserEquals.
		
	}

	
	
}
