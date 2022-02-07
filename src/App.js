import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Stocks from './components/Stocks';
import StocksFetch from './redux/StocksFetch';
import IndicesFetch from './redux/IndicesFetch';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(StocksFetch()); }, []);
  useEffect(() => { dispatch(IndicesFetch()); }, []);

  return (
    <div>
      <Navbar />
      <Stocks />
    </div>
  );
};

export default App;
