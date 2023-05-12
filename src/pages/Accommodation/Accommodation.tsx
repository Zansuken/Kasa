import { FC, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './Accommodation.module.scss';
import Carousel from 'components/Accommodation/Carousel/Carousel';
import TopSection from 'components/Accommodation/TopSection/TopSection';
import AccommodationDetails from 'components/Accommodation/AccommodationDetails/AccommodationDetails';
import { changeTabTitle } from 'utils/generals';
import { Accommodation as AccommodationType } from 'types/accommodations';
import { accommodationsCtx } from 'contexts/accommodations';
import { ROUTES } from 'constants/routes';
import Loading from 'components/shared/Loading/Loading';

const Accommodation: FC = () => {
  const { logementId } = useParams();
  const { accommodations, fetchData, loading } = useContext(accommodationsCtx);
  const [accommodation, setAccommodation] = useState<
    AccommodationType | null | undefined
  >();

  const navigate = useNavigate();

  useEffect(() => {
    if (accommodations?.length === 0) {
      fetchData();
    } else {
      changeTabTitle(`Kasa | ${accommodations[0]?.title}`);

      const accommodation =
        accommodations?.find(
          (accommodation) => accommodation.id === logementId
        ) ?? null;

      if (accommodation === null) {
        navigate(ROUTES.NOT_FOUND);
      }

      setAccommodation(accommodation);
    }
  }, [accommodations]);

  return (
    <main className={classes['root']}>
      {accommodation && !loading && (
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
      )}
      {loading && <Loading />}
    </main>
  );
};

export default Accommodation;
