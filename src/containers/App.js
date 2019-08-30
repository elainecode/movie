import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import {
  loadGenres,
  changeSearchStrategy,
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
    this.props.changeSearchStrategy();
  }

  findGenre = array => array.map(id => this.props.genres[id]);

  searchFilms = history => e => {
    e.preventDefault();
    // const { loadSearchFilms } = this.props;
    this.props.changeSearchStrategy();
    const query = e.currentTarget.elements[0].value;
    history.push(`/search/${query}`);
  };

  updateSearchQuery = e => {
    e.preventDefault();
    // const { updateForm } = this.props;
    // updateForm(e.target.value);
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
      updateSearchQuery,
      searchFilms,
    } = this;
    return (
      <>
        <Route
          component={routerProps => (
            <Header
              updateSearchQuery={updateSearchQuery}
              searchFilms={searchFilms}
              {...routerProps}
            />
          )}
        />
        <div className="content">
          <Route
            path={['/search/:query/films/:id', '/films/:id']}
            render={routerProps => (
              <SelectedFilmPage
                films={films}
                findGenre={findGenre}
                clickFilm={clickFilm}
                {...routerProps}
              />
            )}
          />
          <Switch>
            <Route
              path="/search/:query"
              render={routerProps => (
                <>
                  <Filter count={films && films.length} />
                  <SearchFilms
                    films={films}
                    findGenre={findGenre}
                    clickFilm={clickFilm}
                    {...routerProps}
                  />
                </>
              )}
            />
            <Route
               path="/"
              render={routerProps => (
                <>
                  <Filter count={films && films.length} />
                  <DiscoverFilms
                    films={films}
                    findGenre={findGenre}
                    clickFilm={clickFilm}
                    {...routerProps}
                  />
                </>
              )}
            />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

const DiscoverFilms = DiscoverFilmsHoc(FilmList);
const SearchFilms = SearchFilmsHoc(FilmList);

const mapStateToProps = state => {
  return {
    films: state.films,
    genres: state.genres,
  };
};

export default connect(
  mapStateToProps,
  {
    loadGenres,
    changeSearchStrategy,
    loadSelectedFilm,
    updateForm,
  },
)(App);
