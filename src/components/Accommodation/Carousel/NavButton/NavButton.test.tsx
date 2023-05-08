import { render, screen } from '@testing-library/react';
import NavButton from './NavButton';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof NavButton>;

describe('Render NavButton correctly.', () => {
  const mockedProps = {
    currentPic: 1,
    direction: 'right',
    onPicChange: () => undefined,
    totalPics: 5,
  };

  const renderNavButton = (Props: Props) => render(<NavButton {...Props} />);

  it('Render the button.', () => {
    renderNavButton({ ...mockedProps, direction: 'right' });

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('Render the button with the good className (right).', () => {
    renderNavButton({ ...mockedProps, direction: 'right' });

    const button = screen.getByRole('button');

    expect(button).toHaveClass('root right');
  });

  it('Render the button with the good className (left).', () => {
    renderNavButton({ ...mockedProps, direction: 'left' });

    const button = screen.getByRole('button');

    expect(button).toHaveClass('root left');
  });
});
