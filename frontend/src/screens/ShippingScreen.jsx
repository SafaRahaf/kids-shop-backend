import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ShippingScreen = () => {
  window.scrollTo(0, 0);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-register">
        <form
          onSubmit={submitHandler}
          className="Login col-md-8 col-lg-4 col-11"
        >
          <h6>DELIVERY ADDRESS</h6>
          <input type="text" placeholder="Enter address" />
          <input type="text" placeholder="Enter sity" />
          <input type="text" placeholder="Enter postal code" />
          <input type="text" placeholder="Enter country" />
          <button type="submit">
            <Link to="/payment" className="text-white">
              Continue
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
