import { NavLink } from 'react-router-dom';
import { Accommodation } from 'types/accommodations';
import classes from './AccommodationCard.module.scss';
import { FC } from 'react';

type Props = {
  accommodation: Accommodation;
};

const AccommodationCard: FC<Props> = ({
  accommodation: { id, title, cover },
}) => (
  <li className={classes['root']} data-testid="test-accommodation-card">
    <article>
      <img
        className={classes['cover']}
        src={cover}
        alt={`Photographie du logement: ${title}`}
        data-testid="accommodation-image"
      />
      <NavLink
        to={`/Kasa/logements/${id}`}
        className={classes['link']}
        title={'Affiche les détails du logement'}
        data-testid="accommodation-link"
      />
      <div className={classes['mask']}>
        <h2 className={classes['title']}>{title}</h2>
      </div>
    </article>
  </li>
);

export default AccommodationCard;
