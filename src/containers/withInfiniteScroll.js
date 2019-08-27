import React, { Component } from 'react';
// import { connect } from 'react-redux';

const withInfiniteScroll = ListComponent => {
  class withInfiniteScroll extends Component {
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll, false);
    }

    handleScroll = e => {
      e.preventDefault();
      const list = document.querySelector('.list');

      if (list) {
        if (
          window.innerHeight + window.scrollY >=
          list.scrollHeight + list.scrollTop
        ) {
        }
      }
    };

    render() {
      return (
        <>
          <ListComponent {...this.props} />
        </>
      );
    }
  }
  return withInfiniteScroll;
};
export default withInfiniteScroll;
