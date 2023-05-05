import { FC, useEffect } from 'react';
import aboutData from 'data/about.json';
import coverImg from 'assets/images/about-cover.png';

import classes from './About.module.scss';
import CollapsingCard from 'components/shared/CollapsingCard/CollapsingCard';
import { changeTabTitle } from 'services/utils/generals';

const About: FC = () => {
  useEffect(() => {
    changeTabTitle('Kasa | À propos');
  }, []);

  return (
    <main className={classes['root']}>
      <div className={classes['cover']}>
        <img
          className={classes['coverImage']}
          src={coverImg}
          alt={'Paysage montagneux'}
        />
      </div>
      <section className={classes['aboutCards']}>
        {aboutData.map(({ label, content }, index) => (
          <CollapsingCard key={index} label={label} content={content} />
        ))}
      </section>
    </main>
  );
};

export default About;
