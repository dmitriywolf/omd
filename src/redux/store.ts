import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import movieReducer from "./movie/movie-reducer";
import moviesListReducer from "./movielist/movieslist-reducer";

const reducer = combineReducers({
  movie: movieReducer,
  moviesList: moviesListReducer
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
