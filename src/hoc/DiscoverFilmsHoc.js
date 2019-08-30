import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { loadDiscoverFilms, changeSearchStrategy } from '../actions';

const Hoc = ListComponent => {
  class DiscoverFilmsHoc extends Component {
    componentDidMount() {
      this.props.changeSearchStrategy();
      console.log('why are you here?')
      }
    
      componentWillUnmount() {
        this.props.changeSearchStrategy();
      }
    loadMore = (page) => {
      const pageNumber = this.props.discoverPageNumber + 1 || 1;
      if (!this.props.match.query) {
        console.log('why are you here?')
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

const mapStateToProps = state => {
  return {
    discoverPageNumber: 1,
  };
};

const DiscoverFilmsHoc = compose(
  connect(
    mapStateToProps,
    {
      loadDiscoverFilms,
      changeSearchStrategy,
    },
  ),
  Hoc,
);

export default DiscoverFilmsHoc;
