import { FETCH_DATA, GET_FILMS } from '../actions/actionTypes';

const INITIAL_STATE = [];

function filmReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return [...action.films];
    case GET_FILMS:
      return [...action.films];
    default:
      return state;
  }
}

export default filmReducer;
