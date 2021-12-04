import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AppHeader from "../AppHeader";
import Search from "../Search";
import About from '../About';
import MovieList from "../MovieList";
import EmptyList from "../EmptyList";
import Movie from '../Movie';
import './App.css';
import {useSelector} from "react-redux";
import {getMoviesList} from '../../redux/movielist/selectors';

const App = () => {
  const movies = useSelector(getMoviesList);

  return (
    <>
      <Router>
        <AppHeader/>
        <Switch>
          <Route path='/home' exact render={() => {
            return (
              <div>
                <Search/>
                {movies.length ? <MovieList movies={movies}/> : <EmptyList/>}
              </div>
            );
          }}
          />
          <Route path='/about' component={About}/>
          <Route path='/movies/:id' render={({match}) => <Movie id={match.params.id}/>}/>
        </Switch>
      </Router>
    </>
  );

};

export default App;

