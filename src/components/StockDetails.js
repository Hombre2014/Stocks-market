import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StockFetch from '../redux/StockFetch';
import InfoFetch from '../redux/InfoFetch';

const StockDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const stock = useSelector((state) => state.stockReducer);
  const info = useSelector((state) => state.infoReducer);
  console.log('This is params: ', params);
  console.log('This is params.symbol: ', params.symbol);
  console.log('This is stock: ', stock);
  console.log('This is info: ', info);

  useEffect(() => {
    dispatch(StockFetch(params.symbol));
  }, [dispatch]);

  useEffect(() => {
    dispatch(InfoFetch(params.symbol));
  }, []);

  const demoLogo = '../images/company.png';
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
            {info[0].symbol}
          </h4>
          <h5>
            Exchange:
            {' '}
            {info[0].name}
          </h5>
        </div>
        <div className="right">
          <img src={info[0]?.logo || demoLogo} alt="Company logo" width="128" height="128" />
        </div>
      </div>
      <div>
        <div>
          <p>
            Industry:
            {' '}
            {info[0].industry}
          </p>
          <p>
            Sector:
            {' '}
            {info[0].sector}
          </p>
          <p>
            Market Cap:
            {' '}
            {info[0].marketcap}
          </p>
          <p>
            CEO:
            {' '}
            {info[0].ceo}
          </p>
          <p>
            Web:
            {' '}
            {info[0].url}
          </p>
        </div>
        <div>
          <div className="ask">
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
          </div>
          <div className="bid">
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
          <p>
            Employees:
            {' '}
            {info[0].employees}
          </p>
          <p>
            State:
            {' '}
            {info[0].state}
          </p>
          <p>
            Address:
            {' '}
            {info[0].address}
          </p>
        </div>
      </div>
      <div>
        <p>
          Info:
          {' '}
          {info[0].description}
        </p>
      </div>
    </div>
  );
};

export default StockDetails;
