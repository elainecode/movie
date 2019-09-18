import React from 'react';
import { shallow } from 'enzyme';
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

    expect(component.debug()).toMatchSnapshot();
    
  })
});
