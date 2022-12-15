import { FC } from 'react';
import CollapsingCard from './CollapsingCard/CollapsingCard';

import classes from './index.module.scss';

type Props = {
  description: string;
  equipments: string[];
};

const AccomodationDetails: FC<Props> = ({ description, equipments }) => (
  <section className={classes['root']}>
    <CollapsingCard content={description} label="Description" />
    <CollapsingCard content={equipments} label="Équipements" />
  </section>
);

export default AccomodationDetails;
