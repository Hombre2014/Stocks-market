import { getStock } from './StockReducer';

const URL = 'https://api.finage.co.uk/last/stock';
const apiKey = 'API_KEY99K161NC74RWRN8AVNKQI74QRB04V1WY';

/* eslint linebreak-style: ["error", "windows"] */
const StockFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const stock = await res.json();
  dispatch(getStock(stock));
};

export default StockFetch;
