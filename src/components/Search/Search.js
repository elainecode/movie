import React from 'react';
import Form from '../Form';

const Search = ({ updateSearchQuery, searchFilms }) => {
  return (
    <>
      <Form
        updateSearchQuery={updateSearchQuery}
        searchFilms={searchFilms}
      />
    </>
  );
};

export default Search;
