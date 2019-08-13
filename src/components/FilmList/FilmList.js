import React from 'react';
import Film from '../Film';
import './FilmList.css';

const FilmList = ({ films, findGenre }) => {
  return (
    <div className="list">
      {films.map(film => {
        return (
          <Film
            title={film.title}
            year={film.release_date.slice(0, 4)}
            id={film.id}
            image_id={film.poster_path}
            genres={findGenre(film.genre_ids)}
          />
        );
      })}
    </div>
  );
};

export default FilmList;
