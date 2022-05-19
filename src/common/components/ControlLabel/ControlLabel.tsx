import React, { FC } from 'react';
import cn from 'classnames';
import { CheckboxProps } from 'common/components/Checkbox/Checkbox';

import styles from './ControlLabel.module.css';

interface ControlLabelProps {
  className: string;
  control: React.ReactElement;
  label: string;
  noIcon?: boolean;
}

export const ControlLabel: FC<ControlLabelProps> = ({
  className,
  control,
  label,
  noIcon,
  ...props
}) => {
  const classControllLabelChecked = cn(styles.label, {
    [styles.labelChecked]: control.props.checked,
    [styles.labelNoIcon]: noIcon,
  });

  return (
    <label className={cn(styles._, className)} {...props}>
      {control}
      <span className={classControllLabelChecked}>{label}</span>
    </label>
  );
};
