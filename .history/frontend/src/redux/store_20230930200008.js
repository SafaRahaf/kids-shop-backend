import { createStore, combineReducers, applyMiddleware } from 'redux';
const reducer = combineReducers({
  productList: productListReducer
});
const initialState = {};
const middlewere = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewere))
);

// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { productListReducer } from './Reducers/ProductReducers';

// const store = configureStore({
//   reducer: {
//     productList: productListReducer
//   },
//   middleware: [thunk],
//   devTools: composeWithDevTools()
// });

export default store;
