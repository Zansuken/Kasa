import classes from './Footer.module.scss';
import { ReactComponent as ReactLogo } from '../../../assets/images/LOGO_WHITE.svg';

const Footer = () => {
  return (
    <footer className={classes['root']}>
      <ReactLogo className={classes['logo']} />
      <div className={classes['copyrights']}>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
