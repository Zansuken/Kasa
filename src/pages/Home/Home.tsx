import { FC, useContext, useEffect } from 'react';
import Content from 'components/Home/Content/Content';
import Title from 'components/Home/Title/Title';
import { accommodationsCtx } from 'contexts/accommodations';
import { changeTabTitle } from 'services/utils/generals';
import classes from './Home.module.scss';

const Home: FC = () => {
  const accommodations = useContext(accommodationsCtx);

  useEffect(() => {
    changeTabTitle('Kasa | Accueil');
  }, []);

  return (
    <main className={classes['root']}>
      <Title />
      <Content accommodations={accommodations} />
    </main>
  );
};

export default Home;
