import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import SelectedFilmPage from './SelectedFilmPage';

const mockStore = configureStore([]);

describe('<SelectedFilmPage/>', () => {
  let store;
  const loadSelectedFilm = jest.fn();
  const resetSelectedToDefaultState = jest.fn();
  const clickFilm = jest.fn();
  const films = [{}];
  const genres = {
    28: 'Action',
    12: 'Adventure',
    14: 'Fantasy',
    36: 'History',
  };
  beforeEach(() => {
    store = mockStore({
      selectedFilm: {
        title: '',
        poster_path: '',
        release_date: '19992345678',
        runtime: '',
        director: '',
        genres: [28, 87, 14],
        cast: ['name1', 'name2', 'name3'],
      },
      loadSelectedFilm,
      resetSelectedToDefaultState,
    });
  });
  test('should render with given state from Redux store', () => {
    const component = mount(
      <Router
        render={routerProps => (
          <Provider store={store}>
            <SelectedFilmPage
              films={films}
              genres={genres}
              clickFilm={clickFilm}
              {...routerProps}
            />
          </Provider>
        )}
      />,
    );

    expect(toJson(component)).toMatchSnapshot();

    component.unmount();
  });
});
