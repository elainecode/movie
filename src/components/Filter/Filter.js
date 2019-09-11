import React from 'react';
import {
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Typography,
} from '@material-ui/core';


import './Filter.css';

const Filter = ({ totalResults, changeSortBy, sortBy }) => {
  return (
    <div className="filter-background">
      <div>
        <Typography variant="body1">
           {`${totalResults} movies found`}
        </Typography>
      </div>
      <div className="filter-form">
        <FormControlLabel
          checked={sortBy === 'popularity.desc'}
          value="popularity.desc"
          onChange={changeSortBy}
          control={<Radio color="primary" />}
          label="Most Popular"
          labelPlacement="start"
        />
        <FormControlLabel
          checked={sortBy === 'popularity.asc'}
          value="popularity.asc"
          onChange={changeSortBy}
          control={<Radio color="primary" />}
          label="Least Popular"
          labelPlacement="start"
        />
        <FormControlLabel
          checked={sortBy === 'release_date.desc'}
          value="release_date.desc"
          onChange={changeSortBy}
          control={<Radio color="primary" />}
          label="Newest First"
          labelPlacement="start"
        />
        <FormControlLabel
          checked={sortBy === 'release_date.asc'}
          value="release_date.asc"
          onChange={changeSortBy}
          control={<Radio color="primary" />}
          label="Oldest First"
          labelPlacement="start"
        />
        <FormControlLabel
          checked={sortBy === 'vote_count.desc'}
          value="vote_count.desc"
          onChange={changeSortBy}
          control={<Radio color="primary" />}
          label="Most Voted"
          labelPlacement="start"
        />
        <FormControlLabel
          checked={sortBy === 'vote_count.asc'}
          value="vote_count.asc"
          onChange={changeSortBy}
          control={<Radio color="primary" />}
          label="Least Voted"
          labelPlacement="start"
        />
      </div>
    </div>
  );
};

export default Filter;

/* 
<option value={'popularity.desc'}>Most Popular</option>
<option value={'popularity.asc'}>Less Popular</option>
<option value={'release_date.desc'}>Newest First</option>
<option value={'release_date.asc'}>Oldest First</option>
<option value={'vote_count.desc'}>Most Voted</option>
<option value={'vote_count.asc'}>Less Voted</option> */
