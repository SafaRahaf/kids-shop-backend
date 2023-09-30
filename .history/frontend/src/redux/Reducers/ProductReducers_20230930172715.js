// export const productListReducer = ((state = { products: [] }), action);

// switch (action.type) {
//   case PRODUCT_LIST_REQUEST:
//     return { loadin: true, products: [] };
//   case PRODUCT_LIST_SUCCESS:
//     return { loadin: false, products: action.payload };
//   case PRODUCT_LIST_FAIL:
//     return { loadin: false, error: action.payload };

import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL
} from '../Constains/productConstains';

const initialState = {
  loading: true,
  products: [],
  error: null
};

// export const productListReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case PRODUCT_LIST_REQUEST:
//       return { ...state, loading: true, products: [], error: null };
//     case PRODUCT_LIST_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         products: action.payload,
//         error: null
//       };
//     case PRODUCT_LIST_FAIL:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
