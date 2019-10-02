import {
  SELECTED_FILM_SUCCESS,
  RESET_SELECTED_TO_DEFAULT_STATE,
  LOAD_SELECTED_FILM,
  SELECTED_FILM_ERROR,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
};

function selectedFilmReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_SELECTED_FILM:
      return { loading: true };
    case SELECTED_FILM_SUCCESS:
      return { ...action.film, loading: false };
    case SELECTED_FILM_ERROR:
      return { loading: false };
    case RESET_SELECTED_TO_DEFAULT_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default selectedFilmReducer;
