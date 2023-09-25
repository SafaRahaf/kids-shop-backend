import React from 'react';
import Header from '../components/Header';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="row justify-content-center align-items-cemter">
        <h4 className="text-center mb-2 mb-sm-5">Page Not Found</h4>
        <img
          style={{ width: '100%', height: '300px', objectFit: 'contain' }}
          // src="/images/not-found.png"
          src=""
        />
        <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
          <Link to="/" className="text-white text-decoration-none">
            Home page
          </Link>
        </button>
      </div>
    </>
  );
};

export default NotFound;
