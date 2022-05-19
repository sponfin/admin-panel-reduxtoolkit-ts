import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateTypes {
  keySort: string;
  typeSort: string;
}

const initialState: initialStateTypes = {
  keySort: 'date',
  typeSort: 'desc',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, { payload }: PayloadAction<string>) {
      state.keySort = payload;
      state.typeSort = state.typeSort === 'desc' ? '' : 'desc';
    },
  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
