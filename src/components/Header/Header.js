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
} from '@material-ui/core';
import Search from '../Search';

const Header = ({ updateSearchQuery, searchFilms }) => {
  return (
    <>
      <AppBar position="static">
        <Typography variant="h6" noWrap>
          The MovieDB
        </Typography>
        <Search
          updateSearchQuery={updateSearchQuery}
          searchFilms={searchFilms}
        />
      </AppBar>
    </>
  );
};

export default Header;
