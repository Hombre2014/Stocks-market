import { getIndices } from './IndicesReducer';

const URL = 'https://api.finage.co.uk/last/index/';
// const index = 'W5000';
const apiKey = 'API_KEY71OLRJL8WKGIKYOS1NC6YK7FL2ED8RDM';

const IndicesFetch = (payload) => async (dispatch) => {
  const res = await fetch(`${URL}${payload}?apikey=${apiKey}`);
  const indices = await res.json();
  console.log(indices);
  dispatch(getIndices(indices));
};

export default IndicesFetch;
