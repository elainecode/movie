import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import genreReducer from './genreReducer';
import visitedFilmReducer from './visitedFilmReducer';
import apiReducer from './apiReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  api: apiReducer,
  films: filmReducer,
  genres: genreReducer,
  visitedFilms: visitedFilmReducer,
  form: formReducer,
});

export default rootReducer;
