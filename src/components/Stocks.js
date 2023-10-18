import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Stock from './Stock';
import './stocks.css';

const Stocks = () => {
  /* eslint linebreak-style: ["error", "windows"] */
  const stocks = useSelector((state) => state.stocksReducer);
  const [searchString, setSearchString] = useState('');

  const searchStock = (e) => {
    setSearchString(e.target.value);
  };

  const selection = stocks.filter((stock) => Object.keys(stock).some((key) => stock[key]
    .toString()
    .toLowerCase()
    .includes(searchString.toLocaleLowerCase())));

  return (
    <div className="stocks-section">
      <h2 className="most-heading">Most active US stocks</h2>
      <input onChange={searchStock} type="text" placeholder="Search for stock" className="search" value={searchString} />
      <section className="card-container">
        {selection.map(
          (stock) => (
            <div className="card" key={stock.symbol}>
              <Link className="link" to={`/stock-details/${stock.symbol}`}>
                <Stock
                  name={stock.company_name}
                  symbol={stock.symbol}
                  price={stock.price}
                  change={stock.change}
                  percentage={stock.change_percentage}
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
