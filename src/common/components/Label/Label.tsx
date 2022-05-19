import Reac, { FC } from 'react';
import cn from 'classnames';

import styles from './Label.module.css';

interface LabelProps {
  label: string;
  className: string;
}

export const Label: FC<LabelProps> = ({ label, className }) => {
  const classLabel = cn(styles._, className);

  return <label className={classLabel}>{label}</label>;
};
