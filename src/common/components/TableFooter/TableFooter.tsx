import { FC } from 'react';

import styles from './TableFooter.module.css';

interface TableFooterProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableFooter: FC<TableFooterProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={styles._} {...props}>
      {children}
    </div>
  );
};
