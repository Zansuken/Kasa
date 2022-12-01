import classes from './Header.module.scss';
import { ReactComponent as ReactLogo } from '../../../assets/images/LOGO.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header className={classes['root']}>
      <ReactLogo className={classes['logo']} />
      <nav className={classes['nav']}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? { ...activeStyle } : {})}
        >
          ACCUEIL
        </NavLink>
        <NavLink
          to="a-propos"
          style={({ isActive }) => (isActive ? { ...activeStyle } : {})}
        >
          A PROPOS
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
