import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ordersReduser from './ordersSlice';
import filtersReduser from './filtersSlice';
import orderFormReduser from './orderFormSlice';
import paginationReduser from './paginationSlice';
import sortReduser from './sortSlice';

export const store = configureStore({
  reducer: {
    orders: ordersReduser,
    filters: filtersReduser,
    orderForm: orderFormReduser,
    pagination: paginationReduser,
    sort: sortReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
