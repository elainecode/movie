import {
  SEARCH_FILMS_SUCCESS,
  DISCOVER_FILMS_SUCCESS,
  CHANGE_SEARCH_STRATEGY,
} from '../actions/actionTypes';

const INITIAL_STATE = [];

function filmReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DISCOVER_FILMS_SUCCESS:
      return [...state, ...action.films];
    case SEARCH_FILMS_SUCCESS:
      return [...state, ...action.films];
    case CHANGE_SEARCH_STRATEGY:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default filmReducer;
