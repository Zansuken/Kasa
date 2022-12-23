import { FC } from 'react';
import classes from './Title.module.scss';

type Props = {
  location: string;
  title: string;
};

const Title: FC<Props> = ({ location, title }) => (
  <header className={classes['root']}>
    <h1>{title}</h1>
    <h2>{location}</h2>
  </header>
);

export default Title;
