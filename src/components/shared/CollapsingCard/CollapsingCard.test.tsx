import { render, screen, within } from '@testing-library/react';
import CollapsingCard from './CollapsingCard';

describe('Render CollapsingCard correctly', () => {
  const MockedProps = {
    PropsWithoutArray: {
      content:
        'Profitez du charme de la vie parisienne dans un magnifique appartement...',
      label: 'Description',
    },
    PropsWithArray: {
      content: [
        'Parking',
        'Sèche Cheveux',
        'Machine à laver',
        'Wi-fi',
        'Cuisine équipée',
        'Télévision',
      ],
      label: 'Description',
    },
  };

  const { PropsWithoutArray, PropsWithArray } = MockedProps;

  describe('With string as content', () => {
    const { label, content } = PropsWithoutArray;

    it('Render the label.', () => {
      render(<CollapsingCard {...PropsWithoutArray} />);
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });

    it('Render the button.', () => {
      render(<CollapsingCard {...PropsWithoutArray} />);

      const button = screen.getByTestId('deploying-card');

      expect(button).toBeInTheDocument();
    });

    it('Render the content.', () => {
      render(<CollapsingCard {...PropsWithoutArray} />);

      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });

  describe('With string[] as content', () => {
    const { label, content } = PropsWithArray;

    it('Render the label.', () => {
      render(<CollapsingCard {...PropsWithArray} />);
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });

    it('Render the button.', () => {
      render(<CollapsingCard {...PropsWithArray} />);
      const button = screen.queryByTestId('deploying-card');

      expect(button).toBeDefined();
    });

    it('Render the content.', () => {
      render(<CollapsingCard {...PropsWithArray} />);

      const list = screen.getByRole('list');
      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');

      expect(items.length).toBe(content.length);
    });
  });
});
