import {
  SEARCH_FILMS_SUCCESS,
  DISCOVER_FILMS_SUCCESS,
  RESET_RESULTS_TO_DEFAULT_STATE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  films: [],
  page: 0,
  hasMore: true,
};

function filmReducer(
  state = INITIAL_STATE,
  { type, films: actionFilms, page, hasMore },
) {
  const { films } = state;
  switch (type) {
    case DISCOVER_FILMS_SUCCESS:
      return {
        films: [
          ...films,
          ...actionFilms.filter(({ poster_path }) => poster_path),
        ],
        page,
        hasMore,
      };

    case SEARCH_FILMS_SUCCESS:
      return {
        films: [
          ...films,
          ...actionFilms.filter(({ poster_path }) => poster_path),
        ],
        page,
        hasMore,
      };
    case RESET_RESULTS_TO_DEFAULT_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default filmReducer;
