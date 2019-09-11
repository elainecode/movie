import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  loadSearchFilms,
  resetResultsToDefaultState,
  sortFilmsBy,
  resetSortByToDefaultState,
  isLoadingFilms,
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
            films={films}
            {...this.props}
          />
        </>
      );
    }
  }
  return SearchFilmsHoc;
};
const mapStateToProps = ({ totalResults, isLoading }) => ({
  totalResults,
  isLoading,
});
const SearchFilmsHoc = compose(
  connect(
    mapStateToProps,
    {
      loadSearchFilms,
      resetResultsToDefaultState,
      sortFilmsBy,
      resetSortByToDefaultState,
      isLoadingFilms,
    },
  ),
  Hoc,
);

export default SearchFilmsHoc;
