import React, { Component } from 'react';
import Header from '../components/Header';
import FilmDetails from '../components/FilmDetails';
import FilmList from '../components/FilmList';
import Filter from '../components/Filter';

class SelectedFilmPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="content-background">
          <Header />
          <FilmDetails id={this.props.match.params.id} />
        </div>
        <Filter />
        <FilmList />
      </>
    );
  }
}

export default SelectedFilmPage;
