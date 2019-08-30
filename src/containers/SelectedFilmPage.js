import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { loadSelectedFilm } from '../actions';
import {scrollToContentDivTop } from '../helpers';

import FilmDetails from '../components/FilmDetails';

class SelectedFilmPage extends Component {
  componentDidMount() {
    scrollToContentDivTop()
  }

  componentDidUpdate() {
    scrollToContentDivTop()
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
              {Object.keys(selectedFilm) && (
                <FilmDetails
                  film={selectedFilm}
                  genres={genres}
                  {...routerProps}
                />
              )}
            </>
          )}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedFilm: state.selectedFilm,
});

export default connect(
  mapStateToProps,
  { loadSelectedFilm },
)(SelectedFilmPage);
