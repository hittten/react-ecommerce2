import './ProductList.css';
import {useState, useEffect} from "react"
import {uppercase} from "../utils/uppercase";
import {euroCurrency} from "../utils/euro-currency";
import {ReactComponent as Loading} from '../assets/spinner.svg';

function ProductList(props) {
  const [gridView, setGridView] = useState(false)
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    props.products()
      .then(
        (result) => {
          setIsLoaded(true)
          setProducts(result)
        },
        (error) => {
          setIsLoaded(false)
          setError(error)
        }
      )
  }, [props, props.products])

  function handleButtonClick(e, product, index) {
    e.target.disabled = true
    if (!props.update) {
      return props.handleButtonClick(product)
        .finally(() => {
          e.target.disabled = false
        })
    }

    props.handleButtonClick(product)
      .then(() => {
        const newProducts = [...products];
        newProducts.splice(index, 1)
        setProducts(newProducts)
      })
      .finally(() => {
        e.target.disabled = false
      })
  }

  return (
    <div className="product-list">
      <div className="views">
          <span className={`material-icons ${!gridView ? 'selected' : ''}`}
                onClick={() => setGridView(false)}>
            view_list
          </span>
        <span className={`material-icons ${gridView ? 'selected' : ''}`}
              onClick={() => setGridView(true)}>
            view_module
          </span>
      </div>
      <ul className={gridView ? 'grid' : ''}>
        {error ? <div>Error: {error.message}</div> :
          !isLoaded ? <Loading/> :
            products.map((product, index) =>
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
                          onClick={(e) => handleButtonClick(e, product, index)}>{props.buttonText}</button>
                </div>
              </li>)}
      </ul>
    </div>
  );
}

export default ProductList;
