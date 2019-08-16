import React from 'react';
import { Link } from 'react-router-dom';
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

const Header = ({ updateSearchQuery, searchFilms }) => {
  return (
    <>
      <AppBar className="header" position="sticky">
        <Toolbar>
          <Typography variant="h6" className="header-title">
            The MovieDB
          </Typography>
          <Search
            updateSearchQuery={updateSearchQuery}
            searchFilms={searchFilms}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
