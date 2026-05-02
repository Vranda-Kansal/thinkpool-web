import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: [],
  reducers: {
    addToast: (state, action) => {
      state.push({
        message: action.payload.message,
        type: action.payload.type,
      });
    },
    removeToast: (state) => {
      state.shift();
    },
  },
});
export const { addToast, removeToast } = toastSlice.actions;
export const toastReducer = toastSlice.reducer;
