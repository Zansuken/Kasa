import { FC } from 'react';
import { ReactComponent as GreyStar } from '../../../../assets/images/grey-star.svg';
import { ReactComponent as OrangeStar } from '../../../../assets/images/orange-star.svg';

import classes from './Rating.module.scss';

type Props = {
  rating: string;
};

const Rating: FC<Props> = ({ rating }) => {
  const maxStars = ['', '', '', '', ''];

  return (
    <div className={classes['root']}>
      {maxStars.map((_, index) =>
        index + 1 <= Number(rating) ? (
          <OrangeStar key={index} data-testid="orange-star-test" />
        ) : (
          <GreyStar key={index} data-testid="grey-star-test" />
        )
      )}
    </div>
  );
};

export default Rating;
