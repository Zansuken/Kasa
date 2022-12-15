import { FC, useState } from 'react';

import { ReactComponent as ArrowIcon } from '../../../../assets/images/arrow.svg';

import classes from './CollapsingCard.module.scss';

type Props = {
  content: string | string[];
  label: string;
};

const CollapsingCard: FC<Props> = ({ content, label }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const handleIsCollapsedToggle = () => setIsCollapsed((current) => !current);

  return (
    <div className={classes['root']}>
      <div className={classes['dropDownAction']}>
        <label>{label}</label>
        <button>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default CollapsingCard;
