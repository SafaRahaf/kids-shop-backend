import { CART_REMOVE_ITEM, CART_ADD_ITEM } from '../Constains/CardConstains';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItems = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (existItems) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItems.product ? item : x
          )
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== action.payload)
        };
      }
    // case CART_REMOVE_ITEM:
    //   return {};

    default:
      return;
  }
};
