import filmReducer from './filmReducer';
import {
  SEARCH_FILMS_SUCCESS,
  DISCOVER_FILMS_SUCCESS,
  RESET_RESULTS_TO_DEFAULT_STATE,
} from '../actions/actionTypes';

describe('INITIAL_STATE', () => {
  test('returns initial state', () => {
    const action = { type: 'dummy_action' };
    const INITIAL_STATE = {
      films: [],
      page: 0,
      hasMore: true,
    };

    expect(filmReducer(undefined, action)).toEqual(INITIAL_STATE);
  });
});

describe('SEARCH_FILMS_SUCCESS', () => {
  test('returns correct state when action type is SEARCH_FILMS_SUCCESS', () => {
    const action = {
      type: SEARCH_FILMS_SUCCESS,
      films: [{ poster_path: 'url' }, {}],
      page: 0,
      hasMore: false,
    };
    const expectedState = {
      films: [{ poster_path: 'url' }],
      page: 0,
      hasMore: false,
    };

    expect(filmReducer(undefined, action)).toEqual(expectedState);
  });
});

describe('DISCOVER_FILMS_SUCCESS', () => {
  test('returns correct state when action type is DISCOVER_FILMS_SUCCESS', () => {
    const action = {
      type: DISCOVER_FILMS_SUCCESS,
      films: [{ poster_path: 'url' }, {}],
      page: 0,
      hasMore: true,
    };
    const expectedState = {
      films: [{ poster_path: 'url' }],
      page: 0,
      hasMore: true,
    };

    expect(filmReducer(undefined, action)).toEqual(expectedState);
  });
});

describe('RESET_RESULTS_TO_DEFAULT_STATE', () => {
  test('returns correct state when action type is RESET_RESULTS_TO_DEFAULT_STATE', () => {
    const action = { type: RESET_RESULTS_TO_DEFAULT_STATE };
    const INITIAL_STATE = {
      films: [],
      page: 0,
      hasMore: true,
    };

    expect(filmReducer(undefined, action)).toEqual(INITIAL_STATE);
  });
});
