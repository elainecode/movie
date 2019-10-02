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
