import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <p>netflixroulette</p>
      <Link to="/">
        <Button id="header-button" variant="contained" size="medium">
          SEARCH
        </Button>
      </Link>
    </div>
  );
};

export default Header;
