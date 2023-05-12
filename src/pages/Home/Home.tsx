import { FC, useContext, useEffect } from 'react';
import Content from 'components/Home/Content/Content';
import Title from 'components/Home/Title/Title';
import { accommodationsCtx } from 'contexts/accommodations';
import { changeTabTitle } from 'utils/generals';
import classes from './Home.module.scss';
import Loading from 'components/shared/Loading/Loading';

const Home: FC = () => {
  const { fetchData, accommodations, loading } = useContext(accommodationsCtx);

  useEffect(() => {
    changeTabTitle('Kasa | Accueil');

    if (accommodations?.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <main className={classes['root']}>
      <Title />
      {loading && <Loading />}
      {!loading && <Content accommodations={accommodations ?? []} />}
      {accommodations?.length === 0 && !loading && (
        <div className={classes['statusWrapper']}>
          <span>Il n&apos;y a aucun logement à afficher.</span>
        </div>
      )}
    </main>
  );
};

export default Home;
