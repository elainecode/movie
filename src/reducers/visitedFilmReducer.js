import { SELECT_FILM } from '../actions/actionTypes';

const INITIAL_STATE = [];

function visitedFilmReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_FILM:
      return [...state, action.id];
    default:
      return state;
  }
}

export default visitedFilmReducer;
