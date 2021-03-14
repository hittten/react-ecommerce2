import './Header.css';
import * as React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false,
    }
  }

  render() {
    return (
      <header className={`wrapper ${this.state.navOpen ? 'nav-open' : ''}`}>
        <span className="material-icons" onClick={() => this.state.navOpen ? this.openNav(false) : this.openNav(true)}>
          {this.state.navOpen ? 'close' : 'menu'}
        </span>
        <nav>
          <ul>
            <li onClick={() => this.openNav(false)}>
              <Link to="/">
                <span className="material-icons">view_list</span> Products
              </Link>
            </li>
            <li onClick={() => this.openNav(false)}>
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
          <span className="material-icons" onClick={() => this.openNav(false)}>
            shopping_cart
          </span>
        </Link>
      </header>
    );
  }

  openNav(value) {
    this.setState({navOpen: value});
  }
}

export default Header;
