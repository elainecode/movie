import React from 'react';
import {
  Popover,
  CircularProgress,
  Typography,
  Chip,
} from '@material-ui/core';
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
        {Object.keys(film).length ? (
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
              <Typography color="textSecondary" variant="h4">
                {film.title}
              </Typography>
              <Typography gutterBottom variant="h6">
                {film.genres &&
                  findGenre(
                    film.genres.map(item => item.id),
                    genres,
                  ).join(' ')}
              </Typography>
              <div className="film-chips">
                <Chip
                  variant="outlined"
                  size="small"
                  color="primary"
                  label={
                    film.release_date && film.release_date.slice(0, 4)
                  }
                />
                <Chip
                  variant="outlined"
                  size="small"
                  color="secondary"
                  label={`${film.runtime} min`}
                />
              </div>
              <Typography gutterBottom variant="body2">
                <span className="film-overview">{film.overview}</span>
              </Typography>
              <Typography gutterBottom variant="body2">
                <Typography variant="subtitle2">Director</Typography>
                {`${film.director}`}
              </Typography>
              <Typography gutterBottom variant="body2">
                <Typography variant="subtitle2">Cast</Typography>
                {film.cast ? `${film.cast.join(' ')}` : ' '}
              </Typography>
            </div>
          </div>
        ) : (
          <CircularProgress />
        )}
      </Popover>
    </>
  );
};

export default FilmDetails;
