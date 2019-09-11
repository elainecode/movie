export const scrollToContentDivTop = (e, contentEl) => {
  e.preventDefault();
  if (
    e.target.className === 'MuiCardMedia-root' ||
    'MuiCardContent-root'
  ) {
    contentEl().scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

export const findGenre = (array, genres) =>
  array.map(id => genres[id]);

export const filmSorter = (sortBy, films) => {
  switch (sortBy) {
    case 'popularity.desc':
      return films.sort((a, b) => b.popularity - a.popularity);
    case 'popularity.asc':
      return films.sort((a, b) => a.popularity - b.popularity);
    case 'vote_count.desc':
      return films.sort((a, b) => b.vote_count - a.vote_count);
    case 'vote_count.asc':
      return films.sort((a, b) => a.vote_count - b.vote_count);
    case 'release_date.desc':
      return films.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date),
      );
    case 'release_date.asc':
      return films.sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date),
      );
    default:
      return films;
  }
};
