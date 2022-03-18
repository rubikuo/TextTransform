import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "",
  mostUsedWords: [],
  mostUsedWordsConverted: [],
  occurrence: 0,
  convertedContent: "",
};
export const fileSlice = createSlice({
  name: "file",
  initialState: { value: initialStateValue },
  reducers: {
    uploadFile: (state, action) => {
      state.value = action.payload;
    },
    resetFile: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { uploadFile, resetFile } = fileSlice.actions;
export default fileSlice.reducer;
