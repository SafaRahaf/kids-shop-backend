import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../Constains/CardConstains';

// export const AddToCart = (id, qty) => async (dispatch, getState) => {
//   const { data } = await axios.get(`http://localhost:5000/product/${id}`);

//   dispatch({
//     type: CART_ADD_ITEM,
//     payload: {
//       product: data._id,
//       name: data.name,
//       image: data.image,
//       price: data.price,
//       countInStock: data.countInStock,
//       qty
//     }
//   });
//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };

// Actions/cartActions.js

export const addToCart = (id, qty) => async (dispatch, getState) => {
  // try {
  const { data } = await axios.get(`http://localhost:5000/products/${id}`);

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

  localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItems));
  // } catch (error) {
  //   dispatch({
  //     type: CART_REMOVE_ITEM,
  //     payload:
  //       error.response && error.response.data.message
  //         ? error.response.data.message
  //         : error.message
  // });
  // };
};
