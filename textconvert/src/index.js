import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./sass/main.scss";
import errorReducer from "./features/errorMsg";
import fileReducer from "./features/file";

const store = configureStore({
  reducer: {
    file: fileReducer,
    errorMsg: errorReducer, // the key value must match the "name" defined in the errorMsg.js and it should be a string
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
