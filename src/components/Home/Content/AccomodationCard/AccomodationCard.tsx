import { NavLink } from 'react-router-dom';
import { AccomodationInterface } from '../../../../types/accomodations';
import classes from './AccomodationCard.module.scss';

type Props = {
  accomodation: AccomodationInterface;
};

const AccomodationCard = ({ accomodation: { id, title, cover } }: Props) => {
  return (
    <li className={classes['root']}>
      <article>
        <img
          className={classes['cover']}
          src={cover}
          alt={`Photographie du logement: ${title}`}
        />
        <NavLink
          to={`/logements/${id}`}
          className={classes['link']}
          title={'Affiche les détails du logement'}
        />
        <div className={classes['mask']}>
          <h2 className={classes['title']}>{title}</h2>
        </div>
      </article>
    </li>
  );
};

export default AccomodationCard;
