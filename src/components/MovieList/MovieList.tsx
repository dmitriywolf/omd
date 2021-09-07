import React from 'react';
import MovieItem from "../MovieItem";
import './MovieList.css';

interface ProfileType {
  Title: string,
  Year: number,
  Poster: string,
  imdbID: string
}

type CompProp = {
  movies: Array<ProfileType>
}

const MovieList: React.FC<CompProp> = ({movies}) => {
  let elements = movies.map((movie) => {
    return (
      <li key={movie.imdbID} className="col lg3 m3 s3">
        <MovieItem
          {...movie}
        />
      </li>
    )
  });

  return (
    <div className="movie__list-wrap">
      <div className="container">
        <h4>Searching results:</h4>
        <ul className="row movie__list">
          {elements}
        </ul>
      </div>
    </div>
  )
};

export default MovieList;
