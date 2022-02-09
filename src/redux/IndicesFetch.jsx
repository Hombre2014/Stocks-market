import { getIndices } from './IndicesReducer';

const URL = 'https://api.finage.co.uk/last/index/';
const apiKey = 'API_KEY84LXEWREHZBTFOEHCOJ18U8OAPLZVT6D';

const IndicesFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}${payload}?apikey=${apiKey}`);
  const indices = await res.json();
  console.log(indices);
  dispatch(getIndices(indices));
};

export default IndicesFetch;
