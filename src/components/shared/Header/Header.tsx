import classes from './Header.module.scss';
import { FC } from 'react';
import { ReactComponent as ReactLogo } from 'assets/images/LOGO.svg';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

const Header: FC = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header className={classes['root']}>
      <ReactLogo data-testid="header-logo" className={classes['logo']} />
      <nav className={classes['nav']}>
        <NavLink
          to={ROUTES.HOME}
          style={({ isActive }) => (isActive ? { ...activeStyle } : {})}
        >
          ACCUEIL
        </NavLink>
        <NavLink
          to={ROUTES.ABOUT}
          style={({ isActive }) => (isActive ? { ...activeStyle } : {})}
        >
          A PROPOS
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
