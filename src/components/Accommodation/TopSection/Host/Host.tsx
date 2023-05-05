import { FC } from 'react';
import classes from './Host.module.scss';

type Props = {
  host: { name: string; picture: string };
};

const Host: FC<Props> = ({ host: { name, picture } }) => {
  const firstname = name.split(' ')[0];
  const lastname = name.split(' ')[1];

  return (
    <div className={classes['root']}>
      <div className={classes['name']}>
        <span>{firstname}</span>
        <span>{lastname}</span>
      </div>
      <div className={classes['profilePicture']}>
        <img src={picture} alt="profile picture" />
      </div>
    </div>
  );
};

export default Host;
