import { render, screen } from '@testing-library/react';
import NavButton from './NavButton';

type Props = {
  currentPic: number;
  direction: string;
  onPicChange: (currentPic: number) => void;
  totalPics: number;
};

describe('Render NavButton correctly.', () => {
  const mockedProps = {
    currentPic: 1,
    direction: 'right',
    onPicChange: () => undefined,
    totalPics: 5,
  };

  const renderNavButton = (Props: Props) => render(<NavButton {...Props} />);

  it('Render the button.', () => {
    renderNavButton(mockedProps);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('Render the button with the good className (right).', () => {
    renderNavButton(mockedProps);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('root right');
  });

  it('Render the button with the good className (left).', () => {
    renderNavButton({ ...mockedProps, direction: 'left' });

    const button = screen.getByRole('button');

    expect(button).toHaveClass('root left');
  });
});
