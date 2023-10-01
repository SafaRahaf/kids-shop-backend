import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer
} from './Reducers/ProductReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer
});
const initialState = {};
const middlewere = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewere))
);

export default store;
