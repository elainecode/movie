import { TOTAL_RESULTS } from '../actions/actionTypes';

const INITIAL_STATE = 0;

function totalResultsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOTAL_RESULTS:
      return action.count;
    default:
      return state;
  }
}

export default totalResultsReducer;
