import {
  combineReducers,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";
import gptReducer from "../redux/gptSearchSlice";
import moviesListReducer from "../redux/moviesListSlice";
import userReducer from "../redux/userInfoSlice";
export const resetStore = createAction("RESET_STORE");
const appReducer = combineReducers({
  user: userReducer,
  movies: moviesListReducer,
  gpt: gptReducer,
});
const rootReducer = (state, action) => {
  if (action.type === resetStore.type) {
    state = undefined;
  }

  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
