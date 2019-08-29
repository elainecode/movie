import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Film from '../Film';
import './FilmList.css';

const FilmList = ({ films, findGenre, clickFilm, loadMore }) => {
  const movies = [];

  films.map(film => {
    movies.push(
      <Film
        key={film.id}
        title={film.title}
        year={film.release_date.slice(0, 4)}
        id={film.id}
        image_id={film.poster_path || film.backdrop_path}
        genres={findGenre(film.genre_ids)}
        clickFilm={clickFilm}
      />,
    );
  });

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore
      loader={ <div className="loader" key={0}>
          Loading ...
</div>
       }
    >
      <div className="list">{movies}</div>
    </InfiniteScroll>
  );
};

export default FilmList;
