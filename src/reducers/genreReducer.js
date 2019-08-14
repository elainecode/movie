import { SELECT_FILM, FETCH_DATA } from '../actions/actionTypes';

const INITIAL_STATE = [];

function genreReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return [...action.genres];
    default:
      return state;
  }
}

export default genreReducer;
