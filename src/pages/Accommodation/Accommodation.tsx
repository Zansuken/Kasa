import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSelectedAccommodation } from 'services/utils/requests';
import classes from './Accommodation.module.scss';
import Carousel from 'components/Accommodation/Carousel/Carousel';
import TopSection from 'components/Accommodation/TopSection/TopSection';
import AccommodationDetails from 'components/Accommodation/AccommodationDetails/AccommodationDetails';
import { changeTabTitle } from 'services/utils/generals';
import { AccommodationInterface } from 'types/accommodations';

const Accommodation: FC = () => {
  const { logementId } = useParams();
  const accommodation: AccommodationInterface = getSelectedAccommodation(
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
  } = accommodation;

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
      <AccommodationDetails description={description} equipments={equipments} />
    </main>
  );
};

export default Accommodation;
