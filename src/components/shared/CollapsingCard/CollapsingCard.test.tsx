import { fireEvent, render, screen, within } from '@testing-library/react';
import CollapsingCard from './CollapsingCard';
import { ComponentProps } from 'react';

describe('Render CollapsingCard correctly.', () => {
  const { getByText, getByLabelText, getByTestId, getByRole } = screen;

  const mockedProps: ComponentProps<typeof CollapsingCard> = {
    label: 'Description',
    content: '',
  };

  const clickOnBtnEvent = (button: HTMLElement) =>
    fireEvent(
      button,
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );

  describe('With string as content.', () => {
    const { label } = mockedProps;

    const content =
      'Profitez du charme de la vie parisienne dans un magnifique appartement...';

    beforeEach(() => {
      render(<CollapsingCard {...mockedProps} content={content} />);
    });

    it('Render the label.', () => {
      expect(getByLabelText(label)).toBeInTheDocument();
    });

    it('Render the button.', () => {
      const button = getByTestId('deploying-card');

      expect(button).toBeInTheDocument();
    });

    it('Render the content.', () => {
      expect(getByText(content)).toBeInTheDocument();
    });

    it('Change the className of content when clicking on the button.', () => {
      const content = getByTestId('deploying-card-content');
      const button = getByTestId('deploying-card');

      expect(content).toHaveClass('content');

      clickOnBtnEvent(button);

      expect(content).toHaveClass('content deployed');
    });
  });

  describe('With string[] as content.', () => {
    const { label } = mockedProps;

    const content = [
      'Parking',
      'Sèche Cheveux',
      'Machine à laver',
      'Wi-fi',
      'Cuisine équipée',
      'Télévision',
    ];

    beforeEach(() => {
      render(<CollapsingCard {...mockedProps} content={content} />);
    });

    it('Render the label.', () => {
      expect(getByLabelText(label)).toBeInTheDocument();
    });

    it('Render the button.', () => {
      const button = getByTestId('deploying-card');

      expect(button).toBeInTheDocument();
    });

    it('Render the content.', () => {
      const list = getByRole('list');
      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');

      expect(items.length).toBe(content.length);
    });

    it('Change the className of content when clicking on the button.', () => {
      const content = getByTestId('deploying-card-content');
      const button = getByTestId('deploying-card');

      expect(content).toHaveClass('content');

      clickOnBtnEvent(button);

      expect(content).toHaveClass('content deployed');
    });
  });
});
