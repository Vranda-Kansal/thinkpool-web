import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/user/userSlice";
import { feedReducer } from "./features/feed/feedSlice";
import { connectionReducer } from "./features/feed/connectionSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connectionRequests: connectionReducer,
  },
});
export default store;
