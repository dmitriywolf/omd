import {getMoviesList, getMovieListLoading} from './movieslist-actions'
import {Dispatch} from "redux";

export const loadMovies = (title: string, year: (number | string)) => (dispatch: Dispatch) => {
  dispatch(getMovieListLoading);
  fetch(`${process.env.REACT_APP_API_KEY}&s=${title}&y=${year}`)
    .then(response => response.json())
    .then(movies => dispatch(getMoviesList(movies.Search)))
};
