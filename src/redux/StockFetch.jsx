import env from 'react-dotenv';
import { getStock } from './StockReducer';

const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];

api_key.apiKey = 'API_KEY';
const finnhubClient = new finnhub.DefaultApi();

const URL = 'https://api.finage.co.uk/last/stock';
const { API_KEY } = env;

const StockFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${API_KEY}`);
  const stock = await res.json();
  dispatch(getStock(stock));
};

export default StockFetch;
