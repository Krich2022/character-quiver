import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import charactersReducer from "./charactersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  characters: charactersReducer,
});

export default rootReducer;
