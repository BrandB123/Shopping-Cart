import { Link } from "react-router-dom";

export default function NavigationBar({ cartState}){
  return (
    <nav className="navigationBar">
        <h1 className="logo">MyStore</h1>
        <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='products'>Products</Link>
            </li>
            <li>
                <Link to='products'>{ cartState !== null ? `Cart (${cartState.cart})` : `Cart`}</Link>
            </li>
        </ul>
    </nav>
  )
}