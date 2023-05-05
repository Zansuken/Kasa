import { FC } from 'react';
import Tag from './Tag/Tag';
import classes from './Tags.module.scss';

type Props = {
  tags: string[];
};

const Tags: FC<Props> = ({ tags }) => (
  <ul className={classes['root']}>
    {tags.map((tag, index) => (
      <Tag key={index} tag={tag} />
    ))}
  </ul>
);

export default Tags;
