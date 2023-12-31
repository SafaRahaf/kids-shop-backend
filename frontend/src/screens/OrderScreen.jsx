import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import {PayPalButton} from "react-paypal-button-v2"

const OrderScreen = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
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
                <p>
                  <a href={`mailto: admin@gmail.com`}>admin@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
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

                <div className="bg-info p-2 col-12">
                  <p className="text-white text-center text-sm-start">
                    paid on dec 3 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>deliver to</strong>
                </h5>
                <p>Address: dfhlj lkdfgfdlgk rjg;erjg;l j</p>
                <div className="bg-danger p-1 col-12">
                  <p className="text-white text-center text-sm-start">
                    Not Delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            <div className="order-product row">
              <div className="col-md-3 col-6">
                {/* <img src='/images/4.png' alt='product' /> */}
                <img
                  src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.reliancedigital.in%2Fwp-content%2Fuploads%2F2019%2F06%2FChild_Playing.png&tbnid=1hHxIIa7KGuI4M&vet=12ahUKEwju1bfp26GBAxXoz6ACHQF1CC4QMyghegUIARDAAQ..i&imgrefurl=https%3A%2F%2Fwww.reliancedigital.in%2Fsolutionbox%2Fmobile-gaming-make-kids-smarter-is-this-even-real%2F&docid=BIktBsSMNgjaCM&w=1070&h=458&q=kids%20mobile&ved=2ahUKEwju1bfp26GBAxXoz6ACHQF1CC4QMyghegUIARDAAQ"
                  alt="product"
                />
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link to={`/`}>
                  <h6>Kids mobile</h6>
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
            <div className="col-12">{/* <PayPalButton amount={342} /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
