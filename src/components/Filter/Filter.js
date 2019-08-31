import React from 'react';
import './Filter.css';

const Filter = ({ count }) => {
  return (
    <div className="filter-background">
      {count > 0 && <p>{count} movies found</p>}
    </div>
  );
};

export default Filter;
