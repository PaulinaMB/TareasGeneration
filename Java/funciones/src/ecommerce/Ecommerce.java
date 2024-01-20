package ecommerce;
import java.util.ArrayList;
import java.util.List;

public class Ecommerce {
	static class Producto { //Esta es una clase para representar un producto
		String nombre;
		double precio;
		
		Producto(String nombre, double precio){
			this.nombre = nombre; 
			this.precio = precio;
		}
	}
		static class CarritoCompra {
			List<Producto> productos = new ArrayList<>() ; //lista clase producto
			//vamos a poner productos en general, los objetos serán nuestro producto
			//quiero un nuevo array de productos
			
			//fcn void: No tiene un valor de retorno, por lo tanto, no se le puede asignar un return
			void agregarProducto(Producto barbie) {
				productos.add(barbie);
			}
			
			double calcularTotal() {
				double total = 0;
				for(Producto barbie : productos) { //es un foreach
				total +=barbie.precio;//barbie es el producto y con el punto accedemos a la propiedad precio
				}
			return total;
			}
			
		}
		
		
		
	public static void main(String[] args) {
		// es el punto de ejecución para entrada
		Producto munieca1 = new Producto ("Chelsea", 98.70);
		Producto munieca2 = new Producto ("Skipper", 85.40);
		
		CarritoCompra carrito = new CarritoCompra();
		
		carrito.agregarProducto(munieca1);
		carrito.agregarProducto(munieca2);
		
		double totalCarrito = carrito.calcularTotal();
		
		System.out.println("Total del carrito: $"+totalCarrito);
		
	}
}
