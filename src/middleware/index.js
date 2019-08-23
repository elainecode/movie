import {
  LOAD_SEARCH_FILMS,
  SEARCH_FILMS_SUCCESS,
  SEARCH_FILMS_ERROR,
  LOAD_SELECTED_FILM,
  SELECTED_FILM_SUCCESS,
  SELECTED_FILM_ERROR,
  LOAD_DISCOVER_FILMS,
  LOAD_GENRES,
  DISCOVER_FILMS_SUCCESS,
  GENRES_SUCCESS,
  DISCOVER_FILMS_ERROR,
  GENRES_ERROR,
} from '../actions/actionTypes';

import {
  discoverFilmsSuccess,
  genresSuccess,
  discoverFilmsError,
  genresError,
  searchFilmsSuccess,
  searchFilmsError,
  selectedFilmSuccess,
  selectedFilmError,
} from '../actions';

import { config } from './config';

const apiMiddleware = store => next => async action => {
  if (action.type === LOAD_GENRES) {
    try {
      const genres = await (await fetch(config.genreUrl)).json();
      return next(genresSuccess(config.arrayToObject(genres)));
    } catch (e) {
      return next(genresError(e.message));
    }
    
  }
  if (action.type === LOAD_DISCOVER_FILMS) {
    try {
      console.log(config.discoverUrl)
      const { results: films } = await (await fetch(config.discoverUrl)).json();
      return next(discoverFilmsSuccess(films))
    } catch (e) {
      return next(discoverFilmsError(e.message));
    }
    
  }

  if (action.type === LOAD_SEARCH_FILMS) {
    try {
      const { results: films } = await (await fetch(
        config.searchUrl(action.query),
      )).json();
    } catch (e) {
      return next(searchFilmsError(e.message));
    }
    return next(searchFilmsSuccess({ films }));
  }

  if (action.type === LOAD_SELECTED_FILM) {
    try {
      const film = await (await fetch(
        config.movieIdUrl(action.id),
      )).json();
      const credits = await (await fetch(
        config.movieCreditsUrl(action.id),
      )).json();
      const selectedFilm = config.combineFilmCredits(film, credits);
      return next(selectedFilmSuccess(selectedFilm));
    } catch (e) {
      return next(selectedFilmError(e.message));
    }
  }

  return next(action);
};

export default apiMiddleware;
