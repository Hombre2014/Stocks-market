import { getInfo } from './InfoReducer';

const URL = 'https://api.finage.co.uk/detail/stock';
const apiKey = 'API_KEY873FXAPMWP2TQJQDYXKAKBTRNM4VM7U3';

const InfoFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const info = await res.json();
  dispatch(getInfo(info));
};

export default InfoFetch;
