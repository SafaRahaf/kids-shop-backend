import React from 'react';
import Header from '../components/Header';
import Rating from '../components/HomeComponnets/Rating';
import Message from '../components/LoadingError/Error';
import Products from '../data/Products';
import { Link } from 'react-router-dom';

const SingleProduct = ({ match }) => {
  const product = Products.find((p) => p.id === match.params.id);

  return (
    <>
      <Header />
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6">
            <div className="single-image">
              <img src={product.image} alt={match.name} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
              </div>
              <p>{product.description}</p>
              <div className="product-count col-lg-7">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Price</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
