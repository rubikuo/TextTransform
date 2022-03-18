import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const errorMsgSlice = createSlice({
  name: "errorMsg", //this name is the name of the state and it will have to match the key value of the reducer used in the index.js
  initialState: initialStateValue,
  reducers: {
    showMessage: (state, action) => {
      state = action.payload;
    },
    resetMessage: (state) => {
      state = initialStateValue;
    },
  },
});

export const { showMessage, resetMessage } = errorMsgSlice.actions;
export default errorMsgSlice.reducer;
