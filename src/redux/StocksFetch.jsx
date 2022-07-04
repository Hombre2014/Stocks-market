import { getStocks } from './StocksReducer';

const URL = 'https://api.finage.co.uk/market-information/us/most-actives';
const apiKey = 'API_KEY3eH6F8JXEENMRLR3S46CQK5G28QSR67G';

const StocksFetch = () => async (dispatch) => {
  const res = await fetch(`${URL}?apikey=${apiKey}`);
  const stocks = await res.json();
  dispatch(getStocks(stocks));
};

export default StocksFetch;
