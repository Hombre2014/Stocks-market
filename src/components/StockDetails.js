import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StockFetch from '../redux/StockFetch';
import InfoFetch from '../redux/InfoFetch';

const StockDetails = () => {
  const stock = useSelector((state) => state.stockReducer);
  const info = useSelector((state) => state.infoReducer);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(StockFetch(params.symbol));
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(InfoFetch(params.symbol));
    }, 2000);
  }, [dispatch]);
  console.log(info);

  return (
    <div className="info-container">
      <h2 style={{ textAlign: 'center' }}>
        Stock&apos;s
        Details
      </h2>
      <div>
        <div className="left">
          <h3>
            Name:
            {' '}
            {info[0].name}
          </h3>
          <h4>
            Symbol:
            {' '}
            {params.symbol}
          </h4>
        </div>
        <div className="right">
          <img src={info[0].logo} alt="Company logo" />
        </div>
      </div>
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
