import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from '../store/OrderSlice';
export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    
  },
});
