import { SELECT_FILM } from '../types/actionTypes';

const selectFilm = id => ({
  type: SELECT_FILM,
  id,
});

export { selectFilm };
