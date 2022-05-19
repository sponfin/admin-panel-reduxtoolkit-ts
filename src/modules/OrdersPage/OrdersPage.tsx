import { mockOrders } from 'modules/OrdersPage/constants/mockOrders';
import { IOrders } from 'modules/OrdersPage/types';

import {
  OrdersTable,
  OrdersHeader,
  OrdersFilters,
} from 'modules/OrdersPage/components';

import styles from './OrdersPage.module.css';

export const OrdersPage = () => {
  return (
    <div className={styles.wrapper}>
      <OrdersHeader className={styles.wrapperHeader} />
      <OrdersFilters className={styles.wrapperFilters} />
      <OrdersTable />
    </div>
  );
};
