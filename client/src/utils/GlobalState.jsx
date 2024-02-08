import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers/reducers";

const store = configureStore({
  reducer: rootReducer,
});

const GlobalState = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default GlobalState;
