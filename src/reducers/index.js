import { combineReducers } from 'redux';
import filmReducer from './filmReducer';
import genreReducer from './genreReducer';
import selectedFilmReducer from './selectedFilmReducer';
import sortByReducer from './sortByReducer';
import totalResultsReducer from './totalResultsReducer';
import isLoadingReducer from './isLoadingReducer';

const rootReducer = combineReducers({
  api: filmReducer,
  genres: genreReducer,
  selectedFilm: selectedFilmReducer,
  sortBy: sortByReducer,
  totalResults: totalResultsReducer,
  loadingBooleans: isLoadingReducer,
});

export default rootReducer;
