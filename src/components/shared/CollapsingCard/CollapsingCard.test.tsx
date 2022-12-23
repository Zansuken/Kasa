import { fireEvent, render, screen, within } from '@testing-library/react';
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

  const clickOnBtnEvent = (button: HTMLElement) =>
    fireEvent(
      button,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

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

    it('Change the className of content when clicking on the button.', () => {
      render(<CollapsingCard {...PropsWithoutArray} />);
      const content = screen.getByTestId('deploying-card-content');
      const button = screen.getByTestId('deploying-card');

      expect(content).toHaveClass('content');

      clickOnBtnEvent(button);

      expect(content).toHaveClass('content deployed');
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
      const button = screen.getByTestId('deploying-card');

      expect(button).toBeInTheDocument();
    });

    it('Render the content.', () => {
      render(<CollapsingCard {...PropsWithArray} />);

      const list = screen.getByRole('list');
      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');

      expect(items.length).toBe(content.length);
    });

    it('Change the className of content when clicking on the button.', () => {
      render(<CollapsingCard {...PropsWithArray} />);
      const content = screen.getByTestId('deploying-card-content');
      const button = screen.getByTestId('deploying-card');

      expect(content).toHaveClass('content');

      clickOnBtnEvent(button);

      expect(content).toHaveClass('content deployed');
    });
  });
});
