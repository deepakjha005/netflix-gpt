import { configureStore } from "@reduxjs/toolkit";
import moviesListReducer from "../redux/moviesListSlice";
import userInfoReducer from "../redux/userInfoSlice";

export const store = configureStore({
  reducer: {
    user: userInfoReducer,
    movies: moviesListReducer,
  },
});
