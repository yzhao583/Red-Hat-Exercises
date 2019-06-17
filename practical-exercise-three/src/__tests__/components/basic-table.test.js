import React from "react";
import { shallow } from "enzyme";

import BasicTable from "../../components/basic-table";

describe("BasicTable tests", () => {
  var fakeTitle, fakeData, fakeClassName;

  beforeEach(() => {
    //prepare fake data
    fakeTitle = "general";
    fakeData = [
      {
        header: "ID:",
        content: 1,
        key: "id"
      },
      {
        header: "Name:",
        content: "abc",
        key: "name"
      },
      {
        header: "Username:",
        content: "user1",
        key: "username"
      },
      {
        header: "Email:",
        content: "user1@gmail.com",
        key: "email"
      },
      {
        header: "Phone:",
        content: 1234455,
        key: "phone"
      },
      {
        header: "Website:",
        content: "user1.abc.com",
        key: "website"
      }
    ];
    fakeClassName = "no-border";
  });

  it("renders BasicTable correctly", () => {
    const wrapper = shallow(<BasicTable title={fakeTitle} data={fakeData} className={fakeClassName} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find("ui fixed selectable very basic compact table")).toBeDefined();
    expect(wrapper.find("TableRow")).toHaveLength(fakeData.length);
    expect(wrapper.find("h3").text()).toBe("general");
    expect(wrapper.find(".no-border")).toBeDefined();
  });

});
