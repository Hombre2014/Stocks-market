const GET_STOCKS = 'stocks-market/GET_STOCKS';

export const initialState = [];

export const getStocks = (payload) => ({
  type: GET_STOCKS,
  payload,
});

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCKS:
      return [...action.payload];
    default:
      return state;
  }
};

export default stocksReducer;
