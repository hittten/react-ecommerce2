import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../product-list/productsReducer';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
