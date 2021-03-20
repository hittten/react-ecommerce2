import {SHOPPING_CART_ITEMS, PRODUCTS} from "./mock-products";

export const create = (product) => {
  product.id = PRODUCTS.length + 1;
  product.createdAt = new Date();
  product.image = URL.createObjectURL(product.image)

  PRODUCTS.push(product);

  console.log('new product', product);
  return promisify(product);
};

export const list = () => {
  console.log('listing products')
  return promisify(PRODUCTS);
};

export const listShoppingCart = () => {
  console.log('listing shopping cart')
  return promisify(SHOPPING_CART_ITEMS);
};

export const addToShoppingCart = (product) => {
  console.log('add', product.name, 'to shopping cart')
  SHOPPING_CART_ITEMS.push(product);

  return promisify(null)
};

export const removeFromShoppingCart = (product) => {
  console.log('remove', product.name, 'from shopping cart')
  const index = SHOPPING_CART_ITEMS.findIndex(value => value.id === product.id);
  SHOPPING_CART_ITEMS.splice(index, 1);

  return promisify(null);
};

function promisify(value) {
  return new Promise(resolve =>
    setTimeout(() => resolve(value), 500)
  );
}
