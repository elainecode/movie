import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import {
  loadGenres,
  loadDiscoverFilms,
  loadSelectedFilm,
} from '../actions';
import { config } from '../middleware/config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import withInfiniteScroll from './withInfiniteScroll';
import SelectedFilmPage from './SelectedFilmPage';
import FilmList from '../components/FilmList';
import Filter from '../components/Filter';

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

  clickFilm = id => e => {
    e.preventDefault();
    this.props.loadSelectedFilm(id);
  };

  render() {
    const { films } = this.props;
    const { findGenre, clickFilm } = this;
    return (
      <>
        <Route
          component={routerProps => <Header {...routerProps} />}
        />
        <div className="content">
          <Route
            exact
            path="/films/:id"
            component={routerProps => (
              <SelectedFilmPage
                findGenre={findGenre}
                {...routerProps}
              />
            )}
          />

          <Route
            render={routerProps => (
              <>
                <Filter count={films && films.length} />
                <FilmListWithInfiniteScroll
                  films={films}
                  findGenre={findGenre}
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

const FilmListWithInfiniteScroll = withInfiniteScroll(FilmList);

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
    loadDiscoverFilms,
    loadSelectedFilm,
  },
)(App);
