import {
  LOAD_SEARCH_FILMS,
  LOAD_SELECTED_FILM,
  LOAD_DISCOVER_FILMS,
  LOAD_GENRES,
} from '../actions/actionTypes';

import {
  discoverFilmsSuccess,
  genresSuccess,
  genresError,
  searchFilmsSuccess,
  selectedFilmSuccess,
  selectedFilmError,
  totalResults,
  isLoadingFilms,
  isLoadingError,
} from '../actions';

import { config } from './config';

const apiMiddleware = store => next => async action => {
  if (action.type === LOAD_GENRES) {
    try {
      let { genres } = await (await fetch(config.genreUrl)).json();
      genres = config.arrayToObject(genres);
      return next(genresSuccess(genres));
    } catch (e) {
      return next(genresError(e.message));
    }
  }
  if (action.type === LOAD_DISCOVER_FILMS) {
    next(isLoadingFilms(true));
    try {
      const {
        results: films,
        total_pages: totalPages,
        total_results: count,
        page,
      } = await (await fetch(
        config.discoverUrl(action.page, action.sortBy),
      )).json();
      next(totalResults(count));
      if (films.length === 0) {
        next(isLoadingError(true));
      } else {
        next(
          discoverFilmsSuccess(
            films,
            page,
            !(page === totalPages || films.length === 0),
          ),
        );
      }
    } catch (e) {
      return next(isLoadingError(true));
    }
    return next(isLoadingFilms(false));
  }

  if (action.type === LOAD_SEARCH_FILMS) {
    next(isLoadingFilms(true));
    try {
      const {
        results: films,
        total_pages: totalPages,
        total_results: count,
        page,
      } = await (await fetch(
        config.searchUrl(action.query, action.page),
      )).json();
      next(totalResults(count));
      if (films.length === 0) {
        next(isLoadingError(true));
      } else {
        next(
          searchFilmsSuccess(
            films,
            page,
            !(page === totalPages || films.length === 0),
          ),
        );
      }
    } catch (e) {
      return next(isLoadingError(true));
    }
    return next(isLoadingFilms(false));
  }

  if (action.type === LOAD_SELECTED_FILM) {
    if (config.visitedFilms.hasOwnProperty(action.id)) {
      const selectedFilm = config.visitedFilms[action.id];
      return next(selectedFilmSuccess(selectedFilm));
    }
    try {
      const film = await (await fetch(
        config.movieIdUrl(action.id),
      )).json();
      const credits = await (await fetch(
        config.movieCreditsUrl(action.id),
      )).json();
      const selectedFilm = config.combineFilmCredits(film, credits);
      config.visitedFilms[selectedFilm.id] = { ...selectedFilm };
      localStorage.setItem(
        'visitedFilms',
        JSON.stringify({
          ...config.visitedFilms,
        }),
      );
      return next(selectedFilmSuccess(selectedFilm));
    } catch (e) {
      return next(selectedFilmError(e.message));
    }
  }

  return next(action);
};

export default apiMiddleware;
