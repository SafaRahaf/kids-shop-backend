import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Rating from '../components/HomeComponnets/rating';
import Message from '../components/LoadingError/Error';
// import Products from '../data/Products';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../redux/Actions/productActions';
import { match } from 'assert';
// import axios from 'axios';

const SingleProduct = () => {
  // const [product, setProduct] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();
  const productId = id;

  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  // useEffect(() => {
  // const fetchProduct = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `http://localhost:5000/products/${id}`
  //     );
  //     setProduct(data);
  //   } catch (error) {
  //     // Handle any errors, e.g., product not found
  //     console.error('Error fetching product:', error);
  //     setProduct(null); // Set product to null to indicate an error
  //   }
  // };
  // fetchProduct();

  // const fachProduct = async () => {
  //   const productDot = product.find((p) => p._id === id);
  //   const { data } = await axios.get(
  //     `http://localhost:5000/products/${productDot.params.id}`
  //   );
  //   setProduct(data);
  // };
  // fachProduct();
  // }, [id]);

  if (!product) {
    return <Message variant={'alert-danger mt-3'}>Product not found</Message>;
  }

  // const product = Products.find((p) => p.id === match.params.id);

  // if (!product) {
  //   return <Message variant={'alert-danger mt-3'}>Product not found</Message>;
  // }

  return (
    <>
      <Header />
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6">
            <div className="single-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
              </div>
              <p>{product.description} </p>
              <div className="product-count col-lg-7">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Price</h6>
                  <span>${product.price}</span>
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Status</h6>
                  {product.countInStock > 0 ? (
                    <span>In Stock</span>
                  ) : (
                    <span>Unavailable</span>
                  )}
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Reviews</h6>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </div>
                {product.countInStock > 0 ? (
                  <>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Quantity</h6>
                      <select>
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-md-6">
            <h6 className="mb-3">REVIEWS</h6>
            <Message variant={'alert-info mt-3'}>No Reviews</Message>
            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <strong>Admin Doe</strong>
              <Rating />
              <span>jan 6 2022</span>
              <div className="alert alert-info mt-3">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled,
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6>WRITE A CUSTOMER REVIEW</h6>
            <div className="my-4"></div>

            <form>
              <div className="my-4">
                <strong>Rating</strong>
                <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                  <option value="">select...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="my-4">
                <strong>Comment</strong>
                <textarea
                  rows="3"
                  className="col-12 bg-light p-3 mt-2 border-0 rounded"
                ></textarea>
              </div>
              <div className="my-3">
                <button className="col-12 bg-black border-0 p-3 rounded text-white">
                  SUBMIT
                </button>
              </div>
            </form>
            <div className="my-3">
              <Message variant={'alert-warninng'}>
                Please{' '}
                <Link to="/login">
                  <strong>Ligin</strong>
                </Link>
                to write a review
              </Message>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
