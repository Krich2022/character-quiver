// reducers.js

import {
  LOGIN_SUCCESS,
  LOGOUT,
  SET_CURRENT_USER,
  ADD_CHARACTER,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
} from "./actions";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {},
  characters: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: {},
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return [...state, action.payload];
    case UPDATE_CHARACTER:
      return state.map((character) =>
        character._id === action.payload._id ? action.payload : character
      );
    case DELETE_CHARACTER:
      return state.filter((character) => character._id !== action.payload);
    default:
      return state;
  }
};

export default {
  auth: authReducer,
  characters: charactersReducer,
};
