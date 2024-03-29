import './App.css'
import Navbar from './components/Navbar'
import Main from "./components/Main"
import Button from "./components/Button"
import Products from './components/Products'
import Card from './components/Card'
import Buttons from './components/Buttons'

function App() {
  const imgFashion="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933";
  const imgDark="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747";
  const imgCamel="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437";

  return (
    <>
      <Navbar />
      <Main />
      <Button label="Traer información"/>
      <Button label="Enviar información"/>
      <Products
      img={imgFashion} name="Fashion" description="Tenis Fitness Running Purple" price="$1958"
      />
      <Products
      img= {imgDark} name="Dark" description="Tenis Dark Running" price="$2296"
      />
      <Products
      img= {imgCamel} name="Camel" description="Casual tennis" price="$3431"
      />
      <Products
      img= {imgDark} name="Gray " description="Casual tennis Gray" price="$3231"
      />
      {/*Aqui ira mi componente de de MUI y JoyUI */}
      <Card/>
      <br></br>
      <Buttons />
    </>
  )
}

export default App
