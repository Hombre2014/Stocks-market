import env from 'react-dotenv';
import { getInfo } from './InfoReducer';

const URL = 'https://api.finage.co.uk/detail/stock';
const { API_KEY } = env;

const InfoFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${API_KEY}`);
  const info = await res.json();
  dispatch(getInfo(info));
};

export default InfoFetch;
