import './ProductList.css';
import * as React from "react";
import {uppercase} from "../utils/uppercase";
import {euroCurrency} from "../utils/euro-currency";
import {ReactComponent as Loading} from '../assets/spinner.svg';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridView: false,
      error: null,
      isLoaded: false,
      products: [],
    }
  }

  componentDidMount() {
    this.props.products()
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result
          });
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
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
          {this.state.error ? <div>Error: {this.state.error.message}</div> :
            !this.state.isLoaded ? <Loading/> :
              this.state.products.map((product, index) =>
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
                            onClick={(e) => this.handleButtonClick(e, product, index)}>{this.props.buttonText}</button>
                  </div>
                </li>)}
        </ul>
      </div>
    );
  }

  handleButtonClick(e, product, index) {
    e.target.disabled = true
    if (!this.props.update) {
      return this.props.handleButtonClick(product)
        .finally(() => {
          e.target.disabled = false
        })
    }

    this.props.handleButtonClick(product)
      .then(() => {
        this.setState((state) => {
          const newProducts = [...state.products];
          newProducts.splice(index, 1)
          return {
            products: newProducts,
          }
        })
      })
      .finally(() => {
        e.target.disabled = false
      })
  }
}

export default ProductList;
