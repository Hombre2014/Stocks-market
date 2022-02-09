import { getStock } from './StockReducer';

const URL = 'https://api.finage.co.uk/last/stock';
const apiKey = 'API_KEY71OLRJL8WKGIKYOS1NC6YK7FL2ED8RDM';

const StockFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const stock = await res.json();
  console.log('This is stock from StockFetch: ', stock);
  dispatch(getStock(stock));
};

export default StockFetch;
