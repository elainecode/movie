import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInput, updateForm } from '../actions';
import Header from '../components/Header';
import Search from '../components/Search';
import Filter from '../components/Filter';
import FilmList from '../components/FilmList';

class HomePage extends Component {
  updateSearchForm = e => {
    e.preventDefault();
    const { updateForm, input } = this.props;
    updateForm(input);
  };

  updateSearchInput = e => {
    e.preventDefault();
    const { updateInput } = this.props;
    updateInput(e.target.value);
  };

  render() {
    const { films, findGenre, input } = this.props;
    const { updateSearchForm, updateSearchInput } = this;
    return (
      <>
        <div className="content-background">
          <Header />
          <Search
            updateSearchForm={updateSearchForm}
            updateSearchInput={updateSearchInput}
          />
        </div>
        <Filter count={films.length || 0} />
        <FilmList films={films} findGenre={findGenre} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.form.input,
    searchBy: state.form.searchBy,
  };
};

export default connect(
  mapStateToProps,
  { updateInput, updateForm },
)(HomePage);
