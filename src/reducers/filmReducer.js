import {
  GET_DISCOVER_FILMS,
  GET_SEARCH_FILMS,
} from '../actions/actionTypes';

const INITIAL_STATE = [];

function filmReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DISCOVER_FILMS:
      return action.films;
    case GET_SEARCH_FILMS:
      return action.films;
    default:
      return state;
  }
}

export default filmReducer;
