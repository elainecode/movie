import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForm, getSeachData } from '../actions';
import Header from '../components/Header';
import Filter from '../components/Filter';
import FilmList from '../components/FilmList';

class HomePage extends Component {
  searchFilms = e => {
    e.preventDefault();
    const { getSeachData, form } = this.props;
    getSeachData(form);
  };

  updateSearchQuery = e => {
    e.preventDefault();
    const { updateForm } = this.props;
    updateForm(e.target.value);
  };

  render() {
    const { films, findGenre } = this.props;
    const { updateSearchQuery, searchFilms } = this;
    return (
      <>
        <Header
          updateSearchQuery={updateSearchQuery}
          searchFilms={searchFilms}
        />
        <Filter count={films.length || 0} />
        <FilmList films={films} findGenre={findGenre} />
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
  { updateForm, getSeachData },
)(HomePage);