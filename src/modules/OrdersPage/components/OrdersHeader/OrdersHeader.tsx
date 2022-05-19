import cn from 'classnames';
import { FC } from 'react';
import {
  OrdersHeaderTitle,
  OrdersHeaderTitleTheme,
} from 'modules/OrdersPage/components';

import styles from './OrdersHeader.module.css';

interface OrdersHeaderProps {
  children?: React.ReactNode;
  className: string;
}

export const OrdersHeader: FC<OrdersHeaderProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(styles._, className)}>
      <OrdersHeaderTitle>Список заказов</OrdersHeaderTitle>
      <OrdersHeaderTitleTheme></OrdersHeaderTitleTheme>
      {children}
    </div>
  );
};
