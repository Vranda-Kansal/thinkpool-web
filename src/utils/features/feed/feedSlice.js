import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
  name: "feedProfiles",
  initialState: null,
  reducers: {
    addFeedProfiles: (state, action) => {
      return action.payload;
    },
    removeUserFromProfile: (state, action) => {
      const filteredFeed = state.filter((feed) => feed._id !== action.payload);
      return filteredFeed;
    },
  },
});

export const { addFeedProfiles, removeUserFromProfile } = feedSlice.actions;
export const feedReducer = feedSlice.reducer;
