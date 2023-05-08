import { render, screen, within } from '@testing-library/react';
import Content from './Content';
import { CustomRouter } from 'App';
import { ComponentProps } from 'react';

const contentMockedProps: ComponentProps<typeof Content> = {
  accommodations: [
    {
      id: '1',
      title: 'Accommodation 1',
      cover: 'https://picsum.photos/seed/1/300/200',
      description: 'Description 1',
      equipments: ['equipments 1'],
      host: {
        name: 'Host 1',
        picture: 'https://picsum.photos/seed/1/300/200',
      },
      rating: '1',
      pictures: ['https://picsum.photos/seed/1/300/200'],
      location: 'Location 1',
      tags: ['tag 1', 'tag 2', 'tag 3'],
    },
    {
      id: '2',
      title: 'Accommodation 2',
      cover: 'https://picsum.photos/seed/2/300/200',
      description: 'Description 2',
      equipments: ['equipments 2'],
      host: {
        name: 'Host 2',
        picture: 'https://picsum.photos/seed/2/300/200',
      },
      rating: '2',
      pictures: ['https://picsum.photos/seed/2/300/200'],
      location: 'Location 2',
      tags: ['tag 1', 'tag 2', 'tag 3'],
    },
    {
      id: '3',
      title: 'Accommodation 3',
      cover: 'https://picsum.photos/seed/3/300/200',
      description: 'Description 3',
      equipments: ['equipments 3'],
      host: {
        name: 'Host 3',
        picture: 'https://picsum.photos/seed/3/300/200',
      },
      rating: '3',
      pictures: ['https://picsum.photos/seed/3/300/200'],
      location: 'Location 3',
      tags: ['tag 1', 'tag 2', 'tag 3'],
    },
  ],
};

it('Render Content correctly.', () => {
  render(
    <CustomRouter>
      <Content {...contentMockedProps} />
    </CustomRouter>
  );

  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');

  expect(items.length).toBe(3);

  contentMockedProps.accommodations?.forEach(({ title }) => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
