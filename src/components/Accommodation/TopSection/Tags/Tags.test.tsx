import { render, screen, within } from '@testing-library/react';
import Tags from './Tags';

it('Render Tags correctly.', () => {
  const mockedProps = {
    tags: ['Nice', 'Cool', 'Awesome'],
  };
  render(<Tags {...mockedProps} />);

  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');

  expect(list).toBeInTheDocument();
  expect(items).toHaveLength(3);
});
