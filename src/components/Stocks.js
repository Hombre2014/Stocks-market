import React from 'react';
import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';

const Stocks = () => {
  const stocks = useSelector((state) => state.stocksReducer);

  console.log(stocks);
  return (
    <div>
      <h2>Most active US stocks</h2>
    </div>
  );
};

export default Stocks;
