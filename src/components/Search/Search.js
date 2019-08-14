import React from 'react';
import Form from '../Form';
import './Search.css';

const Search = ({ updateSearchForm, updateSearchInput }) => {
  return (
    <>
      <Form
        updateSearchForm={updateSearchForm}
        updateSearchInput={updateSearchInput}
      />
    </>
  );
};

export default Search;
