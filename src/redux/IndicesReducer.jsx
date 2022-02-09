const GET_INDICES = 'stocks-market/GET_INDICES';

export const initialState = [];

export const getIndices = (payload) => ({
  type: GET_INDICES,
  payload,
});

const indicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INDICES:
      return [action.payload];
    default:
      return state;
  }
};

export default indicesReducer;
