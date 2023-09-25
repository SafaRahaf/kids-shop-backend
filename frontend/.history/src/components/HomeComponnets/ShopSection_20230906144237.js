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
            <div className="shopcontainer row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
