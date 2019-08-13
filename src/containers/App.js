import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import HomePage from './HomePage';
import SelectedFilmPage from './SelectedFilmPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      genres: [],
    };
  }

  async componentDidMount() {
    const { API_KEY } = await (await fetch('/api')).json();
    const { genres } = await (await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    )).json();
    const { results: films } = await (await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    )).json();
    this.setState({ genres, films });
  }

  findGenre = array => {
    const { genres } = this.state;
    const genreNames = genres
      .filter(item => array.indexOf(item.id) != -1)
      .map(item => item.name);
    return genreNames;
  };

  render() {
    const { films } = this.state;
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

export default App;
