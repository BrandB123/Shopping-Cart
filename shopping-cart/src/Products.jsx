// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import "./App.css"
// import testImage from "./assets/pexels-michael-steinberg-95604-366551.jpg"


export default function Products() {
  // const [apiimage, setImage] = useState(null)
  // const [apititle, setTitle] = useState(null)
  // const [apiDescription, setDescription] = useState(null)
  // const [apiprice, setPrice] = useState(null)
  const [apiData, setData] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => {
              setData(json)
            })
  }, []);

  if (apiData !== null){
    console.log(apiData);

  }


  return (
    <>
      <NavigationBar />
      <div className="main-container">
        <div className="tile-bundle">
          {/* <APITile image={apiimage} title={apititle} description={apiDescription} price={apiprice}/> */}
          { apiData !== null ?
            apiData.map((item) => {
              return <APITile key={item.id} image={item.image} title={item.title} description={item.Description} price={item.price}/> 
            }) : <p>Loading...</p>}
          {/* <Tile />
          <Tile />
          <Tile />
          <Tile /> */}
        </div>
      </div>    
    </>
  )
}

// function Tile(){
  
//   return (
//     <div className="productTile">
//       <img className="productImage" src={ testImage } />
//       <p className="productTitle">Gold Bars</p>
//       <p className="productPrice">$2,500.00</p>
//       <QuantityButton />
//       <button className="addProductButton">Add to Cart</button>
//     </div>
//   )
// }


function APITile({image, title, description, price}){
  
  return (
    <div className="productTile">
      <img className="productImage" src={ image } />
      <p className="productTitle"> { title } </p>
      {/* <p className="productDescription"> { description }</p> */}
      <p className="productPrice"> ${ price } </p>
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