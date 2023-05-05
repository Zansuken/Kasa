import { FC } from 'react';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/arrow.svg';
import classes from './NavButton.module.scss';

type Props = {
  currentPic: number;
  direction: string;
  onPicChange: (currentPic: number) => void;
  totalPics: number;
};

const NavButton: FC<Props> = ({
  currentPic,
  direction,
  onPicChange,
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
      title={`Bouton permettant ${
        direction === 'right' ? "d'avancer" : 'de reculer'
      } d'une photographie du logement`}
    >
      <ArrowIcon className={classes['arrow']} />
    </button>
  );
};

export default NavButton;
