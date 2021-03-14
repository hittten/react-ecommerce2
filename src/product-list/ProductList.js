import './ProductList.css';
import * as React from "react";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridView: false,
    }
  }

  render() {
    return (
      <div className="product-list wrapper">
        <h1>Products</h1>
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
          {this.props.products.map(product =>
            <li key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name}/>
              <p>
                ({new Date(product.createdAt).toLocaleDateString()})
                - {product.description.length > 150 ? product.description.slice(0, 150) + '...' : product.description}
              </p>
              <div className="price">{product.price} €</div>
              <div>
                <button className="button">add to cart</button>
              </div>
            </li>)}
        </ul>
      </div>
    );
  }
}

export default ProductList;
