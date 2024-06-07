// orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    removeOrder: (state, action) => {
      return state.filter(order => order.id !== action.payload);
    },
  },
});

export const { addOrder, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
