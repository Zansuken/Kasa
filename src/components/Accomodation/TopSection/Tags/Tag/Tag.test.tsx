import { render, screen } from '@testing-library/react';
import Tag from './Tag';

it('Render Tag correctly.', () => {
  const mockedProps = {
    tag: 'Beautiful',
  };

  render(<Tag {...mockedProps} />);

  expect(screen.getByText(mockedProps.tag)).toBeInTheDocument();
});
