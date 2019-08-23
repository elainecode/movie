export const config = {};

// config.getApiKey = key => ({
//   type: GET_API_KEY,
//   key,
// });

config.setApiKey = async () => {
  const { API_KEY } = await (await fetch('/api')).json();
  localStorage.setItem('apiKey', API_KEY);
  console.log(config.API_KEY, 'ls', localStorage.getItem('apiKey'));
};

config.API_KEY = localStorage.getItem('apiKey');

config.genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${config.API_KEY}&language=en-US`;

config.discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${config.API_KEY}&sort_by=popularity.desc`;

config.searchUrl = query => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&language=en-US&query=${query}`;
};

config.movieIdUrl = id => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${config.API_KEY}&language=en-US`;
};

config.movieCreditsUrl = id => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${config.API_KEY}&language=en-US`;
};

// config.getDiscoverData = async => {
//   config.setGenreUrl(API_KEY);
//   const { genres } = await (await fetch(
//     config.GenreUrl,
//   )).json();
//   const { results: films } = await (await fetch(
//     config.setDiscoverUrl(API_KEY),
//   )).json();
//   return { genres, films };
// };

// config.getSearchData = async (query) => {
//   const { results: films } = await (await fetch(
//     config.setSearchUrl(query),
//   )).json();
//   return { films };
// };

// config.getCreditsData = async (API_KEY, id) => {
//   const film  = await (await fetch(
//     config.setMovieIdUrl(API_KEY, id),
//   )).json();
//   const credits = await (await fetch(
//     config.setMovieCreditsUrl(API_KEY, id),
//   )).json();

//   return config.combineFilmCredits(film, credits);
// };

config.arrayToObject = genres => {
  return genres.reduce(
    (obj, item) => ({ ...obj, [item.id]: item.name }),
    {},
  );
};

config.combineFilmCredits = (film, credits) => {
  const cast = credits.cast.map(item => item.name);
  const director = credits.crew.find(item => item.job === 'Director')
    .name;
  return { ...film, cast, director };
};
