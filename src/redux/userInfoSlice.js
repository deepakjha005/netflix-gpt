import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState: {
    user: null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    removeUserInfo: (state) => {
      state.user = null;
    },
  },
});
export default userInfoSlice.reducer;
export const { setUserInfo, removeUserInfo } = userInfoSlice.actions;
