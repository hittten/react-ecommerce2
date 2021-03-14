import './ProductList.css';
import * as React from "react";
import {uppercase} from "../utils/uppercase";
import {euroCurrency} from "../utils/euro-currency";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridView: false,
      products: props.products,
    }
  }

  render() {
    return (
      <div className="product-list">
        <div className="views">
          <span className={`material-icons ${!this.state.gridView ? 'selected' : ''}`}
                onClick={() => this.setState({gridView: false})}>
            view_list
          </span>
          <span className={`material-icons ${this.state.gridView ? 'selected' : ''}`}
                onClick={() => this.setState({gridView: true})}>
            view_module
          </span>
        </div>
        <ul className={this.state.gridView ? 'grid' : ''}>
          {this.state.products.map((product, index) =>
            <li key={index}>
              <h2>{uppercase(product.name)}</h2>
              <img src={product.image} alt={product.name}/>
              <p>
                ({new Date(product.createdAt).toLocaleDateString()})
                - {product.description.length > 150 ? product.description.slice(0, 150) + '...' : product.description}
              </p>
              <div className="price">{euroCurrency(product.price)}</div>
              <div>
                <button className="button"
                        onClick={() => this.handleButtonClick(product)}>{this.props.buttonText}</button>
              </div>
            </li>)}
        </ul>
      </div>
    );
  }

  handleButtonClick(product) {
    this.props.handleButtonClick(product);
    this.setState({products: this.props.products});
  }
}

export default ProductList;
