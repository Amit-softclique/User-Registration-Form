import { configureStore } from '@reduxjs/toolkit';
import stepperSlice from './slices/stepperSlice';
import userSlice from './slices/userSlice';


export const store = configureStore({
  reducer: {
    counter: stepperSlice, 
    userDetails: userSlice   
  },
});

// export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
