import classes from './Content.module.scss';
import {
  AccomodationInterface,
  AccomodationsType,
} from '../../../types/accomodations';
import AccomodationCard from './AccomodationCard/AccomodationCard';
import { FC } from 'react';

type Props = {
  accomodations: AccomodationsType | null;
};

const Content: FC<Props> = ({ accomodations }) => {
  return (
    <ul className={classes['root']}>
      {accomodations?.map((accomodation: AccomodationInterface, index) => (
        <AccomodationCard key={index} accomodation={accomodation} />
      ))}
    </ul>
  );
};

export default Content;
