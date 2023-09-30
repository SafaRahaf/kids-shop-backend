// import { createStore, combineReducers, applyMiddleware } from 'redux';
// // import {configureStore} from '@reduxjs/toolkit'
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { productListReducer } from './Reducers/ProductReducers';

// const reducer = combineReducers({
//   productList: productListReducer
// });

// const initialState = {};

// const middlewere = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middlewere))
// );

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './Reducers/ProductReducers';

const store = configureStore({
  reducer: {
    productList: productListReducer
  },
  initialState: {},
  middleware: [thunk],
  devTools: composeWithDevTools()
});

export default store;
