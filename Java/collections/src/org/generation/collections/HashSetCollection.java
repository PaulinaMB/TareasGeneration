package org.generation.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {
	//en vez de args o main se puede poner otra cosa, ya que es solo una convención
	public static void main(String[] hola) {
		//HashSet es una clase de Collections donde cada elemento es único, es decir, no se repiten los elementos
		HashSet<String> animals = new HashSet<String>();
		animals.add("Buho");
		animals.add("Caballo");
		animals.add("Perro");
		animals.add("Gato");
		animals.add("Ornitorrinco");
		animals.add("Cebra");
		animals.add("Ornitorrinco");
		animals.add("Mapache");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		
		//Imprimir el HashSet
		System.out.println(animals);
		
		//Conocer si un elemento se encuentra dentro del set: contains(); 
		//contains es de tipo boolean, aplicable para array
		boolean a = animals.contains("Capibara");
		System.out.println(a);
		
		
		//Eliminar un elemento: remove();
		animals.remove("Cebra"); //elimino
		System.out.println(animals); //Imprimo el set sin el elemento eliminado
		//Agregando elementos en una sola línea
		animals.addAll(Arrays.asList("Perrito", "Gatito", "Osito", "Nahual"));
		System.out.println(animals);
		/*
		 * La clase HashSet no va a garantizar que los elementos se muestren segun el orden establecido ya que busca eficientar la busqueda y recuperacion de los elementos.
		 * Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario.*/
		
		
		//Limpiar el HashSet: .clear();
		animals.clear();
		System.out.println(animals);
	}

}
