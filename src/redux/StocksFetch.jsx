import { getStocks } from './StocksReducer';

const URL = 'https://api.finage.co.uk/market-information/us/most-actives';
const apiKey = 'API_KEY873FXAPMWP2TQJQDYXKAKBTRNM4VM7U3';

const StocksFetch = () => async (dispatch) => {
  const res = await fetch(`${URL}?apikey=${apiKey}`);
  const stocks = await res.json();
  dispatch(getStocks(stocks));
};

export default StocksFetch;
