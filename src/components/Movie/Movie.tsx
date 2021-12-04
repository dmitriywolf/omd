import React, {useEffect} from 'react';
import './Movie.css';
import {useDispatch, useSelector} from "react-redux";
import {loadMovie} from '../../redux/movie/operations';
import {getMovie} from "../../redux/movie/selectors";


type CompProps = {
  id: string
}

const Movie: React.FC<CompProps> = ({id}) => {
  const dispatch = useDispatch();
  const movie = useSelector(getMovie);

  useEffect(() => {
    dispatch(loadMovie(id))
  }, [id]);

  if (movie.length === 0 || movie.Response === 'False') {
    return <div className="container"><h1>Loading data, please check your ID...</h1></div>
  } else {
    const {Title, Year, Runtime, Director, Writer, Actors, Plot, Country, Awards, Poster, imdbRating, Production} = movie;
    return (
      <div className="movie__wrap">
        <div className="container">
          <div className="movie">
            <div className="movie__content-wrap">
              <div className="movie__content">
                <h3 className="movie__title">{Title}</h3>
                <p><span>Year:</span> {Year}</p>
                <p><span>Director:</span> {Director}</p>
                <p><span>Writer:</span> {Writer}</p>
                <p><span>Actors:</span> {Actors}</p>
                <p><span>Country:</span> {Country}</p>
                <p><span>Awards:</span> {Awards}</p>
                <p><span>imdbRating:</span> {imdbRating}</p>
                <p><span>Runtime:</span> {Runtime}</p>
                <p><span>Production:</span> {Production}</p>
              </div>
              <div className="movies__img">
                <img src={Poster} alt={Title}/>
              </div>
            </div>
            <p className="movie__plot">
              {Plot}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Movie;





