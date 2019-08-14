import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import genreReducer from './genreReducer';
import selectedFilmReducer from './selectedFilmReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  films: filmReducer,
  genres: genreReducer,
  selectedFilm: selectedFilmReducer,
  form: formReducer,
});

export default rootReducer;
