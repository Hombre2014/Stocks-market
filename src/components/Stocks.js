import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
            <div className="card" key={stock.symbol}>
              <Link className="link" to={`/stock-details/${stock.symbol}`}>
                <Stock
                  name={stock.company_name}
                  symbol={stock.symbol}
                  price={stock.price}
                  change={stock.change}
                  percentage={stock.change_percentage}
                  hoverable
                />
              </Link>
            </div>
          ),
        )}
      </section>
    </div>
  );
};

export default Stocks;
