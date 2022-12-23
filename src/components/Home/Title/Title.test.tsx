import { render, screen } from '@testing-library/react';
import Title from './Title';

it('Render Title correctly.', () => {
  render(<Title />);

  expect(
    screen.getByText(/Chez vous, partout et ailleurs/i)
  ).toBeInTheDocument();
});
