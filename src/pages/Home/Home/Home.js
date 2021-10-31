import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Package from '../Package/Package';
import Review from '../Review/Review';
import Search from '../Search/Search';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Search />
      <Package />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;