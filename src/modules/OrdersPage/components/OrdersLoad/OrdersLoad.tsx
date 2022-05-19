import { FC } from 'react';
import cn from 'classnames';
import { Button } from 'common/components';

import { ReactComponent as IconLoad } from 'common/icons/refresh.svg';

import styles from './OrdersLoad.module.css';

interface OrdersLoadProps {
  className?: string;
  children?: React.ReactNode;
}
export const OrdersLoad: FC<OrdersLoadProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(styles._, className)} {...props}>
      {children}

      <Button icon={IconLoad} size="large" theme="blue" circularRotation>
        Загрузка
      </Button>
    </div>
  );
};
