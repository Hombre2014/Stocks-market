import React from 'react';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import './navbar.css';
import logo from '../images/stock-exchange.jpg';
// import Indices from './Indices';

const Navbar = () => {
  const n = 1;
  console.log(n);
  return (
    <nav>
      <div className="navigation">
        <h1><a href="/" className="home">Stocks Market</a></h1>
        <div className="icons">
          <FaMicrophone />
          <FaCog />
        </div>
      </div>
      <div className="logo">
        <img src={logo} alt="Stock market logo" width="50%" />
      </div>
      <div className="indices">
        {/* <Indices /> */}
      </div>
    </nav>
  );
};

export default Navbar;
