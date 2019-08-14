import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getMovieData } from '../actions';
import Footer from '../components/Footer';
import HomePage from './HomePage';
import SelectedFilmPage from './SelectedFilmPage';

class App extends Component {
  componentDidMount() {
    this.props.getMovieData();
  }

  findGenre = array => {
    const { genres } = this.props;
    const genreNames = genres
      .filter(item => array.indexOf(item.id) != -1)
      .map(item => item.name);
    return genreNames;
  };

  render() {
    const { films } = this.props;
    const { findGenre } = this;
    return (
      <>
        <div className="content">
          <Route
            exact
            path="/"
            component={routerProps => (
              <HomePage
                films={films}
                findGenre={findGenre}
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
  };
};

export default connect(
  mapStateToProps,
  { getMovieData },
)(App);
