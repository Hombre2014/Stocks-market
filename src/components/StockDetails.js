import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StockFetch from '../redux/StockFetch';

const StockDetails = () => {
  const stock = useSelector((state) => state.stockReducer);
  console.log('This is stock: ', stock);
  const params = useParams();
  console.log('This is params: ', params);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StockFetch(params.symbol));
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
    </div>
  );
};

export default StockDetails;
