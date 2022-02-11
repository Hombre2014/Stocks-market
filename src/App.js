import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Stocks from './components/Stocks';
import StocksFetch from './redux/StocksFetch';
import InfoFetch from './redux/InfoFetch';
import StockFetch from './redux/StockFetch';
import StockDetails from './components/StockDetails';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(StocksFetch()); }, []);
  useEffect(() => { dispatch(StockFetch()); }, []);
  useEffect(() => { dispatch(InfoFetch()); }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Stocks />} />
        <Route path="/stock-details/:symbol" element={<StockDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
