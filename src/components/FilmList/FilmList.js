import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Film from '../Film';
import './FilmList.css';

const FilmList = ({
  films,
  findGenre,
  clickFilm,
  loadMore,
  match,
}) => {
  const movies = [];

  films.map(film => {
    movies.push(
      film.poster_path && (
        <Film
          key={film.id}
          title={film.title}
          year={film.release_date.slice(0, 4)}
          id={film.id}
          image_id={film.poster_path}
          genres={findGenre(film.genre_ids)}
          clickFilm={clickFilm}
          match={match}
        />
      ),
    );
  });

  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={loadMore}
      hasMore={() => (true)}
      loader={
                <div className="loader" key={0}>
          Loading ...
</div>
      }
    >
      <div className="list">{movies}</div>
    </InfiniteScroll>
  );
};

export default FilmList;
