import { IS_LOADING } from '../actions/actionTypes';

const INITIAL_STATE = false;

function isLoadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case IS_LOADING:
      return state ? false : true;
    default:
      return state;
  }
}

export default isLoadingReducer;
