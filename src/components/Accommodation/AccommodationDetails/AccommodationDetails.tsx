import { FC } from 'react';

import classes from './AccommodationDetails.module.scss';
import CollapsingCard from 'components/shared/CollapsingCard/CollapsingCard';

type Props = {
  description: string;
  equipments: string[];
};

const AccommodationDetails: FC<Props> = ({ description, equipments }) => (
  <section className={classes['root']}>
    <CollapsingCard content={description} label="Description" />
    <CollapsingCard content={equipments} label="Équipements" />
  </section>
);

export default AccommodationDetails;
