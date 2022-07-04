import { getStock } from './StockReducer';

const URL = 'https://api.finage.co.uk/last/stock';
const apiKey = 'API_KEY3eH6F8JXEENMRLR3S46CQK5G28QSR67G';

const StockFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const stock = await res.json();
  dispatch(getStock(stock));
};

export default StockFetch;
