import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Film from './Film';

describe('<Film/>', () => {
  test('renders the component', () => {
    const clickFilm = jest.fn();
    const match = { url: '/home' };
    const genres = [];
    const id = 5;
    const title = '';
    const component = shallow(
      <Film
        id={id}
        clickFilm={clickFilm}
        match={match}
        genres={genres}
        title={title}
      />,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('<Film/>', () => {
  test('calls function clickFilm when div is clicked', () => {
    const clickFilm = jest.fn();
    const match = { url: '/home' };
    const genres = [];
    const id = 5;
    const title = '';
    const component = mount(
      <Router>
        <Film
          id={id}
          clickFilm={clickFilm}
          match={match}
          genres={genres}
          title={title}
        />
        ,
      </Router>,
    );

    component.find('div.scroll-click-event').simulate('click');
    expect(clickFilm.mock.calls.length).toEqual(1);
    component.unmount();
  });
});
