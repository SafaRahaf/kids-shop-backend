import React from 'react';
import Header from '../components/Header';
import ShopSection from '../components/HomeComponnets/ShopSection';
import ContactInfo from '../components/HomeComponnets/Contactinfo';
import CalltoActionSection from '../components/HomeComponnets/CalltoActionSection';
import Footer from '../components/Foote';

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <ShopSection />
      <CalltoActionSection />
      {/*  <ContactInfo />
      <Footer /> */}
    </div>
  );
};

export default HomeScreen;
