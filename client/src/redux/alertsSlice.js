import { createSlice } from '@reduxjs/toolkit';

//loading and alert

export const alertsSlice = createSlice({
  name: "alerts",
  initialState: {
    loading: false, //by default loading is false
  },
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { showLoading, hideLoading } = alertsSlice.actions;
