import { getStocks } from './StocksReducer';

const URL = 'https://api.finage.co.uk/market-information/us/most-actives';
const apiKey = 'API_KEY71UYHHN4T6NYZY7718KF12JOV7B5NNJ6';

const StocksFetch = () => async (dispatch) => {
  const res = await fetch(`${URL}?apikey=${apiKey}`);
  const stocks = await res.json();
  dispatch(getStocks(stocks));
};

export default StocksFetch;
