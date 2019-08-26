import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSelectedFilm } from '../actions';
import FilmDetails from '../components/FilmDetails';
import FilmList from '../components/FilmList';
import Filter from '../components/Filter';

class SelectedFilmPage extends Component {
  componentDidMount() {}

  render() {
    const {
      films,
      genres,
      selectedFilm,
      findGenre,
      clickFilm,
    } = this.props;
    return (
      <>
        {Object.keys(selectedFilm) && (
          <FilmDetails film={selectedFilm} findGenre={findGenre} />
        )}
        <Filter />
        <FilmList
          films={films}
          findGenre={findGenre}
          clickFilm={clickFilm}
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
