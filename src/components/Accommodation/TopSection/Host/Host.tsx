import { FC } from 'react';
import classes from './Host.module.scss';

type Props = {
  host: { name: string; picture: string };
};

const Host: FC<Props> = ({ host: { name, picture } }) => {
  const firstName = name.split(' ')[0];
  const lastName = name.split(' ')[1];

  return (
    <div className={classes['root']}>
      <div className={classes['name']}>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <div className={classes['profilePicture']}>
        <img src={picture} alt="profile picture" />
      </div>
    </div>
  );
};

export default Host;
