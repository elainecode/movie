import { SELECT_FILM, FETCH_DATA } from './actionTypes';

export const fetchData = (films, genres) => ({
  type: FETCH_DATA,
  films,
  genres,
});

export const selectFilm = id => ({
  type: SELECT_FILM,
  id,
});

export const getMovieData = () => async dispatch => {
  const { API_KEY } = await (await fetch('/api')).json();
  const { genres } = await (await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  )).json();
  const { results: films } = await (await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  )).json();
  return dispatch(fetchData(films, genres));
};
