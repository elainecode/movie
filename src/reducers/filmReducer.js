import { SELECT_FILM, FETCH_DATA } from '../actions/actionTypes';

const INITIAL_STATE = [];

function filmReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return [...action.films];
    default:
      return state;
  }
}

export default filmReducer;
