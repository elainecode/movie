import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  loadSearchFilms,
  resetResultsToDefaultState,
} from '../actions';

const Hoc = ListComponent => {
  class SearchFilmsHoc extends Component {
    componentDidMount() {
      this.props.resetResultsToDefaultState();
    }

    componentWillUnmount() {
      this.props.resetResultsToDefaultState();
    }

    loadMore = page => {
      if (this.props.match.params.query) {
        this.props.loadSearchFilms(
          this.props.match.params.query,
          page,
        );
      }
    };

    render() {
      const { loadMore } = this;
      return (
        <>
          <ListComponent loadMore={loadMore} {...this.props} />
        </>
      );
    }
  }
  return SearchFilmsHoc;
};

const SearchFilmsHoc = compose(
  connect(
    null,
    {
      loadSearchFilms,
      resetResultsToDefaultState,
    },
  ),
  Hoc,
);

export default SearchFilmsHoc;
