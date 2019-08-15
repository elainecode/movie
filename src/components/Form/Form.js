import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  InputBase,
  FilledInput,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';

const Form = ({ updateSearchQuery, searchFilms }) => {
  return (
    <>
      <form onSubmit={searchFilms}>
        <FormControl className="form-input" margin="normal" fullWidth>
          <InputBase
            placeholder="Search for a movie"
            onChange={updateSearchQuery}
            id="component-filled"
          />
        </FormControl>
      </form>
    </>
  );
};

export default Form;
