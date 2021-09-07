import {GET_MOVIE_LOADING, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR} from "./movie-types";

export const getMovieSuccess = (movie: any[]) => ({
  type: GET_MOVIE_SUCCESS,
  payload: movie
});

export const getMovieError = (error: (null | string)) => ({
  type: GET_MOVIE_ERROR,
  payload: error
});

export const getMovieLoading = ({
  type: GET_MOVIE_LOADING
});
