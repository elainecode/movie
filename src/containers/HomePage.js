import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForm, loadSearchFilms } from '../actions';
import Header from '../components/Header';
import Filter from '../components/Filter';
import FilmList from '../components/FilmList';

class HomePage extends Component {
  render() {
    const { films, findGenre, clickFilm } = this.props;
    return (
      <>
        <Filter count={films.length && films.length} />
        <FilmList
          films={films}
          findGenre={findGenre}
          clickFilm={clickFilm}
        />
      </>
    );
  }
}

export default HomePage;
