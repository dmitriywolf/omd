import {GET_MOVIES_LIST, GET_MOVIES_LIST_LOADING} from './movieslist-types';

export const getMoviesList = (movies: any[]) => ({
  type: GET_MOVIES_LIST,
  payload: movies
});

export const getMovieListLoading = ({
  type: GET_MOVIES_LIST_LOADING
});
