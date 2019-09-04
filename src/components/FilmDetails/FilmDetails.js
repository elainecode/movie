import React from 'react';
import { Popover } from '@material-ui/core';
import { findGenre } from '../../helpers';
import './FilmDetails.css';

const FilmDetails = ({ film, genres, anchorEl }) => {
  return (
    <>
      <Popover
        id="popover"
        open={!!Object.keys(film).length}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 0,
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className="film-details-container">
          <div className="film-poster">
            <img
              src={
                film.poster_path &&
                `https://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`
              }
              alt=""
            />
          </div>
          <div className="film-info">
            <h2>{film.title}</h2>
            <h5>
              {film.genres &&
                findGenre(
                  film.genres.map(item => item.id),
                  genres,
                ).join(' ')}
            </h5>
            <p>
              {film.release_date && film.release_date.slice(0, 4)}
              {film.runtime}
              min
            </p>
            <p className="film-overview">{film.overview}</p>
            <p>{`Director ${film.director}`}</p>
            <p>{film.cast ? `Cast ${film.cast.join(' ')}` : ' '}</p>
          </div>
        </div>
      </Popover>
    </>
  );
};

export default FilmDetails;
