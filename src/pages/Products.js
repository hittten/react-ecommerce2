import ProductList from "../product-list/ProductList";
import * as productService from "../product-service";
import {Link} from "react-router-dom";
import './Products.css';

function Products() {
  return (
    <div className="wrapper products">
      <h1>Products</h1>
      <ProductList
        products={productService.list}
        buttonText="add to shopping cart"
        handleButtonClick={productService.addToShoppingCart}
      />
      <Link to="/create-product">
        <span className="material-icons">
          add
        </span>
      </Link>
    </div>
  );
}

export default Products;
