import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { loadDiscoverFilms, resetResultsToDefaultState } from '../actions';

const Hoc = ListComponent => {
  class DiscoverFilmsHoc extends Component {
    componentDidMount() {
      this.props.resetResultsToDefaultState();
    }

    componentWillUnmount() {
      this.props.resetResultsToDefaultState();
    }

    loadMore = page => {
      if (!this.props.match.query) {
        this.props.loadDiscoverFilms(page);
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
  return DiscoverFilmsHoc;
};

const DiscoverFilmsHoc = compose(
  connect(
    null,
    {
      loadDiscoverFilms,
      resetResultsToDefaultState,
    },
  ),
  Hoc,
);

export default DiscoverFilmsHoc;
