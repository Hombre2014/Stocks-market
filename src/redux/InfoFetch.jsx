import { getInfo } from './InfoReducer';

const URL = 'https://api.finage.co.uk/detail/stock';
const apiKey = process.env.REACT_APP_FINAGE_API_KEY;

const InfoFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const info = await res.json();
  dispatch(getInfo(info));
};

export default InfoFetch;
