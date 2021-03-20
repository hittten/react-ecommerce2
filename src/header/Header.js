import './Header.css';
import {useState} from 'react';
import {Link} from "react-router-dom";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={`wrapper ${navOpen ? 'nav-open' : ''}`}>
        <span className="material-icons" onClick={() => navOpen ? setNavOpen(false) : setNavOpen(true)}>
          {navOpen ? 'close' : 'menu'}
        </span>
      <nav>
        <ul>
          <li onClick={() => setNavOpen(false)}>
            <Link to="/">
              <span className="material-icons">view_list</span> Products
            </Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link to="/shopping-cart">
              <span className="material-icons">shopping_cart</span> Car
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        React Ecommerce
      </div>
      <Link to="/shopping-cart">
          <span className="material-icons" onClick={() => setNavOpen(false)}>
            shopping_cart
          </span>
      </Link>
    </header>
  )
}

export default Header;
