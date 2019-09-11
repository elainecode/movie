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
    const {
      closePopOver,
      anchorEl,
      filmStepper,
      removeKeyDownEvent,
    } = this;
    window.addEventListener(
      'click',
      e => {
        scrollToContentDivTop(e, anchorEl), closePopOver(e);
      },
      false,
    );
    window.addEventListener('keydown', filmStepper, false);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.selectedFilm.id);
    const {
      match: {
        params: { id, query },
      },
    } = prevProps;
    const {
      selectedFilm,
      history,
      match: { path },
    } = this.props;
    if (selectedFilm.id && selectedFilm.id != id) {
      const newPath = path
        .replace(':query', query)
        .replace(':id', selectedFilm.id);
      history.push(newPath);
    }
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
    if (e.target.tagName === 'INPUT') {
      e.stopPropagation();
      return;
    }
    e.preventDefault();
    switch (e.key) {
      case 'ArrowLeft':
        this.arrowLeft();
        break;
      case 'ArrowRight':
        this.arrowRight();
        break;
      default:
        e.preventDefault();
        break;
    }
  };

  arrowRight = e => {
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

  arrowLeft = e => {
    const { selectedFilm, films, loadSelectedFilm } = this.props;
    const start = 0;
    const currIndex = films.findIndex(
      ({ id }) => id === selectedFilm.id,
    );
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
