import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { loadDiscoverFilms, changeSearchStrategy } from '../actions';

const Hoc = ListComponent => {
  class DiscoverFilmsHoc extends Component {
    componentDidMount() {
      this.props.changeSearchStrategy();
      console.log('why are you here?');
    }

    componentWillUnmount() {
      this.props.changeSearchStrategy();
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
      changeSearchStrategy,
    },
  ),
  Hoc,
);

export default DiscoverFilmsHoc;
