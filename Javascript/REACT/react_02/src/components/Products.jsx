import './Products.css'

/* -comenté esta linea de codigo porque fue la que usé para el ejemplo de props estructurados.
    const Products = (props) =>{
    */
const Products = ({img, name, description, price}) =>{
    return(
        <>
        {/* Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información
            <div className="cards">
            <div className="products--card">
                <img src='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933' />
                <h3>Fashion</h3>
                <p>Tennis running fitness purple</p>
                <h4>$1989</h4>
            </div>
        </div> */}

{/* Props estructurados. Puedo asignar diferentes propiedades a un div, sin tener que generar muchos props, solamente usando la palabra reservada `props` como parámetro de la función 
        * Quiero modificar varias propiedades, puedo mandar a llamar las props dentro de cada elementos, como si fueran métodos
        */}
        {/* <div className="cards">
            <div className="products--card">
                <img src={props.img} alt='sneakers' />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
        </div> */}
{/*Props desestructurados. permite asignar datos de un objeto a una variable separada para que dicha varable pueda contener los datos provenientes del objeto.
*no utilizamos `props` como parámetro de la fcn, sino que, asignamos parámetros a cada elemento y los llamamos directamente en dicho elemento.
*los props desestructurados viven como parámetros, peron entre llaves y se les asigna un nombre, es decir, 
 */}
        <div className="cards">
            <div className="products--card">
                <img src={img} alt='sneakers' />
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>
        </>

        
    )
}
export default Products