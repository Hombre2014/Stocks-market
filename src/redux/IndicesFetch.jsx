import { getIndices } from './IndicesReducer';

const URL = 'https://api.finage.co.uk/last/index/';
const index = 'W5000';
const apiKey = 'API_KEY84LXEWREHZBTFOEHCOJ18U8OAPLZVT6D';

const IndicesFetch = () => async (dispatch) => {
  const res = await fetch(`${URL}${index}?apikey=${apiKey}`);
  const indices = await res.json();
  console.log(indices);
  dispatch(getIndices(indices));
};

export default IndicesFetch;
