import { FC, useState } from 'react';
import classes from './Carousel.module.scss';
import NavButton from './NavButton/NavButton';

type Props = {
  pictures: string[];
};

const Carousel: FC<Props> = ({ pictures }) => {
  const [displayedPic, setDisplayedPic] = useState(1);
  const totalPics = pictures.length;

  const navButtonProps = {
    onPicChange: setDisplayedPic,
    currentPic: displayedPic,
    totalPics,
  };

  return (
    <section className={classes['root']}>
      {totalPics > 1 ? (
        <>
          <NavButton direction={'right'} {...navButtonProps} />
          {pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              className={
                index + 1 === displayedPic ? classes['displayedPic'] : ''
              }
            />
          ))}
          <span
            className={classes['step']}
          >{`${displayedPic}/${totalPics}`}</span>
          <NavButton direction={'left'} {...navButtonProps} />
        </>
      ) : (
        <img src={pictures[0]} className={classes['displayedPic']} />
      )}
    </section>
  );
};

export default Carousel;
