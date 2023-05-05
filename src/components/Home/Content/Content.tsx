import classes from './Content.module.scss';
import { FC } from 'react';
import {
  AccommodationInterface,
  AccommodationsType,
} from '../../../types/accommodations';
import AccommodationCard from './AccommodationCard/AccommodationCard';

type Props = {
  accommodations: AccommodationsType | null;
};

const Content: FC<Props> = ({ accommodations: accommodations }) => {
  return (
    <ul className={classes['root']}>
      {accommodations?.map((accommodation: AccommodationInterface, index) => (
        <AccommodationCard key={index} accommodation={accommodation} />
      ))}
    </ul>
  );
};

export default Content;
