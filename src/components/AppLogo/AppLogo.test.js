import React from 'react';
import AppLogo from './AppLogo';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";

describe("AppLogo component:", () => {
  it("should render AppLogo component", () => {
    const component = shallow(<AppLogo/>);
    expect(toJson(component)).toMatchSnapshot();
  })
});
