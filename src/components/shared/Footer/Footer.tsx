import { FC } from 'react';
import { ReactComponent as ReactLogo } from '../../../assets/images/LOGO_WHITE.svg';
import classes from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={classes['root']}>
      <ReactLogo data-testid="footer-logo" className={classes['logo']} />
      <div className={classes['copyrights']}>
        <h2>© 2020 Kasa. All rights reserved</h2>
      </div>
    </footer>
  );
};

export default Footer;
