import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { loadDiscoverFilms, changeSearchStrategy } from '../actions';

const Hoc = ListComponent => {
  class DiscoverFilmsHoc extends Component {
  
    componentDidMount(){
      this.props.changeSearchStrategy();
    }

    loadMore = () => {
      const pageNumber = this.props.discoverPageNumber + 1 || 1;
      this.props.loadDiscoverFilms(pageNumber);
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

const mapStateToProps = (state) => {
  return {
    discoverPageNumber: 1,
  };
};

const DiscoverFilmsHoc = compose(
  connect(
    mapStateToProps,
    {
      loadDiscoverFilms,
      changeSearchStrategy
    },
  ),
  Hoc,
);

export default DiscoverFilmsHoc;
