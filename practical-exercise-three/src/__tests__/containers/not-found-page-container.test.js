import React from "react";
import { shallow } from "enzyme";

import NotFoundPage from "../../containers/not-found-page-container";

describe("ResponsiveTable tests", () => {

  it("renders NotFoundPage correctly", () => {
    const wrapper = shallow(<NotFoundPage />);

    // Expect the wrapper object to be defined
    expect(wrapper.find("Segment")).toBeDefined();
    expect(wrapper.find("p").text()).toBe("We are sorry but the page you are looking for does not exist.");
    expect(wrapper.find("Link")).toBeDefined();
    expect(wrapper.find({to: "/user"})).toBeDefined();
    
  });
});
