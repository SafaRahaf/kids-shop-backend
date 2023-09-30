import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL
} from '../Constains/productConstains';

export const productListReducer = ((state = { products: [] }), action);

switch (action.type) {
  case PRODUCT_LIST_REQUEST:
    return { loadin: true, products: [] };
  case PRODUCT_LIST_SUCCESS:
    return { loadin: false, products: action.payload };
  case PRODUCT_LIST_FAIL:
    return { loadin: false, error: action.payload };

  default:
    return state;
}
