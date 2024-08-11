// import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import "./App.css"
import testImage from "./assets/pexels-michael-steinberg-95604-366551.jpg"


export default function Products() {

  return (
    <>
      <NavigationBar />
      <div className="main-container">
        <div className="tile-bundle">
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>    
    </>
  )
}

function Tile(){
  
  return (
    <div className="productTile">
      <img className="productImage" src={ testImage } />
      <p className="productTitle">Gold Bars</p>
      <p className="productPrice">$2,500.00</p>
      <QuantityButton />
      <button className="addProductButton">Add to Cart</button>
    </div>
  )
}

function QuantityButton(){
  return(
    <div className="quantityButton">
      <button>-</button>
      <input className="quantity" value="0"/>
      <button>+</button>
    </div>
  )
}