import {
  SELECT_FILM,
  GET_SEARCH_FILMS,
} from '../actions/actionTypes';

const apiMiddleware = store => next => async action => {
  if (action.type === SELECT_FILM || GET_SEARCH_FILMS) {
    const { api } = await store.getState();
    console.log('inside middleware', api);
  }
  next(action);
};

export default apiMiddleware;
