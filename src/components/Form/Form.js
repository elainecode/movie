import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FilledInput,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';
import './Form.css';

const Form = ({ updateSearchForm, updateSearchInput }) => {
  return (
    <>
      <form className="form-container" onSubmit={updateSearchForm}>
        <div className="form-title">
          <Typography variant="subtitle2">FIND YOUR MOVIE</Typography>
        </div>
        <FormControl className="form-input" margin="normal" fullWidth>
          <FilledInput
            onChange={updateSearchInput}
            id="component-filled"
          />
        </FormControl>
        <div className="form-button-a align">
          <p>SEARCH BY</p>
        </div>
        <Button
          className="form-button-b"
          variant="contained"
          color="secondary"
          size="small"
        >
          TITLE
        </Button>
        <Button
          className="form-button-c"
          variant="contained"
          size="small"
        >
          DIRECTOR
        </Button>
        <Button
          type="submit"
          className="form-button-d"
          variant="contained"
          color="secondary"
          size="small"
        >
          SEARCH
        </Button>
      </form>
    </>
  );
};

export default Form;
