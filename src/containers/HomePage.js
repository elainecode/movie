import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForm, loadSearchFilms } from '../actions';
import Header from '../components/Header';
import Filter from '../components/Filter';
import FilmList from '../components/FilmList';

class HomePage extends Component {
  searchFilms = e => {
    e.preventDefault();
    const { loadSearchFilms, form } = this.props;
    loadSearchFilms(form);
  };

  updateSearchQuery = e => {
    e.preventDefault();
    const { updateForm } = this.props;
    updateForm(e.target.value);
  };

  render() {
    const { films, findGenre, clickFilm } = this.props;
    const { updateSearchQuery, searchFilms } = this;
    return (
      <>
        <Header
          updateSearchQuery={updateSearchQuery}
          searchFilms={searchFilms}
        />
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

const mapStateToProps = state => {
  return {
    form: state.form,
  };
};

export default connect(
  mapStateToProps,
  { updateForm, loadSearchFilms },
)(HomePage);
