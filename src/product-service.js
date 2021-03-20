import {environment} from "./environments/environment";

const apiUrl = {
  products: `${environment.apiUrl}/products/${environment.user}/`,
  shoppingCart: `${environment.apiUrl}/shoppingCart/${environment.user}/`,
};

export const create = async (product) => {
  return fetch(apiUrl.products, {
    method: 'POST',
    body: JSON.stringify({...product, image: await toBase64(product.image)}),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json());
};

export const list = ()  => fetch(apiUrl.products)
  .then((res) => res.json());

export const listShoppingCart = () => fetch(apiUrl.shoppingCart)
  .then((res) => res.json());

export const addToShoppingCart = (product) => fetch(
  apiUrl.shoppingCart + product.id, { method: 'PUT' },
);

export const removeFromShoppingCart = (product) => fetch(
  apiUrl.shoppingCart + product.id, { method: 'DELETE' },
);

const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
