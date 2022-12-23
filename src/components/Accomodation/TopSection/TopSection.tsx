import { FC } from 'react';
import Host from './Host/Host';
import Rating from './Rating/Rating';
import Tags from './Tags/Tags';
import Title from './Title/Title';
import classes from './TopSection.module.scss';

type Props = {
  host: { name: string; picture: string };
  location: string;
  rating: string;
  tags: string[];
  title: string;
};

const TopSection: FC<Props> = ({ host, location, rating, tags, title }) => (
  <section className={classes['root']}>
    <div className={classes['title-tags']}>
      <Title title={title} location={location} />
      <Tags tags={tags} />
    </div>
    <div className={classes['review-owner']}>
      <Rating rating={rating} />
      <Host host={host} />
    </div>
  </section>
);

export default TopSection;
