export const scrollToContentDivTop = () => {
  const content = document.querySelector('.content');
  if (content) {
    window.scrollTo({
      top: content.offsetTop,
      behavior: 'smooth',
    });
  }
};

export const findGenre = (array, genres) =>
  array.map(id => genres[id]);
