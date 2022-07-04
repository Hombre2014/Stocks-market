import { getInfo } from './InfoReducer';

const URL = 'https://api.finage.co.uk/detail/stock';
const apiKey = 'API_KEY3eH6F8JXEENMRLR3S46CQK5G28QSR67G';

const InfoFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const info = await res.json();
  dispatch(getInfo(info));
};

export default InfoFetch;
