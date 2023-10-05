import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
// import img2 from '../components/images/2.png';
import { AddToCart } from '../redux/Actions/cartActions';

const CartScreen = () => {
  window.scrollTo(0, 0);

  const { id } = useParams();
  const dispatch = useDispatch();

  const productId = id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

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
            {cartItems.map((item) => {
              <div className="cart-item row">
                <div className="remove-butoon d-flex justify-content-center align-items-center">
                  <i className="fas fa-items"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item.image} alt={item.name} />
                  {/* <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nike.com%2Fph%2Ft%2Fflex-runner-2-younger-shoes-f2cCnj&psig=AOvVaw0JqI-EM29rJ9Vaif0d1AGH&ust=1694492321603000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNj0nPrZoYEDFQAAAAAdAAAAABAQ"
                  alt="nike"
                /> */}
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
                  <h4>$756</h4>
                </div>
              </div>;
            })}

            <div className="total">
              <span className="sub">total:</span>
              <span className="total-pricce">$768</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6">
                <button>Continue To Shopping</button>
              </Link>
              <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                <button>
                  <Link to="/shopping" className="text-white">
                    Checkout
                  </Link>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartScreen;
