import { render, screen, within } from '@testing-library/react';
import Content from './Content';
import accommodations from '../../../data/accommodations.json';
import { CustomRouter } from '../../../App';

it('Render Content correctly.', () => {
  render(
    <CustomRouter>
      <Content accommodations={accommodations} />
    </CustomRouter>
  );

  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');

  expect(items.length).toBe(accommodations.length);

  accommodations.forEach(({ title }) => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
