import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { loadSelectedFilm } from '../actions';

import FilmDetails from '../components/FilmDetails';


class SelectedFilmPage extends Component {
  componentDidMount() {
    // this.props.history.push(`${match.params}/`);
  }

  render() {
    console.log(this.props.match.url, this.props.match.path);
    const {
      films,
      genres,
      selectedFilm,
      findGenre,
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
                  findGenre={findGenre}
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
