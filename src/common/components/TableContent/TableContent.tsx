import { FC } from 'react';
import styles from './TableContent.module.css';

interface TableContentProps {
  className?: String;
  children?: React.ReactNode;
}

export const TableContent: FC<TableContentProps> = ({
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
