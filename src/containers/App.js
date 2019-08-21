import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getDiscoverData, getSelectedData } from '../actions';
import Footer from '../components/Footer';
import HomePage from './HomePage';
import SelectedFilmPage from './SelectedFilmPage';

class App extends Component {
  componentDidMount() {
    this.props.getDiscoverData();
  }

  findGenre = array => array.map(id => this.props.genres[id]);

  clickFilm = id => e => {
    e.preventDefault();
    this.props.getSelectedData(id);
  };

  render() {
    const { films } = this.props;
    const { findGenre, clickFilm } = this;
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
  };
};

export default connect(
  mapStateToProps,
  { getDiscoverData, getSelectedData },
)(App);
