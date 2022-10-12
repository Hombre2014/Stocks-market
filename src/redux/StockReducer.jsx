const GET_STOCK = 'stocks-market/GET_STOCK';

export const initialState = [];

export const getStock = (payload) => ({
  type: GET_STOCK,
  payload,
});

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCK:
      return [action.payload.constituents];
    default:
      return state;
  }
};

export default stockReducer;
