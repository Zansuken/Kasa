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
    <main className={classes['root']}>
      {accomodations?.map((accomodations: AccomodationInterface, index) => (
        <AccomodationCard key={index} accomodation={accomodations} />
      ))}
    </main>
  );
};

export default Content;
