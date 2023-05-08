import classes from './Content.module.scss';
import { FC } from 'react';
import { Accommodation } from 'types/accommodations';
import AccommodationCard from './AccommodationCard/AccommodationCard';

type Props = {
  accommodations: Accommodation[] | null;
};

const Content: FC<Props> = ({ accommodations }) => {
  return (
    <ul className={classes['root']}>
      {accommodations?.map((accommodation: Accommodation, index) => (
        <AccommodationCard key={index} accommodation={accommodation} />
      ))}
    </ul>
  );
};

export default Content;
