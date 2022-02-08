import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getStock } from '../redux/StockReducer';

const StockDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.StockReducer);
  console.log(stock);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getStock(params.symbol));
    }, 1000);
  }, [dispatch]);

  return (
    <div>
      <h1>
        Stock&apos;s
        Details
        Symbol:
        {params.symbol}
      </h1>
    </div>
  );
};

export default StockDetails;
