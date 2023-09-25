import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';
import pagination from './pagination';
import Products from '../../data/Products';

const ShopSection = () => {
  return (
    <div className="Container">
      <div className="section">
        <div className="row">
          <div className="col-lg-12 col-md-12 article">
            <div className="shopcontainer row">
              {Products.apply((Product) => (
                <div
                  className="shop col-lg-4 col-md-6 col-sm-6"
                  key={Product._id}
                >
                  <div className="border-product">
                    <Link to={`/products/${Product._id}`}>
                      <div className="shopBack">
                        <img src={Product.image} alt={Product.name} />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
