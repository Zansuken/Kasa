import { NavLink } from 'react-router-dom';
import { AccommodationInterface } from '../../../../types/accommodations';
import classes from './AccommodationCard.module.scss';

type Props = {
  accommodation: AccommodationInterface;
};

const AccommodationCard = ({ accommodation: { id, title, cover } }: Props) => {
  return (
    <li className={classes['root']}>
      <article>
        <img
          className={classes['cover']}
          src={cover}
          alt={`Photographie du logement: ${title}`}
          data-testid="accommodation-image"
        />
        <NavLink
          to={`/logements/${id}`}
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
};

export default AccommodationCard;
