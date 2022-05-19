import cn from 'classnames';
import { FC } from 'react';
import { Button } from 'common/components';
import { ReactComponent as IconWhiteTheme } from 'common/icons/sun.svg';

import styles from './OrdersHeaderTitleTheme.module.css';

interface OrdersHeaderTitleThemeProps {
  children?: React.ReactNode;
  className?: string;
}

export const OrdersHeaderTitleTheme: FC<OrdersHeaderTitleThemeProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(styles._, className)}>
      <Button
        icon={IconWhiteTheme}
        size="large"
        theme="blue"
        onClick={() => {}}
      >
        Светлая
      </Button>
      {children}
    </div>
  );
};
