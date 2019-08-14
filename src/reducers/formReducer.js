import { UPDATE_INPUT } from '../actions/actionTypes';

const INITIAL_STATE = {
  input: '',
  searchBy: 'title',
};

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      return { ...state, input: action.input };
    default:
      return state;
  }
}

export default formReducer;
