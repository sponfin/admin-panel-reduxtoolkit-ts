import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface paginationStateTypes {
  pageSize: number;
  activePage: number;
}

const initialState: paginationStateTypes = {
  pageSize: 10,
  activePage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setActivePage(state, { payload }: PayloadAction<number>) {
      state.activePage = payload;
    },
  },
});

export const { setActivePage } = paginationSlice.actions;
export default paginationSlice.reducer;
