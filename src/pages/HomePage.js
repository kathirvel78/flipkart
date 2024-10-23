import React from 'react';
import Categories from '../components/Categories';
import Banner from '../components/Banner';
import Products from '../components/Products';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Categories />
      <Banner />
      <Products />
    </div>
  );
};

export default HomePage;
