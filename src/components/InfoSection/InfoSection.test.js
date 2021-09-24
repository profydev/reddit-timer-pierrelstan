import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';
import InfoSection from './InfoSection';

const setup = () => {
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <InfoSection />
      </MemoryRouter>
    </ThemeProvider>,
  );
};

describe('InfoSection', () => {
  test('link profy.dev should have url "profy.dev" ', () => {
    setup();
    expect(
      screen.getByText(/profy.dev/i).closest('a'),
    ).toHaveAttribute('href', 'https://profy.dev');
  });
  test('Click here for more information should have url profy.dev/employers ', () => {
    setup();
    expect(
      screen.getByText(/click here for more information/i).closest('a'),
    ).toHaveAttribute('href', 'https://profy.dev/employers');
  });
});
