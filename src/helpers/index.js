
export const findFilmById = id => {
  const { visitedFilms, films } = this.props;
  const key = parseInt(id);
  return visitedFilms[key]
    ? visitedFilms[key]
    : films.find(item => item.id === key);
};
