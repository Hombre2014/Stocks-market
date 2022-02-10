import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import millify from 'millify';
import { FaAngleLeft } from 'react-icons/fa';
import StockFetch from '../redux/StockFetch';
import InfoFetch from '../redux/InfoFetch';
import './stockdetails.css';

const StockDetails = () => {
  const stock = useSelector((state) => state.stockReducer);
  console.log('This is stock: ', stock);
  const params = useParams();
  console.log('This is params: ', params);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StockFetch(params.symbol));
  }, [dispatch]);

  // Add new useSelector for Info
  const info = useSelector((state) => state.infoReducer);
  console.log('This is info: ', info);

  // Starts adding new function infoFetch
  useEffect(() => {
    dispatch(InfoFetch(params.symbol));
  }, []);

  const demoLogo = '../images/company.png';

  // The new Info plus the old stock data combined
  if (info.length !== 0) {
    return (
      <div className="info-container">
        <h2 style={{ textAlign: 'center' }}>
          Stock&apos;s
          Details
        </h2>
        <a href="/">
          <FaAngleLeft className="go-back" />
        </a>
        <div className="company-header">
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
            <h5>
              Exchange:
              {' '}
              {info[0].exchange}
            </h5>
          </div>
          <div className="right">
            <img src={info[0]?.logo || demoLogo} alt="Company logo" width="128" />
          </div>
        </div>
        <div className="company-info">
          <div className="company-data">
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
              {millify(info[0].marketcap, { precision: 3 })}
            </p>
            <p>
              CEO:
              {' '}
              {info[0].ceo}
            </p>
            {/* <p>
              Web:
              {' '}
              {info[0].url}
            </p> */}
          </div>
          <div className="market-info">
            <div className="bid-ask">
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
            </div>
            <p>
              Employees:
              {' '}
              {info[0].employees}
            </p>
            <p>
              Address:
              {' '}
              {info[0].address}
            </p>
          </div>
        </div>
        <div className="description">
          <p>
            Description:
            {' '}
            {info[0].description}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>Loading ...</div>
  );

  // Old return without Info that is working!
  // return (
  //   <div>
  //     <h2>
  //       Stock&apos;s
  //       Details
  //     </h2>
  //     <p>
  //       Symbol:
  //       {' '}
  //       {params.symbol}
  //     </p>
  //     <p>
  //       Ask:
  //       {' '}
  //       {stock[0].ask}
  //     </p>
  //     <p>
  //       Ask Size:
  //       {' '}
  //       {stock[0].asize}
  //     </p>
  //     <p>
  //       Bid:
  //       {' '}
  //       {stock[0].bid}
  //     </p>
  //     <p>
  //       Bid Size:
  //       {' '}
  //       {stock[0].bsize}
  //     </p>
  //   </div>
  // );
};

export default StockDetails;
