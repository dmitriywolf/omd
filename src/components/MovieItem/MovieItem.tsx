import React from 'react';
import {Link} from "react-router-dom";
import './MovieItem.css';

type CompProp = {
  Title: string,
  Year: number,
  Poster: string,
  imdbID: string
}

const MovieItem: React.FC<CompProp> = ({Title, Year, Poster, imdbID}) => {
  return (
    <div className="card movie__item">
      <div className="card-image movie__item-img">
        <img src={`${Poster}`} alt={`${Title}`}/>
      </div>
      <h3 className="movie__item-title">{Title}</h3>
      <div className="movie__item-content">
        <p> {`Year: ${Year}`}</p>

        <Link to={`/movies/${imdbID}`}>
          <button className="movie__btn">Open</button>
        </Link>
      </div>
    </div>
  )
};

export default MovieItem;
