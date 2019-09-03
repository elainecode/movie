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
} from './actionTypes';

export const loadDiscoverFilms = page => ({
  type: LOAD_DISCOVER_FILMS,
  page,
});

export const loadGenres = () => ({
  type: LOAD_GENRES,
});

export const discoverFilmsSuccess = films => ({
  type: DISCOVER_FILMS_SUCCESS,
  films,
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

export const loadSearchFilms = (query, page) => ({
  type: LOAD_SEARCH_FILMS,
  query,
  page,
});

export const searchFilmsSuccess = films => ({
  type: SEARCH_FILMS_SUCCESS,
  films,
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
