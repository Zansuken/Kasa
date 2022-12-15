import { FC, useContext, useEffect } from 'react';
import Content from '../../components/Home/Content/Content';
import Title from '../../components/Home/Title/Title';
import { accomodationsCtxt } from '../../contexts/accomodations';
import { changeTabTitle } from '../../services/utils/generals';
import classes from './Home.module.scss';

const Home: FC = () => {
  const accomodations = useContext(accomodationsCtxt);

  useEffect(() => {
    changeTabTitle('Kasa | Accueil');
  }, []);

  return (
    <main className={classes['root']}>
      <Title />
      <Content accomodations={accomodations} />
    </main>
  );
};

export default Home;
