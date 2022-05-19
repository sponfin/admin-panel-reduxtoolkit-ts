import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Radio.module.css';

interface RadioProps {
  className: string;
  name: string;
  hasIcon: boolean;
  checked: boolean;
  onChange: () => void;
  value: string;
}

export const Radio: FC<RadioProps> = ({
  className,
  name,
  hasIcon,
  checked = false,
  onChange = () => {},
  value,

  ...props
}) => {
  return (
    <div className={cn(styles._, className)}>
      <input
        type="radio"
        name={name}
        className={styles.input}
        onChange={onChange}
        value={value}
        checked={checked}
        {...props}
      />
      {hasIcon && <span className={styles.customRadio}></span>}
    </div>
  );
};
