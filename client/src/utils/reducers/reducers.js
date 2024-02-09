import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import characterReducer from "./characterReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  characters: characterReducer,
});

export default rootReducer;
