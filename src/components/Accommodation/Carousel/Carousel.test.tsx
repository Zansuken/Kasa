import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';
import { ComponentProps } from 'react';

const { getAllByRole, getByTestId, getByText, queryAllByRole, queryByTestId } =
  screen;

describe('Render Carousel with more than one picture.', () => {
  const mockedProps: ComponentProps<typeof Carousel> = {
    pictures: ['testUrl1', 'testUrl2', 'testUrl3'],
  };

  beforeEach(() => {
    render(<Carousel {...mockedProps} />);
  });

  it('Render the buttons.', () => {
    const button = getAllByRole('button');
    const stepIndicator = getByTestId('step-indicator-test');

    expect(button).toHaveLength(2);
    expect(stepIndicator).toBeInTheDocument();
    expect(getByText(/3/i)).toBeInTheDocument();
  });

  it('Render the images.', () => {
    const images = getAllByRole('img');

    expect(images.length).toBe(3);

    mockedProps.pictures.forEach((img, index) => {
      expect(images[index]).toHaveAttribute('src', img);
    });
  });
});

describe('Render Carousel with one picture.', () => {
  const mockedProps: ComponentProps<typeof Carousel> = {
    pictures: ['testUrl1'],
  };

  beforeEach(() => {
    render(<Carousel {...mockedProps} />);
  });

  it("Doesn't ender the buttons if only one image.", () => {
    const button = queryAllByRole('button');
    const stepIndicator = queryByTestId('step-indicator-test');

    expect(button).toHaveLength(0);
    expect(stepIndicator).not.toBeInTheDocument();
  });
});
