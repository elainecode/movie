import { UPDATE_FORM } from '../actions/actionTypes';

const INITIAL_STATE = '';

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_FORM:
      return action.form;
    default:
      return state;
  }
}

export default formReducer;
