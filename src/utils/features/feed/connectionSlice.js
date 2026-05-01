import { createSlice } from "@reduxjs/toolkit";

export const connectionSlice = createSlice({
  name: "friendRequests",
  initialState: null,
  reducers: {
    getConnectionRequests: (state, action) => {
      return action.payload;
    },
    removeConnectionRequest: (state, action) => {
      const newFriendReq = state.filter((req) => req._id !== action.payload);
      return newFriendReq;
    },
  },
});

export const { getConnectionRequests, removeConnectionRequest } =
  connectionSlice.actions;
export const connectionReducer = connectionSlice.reducer;
