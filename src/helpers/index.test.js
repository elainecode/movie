import { scrollToContentDivTop, findGenre } from './index';

describe('scrollToContentDivTop', () => {
  test('function called on click event', () => {
    const mockScroll = jest.fn(scrollToContentDivTop);
    const mockContentElFn = jest.fn(() => contentEl);
    const e = new Event('click', {
      bubbles: true,
      cancelable: true,
    });
    const contentEl = document.createElement('div');
    const bodyEl = document.createElement('div');
    contentEl.className = 'MuiCardMed;ia';
    contentEl.scrollTo = jest.fn();
    bodyEl.append(contentEl);
    bodyEl.addEventListener(
      'click',
      event => {
        mockScroll(event, mockContentElFn);
      },
      false,
    );
    bodyEl.dispatchEvent(e);
    expect(mockScroll).toHaveBeenCalled();
  });
});

describe('test for findGenre', () => {
  test('function returns correct values', () => {
    const mockFindGenre = jest.fn(findGenre);
    const genres_from_film = [14, 28, 36];
    const genres = {
      28: 'Action',
      12: 'Adventure',
      14: 'Fantasy',
      36: 'History',
    };
    const mapped = ['Fantasy', 'Action', 'History'];

    expect(mockFindGenre(genres_from_film, genres)).toEqual(mapped);
  });
});
