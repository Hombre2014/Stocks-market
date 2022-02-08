import { getStocks } from './StocksReducer';

const URL = 'https://api.finage.co.uk/market-information/us/most-actives?apikey=API_KEY71OLRJL8WKGIKYOS1NC6YK7FL2ED8RDM';

const StocksFetch = () => async (dispatch) => {
  const res = await fetch(URL);
  const stocks = await res.json();
  console.log(stocks);
  dispatch(getStocks(stocks));
};

export default StocksFetch;
