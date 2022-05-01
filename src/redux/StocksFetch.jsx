import { getStocks } from './StocksReducer';

const URL = 'https://api.finage.co.uk/market-information/us/most-actives';
const apiKey = process.env.REACT_APP_FINAGE_API_KEY;

const StocksFetch = () => async (dispatch) => {
  const res = await fetch(`${URL}?apikey=${apiKey}`);
  const stocks = await res.json();
  dispatch(getStocks(stocks));
};

export default StocksFetch;
