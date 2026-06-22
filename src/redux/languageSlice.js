import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "languageSlice",
  initialState: {
    lang: "en",
  },
  reducers: {
    setLangTranslation: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export default languageSlice.reducer;
export const { setLangTranslation } = languageSlice.actions;
