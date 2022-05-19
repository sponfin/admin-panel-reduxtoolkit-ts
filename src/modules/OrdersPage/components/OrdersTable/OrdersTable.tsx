import React, { useEffect, useState, FC } from 'react';
import { useAppSelector, useAppDispatch } from 'modules/OrdersPage/store';
import {
  getPagination,
  getOrdersForShow,
  getOrdersFiltered,
  getSort,
  getShowOrderForm,
  getOrders,
} from 'modules/OrdersPage/store/selectors';

import {
  Checkbox,
  TableCell,
  TableContent,
  TableRow,
  TableFooter,
} from 'common/components';
import { Pagination, OrderForm } from 'modules/OrdersPage/components';
import { mockOrders } from 'modules/OrdersPage/constants/mockOrders';

import { setSort, showOrderForm, loadOrders } from 'modules/OrdersPage/store';
import { IOrders, IOrdersFormShow } from 'modules/OrdersPage/types';

import styles from './OrdersTable.module.css';

// const xorOrders = (arr: IOrders[], item: IOrders) =>
//   arr.includes(item) ? arr.filter(i => i !== item) : arr.concat(item);

const xor = (arr: string[], item: string) =>
  arr.includes(item) ? arr.filter(i => i !== item) : arr.concat(item);

const addAllChecked = (arr: string[], item: string) =>
  arr.includes(item) ? arr : arr.concat(item);

interface OrdersTableProps {
  className?: string;
  children?: React.ReactNode;
  orders?: IOrders;
}

export const OrdersTable: FC<OrdersTableProps> = ({
  className,
  children,

  ...props
}) => {
  const [checkboxStatuses, setCheckboxStatuses] = useState<string[]>([]);
  const [checkboxAll, setCheckboxAll] = useState(false);
  const { pageSize, activePage } = useAppSelector(getPagination);
  const { keySort, typeSort } = useAppSelector(getSort);
  const { isShow } = useAppSelector(getShowOrderForm);
  const { orders } = useAppSelector(getOrders);
  const ordersFiltered: IOrders[] = useAppSelector(getOrdersFiltered);
  const ordersForShow: IOrders[] = useAppSelector(getOrdersForShow);
  const dispatch = useAppDispatch();

  if (orders.length === 0) {
    setTimeout(() => {
      dispatch(loadOrders(mockOrders));
    }, 2000);
  }

  useEffect(() => {
    if (
      ordersFiltered.length === checkboxStatuses.length &&
      ordersFiltered.length > 0
    )
      setCheckboxAll(true);
    if (ordersFiltered.length > checkboxStatuses.length) setCheckboxAll(false);
  }, [checkboxStatuses, ordersFiltered]);

  const handleChangeCheckboxAllStatus: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setCheckboxAll(e.target.checked);
    if (e.target.checked === true) {
      let temp: string[] = [];
      ordersFiltered.map(order => {
        temp = addAllChecked(temp, order.num);
        return temp;
      });
      setCheckboxStatuses(temp);
    } else setCheckboxStatuses([]);
  };

  const handleChangeCheckboxStatus: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setCheckboxStatuses(xor(checkboxStatuses, e.target.value));
  };

  const handleClick = (nameKey: string) => () => {
    dispatch(setSort(nameKey));
  };

  const handleShowOrderForm = (payload: IOrdersFormShow) => () => {
    dispatch(showOrderForm(payload));
  };

  return (
    <div className={styles._}>
      <OrderForm show={isShow} />
      <TableRow header>
        <TableCell className={styles.cellCheck}>
          <Checkbox
            onChange={() => handleChangeCheckboxAllStatus}
            value="all"
            checked={checkboxAll}
          />
        </TableCell>
        <TableCell
          vArrow={keySort !== 'num' ? false : true}
          className={styles.cellNum}
          onClick={handleClick('num')}
          isSorted={keySort === 'num' && typeSort === 'desc' ? false : true}
        >
          #
        </TableCell>
        <TableCell
          vArrow={keySort !== 'date' ? false : true}
          className={styles.cellDate}
          onClick={handleClick('date')}
          isSorted={keySort === 'date' && typeSort === 'desc' ? false : true}
        >
          Дата
        </TableCell>
        <TableCell
          vArrow={keySort !== 'status' ? false : true}
          className={styles.cellStatus}
          onClick={handleClick('status')}
          isSorted={keySort === 'status' && typeSort === 'desc' ? false : true}
        >
          Статус
        </TableCell>
        <TableCell
          vArrow={keySort !== 'position' ? false : true}
          className={styles.cellPosition}
          onClick={handleClick('position')}
          isSorted={
            keySort === 'position' && typeSort === 'desc' ? false : true
          }
        >
          Позиций
        </TableCell>
        <TableCell
          vArrow={keySort !== 'sum' ? false : true}
          className={styles.cellSum}
          onClick={handleClick('sum')}
          isSorted={keySort === 'sum' && typeSort === 'desc' ? false : true}
        >
          Cумма
        </TableCell>
        <TableCell
          vArrow={keySort !== 'fio' ? false : true}
          className={styles.cellFio}
          onClick={handleClick('fio')}
          isSorted={keySort === 'fio' && typeSort === 'desc' ? false : true}
        >
          ФИО покупателя
        </TableCell>
      </TableRow>
      <TableContent>
        {ordersForShow.map(order => (
          <TableRow key={order.num}>
            <TableCell className={styles.cellCheck}>
              <Checkbox
                onChange={() => handleChangeCheckboxStatus}
                value={order.num}
                checked={checkboxStatuses.includes(`${order.num}`)}
              />
            </TableCell>
            <TableCell
              className={styles.cellNum}
              onClick={handleShowOrderForm({
                num: order.num,
                isShow: true,
              })}
            >
              {order.num}
            </TableCell>
            <TableCell
              className={styles.cellDate}
              onClick={handleShowOrderForm({ num: order.num, isShow: true })}
            >
              {order.date}
            </TableCell>
            <TableCell
              className={styles.cellStatus}
              onClick={handleShowOrderForm({ num: order.num, isShow: true })}
            >
              {order.status}
            </TableCell>
            <TableCell
              className={styles.cellPosition}
              onClick={handleShowOrderForm({ num: order.num, isShow: true })}
            >
              {order.position}
            </TableCell>
            <TableCell
              className={styles.cellSum}
              onClick={handleShowOrderForm({ num: order.num, isShow: true })}
            >
              {order.sum}
            </TableCell>
            <TableCell
              className={styles.cellFio}
              onClick={handleShowOrderForm({ num: order.num, isShow: true })}
            >
              {order.fio}
            </TableCell>
          </TableRow>
        ))}
      </TableContent>
      <TableFooter>
        {checkboxStatuses.length > 0 && (
          <span>Выбрано записей: {checkboxStatuses.length}</span>
        )}

        {ordersFiltered.length > pageSize && (
          <Pagination
            className={styles.pagination}
            activePage={activePage}
            ordersFiltered={ordersFiltered}
            pageSize={pageSize}
          />
        )}
      </TableFooter>
    </div>
  );
};
