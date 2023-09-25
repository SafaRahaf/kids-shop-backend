import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const CartScreen = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <div className="container">
        {/* <div className='alert alert-unfo text-center mt-3'>Your cart is empty <Link to='/' style={{fontSize: "12px"}}>SHOPPING NOW</Link></div> */}

        <div className="alert alert-info text-center mt-3">
          Total Cart products
          <Link className="text-success mx-2" to="/cart">
            (4)
          </Link>
        </div>

        <div className="cart-item row">
          <div className="remove-butoon d-flex justify-content-center align-items-center">
            <i className="fas fa-items"></i>
          </div>
          <div className="cart-image col-md-3">
            {/* <img src="/images/2.png" alt="nike" /> */}
            <img src="" alt="nike" />
          </div>

          <div className="cart-text col-md-5 d-flex align-items-center">
            <Link to="#">
              <h4>Nike kids shoe</h4>
            </Link>
          </div>

          <div className="cart-qty col-md-2 col-sm-5 mt-3 mt-md-0 d-flex flex-column">
            <h6>QUANTITY</h6>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-item-center">
            <h6>SUBTOTAL</h6>
            <h4>$756</h4>
          </div>
        </div>

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
      </div>
    </>
  );
};

export default CartScreen;
