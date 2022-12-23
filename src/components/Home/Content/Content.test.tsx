import { render, screen, within } from '@testing-library/react';
import Content from './Content';
import accomodations from '../../../data/accomodations.json';
import { CustomRouter } from '../../../App';

it('Render Content correctly.', () => {
  render(
    <CustomRouter>
      <Content accomodations={accomodations} />
    </CustomRouter>
  );

  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');

  expect(items.length).toBe(accomodations.length);

  accomodations.forEach(({ title }) => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
