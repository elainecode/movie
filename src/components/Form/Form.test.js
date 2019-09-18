import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Form from './Form';

describe('<Form/>', () => {
  test('renders the component', () => {
    const updateSearchQuery = jest.fn();
    const searchFilms = jest.fn();
    const component = mount(
      <Router
        render={routerProps => (
          <Form
            updateSearchQuery={updateSearchQuery}
            searchFilms={searchFilms}
            film={film}
            {...routerProps}
          />
        )}
      />,
    );

    expect(toJson(component)).toMatchSnapshot();

    component.unmount();
  });
});
