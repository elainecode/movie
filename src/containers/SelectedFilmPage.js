import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { loadSelectedFilm } from '../actions';
import { scrollToContentDivTop } from '../helpers';

import FilmDetails from '../components/FilmDetails';

class SelectedFilmPage extends Component {
  componentDidMount() {
    window.addEventListener('click', scrollToContentDivTop, false);
  }

  componentWillUnmount() {
    window.removeEventListener('click', scrollToContentDivTop, false);
  }

  render() {
    const {
      films,
      genres,
      selectedFilm,
      clickFilm,
      match,
    } = this.props;
    return (
      <>
        <Route
          render={routerProps => (
            <>
              (
              <FilmDetails
                film={selectedFilm}
                genres={genres}
                {...routerProps}
              />
              )
            </>
          )}
        />
      </>
    );
  }
}

const mapStateToProps = ({ selectedFilm }) => ({
  selectedFilm,
});

export default connect(
  mapStateToProps,
  { loadSelectedFilm },
)(SelectedFilmPage);
