import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { loadSearchFilms, changeSearchStrategy } from '../actions';

const Hoc = ListComponent => {
  class SearchFilmsHoc extends Component {
    componentDidMount() {
      this.props.changeSearchStrategy();
    }

    componentWillUnmount() {
      this.props.changeSearchStrategy();
    }

    loadMore = page => {
      console.log(page);
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

const mapStateToProps = (state, ownProps) => {
  return {
    query: ownProps.match.params.query,
  };
};

const SearchFilmsHoc = compose(
  connect(
    mapStateToProps,
    {
      loadSearchFilms,
      changeSearchStrategy,
    },
  ),
  Hoc,
);

export default SearchFilmsHoc;
