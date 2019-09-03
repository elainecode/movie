export const scrollToContentDivTop = e => {
  e.preventDefault();
  if (e.target.className === 'MuiCardMedia-root') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

export const findGenre = (array, genres) =>
  array.map(id => genres[id]);
