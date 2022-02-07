import React from 'react';

const Stock = (stock) => {
  const {
    name, symbol, price, change, percentage,
  } = stock;
  return (
    <div>
      <h3>{name}</h3>
      <h4>{symbol}</h4>
      <p>{price}</p>
      <p>{change}</p>
      <p>{percentage}</p>
    </div>
  );
};

export default Stock;
