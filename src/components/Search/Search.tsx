import React, {useState} from 'react';
import './Search.css';
import {loadMovies} from '../../redux/movielist/operations';
import {useDispatch} from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  interface HandleNameChangeInterface {
    target: HTMLInputElement;
  }

  function onSubmitSearch(e: React.SyntheticEvent): void {
    e.preventDefault();
    dispatch(loadMovies(title, year))
  }

  function changeTitle(e: HandleNameChangeInterface): void {
    setTitle(e.target.value)
  }

  function changeYear(e: HandleNameChangeInterface): void {
    setYear(e.target.value)
  }

  return (
    <div className="search">
      <div className="container">
        <h2>Search movies</h2>

        <form name="search_form" className="col s12" onSubmit={onSubmitSearch}>
          <div className="row">
            <div className="input-field col s4">
              <input id="title" name="title" type="text" className="validate" required
                     onChange={changeTitle}
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="input-field col s2">
              <input id="year" name="year" type="number" minLength={1900} className="validate"
                     onChange={changeYear}
              />
              <label htmlFor="year">Year</label>
            </div>
          </div>
          <button
            className="search__button"
            type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  )
};

export default Search;
