import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Stock from '../components/Stock';
import store from '../redux/configureStore';

describe('Testing the stock data', () => {
  test('Renders stock data correctly', () => {
    const data = {
      symbol: 'AAPL',
      price: '174.05',
      change: -3.27,
      change_percentage: '-0.09726409',
      company_name: 'Apple Inc.',
    };
    const stock = render(
      <Provider store={store}>
        <BrowserRouter>
          <Stock data={data} />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(stock).toMatchSnapshot();
  });
});
