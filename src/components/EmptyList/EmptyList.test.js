import React from 'react';
import EmptyList from './EmptyList';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";

describe("EmptyList component:", () => {
  it("should render EmptyList component", () => {
    const component = shallow(<EmptyList/>);
    expect(toJson(component)).toMatchSnapshot();
  })
});
