import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StockFetch from '../redux/StockFetch';

const StockDetails = () => {
  const stock = useSelector((state) => state.stockReducer);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // setTimeout(() => {
    dispatch(StockFetch(params.symbol));
    // }, 1000);
  }, [dispatch]);

  return (
    <div>
      <h2>
        Stock&apos;s
        Details
      </h2>
      <p>
        Symbol:
        {' '}
        {params.symbol}
      </p>
      <p>
        Ask:
        {' '}
        {stock[0].ask}
      </p>
      <p>
        Ask Size:
        {' '}
        {stock[0].asize}
      </p>
      <p>
        Bid:
        {' '}
        {stock[0].bid}
      </p>
      <p>
        Bid Size:
        {' '}
        {stock[0].bsize}
      </p>
      {/* <p>
        Time:
        {' '}
        {stock[0].timestamp}
      </p> */}
    </div>
  );
};

export default StockDetails;
