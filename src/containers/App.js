import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {
  loadGenres,
  loadDiscoverFilms,
  loadSelectedFilm,
  updateForm,
  loadSearchFilms,
} from '../actions';
import { config } from '../middleware/config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomePage from './HomePage';
import SelectedFilmPage from './SelectedFilmPage';

class App extends Component {
  async componentDidMount() {
    await config.setApiKey();
    config.setVisitedFilms();
    this.props.loadGenres();
    this.props.loadDiscoverFilms();
  }

  // componentDidUpdate() {
  //   this.props.loadDiscoverFilms();
  // }

  findGenre = array => array.map(id => this.props.genres[id]);

  searchFilms = e => {
    e.preventDefault();
    const { loadSearchFilms, form } = this.props;
    loadSearchFilms(form);
    this.props.history.push('/');
  };

  updateSearchQuery = e => {
    e.preventDefault();
    const { updateForm } = this.props;
    updateForm(e.target.value);
  };

  clickFilm = id => e => {
    e.preventDefault();
    this.props.loadSelectedFilm(id);
  };

  render() {
    const { films } = this.props;
    const {
      findGenre,
      clickFilm,
      searchFilms,
      updateSearchQuery,
    } = this;
    return (
      <>
        <Header
          updateSearchQuery={updateSearchQuery}
          searchFilms={searchFilms}
        />
        <div className="content">
          <Route
            exact
            path="/"
            component={routerProps => (
              <HomePage
                films={films}
                findGenre={findGenre}
                clickFilm={clickFilm}
                {...routerProps}
              />
            )}
          />
          <Route
            exact
            path="/films/:id"
            component={routerProps => (
              <SelectedFilmPage
                films={films}
                findGenre={findGenre}
                clickFilm={clickFilm}
                {...routerProps}
              />
            )}
          />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    films: state.films,
    genres: state.genres,
    form: state.form,
  };
};

export default connect(
  mapStateToProps,
  {
    loadGenres,
    loadDiscoverFilms,
    loadSelectedFilm,
    updateForm,
    loadSearchFilms,
  },
)(App);
