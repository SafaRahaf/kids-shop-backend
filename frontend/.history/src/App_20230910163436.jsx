import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './responsive.css';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SingleProduct from './screens/SingleProduct';
import Login from './screens/Login';
import Register from './screens/Register';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import ProfileScreen from './screens/ProfileScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import NotFound from './screens/NotFound';

const App = () => {
  return (
    <BrowserRouter basename="/kids-stuff">
      <HomeScreen />
    </BrowserRouter>
  );
};

// <Router>
//   <Routes>
//     <Route path="/" component={HomeScreen} exact />
//     <Route path="/products/:id" component={SingleProduct} />
//     <Route path="/login" component={Login} />
//     <Route path="/register" component={Register} />
//     <Route path="/profile" component={ProfileScreen} />
//     <Route path="/cart/:id" component={CartScreen} />
//     <Route path="/shipping" component={ShippingScreen} />
//     <Route path="/payment" component={PaymentScreen} />
//     <Route path="/placeorder" component={PlaceOrderScreen} />
//     <Route path="/order" component={OrderScreen} />
//     <Route path="*" component={NotFound} />
//   </Routes>
// </Router>

export default App;
