import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';
import Pagination from './pagination';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Error';
import { listProduct } from '../../redux/Actions/productActions';
// import axios from 'axios';

const ShopSection = () => {
  // const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // console.log(state);

  useEffect(() => {
    // const fachProducts = async () => {
    //   const { data } = await axios.get('http://localhost:5000/products');
    // setProducts(data);
    // };
    // fachProducts();
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <>
      <div className="Container m-3">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <Loading />
                ) : error ? (
                  <Message variant={'alert-danger'}>{error}</Message>
                ) : (
                  <>
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
                  </>
                )}

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
