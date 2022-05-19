import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrdersFormShow } from 'modules/OrdersPage/types';

interface orderFormStateTypes {
  isShow: boolean;
  num: string;
}

const initialState: orderFormStateTypes = {
  isShow: false,
  num: '',
};

const orderFormSlice = createSlice({
  name: 'ordersForm',
  initialState,
  reducers: {
    showOrderForm(state, { payload }: PayloadAction<IOrdersFormShow>) {
      state.isShow = payload.isShow;
      state.num = payload.num;
    },
    closeOrderForm(state) {
      state.isShow = false;
    },
  },
});

export const { showOrderForm, closeOrderForm } = orderFormSlice.actions;
export default orderFormSlice.reducer;
