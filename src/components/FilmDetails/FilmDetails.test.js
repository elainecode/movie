import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { findGenre } from '../../helpers';
import FilmDetails from './FilmDetails';

describe('<FilmDetails/>', () => {
  test('renders the component', () => {
    const film = {
      title: '',
      poster_path: '',
      release_date: '19992345678',
      runtime: '',
      director: '',
      genres: [28, 87, 14],
      cast: ['name1', 'name2', 'name3'],
    };

    const genres = {
      28: 'Action',
      12: 'Adventure',
      14: 'Fantasy',
      36: 'History',
    };

    const component = mount(
      <FilmDetails
        anchorEl={document.createElement('div')}
        film={film}
        genres={genres}
      />,
    );

    expect(toJson(component)).toMatchSnapshot();

    component.unmount();
  });
});
