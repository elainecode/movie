export const config = {};

config.setApiKey = async () => {
  const { API_KEY } = await (await fetch('/api')).json();
  localStorage.setItem('apiKey', API_KEY);
};

config.setVisitedFilms = () => {
  localStorage.setItem('visitedFilms', JSON.stringify({}));
};

config.API_KEY = localStorage.getItem('apiKey');

config.visitedFilms = JSON.parse(localStorage.getItem('visitedFilms') || '{}');

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
