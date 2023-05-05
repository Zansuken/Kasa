import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Carousel>;

describe('Render Carousel correctly.', () => {
  const mockedProps = {
    pictures: ['testUrl1', 'testUrl2', 'testUrl3'],
  };

  const mockedPropsPicEmpty = {
    pictures: ['testUrl1'],
  };

  const renderCarousel = (Props: Props) => render(<Carousel {...Props} />);

  it('Render the buttons.', () => {
    renderCarousel(mockedProps);
    const button = screen.getAllByRole('button');
    const stepIndicator = screen.getByTestId('step-indicator-test');

    expect(button).toHaveLength(2);
    expect(stepIndicator).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
  });

  it("Doesn't ender the buttons if only one image.", () => {
    renderCarousel(mockedPropsPicEmpty);
    const button = screen.queryAllByRole('button');
    const stepIndicator = screen.queryByTestId('step-indicator-test');

    expect(button).toHaveLength(0);
    expect(stepIndicator).not.toBeInTheDocument();
  });

  it('Render the images.', () => {
    renderCarousel(mockedProps);

    const images = screen.getAllByRole('img');

    expect(images.length).toBe(3);

    mockedProps.pictures.forEach((img, index) => {
      expect(images[index]).toHaveAttribute('src', img);
    });
  });
});
