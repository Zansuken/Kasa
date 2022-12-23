import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Render Footer correctly.', () => {
  it('Render the copyrights.', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2020 Kasa. All rights reserved/i));
  });

  it('Render the logo.', () => {
    render(<Footer />);
    const logo = screen.getByTestId('footer-logo');

    expect(logo).toBeInTheDocument();
  });
});
