import { FC } from 'react';
import cn from 'classnames';

import styles from './TableRow.module.css';

interface TableRowProps {
  className?: string;
  children?: React.ReactNode;
  header?: boolean;
}

export const TableRow: FC<TableRowProps> = ({
  className,
  children,
  header,
  ...props
}) => {
  const classRow = cn(styles._, className, {
    [styles.header]: header,
  });

  return (
    <div className={classRow} {...props}>
      {children}
    </div>
  );
};
