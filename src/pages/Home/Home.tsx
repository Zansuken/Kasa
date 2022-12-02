import { FC, useContext } from 'react';
import Content from '../../components/Home/Content/Content';
import Title from '../../components/Home/Title/Title';
import { accomodationsCtxt } from '../../contexts/accomodations';
import classes from './Home.module.scss';

const Home: FC = () => {
  const accomodations = useContext(accomodationsCtxt);

  return (
    <div className={classes['root']}>
      <Title />
      <Content accomodations={accomodations} />
    </div>
  );
};

export default Home;
