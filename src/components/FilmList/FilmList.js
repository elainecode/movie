import React from 'react';
import Film from '../Film';
import './FilmList.css';

const FilmList = ({ films, findGenre }) => {
  return (
    <div className="list">
      {films.length > 0 &&
        films.map(film => {
          return (
            <Film
              key={film.id}
              title={film.title}
              year={film.release_date.slice(0, 4)}
              id={film.id}
              image_id={film.poster_path}
              genres={findGenre(film.genre_ids)}
            />
          );
        })}
      {films.length < 1 && <h1>No films found</h1>}
    </div>
  );
};

export default FilmList;
