import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import StockDetails from '../components/StockDetails';
import store from '../redux/configureStore';

describe('Testing the stock info data', () => {
  test('Renders stock data correctly for ticker AMD', () => {
    const infoAMD = {
      symbol: 'AMD',
      logo: 'https://finage.s3.eu-west-2.amazonaws.com/stock/logo/AMD.png',
      name: 'Advanced Micro Devices, Inc. Common Stock',
      description: 'Advanced Micro Devices Inc designs and produces microprocessors and low-power processor solutions for the computer, communications, and consumer electronics industries.',
      exchange: 'Nasdaq Global Select',
      ceo: 'Lisa T. Su',
      industry: 'Semiconductors',
      address: '2485 Augustine Drive Santa Clara CA, 95054',
      employees: 8900,
      sector: 'Technology',
      marketcap: 21477261072,
    };
    const stockInfoAMD = render(
      <Provider store={store}>
        <BrowserRouter>
          <StockDetails info={infoAMD} />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(stockInfoAMD).toMatchSnapshot();
  });

  test('Renders stock data correctly for ticker T', () => {
    const infoT = {
      symbol: 'T',
      logo: 'https://finage.s3.eu-west-2.amazonaws.com/stock/logo/T.png',
      name: 'AT&T Inc.',
      description: 'AT&T Inc is engaged in provision of communications and digital entertainment services in the United States and the world. It provides fixed-line services, including voice, data, and television services to consumers and small businesses.',
      exchange: 'New York Stock Exchange',
      ceo: 'Randall L. Stephenson',
      industry: 'Communication Services',
      address: '208 S. Akard Street Dallas TX, 75202',
      employees: 273210,
      sector: 'Communication Services',
      marketcap: 219213360000,
    };
    const stockInfoT = render(
      <Provider store={store}>
        <BrowserRouter>
          <StockDetails info={infoT} />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(stockInfoT).toMatchSnapshot();
  });
});
