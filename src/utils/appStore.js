import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/user/userSlice";
import { toastReducer } from "./features/toast/toastSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
  },
});
export default store;
