import selectedFilmReducer from './selectedFilmReducer';
import {
  SELECTED_FILM_SUCCESS,
  RESET_SELECTED_TO_DEFAULT_STATE,
} from '../actions/actionTypes';

describe('INITIAL_STATE', () => {
  test('returns initial state', () => {
    const action = { type: 'dummy_action' };
    const INITIAL_STATE = { loading: false };
    expect(selectedFilmReducer(undefined, action)).toEqual(
      INITIAL_STATE,
    );
  });
});

describe('SELECTED_FILM_SUCCESS', () => {
  test('returns correct state when action type is SELECTED_FILM_SUCCESS', () => {
    const action = {
      type: SELECTED_FILM_SUCCESS,
      film: { selected: 'selected film' },
    };
    const expectedState = {
      ...action.film,
      loading: false,
    };

    expect(selectedFilmReducer(undefined, action)).toEqual(
      expectedState,
    );
  });
});

describe('RESET_SELECTED_TO_DEFAULT_STATE', () => {
  test('returns correct state when action type is RESET_SELECTED_TO_DEFAULT_STATE', () => {
    const action = {
      type: RESET_SELECTED_TO_DEFAULT_STATE,
    };
    const expectedState = { loading: false };

    expect(selectedFilmReducer(undefined, action)).toEqual(
      expectedState,
    );
  });
});
