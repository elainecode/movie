import React from 'react';
import './FilmDetails.css';

const FilmDetails = ({ film, findGenre }) => {
  return (
    <div className="film-details-container">
      <div className="film-poster">
      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`} />
      </div>
      <div className="film-info" >
        <h2>{film.title}</h2>
        <h5>{film.genres && findGenre(film.genres.map(item => item.id)).join(' ')}</h5>
        <p>{film.release_date.slice(0, 4)}{film.runtime}min</p>
        <p className="film-overview">{film.overview}</p>
        <p>Director {film.director}</p>
        <p>Cast {film.cast && film.cast.join(' ')}</p>
      </div>
    </div>
  );
};

export default FilmDetails;
