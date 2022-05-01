import { getStock } from './StockReducer';

const URL = 'https://api.finage.co.uk/last/stock';
const apiKey = process.env.REACT_APP_FINAGE_API_KEY;

const StockFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const stock = await res.json();
  dispatch(getStock(stock));
};

export default StockFetch;
