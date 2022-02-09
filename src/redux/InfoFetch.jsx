import { getInfo } from './InfoReducer';

const URL = 'https://api.finage.co.uk/detail/stock';
const apiKey = 'API_KEY71OLRJL8WKGIKYOS1NC6YK7FL2ED8RDM';

const InfoFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}/${payload}?apikey=${apiKey}`);
  const info = await res.json();
  console.log(info);
  dispatch(getInfo(info));
};

export default InfoFetch;
