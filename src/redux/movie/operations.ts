import {getMovieLoading, getMovieSuccess, getMovieError} from './movie-actions';
import {Dispatch} from "redux";

export const loadMovie = (id: string) => (dispatch: Dispatch) => {
  dispatch(getMovieLoading);
  fetch(`${process.env.REACT_APP_API_KEY}&i=${id}&plot=full`)
    .then(response => response.json())
    .then(movie => dispatch(getMovieSuccess(movie)))
    .catch(error => dispatch(getMovieError(error)))
};
