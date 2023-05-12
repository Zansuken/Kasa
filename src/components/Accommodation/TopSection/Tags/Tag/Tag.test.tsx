import { render, screen } from '@testing-library/react';
import Tag from './Tag';
import { ComponentProps } from 'react';

it('Render Tag correctly.', () => {
  const mockedProps: ComponentProps<typeof Tag> = {
    tag: 'Beautiful',
  };

  render(<Tag {...mockedProps} />);

  expect(screen.getByText(mockedProps.tag)).toBeInTheDocument();
});
