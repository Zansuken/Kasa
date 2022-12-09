import { FC, useEffect, useState } from 'react';
import { ReactComponent as GreyStar } from '../../../../assets/images/grey-star.svg';
import { ReactComponent as OrangeStar } from '../../../../assets/images/orange-star.svg';

type Props = {
  rating: string;
};

const Rating: FC<Props> = ({ rating }) => {
  const maxStars = ['', '', '', '', ''];

  return (
    <div>
      {maxStars.map((_, index) =>
        index + 1 <= Number(rating) ? (
          <OrangeStar key={index} />
        ) : (
          <GreyStar key={index} />
        )
      )}
    </div>
  );
};

export default Rating;
