import { useParams } from 'react-router-dom';
import Carousel from '../../components/Accomodation/Carousel/Carousel';
import { getSelectedAccomodation } from '../../services/utils/requests';
import { AccomodationInterface } from '../../types/accomodations';
import classes from './Accomodation.module.scss';

const Accomodation = () => {
  const { logementId } = useParams();
  const accomodation: AccomodationInterface = getSelectedAccomodation(
    logementId || ''
  );
  const {
    cover,
    description,
    equipments,
    host,
    id,
    location,
    pictures,
    rating,
    tags,
    title,
  } = accomodation;

  return (
    <main className={classes['root']}>
      <Carousel pictures={pictures} />
    </main>
  );
};

export default Accomodation;
