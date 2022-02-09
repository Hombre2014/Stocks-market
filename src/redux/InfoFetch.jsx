import { getInfo } from './InfoReducer';

const URL = 'https://api.finage.co.uk/detail/stock';
const apiKey = 'API_KEY84LXEWREHZBTFOEHCOJ18U8OAPLZVT6D';

const InfoFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const info = await res.json();
  console.log('This is InfoFetch: ', info);
  dispatch(getInfo(info));
};

export default InfoFetch;
