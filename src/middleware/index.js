import {
  LOAD_SEARCH_FILMS,
  LOAD_SELECTED_FILM,
  LOAD_DISCOVER_FILMS,
  LOAD_GENRES,
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
  totalResults,
  isLoadingFilms,
} from '../actions';

import { config } from './config';

const checkIfMovieVisited = movieId => JSON.parse(localStorage.getItem(`VF${movieId}`) || null);

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
      next(
        discoverFilmsSuccess(
          films,
          page,
          !(page === totalPages || films.length === 0),
        ),
      );
    } catch (e) {
      return next(discoverFilmsError(e.message));
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
      next(
        searchFilmsSuccess(
          films,
          page,
          !(page === totalPages || films.length === 0),
        ),
      );
    } catch (e) {
      return next(searchFilmsError(e.message));
    }
    return next(isLoadingFilms(false));
  }

  if (action.type === LOAD_SELECTED_FILM) {
    // if (config.visitedFilms.hasOwnProperty(action.id)) {
    //   const selectedFilm = config.visitedFilms[action.id];
    //   return next(selectedFilmSuccess(selectedFilm));
    // }
    const movie = checkIfMovieVisited(action.id);
    if (movie) {
      next(selectedFilmSuccess(movie));
    }
    try {
      const film = await (await fetch(
        config.movieIdUrl(action.id),
      )).json();
      const credits = await (await fetch(
        config.movieCreditsUrl(action.id),
      )).json();
      const selectedFilm = config.combineFilmCredits(film, credits);
      // Store to local storage
      //config.visitedFilms[selectedFilm.id] = { ...selectedFilm };
      localStorage.setItem(
        `VF${action.id}`,
        JSON.stringify({ selectedFilm }),
      );
      return next(selectedFilmSuccess(selectedFilm));
    } catch (e) {
      return next(selectedFilmError(e.message));
    }
  }

  return next(action);
};

export default apiMiddleware;
