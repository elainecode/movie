import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { loadSearchFilms } from '../actions';

const Hoc = ListComponent => {
  class SearchFilmsHoc extends Component {
      loadMore = () => {
      console.log(this.props)
      const pageNumber = this.props.searchPageNumber + 1 || 1;
      this.props.loadSearchFilms(this.props.match.params.query, pageNumber);
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

const mapStateToProps = (state, ownProps) => {
  return {
    searchPageNumber: 1,
    query: ownProps.match.params.query,
  };
};

const SearchFilmsHoc = compose(
  connect(
    mapStateToProps,
    {
      loadSearchFilms,
    },
  ),
  Hoc,
);

export default SearchFilmsHoc;
