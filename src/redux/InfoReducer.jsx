const GET_INFO = 'stocks-market/GET_INFO';

export const initialState = [];

export const getInfo = (payload) => ({
  type: GET_INFO,
  payload,
});

/* eslint linebreak-style: ["error", "windows"] */
const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO:
      return [action.payload];
    default:
      return state;
  }
};

export default infoReducer;
