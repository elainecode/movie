import React from 'react';
import Film from '../Film';
import './FilmList.css';

const FilmList = ({ films, findGenre, clickFilm }) => {
  
  return (
    <div className="list">
      {films &&
        films.map(film => {
          return (
            <Film
              key={film.id}
              title={film.title}
              year={film.release_date.slice(0, 4)}
              id={film.id}
              image_id={film.poster_path || film.backdrop_path}
              genres={findGenre(film.genre_ids)}
              clickFilm={clickFilm}
            />
          );
        })}
      {films.length < 1 && <h1>No films found</h1>}
    </div>
  );
};

export default FilmList;
