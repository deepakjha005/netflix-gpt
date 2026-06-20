import { configureStore } from "@reduxjs/toolkit";
import userInfo from "../redux/userInfoSlice";

export const store = configureStore({
  reducer: userInfo,
});
