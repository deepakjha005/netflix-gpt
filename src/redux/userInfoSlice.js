import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState: {
    user: null,
    isLogin: false,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    removeUserInfo: (state) => {
      state.user = null;
    },
    setUserLogin: (state) => {
      state.isLogin = true;
    },
  },
});
export default userInfoSlice.reducer;
export const { setUserInfo, removeUserInfo, setUserLogin } =
  userInfoSlice.actions;
