import {
  IS_LOADING_DISCOVER_FILMS,
  IS_LOADING_SEARCH_FILMS,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  discoverBool: false,
  searchBool: false,
};

function isLoadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case IS_LOADING_DISCOVER_FILMS:
      return { ...state, ...action.discoverBool };
    case IS_LOADING_SEARCH_FILMS:
      return { ...state, ...action.searchBool };
    default:
      return state;
  }
}

export default isLoadingReducer;
