import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import '../pages/Login.js';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Flipkart</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="nav-icons">
      <Link to="/Login">
        <button>Login</button>
      </Link>
        <button>More</button>
        <button>Cart</button>
      </div>
    </header>
  );
};

export default Header;
