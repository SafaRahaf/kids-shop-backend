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
              < className="product-count col-lg-7">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Price</h6>
                  <span>${product.price}</span>
                </div>
                <div className='flex-box d-flex justify-content-between align-items-center'>
                  <h6>Status</h6>
                  {product.countInStock > 0 ? (
                    <span>In Stock</span>
                  ) : (
                    <span>Unavailable</span>
                  )}
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Reviews</h6>
                  <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </div>{product.countInStock > 0 ? (
                  <>
                    
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Quantity</h6>
                  <select>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x +1} value={x+1}>
                        {x+1}
                      </option>
                    ))}
                  </select>
                  </div>
                  </>
                ) : null}
              </div>
          </div>
        </div></div>
    </>
  );
};

export default SingleProduct;
