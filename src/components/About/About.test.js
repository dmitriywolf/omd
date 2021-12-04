import React from 'react';
import About from './About';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import AppHeader from "../AppHeader";

describe("About component:", () => {
  it("render About component without crash", () => {
    shallow(<About/>);
  });

  it("should contain github link", () => {
    const wrap = shallow(<About/>);
    const link = <a href="https://github.com/dmitriywolf">GitHub</a>;
    expect(wrap.contains(link)).toEqual(true)
  });

  it("should render About component", () => {
    const component = shallow(<AppHeader/>);
    expect(toJson(component)).toMatchSnapshot();
  })
});


