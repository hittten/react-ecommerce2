import './Header.css';
import * as React from "react";

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
              <span className="material-icons">view_list</span> Products
            </li>
            <li onClick={() => this.openNav(false)}>
              <span className="material-icons">shopping_cart</span> Car
            </li>
          </ul>
        </nav>
        <div>
          React Ecommerce
        </div>
        <span className="material-icons" onClick={() => this.openNav(false)}>
          shopping_cart
        </span>
      </header>
    );
  }

  openNav(value) {
    this.setState({navOpen: value});
  }
}

export default Header;
