import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilters } from 'modules/OrdersPage/types';

interface filtersStateTypes {
  search: string;
  dateFrom: string;
  dateTo: string;
  sumFrom: string;
  sumTo: string;
  statusOrder: string[];
  isVisibleFilters: boolean;
}

const initialState: filtersStateTypes = {
  search: '',
  dateFrom: '',
  dateTo: '',
  sumFrom: '',
  sumTo: '',
  statusOrder: [],
  isVisibleFilters: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setValueOrdersFilters(state, { payload }: PayloadAction<IFilters>) {
      state.dateFrom = payload.dateFrom;
      state.sumFrom = payload.sumFrom;
      state.sumTo = payload.sumTo;
      state.statusOrder = payload.statusOrder;
    },
    setValueOrdersSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    clearValueOrdersSearch(state) {
      state.search = '';
    },

    clearAllValueOrdersFilters(state) {
      state.search = '';
      state.dateFrom = '';
      state.dateTo = '';
      state.sumFrom = '';
      state.sumTo = '';
      state.statusOrder = [];
    },
    toggleFilters(state) {
      state.isVisibleFilters = !state.isVisibleFilters;
    },
  },
});

export const {
  setValueOrdersSearch,
  clearValueOrdersSearch,
  setValueOrdersFilters,
  clearAllValueOrdersFilters,
  toggleFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
