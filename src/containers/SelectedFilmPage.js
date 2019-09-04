import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {
  loadSelectedFilm,
  resetSelectedToDefaultState,
} from '../actions';
import { scrollToContentDivTop } from '../helpers';

import FilmDetails from '../components/FilmDetails';

class SelectedFilmPage extends Component {
  componentDidMount() {
    const { closePopOver, anchorEl, filmStepper } = this;
    window.addEventListener(
      'click',
      e => {
        scrollToContentDivTop(e, anchorEl), closePopOver(e);
      },
      false,
    );
    window.addEventListener('keydown', filmStepper, false);
  }

  componentWillUnmount() {
    const { closePopOver, anchorEl, filmStepper } = this;
    window.removeEventListener(
      'click',
      e => {
        scrollToContentDivTop(e, anchorEl), closePopOver(e);
      },
      false,
    );
    window.removeEventListener('keydown', filmStepper, false);
  }

  closePopOver = e => {
    e.preventDefault();
    if (e.target.getAttributeNames()[0] === 'aria-hidden') {
      this.props.resetSelectedToDefaultState();
    }
  };

  anchorEl = () => {
    return document.body.querySelector('.content');
  };

  filmStepper = e => {
    e.preventDefault();
    console.log('keyssss')
    switch (e.key) {
      case 'ArrowLeft':
        this.ArrowLeft();
        break;
      case 'ArrowRight':
        this.ArrowRight();
        break;
      default:
        break;
    }
  };

  ArrowRight = () => {
    const { selectedFilm, films, loadSelectedFilm } = this.props;
    const end = films.length - 1;
    const currIndex = films.findIndex(
      ({ id }) => id === selectedFilm.id,
    );
    if (currIndex != end) {
      const nextFilmId = films[currIndex + 1].id;
      loadSelectedFilm(nextFilmId);
    }
  };

  ArrowLeft = () => {
    const { selectedFilm, films, loadSelectedFilm } = this.props;
    const start = 0;
    const currIndex = films.findIndex(
      ({ id }) => id === selectedFilm.id,
    );
    console.log(films.indexOf(selectedFilm), 'index:', currIndex)
    if (currIndex != start) {
      const prevFilmId = films[currIndex - 1].id;
      loadSelectedFilm(prevFilmId);
    }
  };

  render() {
    const { films, genres, selectedFilm } = this.props;
    const { anchorEl } = this;

    return (
      <>
        <FilmDetails
          film={selectedFilm}
          genres={genres}
          anchorEl={anchorEl()}
        />
      </>
    );
  }
}

const mapStateToProps = ({ selectedFilm }) => ({
  selectedFilm,
});

export default connect(
  mapStateToProps,
  { loadSelectedFilm, resetSelectedToDefaultState },
)(SelectedFilmPage);
