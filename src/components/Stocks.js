import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Stock from './Stock';
import './stocks.css';

const Stocks = () => {
  const stocks = useSelector((state) => state.stocksReducer);
  const [searchText, setSearchText] = useState('');
  console.log(stocks);

  const searchFilter = (e) => {
    setSearchText(e.target.value);
  };

  const filtered = stocks.filter((stock) => Object.keys(stock).some((key) => stock[key]
    .toString()
    .toLowerCase()
    .includes(searchText.toLocaleLowerCase())));

  return (
    <div>
      <h2 className="most-heading">Most active US stocks</h2>
      <input onChange={searchFilter} type="text" placeholder="Search for stock" className="search" value={searchText} />
      <section className="card-container">
        {filtered.map(
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
