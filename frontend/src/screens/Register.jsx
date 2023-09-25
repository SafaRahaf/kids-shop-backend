import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Register = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login">
        <form className="Login col-md-8 col-lg-4 col-11">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="password2" />

          <buton type="submit">Register</buton>
          <p>
            <Link to={`/login`}>
              I have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
