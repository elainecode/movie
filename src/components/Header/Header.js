import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button,
  AppBar,
  IconButton,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core';
import { updateForm, loadSearchFilms } from '../../actions';
import Search from '../Search';
import './Header.css';

class Header extends Component {
  searchFilms = e => {
    e.preventDefault();
    const { loadSearchFilms, form } = this.props;
    loadSearchFilms(form);
  };

  updateSearchQuery = e => {
    e.preventDefault();
    const { updateForm } = this.props;
    updateForm(e.target.value);
  };

  render() {
    const { searchFilms, updateSearchQuery } = this;
    return (
      <>
        <AppBar className="header" position="sticky">
          <Toolbar>
            <Typography variant="h6" className="header-title">
              <Link to="/">MovieDB</Link>
            </Typography>
            <Search
              updateSearchQuery={updateSearchQuery}
              searchFilms={searchFilms}
            />
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    form: state.form,
  };
};

export default connect(
  mapStateToProps,
  {
    updateForm,
    loadSearchFilms,
  },
)(Header);
