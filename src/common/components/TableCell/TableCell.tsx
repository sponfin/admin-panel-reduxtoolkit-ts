import cn from 'classnames';
import { FC } from 'react';
import { ReactComponent as VArrow } from 'common/icons/v_arrow.svg';

import styles from './TableCell.module.css';

interface TableCellProps {
  children?: React.ReactNode;
  className: string;
  vArrow?: boolean;
  isSorted?: boolean;
  onClick?: () => void;
}

export const TableCell: FC<TableCellProps> = ({
  className,
  vArrow = false,
  children,
  isSorted = false,

  ...props
}) => {
  const classVArrow = cn(styles.vArrow, {
    [styles.vArrowRotate]: isSorted,
  });
  return (
    <div className={cn(styles._, className)} {...props}>
      {children}
      {vArrow && <VArrow className={classVArrow} />}
    </div>
  );
};
