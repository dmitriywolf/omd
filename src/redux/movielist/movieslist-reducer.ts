import {GET_MOVIES_LIST, GET_MOVIES_LIST_LOADING} from "./movieslist-types";

interface MoviesListState {
  moviesList: any[],
  movieListIsLoading: boolean,
}

interface MoviesListActions {
  type: string,
  payload?: any
}

const initialState: MoviesListState = {
  moviesList: [],
  movieListIsLoading: false
};

export default function moviesListReducer(state = initialState, action: MoviesListActions): MoviesListState {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return {...state, movieListIsLoading: false, moviesList: action.payload};
    case GET_MOVIES_LIST_LOADING:
      return {...state, movieListIsLoading: true};
    default:
      return state;
  }
}
