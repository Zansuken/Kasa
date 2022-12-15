import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as React404Logo } from '../../assets/images/404.svg';
import { changeTabTitle } from '../../services/utils/generals';
import classes from './NotFound.module.scss';

const NotFound: FC = () => {
  useEffect(() => {
    changeTabTitle('Kasa | 404');
  }, []);

  return (
    <main className={classes['root']}>
      <div className={classes['content']}>
        <React404Logo />
        <p>{"Oups! La page que vous demandez n'existe pas."}</p>
      </div>
      <div className={classes['redirection']}>
        <NavLink to="/">{"Retourner sur la page d'accueil"}</NavLink>
      </div>
    </main>
  );
};

export default NotFound;
