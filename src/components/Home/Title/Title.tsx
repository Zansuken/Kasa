import { FC } from 'react';
import classes from './Title.module.scss';

const Title: FC = () => {
  return (
    <div className={classes['root']}>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Title;
