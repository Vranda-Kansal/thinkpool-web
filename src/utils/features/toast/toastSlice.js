import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: [],
  reducers: {
    addToast: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addToast } = toastSlice.actions;
export const toastReducer = toastSlice.reducer;
