import { getInfo } from './InfoReducer';

const URL = 'https://api.finage.co.uk/detail/stock';
const apiKey = 'API_KEY71UYHHN4T6NYZY7718KF12JOV7B5NNJ6';

const InfoFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const info = await res.json();
  dispatch(getInfo(info));
};

export default InfoFetch;
