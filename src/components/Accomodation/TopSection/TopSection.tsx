import { FC } from 'react';
import Host from './Host/Host';
import Rating from './Rating/Rating';
import Tags from './Tags/Tags';
import Title from './Title/Title';
import classes from './TopSection.module.scss';

type Props = {
  title: string;
  location: string;
  tags: string[];
  host: { name: string; picture: string };
  rating: string;
};

const TopSection: FC<Props> = ({ title, tags, location, host, rating }) => (
  <section className={classes['root']}>
    <div className={classes['title-tags']}>
      <Title title={title} location={location} />
      <Tags tags={tags} />
    </div>
    <div className={classes['review-owner']}>
      <Host host={host} />
      <Rating rating={rating} />
    </div>
  </section>
);

export default TopSection;
