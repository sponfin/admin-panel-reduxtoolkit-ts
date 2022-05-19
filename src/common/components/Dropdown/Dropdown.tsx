import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Dropdown.module.css';

interface DropdownProps {
  children?: React.ReactNode;
  className: string;
}

export const Dropdown: FC<DropdownProps> = ({ children, className }) => {
  const classDropdownGroup = cn(styles._, styles.dropdownGroup, className);
  return <div className={classDropdownGroup}>{children}</div>;
};
