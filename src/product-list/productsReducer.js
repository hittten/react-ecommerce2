import {createSlice} from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    isLoaded: false,
    gridView: false,
    error: null,
  },
  reducers: {
    loading: state => {
      state.isLoaded = false;
    },
    loaded: (state, action) => {
      state.isLoaded = true;
      state.list = action.payload
    },
    gridView: state => {
      state.gridView = true;
    },
    listView: state => {
      state.gridView = false;
    },
    remove: (state, action) => {
      state.list = [...state.list.slice(0, action.payload), ...state.list.slice(action.payload + 1)]
    },
    error: (state, action) => {
      state.error = action.payload;
    }
  }
  ,
});

export const {loading, loaded, gridView, listView, remove, error} = productsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const load = (service) => dispatch => {
  dispatch(loading())
  service()
    .then(products => dispatch(loaded(products)))
    .catch(e => dispatch(error(e.message)))
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducts = state => state.products;

export default productsSlice.reducer;
