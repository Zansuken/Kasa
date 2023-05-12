import { render, screen } from '@testing-library/react';
import NavButton from './NavButton';
import { ComponentProps } from 'react';

const { getByRole } = screen;

describe('Render NavButton correctly.', () => {
  const mockedProps: ComponentProps<typeof NavButton> = {
    currentPic: 1,
    direction: 'right',
    onPicChange: () => undefined,
    totalPics: 5,
  };

  it('Render the button.', () => {
    render(<NavButton {...mockedProps} />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('Render the button with the good className (right).', () => {
    render(<NavButton {...mockedProps} />);

    const button = getByRole('button');

    expect(button).toHaveClass('root right');
  });

  it('Render the button with the good className (left).', () => {
    render(<NavButton {...mockedProps} direction="left" />);

    const button = getByRole('button');

    expect(button).toHaveClass('root left');
  });
});
