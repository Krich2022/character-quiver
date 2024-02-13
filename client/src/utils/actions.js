export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const UPDATE_CHARACTER = "UPDATE_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const FETCH_CHARACTERS_REQUEST = "FETCH_CHARACTERS_REQUEST";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";
export const FETCH_SINGLE_CHARACTER_REQUEST = "FETCH_SINGLE_CHARACTER_REQUEST"
export const FETCH_SINGLE_CHARACTER_SUCCESS = "FETCH_SINGLE_CHARACTER_SUCCESS"
export const FETCH_SINGLE_CHARACTER_FAILURE = "FETCH_SINGLE_CHARACTER_FAILURE"


// Action creators for user authentication
export const loginSuccess = (token, user) => ({
  type: LOGIN_SUCCESS,
  payload: { token, user },
});

export const logout = () => ({
  type: LOGOUT,
});

// Action creators for user management
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

// Action creators for character management
export const addCharacter = (character) => ({
  type: ADD_CHARACTER,
  payload: character,
});

export const updateCharacter = (character) => ({
  type: UPDATE_CHARACTER,
  payload: character,
});

export const deleteCharacter = (_id) => ({
  type: DELETE_CHARACTER,
  payload: _id,
});

export const fetchCharactersRequest = () => ({
  type: FETCH_CHARACTERS_REQUEST,
});

export const fetchCharactersSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters,
});

export const fetchCharactersFailure = (error) => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: error,
});

export const fetchSingleCharacterRequest = (_id) => ({
  type: FETCH_SINGLE_CHARACTER_REQUEST,
  payload: _id,
});

export const fetchSingleCharacterSuccess=(character)=>({
  type: FETCH_SINGLE_CHARACTER_SUCCESS,
  payload: character,
});

export const fetchSingleCharacterFailure=(error)=>({
  type: FETCH_SINGLE_CHARACTER_FAILURE,
  payload:error,
});