import axios from 'axios';
import { CART_REMOVE_ITEM } from '../Constains/CardConstains';

export const AddToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/product/${id}`);

  dispatch({
    type: CART_REMOVE_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
