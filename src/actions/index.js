import {
  SELECT_FILM,
  GET_DISCOVER_FILMS,
  GET_DISCOVER_GENRES,
  GET_SEARCH_FILMS,
  UPDATE_FORM,
} from './actionTypes';

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
  const { API_KEY } = await (await fetch('/api')).json();
  const { genres } = await (await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  )).json();
  const { results: films } = await (await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  )).json();
  dispatch(getDiscoverFilms(films));
  dispatch(getDiscoverGenres(genres));
};

export const getSeachData = query => async dispatch => {
  const { API_KEY } = await (await fetch('/api')).json();
  const { results: films } = await (await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`,
  )).json();
  dispatch(getSearchFilms(films));
};
