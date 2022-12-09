import { FC, useEffect } from 'react';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/arrow.svg';
import classes from './NavButton.module.scss';

type Props = {
  direction: string;
  onPicChange: (currentPic: number) => void;
  currentPic: number;
  totalPics: number;
};

const NavButton: FC<Props> = ({
  direction,
  onPicChange,
  currentPic,
  totalPics,
}) => {
  const handlePicChange = () => {
    switch (direction) {
      case 'right':
        onPicChange(currentPic === totalPics ? 1 : ++currentPic);
        break;

      case 'left':
        onPicChange(currentPic === 1 ? totalPics : --currentPic);
        break;

      default:
        break;
    }
  };
  return (
    <button
      type="button"
      className={`${classes['root']} ${classes[direction]}`}
      onClick={handlePicChange}
    >
      <ArrowIcon className={classes['arrow']} />
    </button>
  );
};

export default NavButton;
