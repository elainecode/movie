import React from 'react';
import './FilmDetails.css';

const FilmDetails = props => {
  return (
    <div className="film-details-container">
      <p>{`This film id is: ${props.id}` || 'No film selected'}</p>
    </div>
  );
};

export default FilmDetails;
