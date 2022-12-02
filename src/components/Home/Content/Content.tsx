import classes from './Content.module.scss';
import {
  AccomodationInterface,
  AccomodationsType,
} from '../../../types/accomodations';
import AccomodationCard from './AccomodationCard/AccomodationCard';

type Props = {
  accomodations: AccomodationsType | null;
};

const Content = ({ accomodations }: Props) => {
  return (
    <ul className={classes['root']}>
      {accomodations?.map((accomodation: AccomodationInterface, index) => (
        <AccomodationCard key={index} accomodation={accomodation} />
      ))}
    </ul>
  );
};

export default Content;
