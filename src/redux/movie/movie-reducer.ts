import {GET_MOVIE_LOADING, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR} from "./movie-types";

interface MovieState {
  movie: any[],
  movieIsLoading: boolean,
  error: null | string
}

interface MovieActions {
  type: string,
  payload?: any
}

const initialState: MovieState = {
  movieIsLoading: false,
  movie: [],
  error: null
};

export default function movieReducer(state = initialState, action: MovieActions): MovieState {
  switch (action.type) {
    case GET_MOVIE_LOADING:
      return {...state, movieIsLoading: true};
    case GET_MOVIE_SUCCESS:
      return {...state, movieIsLoading: false, movie: action.payload};
    case GET_MOVIE_ERROR:
      return {...state, movieIsLoading: false, error: action.payload};
    default:
      return state;
  }
}
