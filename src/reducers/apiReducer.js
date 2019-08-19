import { GET_API_KEY } from '../actions/actionTypes';

const INITIAL_STATE = '';

function apiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_API_KEY:
      return action.key;
    default:
      return state;
  }
}

export default apiReducer;
