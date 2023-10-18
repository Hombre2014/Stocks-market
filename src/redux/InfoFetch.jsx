import { getInfo } from './InfoReducer';

const URL = 'https://api.finage.co.uk/detail/stock';
const apiKey = 'API_KEY99K161NC74RWRN8AVNKQI74QRB04V1WY';
/* eslint linebreak-style: ["error", "windows"] */
const InfoFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const info = await res.json();
  dispatch(getInfo(info));
};

export default InfoFetch;
