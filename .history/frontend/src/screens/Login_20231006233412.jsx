import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Login = () => {
  window.scrollTo(0, 0);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = location.search ? location.search.split('')[1] : '/';

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login">
        <form className="Login col-md-8 col-lg-4 col-11" onClick={submitBtn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link to={'/register'}>Create Account</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
