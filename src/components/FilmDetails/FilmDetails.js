import React from 'react';
import './FilmDetails.css';

const FilmDetails = ({ film }) => {
  console.log(film)
  return (
    <div className="film-details-container">
      <div className="film-poster">
      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`} />
      </div>
      <div className="film-info" >
        <h3>{film.title}</h3>
        <p>{film.release_date.slice(0,4)}</p>
        <p>{film.overview} {film.runtime}min</p>
        <p>director</p>
        <p>cast list</p>
      </div>
    </div>
  );
};

export default FilmDetails;
