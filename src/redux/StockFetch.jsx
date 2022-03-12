import { getStock } from './StockReducer';

const URL = 'https://api.finage.co.uk/last/stock';
const apiKey = 'API_KEY71UYHHN4T6NYZY7718KF12JOV7B5NNJ6';

const StockFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const stock = await res.json();
  dispatch(getStock(stock));
};

export default StockFetch;
