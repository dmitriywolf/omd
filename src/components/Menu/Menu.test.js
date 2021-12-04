import React from 'react';
import Menu from './Menu';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";

describe("Menu component:", () => {
  it("should render Menu component", () => {
    const component = shallow(<Menu/>);
    expect(toJson(component)).toMatchSnapshot();
  })
});
