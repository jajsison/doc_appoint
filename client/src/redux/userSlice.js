import { createSlice } from '@reduxjs/toolkit';

//loading and alert

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null, //by default loading is false
  },
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload;
    },
    
  },
});

export const { setUser } = userSlice.actions;
