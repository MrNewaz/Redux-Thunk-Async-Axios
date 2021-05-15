import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    test: (state, action) => {
      state.count = state.count + action.payload.testvalue;
    },
  },
});

export const { increment, decrement, test } = counterSlice.actions;

export default counterSlice.reducer;
