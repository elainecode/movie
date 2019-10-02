import { scrollToContentDivTop } from './index';

describe('scrollToContentDivTop', () => {
  test('function called on click event', () => {
    const mockScroll = jest.fn(scrollToContentDivTop);
    const e = new Event('click', {
      bubbles: true,
      cancelable: true,
    });
    const contentEl = document.createElement('div');
    const bodyEl = document.createElement('div');
    contentEl.className = 'MuiCardMedia';
    bodyEl.append(contentEl);
    bodyEl.addEventListener(
      'click',
      event => {
        mockScroll(event, () => contentEl);
      },
      false,
    );
    bodyEl.dispatchEvent(e);
    expect(mockScroll).toHaveBeenCalled();
  });
});

// describe('test for scrollToContentDivTop', () => {
//   test('', () => {
//     const e = new Event('click', {
//       bubbles: false,
//       cancelable: true,
//     });
//     const contentEl = document.createElement('div');
//     const bodyEl = document.createElement('div');
//     contentEl.className = 'MuiCardMedia';
//     bodyEl.append(contentEl);
//     beforeAll(() => {
//       contentEl.dispatchEvent(e);
//     });
//     expect(scrollToContentDivTop(e, contentEl)).toHaveBeenCalled();
//   });
// });
