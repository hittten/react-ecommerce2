import ProductList from "../product-list/ProductList";
import * as productService from "../product-service";

function ShoppingCart() {
  return (
    <div className="wrapper">
      <h1>Shopping Cart</h1>
      <ProductList
        products={productService.listShoppingCart}
        buttonText="remove from shopping cart"
        handleButtonClick={productService.removeFromShoppingCart}
        update={true}
      />
    </div>
  );
}

export default ShoppingCart;
