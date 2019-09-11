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
    const { api: { films, page, hasMore } = {films: [], page: 0, hasMore: true}, genres } = this.props;
    const { clickFilm, searchFilms, changeSortBy } = this;
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
                <SearchFilms
                  films={films}
                  page={page}
                  hasMore={hasMore}
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
                <DiscoverFilms
                  films={films}
                  page={page}
                  hasMore={hasMore}
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

const mapStateToProps = ({ api, genres, sortBy }) => {
  return { api, genres, sortBy };
};


export default connect(
  mapStateToProps,
  {
    loadGenres,
    resetResultsToDefaultState,
    loadSelectedFilm,
    updateForm,
    loadSearchFilms,
  },
)(App);
