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
import Search from '../Search';
import './Header.css';

const Header = ({ searchFilms, match }) => {
  return (
    <>
      <AppBar className="header" position="sticky">
        <Toolbar>
          <Typography variant="h6" className="header-title">
            <Link to={`${match.url}`}>MovieDB</Link>
          </Typography>
          <Search searchFilms={searchFilms} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
