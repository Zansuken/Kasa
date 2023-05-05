import { FC } from 'react';
import { ReactComponent as GreyStar } from 'assets/images/grey-star.svg';
import { ReactComponent as OrangeStar } from 'assets/images/orange-star.svg';

import classes from './Rating.module.scss';

type Props = {
  rating: string;
};

const ImprovedRating: FC<Props> = ({ rating }) => {
  const MAX_RATING = 5;
  const ratingNumber = Number(rating);

  const stars = Array.from({ length: MAX_RATING }, (_, index) => {
    const key = `star-${index + 1}`;
    const isFilled = index < ratingNumber;
    const Star = isFilled ? OrangeStar : GreyStar;

    return (
      <Star
        key={key}
        data-testid={isFilled ? 'orange-star-test' : 'grey-star-test'}
      />
    );
  });

  return <div className={classes['root']}>{stars}</div>;
};

export default ImprovedRating;
