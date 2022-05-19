import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

interface ButtonProps {
  className?: string;
  theme: string;
  size: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  fullWidth?: boolean;
  circularRotation?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string | number;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  size,
  icon: Icon,
  fullWidth,
  circularRotation,
  children,
  value,

  ...props
}) => {
  const classButton = cn(styles._, className, {
    [styles[`theme_${theme}`]]: true,
    [styles[`size_${size}`]]: true,
    [styles.iconOnly]: Icon && !children,
    [styles.fullWidth]: fullWidth,
  });

  const classIcon = cn(styles.icon, {
    [styles.circularRotation]: circularRotation,
  });

  return (
    <button className={classButton} value={value} {...props}>
      {Icon && <Icon className={classIcon} />}

      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
