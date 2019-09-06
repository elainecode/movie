import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { findGenre } from '../../helpers';
import Film from '../Film';
import './FilmList.css';

const FilmList = ({ films, clickFilm, loadMore, genres, match, hasMore }) => {
  const movies = [];

  films.map(film => {
    movies.push(
      <Film
        key={film.id}
        title={film.title}
        year={film.release_date.slice(0, 4)}
        id={film.id}
        image_id={film.poster_path}
        genres={findGenre(film.genre_ids, genres)}
        clickFilm={clickFilm}
        match={match}
      />,
    );
  });

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={(
<div className="loader" key={0}>
          Loading ...
        </div>
)}
    >
      <div className="list">{movies}</div>
    </InfiniteScroll>
  );
};

export default FilmList;
