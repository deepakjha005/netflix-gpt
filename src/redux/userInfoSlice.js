import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState: {
    user: null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      console.log(action.payload, "payload");
      state.user = action.payload;
      console.log(state.user);
    },
  },
});
export default userInfoSlice.reducer;
export const { setUserInfo } = userInfoSlice.actions;
