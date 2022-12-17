import classes from './Footer.module.scss';
import { ReactComponent as ReactLogo } from '../../../assets/images/LOGO_WHITE.svg';

const Footer = () => {
  return (
    <footer className={classes['root']}>
      <ReactLogo className={classes['logo']} />
      <div className={classes['copyrights']}>
        <h2>© 2020 Kasa. All rights reserved</h2>
      </div>
    </footer>
  );
};

export default Footer;
