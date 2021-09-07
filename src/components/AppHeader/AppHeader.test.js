import React from 'react';
import AppHeader from './AppHeader';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";

describe("AppHeader component:", () => {
  it("should render AppHeader component", () => {
    const component = shallow(<AppHeader/>);
    expect(toJson(component)).toMatchSnapshot();
  })
});
