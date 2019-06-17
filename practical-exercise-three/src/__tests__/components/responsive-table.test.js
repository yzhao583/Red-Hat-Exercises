import React from "react";
import { shallow } from "enzyme";

import ResponsiveTable from "../../components/responsive-table";

describe("ResponsiveTable tests", () => {
  var fakeHeaders, fakeData;

  beforeEach(() => {
    //prepare fake data
    fakeHeaders = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Username",
        accessor: "username"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Address",
        accessor: "address"
      }
    ];

    fakeData = [{
        name: "user",
        username: "user1",
        email: "user1@gmail.com",
        address: "address1"
    }]
  });

  it("renders ResponsiveTable correctly", () => {
    const wrapper = shallow(<ResponsiveTable headers={fakeHeaders} data={fakeData}/>);

    // Expect the wrapper object to be defined
    expect(wrapper.find("ReactTable")).toBeDefined();
    expect(wrapper.find({data: {}})).toHaveLength(fakeData.length);
    
  });
});
