import { SELECTED_FILM_SUCCESS, RESET_SELECTED_TO_DEFAULT_STATE } from '../actions/actionTypes';

const INITIAL_STATE = {};

function selectedFilmReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECTED_FILM_SUCCESS:
      return { ...action.film };
    case RESET_SELECTED_TO_DEFAULT_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default selectedFilmReducer;
