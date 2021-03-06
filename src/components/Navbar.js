import React from 'react';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import './navbar.css';
import logo from '../images/stock-exchange.jpg';

const Navbar = () => (
  <nav>
    <div className="navigation">
      <h1><a href="/" className="home">Stocks Market</a></h1>
      <div className="icons">
        <FaMicrophone />
        <FaCog />
      </div>
    </div>
    <div className="main">
      <div className="logo">
        <img src={logo} alt="Stock market logo" width="100%" />
      </div>
    </div>
  </nav>
);

export default Navbar;
