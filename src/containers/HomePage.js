import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Filter from '../components/Filter';
import FilmList from '../components/FilmList';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="content-background">
          <Header />
          <Search />
        </div>
        <Filter />
        <FilmList />
      </>
    );
  }
}

export default HomePage;
