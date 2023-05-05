import { render, screen } from '@testing-library/react';
import { CustomRouter } from 'App';
import Header from './Header';

describe('Render Header correctly.', () => {
  const renderHeader = () =>
    render(
      <CustomRouter>
        <Header />
      </CustomRouter>
    );

  it('Render the logo.', () => {
    renderHeader();
    const logo = screen.getByTestId('header-logo');

    expect(logo).toBeInTheDocument();
  });

  it('Render the navigation links.', () => {
    renderHeader();

    expect(screen.getByText(/ACCUEIL/i)).toBeInTheDocument();
    expect(screen.getByText(/A PROPOS/i)).toBeInTheDocument();
  });
});
