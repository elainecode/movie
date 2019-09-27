import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  loadSearchFilms,
  resetResultsToDefaultState,
  sortFilmsBy,
  resetSortByToDefaultState,
} from '../actions';
import Filter from '../components/Filter';

const Hoc = ListComponent => {
  class SearchFilmsHoc extends Component {
    componentDidMount() {
    }


    componentWillUnmount() {
      this.props.resetResultsToDefaultState();
    }

    loadMore = pageStart => {
      const {
        page,
        sortBy,
        loadSearchFilms,
        match: {
          params: { query },
        },
        isLoading,
      } = this.props;

      if (query && !isLoading) {
        loadSearchFilms(query, page + 1);
      }
    };

    render() {
      const { loadMore } = this;
      const {
        films,
        totalResults,
        hasMore,
        changeSortBy,
        isLoading,
        error,
        sortBy,
      } = this.props;
      return (
        <>
          <Filter
            totalResults={totalResults}
            changeSortBy={null}
            sortBy={sortBy}
          />
          <ListComponent
            loadMore={loadMore}
            hasMore={hasMore}
            isLoading={isLoading}
            error={error}
            films={films}
            {...this.props}
          />
        </>
      );
    }
  }
  return SearchFilmsHoc;
};
const mapStateToProps = ({ totalResults,   loadingBooleans: { isLoading, error }, }) => ({
  totalResults,
  isLoading,
  error,
});
const SearchFilmsHoc = compose(
  connect(
    mapStateToProps,
    {
      loadSearchFilms,
      resetResultsToDefaultState,
      sortFilmsBy,
      resetSortByToDefaultState,
    },
  ),
  Hoc,
);

export default SearchFilmsHoc;
