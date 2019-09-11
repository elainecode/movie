import {
  LOAD_SELECTED_FILM,
  SELECTED_FILM_SUCCESS,
  SELECTED_FILM_ERROR,
  LOAD_SEARCH_FILMS,
  SEARCH_FILMS_SUCCESS,
  SEARCH_FILMS_ERROR,
  LOAD_DISCOVER_FILMS,
  LOAD_GENRES,
  DISCOVER_FILMS_SUCCESS,
  GENRES_SUCCESS,
  DISCOVER_FILMS_ERROR,
  GENRES_ERROR,
  UPDATE_FORM,
  RESET_RESULTS_TO_DEFAULT_STATE,
  RESET_SELECTED_TO_DEFAULT_STATE,
  SORT_FILMS_BY,
  RESET_SORTED_BY_TO_DEFAULT_STATE,
  TOTAL_RESULTS,
  IS_LOADING,
} from './actionTypes';

export const loadDiscoverFilms = (page, sortBy) => ({
  type: LOAD_DISCOVER_FILMS,
  page,
  sortBy,
});

export const loadGenres = () => ({
  type: LOAD_GENRES,
});

export const discoverFilmsSuccess = (films, page, hasMore) => ({
  type: DISCOVER_FILMS_SUCCESS,
  films,
  page,
  hasMore,
});

export const genresSuccess = genres => ({
  type: GENRES_SUCCESS,
  genres,
});

export const discoverFilmsError = error => ({
  type: DISCOVER_FILMS_ERROR,
  error,
});

export const genresError = error => ({
  type: GENRES_ERROR,
  error,
});

export const loadSearchFilms = (query, page, sortBy) => ({
  type: LOAD_SEARCH_FILMS,
  query,
  page,
  sortBy,
});

export const searchFilmsSuccess = (films, page, hasMore) => ({
  type: SEARCH_FILMS_SUCCESS,
  films,
  page,
  hasMore,
});

export const searchFilmsError = error => ({
  type: SEARCH_FILMS_ERROR,
  error,
});

export const loadSelectedFilm = id => ({
  type: LOAD_SELECTED_FILM,
  id,
});

export const selectedFilmSuccess = film => ({
  type: SELECTED_FILM_SUCCESS,
  film,
});

export const selectedFilmError = query => ({
  type: SELECTED_FILM_ERROR,
  query,
});

export const updateForm = form => ({
  type: UPDATE_FORM,
  form,
});

export const resetResultsToDefaultState = () => ({
  type: RESET_RESULTS_TO_DEFAULT_STATE,
});

export const resetSelectedToDefaultState = () => ({
  type: RESET_SELECTED_TO_DEFAULT_STATE,
});

export const resetSortByToDefaultState = () => ({
  type: RESET_SORTED_BY_TO_DEFAULT_STATE,
});

export const sortFilmsBy = sortBy => ({
  type: SORT_FILMS_BY,
  sortBy,
});

export const totalResults = count => ({
  type: TOTAL_RESULTS,
  count,
});

export const isLoadingFilms = (bool) => ({
  type: IS_LOADING,
  bool,
});
