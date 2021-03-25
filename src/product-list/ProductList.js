import './ProductList.css';
import {useEffect} from "react"
import {uppercase} from "../utils/uppercase";
import {euroCurrency} from "../utils/euro-currency";
import {ReactComponent as Loading} from '../assets/spinner.svg';
import {useDispatch, useSelector} from "react-redux";
import {
  listView,
  gridView,
  load,
  selectProducts,
  remove
} from "./productsReducer";

function ProductList(props) {
  const dispatch = useDispatch();
  const store = useSelector(selectProducts)

  useEffect(() => {
    dispatch(load(props.products))
  }, [dispatch, props.products])

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
        dispatch(remove(index))
      })
      .finally(() => {
        e.target.disabled = false
      })
  }

  return (
    <div className="product-list">
      <div className="views">
          <span className={`material-icons ${!store.gridView ? 'selected' : ''}`}
                onClick={() => dispatch(listView())}>
            view_list
          </span>
        <span className={`material-icons ${store.gridView ? 'selected' : ''}`}
              onClick={() => dispatch(gridView())}>
            view_module
          </span>
      </div>
      <ul className={store.gridView ? 'grid' : ''}>
        {store.error ? <div>Error: {store.error.message}</div> :
          !store.isLoaded ? <Loading/> :
            store.list.map((product, index) =>
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
