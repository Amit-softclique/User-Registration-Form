import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
    personalData: {}, 
    addressData: {} 
  }

const userSlice = createSlice({
  name: 'userInfo',
  initialState: initialUserState,
  reducers: {
    personalInfo: (state, action) => {
        console.log('info', state, action);
        state.personalData = action.payload;
    },
    addressInfo: (state, action) => {
        console.log('addressInfo', state, action);
        state.addressData = action.payload;
    },
  },
});

export const { personalInfo, addressInfo } = userSlice.actions;
export default userSlice.reducer;