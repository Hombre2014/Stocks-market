import { getStocks } from './StocksReducer';

const URL = 'https://api.finage.co.uk/market-information/us/most-actives';
const apiKey = 'API_KEY99K161NC74RWRN8AVNKQI74QRB04V1WY';

/* eslint linebreak-style: ["error", "windows"] */
const StocksFetch = () => async (dispatch) => {
  const res = await fetch(`${URL}?apikey=${apiKey}`);
  const stocks = await res.json();
  dispatch(getStocks(stocks));
};

export default StocksFetch;
