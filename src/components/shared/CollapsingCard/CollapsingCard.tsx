import { FC, useState } from 'react';

import { ReactComponent as ArrowIcon } from '../../../assets/images/arrow.svg';

import classes from './CollapsingCard.module.scss';

type Props = {
  content: string | string[];
  label: string;
};

const CollapsingCard: FC<Props> = ({ content, label }) => {
  const [isDeployed, setIsDeployed] = useState<boolean>(false);

  const handleIsDeployedToggle = () => setIsDeployed((current) => !current);

  const classNameBuilder = (className?: string) => {
    if (!isDeployed) {
      return classes[className || ''];
    } else {
      return `${classes[className || '']} ${classes['deployed']}`;
    }
  };

  const Content: FC = () => {
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div className={classes['root']}>
      <label className={classNameBuilder('dropDownAction')}>
        {label}
        <button
          className={classNameBuilder()}
          onClick={handleIsDeployedToggle}
          title={`Deploie les détails de: ${label}`}
        >
          <ArrowIcon />
        </button>
      </label>
      <div className={classNameBuilder('content')}>
        <Content />
      </div>
    </div>
  );
};

export default CollapsingCard;
