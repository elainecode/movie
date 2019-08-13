const INITIAL_STATE = null;

const selectFilm = (action) => action.id;

function selectedFilmReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default selectedFilmReducer;