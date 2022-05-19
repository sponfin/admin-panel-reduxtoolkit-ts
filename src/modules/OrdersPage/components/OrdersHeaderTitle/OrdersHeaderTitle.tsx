import cn from 'classnames';
import { FC } from 'react';

import styles from './OrdersHeaderTitle.module.css';

interface OrdersHeaderTitleProps {
  className?: string;
  children?: React.ReactNode;
}

export const OrdersHeaderTitle: FC<OrdersHeaderTitleProps> = ({
  className,
  children,
  ...props
}) => {
  return <div className={cn(styles._, className)}>{children}</div>;
};
