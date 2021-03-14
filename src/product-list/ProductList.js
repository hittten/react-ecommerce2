import './ProductList.css';

function ProductList(props) {
  return (
    <div className="product-list wrapper">
      <h1>Products</h1>
      <div className="views">
        <span className="material-icons">
          view_list
        </span>
        <span className="material-icons">
          view_module
        </span>
      </div>
      <ul>
        {props.products.map(product =>
          <li key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name}/>
            <p>{product.description.length > 150 ? product.description.slice(0, 150) + '...' : product.description}</p>
            <div className="price">{product.price} €</div>
            <div>
              <button className="button">add to cart</button>
            </div>
          </li>)}
      </ul>
    </div>
  );
}

export default ProductList;
