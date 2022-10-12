import env from 'react-dotenv';
import { getStocks } from './StocksReducer';

const { API_KEY } = env;
const URL = 'https://api/v1/stock/index/constituents?symbol=^DJI&token=';

const StocksFetch = () => async (dispatch) => {
  const res = await fetch(`${URL}${API_KEY}`);
  const stocks = await res.json();
  dispatch(getStocks(stocks.constituents));
  console.log(stocks.constituents);
};

export default StocksFetch;
