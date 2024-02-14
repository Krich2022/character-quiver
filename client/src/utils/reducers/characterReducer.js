import {
  ADD_CHARACTER,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_SINGLE_CHARACTER_SUCCESS,
} from "../actions";

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
    case FETCH_CHARACTERS_SUCCESS:
      return action.payload;
      case FETCH_SINGLE_CHARACTER_SUCCESS:
        return action.payload;
    default:
      return state;
  }
};

export default characterReducer;
