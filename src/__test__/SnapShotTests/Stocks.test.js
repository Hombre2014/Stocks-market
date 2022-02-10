import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Stocks from '../../components/Stocks';
import store from '../../redux/configureStore';

describe('Testing Home page - stocks', () => {
  it('Renders the home page showing stocks successfully', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <Stocks />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(home).toMatchSnapshot();
  });
});
