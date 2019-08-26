import { SELECTED_FILM_SUCCESS } from '../actions/actionTypes';

const INITIAL_STATE = {};

function selectedFilmReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECTED_FILM_SUCCESS:
      return { ...action.film };
    default:
      return state;
  }
}

export default selectedFilmReducer;
