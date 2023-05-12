import { FC } from 'react';
import classes from './Loading.module.scss';

const Loading: FC = () => {
  return (
    <div className={classes['root']}>
      <span>Chargement...</span>
    </div>
  );
};

export default Loading;
