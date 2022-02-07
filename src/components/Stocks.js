import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Stock from './Stock';

const Stocks = () => {
  const stocks = useSelector((state) => state.stocksReducer);

  console.log(stocks);
  return (
    <div>
      <h2>Most active US stocks</h2>
      {stocks.map(
        (stock) => (
          <Stock
            key={uuidv4()}
            name={stock.company_name}
            symbol={stock.symbol}
            price={stock.price}
            change={stock.change}
            percentage={stock.change_percentage}
          />
        ),
      )}
    </div>
  );
};

export default Stocks;
