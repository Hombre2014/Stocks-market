import { getIndices } from './IndicesReducer';

const URL = 'https://api.finage.co.uk/last/index/';
// const index = 'W5000';
const apiKey = 'API_KEY84LXEWREHZBTFOEHCOJ18U8OAPLZVT6D';

const IndicesFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}${payload}?apikey=${apiKey}`);
  const index = await res.json();
  console.log('This is from API', index);
  dispatch(getIndices(index));
};

export default IndicesFetch;
