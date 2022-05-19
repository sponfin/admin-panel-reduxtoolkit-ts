import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrders } from 'modules/OrdersPage/types';

interface ordersStateTypes {
  orders: IOrders[];
}

const initialState: ordersStateTypes = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    loadOrders(state, { payload }: PayloadAction<IOrders[]>) {
      state.orders = payload;
    },
  },
});

export const { loadOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
