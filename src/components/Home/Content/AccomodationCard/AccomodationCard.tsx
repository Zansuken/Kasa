import { AccomodationInterface } from '../../../../types/accomodations';
import classes from './AccomodationCard.module.scss';

type Props = {
  accomodation: AccomodationInterface;
};

const AccomodationCard = (props: Props) => {
  return <article className={classes['root']}>AccomodationCard</article>;
};

export default AccomodationCard;
