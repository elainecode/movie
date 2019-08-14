import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FilmDetails from '../components/FilmDetails';
import FilmList from '../components/FilmList';
import Filter from '../components/Filter';

class SelectedFilmPage extends Component {
  render() {
    const { films, genres, findGenre } = this.props;
    return (
      <>
        <div className="content-background">
          <Header />
          <FilmDetails id={this.props.match.params.id} />
        </div>
        <Filter />
        <FilmList films={films} findGenre={findGenre} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  // map state to component props...
});
const mapDispatchToProps = dispatch => ({
  // map dispatch to action creators to props...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedFilmPage);
