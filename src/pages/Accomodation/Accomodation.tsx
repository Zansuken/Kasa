import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSelectedAccomodation } from '../../services/utils/requests';
import { AccomodationInterface } from '../../types/accomodations';
import classes from './Accomodation.module.scss';
import Carousel from '../../components/Accomodation/Carousel/Carousel';
import TopSection from '../../components/Accomodation/TopSection/TopSection';
import AccomodationDetails from '../../components/Accomodation/AccomodationDetails/AccomodationDetails';
import { changeTabTitle } from '../../services/utils/generals';

const Accomodation: FC = () => {
  const { logementId } = useParams();
  const accomodation: AccomodationInterface = getSelectedAccomodation(
    logementId || ''
  );
  const {
    description,
    equipments,
    host,
    location,
    pictures,
    rating,
    tags,
    title,
  } = accomodation;

  useEffect(() => {
    changeTabTitle(`Kasa | ${title}`);
  }, []);

  return (
    <main className={classes['root']}>
      <Carousel pictures={pictures} />
      <TopSection
        title={title}
        location={location}
        tags={tags}
        host={host}
        rating={rating}
      />
      <AccomodationDetails description={description} equipments={equipments} />
    </main>
  );
};

export default Accomodation;
