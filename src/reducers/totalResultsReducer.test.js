import totalResultsReducer from './totalResultsReducer';
import { TOTAL_RESULTS } from '../actions/actionTypes';

describe('INITIAL_STATE', () => {
  test('returns initial state', () => {
    const action = { type: 'dummy_action' };
    const INITIAL_STATE = 0;
    expect(totalResultsReducer(undefined, action)).toEqual(
      INITIAL_STATE,
    );
  });
});

describe('TOTAL_RESULTS', () => {
  test('returns correct state when action type is TOTAL_RESULTS', () => {
    const action = {
      type: TOTAL_RESULTS,
      count: 55,
    };
    const expectedState = 55;

    expect(totalResultsReducer(undefined, action)).toEqual(
      expectedState,
    );
  });
});
