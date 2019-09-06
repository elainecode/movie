import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import genreReducer from './genreReducer';
import selectedFilmReducer from './selectedFilmReducer';

const rootReducer = combineReducers({
  api: filmReducer,
  genres: genreReducer,
  selectedFilm: selectedFilmReducer,
});

export default rootReducer;
