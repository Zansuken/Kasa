import { FC, useState } from 'react';

import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

import classes from './CollapsingCard.module.scss';

type ContentProps = {
  content: string | string[];
};

const Content: FC<ContentProps> = ({ content }) => {
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

type CollapsingCardProps = {
  content: string | string[];
  label: string;
};

const CollapsingCard: FC<CollapsingCardProps> = ({ content, label }) => {
  const [isDeployed, setIsDeployed] = useState<boolean>(false);

  const handleIsDeployedToggle = () => setIsDeployed((current) => !current);

  const classNameBuilder = (className?: string) => {
    if (!isDeployed) {
      return classes[className || ''];
    } else {
      return `${classes[className || '']} ${classes['deployed']}`;
    }
  };

  return (
    <div className={classes['root']}>
      <label className={classNameBuilder('dropDownAction')}>
        {label}
        <button
          className={classNameBuilder()}
          onClick={handleIsDeployedToggle}
          title={`Déploie les détails de: ${label}`}
          data-testid="deploying-card"
        >
          <ArrowIcon />
        </button>
      </label>
      <div
        className={classNameBuilder('content')}
        data-testid="deploying-card-content"
      >
        <Content content={content} />
      </div>
    </div>
  );
};

export default CollapsingCard;
