import {
  SEARCH_FILMS_SUCCESS,
  DISCOVER_FILMS_SUCCESS,
} from '../actions/actionTypes';

const INITIAL_STATE = [];

function filmReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DISCOVER_FILMS_SUCCESS:
      return action.films;
    case SEARCH_FILMS_SUCCESS:
      return action.films;
    default:
      return state;
  }
}

export default filmReducer;
