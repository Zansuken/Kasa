import { render, screen } from '@testing-library/react';
import { CustomRouter } from 'App';
import Header from './Header';

const { getByTestId, getByText } = screen;

describe('Render Header correctly.', () => {
  beforeEach(() =>
    render(
      <CustomRouter>
        <Header />
      </CustomRouter>
    )
  );

  it('Render the logo.', () => {
    const logo = getByTestId('header-logo');

    expect(logo).toBeInTheDocument();
  });

  it('Render the navigation links.', () => {
    expect(getByText(/ACCUEIL/i)).toBeInTheDocument();
    expect(getByText(/A PROPOS/i)).toBeInTheDocument();
  });
});
