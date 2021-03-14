import ProductList from "../product-list/ProductList";
import * as productService from "../product-service";

function Products() {
  return (
    <div className="wrapper">
      <h1>Products</h1>
      <ProductList
        products={productService.list()}
        buttonText="add to shopping cart"
        handleButtonClick={productService.addToShoppingCart}
      />
    </div>
  );
}

export default Products;
