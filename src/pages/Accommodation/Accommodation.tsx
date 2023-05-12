import { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Accommodation.module.scss';
import Carousel from 'components/Accommodation/Carousel/Carousel';
import TopSection from 'components/Accommodation/TopSection/TopSection';
import AccommodationDetails from 'components/Accommodation/AccommodationDetails/AccommodationDetails';
import { changeTabTitle } from 'utils/generals';
import { Accommodation as AccommodationType } from 'types/accommodations';
import { accommodationsCtx } from 'contexts/accommodations';

const Accommodation: FC = () => {
  const { logementId } = useParams();
  const { accommodations, fetchData } = useContext(accommodationsCtx);
  const [accommodation, setAccommodation] = useState<AccommodationType>();

  useEffect(() => {
    if (accommodations?.length === 0) {
      fetchData();
    } else {
      changeTabTitle(`Kasa | ${accommodations[0]?.title}`);
      setAccommodation(
        accommodations?.find((accommodation) => accommodation.id === logementId)
      );
    }
  }, [accommodations]);

  return (
    <main className={classes['root']}>
      {accommodation ? (
        <>
          <Carousel pictures={accommodation.pictures} />
          <TopSection
            title={accommodation.title}
            location={accommodation.location}
            tags={accommodation.tags}
            host={accommodation.host}
            rating={accommodation.rating}
          />
          <AccommodationDetails
            description={accommodation.description}
            equipments={accommodation.equipments}
          />
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </main>
  );
};

export default Accommodation;
