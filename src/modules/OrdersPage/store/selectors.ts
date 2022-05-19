// import { createSelector } from "reselect";
import { createSelector } from '@reduxjs/toolkit';
import { inSearch, inRange, inStatus, sorting } from '../utils/utils';

import { RootState } from './store';

export const getOrders = (state: RootState) => state.orders;
export const getValueOrdersFilters = (state: RootState) => state.filters;
export const getPagination = (state: RootState) => state.pagination;
export const getSort = (state: RootState) => state.sort;
export const getShowOrderForm = (state: RootState) => state.orderForm;

export const getOrdersFiltered = createSelector(
  getOrders,
  getValueOrdersFilters,
  getSort,

  (
    { orders },
    { search, dateFrom, dateTo, sumFrom, sumTo, statusOrder },
    { keySort, typeSort }
  ) =>
    orders

      .filter(({ num, fio }) => inSearch(num, fio, search))
      .filter(({ date }) => inRange(date, dateFrom, dateTo, 'DATE'))
      .filter(({ sum }) => inRange(sum, sumFrom, sumTo, 'SUM'))
      .filter(({ status }) => inStatus(status, statusOrder))
      .sort(sorting(keySort, typeSort))
);

export const getOrdersForShow = createSelector(
  getOrdersFiltered,
  getPagination,
  (orders, { activePage, pageSize }) =>
    orders.slice((activePage - 1) * pageSize, activePage * pageSize)
);
