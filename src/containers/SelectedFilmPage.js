import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FilmDetails from '../components/FilmDetails';
import FilmList from '../components/FilmList';
import Filter from '../components/Filter';

class SelectedFilmPage extends Component {
  findFilmById = id =>
    this.props.films.find(film => id === film.id.toString());

  render() {
    const {
      films,
      genres,
      visitedFilms,
      findGenre,
      addVisitedId,
    } = this.props;

    const { findFilmById } = this;
    const { id } = this.props.match.params;
    const film = findFilmById(id);

    return (
      <>
        <Header />
        <FilmDetails film={film} />
        <Filter />
        <FilmList
          films={films}
          findGenre={findGenre}
          addVisitedId={addVisitedId}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  visitedFilms: state.visitedFilms,
});

export default connect(mapStateToProps)(SelectedFilmPage);
