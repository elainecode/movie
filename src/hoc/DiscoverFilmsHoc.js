import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  loadDiscoverFilms,
  resetResultsToDefaultState,
  sortFilmsBy,
  resetSortByToDefaultState,
} from '../actions';
import Filter from '../components/Filter';

const Hoc = ListComponent => {
  class DiscoverFilmsHoc extends Component {
    componentDidMount() {
      this.props.resetResultsToDefaultState();
    }

    componentWillUnmount() {
      this.props.resetResultsToDefaultState();
    }

    loadMore = pageNumber => {
      const {
        sortBy,
        loadDiscoverFilms,
        match: { query },
        isLoading,
      } = this.props;
      if (!query && !isLoading) {
        loadDiscoverFilms(pageNumber, sortBy);
      }
    };

    changeSortBy = e => {
      e.preventDefault();
      this.props.sortFilmsBy(e.target.value);
      this.props.resetResultsToDefaultState();
      this.props.loadDiscoverFilms(
        this.props.page + 1,
        this.props.sortBy,
      );
    };

    render() {
      const { loadMore, changeSortBy } = this;
      const {
        sortBy,
        films,
        totalResults,
        hasMore,
        isLoading,
        error,
      } = this.props;
      return (
        <>
          <Filter
            totalResults={totalResults}
            changeSortBy={changeSortBy}
            sortBy={sortBy}
          />
          <ListComponent
            loadMore={loadMore}
            hasMore={hasMore}
            films={films}
            isLoading={isLoading}
            error={error}
            {...this.props}
          />
        </>
      );
    }
  }
  return DiscoverFilmsHoc;
};

const mapStateToProps = ({
  totalResults,
  loadingBooleans: { isLoading, error },
  sortBy,
}) => ({
  totalResults,
  isLoading,
  error,
  sortBy,
});
const DiscoverFilmsHoc = compose(
  connect(
    mapStateToProps,
    {
      loadDiscoverFilms,
      resetResultsToDefaultState,
      sortFilmsBy,
      resetSortByToDefaultState,
    },
  ),
  Hoc,
);

export default DiscoverFilmsHoc;
