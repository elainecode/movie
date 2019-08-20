import React from 'react';
import './Filter.css';

const Filter = ({ count }) => {
  return (
    <div className="filter-background">
      {count && <p>{count} movies found</p>}
    </div>
  );
};

export default Filter;
