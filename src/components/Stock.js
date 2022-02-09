import React from 'react';
import './stock.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Stock = (stock) => {
  const {
    name, symbol, price, change, percentage,
  } = stock;
  const changeFloat = parseFloat(change).toFixed(2);
  const percentageFloat = parseFloat(percentage).toFixed(2);

  return (
    <div className="stock-container">
      <div className="stock-header">
        <h4>{name}</h4>
        <h5>
          Symbol:
          {' '}
          {symbol}
        </h5>
      </div>
      <div className="stock-details">
        <p>
          Price: $
          {price}
        </p>
        <p>
          Change: $
          {' '}
          <span style={{ color: (changeFloat > 0) ? 'black' : '#ffe5e5' }}>
            {changeFloat}
          </span>
          <FaArrowUp style={{
            color: '#86e48d',
            display: (changeFloat > 0) ? 'inline' : 'none',
          }}
          />
          <FaArrowDown style={{
            color: '#ff0000',
            display: (changeFloat < 0) ? 'inline' : 'none',
          }}
          />
        </p>
        <p>
          Percent change:
          {' '}
          <span style={{ color: (percentageFloat > 0) ? 'black' : '#ffe5e5' }}>
            {percentageFloat}
            %
          </span>
        </p>
      </div>
    </div>
  );
};

export default Stock;
