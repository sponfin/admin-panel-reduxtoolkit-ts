import React, { FC } from 'react';
import cn from 'classnames';

import { ReactComponent as IconCheckmark } from 'common/icons/checkmark.svg';

import styles from './Checkbox.module.css';

export interface CheckboxProps {
  className?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  className,
  checked = false,
  onChange,
  value = '',

  ...props
}) => {
  const classCheckBox = cn(styles._, className);

  return (
    <div className={classCheckBox}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
        value={value}
        {...props}
      />

      <span className={styles.customCheckbox}>
        <IconCheckmark className={styles.icon} />
      </span>
    </div>
  );
};
