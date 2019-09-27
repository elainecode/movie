import { IS_LOADING, IS_LOADING_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  error: false,
};

function isLoadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, ...action.isLoading };
    case IS_LOADING_ERROR:
      return { ...state, ...action.error };
    default:
      return state;
  }
}

export default isLoadingReducer;
