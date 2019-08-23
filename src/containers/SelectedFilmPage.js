import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSelectedFilm } from '../actions';
import Header from '../components/Header';
import FilmDetails from '../components/FilmDetails';
import FilmList from '../components/FilmList';
import Filter from '../components/Filter';

class SelectedFilmPage extends Component {
  componentDidMount() {}

  findFilmById = id => {
    const { visitedFilms, films } = this.props;
    const key = parseInt(id);
    return visitedFilms[key]
      ? visitedFilms[key]
      : films.find(item => item.id === key);
  };

  render() {
    const {
      films,
      genres,
      visitedFilms,
      findGenre,
      clickFilm,
    } = this.props;

    const { findFilmById } = this;
    const { id } = this.props.match.params;
    const film = findFilmById(id);

    return (
      <>
        <Header />
        <FilmDetails film={film || null} findGenre={findGenre} />
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
  visitedFilms: state.visitedFilms,
});

export default connect(
  mapStateToProps,
  { loadSelectedFilm },
)(SelectedFilmPage);
