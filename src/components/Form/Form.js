import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  Input,
  InputBase,
  FilledInput,
  Button,
  TextField,
  Typography,
  InputAdornment,
  Icon,
} from '@material-ui/core';
import './Form.css';

const Form = ({ updateSearchQuery, searchFilms, history }) => {
  return (
    <>
      <form onSubmit={searchFilms(history)} className="form-style">
        <InputBase
          fullWidth
          placeholder="Search for a movie"
          onChange={updateSearchQuery}
          inputProps={{ 'aria-label': 'search' }}
          startAdornment={
             <InputAdornment position="start">  <Icon>search</Icon></InputAdornment>
          }
        />
      </form>
    </>
  );
};

export default withRouter(Form);