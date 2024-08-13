import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import "./App.css"


export default function Products() {
  const [productData, setData] = useState(null)
  const [cart, setCart] = useState(0)
  const cartState = {cart, setCart}


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => {
              setData(json)
            })
  }, []);
  return (
    <>
      <NavigationBar cartState={ cartState }/>
      <div className="main-container">
        <div className="tile-bundle">
          { productData !== null ?
            productData.map((item) => {
              return <APITile key={item.id} image={item.image} title={item.title} description={item.Description} price={item.price} cartState={cartState}/> 
            }) : <p>Loading...</p>}
        </div>
      </div>    
    </>
  )
}


function APITile({image, title, description, price, cartState}){
  const [quantity, setQuantity] = useState(1);
  const quantityObj = {quantity, setQuantity}

  const addToCart = () => {
    const newCartQuantity = cartState.cart + quantity
    cartState.setCart(newCartQuantity)
  }

  return (
    <div className="productTile">
      <img className="productImage" src={ image } />
      <p className="productTitle"> { title } </p>
      <p className="productPrice"> ${ price } </p>
      <QuantityButton quantityObj={ quantityObj }/>
      <button className="addProductButton" onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

function QuantityButton({ quantityObj }){
  
  const increaseQuantity = () => {
    quantityObj.setQuantity(quantityObj.quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantityObj.quantity > 1){
      quantityObj.setQuantity(quantityObj.quantity - 1)
    }
  }

  const handleChange = () => {
    return
  }
  return(
    <div className="quantityButton">
      <button onClick={decreaseQuantity}>-</button>
      <input className="quantity" value={quantityObj.quantity} onChange={ handleChange }/>
      <button onClick={increaseQuantity}>+</button>
    </div>
  )
}