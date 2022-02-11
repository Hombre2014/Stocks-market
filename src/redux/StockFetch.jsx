import { getStock } from './StockReducer';

const URL = 'https://api.finage.co.uk/last/stock';
const apiKey = 'API_KEY873FXAPMWP2TQJQDYXKAKBTRNM4VM7U3';

const StockFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const stock = await res.json();
  dispatch(getStock(stock));
};

export default StockFetch;
