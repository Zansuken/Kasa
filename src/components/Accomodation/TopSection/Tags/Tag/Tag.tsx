import { FC } from 'react';
import classes from './Tag.module.scss';

type Props = {
  tag: string;
};

const Tag: FC<Props> = ({ tag }) => {
  return <li className={classes['root']}>{tag}</li>;
};

export default Tag;
