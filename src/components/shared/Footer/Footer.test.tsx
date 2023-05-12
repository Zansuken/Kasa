import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const { getByText, getByTestId } = screen;

describe('Render Footer correctly.', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('Render the copyrights.', () => {
    expect(getByText(/© 2020 Kasa. All rights reserved/i));
  });

  it('Render the logo.', () => {
    const logo = getByTestId('footer-logo');

    expect(logo).toBeInTheDocument();
  });
});
