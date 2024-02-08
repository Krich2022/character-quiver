import { ADD_CHARACTER, UPDATE_CHARACTER, DELETE_CHARACTER } from "./actions";

const initialCharactersState = [];

const characterReducer = (state = initialCharactersState, action) => {
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

export default characterReducer;
