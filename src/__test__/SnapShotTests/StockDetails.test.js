import stocksReducer from '../../redux/StocksReducer';

const mockStore = {
  stocksReducer: [
    {
      symbol: 'F',
      price: '18.23',
      change: -0.12,
      change_percentage: '-0.66',
      company_name: 'Ford Motor Company',
    },
    {
      symbol: 'AAPL',
      price: '174.05',
      change: -3.27,
      change_percentage: '-0.09726409',
      company_name: 'Apple Inc.',
    },
  ],
};

describe('Testing initial stocks details', () => {
  test('Empty initial value', () => {
    expect(stocksReducer([], {})).toEqual([]);
  });
});

describe('Mocking stocks Reducer function', () => {
  test('Testing stocks Reducer with the mock data', () => {
    const FETCH_DATA = 'FETCH_DATA';
    const store = mockStore;
    const action = {
      type: FETCH_DATA,
      payload: {
        stocksReducer: [
          {
            symbol: 'F',
            price: '18.23',
            change: -0.12,
            change_percentage: '-0.66',
            company_name: 'Ford Motor Company',
          },
          {
            symbol: 'AAPL',
            price: '174.05',
            change: -3.27,
            change_percentage: '-0.09726409',
            company_name: 'Apple Inc.',
          },
        ],
      },
    };
    expect(stocksReducer(store, action)).toEqual(action.payload);
  });
});
