import React from 'react';
import MovieItem from './MovieItem';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";


it('should render MovieItem component with props', () => {
  const component = shallow(<MovieItem imdbID="tt34444" Poster="src/img.png" Title="Title movie" Year="2008"/>);
  expect(toJson(component)).toMatchSnapshot();
});

it('should render MovieItem component without props', () => {
  const component = shallow(<MovieItem/>);
  expect(toJson(component)).toMatchSnapshot();
});

