import React from 'react';
import './stock.css';

const Stock = (stock) => {
  const {
    name, symbol, price, change, percentage,
  } = stock;
  const changeFloat = parseFloat(change).toFixed(2);
  const percentageFloat = parseFloat(percentage).toFixed(2);
  return (
    <div className="card">
      <h4>{name}</h4>
      <h5>
        Symbol:
        {' '}
        {symbol}
      </h5>
      <p>
        Price: $
        {price}
      </p>
      <p>
        Change:
        {' '}
        <span style={{ color: (changeFloat > 0) ? 'black' : 'red' }}>
          {changeFloat}
        </span>
      </p>
      <p>
        Percent change:
        {' '}
        <span style={{ color: (percentageFloat > 0) ? 'black' : 'red' }}>
          {percentageFloat}
          %
        </span>
      </p>
    </div>
  );
};

export default Stock;
