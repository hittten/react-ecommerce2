import {SHOPPING_CART_ITEMS, PRODUCTS} from "./mock-products";

export const list = () => {
  console.log('listing products')
  return PRODUCTS;
};

export const listShoppingCart = () => {
  console.log('listing shopping cart')
  return SHOPPING_CART_ITEMS;
};

export const addToShoppingCart = (product) => {
  console.log('add', product.name, 'to shopping cart')
  SHOPPING_CART_ITEMS.push(product);
};

export const removeFromShoppingCart = (product) => {
  console.log('remove', product.name, 'from shopping cart')
  const index = SHOPPING_CART_ITEMS.findIndex(value => value.id === product.id);
  SHOPPING_CART_ITEMS.splice(index, 1);
};
