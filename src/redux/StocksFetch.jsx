import { getStocks } from './StocksReducer';

const URL = 'https://api.finage.co.uk/market-information/us/most-actives?apikey=';
const apiKey = 'API_KEY84LXEWREHZBTFOEHCOJ18U8OAPLZVT6D';

const StocksFetch = () => async (dispatch) => {
  const res = await fetch(`${URL}${apiKey}`);
  const stocks = await res.json();
  console.log(stocks);
  dispatch(getStocks(stocks));
};

export default StocksFetch;
