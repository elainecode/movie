import {
  SORT_FILMS_BY,
  RESET_SORTED_BY_TO_DEFAULT_STATE,
} from '../actions/actionTypes';

const INITIAL_STATE = 'popularity.desc';

function sortByReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SORT_FILMS_BY:
      return action.sortBy;
    case RESET_SORTED_BY_TO_DEFAULT_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default sortByReducer;
