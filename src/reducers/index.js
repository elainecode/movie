import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import genreReducer from './genreReducer';
import visitedFilmReducer from './visitedFilmReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  films: filmReducer,
  genres: genreReducer,
  visitedFilms: visitedFilmReducer,
  form: formReducer,
});

export default rootReducer;
