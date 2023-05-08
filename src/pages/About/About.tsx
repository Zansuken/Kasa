import { FC, useContext, useEffect } from 'react';
import coverImg from 'assets/images/about-cover.png';

import classes from './About.module.scss';
import CollapsingCard from 'components/shared/CollapsingCard/CollapsingCard';
import { changeTabTitle } from 'utils/generals';
import { appCtx } from 'contexts/app';

const About: FC = () => {
  const fetchData = useContext(appCtx).about.fetchData;
  const { sections } = useContext(appCtx).about.content;

  useEffect(() => {
    changeTabTitle('Kasa | À propos');

    if (sections.length === 0) {
      fetchData();
    }
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
        {sections.map(({ label, content }, index) => (
          <CollapsingCard key={index} label={label} content={content} />
        ))}
      </section>
    </main>
  );
};

export default About;
