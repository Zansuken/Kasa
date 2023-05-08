import { FC, useContext, useEffect, useState } from 'react';
import Content from 'components/Home/Content/Content';
import Title from 'components/Home/Title/Title';
import { accommodationsCtx } from 'contexts/accommodations';
import { changeTabTitle } from 'utils/generals';
import classes from './Home.module.scss';

const Home: FC = () => {
  const { fetchData, accommodations } = useContext(accommodationsCtx);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchAccommodations = async () => {
    try {
      setIsFetching(true);

      await fetchData();
    } catch (error) {
      console.error(error);
    }

    setIsFetching(false);
  };

  useEffect(() => {
    changeTabTitle('Kasa | Accueil');

    if (accommodations.length === 0) {
      fetchAccommodations();
    }
  }, []);

  return (
    <main className={classes['root']}>
      <Title />
      {isFetching && (
        <div className={classes['statusWrapper']}>
          <span>Chargement...</span>
        </div>
      )}
      {!isFetching && <Content accommodations={accommodations} />}
      {accommodations.length === 0 && !isFetching && (
        <div className={classes['statusWrapper']}>
          <span>Il n&apos;y a aucun logement à afficher.</span>
        </div>
      )}
    </main>
  );
};

export default Home;
