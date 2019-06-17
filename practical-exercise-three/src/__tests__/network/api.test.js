import Api from "../../network/api";

describe("Api tests", () => {
  //TODO api call should not access server
  it("getUsers should return data correctly", () => {
    expect.assertions(1);
    return expect(Api.getUsers()).resolves.toHaveLength(10);
  });

  it("getUser should return data correctly, user id is 1", () => {
    expect.assertions(1);
    return expect(Api.getUser(1)).resolves.toHaveProperty("generalInfoList");
  });
});
