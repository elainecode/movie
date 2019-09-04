import {
  SEARCH_FILMS_SUCCESS,
  DISCOVER_FILMS_SUCCESS,
  RESET_RESULTS_TO_DEFAULT_STATE,
} from '../actions/actionTypes';

const INITIAL_STATE = [];

function filmReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DISCOVER_FILMS_SUCCESS:
      return [
        ...state,
        ...action.films.filter(film => film.poster_path),
      ];
    case SEARCH_FILMS_SUCCESS:
      return [
        ...state,
        ...action.films.filter(film => film.poster_path),
      ];
    case RESET_RESULTS_TO_DEFAULT_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default filmReducer;
