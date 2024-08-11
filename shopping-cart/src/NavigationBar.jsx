import { Link } from "react-router-dom";



export default function NavigationBar(){
  return (
    <nav className="navigationBar">
        <h1 className="logo">Logo</h1>
        <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='products'>Products</Link>
            </li>
            <li>
                <Link to='produts'>Cart</Link>
            </li>
        </ul>
    </nav>
  )
}