import { GET_DISCOVER_GENRES } from '../actions/actionTypes';

const INITIAL_STATE = {};

const arrayToObject = genres => {
  return genres.reduce(
    (obj, item) => ({ ...obj, [item.id]: item.name }),
    {},
  );
};

function genreReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DISCOVER_GENRES:
      return arrayToObject(action.genres);
    default:
      return state;
  }
}

export default genreReducer;
