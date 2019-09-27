import React from 'react';
import { CircularProgress } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroller';
import { findGenre } from '../../helpers';
import Film from '../Film';
import './FilmList.css';
import isLoadingReducer from '../../reducers/isLoadingReducer';

const FilmList = ({
  films,
  clickFilm,
  loadMore,
  genres,
  match,
  hasMore,
  isLoading,
  error,
}) => {
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
    <>
      {!films.length && !!error ? (
        <h1>NO FILMS FOUND</h1>
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          initialLoad={!isLoading}
          loader={
             <div className="loader" key={0}>
             <CircularProgress />
               </div>
              }
              >
          <div className="list">{movies}</div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default FilmList;
