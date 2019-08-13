import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { films, findGenre } = this.props;
    return (
      <>
        <div className="content-background">
          <Header />
          <Search />
        </div>
        <Filter />
        <FilmList films={films} findGenre={findGenre} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // map dispatch to action creators to props...
});

export default connect(
  null,
  mapDispatchToProps,
)(HomePage);
