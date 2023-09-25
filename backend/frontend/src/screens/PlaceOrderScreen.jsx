import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const PlaceOrderScreen = () => {
  window.scrollTo(0, 0);

  const PlaceOrderHandler = (e) => {
    e.prevetDefault();
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row ">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>Admin Doe</p>
                <p>Admin@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row ">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: Tanzania</p>
                <p>Pay method: Paypal</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row ">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>Address: Arusha Tz, Ngdjsfli jsdhfls jokl ....</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            <div className="order-product-row">
              <div className="col-md-3 col-6">
                {/* <img src='/images.8.png' alt='product' /> */}
                <img
                  src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-cdn.ubuy.co.in%2F633abc33ac4b271cd25df6e6-windows-10-laptop-10-1-inch-quad-core.jpg&tbnid=YhnDyrah4w71fM&vet=12ahUKEwivqYKN26GBAxX_5DgGHZzgB2cQMygCegQIARBW..i&imgrefurl=https%3A%2F%2Fwww.ubuy.com.bd%2Fen%2Fproduct%2F52Y4312Y4-windows-10-laptop-10-1-inch-quad-core-notebook-slim-and-lightweight-mini-netbook-computer-with-netflix-youtube-bluetooth-wifi-webcam-hdmi-and-laptop&docid=0dkr7hiKI6fAGM&w=987&h=782&q=small%20laptop%20for%20kids&ved=2ahUKEwivqYKN26GBAxX_5DgGHZzgB2cQMygCegQIARBW"
                  alt="product"
                />
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link to="/">
                  <h6>Kids small laptop</h6>
                </Link>
              </div>
              <div className="mt-3 mt-md-0 col-6 col-md-2 d-flex align-items-center flex-direction-column">
                <h4>QUANTITY</h4>
                <h6>4</h6>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex flex-direction-column">
                <h4>SUBTOTAL</h4>
                <h6>$567</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-oriented">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>$456</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>$506</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tex</strong>
                  </td>
                  <td>$3</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>$956</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" onClick={PlaceOrderHandler}>
              <Link to="/order" className="text-white">
                PLACE ORDER
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
