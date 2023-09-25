import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const PaymentScreen = () => {
  window.scrollTo(0, 0);

  const subminHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />

      <div className="container d-flex justify-content align-items-center login-form">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={subminHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="redio-container">
              <input className="form-check-input" type="redio" value="paypal" />
              <label className="form-check-lable">PayPal or Credit Card</label>
            </div>
          </div>
          <button type="submit">
            <Link to="/placeorder" className="text-white">
              Continue
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
