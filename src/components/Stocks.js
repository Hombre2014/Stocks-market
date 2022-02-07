import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Stock from './Stock';
import './stocks.css';

const Stocks = () => {
  const stocks = useSelector((state) => state.stocksReducer);

  console.log(stocks);
  return (
    <div>
      <h2 className="most-heading">Most active US stocks</h2>
      <section className="card-container">
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
      </section>
    </div>
  );
};

export default Stocks;
