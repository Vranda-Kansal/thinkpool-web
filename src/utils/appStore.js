import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/user/userSlice";
import { feedReducer } from "./features/feed/feedSlice";
import { connectionReducer } from "./features/feed/connectionSlice";
import { toastReducer } from "./features/toast/toastSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connectionRequests: connectionReducer,
    toasts: toastReducer,
  },
});
export default store;
