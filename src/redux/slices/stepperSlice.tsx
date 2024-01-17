import { createSlice } from '@reduxjs/toolkit';

const stepperSlice = createSlice({
  name: 'stepper',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    resetStep: (state) => 0,
  },
});

export const { increment, decrement, resetStep } = stepperSlice.actions;
export default stepperSlice.reducer;
