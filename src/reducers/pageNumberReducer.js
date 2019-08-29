import { NEXT_PAGE, RESET_PAGE } from '../actions/actionTypes';

const INITIAL_STATE = 1;

function pageNumberReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEXT_PAGE:
      return action.page || state;
    case RESET_PAGE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default pageNumberReducer;