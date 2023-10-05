import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
// import img2 from '../components/images/2.png';
import { AddToCart } from '../redux/Actions/cartActions';

const CartScreen = () => {
  window.scrollTo(0, 0);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productId = id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const total = cartItems
    .reduce((accumulator, item) => accumulator + item.qty * item.price, 0)
    .toFixed(2);

  const chackOutBtn = (e) => {
    navigate('/login?redirect=shipping');
  };

  const removeFromCart = () => {};

  useEffect(() => {
    if (productId) {
      dispatch(AddToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <>
      <Header />
      <div className="container">
        {cartItems.length === 0 ? (
          <div className="alert alert-unfo text-center mt-3">
            Your cart is empty{' '}
            <Link to="/" style={{ fontSize: '12px' }}>
              SHOPPING NOW
            </Link>
          </div>
        ) : (
          <>
            <div className="alert alert-info text-center mt-3">
              Total Cart products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>
            {cartItems.map((item) => (              <div className="cart-item row">
                <div
                  onClick={() => removeFromCart()}
                  className="remove-butoon d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-items"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/products/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>

                <div className="cart-qty col-md-2 col-sm-5 mt-3 mt-md-0 d-flex flex-column">
                  <h6>QUANTITY</h6>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(AddToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-item-center">
                  <h6>SUBTOTAL</h6>
                  <h4>${item.price}</h4>
                </div>
              </div>;
            )
            )
            }

            <div className="total">
              <span className="sub">total:</span>
              <span className="total-price">${total}</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6">
                <button>Continue To Shopping</button>
              </Link>
              {total > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={chackOutBtn}>
                    {/* <Link to="/shopping" className="text-white"> */}
                    Checkout
                    {/* </Link> */}
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartScreen;
