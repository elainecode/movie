import { GET_API_KEY } from './actionTypes';

export const config = {};

config.getApiKey = key => ({
  type: GET_API_KEY,
  key,
});

config.setApiKey = async () => {
  const { API_KEY } = await (await fetch('/api')).json();
  return API_KEY;
};

config.setGenreUrl = API_KEY => {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
};

config.setDiscoverUrl = API_KEY => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
};

config.setSearchUrl = API_KEY => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;
};

config.getDiscoverData = async API_KEY => {
  config.setGenreUrl(API_KEY)
  const { genres } = await (await fetch(
    config.setGenreUrl(API_KEY),
  )).json();
  const { results: films } = await (await fetch(
    config.setDiscoverUrl(API_KEY),
  )).json();
  return { genres, films };
};

config.getSearchData = async (API_KEY, query) => {
  const { results: films } = await (await fetch(
    `${config.setSearchUrl(API_KEY)}${query}`,
  )).json();
  return { films };
};
