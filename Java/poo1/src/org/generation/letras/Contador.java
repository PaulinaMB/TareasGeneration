package org.generation.letras;

/*Contador: métodos para contar vocales, consonantes, numero y caracteres.
	Necesitamos esablecer dos grupos de métodos:
		Grupo 1: métodos booleanos p/determinar a qué tipo de caracteres corresponde.
		Grupo 2: métodos que van a devolver el conteo de dichos carácteres.
*/
public class Contador {
	//Grupo 1
	public boolean esVocal(char caracter) {
		return (caracter == 'a' || caracter == 'e' || caracter == 'u' || caracter == 'i' || caracter == 'o' || caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U');
		}
	
	public boolean esNumero(char caracter) {
		//casting p/poder utilizar la tabla ASCII (48-57)
		short codigoAscii = (short)caracter;
		return codigoAscii >= 48 && codigoAscii <= 57;
	}
	
	public boolean esConsonante(char caracter) {
		//casting p/poder utilizar la tabla Ascii (65-90 o 97-122), con excepción de vocales (!)
		short codigoAscii = (short)caracter;
		return ((codigoAscii >= 65 && codigoAscii <= 90) || (codigoAscii >= 97 && codigoAscii <= 122)) && !esVocal(caracter);
	}
	
	public boolean esSimbolo(char caracter) {
		return !(esVocal(caracter) || esNumero(caracter) || esConsonante(caracter));
	}
	
	//Grupo 2
	

}
