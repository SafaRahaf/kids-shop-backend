import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';
import Pagination from './pagination';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../redux/Actions/productActions';
// import products from '../../data/Products';
// import axios from 'axios';

const ShopSection = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;

  // useEffect(() => {
  //   dispatch(listProduct());
  // }, [dispatch]);

  useEffect(() => {
    const fachProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/products');
      setProducts(data);
    };
    fachProducts();
  }, []);

  return (
    <>
      <div className="Container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {products.map((product) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={product._id}
                  >
                    <div className="border-product">
                      <Link to={`/products/${product._id}`}>
                        <div className="shopBack">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </Link>

                      <div className="shoptext">
                        <p>
                          <Link to={`/products/${product._id}`}>
                            {product.name}
                          </Link>
                        </p>

                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />

                        <h3>${product.price}</h3>
                      </div>
                    </div>
                  </div>
                ))}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
