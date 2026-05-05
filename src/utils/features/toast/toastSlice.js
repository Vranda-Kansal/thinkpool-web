import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: [],
  reducers: {
    addToast: (state, action) => {
      state.push(action.payload);
    },
    removeToast: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});
export const { addToast, removeToast } = toastSlice.actions;
export const toastReducer = toastSlice.reducer;
