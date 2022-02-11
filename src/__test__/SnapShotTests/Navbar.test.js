import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../../components/Navbar';

describe('Testing the navbar component', () => {
  it('Renders navbar correctly', () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    expect(navbar).toMatchSnapshot();
  });
});
