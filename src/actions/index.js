import {
  SELECT_FILM,
  GET_DISCOVER_FILMS,
  GET_DISCOVER_GENRES,
  GET_SEARCH_FILMS,
  UPDATE_FORM,
} from './actionTypes';

import { config } from './config';

export const getDiscoverFilms = films => ({
  type: GET_DISCOVER_FILMS,
  films,
});

export const getDiscoverGenres = genres => ({
  type: GET_DISCOVER_GENRES,
  genres,
});

export const getSearchFilms = films => ({
  type: GET_SEARCH_FILMS,
  films,
});

export const selectFilm = id => ({
  type: SELECT_FILM,
  id,
});

export const updateForm = form => ({
  type: UPDATE_FORM,
  form,
});

export const getDiscoverData = () => async dispatch => {
  const API_KEY = await config.setApiKey();
  const { genres, films } = await config.getDiscoverData(API_KEY);
  dispatch(config.getApiKey(API_KEY));
  dispatch(getDiscoverFilms(films));
  dispatch(getDiscoverGenres(genres));
};

export const getSeachData = query => async dispatch => {
  const API_KEY = await config.setApiKey();
  const { films } = await config.getSearchData(API_KEY, query);
  dispatch(getSearchFilms(films));
};
