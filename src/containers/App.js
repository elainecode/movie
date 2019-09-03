import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {
  loadGenres,
  resetResultsToDefaultState,
  loadSelectedFilm,
  updateForm,
  loadSearchFilms,
} from '../actions';
import { config } from '../middleware/config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DiscoverFilmsHoc from '../hoc/DiscoverFilmsHoc';
import SearchFilmsHoc from '../hoc/SearchFilmsHoc';
import SelectedFilmPage from './SelectedFilmPage';
import FilmList from '../components/FilmList';
import Filter from '../components/Filter';

class App extends Component {
  async componentDidMount() {
    await config.setApiKey();
    config.setVisitedFilms();
    this.props.loadGenres();
  }

  searchFilms = history => e => {
    e.preventDefault();
    this.props.resetResultsToDefaultState();
    const query = e.currentTarget.elements[0].value;
    history.push(`/search/${query}`);
  };

  clickFilm = id => e => {
    e.preventDefault();
    this.props.loadSelectedFilm(id);
  };

  render() {
    const { films, genres } = this.props;
    const { clickFilm, searchFilms } = this;
    return (
      <>
        <Redirect exact from="/" to="home" />
        <Route
          render={routerProps => (
            <Header searchFilms={searchFilms} {...routerProps} />
          )}
        />
        <div className="content">
          <Route
            path={['/search/:query/films/:id', '/home/films/:id']}
            render={routerProps => (
              <SelectedFilmPage
                films={films}
                genres={genres}
                clickFilm={clickFilm}
                {...routerProps}
              />
            )}
          />
          <Route
            path="/search/:query"
            render={routerProps => (
              <>
                <Filter count={films && films.length} />
                <SearchFilms
                  films={films}
                  genres={genres}
                  clickFilm={clickFilm}
                  {...routerProps}
                />
              </>
            )}
          />
          <Route
            path="/home"
            render={routerProps => (
              <>
                <Filter count={films && films.length} />
                <DiscoverFilms
                  films={films}
                  genres={genres}
                  clickFilm={clickFilm}
                  {...routerProps}
                />
              </>
            )}
          />
        </div>
        <Footer />
      </>
    );
  }
}

const DiscoverFilms = DiscoverFilmsHoc(FilmList);
const SearchFilms = SearchFilmsHoc(FilmList);

const mapStateToProps = ({ films, genres }) => ({ films, genres });

export default connect(
  mapStateToProps,
  {
    loadGenres,
    resetResultsToDefaultState,
    loadSelectedFilm,
    updateForm,
  },
)(App);
