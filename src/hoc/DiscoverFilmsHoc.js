import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  loadDiscoverFilms,
  resetResultsToDefaultState,
  sortFilmsBy,
  resetSortByToDefaultState,
  isLoadingFilms,
} from '../actions';
import Filter from '../components/Filter';
import { ThemeProvider } from '@material-ui/styles';

const Hoc = ListComponent => {
  class DiscoverFilmsHoc extends Component {
    componentDidMount() {
      this.props.resetResultsToDefaultState();
    }

    componentWillUnmount() {
       this.props.resetResultsToDefaultState();
    }

    loadMore = pageStart => {
      const {
        page,
        sortBy,
        loadDiscoverFilms,
        match: { query },
        isLoading,
      } = this.props;
      if (!query && !isLoading) {
        console.log(page, 'went through');
        loadDiscoverFilms(page + 1, sortBy);
      }
    };

    changeSortBy =  e => {
      e.preventDefault();
      this.props.sortFilmsBy(e.target.value);
      this.props.resetResultsToDefaultState();
      this.props.loadDiscoverFilms(this.props.page + 1, this.props.sortBy)
    };

    render() {
      const { loadMore, changeSortBy } = this;
      const {
        sortBy,
        films,
        totalResults,
        hasMore,
        isLoading,
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
            {...this.props}
          />
        </>
      );
    }
  }
  return DiscoverFilmsHoc;
};

const mapStateToProps = ({ totalResults, isLoading, sortBy }) => ({
  totalResults,
  isLoading,
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
      isLoadingFilms,
    },
  ),
  Hoc,
);

export default DiscoverFilmsHoc;
